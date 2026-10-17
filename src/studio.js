import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as Store from './store.js';
import { MATERIALS, FABRICS } from './products.js';
import { applyFabric, DEFMAP } from './texture.js';
import * as Basket from './basket.js';
import { loadGLTF } from './loader.js';
import { openAR } from './ar.js';
import { API } from './api.js';
const C=Store.studioCfg(),$=id=>document.getElementById(id),R=n=>'R '+Math.round(n).toLocaleString('en-ZA');
const MODS={seat:{n:'Seat',w:.9,d:.95},corner:{n:'Corner',w:.95,d:.95},chaise:{n:'Chaise',w:.9,d:1.75},ottoman:{n:'Ottoman',w:.9,d:.9},arm:{n:'Arm',w:.22,d:.95}};
const TYPES=Object.keys(MODS).filter(k=>C.enabled[k]);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// Collections of GLB pieces: from data/site.json ("collections", repo-hosted) and the admin panel (browser-only)
const COLS=[...(Store.DATA.collections||[]),...Store.colls()].filter(c=>c.pieces&&c.pieces.length);
COLS.forEach(c=>c.pieces.forEach(p=>{MODS[c.id+':'+p.id]={n:p.name,w:(p.w||90)/100,d:(p.d||90)/100,h:(p.h||80)/100,price:Number(p.price)||0,url:Store.url('piece:'+c.id+':'+p.id)||p.model,custom:true}}));
const PR=t=>MODS[t].custom?MODS[t].price:C.prices[t];
let touched=false;
const cache=new Map();
const loadPiece=url=>{if(!cache.has(url))cache.set(url,loadGLTF(url).then(g=>g.scene).catch(()=>null));return cache.get(url)};

// Studio materials & finishes configuration
const stm=Store.studioMaterials();
const ST_FABRICS=(()=>{
 if(stm.fabrics&&stm.fabrics.length){
  const L=MATERIALS.filter(f=>stm.fabrics.includes(f[2]));
  if(L.length)return L;
 }
 const def=MATERIALS.filter(f=>f[5]!=='Wood'&&f[5]!=='Metal');
 return def.length?def:MATERIALS;
})();
const ST_FTYPES=Store.finishTypes();
const studioFinishesFor=ftid=>{
 if(ftid==='fabric')return ST_FABRICS;
 if(stm.finishes?.[ftid]&&stm.finishes[ftid].length){
  const L=MATERIALS.filter(f=>stm.finishes[ftid].includes(f[2]));
  if(L.length)return L;
 }
 const def=MATERIALS.filter(f=>f[5]==='Wood'||f[5]==='Metal');
 return def.length?def:MATERIALS;
};
const curFinishes={};
ST_FTYPES.forEach(ft=>{
 const list=studioFinishesFor(ft.id);
 curFinishes[ft.id]=list[0]||MATERIALS[0];
});

let colour=ST_FABRICS[0][1],curFab=ST_FABRICS[0],lastBuild=null;
const rb=(a,b,c,r=.07)=>new RoundedBoxGeometry(a,b,c,4,r);

function applyModuleFinishes(g){
 if(!g||!g.userData)return;
 ST_FTYPES.forEach(ft=>{
  const mat=curFinishes[ft.id];
  if(!mat)return;
  const tgt=(ft.target||ft.name||'').toLowerCase().trim();
  const list=(g.userData.finMap?.[tgt])||(g.userData.finMap?.[ft.id])||(tgt==='frame'?g.userData.frames:null);
  if(!list||!list.length)return;
  if(typeof mat==='string'){list.forEach(m=>{m.map=null;m.color.set(mat);m.needsUpdate=true})}
  else if(Array.isArray(mat)){applyFabric(list,mat,DEFMAP)}
 });
}

function buildModule(type,hex){
 const g=MODS[type].custom?buildCustom(type,hex):buildStd(type,hex);
 if(!MODS[type].custom)g.userData.ready=applyFabric(g.userData.T,curFab,DEFMAP);
 return g;
}

function buildCustom(type,hex){
 const m=MODS[type],g=new THREE.Group();g.userData={type,T:[],frames:[],finMap:{}};
 g.userData.ready=loadPiece(m.url).then(src=>{if(!src)return;const o=src.clone(true);
  o.traverse(x=>{if(x.isMesh){x.castShadow=x.receiveShadow=true;x.material=Array.isArray(x.material)?x.material.map(a=>a.clone()):x.material.clone()}});
  const wrap=new THREE.Group();wrap.add(o);let b=new THREE.Box3().setFromObject(wrap);const z=b.getSize(new THREE.Vector3());
  wrap.scale.set(m.w/Math.max(z.x,.001),m.h/Math.max(z.y,.001),m.d/Math.max(z.z,.001));wrap.updateMatrixWorld(true);
  b=new THREE.Box3().setFromObject(wrap);const c=b.getCenter(new THREE.Vector3());wrap.position.set(-c.x,-b.min.y,-c.z);g.add(wrap);
  const nm=[],al=[],finMap={},targets=new Set(ST_FTYPES.map(t=>(t.target||t.name||'').toLowerCase().trim()));targets.add('frame');
  wrap.traverse(x=>{if(x.isMesh)[].concat(x.material).forEach(mm=>{
   const mn=(mm.name||'').toLowerCase().trim();let matched=false;
   targets.forEach(tgt=>{if(tgt&&mn===tgt){(finMap[tgt]??=[]).push(mm);matched=true}});
   if(matched)return;
   if(!(mm.transparent&&mm.opacity<1)){al.push(mm);if(mn==='tint')nm.push(mm)}
  })});
  g.userData.T.push(...(nm.length?nm:al));
  g.userData.finMap=finMap;
  if(finMap.frame)g.userData.frames=finMap.frame;
  if(touched)applyFabric(g.userData.T,curFab,DEFMAP);
  applyModuleFinishes(g);
 });
 return g;
}

function buildStd(type,hex){
 const {w,d}=MODS[type],g=new THREE.Group();
 const fab=new THREE.MeshPhysicalMaterial({color:hex,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new THREE.Color('#fff')});
 const wood=new THREE.MeshStandardMaterial({color:0x5b3f26,roughness:.5});
 const add=(geo,m,x,y,z,rx=0)=>{const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);o.rotation.x=rx;o.castShadow=o.receiveShadow=true;g.add(o)};
 [-1,1].forEach(a=>[-1,1].forEach(b=>add(new THREE.CylinderGeometry(.03,.022,.12,12),wood,a*(w/2-.07),.06,b*(d/2-.07))));
 if(type==='ottoman')add(rb(w,.4,d,.12),fab,0,.32,0);
 else if(type==='arm')add(rb(w,.55,d,.08),fab,0,.4,0);
 else{add(rb(w,.28,d),fab,0,.26,0);add(rb(w-.03,.18,d-.18),fab,0,.49,.07);add(rb(w-.03,.5,.2,.09),fab,0,.78,-d/2+.12,-.1);
  if(type==='corner')add(rb(.2,.5,d-.25,.09),fab,-w/2+.12,.78,.1)}
 g.userData={type,T:[fab],frames:[wood],finMap:{frame:[wood]}};
 ST_FTYPES.forEach(ft=>{const tgt=(ft.target||ft.name||'').toLowerCase().trim();if(tgt==='frame'||tgt==='legs'||tgt==='base')g.userData.finMap[tgt]=[wood]});
 applyModuleFinishes(g);
 return g;
}
function rig(r){r.setPixelRatio(Math.min(devicePixelRatio,2));r.toneMapping=THREE.ACESFilmicToneMapping;r.toneMappingExposure=1.05;r.shadowMap.enabled=true;r.shadowMap.type=THREE.PCFSoftShadowMap}
const key=()=>{const l=new THREE.DirectionalLight(0xffffff,2.6);l.position.set(3,7,4);l.castShadow=true;l.shadow.mapSize.set(2048,2048);l.shadow.radius=4;Object.assign(l.shadow.camera,{left:-7,right:7,top:7,bottom:-7,far:30});return l};

const bkl=()=>{const c=Store.siteCfg(),k=c.backlight===false?0:(c.backlightStrength??100)/100,l=new THREE.DirectionalLight(0xfff4e6,3.2*k);l.position.set(-2,3.5,-5);return l};

/* ---- main canvas with cyclorama (curved floor-to-wall, no horizon) ---- */
const host=$('st-canvas'),BG=0xe9e3d8;
const r=new THREE.WebGLRenderer({antialias:true});rig(r);host.prepend(r.domElement);const dom=r.domElement;dom.style.cssText='display:block;width:100%;height:100%;touch-action:none';
const sc=new THREE.Scene();sc.background=new THREE.Color(BG);sc.fog=new THREE.Fog(BG,16,44);
sc.environment=new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(),.04).texture;sc.add(key());sc.add(bkl());
(function cyc(){const F=14,Rr=5,H=24,L=F+Math.PI*Rr/2+H,geo=new THREE.PlaneGeometry(140,L,1,100),p=geo.attributes.position;
 for(let i=0;i<p.count;i++){const s=L/2-p.getY(i);let y,z;
  if(s<F){y=0;z=8-s}else if(s<F+Math.PI*Rr/2){const a=(s-F)/Rr;y=Rr*(1-Math.cos(a));z=8-F-Rr*Math.sin(a)}else{y=Rr+(s-F-Math.PI*Rr/2);z=8-F-Rr}
  p.setXYZ(i,p.getX(i),y,z)}
 geo.computeVertexNormals();const m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:BG,roughness:1,side:THREE.DoubleSide}));m.receiveShadow=true;sc.add(m)})();
const cam=new THREE.PerspectiveCamera(36,1,.1,120),home=()=>{cam.position.set(0,4.2,6.4);ctl.target.set(0,.4,0);ctl.update()};
const ctl=new OrbitControls(cam,dom);ctl.enableDamping=true;ctl.maxPolarAngle=Math.PI*.47;ctl.minDistance=2;ctl.maxDistance=14;ctl.screenSpacePanning=false;home();
const helper=new THREE.BoxHelper(new THREE.Object3D(),0x9c7a4d);helper.visible=false;sc.add(helper);
const size=()=>{const w=host.clientWidth||1,h=host.clientHeight||1;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()};new ResizeObserver(size).observe(host);

/* ---- state & rules ---- */
const items=[];let sel=null,drag=null;
const ovl=(a,b)=>(MODS[a.type].custom||MODS[b.type].custom)?.012:0; // collection pieces overlap by ~1 cm so snapped pieces leave no gap
const half=it=>{const m=MODS[it.type];return it.rot%2?[m.d/2,m.w/2]:[m.w/2,m.d/2]};
const hit=(a,o)=>{const [aw,ad]=half(a),[ow,od]=half(o),p=a.g.position,q=o.g.position;return Math.abs(p.x-q.x)<aw+ow-.02&&Math.abs(p.z-q.z)<ad+od-.02};
function bbox(){let a=1e9,b=-1e9,c=1e9,d=-1e9;items.forEach(it=>{const [hw,hd]=half(it),p=it.g.position;a=Math.min(a,p.x-hw);b=Math.max(b,p.x+hw);c=Math.min(c,p.z-hd);d=Math.max(d,p.z+hd)});return {sx:b-a,sz:d-c,cx:(a+b)/2,cz:(c+d)/2}}
const okSize=()=>{if(!items.length)return true;const {sx,sz}=bbox();return Math.max(sx,sz)*100<=C.maxWidth+.5&&Math.min(sx,sz)*100<=C.maxDepth+.5};
const valid=it=>items.every(o=>o===it||!hit(it,o))&&okSize();
const count=t=>items.filter(i=>i.type===t).length;
const canAdd=t=>(MODS[t].custom||C.enabled[t])&&items.length<C.maxPieces&&!(C.max[t]>0&&count(t)>=C.max[t]);
let mt;const say=t=>{const e=$('st-msg');e.textContent=t;e.style.opacity=1;clearTimeout(mt);mt=setTimeout(()=>e.style.opacity=0,3200)};

function snapPos(it,x,z){
 if(!C.snap)return [x,z];const [hw,hd]=half(it),T=.18;let sx=false,sz=false;
 for(const o of items){if(o===it)continue;const [ow,od]=half(o),ox=o.g.position.x,oz=o.g.position.z;
  if(Math.abs(z-oz)<od+hd+T)for(const c of [ox+ow+hw-ovl(it,o),ox-ow-hw+ovl(it,o)])if(Math.abs(x-c)<T){x=c;sx=true}
  if(Math.abs(x-ox)<ow+hw+T)for(const c of [oz+od+hd-ovl(it,o),oz-od-hd+ovl(it,o)])if(Math.abs(z-c)<T){z=c;sz=true}}
 for(const o of items){if(o===it)continue;const [ow,od]=half(o),ox=o.g.position.x,oz=o.g.position.z;
  if(!sz)for(const c of [oz,oz-od+hd,oz+od-hd])if(Math.abs(z-c)<T){z=c;sz=true;break}
  if(!sx)for(const c of [ox,ox-ow+hw,ox+ow-hw])if(Math.abs(x-c)<T){x=c;sx=true;break}}
 return [sx?x:Math.round(x*20)/20,sz?z:Math.round(z*20)/20];
}
function spot(it){const p=it.g.position,[hw,hd]=half(it),t=[];
 items.filter(o=>o!==it).reverse().forEach(o=>{const [ow,od]=half(o),ox=o.g.position.x,oz=o.g.position.z;t.push([ox+ow+hw-ovl(it,o),oz],[ox-ow-hw+ovl(it,o),oz],[ox,oz+od+hd-ovl(it,o)],[ox,oz-od-hd+ovl(it,o)])});
 for(let k=0;k<30;k++)for(let a=0;a<12;a++)t.push([Math.cos(a/12*6.283)*k*.15,Math.sin(a/12*6.283)*k*.15]);
 for(const [x,z] of t){p.set(x,0,z);if(valid(it))return true}return false}
function place(type,quiet){
 if(!canAdd(type)){say(items.length>=C.maxPieces?`Limit reached: ${C.maxPieces} pieces maximum.`:`No more ${MODS[type].n} pieces allowed.`);return null}
 const it={type,rot:0,g:buildModule(type,colour)};items.push(it);
 if(!spot(it)){items.pop();say('No room left within the size limits.');return null}
 sc.add(it.g);if(!quiet){select(it);refresh()}return it}
function remove(it){if(!it)return;sc.remove(it.g);items.splice(items.indexOf(it),1);if(sel===it)select(null);refresh()}
function select(it){sel=it;items.forEach(i=>i.g.userData.T.forEach(m=>m.emissive&&m.emissive.setHex(i===it?0x2a2014:0)));helper.visible=!!it;$('st-rot').disabled=$('st-del').disabled=!it}
function rotate(){if(!sel)return;sel.rot=(sel.rot+1)%4;if(!valid(sel)){sel.rot=(sel.rot+3)%4;say('Not enough room to rotate here.');return}sel.g.rotation.y=sel.rot*Math.PI/2;refresh()}
function clear(){[...items].forEach(i=>sc.remove(i.g));items.length=0;select(null)}
const presetOk=n=>C.presets[n]&&C.enabled.seat&&C.enabled.arm&&n+2<=C.maxPieces&&(n*.9+.44)*100<=Math.max(C.maxWidth,C.maxDepth)&&!(C.max.seat>0&&n>C.max.seat)&&!(C.max.arm>0&&C.max.arm<2);
function preset(n){if(!presetOk(n)){say('That size is outside the current limits.');return}
 clear();const w=n*.9+.44,x0=-w/2;
 const put=(t,x)=>{const it={type:t,rot:0,g:buildModule(t,colour)};it.g.position.set(x,0,0);items.push(it);sc.add(it.g)};
 put('arm',x0+.11);for(let i=0;i<n;i++)put('seat',x0+.22+.45+i*.9);put('arm',x0+.22+n*.9+.11);
 $('st-start').style.display='none';home();refresh()}

/* ---- interaction ---- */
const ray=new THREE.Raycaster(),pt=new THREE.Vector2(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),0),hp=new THREE.Vector3(),off=new THREE.Vector3();
const aim=e=>{const b=dom.getBoundingClientRect();pt.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);ray.setFromCamera(pt,cam)};
dom.addEventListener('pointerdown',e=>{aim(e);const h=ray.intersectObjects(items.map(i=>i.g),true)[0];
 if(!h){select(null);return}let o=h.object;while(o&&!o.userData.type)o=o.parent;const it=items.find(i=>i.g===o);if(!it)return;
 select(it);drag=it;ctl.enabled=false;dom.setPointerCapture(e.pointerId);ray.ray.intersectPlane(plane,hp);off.set(it.g.position.x-hp.x,0,it.g.position.z-hp.z)},true);
dom.addEventListener('pointermove',e=>{if(!drag)return;aim(e);if(!ray.ray.intersectPlane(plane,hp))return;
 const [x,z]=snapPos(drag,hp.x+off.x,hp.z+off.z),p=drag.g.position,ox=p.x,oz=p.z;
 const set=(a,b)=>{p.set(a,0,b);if(valid(drag))return true;p.set(ox,0,oz);return false};
 if(!set(x,z)&&!set(x,oz))set(ox,z)});
const up=()=>{if(drag){drag=null;ctl.enabled=true;refresh()}};dom.addEventListener('pointerup',up);dom.addEventListener('pointercancel',up);
addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)||!$('st-canvas'))return;if(e.key==='Delete')remove(sel);if(e.key==='r'||e.key==='R')rotate()});

/* ---- UI ---- */
/* ---- Collections list & selection modal ---- */
const allCollections=[
 {id:'',name:'Classic modules',image:Store.url('collection:classic')||null,isClassic:true},
 ...COLS.map(c=>({id:c.id,name:c.name,image:c.image||Store.url('collection:'+c.id)||null,count:c.pieces?.length||0}))
];

function selectCollection(colId){
 const el=$('st-cols');
 if(el)el.querySelectorAll('.pill').forEach(x=>x.classList.toggle('on',x.dataset.c===colId));
 const c=COLS.find(x=>x.id===colId);
 palette(c?c.pieces.map(p=>c.id+':'+p.id):TYPES);
 refresh();
 $('st-step-col').style.display='none';
 $('st-step-seats').style.display='block';
 if(colId===''){
  $('st-seats-heading').textContent='How many seats?';
  $('st-preset-group').style.display='flex';
  $('st-seats-note').innerHTML='You can grow or shrink it afterwards, or <a href="#" id="st-empty">start with an empty floor</a>.';
 }else{
  $('st-seats-heading').textContent=`Build with ${c?c.name:'collection'}`;
  $('st-preset-group').style.display='none';
  $('st-seats-note').innerHTML='<button class="btn sm" id="st-start-custom" style="justify-content:center;margin-top:.4rem">Start with an empty floor</button>';
  const scb=$('st-start-custom');
  if(scb)scb.onclick=()=>{clear();$('st-start').style.display='none';refresh()};
 }
 const emp=$('st-empty');
 if(emp)emp.onclick=e=>{e.preventDefault();$('st-start').style.display='none'};
}

if($('st-col-cards')){
 $('st-col-cards').innerHTML=allCollections.map(c=>`
  <div class="st-col-card" data-col-select="${esc(c.id)}">
   <div class="col-img-wrap">${c.image?`<img src="${esc(c.image)}" alt="${esc(c.name)}">`:`<div style="font:italic 1.1rem var(--disp);color:var(--bronze)">${esc(c.name)}</div>`}</div>
   <div class="col-name"><span>${esc(c.name)}</span><span class="col-badge">${c.isClassic?'Standard':(c.count+' pieces')}</span></div>
  </div>`).join('');

 $('st-col-cards').onclick=e=>{
  const card=e.target.closest('[data-col-select]');
  if(!card)return;
  selectCollection(card.dataset.colSelect);
 };
}

const backBtn=$('st-back-cols');
if(backBtn)backBtn.onclick=()=>{
 $('st-step-seats').style.display='none';
 $('st-step-col').style.display='block';
};

/* ---- Hover popover for collection buttons ---- */
const popover=$('st-col-popover'),popImg=$('st-col-popover-img'),popTitle=$('st-col-popover-title');
{
 const el=$('st-cols');
 if(!COLS.length)el.hidden=true;
 else{
  el.innerHTML='<button class="pill on" data-c="">Classic modules</button>'+COLS.map(c=>`<button class="pill" data-c="${esc(c.id)}">${esc(c.name)}</button>`).join('');
  el.onclick=e=>{
   const b=e.target.closest('[data-c]');
   if(!b)return;
   selectCollection(b.dataset.c);
   $('st-start').style.display='none';
  };

  el.addEventListener('pointerover',e=>{
   const b=e.target.closest('[data-c]');
   if(!b||!popover)return;
   const col=allCollections.find(x=>x.id===b.dataset.c);
   if(!col)return;
   popTitle.textContent=col.name;
   if(col.image)popImg.innerHTML=`<img src="${esc(col.image)}" alt="${esc(col.name)}">`;
   else popImg.innerHTML=`<div style="font:italic 1rem var(--disp);color:var(--bronze);padding:1.4rem;text-align:center">${esc(col.name)}</div>`;
   const rect=b.getBoundingClientRect();
   popover.style.left=`${Math.max(10,Math.min(window.innerWidth-230,rect.left+rect.width/2-110))}px`;
   popover.style.top=`${rect.bottom+8}px`;
   popover.classList.add('show');
  });

  el.addEventListener('pointerout',e=>{
   const b=e.target.closest('[data-c]');
   if(!b||!popover)return;
   if(!e.relatedTarget||!b.contains(e.relatedTarget)){
    popover.classList.remove('show');
   }
  });
 }
}

/* ---- UI ---- */
$('st-tools').innerHTML='<span id="st-pal" style="display:contents"></span><span class="sep"></span><button class="pill" id="st-rot" disabled>Rotate 90°</button><button class="pill" id="st-del" disabled>Remove</button><button class="pill" id="st-clear">Clear</button><button class="pill" id="st-view">Reset view</button><button class="pill" id="st-again">Change size</button>';
const palette=list=>{$('st-pal').innerHTML=list.map(t=>`<button class="pill" data-add="${esc(t)}"></button>`).join('')};palette(TYPES);

$('st-tools').onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;if(b.dataset.add)place(b.dataset.add);
 else if(b.id==='st-rot')rotate();else if(b.id==='st-del')remove(sel);else if(b.id==='st-clear'){clear();refresh()}else if(b.id==='st-view')home();else if(b.id==='st-again'){
  $('st-start').style.display='flex';
  $('st-step-seats').style.display='none';
  $('st-step-col').style.display='block';
 }};
document.querySelectorAll('.st-preset').forEach(b=>{b.hidden=!C.presets[b.dataset.n];b.disabled=!presetOk(+b.dataset.n);b.onclick=()=>preset(+b.dataset.n)});
const empLink=$('st-empty');if(empLink)empLink.onclick=e=>{e.preventDefault();$('st-start').style.display='none'};

/* ---- Fabrics & Finishes ---- */
const finBox=$('st-fin-sections');
if(finBox){
 finBox.innerHTML=ST_FTYPES.map(ft=>{
  const list=studioFinishesFor(ft.id),cur=curFinishes[ft.id]||list[0];
  const labelId=ft.id==='fabric'?'st-fab':`st-fin-${esc(ft.id)}`;
  return `<div class="studio"><h3>${esc(ft.name)} · <span id="${labelId}" style="font-size:1.1rem">${esc(cur[0])}</span></h3><div class="sw" id="st-fsw-${esc(ft.id)}" style="margin-bottom:0">${list.map(([n,h,id,img],i)=>`<button class="${(cur&&cur[2]===id)?'on':''}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-ft="${esc(ft.id)}" data-i="${i}"></button>`).join('')}</div></div>`;
 }).join('');

 finBox.onclick=e=>{
  const b=e.target.closest('button[data-ft]');if(!b)return;
  const ftid=b.dataset.ft,list=studioFinishesFor(ftid),m=list[b.dataset.i];if(!m)return;
  curFinishes[ftid]=m;
  if(ftid==='fabric'){
   curFab=m;colour=m[1];touched=true;
   items.forEach(it=>applyFabric(it.g.userData.T,curFab,DEFMAP));
  }
  $(`st-fsw-${ftid}`).querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
  const t=$(ftid==='fabric'?'st-fab':`st-fin-${ftid}`);if(t)t.textContent=m[0];
  items.forEach(it=>applyModuleFinishes(it.g));
  refresh();
 };
}

$('st-add').onclick=()=>{
 if(!lastBuild)return;
 const ftxt=ST_FTYPES.map(ft=>`${ft.name}: ${curFinishes[ft.id]?.[0]||''}`).join(', ');
 Basket.add({key:'b:'+Date.now(),name:'Custom modular build',desc:`${lastBuild.txt} · ${lastBuild.dims} · Fabric: ${$('st-fab').textContent}${ftxt?' · '+ftxt:''}`,price:lastBuild.total,swatch:colour});
};

async function exportGroup(){const out=new THREE.Group(),inner=new THREE.Group(),mods=[];
 items.forEach(it=>{const m=buildModule(it.type,colour);m.position.copy(it.g.position);m.rotation.y=it.rot*Math.PI/2;applyModuleFinishes(m);inner.add(m);mods.push(m)});
 await Promise.all(mods.map(m=>m.userData.ready));mods.forEach(m=>{m.userData={}});
 const {cx,cz}=bbox();inner.position.set(-cx,0,-cz);out.add(inner);return out}
$('st-ar').onclick=async()=>openAR(await exportGroup(),'Your custom build','dekara-custom-build');
$('st-save').onclick=async()=>{try{await API.saveDesign({name:`Custom build (${items.length} pieces)`,fabric:Math.max(0,ST_FABRICS.findIndex(f=>f[1]===colour)),fabricId:curFab[2],price:items.reduce((a,i)=>a+PR(i.type),0),items:items.map(i=>({type:i.type,x:i.g.position.x,z:i.g.position.z,rot:i.rot}))});say('Saved to your account.')}catch(e){say(e.message)}};

/* ---- rotating preview of the configured build ---- */
const pv=(()=>{const cv=$('st-preview'),pr=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});rig(pr);
 const s=new THREE.Scene();s.environment=new THREE.PMREMGenerator(pr).fromScene(new RoomEnvironment(),.04).texture;s.add(key());s.add(bkl());
 const fl=new THREE.Mesh(new THREE.CircleGeometry(5,64),new THREE.ShadowMaterial({opacity:.22}));fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;s.add(fl);
 const ring=new THREE.Mesh(new THREE.RingGeometry(2.3,2.33,128),new THREE.MeshBasicMaterial({color:0x9c7a4d,transparent:true,opacity:.35,side:2}));ring.rotation.x=-Math.PI/2;ring.position.y=.005;s.add(ring);
 const grp=new THREE.Group();s.add(grp);const pc=new THREE.PerspectiveCamera(32,1,.1,100);pc.position.set(5,3,6.5);pc.lookAt(0,.7,0);
 const sz=()=>{const p=cv.parentElement,w=p.clientWidth||1,h=p.clientHeight||1;pr.setSize(w,h,false);pc.aspect=w/h;pc.updateProjectionMatrix()};new ResizeObserver(sz).observe(cv.parentElement);
 let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
 return {update(){grp.clear();$('st-pv-empty').style.display=items.length?'none':'grid';if(!items.length)return;
   const inner=new THREE.Group();items.forEach(it=>{const m=buildModule(it.type,colour);m.position.copy(it.g.position);m.rotation.y=it.rot*Math.PI/2;applyModuleFinishes(m);inner.add(m)});
   const {sx,sz:dz,cx,cz}=bbox();inner.position.set(-cx,0,-cz);grp.add(inner);grp.scale.setScalar(Math.min(1.8,3.4/Math.max(sx,dz,.5)))},
  tick(dt){if(!vis)return;grp.rotation.y+=dt*.45;pr.render(s,pc)}}})();

function refresh(){
 const cnt={};items.forEach(i=>cnt[i.type]=(cnt[i.type]||0)+1);const total=items.reduce((a,i)=>a+PR(i.type),0);
 $('st-sum').innerHTML=Object.keys(cnt).map(k=>`<div><span>${cnt[k]} × ${MODS[k].n}</span>${R(cnt[k]*PR(k))}</div>`).join('')||'<p style="color:var(--mut);font-size:.9rem;padding:.5rem 0">Nothing placed yet.</p>';
 $('st-total').textContent=R(total);
 const {sx,sz}=items.length?bbox():{sx:0,sz:0};const dims=items.length?`${Math.round(Math.max(sx,sz)*100)} × ${Math.round(Math.min(sx,sz)*100)} cm`:'—';
 $('st-size').textContent=dims;$('st-count').textContent=`${items.length} / ${C.maxPieces}`;
 document.querySelectorAll('[data-add]').forEach(b=>{const t=b.dataset.add;b.textContent=`+ ${MODS[t].n} · ${R(PR(t))}`;b.disabled=!canAdd(t)});
 const txt=Object.keys(cnt).map(k=>`${cnt[k]}× ${MODS[k].n}`).join(', ');
 lastBuild=items.length?{txt,dims,total}:null;$('st-add').disabled=$('st-ar').disabled=$('st-save').disabled=!items.length;
 pv.update()}
let last=performance.now();
(function loop(n){requestAnimationFrame(loop);const dt=Math.min((n-last)/1000,.05);last=n;
 if(host.clientWidth){ctl.update();if(sel)helper.setFromObject(sel.g);r.render(sc,cam)}pv.tick(dt)})(last);
refresh();
const did=new URLSearchParams(location.search).get('design');
if(did)API.designs().then(ds=>{const d=ds.find(x=>x.id===did);if(!d)return;let fi=ST_FABRICS.findIndex(f=>f[2]===d.fabricId);if(fi<0)fi=Math.min(Math.max(0,d.fabric|0),ST_FABRICS.length-1);colour=ST_FABRICS[fi][1];curFab=ST_FABRICS[fi];curFinishes.fabric=curFab;touched=true;$('st-fab').textContent=ST_FABRICS[fi][0];
 $(`st-fsw-fabric`).querySelectorAll('button').forEach((b,k)=>b.classList.toggle('on',k===fi));clear();
 d.items.forEach(o=>{if(!MODS[o.type])return;const it={type:o.type,rot:o.rot||0,g:buildModule(o.type,colour)};it.g.position.set(o.x,0,o.z);it.g.rotation.y=it.rot*Math.PI/2;items.push(it);sc.add(it.g)});
 $('st-start').style.display='none';refresh()});
