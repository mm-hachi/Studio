import { API, session, onChange, wished } from './api.js';
import { PRODUCTS } from './products.js';
import { cardHtml, mount, release } from './cardviews.js';
import { money } from './basket.js';
const root=document.getElementById('acc'),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const next=new URLSearchParams(location.search).get('next');
let tab=(location.hash||'#saved').slice(1);
async function render(){const s=session();release(root);
 if(!s){document.getElementById('acc-h').textContent='Sign in or register';
  root.innerHTML='<div class="two" style="align-items:start"><form id="lf"><h3>Sign in</h3><label>Email<input name="email" type="email" required></label><label>Password<input name="password" type="password" required></label><button class="btn" type="submit">Sign in</button><p class="err" hidden id="le"></p></form><form id="rf"><h3>Create an account</h3><label>Name<input name="name" required></label><label>Email<input name="email" type="email" required></label><label>Password (8+ characters)<input name="password" type="password" minlength="8" required></label><button class="btn ghost" type="submit">Create account</button><p class="err" hidden id="re"></p></form></div><p class="st-note">Demo accounts are stored only in this browser. The account layer is built to be swapped for a real backend.</p>';
  const go=(fn,id)=>async e=>{e.preventDefault();try{await fn(Object.fromEntries(new FormData(e.target)));if(next&&/^[\w-]+\.html/.test(next))location.href=next}catch(x){const el=document.getElementById(id);el.textContent=x.message;el.hidden=false}};
  document.getElementById('lf').onsubmit=go(API.login,'le');document.getElementById('rf').onsubmit=go(API.register,'re');return}
 document.getElementById('acc-h').textContent='Hello, '+s.name.split(' ')[0];
 const [wl,orders,designs]=await Promise.all([API.wishlist(),API.orders(),API.designs()]);
 const T=[['saved','Saved ('+wl.length+')'],['orders','Orders ('+orders.length+')'],['designs','Saved designs ('+designs.length+')']];
 let h=`<div class="chips">${T.map(([k,l])=>`<button class="pill${tab===k?' on':''}" data-t="${k}">${l}</button>`).join('')}<button class="pill" data-t="out">Sign out</button></div><div id="pane" style="margin-top:1.5rem">`;
 if(tab==='saved'){const L=PRODUCTS.filter(p=>wl.includes(p.id));h+=L.length?`<div class="cards">${L.map(p=>cardHtml(p)).join('')}</div>`:'<p class="st-note">Nothing saved yet. Tap the heart on any piece to save it.</p>'}
 if(tab==='orders')h+=orders.length?orders.map(o=>`<div class="studio"><b>${esc(o.ref)}</b> · ${new Date(o.date).toLocaleDateString('en-ZA')} · ${money(o.total)}<div class="st-sum">${(o.items||[]).map(i=>`<div><span>${i.qty}× ${esc(i.name)}</span>${money(i.price*i.qty)}</div>`).join('')}</div></div>`).join(''):'<p class="st-note">No orders yet.</p>';
 if(tab==='designs')h+=designs.length?designs.map(d=>`<div class="studio"><b>${esc(d.name)}</b> · ${new Date(d.date).toLocaleDateString('en-ZA')} · ${money(d.price||0)}<div class="hero-ctl" style="margin-top:1rem"><a class="btn sm" href="custom-studio.html?design=${esc(d.id)}">Open in studio</a><button class="btn sm ghost" data-del="${esc(d.id)}">Delete</button></div></div>`).join(''):'<p class="st-note">No saved designs yet. Build one in the Custom Studio and choose "Save to my account".</p>';
 root.innerHTML=h+'</div>';root.querySelectorAll('.card').forEach(mount);}
root.onclick=async e=>{const t=e.target.closest('[data-t]'),d=e.target.closest('[data-del]');
 if(t){if(t.dataset.t==='out'){await API.logout();return}tab=t.dataset.t;render()}
 if(d&&confirm('Delete this design?')){await API.deleteDesign(d.dataset.del)}};
onChange(render);render();
