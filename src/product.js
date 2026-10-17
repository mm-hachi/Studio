import { PRODUCTS, FINISHES, getMapping, ORIGINAL } from './products.js';
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
let fabric=opts[0],s=[1,1,1],cur,override=null;
const ftypes=(p.finishTypes&&p.finishTypes.length)?p.finishTypes:[{id:'frame',name:'Frame',target:'frame',finishes:FINISHES}];
const curFinishes={};
ftypes.forEach(ft=>{curFinishes[ft.id]=ft.finishes[0]||FINISHES[0]});
const paint=()=>v.setFabric(fabric,override||getMapping(p.id,fabric[2]));

$('p-sw').innerHTML=opts.map(([n,h,id,img],i)=>`<button class="${i?'':'on'}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-k="${esc(id)}"></button>`).join('');
const selectFabric=id=>{const f=opts.find(z=>z[2]===id);if(!f)return;fabric=f;override=null;$('p-sw').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.k===id));paint();update()};
$('p-sw').onclick=e=>{const b=e.target.closest('button');if(b)selectFabric(b.dataset.k)};

// Render finish types
const finBox=$('p-fsw').parentElement;
if(ftypes.length===1){
 const ft=ftypes[0];
 $('p-fin').textContent=curFinishes[ft.id]?.[0]||'';
 $('p-fsw').innerHTML=(ft.finishes||[]).map(([n,h,id,img],i)=>`<button class="${i?'':'on'}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-i="${i}"></button>`).join('');
 $('p-fsw').onclick=e=>{const b=e.target.closest('button');if(!b)return;const m=ft.finishes[b.dataset.i];if(!m)return;curFinishes[ft.id]=m;$('p-fsw').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));v.setFinish(ft.target||ft.name,m);update()};
 if(curFinishes[ft.id])v.setFinish(ft.target||ft.name,curFinishes[ft.id]);
}else{
 const finLabels=finBox.querySelectorAll('label, .sw');finLabels.forEach(el=>el.remove());
 ftypes.forEach(ft=>{
  const lbl=document.createElement('label');lbl.innerHTML=`${esc(ft.name)} finish · <span id="p-fin-${esc(ft.id)}">${esc(curFinishes[ft.id]?.[0]||'')}</span>`;
  const sw=document.createElement('div');sw.className='sw';sw.id=`p-fsw-${ft.id}`;
  sw.innerHTML=(ft.finishes||[]).map(([n,h,id,img],i)=>`<button class="${i?'':'on'}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-i="${i}"></button>`).join('');
  sw.onclick=e=>{const b=e.target.closest('button');if(!b)return;const m=ft.finishes[b.dataset.i];if(!m)return;curFinishes[ft.id]=m;sw.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));document.getElementById(`p-fin-${ft.id}`).textContent=m[0];v.setFinish(ft.target||ft.name,m);update()};
  finBox.append(lbl,sw);
  if(curFinishes[ft.id])v.setFinish(ft.target||ft.name,curFinishes[ft.id]);
 });
}

['w','d','h'].forEach((k,i)=>$('r-'+k).oninput=e=>{s[i]=e.target.value/100;v.setDims(...s);update()});
function update(){const d=p.dims.map((x,i)=>Math.round(x*s[i]));['w','d','h'].forEach((k,i)=>$('o-'+k).textContent=d[i]+' cm');
 const f=s[0]*s[1]*s[2],price=Math.round(p.price*(1+(f-1)*.7)/10)*10;$('p-price').textContent='R '+price.toLocaleString('en-ZA');$('p-col').textContent=fabric[0];
 const ftxt=Object.values(curFinishes).map(m=>m[0]).join(', ');
 if($('p-fin'))$('p-fin').textContent=ftxt;cur={d,price,ftxt}}
update();paint();
$('p-add').onclick=()=>Basket.add({key:`p:${p.id}:${fabric[0]}:${cur.ftxt}:${cur.d.join('x')}`,name:p.name,desc:`${fabric[0]} · ${cur.ftxt} · ${cur.d.join(' × ')} cm`,price:cur.price,swatch:fabric[1]});
import('./cardviews.js').then(({cardHtml,mount})=>{const rel=[...PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id),...PRODUCTS.filter(x=>x.cat!==p.cat)].slice(0,4);
 $('related').innerHTML=rel.map(x=>cardHtml(x)).join('');$('related').querySelectorAll('.card').forEach(mount)});
$('p-gallery').innerHTML=[1,2,3].map(n=>`<div data-slot="gallery:${p.id}:${n}" data-label="Photo ${n}"></div>`).join('');applySlots();
$('p-wish').dataset.wish=p.id;$('p-cmp').dataset.cmp=p.id;
$('p-ar').onclick=()=>{const o=fit(v.getModel().object,cur.d);openAR(o,p.name,'dekara-'+p.id)};
initReviews(p.id);
// Hooks for the admin panel's "Fabric mapping" section (live preview of scale / rotation / location per fabric)
window.__prod={piece:p,fabrics:p.fabrics,current:()=>fabric||p.fabrics[0],select:selectFabric,mapping:fid=>getMapping(p.id,fid),preview:(f,m)=>{fabric=f;override=m;v.setFabric(f,m)}};
dispatchEvent(new Event('prod-ready'));
}
