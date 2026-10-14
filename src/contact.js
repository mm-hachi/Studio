import { PRODUCTS } from './products.js';
import * as Store from './store.js';
import { API } from './api.js';
const q=new URLSearchParams(location.search),sel=document.getElementById('piece');
sel.innerHTML='<option value="">General enquiry</option>'+PRODUCTS.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
sel.value=q.get('piece')||'';import('./basket.js').then(B=>{document.getElementById('msg').value=q.get('msg')||(B.list().length?`I'd like a quote for the following items:\n\n${B.summaryText()}`:'')});
const S=Store.siteCfg(),sp=document.querySelector('.spec');
[['Phone',S.phone],['Email',S.email]].forEach(([l,v])=>{if(!v||!sp)return;const d=document.createElement('div'),a=document.createElement('span');a.textContent=l;d.append(a,document.createTextNode(v));sp.append(d)});
document.getElementById('f').addEventListener('submit',async e=>{e.preventDefault();const f=e.target,btn=f.querySelector('button[type=submit]'),d=Object.fromEntries(new FormData(f));btn.disabled=true;
 try{await API.contact({name:d.name,email:d.email,piece:d.piece||'',message:d.msg||''});f.style.display='none';document.getElementById('ok').style.display='block'}
 catch(x){let el=document.getElementById('cerr');if(!el){el=document.createElement('p');el.id='cerr';el.className='err';f.after(el)}el.textContent=x.message||'Could not send your message. Please try again.';btn.disabled=false}});
