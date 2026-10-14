import { PRODUCTS } from './products.js';
import * as Store from './store.js';
const q=new URLSearchParams(location.search),sel=document.getElementById('piece');
sel.innerHTML='<option value="">General enquiry</option>'+PRODUCTS.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
sel.value=q.get('piece')||'';import('./basket.js').then(B=>{document.getElementById('msg').value=q.get('msg')||(B.list().length?`I'd like a quote for the following items:\n\n${B.summaryText()}`:'')});
const S=Store.siteCfg(),sp=document.querySelector('.spec');
[['Phone',S.phone],['Email',S.email]].forEach(([l,v])=>{if(!v||!sp)return;const d=document.createElement('div'),a=document.createElement('span');a.textContent=l;d.append(a,document.createTextNode(v));sp.append(d)});
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();
 // Demo only: connect to your email/CRM (e.g. Formspree) before launch.
 e.target.style.display='none';document.getElementById('ok').style.display='block'});
