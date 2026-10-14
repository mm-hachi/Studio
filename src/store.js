// Browser-side content store: text config in localStorage, uploaded files (images, video, GLB) in IndexedDB.
const KEY='dekara-cfg';
let LOCAL={};try{LOCAL=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{}
export const cfg={products:{}};   // effective config: data/site.json "config" overlaid with this browser's unpublished edits
export const RAW={};              // pristine copy of data/site.json as loaded
const files={};
export const DATA={models:{},documents:null};
const idb=()=>new Promise((res,rej)=>{const r=indexedDB.open('dekara-media',1);r.onupgradeneeded=()=>r.result.createObjectStore('f');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const tx=(mode,fn)=>idb().then(db=>new Promise((res,rej)=>{const t=db.transaction('f',mode),q=fn(t.objectStore('f'));t.oncomplete=()=>res(q.result);t.onerror=()=>rej(t.error)}));
export const ready=(async()=>{
 try{const r=await fetch('data/site.json',{cache:'no-store'});if(r.ok){const j=await r.json();Object.assign(DATA,j);Object.assign(RAW,JSON.parse(JSON.stringify(j)))}}catch{}
 let local=LOCAL;
 // once the published repo has caught up with our last publish, drop the local copy and use the repo
 if(local._publishedAt&&(DATA.version||0)>=local._publishedAt){local={};try{localStorage.removeItem(KEY)}catch{}await tx('readwrite',s=>s.clear()).catch(()=>{})}
 Object.assign(cfg,JSON.parse(JSON.stringify(DATA.config||{})),local);cfg.products??={};
 if(!DATA.apiBase&&cfg.site?.apiBase)DATA.apiBase=cfg.site.apiBase;
 try{const keys=await tx('readonly',s=>s.getAllKeys()),all=await tx('readonly',s=>s.getAll());
 keys.forEach((k,i)=>files[k]={url:URL.createObjectURL(all[i].blob),type:all[i].type||'',name:all[i].name})}catch(e){console.warn('Media store unavailable',e)}})();
// Files: this browser's uploads (IndexedDB) win; otherwise files published in the repo (data/site.json "files")
const repoFile=k=>{if((cfg._removed||[]).includes(k))return null;const f=DATA.files?.[k];return f?{url:f.path,type:f.type||'',name:f.name||f.path.split('/').pop(),repo:true}:null};
export const media=slot=>files[slot]||repoFile(slot);
export const url=slot=>media(slot)?.url||null;
export const localMedia=k=>files[k]||null;
export const localKeys=()=>Object.keys(files);
export const put=(slot,f)=>{if(cfg._removed?.includes(slot)){cfg._removed=cfg._removed.filter(x=>x!==slot);save()}return tx('readwrite',s=>s.put({blob:f,type:f.type||(/\.(mp4|m4v|mov|webm|ogv)$/i.test(f.name)?'video/mp4':''),name:f.name},slot))};
export const del=async slot=>{try{await tx('readwrite',s=>s.delete(slot))}catch{}if(DATA.files?.[slot]){const r=(cfg._removed??=[]);if(!r.includes(slot))r.push(slot);save()}};
export const clearFiles=()=>tx('readwrite',s=>s.clear());
export const save=()=>localStorage.setItem(KEY,JSON.stringify(cfg));
export const setProduct=(id,k,v)=>{(cfg.products[id]??={})[k]=k==='price'?(Number(v)||0):v;save()};
export const replaceCfg=o=>{Object.keys(cfg).forEach(k=>delete cfg[k]);Object.assign(cfg,o);cfg.products??={};save()};
// Custom Studio limits (editable in the admin panel)
export const STUDIO_DEF={maxPieces:12,maxWidth:500,maxDepth:400,snap:true,
 enabled:{seat:true,corner:true,chaise:true,ottoman:true,arm:true},
 prices:{seat:6500,corner:7200,chaise:8800,ottoman:3900,arm:1800},
 max:{seat:0,corner:0,chaise:0,ottoman:0,arm:0},presets:{1:true,2:true,3:true,4:true}};
export const studioCfg=()=>{const c=cfg.studio||{},m=k=>({...STUDIO_DEF[k],...(c[k]||{})});return {...STUDIO_DEF,...c,enabled:m('enabled'),prices:m('prices'),max:m('max'),presets:m('presets')}};
export const setStudio=(path,v)=>{const ks=path.split('.');let o=(cfg.studio??={});ks.slice(0,-1).forEach(k=>o=(o[k]??={}));o[ks[ks.length-1]]=v;save()};
// Basket and checkout settings (editable in the admin panel)
export const SHOP_DEF={delivery:950,payNow:true};
export const shopCfg=()=>({...SHOP_DEF,...(cfg.shop||{})});
export const setShop=(k,v)=>{(cfg.shop??={})[k]=v;save()};
// Business details shown in the footer, contact page and WhatsApp button (editable in the admin panel)
export const siteCfg=()=>cfg.site||{};
export const setSite=(k,v)=>{(cfg.site??={})[k]=v;save()};
// Pieces added in the admin panel and Custom Studio collections (browser-only; export them for the repo)
export const colls=()=>(cfg.collections??=[]);
export const addProduct=p=>{(cfg.added??=[]).push(p);save()};
export const removeProduct=id=>{cfg.added=(cfg.added||[]).filter(p=>p.id!==id);save()};
// Fabrics, per-piece mapping and deletions
export const setMapping=(pid,fid,m)=>{((cfg.mapping??={})[pid]??={})[fid]=m;save()};
export const delMapping=(pid,fid)=>{if(cfg.mapping?.[pid])delete cfg.mapping[pid][fid];save()};
export const setPieceFabrics=(pid,list)=>{(cfg.pieceFabrics??={})[pid]=list;save()};
export const addFabric=f=>{(cfg.addedFabrics??=[]).push(f);save()};
export const editFabric=(id,k,v)=>{((cfg.fabricEdits??={})[id]??={})[k]=v;save()};
export const deleteFabric=id=>{const a=cfg.addedFabrics||[];if(a.some(f=>f.id===id))cfg.addedFabrics=a.filter(f=>f.id!==id);else(cfg.deletedFabrics??=[]).push(id);save()};
export const deleteProduct=id=>{if((cfg.added||[]).some(p=>p.id===id))cfg.added=cfg.added.filter(p=>p.id!==id);else(cfg.deleted??=[]).push(id);save()};
export const discardLocal=async()=>{await clearFiles();try{localStorage.removeItem(KEY)}catch{}};
