import { PRODUCTS, FINISHES, getMapping, mappingId, ORIGINAL } from './products.js';
import { viewer } from './viewer.js';
import * as Basket from './basket.js';
import { fit, openAR } from './ar.js';
import { initReviews } from './reviews.js';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const p=PRODUCTS.find(x=>x.id===new URLSearchParams(location.search).get('id'))||PRODUCTS[0];
if(!p)location.replace('shop.html');else{
document.title=`${p.name} | Dekara Designs`;
$('p-tag').textContent=p.cat+' · '+p.tag;$('p-name').textContent=p.name;$('p-desc').textContent=p.desc;
$('p-spec').innerHTML=`<div><span>Construction</span>${esc(p.mat)}</div><div><span>Delivery</span>4–6 weeks</div>`;
const v=viewer($('p-canvas'),p.id,{orbit:true});
const opts=(p.fabrics&&p.fabrics.length)?p.fabrics:[['Oyster','#d4cabb','oyster',null,'']];
let fabric=opts[0],cur,override=null;
const ftypes=(p.finishTypes&&p.finishTypes.length)?p.finishTypes:[{id:'frame',name:'Frame',target:'frame',finishes:FINISHES},{id:'fabric',name:'Fabric',target:'fabric',materialType:'Fabric',finishes:opts}];
const curFinishes={};
ftypes.forEach(ft=>{curFinishes[ft.id]=ft.finishes[0]||FINISHES[0]});
const paint=()=>v.setFabric(fabric,override||getMapping(p.id,fabric[2],'fabric'));

const selectFabric=id=>{const f=opts.find(z=>z[2]===id);if(!f)return;fabric=f;override=null;paint();update()};

// Render finish types
const finBox=$('p-finishes');
ftypes.forEach(ft=>{
 const label=document.createElement('label'),value=document.createElement('span');
 label.append(`${ft.name} finish · `,value);
 value.textContent=curFinishes[ft.id]?.[0]||'';
 const sw=document.createElement('div');sw.className='sw';
 sw.innerHTML=(ft.finishes||[]).map(([n,h,id,img],i)=>`<button class="${i?'':'on'}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-i="${i}"></button>`).join('');
 const selectFinish=m=>{if(!m)return;if(ft.id==='fabric')selectFabric(m[2]);curFinishes[ft.id]=m;sw.querySelectorAll('button').forEach(x=>x.classList.toggle('on',ft.finishes[x.dataset.i]===m));value.textContent=m[0];v.setFinish(ft.target||ft.name,m,getMapping(p.id,m[2],ft.id));update()};
 sw.onclick=e=>{const b=e.target.closest('button');if(b)selectFinish(ft.finishes[b.dataset.i])};
 finBox.append(label,sw);
 if(curFinishes[ft.id])selectFinish(curFinishes[ft.id]);
 ft.select=selectFinish;
});

function update(){const d=p.dims,price=p.price;$('p-price').textContent='R '+price.toLocaleString('en-ZA');
 const ftxt=Object.values(curFinishes).map(m=>m[0]).join(', ');
 cur={d,price,ftxt}}
update();paint();
$('p-add').onclick=()=>Basket.add({key:`p:${p.id}:${fabric[0]}:${cur.ftxt}:${cur.d.join('x')}`,name:p.name,desc:`${fabric[0]} · ${cur.ftxt} · ${cur.d.join(' × ')} cm`,price:cur.price,swatch:fabric[1]});
import('./cardviews.js').then(({cardHtml,mount})=>{const rel=[...PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id),...PRODUCTS.filter(x=>x.cat!==p.cat)].slice(0,4);
 $('related').innerHTML=rel.map(x=>cardHtml(x)).join('');$('related').querySelectorAll('.card').forEach(mount)});
$('p-gallery').innerHTML=[1,2,3].map(n=>`<div data-slot="gallery:${p.id}:${n}" data-label="Photo ${n}"></div>`).join('');applySlots();
$('p-wish').dataset.wish=p.id;$('p-cmp').dataset.cmp=p.id;
$('p-ar').onclick=()=>{const o=fit(v.getModel().object,cur.d);openAR(o,p.name,'dekara-'+p.id)};
initReviews(p.id);
const mappingOptions=[
 ...ftypes.flatMap(ft=>(ft.finishes||[]).map(material=>({key:mappingId(material[2],ft.id),label:`${ft.name}: ${material[0]}`,kind:'finish',material,ft})))
];
// Hooks for the admin panel's per-material mapping preview.
window.__prod={piece:p,fabrics:p.fabrics,current:()=>fabric||p.fabrics[0],mappingOptions,
 mapping:key=>{const item=mappingOptions.find(x=>x.key===key);return item?getMapping(p.id,item.material[2],item.ft?.id):getMapping(p.id,key)},
 selectMapping:key=>{const item=mappingOptions.find(x=>x.key===key);if(!item)return;
  item.ft.select(item.material)},
 previewMapping:(key,m)=>{const item=mappingOptions.find(x=>x.key===key);if(!item)return;
  item.ft.select(item.material);
  if(item.ft.id==='fabric'){override=m;v.setFabric(item.material,m)}
  v.setFinish(item.ft.target||item.ft.name,item.material,m);update()
 }};
dispatchEvent(new Event('prod-ready'));
}
