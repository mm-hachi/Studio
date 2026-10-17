import * as Store from './store.js';
import { PRODUCTS, CATS, FABRIC_LIST } from './products.js';
import { measureGLB } from './loader.js';
import { publish, ghTest, ghConfig, ghSave } from './publish.js';
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
const siteHtml=()=>{const c=Store.siteCfg();const t=(k,l,ph)=>`<label>${l}<input type="text" data-site="${k}" value="${esc(c[k]||'')}" placeholder="${ph}"></label>`;
 return `<h4>Business details</h4><p class="note">Shown in the footer and contact page. A WhatsApp number adds a floating chat button.</p>${t('phone','Phone','e.g. 010 000 0000')}${t('email','Email','e.g. info@yourdomain.co.za')}${t('whatsapp','WhatsApp number (with country code)','e.g. 27821234567')}<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-site="backlight" ${c.backlight===false?'':'checked'} style="width:auto"> Backlight on main viewports</label>${t('apiBase','Backend API URL (when your backend is live)','https://your-api.workers.dev')}<label>Backlight strength (%)<input type="number" min="0" max="300" data-site="backlightStrength" value="${c.backlightStrength??100}"></label>`};
const shopHtml=()=>{const c=Store.shopCfg();let o=[];try{o=JSON.parse(localStorage.getItem('dekara-orders'))||[]}catch{}
 return `<h4>Basket and checkout</h4><label>Delivery fee (ZAR)<input type="number" min="0" data-sh="delivery" value="${c.delivery}"></label><label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-sh="payNow" ${c.payNow?'checked':''} style="width:auto"> Offer "Pay now" (demo payments)</label>
 <details><summary>Demo orders (${o.length})</summary>${o.slice(0,20).map(x=>`<div class="ar"><b>${esc(x.ref)}</b><small>${esc(x.name)} · ${esc(String(x.date).slice(0,10))} · R ${Math.round(x.total).toLocaleString('en-ZA')}</small></div>`).join('')||'<p class="note">No orders yet.</p>'}<div class="acts"><button data-act="orders">Export orders</button><button data-act="clearorders">Clear orders</button></div></details>`};
const addHtml=()=>`<h4>Add a piece to the shop</h4><p class="note">Upload a GLB (Draco and Meshopt compression are supported). Dimensions fill in from the model and can be edited. For a live site, export the additions and commit the files to the repo.</p>
 <label>Name<input id="np-name"></label><label>Category<select id="np-cat">${CATS.map(c=>`<option>${c}</option>`).join('')}</select></label><label>Subcategory<input id="np-sub"></label><label>Tagline<input id="np-tag"></label><label>Price (ZAR)<input id="np-price" type="number" min="0"></label><label>Materials<input id="np-mat"></label><label>Description<textarea id="np-desc" rows="3"></textarea></label>
 <label>3D model (.glb)<input type="file" id="np-file" accept=".glb,.gltf"></label><div class="ar"><b>Fabrics for this piece</b>${FABRIC_LIST.map(f=>chk2('data-npf',f.id,f.name,true)).join('')}</div><label>Width cm<input id="np-w" type="number" min="1"></label><label>Depth cm<input id="np-d" type="number" min="1"></label><label>Height cm<input id="np-h" type="number" min="1"></label>
 <div class="acts"><button data-act="addprod">Add to shop</button></div>`;
const collHtml=()=>{const L=Store.colls(),F=[['name','Name'],['price','Price (ZAR)'],['w','Width cm'],['d','Depth cm'],['h','Height cm']];
 return `<h4>Studio collections</h4><p class="note">Collections of GLB pieces that customers arrange on the Custom Studio canvas, just like the built-in modules. Each piece is stretched to the width, depth and height you set.</p>${L.map(c=>`<details><summary>${esc(c.name)} (${c.pieces.length})</summary><label>Collection name<input data-cn="${c.id}" value="${esc(c.name)}"></label>${row('Collection preview image','collection:'+c.id,'image/*')}${c.pieces.map(p=>`<div class="ar"><b>${esc(p.name)}</b>${F.map(([k,l])=>`<label>${l}<input ${k==='name'?'':'type="number" min="0"'} data-cp="${c.id}|${p.id}|${k}" value="${esc(p[k])}"></label>`).join('')}<button data-delpiece="${c.id}|${p.id}">Remove piece</button></div>`).join('')}<label>Add pieces (GLB, several allowed)<input type="file" multiple accept=".glb,.gltf" data-addpieces="${c.id}"></label><div class="acts"><button data-delcoll="${c.id}">Delete collection</button></div></details>`).join('')}
 <label>New collection name<input id="nc-name"></label><div class="acts"><button data-act="addcoll">Create collection</button><button data-act="expprod">Export additions for repo</button></div>`};
const studioHtml=()=>{const c=Store.studioCfg(),N={seat:'Seat',corner:'Corner',chaise:'Chaise',ottoman:'Ottoman',arm:'Arm'},stm=Store.studioMaterials(),fts=Store.finishTypes();
 const num=(k,l,v)=>`<label>${l}<input type="number" min="0" data-st="${k}" value="${v}"></label>`;
 const chk=(k,l,v)=>`<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-st="${k}" ${v?'checked':''} style="width:auto"> ${l}</label>`;
 return `<h4>Custom Studio</h4><p class="note">Decide how far a customer can take a build, and which fabrics &amp; finishes are offered.</p>${num('maxPieces','Max pieces on canvas',c.maxPieces)}${num('maxWidth','Max overall length (cm)',c.maxWidth)}${num('maxDepth','Max overall depth (cm)',c.maxDepth)}${chk('snap','Snap pieces together',c.snap)}
 <details><summary>Modules, prices and maximums</summary>${Object.keys(N).map(k=>`<div class="ar"><b>${N[k]}</b>${chk('enabled.'+k,'Available to customers',c.enabled[k])}${num('prices.'+k,'Price (ZAR)',c.prices[k])}${num('max.'+k,'Max of this type',c.max[k])}</div>`).join('')}</details>
 <details><summary>Starter sizes offered</summary>${[1,2,3,4].map(n=>chk('presets.'+n,n+'-seater',c.presets[n])).join('')}</details>
 <details><summary>Fabrics offered in Studio</summary><div class="ar"><b>Studio fabrics</b>${FABRIC_LIST.map(f=>chk2('data-stfab',f.id,f.name,stm.fabrics?stm.fabrics.includes(f.id):(f.type!=='Wood'&&f.type!=='Metal'))).join('')}</div></details>
 <details><summary>Finishes offered in Studio</summary>${fts.map(ft=>`<div class="ar"><b>${esc(ft.name)} finishes</b>${FABRIC_LIST.map(f=>chk2(`data-stfin="${ft.id}|${f.id}"`,f.id,f.name,stm.finishes?.[ft.id]?stm.finishes[ft.id].includes(f.id):(f.type==='Wood'||f.type==='Metal'))).join('')}</div>`).join('')}</details>`};
const pubHtml=()=>{const g=ghConfig();const f=(k,l,t='text',ph='')=>`<label>${l}<input type="${t}" data-gh="${k}" value="${esc(g[k]||'')}" placeholder="${ph}" autocomplete="off"></label>`;
 return `<h4>Publish to GitHub</h4><p class="note">Publishes your settings, prices, fabrics and product data to <code>data/site.json</code>. <strong>Models, images and videos are NOT uploaded</strong> — add those files to the repo yourself (GitHub blocks large binary files). Create a fine-grained GitHub token limited to this one repository with "Contents: Read and write". The token is stored only in this browser.</p>${f('owner','GitHub owner (username or organisation)')}${f('repo','Repository')}${f('branch','Branch','text','main')}${f('token','Token','password')}

 <div class="acts"><button data-act="ghpub">Publish changes</button><button data-act="ghtest">Test connection</button><button data-act="ghdiscard">Discard local changes</button></div><p class="note" id="gh-st"></p>`};
const FT=['Fabric','Leather','Velvet','Linen','Wood','Stone','Metal','Other'];
const chk2=(attr,val,label,on)=>`<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem;margin:.3rem 0"><input type="checkbox" ${attr} value="${esc(val)}" ${on?'checked':''} style="width:auto">${esc(label)}</label>`;
const fabHtml=()=>{
 const fts=Store.finishTypes();
 return `<h4>Materials library</h4><p class="note">Add or delete fabrics and finishes customers can choose from. Tick which ones each piece and Custom Studio offer. Assign custom finish types (matching the material name in GLB models).</p>
 <details><summary>Finish types (${fts.length})</summary><p class="note">Each finish type matches a named material in GLB models (e.g. "frame", "legs", "base").</p>
 ${fts.map(ft=>`<div class="ar"><b>${esc(ft.name)}</b><small>Target in GLB: <code>${esc(ft.target||ft.name)}</code></small>${ft.id!=='fabric'&&fts.length>1?`<button data-delfintype="${esc(ft.id)}">Delete this finish type</button>`:''}</div>`).join('')}
 <label>New finish type name<input id="nft-name" placeholder="e.g. Legs or Base"></label><label>GLB material name (target)<input id="nft-target" placeholder="e.g. legs (matches GLB material name)"></label>
 <div class="acts"><button data-act="addfintype">Add finish type</button></div></details>
 <div id="adm-material-list">${FABRIC_LIST.map((f,i)=>`<details data-material-id="${esc(f.id)}"><summary>${esc(f.name)} (${esc(f.type||'Fabric')})</summary><div class="acts material-order"><button data-mat-order="up"${i===0?' disabled':''}>Move earlier</button><button data-mat-order="down"${i===FABRIC_LIST.length-1?' disabled':''}>Move later</button></div><label>Name<input data-fe="${f.id}|name" value="${esc(f.name)}"></label><label>Type<select data-fe="${f.id}|type">${FT.map(t=>`<option${t===f.type?' selected':''}>${t}</option>`).join('')}</select></label><label>Colour<input type="color" data-fe="${f.id}|hex" value="${esc(f.hex)}"></label><label>Description<textarea rows="3" data-fe="${f.id}|desc">${esc(f.desc)}</textarea></label>${row('Swatch / texture image','fabric:'+f.id,'image/*')}<div class="acts"><button data-delfab="${f.id}">Delete this material</button></div></details>`).join('')}</div>
 <label>New material name<input id="nf-name"></label><label>Type<select id="nf-type">${FT.map(t=>`<option>${t}</option>`).join('')}</select></label><label>Colour<input type="color" id="nf-hex" value="#cccccc"></label><label>Description<textarea id="nf-desc" rows="2"></textarea></label><label>Texture image (optional)<input type="file" id="nf-img" accept="image/*"></label>
 <div class="acts"><button data-act="addfab">Add material</button><button data-act="resetmat">Reset materials to default</button></div>`;
};
// Live "Mapping node" editor for the piece page: scale, rotation and location of the fabric on this piece
function fillMap(){const P=window.__prod,el=document.getElementById('map-body');if(!P||!el||!P.mappingOptions?.length)return;const f0=P.mappingOptions.find(x=>x.ft.id==='fabric'&&x.material[2]===P.current()[2])||P.mappingOptions[0],q=id=>document.getElementById(id),K=['sx','sy','rot','ox','oy'];
 const sl=(k,l,min,max,st)=>`<label>${l} <b id="v-${k}"></b><input type="range" id="mp-${k}" min="${min}" max="${max}" step="${st}"></label>`;
 el.innerHTML=`<p class="note">Choose a fabric or finish material to map. Each fabric and finish type/material has independent scale, rotation and location values.</p><label>Fabric / finish<select id="mp-f">${P.mappingOptions.map(o=>`<option value="${esc(o.key)}"${o.key===f0.key?' selected':''}>${esc(o.label)}</option>`).join('')}</select></label>
 ${sl('sx','Scale X',.05,40,.05)}${sl('sy','Scale Y',.05,40,.05)}<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0"><input type="checkbox" id="mp-link" checked style="width:auto"> Link X and Y scale</label>${sl('rot','Rotation (degrees)',-180,180,1)}${sl('ox','Location X',-2,2,.01)}${sl('oy','Location Y',-2,2,.01)}
 <p class="note" id="mp-st"></p><div class="acts"><button data-mp="lock">Lock values</button><button data-mp="reset">Reset</button></div>`;
 const fid=()=>q('mp-f').value,read=()=>Object.fromEntries(K.map(k=>[k,Number(q('mp-'+k).value)]));
 const load=()=>{const m=P.mapping(fid());K.forEach(k=>{q('mp-'+k).value=m[k];q('v-'+k).textContent=m[k]});q('mp-st').textContent=m.locked?'Locked. Customers see these values.':'Not locked yet. Lock to save these values for customers.'};
 el.addEventListener('change',e=>{if(e.target.id==='mp-f'){P.selectMapping(fid());load()}});
 el.addEventListener('input',e=>{const t=e.target;if(!/^mp-(sx|sy|rot|ox|oy)$/.test(t.id))return;
  if(q('mp-link').checked&&(t.id==='mp-sx'||t.id==='mp-sy'))q('mp-sx').value=q('mp-sy').value=t.value;
  K.forEach(k=>q('v-'+k).textContent=q('mp-'+k).value);P.previewMapping(fid(),read());q('mp-st').textContent='Previewing. Lock to save these values for customers.'});
 el.addEventListener('click',e=>{const a=e.target.dataset.mp;if(a==='lock'){Store.setMapping(P.piece.id,fid(),{...read(),locked:true});q('mp-st').textContent='Locked. Customers see these values.'}
  if(a==='reset'){Store.delMapping(P.piece.id,fid());P.selectMapping(fid());load()}});
 load()}
function openPanel(){
 sessionStorage.admOpen='1';
 let p=document.getElementById('adm');if(p){p.classList.add('open');return}
 p=document.createElement('aside');p.id='adm';
 const slots=[...document.querySelectorAll('[data-slot]')].filter(s=>!s.dataset.slot.startsWith('gallery'));
 p.innerHTML=`<div class="adm-top"><header><h3>Steward's Chamber</h3><button data-act="close" aria-label="Close admin panel">✕</button></header><input id="adm-search" type="search" placeholder="Search admin settings…" aria-label="Search admin settings"></div>
 <div id="adm-scroll">
 <p class="note">Everything here is saved in this browser only. For a live site that all visitors see, these edits need a server or CMS behind them.</p>
 ${document.getElementById('p-canvas')?'<h4>Fabric mapping (this piece)</h4><div id="map-body"></div>':''}<h4>Media on this page</h4><p class="note">Every slot accepts an image or a video (MP4 or WebM; keep videos under about 50 MB). Background slots play silently on a loop; other videos show play controls.</p>${slots.map(s=>row(s.dataset.label||s.dataset.slot,s.dataset.slot,'image/*,video/*')).join('')||'<p class="note">No media slots on this page.</p>'}
 ${pubHtml()}${siteHtml()}${shopHtml()}${studioHtml()}${fabHtml()}${addHtml()}${collHtml()}<h4>Pieces</h4><div class="acts"><button data-act="restoredef">Restore deleted default pieces</button></div>${PRODUCTS.map(x=>`<details><summary>${esc(x.name)}</summary>${fld(x.id,'name','Name',x.name)}<label>Category<select data-pid="${x.id}" data-k="cat">${CATS.map(c=>`<option${c===x.cat?' selected':''}>${c}</option>`).join('')}</select></label>${fld(x.id,'sub','Subcategory',x.sub)}${fld(x.id,'tag','Tagline',x.tag)}${fld(x.id,'price','Price (ZAR)',x.price,'number')}${fld(x.id,'desc','Description',x.desc,'area')}<div class="ar"><b>Fabrics for this piece</b>${FABRIC_LIST.map(f=>chk2(`data-pf="${x.id}"`,f.id,f.name,x.fabrics.some(z=>z[2]===f.id))).join('')}<small>To set how each fabric is scaled on this piece, open its page with this panel open.</small><a href="product.html?id=${encodeURIComponent(x.id)}" style="border-bottom:1px solid var(--line);justify-self:start">Open piece page</a></div>
 ${Store.finishTypes().map(ft=>`<div class="ar"><b>${esc(ft.name)} finishes for this piece</b>${FABRIC_LIST.map(f=>chk2(`data-pfin="${x.id}|${ft.id}|${f.id}"`,f.id,f.name,(x.finishTypes?.find(t=>t.id===ft.id)?.finishes||[]).some(z=>z[2]===f.id))).join('')}</div>`).join('')}
 ${row('3D model (.glb / .gltf)','model:'+x.id,'.glb,.gltf,model/gltf-binary')}${[1,2,3].map(n=>row('Gallery photo or video '+n,`gallery:${x.id}:${n}`,'image/*,video/*')).join('')}<div class="acts"><button data-delprod="${x.id}">Delete this piece</button></div></details>`).join('')}
 </div><div class="acts" id="adm-final"><button data-act="apply">Apply changes</button><button data-act="export">Export text</button><button data-act="import">Import text</button><button data-act="reset">Reset everything</button><button data-act="lock">Lock</button></div>`;
 document.body.append(p);requestAnimationFrame(()=>p.classList.add('open'));
 // Each group of controls lives in its own collapsible "burger" section
 const scroll=p.querySelector('#adm-scroll');
 [...scroll.querySelectorAll(':scope>h4')].forEach(h=>{const d=document.createElement('details');d.className='sec';const s=document.createElement('summary');s.textContent='☰ '+h.textContent;d.append(s);
  let n=h.nextSibling;while(n&&!(n.nodeType===1&&n.tagName==='H4')){const nx=n.nextSibling;d.append(n);n=nx}if(h.textContent.startsWith('Fabric mapping'))d.open=true;h.replaceWith(d)});
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
  if(t.dataset.gh){ghSave(t.dataset.gh,t.value.trim());return}
  if(t.dataset.fe){const [id,k]=t.dataset.fe.split('|');Store.editFabric(id,k,t.value);return}
  if(t.dataset.pf){Store.setPieceFabrics(t.dataset.pf,[...p.querySelectorAll('[data-pf]')].filter(i=>i.dataset.pf===t.dataset.pf&&i.checked).map(i=>i.value));return}
  if(t.dataset.pfin){const [pid,ftid]=t.dataset.pfin.split('|');Store.setPieceFinishes(pid,ftid,[...p.querySelectorAll(`[data-pfin^="${pid}|${ftid}|"]`)].filter(i=>i.checked).map(i=>i.value));return}
  if(t.dataset.stfab!==undefined){Store.setStudioFabrics([...p.querySelectorAll('[data-stfab]')].filter(i=>i.checked).map(i=>i.value));return}
  if(t.dataset.stfin){const [ftid]=t.dataset.stfin.split('|');Store.setStudioFinishes(ftid,[...p.querySelectorAll(`[data-stfin^="${ftid}|"]`)].filter(i=>i.checked).map(i=>i.value));return}
  if(t.dataset.site){Store.setSite(t.dataset.site,t.type==='checkbox'?t.checked:t.type==='number'?Number(t.value):t.value.trim());return}
  if(t.id==='np-file'&&t.files[0]){try{const [w,d,h]=await measureGLB(t.files[0]);['np-w','np-d','np-h'].forEach((i,k)=>document.getElementById(i).value=[w,d,h][k])}catch{alert('Could not read that model. You can still enter the size manually.')}return}
  if(t.dataset.cn){const c=Store.colls().find(x=>x.id===t.dataset.cn);if(c){c.name=t.value.trim()||c.name;Store.save()}return}
  if(t.dataset.cp){const [cid,pid,k]=t.dataset.cp.split('|'),pc=Store.colls().find(x=>x.id===cid)?.pieces.find(x=>x.id===pid);if(pc){pc[k]=k==='name'?t.value.trim():Math.max(0,Number(t.value)||0);Store.save()}return}
  if(t.dataset.addpieces&&t.files.length){const c=Store.colls().find(x=>x.id===t.dataset.addpieces);t.disabled=true;
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
  if(cd.delpiece){const [cid,pid]=cd.delpiece.split('|'),c=Store.colls().find(x=>x.id===cid);if(c&&confirm('Remove this piece?')){c.pieces=c.pieces.filter(x=>x.id!==pid);Store.save();await Store.del('piece:'+cid+':'+pid);reload()}return}
  if(cd.delcoll){const c=Store.colls().find(x=>x.id===cd.delcoll);if(c&&confirm('Delete this whole collection?')){for(const p of c.pieces)await Store.del('piece:'+c.id+':'+p.id);Store.cfg.collections=Store.colls().filter(x=>x.id!==c.id);Store.save();reload()}return}
  if(cd.delfintype){if(Store.finishTypes().length<=1){alert('Keep at least one finish type.');return}if(confirm('Delete this finish type?')){Store.deleteFinishType(cd.delfintype);reload()}return}
  if(cd.delfab){if(FABRIC_LIST.length<=1){alert('Keep at least one fabric.');return}if(confirm('Delete this fabric?')){Store.deleteFabric(cd.delfab);await Store.del('fabric:'+cd.delfab);reload()}return}
  const a=b.dataset.act;
  if(a==='close'){p.classList.remove('open');sessionStorage.admOpen='0'}
  if(a==='apply')reload();
  if(a==='ghtest'||a==='ghpub'||a==='ghdiscard'){const st=document.getElementById('gh-st'),log=m=>{st.textContent=m};
   if(a==='ghdiscard'){if(confirm('Discard all local changes and show what is published in the repository?')){await Store.discardLocal();reload()}return}
   b.disabled=true;try{log(a==='ghtest'?await ghTest():await publish(log))}catch(x){log('Error: '+x.message)}b.disabled=false;return}
  if(a==='restoredef'){delete Store.cfg.deleted;Store.save();reload()}
  if(a==='restorefab'){delete Store.cfg.deletedFabrics;Store.save();reload()}
  if(a==='resetmat'){if(confirm('Reset all materials and finish settings to default?')){Store.restoreDefaultMaterials();reload()}return}
  if(a==='addfintype'){const g=id=>document.getElementById(id),name=g('nft-name').value.trim();if(!name){alert('Please enter a name for the finish type.');return}
   const target=(g('nft-target').value.trim()||name).toLowerCase().replace(/[^a-z0-9_-]+/g,'-');
   const id=target.slice(0,24)||'fin-'+Date.now().toString(36);Store.addFinishType({id,name,target});reload();return}
  if(a==='addfab'){const g=id=>document.getElementById(id),name=g('nf-name').value.trim();if(!name){alert('Please name the fabric.');return}
   const id='f-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,20)+'-'+Date.now().toString(36).slice(-4),im=g('nf-img').files[0];if(im)await Store.put('fabric:'+id,im);
   Store.addFabric({id,name,type:g('nf-type').value,hex:g('nf-hex').value,desc:g('nf-desc').value.trim()});reload()}
  if(a==='addprod'){const g=id=>document.getElementById(id),f=g('np-file').files[0],name=g('np-name').value.trim();if(!name||!f){alert('Please enter a name and choose a GLB model.');return}
   const id='x-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-').slice(0,24)+'-'+Date.now().toString(36).slice(-4);await Store.put('model:'+id,f);
   Store.addProduct({id,name,cat:g('np-cat').value,sub:g('np-sub').value.trim()||g('np-cat').value,tag:g('np-tag').value.trim(),price:Number(g('np-price').value)||0,mat:g('np-mat').value.trim(),desc:g('np-desc').value.trim(),dims:['np-w','np-d','np-h'].map(i=>Number(g(i).value)||100)});Store.setPieceFabrics(id,[...document.querySelectorAll('[data-npf]')].filter(c=>c.checked).map(c=>c.value));reload()}
  if(a==='addcoll'){const n=document.getElementById('nc-name').value.trim();if(!n){alert('Please name the collection.');return}Store.colls().push({id:'c'+Date.now().toString(36),name:n,pieces:[]});Store.save();reload()}
  if(a==='expprod'){const imgE={};FABRIC_LIST.forEach(f=>{if(Store.media('fabric:'+f.id))imgE[f.id]={image:`swatches/fabrics/${f.id}.jpg`}});const out={fabrics:(Store.cfg.addedFabrics||[]).map(f=>({...f,...(imgE[f.id]||{})})),fabricEdits:Object.fromEntries(Object.keys({...Store.cfg.fabricEdits,...imgE}).map(k=>[k,{...(Store.cfg.fabricEdits?.[k]||{}),...(imgE[k]||{})}])),finishTypes:Store.finishTypes(),materialOrder:Store.cfg.materialOrder||[],pieceFinishes:Store.cfg.pieceFinishes||{},studioFabrics:Store.cfg.studioFabrics||null,studioFinishes:Store.cfg.studioFinishes||{},mapping:Store.cfg.mapping||{},pieceFabrics:Store.cfg.pieceFabrics||{},deleted:Store.cfg.deleted||[],deletedFabrics:Store.cfg.deletedFabrics||[],products:(Store.cfg.added||[]).map(p=>({...p,model:`models/${p.id}.glb`})),collections:Store.colls().map(c=>({...c,image:Store.media('collection:'+c.id)?`models/collections/${c.id}/preview.jpg`:(c.image||null),pieces:c.pieces.map(p=>({...p,model:`models/collections/${c.id}/${p.id}.glb`}))}))};
   const dl=(blob,name)=>{const l=document.createElement('a');l.href=URL.createObjectURL(blob);l.download=name;l.click()};dl(new Blob([JSON.stringify(out,null,1)],{type:'application/json'}),'dekara-additions.json');
   const fl=[...FABRIC_LIST.map(f=>['fabric:'+f.id,'fabric_'+f.id+'.jpg']),...(Store.cfg.added||[]).map(p=>['model:'+p.id,p.id+'.glb']),...Store.colls().flatMap(c=>c.pieces.map(p=>['piece:'+c.id+':'+p.id,'collection_'+c.id+'_'+p.id+'.glb'])),...Store.colls().filter(c=>Store.media('collection:'+c.id)).map(c=>['collection:'+c.id,'collection_'+c.id+'.jpg'])];
   for(const [k,n] of fl){const m=Store.media(k);if(m){dl(await (await fetch(m.url)).blob(),n);await new Promise(r=>setTimeout(r,400))}}}
  if(a==='orders'){const l=document.createElement('a');l.href=URL.createObjectURL(new Blob([localStorage.getItem('dekara-orders')||'[]'],{type:'application/json'}));l.download='demo-orders.json';l.click()}
  if(a==='clearorders'&&confirm('Clear all demo orders?')){localStorage.removeItem('dekara-orders');reload()}
  if(a==='lock'){sessionStorage.clear();location.reload()}
  if(a==='export'){const l=document.createElement('a');l.href=URL.createObjectURL(new Blob([JSON.stringify(Store.cfg,null,2)],{type:'application/json'}));l.download='dekara-content.json';l.click()}
  if(a==='import'){const i=document.createElement('input');i.type='file';i.accept='.json';i.onchange=async()=>{try{Store.replaceCfg(JSON.parse(await i.files[0].text()));reload()}catch{alert('That file could not be read.')}};i.click()}
  if(a==='reset'&&confirm('Remove all custom text and uploaded files?')){await Store.discardLocal();reload()}});
}
if(sessionStorage.adm==='1'&&sessionStorage.admOpen==='1')openPanel();
// Open the admin on touch devices: tap the footer logo 5 times quickly
{let n=0,t0=0;document.addEventListener('click',e=>{if(!e.target.closest('.ftr .logo'))return;const now=Date.now();n=now-t0>2000?1:n+1;t0=now;if(n>=5){n=0;trig.click()}})}
