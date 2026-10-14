// DEMO payment page: no payment is processed and card details are never stored or transmitted.
import * as B from './basket.js';
import { API, session } from './api.js';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const S=B.shop(),sub=B.total(),fee=B.list().length?S.delivery:0,total=sub+fee;
const rows=()=>B.list().map(i=>`<div><span>${i.qty}× ${esc(i.name)}<br><small>${esc(i.desc)}</small></span>${B.money(i.price*i.qty)}</div>`).join('');
const sumHtml=`<h3>Order summary</h3><div class="st-sum">${rows()}<div><span>Delivery</span>${B.money(fee)}</div></div><div class="st-total"><span style="color:var(--mut)">Total</span><b>${B.money(total)}</b></div><div class="st-meta"><span>Includes 15% VAT</span><b>${B.money(B.vatOf(total))}</b></div>`;
if(!S.payNow||!B.list().length){$('co-wrap').innerHTML=`<div class="none" style="grid-column:1/-1"><h3>${S.payNow?'Your basket is empty':'Online payment is not available'}</h3><p>${S.payNow?'Add pieces before checking out.':'Please request a quote and our team will arrange payment with you.'}</p><a class="btn" href="${S.payNow?'shop.html':'basket.html'}">${S.payNow?'Browse the shop':'Back to basket'}</a></div>`}
else{
 $('co-sum').innerHTML=sumHtml;const ss=session();if(ss){$('name').value=ss.name;$('email').value=ss.email}$('co-pay').textContent='Pay '+B.money(total);
 const luhn=n=>{let s=0,d=false;for(let i=n.length-1;i>=0;i--){let x=+n[i];if(d){x*=2;if(x>9)x-=9}s+=x;d=!d}return s%10===0};
 $('cc').oninput=e=>e.target.value=e.target.value.replace(/\D/g,'').slice(0,19).replace(/(.{4})/g,'$1 ').trim();
 $('exp').oninput=e=>{let v=e.target.value.replace(/\D/g,'').slice(0,4);if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);e.target.value=v};
 const fail=m=>{$('co-err').textContent=m;$('co-err').hidden=false;$('co-pay').disabled=false;$('co-pay').textContent='Pay '+B.money(total)};
 $('co-form').onsubmit=e=>{e.preventDefault();$('co-err').hidden=true;const f=Object.fromEntries(new FormData(e.target)),num=f.cc.replace(/\s/g,'');
  for(const k of ['name','email','phone','address','suburb','city','postal','cardname'])if(!String(f[k]||'').trim())return fail('Please complete all fields.');
  if(!/^\S+@\S+\.\S+$/.test(f.email))return fail('Please enter a valid email address.');
  if(num.length<13||!luhn(num))return fail('That card number does not look valid.');
  const m=/^(\d\d)\/(\d\d)$/.exec(f.exp||'');if(!m||+m[1]<1||+m[1]>12||new Date(2000+ +m[2],+m[1],1)<=new Date())return fail('Please enter a valid expiry date (MM/YY).');
  if(!/^\d{3,4}$/.test(f.cvc))return fail('Please enter a valid security code.');
  $('co-pay').disabled=true;$('co-pay').textContent='Processing…';
  setTimeout(async()=>{
   if(num==='4000000000000002')return fail('Your card was declined (demo decline). Try 4242 4242 4242 4242.');
   const ref='CD-'+Date.now().toString(36).toUpperCase().slice(-6),order={ref,date:new Date().toISOString(),name:f.name,email:f.email,phone:f.phone,address:`${f.address}, ${f.suburb}, ${f.city}, ${f.postal}`,items:B.list(),subtotal:sub,delivery:fee,total,last4:num.slice(-4)};
   try{await API.createOrder(order)}catch{}
   B.clear();$('co-wrap').hidden=true;const d=$('co-done');d.hidden=false;
   d.innerHTML=`<div class="studio" style="max-width:680px;margin:2rem auto;text-align:center"><span class="eyebrow">Demo order confirmed</span><h2>Thank you, ${esc(f.name.split(' ')[0])}.</h2><p class="lead" style="margin-inline:auto">Reference <b style="color:var(--ink)">${ref}</b>. In a live shop a confirmation would be emailed to ${esc(f.email)}. No payment was taken.</p><div class="st-sum" style="text-align:left;margin-top:1.5rem">${order.items.map(i=>`<div><span>${i.qty}× ${esc(i.name)}</span>${B.money(i.price*i.qty)}</div>`).join('')}<div><span>Delivery</span>${B.money(fee)}</div></div><div class="st-total"><span>Total paid (demo)</span><b>${B.money(total)}</b></div><p class="st-note">Estimated delivery: 4–6 weeks. Card ending ${order.last4}.</p><p style="margin-top:1.5rem"><a class="btn" href="shop.html">Continue shopping</a></p></div>`;scrollTo(0,0)},1400)};
}
