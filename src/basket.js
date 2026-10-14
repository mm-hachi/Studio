// Quote basket: persisted in localStorage so it survives page changes.
import * as Store from './store.js';
const KEY='dekara-basket',ev=new EventTarget(),fire=()=>ev.dispatchEvent(new Event('change'));
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return []}};
let items=load();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(items))}catch{}fire()};
export const list=()=>items,count=()=>items.reduce((a,i)=>a+i.qty,0),total=()=>items.reduce((a,i)=>a+i.price*i.qty,0);
export const money=n=>'R '+Math.round(n).toLocaleString('en-ZA');
export const vatOf=t=>t*15/115;
export const shop=Store.shopCfg;
export const onChange=fn=>ev.addEventListener('change',fn);
export const remove=key=>{items=items.filter(i=>i.key!==key);save()};
export const setQty=(key,q)=>{const i=items.find(x=>x.key===key);if(i){i.qty=Math.max(1,Math.min(20,q|0));save()}};
export const clear=()=>{items=[];save()};
export const summaryText=()=>items.map(i=>`${i.qty}× ${i.name} (${i.desc}) — ${money(i.price*i.qty)}`).join('\n')+`\nTotal ${money(total())} incl. VAT`;
let tt;export function toast(msg,href='basket.html',label='View basket'){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';document.body.append(t)}
 t.innerHTML='';const s=document.createElement('span');s.textContent=msg;const a=document.createElement('a');a.href=href;a.textContent=label;t.append(s,a);t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),3800)}
export const add=it=>{const f=items.find(i=>i.key===it.key);if(f)f.qty=Math.min(20,f.qty+1);else items.push({qty:1,...it});save();toast(`${it.name} added to your basket`)};
addEventListener('storage',e=>{if(e.key===KEY){items=load();fire()}});
