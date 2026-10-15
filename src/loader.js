// One GLTF loader for the whole site: supports Draco and Meshopt compressed models.
// Draco decoder files are served from libs/draco/ (copied from three's examples).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

let draco;
export function makeLoader(){draco??=new DRACOLoader().setDecoderPath('libs/draco/');const l=new GLTFLoader();l.setDRACOLoader(draco);l.setMeshoptDecoder(MeshoptDecoder);return l}
export const loadGLTF=(url,onProgress)=>new Promise((res,rej)=>makeLoader().load(url,res,onProgress,rej));

// Measure a model file in centimetres [width, depth, height]. Assumes metres, or millimetres if the model is huge.
export async function measureGLB(file){const u=URL.createObjectURL(file);try{const g=await loadGLTF(u),s=new THREE.Box3().setFromObject(g.scene).getSize(new THREE.Vector3()),k=Math.max(s.x,s.y,s.z)>20?.001:1;return [s.x,s.z,s.y].map(v=>Math.max(1,Math.round(v*k*100)))}finally{URL.revokeObjectURL(u)}}
