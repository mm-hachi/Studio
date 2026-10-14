// Fabric textures and per-piece "mapping" (scale / rotation / location), modelled on Blender's Mapping node.
import * as THREE from 'three';
export const DEFMAP={sx:1,sy:1,rot:0,ox:0,oy:0};
// Procedural plain-weave swatch in the fabric's colour (used when no texture image is uploaded).
export function weaveCanvas(hex,size=512){const c=document.createElement('canvas');c.width=c.height=size;const x=c.getContext('2d');x.fillStyle=hex;x.fillRect(0,0,size,size);
 const n=64,s=size/n;for(let i=0;i<n;i++)for(let j=0;j<n;j++){if((i+j)%2===0){x.fillStyle='rgba(255,255,255,.10)';x.fillRect(i*s,j*s+s*.12,s,s*.76)}else{x.fillStyle='rgba(0,0,0,.12)';x.fillRect(i*s+s*.12,j*s,s*.76,s)}}
 const d=x.getImageData(0,0,size,size),a=d.data;for(let k=0;k<a.length;k+=4){const r=(Math.random()-.5)*12;a[k]+=r;a[k+1]+=r;a[k+2]+=r}x.putImageData(d,0,0);return c}
const cache=new Map();
const base=f=>{const k=f[2]+'|'+f[1]+'|'+(f[3]||'');if(!cache.has(k))cache.set(k,f[3]?new THREE.TextureLoader().loadAsync(f[3]):Promise.resolve(new THREE.CanvasTexture(weaveCanvas(f[1],512))));return cache.get(k)};
let tok=0;
// Apply fabric f (tuple [name,hex,id,image,...]) with mapping m to a list of materials.
export async function applyFabric(mats,f,m){m={...DEFMAP,...(m||{})};const my=++tok;mats.forEach(x=>{if(x)x.userData.fabTok=my});
 let b;try{b=await base(f)}catch{mats.forEach(x=>{if(x&&x.color&&x.userData.fabTok===my){x.map=null;x.color.set(f[1]);x.needsUpdate=true}});return}
 mats.forEach(x=>{if(!x||!('map' in x)||x.userData.fabTok!==my)return;const t=b.clone();t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;
  t.repeat.set(m.sx,m.sy);t.rotation=m.rot*Math.PI/180;t.offset.set(m.ox,m.oy);t.anisotropy=8;t.needsUpdate=true;
  if(x.map&&x.map!==b)x.map.dispose();x.map=t;x.color.set('#ffffff');x.needsUpdate=true})}
