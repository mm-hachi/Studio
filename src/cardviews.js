// Product cards with lazy 3D: a WebGL view is created only while a card is on screen, so large catalogues stay light.
import { viewer } from './viewer.js';
import { PRODUCTS, FABRICS } from './products.js';
import * as Cmp from './compare.js';
import * as Basket from './basket.js';
import { toggleWish, wished, onChange } from './api.js';
const live=new Map();
const io=new IntersectionObserver(es=>es.forEach(e=>{const el=e.target,st=el.querySelector('.stage');
 if(e.isIntersecting&&!live.has(el)){st.innerHTML='<canvas></canvas>';live.set(el,viewer(st.firstChild,el.dataset.id,{spin:.5,fullscreen:el.dataset.fullscreen!=='false'}))}
 else if(!e.isIntersecting&&live.has(el)){live.get(el).destroy();live.delete(el);st.innerHTML=''}}),{rootMargin:'250px'});
export const cardHtml=(p,reveal)=>`<a class="card${reveal?' reveal':''}" data-id="${p.id}" href="product.html?id=${p.id}"><button class="heart" data-wish="${p.id}" aria-label="Save to wishlist" aria-pressed="false">♡</button><div class="stage"></div><div class="meta"><div><h3>${p.name}</h3><p>${p.cat} · ${p.tag}</p></div><span>R ${Number(p.price).toLocaleString('en-ZA')}</span></div><div class="acts2"><button class="qadd" data-add="${p.id}">+ Add to basket</button><button class="cmpb" data-cmp="${p.id}">Compare</button></div></a>`;
document.addEventListener('click',e=>{const b=e.target.closest('.qadd');if(!b)return;e.preventDefault();e.stopPropagation();
 const p=PRODUCTS.find(x=>x.id===b.dataset.add);if(!p)return;
 const f=p.fabrics?.find(m=>m[2]===p.defaults?.fabric)||p.fabrics?.[0]||FABRICS[0];
 const chosen=p.finishTypes.map(ft=>ft.finishes.find(m=>m[2]===p.defaults?.[ft.id])||ft.finishes[0]).filter(Boolean);
 const finishes=chosen.map(m=>m[0]).join(', ');
 Basket.add({key:`p:${p.id}:${f[0]}:${finishes}:${p.dims.join('x')}`,name:p.name,desc:`${f[0]} · ${finishes} · ${p.dims.join(' × ')} cm`,price:Math.round(p.price/10)*10,swatch:f[1]})});
const hearts=()=>document.querySelectorAll('[data-wish]').forEach(b=>{const on=wished(b.dataset.wish);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);b.textContent=b.dataset.label?(on?'♥ Saved':'♡ Save to wishlist'):(on?'♥':'♡')});
onChange(hearts);
const cmpUpd=()=>document.querySelectorAll('[data-cmp]').forEach(b=>{const on=Cmp.has(b.dataset.cmp);b.classList.toggle('on',on);b.textContent=on?'✓ Comparing':'Compare'});
Cmp.onChange(cmpUpd);
document.addEventListener('click',e=>{const b=e.target.closest('[data-cmp]');if(!b)return;e.preventDefault();e.stopPropagation();if(!Cmp.toggle(b.dataset.cmp))Basket.toast('You can compare up to 3 pieces at a time','compare.html','Open comparison')});
document.addEventListener('click',e=>{const h=e.target.closest('[data-wish]');if(h){e.preventDefault();e.stopPropagation();toggleWish(h.dataset.wish)}});
export const mount=(el,{fullscreen=true}={})=>{el.dataset.fullscreen=fullscreen;io.observe(el);queueMicrotask(hearts);queueMicrotask(cmpUpd)};
export const release=box=>box.querySelectorAll('.card').forEach(el=>{io.unobserve(el);if(live.has(el)){live.get(el).destroy();live.delete(el)}});
