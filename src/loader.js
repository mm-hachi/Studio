// One GLTF loader for the whole site: supports Draco and Meshopt compressed models.
// Draco decoder files are served from libs/draco/ (copied from three's examples).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
let draco;
export function makeLoader(){draco??=new DRACOLoader().setDecoderPath('libs/draco/');const l=new GLTFLoader();l.setDRACOLoader(draco);l.setMeshoptDecoder(MeshoptDecoder);return l}

// Route relative model paths to GitHub's LFS media CDN when on GitHub Pages
export function resolveModelUrl(url){
 if(!url||typeof url!=='string')return url;
 if(/^(blob:|data:|https?:\/\/)/i.test(url))return url;
 let owner='',repo='',branch='main';
 try{
  const c=JSON.parse(localStorage.getItem('dekara-gh')||'{}');
  owner=c.owner||'';repo=c.repo||'';branch=c.branch||'main';
 }catch{}
 if(!owner&&/\.github\.io$/.test(location.hostname)){
  owner=location.hostname.split('.')[0];
  repo=repo||(location.pathname.split('/')[1]||location.hostname);
 }
 const clean=url.replace(/^\.?\//,'');
 if(owner&&repo&&/\.(glb|gltf|usdz)$/i.test(clean)){
  return `https://media.githubusercontent.com/media/${owner}/${repo}/${branch}/${clean}`;
 }
 return url;
}

export function loadGLTF(url,onProgress){
 return new Promise((res,rej)=>{
  const resolved=resolveModelUrl(url);
  const l=makeLoader();
  if(resolved!==url){
   l.load(resolved,res,onProgress,err=>{
    console.warn('LFS media load failed, trying direct path:',err);
    l.load(url,res,onProgress,rej);
   });
  }else{
   l.load(url,res,onProgress,rej);
  }
 });
}

// Measure a model file in centimetres [width, depth, height]. Assumes metres, or millimetres if the model is huge.
export async function measureGLB(file){const u=URL.createObjectURL(file);try{const g=await loadGLTF(u),s=new THREE.Box3().setFromObject(g.scene).getSize(new THREE.Vector3()),k=Math.max(s.x,s.y,s.z)>20?.001:1;return [s.x,s.z,s.y].map(v=>Math.max(1,Math.round(v*k*100)))}finally{URL.revokeObjectURL(u)}}
