import { PRODUCTS, FINISH_TYPES, assignedFinishesFor, FINISHES, FABRIC_TYPES, getMapping, mappingId, ORIGINAL } from './products.js';
import { viewer } from './viewer.js';
import * as Basket from './basket.js';
import { fit, openAR } from './ar.js';
import { initReviews } from './reviews.js';
import { setRangeValue } from './range.js';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const p=PRODUCTS.find(x=>x.id===new URLSearchParams(location.search).get('id'))||PRODUCTS[0];
if(!p)location.replace('shop.html');else{
document.title=`${p.name} | Dekara Designs`;
$('p-tag').textContent=p.cat+' · '+p.tag;$('p-name').textContent=p.name;$('p-desc').textContent=p.desc;
$('p-spec').innerHTML=`<div><span>Construction</span>${esc(p.mat)}</div><div><span>Delivery</span>4–6 weeks</div>`;
const [width,depth,height]=p.dims;
const dimensionsToggle=$('p-dimensions-toggle'),dimensionsOverlay=$('p-dimensions');
const dimensionsSvg=dimensionsOverlay.querySelector('svg');
dimensionsOverlay.setAttribute('aria-label',`Model dimensions: width ${width} cm, depth ${depth} cm, height ${height} cm`);
const dimensionSpecs=[
 {key:'width',text:`WIDTH · ${width} cm`,line:$('p-dim-width-line'),guide:$('p-dim-width-guide'),label:$('p-dim-width')},
 {key:'depth',text:`DEPTH · ${depth} cm`,line:$('p-dim-depth-line'),guide:$('p-dim-depth-guide'),label:$('p-dim-depth')},
 {key:'height',text:`HEIGHT · ${height} cm`,line:$('p-dim-height-line'),guide:$('p-dim-height-guide'),label:$('p-dim-height')}
];
dimensionSpecs.forEach(d=>d.label.textContent=d.text);
const ticks=$('p-dim-ticks');
const updateDimensions=()=>{
 if(dimensionsOverlay.hidden)return;
 const projection=v.projectDimensions();if(!projection){dimensionsSvg.style.visibility='hidden';return}
 dimensionsSvg.style.visibility='';
 const tickParts=[];
 dimensionSpecs.forEach(({key,line,guide,label})=>{
  const [a,b]=projection[key],dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy)||1;
  let nx=-dy/length,ny=dx/length;
  if(nx*((a.x+b.x)/2-500)+ny*((a.y+b.y)/2-350)<0){nx=-nx;ny=-ny}
  const offset=16,p1={x:a.x+nx*offset,y:a.y+ny*offset},p2={x:b.x+nx*offset,y:b.y+ny*offset};
  line.setAttribute('d',`M${p1.x} ${p1.y}L${p2.x} ${p2.y}`);
  guide.setAttribute('d',`M${a.x} ${a.y}L${p1.x} ${p1.y}M${b.x} ${b.y}L${p2.x} ${p2.y}`);
  const tx=dx/length*6,ty=dy/length*6;
  tickParts.push(`M${p1.x-tx} ${p1.y-ty}L${p1.x+tx} ${p1.y+ty}`,`M${p2.x-tx} ${p2.y-ty}L${p2.x+tx} ${p2.y+ty}`);
  let angle=Math.atan2(dy,dx)*180/Math.PI;if(angle>90||angle<-90)angle+=180;
  const cx=(p1.x+p2.x)/2+nx*18,cy=(p1.y+p2.y)/2+ny*18;
  label.setAttribute('x',cx);label.setAttribute('y',cy);label.setAttribute('transform',`rotate(${angle} ${cx} ${cy})`);
 });
 ticks.setAttribute('d',tickParts.join(''));
};
dimensionsToggle.onclick=()=>{
 const visible=dimensionsToggle.getAttribute('aria-expanded')!=='true';
 dimensionsToggle.setAttribute('aria-expanded',String(visible));
 dimensionsToggle.textContent=visible?'Hide dimensions':'Show dimensions';
 dimensionsOverlay.hidden=!visible;
 dimensionsOverlay.setAttribute('aria-hidden',String(!visible));
 if(visible)updateDimensions();
};
const v=viewer($('p-canvas'),p.id,{orbit:true,capture:true});
v.onFrame(updateDimensions);
const lightingControls={
 brightness:$('p-light-brightness'),warmth:$('p-light-warmth'),environment:$('p-light-environment')
};
const syncLightingInput=(key,value)=>{
 const range=lightingControls[key],exact=$(`p-light-${key}-exact`);
 if(!Number.isFinite(value))return;
 setRangeValue(range,value);exact.value=String(value);updateLighting();
};
const updateLighting=()=>{
 const values=Object.fromEntries(Object.entries(lightingControls).map(([key,input])=>[key,Number(input.value)]));
 $('p-light-brightness-value').textContent=`${values.brightness}%`;
 $('p-light-warmth-value').textContent=values.warmth===0?'Neutral':`${values.warmth>0?'Warm':'Cool'} ${Math.abs(values.warmth)}%`;
 $('p-light-environment-value').textContent=`${values.environment}%`;
 v.setLighting({brightness:values.brightness/100,warmth:values.warmth/100,environment:values.environment/100});
};
Object.entries(lightingControls).forEach(([key,range])=>{
 range.addEventListener('input',()=>{ $(`p-light-${key}-exact`).value=range.value;updateLighting() });
 const exact=$(`p-light-${key}-exact`);
 exact.addEventListener('input',()=>syncLightingInput(key,exact.valueAsNumber));
 exact.addEventListener('change',()=>{if(!Number.isFinite(exact.valueAsNumber))exact.value=range.value});
});
updateLighting();
$('p-light-reset').onclick=()=>{Object.entries({brightness:100,warmth:0,environment:100}).forEach(([key,value])=>syncLightingInput(key,value))};
const opts=(p.fabrics&&p.fabrics.length)?p.fabrics:[['Oyster','#d4cabb','oyster',null,'']];
let fabric=opts.find(m=>m[2]===p.defaults?.fabric)||opts[0],cur,override=null;
const ftypes=p.finishTypes||[{id:'frame',name:'Frame',target:'frame',finishes:FINISHES},{id:'fabric',name:'Fabric',target:'fabric',materialType:'Fabric',finishes:opts}];
const curFinishes={};
ftypes.forEach(ft=>{curFinishes[ft.id]=ft.finishes.find(m=>m[2]===p.defaults?.[ft.id])||ft.finishes[0]||FINISHES[0]});
const paint=()=>v.setFabric(fabric,override||getMapping(p.id,fabric[2],'fabric'));

const selectFabric=id=>{const f=opts.find(z=>z[2]===id);if(!f)return;fabric=f;override=null;paint();update()};

// Render finish types
const finBox=$('p-finishes');
ftypes.forEach(ft=>{
 const label=document.createElement('label'),value=document.createElement('span');
 label.append(`${ft.name} finish · `,value);
 value.textContent=curFinishes[ft.id]?.[0]||'';
 const sw=document.createElement('div');sw.className='sw';
 if(ft.id==='fabric'){
  const typeLabel=document.createElement('label'),typeSelect=document.createElement('select');
  typeLabel.append('Fabric type',typeSelect);
  const availableTypes=FABRIC_TYPES.filter(type=>opts.some(material=>material[5]===type));
  typeSelect.innerHTML=availableTypes.map(type=>`<option value="${esc(type)}">${esc(type)}</option>`).join('');
  const renderSwatches=()=>{const materials=opts.filter(material=>material[5]===typeSelect.value);sw.innerHTML=materials.map(([n,h,id,img])=>`<button class="${id===fabric[2]?'on':''}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-id="${esc(id)}"></button>`).join('')};
  const selectFinish=m=>{if(!m)return;typeSelect.value=m[5];renderSwatches();selectFabric(m[2]);curFinishes[ft.id]=m;value.textContent=m[0];v.setFinish(ft.target||ft.name,m,getMapping(p.id,m[2],ft.id));update()};
  sw.onclick=e=>{const b=e.target.closest('button');if(b)selectFinish(opts.find(material=>material[2]===b.dataset.id))};
  typeSelect.onchange=()=>{const first=opts.find(material=>material[5]===typeSelect.value);if(first)selectFinish(first)};
  finBox.append(typeLabel,label,sw);
  typeSelect.value=fabric[5]||availableTypes[0]||'';
  renderSwatches();
  if(curFinishes[ft.id])selectFinish(curFinishes[ft.id]);
  ft.select=selectFinish;
 }else{
  sw.innerHTML=(ft.finishes||[]).map(([n,h,id,img],i)=>`<button class="${i?'':'on'}" style="background:${img?`url(${esc(img)}) center/cover`:esc(h)}" title="${esc(n)}" aria-label="${esc(n)}" data-i="${i}"></button>`).join('');
  const selectFinish=m=>{if(!m)return;curFinishes[ft.id]=m;sw.querySelectorAll('button').forEach(x=>x.classList.toggle('on',ft.finishes[x.dataset.i]===m));value.textContent=m[0];v.setFinish(ft.target||ft.name,m,getMapping(p.id,m[2],ft.id));update()};
  sw.onclick=e=>{const b=e.target.closest('button');if(b)selectFinish(ft.finishes[b.dataset.i])};
  finBox.append(label,sw);
  if(curFinishes[ft.id])selectFinish(curFinishes[ft.id]);
  ft.select=selectFinish;
 }
});

function update(){const d=p.dims,price=p.price;$('p-price').textContent='R '+price.toLocaleString('en-ZA');
 const ftxt=Object.values(curFinishes).map(m=>m[0]).join(', ');
 cur={d,price,ftxt}}
update();paint();
$('p-add').onclick=()=>Basket.add({key:`p:${p.id}:${fabric[0]}:${cur.ftxt}:${cur.d.join('x')}`,name:p.name,desc:`${fabric[0]} · ${cur.ftxt} · ${cur.d.join(' × ')} cm`,price:cur.price,swatch:fabric[1]});
import('./cardviews.js').then(({cardHtml,mount})=>{const rel=[...PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id),...PRODUCTS.filter(x=>x.cat!==p.cat)].slice(0,4);
 $('related').innerHTML=rel.map(x=>cardHtml(x)).join('');$('related').querySelectorAll('.card').forEach(mount)});
$('p-gallery').innerHTML=[1,2,3].map(n=>`<div data-slot="gallery:${p.id}:${n}" data-label="Photo ${n}"></div>`).join('');applySlots();
const gallery=$('p-gallery'),lightbox=document.createElement('dialog');
lightbox.className='gallery-lightbox';lightbox.innerHTML='<button type="button" class="gallery-lightbox-close" aria-label="Close image">×</button><img alt="">';
document.body.append(lightbox);
const lightboxImage=lightbox.querySelector('img');
gallery.querySelectorAll('[data-slot]').forEach(slot=>{
 const image=slot.querySelector('img.slot-media');if(!image)return;
 image.alt=slot.dataset.label;
 slot.tabIndex=0;slot.setAttribute('role','button');slot.setAttribute('aria-label',`Maximize ${image.alt}`);
 const open=()=>{lightboxImage.src=image.currentSrc||image.src;lightboxImage.alt=image.alt;lightbox.showModal()};
 slot.addEventListener('click',open);
 slot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
});
lightbox.querySelector('.gallery-lightbox-close').onclick=()=>lightbox.close();
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
$('p-wish').dataset.wish=p.id;$('p-cmp').dataset.cmp=p.id;
$('p-ar').onclick=()=>{const o=fit(v.getModel().object,cur.d);openAR(o,p.name,'dekara-'+p.id)};
initReviews(p.id);
const mappingOptions=FINISH_TYPES.flatMap(ft=>assignedFinishesFor(p.id,ft.id).map(material=>({
 key:mappingId(material[2],ft.id),label:`${ft.name}: ${material[0]}`,kind:'finish',material,ft
})));
// Hooks for the admin panel's per-material mapping preview.
window.__prod={piece:p,fabrics:p.fabrics,current:()=>fabric||p.fabrics[0],mappingOptions,
 mapping:key=>{const item=mappingOptions.find(x=>x.key===key);return item?getMapping(p.id,item.material[2],item.ft?.id):getMapping(p.id,key)},
 selectMapping:key=>{const item=mappingOptions.find(x=>x.key===key);if(!item)return;
  if(item.ft.select)item.ft.select(item.material);
  else if(item.ft.id==='fabric'){fabric=item.material;override=null;v.setFabric(item.material,getMapping(p.id,item.material[2],'fabric'))}
  else v.setFinish(item.ft.target||item.ft.name,item.material,getMapping(p.id,item.material[2],item.ft.id));
  update()},
 previewMapping:(key,m)=>{const item=mappingOptions.find(x=>x.key===key);if(!item)return;
  if(item.ft.select)item.ft.select(item.material);
  if(item.ft.id==='fabric'){fabric=item.material;override=m;v.setFabric(item.material,m)}
  else v.setFinish(item.ft.target||item.ft.name,item.material,m);
  update()
 }};
dispatchEvent(new Event('prod-ready'));
}
