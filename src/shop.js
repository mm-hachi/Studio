import { PRODUCTS, CATS, FABRICS } from './products.js';
import { cardHtml, mount, release } from './cardviews.js';
const $=id=>document.getElementById(id),grid=$('shop-grid'),u=new URLSearchParams(location.search);
const st={cat:CATS.includes(u.get('cat'))?u.get('cat'):'',sub:u.get('sub')||'',q:u.get('q')||'',sort:u.get('sort')||'featured',fabric:u.get('fabric')||''};
$('q').value=st.q;$('sort').value=st.sort;
$('ffilter').innerHTML='<option value="">All fabrics</option>'+FABRICS.map(f=>`<option value="${f[2]}">${f[0].replace(/[<&]/g,'')}</option>`).join('');
if(!FABRICS.some(f=>f[2]===st.fabric))st.fabric='';$('ffilter').value=st.fabric;
const hay=p=>[p.name,p.tag,p.cat,p.sub,p.desc,p.mat,p.fabrics.map(f=>f[0]).join(' ')].join(' ').toLowerCase();
const matches=p=>{if(st.fabric&&!p.fabrics.some(f=>f[2]===st.fabric))return false;const h=hay(p);return st.q.toLowerCase().split(/\s+/).filter(Boolean).every(w=>h.includes(w))};
const chip=(attr,val,label,on,n)=>`<button class="pill${on?' on':''}" data-${attr}="${val}"${n===0?' data-zero':''}>${label}${n!==undefined?` <small>${n}</small>`:''}</button>`;
const SORT={price:(a,b)=>a.price-b.price,'price-desc':(a,b)=>b.price-a.price,name:(a,b)=>a.name.localeCompare(b.name)};
function render(){
 const found=PRODUCTS.filter(matches);
 $('cats').innerHTML=chip('cat','','All',!st.cat,found.length)+CATS.map(c=>chip('cat',c,c,st.cat===c,found.filter(p=>p.cat===c).length)).join('');
 const subs=[...new Set(PRODUCTS.filter(p=>p.cat===st.cat).map(p=>p.sub))];
 $('subs').innerHTML=st.cat&&subs.length>1?chip('sub','','All '+st.cat,!st.sub)+subs.map(s=>chip('sub',s,s,st.sub===s,found.filter(p=>p.cat===st.cat&&p.sub===s).length)).join(''):'';
 let list=found.filter(p=>(!st.cat||p.cat===st.cat)&&(!st.sub||p.sub===st.sub));
 if(SORT[st.sort])list=[...list].sort(SORT[st.sort]);
 release(grid);grid.innerHTML=list.map(p=>cardHtml(p)).join('');grid.querySelectorAll('.card').forEach(mount);
 const c=$('count');c.textContent=`${list.length} ${list.length===1?'piece':'pieces'}${st.cat?' in '+(st.sub||st.cat):''}`+(st.q?` matching “${st.q}”`:'');
 $('none').hidden=list.length>0;
 const p=new URLSearchParams();if(st.cat)p.set('cat',st.cat);if(st.sub)p.set('sub',st.sub);if(st.q)p.set('q',st.q);if(st.sort!=='featured')p.set('sort',st.sort);if(st.fabric)p.set('fabric',st.fabric);
 try{history.replaceState(null,'',location.pathname+(p.toString()?'?'+p:''))}catch{}
}
$('cats').onclick=e=>{const b=e.target.closest('[data-cat]');if(b){st.cat=b.dataset.cat;st.sub='';render()}};
$('subs').onclick=e=>{const b=e.target.closest('[data-sub]');if(b){st.sub=b.dataset.sub;render()}};
let t;$('q').oninput=e=>{clearTimeout(t);t=setTimeout(()=>{st.q=e.target.value.trim();render()},160)};
$('q').onkeydown=e=>{if(e.key==='Escape'){e.target.value='';st.q='';render()}};
$('sort').onchange=e=>{st.sort=e.target.value;render()};
$('ffilter').onchange=e=>{st.fabric=e.target.value;render()};
$('clear').onclick=()=>{st.cat=st.sub=st.q=st.fabric='';$('q').value='';$('ffilter').value='';render()};
render();
