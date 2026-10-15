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
const opts=[ORIGINAL,...p.fabrics];   // "Original" first: the model's own texture, untouched
let fabric=ORIGINAL,finish=FINISHES[0],s=[1,1,1],cur,override=null;
const paint=()=>v.setFabric(fabric,override||getMapping(p.id,fabric[2]));
$('p-sw').innerHTML=opts.map(([n,h,id,img],i)=>`<button class="${i?'':'on'}${id==='original'?' orig':''}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-k="${esc(id)}"></button>`).join('');
const selectFabric=id=>{const f=opts.find(z=>z[2]===id);if(!f)return;fabric=f;override=null;$('p-sw').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.k===id));paint();update()};
$('p-sw').onclick=e=>{const b=e.target.closest('button');if(b)selectFabric(b.dataset.k)};
$('p-fsw').innerHTML=FINISHES.map(([n,h],i)=>`<button class="${i?'':'on'}" style="background:${h}" title="${n}" aria-label="${n}" data-i="${i}"></button>`).join('');
$('p-fsw').onclick=e=>{const b=e.target.closest('button');if(!b)return;finish=FINISHES[b.dataset.i];$('p-fsw').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));v.setFrame(finish[1]);update()};
['w','d','h'].forEach((k,i)=>$('r-'+k).oninput=e=>{s[i]=e.target.value/100;v.setDims(...s);update()});
function update(){const d=p.dims.map((x,i)=>Math.round(x*s[i]));['w','d','h'].forEach((k,i)=>$('o-'+k).textContent=d[i]+' cm');
 const f=s[0]*s[1]*s[2],price=Math.round(p.price*(1+(f-1)*.7)/10)*10;$('p-price').textContent='R '+price.toLocaleString('en-ZA');$('p-col').textContent=fabric[0];$('p-fin').textContent=finish[0];cur={d,price}}
update();paint();
$('p-add').onclick=()=>Basket.add({key:`p:${p.id}:${fabric[0]}:${finish[0]}:${cur.d.join('x')}`,name:p.name,desc:`${fabric[0]} · ${finish[0]} frame · ${cur.d.join(' × ')} cm`,price:cur.price,swatch:fabric[1]});
import('./cardviews.js').then(({cardHtml,mount})=>{const rel=[...PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id),...PRODUCTS.filter(x=>x.cat!==p.cat)].slice(0,4);
 $('related').innerHTML=rel.map(x=>cardHtml(x)).join('');$('related').querySelectorAll('.card').forEach(mount)});
$('p-gallery').innerHTML=[1,2,3].map(n=>`<div data-slot="gallery:${p.id}:${n}" data-label="Photo ${n}"></div>`).join('');applySlots();
$('p-wish').dataset.wish=p.id;$('p-cmp').dataset.cmp=p.id;
$('p-ar').onclick=()=>{const o=fit(v.getModel().object,cur.d);openAR(o,p.name,'dekara-'+p.id)};
initReviews(p.id);
// Hooks for the admin panel's "Fabric mapping" section (live preview of scale / rotation / location per fabric)
window.__prod={piece:p,fabrics:p.fabrics,current:()=>fabric[2]==='original'?p.fabrics[0]:fabric,select:selectFabric,mapping:fid=>getMapping(p.id,fid),preview:(f,m)=>{fabric=f;override=m;v.setFabric(f,m)}};
dispatchEvent(new Event('prod-ready'));
}
