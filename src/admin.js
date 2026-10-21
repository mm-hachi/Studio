import * as Store from './store.js';
import { PRODUCTS, CATS, FABRIC_LIST, MATERIAL_LIST, FABRICS, MATERIALS } from './products.js';
import { measureGLB } from './loader.js';
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hash=s=>crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join(''));
const trig=document.createElement('button');trig.id='adm-trigger';trig.textContent='⚜';trig.setAttribute('aria-label','Steward access');document.body.append(trig);
async function unlock(){
 if(sessionStorage.adm==='1')return true;
 const h=localStorage.getItem('dekara-pw');
 if(!h){const p=prompt('First time here: choose a steward passcode (4+ characters).');if(!p||p.length<4)return false;localStorage.setItem('dekara-pw',await hash(p));sessionStorage.adm='1';return true}
 const p=prompt('Steward passcode:');if(p&&await hash(p)===h){sessionStorage.adm='1';return true}
 alert('Passcode incorrect.');return false;
}
trig.onclick=async()=>{if(await unlock())openPanel()};
addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==='a')trig.click()});
const reload=()=>{sessionStorage.admOpen='1';location.reload()};
const row=(label,slot,accept)=>{const m=Store.media(slot);return `<div class="ar"><b>${esc(label)}</b><small>${m?'Custom: '+esc(m.name):'Default'}</small><input type="file" accept="${accept}" data-slot="${esc(slot)}">${m?`<button data-del="${esc(slot)}">Remove custom file</button>`:''}</div>`};
const fld=(id,k,l,v,t='text')=>`<label>${l}${t==='area'?`<textarea rows="4" data-pid="${id}" data-k="${k}">${esc(v)}</textarea>`:`<input type="${t}" data-pid="${id}" data-k="${k}" value="${esc(v)}">`}</label>`;
const siteHtml=()=>{
 const c=Store.siteCfg(),v=Store.viewportCfg();
 const t=(k,l,ph)=>`<label>${l}<input type="text" data-site="${k}" value="${esc(c[k]||'')}" placeholder="${ph}"></label>`;
 return `<h4>Business details</h4>
 <p class="note">Shown in the footer and contact page. A WhatsApp number adds a floating chat button.</p>
 ${t('phone','Phone','e.g. 010 000 0000')}${t('email','Email','e.g. info@yourdomain.co.za')}${t('whatsapp','WhatsApp number (with country code)','e.g. 27821234567')}
 <label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-site="backlight" ${c.backlight===false?'':'checked'} style="width:auto"> Backlight on main viewports</label>
 ${t('apiBase','Backend API URL (when your backend is live)','https://your-api.workers.dev')}
 <label>Backlight strength (%)<input type="number" min="0" max="300" data-site="backlightStrength" value="${c.backlightStrength??100}"></label>
 <h4>3D viewports</h4>
 <p class="note">Set camera controls for shop cards, product views, and the Custom Studio live preview. Zoom distances use scene units; smaller minimum values zoom closer.</p>
 <label style="display:flex;gap:.5rem;align-items:center"><input type="checkbox" data-site="viewportPan" ${v.pan?'checked':''} style="width:auto"> Enable panning in shop, product, and Custom Studio preview viewports</label>
 <label>Closest zoom distance<input type="number" min="0.5" max="99" step="0.5" data-site="viewportMinZoom" value="${v.minZoom}"></label>
 <label>Farthest zoom distance<input type="number" min="1" max="100" step="0.5" data-site="viewportMaxZoom" value="${v.maxZoom}"></label>`;
};
const shopHtml=()=>{const c=Store.shopCfg();let o=[];try{o=JSON.parse(localStorage.getItem('dekara-orders'))||[]}catch{}
 return `<h4>Basket and checkout</h4><label>Delivery fee (ZAR)<input type="number" min="0" data-sh="delivery" value="${c.delivery}"></label><label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-sh="payNow" ${c.payNow?'checked':''} style="width:auto"> Offer "Pay now" (demo payments)</label>
 <details><summary>Demo orders (${o.length})</summary>${o.slice(0,20).map(x=>`<div class="ar"><b>${esc(x.ref)}</b><small>${esc(x.name)} · ${esc(String(x.date).slice(0,10))} · R ${Math.round(x.total).toLocaleString('en-ZA')}</small></div>`).join('')||'<p class="note">No orders yet.</p>'}<div class="acts"><button data-act="orders">Export orders</button><button data-act="clearorders">Clear orders</button></div></details>`};
const addHtml=()=>{
 const fts=Store.finishTypes();
 const defSelect=(ftid,options,selected)=>`<label>Default ${ftid==='fabric'?'fabric':`${esc(fts.find(ft=>ft.id===ftid)?.name||'finish')} finish`}<select data-npdefault="${esc(ftid)}">${options.map(m=>`<option value="${esc(m[2])}"${m[2]===selected?' selected':''}>${esc(m[0])}</option>`).join('')}</select></label>`;
 return `<h4>Add a piece to the shop</h4><p class="note">Upload a GLB (Draco and Meshopt compression are supported). Dimensions fill in from the model and can be edited. Choose which finish types customers can customize, then select each type's default material.</p>
 <label>Name<input id="np-name"></label><label>Category<select id="np-cat">${CATS.map(c=>`<option>${c}</option>`).join('')}</select></label><label>Subcategory<input id="np-sub"></label><label>Tagline<input id="np-tag"></label><label>Price (ZAR)<input id="np-price" type="number" min="0"></label><label>Materials<input id="np-mat"></label><label>Description<textarea id="np-desc" rows="3"></textarea></label>
 <label>3D model (.glb)<input type="file" id="np-file" accept=".glb,.gltf"></label>
 ${fts.map(ft=>{const defaultList=defaultOptions(ft.id,undefined),selected=defaultList[0]?.[2];return `<div class="ar"><b>${esc(ft.name)} customization</b>${chk2(`data-npoptions="${ft.id}"`,'true',`Offer ${ft.name.toLowerCase()} as a customizable option`,true)}${defSelect(ft.id,defaultList,selected)}</div>`}).join('')}
 <div class="ar"><b>Model dimensions (cm)</b><label>Width<input id="np-w" type="number" min="1" step="1"></label><label>Depth<input id="np-d" type="number" min="1" step="1"></label><label>Height<input id="np-h" type="number" min="1" step="1"></label><label style="display:flex;gap:.5rem;align-items:center"><input id="np-dims-lock" type="checkbox" style="width:auto"> Lock dimensions</label></div>
 <div class="acts"><button data-act="addprod">Add to shop</button></div>`;
};
const collHtml=()=>{const L=Store.colls(),F=[['name','Name'],['price','Price (ZAR)'],['w','Width cm'],['d','Depth cm'],['h','Height cm']];
 return `<h4>Studio collections</h4><p class="note">Collections of GLB pieces that customers arrange on the Custom Studio canvas, just like the built-in modules. Each piece is stretched to the width, depth and height you set.</p>${L.map(c=>`<details><summary>${esc(c.name)} (${c.pieces.length})</summary><label>Collection name<input data-cn="${c.id}" value="${esc(c.name)}"></label>${row('Collection preview image','collection:'+c.id,'image/*')}${c.pieces.map(p=>`<div class="ar"><b>${esc(p.name)}</b>${F.map(([k,l])=>`<label>${l}<input ${k==='name'?'':'type="number" min="0"'} data-cp="${c.id}|${p.id}|${k}" value="${esc(p[k])}"></label>`).join('')}<button data-delpiece="${c.id}|${p.id}">Remove piece</button></div>`).join('')}<label>Add pieces (GLB, several allowed)<input type="file" multiple accept=".glb,.gltf" data-addpieces="${c.id}"></label><div class="acts"><button data-delcoll="${c.id}">Delete collection</button></div></details>`).join('')}
 <label>New collection name<input id="nc-name"></label><div class="acts"><button data-act="addcoll">Create collection</button></div>`};
const studioHtml=()=>{const c=Store.studioCfg(),N={seat:'Seat',corner:'Corner',chaise:'Chaise',ottoman:'Ottoman',arm:'Arm'},stm=Store.studioMaterials(),fts=Store.finishTypes();
 const num=(k,l,v)=>`<label>${l}<input type="number" min="0" data-st="${k}" value="${v}"></label>`;
 const chk=(k,l,v)=>`<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-st="${k}" ${v?'checked':''} style="width:auto"> ${l}</label>`;
 return `<h4>Custom Studio</h4><p class="note">Decide how far a customer can take a build, and which fabrics &amp; finishes are offered.</p>${num('maxPieces','Max pieces on canvas',c.maxPieces)}${num('maxWidth','Max overall length (cm)',c.maxWidth)}${num('maxDepth','Max overall depth (cm)',c.maxDepth)}${chk('snap','Snap pieces together',c.snap)}
 <details><summary>Modules, prices and maximums</summary>${Object.keys(N).map(k=>`<div class="ar"><b>${N[k]}</b>${chk('enabled.'+k,'Available to customers',c.enabled[k])}${num('prices.'+k,'Price (ZAR)',c.prices[k])}${num('max.'+k,'Max of this type',c.max[k])}</div>`).join('')}</details>
 <details><summary>Starter sizes offered</summary>${[1,2,3,4].map(n=>chk('presets.'+n,n+'-seater',c.presets[n])).join('')}</details>
 <details><summary>Fabrics offered in Studio</summary><div class="ar"><b>Studio fabrics</b>${FABRIC_LIST.map(f=>chk2('data-stfab',f.id,f.name,stm.fabrics?stm.fabrics.includes(f.id):(f.type!=='Wood'&&f.type!=='Metal'))).join('')}</div></details>
 <details><summary>Finishes offered in Studio</summary>${fts.map(ft=>`<div class="ar"><b>${esc(ft.name)} finishes</b>${MATERIAL_LIST.map(f=>chk2(`data-stfin="${ft.id}|${f.id}"`,f.id,f.name,stm.finishes?.[ft.id]?stm.finishes[ft.id].includes(f.id):(f.type==='Wood'||f.type==='Metal'))).join('')}</div>`).join('')}</details>`};
let initialRepoStatus=sessionStorage.getItem('repo-pub-status')||'Ready. Click the button and choose the project folder containing package.json.';
if(sessionStorage.getItem('repo-pub-running')==='1'){
 initialRepoStatus='Previous preparation was interrupted by a page reload. Check git status and data/site.json before retrying; some files may already have been copied.';
 sessionStorage.setItem('repo-pub-status',initialRepoStatus);sessionStorage.removeItem('repo-pub-running');
}
const initialRepoProgress=JSON.parse(sessionStorage.getItem('repo-pub-progress')||'null');
const pubHtml=()=>`<h4>Publish to repo</h4><p class="note">Choose your local project folder to merge admin settings into data/site.json and copy uploaded files into place. Then review, commit and push the staged worktree from your terminal.</p><div class="acts"><button type="button" data-act="expprod">Prepare changes for GitHub</button></div><p class="note" id="repo-pub-status" role="status" aria-live="polite">${esc(initialRepoStatus)}</p><progress id="repo-pub-progress" max="${initialRepoProgress?.max||1}" value="${initialRepoProgress?.value||0}" ${initialRepoProgress?.hidden===false?'':'hidden'} style="width:100%"></progress>`;
const FT=['Fabric','Leather','Velvet','Linen','Wood','Stone','Metal','Other'];
const chk2=(attr,val,label,on)=>`<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem;margin:.3rem 0"><input type="checkbox" ${attr} value="${esc(val)}" ${on?'checked':''} style="width:auto">${esc(label)}</label>`;
const finishAssignments=(attr,selected)=>`<div class="ar"><b>Assign to finish types</b>${Store.finishTypes().map(ft=>chk2(attr,ft.id,ft.name,selected.includes(ft.id))).join('')}</div>`;
const defaultMaterial=(pid,ftid,materials,defaults)=>`<label>Default ${esc(ftid==='fabric'?'fabric':`${Store.finishTypes().find(ft=>ft.id===ftid)?.name||'finish'} finish`)}<select data-pdefault="${esc(pid)}|${esc(ftid)}">${materials.map(m=>`<option value="${esc(m[2])}"${(defaults?.[ftid]||materials[0]?.[2])===m[2]?' selected':''}>${esc(m[0])}</option>`).join('')}</select></label>`;
const pieceTypeAvailable=(pid,ftid)=>{
 const local=Store.cfg.pieceFinishAvailability?.[pid]?.[ftid];
 if(local!==undefined)return local;
 return Store.DATA.pieceFinishAvailability?.[pid]?.[ftid]??true;
};
const assignedFinishes=ftid=>MATERIALS.filter(m=>MATERIAL_LIST.find(item=>item.id===m[2])?.finishTypes?.includes(ftid));
const FINISH_MATERIALS=MATERIALS.filter(m=>!FABRICS.some(f=>f[2]===m[2]));
const defaultOptions=(ftid,current)=>{
 const options=ftid==='fabric'?FABRICS:assignedFinishes(ftid);
 const list=options.length?options:ftid==='fabric'?FABRICS:FINISH_MATERIALS;
 const fallback=MATERIALS.find(m=>m[2]===current);
 return fallback&&!list.some(m=>m[2]===current)?[...list,fallback]:list;
};
const safePart=value=>{const s=String(value).replace(/[^a-z0-9_-]/gi,'-').replace(/^-+|-+$/g,'');if(!s)throw new Error('An uploaded file has an invalid ID for its repository path.');return s};
const fileExt=(name,type)=>{const match=/\.([a-z0-9]{2,8})$/i.exec(name||'');if(match)return match[1].toLowerCase();
 return ({'image/jpeg':'jpg','image/png':'png','image/webp':'webp','image/gif':'gif','video/mp4':'mp4','video/webm':'webm','model/gltf-binary':'glb','model/gltf+json':'gltf'}[type]||'bin')};
const repoPath=(slot,file)=>{
 const ext=fileExt(file.name,file.type),parts=slot.split(':');
 if(parts[0]==='model'&&parts[1])return `models/${safePart(parts[1])}.${ext}`;
 if(parts[0]==='piece'&&parts[1]&&parts[2])return `models/collections/${safePart(parts[1])}/${safePart(parts[2])}.${ext}`;
 if(parts[0]==='collection'&&parts[1])return `models/collections/${safePart(parts[1])}/preview.${ext}`;
 if(parts[0]==='fabric'&&parts[1])return `swatches/fabrics/${safePart(parts[1])}.${ext}`;
 if(parts[0]==='gallery'&&parts[1]&&parts[2])return `media/products/${safePart(parts[1])}/gallery-${safePart(parts[2])}.${ext}`;
 return `media/slots/${safePart(slot)}.${ext}`;
};
const writeRepoFile=async(root,path,data)=>{
 const parts=path.split('/');if(parts.some(part=>!part||part==='.'||part==='..'))throw new Error(`Unsafe repository path: ${path}`);
 let dir=root;for(const part of parts.slice(0,-1))dir=await dir.getDirectoryHandle(part,{create:true});
 const handle=await dir.getFileHandle(parts[parts.length-1],{create:true}),writer=await handle.createWritable();
 try{await writer.write(data);await writer.close()}catch(error){await writer.abort();throw error}
};
const showRepoStatus=async(message,done,total)=>{
 const status=document.getElementById('repo-pub-status'),progress=document.getElementById('repo-pub-progress');
 status.textContent=message;
 sessionStorage.setItem('repo-pub-status',message);
 progress.hidden=!(total>0);if(total>0){progress.max=total;progress.value=done;sessionStorage.setItem('repo-pub-progress',JSON.stringify({max:total,value:done,hidden:false}))}
 else{sessionStorage.removeItem('repo-pub-progress')}
 await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
};
const editableColls=()=>{if(!Array.isArray(Store.cfg.collections))Store.cfg.collections=(Store.DATA.collections||[]).map(c=>({...c,pieces:(c.pieces||[]).map(piece=>({...piece}))}));return Store.cfg.collections};
async function prepareRepoChanges(root){
 await showRepoStatus(`Folder selected: ${root.name}. Checking for package.json, data/site.json and existing settings…`);
 await root.getFileHandle('package.json');
 const dataDir=await root.getDirectoryHandle('data'),siteHandle=await dataDir.getFileHandle('site.json');
 let site;try{site=JSON.parse(await (await siteHandle.getFile()).text())}catch(error){throw new Error(`Could not read data/site.json as valid JSON: ${error.message}`)}
 if(!site||typeof site!=='object'||Array.isArray(site))throw new Error('data/site.json must contain a JSON object.');
 for(const key of ['config','files','models'])if(site[key]!==undefined&&(!site[key]||typeof site[key]!=='object'||Array.isArray(site[key])))throw new Error(`data/site.json field "${key}" must be a JSON object.`);
 const clean={...Store.cfg};delete clean._removed;delete clean._publishedAt;
 const config={...(site.config||{}),...clean},files={...(site.files||{})},models={...(site.models||{})},removed=new Set(Store.cfg._removed||[]),local=Store.localKeys(),paths=new Map();
 for(const slot of local){const file=Store.localMedia(slot),blob=await (await fetch(file.url)).blob(),path=repoPath(slot,{name:file.name,type:file.type||blob.type});paths.set(slot,{file,blob,path,type:file.type||blob.type})}
 for(const slot of removed)delete files[slot];
 for(const [slot,item] of paths)files[slot]={path:item.path,type:item.type,name:item.file.name};
 for(const [slot,item] of paths){
  const [,id]=slot.split(':');
  if(slot.startsWith('model:'))models[id]=item.path;
  if(slot.startsWith('fabric:')){
   const fabric=(config.addedFabrics||[]).find(x=>x.id===id);if(fabric)fabric.image=item.path;
   if(config.fabricEdits?.[id])config.fabricEdits[id]={...config.fabricEdits[id],image:item.path};
  }
  if(slot.startsWith('collection:')){
   const collection=(config.collections||[]).find(x=>x.id===id);if(collection)collection.image=item.path;
  }
 }
 config.added=(config.added||[]).map(product=>{
  const model=paths.get('model:'+product.id);if(model)return {...product,model:model.path};
  if(removed.has('model:'+product.id)){const cleanProduct={...product};delete cleanProduct.model;return cleanProduct}
  return product;
 });
 config.collections=editableColls().map(collection=>{
  const preview=paths.get('collection:'+collection.id);
  const cleanCollection={...collection,...(preview?{image:preview.path}:{})};
  if(removed.has('collection:'+collection.id))delete cleanCollection.image;
  cleanCollection.pieces=collection.pieces.map(piece=>{
   const model=paths.get(`piece:${collection.id}:${piece.id}`);
   if(model)return {...piece,model:model.path};
   if(removed.has(`piece:${collection.id}:${piece.id}`)){const cleanPiece={...piece};delete cleanPiece.model;return cleanPiece}
   return piece;
  });
  return cleanCollection;
 });
 config.addedFabrics=(config.addedFabrics||[]).map(fabric=>{
  if(paths.has('fabric:'+fabric.id))return {...fabric,image:paths.get('fabric:'+fabric.id).path};
  if(removed.has('fabric:'+fabric.id)){const cleanFabric={...fabric};delete cleanFabric.image;return cleanFabric}
  return fabric;
 });
 for(const slot of removed){
  if(slot.startsWith('model:'))delete models[slot.slice(6)];
  if(slot.startsWith('fabric:')&&config.fabricEdits?.[slot.slice(7)]){const edit={...config.fabricEdits[slot.slice(7)]};delete edit.image;config.fabricEdits[slot.slice(7)]=edit}
 }
 const total=paths.size+1;let done=0;
 for(const [slot,item] of paths){
  await showRepoStatus(`Copying ${done+1} of ${total-1}: ${item.path}`,done,total);
  await writeRepoFile(root,item.path,item.blob);done++;
 }
 const output={...site,config,files,models,version:Date.now()};
 await showRepoStatus(`Writing ${done+1} of ${total}: data/site.json`,done,total);
 await writeRepoFile(root,'data/site.json',JSON.stringify(output,null,1));
 done++;
 await showRepoStatus(`Complete. Updated data/site.json and copied ${paths.size} uploaded file${paths.size===1?'':'s'}. Review the project folder, then commit and push from your terminal.`,done,total);
 sessionStorage.removeItem('repo-pub-running');
 return true;
}
const fabHtml=()=>{
 const fts=Store.finishTypes();
 return `<h4>Materials library</h4><p class="note">Add materials to the finish types where customers can use them. Assignments are edited on each material and apply across pieces.</p>
 <details><summary>Finish types (${fts.length})</summary><p class="note">Each finish type matches a named material in GLB models (e.g. "frame", "legs", "base").</p>
 ${fts.map(ft=>`<div class="ar"><b>${esc(ft.name)}</b><small>Target in GLB: <code>${esc(ft.target||ft.name)}</code></small>${ft.id!=='fabric'&&fts.length>1?`<button data-delfintype="${esc(ft.id)}">Delete this finish type</button>`:''}</div>`).join('')}
 <label>New finish type name<input id="nft-name" placeholder="e.g. Legs or Base"></label><label>GLB material name (target)<input id="nft-target" placeholder="e.g. legs (matches GLB material name)"></label>
 <div class="acts"><button data-act="addfintype">Add finish type</button></div></details>
 <div id="adm-material-list">${MATERIAL_LIST.map((f,i)=>`<details data-material-id="${esc(f.id)}"><summary>${esc(f.name)} (${esc(f.type||'Fabric')})</summary><div class="acts material-order"><button data-mat-order="up"${i===0?' disabled':''}>Move earlier</button><button data-mat-order="down"${i===MATERIAL_LIST.length-1?' disabled':''}>Move later</button></div><label>Name<input data-fe="${f.id}|name" value="${esc(f.name)}"></label><label>Type<select data-fe="${f.id}|type">${FT.map(t=>`<option${t===f.type?' selected':''}>${t}</option>`).join('')}</select></label><label>Colour<input type="color" data-fe="${f.id}|hex" value="${esc(f.hex)}"></label><label>Description<textarea rows="3" data-fe="${f.id}|desc">${esc(f.desc)}</textarea></label>${finishAssignments(`data-mft="${f.id}"`,f.finishTypes||[])}${row('Swatch / texture image','fabric:'+f.id,'image/*')}<div class="acts"><button data-delfab="${f.id}">Delete this material</button></div></details>`).join('')}</div>
 <label>New material name<input id="nf-name"></label><label>Type<select id="nf-type">${FT.map(t=>`<option>${t}</option>`).join('')}</select></label>${finishAssignments('data-newmft',['fabric'])}<label>Colour<input type="color" id="nf-hex" value="#cccccc"></label><label>Description<textarea id="nf-desc" rows="2"></textarea></label><label>Texture image (optional)<input type="file" id="nf-img" accept="image/*"></label>
 <div class="acts"><button data-act="addfab">Add material</button><button data-act="resetmat">Reset materials to default</button></div>`;
};
// Live mapping editor for the piece page: scale, rotation and location per material.
let savePendingMapping=()=>{};
function fillMap(){const P=window.__prod,el=document.getElementById('map-body');if(!P||!el||!P.mappingOptions?.length)return;const f0=P.mappingOptions.find(x=>x.ft.id==='fabric'&&x.material[2]===P.current()[2])||P.mappingOptions[0],q=id=>document.getElementById(id),K=['sx','sy','rot','ox','oy'];
 const sl=(k,l,min,max,st)=>`<label>${l} <b id="v-${k}"></b><input type="range" id="mp-${k}" min="${min}" max="${max}" step="${st}"></label>`;
 el.innerHTML=`<p class="note">Choose a fabric or finish material to map. Each fabric and finish type/material has independent scale, rotation and location values.</p><label>Fabric / finish<select id="mp-f">${P.mappingOptions.map(o=>`<option value="${esc(o.key)}"${o.key===f0.key?' selected':''}>${esc(o.label)}</option>`).join('')}</select></label>
 ${sl('sx','Scale X',.05,40,.05)}${sl('sy','Scale Y',.05,40,.05)}<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0"><input type="checkbox" id="mp-link" checked style="width:auto"> Link X and Y scale</label>${sl('rot','Rotation (degrees)',-180,180,1)}${sl('ox','Location X',-2,2,.01)}${sl('oy','Location Y',-2,2,.01)}
 <p class="note" id="mp-st"></p><div class="acts"><button data-mp="lock">Lock values</button><button id="mp-all" data-mp="all">Apply to all</button><button data-mp="reset">Reset</button></div>`;
 const fid=()=>q('mp-f').value,read=()=>Object.fromEntries(K.map(k=>[k,Number(q('mp-'+k).value)]));
 let dirty=false,activeKey=f0.key;
 const selected=()=>P.mappingOptions.find(o=>o.key===activeKey);
 const updateAllLabel=()=>{const item=selected();q('mp-all').textContent=`Apply to all ${item.ft.id==='fabric'?'fabrics':`${item.ft.name.toLowerCase()} finishes`}`};
 savePendingMapping=()=>{if(dirty){Store.setMapping(P.piece.id,activeKey,{...read(),locked:true});dirty=false}};
 const load=key=>{activeKey=key;const m=P.mapping(key);K.forEach(k=>{q('mp-'+k).value=m[k];q('v-'+k).textContent=m[k]});q('mp-st').textContent=m.locked?'Locked. Customers see these values.':'Not locked yet. Lock to save these values for customers.';updateAllLabel()};
 el.addEventListener('change',e=>{if(e.target.id==='mp-f'){savePendingMapping();const key=fid();P.selectMapping(key);load(key)}});
 el.addEventListener('input',e=>{const t=e.target;if(!/^mp-(sx|sy|rot|ox|oy)$/.test(t.id))return;
  if(q('mp-link').checked&&(t.id==='mp-sx'||t.id==='mp-sy'))q('mp-sx').value=q('mp-sy').value=t.value;
  dirty=true;K.forEach(k=>q('v-'+k).textContent=q('mp-'+k).value);P.previewMapping(activeKey,read());q('mp-st').textContent='Previewing. Apply changes or lock to save these values for customers.'});
 el.addEventListener('click',e=>{const a=e.target.closest('[data-mp]')?.dataset.mp;if(a==='lock'){Store.setMapping(P.piece.id,activeKey,{...read(),locked:true});dirty=false;q('mp-st').textContent='Locked. Customers see these values.'}
  if(a==='all'){const item=selected(),mapping={...read(),locked:true},matches=P.mappingOptions.filter(o=>o.ft.id===item.ft.id);matches.forEach(o=>Store.setMapping(P.piece.id,o.key,mapping));dirty=false;q('mp-st').textContent=`Applied these values to all ${matches.length} ${item.ft.name.toLowerCase()} options.`}
  if(a==='reset'){Store.delMapping(P.piece.id,activeKey);dirty=false;P.selectMapping(activeKey);load(activeKey)}});
 load(f0.key)}
function openPanel(){
 sessionStorage.admOpen='1';
 let p=document.getElementById('adm');if(p){p.classList.add('open');return}
 p=document.createElement('aside');p.id='adm';
 const slots=[...document.querySelectorAll('[data-slot]')].filter(s=>!s.dataset.slot.startsWith('gallery'));
 p.innerHTML=`<div class="adm-top"><header><h3>Steward's Chamber</h3><button data-act="close" aria-label="Close admin panel">✕</button></header><input id="adm-search" type="search" placeholder="Search admin settings…" aria-label="Search admin settings"></div>
 <div id="adm-scroll">
 <p class="note">Admin edits and uploaded files are stored in this browser until you publish the changes to your site.</p>
 ${document.getElementById('p-canvas')?'<h4>Mapping</h4><div id="map-body"></div>':''}
 ${pubHtml()}${siteHtml()}${shopHtml()}${studioHtml()}${fabHtml()}${addHtml()}${collHtml()}<h4>Pieces</h4><div class="acts"><button data-act="restoredef">Restore deleted default pieces</button></div>${PRODUCTS.map(x=>`<details><summary>${esc(x.name)}</summary>${fld(x.id,'name','Name',x.name)}<label>Category<select data-pid="${x.id}" data-k="cat">${CATS.map(c=>`<option${c===x.cat?' selected':''}>${c}</option>`).join('')}</select></label>${fld(x.id,'sub','Subcategory',x.sub)}${fld(x.id,'tag','Tagline',x.tag)}${fld(x.id,'price','Price (ZAR)',x.price,'number')}${fld(x.id,'desc','Description',x.desc,'area')}
 <div class="ar"><b>Model dimensions (cm)</b>${[['Width',0],['Depth',1],['Height',2]].map(([label,index])=>`<label>${label}<input type="number" min="1" step="1" data-pid="${x.id}" data-dim="${index}" value="${x.dims[index]}" ${x.dimsLocked?'disabled':''}></label>`).join('')}<label style="display:flex;gap:.5rem;align-items:center"><input type="checkbox" data-dims-lock="${x.id}" ${x.dimsLocked?'checked':''} style="width:auto"> Lock dimensions</label></div>
 ${Store.finishTypes().map(ft=>`<div class="ar"><b>${esc(ft.name)} customization</b>${chk2(`data-pieceavailability="${x.id}|${ft.id}"`,'true',`Offer ${ft.name.toLowerCase()} as a customizable option`,pieceTypeAvailable(x.id,ft.id))}${defaultMaterial(x.id,ft.id,defaultOptions(ft.id,x.defaults?.[ft.id]),x.defaults)}${ft.id==='fabric'?'<a href="product.html?id='+encodeURIComponent(x.id)+'" style="border-bottom:1px solid var(--line);justify-self:start">Open piece page to edit fabric texture mapping</a>':''}</div>`).join('')}
 ${row('3D model (.glb / .gltf)','model:'+x.id,'.glb,.gltf,model/gltf-binary')}${[1,2,3].map(n=>row('Gallery photo or video '+n,`gallery:${x.id}:${n}`,'image/*,video/*')).join('')}<div class="acts"><button data-delprod="${x.id}">Delete this piece</button></div></details>`).join('')}
 </div><div class="acts" id="adm-final"><button data-act="apply">Apply changes</button><button data-act="export">Export text</button><button data-act="import">Import text</button><button data-act="reset">Reset everything</button><button data-act="lock">Lock</button></div>`;
 document.body.append(p);requestAnimationFrame(()=>p.classList.add('open'));
 // Each group of controls lives in its own collapsible "burger" section
 const scroll=p.querySelector('#adm-scroll');
 [...scroll.querySelectorAll(':scope>h4')].forEach(h=>{const d=document.createElement('details');d.className='sec';const s=document.createElement('summary');s.textContent='☰ '+h.textContent;d.append(s);
  let n=h.nextSibling;while(n&&!(n.nodeType===1&&n.tagName==='H4')){const nx=n.nextSibling;d.append(n);n=nx}if(h.textContent==='Mapping')d.open=true;h.replaceWith(d)});
 const noResults=document.createElement('p');noResults.className='note';noResults.id='adm-no-results';noResults.textContent='No matching settings.';noResults.hidden=true;scroll.append(noResults);
 p.querySelector('#adm-search').addEventListener('input',e=>{
  const query=e.target.value.trim().toLocaleLowerCase();let found=false;
  scroll.querySelectorAll(':scope>.sec').forEach(section=>{
   const nodes=[...section.children].filter(node=>node!==section.querySelector(':scope>summary'));
   const title=section.querySelector(':scope>summary').textContent.toLocaleLowerCase();
   const match=node=>node.textContent.toLocaleLowerCase().includes(query);
   const sectionMatch=!query||title.includes(query)||section.textContent.toLocaleLowerCase().includes(query);
   section.hidden=!sectionMatch;found ||= sectionMatch;
   if(query&&sectionMatch){section.open=true;
    if(!title.includes(query)){
     nodes.forEach(node=>{if(node.matches('label, .ar, .acts, p'))node.hidden=!match(node)});
     section.querySelectorAll('details:not(.sec)').forEach(detail=>{detail.hidden=!match(detail);if(!detail.hidden)detail.open=true});
    }
   }else if(!query){nodes.forEach(node=>{node.hidden=false});section.querySelectorAll('details:not(.sec)').forEach(detail=>{detail.hidden=false})}
  });
  noResults.hidden=!query||found;
 });
 if(window.__prod)fillMap();addEventListener('prod-ready',fillMap);
 p.addEventListener('change',async e=>{const t=e.target;
   if(t.dataset.fe){const [id,k]=t.dataset.fe.split('|');Store.editFabric(id,k,t.value);if(k==='type')reload();return}
  if(t.dataset.mft){Store.setMaterialFinishTypes(t.dataset.mft,[...p.querySelectorAll(`[data-mft="${t.dataset.mft}"]`)].filter(i=>i.checked).map(i=>i.value));return}
  if(t.id==='nf-type'){
   const defaults=['Fabric','Leather','Velvet','Linen'].includes(t.value)?['fabric']:['Wood','Metal'].includes(t.value)?['frame']:[];
   p.querySelectorAll('[data-newmft]').forEach(i=>i.checked=defaults.includes(i.value));return
  }
  if(t.dataset.npdefault)return;
  if(t.dataset.npDimsLock!==undefined){['np-w','np-d','np-h'].forEach(id=>document.getElementById(id).disabled=t.checked);return}
  if(t.dataset.dimsLock){Store.setProduct(t.dataset.dimsLock,'dimsLocked',t.checked);t.closest('details').querySelectorAll('[data-dim]').forEach(i=>i.disabled=t.checked);return}
  if(t.dataset.dim!==undefined){const fields=[...t.closest('details').querySelectorAll('[data-dim]')],dims=fields.map(i=>Math.max(1,Math.round(Number(i.value)||1)));fields.forEach((input,index)=>input.value=dims[index]);Store.setProduct(t.dataset.pid,'dims',dims);return}
  if(t.dataset.pdefault){
   const [pid,ftid]=t.dataset.pdefault.split('|');Store.setPieceDefault(pid,ftid,t.value);
   return
  }
  if(t.dataset.pieceavailability){const [pid,ftid]=t.dataset.pieceavailability.split('|');Store.setPieceFinishAvailability(pid,ftid,t.checked);return}
  if(t.dataset.npoptions)return;
  if(t.dataset.stfab!==undefined){Store.setStudioFabrics([...p.querySelectorAll('[data-stfab]')].filter(i=>i.checked).map(i=>i.value));return}
  if(t.dataset.stfin){const [ftid]=t.dataset.stfin.split('|');Store.setStudioFinishes(ftid,[...p.querySelectorAll(`[data-stfin^="${ftid}|"]`)].filter(i=>i.checked).map(i=>i.value));return}
  if(t.dataset.site){
   if(t.dataset.site==='viewportMinZoom'||t.dataset.site==='viewportMaxZoom'){
    const value=Number(t.value),v=Store.viewportCfg(),valid=Number.isFinite(value)&&value>0&&(t.dataset.site==='viewportMinZoom'?value<v.maxZoom:value>v.minZoom);
    if(!valid){alert('Zoom distances must be positive, and the farthest distance must be greater than the closest distance.');t.value=t.dataset.site==='viewportMinZoom'?v.minZoom:v.maxZoom;return}
   }
   Store.setSite(t.dataset.site,t.type==='checkbox'?t.checked:t.type==='number'?Number(t.value):t.value.trim());return
  }
  if(t.id==='np-file'&&t.files[0]){if(!document.getElementById('np-dims-lock').checked){try{const [w,d,h]=await measureGLB(t.files[0]);['np-w','np-d','np-h'].forEach((i,k)=>document.getElementById(i).value=[w,d,h][k])}catch{alert('Could not read that model. You can still enter the size manually.')}}return}
  if(t.dataset.cn){const c=editableColls().find(x=>x.id===t.dataset.cn);if(c){c.name=t.value.trim()||c.name;Store.save()}return}
  if(t.dataset.cp){const [cid,pid,k]=t.dataset.cp.split('|'),pc=editableColls().find(x=>x.id===cid)?.pieces.find(x=>x.id===pid);if(pc){pc[k]=k==='name'?t.value.trim():Math.max(0,Number(t.value)||0);Store.save()}return}
  if(t.dataset.addpieces&&t.files.length){const c=editableColls().find(x=>x.id===t.dataset.addpieces);if(!c){alert('Could not find that collection.');return}t.disabled=true;
   for(const f of t.files){const [w,d,h]=await measureGLB(f).catch(()=>[100,100,80]),id='p'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);await Store.put('piece:'+c.id+':'+id,f);c.pieces.push({id,name:f.name.replace(/\.(glb|gltf)$/i,'').replace(/[-_]+/g,' '),w,d,h,price:0})}
   Store.save();reload();return}
  if(t.dataset.sh){Store.setShop(t.dataset.sh,t.type==='checkbox'?t.checked:Math.max(0,Number(t.value)||0));return}
  if(t.dataset.st){Store.setStudio(t.dataset.st,t.type==='checkbox'?t.checked:Math.max(0,Number(t.value)||0));return}
  if(t.dataset.pid){Store.setProduct(t.dataset.pid,t.dataset.k,t.value);return}
  if(t.dataset.slot&&t.files[0]){t.disabled=true;await Store.put(t.dataset.slot,t.files[0]);reload()}});
 p.addEventListener('click',async e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.matOrder){const list=p.querySelector('#adm-material-list'),rows=[...list.querySelectorAll(':scope>details')],row=b.closest('details'),i=rows.indexOf(row),j=i+(b.dataset.matOrder==='up'?-1:1);
   if(i>=0&&j>=0&&j<rows.length){if(j<i)rows[j].before(row);else rows[j].after(row);const reordered=[...list.querySelectorAll(':scope>details')];Store.setMaterialOrder(reordered.map(item=>item.dataset.materialId));
    reordered.forEach((item,index)=>item.querySelectorAll('[data-mat-order]').forEach(button=>{button.disabled=button.dataset.matOrder==='up'?index===0:index===reordered.length-1}))}return}
  if(b.dataset.del){await Store.del(b.dataset.del);return reload()}
  const cd=b.dataset;
  if(cd.delprod){if(confirm('Delete this piece from the shop?')){Store.deleteProduct(cd.delprod);await Store.del('model:'+cd.delprod);reload()}return}
  if(cd.delpiece){const [cid,pid]=cd.delpiece.split('|'),c=editableColls().find(x=>x.id===cid);if(c&&confirm('Remove this piece?')){c.pieces=c.pieces.filter(x=>x.id!==pid);Store.save();await Store.del('piece:'+cid+':'+pid);reload()}return}
  if(cd.delcoll){const collections=editableColls(),c=collections.find(x=>x.id===cd.delcoll);if(c&&confirm('Delete this whole collection?')){for(const piece of c.pieces)await Store.del('piece:'+c.id+':'+piece.id);Store.cfg.collections=collections.filter(x=>x.id!==c.id);Store.save();reload()}return}
  if(cd.delfintype){if(Store.finishTypes().length<=1){alert('Keep at least one finish type.');return}if(confirm('Delete this finish type?')){Store.deleteFinishType(cd.delfintype);reload()}return}
  if(cd.delfab){if(FABRIC_LIST.some(f=>f.id===cd.delfab)&&FABRIC_LIST.length<=1){alert('Keep at least one fabric.');return}if(confirm('Delete this fabric?')){Store.deleteFabric(cd.delfab);await Store.del('fabric:'+cd.delfab);reload()}return}
  const a=b.dataset.act;
  if(a==='close'){p.classList.remove('open');sessionStorage.admOpen='0'}
  if(a==='apply'){savePendingMapping();reload()}
  if(a==='restoredef'){delete Store.cfg.deleted;Store.save();reload()}
  if(a==='restorefab'){delete Store.cfg.deletedFabrics;Store.save();reload()}
  if(a==='resetmat'){if(confirm('Reset all materials and finish settings to default?')){Store.restoreDefaultMaterials();reload()}return}
  if(a==='addfintype'){const g=id=>document.getElementById(id),name=g('nft-name').value.trim();if(!name){alert('Please enter a name for the finish type.');return}
   const target=(g('nft-target').value.trim()||name).toLowerCase().replace(/[^a-z0-9_-]+/g,'-');
   const id=target.slice(0,24)||'fin-'+Date.now().toString(36);Store.addFinishType({id,name,target});reload();return}
  if(a==='addfab'){const g=id=>document.getElementById(id),name=g('nf-name').value.trim();if(!name){alert('Please name the fabric.');return}
   const id='f-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,20)+'-'+Date.now().toString(36).slice(-4),im=g('nf-img').files[0];if(im)await Store.put('fabric:'+id,im);
   Store.addFabric({id,name,type:g('nf-type').value,hex:g('nf-hex').value,desc:g('nf-desc').value.trim()});
   Store.setMaterialFinishTypes(id,[...p.querySelectorAll('[data-newmft]')].filter(i=>i.checked).map(i=>i.value));reload()}
  if(a==='addprod'){const g=id=>document.getElementById(id),f=g('np-file').files[0],name=g('np-name').value.trim();if(!name||!f){alert('Please enter a name and choose a GLB model.');return}
   const id='x-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,24)+'-'+Date.now().toString(36).slice(-4);await Store.put('model:'+id,f);
   Store.addProduct({id,name,cat:g('np-cat').value,sub:g('np-sub').value.trim()||g('np-cat').value,tag:g('np-tag').value.trim(),price:Number(g('np-price').value)||0,mat:g('np-mat').value.trim(),desc:g('np-desc').value.trim(),dims:['np-w','np-d','np-h'].map(i=>Number(g(i).value)||100),dimsLocked:g('np-dims-lock').checked});
   p.querySelectorAll('[data-npdefault]').forEach(s=>{if(s.value)Store.setPieceDefault(id,s.dataset.npdefault,s.value)});
   p.querySelectorAll('[data-npoptions]').forEach(i=>Store.setPieceFinishAvailability(id,i.dataset.npoptions,i.checked));
   reload()}
  if(a==='addcoll'){const n=document.getElementById('nc-name').value.trim();if(!n){alert('Please name the collection.');return}editableColls().push({id:'c'+Date.now().toString(36),name:n,pieces:[]});Store.save();reload()}
  if(a==='expprod'){e.preventDefault();e.stopPropagation();const status=document.getElementById('repo-pub-status'),progress=document.getElementById('repo-pub-progress');
   if(typeof window.showDirectoryPicker!=='function'){await showRepoStatus('This browser cannot write to a selected folder. Use current Chrome or Edge, or export the changes another way.');return}
   let folderPromise;try{folderPromise=window.showDirectoryPicker({mode:'readwrite'})}catch(error){await showRepoStatus(`Could not open the folder picker: ${error.message}`);console.error(error);return}
   b.disabled=true;progress.hidden=true;sessionStorage.setItem('repo-pub-running','1');sessionStorage.removeItem('repo-pub-progress');status.textContent='Folder picker opened. Select the Studio project folder containing package.json.';sessionStorage.setItem('repo-pub-status',status.textContent);
   try{const root=await folderPromise;savePendingMapping();await prepareRepoChanges(root)}
   catch(error){const message=error.name==='AbortError'?'Folder selection cancelled. No files were written.':`Could not prepare repository changes: ${error.message}`;await showRepoStatus(message);sessionStorage.removeItem('repo-pub-running');console.error(error)}
   finally{b.disabled=false}return}
  if(a==='orders'){const l=document.createElement('a');l.href=URL.createObjectURL(new Blob([localStorage.getItem('dekara-orders')||'[]'],{type:'application/json'}));l.download='demo-orders.json';l.click()}
  if(a==='clearorders'&&confirm('Clear all demo orders?')){localStorage.removeItem('dekara-orders');reload()}
  if(a==='lock'){sessionStorage.clear();location.reload()}
  if(a==='export'){const l=document.createElement('a');l.href=URL.createObjectURL(new Blob([JSON.stringify(Store.cfg,null,2)],{type:'application/json'}));l.download='dekara-content.json';l.click()}
  if(a==='import'){const i=document.createElement('input');i.type='file';i.accept='.json';i.onchange=async()=>{try{Store.replaceCfg(JSON.parse(await i.files[0].text()));reload()}catch{alert('That file could not be read.')}};i.click()}
  if(a==='reset'&&confirm('Remove all custom text and uploaded files?')){await Store.discardLocal();reload()}});
}
if(sessionStorage.adm==='1'&&sessionStorage.admOpen==='1')openPanel();
// Open the admin on mobile: tap the footer text 5 times quickly
{let n=0,t0=0;document.addEventListener('click',e=>{if(!matchMedia('(max-width: 960px)').matches||!e.target.closest('.ftr .fine'))return;const now=Date.now();n=now-t0>2000?1:n+1;t0=now;if(n>=5){n=0;trig.click()}})}
