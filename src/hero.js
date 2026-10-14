import { FEAT as L } from './products.js';
import { viewer } from './viewer.js';
const stage=document.getElementById('hero-canvas');
if(!L.length){stage.closest('.stage')?.remove()}else{
const v=viewer(stage,L[0].id,{scroll:false,spin:.15});
const sw=document.getElementById('hero-switch'),info=document.getElementById('hero-info');
sw.innerHTML=L.map((p,i)=>`<button class="pill${i?'':' on'}" data-i="${i}"></button>`).join('');sw.querySelectorAll('.pill').forEach((b,i)=>b.textContent=L[i].name.split(' ').pop());
const show=p=>{info.replaceChildren();const b=document.createElement('b');b.textContent=p.name;const a=document.createElement('a');a.href='product.html?id='+encodeURIComponent(p.id);a.textContent='Customise in 3D';info.append(b,` — ${p.tag}. R ${Number(p.price).toLocaleString('en-ZA')} · `,a)};
show(L[0]);let i=0,auto;
const pick=n=>{i=n;v.setId(L[n].id);show(L[n]);sw.querySelectorAll('.pill').forEach((b,k)=>b.classList.toggle('on',k===n))};
sw.onclick=e=>{const b=e.target.closest('.pill');if(b){pick(+b.dataset.i);clearInterval(auto)}};
auto=setInterval(()=>pick((i+1)%L.length),7000)}
