(()=>{var v0=Object.defineProperty;var He=(i,e)=>()=>(i&&(e=i(i=0)),e);var Zd=(i,e)=>{for(var t in e)v0(i,t,{get:e[t],enumerable:!0})};var Ml,Qd,pe,_0,Lo,dt,S0,Sa,ef,M0,Ma,Mi,tf,nf,wa,hr,w0,rt,Io,sf,Jd,Do,rf,E0,No,af,$n,of,Ls,Uo,cf,Oo,lf,wl,El,qt,hf,uf,Fo,df,ff,pf,mf,gf,Al,bf,yf,xf,vf,Fn=He(()=>{Ml="dekara-cfg",Qd={};try{Qd=JSON.parse(localStorage.getItem(Ml)||"{}")}catch{}pe={products:{}},_0={},Lo={},dt={models:{},documents:null},S0=()=>new Promise((i,e)=>{let t=indexedDB.open("dekara-media",1);t.onupgradeneeded=()=>t.result.createObjectStore("f"),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)}),Sa=(i,e)=>S0().then(t=>new Promise((n,s)=>{let r=t.transaction("f",i),a=e(r.objectStore("f"));r.oncomplete=()=>n(a.result),r.onerror=()=>s(r.error)})),ef=(async()=>{try{let e=await fetch("data/site.json",{cache:"no-store"});if(e.ok){let t=await e.json();Object.assign(dt,t),Object.assign(_0,JSON.parse(JSON.stringify(t)))}}catch{}let i={...Qd};delete i._publishedAt,Object.assign(pe,JSON.parse(JSON.stringify(dt.config||{})),i),pe.products??={},!dt.apiBase&&pe.site?.apiBase&&(dt.apiBase=pe.site.apiBase);try{let e=await Sa("readonly",n=>n.getAllKeys()),t=await Sa("readonly",n=>n.getAll());e.forEach((n,s)=>Lo[n]={url:URL.createObjectURL(t[s].blob),type:t[s].type||"",name:t[s].name})}catch(e){console.warn("Media store unavailable",e)}})(),M0=i=>{if((pe._removed||[]).includes(i))return null;let e=dt.files?.[i];return e?{url:e.path,type:e.type||"",name:e.name||e.path.split("/").pop(),repo:!0}:null},Ma=i=>Lo[i]||M0(i),Mi=i=>Ma(i)?.url||null,tf=i=>Lo[i]||null,nf=()=>Object.keys(Lo),wa=(i,e)=>(pe._removed?.includes(i)&&(pe._removed=pe._removed.filter(t=>t!==i),rt()),Sa("readwrite",t=>t.put({blob:e,type:e.type||(/\.(mp4|m4v|mov|webm|ogv)$/i.test(e.name)?"video/mp4":""),name:e.name},i))),hr=async i=>{try{await Sa("readwrite",e=>e.delete(i))}catch{}if(dt.files?.[i]){let e=pe._removed??=[];e.includes(i)||e.push(i),rt()}},w0=()=>Sa("readwrite",i=>i.clear()),rt=()=>localStorage.setItem(Ml,JSON.stringify(pe)),Io=(i,e,t)=>{(pe.products[i]??={})[e]=e==="price"?Number(t)||0:e==="dims"?t.map(n=>Math.max(1,Math.round(Number(n)||1))):t,rt()},sf=i=>{Object.keys(pe).forEach(e=>delete pe[e]),Object.assign(pe,i),pe.products??={},rt()},Jd={maxPieces:12,maxWidth:500,maxDepth:400,snap:!0,enabled:{seat:!0,corner:!0,chaise:!0,ottoman:!0,arm:!0},prices:{seat:6500,corner:7200,chaise:8800,ottoman:3900,arm:1800},max:{seat:0,corner:0,chaise:0,ottoman:0,arm:0},presets:{1:!0,2:!0,3:!0,4:!0}},Do=()=>{let i=pe.studio||{},e=t=>({...Jd[t],...i[t]||{}});return{...Jd,...i,enabled:e("enabled"),prices:e("prices"),max:e("max"),presets:e("presets")}},rf=(i,e)=>{let t=i.split("."),n=pe.studio??={};t.slice(0,-1).forEach(s=>n=n[s]??={}),n[t[t.length-1]]=e,rt()},E0={delivery:950,payNow:!0},No=()=>({...E0,...pe.shop||{}}),af=(i,e)=>{(pe.shop??={})[i]=e,rt()},$n=()=>pe.site||{},of=(i,e)=>{(pe.site??={})[i]=e,rt()},Ls=()=>{let i=$n(),e=Number(i.viewportMinZoom),t=Number(i.viewportMaxZoom),n=Number.isFinite(e)&&e>0?e:4,s=Number.isFinite(t)&&t>0?t:12;return s<=n&&(n=4,s=12),{pan:i.viewportPan===!0,minZoom:n,maxZoom:s}},Uo=()=>(pe.collections??dt.collections??[]).map(i=>({...i,image:Mi("collection:"+i.id)||i.image||null})),cf=i=>{(pe.added??=[]).push(i),rt()},Oo=(i,e,t)=>{((pe.mapping??={})[i]??={})[e]=t,rt()},lf=(i,e)=>{pe.mapping?.[i]&&delete pe.mapping[i][e],rt()},wl=(i,e,t)=>{((pe.pieceFinishAvailability??={})[i]??={})[e]=t,rt()},El=(i,e,t)=>{((pe.pieceDefaults??={})[i]??={})[e]=t,rt()},qt=()=>{let i=pe.finishTypes??dt.finishTypes??[{id:"frame",name:"Frame",target:"frame"}];return i.some(e=>e.id==="fabric")?i:[...i,{id:"fabric",name:"Fabric",target:"fabric",materialType:"Fabric"}]},hf=i=>{let e=[...qt()];e.some(t=>t.id===i.id)||e.push(i),pe.finishTypes=e,rt()},uf=i=>{i!=="fabric"&&(pe.finishTypes=qt().filter(e=>e.id!==i),rt())},Fo=()=>({fabrics:pe.studioFabrics??dt.studioFabrics??null,finishes:pe.studioFinishes??dt.studioFinishes??{}}),df=i=>{pe.studioFabrics=i,rt()},ff=(i,e)=>{(pe.studioFinishes??={})[i]=e,rt()},pf=i=>{pe.materialOrder=[...i],rt()},mf=i=>{(pe.addedFabrics??=[]).push(i),rt()},gf=(i,e,t)=>{((pe.fabricEdits??={})[i]??={})[e]=t,rt()},Al=(i,e)=>{(pe.materialFinishTypes??={})[i]=[...e],rt()},bf=i=>{let e=pe.addedFabrics||[];e.some(t=>t.id===i)?pe.addedFabrics=e.filter(t=>t.id!==i):(pe.deletedFabrics??=[]).push(i),rt()},yf=()=>{delete pe.addedFabrics,delete pe.deletedFabrics,delete pe.fabricEdits,delete pe.materialFinishTypes,delete pe.finishTypes,delete pe.pieceFinishes,delete pe.pieceFinishAvailability,delete pe.pieceDefaults,delete pe.pieceOptions,delete pe.studioFabrics,delete pe.studioFinishes,delete pe.materialOrder,rt()},xf=i=>{(pe.added||[]).some(e=>e.id===i)?pe.added=pe.added.filter(e=>e.id!==i):(pe.deleted??=[]).push(i),rt()},vf=async()=>{await w0();try{localStorage.removeItem(Ml)}catch{}}});var Is,Sn,Tl,_f,Sf,Mf,wf,Ef,Af=He(()=>{Is=["Sofas","Dining Sets","Bedroom","Tables","Chairs","Plasma Stands"],Sn=(i,e,t,n,s,r,a,o,c)=>({id:i,name:e,cat:t,sub:n,tag:s,price:r,dims:a,mat:o,desc:c,kind:i}),Tl=[Sn("sofa","Sandton Sofa","Sofas","Sofas","Three-seater \xB7 Made to order",18900,[220,95,85],"Hardwood frame, high-density foam","Deep seats, soft shoulders and a frame built to last. Choose your fabric and size and we build it to fit your space."),Sn("chaise","Bryanston Chaise Sofa","Sofas","Chaise Lounge","Two-seater with chaise",24500,[270,175,85],"Hardwood frame, high-density foam","A generous chaise end for long afternoons. Made to order in your choice of fabric."),Sn("armchair","Fourways Armchair","Chairs","Arm Chairs","Accent armchair",8900,[85,88,90],"Hardwood frame, turned oak feet","A generous accent chair with a supportive back and wide arms. Comfortable enough to live in."),Sn("bar","Parktown Bar Chair","Chairs","Bar Chairs","Upholstered bar chair",2900,[45,45,105],"Steel frame, upholstered seat","A supportive bar chair with a footrest ring and padded back, suited to kitchen islands and home bars."),Sn("dchair","Melville Dining Chair","Chairs","Dining Chairs","Upholstered dining chair",2400,[48,52,92],"Hardwood legs, upholstered seat","A comfortable, hard-wearing dining chair that pairs with any table in the range."),Sn("dtable","Rivonia Dining Table","Tables","Dining Room Tables","Six-seater dining table",14500,[200,100,76],"Solid hardwood","A solid table for long dinners, sized for six and finished to suit your room."),Sn("coffee","Rosebank Coffee Table","Tables","Coffee Tables","Round coffee table",6400,[110,110,42],"Solid oak top, lower shelf","A solid round table with a lower shelf for books and bowls."),Sn("console","Illovo Console","Tables","Consoles","Slim hallway console",7800,[160,40,82],"Hardwood with lower shelf","A slim console for entrances and living areas, with a shelf for baskets and books."),Sn("dset","Morningside Dining Set","Dining Sets","Dining Sets","Table and four chairs",24900,[160,90,76],"Hardwood table, upholstered chairs","A complete dining set: a solid table with four upholstered chairs, ready for the table."),Sn("ottoman","Melrose Ottoman","Bedroom","Ottomans","Upholstered ottoman",3900,[60,60,45],"Hardwood frame, upholstered","Footstool, bench or bed-end. A quietly versatile piece in any fabric."),Sn("headboard","Houghton Headboard","Bedroom","Headboards","Upholstered headboard",6200,[200,12,120],"Hardwood frame, upholstered panel","A tall upholstered headboard that anchors the bed. Sized to your mattress."),Sn("bedside","Craighall Night Stand","Bedroom","Night Stands","Single-drawer night stand",3200,[55,40,50],"Solid hardwood","A compact night stand with a deep drawer and brass handle."),Sn("dresser","Hyde Park Dresser","Bedroom","Dressers","Three-drawer dresser",12900,[160,50,85],"Solid hardwood","Generous storage with soft-closing drawers and brass hardware."),Sn("tv","Sunninghill Plasma Stand","Plasma Stands","Plasma Stands","Low media unit",7900,[180,42,60],"Solid hardwood","A low media unit with open shelves, sized for modern screens.")],_f=["sofa","armchair","coffee","ottoman"],Sf=[["Oyster","#d4cabb"],["Sage","#8a967c"],["Charcoal","#3a3a3c"],["Terracotta","#b0654a"],["Navy","#26344d"],["Mustard","#b8923a"],["Blush","#d7b5ab"],["Forest","#33473a"]],Mf=[["Walnut","#5b3f26"],["Natural oak","#a8825a"],["Ebony","#1f1a17"],["Ash","#c2b59b"]],wf=[{id:"frame",name:"Frame",target:"frame"},{id:"fabric",name:"Fabric",target:"fabric",materialType:"Fabric"}],Ef={Oyster:"A soft, warm neutral with a hint of grey. Easy to live with, and pairs well with natural wood and brass.",Sage:"A muted green with a calm, earthy feel. Brings colour without overwhelming a room.",Charcoal:"A deep, versatile grey that anchors lighter interiors.",Terracotta:"A warm, clay-inspired red-orange that adds instant character.",Navy:"A rich, dark blue with a classic, tailored look.",Mustard:"A warm golden yellow for confident accent pieces.",Blush:"A gentle, dusty pink that softens a space.",Forest:"A deep green with a refined, traditional feel."}});function Yn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function qh(i,e){return(i%e+e)%e}function wy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ey(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function Ay(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function Ty(i,e=1){return e-Math.abs(qh(i,e*2)-e)}function Ry(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Py(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ly(i,e){return i+Math.random()*(e-i)}function Iy(i){return i*(.5-Math.random())}function Dy(i){i!==void 0&&(hp=i);let e=hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ny(i){return i*Ia}function Uy(i){return i*kr}function fh(i){return(i&i-1)===0&&i!==0}function Oy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fy(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),b=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*b,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*b,o*l);break;case"ZYZ":i.set(c*b,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ky(){let i=Fa("canvas");return i.style.display="block",i}function Na(i){i in up||(up[i]=!0,console.warn(i))}function Ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ul(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function kl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ns.fromArray(i,r);let o=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Jy(i,e,t,n,s,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ci,o),c===null)return null;tc.copy(o),tc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(tc);return l<t.near||l>t.far?null:{distance:l,point:tc.clone(),object:i}}function nc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,_r),i.getVertexPosition(c,Sr),i.getVertexPosition(l,Mr);let h=Jy(i,e,t,n,_r,Sr,Mr,ec);if(h){s&&(Zo.fromBufferAttribute(s,o),Jo.fromBufferAttribute(s,c),Qo.fromBufferAttribute(s,l),h.uv=Rr.getInterpolation(ec,_r,Sr,Mr,Zo,Jo,Qo,new Re)),r&&(Zo.fromBufferAttribute(r,o),Jo.fromBufferAttribute(r,c),Qo.fromBufferAttribute(r,l),h.uv1=Rr.getInterpolation(ec,_r,Sr,Mr,Zo,Jo,Qo,new Re),h.uv2=h.uv1),a&&(wp.fromBufferAttribute(a,o),Ep.fromBufferAttribute(a,c),Ap.fromBufferAttribute(a,l),h.normal=Rr.getInterpolation(ec,_r,Sr,Mr,wp,Ep,Ap,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};Rr.getNormal(_r,Sr,Mr,u.normal),h.face=u}return h}function zr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=zr(i[t]);for(let s in n)e[s]=n[s]}return e}function Qy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pm(i){return i.getRenderTarget()===null?i.outputColorSpace:ht.workingColorSpace}function Lm(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rx(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,b=i.createBuffer();i.bindBuffer(h,b),i.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:b,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,b=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&b.length===0&&i.bufferSubData(u,0,d),b.length!==0){for(let g=0,m=b.length;g<m;g++){let f=b[g];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}function B_(i,e,t,n,s,r,a){let o=new we(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function b(m,f){let x=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,c):y&&y.isColor&&(g(y,1),x=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Hc)?(h===void 0&&(h=new Ge(new Oi(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:zr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ht.getTransfer(y.colorSpace)!==yt,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ge(new $s(2,2),new Zn({name:"BackgroundMaterial",uniforms:zr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){m.getRGB(sc,Pm(i)),n.buffers.color.setClear(sc.r,sc.g,sc.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:b}}function z_(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(L,N,H,$,j){let q=!1;if(a){let Q=g($,H,N);l!==Q&&(l=Q,p(l.object)),q=f(L,$,H,j),q&&x(L,$,H,j)}else{let Q=N.wireframe===!0;(l.geometry!==$.id||l.program!==H.id||l.wireframe!==Q)&&(l.geometry=$.id,l.program=H.id,l.wireframe=Q,q=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(L,N,H,$),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function b(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,N,H){let $=H.wireframe===!0,j=o[L.id];j===void 0&&(j={},o[L.id]=j);let q=j[N.id];q===void 0&&(q={},j[N.id]=q);let Q=q[$];return Q===void 0&&(Q=m(d()),q[$]=Q),Q}function m(L){let N=[],H=[],$=[];for(let j=0;j<s;j++)N[j]=0,H[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:$,object:L,attributes:{},index:null}}function f(L,N,H,$){let j=l.attributes,q=N.attributes,Q=0,J=H.getAttributes();for(let de in J)if(J[de].location>=0){let X=j[de],se=q[de];if(se===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;Q++}return l.attributesNum!==Q||l.index!==$}function x(L,N,H,$){let j={},q=N.attributes,Q=0,J=H.getAttributes();for(let de in J)if(J[de].location>=0){let X=q[de];X===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let se={};se.attribute=X,X&&X.data&&(se.data=X.data),j[de]=se,Q++}l.attributes=j,l.attributesNum=Q,l.index=$}function y(){let L=l.newAttributes;for(let N=0,H=L.length;N<H;N++)L[N]=0}function v(L){R(L,0)}function R(L,N){let H=l.newAttributes,$=l.enabledAttributes,j=l.attributeDivisors;H[L]=1,$[L]===0&&(i.enableVertexAttribArray(L),$[L]=1),j[L]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),j[L]=N)}function E(){let L=l.newAttributes,N=l.enabledAttributes;for(let H=0,$=N.length;H<$;H++)N[H]!==L[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function A(L,N,H,$,j,q,Q){Q===!0?i.vertexAttribIPointer(L,N,H,j,q):i.vertexAttribPointer(L,N,H,$,j,q)}function D(L,N,H,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let j=$.attributes,q=H.getAttributes(),Q=N.defaultAttributeValues;for(let J in q){let de=q[J];if(de.location>=0){let V=j[J];if(V===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let X=V.normalized,se=V.itemSize,me=t.get(V);if(me===void 0)continue;let xe=me.buffer,Pe=me.type,Ie=me.bytesPerElement,Ee=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||V.gpuType===bm);if(V.isInterleavedBufferAttribute){let ke=V.data,k=ke.stride,Ct=V.offset;if(ke.isInstancedInterleavedBuffer){for(let _e=0;_e<de.locationSize;_e++)R(de.location+_e,ke.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let _e=0;_e<de.locationSize;_e++)v(de.location+_e);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let _e=0;_e<de.locationSize;_e++)A(de.location+_e,se/de.locationSize,Pe,X,k*Ie,(Ct+se/de.locationSize*_e)*Ie,Ee)}else{if(V.isInstancedBufferAttribute){for(let ke=0;ke<de.locationSize;ke++)R(de.location+ke,V.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ke=0;ke<de.locationSize;ke++)v(de.location+ke);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ke=0;ke<de.locationSize;ke++)A(de.location+ke,se/de.locationSize,Pe,X,se*Ie,se/de.locationSize*ke*Ie,Ee)}}else if(Q!==void 0){let X=Q[J];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(de.location,X);break;case 3:i.vertexAttrib3fv(de.location,X);break;case 4:i.vertexAttrib4fv(de.location,X);break;default:i.vertexAttrib1fv(de.location,X)}}}}E()}function S(){B();for(let L in o){let N=o[L];for(let H in N){let $=N[H];for(let j in $)b($[j].object),delete $[j];delete N[H]}delete o[L]}}function M(L){if(o[L.id]===void 0)return;let N=o[L.id];for(let H in N){let $=N[H];for(let j in $)b($[j].object),delete $[j];delete N[H]}delete o[L.id]}function O(L){for(let N in o){let H=o[N];if(H[L.id]===void 0)continue;let $=H[L.id];for(let j in $)b($[j].object),delete $[j];delete H[L.id]}}function B(){Z(),h=!0,l!==c&&(l=c,p(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:B,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:v,disableUnusedAttributes:E}}function H_(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,b;if(s)p=i,b="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[b](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let b=0;b<d;b++)this.render(h[b],u[b]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let b=0;for(let g=0;g<d;g++)b+=u[g];t.update(b,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function G_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,v=a||e.has("OES_texture_float"),R=y&&v,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:b,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:R,maxSamples:E}}function V_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Ln,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let b=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||b===null||b.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,y=x*4,v=f.clippingState||null;c.value=v,v=h(b,d,y,p);for(let R=0;R!==y;++R)v[R]=t[R];f.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,b){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,b!==!0||m===null){let f=p+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==g;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function W_(i){let e=new WeakMap;function t(a,o){return o===lh?a.mapping=Nr:o===hh&&(a.mapping=Ur),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===lh||o===hh)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new bh(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function $_(i){let e=[],t=[],n=[],s=i,r=i-Cr+1+Tp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Cr?c=Tp[a-i+Cr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,b=6,g=3,m=2,f=1,x=new Float32Array(g*b*p),y=new Float32Array(m*b*p),v=new Float32Array(f*b*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,D=E>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];x.set(S,g*b*E),y.set(d,m*b*E);let M=[E,E,E,E,E,E];v.set(M,f*b*E)}let R=new Ot;R.setAttribute("position",new ot(x,g)),R.setAttribute("uv",new ot(y,m)),R.setAttribute("faceIndex",new ot(v,f)),e.push(R),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pp(i,e,t){let n=new Ni(i,e,t);return n.texture.mapping=Hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function q_(i,e,t){let n=new Float32Array(Bs),s=new P(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Lp(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Ip(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function jh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===lh||c===hh,h=c===Nr||c===Ur;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Fi(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Fi(i));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function X_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let b in d.attributes)e.remove(d.attributes[b]);for(let b in d.morphAttributes){let g=d.morphAttributes[b];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let b in d)e.update(d[b],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let b in p){let g=p[b];for(let m=0,f=g.length;m<f;m++)e.update(g[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,b=u.attributes.position,g=0;if(p!==null){let x=p.array;g=p.version;for(let y=0,v=x.length;y<v;y+=3){let R=x[y+0],E=x[y+1],A=x[y+2];d.push(R,E,E,A,A,R)}}else if(b!==void 0){let x=b.array;g=b.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let R=y+0,E=y+1,A=y+2;d.push(R,E,E,A,A,R)}}else return;let m=new(Rm(d)?Mc:Sc)(d,1);m.version=g;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function K_(i,e,t,n){let s=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,b){i.drawElements(r,b,o,p*c),t.update(b,r,1)}function u(p,b,g){if(g===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,b,o,p*c,g),t.update(b,r,g)}function d(p,b,g){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/c,b[f]);else{m.multiDrawElementsWEBGL(r,b,0,o,p,0,g);let f=0;for(let x=0;x<g;x++)f+=b[x];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Z_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function J_(i,e){return i[0]-e[0]}function Q_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function eS(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new mt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,b=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==b){let L=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;x===!0&&(D=1),y===!0&&(D=2),v===!0&&(D=3);let S=h.attributes.position.count*D,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let O=new Float32Array(S*M*4*b),B=new vc(O,S,M,b);B.type=Li,B.needsUpdate=!0;let Z=D*4;for(let N=0;N<b;N++){let H=R[N],$=E[N],j=A[N],q=S*M*4*N;for(let Q=0;Q<H.count;Q++){let J=Q*Z;x===!0&&(a.fromBufferAttribute(H,Q),O[q+J+0]=a.x,O[q+J+1]=a.y,O[q+J+2]=a.z,O[q+J+3]=0),y===!0&&(a.fromBufferAttribute($,Q),O[q+J+4]=a.x,O[q+J+5]=a.y,O[q+J+6]=a.z,O[q+J+7]=0),v===!0&&(a.fromBufferAttribute(j,Q),O[q+J+8]=a.x,O[q+J+9]=a.y,O[q+J+10]=a.z,O[q+J+11]=j.itemSize===4?a.w:1)}}g={count:b,texture:B,size:new Re(S,M)},r.set(h,g),h.addEventListener("dispose",L)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=d===void 0?0:d.length,b=n[h.id];if(b===void 0||b.length!==p){b=[];for(let y=0;y<p;y++)b[y]=[y,0];n[h.id]=b}for(let y=0;y<p;y++){let v=b[y];v[0]=y,v[1]=d[y]}b.sort(Q_);for(let y=0;y<8;y++)y<p&&b[y][1]?(o[y][0]=b[y][0],o[y][1]=b[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(J_);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let v=o[y],R=v[0],E=v[1];R!==Number.MAX_SAFE_INTEGER&&E?(g&&h.getAttribute("morphTarget"+y)!==g[R]&&h.setAttribute("morphTarget"+y,g[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),s[y]=E,f+=E):(g&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function tS(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dp[s];if(r===void 0&&(r=new Float32Array(s),Dp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wc(i,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function sS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function rS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function aS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Fp.set(n),i.uniformMatrix2fv(this.addr,!1,Fp),kt(t,n)}}function oS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Op.set(n),i.uniformMatrix3fv(this.addr,!1,Op),kt(t,n)}}function cS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Up.set(n),i.uniformMatrix4fv(this.addr,!1,Up),kt(t,n)}}function lS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function dS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function fS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function mS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function gS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function bS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Dm:Im;t.setTexture2D(e||r,s)}function yS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Um,s)}function xS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Om,s)}function vS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nm,s)}function _S(i){switch(i){case 5126:return nS;case 35664:return iS;case 35665:return sS;case 35666:return rS;case 35674:return aS;case 35675:return oS;case 35676:return cS;case 5124:case 35670:return lS;case 35667:case 35671:return hS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return vS}}function SS(i,e){i.uniform1fv(this.addr,e)}function MS(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function wS(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function ES(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function AS(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function TS(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function RS(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function CS(i,e){i.uniform1iv(this.addr,e)}function PS(i,e){i.uniform2iv(this.addr,e)}function LS(i,e){i.uniform3iv(this.addr,e)}function IS(i,e){i.uniform4iv(this.addr,e)}function DS(i,e){i.uniform1uiv(this.addr,e)}function NS(i,e){i.uniform2uiv(this.addr,e)}function US(i,e){i.uniform3uiv(this.addr,e)}function OS(i,e){i.uniform4uiv(this.addr,e)}function FS(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Im,r[a])}function kS(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Um,r[a])}function BS(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Om,r[a])}function zS(i,e,t){let n=this.cache,s=e.length,r=Wc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nm,r[a])}function HS(i){switch(i){case 5126:return SS;case 35664:return MS;case 35665:return wS;case 35666:return ES;case 35674:return AS;case 35675:return TS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return NS;case 36295:return US;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}function kp(i,e){i.seq.push(e),i.map[e.id]=e}function GS(i,e,t){let n=i.name,s=n.length;for(th.lastIndex=0;;){let r=th.exec(n),a=th.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){kp(t,l===void 0?new yh(o,i,e):new xh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new vh(o),kp(t,u)),t=u}}}function Bp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function $S(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function qS(i){let e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(i),n;switch(e===t?n="":e===gc&&t===mc?n="LinearDisplayP3ToLinearSRGB":e===mc&&t===gc&&(n="LinearSRGBToLinearDisplayP3"),i){case It:case Vc:return[n,"LinearTransferOETF"];case at:case $h:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function zp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$S(i.getShaderSource(e),a)}else return s}function jS(i,e){let t=qS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function XS(i,e){let t;switch(e){case Q0:t="Linear";break;case ey:t="Reinhard";break;case ty:t="OptimizedCineon";break;case Ya:t="ACESFilmic";break;case iy:t="AgX";break;case ny:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function YS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pr).join(`
`)}function KS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pr).join(`
`)}function ZS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Pr(i){return i!==""}function Hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function _h(i){return i.replace(QS,tM)}function tM(i,e){let t=$e[e];if(t===void 0){let n=eM.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _h(t)}function Vp(i){return i.replace(nM,iM)}function iM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wp(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function rM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Nr:case Ur:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function oM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mm:e="ENVMAP_BLENDING_MULTIPLY";break;case Z0:e="ENVMAP_BLENDING_MIX";break;case J0:e="ENVMAP_BLENDING_ADD";break}return e}function cM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=sM(t),l=rM(t),h=aM(t),u=oM(t),d=cM(t),p=t.isWebGL2?"":YS(t),b=KS(t),g=ZS(r),m=s.createProgram(),f,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pr).join(`
`),x.length>0&&(x+=`
`)):(f=[Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),x=[p,Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?$e.tonemapping_pars_fragment:"",t.toneMapping!==is?XS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,jS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=_h(a),a=Hp(a,t),a=Gp(a,t),o=_h(o),o=Hp(o,t),o=Gp(o,t),a=Vp(a),o=Vp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=y+f+a,R=y+x+o,E=Bp(s,s.VERTEX_SHADER,v),A=Bp(s,s.FRAGMENT_SHADER,R);s.attachShader(m,E),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(B){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(E).trim(),N=s.getShaderInfoLog(A).trim(),H=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,A);else{let j=zp(s,E,"vertex"),q=zp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+j+`
`+q)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||N==="")&&($=!1);$&&(B.diagnostics={runnable:H,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:N,prefix:x}})}s.deleteShader(E),s.deleteShader(A),S=new Dr(s,m),M=JS(s,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,VS)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}function uM(i,e,t,n,s,r,a){let o=new ka,c=new Sh,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,M,O,B,Z){let L=B.fog,N=Z.geometry,H=S.isMeshStandardMaterial?B.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),j=$&&$.mapping===Hc?$.image.height:null,q=b[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=Q!==void 0?Q.length:0,de=0;N.morphAttributes.position!==void 0&&(de=1),N.morphAttributes.normal!==void 0&&(de=2),N.morphAttributes.color!==void 0&&(de=3);let V,X,se,me;if(q){let fn=ai[q];V=fn.vertexShader,X=fn.fragmentShader}else V=S.vertexShader,X=S.fragmentShader,c.update(S),se=c.getVertexShaderID(S),me=c.getFragmentShaderID(S);let xe=i.getRenderTarget(),Pe=Z.isInstancedMesh===!0,Ie=Z.isBatchedMesh===!0,Ee=!!S.map,ke=!!S.matcap,k=!!$,Ct=!!S.aoMap,_e=!!S.lightMap,K=!!S.bumpMap,ae=!!S.normalMap,Ue=!!S.displacementMap,Se=!!S.emissiveMap,T=!!S.metalnessMap,_=!!S.roughnessMap,F=S.anisotropy>0,ne=S.clearcoat>0,ee=S.iridescence>0,ie=S.sheen>0,ye=S.transmission>0,fe=F&&!!S.anisotropyMap,ge=ne&&!!S.clearcoatMap,Ce=ne&&!!S.clearcoatNormalMap,Fe=ne&&!!S.clearcoatRoughnessMap,te=ee&&!!S.iridescenceMap,Xe=ee&&!!S.iridescenceThicknessMap,C=ie&&!!S.sheenColorMap,Y=ie&&!!S.sheenRoughnessMap,oe=!!S.specularMap,re=!!S.specularColorMap,ve=!!S.specularIntensityMap,Ye=ye&&!!S.transmissionMap,nt=ye&&!!S.thicknessMap,qe=!!S.gradientMap,he=!!S.alphaMap,I=S.alphaTest>0,ce=!!S.alphaHash,le=!!S.extensions,Le=!!N.attributes.uv1,Ae=!!N.attributes.uv2,st=!!N.attributes.uv3,ct=is;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ct=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:X,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ie,instancing:Pe,instancingColor:Pe&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:It,map:Ee,matcap:ke,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:j,aoMap:Ct,lightMap:_e,bumpMap:K,normalMap:ae,displacementMap:d&&Ue,emissiveMap:Se,normalMapObjectSpace:ae&&S.normalMapType===gy,normalMapTangentSpace:ae&&S.normalMapType===Am,metalnessMap:T,roughnessMap:_,anisotropy:F,anisotropyMap:fe,clearcoat:ne,clearcoatMap:ge,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:te,iridescenceThicknessMap:Xe,sheen:ie,sheenColorMap:C,sheenRoughnessMap:Y,specularMap:oe,specularColorMap:re,specularIntensityMap:ve,transmission:ye,transmissionMap:Ye,thicknessMap:nt,gradientMap:qe,opaque:S.transparent===!1&&S.blending===Lr,alphaMap:he,alphaTest:I,alphaHash:ce,combine:S.combine,mapUv:Ee&&g(S.map.channel),aoMapUv:Ct&&g(S.aoMap.channel),lightMapUv:_e&&g(S.lightMap.channel),bumpMapUv:K&&g(S.bumpMap.channel),normalMapUv:ae&&g(S.normalMap.channel),displacementMapUv:Ue&&g(S.displacementMap.channel),emissiveMapUv:Se&&g(S.emissiveMap.channel),metalnessMapUv:T&&g(S.metalnessMap.channel),roughnessMapUv:_&&g(S.roughnessMap.channel),anisotropyMapUv:fe&&g(S.anisotropyMap.channel),clearcoatMapUv:ge&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:C&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(S.sheenRoughnessMap.channel),specularMapUv:oe&&g(S.specularMap.channel),specularColorMapUv:re&&g(S.specularColorMap.channel),specularIntensityMapUv:ve&&g(S.specularIntensityMap.channel),transmissionMapUv:Ye&&g(S.transmissionMap.channel),thicknessMapUv:nt&&g(S.thicknessMap.channel),alphaMapUv:he&&g(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ae||F),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ae,vertexUv3s:st,pointsUvs:Z.isPoints===!0&&!!N.attributes.uv&&(Ee||he),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:de,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)M.push(O),M.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function v(S){let M=b[S.type],O;if(M){let B=ai[M];O=ex.clone(B.uniforms)}else O=S.uniforms;return O}function R(S,M){let O;for(let B=0,Z=l.length;B<Z;B++){let L=l[B];if(L.cacheKey===M){O=L,++O.usedTimes;break}}return O===void 0&&(O=new lM(i,M,S,r),l.push(O)),O}function E(S){if(--S.usedTimes===0){let M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),S.destroy()}}function A(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:D}}function dM(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function fM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,b,g,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:b,renderOrder:u.renderOrder,z:g,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=b,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function o(u,d,p,b,g,m){let f=a(u,d,p,b,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,b,g,m){let f=a(u,d,p,b,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||fM),n.length>1&&n.sort(d||$p),s.length>1&&s.sort(d||$p)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function pM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qp,i.set(n,[a])):s>=r.length?(a=new qp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function mM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new we};break;case"SpotLight":t={position:new P,direction:new P,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function gM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function yM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xM(i,e){let t=new mM,n=gM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new Ve,o=new Ve;function c(h,u){let d=0,p=0,b=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let g=0,m=0,f=0,x=0,y=0,v=0,R=0,E=0,A=0,D=0,S=0;h.sort(yM);let M=u===!0?Math.PI:1;for(let B=0,Z=h.length;B<Z;B++){let L=h[B],N=L.color,H=L.intensity,$=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*H*M,p+=N.g*H*M,b+=N.b*H*M;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],H);S++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){let Q=L.shadow,J=n.get(L);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,s.directionalShadow[g]=J,s.directionalShadowMap[g]=j,s.directionalShadowMatrix[g]=L.shadow.matrix,v++}s.directional[g]=q,g++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(H*M),q.distance=$,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[f]=q;let Q=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,Q.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[f]=Q.matrix,L.castShadow){let J=n.get(L);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,s.spotShadow[f]=J,s.spotShadowMap[f]=j,E++}f++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(N).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=q,x++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*M),q.distance=L.distance,q.decay=L.decay,L.castShadow){let Q=L.shadow,J=n.get(L);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,s.pointShadow[m]=J,s.pointShadowMap[m]=j,s.pointShadowMatrix[m]=L.shadow.matrix,R++}s.point[m]=q,m++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(H*M),q.groundColor.copy(L.groundColor).multiplyScalar(H*M),s.hemi[y]=q,y++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=b;let O=s.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==f||O.rectAreaLength!==x||O.hemiLength!==y||O.numDirectionalShadows!==v||O.numPointShadows!==R||O.numSpotShadows!==E||O.numSpotMaps!==A||O.numLightProbes!==S)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=S,O.directionalLength=g,O.pointLength=m,O.spotLength=f,O.rectAreaLength=x,O.hemiLength=y,O.numDirectionalShadows=v,O.numPointShadows=R,O.numSpotShadows=E,O.numSpotMaps=A,O.numLightProbes=S,s.version=bM++)}function l(h,u){let d=0,p=0,b=0,g=0,m=0,f=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let v=h[x];if(v.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(v.isSpotLight){let R=s.spot[b];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),b++}else if(v.isRectAreaLight){let R=s.rectArea[g];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(v.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function jp(i,e){let t=new xM(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function vM(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new jp(i,e),t.set(r,[c])):a>=o.length?(c=new jp(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function MM(i,e,t){let n=new Ba,s=new Re,r=new Re,a=new mt,o=new wh({depthPacking:my}),c=new Eh,l={},h=t.maxTextureSize,u={[ci]:an,[an]:ci,[Yt]:Yt},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:_M,fragmentShader:SM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let b=new Ot;b.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ge(b,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pm;let f=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ns),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Z=f!==Pi&&this.type===Pi,L=f===Pi&&this.type!==Pi;for(let N=0,H=E.length;N<H;N++){let $=E[N],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let q=j.getFrameExtents();if(s.multiply(q),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,j.mapSize.y=r.y)),j.map===null||Z===!0||L===!0){let J=this.type!==Pi?{minFilter:Lt,magFilter:Lt}:{};j.map!==null&&j.map.dispose(),j.map=new Ni(s.x,s.y,J),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let Q=j.getViewportCount();for(let J=0;J<Q;J++){let de=j.getViewport(J);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),B.viewport(a),j.updateMatrices($,J),n=j.getFrustum(),v(A,D,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===Pi&&x(j,D),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,O)};function x(E,A){let D=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,D,p,g,null)}function y(E,A,D,S){let M=null,O=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)M=O;else if(M=D.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=M.uuid,Z=A.uuid,L=l[B];L===void 0&&(L={},l[B]=L);let N=L[Z];N===void 0&&(N=M.clone(),L[Z]=N,A.addEventListener("dispose",R)),M=N}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Pi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=D}return M}function v(E,A,D,S,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Pi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let Z=e.update(E),L=E.material;if(Array.isArray(L)){let N=Z.groups;for(let H=0,$=N.length;H<$;H++){let j=N[H],q=L[j.materialIndex];if(q&&q.visible){let Q=y(E,q,S,M);E.onBeforeShadow(i,E,A,D,Z,Q,j),i.renderBufferDirect(D,null,Z,Q,E,j),E.onAfterShadow(i,E,A,D,Z,Q,j)}}}else if(L.visible){let N=y(E,L,S,M);E.onBeforeShadow(i,E,A,D,Z,N,null),i.renderBufferDirect(D,null,Z,N,E,null),E.onAfterShadow(i,E,A,D,Z,N,null)}}let B=E.children;for(let Z=0,L=B.length;Z<L;Z++)v(B[Z],A,D,S,M)}function R(E){E.target.removeEventListener("dispose",R);for(let D in l){let S=l[D],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function wM(i,e,t){let n=t.isWebGL2;function s(){let I=!1,ce=new mt,le=null,Le=new mt(0,0,0,0);return{setMask:function(Ae){le!==Ae&&!I&&(i.colorMask(Ae,Ae,Ae,Ae),le=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,st,ct,zt,fn){fn===!0&&(Ae*=zt,st*=zt,ct*=zt),ce.set(Ae,st,ct,zt),Le.equals(ce)===!1&&(i.clearColor(Ae,st,ct,zt),Le.copy(ce))},reset:function(){I=!1,le=null,Le.set(-1,0,0,0)}}}function r(){let I=!1,ce=null,le=null,Le=null;return{setTest:function(Ae){Ae?Ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(Ae){ce!==Ae&&!I&&(i.depthMask(Ae),ce=Ae)},setFunc:function(Ae){if(le!==Ae){switch(Ae){case W0:i.depthFunc(i.NEVER);break;case $0:i.depthFunc(i.ALWAYS);break;case q0:i.depthFunc(i.LESS);break;case fc:i.depthFunc(i.LEQUAL);break;case j0:i.depthFunc(i.EQUAL);break;case X0:i.depthFunc(i.GEQUAL);break;case Y0:i.depthFunc(i.GREATER);break;case K0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ae}},setLocked:function(Ae){I=Ae},setClear:function(Ae){Le!==Ae&&(i.clearDepth(Ae),Le=Ae)},reset:function(){I=!1,ce=null,le=null,Le=null}}}function a(){let I=!1,ce=null,le=null,Le=null,Ae=null,st=null,ct=null,zt=null,fn=null;return{setTest:function(bt){I||(bt?Ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(bt){ce!==bt&&!I&&(i.stencilMask(bt),ce=bt)},setFunc:function(bt,pn,si){(le!==bt||Le!==pn||Ae!==si)&&(i.stencilFunc(bt,pn,si),le=bt,Le=pn,Ae=si)},setOp:function(bt,pn,si){(st!==bt||ct!==pn||zt!==si)&&(i.stencilOp(bt,pn,si),st=bt,ct=pn,zt=si)},setLocked:function(bt){I=bt},setClear:function(bt){fn!==bt&&(i.clearStencil(bt),fn=bt)},reset:function(){I=!1,ce=null,le=null,Le=null,Ae=null,st=null,ct=null,zt=null,fn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},p={},b=new WeakMap,g=[],m=null,f=!1,x=null,y=null,v=null,R=null,E=null,A=null,D=null,S=new we(0,0,0),M=0,O=!1,B=null,Z=null,L=null,N=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,q=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=q>=2);let J=null,de={},V=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),se=new mt().fromArray(V),me=new mt().fromArray(X);function xe(I,ce,le,Le){let Ae=new Uint8Array(4),st=i.createTexture();i.bindTexture(I,st),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<le;ct++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ce+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return st}let Pe={};Pe[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ie(i.DEPTH_TEST),c.setFunc(fc),Se(!1),T(Tf),Ie(i.CULL_FACE),ae(ns);function Ie(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Ee(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function ke(I,ce){return p[I]!==ce?(i.bindFramebuffer(I,ce),p[I]=ce,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ce),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(I,ce){let le=g,Le=!1;if(I)if(le=b.get(ce),le===void 0&&(le=[],b.set(ce,le)),I.isWebGLMultipleRenderTargets){let Ae=I.texture;if(le.length!==Ae.length||le[0]!==i.COLOR_ATTACHMENT0){for(let st=0,ct=Ae.length;st<ct;st++)le[st]=i.COLOR_ATTACHMENT0+st;le.length=Ae.length,Le=!0}}else le[0]!==i.COLOR_ATTACHMENT0&&(le[0]=i.COLOR_ATTACHMENT0,Le=!0);else le[0]!==i.BACK&&(le[0]=i.BACK,Le=!0);Le&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Ct(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let _e={[ks]:i.FUNC_ADD,[C0]:i.FUNC_SUBTRACT,[P0]:i.FUNC_REVERSE_SUBTRACT};if(n)_e[Lf]=i.MIN,_e[If]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(_e[Lf]=I.MIN_EXT,_e[If]=I.MAX_EXT)}let K={[L0]:i.ZERO,[I0]:i.ONE,[D0]:i.SRC_COLOR,[oh]:i.SRC_ALPHA,[B0]:i.SRC_ALPHA_SATURATE,[F0]:i.DST_COLOR,[U0]:i.DST_ALPHA,[N0]:i.ONE_MINUS_SRC_COLOR,[ch]:i.ONE_MINUS_SRC_ALPHA,[k0]:i.ONE_MINUS_DST_COLOR,[O0]:i.ONE_MINUS_DST_ALPHA,[z0]:i.CONSTANT_COLOR,[H0]:i.ONE_MINUS_CONSTANT_COLOR,[G0]:i.CONSTANT_ALPHA,[V0]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(I,ce,le,Le,Ae,st,ct,zt,fn,bt){if(I===ns){f===!0&&(Ee(i.BLEND),f=!1);return}if(f===!1&&(Ie(i.BLEND),f=!0),I!==R0){if(I!==x||bt!==O){if((y!==ks||E!==ks)&&(i.blendEquation(i.FUNC_ADD),y=ks,E=ks),bt)switch(I){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rf:i.blendFunc(i.ONE,i.ONE);break;case Cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,R=null,A=null,D=null,S.set(0,0,0),M=0,x=I,O=bt}return}Ae=Ae||ce,st=st||le,ct=ct||Le,(ce!==y||Ae!==E)&&(i.blendEquationSeparate(_e[ce],_e[Ae]),y=ce,E=Ae),(le!==v||Le!==R||st!==A||ct!==D)&&(i.blendFuncSeparate(K[le],K[Le],K[st],K[ct]),v=le,R=Le,A=st,D=ct),(zt.equals(S)===!1||fn!==M)&&(i.blendColor(zt.r,zt.g,zt.b,fn),S.copy(zt),M=fn),x=I,O=!1}function Ue(I,ce){I.side===Yt?Ee(i.CULL_FACE):Ie(i.CULL_FACE);let le=I.side===an;ce&&(le=!le),Se(le),I.blending===Lr&&I.transparent===!1?ae(ns):ae(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);let Le=I.stencilWrite;l.setTest(Le),Le&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(I){B!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),B=I)}function T(I){I!==A0?(Ie(i.CULL_FACE),I!==Z&&(I===Tf?i.cullFace(i.BACK):I===T0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),Z=I}function _(I){I!==L&&(j&&i.lineWidth(I),L=I)}function F(I,ce,le){I?(Ie(i.POLYGON_OFFSET_FILL),(N!==ce||H!==le)&&(i.polygonOffset(ce,le),N=ce,H=le)):Ee(i.POLYGON_OFFSET_FILL)}function ne(I){I?Ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function ee(I){I===void 0&&(I=i.TEXTURE0+$-1),J!==I&&(i.activeTexture(I),J=I)}function ie(I,ce,le){le===void 0&&(J===null?le=i.TEXTURE0+$-1:le=J);let Le=de[le];Le===void 0&&(Le={type:void 0,texture:void 0},de[le]=Le),(Le.type!==I||Le.texture!==ce)&&(J!==le&&(i.activeTexture(le),J=le),i.bindTexture(I,ce||Pe[I]),Le.type=I,Le.texture=ce)}function ye(){let I=de[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Ye(I){me.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),me.copy(I))}function nt(I,ce){let le=u.get(ce);le===void 0&&(le=new WeakMap,u.set(ce,le));let Le=le.get(I);Le===void 0&&(Le=i.getUniformBlockIndex(ce,I.name),le.set(I,Le))}function qe(I,ce){let Le=u.get(ce).get(I);h.get(ce)!==Le&&(i.uniformBlockBinding(ce,Le,I.__bindingPointIndex),h.set(ce,Le))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,de={},p={},b=new WeakMap,g=[],m=null,f=!1,x=null,y=null,v=null,R=null,E=null,A=null,D=null,S=new we(0,0,0),M=0,O=!1,B=null,Z=null,L=null,N=null,H=null,se.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ie,disable:Ee,bindFramebuffer:ke,drawBuffers:k,useProgram:Ct,setBlending:ae,setMaterial:Ue,setFlipSided:Se,setCullFace:T,setLineWidth:_,setPolygonOffset:F,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:ye,compressedTexImage2D:fe,compressedTexImage3D:ge,texImage2D:oe,texImage3D:re,updateUBOMapping:nt,uniformBlockBinding:qe,texStorage2D:C,texStorage3D:Y,texSubImage2D:Ce,texSubImage3D:Fe,compressedTexSubImage2D:te,compressedTexSubImage3D:Xe,scissor:ve,viewport:Ye,reset:he}}function EM(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,_){return p?new OffscreenCanvas(T,_):Fa("canvas")}function g(T,_,F,ne){let ee=1;if((T.width>ne||T.height>ne)&&(ee=ne/Math.max(T.width,T.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ie=_?yc:Math.floor,ye=ie(ee*T.width),fe=ie(ee*T.height);u===void 0&&(u=b(ye,fe));let ge=F?b(ye,fe):u;return ge.width=ye,ge.height=fe,ge.getContext("2d").drawImage(T,0,0,ye,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+fe+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return fh(T.width)&&fh(T.height)}function f(T){return o?!1:T.wrapS!==bn||T.wrapT!==bn||T.minFilter!==Lt&&T.minFilter!==jt}function x(T,_){return T.generateMipmaps&&_&&T.minFilter!==Lt&&T.minFilter!==jt}function y(T){i.generateMipmap(T)}function v(T,_,F,ne,ee=!1){if(o===!1)return _;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ie=_;if(_===i.RED&&(F===i.FLOAT&&(ie=i.R32F),F===i.HALF_FLOAT&&(ie=i.R16F),F===i.UNSIGNED_BYTE&&(ie=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.R8UI),F===i.UNSIGNED_SHORT&&(ie=i.R16UI),F===i.UNSIGNED_INT&&(ie=i.R32UI),F===i.BYTE&&(ie=i.R8I),F===i.SHORT&&(ie=i.R16I),F===i.INT&&(ie=i.R32I)),_===i.RG&&(F===i.FLOAT&&(ie=i.RG32F),F===i.HALF_FLOAT&&(ie=i.RG16F),F===i.UNSIGNED_BYTE&&(ie=i.RG8)),_===i.RGBA){let ye=ee?pc:ht.getTransfer(ne);F===i.FLOAT&&(ie=i.RGBA32F),F===i.HALF_FLOAT&&(ie=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ie=ye===yt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(T,_,F){return x(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Lt&&T.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){return T===Lt||T===Or||T===zs?i.NEAREST:i.LINEAR}function A(T){let _=T.target;_.removeEventListener("dispose",A),S(_),_.isVideoTexture&&h.delete(_)}function D(T){let _=T.target;_.removeEventListener("dispose",D),O(_)}function S(T){let _=n.get(T);if(_.__webglInit===void 0)return;let F=T.source,ne=d.get(F);if(ne){let ee=ne[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(T),Object.keys(ne).length===0&&d.delete(F)}n.remove(T)}function M(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let F=T.source,ne=d.get(F);delete ne[_.__cacheKey],a.memory.textures--}function O(T){let _=T.texture,F=n.get(T),ne=n.get(_);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(F.__webglFramebuffer[ee]))for(let ie=0;ie<F.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(F.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(F.__webglFramebuffer[ee]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ee])}else{if(Array.isArray(F.__webglFramebuffer))for(let ee=0;ee<F.__webglFramebuffer.length;ee++)i.deleteFramebuffer(F.__webglFramebuffer[ee]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,ie=_.length;ee<ie;ee++){let ye=n.get(_[ee]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(_[ee])}n.remove(_),n.remove(T)}let B=0;function Z(){B=0}function L(){let T=B;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function N(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function H(T,_){let F=n.get(T);if(T.isVideoTexture&&Ue(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){let ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,T,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function $(T,_){let F=n.get(T);if(T.version>0&&F.__version!==T.version){se(F,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function j(T,_){let F=n.get(T);if(T.version>0&&F.__version!==T.version){se(F,T,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function q(T,_){let F=n.get(T);if(T.version>0&&F.__version!==T.version){me(F,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let Q={[Kn]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},J={[Lt]:i.NEAREST,[Or]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},de={[by]:i.NEVER,[My]:i.ALWAYS,[yy]:i.LESS,[Tm]:i.LEQUAL,[xy]:i.EQUAL,[Sy]:i.GEQUAL,[vy]:i.GREATER,[_y]:i.NOTEQUAL};function V(T,_,F){if(F?(i.texParameteri(T,i.TEXTURE_WRAP_S,Q[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,J[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,J[_.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==bn||_.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,E(_.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,E(_.minFilter)),_.minFilter!==Lt&&_.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Lt||_.minFilter!==zs&&_.minFilter!==li||_.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Oa&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function X(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));let ne=_.source,ee=d.get(ne);ee===void 0&&(ee={},d.set(ne,ee));let ie=N(_);if(ie!==T.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[ie].usedTimes++;let ye=ee[T.__cacheKey];ye!==void 0&&(ee[T.__cacheKey].usedTimes--,ye.usedTimes===0&&M(_)),T.__cacheKey=ie,T.__webglTexture=ee[ie].texture}return F}function se(T,_,F){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);let ee=X(T,_),ie=_.source;t.bindTexture(ne,T.__webglTexture,i.TEXTURE0+F);let ye=n.get(ie);if(ie.version!==ye.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);let fe=ht.getPrimaries(ht.workingColorSpace),ge=_.colorSpace===rn?null:ht.getPrimaries(_.colorSpace),Ce=_.colorSpace===rn||fe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Fe=f(_)&&m(_.image)===!1,te=g(_.image,Fe,!1,s.maxTextureSize);te=Se(_,te);let Xe=m(te)||o,C=r.convert(_.format,_.colorSpace),Y=r.convert(_.type),oe=v(_.internalFormat,C,Y,_.colorSpace,_.isVideoTexture);V(ne,_,Xe);let re,ve=_.mipmaps,Ye=o&&_.isVideoTexture!==!0&&oe!==Mm,nt=ye.__version===void 0||ee===!0,qe=R(_,te,Xe);if(_.isDepthTexture)oe=i.DEPTH_COMPONENT,o?_.type===Li?oe=i.DEPTH_COMPONENT32F:_.type===es?oe=i.DEPTH_COMPONENT24:_.type===Hs?oe=i.DEPTH24_STENCIL8:oe=i.DEPTH_COMPONENT16:_.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Gs&&oe===i.DEPTH_COMPONENT&&_.type!==Wh&&_.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=es,Y=r.convert(_.type)),_.format===Fr&&oe===i.DEPTH_COMPONENT&&(oe=i.DEPTH_STENCIL,_.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Hs,Y=r.convert(_.type))),nt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,oe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,oe,te.width,te.height,0,C,Y,null));else if(_.isDataTexture)if(ve.length>0&&Xe){Ye&&nt&&t.texStorage2D(i.TEXTURE_2D,qe,oe,ve[0].width,ve[0].height);for(let he=0,I=ve.length;he<I;he++)re=ve[he],Ye?t.texSubImage2D(i.TEXTURE_2D,he,0,0,re.width,re.height,C,Y,re.data):t.texImage2D(i.TEXTURE_2D,he,oe,re.width,re.height,0,C,Y,re.data);_.generateMipmaps=!1}else Ye?(nt&&t.texStorage2D(i.TEXTURE_2D,qe,oe,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,C,Y,te.data)):t.texImage2D(i.TEXTURE_2D,0,oe,te.width,te.height,0,C,Y,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ye&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,oe,ve[0].width,ve[0].height,te.depth);for(let he=0,I=ve.length;he<I;he++)re=ve[he],_.format!==Mn?C!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,re.width,re.height,te.depth,C,re.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,oe,re.width,re.height,te.depth,0,re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,re.width,re.height,te.depth,C,Y,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,oe,re.width,re.height,te.depth,0,C,Y,re.data)}else{Ye&&nt&&t.texStorage2D(i.TEXTURE_2D,qe,oe,ve[0].width,ve[0].height);for(let he=0,I=ve.length;he<I;he++)re=ve[he],_.format!==Mn?C!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,re.width,re.height,C,re.data):t.compressedTexImage2D(i.TEXTURE_2D,he,oe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,he,0,0,re.width,re.height,C,Y,re.data):t.texImage2D(i.TEXTURE_2D,he,oe,re.width,re.height,0,C,Y,re.data)}else if(_.isDataArrayTexture)Ye?(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,qe,oe,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,C,Y,te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,te.width,te.height,te.depth,0,C,Y,te.data);else if(_.isData3DTexture)Ye?(nt&&t.texStorage3D(i.TEXTURE_3D,qe,oe,te.width,te.height,te.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,C,Y,te.data)):t.texImage3D(i.TEXTURE_3D,0,oe,te.width,te.height,te.depth,0,C,Y,te.data);else if(_.isFramebufferTexture){if(nt)if(Ye)t.texStorage2D(i.TEXTURE_2D,qe,oe,te.width,te.height);else{let he=te.width,I=te.height;for(let ce=0;ce<qe;ce++)t.texImage2D(i.TEXTURE_2D,ce,oe,he,I,0,C,Y,null),he>>=1,I>>=1}}else if(ve.length>0&&Xe){Ye&&nt&&t.texStorage2D(i.TEXTURE_2D,qe,oe,ve[0].width,ve[0].height);for(let he=0,I=ve.length;he<I;he++)re=ve[he],Ye?t.texSubImage2D(i.TEXTURE_2D,he,0,0,C,Y,re):t.texImage2D(i.TEXTURE_2D,he,oe,C,Y,re);_.generateMipmaps=!1}else Ye?(nt&&t.texStorage2D(i.TEXTURE_2D,qe,oe,te.width,te.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,Y,te)):t.texImage2D(i.TEXTURE_2D,0,oe,C,Y,te);x(_,Xe)&&y(ne),ye.__version=ie.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function me(T,_,F){if(_.image.length!==6)return;let ne=X(T,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(i.TEXTURE0+F);let ye=ht.getPrimaries(ht.workingColorSpace),fe=_.colorSpace===rn?null:ht.getPrimaries(_.colorSpace),ge=_.colorSpace===rn||ye===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Fe=_.image[0]&&_.image[0].isDataTexture,te=[];for(let he=0;he<6;he++)!Ce&&!Fe?te[he]=g(_.image[he],!1,!0,s.maxCubemapSize):te[he]=Fe?_.image[he].image:_.image[he],te[he]=Se(_,te[he]);let Xe=te[0],C=m(Xe)||o,Y=r.convert(_.format,_.colorSpace),oe=r.convert(_.type),re=v(_.internalFormat,Y,oe,_.colorSpace),ve=o&&_.isVideoTexture!==!0,Ye=ie.__version===void 0||ne===!0,nt=R(_,Xe,C);V(i.TEXTURE_CUBE_MAP,_,C);let qe;if(Ce){ve&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,re,Xe.width,Xe.height);for(let he=0;he<6;he++){qe=te[he].mipmaps;for(let I=0;I<qe.length;I++){let ce=qe[I];_.format!==Mn?Y!==null?ve?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,0,0,ce.width,ce.height,Y,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,re,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,0,0,ce.width,ce.height,Y,oe,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,re,ce.width,ce.height,0,Y,oe,ce.data)}}}else{qe=_.mipmaps,ve&&Ye&&(qe.length>0&&nt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,re,te[0].width,te[0].height));for(let he=0;he<6;he++)if(Fe){ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,te[he].width,te[he].height,Y,oe,te[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,re,te[he].width,te[he].height,0,Y,oe,te[he].data);for(let I=0;I<qe.length;I++){let le=qe[I].image[he].image;ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,0,0,le.width,le.height,Y,oe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,re,le.width,le.height,0,Y,oe,le.data)}}else{ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Y,oe,te[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,re,Y,oe,te[he]);for(let I=0;I<qe.length;I++){let ce=qe[I];ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,0,0,Y,oe,ce.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,re,Y,oe,ce.image[he])}}}x(_,C)&&y(i.TEXTURE_CUBE_MAP),ie.__version=ee.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function xe(T,_,F,ne,ee,ie){let ye=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),ge=v(F.internalFormat,ye,fe,F.colorSpace);if(!n.get(_).__hasExternalTextures){let Fe=Math.max(1,_.width>>ie),te=Math.max(1,_.height>>ie);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,ge,Fe,te,_.depth,0,ye,fe,null):t.texImage2D(ee,ie,ge,Fe,te,0,ye,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ae(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,n.get(F).__webglTexture,0,K(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,n.get(F).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(T,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer&&!_.stencilBuffer){let ne=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||ae(_)){let ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Li?ne=i.DEPTH_COMPONENT32F:ee.type===es&&(ne=i.DEPTH_COMPONENT24));let ie=K(_);ae(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ne,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ne,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(_.depthBuffer&&_.stencilBuffer){let ne=K(_);F&&ae(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,_.width,_.height):ae(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let ne=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0;ee<ne.length;ee++){let ie=ne[ee],ye=r.convert(ie.format,ie.colorSpace),fe=r.convert(ie.type),ge=v(ie.internalFormat,ye,fe,ie.colorSpace),Ce=K(_);F&&ae(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ge,_.width,_.height):ae(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,ge,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ge,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);let ne=n.get(_.depthTexture).__webglTexture,ee=K(_);if(_.depthTexture.format===Gs)ae(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(_.depthTexture.format===Fr)ae(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(T){let _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]=i.createRenderbuffer(),Pe(_.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Pe(_.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(T,_,F){let ne=n.get(T);_!==void 0&&xe(ne.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ee(T)}function k(T){let _=T.texture,F=n.get(T),ne=n.get(_);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,a.memory.textures++);let ee=T.isWebGLCubeRenderTarget===!0,ie=T.isWebGLMultipleRenderTargets===!0,ye=m(T)||o;if(ee){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ge=0;ge<_.mipmaps.length;ge++)F.__webglFramebuffer[fe][ge]=i.createFramebuffer()}else F.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)F.__webglFramebuffer[fe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ie)if(s.drawBuffers){let fe=T.texture;for(let ge=0,Ce=fe.length;ge<Ce;ge++){let Fe=n.get(fe[ge]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ae(T)===!1){let fe=ie?_:[_];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<fe.length;ge++){let Ce=fe[ge];F.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);let Fe=r.convert(Ce.format,Ce.colorSpace),te=r.convert(Ce.type),Xe=v(Ce.internalFormat,Fe,te,Ce.colorSpace,T.isXRRenderTarget===!0),C=K(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,C,Xe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),V(i.TEXTURE_CUBE_MAP,_,ye);for(let fe=0;fe<6;fe++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)xe(F.__webglFramebuffer[fe][ge],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else xe(F.__webglFramebuffer[fe],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(_,ye)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let fe=T.texture;for(let ge=0,Ce=fe.length;ge<Ce;ge++){let Fe=fe[ge],te=n.get(Fe);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),V(i.TEXTURE_2D,Fe,ye),xe(F.__webglFramebuffer,T,Fe,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),x(Fe,ye)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?fe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ne.__webglTexture),V(fe,_,ye),o&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)xe(F.__webglFramebuffer[ge],T,_,i.COLOR_ATTACHMENT0,fe,ge);else xe(F.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,fe,0);x(_,ye)&&y(fe),t.unbindTexture()}T.depthBuffer&&Ee(T)}function Ct(T){let _=m(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,ee=F.length;ne<ee;ne++){let ie=F[ne];if(x(ie,_)){let ye=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(ie).__webglTexture;t.bindTexture(ye,fe),y(ye),t.unbindTexture()}}}function _e(T){if(o&&T.samples>0&&ae(T)===!1){let _=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,ne=T.height,ee=i.COLOR_BUFFER_BIT,ie=[],ye=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(T),ge=T.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){ie.push(i.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&ie.push(ye);let Fe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Fe===!1&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ge&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),ge){let te=n.get(_[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,F,ne,0,0,F,ne,ee,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);let Fe=n.get(_[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function K(T){return Math.min(s.maxSamples,T.samples)}function ae(T){let _=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ue(T){let _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Se(T,_){let F=T.colorSpace,ne=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===dh||F!==It&&F!==rn&&(ht.getTransfer(F)===yt?o===!1?e.has("EXT_sRGB")===!0&&ne===Mn?(T.format=dh,T.minFilter=jt,T.generateMipmaps=!1):_=xc.sRGBToLinear(_):(ne!==Mn||ee!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=ke,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ae}function AM(i,e,t){let n=t.isWebGL2;function s(r,a=rn){let o,c=ht.getTransfer(a);if(r===ss)return i.UNSIGNED_BYTE;if(r===ym)return i.UNSIGNED_SHORT_4_4_4_4;if(r===xm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ry)return i.BYTE;if(r===ay)return i.SHORT;if(r===Wh)return i.UNSIGNED_SHORT;if(r===bm)return i.INT;if(r===es)return i.UNSIGNED_INT;if(r===Li)return i.FLOAT;if(r===Oa)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===oy)return i.ALPHA;if(r===Mn)return i.RGBA;if(r===cy)return i.LUMINANCE;if(r===ly)return i.LUMINANCE_ALPHA;if(r===Gs)return i.DEPTH_COMPONENT;if(r===Fr)return i.DEPTH_STENCIL;if(r===dh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===hy)return i.RED;if(r===vm)return i.RED_INTEGER;if(r===uy)return i.RG;if(r===_m)return i.RG_INTEGER;if(r===Sm)return i.RGBA_INTEGER;if(r===Rl||r===Cl||r===Pl||r===Ll)if(c===yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Rl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Rl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nf||r===Uf||r===Of||r===Ff)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Nf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Of)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ff)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kf||r===Bf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kf)return c===yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zf||r===Hf||r===Gf||r===Vf||r===Wf||r===$f||r===qf||r===jf||r===Xf||r===Yf||r===Kf||r===Zf||r===Jf||r===Qf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===zf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$f)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===ep||r===tp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Il)return c===yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ep)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dy||r===np||r===ip||r===sp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Il)return o.COMPRESSED_RED_RGTC1_EXT;if(r===np)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ip)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function RM(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pm(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),b(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function CM(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){let v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(b(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));let R=y.program;n.updateUBOMapping(x,R);let E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){let y=u();x.__bindingPointIndex=y;let v=i.createBuffer(),R=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=s[x.id],v=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=v.length;E<A;E++){let D=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,M=D.length;S<M;S++){let O=D[S];if(p(O,E,S,R)===!0){let B=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value],L=0;for(let N=0;N<Z.length;N++){let H=Z[N],$=g(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,B+L,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,v,R){let E=x.value,A=y+"_"+v;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let D=R[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return R[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function b(x){let y=x.uniforms,v=0,R=16;for(let A=0,D=y.length;A<D;A++){let S=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,O=S.length;M<O;M++){let B=S[M],Z=Array.isArray(B.value)?B.value:[B.value];for(let L=0,N=Z.length;L<N;L++){let H=Z[L],$=g(H),j=v%R;j!==0&&R-j<$.boundary&&(v+=R-j),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=$.storage}}}let E=v%R;return E>0&&(v+=R-E),x.__size=v,x.__cache={},this}function g(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}function cm(i,e,t,n,s,r,a){let o=Ph.distanceSqToPoint(i);if(o<t){let c=new P;Ph.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}function uc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function DM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function NM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Fm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function UM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return Nc;case"quaternion":return fi;case"bool":case"boolean":return os;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function OM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=UM(i.type);if(i.times===void 0){let t=[],n=[];Fm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function fm(i,e){return i.distance-e.distance}function Gh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Gh(s[r],e,t,!0)}}var Vh,zi,js,A0,Tf,T0,pm,Xa,Pi,ci,an,Yt,ns,Lr,Rf,Cf,Pf,R0,ks,C0,P0,Lf,If,L0,I0,D0,N0,oh,ch,U0,O0,F0,k0,B0,z0,H0,G0,V0,W0,$0,q0,fc,j0,X0,Y0,K0,mm,Z0,J0,is,Q0,ey,ty,Ya,ny,iy,Df,sy,gm,Nr,Ur,lh,hh,Hc,Kn,bn,Ws,Lt,Or,zs,jt,Ka,li,ss,ry,ay,Wh,bm,es,Li,Oa,ym,xm,Hs,oy,Mn,cy,ly,Gs,Fr,hy,vm,uy,_m,Sm,Rl,Cl,Pl,Ll,Nf,Uf,Of,Ff,Mm,kf,Bf,zf,Hf,Gf,Vf,Wf,$f,qf,jf,Xf,Yf,Kf,Zf,Jf,Qf,Il,ep,tp,dy,np,ip,sp,rs,Di,Dl,rp,ap,op,fy,wm,Gc,Za,Em,Vs,py,my,Am,gy,rn,at,It,$h,Vc,pc,yt,mc,gc,ur,cp,by,yy,xy,Tm,vy,_y,Sy,My,uh,lp,dh,Ii,bc,hi,nn,hp,Ia,kr,ds,Re,Ze,Nl,up,dp,fp,ko,By,ht,dr,xc,zy,Br,Hy,Vt,mt,ph,Ni,vc,mh,on,P,Fl,pp,wt,wi,qn,Bo,fr,pr,mr,Yi,Ki,Ds,Ea,zo,Ho,Ns,Gy,Aa,Bl,In,Ei,zl,Go,Zi,Hl,Vo,Gl,Ui,Ve,gr,jn,Vy,Wy,Ji,Wo,Cn,mp,gp,_c,ka,$y,bp,br,Ai,$o,Ta,qy,jy,yp,xp,vp,Xy,Yy,St,Xn,Ti,Vl,Ri,yr,xr,_p,Wl,$l,ql,qo,Rr,Cm,Qi,jo,we,sn,Ky,wn,cn,Dt,Xo,ot,Sc,Mc,_t,Zy,kn,Xl,vr,Pn,Ra,Gt,Ot,Sp,Us,Yo,Mp,_r,Sr,Mr,Yl,Ko,Zo,Jo,Qo,wp,Ep,Ap,ec,tc,Ge,Oi,ex,tx,nx,Zn,wc,vt,wr,Er,gh,Ec,bh,Kl,ix,sx,Ln,Os,ic,Ba,$s,ax,ox,cx,lx,hx,ux,dx,fx,px,mx,gx,bx,yx,xx,vx,_x,Sx,Mx,wx,Ex,Ax,Tx,Rx,Cx,Px,Lx,Ix,Dx,Nx,Ux,Ox,Fx,kx,Bx,zx,Hx,Gx,Vx,Wx,$x,qx,jx,Xx,Yx,Kx,Zx,Jx,Qx,ev,tv,nv,iv,sv,rv,av,ov,cv,lv,hv,uv,dv,fv,pv,mv,gv,bv,yv,xv,vv,_v,Sv,Mv,wv,Ev,Av,Tv,Rv,Cv,Pv,Lv,Iv,Dv,Nv,Uv,Ov,Fv,kv,Bv,zv,Hv,Gv,Vv,Wv,$v,qv,jv,Xv,Yv,Kv,Zv,Jv,Qv,e_,t_,n_,i_,s_,r_,a_,o_,c_,l_,h_,u_,d_,f_,p_,m_,g_,b_,y_,x_,v_,__,S_,M_,w_,E_,A_,T_,R_,C_,P_,L_,I_,D_,N_,U_,O_,F_,k_,$e,ue,ai,sc,Hr,Cr,Tp,Bs,Zl,Rp,Jl,Ql,eh,Fs,Ar,Cp,Fi,Ac,Im,Dm,Nm,Um,Om,Dp,Np,Up,Op,Fp,yh,xh,vh,th,Dr,VS,WS,QS,eM,nM,hM,Sh,Mh,bM,wh,Eh,_M,SM,Ah,gt,TM,Ua,Th,ui,Rh,Tc,En,za,mn,Ha,Xp,Yp,Kp,PM,Zp,ac,nh,Jp,ih,Rc,Ga,Ch,Qp,LM,Cc,qs,Tr,em,oc,tm,IM,Ca,Pa,Pc,Gr,nm,im,sm,sh,cc,Vr,rm,am,Va,Lc,Wa,om,Ph,lc,hc,Ic,Wr,$r,qr,di,jr,Dc,Xr,Kt,ln,as,Lh,Ih,Dh,Bn,os,Nc,ki,Nh,fi,cs,Bi,Uc,ts,Uh,FM,Jn,Ci,Oh,ls,Fh,Yr,$a,rh,hm,um,qa,kh,Oc,dm,La,ah,Bh,hs,zh,pi,us,Fc,Xh,kM,Yh,BM,zM,HM,GM,VM,WM,$M,Hh,lt,hA,kc,Bc,ja,dc,zc,hn=He(()=>{Vh="160",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},A0=0,Tf=1,T0=2,pm=1,Xa=2,Pi=3,ci=0,an=1,Yt=2,ns=0,Lr=1,Rf=2,Cf=3,Pf=4,R0=5,ks=100,C0=101,P0=102,Lf=103,If=104,L0=200,I0=201,D0=202,N0=203,oh=204,ch=205,U0=206,O0=207,F0=208,k0=209,B0=210,z0=211,H0=212,G0=213,V0=214,W0=0,$0=1,q0=2,fc=3,j0=4,X0=5,Y0=6,K0=7,mm=0,Z0=1,J0=2,is=0,Q0=1,ey=2,ty=3,Ya=4,ny=5,iy=6,Df="attached",sy="detached",gm=300,Nr=301,Ur=302,lh=303,hh=304,Hc=306,Kn=1e3,bn=1001,Ws=1002,Lt=1003,Or=1004,zs=1005,jt=1006,Ka=1007,li=1008,ss=1009,ry=1010,ay=1011,Wh=1012,bm=1013,es=1014,Li=1015,Oa=1016,ym=1017,xm=1018,Hs=1020,oy=1021,Mn=1023,cy=1024,ly=1025,Gs=1026,Fr=1027,hy=1028,vm=1029,uy=1030,_m=1031,Sm=1033,Rl=33776,Cl=33777,Pl=33778,Ll=33779,Nf=35840,Uf=35841,Of=35842,Ff=35843,Mm=36196,kf=37492,Bf=37496,zf=37808,Hf=37809,Gf=37810,Vf=37811,Wf=37812,$f=37813,qf=37814,jf=37815,Xf=37816,Yf=37817,Kf=37818,Zf=37819,Jf=37820,Qf=37821,Il=36492,ep=36494,tp=36495,dy=36283,np=36284,ip=36285,sp=36286,rs=2300,Di=2301,Dl=2302,rp=2400,ap=2401,op=2402,fy=2500,wm=0,Gc=1,Za=2,Em=3e3,Vs=3001,py=3200,my=3201,Am=0,gy=1,rn="",at="srgb",It="srgb-linear",$h="display-p3",Vc="display-p3-linear",pc="linear",yt="srgb",mc="rec709",gc="p3",ur=7680,cp=519,by=512,yy=513,xy=514,Tm=515,vy=516,_y=517,Sy=518,My=519,uh=35044,lp="300 es",dh=1035,Ii=2e3,bc=2001,hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hp=1234567,Ia=Math.PI/180,kr=180/Math.PI;ds={DEG2RAD:Ia,RAD2DEG:kr,generateUUID:Yn,clamp:Xt,euclideanModulo:qh,mapLinear:wy,inverseLerp:Ey,lerp:Da,damp:Ay,pingpong:Ty,smoothstep:Ry,smootherstep:Cy,randInt:Py,randFloat:Ly,randFloatSpread:Iy,seededRandom:Dy,degToRad:Ny,radToDeg:Uy,isPowerOfTwo:fh,ceilPowerOfTwo:Oy,floorPowerOfTwo:yc,setQuaternionFromProperEuler:Fy,normalize:ft,denormalize:oi},Re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],b=n[8],g=s[0],m=s[3],f=s[6],x=s[1],y=s[4],v=s[7],R=s[2],E=s[5],A=s[8];return r[0]=a*g+o*x+c*R,r[3]=a*m+o*y+c*E,r[6]=a*f+o*v+c*A,r[1]=l*g+h*x+u*R,r[4]=l*m+h*y+u*E,r[7]=l*f+h*v+u*A,r[2]=d*g+p*x+b*R,r[5]=d*m+p*y+b*E,r[8]=d*f+p*v+b*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,b=t*u+n*d+s*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/b;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nl.makeScale(e,t)),this}rotate(e){return this.premultiply(Nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nl=new Ze;up={};dp=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fp=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ko={[It]:{transfer:pc,primaries:mc,toReference:i=>i,fromReference:i=>i},[at]:{transfer:yt,primaries:mc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vc]:{transfer:pc,primaries:gc,toReference:i=>i.applyMatrix3(fp),fromReference:i=>i.applyMatrix3(dp)},[$h]:{transfer:yt,primaries:gc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fp),fromReference:i=>i.applyMatrix3(dp).convertLinearToSRGB()}},By=new Set([It,Vc]),ht={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!By.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ko[e].toReference,s=ko[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ko[i].primaries},getTransfer:function(i){return i===rn?pc:ko[i].transfer}};xc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=Fa("canvas")),dr.width=e.width,dr.height=e.height;let n=dr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ir(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ir(t[n]/255)*255):t[n]=Ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zy=0,Br=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ol(s[a].image)):r.push(Ol(s[a]))}else r=Ol(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Hy=0,Vt=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bn,s=bn,r=jt,a=li,o=Mn,c=ss,l=i.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Yn(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vs?at:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Vs:Em}set encoding(e){Na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vs?at:rn}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=gm;Vt.DEFAULT_ANISOTROPY=1;mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],b=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(b-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(b+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(p+1)/2,R=(f+1)/2,E=(h+d)/4,A=(u+g)/4,D=(b+m)/4;return y>v&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=D/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-b)*(m-b)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-b)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ph=class extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vs?at:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Br(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vc=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mh=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],b=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=b,e[t+3]=g;return}if(u!==g||c!==d||l!==p||h!==b){let m=1-o,f=c*d+l*p+h*b+u*g,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let R=Math.sqrt(y),E=Math.atan2(R,f*x);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let v=o*x;if(c=c*m+d*v,l=l*m+p*v,h=h*m+b*v,u=u*m+g*v,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],b=r[a+3];return e[t]=o*b+h*u+c*p-l*d,e[t+1]=c*b+h*d+l*u-o*p,e[t+2]=l*b+h*p+o*d-c*u,e[t+3]=h*b-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),b=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"YXZ":this._x=d*h*u+l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"ZXY":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u-d*p*b;break;case"ZYX":this._x=d*h*u-l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u+d*p*b;break;case"YZX":this._x=d*h*u+l*p*b,this._y=l*p*u+d*h*b,this._z=l*h*b-d*p*u,this._w=l*h*u-d*p*b;break;case"XZY":this._x=d*h*u-l*p*b,this._y=l*p*u-d*h*b,this._z=l*h*b+d*p*u,this._w=l*h*u+d*p*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fl=new P,pp=new on,wt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(e.matrixWorld),this.union(Bo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),zo.subVectors(this.max,Ea),fr.subVectors(e.a,Ea),pr.subVectors(e.b,Ea),mr.subVectors(e.c,Ea),Yi.subVectors(pr,fr),Ki.subVectors(mr,pr),Ds.subVectors(fr,mr);let t=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-Ds.z,Ds.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,Ds.z,0,-Ds.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-Ds.y,Ds.x,0];return!kl(t,fr,pr,mr,zo)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,fr,pr,mr,zo))?!1:(Ho.crossVectors(Yi,Ki),t=[Ho.x,Ho.y,Ho.z],kl(t,fr,pr,mr,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new P,new P,new P,new P,new P,new P,new P,new P],qn=new P,Bo=new wt,fr=new P,pr=new P,mr=new P,Yi=new P,Ki=new P,Ds=new P,Ea=new P,zo=new P,Ho=new P,Ns=new P;Gy=new wt,Aa=new P,Bl=new P,In=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gy.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Bl)),this.expandByPoint(Aa.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new P,zl=new P,Go=new P,Zi=new P,Hl=new P,Vo=new P,Gl=new P,Ui=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zl.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(zl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=Zi.dot(this.direction),c=-Zi.dot(Go),l=Zi.lengthSq(),h=Math.abs(1-a*a),u,d,p,b;if(h>0)if(u=a*c-o,d=a*o-c,b=r*h,u>=0)if(d>=-b)if(d<=b){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-b?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=b?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zl).addScaledVector(Go,d),p}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){Hl.subVectors(t,e),Vo.subVectors(n,e),Gl.crossVectors(Hl,Vo);let a=this.direction.dot(Gl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);let c=o*this.direction.dot(Vo.crossVectors(Zi,Vo));if(c<0)return null;let l=o*this.direction.dot(Hl.cross(Zi));if(l<0||c+l>a)return null;let h=-o*Zi.dot(Gl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,p,b,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,p,b,g,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,p,b,g,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=b,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,b=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+b*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=b+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,b=l*h,g=l*u;t[0]=d+g*o,t[4]=b*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-b,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,b=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,b=o*h,g=o*u;t[0]=c*h,t[4]=b*l-p,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=p*l-b,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,b=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=b*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+b,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*c,p=a*l,b=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-b,t[2]=b*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vy,e,Wy)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ji.crossVectors(n,Cn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ji.crossVectors(n,Cn)),Ji.normalize(),Wo.crossVectors(Cn,Ji),s[0]=Ji.x,s[4]=Wo.x,s[8]=Cn.x,s[1]=Ji.y,s[5]=Wo.y,s[9]=Cn.y,s[2]=Ji.z,s[6]=Wo.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],b=n[2],g=n[6],m=n[10],f=n[14],x=n[3],y=n[7],v=n[11],R=n[15],E=s[0],A=s[4],D=s[8],S=s[12],M=s[1],O=s[5],B=s[9],Z=s[13],L=s[2],N=s[6],H=s[10],$=s[14],j=s[3],q=s[7],Q=s[11],J=s[15];return r[0]=a*E+o*M+c*L+l*j,r[4]=a*A+o*O+c*N+l*q,r[8]=a*D+o*B+c*H+l*Q,r[12]=a*S+o*Z+c*$+l*J,r[1]=h*E+u*M+d*L+p*j,r[5]=h*A+u*O+d*N+p*q,r[9]=h*D+u*B+d*H+p*Q,r[13]=h*S+u*Z+d*$+p*J,r[2]=b*E+g*M+m*L+f*j,r[6]=b*A+g*O+m*N+f*q,r[10]=b*D+g*B+m*H+f*Q,r[14]=b*S+g*Z+m*$+f*J,r[3]=x*E+y*M+v*L+R*j,r[7]=x*A+y*O+v*N+R*q,r[11]=x*D+y*B+v*H+R*Q,r[15]=x*S+y*Z+v*$+R*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],b=e[3],g=e[7],m=e[11],f=e[15];return b*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+g*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],b=e[12],g=e[13],m=e[14],f=e[15],x=u*m*l-g*d*l+g*c*p-o*m*p-u*c*f+o*d*f,y=b*d*l-h*m*l-b*c*p+a*m*p+h*c*f-a*d*f,v=h*g*l-b*u*l+b*o*p-a*g*p-h*o*f+a*u*f,R=b*u*c-h*g*c-b*o*d+a*g*d+h*o*m-a*u*m,E=t*x+n*y+s*v+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=x*A,e[1]=(g*d*r-u*m*r-g*s*p+n*m*p+u*s*f-n*d*f)*A,e[2]=(o*m*r-g*c*r+g*s*l-n*m*l-o*s*f+n*c*f)*A,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*A,e[4]=y*A,e[5]=(h*m*r-b*d*r+b*s*p-t*m*p-h*s*f+t*d*f)*A,e[6]=(b*c*r-a*m*r-b*s*l+t*m*l+a*s*f-t*c*f)*A,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*p+t*c*p)*A,e[8]=v*A,e[9]=(b*u*r-h*g*r-b*n*p+t*g*p+h*n*f-t*u*f)*A,e[10]=(a*g*r-b*o*r+b*n*l-t*g*l-a*n*f+t*o*f)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*A,e[12]=R*A,e[13]=(h*g*s-b*u*s+b*n*d-t*g*d-h*n*m+t*u*m)*A,e[14]=(b*o*s-a*g*s-b*n*c+t*g*c+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,b=r*u,g=a*h,m=a*u,f=o*u,x=c*l,y=c*h,v=c*u,R=n.x,E=n.y,A=n.z;return s[0]=(1-(g+f))*R,s[1]=(p+v)*R,s[2]=(b-y)*R,s[3]=0,s[4]=(p-v)*E,s[5]=(1-(d+f))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(b+y)*A,s[9]=(m-x)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gr.set(s[0],s[1],s[2]).length(),a=gr.set(s[4],s[5],s[6]).length(),o=gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);let l=1/r,h=1/a,u=1/o;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ii){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,b;if(o===Ii)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===bc)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ii){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,p=(n+s)*h,b,g;if(o===Ii)b=(a+r)*u,g=-2*u;else if(o===bc)b=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gr=new P,jn=new Ve,Vy=new P(0,0,0),Wy=new P(1,1,1),Ji=new P,Wo=new P,Cn=new P,mp=new Ve,gp=new on,_c=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_c.DEFAULT_ORDER="XYZ";ka=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$y=0,bp=new P,br=new on,Ai=new Ve,$o=new P,Ta=new P,qy=new P,jy=new on,yp=new P(1,0,0),xp=new P(0,1,0),vp=new P(0,0,1),Xy={type:"added"},Yy={type:"removed"},St=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new _c,n=new on,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ze}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,t){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ta,$o,this.up):Ai.lookAt($o,Ta,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),br.setFromRotationMatrix(Ai),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yy)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xn=new P,Ti=new P,Vl=new P,Ri=new P,yr=new P,xr=new P,_p=new P,Wl=new P,$l=new P,ql=new P,qo=!1,Rr=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),Ti.subVectors(n,t),Vl.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(Ti),c=Xn.dot(Vl),l=Ti.dot(Ti),h=Ti.dot(Vl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,b=(a*h-o*c)*d;return r.set(1-p-b,b,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,t,n,s,r,a,o,c){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(a,Ri.y),c.addScaledVector(o,Ri.z),c)}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),Ti.subVectors(e,t),Xn.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Xn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;yr.subVectors(s,n),xr.subVectors(r,n),Wl.subVectors(e,n);let c=yr.dot(Wl),l=xr.dot(Wl);if(c<=0&&l<=0)return t.copy(n);$l.subVectors(e,s);let h=yr.dot($l),u=xr.dot($l);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(yr,a);ql.subVectors(e,r);let p=yr.dot(ql),b=xr.dot(ql);if(b>=0&&p<=b)return t.copy(r);let g=p*l-c*b;if(g<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(n).addScaledVector(xr,o);let m=h*b-p*u;if(m<=0&&u-h>=0&&p-b>=0)return _p.subVectors(r,s),o=(u-h)/(u-h+(p-b)),t.copy(s).addScaledVector(_p,o);let f=1/(m+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(yr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},jo={h:0,s:0,l:0};we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=qh(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=jl(a,r,e+1/3),this.g=jl(a,r,e),this.b=jl(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let n=Cm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Ul(e.r),this.g=Ul(e.g),this.b=Ul(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return ht.fromWorkingColorSpace(sn.copy(this),e),Math.round(Xt(sn.r*255,0,255))*65536+Math.round(Xt(sn.g*255,0,255))*256+Math.round(Xt(sn.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=at){ht.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(jo);let n=Da(Qi.h,jo.h,t),s=Da(Qi.s,jo.s,t),r=Da(Qi.l,jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new we;we.NAMES=Cm;Ky=0,wn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Lr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ch,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oh&&(n.blendSrc=this.blendSrc),this.blendDst!==ch&&(n.blendDst=this.blendDst),this.blendEquation!==ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cn=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dt=new P,Xo=new Re,ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}},Sc=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Mc=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_t=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zy=0,kn=new Ve,Xl=new St,vr=new P,Pn=new wt,Ra=new wt,Gt=new P,Ot=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?Mc:Sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Pn.min,Ra.min),Pn.expandByPoint(Gt),Gt.addVectors(Pn.max,Ra.max),Pn.expandByPoint(Gt)):(Pn.expandByPoint(Ra.min),Pn.expandByPoint(Ra.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Gt.fromBufferAttribute(o,l),c&&(vr.fromBufferAttribute(e,l),Gt.add(vr)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let M=0;M<o;M++)l[M]=new P,h[M]=new P;let u=new P,d=new P,p=new P,b=new Re,g=new Re,m=new Re,f=new P,x=new P;function y(M,O,B){u.fromArray(s,M*3),d.fromArray(s,O*3),p.fromArray(s,B*3),b.fromArray(a,M*2),g.fromArray(a,O*2),m.fromArray(a,B*2),d.sub(u),p.sub(u),g.sub(b),m.sub(b);let Z=1/(g.x*m.y-m.x*g.y);isFinite(Z)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(Z),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(Z),l[M].add(f),l[O].add(f),l[B].add(f),h[M].add(x),h[O].add(x),h[B].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let M=0,O=v.length;M<O;++M){let B=v[M],Z=B.start,L=B.count;for(let N=Z,H=Z+L;N<H;N+=3)y(n[N+0],n[N+1],n[N+2])}let R=new P,E=new P,A=new P,D=new P;function S(M){A.fromArray(r,M*3),D.copy(A);let O=l[M];R.copy(O),R.sub(A.multiplyScalar(A.dot(O))).normalize(),E.crossVectors(D,O);let Z=E.dot(h[M])<0?-1:1;c[M*4]=R.x,c[M*4+1]=R.y,c[M*4+2]=R.z,c[M*4+3]=Z}for(let M=0,O=v.length;M<O;++M){let B=v[M],Z=B.start,L=B.count;for(let N=Z,H=Z+L;N<H;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let b=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,b=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)d[b++]=l[p++]}return new ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sp=new Ve,Us=new Ui,Yo=new In,Mp=new P,_r=new P,Sr=new P,Mr=new P,Yl=new P,Ko=new P,Zo=new Re,Jo=new Re,Qo=new Re,wp=new P,Ep=new P,Ap=new P,ec=new P,tc=new P,Ge=class extends St{constructor(e=new Ot,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Yl.fromBufferAttribute(u,e),a?Ko.addScaledVector(Yl,h):Ko.addScaledVector(Yl.sub(t),h))}t.add(Ko)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(Yo.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Yo,Mp)===null||Us.origin.distanceToSquared(Mp)>(e.far-e.near)**2))&&(Sp.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Sp),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,g=d.length;b<g;b++){let m=d[b],f=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,R=y;v<R;v+=3){let E=o.getX(v),A=o.getX(v+1),D=o.getX(v+2);s=nc(this,f,e,n,l,h,u,E,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){let x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=nc(this,a,e,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,g=d.length;b<g;b++){let m=d[b],f=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,R=y;v<R;v+=3){let E=v,A=v+1,D=v+2;s=nc(this,f,e,n,l,h,u,E,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let b=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){let x=m,y=m+1,v=m+2;s=nc(this,a,e,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Oi=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;b("z","y","x",-1,-1,n,t,e,a,r,0),b("z","y","x",1,-1,n,t,-e,a,r,1),b("x","z","y",1,1,e,n,t,s,a,2),b("x","z","y",1,-1,e,n,-t,s,a,3),b("x","y","z",1,-1,e,t,n,s,r,4),b("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function b(g,m,f,x,y,v,R,E,A,D,S){let M=v/A,O=R/D,B=v/2,Z=R/2,L=E/2,N=A+1,H=D+1,$=0,j=0,q=new P;for(let Q=0;Q<H;Q++){let J=Q*O-Z;for(let de=0;de<N;de++){let V=de*M-B;q[g]=V*x,q[m]=J*y,q[f]=L,l.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[f]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(de/A),u.push(1-Q/D),$+=1}}for(let Q=0;Q<D;Q++)for(let J=0;J<A;J++){let de=d+J+N*Q,V=d+J+N*(Q+1),X=d+(J+1)+N*(Q+1),se=d+(J+1)+N*Q;c.push(de,V,se),c.push(V,X,se),j+=6}o.addGroup(p,j,S),p+=j,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ex={clone:zr,merge:gn},tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wc=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vt=class extends wc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wr=-90,Er=1,gh=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vt(wr,Er,e,t);s.layers=this.layers,this.add(s);let r=new vt(wr,Er,e,t);r.layers=this.layers,this.add(r);let a=new vt(wr,Er,e,t);a.layers=this.layers,this.add(a);let o=new vt(wr,Er,e,t);o.layers=this.layers,this.add(o);let c=new vt(wr,Er,e,t);c.layers=this.layers,this.add(c);let l=new vt(wr,Er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Ec=class extends Vt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bh=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vs?at:rn),this.texture=new Ec(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Oi(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ns});r.uniforms.tEquirect.value=t;let a=new Ge(s,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=jt),new gh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Kl=new P,ix=new P,sx=new Ze,Ln=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Kl.subVectors(n,t).cross(ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Kl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sx.getNormalMatrix(e),s=this.coplanarPoint(Kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new In,ic=new P,Ba=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],b=s[9],g=s[10],m=s[11],f=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+a,d+h,m+b,v+x).normalize(),n[3].setComponents(c-a,d-h,m-b,v-x).normalize(),n[4].setComponents(c-o,d-u,m-g,v-y).normalize(),t===Ii)n[5].setComponents(c+o,d+u,m+g,v+y).normalize();else if(t===bc)n[5].setComponents(o,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ic.x=s.normal.x>0?e.max.x:e.min.x,ic.y=s.normal.y>0?e.max.y:e.min.y,ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};$s=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,p=[],b=[],g=[],m=[];for(let f=0;f<h;f++){let x=f*d-a;for(let y=0;y<l;y++){let v=y*u-r;b.push(v,-x,0),g.push(0,0,1),m.push(y/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){let y=x+l*f,v=x+l*(f+1),R=x+1+l*(f+1),E=x+1+l*f;p.push(y,v,E),p.push(v,R,E)}this.setIndex(p),this.setAttribute("position",new _t(b,3)),this.setAttribute("normal",new _t(g,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,av=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_v=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,d_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,f_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:ax,alphahash_pars_fragment:ox,alphamap_fragment:cx,alphamap_pars_fragment:lx,alphatest_fragment:hx,alphatest_pars_fragment:ux,aomap_fragment:dx,aomap_pars_fragment:fx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:bx,bsdfs:yx,iridescence_fragment:xx,bumpmap_pars_fragment:vx,clipping_planes_fragment:_x,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:wx,color_fragment:Ex,color_pars_fragment:Ax,color_pars_vertex:Tx,color_vertex:Rx,common:Cx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Ix,displacementmap_vertex:Dx,emissivemap_fragment:Nx,emissivemap_pars_fragment:Ux,colorspace_fragment:Ox,colorspace_pars_fragment:Fx,envmap_fragment:kx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:zx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:Qx,envmap_vertex:Gx,fog_vertex:Vx,fog_pars_vertex:Wx,fog_fragment:$x,fog_pars_fragment:qx,gradientmap_pars_fragment:jx,lightmap_fragment:Xx,lightmap_pars_fragment:Yx,lights_lambert_fragment:Kx,lights_lambert_pars_fragment:Zx,lights_pars_begin:Jx,lights_toon_fragment:ev,lights_toon_pars_fragment:tv,lights_phong_fragment:nv,lights_phong_pars_fragment:iv,lights_physical_fragment:sv,lights_physical_pars_fragment:rv,lights_fragment_begin:av,lights_fragment_maps:ov,lights_fragment_end:cv,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:hv,logdepthbuf_pars_vertex:uv,logdepthbuf_vertex:dv,map_fragment:fv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:gv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:yv,morphcolor_vertex:xv,morphnormal_vertex:vv,morphtarget_pars_vertex:_v,morphtarget_vertex:Sv,normal_fragment_begin:Mv,normal_fragment_maps:wv,normal_pars_fragment:Ev,normal_pars_vertex:Av,normal_vertex:Tv,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Lv,iridescence_pars_fragment:Iv,opaque_fragment:Dv,packing:Nv,premultiplied_alpha_fragment:Uv,project_vertex:Ov,dithering_fragment:Fv,dithering_pars_fragment:kv,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:Hv,shadowmap_pars_vertex:Gv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Wv,skinbase_vertex:$v,skinning_pars_vertex:qv,skinning_vertex:jv,skinnormal_vertex:Xv,specularmap_fragment:Yv,specularmap_pars_fragment:Kv,tonemapping_fragment:Zv,tonemapping_pars_fragment:Jv,transmission_fragment:Qv,transmission_pars_fragment:e_,uv_pars_fragment:t_,uv_pars_vertex:n_,uv_vertex:i_,worldpos_vertex:s_,background_vert:r_,background_frag:a_,backgroundCube_vert:o_,backgroundCube_frag:c_,cube_vert:l_,cube_frag:h_,depth_vert:u_,depth_frag:d_,distanceRGBA_vert:f_,distanceRGBA_frag:p_,equirect_vert:m_,equirect_frag:g_,linedashed_vert:b_,linedashed_frag:y_,meshbasic_vert:x_,meshbasic_frag:v_,meshlambert_vert:__,meshlambert_frag:S_,meshmatcap_vert:M_,meshmatcap_frag:w_,meshnormal_vert:E_,meshnormal_frag:A_,meshphong_vert:T_,meshphong_frag:R_,meshphysical_vert:C_,meshphysical_frag:P_,meshtoon_vert:L_,meshtoon_frag:I_,points_vert:D_,points_frag:N_,shadow_vert:U_,shadow_frag:O_,sprite_vert:F_,sprite_frag:k_},ue={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ai={basic:{uniforms:gn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:gn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:gn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:gn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:gn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:gn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:gn([ue.points,ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:gn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:gn([ue.common,ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:gn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:gn([ue.sprite,ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:gn([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:gn([ue.lights,ue.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ai.physical={uniforms:gn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};sc={r:0,b:0,g:0};Hr=class extends wc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cr=4,Tp=[.125,.215,.35,.446,.526,.582],Bs=20,Zl=new Hr,Rp=new we,Jl=null,Ql=0,eh=0,Fs=(1+Math.sqrt(5))/2,Ar=1/Fs,Cp=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Fs,Ar),new P(0,Fs,-Ar),new P(Ar,0,Fs),new P(-Ar,0,Fs),new P(Fs,Ar,0),new P(-Fs,Ar,0)],Fi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,Ql,eh),e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Oa,format:Mn,colorSpace:It,depthBuffer:!1},s=Pp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$_(r)),this._blurMaterial=q_(r,e,t)}return s}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,n,s){let o=new vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rp),h.toneMapping=is,h.autoClear=!1;let p=new cn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),b=new Ge(new Oi,p),g=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Rp),g=!0);for(let f=0;f<6;f++){let x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let y=this._cubeSize;rc(s,x*y,f>2?y:0,y,y),h.setRenderTarget(s),g&&h.render(b,o),h.render(e,o)}b.geometry.dispose(),b.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Nr||e.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;rc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Zl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cp[(s-1)%Cp.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ge(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bs-1),g=r/b,m=isFinite(r)?1+Math.floor(h*g):Bs;m>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bs}`);let f=[],x=0;for(let A=0;A<Bs;++A){let D=A/g,S=Math.exp(-D*D/2);f.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=b,d.mipInt.value=y-n;let v=this._sizeLods[s],R=3*v*(s>y-Cr?s-y+Cr:0),E=4*(this._cubeSize-v);rc(t,R,E,3*v,2*v),c.setRenderTarget(t),c.render(u,Zl)}};Ac=class extends Vt{constructor(e,t,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Gs,h!==Gs&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gs&&(n=es),n===void 0&&h===Fr&&(n=Hs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Im=new Vt,Dm=new Ac(1,1);Dm.compareFunction=Tm;Nm=new vc,Um=new mh,Om=new Ec,Dp=[],Np=[],Up=new Float32Array(16),Op=new Float32Array(9),Fp=new Float32Array(4);yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_S(t.type)}},xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HS(t.type)}},vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;Dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);GS(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};VS=37297,WS=0;QS=/^[ \t]*#include +<([\w\d./]+)>/gm;eM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;hM=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mh(e),t.set(e,n)),n}},Mh=class{constructor(e){this.id=hM++,this.code=e,this.usedTimes=0}};bM=0;wh=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eh=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Ah=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},TM={type:"move"},Ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,b=.005;l.inputState.pinching&&d>p+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Th=class extends hi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,b=null,g=t.getContextAttributes(),m=null,f=null,x=[],y=[],v=new Re,R=null,E=new vt;E.layers.enable(1),E.viewport=new mt;let A=new vt;A.layers.enable(2),A.viewport=new mt;let D=[E,A],S=new Ah;S.layers.enable(1),S.layers.enable(2);let M=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=x[V];return X===void 0&&(X=new Ua,x[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=x[V];return X===void 0&&(X=new Ua,x[V]=X),X.getGripSpace()},this.getHand=function(V){let X=x[V];return X===void 0&&(X=new Ua,x[V]=X),X.getHandSpace()};function B(V){let X=y.indexOf(V.inputSource);if(X===-1)return;let se=x[X];se!==void 0&&(se.update(V.inputSource,V.frame,l||a),se.dispatchEvent({type:V.type,data:V.inputSource}))}function Z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",L);for(let V=0;V<x.length;V++){let X=y[V];X!==null&&(y[V]=null,x[V].disconnect(X))}M=null,O=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ni(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let X=null,se=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=g.stencil?Fr:Gs,se=g.stencil?Hs:es);let xe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Ni(d.textureWidth,d.textureHeight,{format:Mn,type:ss,depthTexture:new Ac(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Pe=e.properties.get(f);Pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let X=0;X<V.removed.length;X++){let se=V.removed[X],me=y.indexOf(se);me>=0&&(y[me]=null,x[me].disconnect(se))}for(let X=0;X<V.added.length;X++){let se=V.added[X],me=y.indexOf(se);if(me===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=y.length){y.push(se),me=Pe;break}else if(y[Pe]===null){y[Pe]=se,me=Pe;break}if(me===-1)break}let xe=x[me];xe&&xe.connect(se)}}let N=new P,H=new P;function $(V,X,se){N.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);let me=N.distanceTo(H),xe=X.projectionMatrix.elements,Pe=se.projectionMatrix.elements,Ie=xe[14]/(xe[10]-1),Ee=xe[14]/(xe[10]+1),ke=(xe[9]+1)/xe[5],k=(xe[9]-1)/xe[5],Ct=(xe[8]-1)/xe[0],_e=(Pe[8]+1)/Pe[0],K=Ie*Ct,ae=Ie*_e,Ue=me/(-Ct+_e),Se=Ue*-Ct;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Se),V.translateZ(Ue),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let T=Ie+Ue,_=Ee+Ue,F=K-Se,ne=ae+(me-Se),ee=ke*Ee/_*T,ie=k*Ee/_*T;V.projectionMatrix.makePerspective(F,ne,ee,ie,T,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=A.near=E.near=V.near,S.far=A.far=E.far=V.far,(M!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,O=S.far);let X=V.parent,se=S.cameras;j(S,X);for(let me=0;me<se.length;me++)j(se[me],X);se.length===2?$(S,E,A):S.projectionMatrix.copy(E.projectionMatrix),q(V,S,X)};function q(V,X,se){se===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=kr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Q=null;function J(V,X){if(h=X.getViewerPose(l||a),b=X,h!==null){let se=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let me=!1;se.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let xe=0;xe<se.length;xe++){let Pe=se[xe],Ie=null;if(p!==null)Ie=p.getViewport(Pe);else{let ke=u.getViewSubImage(d,Pe);Ie=ke.viewport,xe===0&&(e.setRenderTargetTextures(f,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let Ee=D[xe];Ee===void 0&&(Ee=new vt,Ee.layers.enable(xe),Ee.viewport=new mt,D[xe]=Ee),Ee.matrix.fromArray(Pe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Pe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),xe===0&&(S.matrix.copy(Ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(Ee)}}for(let se=0;se<x.length;se++){let me=y[se],xe=x[se];me!==null&&xe!==void 0&&xe.update(me,X,l||a)}Q&&Q(V,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),b=null}let de=new Lm;de.setAnimationLoop(J),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}};ui=class{constructor(e={}){let{canvas:t=ky(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),b=new Int32Array(4),g=null,m=null,f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=is,this.toneMappingExposure=1;let y=this,v=!1,R=0,E=0,A=null,D=-1,S=null,M=new mt,O=new mt,B=null,Z=new we(0),L=0,N=t.width,H=t.height,$=1,j=null,q=null,Q=new mt(0,0,N,H),J=new mt(0,0,N,H),de=!1,V=new Ba,X=!1,se=!1,me=null,xe=new Ve,Pe=new Re,Ie=new P,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return A===null?$:1}let k=n;function Ct(w,U){for(let G=0;G<w.length;G++){let W=w[G],z=t.getContext(W,U);if(z!==null)return z}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ce,!1),k===null){let U=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&U.shift(),k=Ct(U,w),k===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _e,K,ae,Ue,Se,T,_,F,ne,ee,ie,ye,fe,ge,Ce,Fe,te,Xe,C,Y,oe,re,ve,Ye;function nt(){_e=new X_(k),K=new G_(k,_e,e),_e.init(K),re=new AM(k,_e,K),ae=new wM(k,_e,K),Ue=new Z_(k),Se=new dM,T=new EM(k,_e,ae,Se,K,re,Ue),_=new W_(y),F=new j_(y),ne=new rx(k,K),ve=new z_(k,_e,ne,K),ee=new Y_(k,ne,Ue,ve),ie=new tS(k,ee,ne,Ue),C=new eS(k,K,T),Fe=new V_(Se),ye=new uM(y,_,F,_e,K,ve,Fe),fe=new RM(y,Se),ge=new pM,Ce=new vM(_e,K),Xe=new B_(y,_,F,ae,ie,d,c),te=new MM(y,ie,K),Ye=new CM(k,Ue,K,ae),Y=new H_(k,_e,Ue,K),oe=new K_(k,_e,Ue,K),Ue.programs=ye.programs,y.capabilities=K,y.extensions=_e,y.properties=Se,y.renderLists=ge,y.shadowMap=te,y.state=ae,y.info=Ue}nt();let qe=new Th(y,k);this.xr=qe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(N,H,!1))},this.getSize=function(w){return w.set(N,H)},this.setSize=function(w,U,G=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,H=U,t.width=Math.floor(w*$),t.height=Math.floor(U*$),G===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(N*$,H*$).floor()},this.setDrawingBufferSize=function(w,U,G){N=w,H=U,$=G,t.width=Math.floor(w*G),t.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,U,G,W){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,U,G,W),ae.viewport(M.copy(Q).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,U,G,W){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,U,G,W),ae.scissor(O.copy(J).multiplyScalar($).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){ae.setScissorTest(de=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(w=!0,U=!0,G=!0){let W=0;if(w){let z=!1;if(A!==null){let be=A.texture.format;z=be===Sm||be===_m||be===vm}if(z){let be=A.texture.type,Te=be===ss||be===es||be===Wh||be===Hs||be===ym||be===xm,De=Xe.getClearColor(),Oe=Xe.getClearAlpha(),je=De.r,Be=De.g,ze=De.b;Te?(p[0]=je,p[1]=Be,p[2]=ze,p[3]=Oe,k.clearBufferuiv(k.COLOR,0,p)):(b[0]=je,b[1]=Be,b[2]=ze,b[3]=Oe,k.clearBufferiv(k.COLOR,0,b))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT),G&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ge.dispose(),Ce.dispose(),Se.dispose(),_.dispose(),F.dispose(),ie.dispose(),ve.dispose(),Ye.dispose(),ye.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",fn),qe.removeEventListener("sessionend",bt),me&&(me.dispose(),me=null),pn.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let w=Ue.autoReset,U=te.enabled,G=te.autoUpdate,W=te.needsUpdate,z=te.type;nt(),Ue.autoReset=w,te.enabled=U,te.autoUpdate=G,te.needsUpdate=W,te.type=z}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){let U=w.target;U.removeEventListener("dispose",le),Le(U)}function Le(w){Ae(w),Se.remove(w)}function Ae(w){let U=Se.get(w).programs;U!==void 0&&(U.forEach(function(G){ye.releaseProgram(G)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,W,z,be){U===null&&(U=Ee);let Te=z.isMesh&&z.matrixWorld.determinant()<0,De=g0(w,U,G,W,z);ae.setMaterial(W,Te);let Oe=G.index,je=1;if(W.wireframe===!0){if(Oe=ee.getWireframeAttribute(G),Oe===void 0)return;je=2}let Be=G.drawRange,ze=G.attributes.position,Pt=Be.start*je,Rn=(Be.start+Be.count)*je;be!==null&&(Pt=Math.max(Pt,be.start*je),Rn=Math.min(Rn,(be.start+be.count)*je)),Oe!==null?(Pt=Math.max(Pt,0),Rn=Math.min(Rn,Oe.count)):ze!=null&&(Pt=Math.max(Pt,0),Rn=Math.min(Rn,ze.count));let Ht=Rn-Pt;if(Ht<0||Ht===1/0)return;ve.setup(z,W,De,G,Oe);let Si,Mt=Y;if(Oe!==null&&(Si=ne.get(Oe),Mt=oe,Mt.setIndex(Si)),z.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*ke()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if(z.isLine){let Ke=W.linewidth;Ke===void 0&&(Ke=1),ae.setLineWidth(Ke*ke()),z.isLineSegments?Mt.setMode(k.LINES):z.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else z.isPoints?Mt.setMode(k.POINTS):z.isSprite&&Mt.setMode(k.TRIANGLES);if(z.isBatchedMesh)Mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Mt.renderInstances(Pt,Ht,z.count);else if(G.isInstancedBufferGeometry){let Ke=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xl=Math.min(G.instanceCount,Ke);Mt.renderInstances(Pt,Ht,xl)}else Mt.render(Pt,Ht)};function st(w,U,G){w.transparent===!0&&w.side===Yt&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Po(w,U,G),w.side=ci,w.needsUpdate=!0,Po(w,U,G),w.side=Yt):Po(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),m=Ce.get(G),m.init(),x.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==G&&w.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(y._useLegacyLights);let W=new Set;return w.traverse(function(z){let be=z.material;if(be)if(Array.isArray(be))for(let Te=0;Te<be.length;Te++){let De=be[Te];st(De,G,z),W.add(De)}else st(be,G,z),W.add(be)}),x.pop(),m=null,W},this.compileAsync=function(w,U,G=null){let W=this.compile(w,U,G);return new Promise(z=>{function be(){if(W.forEach(function(Te){Se.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){z(w);return}setTimeout(be,10)}_e.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ct=null;function zt(w){ct&&ct(w)}function fn(){pn.stop()}function bt(){pn.start()}let pn=new Lm;pn.setAnimationLoop(zt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(w){ct=w,qe.setAnimationLoop(w),w===null?pn.stop():pn.start()},qe.addEventListener("sessionstart",fn),qe.addEventListener("sessionend",bt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(U),U=qe.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,U,A),m=Ce.get(w,x.length),m.init(),x.push(m),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(xe),se=this.localClippingEnabled,X=Fe.init(this.clippingPlanes,se),g=ge.get(w,f.length),g.init(),f.push(g),si(w,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(j,q),this.info.render.frame++,X===!0&&Fe.beginShadows();let G=m.state.shadowsArray;if(te.render(G,w,U),X===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(g,w),m.setupLights(y._useLegacyLights),U.isArrayCamera){let W=U.cameras;for(let z=0,be=W.length;z<be;z++){let Te=W[z];$d(g,w,Te,Te.viewport)}}else $d(g,w,U);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,U),ve.resetDefaultState(),D=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function si(w,U,G,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){W&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let Te=ie.update(w),De=w.material;De.visible&&g.push(w,Te,De,G,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){let Te=ie.update(w),De=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ie.copy(Te.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(De)){let Oe=Te.groups;for(let je=0,Be=Oe.length;je<Be;je++){let ze=Oe[je],Pt=De[ze.materialIndex];Pt&&Pt.visible&&g.push(w,Te,Pt,G,Ie.z,ze)}}else De.visible&&g.push(w,Te,De,G,Ie.z,null)}}let be=w.children;for(let Te=0,De=be.length;Te<De;Te++)si(be[Te],U,G,W)}function $d(w,U,G,W){let z=w.opaque,be=w.transmissive,Te=w.transparent;m.setupLightsView(G),X===!0&&Fe.setGlobalState(y.clippingPlanes,G),be.length>0&&m0(z,be,U,G),W&&ae.viewport(M.copy(W)),z.length>0&&Co(z,U,G),be.length>0&&Co(be,U,G),Te.length>0&&Co(Te,U,G),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function m0(w,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let be=K.isWebGL2;me===null&&(me=new Ni(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Oa:ss,minFilter:li,samples:be?4:0})),y.getDrawingBufferSize(Pe),be?me.setSize(Pe.x,Pe.y):me.setSize(yc(Pe.x),yc(Pe.y));let Te=y.getRenderTarget();y.setRenderTarget(me),y.getClearColor(Z),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let De=y.toneMapping;y.toneMapping=is,Co(w,G,W),T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me);let Oe=!1;for(let je=0,Be=U.length;je<Be;je++){let ze=U[je],Pt=ze.object,Rn=ze.geometry,Ht=ze.material,Si=ze.group;if(Ht.side===Yt&&Pt.layers.test(W.layers)){let Mt=Ht.side;Ht.side=an,Ht.needsUpdate=!0,qd(Pt,G,W,Rn,Ht,Si),Ht.side=Mt,Ht.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(me),T.updateRenderTargetMipmap(me)),y.setRenderTarget(Te),y.setClearColor(Z,L),y.toneMapping=De}function Co(w,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let z=0,be=w.length;z<be;z++){let Te=w[z],De=Te.object,Oe=Te.geometry,je=W===null?Te.material:W,Be=Te.group;De.layers.test(G.layers)&&qd(De,U,G,Oe,je,Be)}}function qd(w,U,G,W,z,be){w.onBeforeRender(y,U,G,W,z,be),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,U,G,W,w,be),z.transparent===!0&&z.side===Yt&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,y.renderBufferDirect(G,U,W,z,w,be),z.side=ci,z.needsUpdate=!0,y.renderBufferDirect(G,U,W,z,w,be),z.side=Yt):y.renderBufferDirect(G,U,W,z,w,be),w.onAfterRender(y,U,G,W,z,be)}function Po(w,U,G){U.isScene!==!0&&(U=Ee);let W=Se.get(w),z=m.state.lights,be=m.state.shadowsArray,Te=z.state.version,De=ye.getParameters(w,z.state,be,U,G),Oe=ye.getProgramCacheKey(De),je=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?F:_).get(w.envMap||W.environment),je===void 0&&(w.addEventListener("dispose",le),je=new Map,W.programs=je);let Be=je.get(Oe);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===Te)return Xd(w,De),Be}else De.uniforms=ye.getUniforms(w),w.onBuild(G,De,y),w.onBeforeCompile(De,y),Be=ye.acquireProgram(De,Oe),je.set(Oe,Be),W.uniforms=De.uniforms;let ze=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Fe.uniform),Xd(w,De),W.needsLights=y0(w),W.lightsStateVersion=Te,W.needsLights&&(ze.ambientLightColor.value=z.state.ambient,ze.lightProbe.value=z.state.probe,ze.directionalLights.value=z.state.directional,ze.directionalLightShadows.value=z.state.directionalShadow,ze.spotLights.value=z.state.spot,ze.spotLightShadows.value=z.state.spotShadow,ze.rectAreaLights.value=z.state.rectArea,ze.ltc_1.value=z.state.rectAreaLTC1,ze.ltc_2.value=z.state.rectAreaLTC2,ze.pointLights.value=z.state.point,ze.pointLightShadows.value=z.state.pointShadow,ze.hemisphereLights.value=z.state.hemi,ze.directionalShadowMap.value=z.state.directionalShadowMap,ze.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ze.spotShadowMap.value=z.state.spotShadowMap,ze.spotLightMatrix.value=z.state.spotLightMatrix,ze.spotLightMap.value=z.state.spotLightMap,ze.pointShadowMap.value=z.state.pointShadowMap,ze.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function jd(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Dr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Xd(w,U){let G=Se.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function g0(w,U,G,W,z){U.isScene!==!0&&(U=Ee),T.resetTextureUnits();let be=U.fog,Te=W.isMeshStandardMaterial?U.environment:null,De=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:It,Oe=(W.isMeshStandardMaterial?F:_).get(W.envMap||Te),je=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!G.morphAttributes.position,Pt=!!G.morphAttributes.normal,Rn=!!G.morphAttributes.color,Ht=is;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ht=y.toneMapping);let Si=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=Si!==void 0?Si.length:0,Ke=Se.get(W),xl=m.state.lights;if(X===!0&&(se===!0||w!==S)){let On=w===S&&W.id===D;Fe.setState(W,w,On)}let Tt=!1;W.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==xl.state.version||Ke.outputColorSpace!==De||z.isBatchedMesh&&Ke.batching===!1||!z.isBatchedMesh&&Ke.batching===!0||z.isInstancedMesh&&Ke.instancing===!1||!z.isInstancedMesh&&Ke.instancing===!0||z.isSkinnedMesh&&Ke.skinning===!1||!z.isSkinnedMesh&&Ke.skinning===!0||z.isInstancedMesh&&Ke.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ke.instancingColor===!1&&z.instanceColor!==null||Ke.envMap!==Oe||W.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Fe.numPlanes||Ke.numIntersection!==Fe.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==Be||Ke.morphTargets!==ze||Ke.morphNormals!==Pt||Ke.morphColors!==Rn||Ke.toneMapping!==Ht||K.isWebGL2===!0&&Ke.morphTargetsCount!==Mt)&&(Tt=!0):(Tt=!0,Ke.__version=W.version);let Cs=Ke.currentProgram;Tt===!0&&(Cs=Po(W,U,z));let Yd=!1,_a=!1,vl=!1,tn=Cs.getUniforms(),Ps=Ke.uniforms;if(ae.useProgram(Cs.program)&&(Yd=!0,_a=!0,vl=!0),W.id!==D&&(D=W.id,_a=!0),Yd||S!==w){tn.setValue(k,"projectionMatrix",w.projectionMatrix),tn.setValue(k,"viewMatrix",w.matrixWorldInverse);let On=tn.map.cameraPosition;On!==void 0&&On.setValue(k,Ie.setFromMatrixPosition(w.matrixWorld)),K.logarithmicDepthBuffer&&tn.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&tn.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,_a=!0,vl=!0)}if(z.isSkinnedMesh){tn.setOptional(k,z,"bindMatrix"),tn.setOptional(k,z,"bindMatrixInverse");let On=z.skeleton;On&&(K.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),tn.setValue(k,"boneTexture",On.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(tn.setOptional(k,z,"batchingTexture"),tn.setValue(k,"batchingTexture",z._matricesTexture,T));let _l=G.morphAttributes;if((_l.position!==void 0||_l.normal!==void 0||_l.color!==void 0&&K.isWebGL2===!0)&&C.update(z,G,Cs),(_a||Ke.receiveShadow!==z.receiveShadow)&&(Ke.receiveShadow=z.receiveShadow,tn.setValue(k,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ps.envMap.value=Oe,Ps.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),_a&&(tn.setValue(k,"toneMappingExposure",y.toneMappingExposure),Ke.needsLights&&b0(Ps,vl),be&&W.fog===!0&&fe.refreshFogUniforms(Ps,be),fe.refreshMaterialUniforms(Ps,W,$,H,me),Dr.upload(k,jd(Ke),Ps,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Dr.upload(k,jd(Ke),Ps,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&tn.setValue(k,"center",z.center),tn.setValue(k,"modelViewMatrix",z.modelViewMatrix),tn.setValue(k,"normalMatrix",z.normalMatrix),tn.setValue(k,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let On=W.uniformsGroups;for(let Sl=0,x0=On.length;Sl<x0;Sl++)if(K.isWebGL2){let Kd=On[Sl];Ye.update(Kd,Cs),Ye.bind(Kd,Cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cs}function b0(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function y0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,G){Se.get(w.texture).__webglTexture=U,Se.get(w.depthTexture).__webglTexture=G;let W=Se.get(w);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){let G=Se.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){A=w,R=U,E=G;let W=!0,z=null,be=!1,Te=!1;if(w){let Oe=Se.get(w);Oe.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Oe.__webglFramebuffer===void 0?T.setupRenderTarget(w):Oe.__hasExternalTextures&&T.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);let je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Te=!0);let Be=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?z=Be[U][G]:z=Be[U],be=!0):K.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?z=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[G]:z=Be,M.copy(w.viewport),O.copy(w.scissor),B=w.scissorTest}else M.copy(Q).multiplyScalar($).floor(),O.copy(J).multiplyScalar($).floor(),B=de;if(ae.bindFramebuffer(k.FRAMEBUFFER,z)&&K.drawBuffers&&W&&ae.drawBuffers(w,z),ae.viewport(M),ae.scissor(O),ae.setScissorTest(B),be){let Oe=Se.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Oe.__webglTexture,G)}else if(Te){let Oe=Se.get(w.texture),je=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.__webglTexture,G||0,je)}D=-1},this.readRenderTargetPixels=function(w,U,G,W,z,be,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){ae.bindFramebuffer(k.FRAMEBUFFER,De);try{let Oe=w.texture,je=Oe.format,Be=Oe.type;if(je!==Mn&&re.convert(je)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ze=Be===Oa&&(_e.has("EXT_color_buffer_half_float")||K.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Be!==ss&&re.convert(Be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Li&&(K.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&G>=0&&G<=w.height-z&&k.readPixels(U,G,W,z,re.convert(je),re.convert(Be),be)}finally{let Oe=A!==null?Se.get(A).__webglFramebuffer:null;ae.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(w,U,G=0){let W=Math.pow(2,-G),z=Math.floor(U.image.width*W),be=Math.floor(U.image.height*W);T.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,w.x,w.y,z,be),ae.unbindTexture()},this.copyTextureToTexture=function(w,U,G,W=0){let z=U.image.width,be=U.image.height,Te=re.convert(G.format),De=re.convert(G.type);T.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,w.x,w.y,z,be,Te,De,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Te,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,w.x,w.y,Te,De,U.image),W===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G,W,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let be=w.max.x-w.min.x+1,Te=w.max.y-w.min.y+1,De=w.max.z-w.min.z+1,Oe=re.convert(W.format),je=re.convert(W.type),Be;if(W.isData3DTexture)T.setTexture3D(W,0),Be=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);let ze=k.getParameter(k.UNPACK_ROW_LENGTH),Pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Rn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ht=k.getParameter(k.UNPACK_SKIP_ROWS),Si=k.getParameter(k.UNPACK_SKIP_IMAGES),Mt=G.isCompressedTexture?G.mipmaps[z]:G.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(Be,z,U.x,U.y,U.z,be,Te,De,Oe,je,Mt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Be,z,U.x,U.y,U.z,be,Te,De,Oe,Mt.data)):k.texSubImage3D(Be,z,U.x,U.y,U.z,be,Te,De,Oe,je,Mt),k.pixelStorei(k.UNPACK_ROW_LENGTH,ze),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Rn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ht),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Si),z===0&&W.generateMipmaps&&k.generateMipmap(Be),ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ae.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,ae.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$h?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Vs:Em}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vs?at:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Rh=class extends ui{};Rh.prototype.isWebGL1Renderer=!0;Tc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},En=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},za=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new P,Ha=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xp=new P,Yp=new mt,Kp=new mt,PM=new P,Zp=new Ve,ac=new P,nh=new In,Jp=new Ve,ih=new Ui,Rc=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Df,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ac),this.boundingBox.expandByPoint(ac)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ac),this.boundingSphere.expandByPoint(ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nh.copy(this.boundingSphere),nh.applyMatrix4(s),e.ray.intersectsSphere(nh)!==!1&&(Jp.copy(s).invert(),ih.copy(e.ray).applyMatrix4(Jp),!(this.boundingBox!==null&&ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ih)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Yp.fromBufferAttribute(s.attributes.skinIndex,e),Kp.fromBufferAttribute(s.attributes.skinWeight,e),Xp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Kp.getComponent(r);if(a!==0){let o=Yp.getComponent(r);Zp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(PM.copy(Xp).applyMatrix4(Zp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ga=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ch=class extends Vt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Lt,h=Lt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qp=new Ve,LM=new Ve,Cc=class i{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:LM;Qp.multiplyMatrices(o,t[r]),Qp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ch(t,e,e,Mn,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ga),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},qs=class extends ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Tr=new Ve,em=new Ve,oc=[],tm=new wt,IM=new Ve,Ca=new Ge,Pa=new In,Pc=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,IM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),tm.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(tm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Pa.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(Pa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(n),e.ray.intersectsSphere(Pa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),em.multiplyMatrices(n,Tr),Ca.matrixWorld=em,Ca.raycast(e,oc);for(let a=0,o=oc.length;a<o;a++){let c=oc[a];c.instanceId=r,c.object=this,t.push(c)}oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Gr=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},nm=new P,im=new P,sm=new Ve,sh=new Ui,cc=new In,Vr=class extends St{constructor(e=new Ot,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)nm.fromBufferAttribute(t,s-1),im.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=nm.distanceTo(im);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;sm.copy(s).invert(),sh.copy(e.ray).applyMatrix4(sm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,p=this.isLineSegments?2:1,b=n.index,m=n.attributes.position;if(b!==null){let f=Math.max(0,a.start),x=Math.min(b.count,a.start+a.count);for(let y=f,v=x-1;y<v;y+=p){let R=b.getX(y),E=b.getX(y+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,E),sh.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=f,v=x-1;y<v;y+=p){if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),sh.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},rm=new P,am=new P,Va=class extends Vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rm.fromBufferAttribute(t,s),am.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rm.distanceTo(am);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lc=class extends Vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Wa=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},om=new Ve,Ph=new Ui,lc=new In,hc=new P,Ic=class extends St{constructor(e=new Ot,t=new Wa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(s),lc.radius+=r,e.ray.intersectsSphere(lc)===!1)return;om.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(om);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let b=d,g=p;b<g;b++){let m=l.getX(b);hc.fromBufferAttribute(u,m),cm(hc,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=d,g=p;b<g;b++)hc.fromBufferAttribute(u,b),cm(hc,b,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Wr=class extends Vt{constructor(e,t,n,s,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},$r=class extends Vt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},qr=class i extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new Re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},di=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],b=0,g=[],m=n/2,f=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(p,2));function x(){let v=new P,R=new P,E=0,A=(t-e)/n;for(let D=0;D<=r;D++){let S=[],M=D/r,O=M*(t-e)+e;for(let B=0;B<=s;B++){let Z=B/s,L=Z*c+o,N=Math.sin(L),H=Math.cos(L);R.x=O*N,R.y=-M*n+m,R.z=O*H,u.push(R.x,R.y,R.z),v.set(N,A,H).normalize(),d.push(v.x,v.y,v.z),p.push(Z,1-M),S.push(b++)}g.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let M=g[S][D],O=g[S+1][D],B=g[S+1][D+1],Z=g[S][D+1];h.push(M,O,Z),h.push(O,B,Z),E+=6}l.addGroup(f,E,0),f+=E}function y(v){let R=b,E=new Re,A=new P,D=0,S=v===!0?e:t,M=v===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),b++;let O=b;for(let B=0;B<=s;B++){let L=B/s*c+o,N=Math.cos(L),H=Math.sin(L);A.x=S*H,A.y=m*M,A.z=S*N,u.push(A.x,A.y,A.z),d.push(0,M,0),E.x=N*.5+.5,E.y=H*.5*M+.5,p.push(E.x,E.y),b++}for(let B=0;B<s;B++){let Z=R+B,L=O+B;v===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),D+=3}l.addGroup(f,D,v===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jr=class i extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,p=new P,b=new Re;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),b.x=(p.x/t+1)/2,b.y=(p.y/t+1)/2,h.push(b.x,b.y)}u+=d}for(let g=0;g<s;g++){let m=g*(n+1);for(let f=0;f<n;f++){let x=f+m,y=x,v=x+n+1,R=x+n+2,E=x+1;o.push(y,v,E),o.push(v,R,E)}}this.setIndex(o),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Dc=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let b=0;b<=s;b++){let g=b/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(b/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let b=1;b<=s;b++){let g=(s+1)*p+b-1,m=(s+1)*(p-1)+b-1,f=(s+1)*(p-1)+b,x=(s+1)*p+b;a.push(g,m,x),a.push(m,f,x)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Xr=class extends wn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Kt=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Am,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends Kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};as=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lh=class extends as{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rp,endingEnd:rp}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ap:r=e,o=2*t-n;break;case op:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ap:a=e,c=2*n-t;break;case op:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,b=(n-t)/(s-t),g=b*b,m=g*b,f=-d*m+2*d*g-d*b,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*b+1,y=(-1-p)*m+(1.5+p)*g+.5*b,v=p*m-p*g;for(let R=0;R!==o;++R)r[R]=f*a[h+R]+x*a[l+R]+y*a[c+R]+v*a[u+R];return r}},Ih=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Dh=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uc(t,this.TimeBufferType),this.values=uc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uc(e.times,Array),values:uc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rs:t=this.InterpolantFactoryMethodDiscrete;break;case Di:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return Di;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&DM(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let b=0;b!==n;++b){let g=t[u+b];if(g!==t[d+b]||g!==t[p+b]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Di;os=class extends Bn{};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=rs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;Nc=class extends Bn{};Nc.prototype.ValueTypeName="color";ki=class extends Bn{};ki.prototype.ValueTypeName="number";Nh=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)on.slerpFlat(r,0,a,l-o,a,l,c);return r}},fi=class extends Bn{InterpolantFactoryMethodLinear(e){return new Nh(this.times,this.values,this.getValueSize(),e)}};fi.prototype.ValueTypeName="quaternion";fi.prototype.DefaultInterpolation=Di;fi.prototype.InterpolantFactoryMethodSmooth=void 0;cs=class extends Bn{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=rs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;Bi=class extends Bn{};Bi.prototype.ValueTypeName="vector";Uc=class{constructor(e,t=-1,n,s=fy){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(OM(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=NM(c);c=lm(c,1,h),l=lm(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ki(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,b,g){if(p.length!==0){let m=[],f=[];Fm(p,m,f,b),m.length!==0&&g.push(new u(d,m,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},b;for(b=0;b<d.length;b++)if(d[b].morphTargets)for(let g=0;g<d[b].morphTargets.length;g++)p[d[b].morphTargets[g]]=-1;for(let g in p){let m=[],f=[];for(let x=0;x!==d[b].morphTargets.length;++x){let y=d[b];m.push(y.time),f.push(y.morphTarget===g?1:0)}s.push(new ki(".morphTargetInfluence["+g+"]",m,f))}c=p.length*a}else{let p=".bones["+t[u].name+"]";n(Bi,p+".position",d,"pos",s),n(fi,p+".quaternion",d,"rot",s),n(Bi,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};ts={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Uh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],b=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return b}return null}}},FM=new Uh,Jn=class{constructor(e){this.manager=e!==void 0?e:FM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jn.DEFAULT_MATERIAL_NAME="__DEFAULT";Ci={},Oh=class extends Error{constructor(e,t){super(e),this.response=t}},ls=class extends Jn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ci[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,b=p!==0,g=0,m=new ReadableStream({start(f){x();function x(){u.read().then(({done:y,value:v})=>{if(y)f.close();else{g+=v.byteLength;let R=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:p});for(let E=0,A=h.length;E<A;E++){let D=h[E];D.onProgress&&D.onProgress(R)}f.enqueue(v),x()}})}}});return new Response(m)}else throw new Oh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(b=>p.decode(b))}}}).then(l=>{ts.add(e,l);let h=Ci[e];delete Ci[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Fh=class extends Jn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ts.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Fa("img");function c(){h(),ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},Yr=class extends Jn{constructor(e){super(e)}load(e,t,n,s){let r=new Vt,a=new Fh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},$a=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},rh=new Ve,hm=new P,um=new P,qa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(hm),um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(um),t.updateMatrixWorld(),rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kh=class extends qa{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oc=class extends $a{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new kh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dm=new Ve,La=new P,ah=new P,Bh=class extends qa{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),La.setFromMatrixPosition(e.matrixWorld),n.position.copy(La),ah.copy(n.position),ah.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ah),n.updateMatrixWorld(),s.makeTranslation(-La.x,-La.y,-La.z),dm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dm)}},hs=class extends $a{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zh=class extends qa{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pi=class extends $a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},us=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Fc=class extends Jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ts.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ts.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ts.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ts.add(e,c),r.manager.itemStart(e)}},Xh="\\[\\]\\.:\\/",kM=new RegExp("["+Xh+"]","g"),Yh="[^"+Xh+"]",BM="[^"+Xh.replace("\\.","")+"]",zM=/((?:WC+[\/:])*)/.source.replace("WC",Yh),HM=/(WCOD+)?/.source.replace("WCOD",BM),GM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),VM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),WM=new RegExp("^"+zM+HM+GM+VM+"$"),$M=["material","materials","bones","map"],Hh=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kM,"")}static parseTrackName(e){let t=WM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$M.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Hh;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];hA=new Float32Array(1),kc=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},Bc=class{constructor(e,t,n=0,s=1/0){this.ray=new Ui(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Gh(e,this,n,t),n.sort(fm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Gh(e[s],this,n,t);return n.sort(fm),n}};ja=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},dc=new wt,zc=class extends Va{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Ot;r.setIndex(new ot(n,1)),r.setAttribute("position",new ot(s,3)),super(r,new Gr({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&dc.setFromObject(this.object),dc.isEmpty())return;let t=dc.min,n=dc.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh)});function zn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ja.copy(e),Ja[n]=0,Ja.normalize();let l=.5*a/(a+o),h=1-Ja.angleTo(i)/c;return Math.sign(Ja[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Ja,Jr,Kh=He(()=>{hn();Ja=new P;Jr=class extends Oi{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new P,c=new P,l=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,b=new P,g=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:b.set(1,0,0),d[f+0]=zn(b,c,"z","y",r,n),d[f+1]=1-zn(b,c,"y","z",r,t);break;case 1:b.set(-1,0,0),d[f+0]=1-zn(b,c,"z","y",r,n),d[f+1]=1-zn(b,c,"y","z",r,t);break;case 2:b.set(0,1,0),d[f+0]=1-zn(b,c,"x","z",r,e),d[f+1]=zn(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),d[f+0]=1-zn(b,c,"x","z",r,e),d[f+1]=1-zn(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),d[f+0]=1-zn(b,c,"x","y",r,e),d[f+1]=1-zn(b,c,"y","x",r,t);break;case 5:b.set(0,0,-1),d[f+0]=zn(b,c,"x","y",r,e),d[f+1]=1-zn(b,c,"y","x",r,t);break}}}});function km(i,e){let t=[],n=new gt,s=new gt,r=()=>{let g=new ln({color:e,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new we("#fff")});return g.name="tint",t.push(g),g},a=()=>{let g=new Kt({color:e,roughness:.5});return g.name="tint",t.push(g),g},o=new Kt({color:5979942,roughness:.5,name:"frame"}),c=new Kt({color:2499103,roughness:.45}),l=new Kt({color:11570519,metalness:1,roughness:.3}),h=(g,m,f=0,x=0,y=0,v,R=s)=>{let E=new Ge(g,m);return E.position.set(f,x,y),v&&E.rotation.set(...v),E.castShadow=E.receiveShadow=!0,R.add(E),E},u=(g,m)=>new di(g,g*.75,m,14),d=(g,m,f=.2)=>[-1,1].forEach(x=>[-1,1].forEach(y=>h(u(.04,f),o,x*g,f/2,y*m))),p=(g,m,f,x=o)=>[-1,1].forEach(y=>[-1,1].forEach(v=>h(u(.035,f),x,y*g,f/2,v*m))),b=(g,m,f,x)=>{let y=new gt;y.position.set(g,0,m),y.rotation.y=f,s.add(y),[-1,1].forEach(v=>[-1,1].forEach(R=>h(u(.024,.44),o,v*.21,.22,R*.2,0,y))),h(it(.5,.08,.48,.03),x,0,.47,0,0,y),h(it(.5,.52,.06,.03),x,0,.78,-.22,[-.08,0,0],y)};if(i==="sofa"){let g=r();d(1.15,.4),h(it(2.6,.3,1.05,.08),g,0,.38,0);for(let m=-1;m<=1;m++)h(it(.82,.26,.84,.12),g,m*.84,.66,.1),h(it(.82,.6,.28,.14),g,m*.84,1.05,-.4,[-.14,0,0]);[-1,1].forEach(m=>h(it(.28,.62,1.05,.1),g,m*1.32,.7,0))}else if(i==="chaise"){let g=r();d(1.15,.4),h(it(1.8,.3,1.05,.08),g,-.45,.38,0),h(it(.9,.3,1.75,.08),g,.9,.38,.35),[-.9,0].forEach(m=>h(it(.84,.26,.84,.12),g,m,.66,.1)),h(it(.86,.26,1.55,.12),g,.9,.66,.42),h(it(2.68,.6,.28,.14),g,0,1.05,-.4,[-.14,0,0]),h(it(.28,.62,1.05,.1),g,-1.49,.7,0)}else if(i==="armchair"){let g=r();d(.45,.4,.22),h(it(1.1,.3,1,.08),g,0,.4,0),h(it(.88,.22,.82,.1),g,0,.64,.08),h(it(1,.8,.26,.14),g,0,.98,-.4,[-.16,0,0]),[-1,1].forEach(m=>h(it(.2,.5,.9,.08),g,m*.55,.66,0))}else if(i==="bar"){let g=r();p(.2,.2,.72,c),h(new Dc(.2,.015,8,32),l,0,.3,0,[Math.PI/2,0,0]),h(it(.5,.1,.5,.04),g,0,.77,0),h(it(.46,.26,.07,.03),g,0,1,-.22,[-.1,0,0])}else if(i==="dchair")b(0,0,0,r());else if(i==="dtable"){let g=a();h(it(2,.07,1,.02),g,0,.75,0),p(.9,.42,.72,g)}else if(i==="coffee"){let g=a();h(new di(.9,.9,.07,64),g,0,.62,0),h(new di(.62,.62,.04,64),g,0,.22,0);for(let m=0;m<4;m++){let f=m*Math.PI/2+Math.PI/4;h(u(.05,.6),g,Math.cos(f)*.62,.3,Math.sin(f)*.62)}}else if(i==="console"){let g=a();h(it(1.6,.05,.4,.02),g,0,.8,0),h(it(1.5,.03,.34,.01),g,0,.25,0),p(.74,.16,.78,g)}else if(i==="dset"){let g=a(),m=r();h(it(1.6,.07,.9,.02),g,0,.75,0),p(.7,.38,.72,g),[-.4,.4].forEach(f=>{b(f,-.75,0,m),b(f,.75,Math.PI,m)})}else if(i==="ottoman"){let g=r();d(.45,.45,.14),h(it(1.2,.5,1.2,.2),g,0,.4,0)}else if(i==="headboard"){let g=r();h(it(2,.9,.12,.06),g,0,.85,0),[-1,1].forEach(m=>h(it(.08,1.3,.08,.02),o,m*.96,.65,-.06));for(let m=-2;m<=2;m++)h(it(.3,.7,.02,.01),g,m*.36,.85,.07)}else if(i==="bedside"){let g=a();p(.22,.15,.2),h(it(.55,.45,.4,.03),g,0,.43,0),h(it(.5,.16,.01,.005),c,0,.5,.205),h(new di(.015,.015,.07,12),l,0,.5,.24,[Math.PI/2,0,0])}else if(i==="dresser"){let g=a();p(.7,.2,.15),h(it(1.6,.8,.5,.03),g,0,.55,0),[.3,.55,.8].forEach(m=>{h(it(1.5,.2,.01,.005),c,0,m-.05,.255),h(new di(.015,.015,.06,12),l,0,m-.05,.29,[Math.PI/2,0,0])})}else if(i==="tv"){let g=a();p(.82,.15,.14),h(it(1.8,.45,.42,.03),g,0,.37,0),[-.45,.45].forEach(m=>h(it(.8,.3,.02,.005),c,m,.37,.21)),h(it(1.3,.75,.04,.01),c,0,1,0),h(it(.3,.04,.2,.01),c,0,.62,0)}else{let g=r();h(it(1.2,.7,.8,.1),g,0,.35,0)}return s.scale.setScalar(qM[i]||1.2),n.add(s),n.userData={tints:t,glows:[],frames:[o]},n}var it,qM,Bm=He(()=>{hn();Kh();it=(i,e,t,n=.06)=>new Jr(i,e,t,4,n),qM={sofa:1,chaise:.9,armchair:1.7,bar:2.3,dchair:2.4,dtable:1.1,coffee:1.5,console:1.3,dset:1.2,ottoman:2.1,headboard:1.2,bedside:2.5,dresser:1.3,tv:1.3}});function Xs(i,e=512){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,e,e);let s=64,r=e/s;for(let c=0;c<s;c++)for(let l=0;l<s;l++)(c+l)%2===0?(n.fillStyle="rgba(255,255,255,.10)",n.fillRect(c*r,l*r+r*.12,r,r*.76)):(n.fillStyle="rgba(0,0,0,.12)",n.fillRect(c*r+r*.12,l*r,r*.76,r));let a=n.getImageData(0,0,e,e),o=a.data;for(let c=0;c<o.length;c+=4){let l=(Math.random()-.5)*12;o[c]+=l,o[c+1]+=l,o[c+2]+=l}return n.putImageData(a,0,0),t}async function fs(i,e,t){t={...mi,...t||{}};let n=++XM;i.forEach(r=>{r&&(r.userData.fabTok=n)});let s;try{s=await jM(e)}catch{i.forEach(r=>{r&&r.color&&r.userData.fabTok===n&&(r.map=null,r.color.set(e[1]),r.needsUpdate=!0)});return}i.forEach(r=>{if(!r||!("map"in r)||r.userData.fabTok!==n)return;let a=s.clone();a.colorSpace=at,a.wrapS=a.wrapT=Kn,a.repeat.set(t.sx,t.sy),a.rotation=t.rot*Math.PI/180,a.offset.set(t.ox,t.oy),a.anisotropy=8,a.needsUpdate=!0,r.map&&r.map!==s&&r.map.dispose(),r.map=a,r.color.set("#ffffff"),r.needsUpdate=!0})}var mi,Zh,jM,XM,Ys=He(()=>{hn();mi={sx:1,sy:1,rot:0,ox:0,oy:0};Zh=new Map,jM=i=>{let e=i[2]+"|"+i[1]+"|"+(i[3]||"");return Zh.has(e)||Zh.set(e,i[3]?new Yr().loadAsync(i[3]):Promise.resolve(new $r(Xs(i[1],512)))),Zh.get(e)},XM=0});var Hn,Qn,Hm,YM,KM,ZM,Jh,$c,JM,Qh,QM,zm,Dn,ps,un,Wt,eu,gi,tu,nu,ew,tw,nw,iw,qc,sw,rw,xA,iu,An,Gm,pt,ei,su,yn=He(()=>{Fn();Af();Bm();Ys();Hn=dt,Qn=pe,Hm=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-"),YM=new Set([...Hn.deleted||[],...Qn.deleted||[]]),KM=new Set([...Hn.deletedFabrics||[],...Qn.deletedFabrics||[]]),ZM=Mf.map(([i,e])=>({id:Hm(i),name:i,hex:e,type:"Wood",desc:`${i} wood finish.`})),Jh=Sf.map(([i,e])=>({id:Hm(i),name:i,hex:e,type:"Fabric",desc:Ef[i]||""})),$c=i=>["fabric","leather","velvet","linen"].includes(String(i||"").toLowerCase()),JM=i=>$c(i.type)?["fabric"]:["Wood","Metal"].includes(i.type)?["frame"]:[],Qh=[...Jh,...ZM,...Hn.fabrics||[],...Hn.materials||[],...Qn.addedFabrics||[]].filter(i=>!KM.has(i.id)).map(i=>{let e={type:i.type||"Fabric",desc:"",...i,...Hn.fabricEdits?.[i.id]||{},...Qn.fabricEdits?.[i.id]||{}};return{...e,finishTypes:Qn.materialFinishTypes?.[i.id]??Hn.materialFinishTypes?.[i.id]??e.finishTypes??JM(e)}});Qh.length||Qh.push({id:"oyster",name:"Oyster",hex:"#d4cabb",type:"Fabric",desc:""});QM=Qn.materialOrder??Hn.materialOrder??[],zm=new Map(QM.map((i,e)=>[i,e])),Dn=Qh.map((i,e)=>({material:{...i,image:Mi("fabric:"+i.id)||i.image||null},i:e})).sort((i,e)=>(zm.get(i.material.id)??Number.MAX_SAFE_INTEGER)-(zm.get(e.material.id)??Number.MAX_SAFE_INTEGER)||i.i-e.i).map(({material:i})=>i);if(!Dn.some(i=>$c(i.type))){let i=Jh[0].id;for(;Dn.some(e=>e.id===i);)i+="-fallback";Dn.push({...Jh[0],id:i,image:null})}ps=Dn.filter(i=>$c(i.type)),un=Dn.map(i=>[i.name,i.hex,i.id,i.image,i.desc,i.type]),Wt=un.filter(i=>$c(i[5])),eu=(()=>{let i=qt();return i&&i.length?i:wf})(),gi=un.filter(i=>i[5]==="Wood"||i[5]==="Metal"),tu={...Hn.pieceDefaults||{},...Qn.pieceDefaults||{}},nu=(i,e)=>Qn.pieceFinishAvailability?.[i]?.[e]??Hn.pieceFinishAvailability?.[i]?.[e]??!0,ew=(i,e)=>{let t=un.find(n=>n[2]===tu[i]?.[e])||un.find(n=>n[5]==="Wood"||n[5]==="Metal")||un[0];return t?[t]:[]},tw=i=>{let e=Wt.find(t=>t[2]===tu[i]?.fabric)||Wt.find(t=>Dn.find(n=>n.id===t[2])?.finishTypes?.includes("fabric"))||Wt[0];return e?[e]:[]},nw=(i,e,t)=>{let n=ew(e,t)[0];return n&&!i.some(s=>s[2]===n[2])?[n,...i]:i},iw=(i,e)=>{let t=tw(e)[0];return t&&!i.some(n=>n[2]===t[2])?[t,...i]:i},qc=(i,e)=>{if(e==="fabric"){let n=Wt.filter(s=>Dn.find(r=>r.id===s[2])?.finishTypes?.includes("fabric"));return iw(n,i)}let t=un.filter(n=>Dn.find(s=>s.id===n[2])?.finishTypes?.includes(e));return nw(t,i,e)},sw=i=>nu(i,"fabric")?qc(i,"fabric"):[],rw=(i,e)=>nu(i,e)?qc(i,e):[],xA=un[0],iu=(i,e=null)=>e===null?i:`finish:${e}:${i}`,An=(i,e,t=null)=>{let n=iu(e,t),s=t===null||t==="fabric"?e:null,r=Hn.mapping?.[i]||{},a=Qn.mapping?.[i]||{};return{...mi,...r[n]||(s?r[s]:null)||{},...a[n]||(s?a[s]:null)||{}}},Gm=[...(Hn.products||[]).map(i=>({...i})),...(Qn.added||[]).map(i=>({...i,added:!0}))].map(i=>({kind:i.id,tag:"",mat:"",desc:"",dims:[100,100,100],...i,sub:i.sub||i.cat}));Gm.forEach(i=>{i.model&&(Hn.models[i.id]=i.model)});pt=[...Tl,...Gm].filter(i=>!YM.has(i.id)).map(i=>{let e=sw(i.id),t=eu.filter(n=>nu(i.id,n.id)).map(n=>({...n,finishes:rw(i.id,n.id)}));return{...i,...Qn.products[i.id]||{},fabrics:e,finishTypes:t,defaults:tu[i.id]||{}}}),ei=(()=>{let i=_f.map(e=>pt.find(t=>t.id===e)).filter(Boolean);return i.length?i:pt.slice(0,4)})(),su=(i,e)=>km(Tl.find(t=>t.id===i)?.kind||i,e)});function ru(i,e){if(e===wm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Za||e===Gc){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Za)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Vm=He(()=>{hn()});function aw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function lw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Kt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Ks(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hw(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function uw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dw(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cu(t.attributes):e=i.indices+":"+cu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+cu(i.targets[n]);return e}function cu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Iu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function mw(i,e,t){let n=e.attributes,s=new wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=Iu(Qr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,b=d.max;if(p!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),d.normalized){let g=Iu(Qr[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new In;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function jm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Lu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ht.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),gs(i,e),mw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hw(i,e.targets,t):i})}var jc,Qe,lu,hu,uu,du,fu,pu,mu,gu,bu,yu,xu,vu,_u,Su,Mu,wu,Eu,Xm,Qa,Wm,Au,Tu,Ru,Cu,Xc,ow,Pu,Gn,Qr,$m,qm,au,Lu,ms,cw,ou,pw,Du,Ym=He(()=>{hn();Vm();jc=class extends Jn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new du(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Eu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=us.extractUrlBase(e);a=us.resolveURL(l,this.path)}else a=us.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ls(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Xm){try{a[Qe.KHR_BINARY_GLTF]=new Au(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Du(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:a[u]=new hu;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Tu(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[u]=new Ru;break;case Qe.KHR_MESH_QUANTIZATION:a[u]=new Cu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},lu=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],It);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hs(h),l.distance=u;break;case"spot":l=new Oc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,gs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},hu=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){let s=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(o,o)}return Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,at)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],It),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},yu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,at)),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Su=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Mu=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},wu=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},Eu=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Gn.TRIANGLES&&l.mode!==Gn.TRIANGLE_STRIP&&l.mode!==Gn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let b of u){let g=new Ve,m=new P,f=new on,x=new P(1,1,1),y=new Pc(b.geometry,b.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,g.compose(m,f,x));for(let v in c)if(v==="_COLOR_0"){let R=c[v];y.instanceColor=new qs(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&b.geometry.setAttribute(v,c[v]);St.prototype.copy.call(y,b),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Xm="glTF",Qa=12,Wm={JSON:1313821514,BIN:5130562},Au=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Qa,r=new DataView(e,Qa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Wm.JSON){let l=new Uint8Array(e,Qa+a,o);this.content=n.decode(l)}else if(c===Wm.BIN){let l=Qa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Tu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Lu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Lu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=Qr[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let b in p.attributes){let g=p.attributes[b],m=c[b];m!==void 0&&(g.normalized=m)}u(p)},o,l,It,d)})})}},Ru=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Cu=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Xc=class extends as{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,b=e*l,g=b-l,m=-2*p+3*d,f=p-d,x=1-m,y=f-d+u;for(let v=0;v!==o;v++){let R=a[g+v+o],E=a[g+v+c]*h,A=a[b+v+o],D=a[b+v]*h;r[v]=x*R+y*E+m*A+f*D}return r}},ow=new on,Pu=class extends Xc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ow.fromArray(r).normalize().toArray(r),r}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$m={9728:Lt,9729:jt,9984:Or,9985:Ka,9986:zs,9987:li},qm={33071:bn,33648:Ws,10497:Kn},au={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cw={CUBICSPLINE:void 0,LINEAR:Di,STEP:rs},ou={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};pw=new Ve,Du=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Yr(this.options.manager):this.textureLoader=new Fc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ls(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ks(r,o,s),gs(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=au[s.type],o=Qr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new ot(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=au[s.type],l=Qr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0,g,m;if(p&&p!==u){let f=Math.floor(d/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,y=t.cache.get(x);y||(g=new l(o,f*p,s.count*p/h),y=new za(g,p/h),t.cache.add(x,y)),m=new Ha(y,c,d%p/h,b)}else o===null?g=new l(s.count*c):g=new l(o,d,s.count*c),m=new ot(g,c,b);if(s.sparse!==void 0){let f=au.SCALAR,x=Qr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,R=new x(a[1],y,s.sparse.count*f),E=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new ot(m.array.slice(),m.itemSize,m.normalized));for(let A=0,D=R.length;A<D;A++){let S=R[A];if(m.setX(S,E[A*c]),c>=2&&m.setY(S,E[A*c+1]),c>=3&&m.setZ(S,E[A*c+2]),c>=4&&m.setW(S,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=$m[d.magFilter]||jt,h.minFilter=$m[d.minFilter]||li,h.wrapS=qm[d.wrapS]||Kn,h.wrapT=qm[d.wrapT]||Kn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let b=d;t.isImageBitmapLoader===!0&&(b=function(g){let m=new Vt(g);m.needsUpdate=!0,d(m)}),t.load(us.resolveURL(u,r.path),b,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||fw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Wa,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gr,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Kt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let u=s[Qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],It),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,at)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Yt);let h=r.alphaMode||ou.OPAQUE;if(h===ou.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ou.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==cn){let u=r.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],It)}return r.emissiveTexture!==void 0&&a!==cn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,at)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),gs(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ks(s,u,r),u})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return jm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=dw(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=jm(new Ot,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?lw(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,b=h.length;p<b;p++){let g=h[p],m=a[p],f,x=l[p];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Rc(g,x):new Ge(g,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?f.geometry=ru(f.geometry,Gc):m.mode===Gn.TRIANGLE_FAN&&(f.geometry=ru(f.geometry,Za));else if(m.mode===Gn.LINES)f=new Va(g,x);else if(m.mode===Gn.LINE_STRIP)f=new Vr(g,x);else if(m.mode===Gn.LINE_LOOP)f=new Lc(g,x);else if(m.mode===Gn.POINTS)f=new Ic(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&uw(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),gs(f,r),m.extensions&&Ks(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,b=u.length;p<b;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ks(s,u[0],r),u[0];let d=new gt;r.extensions&&Ks(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,b=u.length;p<b;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(ds.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Hr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Cc(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],b=s.samplers[p.sampler],g=p.target,m=g.node,f=s.parameters!==void 0?s.parameters[b.input]:b.input,x=s.parameters!==void 0?s.parameters[b.output]:b.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(b),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],b=u[2],g=u[3],m=u[4],f=[];for(let x=0,y=d.length;x<y;x++){let v=d[x],R=p[x],E=b[x],A=g[x],D=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let S=n._createAnimationTracks(v,R,E,A,D);if(S)for(let M=0;M<S.length;M++)f.push(S[M])}return new Uc(r,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,pw)});for(let p=0,b=u.length;p<b;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ga:l.length>1?h=new gt:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),gs(h,r),r.extensions&&Ks(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new gt;n.name&&(r.name=s.createUniqueName(n.name)),gs(r,n),n.extensions&&Ks(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof wn||d instanceof Vt)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];ms[r.path]===ms.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ms[r.path]){case ms.weights:l=ki;break;case ms.rotation:l=fi;break;case ms.position:case ms.scale:l=Bi;break;default:switch(n.itemSize){case 1:l=ki;break;case 2:case 3:default:l=Bi;break}break}let h=s.interpolation!==void 0?cw[s.interpolation]:Di,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let b=new l(c[d]+"."+ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Iu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof fi?Pu:Xc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function gw(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=o.buffer,l=o.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let p=t(u,d,new Int8Array(c),l),b=p.attributes.map(g=>g.array.buffer);p.index&&b.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},b)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{u.destroy(d)}});break}};function t(a,o,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,p,b=o.GetEncodedGeometryType(c);if(b===a.TRIANGULAR_MESH)d=new a.Mesh,p=o.DecodeArrayToMesh(c,c.byteLength,d);else if(b===a.POINT_CLOUD)d=new a.PointCloud,p=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());let g={index:null,attributes:[]};for(let m in h){let f=self[u[m]],x,y;if(l.useUniqueIDs)y=h[m],x=o.GetAttributeByUniqueId(d,y);else{if(y=o.GetAttributeId(d,a[h[m]]),y===-1)continue;x=o.GetAttribute(d,y)}let v=s(a,o,d,m,f,x);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),g.attributes.push(v)}return b===a.TRIANGULAR_MESH&&(g.index=n(a,o,d)),a.destroy(d),g}function n(a,o,c){let h=c.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(c,u,d);let p=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:p,itemSize:1}}function s(a,o,c,l,h,u){let d=u.num_components(),b=c.num_points()*d,g=b*h.BYTES_PER_ELEMENT,m=r(a,h),f=a._malloc(g);o.GetAttributeDataArrayForAllPoints(c,u,m,g,f);let x=new h(a.HEAPF32.buffer,f,b).slice();return a._free(f),{name:l,array:x,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var Nu,Yc,Km=He(()=>{hn();Nu=new WeakMap,Yc=class extends Jn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new ls(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,at).catch(n)}decodeDracoFile(e,t,n,s,r=It,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Nu.has(e)){let c=Nu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Nu.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Ot;e.index&&t.setIndex(new ot(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,a=s.array,o=s.itemSize,c=new ot(a,o);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==at)return;let n=new we;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s).convertSRGBToLinear(),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new ls(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=gw.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});var Zm,Jm=He(()=>{Zm=function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var x=new Uint8Array(f.length),y=0;y<f.length;++y){var v=f.charCodeAt(y);x[y]=v>96?v-97:v>64?v-39:v+4}for(var R=0,y=0;y<f.length;++y)x[R++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,R)}function c(f,x,y,v,R,E){var A=r.exports.sbrk,D=y+3&-4,S=A(D*v),M=A(R.length),O=new Uint8Array(r.exports.memory.buffer);O.set(R,M);var B=f(S,y,v,M,R.length);if(B==0&&E&&E(S,D,v),x.set(O.subarray(S,S+y*v)),A(S-A(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var x={object:new Worker(f),pending:0,requests:{}};return x.object.onmessage=function(y){var v=y.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function b(f){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),y=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(y),R=0;R<f;++R)u[R]=p(v);URL.revokeObjectURL(v)}function g(f,x,y,v,R){for(var E=u[0],A=1;A<u.length;++A)u[A].pending<E.pending&&(E=u[A]);return new Promise(function(D,S){var M=new Uint8Array(y),O=d++;E.pending+=f,E.requests[O]={resolve:D,reject:S},E.object.postMessage({id:O,count:f,size:x,source:M,mode:v,filter:R},[M.buffer])})}function m(f){a.then(function(){var x=f.data;try{var y=new Uint8Array(x.count*x.size);c(r.exports[x.mode],y,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(v){self.postMessage({id:x.id,count:x.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(f){b(f)},decodeVertexBuffer:function(f,x,y,v,R){c(r.exports.meshopt_decodeVertexBuffer,f,x,y,v,r.exports[l[R]])},decodeIndexBuffer:function(f,x,y,v){c(r.exports.meshopt_decodeIndexBuffer,f,x,y,v)},decodeIndexSequence:function(f,x,y,v){c(r.exports.meshopt_decodeIndexSequence,f,x,y,v)},decodeGltfBuffer:function(f,x,y,v,R,E){c(r.exports[h[R]],f,x,y,v,r.exports[l[E]])},decodeGltfBufferAsync:function(f,x,y,v,R){return u.length>0?g(f,x,y,h[v],l[R]):a.then(function(){var E=new Uint8Array(f*x);return c(r.exports[h[v]],E,f,x,y,r.exports[l[R]]),E})}}}()});function bw(){Qm??=new Yc().setDecoderPath("libs/draco/");let i=new jc;return i.setDRACOLoader(Qm),i.setMeshoptDecoder(Zm),i}async function Uu(i){let e=URL.createObjectURL(i);try{let t=await eo(e),n=new wt().setFromObject(t.scene).getSize(new P),s=Math.max(n.x,n.y,n.z)>20?.001:1;return[n.x,n.z,n.y].map(r=>Math.max(1,Math.round(r*s*100)))}finally{URL.revokeObjectURL(e)}}var Qm,eo,Kc=He(()=>{hn();Ym();Km();Jm();eo=(i,e)=>new Promise((t,n)=>bw().load(i,t,e,n))});async function yw(){if(sessionStorage.adm==="1")return!0;let i=localStorage.getItem("dekara-pw");if(!i){let t=prompt("First time here: choose a steward passcode (4+ characters).");return!t||t.length<4?!1:(localStorage.setItem("dekara-pw",await eg(t)),sessionStorage.adm="1",!0)}let e=prompt("Steward passcode:");return e&&await eg(e)===i?(sessionStorage.adm="1",!0):(alert("Passcode incorrect."),!1)}async function Lw(i){await Js(`Folder selected: ${i.name}. Checking for package.json, data/site.json and existing settings\u2026`),await i.getFileHandle("package.json");let e=await i.getDirectoryHandle("data"),t=await e.getFileHandle("site.json"),n;try{n=JSON.parse(await(await t.getFile()).text())}catch(b){throw new Error(`Could not read data/site.json as valid JSON: ${b.message}`)}if(!n||typeof n!="object"||Array.isArray(n))throw new Error("data/site.json must contain a JSON object.");for(let b of["config","files","models"])if(n[b]!==void 0&&(!n[b]||typeof n[b]!="object"||Array.isArray(n[b])))throw new Error(`data/site.json field "${b}" must be a JSON object.`);let s={...pe};delete s._removed,delete s._publishedAt;let r={...n.config||{},...s},a={...n.files||{}},o={...n.models||{}},c=new Set(pe._removed||[]),l=nf(),h=new Map;for(let b of l){let g=tf(b),m=await(await fetch(g.url)).blob(),f=Pw(b,{name:g.name,type:g.type||m.type});h.set(b,{file:g,blob:m,path:f,type:g.type||m.type})}for(let b of c)delete a[b];for(let[b,g]of h)a[b]={path:g.path,type:g.type,name:g.file.name};for(let[b,g]of h){let[,m]=b.split(":");if(b.startsWith("model:")&&(o[m]=g.path),b.startsWith("fabric:")){let f=(r.addedFabrics||[]).find(x=>x.id===m);f&&(f.image=g.path),r.fabricEdits?.[m]&&(r.fabricEdits[m]={...r.fabricEdits[m],image:g.path})}if(b.startsWith("collection:")){let f=(r.collections||[]).find(x=>x.id===m);f&&(f.image=g.path)}}r.added=(r.added||[]).map(b=>{let g=h.get("model:"+b.id);if(g)return{...b,model:g.path};if(c.has("model:"+b.id)){let m={...b};return delete m.model,m}return b}),r.collections=Zs().map(b=>{let g=h.get("collection:"+b.id),m={...b,...g?{image:g.path}:{}};return c.has("collection:"+b.id)&&delete m.image,m.pieces=b.pieces.map(f=>{let x=h.get(`piece:${b.id}:${f.id}`);if(x)return{...f,model:x.path};if(c.has(`piece:${b.id}:${f.id}`)){let y={...f};return delete y.model,y}return f}),m}),r.addedFabrics=(r.addedFabrics||[]).map(b=>{if(h.has("fabric:"+b.id))return{...b,image:h.get("fabric:"+b.id).path};if(c.has("fabric:"+b.id)){let g={...b};return delete g.image,g}return b});for(let b of c)if(b.startsWith("model:")&&delete o[b.slice(6)],b.startsWith("fabric:")&&r.fabricEdits?.[b.slice(7)]){let g={...r.fabricEdits[b.slice(7)]};delete g.image,r.fabricEdits[b.slice(7)]=g}let u=h.size+1,d=0;for(let[b,g]of h)await Js(`Copying ${d+1} of ${u-1}: ${g.path}`,d,u),await ig(i,g.path,g.blob),d++;let p={...n,config:r,files:a,models:o,version:Date.now()};return await Js(`Writing ${d+1} of ${u}: data/site.json`,d,u),await ig(i,"data/site.json",JSON.stringify(p,null,1)),d++,await Js(`Complete. Updated data/site.json and copied ${h.size} uploaded file${h.size===1?"":"s"}. Review the project folder, then commit and push from your terminal.`,d,u),sessionStorage.removeItem("repo-pub-running"),!0}function sg(){let i=window.__prod,e=document.getElementById("map-body");if(!i||!e||!i.mappingOptions?.length)return;let t=i.mappingOptions.find(p=>p.ft.id==="fabric"&&p.material[2]===i.current()[2])||i.mappingOptions[0],n=p=>document.getElementById(p),s=["sx","sy","rot","ox","oy"],r=(p,b,g,m,f)=>`<label>${b} <b id="v-${p}"></b><input type="range" id="mp-${p}" min="${g}" max="${m}" step="${f}"></label>`;e.innerHTML=`<p class="note">Choose a fabric or finish material to map. Each fabric and finish type/material has independent scale, rotation and location values.</p><label>Fabric / finish<select id="mp-f">${i.mappingOptions.map(p=>`<option value="${We(p.key)}"${p.key===t.key?" selected":""}>${We(p.label)}</option>`).join("")}</select></label>
 ${r("sx","Scale X",.05,40,.05)}${r("sy","Scale Y",.05,40,.05)}<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0"><input type="checkbox" id="mp-link" checked style="width:auto"> Link X and Y scale</label>${r("rot","Rotation (degrees)",-180,180,1)}${r("ox","Location X",-2,2,.01)}${r("oy","Location Y",-2,2,.01)}
 <p class="note" id="mp-st"></p><div class="acts"><button data-mp="lock">Lock values</button><button id="mp-all" data-mp="all">Apply to all</button><button data-mp="reset">Reset</button></div>`;let a=()=>n("mp-f").value,o=()=>Object.fromEntries(s.map(p=>[p,Number(n("mp-"+p).value)])),c=!1,l=t.key,h=()=>i.mappingOptions.find(p=>p.key===l),u=()=>{let p=h();n("mp-all").textContent=`Apply to all ${p.ft.id==="fabric"?"fabrics":`${p.ft.name.toLowerCase()} finishes`}`};Jc=()=>{c&&(Oo(i.piece.id,l,{...o(),locked:!0}),c=!1)};let d=p=>{l=p;let b=i.mapping(p);s.forEach(g=>{n("mp-"+g).value=b[g],n("v-"+g).textContent=b[g]}),n("mp-st").textContent=b.locked?"Locked. Customers see these values.":"Not locked yet. Lock to save these values for customers.",u()};e.addEventListener("change",p=>{if(p.target.id==="mp-f"){Jc();let b=a();i.selectMapping(b),d(b)}}),e.addEventListener("input",p=>{let b=p.target;/^mp-(sx|sy|rot|ox|oy)$/.test(b.id)&&(n("mp-link").checked&&(b.id==="mp-sx"||b.id==="mp-sy")&&(n("mp-sx").value=n("mp-sy").value=b.value),c=!0,s.forEach(g=>n("v-"+g).textContent=n("mp-"+g).value),i.previewMapping(l,o()),n("mp-st").textContent="Previewing. Apply changes or lock to save these values for customers.")}),e.addEventListener("click",p=>{let b=p.target.closest("[data-mp]")?.dataset.mp;if(b==="lock"&&(Oo(i.piece.id,l,{...o(),locked:!0}),c=!1,n("mp-st").textContent="Locked. Customers see these values."),b==="all"){let g=h(),m={...o(),locked:!0},f=i.mappingOptions.filter(x=>x.ft.id===g.ft.id);f.forEach(x=>Oo(i.piece.id,x.key,m)),c=!1,n("mp-st").textContent=`Applied these values to all ${f.length} ${g.ft.name.toLowerCase()} options.`}b==="reset"&&(lf(i.piece.id,l),c=!1,i.selectMapping(l),d(l))}),d(t.key)}function ag(){sessionStorage.admOpen="1";let i=document.getElementById("adm");if(i){i.classList.add("open");return}i=document.createElement("aside"),i.id="adm";let e=[...document.querySelectorAll("[data-slot]")].filter(s=>!s.dataset.slot.startsWith("gallery"));i.innerHTML=`<div class="adm-top"><header><h3>Steward's Chamber</h3><button data-act="close" aria-label="Close admin panel">\u2715</button></header><input id="adm-search" type="search" placeholder="Search admin settings\u2026" aria-label="Search admin settings"></div>
 <div id="adm-scroll">
 <p class="note">Admin edits and uploaded files are stored in this browser until you publish the changes to your site.</p>
 ${document.getElementById("p-canvas")?'<h4>Mapping</h4><div id="map-body"></div>':""}
 ${ww()}${xw()}${vw()}${Mw()}${Iw()}${_w()}${Sw()}<h4>Pieces</h4><div class="acts"><button data-act="restoredef">Restore deleted default pieces</button></div>${pt.map(s=>`<details><summary>${We(s.name)}</summary>${to(s.id,"name","Name",s.name)}<label>Category<select data-pid="${s.id}" data-k="cat">${Is.map(r=>`<option${r===s.cat?" selected":""}>${r}</option>`).join("")}</select></label>${to(s.id,"sub","Subcategory",s.sub)}${to(s.id,"tag","Tagline",s.tag)}${to(s.id,"price","Price (ZAR)",s.price,"number")}${to(s.id,"desc","Description",s.desc,"area")}
 <div class="ar"><b>Model dimensions (cm)</b>${[["Width",0],["Depth",1],["Height",2]].map(([r,a])=>`<label>${r}<input type="number" min="1" step="1" data-pid="${s.id}" data-dim="${a}" value="${s.dims[a]}" ${s.dimsLocked?"disabled":""}></label>`).join("")}<label style="display:flex;gap:.5rem;align-items:center"><input type="checkbox" data-dims-lock="${s.id}" ${s.dimsLocked?"checked":""} style="width:auto"> Lock dimensions</label></div>
 ${qt().map(r=>`<div class="ar"><b>${We(r.name)} customization</b>${no(`data-pieceavailability="${s.id}|${r.id}"`,"true",`Offer ${r.name.toLowerCase()} as a customizable option`,Aw(s.id,r.id))}${Ew(s.id,r.id,rg(r.id,s.defaults?.[r.id]),s.defaults)}${r.id==="fabric"?'<a href="product.html?id='+encodeURIComponent(s.id)+'" style="border-bottom:1px solid var(--line);justify-self:start">Open piece page to edit fabric texture mapping</a>':""}</div>`).join("")}
 ${Zc("3D model (.glb / .gltf)","model:"+s.id,".glb,.gltf,model/gltf-binary")}${[1,2,3].map(r=>Zc("Gallery photo or video "+r,`gallery:${s.id}:${r}`,"image/*,video/*")).join("")}<div class="acts"><button data-delprod="${s.id}">Delete this piece</button></div></details>`).join("")}
 </div><div class="acts" id="adm-final"><button data-act="apply">Apply changes</button><button data-act="export">Export text</button><button data-act="import">Import text</button><button data-act="reset">Reset everything</button><button data-act="lock">Lock</button></div>`,document.body.append(i),requestAnimationFrame(()=>i.classList.add("open"));let t=i.querySelector("#adm-scroll");[...t.querySelectorAll(":scope>h4")].forEach(s=>{let r=document.createElement("details");r.className="sec";let a=document.createElement("summary");a.textContent="\u2630 "+s.textContent,r.append(a);let o=s.nextSibling;for(;o&&!(o.nodeType===1&&o.tagName==="H4");){let c=o.nextSibling;r.append(o),o=c}s.textContent==="Mapping"&&(r.open=!0),s.replaceWith(r)});let n=document.createElement("p");n.className="note",n.id="adm-no-results",n.textContent="No matching settings.",n.hidden=!0,t.append(n),i.querySelector("#adm-search").addEventListener("input",s=>{let r=s.target.value.trim().toLocaleLowerCase(),a=!1;t.querySelectorAll(":scope>.sec").forEach(o=>{let c=[...o.children].filter(d=>d!==o.querySelector(":scope>summary")),l=o.querySelector(":scope>summary").textContent.toLocaleLowerCase(),h=d=>d.textContent.toLocaleLowerCase().includes(r),u=!r||l.includes(r)||o.textContent.toLocaleLowerCase().includes(r);o.hidden=!u,a||=u,r&&u?(o.open=!0,l.includes(r)||(c.forEach(d=>{d.matches("label, .ar, .acts, p")&&(d.hidden=!h(d))}),o.querySelectorAll("details:not(.sec)").forEach(d=>{d.hidden=!h(d),d.hidden||(d.open=!0)}))):r||(c.forEach(d=>{d.hidden=!1}),o.querySelectorAll("details:not(.sec)").forEach(d=>{d.hidden=!1}))}),n.hidden=!r||a}),window.__prod&&sg(),addEventListener("prod-ready",sg),i.addEventListener("change",async s=>{let r=s.target;if(r.dataset.fe){let[a,o]=r.dataset.fe.split("|");gf(a,o,r.value),o==="type"&&Nt();return}if(r.dataset.mft){Al(r.dataset.mft,[...i.querySelectorAll(`[data-mft="${r.dataset.mft}"]`)].filter(a=>a.checked).map(a=>a.value));return}if(r.id==="nf-type"){let a=["Fabric","Leather","Velvet","Linen"].includes(r.value)?["fabric"]:["Wood","Metal"].includes(r.value)?["frame"]:[];i.querySelectorAll("[data-newmft]").forEach(o=>o.checked=a.includes(o.value));return}if(!r.dataset.npdefault){if(r.dataset.npDimsLock!==void 0){["np-w","np-d","np-h"].forEach(a=>document.getElementById(a).disabled=r.checked);return}if(r.dataset.dimsLock){Io(r.dataset.dimsLock,"dimsLocked",r.checked),r.closest("details").querySelectorAll("[data-dim]").forEach(a=>a.disabled=r.checked);return}if(r.dataset.dim!==void 0){let a=[...r.closest("details").querySelectorAll("[data-dim]")],o=a.map(c=>Math.max(1,Math.round(Number(c.value)||1)));a.forEach((c,l)=>c.value=o[l]),Io(r.dataset.pid,"dims",o);return}if(r.dataset.pdefault){let[a,o]=r.dataset.pdefault.split("|");El(a,o,r.value);return}if(r.dataset.pieceavailability){let[a,o]=r.dataset.pieceavailability.split("|");wl(a,o,r.checked);return}if(!r.dataset.npoptions){if(r.dataset.stfab!==void 0){df([...i.querySelectorAll("[data-stfab]")].filter(a=>a.checked).map(a=>a.value));return}if(r.dataset.stfin){let[a]=r.dataset.stfin.split("|");ff(a,[...i.querySelectorAll(`[data-stfin^="${a}|"]`)].filter(o=>o.checked).map(o=>o.value));return}if(r.dataset.site){if(r.dataset.site==="viewportMinZoom"||r.dataset.site==="viewportMaxZoom"){let a=Number(r.value),o=Ls();if(!(Number.isFinite(a)&&a>0&&(r.dataset.site==="viewportMinZoom"?a<o.maxZoom:a>o.minZoom))){alert("Zoom distances must be positive, and the farthest distance must be greater than the closest distance."),r.value=r.dataset.site==="viewportMinZoom"?o.minZoom:o.maxZoom;return}}of(r.dataset.site,r.type==="checkbox"?r.checked:r.type==="number"?Number(r.value):r.value.trim());return}if(r.id==="np-file"&&r.files[0]){if(!document.getElementById("np-dims-lock").checked)try{let[a,o,c]=await Uu(r.files[0]);["np-w","np-d","np-h"].forEach((l,h)=>document.getElementById(l).value=[a,o,c][h])}catch{alert("Could not read that model. You can still enter the size manually.")}return}if(r.dataset.cn){let a=Zs().find(o=>o.id===r.dataset.cn);a&&(a.name=r.value.trim()||a.name,rt());return}if(r.dataset.cp){let[a,o,c]=r.dataset.cp.split("|"),l=Zs().find(h=>h.id===a)?.pieces.find(h=>h.id===o);l&&(l[c]=c==="name"?r.value.trim():Math.max(0,Number(r.value)||0),rt());return}if(r.dataset.addpieces&&r.files.length){let a=Zs().find(o=>o.id===r.dataset.addpieces);if(!a){alert("Could not find that collection.");return}r.disabled=!0;for(let o of r.files){let[c,l,h]=await Uu(o).catch(()=>[100,100,80]),u="p"+Date.now().toString(36)+Math.random().toString(36).slice(2,5);await wa("piece:"+a.id+":"+u,o),a.pieces.push({id:u,name:o.name.replace(/\.(glb|gltf)$/i,"").replace(/[-_]+/g," "),w:c,d:l,h,price:0})}rt(),Nt();return}if(r.dataset.sh){af(r.dataset.sh,r.type==="checkbox"?r.checked:Math.max(0,Number(r.value)||0));return}if(r.dataset.st){rf(r.dataset.st,r.type==="checkbox"?r.checked:Math.max(0,Number(r.value)||0));return}if(r.dataset.pid){Io(r.dataset.pid,r.dataset.k,r.value);return}r.dataset.slot&&r.files[0]&&(r.disabled=!0,await wa(r.dataset.slot,r.files[0]),Nt())}}}),i.addEventListener("click",async s=>{let r=s.target.closest("button");if(!r)return;if(r.dataset.matOrder){let c=i.querySelector("#adm-material-list"),l=[...c.querySelectorAll(":scope>details")],h=r.closest("details"),u=l.indexOf(h),d=u+(r.dataset.matOrder==="up"?-1:1);if(u>=0&&d>=0&&d<l.length){d<u?l[d].before(h):l[d].after(h);let p=[...c.querySelectorAll(":scope>details")];pf(p.map(b=>b.dataset.materialId)),p.forEach((b,g)=>b.querySelectorAll("[data-mat-order]").forEach(m=>{m.disabled=m.dataset.matOrder==="up"?g===0:g===p.length-1}))}return}if(r.dataset.del)return await hr(r.dataset.del),Nt();let a=r.dataset;if(a.delprod){confirm("Delete this piece from the shop?")&&(xf(a.delprod),await hr("model:"+a.delprod),Nt());return}if(a.delpiece){let[c,l]=a.delpiece.split("|"),h=Zs().find(u=>u.id===c);h&&confirm("Remove this piece?")&&(h.pieces=h.pieces.filter(u=>u.id!==l),rt(),await hr("piece:"+c+":"+l),Nt());return}if(a.delcoll){let c=Zs(),l=c.find(h=>h.id===a.delcoll);if(l&&confirm("Delete this whole collection?")){for(let h of l.pieces)await hr("piece:"+l.id+":"+h.id);pe.collections=c.filter(h=>h.id!==l.id),rt(),Nt()}return}if(a.delfintype){if(qt().length<=1){alert("Keep at least one finish type.");return}confirm("Delete this finish type?")&&(uf(a.delfintype),Nt());return}if(a.delfab){if(ps.some(c=>c.id===a.delfab)&&ps.length<=1){alert("Keep at least one fabric.");return}confirm("Delete this fabric?")&&(bf(a.delfab),await hr("fabric:"+a.delfab),Nt());return}let o=r.dataset.act;if(o==="close"&&(i.classList.remove("open"),sessionStorage.admOpen="0"),o==="apply"&&(Jc(),Nt()),o==="restoredef"&&(delete pe.deleted,rt(),Nt()),o==="restorefab"&&(delete pe.deletedFabrics,rt(),Nt()),o==="resetmat"){confirm("Reset all materials and finish settings to default?")&&(yf(),Nt());return}if(o==="addfintype"){let c=d=>document.getElementById(d),l=c("nft-name").value.trim();if(!l){alert("Please enter a name for the finish type.");return}let h=(c("nft-target").value.trim()||l).toLowerCase().replace(/[^a-z0-9_-]+/g,"-"),u=h.slice(0,24)||"fin-"+Date.now().toString(36);hf({id:u,name:l,target:h}),Nt();return}if(o==="addfab"){let c=d=>document.getElementById(d),l=c("nf-name").value.trim();if(!l){alert("Please name the fabric.");return}let h="f-"+l.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,20)+"-"+Date.now().toString(36).slice(-4),u=c("nf-img").files[0];u&&await wa("fabric:"+h,u),mf({id:h,name:l,type:c("nf-type").value,hex:c("nf-hex").value,desc:c("nf-desc").value.trim()}),Al(h,[...i.querySelectorAll("[data-newmft]")].filter(d=>d.checked).map(d=>d.value)),Nt()}if(o==="addprod"){let c=d=>document.getElementById(d),l=c("np-file").files[0],h=c("np-name").value.trim();if(!h||!l){alert("Please enter a name and choose a GLB model.");return}let u="x-"+h.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,24)+"-"+Date.now().toString(36).slice(-4);await wa("model:"+u,l),cf({id:u,name:h,cat:c("np-cat").value,sub:c("np-sub").value.trim()||c("np-cat").value,tag:c("np-tag").value.trim(),price:Number(c("np-price").value)||0,mat:c("np-mat").value.trim(),desc:c("np-desc").value.trim(),dims:["np-w","np-d","np-h"].map(d=>Number(c(d).value)||100),dimsLocked:c("np-dims-lock").checked}),i.querySelectorAll("[data-npdefault]").forEach(d=>{d.value&&El(u,d.dataset.npdefault,d.value)}),i.querySelectorAll("[data-npoptions]").forEach(d=>wl(u,d.dataset.npoptions,d.checked)),Nt()}if(o==="addcoll"){let c=document.getElementById("nc-name").value.trim();if(!c){alert("Please name the collection.");return}Zs().push({id:"c"+Date.now().toString(36),name:c,pieces:[]}),rt(),Nt()}if(o==="expprod"){s.preventDefault(),s.stopPropagation();let c=document.getElementById("repo-pub-status"),l=document.getElementById("repo-pub-progress");if(typeof window.showDirectoryPicker!="function"){await Js("This browser cannot write to a selected folder. Use current Chrome or Edge, or export the changes another way.");return}let h;try{h=window.showDirectoryPicker({mode:"readwrite"})}catch(u){await Js(`Could not open the folder picker: ${u.message}`),console.error(u);return}r.disabled=!0,l.hidden=!0,sessionStorage.setItem("repo-pub-running","1"),sessionStorage.removeItem("repo-pub-progress"),c.textContent="Folder picker opened. Select the Studio project folder containing package.json.",sessionStorage.setItem("repo-pub-status",c.textContent);try{let u=await h;Jc(),await Lw(u)}catch(u){let d=u.name==="AbortError"?"Folder selection cancelled. No files were written.":`Could not prepare repository changes: ${u.message}`;await Js(d),sessionStorage.removeItem("repo-pub-running"),console.error(u)}finally{r.disabled=!1}return}if(o==="orders"){let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([localStorage.getItem("dekara-orders")||"[]"],{type:"application/json"})),c.download="demo-orders.json",c.click()}if(o==="clearorders"&&confirm("Clear all demo orders?")&&(localStorage.removeItem("dekara-orders"),Nt()),o==="lock"&&(sessionStorage.clear(),location.reload()),o==="export"){let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([JSON.stringify(pe,null,2)],{type:"application/json"})),c.download="dekara-content.json",c.click()}if(o==="import"){let c=document.createElement("input");c.type="file",c.accept=".json",c.onchange=async()=>{try{sf(JSON.parse(await c.files[0].text())),Nt()}catch{alert("That file could not be read.")}},c.click()}o==="reset"&&confirm("Remove all custom text and uploaded files?")&&(await vf(),Nt())})}var We,eg,Qs,Nt,Zc,to,xw,vw,_w,Sw,Mw,Fu,Ou,ww,tg,no,ng,Ew,Aw,Tw,Rw,rg,bs,Cw,Pw,ig,Js,Zs,Iw,Jc,og=He(()=>{Fn();yn();Kc();We=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),eg=i=>crypto.subtle.digest("SHA-256",new TextEncoder().encode(i)).then(e=>[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")),Qs=document.createElement("button");Qs.id="adm-trigger";Qs.textContent="\u269C";Qs.setAttribute("aria-label","Steward access");document.body.append(Qs);Qs.onclick=async()=>{await yw()&&ag()};addEventListener("keydown",i=>{i.ctrlKey&&i.shiftKey&&i.key.toLowerCase()==="a"&&Qs.click()});Nt=()=>{sessionStorage.admOpen="1",location.reload()},Zc=(i,e,t)=>{let n=Ma(e);return`<div class="ar"><b>${We(i)}</b><small>${n?"Custom: "+We(n.name):"Default"}</small><input type="file" accept="${t}" data-slot="${We(e)}">${n?`<button data-del="${We(e)}">Remove custom file</button>`:""}</div>`},to=(i,e,t,n,s="text")=>`<label>${t}${s==="area"?`<textarea rows="4" data-pid="${i}" data-k="${e}">${We(n)}</textarea>`:`<input type="${s}" data-pid="${i}" data-k="${e}" value="${We(n)}">`}</label>`,xw=()=>{let i=$n(),e=(n,s,r)=>`<label>${s}<input type="text" data-site="${n}" value="${We(i[n]||"")}" placeholder="${r}"></label>`,t=Ls();return`<h4>Business details</h4><p class="note">Shown in the footer and contact page. A WhatsApp number adds a floating chat button.</p>${e("phone","Phone","e.g. 010 000 0000")}${e("email","Email","e.g. info@yourdomain.co.za")}${e("whatsapp","WhatsApp number (with country code)","e.g. 27821234567")}<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-site="backlight" ${i.backlight===!1?"":"checked"} style="width:auto"> Backlight on main viewports</label>${e("apiBase","Backend API URL (when your backend is live)","https://your-api.workers.dev")}<label>Backlight strength (%)<input type="number" min="0" max="300" data-site="backlightStrength" value="${i.backlightStrength??100}"></label><h4>3D viewports</h4><p class="note">Set camera controls for shop cards, product views, and the Custom Studio live preview. Zoom distances use scene units; smaller minimum values zoom closer.</p><label style="display:flex;gap:.5rem;align-items:center"><input type="checkbox" data-site="viewportPan" ${t.pan?"checked":""} style="width:auto"> Enable panning in shop, product, and Custom Studio preview viewports</label><label>Closest zoom distance<input type="number" min="0.5" max="99" step="0.5" data-site="viewportMinZoom" value="${t.minZoom}"></label><label>Farthest zoom distance<input type="number" min="1" max="100" step="0.5" data-site="viewportMaxZoom" value="${t.maxZoom}"></label>`},vw=()=>{let i=No(),e=[];try{e=JSON.parse(localStorage.getItem("dekara-orders"))||[]}catch{}return`<h4>Basket and checkout</h4><label>Delivery fee (ZAR)<input type="number" min="0" data-sh="delivery" value="${i.delivery}"></label><label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-sh="payNow" ${i.payNow?"checked":""} style="width:auto"> Offer "Pay now" (demo payments)</label>
 <details><summary>Demo orders (${e.length})</summary>${e.slice(0,20).map(t=>`<div class="ar"><b>${We(t.ref)}</b><small>${We(t.name)} \xB7 ${We(String(t.date).slice(0,10))} \xB7 R ${Math.round(t.total).toLocaleString("en-ZA")}</small></div>`).join("")||'<p class="note">No orders yet.</p>'}<div class="acts"><button data-act="orders">Export orders</button><button data-act="clearorders">Clear orders</button></div></details>`},_w=()=>{let i=qt(),e=(t,n,s)=>`<label>Default ${t==="fabric"?"fabric":`${We(i.find(r=>r.id===t)?.name||"finish")} finish`}<select data-npdefault="${We(t)}">${n.map(r=>`<option value="${We(r[2])}"${r[2]===s?" selected":""}>${We(r[0])}</option>`).join("")}</select></label>`;return`<h4>Add a piece to the shop</h4><p class="note">Upload a GLB (Draco and Meshopt compression are supported). Dimensions fill in from the model and can be edited. Choose which finish types customers can customize, then select each type's default material.</p>
 <label>Name<input id="np-name"></label><label>Category<select id="np-cat">${Is.map(t=>`<option>${t}</option>`).join("")}</select></label><label>Subcategory<input id="np-sub"></label><label>Tagline<input id="np-tag"></label><label>Price (ZAR)<input id="np-price" type="number" min="0"></label><label>Materials<input id="np-mat"></label><label>Description<textarea id="np-desc" rows="3"></textarea></label>
 <label>3D model (.glb)<input type="file" id="np-file" accept=".glb,.gltf"></label>
 ${i.map(t=>{let n=rg(t.id,void 0),s=n[0]?.[2];return`<div class="ar"><b>${We(t.name)} customization</b>${no(`data-npoptions="${t.id}"`,"true",`Offer ${t.name.toLowerCase()} as a customizable option`,!0)}${e(t.id,n,s)}</div>`}).join("")}
 <div class="ar"><b>Model dimensions (cm)</b><label>Width<input id="np-w" type="number" min="1" step="1"></label><label>Depth<input id="np-d" type="number" min="1" step="1"></label><label>Height<input id="np-h" type="number" min="1" step="1"></label><label style="display:flex;gap:.5rem;align-items:center"><input id="np-dims-lock" type="checkbox" style="width:auto"> Lock dimensions</label></div>
 <div class="acts"><button data-act="addprod">Add to shop</button></div>`},Sw=()=>{let i=Uo(),e=[["name","Name"],["price","Price (ZAR)"],["w","Width cm"],["d","Depth cm"],["h","Height cm"]];return`<h4>Studio collections</h4><p class="note">Collections of GLB pieces that customers arrange on the Custom Studio canvas, just like the built-in modules. Each piece is stretched to the width, depth and height you set.</p>${i.map(t=>`<details><summary>${We(t.name)} (${t.pieces.length})</summary><label>Collection name<input data-cn="${t.id}" value="${We(t.name)}"></label>${Zc("Collection preview image","collection:"+t.id,"image/*")}${t.pieces.map(n=>`<div class="ar"><b>${We(n.name)}</b>${e.map(([s,r])=>`<label>${r}<input ${s==="name"?"":'type="number" min="0"'} data-cp="${t.id}|${n.id}|${s}" value="${We(n[s])}"></label>`).join("")}<button data-delpiece="${t.id}|${n.id}">Remove piece</button></div>`).join("")}<label>Add pieces (GLB, several allowed)<input type="file" multiple accept=".glb,.gltf" data-addpieces="${t.id}"></label><div class="acts"><button data-delcoll="${t.id}">Delete collection</button></div></details>`).join("")}
 <label>New collection name<input id="nc-name"></label><div class="acts"><button data-act="addcoll">Create collection</button></div>`},Mw=()=>{let i=Do(),e={seat:"Seat",corner:"Corner",chaise:"Chaise",ottoman:"Ottoman",arm:"Arm"},t=Fo(),n=qt(),s=(a,o,c)=>`<label>${o}<input type="number" min="0" data-st="${a}" value="${c}"></label>`,r=(a,o,c)=>`<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-st="${a}" ${c?"checked":""} style="width:auto"> ${o}</label>`;return`<h4>Custom Studio</h4><p class="note">Decide how far a customer can take a build, and which fabrics &amp; finishes are offered.</p>${s("maxPieces","Max pieces on canvas",i.maxPieces)}${s("maxWidth","Max overall length (cm)",i.maxWidth)}${s("maxDepth","Max overall depth (cm)",i.maxDepth)}${r("snap","Snap pieces together",i.snap)}
 <details><summary>Modules, prices and maximums</summary>${Object.keys(e).map(a=>`<div class="ar"><b>${e[a]}</b>${r("enabled."+a,"Available to customers",i.enabled[a])}${s("prices."+a,"Price (ZAR)",i.prices[a])}${s("max."+a,"Max of this type",i.max[a])}</div>`).join("")}</details>
 <details><summary>Starter sizes offered</summary>${[1,2,3,4].map(a=>r("presets."+a,a+"-seater",i.presets[a])).join("")}</details>
 <details><summary>Fabrics offered in Studio</summary><div class="ar"><b>Studio fabrics</b>${ps.map(a=>no("data-stfab",a.id,a.name,t.fabrics?t.fabrics.includes(a.id):a.type!=="Wood"&&a.type!=="Metal")).join("")}</div></details>
 <details><summary>Finishes offered in Studio</summary>${n.map(a=>`<div class="ar"><b>${We(a.name)} finishes</b>${Dn.map(o=>no(`data-stfin="${a.id}|${o.id}"`,o.id,o.name,t.finishes?.[a.id]?t.finishes[a.id].includes(o.id):o.type==="Wood"||o.type==="Metal")).join("")}</div>`).join("")}</details>`},Fu=sessionStorage.getItem("repo-pub-status")||"Ready. Click the button and choose the project folder containing package.json.";sessionStorage.getItem("repo-pub-running")==="1"&&(Fu="Previous preparation was interrupted by a page reload. Check git status and data/site.json before retrying; some files may already have been copied.",sessionStorage.setItem("repo-pub-status",Fu),sessionStorage.removeItem("repo-pub-running"));Ou=JSON.parse(sessionStorage.getItem("repo-pub-progress")||"null"),ww=()=>`<h4>Publish to repo</h4><p class="note">Choose your local project folder to merge admin settings into data/site.json and copy uploaded files into place. Then review, commit and push the staged worktree from your terminal.</p><div class="acts"><button type="button" data-act="expprod">Prepare changes for GitHub</button></div><p class="note" id="repo-pub-status" role="status" aria-live="polite">${We(Fu)}</p><progress id="repo-pub-progress" max="${Ou?.max||1}" value="${Ou?.value||0}" ${Ou?.hidden===!1?"":"hidden"} style="width:100%"></progress>`,tg=["Fabric","Leather","Velvet","Linen","Wood","Stone","Metal","Other"],no=(i,e,t,n)=>`<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem;margin:.3rem 0"><input type="checkbox" ${i} value="${We(e)}" ${n?"checked":""} style="width:auto">${We(t)}</label>`,ng=(i,e)=>`<div class="ar"><b>Assign to finish types</b>${qt().map(t=>no(i,t.id,t.name,e.includes(t.id))).join("")}</div>`,Ew=(i,e,t,n)=>`<label>Default ${We(e==="fabric"?"fabric":`${qt().find(s=>s.id===e)?.name||"finish"} finish`)}<select data-pdefault="${We(i)}|${We(e)}">${t.map(s=>`<option value="${We(s[2])}"${(n?.[e]||t[0]?.[2])===s[2]?" selected":""}>${We(s[0])}</option>`).join("")}</select></label>`,Aw=(i,e)=>{let t=pe.pieceFinishAvailability?.[i]?.[e];return t!==void 0?t:dt.pieceFinishAvailability?.[i]?.[e]??!0},Tw=i=>un.filter(e=>Dn.find(t=>t.id===e[2])?.finishTypes?.includes(i)),Rw=un.filter(i=>!Wt.some(e=>e[2]===i[2])),rg=(i,e)=>{let t=i==="fabric"?Wt:Tw(i),n=t.length?t:i==="fabric"?Wt:Rw,s=un.find(r=>r[2]===e);return s&&!n.some(r=>r[2]===e)?[...n,s]:n},bs=i=>{let e=String(i).replace(/[^a-z0-9_-]/gi,"-").replace(/^-+|-+$/g,"");if(!e)throw new Error("An uploaded file has an invalid ID for its repository path.");return e},Cw=(i,e)=>{let t=/\.([a-z0-9]{2,8})$/i.exec(i||"");return t?t[1].toLowerCase():{"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif","video/mp4":"mp4","video/webm":"webm","model/gltf-binary":"glb","model/gltf+json":"gltf"}[e]||"bin"},Pw=(i,e)=>{let t=Cw(e.name,e.type),n=i.split(":");return n[0]==="model"&&n[1]?`models/${bs(n[1])}.${t}`:n[0]==="piece"&&n[1]&&n[2]?`models/collections/${bs(n[1])}/${bs(n[2])}.${t}`:n[0]==="collection"&&n[1]?`models/collections/${bs(n[1])}/preview.${t}`:n[0]==="fabric"&&n[1]?`swatches/fabrics/${bs(n[1])}.${t}`:n[0]==="gallery"&&n[1]&&n[2]?`media/products/${bs(n[1])}/gallery-${bs(n[2])}.${t}`:`media/slots/${bs(i)}.${t}`},ig=async(i,e,t)=>{let n=e.split("/");if(n.some(o=>!o||o==="."||o===".."))throw new Error(`Unsafe repository path: ${e}`);let s=i;for(let o of n.slice(0,-1))s=await s.getDirectoryHandle(o,{create:!0});let r=await s.getFileHandle(n[n.length-1],{create:!0}),a=await r.createWritable();try{await a.write(t),await a.close()}catch(o){throw await a.abort(),o}},Js=async(i,e,t)=>{let n=document.getElementById("repo-pub-status"),s=document.getElementById("repo-pub-progress");n.textContent=i,sessionStorage.setItem("repo-pub-status",i),s.hidden=!(t>0),t>0?(s.max=t,s.value=e,sessionStorage.setItem("repo-pub-progress",JSON.stringify({max:t,value:e,hidden:!1}))):sessionStorage.removeItem("repo-pub-progress"),await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))},Zs=()=>(Array.isArray(pe.collections)||(pe.collections=(dt.collections||[]).map(i=>({...i,pieces:(i.pieces||[]).map(e=>({...e}))}))),pe.collections);Iw=()=>{let i=qt();return`<h4>Materials library</h4><p class="note">Add materials to the finish types where customers can use them. Assignments are edited on each material and apply across pieces.</p>
 <details><summary>Finish types (${i.length})</summary><p class="note">Each finish type matches a named material in GLB models (e.g. "frame", "legs", "base").</p>
 ${i.map(e=>`<div class="ar"><b>${We(e.name)}</b><small>Target in GLB: <code>${We(e.target||e.name)}</code></small>${e.id!=="fabric"&&i.length>1?`<button data-delfintype="${We(e.id)}">Delete this finish type</button>`:""}</div>`).join("")}
 <label>New finish type name<input id="nft-name" placeholder="e.g. Legs or Base"></label><label>GLB material name (target)<input id="nft-target" placeholder="e.g. legs (matches GLB material name)"></label>
 <div class="acts"><button data-act="addfintype">Add finish type</button></div></details>
 <div id="adm-material-list">${Dn.map((e,t)=>`<details data-material-id="${We(e.id)}"><summary>${We(e.name)} (${We(e.type||"Fabric")})</summary><div class="acts material-order"><button data-mat-order="up"${t===0?" disabled":""}>Move earlier</button><button data-mat-order="down"${t===Dn.length-1?" disabled":""}>Move later</button></div><label>Name<input data-fe="${e.id}|name" value="${We(e.name)}"></label><label>Type<select data-fe="${e.id}|type">${tg.map(n=>`<option${n===e.type?" selected":""}>${n}</option>`).join("")}</select></label><label>Colour<input type="color" data-fe="${e.id}|hex" value="${We(e.hex)}"></label><label>Description<textarea rows="3" data-fe="${e.id}|desc">${We(e.desc)}</textarea></label>${ng(`data-mft="${e.id}"`,e.finishTypes||[])}${Zc("Swatch / texture image","fabric:"+e.id,"image/*")}<div class="acts"><button data-delfab="${e.id}">Delete this material</button></div></details>`).join("")}</div>
 <label>New material name<input id="nf-name"></label><label>Type<select id="nf-type">${tg.map(e=>`<option>${e}</option>`).join("")}</select></label>${ng("data-newmft",["fabric"])}<label>Colour<input type="color" id="nf-hex" value="#cccccc"></label><label>Description<textarea id="nf-desc" rows="2"></textarea></label><label>Texture image (optional)<input type="file" id="nf-img" accept="image/*"></label>
 <div class="acts"><button data-act="addfab">Add material</button><button data-act="resetmat">Reset materials to default</button></div>`},Jc=()=>{};sessionStorage.adm==="1"&&sessionStorage.admOpen==="1"&&ag();{let i=0,e=0;document.addEventListener("click",t=>{if(!t.target.closest(".ftr .logo"))return;let n=Date.now();i=n-e>2e3?1:i+1,e=n,i>=5&&(i=0,Qs.click())})}});var Gi={};Zd(Gi,{add:()=>Hi,clear:()=>tr,count:()=>io,list:()=>bi,money:()=>Et,onChange:()=>ro,remove:()=>zu,setQty:()=>Hu,shop:()=>so,summaryText:()=>Dw,toast:()=>el,total:()=>er,vatOf:()=>Bu});function el(i,e="basket.html",t="View basket"){let n=document.getElementById("toast");n||(n=document.createElement("div"),n.id="toast",document.body.append(n)),n.innerHTML="";let s=document.createElement("span");s.textContent=i;let r=document.createElement("a");r.href=e,r.textContent=t,n.append(s,r),n.classList.add("show"),clearTimeout(cg),cg=setTimeout(()=>n.classList.remove("show"),3800)}var ku,lg,hg,ug,Vn,Qc,bi,io,er,Et,Bu,so,ro,zu,Hu,tr,Dw,cg,Hi,ti=He(()=>{Fn();ku="dekara-basket",lg=new EventTarget,hg=()=>lg.dispatchEvent(new Event("change")),ug=()=>{try{return JSON.parse(localStorage.getItem(ku))||[]}catch{return[]}},Vn=ug(),Qc=()=>{try{localStorage.setItem(ku,JSON.stringify(Vn))}catch{}hg()},bi=()=>Vn,io=()=>Vn.reduce((i,e)=>i+e.qty,0),er=()=>Vn.reduce((i,e)=>i+e.price*e.qty,0),Et=i=>"R "+Math.round(i).toLocaleString("en-ZA"),Bu=i=>i*15/115,so=No,ro=i=>lg.addEventListener("change",i),zu=i=>{Vn=Vn.filter(e=>e.key!==i),Qc()},Hu=(i,e)=>{let t=Vn.find(n=>n.key===i);t&&(t.qty=Math.max(1,Math.min(20,e|0)),Qc())},tr=()=>{Vn=[],Qc()},Dw=()=>Vn.map(i=>`${i.qty}\xD7 ${i.name} (${i.desc}) \u2014 ${Et(i.price*i.qty)}`).join(`
`)+`
Total ${Et(er())} incl. VAT`;Hi=i=>{let e=Vn.find(t=>t.key===i.key);e?e.qty=Math.min(20,e.qty+1):Vn.push({qty:1,...i}),Qc(),el(`${i.name} added to your basket`)};addEventListener("storage",i=>{i.key===ku&&(Vn=ug(),hg())})});async function Wu(){try{ao=new Set(await Vu().wishlist())}catch{ao=new Set}Gu()}async function gg(i){try{ao=new Set(await Vu().toggleWish(i))}catch{}Gu()}var Zt,Wn,dg,fg,Gu,ys,Jt,Nw,Uw,Vu,ao,pg,mg,Ow,xt,yi=He(()=>{Fn();Zt=(i,e)=>{try{return JSON.parse(localStorage.getItem(i))??e}catch{return e}},Wn=(i,e)=>{try{localStorage.setItem(i,JSON.stringify(e))}catch{}},dg=i=>crypto.subtle.digest("SHA-256",new TextEncoder().encode(i)).then(e=>[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")),fg=new EventTarget,Gu=()=>fg.dispatchEvent(new Event("change")),ys=i=>fg.addEventListener("change",i),Jt=()=>Zt("dekara-session",null),Nw={async me(){return Jt()},async register({name:i,email:e,password:t}){e=e.trim().toLowerCase();let n=Zt("dekara-users",[]);if(n.some(r=>r.email===e))throw new Error("An account with that email already exists.");let s={id:"u"+Date.now().toString(36),name:i.trim(),email:e,hash:await dg(t)};return n.push(s),Wn("dekara-users",n),this._in(s)},async login({email:i,password:e}){i=i.trim().toLowerCase();let t=Zt("dekara-users",[]).find(n=>n.email===i);if(!t||t.hash!==await dg(e))throw new Error("Incorrect email or password.");return this._in(t)},_in(i){let e={id:i.id,name:i.name,email:i.email};Wn("dekara-session",e);let t=Zt("dekara-wish-guest",[]);return t.length&&(Wn("dekara-wish-"+e.id,[...new Set([...Zt("dekara-wish-"+e.id,[]),...t])]),localStorage.removeItem("dekara-wish-guest")),e},async logout(){localStorage.removeItem("dekara-session")},async wishlist(){return Zt("dekara-wish-"+(Jt()?.id||"guest"),[])},async toggleWish(i){let e="dekara-wish-"+(Jt()?.id||"guest"),t=Zt(e,[]),n=t.indexOf(i);return n<0?t.push(i):t.splice(n,1),Wn(e,t),t},async reviews(i){return Zt("dekara-reviews",[]).filter(e=>e.pid===i).sort((e,t)=>t.date.localeCompare(e.date))},async addReview(i){let e=Jt();if(!e)throw new Error("Please sign in to write a review.");let t=Zt("dekara-reviews",[]);t.push({id:"r"+Date.now().toString(36),pid:i.pid,rating:i.rating,title:i.title,body:i.body,name:e.name,uid:e.id,date:new Date().toISOString()}),Wn("dekara-reviews",t)},async createOrder(i){let e=Zt("dekara-orders",[]);return e.unshift({...i,uid:Jt()?.id||null}),Wn("dekara-orders",e.slice(0,50)),i},async orders(){let i=Jt();return i?Zt("dekara-orders",[]).filter(e=>e.uid===i.id||e.email===i.email):[]},async designs(){let i=Jt();return i?Zt("dekara-designs-"+i.id,[]):[]},async saveDesign(i){let e=Jt();if(!e)throw new Error("Please sign in (Account page) to save designs.");let t="dekara-designs-"+e.id,n=Zt(t,[]),s={id:"d"+Date.now().toString(36),date:new Date().toISOString(),...i};return n.unshift(s),Wn(t,n.slice(0,30)),s},async deleteDesign(i){let e=Jt();if(e){let t="dekara-designs-"+e.id;Wn(t,Zt(t,[]).filter(n=>n.id!==i))}},async tradeApply(i){let e=Zt("dekara-trade",[]);e.unshift({...i,date:new Date().toISOString()}),Wn("dekara-trade",e)},async contact(i){let e=Zt("dekara-contacts",[]);e.unshift({...i,date:new Date().toISOString()}),Wn("dekara-contacts",e)},async newsletter(i){let e=Zt("dekara-subs",[]);e.includes(i)||e.push(i),Wn("dekara-subs",e)},async orderStatus(){return{status:"paid"}}},Uw=i=>{let e=async(n,s,r)=>{let a=localStorage.getItem("dekara-token"),o=await fetch(i+s,{method:n,headers:{"Content-Type":"application/json",...a?{Authorization:"Bearer "+a}:{}},body:r?JSON.stringify(r):void 0});if(!o.ok)throw new Error((await o.json().catch(()=>({}))).message||"Request failed");return o.status===204?null:o.json()},t=async(n,s)=>{let r=await e("POST",n,s);return localStorage.setItem("dekara-token",r.token),Wn("dekara-session",r.user),r.user};return{me:()=>e("GET","/me").catch(()=>null),register:n=>t("/auth/register",n),login:n=>t("/auth/login",n),logout:async()=>{await e("POST","/auth/logout").catch(()=>{}),localStorage.removeItem("dekara-token"),localStorage.removeItem("dekara-session")},wishlist:()=>e("GET","/wishlist"),toggleWish:n=>e("POST","/wishlist/toggle",{productId:n}),reviews:n=>e("GET","/products/"+n+"/reviews"),addReview:n=>e("POST","/products/"+n.pid+"/reviews",n),createOrder:n=>e("POST","/orders",n),orders:()=>e("GET","/orders"),designs:()=>e("GET","/designs"),saveDesign:n=>e("POST","/designs",n),deleteDesign:n=>e("DELETE","/designs/"+n),tradeApply:n=>e("POST","/trade-applications",n),contact:n=>e("POST","/contact",n),newsletter:n=>e("POST","/newsletter",{email:n}),orderStatus:n=>e("GET","/orders/"+encodeURIComponent(n)+"/status")}},Vu=()=>dt.apiBase?Uw(dt.apiBase):Nw,ao=new Set,pg=i=>ao.has(i),mg=()=>ao.size;Ow=["register","login","logout","addReview","saveDesign","deleteDesign"],xt=Object.fromEntries(["me","register","login","logout","wishlist","reviews","addReview","createOrder","orders","designs","saveDesign","deleteDesign","tradeApply","contact","newsletter","orderStatus"].map(i=>[i,async(...e)=>{let t=await Vu()[i](...e);return["login","register","logout"].includes(i)&&await Wu(),Ow.includes(i)&&Gu(),t}]))});var $u,bg,yg,xg,ni,qu,ju,tl,Xu,ea,vg,_g,nl,il=He(()=>{$u="dekara-compare",bg=new EventTarget,yg=()=>bg.dispatchEvent(new Event("change")),xg=()=>{try{return JSON.parse(localStorage.getItem($u))||[]}catch{return[]}},ni=xg(),qu=()=>{try{localStorage.setItem($u,JSON.stringify(ni))}catch{}yg()},ju=3,tl=()=>ni,Xu=i=>ni.includes(i),ea=i=>bg.addEventListener("change",i),vg=i=>{if(Xu(i))ni=ni.filter(e=>e!==i);else{if(ni.length>=ju)return!1;ni.push(i)}return qu(),!0},_g=i=>{ni=ni.filter(e=>e!==i),qu()},nl=()=>{ni=[],qu()};addEventListener("storage",i=>{i.key===$u&&(ni=xg(),yg())})});var Bw={};var nr,Eg,Fw,kw,Ag,sl,Mg,wg,Yu,Tg,Rg,oo,Cg,Pg,Lg=He(()=>{Fn();og();ti();yi();il();nr=$n(),Eg=[["shop.html","Shop"],["custom-studio.html","Custom Studio"],["fabrics.html","Fabric Library"],["services.html","Services"],["trade.html","For Designers"],["about.html","About"],["contact.html","Contact"]],Fw=[["help.html#faq","FAQ"],["compare.html","Compare pieces"],["help.html#delivery","Delivery fees"],["help.html#guarantee","Guarantee policy"],["help.html#terms","Terms & conditions"]],kw='<span class="m-sep m-only"></span><a class="m-only" href="index.html">Home</a><a class="m-only" href="account.html" id="acct2">Sign in / Register</a><a class="m-only" href="account.html#saved">Saved items</a><a class="m-only" href="basket.html">Basket</a><a class="m-only" href="compare.html">Compare pieces</a><a class="m-only" href="help.html#faq">Help &amp; FAQ</a>',Ag=location.pathname.split("/").pop()||"index.html",sl=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.body.insertAdjacentHTML("afterbegin",`<a class="skip" href="#main">Skip to content</a><div class="notice">Please note: delivery on all items is between 4\u20136 weeks</div><header class="hdr"><a class="logo" href="index.html" data-slot="logo" data-label="Site logo (replaces text)"><span class="lt">Dekara Designs</span></a><nav id="nav" aria-label="Main">${Eg.map(([i,e])=>`<a href="${i}"${i===Ag?' class="on"':""}>${e}</a>`).join("")}${kw}</nav><a class="bk" href="account.html#saved" aria-label="Saved items">\u2661 <b id="wl-n">0</b></a><a class="bk" href="account.html" id="acct">Sign in</a><a class="bk" href="basket.html" aria-label="Basket"><svg class="bki" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg><span class="bk-t">Basket</span> <b id="bk-n">0</b></a><button class="burger" aria-label="Menu"><i></i><i></i></button></header>`);Mg=document.querySelector("main");Mg&&(Mg.id="main");document.body.insertAdjacentHTML("beforeend",`<footer class="ftr"><div class="cols"><div><div class="logo"><span class="lt">Dekara Designs</span></div><p>A premium interior design studio and furniture manufacturer, creating spaces with intimate connections to the people who live in them.</p>
<form id="nl" class="nl"><input type="email" required placeholder="Your email for news and specials" aria-label="Email address"><button class="btn sm" type="submit">Subscribe</button></form><p id="nl-ok" class="nl-ok" hidden>Thank you. (Demo: your email was not stored.)</p></div>
<div><h4>Pages</h4>${Eg.map(([i,e])=>`<a href="${i}">${e}</a>`).join("")}</div>
<div><h4>Help</h4>${Fw.map(([i,e])=>`<a href="${i}">${e}</a>`).join("")}<a href="basket.html">Basket</a></div>
<div><h4>Trading hours</h4>Mon\u2013Fri 09h00 \u2013 16h00<br>Sat 09h00 \u2013 14h00<br>Holidays 09h00 \u2013 14h00<br>Sundays closed<h4 style="margin-top:1.2rem">Visit</h4>Our showroom \xB7 Design studio${nr.phone?`<br><a href="tel:${sl(nr.phone.replace(/\s/g,""))}">${sl(nr.phone)}</a>`:""}${nr.email?`<a href="mailto:${sl(nr.email)}">${sl(nr.email)}</a>`:""}</div></div><div class="fine">\xA9 ${new Date().getFullYear()} Dekara Designs. Concept demo.</div></footer>`);document.getElementById("nl").onsubmit=async i=>{i.preventDefault();let e=i.target.querySelector("input").value.trim(),t=document.getElementById("nl-ok");try{await xt.newsletter(e),i.target.hidden=!0,t.textContent=dt.apiBase?"Thank you for subscribing.":"Thank you. (Demo: your email was only stored in this browser.)",t.hidden=!1}catch(n){i.target.hidden=!0,t.textContent=n.message||"Could not subscribe. Please try again.",t.hidden=!1}};wg=(nr.whatsapp||"").replace(/\D/g,"");wg&&document.body.insertAdjacentHTML("beforeend",`<a class="wa" href="https://wa.me/${wg}?text=${encodeURIComponent("Hi Dekara Designs, I would like to find out more about your furniture.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">WhatsApp</a>`);!localStorage.getItem("dekara-cookie")&&location.hash!=="#tour"&&(document.body.insertAdjacentHTML("beforeend",'<div class="cookie" role="dialog" aria-label="Cookie notice"><p>We use cookies to remember your basket and improve the site. (Demo notice.)</p><button class="btn sm" data-c="1">Accept</button><button class="btn sm ghost" data-c="0">Decline</button></div>'),document.querySelector(".cookie").onclick=i=>{let e=i.target.closest("[data-c]");if(e){try{localStorage.setItem("dekara-cookie",e.dataset.c)}catch{}i.currentTarget.remove()}});Yu=document.querySelector(".burger");Yu.setAttribute("aria-expanded","false");Yu.onclick=()=>{let i=document.body.classList.toggle("menu");Yu.setAttribute("aria-expanded",String(i))};addEventListener("keydown",i=>{i.key==="Escape"&&document.body.classList.remove("menu")});addEventListener("resize",()=>{innerWidth>960&&document.body.classList.remove("menu")});document.querySelectorAll("#nav a").forEach(i=>i.onclick=()=>document.body.classList.remove("menu"));Tg=()=>{let i=io(),e=document.getElementById("bk-n");e.textContent=i,e.classList.toggle("has",i>0)};Tg();ro(Tg);Rg=()=>{document.getElementById("wl-n").textContent=mg();let i=Jt(),e=i?i.name.split(" ")[0]:"Sign in";document.getElementById("acct").textContent=e,document.getElementById("acct2").textContent=i?"My account ("+e+")":"Sign in / Register"};Rg();ys(Rg);Wu();oo=document.createElement("div");oo.id="cmpbar";document.body.append(oo);Cg=()=>{let i=tl().length;oo.hidden=!i||Ag==="compare.html",oo.innerHTML=`<span>Compare ${i}/${ju}</span><a class="btn sm" href="compare.html">Open comparison</a><button class="lnk" id="cmp-x">Clear</button>`,oo.querySelector("#cmp-x").onclick=nl};Cg();ea(Cg);window.applySlots=()=>document.querySelectorAll("[data-slot]").forEach(i=>{let e=Ma(i.dataset.slot);if(!e||i.querySelector(":scope>.slot-media"))return;let t=e.type.startsWith("video"),n=document.createElement(t?"video":"img");n.className="slot-media",n.src=e.url,t?(Object.assign(n,{autoplay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata"}),i.hasAttribute("data-bg")||(n.controls=!0)):n.alt="",i.prepend(n)});applySlots();Pg=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),Pg.unobserve(e.target))}),{threshold:.12});window.watchReveals=()=>document.querySelectorAll(".reveal:not(.in)").forEach(i=>Pg.observe(i));watchReveals();if(location.hash==="#tour"){document.body.classList.add("tour");let i=0;(function e(){i+=1.1,scrollTo(0,i),i<document.documentElement.scrollHeight&&requestAnimationFrame(e)})()}});var Ig,Ku,Dg,rl,Ng,zw,ir,Zu=He(()=>{hn();Ig={type:"change"},Ku={type:"start"},Dg={type:"end"},rl=new Ui,Ng=new Ln,zw=Math.cos(70*ds.DEG2RAD),ir=class extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ie),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ig),n.update(),r=s.NONE},this.update=function(){let C=new P,Y=new on().setFromUnitVectors(e.up,new P(0,1,0)),oe=Y.clone().invert(),re=new P,ve=new on,Ye=new P,nt=2*Math.PI;return function(he=null){let I=n.object.position;C.copy(I).sub(n.target),C.applyQuaternion(Y),o.setFromVector3(C),n.autoRotate&&r===s.NONE&&O(S(he)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ce=n.minAzimuthAngle,le=n.maxAzimuthAngle;isFinite(ce)&&isFinite(le)&&(ce<-Math.PI?ce+=nt:ce>Math.PI&&(ce-=nt),le<-Math.PI?le+=nt:le>Math.PI&&(le-=nt),ce<=le?o.theta=Math.max(ce,Math.min(le,o.theta)):o.theta=o.theta>(ce+le)/2?Math.max(ce,o.theta):Math.min(le,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*l),C.setFromSpherical(o),C.applyQuaternion(oe),I.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Le=!1;if(n.zoomToCursor&&E){let Ae=null;if(n.object.isPerspectiveCamera){let st=C.length();Ae=q(st*l);let ct=st-Ae;n.object.position.addScaledVector(v,ct),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let st=new P(R.x,R.y,0);st.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Le=!0;let ct=new P(R.x,R.y,0);ct.unproject(n.object),n.object.position.sub(ct).add(st),n.object.updateMatrixWorld(),Ae=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ae).add(n.object.position):(rl.origin.copy(n.object.position),rl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(rl.direction))<zw?e.lookAt(n.target):(Ng.setFromNormalAndCoplanarPoint(n.object.up,n.target),rl.intersectPlane(Ng,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Le=!0);return l=1,E=!1,Le||re.distanceToSquared(n.object.position)>a||8*(1-ve.dot(n.object.quaternion))>a||Ye.distanceToSquared(n.target)>0?(n.dispatchEvent(Ig),re.copy(n.object.position),ve.copy(n.object.quaternion),Ye.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ge),n.domElement.removeEventListener("pointerdown",Se),n.domElement.removeEventListener("pointercancel",_),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",_),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ie),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new ja,c=new ja,l=1,h=new P,u=new Re,d=new Re,p=new Re,b=new Re,g=new Re,m=new Re,f=new Re,x=new Re,y=new Re,v=new P,R=new Re,E=!1,A=[],D={};function S(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function M(C){let Y=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Y)}function O(C){c.theta-=C}function B(C){c.phi-=C}let Z=function(){let C=new P;return function(oe,re){C.setFromMatrixColumn(re,0),C.multiplyScalar(-oe),h.add(C)}}(),L=function(){let C=new P;return function(oe,re){n.screenSpacePanning===!0?C.setFromMatrixColumn(re,1):(C.setFromMatrixColumn(re,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(oe),h.add(C)}}(),N=function(){let C=new P;return function(oe,re){let ve=n.domElement;if(n.object.isPerspectiveCamera){let Ye=n.object.position;C.copy(Ye).sub(n.target);let nt=C.length();nt*=Math.tan(n.object.fov/2*Math.PI/180),Z(2*oe*nt/ve.clientHeight,n.object.matrix),L(2*re*nt/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Z(oe*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),L(re*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C,Y){if(!n.zoomToCursor)return;E=!0;let oe=n.domElement.getBoundingClientRect(),re=C-oe.left,ve=Y-oe.top,Ye=oe.width,nt=oe.height;R.x=re/Ye*2-1,R.y=-(ve/nt)*2+1,v.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function Q(C){u.set(C.clientX,C.clientY)}function J(C){j(C.clientX,C.clientX),f.set(C.clientX,C.clientY)}function de(C){b.set(C.clientX,C.clientY)}function V(C){d.set(C.clientX,C.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let Y=n.domElement;O(2*Math.PI*p.x/Y.clientHeight),B(2*Math.PI*p.y/Y.clientHeight),u.copy(d),n.update()}function X(C){x.set(C.clientX,C.clientY),y.subVectors(x,f),y.y>0?H(M(y.y)):y.y<0&&$(M(y.y)),f.copy(x),n.update()}function se(C){g.set(C.clientX,C.clientY),m.subVectors(g,b).multiplyScalar(n.panSpeed),N(m.x,m.y),b.copy(g),n.update()}function me(C){j(C.clientX,C.clientY),C.deltaY<0?$(M(C.deltaY)):C.deltaY>0&&H(M(C.deltaY)),n.update()}function xe(C){let Y=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),Y=!0;break}Y&&(C.preventDefault(),n.update())}function Pe(C){if(A.length===1)u.set(C.pageX,C.pageY);else{let Y=Xe(C),oe=.5*(C.pageX+Y.x),re=.5*(C.pageY+Y.y);u.set(oe,re)}}function Ie(C){if(A.length===1)b.set(C.pageX,C.pageY);else{let Y=Xe(C),oe=.5*(C.pageX+Y.x),re=.5*(C.pageY+Y.y);b.set(oe,re)}}function Ee(C){let Y=Xe(C),oe=C.pageX-Y.x,re=C.pageY-Y.y,ve=Math.sqrt(oe*oe+re*re);f.set(0,ve)}function ke(C){n.enableZoom&&Ee(C),n.enablePan&&Ie(C)}function k(C){n.enableZoom&&Ee(C),n.enableRotate&&Pe(C)}function Ct(C){if(A.length==1)d.set(C.pageX,C.pageY);else{let oe=Xe(C),re=.5*(C.pageX+oe.x),ve=.5*(C.pageY+oe.y);d.set(re,ve)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let Y=n.domElement;O(2*Math.PI*p.x/Y.clientHeight),B(2*Math.PI*p.y/Y.clientHeight),u.copy(d)}function _e(C){if(A.length===1)g.set(C.pageX,C.pageY);else{let Y=Xe(C),oe=.5*(C.pageX+Y.x),re=.5*(C.pageY+Y.y);g.set(oe,re)}m.subVectors(g,b).multiplyScalar(n.panSpeed),N(m.x,m.y),b.copy(g)}function K(C){let Y=Xe(C),oe=C.pageX-Y.x,re=C.pageY-Y.y,ve=Math.sqrt(oe*oe+re*re);x.set(0,ve),y.set(0,Math.pow(x.y/f.y,n.zoomSpeed)),H(y.y),f.copy(x);let Ye=(C.pageX+Y.x)*.5,nt=(C.pageY+Y.y)*.5;j(Ye,nt)}function ae(C){n.enableZoom&&K(C),n.enablePan&&_e(C)}function Ue(C){n.enableZoom&&K(C),n.enableRotate&&Ct(C)}function Se(C){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",_)),Ce(C),C.pointerType==="touch"?ye(C):F(C))}function T(C){n.enabled!==!1&&(C.pointerType==="touch"?fe(C):ne(C))}function _(C){Fe(C),A.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",_)),n.dispatchEvent(Dg),r=s.NONE}function F(C){let Y;switch(C.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case zi.DOLLY:if(n.enableZoom===!1)return;J(C),r=s.DOLLY;break;case zi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;de(C),r=s.PAN}else{if(n.enableRotate===!1)return;Q(C),r=s.ROTATE}break;case zi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Q(C),r=s.ROTATE}else{if(n.enablePan===!1)return;de(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ku)}function ne(C){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(C);break;case s.DOLLY:if(n.enableZoom===!1)return;X(C);break;case s.PAN:if(n.enablePan===!1)return;se(C);break}}function ee(C){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(C.preventDefault(),n.dispatchEvent(Ku),me(C),n.dispatchEvent(Dg))}function ie(C){n.enabled===!1||n.enablePan===!1||xe(C)}function ye(C){switch(te(C),A.length){case 1:switch(n.touches.ONE){case js.ROTATE:if(n.enableRotate===!1)return;Pe(C),r=s.TOUCH_ROTATE;break;case js.PAN:if(n.enablePan===!1)return;Ie(C),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case js.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(C),r=s.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;k(C),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ku)}function fe(C){switch(te(C),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ct(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;_e(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(C),n.update();break;default:r=s.NONE}}function ge(C){n.enabled!==!1&&C.preventDefault()}function Ce(C){A.push(C.pointerId)}function Fe(C){delete D[C.pointerId];for(let Y=0;Y<A.length;Y++)if(A[Y]==C.pointerId){A.splice(Y,1);return}}function te(C){let Y=D[C.pointerId];Y===void 0&&(Y=new Re,D[C.pointerId]=Y),Y.set(C.pageX,C.pageY)}function Xe(C){let Y=C.pointerId===A[0]?A[1]:A[0];return D[Y]}n.domElement.addEventListener("contextmenu",ge),n.domElement.addEventListener("pointerdown",Se),n.domElement.addEventListener("pointercancel",_),n.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}});function ta(i){let e=new cn;return e.color.setScalar(i),e}var sr,Ju=He(()=>{hn();sr=class extends En{constructor(e=null){super();let t=new Oi;t.deleteAttribute("uv");let n=new Kt({side:an}),s=new Kt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new hs(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Ge(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new Ge(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Ge(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Ge(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Ge(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Ge(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new Ge(t,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let b=new Ge(t,ta(50));b.position.set(-16.116,14.37,8.208),b.scale.set(.1,2.428,2.739),this.add(b);let g=new Ge(t,ta(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);let m=new Ge(t,ta(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new Ge(t,ta(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let x=new Ge(t,ta(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);let y=new Ge(t,ta(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});function xs(i,e,{orbit:t=!1,spin:n=.35,scroll:s=!1}={}){let r=new ui({canvas:i,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(devicePixelRatio,2)),r.toneMapping=Ya,r.toneMappingExposure=1.1,r.shadowMap.enabled=!0,r.shadowMap.type=Xa;let a=new En;a.environment=new Fi(r).fromScene(new sr,.04).texture;let o=new vt(32,1,.1,100),c=new P(5,2.8,6.5),l=new P(0,.9,0);o.position.copy(c);let h=$n(),u=h.backlight===!1?0:(h.backlightStrength??100)/100,d=Ls(),p=new pi(16777215,2.4);p.position.set(3,6,4),p.castShadow=!0,p.shadow.mapSize.set(1024,1024),Object.assign(p.shadow.camera,{left:-4,right:4,top:4,bottom:-4}),a.add(p);let b=new hs(16773596,12*u,12);b.position.set(-3,1.5,-3),a.add(b);let g=new pi(16774374,3.2*u);g.position.set(-2,3.5,-5),a.add(g);let m=new Ge(new qr(5,64),new Xr({opacity:.22}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,a.add(m);let f=new Ge(new jr(2.3,2.33,128),new cn({color:10254925,transparent:!0,opacity:.35,side:2}));f.rotation.x=-Math.PI/2,f.position.y=.005,a.add(f);let x=new ir(o,i);x.target.copy(l),x.enableDamping=!0,x.enablePan=d.pan,x.enableRotate=t,x.minDistance=d.minZoom,x.maxDistance=d.maxZoom,x.maxPolarAngle=Math.PI*.49;let y=K=>{K.preventDefault(),K.stopPropagation()};d.pan&&i.addEventListener("click",y);let v,R=0,E,A=1,D=[1,1,1],S=!1,M=null,O=K=>{E=K,M=null,v.userData.tints.forEach(ae=>{ae.map=null,ae.color.set(K),ae.needsUpdate=!0})},B=[],Z=()=>{B=v.userData.tints.map(K=>({m:K,c:K.color.clone(),map:K.map}))},L=()=>{B.forEach(({m:K,c:ae,map:Ue})=>{K.userData.fabTok=-1,K.map&&K.map!==Ue&&K.map.dispose(),K.map=Ue,K.color.copy(ae),K.needsUpdate=!0})},N=()=>{M&&fs(v.userData.tints,M.f,M.m)},H=(K,ae)=>{K&&(M={f:K,m:ae},N())},$={},j=()=>{!v||!v.userData||Object.entries($).forEach(([K,ae])=>{let Ue=v.userData.finMap?.[K]||(K==="frame"?v.userData.frames:null);!Ue||!Ue.length||(typeof ae.mat=="string"?Ue.forEach(Se=>{Se.map=null,Se.color.set(ae.mat),Se.needsUpdate=!0}):Array.isArray(ae.mat)&&fs(Ue,ae.mat,ae.m))})},q=(K,ae,Ue=mi)=>{let Se=(K||"frame").toLowerCase().trim();$[Se]={mat:ae,m:Ue},j()},Q=K=>{q("frame",K)},J=K=>{A=K,v.userData.glows.forEach(ae=>ae.emissiveIntensity=K*3),b.intensity=12*K*u};function de(K){M=null,B=[],v&&a.remove(v);let ae=pt.find(_=>_.id===K),Ue=ae?.fabrics||[],Se=Ue.find(_=>_[2]===ae?.defaults?.fabric)||Ue[0];E=Se?.[1]||"#d4cabb";let T=Mi("model:"+K)||dt.models?.[K];T?(v=new gt,v.userData={tints:[],glows:[],frames:[],finMap:{}},eo(T).then(_=>{let F=_.scene,ne=new wt().setFromObject(F),ee=ne.getSize(new P),ie=ne.getCenter(new P),ye=2.6/Math.max(ee.x,ee.y,ee.z);F.scale.setScalar(ye),F.position.set(-ie.x*ye,-ne.min.y*ye,-ie.z*ye);let fe=[],ge=[],Ce=[],Fe={},te=qt?qt():[{id:"frame",name:"Frame",target:"frame"}],Xe=new Set(te.map(C=>(C.target||C.name||"").toLowerCase().trim()));Xe.add("frame"),F.traverse(C=>{C.isMesh&&(C.castShadow=C.receiveShadow=!0,[].concat(C.material).forEach(Y=>{let oe=(Y.name||"").toLowerCase().trim(),re=!1;Xe.forEach(ve=>{ve&&oe===ve&&((Fe[ve]??=[]).push(Y),ve==="frame"&&Ce.push(Y),re=!0)}),!re&&(Y.transparent&&Y.opacity<1||(ge.push(Y),oe==="tint"&&fe.push(Y)))}))}),v.userData.tints.push(...fe.length?fe:ge),v.userData.frames.push(...Ce),v.userData.finMap=Fe,v.add(F),Z(),j(),N(),Se&&H(Se,An(K,Se[2],"fabric"))}).catch(()=>v.add(su(K,E)))):v=su(K,E),a.add(v),R=0,J(A),Z(),j(),N(),Object.keys($).forEach(_=>delete $[_]),ae?.finishTypes?.forEach(_=>{let F=_.finishes.find(ne=>ne[2]===ae.defaults?.[_.id])||_.finishes[0];F&&q(_.target||_.name,F,An(K,F[2],_.id))}),Se&&H(Se,An(K,Se[2],"fabric"))}de(e);let V=()=>{let K=i.parentElement,ae=K.clientWidth||1,Ue=K.clientHeight||1;r.setSize(ae,Ue,!1),o.aspect=ae/Ue,o.updateProjectionMatrix()},X=new ResizeObserver(V);X.observe(i.parentElement);let se=i.parentElement,me=document.createElement("button");me.type="button",me.className="viewport-fullscreen",me.setAttribute("aria-label","Maximize 3D viewport"),me.title="Maximize 3D viewport",me.textContent="\u26F6",se.append(me);let xe=async()=>{if(se.classList.contains("viewport-fullscreen-fallback")){se.classList.remove("viewport-fullscreen-fallback"),V();return}try{document.fullscreenElement===se?await document.exitFullscreen():se.requestFullscreen?await se.requestFullscreen():(se.classList.add("viewport-fullscreen-fallback"),V())}catch(K){console.error("Could not change 3D viewport fullscreen state.",K),se.classList.add("viewport-fullscreen-fallback"),V()}};me.addEventListener("click",K=>{K.preventDefault(),K.stopPropagation(),xe()});let Pe=()=>{let K=document.fullscreenElement===se||se.classList.contains("viewport-fullscreen-fallback");me.setAttribute("aria-label",K?"Exit fullscreen 3D viewport":"Maximize 3D viewport"),me.title=K?"Exit fullscreen":"Maximize 3D viewport",V()};document.addEventListener("fullscreenchange",Pe);let Ie=!0,Ee=new IntersectionObserver(K=>Ie=K[0].isIntersecting);Ee.observe(i);let ke={x:0,y:0},k=K=>{ke.x=K.clientX/innerWidth-.5,ke.y=K.clientY/innerHeight-.5};addEventListener("pointermove",k);let Ct=0,_e=performance.now();return function K(ae){if(S)return;requestAnimationFrame(K);let Ue=Math.min((ae-_e)/1e3,.05);if(_e=ae,!!Ie){Ct+=Ue,R=Math.min(1,R+Ue*1.5);{let Se=.001+(1-Math.pow(1-R,3))*.999;v.scale.set(D[0]*Se,D[1]*Se,D[2]*Se)}x&&x.update(),t||(v.rotation.y=.6+Ct*n+(s?scrollY*.003:0)+ke.x*.9,x||(o.position.set(c.x,c.y-ke.y*.8,c.z+(s?scrollY*.002:0)),o.lookAt(l))),r.render(a,o)}}(_e),{destroy(){S=!0,X.disconnect(),Ee.disconnect(),removeEventListener("pointermove",k),document.removeEventListener("fullscreenchange",Pe),d.pan&&i.removeEventListener("click",y),me.remove(),x.dispose(),r.dispose(),r.forceContextLoss&&r.forceContextLoss()},getModel:()=>({object:v,dim:D}),setId:de,setColour:O,setFabric:H,setFrame:Q,setFinish:q,setGlow:J,setDims:(K,ae,Ue)=>{D=[K,ae,Ue]}}}var co=He(()=>{hn();Zu();Ju();Kc();Ys();Fn();yn()});var Hw={};var Ug,Og=He(()=>{yn();co();Ug=document.getElementById("hero-canvas");if(!ei.length)Ug.closest(".stage")?.remove();else{let i=xs(Ug,ei[0].id,{scroll:!1,spin:.15}),e=document.getElementById("hero-switch"),t=document.getElementById("hero-info");e.innerHTML=ei.map((o,c)=>`<button class="pill${c?"":" on"}" data-i="${c}"></button>`).join(""),e.querySelectorAll(".pill").forEach((o,c)=>o.textContent=ei[c].name.split(" ").pop());let n=o=>{t.replaceChildren();let c=document.createElement("b");c.textContent=o.name;let l=document.createElement("a");l.href="product.html?id="+encodeURIComponent(o.id),l.textContent="Customise in 3D",t.append(c,` \u2014 ${o.tag}. R ${Number(o.price).toLocaleString("en-ZA")} \xB7 `,l)};n(ei[0]);let s=0,r,a=o=>{s=o,i.setId(ei[o].id),n(ei[o]),e.querySelectorAll(".pill").forEach((c,l)=>c.classList.toggle("on",l===o))};e.onclick=o=>{let c=o.target.closest(".pill");c&&(a(+c.dataset.i),clearInterval(r))},r=setInterval(()=>a((s+1)%ei.length),7e3)}});var zg={};Zd(zg,{cardHtml:()=>Vi,mount:()=>Wi,release:()=>lo});var vs,Fg,Vi,kg,Bg,Wi,lo,na=He(()=>{co();yn();il();ti();yi();vs=new Map,Fg=new IntersectionObserver(i=>i.forEach(e=>{let t=e.target,n=t.querySelector(".stage");e.isIntersecting&&!vs.has(t)?(n.innerHTML="<canvas></canvas>",vs.set(t,xs(n.firstChild,t.dataset.id,{spin:.5}))):!e.isIntersecting&&vs.has(t)&&(vs.get(t).destroy(),vs.delete(t),n.innerHTML="")}),{rootMargin:"250px"}),Vi=(i,e)=>`<a class="card${e?" reveal":""}" data-id="${i.id}" href="product.html?id=${i.id}"><button class="heart" data-wish="${i.id}" aria-label="Save to wishlist" aria-pressed="false">\u2661</button><div class="stage"></div><div class="meta"><div><h3>${i.name}</h3><p>${i.cat} \xB7 ${i.tag}</p></div><span>R ${Number(i.price).toLocaleString("en-ZA")}</span></div><div class="acts2"><button class="qadd" data-add="${i.id}">+ Add to basket</button><button class="cmpb" data-cmp="${i.id}">Compare</button></div></a>`;document.addEventListener("click",i=>{let e=i.target.closest(".qadd");if(!e)return;i.preventDefault(),i.stopPropagation();let t=pt.find(a=>a.id===e.dataset.add);if(!t)return;let n=t.fabrics?.find(a=>a[2]===t.defaults?.fabric)||t.fabrics?.[0]||Wt[0],r=t.finishTypes.map(a=>a.finishes.find(o=>o[2]===t.defaults?.[a.id])||a.finishes[0]).filter(Boolean).map(a=>a[0]).join(", ");Hi({key:`p:${t.id}:${n[0]}:${r}:${t.dims.join("x")}`,name:t.name,desc:`${n[0]} \xB7 ${r} \xB7 ${t.dims.join(" \xD7 ")} cm`,price:Math.round(t.price/10)*10,swatch:n[1]})});kg=()=>document.querySelectorAll("[data-wish]").forEach(i=>{let e=pg(i.dataset.wish);i.classList.toggle("on",e),i.setAttribute("aria-pressed",e),i.textContent=i.dataset.label?e?"\u2665 Saved":"\u2661 Save to wishlist":e?"\u2665":"\u2661"});ys(kg);Bg=()=>document.querySelectorAll("[data-cmp]").forEach(i=>{let e=Xu(i.dataset.cmp);i.classList.toggle("on",e),i.textContent=e?"\u2713 Comparing":"Compare"});ea(Bg);document.addEventListener("click",i=>{let e=i.target.closest("[data-cmp]");e&&(i.preventDefault(),i.stopPropagation(),vg(e.dataset.cmp)||el("You can compare up to 3 pieces at a time","compare.html","Open comparison"))});document.addEventListener("click",i=>{let e=i.target.closest("[data-wish]");e&&(i.preventDefault(),i.stopPropagation(),gg(e.dataset.wish))});Wi=i=>{Fg.observe(i),queueMicrotask(kg),queueMicrotask(Bg)},lo=i=>i.querySelectorAll(".card").forEach(e=>{Fg.unobserve(e),vs.has(e)&&(vs.get(e).destroy(),vs.delete(e))})});var Gw={};var Qu,Hg,Gg=He(()=>{yn();na();Qu=document.querySelector("[data-cards]"),Hg=Qu.dataset.limit?ei:pt;Qu.innerHTML=Hg.length?Hg.map(i=>Vi(i,!0)).join(""):'<p class="st-note">No pieces to show yet.</p>';Qu.querySelectorAll(".card").forEach(Wi);window.watchReveals&&watchReveals()});function sa(i,e=1/0,t=null){ed||(ed=new $s(2,2,1,1)),ia||(ia=new Zn({uniforms:{blitTexture:new kc(i)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),ia.uniforms.blitTexture.value=i,ia.defines.IS_SRGB=i.colorSpace==at,ia.needsUpdate=!0,al||(al=new Ge(ed,ia),al.frustrumCulled=!1);let n=new vt,s=new En;s.add(al),t===null&&(t=ho=new ui({antialias:!1}));let r=Math.min(i.image.width,e),a=Math.min(i.image.height,e);t.setSize(r,a),t.clear(),t.render(s,n);let o=document.createElement("canvas"),c=o.getContext("2d");o.width=r,o.height=a,c.drawImage(t.domElement,0,0,r,a);let l=new $r(o);return l.minFilter=i.minFilter,l.magFilter=i.magFilter,l.wrapS=i.wrapS,l.wrapT=i.wrapT,l.name=i.name,ho&&(ho.forceContextLoss(),ho.dispose(),ho=null),l}var ho,ed,ia,al,td=He(()=>{hn()});function uo(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function Xw(i){return new TextEncoder().encode(i).buffer}function Yw(i){return uo(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Kw(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let a;i.itemSize>4?a=i.array[s*i.itemSize+r]:(r===0?a=i.getX(s):r===1?a=i.getY(s):r===2?a=i.getZ(s):r===3&&(a=i.getW(s)),i.normalized===!0&&(a=ds.normalize(a,i.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Yg(i){return Math.ceil(i/4)*4}function id(i,e=0){let t=Yg(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function jg(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Xg(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}var Vg,ra,et,nd,Nn,Wg,Vw,$g,Ww,$w,qg,qw,jw,sd,rd,ad,od,cd,ld,hd,ud,dd,fd,pd,md,gd,bd,Kg=He(()=>{hn();td();Vg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},ra=class{constructor(){this.pluginCallbacks=[],this.register(function(e){return new rd(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new ld(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new dd(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new cd(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new pd(e)}),this.register(function(e){return new md(e)}),this.register(function(e){return new gd(e)}),this.register(function(e){return new bd(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r=new sd,a=[];for(let o=0,c=this.pluginCallbacks.length;o<c;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.write(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},et={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},nd="KHR_mesh_quantization",Nn={};Nn[Lt]=et.NEAREST;Nn[Or]=et.NEAREST_MIPMAP_NEAREST;Nn[zs]=et.NEAREST_MIPMAP_LINEAR;Nn[jt]=et.LINEAR;Nn[Ka]=et.LINEAR_MIPMAP_NEAREST;Nn[li]=et.LINEAR_MIPMAP_LINEAR;Nn[bn]=et.CLAMP_TO_EDGE;Nn[Kn]=et.REPEAT;Nn[Ws]=et.MIRRORED_REPEAT;Wg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Vw=new we,$g=12,Ww=1179937895,$w=2,qg=8,qw=1313821514,jw=5130562;sd=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);let s=this,r=s.buffers,a=s.json;n=s.options;let o=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(c);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=l.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let p=id(d.result),b=new DataView(new ArrayBuffer(qg));b.setUint32(0,p.byteLength,!0),b.setUint32(4,jw,!0);let g=id(Xw(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(qg));m.setUint32(0,g.byteLength,!0),m.setUint32(4,qw,!0);let f=new ArrayBuffer($g),x=new DataView(f);x.setUint32(0,Ww,!0),x.setUint32(4,$w,!0);let y=$g+m.byteLength+g.byteLength+b.byteLength+p.byteLength;x.setUint32(8,y,!0);let v=new Blob([f,m,g,b,p],{type:"application/octet-stream"}),R=new FileReader;R.readAsArrayBuffer(v),R.onloadend=function(){t(R.result)}}}else if(a.buffers&&a.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let p=d.result;a.buffers[0].uri=p,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],s[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new P;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new P;for(let r=0,a=n.count;r<a;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(p){return p.colorSpace===at?function(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}:function(g){return g}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof Wr&&(e=sa(e)),t instanceof Wr&&(t=sa(t));let s=e?e.image:null,r=t?t.image:null,a=Math.max(s?s.width:0,r?r.width:0),o=Math.max(s?s.height:0,r?r.height:0),c=jg();c.width=a,c.height=o;let l=c.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,a,o);let h=l.getImageData(0,0,a,o);if(s){l.drawImage(s,0,0,a,o);let p=n(e),b=l.getImageData(0,0,a,o).data;for(let g=2;g<b.length;g+=4)h.data[g]=p(b[g]/256)*256}if(r){l.drawImage(r,0,0,a,o);let p=n(t),b=l.getImageData(0,0,a,o).data;for(let g=1;g<b.length;g+=4)h.data[g]=p(b[g]/256)*256}l.putImageData(h,0,0);let d=(e||t).clone();return d.source=new Br(c),d.colorSpace=rn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case et.BYTE:case et.UNSIGNED_BYTE:o=1;break;case et.SHORT:case et.UNSIGNED_SHORT:o=2;break;default:o=4}let c=Yg(s*e.itemSize*o),l=new DataView(new ArrayBuffer(c)),h=0;for(let p=n;p<n+s;p++)for(let b=0;b<e.itemSize;b++){let g;e.itemSize>4?g=e.array[p*e.itemSize+b]:(b===0?g=e.getX(p):b===1?g=e.getY(p):b===2?g=e.getZ(p):b===3&&(g=e.getW(p)),e.normalized===!0&&(g=ds.normalize(g,e.array))),t===et.FLOAT?l.setFloat32(h,g,!0):t===et.INT?l.setInt32(h,g,!0):t===et.UNSIGNED_INT?l.setUint32(h,g,!0):t===et.SHORT?l.setInt16(h,g,!0):t===et.UNSIGNED_SHORT?l.setUint16(h,g,!0):t===et.BYTE?l.setInt8(h,g):t===et.UNSIGNED_BYTE&&l.setUint8(h,g),h+=o}let u={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===et.ARRAY_BUFFER&&(u.byteStride=e.itemSize*o),this.byteOffset+=c,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let a=id(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,s(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,s){let r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=et.FLOAT;else if(e.array.constructor===Int32Array)o=et.INT;else if(e.array.constructor===Uint32Array)o=et.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=et.SHORT;else if(e.array.constructor===Uint16Array)o=et.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=et.BYTE;else if(e.array.constructor===Uint8Array)o=et.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let c=Kw(e,n,s),l;t!==void 0&&(l=e===t.index?et.ELEMENT_ARRAY_BUFFER:et.ARRAY_BUFFER);let h=this.processBufferView(e,o,n,s,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:s,max:c.max,min:c.min,type:a[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,a=r.cache,o=r.json,c=r.options,l=r.pending;a.images.has(e)||a.images.set(e,{});let h=a.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);let d={mimeType:s},p=jg();p.width=Math.min(e.width,c.maxTextureSize),p.height=Math.min(e.height,c.maxTextureSize);let b=p.getContext("2d");if(n===!0&&(b.translate(0,p.height),b.scale(1,-1)),e.data!==void 0){t!==Mn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let f=0;f<m.length;f+=4)m[f+0]=e.data[f+0],m[f+1]=e.data[f+1],m[f+2]=e.data[f+2],m[f+3]=e.data[f+3];b.putImageData(new ImageData(m,e.width,e.height),0,0)}else b.drawImage(e,0,0,p.width,p.height);c.binary===!0?l.push(Xg(p,s).then(m=>r.processBufferViewImage(m)).then(m=>{d.bufferView=m})):p.toDataURL!==void 0?d.uri=p.toDataURL(s):l.push(Xg(p,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));let g=o.images.push(d)-1;return h[u]=g,g}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Nn[e.magFilter],minFilter:Nn[e.minFilter],wrapS:Nn[e.wrapS],wrapT:Nn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Wr&&(e=sa(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");let o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,o)});let c=r.textures.push(o)-1;return s.textures.set(e,c),c}processMaterial(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(uo(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=.5,s.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){let o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),c={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(c,o),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){let o={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),s.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){let o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),s.emissiveTexture=l}}if(e.normalMap){let o={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),s.normalTexture=o}if(e.aoMap){let o={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),s.occlusionTexture=o}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===Yt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,s)});let a=n.materials.push(s)-1;return t.materials.set(e,a),a}processMesh(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let v=0,R=e.material.length;v<R;v++)s.push(e.material[v].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let a=e.geometry,o;e.isLineSegments?o=et.LINES:e.isLineLoop?o=et.LINE_LOOP:e.isLine?o=et.LINE_STRIP:e.isPoints?o=et.POINTS:o=e.material.wireframe?et.LINES:et.TRIANGLES;let c={},l={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=a.getAttribute("normal");p!==void 0&&!this.isNormalizedNormalAttribute(p)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let b=null;for(let v in a.attributes){if(v.slice(0,5)==="morph")continue;let R=a.attributes[v];if(v=d[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),t.attributes.has(this.getUID(R))){l[v]=t.attributes.get(this.getUID(R));continue}b=null;let A=R.array;v==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),b=new ot(new Uint16Array(A),R.itemSize,R.normalized));let D=this.processAccessor(b||R,a);D!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,R),l[v]=D,t.attributes.set(this.getUID(R),D))}if(p!==void 0&&a.setAttribute("normal",p),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let v=[],R=[],E={};if(e.morphTargetDictionary!==void 0)for(let A in e.morphTargetDictionary)E[e.morphTargetDictionary[A]]=A;for(let A=0;A<e.morphTargetInfluences.length;++A){let D={},S=!1;for(let M in a.morphAttributes){if(M!=="position"&&M!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}let O=a.morphAttributes[M][A],B=M.toUpperCase(),Z=a.attributes[M];if(t.attributes.has(this.getUID(O,!0))){D[B]=t.attributes.get(this.getUID(O,!0));continue}let L=O.clone();if(!a.morphTargetsRelative)for(let N=0,H=O.count;N<H;N++)for(let $=0;$<O.itemSize;$++)$===0&&L.setX(N,O.getX(N)-Z.getX(N)),$===1&&L.setY(N,O.getY(N)-Z.getY(N)),$===2&&L.setZ(N,O.getZ(N)-Z.getZ(N)),$===3&&L.setW(N,O.getW(N)-Z.getW(N));D[B]=this.processAccessor(L,a),t.attributes.set(this.getUID(Z,!0),D[B])}u.push(D),v.push(e.morphTargetInfluences[A]),e.morphTargetDictionary!==void 0&&R.push(E[A])}c.weights=v,R.length>0&&(c.extras={},c.extras.targetNames=R)}let g=Array.isArray(e.material);if(g&&a.groups.length===0)return null;let m=!1;if(g&&a.index===null){let v=[];for(let R=0,E=a.attributes.position.count;R<E;R++)v[R]=R;a.setIndex(v),m=!0}let f=g?e.material:[e.material],x=g?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,R=x.length;v<R;v++){let E={mode:o,attributes:l};if(this.serializeUserData(a,E),u.length>0&&(E.targets=u),a.index!==null){let D=this.getUID(a.index);(x[v].start!==void 0||x[v].count!==void 0)&&(D+=":"+x[v].start+":"+x[v].count),t.attributes.has(D)?E.indices=t.attributes.get(D):(E.indices=this.processAccessor(a.index,a,x[v].start,x[v].count),t.attributes.set(D,E.indices)),E.indices===null&&delete E.indices}let A=this.processMaterial(f[x[v].materialIndex]);A!==null&&(E.material=A),h.push(E)}m===!0&&a.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(v){v.writeMesh&&v.writeMesh(e,c)});let y=n.meshes.push(c)-1;return t.meshes.set(r,y),y}detectMeshQuantization(e,t){if(this.extensionsUsed[nd])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Vg[s]&&Vg[s].includes(n)&&(this.extensionsUsed[nd]=!0,this.extensionsRequired[nd]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ds.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=ra.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){let l=r[c],h=lt.parseTrackName(l.name),u=lt.findNode(t,h.nodeName),d=Wg[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name),null;let p=1,b=l.values.length/l.times.length;d===Wg.morphTargetInfluences&&(b/=u.morphTargetInfluences.length);let g;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",b/=3):l.getInterpolation()===rs?g="STEP":g="LINEAR",o.push({input:this.processAccessor(new ot(l.times,p)),output:this.processAccessor(new ot(l.values,b)),interpolation:g}),a.push({sampler:o.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let a=e.skeleton.bones[0];if(a===void 0)return null;let o=[],c=new Float32Array(r.bones.length*16),l=new Ve;for(let u=0;u<r.bones.length;++u)o.push(n.get(r.bones[u])),l.copy(r.boneInverses[u]),l.multiply(e.bindMatrix).toArray(c,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ot(c,16)),joints:o,skeleton:n.get(a)}),s.skin=t.skins.length-1}processNode(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let o=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();uo(o,[0,0,0,1])||(r.rotation=o),uo(c,[0,0,0])||(r.translation=c),uo(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),Yw(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let o=this.processMesh(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){let o=[];for(let c=0,l=e.children.length;c<l;c++){let h=e.children[c];if(h.visible||n.onlyVisible===!1){let u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,r)});let a=t.nodes.push(r)-1;return s.set(e,a),a}processScene(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let a=0,o=e.children.length;a<o;a++){let c=e.children[a];if(c.visible||n.onlyVisible===!1){let l=this.processNode(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}processObjects(e){let t=new En;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){let t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof En?this.processScene(e[s]):n.push(e[s]);n.length>0&&this.processObjects(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);this._invokeAll(function(s){s.afterParse&&s.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}},rd=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let o=s.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}},ad=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},od=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let a={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let a={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){let a={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},cd=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let a={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let a={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ld=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let a={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},hd=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let a={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ud=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},dd=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Vw)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let a={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){let a={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},fd=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let a={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){let a={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},pd=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let a={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},md=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},gd=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let a={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},bd=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),a=new Float32Array(s.count*4),o=new Float32Array(s.count*3),c=new Ve,l=new P,h=new on,u=new P;for(let p=0;p<s.count;p++)s.getMatrixAt(p,c),c.decompose(l,h,u),l.toArray(r,p*3),h.toArray(a,p*4),u.toArray(o,p*3);let d={TRANSLATION:n.processAccessor(new ot(r,3)),ROTATION:n.processAccessor(new ot(a,4)),SCALE:n.processAccessor(new ot(o,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};ra.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n)),o;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;o=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(a.evaluate(e),0),r.set(i.values,n),o=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(a.evaluate(e),i.values.length),o=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(a.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),o=c+1;break}}return i.times=s,i.values=r,o},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let a=s[r],o=lt.parseTrackName(a.name),c=lt.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Di)}let l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[c.uuid]===void 0){u=a.clone();let p=new u.ValueBufferType(l*u.times.length);for(let b=0;b<u.times.length;b++)p[b*l+h]=u.values[b];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=p,n[c.uuid]=u,t.push(u);continue}let d=a.createInterpolant(new a.ValueBufferType(1));u=n[c.uuid];for(let p=0;p<u.times.length;p++)u.values[p*l+h]=d.evaluate(u.times[p]);for(let p=0;p<a.times.length;p++){let b=this.insertKeyframe(u,a.times[p]);u.values[b*l+h]=a.values[p]}}return i.tracks=t,i}}});function aE(i,e){return rE(i,e||{},0,0)}function go(i,e){if(e){for(var t=new vn(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(nb)return nb.encode(i);for(var s=i.length,r=new vn(i.length+(i.length>>1)),a=0,o=function(h){r[a++]=h},n=0;n<s;++n){if(a+5>r.length){var c=new vn(a+8+(s-n<<1));c.set(r),r=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return cb(r,0,a)}function ub(i,e){e||(e={});var t={},n=[];hb(i,"",t,e);var s=0,r=0;for(var a in t){var o=t[a],c=o[0],l=o[1],h=l.level==0?0:8,u=go(a),d=u.length,p=l.comment,b=p&&go(p),g=b&&b.length,m=Sd(l.extra);if(d>65535)throw"filename too long";var f=h?aE(c,l):c,x=f.length,y=sE();y.p(c),n.push(lb(l,{size:c.length,crc:y.d(),c:f,f:u,m:b,u:d!=a.length||b&&p.length!=g,o:s,compression:h})),s+=30+d+m+x,r+=76+2*(d+m)+(g||0)+x}for(var v=new vn(r+22),R=s,E=r-s,A=0;A<n.length;++A){var u=n[A];ib(v,u.o,u,u.f,u.u,u.c.length);var D=30+u.f.length+Sd(u.extra);v.set(u.c,u.o+D),ib(v,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+D+(u.m?u.m.length:0)}return lE(v,s,n.length,E,R),v}var Zg,Zw,vn,xn,aa,Md,wd,Jg,sb,rb,Jw,xd,ab,cT,Qg,vd,$i,ut,mo,rr,ut,ut,ut,ut,cl,ut,Qw,eE,ob,cb,qi,fo,yd,_d,eb,po,ol,tb,tE,Ed,nE,iE,sE,rE,lb,Qt,hb,nb,oE,cE,Sd,ib,lE,db=He(()=>{Zg=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},Zw=function(i){return new Worker(i)};try{URL.revokeObjectURL(Zg(""))}catch{Zg=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Zw=function(e){return new Worker(e,{type:"module"})}}vn=Uint8Array,xn=Uint16Array,aa=Uint32Array,Md=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wd=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Jg=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),sb=function(i,e){for(var t=new xn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new aa(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},rb=sb(Md,2),Jw=rb[0],xd=rb[1];Jw[28]=258,xd[258]=28;ab=sb(wd,0),cT=ab[0],Qg=ab[1],vd=new xn(32768);for(ut=0;ut<32768;++ut)$i=(ut&43690)>>>1|(ut&21845)<<1,$i=($i&52428)>>>2|($i&13107)<<2,$i=($i&61680)>>>4|($i&3855)<<4,vd[ut]=(($i&65280)>>>8|($i&255)<<8)>>>1;mo=function(i,e,t){for(var n=i.length,s=0,r=new xn(e);s<n;++s)++r[i[s]-1];var a=new xn(e);for(s=0;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new xn(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=a[i[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[vd[u]>>>c]=l}else for(o=new xn(n),s=0;s<n;++s)i[s]&&(o[s]=vd[a[i[s]-1]++]>>>15-i[s]);return o},rr=new vn(288);for(ut=0;ut<144;++ut)rr[ut]=8;for(ut=144;ut<256;++ut)rr[ut]=9;for(ut=256;ut<280;++ut)rr[ut]=7;for(ut=280;ut<288;++ut)rr[ut]=8;cl=new vn(32);for(ut=0;ut<32;++ut)cl[ut]=5;Qw=mo(rr,9,0),eE=mo(cl,5,0),ob=function(i){return(i/8|0)+(i&7&&1)},cb=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof xn?xn:i instanceof aa?aa:vn)(t-e);return n.set(i.subarray(e,t)),n},qi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},fo=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},yd=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return[Ed,0];if(s==1){var a=new vn(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(R,E){return R.f-E.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};h!=s-1;)o=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=r[0].s,n=1;n<s;++n)r[n].s>d&&(d=r[n].s);var p=new xn(d+1),b=_d(t[h-1],p,0);if(b>e){var n=0,g=0,m=b-e,f=1<<m;for(r.sort(function(E,A){return p[A.s]-p[E.s]||E.f-A.f});n<s;++n){var x=r[n].s;if(p[x]>e)g+=f-(1<<b-p[x]),p[x]=e;else break}for(g>>>=m;g>0;){var y=r[n].s;p[y]<e?g-=1<<e-p[y]++-1:++n}for(;n>=0&&g;--n){var v=r[n].s;p[v]==e&&(--p[v],++g)}b=e}return[new vn(p),b]},_d=function(i,e,t){return i.s==-1?Math.max(_d(i.l,e,t+1),_d(i.r,e,t+1)):e[i.s]=t},eb=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new xn(++e),n=0,s=i[0],r=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==s&&o!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(s),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(s);r=1,s=i[o]}return[t.subarray(0,n),e]},po=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},ol=function(i,e,t){var n=t.length,s=ob(e+2);i[s]=n&255,i[s+1]=n>>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},tb=function(i,e,t,n,s,r,a,o,c,l,h){qi(e,h++,t),++s[256];for(var u=yd(s,15),d=u[0],p=u[1],b=yd(r,15),g=b[0],m=b[1],f=eb(d),x=f[0],y=f[1],v=eb(g),R=v[0],E=v[1],A=new xn(19),D=0;D<x.length;++D)A[x[D]&31]++;for(var D=0;D<R.length;++D)A[R[D]&31]++;for(var S=yd(A,7),M=S[0],O=S[1],B=19;B>4&&!M[Jg[B-1]];--B);var Z=l+5<<3,L=po(s,rr)+po(r,cl)+a,N=po(s,d)+po(r,g)+a+14+3*B+po(A,M)+(2*A[16]+3*A[17]+7*A[18]);if(Z<=L&&Z<=N)return ol(e,h,i.subarray(c,c+l));var H,$,j,q;if(qi(e,h,1+(N<L)),h+=2,N<L){H=mo(d,p,0),$=d,j=mo(g,m,0),q=g;var Q=mo(M,O,0);qi(e,h,y-257),qi(e,h+5,E-1),qi(e,h+10,B-4),h+=14;for(var D=0;D<B;++D)qi(e,h+3*D,M[Jg[D]]);h+=3*B;for(var J=[x,R],de=0;de<2;++de)for(var V=J[de],D=0;D<V.length;++D){var X=V[D]&31;qi(e,h,Q[X]),h+=M[X],X>15&&(qi(e,h,V[D]>>>5&127),h+=V[D]>>>12)}}else H=Qw,$=rr,j=eE,q=cl;for(var D=0;D<o;++D)if(n[D]>255){var X=n[D]>>>18&31;fo(e,h,H[X+257]),h+=$[X+257],X>7&&(qi(e,h,n[D]>>>23&31),h+=Md[X]);var se=n[D]&31;fo(e,h,j[se]),h+=q[se],se>3&&(fo(e,h,n[D]>>>5&8191),h+=wd[se])}else fo(e,h,H[n[D]]),h+=$[n[D]];return fo(e,h,H[256]),h+$[256]},tE=new aa([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ed=new vn(0),nE=function(i,e,t,n,s,r){var a=i.length,o=new vn(n+a+5*(1+Math.ceil(a/7e3))+s),c=o.subarray(n,o.length-s),l=0;if(!e||a<8)for(var h=0;h<=a;h+=65535){var u=h+65535;u<a?l=ol(c,l,i.subarray(h,u)):(c[h]=r,l=ol(c,l,i.subarray(h,a)))}else{for(var d=tE[e-1],p=d>>>13,b=d&8191,g=(1<<t)-1,m=new xn(32768),f=new xn(g+1),x=Math.ceil(t/3),y=2*x,v=function(_e){return(i[_e]^i[_e+1]<<x^i[_e+2]<<y)&g},R=new aa(25e3),E=new xn(288),A=new xn(32),D=0,S=0,h=0,M=0,O=0,B=0;h<a;++h){var Z=v(h),L=h&32767,N=f[Z];if(m[L]=N,f[Z]=L,O<=h){var H=a-h;if((D>7e3||M>24576)&&H>423){l=tb(i,c,0,R,E,A,S,M,B,h-B,l),M=D=S=0,B=h;for(var $=0;$<286;++$)E[$]=0;for(var $=0;$<30;++$)A[$]=0}var j=2,q=0,Q=b,J=L-N&32767;if(H>2&&Z==v(h-J))for(var de=Math.min(p,H)-1,V=Math.min(32767,h),X=Math.min(258,H);J<=V&&--Q&&L!=N;){if(i[h+j]==i[h+j-J]){for(var se=0;se<X&&i[h+se]==i[h+se-J];++se);if(se>j){if(j=se,q=J,se>de)break;for(var me=Math.min(J,se-2),xe=0,$=0;$<me;++$){var Pe=h-J+$+32768&32767,Ie=m[Pe],Ee=Pe-Ie+32768&32767;Ee>xe&&(xe=Ee,N=Pe)}}}L=N,N=m[L],J+=L-N+32768&32767}if(q){R[M++]=268435456|xd[j]<<18|Qg[q];var ke=xd[j]&31,k=Qg[q]&31;S+=Md[ke]+wd[k],++E[257+ke],++A[k],O=h+j,++D}else R[M++]=i[h],++E[i[h]]}}l=tb(i,c,r,R,E,A,S,M,B,h-B,l),!r&&l&7&&(l=ol(c,l+1,Ed))}return cb(o,0,n+ob(l)+s)},iE=function(){for(var i=new aa(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;i[e]=t}return i}(),sE=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=iE[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},rE=function(i,e,t,n,s){return nE(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!s)},lb=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Qt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};hb=function(i,e,t,n){for(var s in i){var r=i[s],a=e+s;r instanceof vn?t[a]=[r,n]:Array.isArray(r)?t[a]=[r[0],lb(n,r[1])]:hb(r,a+"/",t,n)}},nb=typeof TextEncoder<"u"&&new TextEncoder,oE=typeof TextDecoder<"u"&&new TextDecoder,cE=0;try{oE.decode(Ed,{stream:!0}),cE=1}catch{}Sd=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},ib=function(i,e,t,n,s,r,a,o){var c=n.length,l=t.extra,h=o&&o.length,u=Sd(l);Qt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r==null&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(Qt(i,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,r!=null&&(Qt(i,e,t.crc),Qt(i,e+4,r),Qt(i,e+8,t.size)),Qt(i,e+12,c),Qt(i,e+14,u),e+=16,a!=null&&(Qt(i,e,h),Qt(i,e+6,t.attrs),Qt(i,e+10,a),e+=14),i.set(n,e),e+=c,u)for(var b in l){var g=l[b],m=g.length;Qt(i,e,+b),Qt(i,e+2,m),i.set(g,e+4),e+=4+m}return h&&(i.set(o,e),e+=h),e},lE=function(i,e,t,n,s){Qt(i,e,101010256),Qt(i,e+8,t),Qt(i,e+10,t),Qt(i,e+12,n),Qt(i,e+16,s)}});function hE(i,e){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let t=1024/Math.max(i.width,i.height),n=document.createElement("canvas");n.width=i.width*Math.min(1,t),n.height=i.height*Math.min(1,t);let s=n.getContext("2d");return e===!0&&(s.translate(0,n.height),s.scale(1,-1)),s.drawImage(i,0,0,n.width,n.height),n}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}function gb(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function uE(i){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${i.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${i.ar.planeAnchoring.alignment}"

`}function dE(){return`
		}
	}
}

`}function fE(i){let e=gb();return e+=i,go(e)}function pE(i,e,t){let n="Object_"+i.id,s=bb(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function bb(i){let e=i.elements;return`( ${ll(e,0)}, ${ll(e,4)}, ${ll(e,8)}, ${ll(e,12)} )`}function ll(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function mE(i){return`
def "Geometry"
{
${gE(i)}
}
`}function gE(i){let e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${bE(i)}]
		int[] faceVertexIndices = [${yE(i)}]
		normal3f[] normals = [${fb(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${fb(t.position,n)}]
${vE(t)}
		uniform token subdivisionScheme = "none"
	}
`}function bE(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function yE(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function fb(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),a=i.getZ(n);t.push(`(${s.toPrecision(dn)}, ${r.toPrecision(dn)}, ${a.toPrecision(dn)})`)}return t.join(", ")}function xE(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(dn)}, ${1-s.toPrecision(dn)})`)}return e.join(", ")}function vE(i){let e="";for(let t=0;t<4;t++){let n=t>0?t:"",s=i["uv"+n];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${n} = [${xE(s)}] (
			interpolation = "vertex"
		)`)}return e}function _E(i,e,t=!1){let n=[];for(let s in i){let r=i[s];n.push(SE(r,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function SE(i,e,t=!1){let n="			",s=[],r=[];function a(o,c,l){let h=o.source.id+"_"+o.flipY;e[h]=o;let u=o.channel>0?"st"+o.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},p=o.repeat.clone(),b=o.offset.clone(),g=o.rotation,m=Math.sin(g),f=Math.cos(g);return b.y=1-b.y-p.y,t?(b.x=b.x/p.x,b.y=b.y/p.y,b.x+=m/p.x,b.y+=f-1):(b.x+=m*p.x,b.y+=(1-f)*p.y),`
		def Shader "PrimvarReader_${c}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${u}"
			float2 outputs:result
		}

		def Shader "Transform2d_${c}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${c}.outputs:result>
			float inputs:rotation = ${(g*(180/Math.PI)).toFixed(dn)}
			float2 inputs:scale = ${mb(p)}
			float2 inputs:translation = ${mb(b)}
			float2 outputs:result
		}

		def Shader "Texture_${o.id}_${c}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${c}.outputs:result>
			${l!==void 0?"float4 inputs:scale = "+ME(l):""}
			token inputs:sourceColorSpace = "${o.colorSpace===rn?"raw":"sRGB"}"
			token inputs:wrapS = "${d[o.wrapS]}"
			token inputs:wrapT = "${d[o.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===Yt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(s.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),s.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),r.push(a(i.map,"diffuse",i.color))):s.push(`${n}color3f inputs:diffuseColor = ${pb(i.color)}`),i.emissiveMap!==null?(s.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),r.push(a(i.emissiveMap,"emissive"))):i.emissive.getHex()>0&&s.push(`${n}color3f inputs:emissiveColor = ${pb(i.emissive)}`),i.normalMap!==null&&(s.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),r.push(a(i.normalMap,"normal"))),i.aoMap!==null&&(s.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),r.push(a(i.aoMap,"occlusion"))),i.roughnessMap!==null&&i.roughness===1?(s.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),r.push(a(i.roughnessMap,"roughness"))):s.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null&&i.metalness===1?(s.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),r.push(a(i.metalnessMap,"metallic"))):s.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),s.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(a(i.alphaMap,"opacity"))):s.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(s.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),s.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),s.push(`${n}float inputs:ior = ${i.ior}`)),`
	def Material "Material_${i.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${s.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>

${r.join(`
`)}

	}
`}function pb(i){return`(${i.r}, ${i.g}, ${i.b})`}function ME(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function mb(i){return`(${i.x}, ${i.y})`}function wE(i){let e=i.name?i.name:"Camera_"+i.id,t=bb(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(dn)}, ${i.far.toPrecision(dn)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(dn)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(dn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(dn)}, ${i.far.toPrecision(dn)})
			float focalLength = ${i.getFocalLength().toPrecision(dn)}
			float focusDistance = ${i.focus.toPrecision(dn)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(dn)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(dn)}
		}
	
	`}var hl,dn,yb=He(()=>{hn();db();td();hl=class{async parse(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1},t);let n={},s="model.usda";n[s]=null;let r=gb();r+=uE(t);let a={},o={};e.traverseVisible(l=>{if(l.isMesh){let h=l.geometry,u=l.material;if(u.isMeshStandardMaterial){let d="geometries/Geometry_"+h.id+".usda";if(!(d in n)){let p=mE(h);n[d]=fE(p)}u.uuid in a||(a[u.uuid]=u),r+=pE(l,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}else l.isCamera&&(r+=wE(l))}),r+=dE(),r+=_E(a,o,t.quickLookCompatible),n[s]=go(r),r=null;for(let l in o){let h=o[l];h.isCompressedTexture===!0&&(h=sa(h));let u=hE(h.image,h.flipY),d=await new Promise(p=>u.toBlob(p,"image/png",1));n[`textures/Texture_${l}.png`]=new Uint8Array(await d.arrayBuffer())}let c=0;for(let l in n){let h=n[l],u=34+l.length;c+=u;let d=c&63;if(d!==4){let p=64-d,b=new Uint8Array(p);n[l]=[h,{extra:{12345:b}}]}c=h.length}return ub(n,{level:0})}};dn=7});function vb(i,e){let t=i.userData;i.userData={};let n=i.clone(!0);i.userData=t,n.scale.set(1,1,1),n.position.set(0,0,0),n.rotation.set(0,0,0);let s=new gt,r=new gt;s.add(n),r.add(s),r.updateMatrixWorld(!0);let a=new wt().setFromObject(r);if(a.isEmpty())return null;let o=a.getSize(new P);e&&s.scale.set(e[0]/100/o.x,e[2]/100/o.y,e[1]/100/o.z),r.updateMatrixWorld(!0),a=new wt().setFromObject(r);let c=a.getCenter(new P);return s.position.set(-c.x,-a.min.y,-c.z),r.traverse(l=>{l.userData={}}),r}function xb(i,e){let t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)}async function ul(i,e,t){if(!i){alert("The model is still loading. Please try again in a moment.");return}let n=document.createElement("div");n.className="armodal",n.innerHTML='<div class="arbox" role="dialog" aria-modal="true"><button class="arx" aria-label="Close">\u2715</button><h3></h3><div class="arv"><p class="st-note">Preparing your 3D model\u2026</p></div><p class="st-note" id="arnote"></p><div class="hero-ctl" style="margin-top:1rem"><button class="btn ghost" data-f="glb">Download GLB</button><button class="btn ghost" data-f="usdz">Download USDZ</button></div></div>',n.querySelector("h3").textContent=e,document.body.append(n);let s="",r=()=>{s&&URL.revokeObjectURL(s),n.remove()};n.querySelector(".arx").onclick=r,n.onclick=a=>{a.target===n&&r()};try{let[a,o]=await Promise.all([EE(i),AE(i).catch(()=>null)]);await RE(),s=URL.createObjectURL(a);let c=document.createElement("model-viewer");Object.entries({src:s,alt:e,ar:"","ar-modes":"webxr scene-viewer quick-look","ar-scale":"fixed","camera-controls":"","auto-rotate":"","shadow-intensity":"1"}).forEach(([u,d])=>c.setAttribute(u,d)),c.style.cssText="width:100%;height:100%";let l=document.createElement("button");l.slot="ar-button",l.className="btn",l.textContent="View in your room",l.style.cssText="position:absolute;bottom:1rem;left:50%;transform:translateX(-50%)",c.append(l),n.querySelector(".arv").replaceChildren(c),n.querySelector("#arnote").textContent='On a phone or tablet, tap "View in your room" to place it at real size in your space (needs HTTPS). On a computer you can rotate it here or download the files.',n.querySelector("[data-f=glb]").onclick=()=>xb(a,t+".glb");let h=n.querySelector("[data-f=usdz]");o?h.onclick=()=>xb(o,t+".usdz"):h.hidden=!0}catch(a){n.querySelector(".arv").innerHTML="",n.querySelector("#arnote").textContent=a.message||"Could not prepare the 3D model."}}var EE,AE,TE,RE,Ad=He(()=>{hn();Kg();yb();EE=async i=>new Blob([await new ra().parseAsync(i,{binary:!0})],{type:"model/gltf-binary"}),AE=async i=>new Blob([await new hl().parse(i)],{type:"model/vnd.usdz+zip"});RE=()=>TE??=new Promise((i,e)=>{let t=document.createElement("script");t.type="module",t.src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.4.0/dist/model-viewer.min.js",t.onload=i,t.onerror=()=>e(new Error("Could not load the AR viewer. Check your internet connection.")),document.head.append(t)})});function _b(i){let e=n=>document.getElementById(n),t=async()=>{let n=await xt.reviews(i).catch(()=>[]),s=n.length?n.reduce((a,o)=>a+o.rating,0)/n.length:0;e("rev-sum").textContent=n.length?`${s.toFixed(1)} / 5 \xB7 ${n.length} review${n.length>1?"s":""}`:"No reviews yet",e("rev-list").replaceChildren(...n.length?n.map(a=>{let o=document.createElement("div");o.className="rv";let c=document.createElement("b"),l=document.createElement("p"),h=document.createElement("small");return c.textContent="\u2605".repeat(a.rating)+"\u2606".repeat(5-a.rating)+"  "+a.title,l.textContent=a.body,h.textContent=`${a.name} \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")}`,o.append(c,l,h),o}):[Object.assign(document.createElement("p"),{textContent:"Be the first to share your experience with this piece.",className:"st-note"})]);let r=Jt();e("rev-form").hidden=!r,e("rev-signin").hidden=!!r};e("rev-form").onsubmit=async n=>{n.preventDefault();try{let s=await xt.addReview({pid:i,rating:+e("rv-r").value,title:e("rv-t").value.trim(),body:e("rv-b").value.trim()});n.target.reset(),e("rv-msg").textContent=s&&s.pending?"Thank you. Your review will appear once it has been approved.":"Thank you for your review."}catch(s){e("rv-msg").textContent=s.message}},ys(t),t()}var Sb=He(()=>{yi()});var CE={};var Bt,bo,Je,Mb=He(()=>{yn();co();ti();Ad();Sb();Bt=i=>document.getElementById(i),bo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Je=pt.find(i=>i.id===new URLSearchParams(location.search).get("id"))||pt[0];if(!Je)location.replace("shop.html");else{let g=function(){let f=Je.dims,x=Je.price;Bt("p-price").textContent="R "+x.toLocaleString("en-ZA");let y=Object.values(u).map(v=>v[0]).join(", ");c={d:f,price:x,ftxt:y}};document.title=`${Je.name} | Dekara Designs`,Bt("p-tag").textContent=Je.cat+" \xB7 "+Je.tag,Bt("p-name").textContent=Je.name,Bt("p-desc").textContent=Je.desc,Bt("p-spec").innerHTML=`<div><span>Construction</span>${bo(Je.mat)}</div><div><span>Delivery</span>4\u20136 weeks</div>`;let[i,e,t]=Je.dims;Bt("p-dim-width").textContent=`WIDTH \xB7 ${i} cm`,Bt("p-dim-depth").textContent=`DEPTH \xB7 ${e} cm`,Bt("p-dim-height").textContent=`HEIGHT \xB7 ${t} cm`;let n=Bt("p-dimensions-toggle"),s=Bt("p-dimensions");s.setAttribute("aria-label",`Model dimensions: width ${i} cm, depth ${e} cm, height ${t} cm`),n.onclick=()=>{let f=n.getAttribute("aria-expanded")!=="true";n.setAttribute("aria-expanded",String(f)),n.textContent=f?"Hide dimensions":"Show dimensions",s.hidden=!f,s.setAttribute("aria-hidden",String(!f))};let r=xs(Bt("p-canvas"),Je.id,{orbit:!0}),a=Je.fabrics&&Je.fabrics.length?Je.fabrics:[["Oyster","#d4cabb","oyster",null,""]],o=a.find(f=>f[2]===Je.defaults?.fabric)||a[0],c,l=null,h=Je.finishTypes||[{id:"frame",name:"Frame",target:"frame",finishes:gi},{id:"fabric",name:"Fabric",target:"fabric",materialType:"Fabric",finishes:a}],u={};h.forEach(f=>{u[f.id]=f.finishes.find(x=>x[2]===Je.defaults?.[f.id])||f.finishes[0]||gi[0]});let d=()=>r.setFabric(o,l||An(Je.id,o[2],"fabric")),p=f=>{let x=a.find(y=>y[2]===f);x&&(o=x,l=null,d(),g())},b=Bt("p-finishes");h.forEach(f=>{let x=document.createElement("label"),y=document.createElement("span");x.append(`${f.name} finish \xB7 `,y),y.textContent=u[f.id]?.[0]||"";let v=document.createElement("div");v.className="sw",v.innerHTML=(f.finishes||[]).map(([E,A,D,S],M)=>`<button class="${M?"":"on"}" style="background:${S?`url(${bo(S)}) center/cover`:bo(A)}" title="${bo(E)}" aria-label="${bo(E)}" data-i="${M}"></button>`).join("");let R=E=>{E&&(f.id==="fabric"&&p(E[2]),u[f.id]=E,v.querySelectorAll("button").forEach(A=>A.classList.toggle("on",f.finishes[A.dataset.i]===E)),y.textContent=E[0],r.setFinish(f.target||f.name,E,An(Je.id,E[2],f.id)),g())};v.onclick=E=>{let A=E.target.closest("button");A&&R(f.finishes[A.dataset.i])},b.append(x,v),u[f.id]&&R(u[f.id]),f.select=R}),g(),d(),Bt("p-add").onclick=()=>Hi({key:`p:${Je.id}:${o[0]}:${c.ftxt}:${c.d.join("x")}`,name:Je.name,desc:`${o[0]} \xB7 ${c.ftxt} \xB7 ${c.d.join(" \xD7 ")} cm`,price:c.price,swatch:o[1]}),Promise.resolve().then(()=>(na(),zg)).then(({cardHtml:f,mount:x})=>{let y=[...pt.filter(v=>v.cat===Je.cat&&v.id!==Je.id),...pt.filter(v=>v.cat!==Je.cat)].slice(0,4);Bt("related").innerHTML=y.map(v=>f(v)).join(""),Bt("related").querySelectorAll(".card").forEach(x)}),Bt("p-gallery").innerHTML=[1,2,3].map(f=>`<div data-slot="gallery:${Je.id}:${f}" data-label="Photo ${f}"></div>`).join(""),applySlots(),Bt("p-wish").dataset.wish=Je.id,Bt("p-cmp").dataset.cmp=Je.id,Bt("p-ar").onclick=()=>{let f=vb(r.getModel().object,c.d);ul(f,Je.name,"dekara-"+Je.id)},_b(Je.id);let m=eu.flatMap(f=>qc(Je.id,f.id).map(x=>({key:iu(x[2],f.id),label:`${f.name}: ${x[0]}`,kind:"finish",material:x,ft:f})));window.__prod={piece:Je,fabrics:Je.fabrics,current:()=>o||Je.fabrics[0],mappingOptions:m,mapping:f=>{let x=m.find(y=>y.key===f);return x?An(Je.id,x.material[2],x.ft?.id):An(Je.id,f)},selectMapping:f=>{let x=m.find(y=>y.key===f);x&&(x.ft.select?x.ft.select(x.material):x.ft.id==="fabric"?(o=x.material,l=null,r.setFabric(x.material,An(Je.id,x.material[2],"fabric"))):r.setFinish(x.ft.target||x.ft.name,x.material,An(Je.id,x.material[2],x.ft.id)),g())},previewMapping:(f,x)=>{let y=m.find(v=>v.key===f);y&&(y.ft.select&&y.ft.select(y.material),y.ft.id==="fabric"?(o=y.material,l=x,r.setFabric(y.material,x)):r.setFinish(y.ft.target||y.ft.name,y.material,x),g())}},dispatchEvent(new Event("prod-ready"))}});var PE={};var Ab,Tb,wb,Eb,Rb=He(()=>{yn();Fn();yi();Ab=new URLSearchParams(location.search),Tb=document.getElementById("piece");Tb.innerHTML='<option value="">General enquiry</option>'+pt.map(i=>`<option value="${i.id}">${i.name}</option>`).join("");Tb.value=Ab.get("piece")||"";Promise.resolve().then(()=>(ti(),Gi)).then(i=>{document.getElementById("msg").value=Ab.get("msg")||(i.list().length?`I'd like a quote for the following items:

${i.summaryText()}`:"")});wb=$n(),Eb=document.querySelector(".spec");[["Phone",wb.phone],["Email",wb.email]].forEach(([i,e])=>{if(!e||!Eb)return;let t=document.createElement("div"),n=document.createElement("span");n.textContent=i,t.append(n,document.createTextNode(e)),Eb.append(t)});document.getElementById("f").addEventListener("submit",async i=>{i.preventDefault();let e=i.target,t=e.querySelector("button[type=submit]"),n=Object.fromEntries(new FormData(e));t.disabled=!0;try{await xt.contact({name:n.name,email:n.email,piece:n.piece||"",message:n.msg||""}),e.style.display="none",document.getElementById("ok").style.display="block"}catch(s){let r=document.getElementById("cerr");r||(r=document.createElement("p"),r.id="cerr",r.className="err",e.after(r)),r.textContent=s.message||"Could not send your message. Please try again.",t.disabled=!1}})});var LE={};function Cb(){let i=bi(),e=so();if(!i.length){_s("basket-list").innerHTML='<div class="none"><h3>Your basket is empty</h3><p>Add pieces from the shop, or build one in the Custom Studio.</p><a class="btn" href="shop.html">Browse the shop</a> <a class="btn ghost" href="custom-studio.html">Custom Studio</a></div>',_s("basket-sum").style.display="none";return}_s("basket-sum").style.display="",_s("print-head").innerHTML=`<h2>Dekara Designs \xB7 Quotation</h2><p>Quote Q-${new Date().toISOString().slice(2,10).replace(/-/g,"")} \xB7 ${new Date().toLocaleDateString("en-ZA")} \xB7 valid for 14 days. Prices include 15% VAT. Delivery 4\u20136 weeks; delivery fee confirmed at checkout.</p>`,_s("basket-list").innerHTML=i.map(t=>`<div class="bk-row"><span class="dot" style="background:${oa(t.swatch||"#ddd")}"></span><div class="bk-info"><h3>${oa(t.name)}</h3><p>${oa(t.desc)}</p><button class="lnk" data-rm="${oa(t.key)}">Remove</button></div><div class="qty"><button data-q="${oa(t.key)}" data-d="-1" aria-label="Decrease quantity">\u2212</button><span>${t.qty}</span><button data-q="${oa(t.key)}" data-d="1" aria-label="Increase quantity">+</button></div><b>${Et(t.price*t.qty)}</b></div>`).join(""),_s("basket-sum").innerHTML=`<h3>Summary</h3><div class="st-sum"><div><span>Items (${io()})</span>${Et(er())}</div><div><span>Delivery</span>${Et(e.delivery)} at checkout</div></div><div class="st-total"><span style="color:var(--mut)">Total incl. VAT</span><b>${Et(er()+e.delivery)}</b></div>
 <div style="display:grid;gap:.7rem;margin-top:1.4rem"><a class="btn" href="contact.html?from=basket" style="justify-content:center">Request a quote</a>${e.payNow?'<a class="btn ghost" href="checkout.html" style="justify-content:center">Pay now (demo)</a>':""}<button class="btn ghost" id="bk-print" style="justify-content:center">Print quote / save as PDF</button><a class="lnk" href="shop.html">Continue shopping</a><button class="lnk" id="bk-clear">Clear basket</button></div>
 <p class="st-note">Delivery takes 4\u20136 weeks. Prices include 15% VAT. Delivery fee applies within Johannesburg and surrounding areas.</p>`}var _s,oa,Pb=He(()=>{ti();_s=i=>document.getElementById(i),oa=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);_s("basket-list").onclick=i=>{let e=i.target.closest("[data-rm]"),t=i.target.closest("[data-q]");if(e&&zu(e.dataset.rm),t){let n=bi().find(s=>s.key===t.dataset.q);n&&Hu(n.key,n.qty+Number(t.dataset.d))}};_s("basket-sum").onclick=i=>{i.target.id==="bk-print"&&print(),i.target.id==="bk-clear"&&confirm("Remove everything from your basket?")&&tr()};ro(Cb);Cb()});var NE={};var Rt,yo,ca,Td,xo,Ss,IE,DE,Lb=He(()=>{ti();yi();Fn();Rt=i=>document.getElementById(i),yo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ca=so(),Td=er(),xo=bi().length?ca.delivery:0,Ss=Td+xo,IE=()=>bi().map(i=>`<div><span>${i.qty}\xD7 ${yo(i.name)}<br><small>${yo(i.desc)}</small></span>${Et(i.price*i.qty)}</div>`).join(""),DE=`<h3>Order summary</h3><div class="st-sum">${IE()}<div><span>Delivery</span>${Et(xo)}</div></div><div class="st-total"><span style="color:var(--mut)">Total</span><b>${Et(Ss)}</b></div><div class="st-meta"><span>Includes 15% VAT</span><b>${Et(Bu(Ss))}</b></div>`;if(!ca.payNow||!bi().length)Rt("co-wrap").innerHTML=`<div class="none" style="grid-column:1/-1"><h3>${ca.payNow?"Your basket is empty":"Online payment is not available"}</h3><p>${ca.payNow?"Add pieces before checking out.":"Please request a quote and our team will arrange payment with you."}</p><a class="btn" href="${ca.payNow?"shop.html":"basket.html"}">${ca.payNow?"Browse the shop":"Back to basket"}</a></div>`;else{Rt("co-sum").innerHTML=DE;let i=Jt();i&&(Rt("name").value=i.name,Rt("email").value=i.email),Rt("co-pay").textContent="Pay "+Et(Ss);let e=r=>{let a=0,o=!1;for(let c=r.length-1;c>=0;c--){let l=+r[c];o&&(l*=2,l>9&&(l-=9)),a+=l,o=!o}return a%10===0};Rt("cc").oninput=r=>r.target.value=r.target.value.replace(/\D/g,"").slice(0,19).replace(/(.{4})/g,"$1 ").trim(),Rt("exp").oninput=r=>{let a=r.target.value.replace(/\D/g,"").slice(0,4);a.length>2&&(a=a.slice(0,2)+"/"+a.slice(2)),r.target.value=a};let t=r=>{Rt("co-err").textContent=r,Rt("co-err").hidden=!1,Rt("co-pay").disabled=!1,Rt("co-pay").textContent="Pay "+Et(Ss)},n=!!dt.apiBase;if(n){Rt("cc").closest("fieldset").hidden=!0,Rt("co-pay").textContent="Continue to secure payment ("+Et(Ss)+")";let r=document.querySelector(".demo-banner");r&&(r.innerHTML="<b>Secure payment.</b> You will be taken to PayFast to pay. We never see or store your card details.")}async function s(r){r.preventDefault(),Rt("co-err").hidden=!0;let a=Object.fromEntries(new FormData(r.target));for(let o of["name","email","phone","address","suburb","city","postal"])if(!String(a[o]||"").trim())return t("Please complete all fields.");if(!/^\S+@\S+\.\S+$/.test(a.email))return t("Please enter a valid email address.");Rt("co-pay").disabled=!0,Rt("co-pay").textContent="Preparing payment\u2026";try{let o=await xt.createOrder({name:a.name,email:a.email,phone:a.phone,address:`${a.address}, ${a.suburb}, ${a.city}, ${a.postal}`,items:bi(),subtotal:Td,delivery:xo,total:Ss});if(!o||!o.payfast)throw new Error("Payment could not be started. Please try again.");try{sessionStorage.setItem("dekara-last-order",o.ref||"")}catch{}let c=document.createElement("form");c.method="POST",c.action=o.payfast.url,Object.entries(o.payfast.fields).forEach(([l,h])=>{let u=document.createElement("input");u.type="hidden",u.name=l,u.value=h,c.append(u)}),document.body.append(c),c.submit()}catch(o){t(o.message||"Something went wrong.")}}Rt("co-form").onsubmit=r=>{if(n)return s(r);r.preventDefault(),Rt("co-err").hidden=!0;let a=Object.fromEntries(new FormData(r.target)),o=a.cc.replace(/\s/g,"");for(let l of["name","email","phone","address","suburb","city","postal","cardname"])if(!String(a[l]||"").trim())return t("Please complete all fields.");if(!/^\S+@\S+\.\S+$/.test(a.email))return t("Please enter a valid email address.");if(o.length<13||!e(o))return t("That card number does not look valid.");let c=/^(\d\d)\/(\d\d)$/.exec(a.exp||"");if(!c||+c[1]<1||+c[1]>12||new Date(2e3+ +c[2],+c[1],1)<=new Date)return t("Please enter a valid expiry date (MM/YY).");if(!/^\d{3,4}$/.test(a.cvc))return t("Please enter a valid security code.");Rt("co-pay").disabled=!0,Rt("co-pay").textContent="Processing\u2026",setTimeout(async()=>{if(o==="4000000000000002")return t("Your card was declined (demo decline). Try 4242 4242 4242 4242.");let l="CD-"+Date.now().toString(36).toUpperCase().slice(-6),h={ref:l,date:new Date().toISOString(),name:a.name,email:a.email,phone:a.phone,address:`${a.address}, ${a.suburb}, ${a.city}, ${a.postal}`,items:bi(),subtotal:Td,delivery:xo,total:Ss,last4:o.slice(-4)};try{await xt.createOrder(h)}catch{}tr(),Rt("co-wrap").hidden=!0;let u=Rt("co-done");u.hidden=!1,u.innerHTML=`<div class="studio" style="max-width:680px;margin:2rem auto;text-align:center"><span class="eyebrow">Demo order confirmed</span><h2>Thank you, ${yo(a.name.split(" ")[0])}.</h2><p class="lead" style="margin-inline:auto">Reference <b style="color:var(--ink)">${l}</b>. In a live shop a confirmation would be emailed to ${yo(a.email)}. No payment was taken.</p><div class="st-sum" style="text-align:left;margin-top:1.5rem">${h.items.map(d=>`<div><span>${d.qty}\xD7 ${yo(d.name)}</span>${Et(d.price*d.qty)}</div>`).join("")}<div><span>Delivery</span>${Et(xo)}</div></div><div class="st-total"><span>Total paid (demo)</span><b>${Et(Ss)}</b></div><p class="st-note">Estimated delivery: 4\u20136 weeks. Card ending ${h.last4}.</p><p style="margin-top:1.5rem"><a class="btn" href="shop.html">Continue shopping</a></p></div>`,scrollTo(0,0)},1400)}}});var OE={};function Ub(){vi.forEach(t=>t.v.destroy()),vi=[];let i=tl().map(t=>pt.find(n=>n.id===t)).filter(Boolean),e=Ms("cmp-grid");if(Ms("cmp-tools").hidden=!i.length,!i.length){e.innerHTML='<div class="none" style="grid-column:1/-1"><h3>Nothing to compare yet</h3><p>Tap "Compare" on any shop card or product page to choose up to 3 pieces.</p><a class="btn" href="shop.html">Browse the shop</a></div>',Ms("cmp-table").innerHTML="";return}e.style.setProperty("--n",i.length),e.innerHTML=i.map(t=>`<div class="cc"><div class="stage"><canvas></canvas></div><h3>${xi(t.name)}</h3><p class="st-note" style="margin:0 0 .6rem">${xi(t.cat)} \xB7 ${xi(t.tag)}</p><div class="price cp" style="font-size:1.6rem"></div>
  <label>Fabric \xB7 <span class="fn">${t.fabrics[0]?.[0]||"Oyster"}</span></label>${Nb(t.fabrics,"fs",Db(t.fabrics,t.defaults?.fabric))}<label>Frame finish \xB7 <span class="fi">${gi[0][0]}</span></label>${Nb(gi,"ff",Db(gi,t.defaults?.frame))}
  ${Rd(0,"Width",80,140)}${Rd(1,"Depth",80,140)}${Rd(2,"Height",80,130)}
  <div class="hero-ctl" style="margin-top:1rem"><button class="btn sm add">Add to basket</button><a class="btn sm ghost" href="product.html?id=${encodeURIComponent(t.id)}">Details</a><button class="lnk rm">Remove</button></div></div>`).join(""),e.querySelectorAll(".cc").forEach((t,n)=>{let s=i[n],r={p:s,el:t,fabric:s.fabrics.find(a=>a[2]===s.defaults?.fabric)||s.fabrics[0]||["Oyster","#d4cabb","oyster"],finish:gi.find(a=>a[2]===s.defaults?.frame)||gi[0],s:[1,1,1],v:xs(t.querySelector("canvas"),s.id,{orbit:!0})};r.v.setFabric(r.fabric,An(s.id,r.fabric[2])),vi.push(r)}),Ld()}function Cd(i){let e=i.s[0]*i.s[1]*i.s[2];return Math.round(i.p.price*(1+(e-1)*.7)/10)*10}function Ld(){vi.forEach(e=>{let t=Pd(e);e.el.querySelector(".cp").textContent=Ib(Cd(e)),e.el.querySelector(".fn").textContent=e.fabric[0],e.el.querySelector(".fi").textContent=e.finish[0],[0,1,2].forEach(n=>e.el.querySelector(".o-"+n).textContent=t[n]+" cm")});let i=[["Price",e=>Ib(Cd(e))],["Category",e=>e.p.cat+" \xB7 "+e.p.sub],["Dimensions (W \xD7 D \xD7 H)",e=>Pd(e).join(" \xD7 ")+" cm"],["Materials",e=>e.p.mat||"\u2014"],["Fabric",e=>e.fabric[0]],["Frame finish",e=>e.finish[0]],["Delivery",()=>"4\u20136 weeks"]];Ms("cmp-table").innerHTML="<table><tr><th></th>"+vi.map(e=>`<th>${xi(e.p.name)}</th>`).join("")+"</tr>"+i.map(([e,t])=>`<tr><td>${e}</td>${vi.map(n=>`<td>${xi(t(n))}</td>`).join("")}</tr>`).join("")+"</table>"}var Ms,xi,Ib,vi,Db,Nb,Rd,Pd,UE,Ob=He(()=>{yn();co();il();ti();Ms=i=>document.getElementById(i),xi=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ib=i=>"R "+Math.round(i).toLocaleString("en-ZA"),vi=[],Db=(i,e)=>i.some(t=>t[2]===e)?e:i[0]?.[2],Nb=(i,e,t)=>`<div class="sw ${e}">${i.map((n,s)=>`<button class="${(t?t===n[2]:s===0)?"on":""}${n[2]==="original"?" orig":""}" style="background:${n[3]?`url(${xi(n[3])}) center/cover`:xi(n[1])}" title="${xi(n[0])}" aria-label="${xi(n[0])}" data-k="${xi(n[2]??s)}"></button>`).join("")}</div>`,Rd=(i,e,t,n)=>`<div class="rg"><div><span>${e}</span><b class="o-${i}"></b></div><input type="range" data-ax="${i}" min="${t}" max="${n}" value="100"></div>`;Pd=i=>i.p.dims.map((e,t)=>Math.round(e*i.s[t]));UE=(i,e)=>{i.fabric=e,i.v.setFabric(e,An(i.p.id,e[2])),i.el.querySelectorAll(".fs button").forEach(t=>t.classList.toggle("on",t.dataset.k===e[2]))};Ms("cmp-grid").addEventListener("click",i=>{let e=i.target.closest(".cc");if(!e)return;let t=vi.find(r=>r.el===e),n=i.target.closest("button");if(!n)return;let s=Ms("cmp-sync").checked;if(n.closest(".fs")){let r=n.dataset.k;(s?vi:[t]).forEach(a=>{let o=a.p.fabrics.find(c=>c[2]===r);o&&UE(a,o)})}else if(n.closest(".ff")){let r=gi.find(a=>a[2]===n.dataset.k);if(!r)return;(s?vi:[t]).forEach(a=>{a.finish=r,a.v.setFrame(r[1]),a.el.querySelectorAll(".ff button").forEach(o=>o.classList.toggle("on",o.dataset.k===n.dataset.k))})}else if(n.classList.contains("rm"))_g(t.p.id);else if(n.classList.contains("add")){let r=Pd(t);Hi({key:`p:${t.p.id}:${t.fabric[0]}:${t.finish[0]}:${r.join("x")}`,name:t.p.name,desc:`${t.fabric[0]} \xB7 ${t.finish[0]} frame \xB7 ${r.join(" \xD7 ")} cm`,price:Cd(t),swatch:t.fabric[1]})}Ld()});Ms("cmp-grid").addEventListener("input",i=>{let e=i.target.closest("[data-ax]");if(!e)return;let t=vi.find(n=>n.el===e.closest(".cc"));t.s[+e.dataset.ax]=e.value/100,t.v.setDims(...t.s),Ld()});Ms("cmp-clear").onclick=()=>nl();ea(Ub);Ub()});var kE={};var la,ha,FE,Fb,kb=He(()=>{yi();ti();la=i=>document.getElementById(i),ha=new URLSearchParams(location.search).get("ref")||sessionStorage.getItem("dekara-last-order")||"";la("oc-p").textContent=ha?`Your order reference is ${ha}. We are confirming your payment now.`:"We could not find an order reference.";FE=0,Fb=async()=>{if(ha){try{let i=await xt.orderStatus(ha);if(i.status==="paid"){tr(),la("oc-h").textContent="Payment received",la("oc-p").textContent=`Thank you. Order ${ha} is confirmed and a confirmation email is on its way. Delivery is 4\u20136 weeks.`;return}if(i.status==="cancelled"){la("oc-h").textContent="Payment cancelled",la("oc-p").textContent="Your payment was cancelled. Your basket is still saved.";return}}catch{}++FE<20?setTimeout(Fb,3e3):la("oc-p").textContent=`We have not received confirmation yet for order ${ha}. If you paid, it can take a few minutes; we will email you.`}};Fb()});var BE={};var Bb,ar,_n,zb=He(()=>{yn();Ys();na();Bb=document.getElementById("fab-detail"),ar=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),_n=ps.find(i=>i.id===new URLSearchParams(location.search).get("id"));if(!_n)Bb.innerHTML='<div class="none"><h3>Fabric not found</h3><p>It may have been removed from the library.</p><a class="btn" href="fabrics.html">Back to the Fabric Library</a></div>';else{document.title=`${_n.name} | Dekara Designs`;let i=pt.filter(n=>n.fabrics.some(s=>s[2]===_n.id));Bb.innerHTML=`<div class="two" style="align-items:start"><div class="fab-big" id="fb"></div><div><span class="eyebrow">${ar(_n.type||"Fabric")}</span><h1 style="font-size:clamp(2.2rem,4vw,3.6rem)">${ar(_n.name)}</h1><p class="lead">${ar(_n.desc)}</p>
 <div class="spec" style="margin-top:2rem"><div><span>Type</span>${ar(_n.type||"Fabric")}</div><div><span>Colour</span>${ar(_n.hex)}</div><div><span>Available on</span>${i.length} piece${i.length===1?"":"s"}</div></div>
 <div class="hero-ctl"><a class="btn" href="shop.html?fabric=${encodeURIComponent(_n.id)}">Shop in ${ar(_n.name)}</a><a class="btn ghost" href="fabrics.html">All fabrics</a></div></div></div>
 <h2 style="margin-top:4rem">Pieces available in ${ar(_n.name)}</h2><div class="cards" id="fp"></div>`;let e=document.getElementById("fb");if(_n.image){let n=new Image;n.src=_n.image,n.alt=`${_n.name} swatch`,e.append(n)}else e.append(Xs(_n.hex,900));let t=document.getElementById("fp");t.innerHTML=i.length?i.map(n=>Vi(n)).join(""):'<p class="st-note">Not yet available on any piece.</p>',t.querySelectorAll(".card").forEach(Wi)}});var zE={};async function Dd(){let i=Jt();if(lo(_o),!i){document.getElementById("acc-h").textContent="Sign in or register",_o.innerHTML='<div class="two" style="align-items:start"><form id="lf"><h3>Sign in</h3><label>Email<input name="email" type="email" required></label><label>Password<input name="password" type="password" required></label><button class="btn" type="submit">Sign in</button><p class="err" hidden id="le"></p></form><form id="rf"><h3>Create an account</h3><label>Name<input name="name" required></label><label>Email<input name="email" type="email" required></label><label>Password (8+ characters)<input name="password" type="password" minlength="8" required></label><button class="btn ghost" type="submit">Create account</button><p class="err" hidden id="re"></p></form></div><p class="st-note">Demo accounts are stored only in this browser. The account layer is built to be swapped for a real backend.</p>';let a=(o,c)=>async l=>{l.preventDefault();try{await o(Object.fromEntries(new FormData(l.target))),Id&&/^[\w-]+\.html/.test(Id)&&(location.href=Id)}catch(h){let u=document.getElementById(c);u.textContent=h.message,u.hidden=!1}};document.getElementById("lf").onsubmit=a(xt.login,"le"),document.getElementById("rf").onsubmit=a(xt.register,"re");return}document.getElementById("acc-h").textContent="Hello, "+i.name.split(" ")[0];let[e,t,n]=await Promise.all([xt.wishlist(),xt.orders(),xt.designs()]),r=`<div class="chips">${[["saved","Saved ("+e.length+")"],["orders","Orders ("+t.length+")"],["designs","Saved designs ("+n.length+")"]].map(([a,o])=>`<button class="pill${So===a?" on":""}" data-t="${a}">${o}</button>`).join("")}<button class="pill" data-t="out">Sign out</button></div><div id="pane" style="margin-top:1.5rem">`;if(So==="saved"){let a=pt.filter(o=>e.includes(o.id));r+=a.length?`<div class="cards">${a.map(o=>Vi(o)).join("")}</div>`:'<p class="st-note">Nothing saved yet. Tap the heart on any piece to save it.</p>'}So==="orders"&&(r+=t.length?t.map(a=>`<div class="studio"><b>${vo(a.ref)}</b> \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")} \xB7 ${Et(a.total)}<div class="st-sum">${(a.items||[]).map(o=>`<div><span>${o.qty}\xD7 ${vo(o.name)}</span>${Et(o.price*o.qty)}</div>`).join("")}</div></div>`).join(""):'<p class="st-note">No orders yet.</p>'),So==="designs"&&(r+=n.length?n.map(a=>`<div class="studio"><b>${vo(a.name)}</b> \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")} \xB7 ${Et(a.price||0)}<div class="hero-ctl" style="margin-top:1rem"><a class="btn sm" href="custom-studio.html?design=${vo(a.id)}">Open in studio</a><button class="btn sm ghost" data-del="${vo(a.id)}">Delete</button></div></div>`).join(""):'<p class="st-note">No saved designs yet. Build one in the Custom Studio and choose "Save to my account".</p>'),_o.innerHTML=r+"</div>",_o.querySelectorAll(".card").forEach(Wi)}var _o,vo,Id,So,Hb=He(()=>{yi();yn();na();ti();_o=document.getElementById("acc"),vo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Id=new URLSearchParams(location.search).get("next"),So=(location.hash||"#saved").slice(1);_o.onclick=async i=>{let e=i.target.closest("[data-t]"),t=i.target.closest("[data-del]");if(e){if(e.dataset.t==="out"){await xt.logout();return}So=e.dataset.t,Dd()}t&&confirm("Delete this design?")&&await xt.deleteDesign(t.dataset.del)};ys(Dd);Dd()});var VE={};var or,ws,HE,GE,Gb=He(()=>{yn();Ys();Fn();yi();or=i=>document.getElementById(i),ws=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),HE=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-");or("dl-models").innerHTML=pt.map(i=>`<div class="dl"><div><b>${ws(i.name)}</b><small>${ws(i.cat)} \xB7 ${i.dims.join(" \xD7 ")} cm</small></div><div><a href="models/${i.id}.glb" download>GLB</a><a href="models/${i.id}.usdz" download>USDZ</a></div></div>`).join("");or("dl-fabrics").innerHTML=Wt.map(([i,e,t,n])=>`<a class="fab" style="--c:${ws(e)}" href="${ws(n||Xs(e,800).toDataURL("image/png"))}" download="${HE(i)}.${n?"jpg":"png"}"><span>${ws(i)}</span></a>`).join("");GE=dt.documents||[{name:"Product catalogue (CSV)",file:"downloads/dekara-catalogue.csv",desc:"Names, categories, sizes, materials and prices"},{name:"All 3D models (ZIP)",file:"downloads/dekara-3d-models.zip",desc:"GLB and USDZ for every piece"},{name:"Fabric swatch sheet",file:"swatches/dekara-swatch-sheet.svg",desc:"All fabrics on one sheet"}];or("dl-docs").innerHTML=GE.map(i=>`<div class="dl"><div><b>${ws(i.name)}</b><small>${ws(i.desc||"")}</small></div><div><a href="${ws(i.file)}" download>Download</a></div></div>`).join("");or("tf").onsubmit=async i=>{i.preventDefault();try{await xt.tradeApply(Object.fromEntries(new FormData(i.target))),i.target.hidden=!0,or("tf-ok").hidden=!1}catch(e){or("tf-err").textContent=e.message,or("tf-err").hidden=!1}}});var qE={};function Es(){let i=pt.filter($E);$t("cats").innerHTML=dl("cat","","All",!Ne.cat,i.length)+Is.map(r=>dl("cat",r,r,Ne.cat===r,i.filter(a=>a.cat===r).length)).join("");let e=[...new Set(pt.filter(r=>r.cat===Ne.cat).map(r=>r.sub))];$t("subs").innerHTML=Ne.cat&&e.length>1?dl("sub","","All "+Ne.cat,!Ne.sub)+e.map(r=>dl("sub",r,r,Ne.sub===r,i.filter(a=>a.cat===Ne.cat&&a.sub===r).length)).join(""):"";let t=i.filter(r=>(!Ne.cat||r.cat===Ne.cat)&&(!Ne.sub||r.sub===Ne.sub));Vb[Ne.sort]&&(t=[...t].sort(Vb[Ne.sort])),lo(Nd),Nd.innerHTML=t.map(r=>Vi(r)).join(""),Nd.querySelectorAll(".card").forEach(Wi);let n=$t("count");n.textContent=`${t.length} ${t.length===1?"piece":"pieces"}${Ne.cat?" in "+(Ne.sub||Ne.cat):""}`+(Ne.q?` matching \u201C${Ne.q}\u201D`:""),$t("none").hidden=t.length>0;let s=new URLSearchParams;Ne.cat&&s.set("cat",Ne.cat),Ne.sub&&s.set("sub",Ne.sub),Ne.q&&s.set("q",Ne.q),Ne.sort!=="featured"&&s.set("sort",Ne.sort),Ne.fabric&&s.set("fabric",Ne.fabric);try{history.replaceState(null,"",location.pathname+(s.toString()?"?"+s:""))}catch{}}var $t,Nd,ua,Ne,WE,$E,dl,Vb,Wb,$b=He(()=>{yn();na();$t=i=>document.getElementById(i),Nd=$t("shop-grid"),ua=new URLSearchParams(location.search),Ne={cat:Is.includes(ua.get("cat"))?ua.get("cat"):"",sub:ua.get("sub")||"",q:ua.get("q")||"",sort:ua.get("sort")||"featured",fabric:ua.get("fabric")||""};$t("q").value=Ne.q;$t("sort").value=Ne.sort;$t("ffilter").innerHTML='<option value="">All fabrics</option>'+Wt.map(i=>`<option value="${i[2]}">${i[0].replace(/[<&]/g,"")}</option>`).join("");Wt.some(i=>i[2]===Ne.fabric)||(Ne.fabric="");$t("ffilter").value=Ne.fabric;WE=i=>[i.name,i.tag,i.cat,i.sub,i.desc,i.mat,i.fabrics.map(e=>e[0]).join(" ")].join(" ").toLowerCase(),$E=i=>{if(Ne.fabric&&!i.fabrics.some(t=>t[2]===Ne.fabric))return!1;let e=WE(i);return Ne.q.toLowerCase().split(/\s+/).filter(Boolean).every(t=>e.includes(t))},dl=(i,e,t,n,s)=>`<button class="pill${n?" on":""}" data-${i}="${e}"${s===0?" data-zero":""}>${t}${s!==void 0?` <small>${s}</small>`:""}</button>`,Vb={price:(i,e)=>i.price-e.price,"price-desc":(i,e)=>e.price-i.price,name:(i,e)=>i.name.localeCompare(e.name)};$t("cats").onclick=i=>{let e=i.target.closest("[data-cat]");e&&(Ne.cat=e.dataset.cat,Ne.sub="",Es())};$t("subs").onclick=i=>{let e=i.target.closest("[data-sub]");e&&(Ne.sub=e.dataset.sub,Es())};$t("q").oninput=i=>{clearTimeout(Wb),Wb=setTimeout(()=>{Ne.q=i.target.value.trim(),Es()},160)};$t("q").onkeydown=i=>{i.key==="Escape"&&(i.target.value="",Ne.q="",Es())};$t("sort").onchange=i=>{Ne.sort=i.target.value,Es()};$t("ffilter").onchange=i=>{Ne.fabric=i.target.value,Es()};$t("clear").onclick=()=>{Ne.cat=Ne.sub=Ne.q=Ne.fabric="",$t("q").value="",$t("ffilter").value="",Es()};Es()});var aA={};function To(i){!i||!i.userData||xa.forEach(e=>{let t=ga[e.id];if(!t)return;let n=(e.target||e.name||"").toLowerCase().trim(),s=i.userData.finMap?.[n]||i.userData.finMap?.[e.id]||(n==="frame"?i.userData.frames:null);!s||!s.length||(typeof t=="string"?s.forEach(r=>{r.map=null,r.color.set(t),r.needsUpdate=!0}):Array.isArray(t)&&fs(s,t,mi))})}function Ro(i,e){let t=en[i].custom?XE(i,e):YE(i,e);return en[i].custom||(t.userData.ready=fs(t.userData.T,lr,mi)),t}function XE(i,e){let t=en[i],n=new gt;return n.userData={type:i,T:[],frames:[],finMap:{}},n.userData.ready=jE(t.url).then(s=>{if(!s)return;let r=s.clone(!0);r.traverse(g=>{g.isMesh&&(g.castShadow=g.receiveShadow=!0,g.material=Array.isArray(g.material)?g.material.map(m=>m.clone()):g.material.clone())});let a=new gt;a.add(r);let o=new wt().setFromObject(a),c=o.getSize(new P);a.scale.set(t.w/Math.max(c.x,.001),t.h/Math.max(c.y,.001),t.d/Math.max(c.z,.001)),a.updateMatrixWorld(!0),o=new wt().setFromObject(a);let l=o.getCenter(new P),h=i==="cmvbge0o1:pmvbgejx7ypc"?.03:0;a.position.set(-l.x,-o.min.y+h,-l.z),n.add(a);let u=[],d=[],p={},b=new Set(xa.map(g=>(g.target||g.name||"").toLowerCase().trim()));b.add("frame"),a.traverse(g=>{g.isMesh&&[].concat(g.material).forEach(m=>{let f=(m.name||"").toLowerCase().trim(),x=!1;b.forEach(y=>{y&&f===y&&((p[y]??=[]).push(m),x=!0)}),!x&&(m.transparent&&m.opacity<1||(d.push(m),f==="tint"&&u.push(m)))})}),n.userData.T.push(...u.length?u:d),n.userData.finMap=p,p.frame&&(n.userData.frames=p.frame),Hd&&fs(n.userData.T,lr,mi),To(n)}),n}function YE(i,e){let{w:t,d:n}=en[i],s=new gt,r=new ln({color:e,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new we("#fff")}),a=new Kt({color:5979942,roughness:.5}),o=(c,l,h,u,d,p=0)=>{let b=new Ge(c,l);b.position.set(h,u,d),b.rotation.x=p,b.castShadow=b.receiveShadow=!0,s.add(b)};return[-1,1].forEach(c=>[-1,1].forEach(l=>o(new di(.03,.022,.12,12),a,c*(t/2-.07),.06,l*(n/2-.07)))),i==="ottoman"?o(da(t,.4,n,.12),r,0,.32,0):i==="arm"?o(da(t,.55,n,.08),r,0,.4,0):(o(da(t,.28,n),r,0,.26,0),o(da(t-.03,.18,n-.18),r,0,.49,.07),o(da(t-.03,.5,.2,.09),r,0,.78,-n/2+.12,-.1),i==="corner"&&o(da(.2,.5,n-.25,.09),r,-t/2+.12,.78,.1)),s.userData={type:i,T:[r],frames:[a],finMap:{frame:[a]}},xa.forEach(c=>{let l=(c.target||c.name||"").toLowerCase().trim();(l==="frame"||l==="legs"||l==="base")&&(s.userData.finMap[l]=[a])}),To(s),s}function Qb(i){i.setPixelRatio(Math.min(devicePixelRatio,2)),i.toneMapping=Ya,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=Xa}function gl(){let i=1e9,e=-1e9,t=1e9,n=-1e9;return tt.forEach(s=>{let[r,a]=Ts(s),o=s.g.position;i=Math.min(i,o.x-r),e=Math.max(e,o.x+r),t=Math.min(t,o.z-a),n=Math.max(n,o.z+a)}),{sx:e-i,sz:n-t,cx:(i+e)/2,cz:(t+n)/2}}function eA(i,e,t){if(!At.snap)return[e,t];let[n,s]=Ts(i),r=.18,a=!1,o=!1;for(let c of tt){if(c===i)continue;let[l,h]=Ts(c),u=c.g.position.x,d=c.g.position.z;if(Math.abs(t-d)<h+s+r)for(let p of[u+l+n-As(i,c),u-l-n+As(i,c)])Math.abs(e-p)<r&&(e=p,a=!0);if(Math.abs(e-u)<l+n+r)for(let p of[d+h+s-As(i,c),d-h-s+As(i,c)])Math.abs(t-p)<r&&(t=p,o=!0)}for(let c of tt){if(c===i)continue;let[l,h]=Ts(c),u=c.g.position.x,d=c.g.position.z;if(!o){for(let p of[d,d-h+s,d+h-s])if(Math.abs(t-p)<r){t=p,o=!0;break}}if(!a){for(let p of[u,u-l+n,u+l-n])if(Math.abs(e-p)<r){e=p,a=!0;break}}}return[a?e:Math.round(e*20)/20,o?t:Math.round(t*20)/20]}function tA(i){let e=i.g.position,[t,n]=Ts(i),s=[];tt.filter(r=>r!==i).reverse().forEach(r=>{let[a,o]=Ts(r),c=r.g.position.x,l=r.g.position.z;s.push([c+a+t-As(i,r),l],[c-a-t+As(i,r),l],[c,l+o+n-As(i,r)],[c,l-o-n+As(i,r)])});for(let r=0;r<30;r++)for(let a=0;a<12;a++)s.push([Math.cos(a/12*6.283)*r*.15,Math.sin(a/12*6.283)*r*.15]);for(let[r,a]of s)if(e.set(r,0,a),Wd(i))return!0;return!1}function nA(i,e){if(!n0(i))return ya(tt.length>=At.maxPieces?`Limit reached: ${At.maxPieces} pieces maximum.`:`No more ${en[i].n} pieces allowed.`),null;let t={type:i,rot:0,g:Ro(i,Xi)};return tt.push(t),tA(t)?(Un.add(t.g),e||(Ao(t),ii()),t):(tt.pop(),ya("No room left within the size limits."),null)}function i0(i){i&&(Un.remove(i.g),tt.splice(tt.indexOf(i),1),Tn===i&&Ao(null),ii())}function Ao(i){Tn=i,tt.forEach(e=>e.g.userData.T.forEach(t=>t.emissive&&t.emissive.setHex(e===i?2760724:0))),ml.visible=!!i,Me("st-rot").disabled=Me("st-del").disabled=!i}function s0(){if(Tn){if(Tn.rot=(Tn.rot+1)%4,!Wd(Tn)){Tn.rot=(Tn.rot+3)%4,ya("Not enough room to rotate here.");return}Tn.g.rotation.y=Tn.rot*Math.PI/2,ii()}}function bl(){[...tt].forEach(i=>Un.remove(i.g)),tt.length=0,Ao(null)}function iA(i){if(!r0(i)){ya("That size is outside the current limits.");return}bl();let e=i*.9+.44,t=-e/2,n=(s,r)=>{let a={type:s,rot:0,g:Ro(s,Xi)};a.g.position.set(r,0,0),tt.push(a),Un.add(a.g)};n("arm",t+.11);for(let s=0;s<i;s++)n("seat",t+.22+.45+s*.9);n("arm",t+.22+i*.9+.11),Me("st-start").style.display="none",Vd(),ii()}function h0(i){let e=Me("st-cols");e&&e.querySelectorAll(".pill").forEach(s=>s.classList.toggle("on",s.dataset.c===i));let t=wo.find(s=>s.id===i);if(u0(t?t.pieces.map(s=>t.id+":"+s.id):Jb),ii(),Me("st-step-col").style.display="none",Me("st-step-seats").style.display="block",i==="")Me("st-seats-heading").textContent="How many seats?",Me("st-preset-group").style.display="flex",Me("st-seats-note").innerHTML='You can grow or shrink it afterwards, or <a href="#" id="st-empty">start with an empty floor</a>.';else{Me("st-seats-heading").textContent=`Build with ${t?t.name:"collection"}`,Me("st-preset-group").style.display="none",Me("st-seats-note").innerHTML='<button class="btn sm" id="st-start-custom" style="justify-content:center;margin-top:.4rem">Start with an empty floor</button>';let s=Me("st-start-custom");s&&(s.onclick=()=>{bl(),Me("st-start").style.display="none",ii()})}let n=Me("st-empty");n&&(n.onclick=s=>{s.preventDefault(),Me("st-start").style.display="none"})}async function rA(){let i=new gt,e=new gt,t=[];tt.forEach(r=>{let a=Ro(r.type,Xi);a.position.copy(r.g.position),a.rotation.y=r.rot*Math.PI/2,To(a),e.add(a),t.push(a)}),await Promise.all(t.map(r=>r.userData.ready)),t.forEach(r=>{r.userData={}});let{cx:n,cz:s}=gl();return e.position.set(-n,0,-s),i.add(e),i}function ii(){let i={};tt.forEach(a=>i[a.type]=(i[a.type]||0)+1);let e=tt.reduce((a,o)=>a+fl(o.type),0);Me("st-sum").innerHTML=Object.keys(i).map(a=>`<div><span>${i[a]} \xD7 ${en[a].n}</span>${Ud(i[a]*fl(a))}</div>`).join("")||'<p style="color:var(--mut);font-size:.9rem;padding:.5rem 0">Nothing placed yet.</p>',Me("st-total").textContent=Ud(e);let{sx:t,sz:n}=tt.length?gl():{sx:0,sz:0},s=tt.length?`${Math.round(Math.max(t,n)*100)} \xD7 ${Math.round(Math.min(t,n)*100)} cm`:"\u2014";Me("st-size").textContent=s,Me("st-count").textContent=`${tt.length} / ${At.maxPieces}`,document.querySelectorAll("[data-add]").forEach(a=>{let o=a.dataset.add;a.textContent=`+ ${en[o].n} \xB7 ${Ud(fl(o))}`,a.disabled=!n0(o)});let r=Object.keys(i).map(a=>`${i[a]}\xD7 ${en[a].n}`).join(", ");Mo=tt.length?{txt:r,dims:s,total:e}:null,Me("st-add").disabled=Me("st-ar").disabled=Me("st-save").disabled=!tt.length,d0.update()}var At,Me,Ud,en,Jb,Ut,wo,fl,Hd,Od,jE,pa,ji,xa,Bd,ga,Xi,lr,Mo,da,e0,t0,Eo,Gd,va,Rs,Un,ba,Vd,_i,ml,KE,tt,Tn,cr,As,Ts,ZE,JE,Wd,QE,n0,qb,ya,r0,pl,jb,a0,ma,zd,o0,c0,l0,Xb,fa,Yb,sA,u0,Kb,Fd,d0,kd,Zb,f0=He(()=>{hn();Zu();Ju();Kh();Fn();yn();Ys();ti();Kc();Ad();yi();At=Do(),Me=i=>document.getElementById(i),Ud=i=>"R "+Math.round(i).toLocaleString("en-ZA"),en={seat:{n:"Seat",w:.9,d:.95},corner:{n:"Corner",w:.95,d:.95},chaise:{n:"Chaise",w:.9,d:1.75},ottoman:{n:"Ottoman",w:.9,d:.9},arm:{n:"Arm",w:.22,d:.95}},Jb=Object.keys(en).filter(i=>At.enabled[i]),Ut=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),wo=[...dt.collections||[],...Uo()].filter(i=>i.pieces&&i.pieces.length);wo.forEach(i=>i.pieces.forEach(e=>{en[i.id+":"+e.id]={n:e.name,w:(e.w||90)/100,d:(e.d||90)/100,h:(e.h||80)/100,price:Number(e.price)||0,url:Mi("piece:"+i.id+":"+e.id)||e.model,custom:!0}}));fl=i=>en[i].custom?en[i].price:At.prices[i],Hd=!1,Od=new Map,jE=i=>(Od.has(i)||Od.set(i,eo(i).then(e=>e.scene).catch(()=>null)),Od.get(i)),pa=Fo(),ji=(()=>{if(pa.fabrics&&pa.fabrics.length){let i=Wt.filter(e=>pa.fabrics.includes(e[2]));if(i.length)return i}return Wt})(),xa=qt(),Bd=i=>{if(i==="fabric")return ji;if(pa.finishes?.[i]&&pa.finishes[i].length){let t=un.filter(n=>pa.finishes[i].includes(n[2]));if(t.length)return t}let e=un.filter(t=>t[5]==="Wood"||t[5]==="Metal");return e.length?e:un},ga={};xa.forEach(i=>{let e=Bd(i.id);ga[i.id]=e[0]||un[0]});Xi=ji[0][1],lr=ji[0],Mo=null,da=(i,e,t,n=.07)=>new Jr(i,e,t,4,n);e0=()=>{let i=new pi(16777215,2.6);return i.position.set(3,7,4),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.radius=4,Object.assign(i.shadow.camera,{left:-7,right:7,top:7,bottom:-7,far:30}),i},t0=()=>{let i=$n(),e=i.backlight===!1?0:(i.backlightStrength??100)/100,t=new pi(16774374,3.2*e);return t.position.set(-2,3.5,-5),t},Eo=Me("st-canvas"),Gd=15328216,va=new ui({antialias:!0});Qb(va);Eo.prepend(va.domElement);Rs=va.domElement;Rs.style.cssText="display:block;width:100%;height:100%;touch-action:none";Un=new En;Un.background=new we(Gd);Un.fog=new Tc(Gd,16,44);Un.environment=new Fi(va).fromScene(new sr,.04).texture;Un.add(e0());Un.add(t0());(function(){let s=14+Math.PI*5/2+24,r=new $s(140,s,1,100),a=r.attributes.position;for(let c=0;c<a.count;c++){let l=s/2-a.getY(c),h,u;if(l<14)h=0,u=8-l;else if(l<14+Math.PI*5/2){let d=(l-14)/5;h=5*(1-Math.cos(d)),u=-6-5*Math.sin(d)}else h=5+(l-14-Math.PI*5/2),u=-11;a.setXYZ(c,a.getX(c),h,u)}r.computeVertexNormals();let o=new Ge(r,new Kt({color:Gd,roughness:1,side:Yt}));o.receiveShadow=!0,Un.add(o)})();ba=new vt(36,1,.1,120),Vd=()=>{ba.position.set(0,4.2,6.4),_i.target.set(0,.4,0),_i.update()},_i=new ir(ba,Rs);_i.enableDamping=!0;_i.maxPolarAngle=Math.PI*.47;_i.minDistance=2;_i.maxDistance=14;_i.screenSpacePanning=!1;Vd();ml=new zc(new St,10254925);ml.visible=!1;Un.add(ml);KE=()=>{let i=Eo.clientWidth||1,e=Eo.clientHeight||1;va.setSize(i,e,!1),ba.aspect=i/e,ba.updateProjectionMatrix()};new ResizeObserver(KE).observe(Eo);tt=[],Tn=null,cr=null,As=(i,e)=>en[i.type].custom||en[e.type].custom?.012:0,Ts=i=>{let e=en[i.type];return i.rot%2?[e.d/2,e.w/2]:[e.w/2,e.d/2]},ZE=(i,e)=>{let[t,n]=Ts(i),[s,r]=Ts(e),a=i.g.position,o=e.g.position;return Math.abs(a.x-o.x)<t+s-.02&&Math.abs(a.z-o.z)<n+r-.02};JE=()=>{if(!tt.length)return!0;let{sx:i,sz:e}=gl();return Math.max(i,e)*100<=At.maxWidth+.5&&Math.min(i,e)*100<=At.maxDepth+.5},Wd=i=>tt.every(e=>e===i||!ZE(i,e))&&JE(),QE=i=>tt.filter(e=>e.type===i).length,n0=i=>(en[i].custom||At.enabled[i])&&tt.length<At.maxPieces&&!(At.max[i]>0&&QE(i)>=At.max[i]),ya=i=>{let e=Me("st-msg");e.textContent=i,e.style.opacity=1,clearTimeout(qb),qb=setTimeout(()=>e.style.opacity=0,3200)};r0=i=>At.presets[i]&&At.enabled.seat&&At.enabled.arm&&i+2<=At.maxPieces&&(i*.9+.44)*100<=Math.max(At.maxWidth,At.maxDepth)&&!(At.max.seat>0&&i>At.max.seat)&&!(At.max.arm>0&&At.max.arm<2);pl=new Bc,jb=new Re,a0=new Ln(new P(0,1,0),0),ma=new P,zd=new P,o0=i=>{let e=Rs.getBoundingClientRect();jb.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),pl.setFromCamera(jb,ba)};Rs.addEventListener("pointerdown",i=>{o0(i);let e=pl.intersectObjects(tt.map(s=>s.g),!0)[0];if(!e){Ao(null);return}let t=e.object;for(;t&&!t.userData.type;)t=t.parent;let n=tt.find(s=>s.g===t);n&&(Ao(n),cr=n,_i.enabled=!1,Rs.setPointerCapture(i.pointerId),pl.ray.intersectPlane(a0,ma),zd.set(n.g.position.x-ma.x,0,n.g.position.z-ma.z))},!0);Rs.addEventListener("pointermove",i=>{if(!cr||(o0(i),!pl.ray.intersectPlane(a0,ma)))return;let[e,t]=eA(cr,ma.x+zd.x,ma.z+zd.z),n=cr.g.position,s=n.x,r=n.z,a=(o,c)=>(n.set(o,0,c),Wd(cr)?!0:(n.set(s,0,r),!1));!a(e,t)&&!a(e,r)&&a(s,t)});c0=()=>{cr&&(cr=null,_i.enabled=!0,ii())};Rs.addEventListener("pointerup",c0);Rs.addEventListener("pointercancel",c0);addEventListener("keydown",i=>{/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)||!Me("st-canvas")||(i.key==="Delete"&&i0(Tn),(i.key==="r"||i.key==="R")&&s0())});l0=[{id:"",name:"Classic modules",image:Mi("collection:classic")||null,isClassic:!0},...wo.map(i=>({id:i.id,name:i.name,image:i.image||Mi("collection:"+i.id)||null,count:i.pieces?.length||0}))];Me("st-col-cards")&&(Me("st-col-cards").innerHTML=l0.map(i=>`
  <div class="st-col-card" data-col-select="${Ut(i.id)}">
   <div class="col-img-wrap">${i.image?`<img src="${Ut(i.image)}" alt="${Ut(i.name)}">`:`<div style="font:italic 1.1rem var(--disp);color:var(--bronze)">${Ut(i.name)}</div>`}</div>
   <div class="col-name"><span>${Ut(i.name)}</span><span class="col-badge">${i.isClassic?"Standard":i.count+" pieces"}</span></div>
  </div>`).join(""),Me("st-col-cards").onclick=i=>{let e=i.target.closest("[data-col-select]");e&&h0(e.dataset.colSelect)});Xb=Me("st-back-cols");Xb&&(Xb.onclick=()=>{Me("st-step-seats").style.display="none",Me("st-step-col").style.display="block"});fa=Me("st-col-popover"),Yb=Me("st-col-popover-img"),sA=Me("st-col-popover-title");{let i=Me("st-cols");wo.length?(i.innerHTML='<button class="pill on" data-c="">Classic modules</button>'+wo.map(e=>`<button class="pill" data-c="${Ut(e.id)}">${Ut(e.name)}</button>`).join(""),i.onclick=e=>{let t=e.target.closest("[data-c]");t&&(h0(t.dataset.c),Me("st-start").style.display="none")},i.addEventListener("pointerover",e=>{let t=e.target.closest("[data-c]");if(!t||!fa)return;let n=l0.find(r=>r.id===t.dataset.c);if(!n)return;sA.textContent=n.name,n.image?Yb.innerHTML=`<img src="${Ut(n.image)}" alt="${Ut(n.name)}">`:Yb.innerHTML=`<div style="font:italic 1rem var(--disp);color:var(--bronze);padding:1.4rem;text-align:center">${Ut(n.name)}</div>`;let s=t.getBoundingClientRect();fa.style.left=`${Math.max(10,Math.min(window.innerWidth-230,s.left+s.width/2-110))}px`,fa.style.top=`${s.bottom+8}px`,fa.classList.add("show")}),i.addEventListener("pointerout",e=>{let t=e.target.closest("[data-c]");!t||!fa||(!e.relatedTarget||!t.contains(e.relatedTarget))&&fa.classList.remove("show")})):i.hidden=!0}Me("st-tools").innerHTML='<span id="st-pal" style="display:contents"></span><span class="sep"></span><button class="pill" id="st-rot" disabled>Rotate 90\xB0</button><button class="pill" id="st-del" disabled>Remove</button><button class="pill" id="st-clear">Clear</button><button class="pill" id="st-view">Reset view</button><button class="pill" id="st-again">Change size</button>';u0=i=>{Me("st-pal").innerHTML=i.map(e=>`<button class="pill" data-add="${Ut(e)}"></button>`).join("")};u0(Jb);Me("st-tools").onclick=i=>{let e=i.target.closest("button");!e||e.disabled||(e.dataset.add?nA(e.dataset.add):e.id==="st-rot"?s0():e.id==="st-del"?i0(Tn):e.id==="st-clear"?(bl(),ii()):e.id==="st-view"?Vd():e.id==="st-again"&&(Me("st-start").style.display="flex",Me("st-step-seats").style.display="none",Me("st-step-col").style.display="block"))};document.querySelectorAll(".st-preset").forEach(i=>{i.hidden=!At.presets[i.dataset.n],i.disabled=!r0(+i.dataset.n),i.onclick=()=>iA(+i.dataset.n)});Kb=Me("st-empty");Kb&&(Kb.onclick=i=>{i.preventDefault(),Me("st-start").style.display="none"});Fd=Me("st-fin-sections");Fd&&(Fd.innerHTML=xa.map(i=>{let e=Bd(i.id),t=ga[i.id]||e[0],n=i.id==="fabric"?"st-fab":`st-fin-${Ut(i.id)}`;return`<div class="studio"><h3>${Ut(i.name)} \xB7 <span id="${n}" style="font-size:1.1rem">${Ut(t[0])}</span></h3><div class="sw" id="st-fsw-${Ut(i.id)}" style="margin-bottom:0">${e.map(([s,r,a,o],c)=>`<button class="${t&&t[2]===a?"on":""}" style="background:${o?`url(${Ut(o)}) center/cover`:Ut(r)}" title="${Ut(s)}" aria-label="${Ut(s)}" data-ft="${Ut(i.id)}" data-i="${c}"></button>`).join("")}</div></div>`}).join(""),Fd.onclick=i=>{let e=i.target.closest("button[data-ft]");if(!e)return;let t=e.dataset.ft,n=Bd(t),s=n[e.dataset.i];if(!s)return;ga[t]=s,t==="fabric"&&(lr=s,Xi=s[1],Hd=!0,tt.forEach(a=>fs(a.g.userData.T,lr,mi))),Me(`st-fsw-${t}`).querySelectorAll("button").forEach(a=>a.classList.toggle("on",a===e));let r=Me(t==="fabric"?"st-fab":`st-fin-${t}`);r&&(r.textContent=s[0]),tt.forEach(a=>To(a.g)),ii()});Me("st-add").onclick=()=>{if(!Mo)return;let i=xa.map(e=>`${e.name}: ${ga[e.id]?.[0]||""}`).join(", ");Hi({key:"b:"+Date.now(),name:"Custom modular build",desc:`${Mo.txt} \xB7 ${Mo.dims} \xB7 Fabric: ${Me("st-fab").textContent}${i?" \xB7 "+i:""}`,price:Mo.total,swatch:Xi})};Me("st-ar").onclick=async()=>ul(await rA(),"Your custom build","dekara-custom-build");Me("st-save").onclick=async()=>{try{await xt.saveDesign({name:`Custom build (${tt.length} pieces)`,fabric:Math.max(0,ji.findIndex(i=>i[1]===Xi)),fabricId:lr[2],price:tt.reduce((i,e)=>i+fl(e.type),0),items:tt.map(i=>({type:i.type,x:i.g.position.x,z:i.g.position.z,rot:i.rot}))}),ya("Saved to your account.")}catch(i){ya(i.message)}};d0=(()=>{let i=Me("st-preview"),e=new ui({canvas:i,antialias:!0,alpha:!0});Qb(e);let t=new En;t.environment=new Fi(e).fromScene(new sr,.04).texture,t.add(e0()),t.add(t0());let n=new Ge(new qr(5,64),new Xr({opacity:.22}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new Ge(new jr(2.3,2.33,128),new cn({color:10254925,transparent:!0,opacity:.35,side:2}));s.rotation.x=-Math.PI/2,s.position.y=.005,t.add(s);let r=new gt;t.add(r);let a=new vt(32,1,.1,100);a.position.set(5,3,6.5),a.lookAt(0,.7,0);let o=Ls(),c=new ir(a,i);c.target.set(0,.7,0),c.enableDamping=!0,c.enableRotate=!1,c.enablePan=o.pan,c.minDistance=o.minZoom,c.maxDistance=o.maxZoom,o.pan&&(c.mouseButtons.LEFT=zi.PAN),Me("st-prev-hint").textContent=`Live preview${o.pan?" \xB7 drag to pan":""} \xB7 scroll to zoom`;let l=()=>{let g=i.parentElement,m=g.clientWidth||1,f=g.clientHeight||1;e.setSize(m,f,!1),a.aspect=m/f,a.updateProjectionMatrix()};new ResizeObserver(l).observe(i.parentElement);let h=i.parentElement,u=document.createElement("button");u.type="button",u.className="viewport-fullscreen",u.setAttribute("aria-label","Maximize live preview"),u.title="Maximize live preview",u.textContent="\u26F6",h.append(u);let d=async()=>{if(h.classList.contains("viewport-fullscreen-fallback")){h.classList.remove("viewport-fullscreen-fallback"),l();return}try{document.fullscreenElement===h?await document.exitFullscreen():h.requestFullscreen?await h.requestFullscreen():(h.classList.add("viewport-fullscreen-fallback"),l())}catch(g){console.error("Could not change live preview fullscreen state.",g),h.classList.add("viewport-fullscreen-fallback"),l()}};u.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation(),d()});let p=()=>{let g=document.fullscreenElement===h||h.classList.contains("viewport-fullscreen-fallback");u.setAttribute("aria-label",g?"Exit fullscreen live preview":"Maximize live preview"),u.title=g?"Exit fullscreen":"Maximize live preview",l()};document.addEventListener("fullscreenchange",p);let b=!0;return new IntersectionObserver(g=>b=g[0].isIntersecting).observe(i),{update(){if(r.clear(),Me("st-pv-empty").style.display=tt.length?"none":"grid",!tt.length)return;let g=new gt;tt.forEach(v=>{let R=Ro(v.type,Xi);R.position.copy(v.g.position),R.rotation.y=v.rot*Math.PI/2,To(R),g.add(R)});let{sx:m,sz:f,cx:x,cz:y}=gl();g.position.set(-x,0,-y),r.add(g),r.scale.setScalar(Math.min(1.8,3.4/Math.max(m,f,.5)))},tick(g){b&&(r.rotation.y+=g*.45,c.update(),e.render(t,a))}}})();kd=performance.now();(function i(e){requestAnimationFrame(i);let t=Math.min((e-kd)/1e3,.05);kd=e,Eo.clientWidth&&(_i.update(),Tn&&ml.setFromObject(Tn.g),va.render(Un,ba)),d0.tick(t)})(kd);ii();Zb=new URLSearchParams(location.search).get("design");Zb&&xt.designs().then(i=>{let e=i.find(n=>n.id===Zb);if(!e)return;let t=ji.findIndex(n=>n[2]===e.fabricId);t<0&&(t=Math.min(Math.max(0,e.fabric|0),ji.length-1)),Xi=ji[t][1],lr=ji[t],ga.fabric=lr,Hd=!0,Me("st-fab").textContent=ji[t][0],Me("st-fsw-fabric").querySelectorAll("button").forEach((n,s)=>n.classList.toggle("on",s===t)),bl(),e.items.forEach(n=>{if(!en[n.type])return;let s={type:n.type,rot:n.rot||0,g:Ro(n.type,Xi)};s.g.position.set(n.x,0,n.z),s.g.rotation.y=s.rot*Math.PI/2,tt.push(s),Un.add(s.g)}),Me("st-start").style.display="none",ii()})});var oA={};var yl,p0=He(()=>{yn();Ys();yl=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.getElementById("fabs").innerHTML=ps.map(i=>`<a class="fab" href="fabric.html?id=${encodeURIComponent(i.id)}" style="--c:${yl(i.hex)}" aria-label="${yl(i.name)}"><img alt="" src="${yl(i.image||Xs(i.hex,320).toDataURL("image/jpeg",.85))}"><span>${yl(i.name)}</span></a>`).join("")});Fn();ef.then(async()=>{let i=e=>document.getElementById(e);await Promise.resolve().then(()=>(Lg(),Bw)),i("hero-canvas")&&await Promise.resolve().then(()=>(Og(),Hw)),document.querySelector("[data-cards]")&&await Promise.resolve().then(()=>(Gg(),Gw)),i("p-canvas")&&await Promise.resolve().then(()=>(Mb(),CE)),i("f")&&await Promise.resolve().then(()=>(Rb(),PE)),i("basket-list")&&await Promise.resolve().then(()=>(Pb(),LE)),i("co-form")&&await Promise.resolve().then(()=>(Lb(),NE)),i("cmp-grid")&&await Promise.resolve().then(()=>(Ob(),OE)),i("oc")&&await Promise.resolve().then(()=>(kb(),kE)),i("fab-detail")&&await Promise.resolve().then(()=>(zb(),BE)),i("acc")&&await Promise.resolve().then(()=>(Hb(),zE)),i("dl-models")&&await Promise.resolve().then(()=>(Gb(),VE)),i("shop-grid")&&await Promise.resolve().then(()=>($b(),qE)),i("st-canvas")&&await Promise.resolve().then(()=>(f0(),aA)),i("fabs")&&await Promise.resolve().then(()=>(p0(),oA))});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.6.9
  *)
*/
