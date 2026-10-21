import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { loadGLTF } from './loader.js';
import { applyFabric, DEFMAP } from './texture.js';
import * as Store from './store.js';
import { build, getMapping, PRODUCTS } from './products.js';
export function viewer(canvas,id,{orbit=false,spin=.35,scroll=false}={}){
 const r=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
 r.setPixelRatio(Math.min(devicePixelRatio,2));r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.1;r.shadowMap.enabled=true;r.shadowMap.type=THREE.PCFSoftShadowMap;
 const sc=new THREE.Scene();sc.environment=new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(),.04).texture;
 const cam=new THREE.PerspectiveCamera(32,1,.1,100),base=new THREE.Vector3(5,2.8,6.5),look=new THREE.Vector3(0,.9,0);cam.position.copy(base);
 const BKC=Store.siteCfg(),BK=BKC.backlight===false?0:(BKC.backlightStrength??100)/100,view=Store.viewportCfg();
 const key=new THREE.DirectionalLight(0xffffff,2.4);key.position.set(3,6,4);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-4,right:4,top:4,bottom:-4});sc.add(key);
 const rim=new THREE.PointLight(0xfff1dc,12*BK,12);rim.position.set(-3,1.5,-3);sc.add(rim);
 const back=new THREE.DirectionalLight(0xfff4e6,3.2*BK);back.position.set(-2,3.5,-5);sc.add(back);
 const floor=new THREE.Mesh(new THREE.CircleGeometry(5,64),new THREE.ShadowMaterial({opacity:.22}));floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;sc.add(floor);
 const ring=new THREE.Mesh(new THREE.RingGeometry(2.3,2.33,128),new THREE.MeshBasicMaterial({color:0x9c7a4d,transparent:true,opacity:.35,side:2}));ring.rotation.x=-Math.PI/2;ring.position.y=.005;sc.add(ring);
 const ctl=new OrbitControls(cam,canvas);ctl.target.copy(look);ctl.enableDamping=true;ctl.enablePan=view.pan;ctl.enableRotate=orbit;ctl.minDistance=view.minZoom;ctl.maxDistance=view.maxZoom;ctl.maxPolarAngle=Math.PI*.49;
 const preventCardNavigation=e=>{e.preventDefault();e.stopPropagation()};
 if(view.pan)canvas.addEventListener('click',preventCardNavigation);
 let obj,grow=0,colour,glow=1,dim=[1,1,1],dead=false,fab=null;
 const tint=h=>{colour=h;fab=null;obj.userData.tints.forEach(m=>{m.map=null;m.color.set(h);m.needsUpdate=true})};
 let orig=[];const snap=()=>{orig=obj.userData.tints.map(m=>({m,c:m.color.clone(),map:m.map}))};
 const restore=()=>{orig.forEach(({m,c,map})=>{m.userData.fabTok=-1;if(m.map&&m.map!==map)m.map.dispose();m.map=map;m.color.copy(c);m.needsUpdate=true})};
 const applyFab=()=>{if(fab)applyFabric(obj.userData.tints,fab.f,fab.m)};
 const setFabric=(f,m)=>{if(!f)return;fab={f,m};applyFab()};
 const curFinishes={};
 const applyFinishes=()=>{
  if(!obj||!obj.userData)return;
  Object.entries(curFinishes).forEach(([tgt,mat])=>{
   const list=(obj.userData.finMap?.[tgt])||(tgt==='frame'?obj.userData.frames:null);
   if(!list||!list.length)return;
   if(typeof mat.mat==='string'){list.forEach(m=>{m.map=null;m.color.set(mat.mat);m.needsUpdate=true})}
   else if(Array.isArray(mat.mat)){applyFabric(list,mat.mat,mat.m)}
  });
 };
 const setFinish=(tgt,mat,m=DEFMAP)=>{const k=(tgt||'frame').toLowerCase().trim();curFinishes[k]={mat,m};applyFinishes()};
 const setFrame=h=>{setFinish('frame',h)};
 const setGlow=v=>{glow=v;obj.userData.glows.forEach(m=>m.emissiveIntensity=v*3);rim.intensity=12*v*BK};
 function set(n){fab=null;orig=[];if(obj)sc.remove(obj);
  const prod=PRODUCTS.find(p=>p.id===n),fabrics=prod?.fabrics||[],firstFabric=fabrics.find(f=>f[2]===prod?.defaults?.fabric)||fabrics[0];colour=firstFabric?.[1]||'#d4cabb';const u=Store.url('model:'+n)||Store.DATA.models?.[n];
  if(!u)obj=build(n,colour);else{obj=new THREE.Group();obj.userData={tints:[],glows:[],frames:[],finMap:{}};
   loadGLTF(u).then(gl=>{const s=gl.scene,b=new THREE.Box3().setFromObject(s),z=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3()),k=2.6/Math.max(z.x,z.y,z.z);
    s.scale.setScalar(k);s.position.set(-c.x*k,-b.min.y*k,-c.z*k);
    const nm=[],al=[],fr=[],finMap={};
    const ftypes=Store.finishTypes?Store.finishTypes():[{id:'frame',name:'Frame',target:'frame'}];
    const targets=new Set(ftypes.map(t=>(t.target||t.name||'').toLowerCase().trim()));targets.add('frame');
    s.traverse(o=>{if(o.isMesh){o.castShadow=o.receiveShadow=true;[].concat(o.material).forEach(m=>{
     const mn=(m.name||'').toLowerCase().trim();let matched=false;
     targets.forEach(tgt=>{if(tgt&&mn===tgt){(finMap[tgt]??=[]).push(m);if(tgt==='frame')fr.push(m);matched=true}});
     if(matched)return;
     if(!(m.transparent&&m.opacity<1)){al.push(m);if(mn==='tint')nm.push(m)}
    })}});
    obj.userData.tints.push(...(nm.length?nm:al));obj.userData.frames.push(...fr);obj.userData.finMap=finMap;
    obj.add(s);snap();applyFinishes();applyFab();
    if(firstFabric)setFabric(firstFabric,getMapping(n,firstFabric[2],'fabric'));
   }).catch(()=>obj.add(build(n,colour)))}
  sc.add(obj);grow=0;setGlow(glow);snap();applyFinishes();applyFab();
  Object.keys(curFinishes).forEach(k=>delete curFinishes[k]);
  prod?.finishTypes?.forEach(ft=>{const material=ft.finishes.find(m=>m[2]===prod.defaults?.[ft.id])||ft.finishes[0];if(material)setFinish(ft.target||ft.name,material,getMapping(n,material[2],ft.id))});
  if(firstFabric)setFabric(firstFabric,getMapping(n,firstFabric[2],'fabric'));
 }
 set(id);
 const size=()=>{const p=canvas.parentElement,w=p.clientWidth||1,h=p.clientHeight||1;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};
 const ro=new ResizeObserver(size);ro.observe(canvas.parentElement);
 const stage=canvas.parentElement,full=document.createElement('button');full.type='button';full.className='viewport-fullscreen';full.setAttribute('aria-label','Maximize 3D viewport');full.title='Maximize 3D viewport';full.textContent='⛶';stage.append(full);
 const toggleFull=async()=>{try{if(document.fullscreenElement===stage)await document.exitFullscreen();else await stage.requestFullscreen()}catch(e){console.error('Could not change 3D viewport fullscreen state.',e)}};
 full.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggleFull()});
 const fullChange=()=>{const active=document.fullscreenElement===stage;full.setAttribute('aria-label',active?'Exit fullscreen 3D viewport':'Maximize 3D viewport');full.title=active?'Exit fullscreen':'Maximize 3D viewport';size()};
 document.addEventListener('fullscreenchange',fullChange);
 let vis=true;const vio=new IntersectionObserver(e=>vis=e[0].isIntersecting);vio.observe(canvas);
 const m={x:0,y:0};const mv=e=>{m.x=e.clientX/innerWidth-.5;m.y=e.clientY/innerHeight-.5};addEventListener('pointermove',mv);
 let t=0,last=performance.now();
 (function loop(n){if(dead)return;requestAnimationFrame(loop);const dt=Math.min((n-last)/1000,.05);last=n;if(!vis)return;t+=dt;
  grow=Math.min(1,grow+dt*1.5);{const e=.001+(1-Math.pow(1-grow,3))*.999;obj.scale.set(dim[0]*e,dim[1]*e,dim[2]*e)}
  if(ctl)ctl.update();if(!orbit){obj.rotation.y=.6+t*spin+(scroll?scrollY*.003:0)+m.x*.9;if(!ctl){cam.position.set(base.x,base.y-m.y*.8,base.z+(scroll?scrollY*.002:0));cam.lookAt(look)}}
  r.render(sc,cam)})(last);
 return {destroy(){dead=true;ro.disconnect();vio.disconnect();removeEventListener('pointermove',mv);document.removeEventListener('fullscreenchange',fullChange);if(view.pan)canvas.removeEventListener('click',preventCardNavigation);full.remove();ctl.dispose();r.dispose();r.forceContextLoss&&r.forceContextLoss()},getModel:()=>({object:obj,dim}),setId:set,setColour:tint,setFabric,setFrame,setFinish,setGlow,setDims:(a,b,c)=>{dim=[a,b,c]}};
}
