import * as THREE from 'three';
import * as Store from './store.js';
import { PRODUCTS, build } from './products.js';
import { loadGLTF } from './loader.js';
import { fit } from './ar.js';

const $=id=>document.getElementById(id),canvas=$('room-canvas'),status=$('room-status');
const productsEl=$('room-products'),itemsEl=$('room-items'),startButton=$('room-start'),stopButton=$('room-stop');
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const templates=new Map(),placed=[];
let xr,scene,camera,modules=[],pending=null,movingId=null,selectedId=null,active=false,serial=0,enginePromise=null,engineReady=false,selectionToken=0;
const canvasHome=canvas.parentElement,canvasNext=canvas.nextSibling,canvasStyle=canvas.getAttribute('style'),canvasWidth=canvas.width,canvasHeight=canvas.height;
const enabled=()=>Store.siteCfg().roomBuilderEnabled!==false;
const setStatus=text=>{status.textContent=text};
window.THREE=THREE;

function loadScript(src,readyEvent){
 return new Promise((resolve,reject)=>{
  const existing=document.querySelector(`script[src="${src}"]`);
  if(readyEvent&&window.XR8)return resolve(window.XR8);
  if(!readyEvent&&window.XRExtras)return resolve(window.XRExtras);
  const script=existing||document.createElement('script');
  let readyTimeout;
  const cleanup=()=>{if(readyEvent)window.removeEventListener(readyEvent,loaded);script.removeEventListener('load',loaded);script.removeEventListener('error',failed);clearTimeout(readyTimeout)};
  const loaded=()=>{
   if(readyEvent&&!window.XR8)return;
   if(!readyEvent&&!window.XRExtras)return;
   cleanup();resolve(readyEvent?window.XR8:window.XRExtras);
  };
  const failed=()=>{cleanup();reject(new Error(`Could not load ${readyEvent?'the AR engine':'the AR canvas helper'}. Check your internet connection and try again.`))};
  if(readyEvent)window.addEventListener(readyEvent,loaded);
  script.addEventListener('load',loaded,{once:true});
  script.addEventListener('error',failed,{once:true});
  if(!existing){
   script.async=true;script.crossOrigin='anonymous';
   if(readyEvent)script.dataset.preloadChunks='slam';
   script.src=src;document.head.append(script);
  }
  readyTimeout=setTimeout(()=>{cleanup();reject(new Error(`Timed out loading ${readyEvent?'the AR engine':'the AR canvas helper'}.`))},30000);
 });
}

function loadEngine(){
 if(enginePromise)return enginePromise;
 enginePromise=Promise.all([
  loadScript('https://cdn.jsdelivr.net/npm/@8thwall/engine-binary@1.0.0/dist/xr.js','xrloaded'),
  loadScript('https://cdn.jsdelivr.net/npm/@8thwall/xrextras@1.0.0/dist/xrextras.js')
 ]).then(([engine])=>engine).catch(error=>{enginePromise=null;throw error});
 return enginePromise;
}

function templateFor(product){
 if(!templates.has(product.id)){
  const promise=(async()=>{
   const url=Store.url('model:'+product.id)||Store.DATA.models?.[product.id];
   const model=url?(await loadGLTF(url)).scene:build(product.id,product.fabrics?.[0]?.[1]||'#d4cabb');
   if(!model)throw new Error(`No 3D model is available for ${product.name}.`);
   const fitted=fit(model,product.dims);
   if(!fitted)throw new Error(`The 3D model for ${product.name} is empty.`);
   return fitted;
  })();
  templates.set(product.id,promise);
  promise.catch(()=>templates.delete(product.id));
 }
 return templates.get(product.id);
}

function renderProducts(){
 const query=$('room-search').value.trim().toLocaleLowerCase();
 const list=PRODUCTS.filter(p=>!query||`${p.name} ${p.cat} ${p.sub}`.toLocaleLowerCase().includes(query));
 productsEl.innerHTML=list.map(p=>`<div class="room-product"><span><b>${esc(p.name)}</b><small>${esc(p.cat)}</small></span><button type="button" data-room-add="${esc(p.id)}">Add</button></div>`).join('')||'<p class="room-empty">No matching pieces.</p>';
}

function renderItems(){
 $('room-count').textContent=String(placed.length);
 $('room-empty').hidden=placed.length>0;
 itemsEl.innerHTML=placed.map(item=>`<button type="button" class="room-item${item.id===selectedId?' on':''}" data-room-select="${item.id}" aria-pressed="${item.id===selectedId}">${esc(item.product.name)} <span>×</span></button>`).join('');
 document.querySelectorAll('[data-room-action]').forEach(button=>{
  button.disabled=button.dataset.roomAction==='cancel'?(!pending&&!movingId):(!active||!selectedId||pending!==null||movingId!==null);
 });
 $('room-actions').querySelector('[data-room-action="cancel"]').hidden=!pending&&!movingId;
}

function roomEnabled(){
 const enabledNow=enabled();
 $('room-disabled').hidden=enabledNow;
 $('room-products').parentElement.hidden=!enabledNow;
 $('room-items').parentElement.hidden=!enabledNow;
 startButton.hidden=!enabledNow||active;
 stopButton.hidden=!active;
 if(!enabledNow&&active)stop();
 if(!enabledNow||engineReady)startButton.disabled=false;
 if(!enabledNow)setStatus('Room builder is disabled. Enable it in the admin panel to make it available.');
 return enabledNow;
}

function prepareEngine(){
 if(!enabled()||engineReady)return;
 startButton.disabled=true;
 setStatus('Loading the AR engine…');
 loadEngine().then(()=>{
  engineReady=true;
  if(enabled()){startButton.disabled=false;setStatus(pending?`${pending.product.name} is ready. Start the camera, then tap a clear floor spot to place it.`:'Choose furniture, then start the camera. Camera permission is requested only when you start.')}
 }).catch(error=>{if(enabled()){startButton.disabled=false;setStatus(error.message||'Could not load the AR engine.')}});
}

function selectProduct(product){
 if(!enabled())return;
 const token=++selectionToken;
 pending=null;movingId=null;renderItems();
 setStatus(`Preparing ${product.name}…`);
 templateFor(product).then(template=>{
  if(!enabled()||token!==selectionToken)return;
  pending={product,template};
  renderItems();
  setStatus(active?`Tap a clear floor spot in the camera view to place ${product.name}.`:`${product.name} is ready. Start the camera, then tap a clear floor spot to place it.`);
 }).catch(error=>setStatus(error.message||'Could not load this furniture model.'));
}

function getHit(event){
 const rect=canvas.getBoundingClientRect();
 if(!rect.width||!rect.height)return null;
 const x=Math.max(0,Math.min(1,(event.clientX-rect.left)/rect.width));
 const y=Math.max(0,Math.min(1,(event.clientY-rect.top)/rect.height));
 try{
  const hits=xr.XrController.hitTest(x,y,['FEATURE_POINT']);
  return hits.find(hit=>hit.type==='DETECTED_SURFACE')||hits.find(hit=>hit.type==='ESTIMATED_SURFACE')||hits[0]||null;
 }catch(error){
  console.error('Could not estimate a room placement point.',error);
  setStatus('Still scanning the room. Move the phone slowly and try again.');
  return null;
 }
}

function selectPlaced(event){
 if(!camera)return null;
 const rect=canvas.getBoundingClientRect();
 const point=new THREE.Vector2((event.clientX-rect.left)/rect.width*2-1,-((event.clientY-rect.top)/rect.height)*2+1);
 const raycaster=new THREE.Raycaster();raycaster.setFromCamera(point,camera);
 const hits=raycaster.intersectObjects(placed.map(item=>item.object),true);
 if(!hits.length)return null;
 let node=hits[0].object;
 while(node&&!node.userData.roomItemId)node=node.parent;
 return placed.find(item=>item.id===node?.userData.roomItemId)||null;
}

function placeOnHit(hit){
 if(!hit){setStatus('No floor point found there. Move the camera to scan the floor and try again.');return}
 if(pending){
  const object=pending.template.clone(true),id=String(++serial);
  object.position.set(hit.position.x,hit.position.y,hit.position.z);
  if(hit.rotation)object.quaternion.set(hit.rotation.x,hit.rotation.y,hit.rotation.z,hit.rotation.w).normalize();
  object.userData.roomItemId=id;object.traverse(node=>{node.userData.roomItemId=id});
  scene.add(object);placed.push({id,product:pending.product,object});
  selectedId=id;pending=null;renderItems();
  setStatus('Furniture placed. Add another piece or select one to adjust it.');
  return;
 }
 if(movingId){
  const item=placed.find(entry=>entry.id===movingId);
  if(item){item.object.position.set(hit.position.x,hit.position.y,hit.position.z);selectedId=item.id}
  movingId=null;renderItems();setStatus('Furniture moved.');
 }
}

function handleSceneTap(event){
 if(!active||!xr||!scene)return;
 if(pending||movingId){placeOnHit(getHit(event));return}
 const item=selectPlaced(event);
 if(item){selectedId=item.id;renderItems();setStatus(`${item.product.name} selected.`)}
}

async function start(){
 if(!roomEnabled()||active)return;
 if(!window.isSecureContext){setStatus('Camera access requires a secure HTTPS connection.');return}
 startButton.disabled=true;setStatus('Loading the AR engine…');
 try{
  xr=await loadEngine();
  if(!enabled())return;
  if(!xr.XrController||!xr.Threejs||!xr.GlTextureRenderer)throw new Error('This browser does not support the AR engine.');
  window.THREE=THREE;
  const xrc=xr.XrController.pipelineModule(),gl=xr.GlTextureRenderer.pipelineModule(),fullWindow=window.XRExtras.FullWindowCanvas.pipelineModule(),three=xr.Threejs.pipelineModule();
  const roomModule={name:'dekara-room-placement',onStart:()=>{
   ({scene,camera}=xr.Threejs.xrScene());
   scene.add(new THREE.HemisphereLight(0xffffff,0x80756a,2));
   const light=new THREE.DirectionalLight(0xffffff,2.5);light.position.set(2,5,3);scene.add(light);
   setStatus('Move your phone slowly to scan the floor, then tap to place furniture.');
  },onCameraStatusChange:({status:cameraStatus})=>{
   if(cameraStatus==='failed')setStatus('Camera access failed. Check your browser permission and try again.');
  },onException:error=>{
   console.error('The room AR engine reported an error.',error);
   setStatus(error?.message||'The AR session encountered an error. Stop and try again.');
  }};
  modules=[xrc,gl,fullWindow,three,roomModule];
  xr.addCameraPipelineModules(modules);
  xr.XrController.configure({enableLighting:true});
  active=true;document.body.classList.add('room-ar-active');
  xr.run({canvas,cameraConfig:{direction:xr.XrConfig.camera().BACK},allowedDevices:xr.XrConfig.device().MOBILE});
  startButton.hidden=true;stopButton.hidden=false;renderItems();
 }catch(error){
  console.error('Could not start the room AR experience.',error);
  if(xr&&modules.length){try{xr.stop();modules.forEach(module=>xr.removeCameraPipelineModule(module.name))}catch(stopError){console.error('Could not clean up the failed AR startup.',stopError)}}
  restoreCameraCanvas();
  active=false;document.body.classList.remove('room-ar-active');
  modules=[];scene=null;camera=null;
  setStatus(error.message||'Could not start the camera. Check browser support and camera permission.');
  startButton.disabled=false;
 }
}

function stop(){
 if(xr&&active){
  try{xr.stop();modules.forEach(module=>xr.removeCameraPipelineModule(module.name))}
  catch(error){console.error('Could not stop the room AR experience cleanly.',error)}
 }
 active=false;scene=null;camera=null;modules=[];
 document.body.classList.remove('room-ar-active');
 restoreCameraCanvas();
 startButton.disabled=false;stopButton.hidden=true;startButton.hidden=!enabled();
 selectionToken++;placed.length=0;pending=null;movingId=null;selectedId=null;
 renderItems();
 if(enabled())setStatus('Camera stopped. Your room arrangement has been cleared.');
}

function restoreCameraCanvas(){
 if(canvas.parentElement!==canvasHome)canvasHome.insertBefore(canvas,canvasNext?.parentElement===canvasHome?canvasNext:null);
 if(canvasStyle===null)canvas.removeAttribute('style');else canvas.setAttribute('style',canvasStyle);
 canvas.width=canvasWidth;canvas.height=canvasHeight;
}

function runAction(action){
 const item=placed.find(entry=>entry.id===selectedId);
 if(action==='cancel'){selectionToken++;pending=null;movingId=null;renderItems();setStatus('Placement cancelled.');return}
 if(!item)return;
 if(action==='move'){movingId=item.id;setStatus(`Tap a new floor spot to move ${item.product.name}.`)}
 if(action==='rotate'){item.object.rotation.y+=Math.PI/2;setStatus(`${item.product.name} rotated.`)}
 if(action==='duplicate'){const object=item.object.clone(true);object.position.x+=Math.max(.5,item.product.dims?.[0]/200||.5);const id=String(++serial);object.userData.roomItemId=id;object.traverse(node=>{node.userData.roomItemId=id});scene?.add(object);placed.push({id,product:item.product,object});selectedId=id;setStatus(`${item.product.name} duplicated.`)}
 if(action==='remove'){scene?.remove(item.object);placed.splice(placed.indexOf(item),1);selectedId=placed.at(-1)?.id||null;setStatus(`${item.product.name} removed.`)}
 renderItems();
}

productsEl.addEventListener('click',e=>{
 const button=e.target.closest('[data-room-add]');if(!button)return;
 const product=PRODUCTS.find(p=>p.id===button.dataset.roomAdd);if(product)selectProduct(product);
});
itemsEl.addEventListener('click',e=>{
 const button=e.target.closest('[data-room-select]');if(!button)return;
 selectionToken++;selectedId=button.dataset.roomSelect;pending=null;movingId=null;renderItems();
 const item=placed.find(entry=>entry.id===selectedId);if(item)setStatus(`${item.product.name} selected.`);
});
$('room-actions').addEventListener('click',e=>{const button=e.target.closest('[data-room-action]');if(button&&!button.disabled)runAction(button.dataset.roomAction)});
$('room-search').addEventListener('input',renderProducts);
canvas.addEventListener('click',handleSceneTap);
startButton.addEventListener('click',start);stopButton.addEventListener('click',stop);
window.addEventListener('siteconfigchange',roomEnabled);
window.addEventListener('siteconfigchange',prepareEngine);
window.addEventListener('beforeunload',()=>{if(active)stop()});
renderProducts();renderItems();roomEnabled();prepareEngine();
