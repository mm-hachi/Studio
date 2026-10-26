import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const apiUrl = (base, path) => `${base.replace(/\/+$/, '')}/api/v1${path}`;

async function getModelUrl({ apiBase, modelId, modelUrl }) {
  if (modelUrl) return modelUrl;
  if (!apiBase || !modelId) {
    throw new Error('Provide either modelUrl or both apiBase and modelId.');
  }

  const response = await fetch(apiUrl(apiBase, `/models/${encodeURIComponent(modelId)}`));
  if (!response.ok) throw new Error(`Could not find model "${modelId}" (HTTP ${response.status}).`);
  const model = await response.json();
  return model.modelUrl;
}

function disposeObject(object, managedTextures, originalMaps) {
  const disposedMaterials = new Set();
  object?.traverse(child => {
    if (!child.isMesh) return;
    child.geometry.dispose();
    for (const material of [].concat(child.material || [])) {
      if (disposedMaterials.has(material)) continue;
      disposedMaterials.add(material);
      if (originalMaps.has(material)) material.map = originalMaps.get(material);
      for (const value of Object.values(material)) {
        if (value?.isTexture) managedTextures.delete(value);
      }
      for (const value of Object.values(material)) {
        if (value?.isTexture) value.dispose();
      }
      material.dispose();
    }
  });
}

export async function mount(options = {}) {
  const container = typeof options.container === 'string'
    ? document.querySelector(options.container)
    : options.container;
  if (!(container instanceof HTMLElement)) {
    throw new Error('The container must be an existing element or a CSS selector for one.');
  }
  if (typeof ResizeObserver === 'undefined') {
    throw new Error('This browser does not support ResizeObserver, which the 3D viewer requires.');
  }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', options.label || 'Interactive 3D model. Drag to rotate and scroll to zoom.');
  container.append(canvas);

  let renderer;
  let environment;
  let controls;
  let resizeObserver;
  let animationFrame = 0;
  let model;
  let arSession;
  let hitTestSource;
  let arPlaced = false;
  let modelHomePosition = new THREE.Vector3();
  let modelHomeQuaternion = new THREE.Quaternion();
  let modelHomeScale = new THREE.Vector3(1, 1, 1);
  let modelARPosition = new THREE.Vector3();
  let modelARQuaternion = new THREE.Quaternion();
  let modelARScale = new THREE.Vector3(1, 1, 1);
  const arPosition = new THREE.Vector3();
  const arQuaternion = new THREE.Quaternion();
  const arReticleScale = new THREE.Vector3();
  const arOffset = new THREE.Vector3();
  let destroyed = false;
  let loading = 0;
  let color = options.color || null;
  const listeners = new Map();
  const managedTextures = new Set();
  const originalMaps = new Map();
  const textureLoader = new THREE.TextureLoader();

  const emit = (name, detail) => {
    for (const listener of listeners.get(name) || []) listener(detail);
  };

  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.xr.enabled = true;
    renderer.xr.setReferenceSpaceType('local');

    const scene = new THREE.Scene();
    const reticle = new THREE.Mesh(
      new THREE.RingGeometry(0.12, 0.16, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0x777b61, side: THREE.DoubleSide })
    );
    reticle.rotation.x = -Math.PI / 2;
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);
    const pmrem = new THREE.PMREMGenerator(renderer);
    environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = environment;
    pmrem.dispose();

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(5, 2.8, 6.5);
    const target = new THREE.Vector3(0, 0.9, 0);
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(3, 6, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);

    const fill = new THREE.PointLight(0xfff1dc, 12, 12);
    fill.position.set(-3, 1.5, -3);
    scene.add(fill);

    const back = new THREE.DirectionalLight(0xfff4e6, 3.2);
    back.position.set(-2, 3.5, -5);
    scene.add(back);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(5, 64),
      new THREE.ShadowMaterial({ opacity: 0.22 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    controls = new OrbitControls(camera, canvas);
    controls.target.copy(target);
    controls.enableDamping = true;
    controls.enablePan = options.pan === true;
    controls.enableRotate = options.orbit !== false;
    controls.minDistance = options.minZoom ?? 2;
    controls.maxDistance = options.maxZoom ?? 12;
    controls.maxPolarAngle = Math.PI * 0.49;

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    if (options.dracoDecoderPath) {
      const draco = new DRACOLoader().setDecoderPath(options.dracoDecoderPath);
      loader.setDRACOLoader(draco);
    }

    const setModel = async url => {
      if (typeof url !== 'string' || !url.trim()) throw new Error('A model URL is required.');
      const request = ++loading;
      try {
        const gltf = await loader.loadAsync(url);
        if (destroyed || request !== loading) {
          disposeObject(gltf.scene, managedTextures, originalMaps);
          return;
        }

        const nextModel = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(nextModel);
        const size = bounds.getSize(new THREE.Vector3());
        const center = bounds.getCenter(new THREE.Vector3());
        const largestSide = Math.max(size.x, size.y, size.z);
        if (!Number.isFinite(largestSide) || largestSide <= 0) {
          disposeObject(nextModel, managedTextures, originalMaps);
          throw new Error('The model has no measurable 3D geometry.');
        }
        const arUnitScale = options.arScale ?? 1;
        if (typeof arUnitScale !== 'number' || !Number.isFinite(arUnitScale) || arUnitScale <= 0) {
          disposeObject(nextModel, managedTextures, originalMaps);
          throw new Error('AR scale must be a positive number.');
        }
        modelARPosition.set(-center.x * arUnitScale, -bounds.min.y * arUnitScale, -center.z * arUnitScale);
        modelARQuaternion.copy(nextModel.quaternion);
        modelARScale.setScalar(arUnitScale);
        const scale = 2.6 / largestSide;
        nextModel.scale.setScalar(scale);
        nextModel.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale);
        modelHomePosition.copy(nextModel.position);
        modelHomeQuaternion.copy(nextModel.quaternion);
        modelHomeScale.copy(nextModel.scale);
        nextModel.traverse(child => {
          if (!child.isMesh) return;
          child.castShadow = true;
          child.receiveShadow = true;
          if (color) {
            for (const material of [].concat(child.material || [])) material.color?.set(color);
          }
        });

        if (model) {
          scene.remove(model);
          disposeObject(model, managedTextures, originalMaps);
          managedTextures.clear();
          originalMaps.clear();
        }
        model = nextModel;
        scene.add(model);
        emit('modelchange', { url });
        emit('ready', { url });
      } catch (error) {
        if (!destroyed && request === loading) emit('error', error);
        throw error;
      }
    };

    renderer.setAnimationLoop((time, frame) => {
      if (destroyed) return;
      if (frame && hitTestSource && !arPlaced) {
        const results = frame.getHitTestResults(hitTestSource);
        if (results.length) {
          reticle.matrix.fromArray(results[0].getPose(renderer.xr.getReferenceSpace()).transform.matrix);
          reticle.matrixWorldNeedsUpdate = true;
          reticle.visible = true;
        } else {
          reticle.visible = false;
        }
      }
      if (!renderer.xr.isPresenting) {
        controls.update();
        if (options.autoRotate) model && (model.rotation.y += 0.003);
      }
      renderer.render(scene, camera);
    });

    const enterQuickLook = arUrl => {
      const link = document.createElement('a');
      link.rel = 'ar';
      link.href = arUrl;
      link.append(document.createElement('img'));
      link.firstChild.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
      link.style.display = 'none';
      document.body.append(link);
      link.click();
      link.remove();
      return { mode: 'quick-look' };
    };

    const viewInAR = async ({ arUrl } = {}) => {
      if (destroyed) throw new Error('The 3D viewer has been closed.');
      if (renderer.xr.isPresenting) return { mode: 'webxr' };

      if (!navigator.xr?.requestSession) {
        if (arUrl) return enterQuickLook(arUrl);
        throw new Error('Augmented reality is not available in this browser. Open this product on an AR-capable phone, or add a USDZ model for iPhone and iPad.');
      }

      let session;
      try {
        const sessionPromise = navigator.xr.requestSession('immersive-ar', {
          requiredFeatures: ['hit-test'],
          optionalFeatures: ['dom-overlay', 'local-floor'],
          domOverlay: { root: container }
        });
        session = await sessionPromise;
        await renderer.xr.setSession(session);
        arSession = session;
        arPlaced = false;
        reticle.visible = false;
        model.visible = false;
        floor.visible = false;
        key.visible = false;
        fill.visible = false;
        back.visible = false;
        controls.enabled = false;

        session.addEventListener('select', () => {
          if (!reticle.visible || !model) return;
          reticle.matrix.decompose(arPosition, arQuaternion, arReticleScale);
          model.position.copy(arPosition);
          model.quaternion.copy(arQuaternion);
          arOffset.copy(modelARPosition).applyQuaternion(arQuaternion);
          model.position.add(arOffset);
          model.scale.copy(modelARScale);
          model.visible = true;
          arPlaced = true;
          reticle.visible = false;
        });
        emit('arstart', { mode: 'webxr' });
        session.addEventListener('end', () => {
          hitTestSource?.cancel();
          hitTestSource = null;
          arSession = null;
          arPlaced = false;
          reticle.visible = false;
          if (model) {
            model.visible = true;
            model.position.copy(modelHomePosition);
            model.quaternion.copy(modelHomeQuaternion);
            model.scale.copy(modelHomeScale);
          }
          floor.visible = true;
          key.visible = true;
          fill.visible = true;
          back.visible = true;
          controls.enabled = true;
          emit('arend', { mode: 'webxr' });
        }, { once: true });

        const viewerSpace = await session.requestReferenceSpace('viewer');
        hitTestSource = await session.requestHitTestSource({ space: viewerSpace });
        return { mode: 'webxr' };
      } catch (error) {
        if (session && !renderer.xr.isPresenting) {
          await session.end().catch(() => {});
        }
        if (error.name === 'NotSupportedError') {
          if (arUrl) return enterQuickLook(arUrl);
          throw new Error('This browser or device does not support immersive AR. Try an AR-capable Android phone, or provide a USDZ model for iPhone and iPad.');
        }
        throw error;
      }
    };

    const initialModelUrl = await getModelUrl(options);
    await setModel(initialModelUrl);

    return {
      setModel,
      viewInAR,
      setColor(hex) {
        if (typeof hex !== 'string' || !/^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(hex)) {
          throw new Error('Color must be a 3- or 6-digit hexadecimal value, such as #c9a97a.');
        }
        color = hex;
        model?.traverse(child => {
          if (child.isMesh) {
            for (const material of [].concat(child.material || [])) material.color?.set(hex);
          }
        });
      },
      async setMaterial(target, { color: materialColor, textureUrl, repeat = 1, rotation = 0 } = {}) {
        if (typeof target !== 'string' || !target.trim()) {
          throw new Error('Provide the exact material name from the 3D model.');
        }
        if (!materialColor && !textureUrl) {
          throw new Error('Provide a color, a textureUrl, or both.');
        }
        if (materialColor && (typeof materialColor !== 'string' || !/^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(materialColor))) {
          throw new Error('Material color must be a 3- or 6-digit hexadecimal value, such as #c9a97a.');
        }
        if (typeof repeat !== 'number' || !Number.isFinite(repeat) || repeat <= 0) {
          throw new Error('Texture repeat must be a positive number.');
        }
        if (typeof rotation !== 'number' || !Number.isFinite(rotation)) {
          throw new Error('Texture rotation must be a number of degrees.');
        }

        const targetModel = model;
        if (!targetModel) throw new Error('Load a 3D model before changing its materials.');
        const normalizedTarget = target.trim().toLowerCase();
        const materials = new Set();
        targetModel.traverse(child => {
          if (!child.isMesh) return;
          for (const material of [].concat(child.material || [])) {
            if (normalizedTarget === '*' || (material.name || '').trim().toLowerCase() === normalizedTarget) {
              materials.add(material);
            }
          }
        });
        if (materials.size === 0) throw new Error(`The model has no material named "${target}".`);

        let texture;
        if (textureUrl) {
          if (typeof textureUrl !== 'string' || !textureUrl.trim()) {
            throw new Error('Texture URL must be a non-empty web address.');
          }
          texture = await textureLoader.loadAsync(textureUrl);
          if (destroyed || model !== targetModel) {
            texture.dispose();
            throw new Error('The model changed before the material texture finished loading.');
          }
        }

        for (const material of materials) {
          if (materialColor) material.color?.set(materialColor);
          if (texture) {
            if (!originalMaps.has(material)) originalMaps.set(material, material.map);
            if (managedTextures.delete(material.map)) material.map.dispose();
            const map = texture.clone();
            map.colorSpace = THREE.SRGBColorSpace;
            map.wrapS = map.wrapT = THREE.RepeatWrapping;
            map.repeat.set(repeat, repeat);
            map.rotation = rotation * Math.PI / 180;
            map.needsUpdate = true;
            material.map = map;
            material.color?.set(materialColor || '#ffffff');
            material.needsUpdate = true;
            managedTextures.add(map);
          }
        }
        if (texture) texture.dispose();
      },
      on(name, callback) {
        if (typeof callback !== 'function') throw new Error('Event listeners must be functions.');
        if (!listeners.has(name)) listeners.set(name, new Set());
        listeners.get(name).add(callback);
        return () => listeners.get(name)?.delete(callback);
      },
      destroy() {
        if (destroyed) return;
        destroyed = true;
        loading++;
        renderer.setAnimationLoop(null);
        if (arSession) {
          arSession.end().catch(error => emit('error', error));
          arSession = null;
        }
        resizeObserver.disconnect();
        controls.dispose();
        if (model) disposeObject(model, managedTextures, originalMaps);
        scene.clear();
        environment.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        canvas.remove();
        listeners.clear();
      }
    };
  } catch (error) {
    destroyed = true;
    resizeObserver?.disconnect();
    controls?.dispose();
    renderer?.dispose();
    environment?.dispose();
    canvas.remove();
    throw error;
  }
}
