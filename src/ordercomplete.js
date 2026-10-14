import { API } from './api.js';
import * as B from './basket.js';
const $=id=>document.getElementById(id);
const ref=new URLSearchParams(location.search).get('ref')||sessionStorage.getItem('dekara-last-order')||'';
$('oc-p').textContent=ref?`Your order reference is ${ref}. We are confirming your payment now.`:'We could not find an order reference.';
let tries=0;
const poll=async()=>{if(!ref)return;try{const r=await API.orderStatus(ref);
 if(r.status==='paid'){B.clear();$('oc-h').textContent='Payment received';$('oc-p').textContent=`Thank you. Order ${ref} is confirmed and a confirmation email is on its way. Delivery is 4–6 weeks.`;return}
 if(r.status==='cancelled'){$('oc-h').textContent='Payment cancelled';$('oc-p').textContent='Your payment was cancelled. Your basket is still saved.';return}}catch{}
 if(++tries<20)setTimeout(poll,3000);else $('oc-p').textContent=`We have not received confirmation yet for order ${ref}. If you paid, it can take a few minutes; we will email you.`};
poll();
