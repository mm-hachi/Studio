const KEY='dekara-compare',ev=new EventTarget(),fire=()=>ev.dispatchEvent(new Event('change'));
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return []}};let ids=load();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(ids))}catch{}fire()};
export const MAX=3,list=()=>ids,has=id=>ids.includes(id),onChange=f=>ev.addEventListener('change',f);
export const toggle=id=>{if(has(id))ids=ids.filter(x=>x!==id);else{if(ids.length>=MAX)return false;ids.push(id)}save();return true};
export const remove=id=>{ids=ids.filter(x=>x!==id);save()};export const clear=()=>{ids=[];save()};
addEventListener('storage',e=>{if(e.key===KEY){ids=load();fire()}});
