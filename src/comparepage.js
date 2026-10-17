import { PRODUCTS, FINISHES, getMapping, ORIGINAL } from './products.js';
import { viewer } from './viewer.js';
import * as C from './compare.js';
import * as Basket from './basket.js';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const R=n=>'R '+Math.round(n).toLocaleString('en-ZA');
let cols=[];
const sw=(arr,cls)=>`<div class="sw ${cls}">${arr.map((a,i)=>`<button class="${i?'':'on'}${a[2]==='original'?' orig':''}" style="background:${a[3]?`url(${esc(a[3])}) center/cover`:esc(a[1])}" title="${esc(a[0])}" aria-label="${esc(a[0])}" data-k="${esc(a[2]??i)}"></button>`).join('')}</div>`;
const rg=(ax,l,min,max)=>`<div class="rg"><div><span>${l}</span><b class="o-${ax}"></b></div><input type="range" data-ax="${ax}" min="${min}" max="${max}" value="100"></div>`;
function build(){cols.forEach(c=>c.v.destroy());cols=[];
 const L=C.list().map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean),root=$('cmp-grid');
 $('cmp-tools').hidden=!L.length;
 if(!L.length){root.innerHTML='<div class="none" style="grid-column:1/-1"><h3>Nothing to compare yet</h3><p>Tap "Compare" on any shop card or product page to choose up to 3 pieces.</p><a class="btn" href="shop.html">Browse the shop</a></div>';$('cmp-table').innerHTML='';return}
 root.style.setProperty('--n',L.length);
 root.innerHTML=L.map(p=>`<div class="cc"><div class="stage"><canvas></canvas></div><h3>${esc(p.name)}</h3><p class="st-note" style="margin:0 0 .6rem">${esc(p.cat)} · ${esc(p.tag)}</p><div class="price cp" style="font-size:1.6rem"></div>
  <label>Fabric · <span class="fn">${p.fabrics[0]?.[0]||'Oyster'}</span></label>${sw(p.fabrics,'fs')}<label>Frame finish · <span class="fi">${FINISHES[0][0]}</span></label>${sw(FINISHES,'ff')}
  ${rg(0,'Width',80,140)}${rg(1,'Depth',80,140)}${rg(2,'Height',80,130)}
  <div class="hero-ctl" style="margin-top:1rem"><button class="btn sm add">Add to basket</button><a class="btn sm ghost" href="product.html?id=${encodeURIComponent(p.id)}">Details</a><button class="lnk rm">Remove</button></div></div>`).join('');
 root.querySelectorAll('.cc').forEach((el,i)=>{const p=L[i],c={p,el,fabric:p.fabrics[0]||['Oyster','#d4cabb','oyster'],finish:FINISHES[0],s:[1,1,1],v:viewer(el.querySelector('canvas'),p.id,{orbit:true})};c.v.setFabric(c.fabric,getMapping(p.id,c.fabric[2]));cols.push(c)});
 update();
}
function price(c){const f=c.s[0]*c.s[1]*c.s[2];return Math.round(c.p.price*(1+(f-1)*.7)/10)*10}
const dims=c=>c.p.dims.map((x,i)=>Math.round(x*c.s[i]));
function update(){
 cols.forEach(c=>{const d=dims(c);c.el.querySelector('.cp').textContent=R(price(c));c.el.querySelector('.fn').textContent=c.fabric[0];c.el.querySelector('.fi').textContent=c.finish[0];[0,1,2].forEach(a=>c.el.querySelector('.o-'+a).textContent=d[a]+' cm')});
 const rows=[['Price',c=>R(price(c))],['Category',c=>c.p.cat+' · '+c.p.sub],['Dimensions (W × D × H)',c=>dims(c).join(' × ')+' cm'],['Materials',c=>c.p.mat||'—'],['Fabric',c=>c.fabric[0]],['Frame finish',c=>c.finish[0]],['Delivery',()=>'4–6 weeks']];
 $('cmp-table').innerHTML='<table><tr><th></th>'+cols.map(c=>`<th>${esc(c.p.name)}</th>`).join('')+'</tr>'+rows.map(([l,f])=>`<tr><td>${l}</td>${cols.map(c=>`<td>${esc(f(c))}</td>`).join('')}</tr>`).join('')+'</table>';
}
const setFab=(x,f)=>{x.fabric=f;x.v.setFabric(f,getMapping(x.p.id,f[2]));x.el.querySelectorAll('.fs button').forEach(k=>k.classList.toggle('on',k.dataset.k===f[2]))};
$('cmp-grid').addEventListener('click',e=>{const el=e.target.closest('.cc');if(!el)return;const c=cols.find(x=>x.el===el),b=e.target.closest('button');if(!b)return;
 const sync=$('cmp-sync').checked;
 if(b.closest('.fs')){const id=b.dataset.k;(sync?cols:[c]).forEach(x=>{const f=x.p.fabrics.find(z=>z[2]===id);if(f)setFab(x,f)})}
 else if(b.closest('.ff')){const f=FINISHES[b.dataset.k];(sync?cols:[c]).forEach(x=>{x.finish=f;x.v.setFrame(f[1]);x.el.querySelectorAll('.ff button').forEach(k=>k.classList.toggle('on',k.dataset.k===b.dataset.k))})}
 else if(b.classList.contains('rm'))C.remove(c.p.id);
 else if(b.classList.contains('add')){const d=dims(c);Basket.add({key:`p:${c.p.id}:${c.fabric[0]}:${c.finish[0]}:${d.join('x')}`,name:c.p.name,desc:`${c.fabric[0]} · ${c.finish[0]} frame · ${d.join(' × ')} cm`,price:price(c),swatch:c.fabric[1]})}
 update()});
$('cmp-grid').addEventListener('input',e=>{const r=e.target.closest('[data-ax]');if(!r)return;const c=cols.find(x=>x.el===r.closest('.cc'));c.s[+r.dataset.ax]=r.value/100;c.v.setDims(...c.s);update()});
$('cmp-clear').onclick=()=>C.clear();
C.onChange(build);build();
