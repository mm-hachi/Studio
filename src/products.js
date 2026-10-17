import * as Store from './store.js';
import { CATS, BASE, FEATURED, FABRICS as FBASE, FINISHES as BASE_FINISHES, DEFAULT_FINISH_TYPES, FABRIC_DESC } from './catalog.js';
import { buildKind } from './builders.js';
import { DEFMAP } from './texture.js';
export { CATS, FEATURED, DEFMAP };
const D=Store.DATA,C=Store.cfg,slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-');
const gone=new Set([...(D.deleted||[]),...(C.deleted||[])]),goneF=new Set([...(D.deletedFabrics||[]),...(C.deletedFabrics||[])]);

// Built-in materials: original fabrics + wood finish materials
const BUILTIN_FINISH_MATS=BASE_FINISHES.map(([n,h])=>({id:slug(n),name:n,hex:h,type:'Wood',desc:`${n} wood finish.`}));
const BUILTIN_FABRICS=FBASE.map(([n,h])=>({id:slug(n),name:n,hex:h,type:'Fabric',desc:FABRIC_DESC[n]||''}));

// Materials library: built-in fabrics & frame materials + data/site.json + admin additions, minus deletions, with edits applied.
const ml=[...BUILTIN_FABRICS,...BUILTIN_FINISH_MATS,...(D.fabrics||[]),...(D.materials||[]),...(C.addedFabrics||[])].filter(f=>!goneF.has(f.id)).map(f=>({type:f.type||'Fabric',desc:'',...f,...(D.fabricEdits?.[f.id]||{}),...(C.fabricEdits?.[f.id]||{})}));
if(!ml.length)ml.push({id:'oyster',name:'Oyster',hex:'#d4cabb',type:'Fabric',desc:''});
const materialOrder=C.materialOrder??D.materialOrder??[],materialPositions=new Map(materialOrder.map((id,i)=>[id,i]));
export const MATERIAL_LIST=ml.map((f,i)=>({material:{...f,image:Store.url('fabric:'+f.id)||f.image||null},i}))
 .sort((a,b)=>(materialPositions.get(a.material.id)??Number.MAX_SAFE_INTEGER)-(materialPositions.get(b.material.id)??Number.MAX_SAFE_INTEGER)||a.i-b.i)
 .map(({material})=>material);
export const FABRIC_LIST=MATERIAL_LIST;
export const MATERIALS=MATERIAL_LIST.map(f=>[f.name,f.hex,f.id,f.image,f.desc,f.type]);
export const FABRICS=MATERIALS;

// Finish types: e.g. [{ id: 'frame', name: 'Frame', target: 'frame' }, ...]
export const FINISH_TYPES=(()=>{const l=Store.finishTypes();return (l&&l.length)?l:DEFAULT_FINISH_TYPES})();
export const FINISHES=MATERIALS.filter(m=>m[5]==='Wood'||m[5]==='Metal');

const pf={...(D.pieceFabrics||{}),...(C.pieceFabrics||{})};
const fabricsFor=id=>{const a=pf[id],L=a?MATERIALS.filter(f=>a.includes(f[2])):MATERIALS.filter(f=>f[5]!=='Wood'&&f[5]!=='Metal');return L.length?L:MATERIALS};

export const finishesFor=(pid,ftid)=>{
 if(ftid==='fabric')return fabricsFor(pid);
 const a=Store.pieceFinishes(pid,ftid);
 if(a&&a.length){const L=MATERIALS.filter(f=>a.includes(f[2]));if(L.length)return L}
 const def=MATERIALS.filter(m=>m[5]==='Wood'||m[5]==='Metal');
 return def.length?def:MATERIALS;
};

// "Original" option removed from selectable list; kept only as fallback reference if needed
export const ORIGINAL=MATERIALS[0];
export const mappingId=(fid,ftid=null)=>ftid===null?fid:`finish:${ftid}:${fid}`;
export const getMapping=(pid,fid,ftid=null)=>{
 const key=mappingId(fid,ftid);
 const oldKey=ftid===null||ftid==='fabric'?fid:null;
 const published=D.mapping?.[pid]||{},local=C.mapping?.[pid]||{};
 return {...DEFMAP,...(published[key]|| (oldKey?published[oldKey]:null) || {}),...(local[key]|| (oldKey?local[oldKey]:null) || {})};
};

// Extra pieces: from data/site.json ("products", repo-hosted) and from the admin panel (browser-only).
const extra=[...(D.products||[]).map(p=>({...p})),...(C.added||[]).map(p=>({...p,added:true}))].map(p=>({kind:p.id,tag:'',mat:'',desc:'',dims:[100,100,100],...p,sub:p.sub||p.cat}));
extra.forEach(p=>{if(p.model)D.models[p.id]=p.model});
export const PRODUCTS=[...BASE,...extra].filter(p=>!gone.has(p.id)).map(p=>{
 const f=fabricsFor(p.id);
 const ft=FINISH_TYPES.map(t=>({...t,finishes:finishesFor(p.id,t.id)}));
 return {...p,...(C.products[p.id]||{}),fabrics:f,finishTypes:ft};
});
export const FEAT=(()=>{const L=FEATURED.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);return L.length?L:PRODUCTS.slice(0,4)})();
export const build=(id,hex)=>buildKind(BASE.find(p=>p.id===id)?.kind||id,hex);
