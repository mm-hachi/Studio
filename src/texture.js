// Fabric textures and per-piece "mapping" (scale / rotation / location), modelled on Blender's Mapping node.
import * as THREE from 'three';
export const DEFMAP={sx:1,sy:1,rot:0,ox:0,oy:0,normalStrength:1};
const PBR_MAPS=['normal','roughness','metalness','ao','bump'];
const PBR_PROFILES={
 fabric:{roughness:.88,metalness:0,normal:.16,detail:4},
 leather:{roughness:.48,metalness:0,normal:.2,detail:2},
 velvet:{roughness:.82,metalness:0,normal:.24,detail:8},
 linen:{roughness:.9,metalness:0,normal:.26,detail:10},
 wood:{roughness:.62,metalness:0,normal:.18,detail:3},
 metal:{roughness:.32,metalness:.82,normal:.1,detail:5},
 default:{roughness:.7,metalness:0,normal:.12,detail:2}
};
const pbrTypes={
 normal:'normalMap',roughness:'roughnessMap',metalness:'metalnessMap',ao:'aoMap',bump:'bumpMap'
};
const pbrProfiles=Object.fromEntries(Object.entries(PBR_PROFILES).map(([name,profile])=>[name,{
 ...profile,normalMap:createPbrTexture('normal',profile),roughnessMap:createPbrTexture('roughness',profile),
 ...(name==='metal'?{metalnessMap:createPbrTexture('metalness',profile)}:{})
}]));
function createPbrTexture(kind,profile){
 const size=128,canvas=document.createElement('canvas');canvas.width=canvas.height=size;
 const context=canvas.getContext('2d'),image=context.createImageData(size,size),data=image.data;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const i=(y*size+x)*4,wave=Math.sin((kind==='normal'?y:x)*Math.PI*2/profile.detail)*.5;
  const noise=(Math.random()-.5)*.045,grain=wave*.07+noise;
  if(kind==='normal'){data[i]=128+grain*255;data[i+1]=128-grain*255;data[i+2]=255}
  else{const base=kind==='metalness'?210:220;data[i]=data[i+1]=data[i+2]=base+grain*255}
  data[i+3]=255;
 }
 context.putImageData(image,0,0);
 const texture=new THREE.CanvasTexture(canvas);
 texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(3,3);
 texture.colorSpace=THREE.NoColorSpace;texture.needsUpdate=true;return texture;
}
const pbrImages=new Map();
const loadPbrImage=src=>{
 if(!pbrImages.has(src))pbrImages.set(src,new THREE.TextureLoader().loadAsync(src));
 return pbrImages.get(src);
};
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
export function applyPbrMaps(mats,material,useDefaults=material?.[7]!==false,mapping=DEFMAP){
 mapping={...DEFMAP,...(mapping||{})};
 const type=String(material?.[5]||'').toLowerCase(),profile=pbrProfiles[type]||pbrProfiles.default;
 const maps=material?.[6]||{};
 mats.forEach(m=>{
  if(!m||!m.userData)return;
  m.userData.pbrBase??={roughness:m.roughness,metalness:m.metalness,normalScale:m.normalScale?.clone(),
   ...Object.values(pbrTypes).reduce((base,property)=>({...base,[property]:m[property]}),{})};
  const token=(m.userData.pbrToken||0)+1;m.userData.pbrToken=token;
  if(useDefaults){
   m.roughness=profile.roughness;m.metalness=profile.metalness;
  }else{
   const base=m.userData.pbrBase;m.roughness=base.roughness;m.metalness=base.metalness;
  }
  const normalBase=m.userData.pbrBase.normalScale;
  const normalX=useDefaults?profile.normal:normalBase?.x,normalY=useDefaults?profile.normal:normalBase?.y;
  if(m.normalScale&&normalX!==undefined&&normalY!==undefined)m.normalScale.set(normalX*mapping.normalStrength,normalY*mapping.normalStrength);
  PBR_MAPS.forEach(key=>{
   const property=pbrTypes[key],src=maps[key],fallback=useDefaults?profile[property]:m.userData.pbrBase[property];
   const assign=texture=>{
    if(m.userData.pbrToken!==token)return;
    const old=m[property];
    if(old&&old!==m.userData.pbrBase[property])old.dispose();
    m[property]=texture===m.userData.pbrBase[property]?texture:texture?.clone()||null;
    if(m[property]){
     m[property].wrapS=m[property].wrapT=THREE.RepeatWrapping;
     m[property].repeat.set(mapping.sx,mapping.sy);m[property].rotation=mapping.rot*Math.PI/180;
     m[property].offset.set(mapping.ox,mapping.oy);m[property].colorSpace=THREE.NoColorSpace;m[property].needsUpdate=true;
    }
    m.needsUpdate=true;
   };
   if(src){
    loadPbrImage(src).then(assign).catch(error=>console.error(`Could not load ${key} map for ${material?.[0]||'material'}.`,error));
   }else assign(fallback);
  });
 });
}
