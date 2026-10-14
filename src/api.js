// Data layer for accounts, wishlist, reviews, orders, saved designs and trade applications.
// Default: a browser-only demo backend. To plug in a real backend, set "apiBase" in data/site.json (see README for the REST contract).
import * as Store from './store.js';
const LS=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},SV=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const sha=s=>crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join(''));
const ev=new EventTarget(),fire=()=>ev.dispatchEvent(new Event('change'));
export const onChange=f=>ev.addEventListener('change',f);
export const session=()=>LS('dekara-session',null);
const local={
 async me(){return session()},
 async register({name,email,password}){email=email.trim().toLowerCase();const u=LS('dekara-users',[]);if(u.some(x=>x.email===email))throw new Error('An account with that email already exists.');
  const user={id:'u'+Date.now().toString(36),name:name.trim(),email,hash:await sha(password)};u.push(user);SV('dekara-users',u);return this._in(user)},
 async login({email,password}){email=email.trim().toLowerCase();const user=LS('dekara-users',[]).find(x=>x.email===email);if(!user||user.hash!==await sha(password))throw new Error('Incorrect email or password.');return this._in(user)},
 _in(u){const s={id:u.id,name:u.name,email:u.email};SV('dekara-session',s);const g=LS('dekara-wish-guest',[]);if(g.length){SV('dekara-wish-'+s.id,[...new Set([...LS('dekara-wish-'+s.id,[]),...g])]);localStorage.removeItem('dekara-wish-guest')}return s},
 async logout(){localStorage.removeItem('dekara-session')},
 async wishlist(){return LS('dekara-wish-'+(session()?.id||'guest'),[])},
 async toggleWish(id){const k='dekara-wish-'+(session()?.id||'guest'),w=LS(k,[]),i=w.indexOf(id);i<0?w.push(id):w.splice(i,1);SV(k,w);return w},
 async reviews(pid){return LS('dekara-reviews',[]).filter(r=>r.pid===pid).sort((a,b)=>b.date.localeCompare(a.date))},
 async addReview(r){const s=session();if(!s)throw new Error('Please sign in to write a review.');const all=LS('dekara-reviews',[]);all.push({id:'r'+Date.now().toString(36),pid:r.pid,rating:r.rating,title:r.title,body:r.body,name:s.name,uid:s.id,date:new Date().toISOString()});SV('dekara-reviews',all)},
 async createOrder(o){const all=LS('dekara-orders',[]);all.unshift({...o,uid:session()?.id||null});SV('dekara-orders',all.slice(0,50));return o},
 async orders(){const s=session();return s?LS('dekara-orders',[]).filter(o=>o.uid===s.id||o.email===s.email):[]},
 async designs(){const s=session();return s?LS('dekara-designs-'+s.id,[]):[]},
 async saveDesign(d){const s=session();if(!s)throw new Error('Please sign in (Account page) to save designs.');const k='dekara-designs-'+s.id,a=LS(k,[]),x={id:'d'+Date.now().toString(36),date:new Date().toISOString(),...d};a.unshift(x);SV(k,a.slice(0,30));return x},
 async deleteDesign(id){const s=session();if(s){const k='dekara-designs-'+s.id;SV(k,LS(k,[]).filter(d=>d.id!==id))}},
 async tradeApply(a){const all=LS('dekara-trade',[]);all.unshift({...a,date:new Date().toISOString()});SV('dekara-trade',all)}
};
const rest=base=>{const call=async(m,p,b)=>{const t=localStorage.getItem('dekara-token');const r=await fetch(base+p,{method:m,headers:{'Content-Type':'application/json',...(t?{Authorization:'Bearer '+t}:{})},body:b?JSON.stringify(b):undefined});
  if(!r.ok)throw new Error((await r.json().catch(()=>({}))).message||'Request failed');return r.status===204?null:r.json()};
 const auth=async(p,b)=>{const d=await call('POST',p,b);localStorage.setItem('dekara-token',d.token);SV('dekara-session',d.user);return d.user};
 return {me:()=>call('GET','/me').catch(()=>null),register:b=>auth('/auth/register',b),login:b=>auth('/auth/login',b),
  logout:async()=>{await call('POST','/auth/logout').catch(()=>{});localStorage.removeItem('dekara-token');localStorage.removeItem('dekara-session')},
  wishlist:()=>call('GET','/wishlist'),toggleWish:id=>call('POST','/wishlist/toggle',{productId:id}),reviews:id=>call('GET','/products/'+id+'/reviews'),addReview:r=>call('POST','/products/'+r.pid+'/reviews',r),
  createOrder:o=>call('POST','/orders',o),orders:()=>call('GET','/orders'),designs:()=>call('GET','/designs'),saveDesign:d=>call('POST','/designs',d),deleteDesign:id=>call('DELETE','/designs/'+id),tradeApply:a=>call('POST','/trade-applications',a)}};
const impl=()=>Store.DATA.apiBase?rest(Store.DATA.apiBase):local;
let wish=new Set();
export const wished=id=>wish.has(id),wishSize=()=>wish.size;
export async function syncWish(){try{wish=new Set(await impl().wishlist())}catch{wish=new Set()}fire()}
export async function toggleWish(id){try{wish=new Set(await impl().toggleWish(id))}catch{}fire()}
const MUT=['register','login','logout','addReview','saveDesign','deleteDesign'];
export const API=Object.fromEntries(['me','register','login','logout','wishlist','reviews','addReview','createOrder','orders','designs','saveDesign','deleteDesign','tradeApply'].map(n=>[n,async(...a)=>{const r=await impl()[n](...a);if(['login','register','logout'].includes(n))await syncWish();if(MUT.includes(n))fire();return r}]));
