import * as Store from './store.js';
import './admin.js';
import { count, onChange } from './basket.js';
import { session, onChange as onApi, syncWish, wishSize } from './api.js';
import { list as cmpList, onChange as onCmp, clear as cmpClear, MAX as CMAX } from './compare.js';
const site=Store.siteCfg();
const NAV=[['shop.html','Shop'],['custom-studio.html','Custom Studio'],['fabrics.html','Fabric Library'],['services.html','Services'],['trade.html','For Designers'],['about.html','About'],['contact.html','Contact']];
const HELP=[['help.html#faq','FAQ'],['compare.html','Compare pieces'],['help.html#delivery','Delivery fees'],['help.html#guarantee','Guarantee policy'],['help.html#terms','Terms & conditions']];
const page=location.pathname.split('/').pop()||'index.html';
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.body.insertAdjacentHTML('afterbegin',`<a class="skip" href="#main">Skip to content</a><div class="notice">Please note: delivery on all items is between 4–6 weeks</div><header class="hdr"><a class="logo" href="index.html" data-slot="logo" data-label="Site logo (replaces text)"><span class="lt">Dekara Designs</span></a><nav id="nav" aria-label="Main">${NAV.map(([h,t])=>`<a href="${h}"${h===page?' class="on"':''}>${t}</a>`).join('')}</nav><a class="bk" href="account.html#saved" aria-label="Saved items">♡ <b id="wl-n">0</b></a><a class="bk" href="account.html" id="acct">Sign in</a><a class="bk" href="basket.html">Basket <b id="bk-n">0</b></a><button class="burger" aria-label="Menu"><i></i><i></i></button></header>`);
const mainEl=document.querySelector('main');if(mainEl)mainEl.id='main';
document.body.insertAdjacentHTML('beforeend',`<footer class="ftr"><div class="cols"><div><div class="logo"><span class="lt">Dekara Designs</span></div><p>A premium interior design studio and furniture manufacturer, creating spaces with intimate connections to the people who live in them.</p>
<form id="nl" class="nl"><input type="email" required placeholder="Your email for news and specials" aria-label="Email address"><button class="btn sm" type="submit">Subscribe</button></form><p id="nl-ok" class="nl-ok" hidden>Thank you. (Demo: your email was not stored.)</p></div>
<div><h4>Pages</h4>${NAV.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</div>
<div><h4>Help</h4>${HELP.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}<a href="basket.html">Basket</a></div>
<div><h4>Trading hours</h4>Mon–Fri 09h00 – 16h00<br>Sat 09h00 – 14h00<br>Holidays 09h00 – 14h00<br>Sundays closed<h4 style="margin-top:1.2rem">Visit</h4>Our showroom · Design studio${site.phone?`<br><a href="tel:${esc(site.phone.replace(/\s/g,''))}">${esc(site.phone)}</a>`:''}${site.email?`<a href="mailto:${esc(site.email)}">${esc(site.email)}</a>`:''}</div></div><div class="fine">© ${new Date().getFullYear()} Dekara Designs. Concept demo.</div></footer>`);
document.getElementById('nl').onsubmit=e=>{e.preventDefault();e.target.hidden=true;document.getElementById('nl-ok').hidden=false};
const wa=(site.whatsapp||'').replace(/\D/g,'');
if(wa)document.body.insertAdjacentHTML('beforeend',`<a class="wa" href="https://wa.me/${wa}?text=${encodeURIComponent('Hi Dekara Designs, I would like to find out more about your furniture.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">WhatsApp</a>`);
if(!localStorage.getItem('dekara-cookie')&&location.hash!=='#tour'){document.body.insertAdjacentHTML('beforeend','<div class="cookie" role="dialog" aria-label="Cookie notice"><p>We use cookies to remember your basket and improve the site. (Demo notice.)</p><button class="btn sm" data-c="1">Accept</button><button class="btn sm ghost" data-c="0">Decline</button></div>');
 document.querySelector('.cookie').onclick=e=>{const b=e.target.closest('[data-c]');if(b){try{localStorage.setItem('dekara-cookie',b.dataset.c)}catch{}e.currentTarget.remove()}}}
document.querySelector('.burger').onclick=()=>document.body.classList.toggle('menu');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>document.body.classList.remove('menu'));
const bk=()=>{const n=count(),e=document.getElementById('bk-n');e.textContent=n;e.classList.toggle('has',n>0)};bk();onChange(bk);
const hd=()=>{document.getElementById('wl-n').textContent=wishSize();const s=session();document.getElementById('acct').textContent=s?s.name.split(' ')[0]:'Sign in'};hd();onApi(hd);syncWish();
const cb=document.createElement('div');cb.id='cmpbar';document.body.append(cb);
const cu=()=>{const n=cmpList().length;cb.hidden=!n||page==='compare.html';cb.innerHTML=`<span>Compare ${n}/${CMAX}</span><a class="btn sm" href="compare.html">Open comparison</a><button class="lnk" id="cmp-x">Clear</button>`;cb.querySelector('#cmp-x').onclick=cmpClear};cu();onCmp(cu);
window.applySlots=()=>document.querySelectorAll('[data-slot]').forEach(el=>{const m=Store.media(el.dataset.slot);if(!m||el.querySelector(':scope>.slot-media'))return;
 const v=m.type.startsWith('video'),n=document.createElement(v?'video':'img');n.className='slot-media';n.src=m.url;
 if(v){Object.assign(n,{autoplay:true,loop:true,muted:true,playsInline:true,preload:'metadata'});if(!el.hasAttribute('data-bg'))n.controls=true}else n.alt='';el.prepend(n)});
applySlots();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
window.watchReveals=()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));watchReveals();
// Promo-recording mode: add #tour to any URL to auto-scroll slowly with the UI hidden
if(location.hash==='#tour'){document.body.classList.add('tour');let y=0;(function s(){y+=1.1;scrollTo(0,y);if(y<document.documentElement.scrollHeight)requestAnimationFrame(s)})()}
