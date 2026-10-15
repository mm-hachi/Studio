import * as Store from './store.js';
import { CATS, BASE, FEATURED, FABRICS as FBASE, FINISHES, FABRIC_DESC } from './catalog.js';
import { buildKind } from './builders.js';
import { DEFMAP } from './texture.js';
export { CATS, FEATURED, FINISHES, DEFMAP };
const D=Store.DATA,C=Store.cfg,slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-');
const gone=new Set([...(D.deleted||[]),...(C.deleted||[])]),goneF=new Set([...(D.deletedFabrics||[]),...(C.deletedFabrics||[])]);
// Fabrics and materials: built-in + data/site.json + admin additions, minus deletions, with edits applied.
const fl=[...FBASE.map(([n,h])=>({id:slug(n),name:n,hex:h,type:'Fabric',desc:FABRIC_DESC[n]||''})),...(D.fabrics||[]),...(C.addedFabrics||[])].filter(f=>!goneF.has(f.id)).map(f=>({type:'Fabric',desc:'',...f,...(D.fabricEdits?.[f.id]||{}),...(C.fabricEdits?.[f.id]||{})}));
if(!fl.length)fl.push({id:'oyster',name:'Oyster',hex:'#d4cabb',type:'Fabric',desc:''});
export const FABRIC_LIST=fl.map(f=>({...f,image:Store.url('fabric:'+f.id)||f.image||null}));
export const FABRICS=FABRIC_LIST.map(f=>[f.name,f.hex,f.id,f.image,f.desc,f.type]);
const pf={...(D.pieceFabrics||{}),...(C.pieceFabrics||{})};
const fabricsFor=id=>{const a=pf[id],L=a?FABRICS.filter(f=>a.includes(f[2])):FABRICS;return L.length?L:FABRICS};
// "Original": the model's own materials and textures, shown unchanged (the default for every piece)
export const ORIGINAL=['Original','#e4ddd0','original',null,'The material and texture this piece was made with, shown unchanged.','Original'];
export const getMapping=(pid,fid)=>({...DEFMAP,...(D.mapping?.[pid]?.[fid]||{}),...(C.mapping?.[pid]?.[fid]||{})});
// Extra pieces: from data/site.json ("products", repo-hosted) and from the admin panel (browser-only).
const extra=[...(D.products||[]).map(p=>({...p})),...(C.added||[]).map(p=>({...p,added:true}))].map(p=>({kind:p.id,tag:'',mat:'',desc:'',dims:[100,100,100],...p,sub:p.sub||p.cat}));
extra.forEach(p=>{if(p.model)D.models[p.id]=p.model});
export const PRODUCTS=[...BASE,...extra].filter(p=>!gone.has(p.id)).map(p=>({...p,...(C.products[p.id]||{}),fabrics:fabricsFor(p.id)}));
export const FEAT=(()=>{const L=FEATURED.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);return L.length?L:PRODUCTS.slice(0,4)})();
export const build=(id,hex)=>buildKind(BASE.find(p=>p.id===id)?.kind||id,hex);
