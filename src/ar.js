import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { USDZExporter } from 'three/addons/exporters/USDZExporter.js';
// Clone a model, size it to real-world centimetres (w,d,h) and stand it on y=0, centred. Returns null if empty.
export function fit(obj,cm){
 const ud=obj.userData;obj.userData={};const c=obj.clone(true);obj.userData=ud;c.scale.set(1,1,1);c.position.set(0,0,0);c.rotation.set(0,0,0);
 const w=new THREE.Group(),out=new THREE.Group();w.add(c);out.add(w);out.updateMatrixWorld(true);
 let b=new THREE.Box3().setFromObject(out);if(b.isEmpty())return null;const z=b.getSize(new THREE.Vector3());
 if(cm)w.scale.set(cm[0]/100/z.x,cm[2]/100/z.y,cm[1]/100/z.z);
 out.updateMatrixWorld(true);b=new THREE.Box3().setFromObject(out);const k=b.getCenter(new THREE.Vector3());w.position.set(-k.x,-b.min.y,-k.z);
 out.traverse(o=>{o.userData={}});return out;
}
export const toGLB=async o=>new Blob([await new GLTFExporter().parseAsync(o,{binary:true})],{type:'model/gltf-binary'});
export const toUSDZ=async o=>new Blob([await new USDZExporter().parse(o)],{type:'model/vnd.usdz+zip'});
export function save(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
let mv;const loadMV=()=>mv??=new Promise((res,rej)=>{const s=document.createElement('script');s.type='module';s.src='https://cdn.jsdelivr.net/npm/@google/model-viewer@3.4.0/dist/model-viewer.min.js';s.onload=res;s.onerror=()=>rej(new Error('Could not load the AR viewer. Check your internet connection.'));document.head.append(s)});
// Modal with a rotating model, a "View in your room" AR button (WebXR / Scene Viewer / Quick Look) and GLB/USDZ downloads.
export async function openAR(obj,title,base){
 if(!obj){alert('The model is still loading. Please try again in a moment.');return}
 const m=document.createElement('div');m.className='armodal';
 m.innerHTML='<div class="arbox" role="dialog" aria-modal="true"><button class="arx" aria-label="Close">✕</button><h3></h3><div class="arv"><p class="st-note">Preparing your 3D model…</p></div><p class="st-note" id="arnote"></p><div class="hero-ctl" style="margin-top:1rem"><button class="btn ghost" data-f="glb">Download GLB</button><button class="btn ghost" data-f="usdz">Download USDZ</button></div></div>';
 m.querySelector('h3').textContent=title;document.body.append(m);let url='';
 const close=()=>{if(url)URL.revokeObjectURL(url);m.remove()};m.querySelector('.arx').onclick=close;m.onclick=e=>{if(e.target===m)close()};
 try{const [glb,usdz]=await Promise.all([toGLB(obj),toUSDZ(obj).catch(()=>null)]);await loadMV();url=URL.createObjectURL(glb);
  const v=document.createElement('model-viewer');
  Object.entries({src:url,alt:title,ar:'','ar-modes':'webxr scene-viewer quick-look','ar-scale':'fixed','camera-controls':'','auto-rotate':'','shadow-intensity':'1'}).forEach(([k,x])=>v.setAttribute(k,x));
  v.style.cssText='width:100%;height:100%';const b=document.createElement('button');b.slot='ar-button';b.className='btn';b.textContent='View in your room';b.style.cssText='position:absolute;bottom:1rem;left:50%;transform:translateX(-50%)';v.append(b);
  m.querySelector('.arv').replaceChildren(v);
  m.querySelector('#arnote').textContent='On a phone or tablet, tap "View in your room" to place it at real size in your space (needs HTTPS). On a computer you can rotate it here or download the files.';
  m.querySelector('[data-f=glb]').onclick=()=>save(glb,base+'.glb');const u=m.querySelector('[data-f=usdz]');if(usdz)u.onclick=()=>save(usdz,base+'.usdz');else u.hidden=true;
 }catch(e){m.querySelector('.arv').innerHTML='';m.querySelector('#arnote').textContent=e.message||'Could not prepare the 3D model.'}
}
