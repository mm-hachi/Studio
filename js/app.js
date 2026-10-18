(()=>{var g0=Object.defineProperty;var ze=(i,e)=>()=>(i&&(e=i(i=0)),e);var Vd=(i,e)=>{for(var t in e)g0(i,t,{get:e[t],enumerable:!0})};var xl,$d,ge,b0,Lo,dt,y0,_a,qd,x0,Sa,Mi,jd,Xd,Ma,cr,v0,st,Yd,Kd,Wd,Io,Zd,_0,Do,Jd,ii,Qd,No,ef,Uo,tf,vl,nf,sf,rf,yn,af,of,Oo,cf,lf,hf,uf,df,ff,pf,mf,gf,Nn=ze(()=>{xl="dekara-cfg",$d={};try{$d=JSON.parse(localStorage.getItem(xl)||"{}")}catch{}ge={products:{}},b0={},Lo={},dt={models:{},documents:null},y0=()=>new Promise((i,e)=>{let t=indexedDB.open("dekara-media",1);t.onupgradeneeded=()=>t.result.createObjectStore("f"),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)}),_a=(i,e)=>y0().then(t=>new Promise((n,s)=>{let r=t.transaction("f",i),a=e(r.objectStore("f"));r.oncomplete=()=>n(a.result),r.onerror=()=>s(r.error)})),qd=(async()=>{try{let e=await fetch("data/site.json",{cache:"no-store"});if(e.ok){let t=await e.json();Object.assign(dt,t),Object.assign(b0,JSON.parse(JSON.stringify(t)))}}catch{}let i={...$d};delete i._publishedAt,Object.assign(ge,JSON.parse(JSON.stringify(dt.config||{})),i),ge.products??={},!dt.apiBase&&ge.site?.apiBase&&(dt.apiBase=ge.site.apiBase);try{let e=await _a("readonly",n=>n.getAllKeys()),t=await _a("readonly",n=>n.getAll());e.forEach((n,s)=>Lo[n]={url:URL.createObjectURL(t[s].blob),type:t[s].type||"",name:t[s].name})}catch(e){console.warn("Media store unavailable",e)}})(),x0=i=>{if((ge._removed||[]).includes(i))return null;let e=dt.files?.[i];return e?{url:e.path,type:e.type||"",name:e.name||e.path.split("/").pop(),repo:!0}:null},Sa=i=>Lo[i]||x0(i),Mi=i=>Sa(i)?.url||null,jd=i=>Lo[i]||null,Xd=()=>Object.keys(Lo),Ma=(i,e)=>(ge._removed?.includes(i)&&(ge._removed=ge._removed.filter(t=>t!==i),st()),_a("readwrite",t=>t.put({blob:e,type:e.type||(/\.(mp4|m4v|mov|webm|ogv)$/i.test(e.name)?"video/mp4":""),name:e.name},i))),cr=async i=>{try{await _a("readwrite",e=>e.delete(i))}catch{}if(dt.files?.[i]){let e=ge._removed??=[];e.includes(i)||e.push(i),st()}},v0=()=>_a("readwrite",i=>i.clear()),st=()=>localStorage.setItem(xl,JSON.stringify(ge)),Yd=(i,e,t)=>{(ge.products[i]??={})[e]=e==="price"?Number(t)||0:t,st()},Kd=i=>{Object.keys(ge).forEach(e=>delete ge[e]),Object.assign(ge,i),ge.products??={},st()},Wd={maxPieces:12,maxWidth:500,maxDepth:400,snap:!0,enabled:{seat:!0,corner:!0,chaise:!0,ottoman:!0,arm:!0},prices:{seat:6500,corner:7200,chaise:8800,ottoman:3900,arm:1800},max:{seat:0,corner:0,chaise:0,ottoman:0,arm:0},presets:{1:!0,2:!0,3:!0,4:!0}},Io=()=>{let i=ge.studio||{},e=t=>({...Wd[t],...i[t]||{}});return{...Wd,...i,enabled:e("enabled"),prices:e("prices"),max:e("max"),presets:e("presets")}},Zd=(i,e)=>{let t=i.split("."),n=ge.studio??={};t.slice(0,-1).forEach(s=>n=n[s]??={}),n[t[t.length-1]]=e,st()},_0={delivery:950,payNow:!0},Do=()=>({..._0,...ge.shop||{}}),Jd=(i,e)=>{(ge.shop??={})[i]=e,st()},ii=()=>ge.site||{},Qd=(i,e)=>{(ge.site??={})[i]=e,st()},No=()=>(ge.collections??dt.collections??[]).map(i=>({...i,image:Mi("collection:"+i.id)||i.image||null})),ef=i=>{(ge.added??=[]).push(i),st()},Uo=(i,e,t)=>{((ge.mapping??={})[i]??={})[e]=t,st()},tf=(i,e)=>{ge.mapping?.[i]&&delete ge.mapping[i][e],st()},vl=(i,e)=>{(ge.pieceFabrics??={})[i]=e,st()},nf=(i,e,t)=>{((ge.pieceFinishes??={})[i]??={})[e]=t,st()},sf=(i,e)=>ge.pieceFinishes?.[i]?.[e]??dt.pieceFinishes?.[i]?.[e]??null,rf=(i,e,t)=>{((ge.pieceDefaults??={})[i]??={})[e]=t,st()},yn=()=>{let i=ge.finishTypes??dt.finishTypes??[{id:"frame",name:"Frame",target:"frame"}];return i.some(e=>e.id==="fabric")?i:[...i,{id:"fabric",name:"Fabric",target:"fabric",materialType:"Fabric"}]},af=i=>{let e=[...yn()];e.some(t=>t.id===i.id)||e.push(i),ge.finishTypes=e,st()},of=i=>{i!=="fabric"&&(ge.finishTypes=yn().filter(e=>e.id!==i),st())},Oo=()=>({fabrics:ge.studioFabrics??dt.studioFabrics??null,finishes:ge.studioFinishes??dt.studioFinishes??{}}),cf=i=>{ge.studioFabrics=i,st()},lf=(i,e)=>{(ge.studioFinishes??={})[i]=e,st()},hf=i=>{ge.materialOrder=[...i],st()},uf=i=>{(ge.addedFabrics??=[]).push(i),st()},df=(i,e,t)=>{((ge.fabricEdits??={})[i]??={})[e]=t,st()},ff=i=>{let e=ge.addedFabrics||[];e.some(t=>t.id===i)?ge.addedFabrics=e.filter(t=>t.id!==i):(ge.deletedFabrics??=[]).push(i),st()},pf=()=>{delete ge.addedFabrics,delete ge.deletedFabrics,delete ge.fabricEdits,delete ge.finishTypes,delete ge.pieceFinishes,delete ge.pieceDefaults,delete ge.studioFabrics,delete ge.studioFinishes,delete ge.materialOrder,st()},mf=i=>{(ge.added||[]).some(e=>e.id===i)?ge.added=ge.added.filter(e=>e.id!==i):(ge.deleted??=[]).push(i),st()},gf=async()=>{await v0();try{localStorage.removeItem(xl)}catch{}}});var Ps,xn,_l,bf,yf,xf,vf,_f,Sf=ze(()=>{Ps=["Sofas","Dining Sets","Bedroom","Tables","Chairs","Plasma Stands"],xn=(i,e,t,n,s,r,a,o,c)=>({id:i,name:e,cat:t,sub:n,tag:s,price:r,dims:a,mat:o,desc:c,kind:i}),_l=[xn("sofa","Sandton Sofa","Sofas","Sofas","Three-seater \xB7 Made to order",18900,[220,95,85],"Hardwood frame, high-density foam","Deep seats, soft shoulders and a frame built to last. Choose your fabric and size and we build it to fit your space."),xn("chaise","Bryanston Chaise Sofa","Sofas","Chaise Lounge","Two-seater with chaise",24500,[270,175,85],"Hardwood frame, high-density foam","A generous chaise end for long afternoons. Made to order in your choice of fabric."),xn("armchair","Fourways Armchair","Chairs","Arm Chairs","Accent armchair",8900,[85,88,90],"Hardwood frame, turned oak feet","A generous accent chair with a supportive back and wide arms. Comfortable enough to live in."),xn("bar","Parktown Bar Chair","Chairs","Bar Chairs","Upholstered bar chair",2900,[45,45,105],"Steel frame, upholstered seat","A supportive bar chair with a footrest ring and padded back, suited to kitchen islands and home bars."),xn("dchair","Melville Dining Chair","Chairs","Dining Chairs","Upholstered dining chair",2400,[48,52,92],"Hardwood legs, upholstered seat","A comfortable, hard-wearing dining chair that pairs with any table in the range."),xn("dtable","Rivonia Dining Table","Tables","Dining Room Tables","Six-seater dining table",14500,[200,100,76],"Solid hardwood","A solid table for long dinners, sized for six and finished to suit your room."),xn("coffee","Rosebank Coffee Table","Tables","Coffee Tables","Round coffee table",6400,[110,110,42],"Solid oak top, lower shelf","A solid round table with a lower shelf for books and bowls."),xn("console","Illovo Console","Tables","Consoles","Slim hallway console",7800,[160,40,82],"Hardwood with lower shelf","A slim console for entrances and living areas, with a shelf for baskets and books."),xn("dset","Morningside Dining Set","Dining Sets","Dining Sets","Table and four chairs",24900,[160,90,76],"Hardwood table, upholstered chairs","A complete dining set: a solid table with four upholstered chairs, ready for the table."),xn("ottoman","Melrose Ottoman","Bedroom","Ottomans","Upholstered ottoman",3900,[60,60,45],"Hardwood frame, upholstered","Footstool, bench or bed-end. A quietly versatile piece in any fabric."),xn("headboard","Houghton Headboard","Bedroom","Headboards","Upholstered headboard",6200,[200,12,120],"Hardwood frame, upholstered panel","A tall upholstered headboard that anchors the bed. Sized to your mattress."),xn("bedside","Craighall Night Stand","Bedroom","Night Stands","Single-drawer night stand",3200,[55,40,50],"Solid hardwood","A compact night stand with a deep drawer and brass handle."),xn("dresser","Hyde Park Dresser","Bedroom","Dressers","Three-drawer dresser",12900,[160,50,85],"Solid hardwood","Generous storage with soft-closing drawers and brass hardware."),xn("tv","Sunninghill Plasma Stand","Plasma Stands","Plasma Stands","Low media unit",7900,[180,42,60],"Solid hardwood","A low media unit with open shelves, sized for modern screens.")],bf=["sofa","armchair","coffee","ottoman"],yf=[["Oyster","#d4cabb"],["Sage","#8a967c"],["Charcoal","#3a3a3c"],["Terracotta","#b0654a"],["Navy","#26344d"],["Mustard","#b8923a"],["Blush","#d7b5ab"],["Forest","#33473a"]],xf=[["Walnut","#5b3f26"],["Natural oak","#a8825a"],["Ebony","#1f1a17"],["Ash","#c2b59b"]],vf=[{id:"frame",name:"Frame",target:"frame"},{id:"fabric",name:"Fabric",target:"fabric",materialType:"Fabric"}],_f={Oyster:"A soft, warm neutral with a hint of grey. Easy to live with, and pairs well with natural wood and brass.",Sage:"A muted green with a calm, earthy feel. Brings colour without overwhelming a room.",Charcoal:"A deep, versatile grey that anchors lighter interiors.",Terracotta:"A warm, clay-inspired red-orange that adds instant character.",Navy:"A rich, dark blue with a classic, tailored look.",Mustard:"A warm golden yellow for confident accent pieces.",Blush:"A gentle, dusty pink that softens a space.",Forest:"A deep green with a refined, traditional feel."}});function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function vy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _y(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function Sy(i,e,t,n){return Ia(i,e,1-Math.exp(-t*n))}function My(i,e=1){return e-Math.abs(zh(i,e*2)-e)}function wy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ey(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ay(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ty(i,e){return i+Math.random()*(e-i)}function Ry(i){return i*(.5-Math.random())}function Cy(i){i!==void 0&&(ap=i);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Py(i){return i*La}function Ly(i){return i*Or}function oh(i){return(i&i-1)===0&&i!==0}function Iy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dy(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function wm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ny(){let i=Oa("canvas");return i.style.display="block",i}function Da(i){i in op||(op[i]=!0,console.warn(i))}function Pr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Il(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Is.fromArray(i,r);let o=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),c=e.dot(Is),l=t.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Xy(i,e,t,n,s,r,a,o){let c;if(e.side===nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===oi,o),c===null)return null;ec.copy(o),ec.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ec);return l<t.near||l>t.far?null:{distance:l,point:ec.clone(),object:i}}function tc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,xr),i.getVertexPosition(c,vr),i.getVertexPosition(l,_r);let h=Xy(i,e,t,n,xr,vr,_r,Qo);if(h){s&&(Ko.fromBufferAttribute(s,o),Zo.fromBufferAttribute(s,c),Jo.fromBufferAttribute(s,l),h.uv=Ar.getInterpolation(Qo,xr,vr,_r,Ko,Zo,Jo,new Ce)),r&&(Ko.fromBufferAttribute(r,o),Zo.fromBufferAttribute(r,c),Jo.fromBufferAttribute(r,l),h.uv1=Ar.getInterpolation(Qo,xr,vr,_r,Ko,Zo,Jo,new Ce),h.uv2=h.uv1),a&&(vp.fromBufferAttribute(a,o),_p.fromBufferAttribute(a,c),Sp.fromBufferAttribute(a,l),h.normal=Ar.getInterpolation(Qo,xr,vr,_r,vp,_p,Sp,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};Ar.getNormal(xr,vr,_r,u.normal),h.face=u}return h}function kr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=kr(i[t]);for(let s in n)e[s]=n[s]}return e}function Yy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Am(i){return i.getRenderTarget()===null?i.outputColorSpace:lt.workingColorSpace}function Tm(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tx(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,u,d),l.onUploadCallback();let b;if(u instanceof Float32Array)b=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=i.SHORT;else if(u instanceof Uint32Array)b=i.UNSIGNED_INT;else if(u instanceof Int32Array)b=i.INT;else if(u instanceof Int8Array)b=i.BYTE;else if(u instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,m=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&m.length===0&&i.bufferSubData(u,0,d),m.length!==0){for(let b=0,g=m.length;b<g;b++){let p=m[b];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}function U_(i,e,t,n,s,r,a){let o=new Me(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(g,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?b(o,c):y&&y.isColor&&(b(y,1),x=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===zc)?(h===void 0&&(h=new He(new Oi(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:kr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=lt.getTransfer(y.colorSpace)!==yt,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new He(new Vs(2,2),new Xn({name:"BackgroundMaterial",uniforms:kr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function b(g,p){g.getRGB(ic,Am(i)),n.buffers.color.setClear(ic.r,ic.g,ic.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,b(o,c)},render:m}}function O_(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),l=c,h=!1;function u(L,N,H,$,j){let q=!1;if(a){let K=b($,H,N);l!==K&&(l=K,f(l.object)),q=p(L,$,H,j),q&&x(L,$,H,j)}else{let K=N.wireframe===!0;(l.geometry!==$.id||l.program!==H.id||l.wireframe!==K)&&(l.geometry=$.id,l.program=H.id,l.wireframe=K,q=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,D(L,N,H,$),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function m(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function b(L,N,H){let $=H.wireframe===!0,j=o[L.id];j===void 0&&(j={},o[L.id]=j);let q=j[N.id];q===void 0&&(q={},j[N.id]=q);let K=q[$];return K===void 0&&(K=g(d()),q[$]=K),K}function g(L){let N=[],H=[],$=[];for(let j=0;j<s;j++)N[j]=0,H[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:$,object:L,attributes:{},index:null}}function p(L,N,H,$){let j=l.attributes,q=N.attributes,K=0,Z=H.getAttributes();for(let fe in Z)if(Z[fe].location>=0){let X=j[fe],se=q[fe];if(se===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;K++}return l.attributesNum!==K||l.index!==$}function x(L,N,H,$){let j={},q=N.attributes,K=0,Z=H.getAttributes();for(let fe in Z)if(Z[fe].location>=0){let X=q[fe];X===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(X=L.instanceColor));let se={};se.attribute=X,X&&X.data&&(se.data=X.data),j[fe]=se,K++}l.attributes=j,l.attributesNum=K,l.index=$}function y(){let L=l.newAttributes;for(let N=0,H=L.length;N<H;N++)L[N]=0}function v(L){R(L,0)}function R(L,N){let H=l.newAttributes,$=l.enabledAttributes,j=l.attributeDivisors;H[L]=1,$[L]===0&&(i.enableVertexAttribArray(L),$[L]=1),j[L]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),j[L]=N)}function T(){let L=l.newAttributes,N=l.enabledAttributes;for(let H=0,$=N.length;H<$;H++)N[H]!==L[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function A(L,N,H,$,j,q,K){K===!0?i.vertexAttribIPointer(L,N,H,j,q):i.vertexAttribPointer(L,N,H,$,j,q)}function D(L,N,H,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let j=$.attributes,q=H.getAttributes(),K=N.defaultAttributeValues;for(let Z in q){let fe=q[Z];if(fe.location>=0){let V=j[Z];if(V===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let X=V.normalized,se=V.itemSize,ve=t.get(V);if(ve===void 0)continue;let xe=ve.buffer,Pe=ve.type,te=ve.bytesPerElement,ae=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||V.gpuType===fm);if(V.isInterleavedBufferAttribute){let Se=V.data,U=Se.stride,Ct=V.offset;if(Se.isInstancedInterleavedBuffer){for(let me=0;me<fe.locationSize;me++)R(fe.location+me,Se.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let me=0;me<fe.locationSize;me++)v(fe.location+me);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let me=0;me<fe.locationSize;me++)A(fe.location+me,se/fe.locationSize,Pe,X,U*te,(Ct+se/fe.locationSize*me)*te,ae)}else{if(V.isInstancedBufferAttribute){for(let Se=0;Se<fe.locationSize;Se++)R(fe.location+Se,V.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Se=0;Se<fe.locationSize;Se++)v(fe.location+Se);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Se=0;Se<fe.locationSize;Se++)A(fe.location+Se,se/fe.locationSize,Pe,X,se*te,se/fe.locationSize*Se*te,ae)}}else if(K!==void 0){let X=K[Z];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(fe.location,X);break;case 3:i.vertexAttrib3fv(fe.location,X);break;case 4:i.vertexAttrib4fv(fe.location,X);break;default:i.vertexAttrib1fv(fe.location,X)}}}}T()}function S(){z();for(let L in o){let N=o[L];for(let H in N){let $=N[H];for(let j in $)m($[j].object),delete $[j];delete N[H]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let N=o[L.id];for(let H in N){let $=N[H];for(let j in $)m($[j].object),delete $[j];delete N[H]}delete o[L.id]}function O(L){for(let N in o){let H=o[N];if(H[L.id]===void 0)continue;let $=H[L.id];for(let j in $)m($[j].object),delete $[j];delete H[L.id]}}function z(){Y(),h=!0,l!==c&&(l=c,f(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:z,resetDefaultState:Y,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:v,disableUnusedAttributes:T}}function F_(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,m;if(s)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(h[m],u[m]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let m=0;for(let b=0;b<d;b++)m+=u[b];t.update(m,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function k_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,v=a||e.has("OES_texture_float"),R=y&&v,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:b,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:R,maxSamples:T}}function B_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Rn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,y=x*4,v=p.clippingState||null;c.value=v,v=h(m,d,y,f);for(let R=0;R!==y;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==b;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function z_(i){let e=new WeakMap;function t(a,o){return o===ih?a.mapping=Ir:o===sh&&(a.mapping=Dr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ih||o===sh)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new uh(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function H_(i){let e=[],t=[],n=[],s=i,r=i-Tr+1+Mp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Tr?c=Mp[a-i+Tr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,D=T>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];x.set(S,b*m*T),y.set(d,g*m*T);let w=[T,T,T,T,T,T];v.set(w,p*m*T)}let R=new Ut;R.setAttribute("position",new at(x,b)),R.setAttribute("uv",new at(y,g)),R.setAttribute("faceIndex",new at(v,p)),e.push(R),s>Tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ap(i,e,t){let n=new Ni(i,e,t);return n.texture.mapping=zc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function G_(i,e,t){let n=new Float32Array(Fs),s=new P(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Tp(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Rp(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function V_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ih||c===sh,h=c===Ir||c===Dr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Fi(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Fi(i));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function W_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let b=d.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)e.remove(b[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let b=f[m];for(let g=0,p=b.length;g<p;g++)e.update(b[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let y=0,v=x.length;y<v;y+=3){let R=x[y+0],T=x[y+1],A=x[y+2];d.push(R,T,T,A,A,R)}}else if(m!==void 0){let x=m.array;b=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let R=y+0,T=y+1,A=y+2;d.push(R,T,T,A,A,R)}}else return;let g=new(wm(d)?Sc:_c)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function q_(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,m){i.drawElements(r,m,o,f*c),t.update(m,r,1)}function u(f,m,b){if(b===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,o,f*c,b),t.update(m,r,b)}function d(f,m,b){if(b===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<b;p++)this.render(f[p]/c,m[p]);else{g.multiDrawElementsWEBGL(r,m,0,o,f,0,b);let p=0;for(let x=0;x<b;x++)p+=m[x];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function j_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function X_(i,e){return i[0]-e[0]}function Y_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function K_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new mt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==m){let L=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",L)};b!==void 0&&b.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;x===!0&&(D=1),y===!0&&(D=2),v===!0&&(D=3);let S=h.attributes.position.count*D,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let O=new Float32Array(S*w*4*m),z=new xc(O,S,w,m);z.type=Li,z.needsUpdate=!0;let Y=D*4;for(let N=0;N<m;N++){let H=R[N],$=T[N],j=A[N],q=S*w*4*N;for(let K=0;K<H.count;K++){let Z=K*Y;x===!0&&(a.fromBufferAttribute(H,K),O[q+Z+0]=a.x,O[q+Z+1]=a.y,O[q+Z+2]=a.z,O[q+Z+3]=0),y===!0&&(a.fromBufferAttribute($,K),O[q+Z+4]=a.x,O[q+Z+5]=a.y,O[q+Z+6]=a.z,O[q+Z+7]=0),v===!0&&(a.fromBufferAttribute(j,K),O[q+Z+8]=a.x,O[q+Z+9]=a.y,O[q+Z+10]=a.z,O[q+Z+11]=j.itemSize===4?a.w:1)}}b={count:m,texture:z,size:new Ce(S,w)},r.set(h,b),h.addEventListener("dispose",L)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,m=n[h.id];if(m===void 0||m.length!==f){m=[];for(let y=0;y<f;y++)m[y]=[y,0];n[h.id]=m}for(let y=0;y<f;y++){let v=m[y];v[0]=y,v[1]=d[y]}m.sort(Y_);for(let y=0;y<8;y++)y<f&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(X_);let b=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let v=o[y],R=v[0],T=v[1];R!==Number.MAX_SAFE_INTEGER&&T?(b&&h.getAttribute("morphTarget"+y)!==b[R]&&h.setAttribute("morphTarget"+y,b[R]),g&&h.getAttribute("morphNormal"+y)!==g[R]&&h.setAttribute("morphNormal"+y,g[R]),s[y]=T,p+=T):(b&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),g&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Z_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function Xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cp[s];if(r===void 0&&(r=new Float32Array(s),Cp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vc(i,e){let t=Pp[e];t===void 0&&(t=new Int32Array(e),Pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function eS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function tS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function nS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Dp.set(n),i.uniformMatrix2fv(this.addr,!1,Dp),Ft(t,n)}}function iS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),Ft(t,n)}}function sS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Lp.set(n),i.uniformMatrix4fv(this.addr,!1,Lp),Ft(t,n)}}function rS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function oS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function cS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function lS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function dS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function fS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Cm:Rm;t.setTexture2D(e||r,s)}function pS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lm,s)}function mS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Im,s)}function gS(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pm,s)}function bS(i){switch(i){case 5126:return J_;case 35664:return Q_;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return sS;case 5124:case 35670:return rS;case 35667:case 35671:return aS;case 35668:case 35672:return oS;case 35669:case 35673:return cS;case 5125:return lS;case 36294:return hS;case 36295:return uS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}function yS(i,e){i.uniform1fv(this.addr,e)}function xS(i,e){let t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function vS(i,e){let t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function _S(i,e){let t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function SS(i,e){let t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function MS(i,e){let t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wS(i,e){let t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ES(i,e){i.uniform1iv(this.addr,e)}function AS(i,e){i.uniform2iv(this.addr,e)}function TS(i,e){i.uniform3iv(this.addr,e)}function RS(i,e){i.uniform4iv(this.addr,e)}function CS(i,e){i.uniform1uiv(this.addr,e)}function PS(i,e){i.uniform2uiv(this.addr,e)}function LS(i,e){i.uniform3uiv(this.addr,e)}function IS(i,e){i.uniform4uiv(this.addr,e)}function DS(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Rm,r[a])}function NS(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lm,r[a])}function US(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Im,r[a])}function OS(i,e,t){let n=this.cache,s=e.length,r=Vc(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pm,r[a])}function FS(i){switch(i){case 5126:return yS;case 35664:return xS;case 35665:return vS;case 35666:return _S;case 35674:return SS;case 35675:return MS;case 35676:return wS;case 5124:case 35670:return ES;case 35667:case 35671:return AS;case 35668:case 35672:return TS;case 35669:case 35673:return RS;case 5125:return CS;case 36294:return PS;case 36295:return LS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return OS}}function Np(i,e){i.seq.push(e),i.map[e.id]=e}function kS(i,e,t){let n=i.name,s=n.length;for(Yl.lastIndex=0;;){let r=Yl.exec(n),a=Yl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Np(t,l===void 0?new dh(o,i,e):new fh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ph(o),Np(t,u)),t=u}}}function Up(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function HS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function GS(i){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(i),n;switch(e===t?n="":e===mc&&t===pc?n="LinearDisplayP3ToLinearSRGB":e===pc&&t===mc&&(n="LinearSRGBToLinearDisplayP3"),i){case It:case Gc:return[n,"LinearTransferOETF"];case rt:case Bh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Op(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+HS(i.getShaderSource(e),a)}else return s}function VS(i,e){let t=GS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function WS(i,e){let t;switch(e){case Y0:t="Linear";break;case K0:t="Reinhard";break;case Z0:t="OptimizedCineon";break;case Xa:t="ACESFilmic";break;case Q0:t="AgX";break;case J0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $S(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rr).join(`
`)}function qS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rr).join(`
`)}function jS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function XS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Rr(i){return i!==""}function Fp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function mh(i){return i.replace(YS,ZS)}function ZS(i,e){let t=Ve[e];if(t===void 0){let n=KS.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mh(t)}function Bp(i){return i.replace(JS,QS)}function QS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function tM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ir:case Dr:e="ENVMAP_TYPE_CUBE";break;case zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function iM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case um:e="ENVMAP_BLENDING_MULTIPLY";break;case j0:e="ENVMAP_BLENDING_MIX";break;case X0:e="ENVMAP_BLENDING_ADD";break}return e}function sM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rM(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=eM(t),l=tM(t),h=nM(t),u=iM(t),d=sM(t),f=t.isWebGL2?"":$S(t),m=qS(t),b=jS(r),g=s.createProgram(),p,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Rr).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Rr).join(`
`),x.length>0&&(x+=`
`)):(p=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),x=[f,zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?Ve.tonemapping_pars_fragment:"",t.toneMapping!==is?WS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,VS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),a=mh(a),a=Fp(a,t),a=kp(a,t),o=mh(o),o=Fp(o,t),o=kp(o,t),a=Bp(a),o=Bp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let v=y+p+a,R=y+x+o,T=Up(s,s.VERTEX_SHADER,v),A=Up(s,s.FRAGMENT_SHADER,R);s.attachShader(g,T),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(z){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(A).trim(),H=!0,$=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,A);else{let j=Op(s,T,"vertex"),q=Op(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+j+`
`+q)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||N==="")&&($=!1);$&&(z.diagnostics={runnable:H,programLog:Y,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:x}})}s.deleteShader(T),s.deleteShader(A),S=new Lr(s,g),w=XS(s,g)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,BS)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}function oM(i,e,t,n,s,r,a){let o=new Fa,c=new gh,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return S===0?"uv":`uv${S}`}function g(S,w,O,z,Y){let L=z.fog,N=Y.geometry,H=S.isMeshStandardMaterial?z.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),j=$&&$.mapping===zc?$.image.height:null,q=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Z=K!==void 0?K.length:0,fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let V,X,se,ve;if(q){let ln=ri[q];V=ln.vertexShader,X=ln.fragmentShader}else V=S.vertexShader,X=S.fragmentShader,c.update(S),se=c.getVertexShaderID(S),ve=c.getFragmentShaderID(S);let xe=i.getRenderTarget(),Pe=Y.isInstancedMesh===!0,te=Y.isBatchedMesh===!0,ae=!!S.map,Se=!!S.matcap,U=!!$,Ct=!!S.aoMap,me=!!S.lightMap,Ae=!!S.bumpMap,ye=!!S.normalMap,ut=!!S.displacementMap,Ue=!!S.emissiveMap,E=!!S.metalnessMap,_=!!S.roughnessMap,k=S.anisotropy>0,ne=S.clearcoat>0,ee=S.iridescence>0,ie=S.sheen>0,_e=S.transmission>0,le=k&&!!S.anisotropyMap,pe=ne&&!!S.clearcoatMap,Le=ne&&!!S.clearcoatNormalMap,Fe=ne&&!!S.clearcoatRoughnessMap,J=ee&&!!S.iridescenceMap,et=ee&&!!S.iridescenceThicknessMap,C=ie&&!!S.sheenColorMap,Q=ie&&!!S.sheenRoughnessMap,ue=!!S.specularMap,re=!!S.specularColorMap,Ee=!!S.specularIntensityMap,qe=_e&&!!S.transmissionMap,tt=_e&&!!S.thicknessMap,We=!!S.gradientMap,he=!!S.alphaMap,I=S.alphaTest>0,oe=!!S.alphaHash,ce=!!S.extensions,Ie=!!N.attributes.uv1,Te=!!N.attributes.uv2,it=!!N.attributes.uv3,ot=is;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ot=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:X,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:te,instancing:Pe,instancingColor:Pe&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:It,map:ae,matcap:Se,envMap:U,envMapMode:U&&$.mapping,envMapCubeUVHeight:j,aoMap:Ct,lightMap:me,bumpMap:Ae,normalMap:ye,displacementMap:d&&ut,emissiveMap:Ue,normalMapObjectSpace:ye&&S.normalMapType===dy,normalMapTangentSpace:ye&&S.normalMapType===Sm,metalnessMap:E,roughnessMap:_,anisotropy:k,anisotropyMap:le,clearcoat:ne,clearcoatMap:pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:et,sheen:ie,sheenColorMap:C,sheenRoughnessMap:Q,specularMap:ue,specularColorMap:re,specularIntensityMap:Ee,transmission:_e,transmissionMap:qe,thicknessMap:tt,gradientMap:We,opaque:S.transparent===!1&&S.blending===Cr,alphaMap:he,alphaTest:I,alphaHash:oe,combine:S.combine,mapUv:ae&&b(S.map.channel),aoMapUv:Ct&&b(S.aoMap.channel),lightMapUv:me&&b(S.lightMap.channel),bumpMapUv:Ae&&b(S.bumpMap.channel),normalMapUv:ye&&b(S.normalMap.channel),displacementMapUv:ut&&b(S.displacementMap.channel),emissiveMapUv:Ue&&b(S.emissiveMap.channel),metalnessMapUv:E&&b(S.metalnessMap.channel),roughnessMapUv:_&&b(S.roughnessMap.channel),anisotropyMapUv:le&&b(S.anisotropyMap.channel),clearcoatMapUv:pe&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:C&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Q&&b(S.sheenRoughnessMap.channel),specularMapUv:ue&&b(S.specularMap.channel),specularColorMapUv:re&&b(S.specularColorMap.channel),specularIntensityMapUv:Ee&&b(S.specularIntensityMap.channel),transmissionMapUv:qe&&b(S.transmissionMap.channel),thicknessMapUv:tt&&b(S.thicknessMap.channel),alphaMapUv:he&&b(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ye||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Te,vertexUv3s:it,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(ae||he),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ce&&S.extensions.derivatives===!0,extensionFragDepth:ce&&S.extensions.fragDepth===!0,extensionDrawBuffers:ce&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let O in S.defines)w.push(O),w.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(x(w,S),y(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function y(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function v(S){let w=m[S.type],O;if(w){let z=ri[w];O=Ky.clone(z.uniforms)}else O=S.uniforms;return O}function R(S,w){let O;for(let z=0,Y=l.length;z<Y;z++){let L=l[z];if(L.cacheKey===w){O=L,++O.usedTimes;break}}return O===void 0&&(O=new rM(i,w,S,r),l.push(O)),O}function T(S){if(--S.usedTimes===0){let w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function A(S){c.remove(S)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:D}}function cM(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function lM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,b,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||lM),n.length>1&&n.sort(d||Hp),s.length>1&&s.sort(d||Hp)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function hM(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gp,i.set(n,[a])):s>=r.length?(a=new Gp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function uM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Me};break;case"SpotLight":t={position:new P,direction:new P,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function dM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function pM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mM(i,e){let t=new uM,n=dM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new Ge,o=new Ge;function c(h,u){let d=0,f=0,m=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let b=0,g=0,p=0,x=0,y=0,v=0,R=0,T=0,A=0,D=0,S=0;h.sort(pM);let w=u===!0?Math.PI:1;for(let z=0,Y=h.length;z<Y;z++){let L=h[z],N=L.color,H=L.intensity,$=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*H*w,f+=N.g*H*w,m+=N.b*H*w;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],H);S++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.directionalShadow[b]=Z,s.directionalShadowMap[b]=j,s.directionalShadowMatrix[b]=L.shadow.matrix,v++}s.directional[b]=q,b++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(H*w),q.distance=$,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[p]=q;let K=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[p]=K.matrix,L.castShadow){let Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,s.spotShadow[p]=Z,s.spotShadowMap[p]=j,T++}p++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(N).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=q,x++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*w),q.distance=L.distance,q.decay=L.decay,L.castShadow){let K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,s.pointShadow[g]=Z,s.pointShadowMap[g]=j,s.pointShadowMatrix[g]=L.shadow.matrix,R++}s.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(H*w),q.groundColor.copy(L.groundColor).multiplyScalar(H*w),s.hemi[y]=q,y++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=m;let O=s.hash;(O.directionalLength!==b||O.pointLength!==g||O.spotLength!==p||O.rectAreaLength!==x||O.hemiLength!==y||O.numDirectionalShadows!==v||O.numPointShadows!==R||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==S)&&(s.directional.length=b,s.spot.length=p,s.rectArea.length=x,s.point.length=g,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=S,O.directionalLength=b,O.pointLength=g,O.spotLength=p,O.rectAreaLength=x,O.hemiLength=y,O.numDirectionalShadows=v,O.numPointShadows=R,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=S,s.version=fM++)}function l(h,u){let d=0,f=0,m=0,b=0,g=0,p=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let v=h[x];if(v.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(v.isSpotLight){let R=s.spot[m];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let R=s.rectArea[b];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let R=s.hemi[g];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:s}}function Vp(i,e){let t=new mM(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gM(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Vp(i,e),t.set(r,[c])):a>=o.length?(c=new Vp(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function xM(i,e,t){let n=new ka,s=new Ce,r=new Ce,a=new mt,o=new yh({depthPacking:uy}),c=new xh,l={},h=t.maxTextureSize,u={[oi]:nn,[nn]:oi,[qt]:qt},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:bM,fragmentShader:yM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ut;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new He(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hm;let p=this.type;this.render=function(T,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ns),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Y=p!==Pi&&this.type===Pi,L=p===Pi&&this.type!==Pi;for(let N=0,H=T.length;N<H;N++){let $=T[N],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let q=j.getFrameExtents();if(s.multiply(q),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,j.mapSize.y=r.y)),j.map===null||Y===!0||L===!0){let Z=this.type!==Pi?{minFilter:Lt,magFilter:Lt}:{};j.map!==null&&j.map.dispose(),j.map=new Ni(s.x,s.y,Z),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let K=j.getViewportCount();for(let Z=0;Z<K;Z++){let fe=j.getViewport(Z);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),z.viewport(a),j.updateMatrices($,Z),n=j.getFrustum(),v(A,D,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===Pi&&x(j,D),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,w,O)};function x(T,A){let D=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,f,b,null)}function y(T,A,D,S){let w=null,O=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)w=O;else if(w=D.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=w.uuid,Y=A.uuid,L=l[z];L===void 0&&(L={},l[z]=L);let N=L[Y];N===void 0&&(N=w.clone(),L[Y]=N,A.addEventListener("dispose",R)),w=N}if(w.visible=A.visible,w.wireframe=A.wireframe,S===Pi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let z=i.properties.get(w);z.light=D}return w}function v(T,A,D,S,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Pi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let Y=e.update(T),L=T.material;if(Array.isArray(L)){let N=Y.groups;for(let H=0,$=N.length;H<$;H++){let j=N[H],q=L[j.materialIndex];if(q&&q.visible){let K=y(T,q,S,w);T.onBeforeShadow(i,T,A,D,Y,K,j),i.renderBufferDirect(D,null,Y,K,T,j),T.onAfterShadow(i,T,A,D,Y,K,j)}}}else if(L.visible){let N=y(T,L,S,w);T.onBeforeShadow(i,T,A,D,Y,N,null),i.renderBufferDirect(D,null,Y,N,T,null),T.onAfterShadow(i,T,A,D,Y,N,null)}}let z=T.children;for(let Y=0,L=z.length;Y<L;Y++)v(z[Y],A,D,S,w)}function R(T){T.target.removeEventListener("dispose",R);for(let D in l){let S=l[D],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function vM(i,e,t){let n=t.isWebGL2;function s(){let I=!1,oe=new mt,ce=null,Ie=new mt(0,0,0,0);return{setMask:function(Te){ce!==Te&&!I&&(i.colorMask(Te,Te,Te,Te),ce=Te)},setLocked:function(Te){I=Te},setClear:function(Te,it,ot,Bt,ln){ln===!0&&(Te*=Bt,it*=Bt,ot*=Bt),oe.set(Te,it,ot,Bt),Ie.equals(oe)===!1&&(i.clearColor(Te,it,ot,Bt),Ie.copy(oe))},reset:function(){I=!1,ce=null,Ie.set(-1,0,0,0)}}}function r(){let I=!1,oe=null,ce=null,Ie=null;return{setTest:function(Te){Te?te(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(Te){oe!==Te&&!I&&(i.depthMask(Te),oe=Te)},setFunc:function(Te){if(ce!==Te){switch(Te){case z0:i.depthFunc(i.NEVER);break;case H0:i.depthFunc(i.ALWAYS);break;case G0:i.depthFunc(i.LESS);break;case dc:i.depthFunc(i.LEQUAL);break;case V0:i.depthFunc(i.EQUAL);break;case W0:i.depthFunc(i.GEQUAL);break;case $0:i.depthFunc(i.GREATER);break;case q0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Te}},setLocked:function(Te){I=Te},setClear:function(Te){Ie!==Te&&(i.clearDepth(Te),Ie=Te)},reset:function(){I=!1,oe=null,ce=null,Ie=null}}}function a(){let I=!1,oe=null,ce=null,Ie=null,Te=null,it=null,ot=null,Bt=null,ln=null;return{setTest:function(bt){I||(bt?te(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(bt){oe!==bt&&!I&&(i.stencilMask(bt),oe=bt)},setFunc:function(bt,hn,ni){(ce!==bt||Ie!==hn||Te!==ni)&&(i.stencilFunc(bt,hn,ni),ce=bt,Ie=hn,Te=ni)},setOp:function(bt,hn,ni){(it!==bt||ot!==hn||Bt!==ni)&&(i.stencilOp(bt,hn,ni),it=bt,ot=hn,Bt=ni)},setLocked:function(bt){I=bt},setClear:function(bt){ln!==bt&&(i.clearStencil(bt),ln=bt)},reset:function(){I=!1,oe=null,ce=null,Ie=null,Te=null,it=null,ot=null,Bt=null,ln=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,y=null,v=null,R=null,T=null,A=null,D=null,S=new Me(0,0,0),w=0,O=!1,z=null,Y=null,L=null,N=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,q=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=q>=2);let Z=null,fe={},V=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),se=new mt().fromArray(V),ve=new mt().fromArray(X);function xe(I,oe,ce,Ie){let Te=new Uint8Array(4),it=i.createTexture();i.bindTexture(I,it),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<ce;ot++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(oe+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return it}let Pe={};Pe[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),te(i.DEPTH_TEST),c.setFunc(dc),Ue(!1),E(Mf),te(i.CULL_FACE),ye(ns);function te(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function ae(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Se(I,oe){return f[I]!==oe?(i.bindFramebuffer(I,oe),f[I]=oe,n&&(I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function U(I,oe){let ce=b,Ie=!1;if(I)if(ce=m.get(oe),ce===void 0&&(ce=[],m.set(oe,ce)),I.isWebGLMultipleRenderTargets){let Te=I.texture;if(ce.length!==Te.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let it=0,ot=Te.length;it<ot;it++)ce[it]=i.COLOR_ATTACHMENT0+it;ce.length=Te.length,Ie=!0}}else ce[0]!==i.COLOR_ATTACHMENT0&&(ce[0]=i.COLOR_ATTACHMENT0,Ie=!0);else ce[0]!==i.BACK&&(ce[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Ct(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let me={[Os]:i.FUNC_ADD,[E0]:i.FUNC_SUBTRACT,[A0]:i.FUNC_REVERSE_SUBTRACT};if(n)me[Tf]=i.MIN,me[Rf]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(me[Tf]=I.MIN_EXT,me[Rf]=I.MAX_EXT)}let Ae={[T0]:i.ZERO,[R0]:i.ONE,[C0]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[U0]:i.SRC_ALPHA_SATURATE,[D0]:i.DST_COLOR,[L0]:i.DST_ALPHA,[P0]:i.ONE_MINUS_SRC_COLOR,[nh]:i.ONE_MINUS_SRC_ALPHA,[N0]:i.ONE_MINUS_DST_COLOR,[I0]:i.ONE_MINUS_DST_ALPHA,[O0]:i.CONSTANT_COLOR,[F0]:i.ONE_MINUS_CONSTANT_COLOR,[k0]:i.CONSTANT_ALPHA,[B0]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(I,oe,ce,Ie,Te,it,ot,Bt,ln,bt){if(I===ns){p===!0&&(ae(i.BLEND),p=!1);return}if(p===!1&&(te(i.BLEND),p=!0),I!==w0){if(I!==x||bt!==O){if((y!==Os||T!==Os)&&(i.blendEquation(i.FUNC_ADD),y=Os,T=Os),bt)switch(I){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wf:i.blendFunc(i.ONE,i.ONE);break;case Ef:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Af:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ef:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Af:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,R=null,A=null,D=null,S.set(0,0,0),w=0,x=I,O=bt}return}Te=Te||oe,it=it||ce,ot=ot||Ie,(oe!==y||Te!==T)&&(i.blendEquationSeparate(me[oe],me[Te]),y=oe,T=Te),(ce!==v||Ie!==R||it!==A||ot!==D)&&(i.blendFuncSeparate(Ae[ce],Ae[Ie],Ae[it],Ae[ot]),v=ce,R=Ie,A=it,D=ot),(Bt.equals(S)===!1||ln!==w)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ln),S.copy(Bt),w=ln),x=I,O=!1}function ut(I,oe){I.side===qt?ae(i.CULL_FACE):te(i.CULL_FACE);let ce=I.side===nn;oe&&(ce=!ce),Ue(ce),I.blending===Cr&&I.transparent===!1?ye(ns):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);let Ie=I.stencilWrite;l.setTest(Ie),Ie&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),k(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(I){z!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),z=I)}function E(I){I!==S0?(te(i.CULL_FACE),I!==Y&&(I===Mf?i.cullFace(i.BACK):I===M0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),Y=I}function _(I){I!==L&&(j&&i.lineWidth(I),L=I)}function k(I,oe,ce){I?(te(i.POLYGON_OFFSET_FILL),(N!==oe||H!==ce)&&(i.polygonOffset(oe,ce),N=oe,H=ce)):ae(i.POLYGON_OFFSET_FILL)}function ne(I){I?te(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function ee(I){I===void 0&&(I=i.TEXTURE0+$-1),Z!==I&&(i.activeTexture(I),Z=I)}function ie(I,oe,ce){ce===void 0&&(Z===null?ce=i.TEXTURE0+$-1:ce=Z);let Ie=fe[ce];Ie===void 0&&(Ie={type:void 0,texture:void 0},fe[ce]=Ie),(Ie.type!==I||Ie.texture!==oe)&&(Z!==ce&&(i.activeTexture(ce),Z=ce),i.bindTexture(I,oe||Pe[I]),Ie.type=I,Ie.texture=oe)}function _e(){let I=fe[Z];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(I){se.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function qe(I){ve.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ve.copy(I))}function tt(I,oe){let ce=u.get(oe);ce===void 0&&(ce=new WeakMap,u.set(oe,ce));let Ie=ce.get(I);Ie===void 0&&(Ie=i.getUniformBlockIndex(oe,I.name),ce.set(I,Ie))}function We(I,oe){let Ie=u.get(oe).get(I);h.get(oe)!==Ie&&(i.uniformBlockBinding(oe,Ie,I.__bindingPointIndex),h.set(oe,Ie))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,fe={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,y=null,v=null,R=null,T=null,A=null,D=null,S=new Me(0,0,0),w=0,O=!1,z=null,Y=null,L=null,N=null,H=null,se.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:te,disable:ae,bindFramebuffer:Se,drawBuffers:U,useProgram:Ct,setBlending:ye,setMaterial:ut,setFlipSided:Ue,setCullFace:E,setLineWidth:_,setPolygonOffset:k,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:le,compressedTexImage3D:pe,texImage2D:ue,texImage3D:re,updateUBOMapping:tt,uniformBlockBinding:We,texStorage2D:C,texStorage3D:Q,texSubImage2D:Le,texSubImage3D:Fe,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:Ee,viewport:qe,reset:he}}function _M(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return f?new OffscreenCanvas(E,_):Oa("canvas")}function b(E,_,k,ne){let ee=1;if((E.width>ne||E.height>ne)&&(ee=ne/Math.max(E.width,E.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ie=_?bc:Math.floor,_e=ie(ee*E.width),le=ie(ee*E.height);u===void 0&&(u=m(_e,le));let pe=k?m(_e,le):u;return pe.width=_e,pe.height=le,pe.getContext("2d").drawImage(E,0,0,_e,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+le+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return oh(E.width)&&oh(E.height)}function p(E){return o?!1:E.wrapS!==fn||E.wrapT!==fn||E.minFilter!==Lt&&E.minFilter!==Wt}function x(E,_){return E.generateMipmaps&&_&&E.minFilter!==Lt&&E.minFilter!==Wt}function y(E){i.generateMipmap(E)}function v(E,_,k,ne,ee=!1){if(o===!1)return _;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=_;if(_===i.RED&&(k===i.FLOAT&&(ie=i.R32F),k===i.HALF_FLOAT&&(ie=i.R16F),k===i.UNSIGNED_BYTE&&(ie=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.R8UI),k===i.UNSIGNED_SHORT&&(ie=i.R16UI),k===i.UNSIGNED_INT&&(ie=i.R32UI),k===i.BYTE&&(ie=i.R8I),k===i.SHORT&&(ie=i.R16I),k===i.INT&&(ie=i.R32I)),_===i.RG&&(k===i.FLOAT&&(ie=i.RG32F),k===i.HALF_FLOAT&&(ie=i.RG16F),k===i.UNSIGNED_BYTE&&(ie=i.RG8)),_===i.RGBA){let _e=ee?fc:lt.getTransfer(ne);k===i.FLOAT&&(ie=i.RGBA32F),k===i.HALF_FLOAT&&(ie=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ie=_e===yt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(E,_,k){return x(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Wt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){return E===Lt||E===Nr||E===ks?i.NEAREST:i.LINEAR}function A(E){let _=E.target;_.removeEventListener("dispose",A),S(_),_.isVideoTexture&&h.delete(_)}function D(E){let _=E.target;_.removeEventListener("dispose",D),O(_)}function S(E){let _=n.get(E);if(_.__webglInit===void 0)return;let k=E.source,ne=d.get(k);if(ne){let ee=ne[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(E),Object.keys(ne).length===0&&d.delete(k)}n.remove(E)}function w(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let k=E.source,ne=d.get(k);delete ne[_.__cacheKey],a.memory.textures--}function O(E){let _=E.texture,k=n.get(E),ne=n.get(_);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let ie=0;ie<k.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(k.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)i.deleteFramebuffer(k.__webglFramebuffer[ee]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,ie=_.length;ee<ie;ee++){let _e=n.get(_[ee]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(_[ee])}n.remove(_),n.remove(E)}let z=0;function Y(){z=0}function L(){let E=z;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function N(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function H(E,_){let k=n.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(k,E,_);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function $(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){se(k,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function j(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){se(k,E,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function q(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){ve(k,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let K={[jn]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[Gs]:i.MIRRORED_REPEAT},Z={[Lt]:i.NEAREST,[Nr]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},fe={[fy]:i.NEVER,[xy]:i.ALWAYS,[py]:i.LESS,[Mm]:i.LEQUAL,[my]:i.EQUAL,[yy]:i.GEQUAL,[gy]:i.GREATER,[by]:i.NOTEQUAL};function V(E,_,k){if(k?(i.texParameteri(E,i.TEXTURE_WRAP_S,K[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Z[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Z[_.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==fn||_.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(_.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==Lt&&_.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Lt||_.minFilter!==ks&&_.minFilter!==ci||_.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ua&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function X(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let ne=_.source,ee=d.get(ne);ee===void 0&&(ee={},d.set(ne,ee));let ie=N(_);if(ie!==E.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ie].usedTimes++;let _e=ee[E.__cacheKey];_e!==void 0&&(ee[E.__cacheKey].usedTimes--,_e.usedTimes===0&&w(_)),E.__cacheKey=ie,E.__webglTexture=ee[ie].texture}return k}function se(E,_,k){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);let ee=X(E,_),ie=_.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+k);let _e=n.get(ie);if(ie.version!==_e.__version||ee===!0){t.activeTexture(i.TEXTURE0+k);let le=lt.getPrimaries(lt.workingColorSpace),pe=_.colorSpace===tn?null:lt.getPrimaries(_.colorSpace),Le=_.colorSpace===tn||le===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Fe=p(_)&&g(_.image)===!1,J=b(_.image,Fe,!1,s.maxTextureSize);J=Ue(_,J);let et=g(J)||o,C=r.convert(_.format,_.colorSpace),Q=r.convert(_.type),ue=v(_.internalFormat,C,Q,_.colorSpace,_.isVideoTexture);V(ne,_,et);let re,Ee=_.mipmaps,qe=o&&_.isVideoTexture!==!0&&ue!==xm,tt=_e.__version===void 0||ee===!0,We=R(_,J,et);if(_.isDepthTexture)ue=i.DEPTH_COMPONENT,o?_.type===Li?ue=i.DEPTH_COMPONENT32F:_.type===es?ue=i.DEPTH_COMPONENT24:_.type===Bs?ue=i.DEPTH24_STENCIL8:ue=i.DEPTH_COMPONENT16:_.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===zs&&ue===i.DEPTH_COMPONENT&&_.type!==kh&&_.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=es,Q=r.convert(_.type)),_.format===Ur&&ue===i.DEPTH_COMPONENT&&(ue=i.DEPTH_STENCIL,_.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Bs,Q=r.convert(_.type))),tt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,ue,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ue,J.width,J.height,0,C,Q,null));else if(_.isDataTexture)if(Ee.length>0&&et){qe&&tt&&t.texStorage2D(i.TEXTURE_2D,We,ue,Ee[0].width,Ee[0].height);for(let he=0,I=Ee.length;he<I;he++)re=Ee[he],qe?t.texSubImage2D(i.TEXTURE_2D,he,0,0,re.width,re.height,C,Q,re.data):t.texImage2D(i.TEXTURE_2D,he,ue,re.width,re.height,0,C,Q,re.data);_.generateMipmaps=!1}else qe?(tt&&t.texStorage2D(i.TEXTURE_2D,We,ue,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,C,Q,J.data)):t.texImage2D(i.TEXTURE_2D,0,ue,J.width,J.height,0,C,Q,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,ue,Ee[0].width,Ee[0].height,J.depth);for(let he=0,I=Ee.length;he<I;he++)re=Ee[he],_.format!==vn?C!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,re.width,re.height,J.depth,C,re.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ue,re.width,re.height,J.depth,0,re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,re.width,re.height,J.depth,C,Q,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ue,re.width,re.height,J.depth,0,C,Q,re.data)}else{qe&&tt&&t.texStorage2D(i.TEXTURE_2D,We,ue,Ee[0].width,Ee[0].height);for(let he=0,I=Ee.length;he<I;he++)re=Ee[he],_.format!==vn?C!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,re.width,re.height,C,re.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,he,0,0,re.width,re.height,C,Q,re.data):t.texImage2D(i.TEXTURE_2D,he,ue,re.width,re.height,0,C,Q,re.data)}else if(_.isDataArrayTexture)qe?(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,ue,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,C,Q,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,J.width,J.height,J.depth,0,C,Q,J.data);else if(_.isData3DTexture)qe?(tt&&t.texStorage3D(i.TEXTURE_3D,We,ue,J.width,J.height,J.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,C,Q,J.data)):t.texImage3D(i.TEXTURE_3D,0,ue,J.width,J.height,J.depth,0,C,Q,J.data);else if(_.isFramebufferTexture){if(tt)if(qe)t.texStorage2D(i.TEXTURE_2D,We,ue,J.width,J.height);else{let he=J.width,I=J.height;for(let oe=0;oe<We;oe++)t.texImage2D(i.TEXTURE_2D,oe,ue,he,I,0,C,Q,null),he>>=1,I>>=1}}else if(Ee.length>0&&et){qe&&tt&&t.texStorage2D(i.TEXTURE_2D,We,ue,Ee[0].width,Ee[0].height);for(let he=0,I=Ee.length;he<I;he++)re=Ee[he],qe?t.texSubImage2D(i.TEXTURE_2D,he,0,0,C,Q,re):t.texImage2D(i.TEXTURE_2D,he,ue,C,Q,re);_.generateMipmaps=!1}else qe?(tt&&t.texStorage2D(i.TEXTURE_2D,We,ue,J.width,J.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,Q,J)):t.texImage2D(i.TEXTURE_2D,0,ue,C,Q,J);x(_,et)&&y(ne),_e.__version=ie.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ve(E,_,k){if(_.image.length!==6)return;let ne=X(E,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(i.TEXTURE0+k);let _e=lt.getPrimaries(lt.workingColorSpace),le=_.colorSpace===tn?null:lt.getPrimaries(_.colorSpace),pe=_.colorSpace===tn||_e===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Le=_.isCompressedTexture||_.image[0].isCompressedTexture,Fe=_.image[0]&&_.image[0].isDataTexture,J=[];for(let he=0;he<6;he++)!Le&&!Fe?J[he]=b(_.image[he],!1,!0,s.maxCubemapSize):J[he]=Fe?_.image[he].image:_.image[he],J[he]=Ue(_,J[he]);let et=J[0],C=g(et)||o,Q=r.convert(_.format,_.colorSpace),ue=r.convert(_.type),re=v(_.internalFormat,Q,ue,_.colorSpace),Ee=o&&_.isVideoTexture!==!0,qe=ie.__version===void 0||ne===!0,tt=R(_,et,C);V(i.TEXTURE_CUBE_MAP,_,C);let We;if(Le){Ee&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,re,et.width,et.height);for(let he=0;he<6;he++){We=J[he].mipmaps;for(let I=0;I<We.length;I++){let oe=We[I];_.format!==vn?Q!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,0,0,oe.width,oe.height,Q,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,re,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,0,0,oe.width,oe.height,Q,ue,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I,re,oe.width,oe.height,0,Q,ue,oe.data)}}}else{We=_.mipmaps,Ee&&qe&&(We.length>0&&tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,tt,re,J[0].width,J[0].height));for(let he=0;he<6;he++)if(Fe){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,J[he].width,J[he].height,Q,ue,J[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,re,J[he].width,J[he].height,0,Q,ue,J[he].data);for(let I=0;I<We.length;I++){let ce=We[I].image[he].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,0,0,ce.width,ce.height,Q,ue,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,re,ce.width,ce.height,0,Q,ue,ce.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Q,ue,J[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,re,Q,ue,J[he]);for(let I=0;I<We.length;I++){let oe=We[I];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,0,0,Q,ue,oe.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,I+1,re,Q,ue,oe.image[he])}}}x(_,C)&&y(i.TEXTURE_CUBE_MAP),ie.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xe(E,_,k,ne,ee,ie){let _e=r.convert(k.format,k.colorSpace),le=r.convert(k.type),pe=v(k.internalFormat,_e,le,k.colorSpace);if(!n.get(_).__hasExternalTextures){let Fe=Math.max(1,_.width>>ie),J=Math.max(1,_.height>>ie);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,pe,Fe,J,_.depth,0,_e,le,null):t.texImage2D(ee,ie,pe,Fe,J,0,_e,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ye(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,n.get(k).__webglTexture,0,Ae(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,n.get(k).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(E,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let ne=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||ye(_)){let ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Li?ne=i.DEPTH_COMPONENT32F:ee.type===es&&(ne=i.DEPTH_COMPONENT24));let ie=Ae(_);ye(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ne,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ne,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let ne=Ae(_);k&&ye(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,_.width,_.height):ye(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ne=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0;ee<ne.length;ee++){let ie=ne[ee],_e=r.convert(ie.format,ie.colorSpace),le=r.convert(ie.type),pe=v(ie.internalFormat,_e,le,ie.colorSpace),Le=Ae(_);k&&ye(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,pe,_.width,_.height):ye(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);let ne=n.get(_.depthTexture).__webglTexture,ee=Ae(_);if(_.depthTexture.format===zs)ye(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(_.depthTexture.format===Ur)ye(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ae(E){let _=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");te(_.__webglFramebuffer,E)}else if(k){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]=i.createRenderbuffer(),Pe(_.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Pe(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(E,_,k){let ne=n.get(E);_!==void 0&&xe(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ae(E)}function U(E){let _=E.texture,k=n.get(E),ne=n.get(_);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,a.memory.textures++);let ee=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,_e=g(E)||o;if(ee){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let pe=0;pe<_.mipmaps.length;pe++)k.__webglFramebuffer[le][pe]=i.createFramebuffer()}else k.__webglFramebuffer[le]=i.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)k.__webglFramebuffer[le]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ie)if(s.drawBuffers){let le=E.texture;for(let pe=0,Le=le.length;pe<Le;pe++){let Fe=n.get(le[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ye(E)===!1){let le=ie?_:[_];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){let Le=le[pe];k.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pe]);let Fe=r.convert(Le.format,Le.colorSpace),J=r.convert(Le.type),et=v(Le.internalFormat,Fe,J,Le.colorSpace,E.isXRRenderTarget===!0),C=Ae(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,C,et,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,k.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),V(i.TEXTURE_CUBE_MAP,_,_e);for(let le=0;le<6;le++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(k.__webglFramebuffer[le][pe],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else xe(k.__webglFramebuffer[le],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(_,_e)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let le=E.texture;for(let pe=0,Le=le.length;pe<Le;pe++){let Fe=le[pe],J=n.get(Fe);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),V(i.TEXTURE_2D,Fe,_e),xe(k.__webglFramebuffer,E,Fe,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),x(Fe,_e)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ne.__webglTexture),V(le,_,_e),o&&_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)xe(k.__webglFramebuffer[pe],E,_,i.COLOR_ATTACHMENT0,le,pe);else xe(k.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,le,0);x(_,_e)&&y(le),t.unbindTexture()}E.depthBuffer&&ae(E)}function Ct(E){let _=g(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,ee=k.length;ne<ee;ne++){let ie=k[ne];if(x(ie,_)){let _e=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(ie).__webglTexture;t.bindTexture(_e,le),y(_e),t.unbindTexture()}}}function me(E){if(o&&E.samples>0&&ye(E)===!1){let _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,ne=E.height,ee=i.COLOR_BUFFER_BIT,ie=[],_e=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(E),pe=E.isWebGLMultipleRenderTargets===!0;if(pe)for(let Le=0;Le<_.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Le=0;Le<_.length;Le++){ie.push(i.COLOR_ATTACHMENT0+Le),E.depthBuffer&&ie.push(_e);let Fe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Fe===!1&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Le]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),pe){let J=n.get(_[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,k,ne,0,0,k,ne,ee,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<_.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,le.__webglColorRenderbuffer[Le]);let Fe=n.get(_[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ae(E){return Math.min(s.maxSamples,E.samples)}function ye(E){let _=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ut(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ue(E,_){let k=E.colorSpace,ne=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ah||k!==It&&k!==tn&&(lt.getTransfer(k)===yt?o===!1?e.has("EXT_sRGB")===!0&&ne===vn?(E.format=ah,E.minFilter=Wt,E.generateMipmaps=!1):_=yc.sRGBToLinear(_):(ne!==vn||ee!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Se,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ye}function SM(i,e,t){let n=t.isWebGL2;function s(r,a=tn){let o,c=lt.getTransfer(a);if(r===ss)return i.UNSIGNED_BYTE;if(r===pm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===mm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ty)return i.BYTE;if(r===ny)return i.SHORT;if(r===kh)return i.UNSIGNED_SHORT;if(r===fm)return i.INT;if(r===es)return i.UNSIGNED_INT;if(r===Li)return i.FLOAT;if(r===Ua)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===iy)return i.ALPHA;if(r===vn)return i.RGBA;if(r===sy)return i.LUMINANCE;if(r===ry)return i.LUMINANCE_ALPHA;if(r===zs)return i.DEPTH_COMPONENT;if(r===Ur)return i.DEPTH_STENCIL;if(r===ah)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ay)return i.RED;if(r===gm)return i.RED_INTEGER;if(r===oy)return i.RG;if(r===bm)return i.RG_INTEGER;if(r===ym)return i.RGBA_INTEGER;if(r===Sl||r===Ml||r===wl||r===El)if(c===yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Sl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ml)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Sl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ml)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pf||r===Lf||r===If||r===Df)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===If)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Df)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nf||r===Uf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Nf)return c===yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Uf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Of||r===Ff||r===kf||r===Bf||r===zf||r===Hf||r===Gf||r===Vf||r===Wf||r===$f||r===qf||r===jf||r===Xf||r===Yf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Of)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ff)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$f)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return c===yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Al||r===Kf||r===Zf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Al)return c===yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cy||r===Jf||r===Qf||r===ep)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Al)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Jf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ep)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function wM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Am(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function EM(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){let v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));let R=y.program;n.updateUBOMapping(x,R);let T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){let y=u();x.__bindingPointIndex=y;let v=i.createBuffer(),R=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=s[x.id],v=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=v.length;T<A;T++){let D=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,w=D.length;S<w;S++){let O=D[S];if(f(O,T,S,R)===!0){let z=O.__offset,Y=Array.isArray(O.value)?O.value:[O.value],L=0;for(let N=0;N<Y.length;N++){let H=Y[N],$=b(H);typeof H=="number"||typeof H=="boolean"?(O.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+L,O.__data)):H.isMatrix3?(O.__data[0]=H.elements[0],O.__data[1]=H.elements[1],O.__data[2]=H.elements[2],O.__data[3]=0,O.__data[4]=H.elements[3],O.__data[5]=H.elements[4],O.__data[6]=H.elements[5],O.__data[7]=0,O.__data[8]=H.elements[6],O.__data[9]=H.elements[7],O.__data[10]=H.elements[8],O.__data[11]=0):(H.toArray(O.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,R){let T=x.value,A=y+"_"+v;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let D=R[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return R[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function m(x){let y=x.uniforms,v=0,R=16;for(let A=0,D=y.length;A<D;A++){let S=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,O=S.length;w<O;w++){let z=S[w],Y=Array.isArray(z.value)?z.value:[z.value];for(let L=0,N=Y.length;L<N;L++){let H=Y[L],$=b(H),j=v%R;j!==0&&R-j<$.boundary&&(v+=R-j),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=$.storage}}}let T=v%R;return T>0&&(v+=R-T),x.__size=v,x.__cache={},this}function b(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){let y=x.target;y.removeEventListener("dispose",g);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}function sm(i,e,t,n,s,r,a){let o=wh.distanceSqToPoint(i);if(o<t){let c=new P;wh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}function hc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function CM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function PM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function rm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Dm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function LM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ki;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return Dc;case"quaternion":return di;case"bool":case"boolean":return os;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function IM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=LM(i.type);if(i.times===void 0){let t=[],n=[];Dm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function lm(i,e){return i.distance-e.distance}function Oh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Oh(s[r],e,t,!0)}}var Fh,$s,qs,S0,Mf,M0,hm,ja,Pi,oi,nn,qt,ns,Cr,wf,Ef,Af,w0,Os,E0,A0,Tf,Rf,T0,R0,C0,P0,th,nh,L0,I0,D0,N0,U0,O0,F0,k0,B0,z0,H0,G0,dc,V0,W0,$0,q0,um,j0,X0,is,Y0,K0,Z0,Xa,J0,Q0,Cf,ey,dm,Ir,Dr,ih,sh,zc,jn,fn,Gs,Lt,Nr,ks,Wt,Ya,ci,ss,ty,ny,kh,fm,es,Li,Ua,pm,mm,Bs,iy,vn,sy,ry,zs,Ur,ay,gm,oy,bm,ym,Sl,Ml,wl,El,Pf,Lf,If,Df,xm,Nf,Uf,Of,Ff,kf,Bf,zf,Hf,Gf,Vf,Wf,$f,qf,jf,Xf,Yf,Al,Kf,Zf,cy,Jf,Qf,ep,rs,Di,Tl,tp,np,ip,ly,vm,Hc,Ka,_m,Hs,hy,uy,Sm,dy,tn,rt,It,Bh,Gc,fc,yt,pc,mc,lr,sp,fy,py,my,Mm,gy,by,yy,xy,rh,rp,ah,Ii,gc,li,Qt,ap,La,Or,ds,Ce,Xe,Rl,op,cp,lp,Fo,Uy,lt,hr,yc,Oy,Fr,Fy,Gt,mt,ch,Ni,xc,lh,sn,P,Ll,hp,wt,wi,Vn,ko,ur,dr,fr,Yi,Ki,Ls,wa,Bo,zo,Is,ky,Ea,Dl,Cn,Ei,Nl,Ho,Zi,Ul,Go,Ol,Ui,Ge,pr,Wn,By,zy,Ji,Vo,An,up,dp,vc,Fa,Hy,fp,mr,Ai,Wo,Aa,Gy,Vy,pp,mp,gp,Wy,$y,St,$n,Ti,Fl,Ri,gr,br,bp,kl,Bl,zl,$o,Ar,Em,Qi,qo,Me,en,qy,_n,rn,Dt,jo,at,_c,Sc,_t,jy,Un,Gl,yr,Tn,Ta,Ht,Ut,yp,Ds,Xo,xp,xr,vr,_r,Vl,Yo,Ko,Zo,Jo,vp,_p,Sp,Qo,ec,He,Oi,Ky,Zy,Jy,Xn,Mc,vt,Sr,Mr,hh,wc,uh,Wl,Qy,ex,Rn,Ns,nc,ka,Vs,nx,ix,sx,rx,ax,ox,cx,lx,hx,ux,dx,fx,px,mx,gx,bx,yx,xx,vx,_x,Sx,Mx,wx,Ex,Ax,Tx,Rx,Cx,Px,Lx,Ix,Dx,Nx,Ux,Ox,Fx,kx,Bx,zx,Hx,Gx,Vx,Wx,$x,qx,jx,Xx,Yx,Kx,Zx,Jx,Qx,ev,tv,nv,iv,sv,rv,av,ov,cv,lv,hv,uv,dv,fv,pv,mv,gv,bv,yv,xv,vv,_v,Sv,Mv,wv,Ev,Av,Tv,Rv,Cv,Pv,Lv,Iv,Dv,Nv,Uv,Ov,Fv,kv,Bv,zv,Hv,Gv,Vv,Wv,$v,qv,jv,Xv,Yv,Kv,Zv,Jv,Qv,e_,t_,n_,i_,s_,r_,a_,o_,c_,l_,h_,u_,d_,f_,p_,m_,g_,b_,y_,x_,v_,__,S_,M_,w_,E_,A_,T_,R_,C_,P_,L_,I_,D_,N_,Ve,de,ri,ic,Br,Tr,Mp,Fs,$l,wp,ql,jl,Xl,Us,wr,Ep,Fi,Ec,Rm,Cm,Pm,Lm,Im,Cp,Pp,Lp,Ip,Dp,dh,fh,ph,Yl,Lr,BS,zS,YS,KS,JS,aM,gh,bh,fM,yh,xh,bM,yM,vh,gt,MM,Na,_h,hi,Sh,Ac,Sn,Ba,un,za,Wp,$p,qp,AM,jp,rc,Kl,Xp,Zl,Tc,Ha,Mh,Yp,TM,Rc,Ws,Er,Kp,ac,Zp,RM,Ra,Ca,Cc,zr,Jp,Qp,em,Jl,oc,Hr,tm,nm,Ga,Pc,Va,im,wh,cc,lc,Lc,Gr,Vr,Wr,ui,$r,Ic,qr,jt,an,as,Eh,Ah,Th,On,os,Dc,ki,Rh,di,cs,Bi,Nc,ts,Ch,DM,Yn,Ci,Ph,ls,Lh,jr,Wa,Ql,am,om,$a,Ih,Uc,cm,Pa,eh,Dh,hs,Nh,fi,us,Oc,Gh,NM,Vh,UM,OM,FM,kM,BM,zM,HM,Uh,ct,QE,Fc,kc,qa,uc,Bc,on=ze(()=>{Fh="160",$s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},S0=0,Mf=1,M0=2,hm=1,ja=2,Pi=3,oi=0,nn=1,qt=2,ns=0,Cr=1,wf=2,Ef=3,Af=4,w0=5,Os=100,E0=101,A0=102,Tf=103,Rf=104,T0=200,R0=201,C0=202,P0=203,th=204,nh=205,L0=206,I0=207,D0=208,N0=209,U0=210,O0=211,F0=212,k0=213,B0=214,z0=0,H0=1,G0=2,dc=3,V0=4,W0=5,$0=6,q0=7,um=0,j0=1,X0=2,is=0,Y0=1,K0=2,Z0=3,Xa=4,J0=5,Q0=6,Cf="attached",ey="detached",dm=300,Ir=301,Dr=302,ih=303,sh=304,zc=306,jn=1e3,fn=1001,Gs=1002,Lt=1003,Nr=1004,ks=1005,Wt=1006,Ya=1007,ci=1008,ss=1009,ty=1010,ny=1011,kh=1012,fm=1013,es=1014,Li=1015,Ua=1016,pm=1017,mm=1018,Bs=1020,iy=1021,vn=1023,sy=1024,ry=1025,zs=1026,Ur=1027,ay=1028,gm=1029,oy=1030,bm=1031,ym=1033,Sl=33776,Ml=33777,wl=33778,El=33779,Pf=35840,Lf=35841,If=35842,Df=35843,xm=36196,Nf=37492,Uf=37496,Of=37808,Ff=37809,kf=37810,Bf=37811,zf=37812,Hf=37813,Gf=37814,Vf=37815,Wf=37816,$f=37817,qf=37818,jf=37819,Xf=37820,Yf=37821,Al=36492,Kf=36494,Zf=36495,cy=36283,Jf=36284,Qf=36285,ep=36286,rs=2300,Di=2301,Tl=2302,tp=2400,np=2401,ip=2402,ly=2500,vm=0,Hc=1,Ka=2,_m=3e3,Hs=3001,hy=3200,uy=3201,Sm=0,dy=1,tn="",rt="srgb",It="srgb-linear",Bh="display-p3",Gc="display-p3-linear",fc="linear",yt="srgb",pc="rec709",mc="p3",lr=7680,sp=519,fy=512,py=513,my=514,Mm=515,gy=516,by=517,yy=518,xy=519,rh=35044,rp="300 es",ah=1035,Ii=2e3,gc=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,La=Math.PI/180,Or=180/Math.PI;ds={DEG2RAD:La,RAD2DEG:Or,generateUUID:qn,clamp:$t,euclideanModulo:zh,mapLinear:vy,inverseLerp:_y,lerp:Ia,damp:Sy,pingpong:My,smoothstep:wy,smootherstep:Ey,randInt:Ay,randFloat:Ty,randFloatSpread:Ry,seededRandom:Cy,degToRad:Py,radToDeg:Ly,isPowerOfTwo:oh,ceilPowerOfTwo:Iy,floorPowerOfTwo:bc,setQuaternionFromProperEuler:Dy,normalize:ft,denormalize:ai},Ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=s[0],g=s[3],p=s[6],x=s[1],y=s[4],v=s[7],R=s[2],T=s[5],A=s[8];return r[0]=a*b+o*x+c*R,r[3]=a*g+o*y+c*T,r[6]=a*p+o*v+c*A,r[1]=l*b+h*x+u*R,r[4]=l*g+h*y+u*T,r[7]=l*p+h*v+u*A,r[2]=d*b+f*x+m*R,r[5]=d*g+f*y+m*T,r[8]=d*p+f*v+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rl=new Xe;op={};cp=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lp=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fo={[It]:{transfer:fc,primaries:pc,toReference:i=>i,fromReference:i=>i},[rt]:{transfer:yt,primaries:pc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Gc]:{transfer:fc,primaries:mc,toReference:i=>i.applyMatrix3(lp),fromReference:i=>i.applyMatrix3(cp)},[Bh]:{transfer:yt,primaries:mc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(lp),fromReference:i=>i.applyMatrix3(cp).convertLinearToSRGB()}},Uy=new Set([It,Gc]),lt={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Uy.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Fo[e].toReference,s=Fo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Fo[i].primaries},getTransfer:function(i){return i===tn?fc:Fo[i].transfer}};yc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=Oa("canvas")),hr.width=e.width,hr.height=e.height;let n=hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pr(t[n]/255)*255):t[n]=Pr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Oy=0,Fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pl(s[a].image)):r.push(Pl(s[a]))}else r=Pl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Fy=0,Gt=class i extends li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fn,s=fn,r=Wt,a=ci,o=vn,c=ss,l=i.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=qn(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hs?rt:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?Hs:_m}set encoding(e){Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?rt:tn}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=dm;Gt.DEFAULT_ANISOTROPY=1;mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+b)/4,D=(m+g)/4;return y>v&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=D/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ch=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hs?rt:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends ch{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xc=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lh=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*b,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),T=Math.atan2(R,p*x);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let v=o*x;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+b*v,g===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ll=new P,hp=new sn,wt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Bo.subVectors(this.max,wa),ur.subVectors(e.a,wa),dr.subVectors(e.b,wa),fr.subVectors(e.c,wa),Yi.subVectors(dr,ur),Ki.subVectors(fr,dr),Ls.subVectors(ur,fr);let t=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-Ls.z,Ls.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,Ls.z,0,-Ls.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-Ls.y,Ls.x,0];return!Il(t,ur,dr,fr,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,ur,dr,fr,Bo))?!1:(zo.crossVectors(Yi,Ki),t=[zo.x,zo.y,zo.z],Il(t,ur,dr,fr,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,ko=new wt,ur=new P,dr=new P,fr=new P,Yi=new P,Ki=new P,Ls=new P,wa=new P,Bo=new P,zo=new P,Is=new P;ky=new wt,Ea=new P,Dl=new P,Cn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ky.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ea,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Dl)),this.expandByPoint(Ea.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new P,Nl=new P,Ho=new P,Zi=new P,Ul=new P,Go=new P,Ol=new P,Ui=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nl.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Nl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ho),o=Zi.dot(this.direction),c=-Zi.dot(Ho),l=Zi.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nl).addScaledVector(Ho,d),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){Ul.subVectors(t,e),Go.subVectors(n,e),Ol.crossVectors(Ul,Go);let a=this.direction.dot(Ol),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,e);let c=o*this.direction.dot(Go.crossVectors(Zi,Go));if(c<0)return null;let l=o*this.direction.dot(Ul.cross(Zi));if(l<0||c+l>a)return null;let h=-o*Zi.dot(Ol);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,zy)}lookAt(e,t,n){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Ji.crossVectors(n,An),Ji.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ji.crossVectors(n,An)),Ji.normalize(),Vo.crossVectors(An,Ji),s[0]=Ji.x,s[4]=Vo.x,s[8]=An.x,s[1]=Ji.y,s[5]=Vo.y,s[9]=An.y,s[2]=Ji.z,s[6]=Vo.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],R=n[15],T=s[0],A=s[4],D=s[8],S=s[12],w=s[1],O=s[5],z=s[9],Y=s[13],L=s[2],N=s[6],H=s[10],$=s[14],j=s[3],q=s[7],K=s[11],Z=s[15];return r[0]=a*T+o*w+c*L+l*j,r[4]=a*A+o*O+c*N+l*q,r[8]=a*D+o*z+c*H+l*K,r[12]=a*S+o*Y+c*$+l*Z,r[1]=h*T+u*w+d*L+f*j,r[5]=h*A+u*O+d*N+f*q,r[9]=h*D+u*z+d*H+f*K,r[13]=h*S+u*Y+d*$+f*Z,r[2]=m*T+b*w+g*L+p*j,r[6]=m*A+b*O+g*N+p*q,r[10]=m*D+b*z+g*H+p*K,r[14]=m*S+b*Y+g*$+p*Z,r[3]=x*T+y*w+v*L+R*j,r[7]=x*A+y*O+v*N+R*q,r[11]=x*D+y*z+v*H+R*K,r[15]=x*S+y*Y+v*$+R*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=u*g*l-b*d*l+b*c*f-o*g*f-u*c*p+o*d*p,y=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,v=h*b*l-m*u*l+m*o*f-a*b*f-h*o*p+a*u*p,R=m*u*c-h*b*c-m*o*d+a*b*d+h*o*g-a*u*g,T=t*x+n*y+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=x*A,e[1]=(b*d*r-u*g*r-b*s*f+n*g*f+u*s*p-n*d*p)*A,e[2]=(o*g*r-b*c*r+b*s*l-n*g*l-o*s*p+n*c*p)*A,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*A,e[4]=y*A,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*A,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*A,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*A,e[8]=v*A,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*p-t*u*p)*A,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*A,e[12]=R*A,e[13]=(h*b*s-m*u*s+m*n*d-t*b*d-h*n*g+t*u*g)*A,e[14]=(m*o*s-a*b*s-m*n*c+t*b*c+a*n*g-t*o*g)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,x=c*l,y=c*h,v=c*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(b+p))*R,s[1]=(f+v)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(m+y)*A,s[9]=(g-x)*A,s[10]=(1-(d+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),a=pr.set(s[4],s[5],s[6]).length(),o=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let l=1/r,h=1/a,u=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ii){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(o===Ii)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===gc)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ii){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,m,b;if(o===Ii)m=(a+r)*u,b=-2*u;else if(o===gc)m=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},pr=new P,Wn=new Ge,By=new P(0,0,0),zy=new P(1,1,1),Ji=new P,Vo=new P,An=new P,up=new Ge,dp=new sn,vc=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vc.DEFAULT_ORDER="XYZ";Fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hy=0,fp=new P,mr=new sn,Ai=new Ge,Wo=new P,Aa=new P,Gy=new P,Vy=new sn,pp=new P(1,0,0),mp=new P(0,1,0),gp=new P(0,0,1),Wy={type:"added"},$y={type:"removed"},St=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new vc,n=new sn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Xe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wo.copy(e):Wo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Aa,Wo,this.up):Ai.lookAt(Wo,Aa,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ai),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($y)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,Gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,Vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new P(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;$n=new P,Ti=new P,Fl=new P,Ri=new P,gr=new P,br=new P,bp=new P,kl=new P,Bl=new P,zl=new P,$o=!1,Ar=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ti.subVectors(n,t),Fl.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ti),c=$n.dot(Fl),l=Ti.dot(Ti),h=Ti.dot(Fl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,t,n,s,r,a,o,c){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(a,Ri.y),c.addScaledVector(o,Ri.z),c)}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ti.subVectors(e,t),$n.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),$n.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),br.subVectors(r,n),kl.subVectors(e,n);let c=gr.dot(kl),l=br.dot(kl);if(c<=0&&l<=0)return t.copy(n);Bl.subVectors(e,s);let h=gr.dot(Bl),u=br.dot(Bl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(gr,a);zl.subVectors(e,r);let f=gr.dot(zl),m=br.dot(zl);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(br,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return bp.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(bp,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(gr,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},qo={h:0,s:0,l:0};Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=zh(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hl(a,r,e+1/3),this.g=Hl(a,r,e),this.b=Hl(a,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){let n=Em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Cl(e.r),this.g=Cl(e.g),this.b=Cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return lt.fromWorkingColorSpace(en.copy(this),e),Math.round($t(en.r*255,0,255))*65536+Math.round($t(en.g*255,0,255))*256+Math.round($t(en.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=rt){lt.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(qo);let n=Ia(Qi.h,qo.h,t),s=Ia(Qi.s,qo.s,t),r=Ia(Qi.l,qo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Me;Me.NAMES=Em;qy=0,_n=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Cr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==th&&(n.blendSrc=this.blendSrc),this.blendDst!==nh&&(n.blendDst=this.blendDst),this.blendEquation!==Os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dt=new P,jo=new Ce,at=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}},_c=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Sc=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_t=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},jy=0,Un=new Ge,Gl=new St,yr=new P,Tn=new wt,Ta=new wt,Ht=new P,Ut=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wm(e)?Sc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Tn.min,Ta.min),Tn.expandByPoint(Ht),Ht.addVectors(Tn.max,Ta.max),Tn.expandByPoint(Ht)):(Tn.expandByPoint(Ta.min),Tn.expandByPoint(Ta.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(yr.fromBufferAttribute(e,l),Ht.add(yr)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new P,h[w]=new P;let u=new P,d=new P,f=new P,m=new Ce,b=new Ce,g=new Ce,p=new P,x=new P;function y(w,O,z){u.fromArray(s,w*3),d.fromArray(s,O*3),f.fromArray(s,z*3),m.fromArray(a,w*2),b.fromArray(a,O*2),g.fromArray(a,z*2),d.sub(u),f.sub(u),b.sub(m),g.sub(m);let Y=1/(b.x*g.y-g.x*b.y);isFinite(Y)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-b.y).multiplyScalar(Y),x.copy(f).multiplyScalar(b.x).addScaledVector(d,-g.x).multiplyScalar(Y),l[w].add(p),l[O].add(p),l[z].add(p),h[w].add(x),h[O].add(x),h[z].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,O=v.length;w<O;++w){let z=v[w],Y=z.start,L=z.count;for(let N=Y,H=Y+L;N<H;N+=3)y(n[N+0],n[N+1],n[N+2])}let R=new P,T=new P,A=new P,D=new P;function S(w){A.fromArray(r,w*3),D.copy(A);let O=l[w];R.copy(O),R.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(D,O);let Y=T.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=Y}for(let w=0,O=v.length;w<O;++w){let z=v[w],Y=z.start,L=z.count;for(let N=Y,H=Y+L;N<H;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yp=new Ge,Ds=new Ui,Xo=new Cn,xp=new P,xr=new P,vr=new P,_r=new P,Vl=new P,Yo=new P,Ko=new Ce,Zo=new Ce,Jo=new Ce,vp=new P,_p=new P,Sp=new P,Qo=new P,ec=new P,He=class extends St{constructor(e=new Ut,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Vl.fromBufferAttribute(u,e),a?Yo.addScaledVector(Vl,h):Yo.addScaledVector(Vl.sub(t),h))}t.add(Yo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Xo.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Xo,xp)===null||Ds.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(yp.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(yp),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,R=y;v<R;v+=3){let T=o.getX(v),A=o.getX(v+1),D=o.getX(v+2);s=tc(this,p,e,n,l,h,u,T,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);s=tc(this,a,e,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,R=y;v<R;v+=3){let T=v,A=v+1,D=v+2;s=tc(this,p,e,n,l,h,u,T,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,y=g+1,v=g+2;s=tc(this,a,e,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};Oi=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function m(b,g,p,x,y,v,R,T,A,D,S){let w=v/A,O=R/D,z=v/2,Y=R/2,L=T/2,N=A+1,H=D+1,$=0,j=0,q=new P;for(let K=0;K<H;K++){let Z=K*O-Y;for(let fe=0;fe<N;fe++){let V=fe*w-z;q[b]=V*x,q[g]=Z*y,q[p]=L,l.push(q.x,q.y,q.z),q[b]=0,q[g]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(fe/A),u.push(1-K/D),$+=1}}for(let K=0;K<D;K++)for(let Z=0;Z<A;Z++){let fe=d+Z+N*K,V=d+Z+N*(K+1),X=d+(Z+1)+N*(K+1),se=d+(Z+1)+N*K;c.push(fe,V,se),c.push(V,X,se),j+=6}o.addGroup(f,j,S),f+=j,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Ky={clone:kr,merge:dn},Zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zy,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=Yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mc=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vt=class extends Mc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sr=-90,Mr=1,hh=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new vt(Sr,Mr,e,t);s.layers=this.layers,this.add(s);let r=new vt(Sr,Mr,e,t);r.layers=this.layers,this.add(r);let a=new vt(Sr,Mr,e,t);a.layers=this.layers,this.add(a);let o=new vt(Sr,Mr,e,t);o.layers=this.layers,this.add(o);let c=new vt(Sr,Mr,e,t);c.layers=this.layers,this.add(c);let l=new vt(Sr,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wc=class extends Gt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uh=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hs?rt:tn),this.texture=new wc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ns});r.uniforms.tEquirect.value=t;let a=new He(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=Wt),new hh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Wl=new P,Qy=new P,ex=new Xe,Rn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wl.subVectors(n,t).cross(Qy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ex.getNormalMatrix(e),s=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ns=new Cn,nc=new P,ka=class{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],b=s[10],g=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-f,v-p).normalize(),n[1].setComponents(c+r,d+l,g+f,v+p).normalize(),n[2].setComponents(c+a,d+h,g+m,v+x).normalize(),n[3].setComponents(c-a,d-h,g-m,v-x).normalize(),n[4].setComponents(c-o,d-u,g-b,v-y).normalize(),t===Ii)n[5].setComponents(c+o,d+u,g+b,v+y).normalize();else if(t===gc)n[5].setComponents(o,u,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(nc.x=s.normal.x>0?e.max.x:e.min.x,nc.y=s.normal.y>0?e.max.y:e.min.y,nc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Vs=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let y=0;y<l;y++){let v=y*u-r;m.push(v,-x,0),b.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let y=x+l*p,v=x+l*(p+1),R=x+1+l*(p+1),T=x+1+l*p;f.push(y,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(b,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
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
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
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
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mx=`#ifdef USE_IRIDESCENCE
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
#endif`,gx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ex=`#define PI 3.141592653589793
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
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tx=`vec3 transformedNormal = objectNormal;
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
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`
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
}`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
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
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
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
#endif`,tv=`struct PhysicalMaterial {
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,av=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dv=`#if defined( USE_POINTS_UV )
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
#endif`,fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gv=`#ifdef USE_MORPHNORMALS
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
#endif`,bv=`#ifdef USE_MORPHTARGETS
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
#endif`,yv=`#ifdef USE_MORPHTARGETS
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
#endif`,xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wv=`#ifdef USE_NORMALMAP
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
#endif`,Ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zv=`float getShadowMask() {
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
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
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
#endif`,$v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,c_=`#if DEPTH_PACKING == 3200
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
}`,l_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`uniform float scale;
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,g_=`uniform vec3 diffuse;
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
}`,b_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,S_=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,w_=`#define PHONG
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
}`,E_=`#define STANDARD
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
}`,A_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,R_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,P_=`uniform vec3 diffuse;
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
}`,L_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,D_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:sx,alphamap_pars_fragment:rx,alphatest_fragment:ax,alphatest_pars_fragment:ox,aomap_fragment:cx,aomap_pars_fragment:lx,batching_pars_vertex:hx,batching_vertex:ux,begin_vertex:dx,beginnormal_vertex:fx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:gx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:yx,clipping_planes_pars_vertex:xx,clipping_planes_vertex:vx,color_fragment:_x,color_pars_fragment:Sx,color_pars_vertex:Mx,color_vertex:wx,common:Ex,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Rx,displacementmap_vertex:Cx,emissivemap_fragment:Px,emissivemap_pars_fragment:Lx,colorspace_fragment:Ix,colorspace_pars_fragment:Dx,envmap_fragment:Nx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:Ox,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Yx,envmap_vertex:kx,fog_vertex:Bx,fog_pars_vertex:zx,fog_fragment:Hx,fog_pars_fragment:Gx,gradientmap_pars_fragment:Vx,lightmap_fragment:Wx,lightmap_pars_fragment:$x,lights_lambert_fragment:qx,lights_lambert_pars_fragment:jx,lights_pars_begin:Xx,lights_toon_fragment:Kx,lights_toon_pars_fragment:Zx,lights_phong_fragment:Jx,lights_phong_pars_fragment:Qx,lights_physical_fragment:ev,lights_physical_pars_fragment:tv,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:sv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:av,logdepthbuf_pars_vertex:ov,logdepthbuf_vertex:cv,map_fragment:lv,map_pars_fragment:hv,map_particle_fragment:uv,map_particle_pars_fragment:dv,metalnessmap_fragment:fv,metalnessmap_pars_fragment:pv,morphcolor_vertex:mv,morphnormal_vertex:gv,morphtarget_pars_vertex:bv,morphtarget_vertex:yv,normal_fragment_begin:xv,normal_fragment_maps:vv,normal_pars_fragment:_v,normal_pars_vertex:Sv,normal_vertex:Mv,normalmap_pars_fragment:wv,clearcoat_normal_fragment_begin:Ev,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Rv,opaque_fragment:Cv,packing:Pv,premultiplied_alpha_fragment:Lv,project_vertex:Iv,dithering_fragment:Dv,dithering_pars_fragment:Nv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:kv,shadowmap_vertex:Bv,shadowmask_pars_fragment:zv,skinbase_vertex:Hv,skinning_pars_vertex:Gv,skinning_vertex:Vv,skinnormal_vertex:Wv,specularmap_fragment:$v,specularmap_pars_fragment:qv,tonemapping_fragment:jv,tonemapping_pars_fragment:Xv,transmission_fragment:Yv,transmission_pars_fragment:Kv,uv_pars_fragment:Zv,uv_pars_vertex:Jv,uv_vertex:Qv,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:a_,depth_vert:o_,depth_frag:c_,distanceRGBA_vert:l_,distanceRGBA_frag:h_,equirect_vert:u_,equirect_frag:d_,linedashed_vert:f_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:b_,meshlambert_frag:y_,meshmatcap_vert:x_,meshmatcap_frag:v_,meshnormal_vert:__,meshnormal_frag:S_,meshphong_vert:M_,meshphong_frag:w_,meshphysical_vert:E_,meshphysical_frag:A_,meshtoon_vert:T_,meshtoon_frag:R_,points_vert:C_,points_frag:P_,shadow_vert:L_,shadow_frag:I_,sprite_vert:D_,sprite_frag:N_},de={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ri={basic:{uniforms:dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:dn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:dn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:dn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:dn([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:dn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:dn([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:dn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:dn([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:dn([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:dn([de.lights,de.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ri.physical={uniforms:dn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};ic={r:0,b:0,g:0};Br=class extends Mc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tr=4,Mp=[.125,.215,.35,.446,.526,.582],Fs=20,$l=new Br,wp=new Me,ql=null,jl=0,Xl=0,Us=(1+Math.sqrt(5))/2,wr=1/Us,Ep=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Us,wr),new P(0,Us,-wr),new P(wr,0,Us),new P(-wr,0,Us),new P(Us,wr,0),new P(-Us,wr,0)],Fi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,jl,Xl),e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Ua,format:vn,colorSpace:It,depthBuffer:!1},s=Ap(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(r)),this._blurMaterial=G_(r,e,t)}return s}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,s){let o=new vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(wp),h.toneMapping=is,h.autoClear=!1;let f=new rn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new He(new Oi,f),b=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,b=!0):(f.color.copy(wp),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;sc(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),b&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ir||e.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;sc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ep[(s-1)%Ep.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new He(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fs-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):Fs;g>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fs}`);let p=[],x=0;for(let A=0;A<Fs;++A){let D=A/b,S=Math.exp(-D*D/2);p.push(S),A===0?x+=S:A<g&&(x+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let v=this._sizeLods[s],R=3*v*(s>y-Tr?s-y+Tr:0),T=4*(this._cubeSize-v);sc(t,R,T,3*v,2*v),c.setRenderTarget(t),c.render(u,$l)}};Ec=class extends Gt{constructor(e,t,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:zs,h!==zs&&h!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=es),n===void 0&&h===Ur&&(n=Bs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rm=new Gt,Cm=new Ec(1,1);Cm.compareFunction=Mm;Pm=new xc,Lm=new lh,Im=new wc,Cp=[],Pp=[],Lp=new Float32Array(16),Ip=new Float32Array(9),Dp=new Float32Array(4);dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bS(t.type)}},fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FS(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Yl=/(\w+)(\])?(\[|\.)?/g;Lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);kS(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};BS=37297,zS=0;YS=/^[ \t]*#include +<([\w\d./]+)>/gm;KS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;aM=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}};fM=0;yh=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xh=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`;vh=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},MM={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_h=class extends li{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=t.getContextAttributes(),g=null,p=null,x=[],y=[],v=new Ce,R=null,T=new vt;T.layers.enable(1),T.viewport=new mt;let A=new vt;A.layers.enable(2),A.viewport=new mt;let D=[T,A],S=new vh;S.layers.enable(1),S.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=x[V];return X===void 0&&(X=new Na,x[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=x[V];return X===void 0&&(X=new Na,x[V]=X),X.getGripSpace()},this.getHand=function(V){let X=x[V];return X===void 0&&(X=new Na,x[V]=X),X.getHandSpace()};function z(V){let X=y.indexOf(V.inputSource);if(X===-1)return;let se=x[X];se!==void 0&&(se.update(V.inputSource,V.frame,l||a),se.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",L);for(let V=0;V<x.length;V++){let X=y[V];X!==null&&(y[V]=null,x[V].disconnect(X))}w=null,O=null,e.setRenderTarget(g),f=null,d=null,u=null,s=null,p=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",L),b.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ni(f.framebufferWidth,f.framebufferHeight,{format:vn,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let X=null,se=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=b.stencil?Ur:zs,se=b.stencil?Bs:es);let xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ni(d.textureWidth,d.textureHeight,{format:vn,type:ss,depthTexture:new Ec(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let Pe=e.properties.get(p);Pe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let X=0;X<V.removed.length;X++){let se=V.removed[X],ve=y.indexOf(se);ve>=0&&(y[ve]=null,x[ve].disconnect(se))}for(let X=0;X<V.added.length;X++){let se=V.added[X],ve=y.indexOf(se);if(ve===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=y.length){y.push(se),ve=Pe;break}else if(y[Pe]===null){y[Pe]=se,ve=Pe;break}if(ve===-1)break}let xe=x[ve];xe&&xe.connect(se)}}let N=new P,H=new P;function $(V,X,se){N.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition(se.matrixWorld);let ve=N.distanceTo(H),xe=X.projectionMatrix.elements,Pe=se.projectionMatrix.elements,te=xe[14]/(xe[10]-1),ae=xe[14]/(xe[10]+1),Se=(xe[9]+1)/xe[5],U=(xe[9]-1)/xe[5],Ct=(xe[8]-1)/xe[0],me=(Pe[8]+1)/Pe[0],Ae=te*Ct,ye=te*me,ut=ve/(-Ct+me),Ue=ut*-Ct;X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(ut),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let E=te+ut,_=ae+ut,k=Ae-Ue,ne=ye+(ve-Ue),ee=Se*ae/_*E,ie=U*ae/_*E;V.projectionMatrix.makePerspective(k,ne,ee,ie,E,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=A.near=T.near=V.near,S.far=A.far=T.far=V.far,(w!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,O=S.far);let X=V.parent,se=S.cameras;j(S,X);for(let ve=0;ve<se.length;ve++)j(se[ve],X);se.length===2?$(S,T,A):S.projectionMatrix.copy(T.projectionMatrix),q(V,S,X)};function q(V,X,se){se===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Or*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let K=null;function Z(V,X){if(h=X.getViewerPose(l||a),m=X,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ve=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let xe=0;xe<se.length;xe++){let Pe=se[xe],te=null;if(f!==null)te=f.getViewport(Pe);else{let Se=u.getViewSubImage(d,Pe);te=Se.viewport,xe===0&&(e.setRenderTargetTextures(p,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let ae=D[xe];ae===void 0&&(ae=new vt,ae.layers.enable(xe),ae.viewport=new mt,D[xe]=ae),ae.matrix.fromArray(Pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(te.x,te.y,te.width,te.height),xe===0&&(S.matrix.copy(ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(ae)}}for(let se=0;se<x.length;se++){let ve=y[se],xe=x[se];ve!==null&&xe!==void 0&&xe.update(ve,X,l||a)}K&&K(V,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),m=null}let fe=new Tm;fe.setAnimationLoop(Z),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}};hi=class{constructor(e={}){let{canvas:t=Ny(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),m=new Int32Array(4),b=null,g=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=is,this.toneMappingExposure=1;let y=this,v=!1,R=0,T=0,A=null,D=-1,S=null,w=new mt,O=new mt,z=null,Y=new Me(0),L=0,N=t.width,H=t.height,$=1,j=null,q=null,K=new mt(0,0,N,H),Z=new mt(0,0,N,H),fe=!1,V=new ka,X=!1,se=!1,ve=null,xe=new Ge,Pe=new Ce,te=new P,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return A===null?$:1}let U=n;function Ct(M,F){for(let G=0;G<M.length;G++){let W=M[G],B=t.getContext(W,F);if(B!==null)return B}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fh}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",oe,!1),U===null){let F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),U=Ct(F,M),U===null)throw Ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let me,Ae,ye,ut,Ue,E,_,k,ne,ee,ie,_e,le,pe,Le,Fe,J,et,C,Q,ue,re,Ee,qe;function tt(){me=new W_(U),Ae=new k_(U,me,e),me.init(Ae),re=new SM(U,me,Ae),ye=new vM(U,me,Ae),ut=new j_(U),Ue=new cM,E=new _M(U,me,ye,Ue,Ae,re,ut),_=new z_(y),k=new V_(y),ne=new tx(U,Ae),Ee=new O_(U,me,ne,Ae),ee=new $_(U,ne,ut,Ee),ie=new Z_(U,ee,ne,ut),C=new K_(U,Ae,E),Fe=new B_(Ue),_e=new oM(y,_,k,me,Ae,Ee,Fe),le=new wM(y,Ue),pe=new hM,Le=new gM(me,Ae),et=new U_(y,_,k,ye,ie,d,c),J=new xM(y,ie,Ae),qe=new EM(U,ut,Ae,ye),Q=new F_(U,me,ut,Ae),ue=new q_(U,me,ut,Ae),ut.programs=_e.programs,y.capabilities=Ae,y.extensions=me,y.properties=Ue,y.renderLists=pe,y.shadowMap=J,y.state=ye,y.info=ut}tt();let We=new _h(y,U);this.xr=We,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(N,H,!1))},this.getSize=function(M){return M.set(N,H)},this.setSize=function(M,F,G=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,H=F,t.width=Math.floor(M*$),t.height=Math.floor(F*$),G===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(N*$,H*$).floor()},this.setDrawingBufferSize=function(M,F,G){N=M,H=F,$=G,t.width=Math.floor(M*G),t.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,F,G,W){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,F,G,W),ye.viewport(w.copy(K).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(Z)},this.setScissor=function(M,F,G,W){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,F,G,W),ye.scissor(O.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){ye.setScissorTest(fe=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(M=!0,F=!0,G=!0){let W=0;if(M){let B=!1;if(A!==null){let be=A.texture.format;B=be===ym||be===bm||be===gm}if(B){let be=A.texture.type,Re=be===ss||be===es||be===kh||be===Bs||be===pm||be===mm,De=et.getClearColor(),Oe=et.getClearAlpha(),$e=De.r,ke=De.g,Be=De.b;Re?(f[0]=$e,f[1]=ke,f[2]=Be,f[3]=Oe,U.clearBufferuiv(U.COLOR,0,f)):(m[0]=$e,m[1]=ke,m[2]=Be,m[3]=Oe,U.clearBufferiv(U.COLOR,0,m))}else W|=U.COLOR_BUFFER_BIT}F&&(W|=U.DEPTH_BUFFER_BIT),G&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),pe.dispose(),Le.dispose(),Ue.dispose(),_.dispose(),k.dispose(),ie.dispose(),Ee.dispose(),qe.dispose(),_e.dispose(),We.dispose(),We.removeEventListener("sessionstart",ln),We.removeEventListener("sessionend",bt),ve&&(ve.dispose(),ve=null),hn.stop()};function he(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let M=ut.autoReset,F=J.enabled,G=J.autoUpdate,W=J.needsUpdate,B=J.type;tt(),ut.autoReset=M,J.enabled=F,J.autoUpdate=G,J.needsUpdate=W,J.type=B}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ce(M){let F=M.target;F.removeEventListener("dispose",ce),Ie(F)}function Ie(M){Te(M),Ue.remove(M)}function Te(M){let F=Ue.get(M).programs;F!==void 0&&(F.forEach(function(G){_e.releaseProgram(G)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,W,B,be){F===null&&(F=ae);let Re=B.isMesh&&B.matrixWorld.determinant()<0,De=d0(M,F,G,W,B);ye.setMaterial(W,Re);let Oe=G.index,$e=1;if(W.wireframe===!0){if(Oe=ee.getWireframeAttribute(G),Oe===void 0)return;$e=2}let ke=G.drawRange,Be=G.attributes.position,Pt=ke.start*$e,En=(ke.start+ke.count)*$e;be!==null&&(Pt=Math.max(Pt,be.start*$e),En=Math.min(En,(be.start+be.count)*$e)),Oe!==null?(Pt=Math.max(Pt,0),En=Math.min(En,Oe.count)):Be!=null&&(Pt=Math.max(Pt,0),En=Math.min(En,Be.count));let zt=En-Pt;if(zt<0||zt===1/0)return;Ee.setup(B,W,De,G,Oe);let Si,Mt=Q;if(Oe!==null&&(Si=ne.get(Oe),Mt=ue,Mt.setIndex(Si)),B.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*Se()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(B.isLine){let je=W.linewidth;je===void 0&&(je=1),ye.setLineWidth(je*Se()),B.isLineSegments?Mt.setMode(U.LINES):B.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else B.isPoints?Mt.setMode(U.POINTS):B.isSprite&&Mt.setMode(U.TRIANGLES);if(B.isBatchedMesh)Mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Mt.renderInstances(Pt,zt,B.count);else if(G.isInstancedBufferGeometry){let je=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ml=Math.min(G.instanceCount,je);Mt.renderInstances(Pt,zt,ml)}else Mt.render(Pt,zt)};function it(M,F,G){M.transparent===!0&&M.side===qt&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,Po(M,F,G),M.side=oi,M.needsUpdate=!0,Po(M,F,G),M.side=qt):Po(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),g=Le.get(G),g.init(),x.push(g),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),M!==G&&M.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(y._useLegacyLights);let W=new Set;return M.traverse(function(B){let be=B.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){let De=be[Re];it(De,G,B),W.add(De)}else it(be,G,B),W.add(be)}),x.pop(),g=null,W},this.compileAsync=function(M,F,G=null){let W=this.compile(M,F,G);return new Promise(B=>{function be(){if(W.forEach(function(Re){Ue.get(Re).currentProgram.isReady()&&W.delete(Re)}),W.size===0){B(M);return}setTimeout(be,10)}me.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ot=null;function Bt(M){ot&&ot(M)}function ln(){hn.stop()}function bt(){hn.start()}let hn=new Tm;hn.setAnimationLoop(Bt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(M){ot=M,We.setAnimationLoop(M),M===null?hn.stop():hn.start()},We.addEventListener("sessionstart",ln),We.addEventListener("sessionend",bt),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(F),F=We.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,A),g=Le.get(M,x.length),g.init(),x.push(g),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(xe),se=this.localClippingEnabled,X=Fe.init(this.clippingPlanes,se),b=pe.get(M,p.length),b.init(),p.push(b),ni(M,F,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(j,q),this.info.render.frame++,X===!0&&Fe.beginShadows();let G=g.state.shadowsArray;if(J.render(G,M,F),X===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(b,M),g.setupLights(y._useLegacyLights),F.isArrayCamera){let W=F.cameras;for(let B=0,be=W.length;B<be;B++){let Re=W[B];Fd(b,M,Re,Re.viewport)}}else Fd(b,M,F);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,F),Ee.resetDefaultState(),D=-1,S=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function ni(M,F,G,W){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){W&&te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xe);let Re=ie.update(M),De=M.material;De.visible&&b.push(M,Re,De,G,te.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||V.intersectsObject(M))){let Re=ie.update(M),De=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),te.copy(M.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),te.copy(Re.boundingSphere.center)),te.applyMatrix4(M.matrixWorld).applyMatrix4(xe)),Array.isArray(De)){let Oe=Re.groups;for(let $e=0,ke=Oe.length;$e<ke;$e++){let Be=Oe[$e],Pt=De[Be.materialIndex];Pt&&Pt.visible&&b.push(M,Re,Pt,G,te.z,Be)}}else De.visible&&b.push(M,Re,De,G,te.z,null)}}let be=M.children;for(let Re=0,De=be.length;Re<De;Re++)ni(be[Re],F,G,W)}function Fd(M,F,G,W){let B=M.opaque,be=M.transmissive,Re=M.transparent;g.setupLightsView(G),X===!0&&Fe.setGlobalState(y.clippingPlanes,G),be.length>0&&u0(B,be,F,G),W&&ye.viewport(w.copy(W)),B.length>0&&Co(B,F,G),be.length>0&&Co(be,F,G),Re.length>0&&Co(Re,F,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function u0(M,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let be=Ae.isWebGL2;ve===null&&(ve=new Ni(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Ua:ss,minFilter:ci,samples:be?4:0})),y.getDrawingBufferSize(Pe),be?ve.setSize(Pe.x,Pe.y):ve.setSize(bc(Pe.x),bc(Pe.y));let Re=y.getRenderTarget();y.setRenderTarget(ve),y.getClearColor(Y),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let De=y.toneMapping;y.toneMapping=is,Co(M,G,W),E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve);let Oe=!1;for(let $e=0,ke=F.length;$e<ke;$e++){let Be=F[$e],Pt=Be.object,En=Be.geometry,zt=Be.material,Si=Be.group;if(zt.side===qt&&Pt.layers.test(W.layers)){let Mt=zt.side;zt.side=nn,zt.needsUpdate=!0,kd(Pt,G,W,En,zt,Si),zt.side=Mt,zt.needsUpdate=!0,Oe=!0}}Oe===!0&&(E.updateMultisampleRenderTarget(ve),E.updateRenderTargetMipmap(ve)),y.setRenderTarget(Re),y.setClearColor(Y,L),y.toneMapping=De}function Co(M,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,be=M.length;B<be;B++){let Re=M[B],De=Re.object,Oe=Re.geometry,$e=W===null?Re.material:W,ke=Re.group;De.layers.test(G.layers)&&kd(De,F,G,Oe,$e,ke)}}function kd(M,F,G,W,B,be){M.onBeforeRender(y,F,G,W,B,be),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(y,F,G,W,M,be),B.transparent===!0&&B.side===qt&&B.forceSinglePass===!1?(B.side=nn,B.needsUpdate=!0,y.renderBufferDirect(G,F,W,B,M,be),B.side=oi,B.needsUpdate=!0,y.renderBufferDirect(G,F,W,B,M,be),B.side=qt):y.renderBufferDirect(G,F,W,B,M,be),M.onAfterRender(y,F,G,W,B,be)}function Po(M,F,G){F.isScene!==!0&&(F=ae);let W=Ue.get(M),B=g.state.lights,be=g.state.shadowsArray,Re=B.state.version,De=_e.getParameters(M,B.state,be,F,G),Oe=_e.getProgramCacheKey(De),$e=W.programs;W.environment=M.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(M.isMeshStandardMaterial?k:_).get(M.envMap||W.environment),$e===void 0&&(M.addEventListener("dispose",ce),$e=new Map,W.programs=$e);let ke=$e.get(Oe);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===Re)return zd(M,De),ke}else De.uniforms=_e.getUniforms(M),M.onBuild(G,De,y),M.onBeforeCompile(De,y),ke=_e.acquireProgram(De,Oe),$e.set(Oe,ke),W.uniforms=De.uniforms;let Be=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=Fe.uniform),zd(M,De),W.needsLights=p0(M),W.lightsStateVersion=Re,W.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function Bd(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Lr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function zd(M,F){let G=Ue.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function d0(M,F,G,W,B){F.isScene!==!0&&(F=ae),E.resetTextureUnits();let be=F.fog,Re=W.isMeshStandardMaterial?F.environment:null,De=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:It,Oe=(W.isMeshStandardMaterial?k:_).get(W.envMap||Re),$e=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!G.morphAttributes.position,Pt=!!G.morphAttributes.normal,En=!!G.morphAttributes.color,zt=is;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(zt=y.toneMapping);let Si=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=Si!==void 0?Si.length:0,je=Ue.get(W),ml=g.state.lights;if(X===!0&&(se===!0||M!==S)){let Dn=M===S&&W.id===D;Fe.setState(W,M,Dn)}let Tt=!1;W.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ml.state.version||je.outputColorSpace!==De||B.isBatchedMesh&&je.batching===!1||!B.isBatchedMesh&&je.batching===!0||B.isInstancedMesh&&je.instancing===!1||!B.isInstancedMesh&&je.instancing===!0||B.isSkinnedMesh&&je.skinning===!1||!B.isSkinnedMesh&&je.skinning===!0||B.isInstancedMesh&&je.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&je.instancingColor===!1&&B.instanceColor!==null||je.envMap!==Oe||W.fog===!0&&je.fog!==be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Fe.numPlanes||je.numIntersection!==Fe.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==ke||je.morphTargets!==Be||je.morphNormals!==Pt||je.morphColors!==En||je.toneMapping!==zt||Ae.isWebGL2===!0&&je.morphTargetsCount!==Mt)&&(Tt=!0):(Tt=!0,je.__version=W.version);let Rs=je.currentProgram;Tt===!0&&(Rs=Po(W,F,B));let Hd=!1,va=!1,gl=!1,Jt=Rs.getUniforms(),Cs=je.uniforms;if(ye.useProgram(Rs.program)&&(Hd=!0,va=!0,gl=!0),W.id!==D&&(D=W.id,va=!0),Hd||S!==M){Jt.setValue(U,"projectionMatrix",M.projectionMatrix),Jt.setValue(U,"viewMatrix",M.matrixWorldInverse);let Dn=Jt.map.cameraPosition;Dn!==void 0&&Dn.setValue(U,te.setFromMatrixPosition(M.matrixWorld)),Ae.logarithmicDepthBuffer&&Jt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Jt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,va=!0,gl=!0)}if(B.isSkinnedMesh){Jt.setOptional(U,B,"bindMatrix"),Jt.setOptional(U,B,"bindMatrixInverse");let Dn=B.skeleton;Dn&&(Ae.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Jt.setValue(U,"boneTexture",Dn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Jt.setOptional(U,B,"batchingTexture"),Jt.setValue(U,"batchingTexture",B._matricesTexture,E));let bl=G.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0&&Ae.isWebGL2===!0)&&C.update(B,G,Rs),(va||je.receiveShadow!==B.receiveShadow)&&(je.receiveShadow=B.receiveShadow,Jt.setValue(U,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Cs.envMap.value=Oe,Cs.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),va&&(Jt.setValue(U,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&f0(Cs,gl),be&&W.fog===!0&&le.refreshFogUniforms(Cs,be),le.refreshMaterialUniforms(Cs,W,$,H,ve),Lr.upload(U,Bd(je),Cs,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Lr.upload(U,Bd(je),Cs,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Jt.setValue(U,"center",B.center),Jt.setValue(U,"modelViewMatrix",B.modelViewMatrix),Jt.setValue(U,"normalMatrix",B.normalMatrix),Jt.setValue(U,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Dn=W.uniformsGroups;for(let yl=0,m0=Dn.length;yl<m0;yl++)if(Ae.isWebGL2){let Gd=Dn[yl];qe.update(Gd,Rs),qe.bind(Gd,Rs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rs}function f0(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function p0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,F,G){Ue.get(M.texture).__webglTexture=F,Ue.get(M.depthTexture).__webglTexture=G;let W=Ue.get(M);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){let G=Ue.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,G=0){A=M,R=F,T=G;let W=!0,B=null,be=!1,Re=!1;if(M){let Oe=Ue.get(M);Oe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(U.FRAMEBUFFER,null),W=!1):Oe.__webglFramebuffer===void 0?E.setupRenderTarget(M):Oe.__hasExternalTextures&&E.rebindTextures(M,Ue.get(M.texture).__webglTexture,Ue.get(M.depthTexture).__webglTexture);let $e=M.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);let ke=Ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?B=ke[F][G]:B=ke[F],be=!0):Ae.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?B=Ue.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[G]:B=ke,w.copy(M.viewport),O.copy(M.scissor),z=M.scissorTest}else w.copy(K).multiplyScalar($).floor(),O.copy(Z).multiplyScalar($).floor(),z=fe;if(ye.bindFramebuffer(U.FRAMEBUFFER,B)&&Ae.drawBuffers&&W&&ye.drawBuffers(M,B),ye.viewport(w),ye.scissor(O),ye.setScissorTest(z),be){let Oe=Ue.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Oe.__webglTexture,G)}else if(Re){let Oe=Ue.get(M.texture),$e=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Oe.__webglTexture,G||0,$e)}D=-1},this.readRenderTargetPixels=function(M,F,G,W,B,be,Re){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){ye.bindFramebuffer(U.FRAMEBUFFER,De);try{let Oe=M.texture,$e=Oe.format,ke=Oe.type;if($e!==vn&&re.convert($e)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=ke===Ua&&(me.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&me.has("EXT_color_buffer_float"));if(ke!==ss&&re.convert(ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Li&&(Ae.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-W&&G>=0&&G<=M.height-B&&U.readPixels(F,G,W,B,re.convert($e),re.convert(ke),be)}finally{let Oe=A!==null?Ue.get(A).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(M,F,G=0){let W=Math.pow(2,-G),B=Math.floor(F.image.width*W),be=Math.floor(F.image.height*W);E.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,M.x,M.y,B,be),ye.unbindTexture()},this.copyTextureToTexture=function(M,F,G,W=0){let B=F.image.width,be=F.image.height,Re=re.convert(G.format),De=re.convert(G.type);E.setTexture2D(G,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,M.x,M.y,B,be,Re,De,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,Re,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,W,M.x,M.y,Re,De,F.image),W===0&&G.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(M,F,G,W,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let be=M.max.x-M.min.x+1,Re=M.max.y-M.min.y+1,De=M.max.z-M.min.z+1,Oe=re.convert(W.format),$e=re.convert(W.type),ke;if(W.isData3DTexture)E.setTexture3D(W,0),ke=U.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),ke=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);let Be=U.getParameter(U.UNPACK_ROW_LENGTH),Pt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),En=U.getParameter(U.UNPACK_SKIP_PIXELS),zt=U.getParameter(U.UNPACK_SKIP_ROWS),Si=U.getParameter(U.UNPACK_SKIP_IMAGES),Mt=G.isCompressedTexture?G.mipmaps[B]:G.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),G.isDataTexture||G.isData3DTexture?U.texSubImage3D(ke,B,F.x,F.y,F.z,be,Re,De,Oe,$e,Mt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ke,B,F.x,F.y,F.z,be,Re,De,Oe,Mt.data)):U.texSubImage3D(ke,B,F.x,F.y,F.z,be,Re,De,Oe,$e,Mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Be),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,En),U.pixelStorei(U.UNPACK_SKIP_ROWS,zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Si),B===0&&W.generateMipmaps&&U.generateMipmap(ke),ye.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,ye.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bh?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Gc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?Hs:_m}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?rt:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Sh=class extends hi{};Sh.prototype.isWebGL1Renderer=!0;Ac=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sn=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ba=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new P,za=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wp=new P,$p=new mt,qp=new mt,AM=new P,jp=new Ge,rc=new P,Kl=new Cn,Xp=new Ge,Zl=new Ui,Tc=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cf,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingBox.expandByPoint(rc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rc),this.boundingSphere.expandByPoint(rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kl.copy(this.boundingSphere),Kl.applyMatrix4(s),e.ray.intersectsSphere(Kl)!==!1&&(Xp.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Xp),!(this.boundingBox!==null&&Zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ey?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$p.fromBufferAttribute(s.attributes.skinIndex,e),qp.fromBufferAttribute(s.attributes.skinWeight,e),Wp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=qp.getComponent(r);if(a!==0){let o=$p.getComponent(r);jp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(AM.copy(Wp).applyMatrix4(jp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ha=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Mh=class extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Lt,h=Lt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yp=new Ge,TM=new Ge,Rc=class i{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:TM;Yp.multiplyMatrices(o,t[r]),Yp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Mh(t,e,e,vn,Li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ha),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ws=class extends at{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new Ge,Kp=new Ge,ac=[],Zp=new wt,RM=new Ge,Ra=new He,Ca=new Cn,Cc=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,RM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Zp.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Ca.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(n),e.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Kp.multiplyMatrices(n,Er),Ra.matrixWorld=Kp,Ra.raycast(e,ac);for(let a=0,o=ac.length;a<o;a++){let c=ac[a];c.instanceId=r,c.object=this,t.push(c)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},zr=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jp=new P,Qp=new P,em=new Ge,Jl=new Ui,oc=new Cn,Hr=class extends St{constructor(e=new Ut,t=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jp.fromBufferAttribute(t,s-1),Qp.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jp.distanceTo(Qp);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(s),oc.radius+=r,e.ray.intersectsSphere(oc)===!1)return;em.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(em);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=p,v=x-1;y<v;y+=f){let R=m.getX(y),T=m.getX(y+1);if(l.fromBufferAttribute(g,R),h.fromBufferAttribute(g,T),Jl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let y=p,v=x-1;y<v;y+=f){if(l.fromBufferAttribute(g,y),h.fromBufferAttribute(g,y+1),Jl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},tm=new P,nm=new P,Ga=class extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tm.fromBufferAttribute(t,s),nm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tm.distanceTo(nm);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Pc=class extends Hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Va=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},im=new Ge,wh=new Ui,cc=new Cn,lc=new P,Lc=class extends St{constructor(e=new Ut,t=new Va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;im.copy(s).invert(),wh.copy(e.ray).applyMatrix4(im);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);lc.fromBufferAttribute(u,g),sm(lc,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)lc.fromBufferAttribute(u,m),sm(lc,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Gr=class extends Gt{constructor(e,t,n,s,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Vr=class extends Gt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wr=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new Ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ui=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function x(){let v=new P,R=new P,T=0,A=(t-e)/n;for(let D=0;D<=r;D++){let S=[],w=D/r,O=w*(t-e)+e;for(let z=0;z<=s;z++){let Y=z/s,L=Y*c+o,N=Math.sin(L),H=Math.cos(L);R.x=O*N,R.y=-w*n+g,R.z=O*H,u.push(R.x,R.y,R.z),v.set(N,A,H).normalize(),d.push(v.x,v.y,v.z),f.push(Y,1-w),S.push(m++)}b.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let w=b[S][D],O=b[S+1][D],z=b[S+1][D+1],Y=b[S][D+1];h.push(w,O,Y),h.push(O,z,Y),T+=6}l.addGroup(p,T,0),p+=T}function y(v){let R=m,T=new Ce,A=new P,D=0,S=v===!0?e:t,w=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let O=m;for(let z=0;z<=s;z++){let L=z/s*c+o,N=Math.cos(L),H=Math.sin(L);A.x=S*H,A.y=g*w,A.z=S*N,u.push(A.x,A.y,A.z),d.push(0,w,0),T.x=N*.5+.5,T.y=H*.5*w+.5,f.push(T.x,T.y),m++}for(let z=0;z<s;z++){let Y=R+z,L=O+z;v===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class i extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new P,m=new Ce;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<s;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,y=x,v=x+n+1,R=x+n+2,T=x+1;o.push(y,v,T),o.push(v,R,T)}}this.setIndex(o),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ic=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let b=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let b=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,x=(s+1)*f+m;a.push(b,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},qr=class extends _n{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},jt=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sm,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},an=class extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};as=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends as{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tp,endingEnd:tp}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case np:r=e,o=2*t-n;break;case ip:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case np:a=e,c=2*n-t;break;case ip:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*b+.5*m,v=f*g-f*b;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+x*a[l+R]+y*a[c+R]+v*a[u+R];return r}},Ah=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Th=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hc(t,this.TimeBufferType),this.values=hc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hc(e.times,Array),values:hc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rs:t=this.InterpolantFactoryMethodDiscrete;break;case Di:t=this.InterpolantFactoryMethodLinear;break;case Tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return Di;case this.InterpolantFactoryMethodSmooth:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&CM(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Di;os=class extends On{};os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=rs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;Dc=class extends On{};Dc.prototype.ValueTypeName="color";ki=class extends On{};ki.prototype.ValueTypeName="number";Rh=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},di=class extends On{InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}};di.prototype.ValueTypeName="quaternion";di.prototype.DefaultInterpolation=Di;di.prototype.InterpolantFactoryMethodSmooth=void 0;cs=class extends On{};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=rs;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;Bi=class extends On{};Bi.prototype.ValueTypeName="vector";Nc=class{constructor(e,t=-1,n,s=ly){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(IM(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=PM(c);c=rm(c,1,h),l=rm(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ki(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];Dm(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let y=d[m];g.push(y.time),p.push(y.morphTarget===b?1:0)}s.push(new ki(".morphTargetInfluence["+b+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Bi,f+".position",d,"pos",s),n(di,f+".quaternion",d,"rot",s),n(Bi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};ts={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ch=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},DM=new Ch,Yn=class{constructor(e){this.manager=e!==void 0?e:DM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";Ci={},Ph=class extends Error{constructor(e,t){super(e),this.response=t}},ls=class extends Yn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ci[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{b+=v.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let T=0,A=h.length;T<A;T++){let D=h[T];D.onProgress&&D.onProgress(R)}p.enqueue(v),x()}})}}});return new Response(g)}else throw new Ph(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{ts.add(e,l);let h=Ci[e];delete Ci[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Lh=class extends Yn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ts.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Oa("img");function c(){h(),ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},jr=class extends Yn{constructor(e){super(e)}load(e,t,n,s){let r=new Gt,a=new Lh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Wa=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ql=new Ge,am=new P,om=new P,$a=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;am.setFromMatrixPosition(e.matrixWorld),t.position.copy(am),om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(om),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ih=class extends $a{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Uc=class extends Wa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ih}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cm=new Ge,Pa=new P,eh=new P,Dh=class extends $a{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pa),eh.copy(n.position),eh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eh),n.updateMatrixWorld(),s.makeTranslation(-Pa.x,-Pa.y,-Pa.z),cm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cm)}},hs=class extends Wa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nh=class extends $a{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fi=class extends Wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},us=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Oc=class extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ts.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ts.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ts.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ts.add(e,c),r.manager.itemStart(e)}},Gh="\\[\\]\\.:\\/",NM=new RegExp("["+Gh+"]","g"),Vh="[^"+Gh+"]",UM="[^"+Gh.replace("\\.","")+"]",OM=/((?:WC+[\/:])*)/.source.replace("WC",Vh),FM=/(WCOD+)?/.source.replace("WCOD",UM),kM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),BM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),zM=new RegExp("^"+OM+FM+kM+BM+"$"),HM=["material","materials","bones","map"],Uh=class{constructor(e,t,n){let s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NM,"")}static parseTrackName(e){let t=zM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);HM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Uh;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];QE=new Float32Array(1),Fc=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},kc=class{constructor(e,t,n=0,s=1/0){this.ray=new Ui(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Oh(e,this,n,t),n.sort(lm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Oh(e[s],this,n,t);return n.sort(lm),n}};qa=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},uc=new wt,Bc=class extends Ga{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Ut;r.setIndex(new at(n,1)),r.setAttribute("position",new at(s,3)),super(r,new zr({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&uc.setFromObject(this.object),uc.isEmpty())return;let t=uc.min,n=uc.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh)});function Fn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Za.copy(e),Za[n]=0,Za.normalize();let l=.5*a/(a+o),h=1-Za.angleTo(i)/c;return Math.sign(Za[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Za,Kr,Wh=ze(()=>{on();Za=new P;Kr=class extends Oi{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new P,c=new P,l=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new P,b=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(o.fromArray(h,g),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[g+0]=l.x*Math.sign(o.x)+c.x*r,h[g+1]=l.y*Math.sign(o.y)+c.y*r,h[g+2]=l.z*Math.sign(o.z)+c.z*r,u[g+0]=c.x,u[g+1]=c.y,u[g+2]=c.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=Fn(m,c,"z","y",r,n),d[p+1]=1-Fn(m,c,"y","z",r,t);break;case 1:m.set(-1,0,0),d[p+0]=1-Fn(m,c,"z","y",r,n),d[p+1]=1-Fn(m,c,"y","z",r,t);break;case 2:m.set(0,1,0),d[p+0]=1-Fn(m,c,"x","z",r,e),d[p+1]=Fn(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-Fn(m,c,"x","z",r,e),d[p+1]=1-Fn(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-Fn(m,c,"x","y",r,e),d[p+1]=1-Fn(m,c,"y","x",r,t);break;case 5:m.set(0,0,-1),d[p+0]=Fn(m,c,"x","y",r,e),d[p+1]=1-Fn(m,c,"y","x",r,t);break}}}});function Nm(i,e){let t=[],n=new gt,s=new gt,r=()=>{let b=new an({color:e,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new Me("#fff")});return b.name="tint",t.push(b),b},a=()=>{let b=new jt({color:e,roughness:.5});return b.name="tint",t.push(b),b},o=new jt({color:5979942,roughness:.5,name:"frame"}),c=new jt({color:2499103,roughness:.45}),l=new jt({color:11570519,metalness:1,roughness:.3}),h=(b,g,p=0,x=0,y=0,v,R=s)=>{let T=new He(b,g);return T.position.set(p,x,y),v&&T.rotation.set(...v),T.castShadow=T.receiveShadow=!0,R.add(T),T},u=(b,g)=>new ui(b,b*.75,g,14),d=(b,g,p=.2)=>[-1,1].forEach(x=>[-1,1].forEach(y=>h(u(.04,p),o,x*b,p/2,y*g))),f=(b,g,p,x=o)=>[-1,1].forEach(y=>[-1,1].forEach(v=>h(u(.035,p),x,y*b,p/2,v*g))),m=(b,g,p,x)=>{let y=new gt;y.position.set(b,0,g),y.rotation.y=p,s.add(y),[-1,1].forEach(v=>[-1,1].forEach(R=>h(u(.024,.44),o,v*.21,.22,R*.2,0,y))),h(nt(.5,.08,.48,.03),x,0,.47,0,0,y),h(nt(.5,.52,.06,.03),x,0,.78,-.22,[-.08,0,0],y)};if(i==="sofa"){let b=r();d(1.15,.4),h(nt(2.6,.3,1.05,.08),b,0,.38,0);for(let g=-1;g<=1;g++)h(nt(.82,.26,.84,.12),b,g*.84,.66,.1),h(nt(.82,.6,.28,.14),b,g*.84,1.05,-.4,[-.14,0,0]);[-1,1].forEach(g=>h(nt(.28,.62,1.05,.1),b,g*1.32,.7,0))}else if(i==="chaise"){let b=r();d(1.15,.4),h(nt(1.8,.3,1.05,.08),b,-.45,.38,0),h(nt(.9,.3,1.75,.08),b,.9,.38,.35),[-.9,0].forEach(g=>h(nt(.84,.26,.84,.12),b,g,.66,.1)),h(nt(.86,.26,1.55,.12),b,.9,.66,.42),h(nt(2.68,.6,.28,.14),b,0,1.05,-.4,[-.14,0,0]),h(nt(.28,.62,1.05,.1),b,-1.49,.7,0)}else if(i==="armchair"){let b=r();d(.45,.4,.22),h(nt(1.1,.3,1,.08),b,0,.4,0),h(nt(.88,.22,.82,.1),b,0,.64,.08),h(nt(1,.8,.26,.14),b,0,.98,-.4,[-.16,0,0]),[-1,1].forEach(g=>h(nt(.2,.5,.9,.08),b,g*.55,.66,0))}else if(i==="bar"){let b=r();f(.2,.2,.72,c),h(new Ic(.2,.015,8,32),l,0,.3,0,[Math.PI/2,0,0]),h(nt(.5,.1,.5,.04),b,0,.77,0),h(nt(.46,.26,.07,.03),b,0,1,-.22,[-.1,0,0])}else if(i==="dchair")m(0,0,0,r());else if(i==="dtable"){let b=a();h(nt(2,.07,1,.02),b,0,.75,0),f(.9,.42,.72,b)}else if(i==="coffee"){let b=a();h(new ui(.9,.9,.07,64),b,0,.62,0),h(new ui(.62,.62,.04,64),b,0,.22,0);for(let g=0;g<4;g++){let p=g*Math.PI/2+Math.PI/4;h(u(.05,.6),b,Math.cos(p)*.62,.3,Math.sin(p)*.62)}}else if(i==="console"){let b=a();h(nt(1.6,.05,.4,.02),b,0,.8,0),h(nt(1.5,.03,.34,.01),b,0,.25,0),f(.74,.16,.78,b)}else if(i==="dset"){let b=a(),g=r();h(nt(1.6,.07,.9,.02),b,0,.75,0),f(.7,.38,.72,b),[-.4,.4].forEach(p=>{m(p,-.75,0,g),m(p,.75,Math.PI,g)})}else if(i==="ottoman"){let b=r();d(.45,.45,.14),h(nt(1.2,.5,1.2,.2),b,0,.4,0)}else if(i==="headboard"){let b=r();h(nt(2,.9,.12,.06),b,0,.85,0),[-1,1].forEach(g=>h(nt(.08,1.3,.08,.02),o,g*.96,.65,-.06));for(let g=-2;g<=2;g++)h(nt(.3,.7,.02,.01),b,g*.36,.85,.07)}else if(i==="bedside"){let b=a();f(.22,.15,.2),h(nt(.55,.45,.4,.03),b,0,.43,0),h(nt(.5,.16,.01,.005),c,0,.5,.205),h(new ui(.015,.015,.07,12),l,0,.5,.24,[Math.PI/2,0,0])}else if(i==="dresser"){let b=a();f(.7,.2,.15),h(nt(1.6,.8,.5,.03),b,0,.55,0),[.3,.55,.8].forEach(g=>{h(nt(1.5,.2,.01,.005),c,0,g-.05,.255),h(new ui(.015,.015,.06,12),l,0,g-.05,.29,[Math.PI/2,0,0])})}else if(i==="tv"){let b=a();f(.82,.15,.14),h(nt(1.8,.45,.42,.03),b,0,.37,0),[-.45,.45].forEach(g=>h(nt(.8,.3,.02,.005),c,g,.37,.21)),h(nt(1.3,.75,.04,.01),c,0,1,0),h(nt(.3,.04,.2,.01),c,0,.62,0)}else{let b=r();h(nt(1.2,.7,.8,.1),b,0,.35,0)}return s.scale.setScalar(GM[i]||1.2),n.add(s),n.userData={tints:t,glows:[],frames:[o]},n}var nt,GM,Um=ze(()=>{on();Wh();nt=(i,e,t,n=.06)=>new Kr(i,e,t,4,n),GM={sofa:1,chaise:.9,armchair:1.7,bar:2.3,dchair:2.4,dtable:1.1,coffee:1.5,console:1.3,dset:1.2,ottoman:2.1,headboard:1.2,bedside:2.5,dresser:1.3,tv:1.3}});function js(i,e=512){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,e,e);let s=64,r=e/s;for(let c=0;c<s;c++)for(let l=0;l<s;l++)(c+l)%2===0?(n.fillStyle="rgba(255,255,255,.10)",n.fillRect(c*r,l*r+r*.12,r,r*.76)):(n.fillStyle="rgba(0,0,0,.12)",n.fillRect(c*r+r*.12,l*r,r*.76,r));let a=n.getImageData(0,0,e,e),o=a.data;for(let c=0;c<o.length;c+=4){let l=(Math.random()-.5)*12;o[c]+=l,o[c+1]+=l,o[c+2]+=l}return n.putImageData(a,0,0),t}async function fs(i,e,t){t={...pi,...t||{}};let n=++WM;i.forEach(r=>{r&&(r.userData.fabTok=n)});let s;try{s=await VM(e)}catch{i.forEach(r=>{r&&r.color&&r.userData.fabTok===n&&(r.map=null,r.color.set(e[1]),r.needsUpdate=!0)});return}i.forEach(r=>{if(!r||!("map"in r)||r.userData.fabTok!==n)return;let a=s.clone();a.colorSpace=rt,a.wrapS=a.wrapT=jn,a.repeat.set(t.sx,t.sy),a.rotation=t.rot*Math.PI/180,a.offset.set(t.ox,t.oy),a.anisotropy=8,a.needsUpdate=!0,r.map&&r.map!==s&&r.map.dispose(),r.map=a,r.color.set("#ffffff"),r.needsUpdate=!0})}var pi,$h,VM,WM,Xs=ze(()=>{on();pi={sx:1,sy:1,rot:0,ox:0,oy:0};$h=new Map,VM=i=>{let e=i[2]+"|"+i[1]+"|"+(i[3]||"");return $h.has(e)||$h.set(e,i[3]?new jr().loadAsync(i[3]):Promise.resolve(new Vr(js(i[1],512)))),$h.get(e)},WM=0});var Kn,mi,Fm,$M,qM,jM,qh,jh,XM,Om,zi,Xh,gi,Zn,Pn,YM,kn,KM,ZM,km,JM,cA,Yh,Bn,Bm,pt,Jn,Kh,pn=ze(()=>{Nn();Sf();Um();Xs();Kn=dt,mi=ge,Fm=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-"),$M=new Set([...Kn.deleted||[],...mi.deleted||[]]),qM=new Set([...Kn.deletedFabrics||[],...mi.deletedFabrics||[]]),jM=xf.map(([i,e])=>({id:Fm(i),name:i,hex:e,type:"Wood",desc:`${i} wood finish.`})),qh=yf.map(([i,e])=>({id:Fm(i),name:i,hex:e,type:"Fabric",desc:_f[i]||""})),jh=[...qh,...jM,...Kn.fabrics||[],...Kn.materials||[],...mi.addedFabrics||[]].filter(i=>!qM.has(i.id)).map(i=>({type:i.type||"Fabric",desc:"",...i,...Kn.fabricEdits?.[i.id]||{},...mi.fabricEdits?.[i.id]||{}}));jh.length||jh.push({id:"oyster",name:"Oyster",hex:"#d4cabb",type:"Fabric",desc:""});XM=mi.materialOrder??Kn.materialOrder??[],Om=new Map(XM.map((i,e)=>[i,e])),zi=jh.map((i,e)=>({material:{...i,image:Mi("fabric:"+i.id)||i.image||null},i:e})).sort((i,e)=>(Om.get(i.material.id)??Number.MAX_SAFE_INTEGER)-(Om.get(e.material.id)??Number.MAX_SAFE_INTEGER)||i.i-e.i).map(({material:i})=>i),Xh=i=>["fabric","leather","velvet","linen"].includes(String(i||"").toLowerCase());if(!zi.some(i=>Xh(i.type))){let i=qh[0].id;for(;zi.some(e=>e.id===i);)i+="-fallback";zi.push({...qh[0],id:i,image:null})}gi=zi.filter(i=>Xh(i.type)),Zn=zi.map(i=>[i.name,i.hex,i.id,i.image,i.desc,i.type]),Pn=Zn.filter(i=>Xh(i[5])),YM=(()=>{let i=yn();return i&&i.length?i:vf})(),kn=Zn.filter(i=>i[5]==="Wood"||i[5]==="Metal"),KM={...Kn.pieceFabrics||{},...mi.pieceFabrics||{}},ZM={...Kn.pieceDefaults||{},...mi.pieceDefaults||{}},km=i=>{let e=KM[i],t=e?Pn.filter(n=>e.includes(n[2])):Pn;return t.length?t:Pn},JM=(i,e)=>{if(e==="fabric")return km(i);let t=sf(i,e);if(t&&t.length){let s=Zn.filter(r=>t.includes(r[2]));if(s.length)return s}let n=Zn.filter(s=>s[5]==="Wood"||s[5]==="Metal");return n.length?n:Zn},cA=Zn[0],Yh=(i,e=null)=>e===null?i:`finish:${e}:${i}`,Bn=(i,e,t=null)=>{let n=Yh(e,t),s=t===null||t==="fabric"?e:null,r=Kn.mapping?.[i]||{},a=mi.mapping?.[i]||{};return{...pi,...r[n]||(s?r[s]:null)||{},...a[n]||(s?a[s]:null)||{}}},Bm=[...(Kn.products||[]).map(i=>({...i})),...(mi.added||[]).map(i=>({...i,added:!0}))].map(i=>({kind:i.id,tag:"",mat:"",desc:"",dims:[100,100,100],...i,sub:i.sub||i.cat}));Bm.forEach(i=>{i.model&&(Kn.models[i.id]=i.model)});pt=[..._l,...Bm].filter(i=>!$M.has(i.id)).map(i=>{let e=km(i.id),t=YM.map(n=>({...n,finishes:JM(i.id,n.id)}));return{...i,...mi.products[i.id]||{},fabrics:e,finishTypes:t,defaults:ZM[i.id]||{}}}),Jn=(()=>{let i=bf.map(e=>pt.find(t=>t.id===e)).filter(Boolean);return i.length?i:pt.slice(0,4)})(),Kh=(i,e)=>Nm(_l.find(t=>t.id===i)?.kind||i,e)});function Zh(i,e){if(e===vm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ka||e===Hc){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ka)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var zm=ze(()=>{on()});function QM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function nw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function Ys(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ms(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iw(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function sw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rw(i){let e,t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eu(t.attributes):e=i.indices+":"+eu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+eu(i.targets[n]);return e}function eu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function wu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function cw(i,e,t){let n=e.attributes,s=new wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=wu(Zr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=wu(Zr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Cn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Wm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Mu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return lt.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),ms(i,e),cw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?iw(i,e.targets,t):i})}var Wc,Ye,tu,nu,iu,su,ru,au,ou,cu,lu,hu,uu,du,fu,pu,mu,gu,bu,$m,Ja,Hm,yu,xu,vu,_u,$c,ew,Su,zn,Zr,Gm,Vm,Jh,Mu,ps,tw,Qh,ow,Eu,qm=ze(()=>{on();zm();Wc=class extends Yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new su(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new bu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=us.extractUrlBase(e);a=us.resolveURL(l,this.path)}else a=us.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ls(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$m){try{a[Ye.KHR_BINARY_GLTF]=new yu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Eu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new nu;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new xu(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new vu;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new _u;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},tu=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],It);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hs(h),l.distance=u;break;case"spot":l=new Uc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ms(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},nu=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,rt))}return Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,rt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},cu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(o[0],o[1],o[2],It),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},hu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,rt)),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},du=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:an}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},pu=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mu=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gu=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},bu=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==zn.TRIANGLES&&l.mode!==zn.TRIANGLE_STRIP&&l.mode!==zn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Ge,g=new P,p=new sn,x=new P(1,1,1),y=new Cc(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,b.compose(g,p,x));for(let v in c)if(v==="_COLOR_0"){let R=c[v];y.instanceColor=new Ws(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);St.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},$m="glTF",Ja=12,Hm={JSON:1313821514,BIN:5130562},yu=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ja,r=new DataView(e,Ja),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Hm.JSON){let l=new Uint8Array(e,Ja+a,o);this.content=n.decode(l)}else if(c===Hm.BIN){let l=Ja+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Mu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Mu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Zr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,It,d)})})}},vu=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},_u=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},$c=class extends as{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,x=1-g,y=p-d+u;for(let v=0;v!==o;v++){let R=a[b+v+o],T=a[b+v+c]*h,A=a[m+v+o],D=a[m+v]*h;r[v]=x*R+y*T+g*A+p*D}return r}},ew=new sn,Su=class extends $c{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ew.fromArray(r).normalize().toArray(r),r}},zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gm={9728:Lt,9729:Wt,9984:Nr,9985:Ya,9986:ks,9987:ci},Vm={33071:fn,33648:Gs,10497:jn},Jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tw={CUBICSPLINE:void 0,LINEAR:Di,STEP:rs},Qh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};ow=new Ge,Eu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new jr(this.options.manager):this.textureLoader=new Oc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ls(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ys(r,o,s),ms(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(us.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Jh[s.type],o=Zr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new at(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Jh[s.type],l=Zr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(x);y||(b=new l(o,p*f,s.count*f/h),y=new Ba(b,f/h),t.cache.add(x,y)),g=new za(y,c,d%f/h,m)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),g=new at(b,c,m);if(s.sparse!==void 0){let p=Jh.SCALAR,x=Zr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,R=new x(a[1],y,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new at(g.array.slice(),g.itemSize,g.normalized));for(let A=0,D=R.length;A<D;A++){let S=R[A];if(g.setX(S,T[A*c]),c>=2&&g.setY(S,T[A*c+1]),c>=3&&g.setZ(S,T[A*c+2]),c>=4&&g.setW(S,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Gm[d.magFilter]||Wt,h.minFilter=Gm[d.minFilter]||ci,h.wrapS=Vm[d.wrapS]||jn,h.wrapT=Vm[d.wrapT]||jn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Gt(b);g.needsUpdate=!0,d(g)}),t.load(us.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||aw(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Va,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new zr,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=s[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],It),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=qt);let h=r.alphaMode||Qh.OPAQUE;if(h===Qh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Qh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==rn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==rn){let u=r.emissiveFactor;o.emissive=new Me().setRGB(u[0],u[1],u[2],It)}return r.emissiveTexture!==void 0&&a!==rn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,rt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ms(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ys(s,u,r),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Wm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=rw(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Wm(new Ut,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?nw(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,x=l[f];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Tc(b,x):new He(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===zn.TRIANGLE_STRIP?p.geometry=Zh(p.geometry,Hc):g.mode===zn.TRIANGLE_FAN&&(p.geometry=Zh(p.geometry,Ka));else if(g.mode===zn.LINES)p=new Ga(b,x);else if(g.mode===zn.LINE_STRIP)p=new Hr(b,x);else if(g.mode===zn.LINE_LOOP)p=new Pc(b,x);else if(g.mode===zn.POINTS)p=new Lc(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&sw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ms(p,r),g.extensions&&Ys(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ys(s,u[0],r),u[0];let d=new gt;r.extensions&&Ys(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(ds.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Br(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ms(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Rc(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],b=f.target,g=b.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let x=0,y=d.length;x<y;x++){let v=d[x],R=f[x],T=m[x],A=b[x],D=g[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let S=n._createAnimationTracks(v,R,T,A,D);if(S)for(let w=0;w<S.length;w++)p.push(S[w])}return new Nc(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ow)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ha:l.length>1?h=new gt:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ms(h,r),r.extensions&&Ys(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new gt;n.name&&(r.name=s.createUniqueName(n.name)),ms(r,n),n.extensions&&Ys(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof _n||d instanceof Gt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];ps[r.path]===ps.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ps[r.path]){case ps.weights:l=ki;break;case ps.rotation:l=di;break;case ps.position:case ps.scale:l=Bi;break;default:switch(n.itemSize){case 1:l=ki;break;case 2:case 3:default:l=Bi;break}break}let h=s.interpolation!==void 0?tw[s.interpolation]:Di,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+ps[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=wu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof di?Su:$c;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function lw(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=o.buffer,l=o.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),m=f.attributes.map(b=>b.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,m=o.GetEncodedGeometryType(c);if(m===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,d);else if(m===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let b={index:null,attributes:[]};for(let g in h){let p=self[u[g]],x,y;if(l.useUniqueIDs)y=h[g],x=o.GetAttributeByUniqueId(d,y);else{if(y=o.GetAttributeId(d,a[h[g]]),y===-1)continue;x=o.GetAttribute(d,y)}let v=s(a,o,d,g,p,x);g==="color"&&(v.vertexColorSpace=l.vertexColorSpace),b.attributes.push(v)}return m===a.TRIANGULAR_MESH&&(b.index=n(a,o,d)),a.destroy(d),b}function n(a,o,c){let h=c.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,c,l,h,u){let d=u.num_components(),m=c.num_points()*d,b=m*h.BYTES_PER_ELEMENT,g=r(a,h),p=a._malloc(b);o.GetAttributeDataArrayForAllPoints(c,u,g,b,p);let x=new h(a.HEAPF32.buffer,p,m).slice();return a._free(p),{name:l,array:x,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var Au,qc,jm=ze(()=>{on();Au=new WeakMap,qc=class extends Yn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new ls(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,rt).catch(n)}decodeDracoFile(e,t,n,s,r=It,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Au.has(e)){let c=Au.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Au.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Ut;e.index&&t.setIndex(new at(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,a=s.array,o=s.itemSize,c=new at(a,o);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==rt)return;let n=new Me;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s).convertSRGBToLinear(),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new ls(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=lw.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});var Xm,Ym=ze(()=>{Xm=function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),y=0;y<p.length;++y){var v=p.charCodeAt(y);x[y]=v>96?v-97:v>64?v-39:v+4}for(var R=0,y=0;y<p.length;++y)x[R++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,R)}function c(p,x,y,v,R,T){var A=r.exports.sbrk,D=y+3&-4,S=A(D*v),w=A(R.length),O=new Uint8Array(r.exports.memory.buffer);O.set(R,w);var z=p(S,y,v,w,R.length);if(z==0&&T&&T(S,D,v),x.set(O.subarray(S,S+y*v)),A(S-A(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(y){var v=y.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),y=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(y),R=0;R<p;++R)u[R]=f(v);URL.revokeObjectURL(v)}function b(p,x,y,v,R){for(var T=u[0],A=1;A<u.length;++A)u[A].pending<T.pending&&(T=u[A]);return new Promise(function(D,S){var w=new Uint8Array(y),O=d++;T.pending+=p,T.requests[O]={resolve:D,reject:S},T.object.postMessage({id:O,count:p,size:x,source:w,mode:v,filter:R},[w.buffer])})}function g(p){a.then(function(){var x=p.data;try{var y=new Uint8Array(x.count*x.size);c(r.exports[x.mode],y,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(v){self.postMessage({id:x.id,count:x.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,y,v,R){c(r.exports.meshopt_decodeVertexBuffer,p,x,y,v,r.exports[l[R]])},decodeIndexBuffer:function(p,x,y,v){c(r.exports.meshopt_decodeIndexBuffer,p,x,y,v)},decodeIndexSequence:function(p,x,y,v){c(r.exports.meshopt_decodeIndexSequence,p,x,y,v)},decodeGltfBuffer:function(p,x,y,v,R,T){c(r.exports[h[R]],p,x,y,v,r.exports[l[T]])},decodeGltfBufferAsync:function(p,x,y,v,R){return u.length>0?b(p,x,y,h[v],l[R]):a.then(function(){var T=new Uint8Array(p*x);return c(r.exports[h[v]],T,p,x,y,r.exports[l[R]]),T})}}}()});function hw(){Km??=new qc().setDecoderPath("libs/draco/");let i=new Wc;return i.setDRACOLoader(Km),i.setMeshoptDecoder(Xm),i}async function Tu(i){let e=URL.createObjectURL(i);try{let t=await Qa(e),n=new wt().setFromObject(t.scene).getSize(new P),s=Math.max(n.x,n.y,n.z)>20?.001:1;return[n.x,n.z,n.y].map(r=>Math.max(1,Math.round(r*s*100)))}finally{URL.revokeObjectURL(e)}}var Km,Qa,jc=ze(()=>{on();qm();jm();Ym();Qa=(i,e)=>new Promise((t,n)=>hw().load(i,t,e,n))});async function uw(){if(sessionStorage.adm==="1")return!0;let i=localStorage.getItem("dekara-pw");if(!i){let t=prompt("First time here: choose a steward passcode (4+ characters).");return!t||t.length<4?!1:(localStorage.setItem("dekara-pw",await Zm(t)),sessionStorage.adm="1",!0)}let e=prompt("Steward passcode:");return e&&await Zm(e)===i?(sessionStorage.adm="1",!0):(alert("Passcode incorrect."),!1)}async function vw(i){await Zs(`Folder selected: ${i.name}. Checking for package.json, data/site.json and existing settings\u2026`),await i.getFileHandle("package.json");let e=await i.getDirectoryHandle("data"),t=await e.getFileHandle("site.json"),n;try{n=JSON.parse(await(await t.getFile()).text())}catch(m){throw new Error(`Could not read data/site.json as valid JSON: ${m.message}`)}if(!n||typeof n!="object"||Array.isArray(n))throw new Error("data/site.json must contain a JSON object.");for(let m of["config","files","models"])if(n[m]!==void 0&&(!n[m]||typeof n[m]!="object"||Array.isArray(n[m])))throw new Error(`data/site.json field "${m}" must be a JSON object.`);let s={...ge};delete s._removed,delete s._publishedAt;let r={...n.config||{},...s},a={...n.files||{}},o={...n.models||{}},c=new Set(ge._removed||[]),l=Xd(),h=new Map;for(let m of l){let b=jd(m),g=await(await fetch(b.url)).blob(),p=xw(m,{name:b.name,type:b.type||g.type});h.set(m,{file:b,blob:g,path:p,type:b.type||g.type})}for(let m of c)delete a[m];for(let[m,b]of h)a[m]={path:b.path,type:b.type,name:b.file.name};for(let[m,b]of h){let[,g]=m.split(":");if(m.startsWith("model:")&&(o[g]=b.path),m.startsWith("fabric:")){let p=(r.addedFabrics||[]).find(x=>x.id===g);p&&(p.image=b.path),r.fabricEdits?.[g]&&(r.fabricEdits[g]={...r.fabricEdits[g],image:b.path})}if(m.startsWith("collection:")){let p=(r.collections||[]).find(x=>x.id===g);p&&(p.image=b.path)}}r.added=(r.added||[]).map(m=>{let b=h.get("model:"+m.id);if(b)return{...m,model:b.path};if(c.has("model:"+m.id)){let g={...m};return delete g.model,g}return m}),r.collections=Ks().map(m=>{let b=h.get("collection:"+m.id),g={...m,...b?{image:b.path}:{}};return c.has("collection:"+m.id)&&delete g.image,g.pieces=m.pieces.map(p=>{let x=h.get(`piece:${m.id}:${p.id}`);if(x)return{...p,model:x.path};if(c.has(`piece:${m.id}:${p.id}`)){let y={...p};return delete y.model,y}return p}),g}),r.addedFabrics=(r.addedFabrics||[]).map(m=>{if(h.has("fabric:"+m.id))return{...m,image:h.get("fabric:"+m.id).path};if(c.has("fabric:"+m.id)){let b={...m};return delete b.image,b}return m});for(let m of c)if(m.startsWith("model:")&&delete o[m.slice(6)],m.startsWith("fabric:")&&r.fabricEdits?.[m.slice(7)]){let b={...r.fabricEdits[m.slice(7)]};delete b.image,r.fabricEdits[m.slice(7)]=b}let u=h.size+1,d=0;for(let[m,b]of h)await Zs(`Copying ${d+1} of ${u-1}: ${b.path}`,d,u),await eg(i,b.path,b.blob),d++;let f={...n,config:r,files:a,models:o,version:Date.now()};return await Zs(`Writing ${d+1} of ${u}: data/site.json`,d,u),await eg(i,"data/site.json",JSON.stringify(f,null,1)),d++,await Zs(`Complete. Updated data/site.json and copied ${h.size} uploaded file${h.size===1?"":"s"}. Review the project folder, then commit and push from your terminal.`,d,u),sessionStorage.removeItem("repo-pub-running"),!0}function tg(){let i=window.__prod,e=document.getElementById("map-body");if(!i||!e||!i.mappingOptions?.length)return;let t=i.mappingOptions.find(f=>f.ft.id==="fabric"&&f.material[2]===i.current()[2])||i.mappingOptions[0],n=f=>document.getElementById(f),s=["sx","sy","rot","ox","oy"],r=(f,m,b,g,p)=>`<label>${m} <b id="v-${f}"></b><input type="range" id="mp-${f}" min="${b}" max="${g}" step="${p}"></label>`;e.innerHTML=`<p class="note">Choose a fabric or finish material to map. Each fabric and finish type/material has independent scale, rotation and location values.</p><label>Fabric / finish<select id="mp-f">${i.mappingOptions.map(f=>`<option value="${Ke(f.key)}"${f.key===t.key?" selected":""}>${Ke(f.label)}</option>`).join("")}</select></label>
 ${r("sx","Scale X",.05,40,.05)}${r("sy","Scale Y",.05,40,.05)}<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0"><input type="checkbox" id="mp-link" checked style="width:auto"> Link X and Y scale</label>${r("rot","Rotation (degrees)",-180,180,1)}${r("ox","Location X",-2,2,.01)}${r("oy","Location Y",-2,2,.01)}
 <p class="note" id="mp-st"></p><div class="acts"><button data-mp="lock">Lock values</button><button id="mp-all" data-mp="all">Apply to all</button><button data-mp="reset">Reset</button></div>`;let a=()=>n("mp-f").value,o=()=>Object.fromEntries(s.map(f=>[f,Number(n("mp-"+f).value)])),c=!1,l=t.key,h=()=>i.mappingOptions.find(f=>f.key===l),u=()=>{let f=h();n("mp-all").textContent=`Apply to all ${f.ft.id==="fabric"?"fabrics":`${f.ft.name.toLowerCase()} finishes`}`};Xc=()=>{c&&(Uo(i.piece.id,l,{...o(),locked:!0}),c=!1)};let d=f=>{l=f;let m=i.mapping(f);s.forEach(b=>{n("mp-"+b).value=m[b],n("v-"+b).textContent=m[b]}),n("mp-st").textContent=m.locked?"Locked. Customers see these values.":"Not locked yet. Lock to save these values for customers.",u()};e.addEventListener("change",f=>{if(f.target.id==="mp-f"){Xc();let m=a();i.selectMapping(m),d(m)}}),e.addEventListener("input",f=>{let m=f.target;/^mp-(sx|sy|rot|ox|oy)$/.test(m.id)&&(n("mp-link").checked&&(m.id==="mp-sx"||m.id==="mp-sy")&&(n("mp-sx").value=n("mp-sy").value=m.value),c=!0,s.forEach(b=>n("v-"+b).textContent=n("mp-"+b).value),i.previewMapping(l,o()),n("mp-st").textContent="Previewing. Apply changes or lock to save these values for customers.")}),e.addEventListener("click",f=>{let m=f.target.closest("[data-mp]")?.dataset.mp;if(m==="lock"&&(Uo(i.piece.id,l,{...o(),locked:!0}),c=!1,n("mp-st").textContent="Locked. Customers see these values."),m==="all"){let b=h(),g={...o(),locked:!0},p=i.mappingOptions.filter(x=>x.ft.id===b.ft.id);p.forEach(x=>Uo(i.piece.id,x.key,g)),c=!1,n("mp-st").textContent=`Applied these values to all ${p.length} ${b.ft.name.toLowerCase()} options.`}m==="reset"&&(tf(i.piece.id,l),c=!1,i.selectMapping(l),d(l))}),d(t.key)}function ng(){sessionStorage.admOpen="1";let i=document.getElementById("adm");if(i){i.classList.add("open");return}i=document.createElement("aside"),i.id="adm";let e=[...document.querySelectorAll("[data-slot]")].filter(s=>!s.dataset.slot.startsWith("gallery"));i.innerHTML=`<div class="adm-top"><header><h3>Steward's Chamber</h3><button data-act="close" aria-label="Close admin panel">\u2715</button></header><input id="adm-search" type="search" placeholder="Search admin settings\u2026" aria-label="Search admin settings"></div>
 <div id="adm-scroll">
 <p class="note">Admin edits and uploaded files are stored in this browser until you publish the changes to your site.</p>
 ${document.getElementById("p-canvas")?'<h4>Mapping</h4><div id="map-body"></div>':""}<h4>Media on this page</h4><p class="note">Every slot accepts an image or a video (MP4 or WebM; keep videos under about 50 MB). Background slots play silently on a loop; other videos show play controls.</p>${e.map(s=>to(s.dataset.label||s.dataset.slot,s.dataset.slot,"image/*,video/*")).join("")||'<p class="note">No media slots on this page.</p>'}
 ${bw()}${dw()}${fw()}${gw()}${_w()}${pw()}${mw()}<h4>Pieces</h4><div class="acts"><button data-act="restoredef">Restore deleted default pieces</button></div>${pt.map(s=>`<details><summary>${Ke(s.name)}</summary>${eo(s.id,"name","Name",s.name)}<label>Category<select data-pid="${s.id}" data-k="cat">${Ps.map(r=>`<option${r===s.cat?" selected":""}>${r}</option>`).join("")}</select></label>${eo(s.id,"sub","Subcategory",s.sub)}${eo(s.id,"tag","Tagline",s.tag)}${eo(s.id,"price","Price (ZAR)",s.price,"number")}${eo(s.id,"desc","Description",s.desc,"area")}<div class="ar"><b>Fabrics for this piece</b>${gi.map(r=>no(`data-pf="${s.id}"`,r.id,r.name,s.fabrics.some(a=>a[2]===r.id))).join("")}<small>To set how each fabric is scaled on this piece, open its page with this panel open.</small><a href="product.html?id=${encodeURIComponent(s.id)}" style="border-bottom:1px solid var(--line);justify-self:start">Open piece page</a></div>
 <div class="ar"><b>First configuration customers see</b>${Qm(s.id,"fabric",s.fabrics,s.defaults)}${s.finishTypes.filter(r=>r.id!=="fabric").map(r=>Qm(s.id,r.id,r.finishes,s.defaults)).join("")}</div>
 ${s.finishTypes.filter(r=>r.id!=="fabric").map(r=>`<div class="ar"><b>${Ke(r.name)} finishes for this piece</b>${r.finishes.map(a=>no(`data-pfin="${s.id}|${r.id}|${a[2]}"`,a[2],a[0],!0)).join("")}</div>`).join("")}
 ${to("3D model (.glb / .gltf)","model:"+s.id,".glb,.gltf,model/gltf-binary")}${[1,2,3].map(r=>to("Gallery photo or video "+r,`gallery:${s.id}:${r}`,"image/*,video/*")).join("")}<div class="acts"><button data-delprod="${s.id}">Delete this piece</button></div></details>`).join("")}
 </div><div class="acts" id="adm-final"><button data-act="apply">Apply changes</button><button data-act="export">Export text</button><button data-act="import">Import text</button><button data-act="reset">Reset everything</button><button data-act="lock">Lock</button></div>`,document.body.append(i),requestAnimationFrame(()=>i.classList.add("open"));let t=i.querySelector("#adm-scroll");[...t.querySelectorAll(":scope>h4")].forEach(s=>{let r=document.createElement("details");r.className="sec";let a=document.createElement("summary");a.textContent="\u2630 "+s.textContent,r.append(a);let o=s.nextSibling;for(;o&&!(o.nodeType===1&&o.tagName==="H4");){let c=o.nextSibling;r.append(o),o=c}s.textContent==="Mapping"&&(r.open=!0),s.replaceWith(r)});let n=document.createElement("p");n.className="note",n.id="adm-no-results",n.textContent="No matching settings.",n.hidden=!0,t.append(n),i.querySelector("#adm-search").addEventListener("input",s=>{let r=s.target.value.trim().toLocaleLowerCase(),a=!1;t.querySelectorAll(":scope>.sec").forEach(o=>{let c=[...o.children].filter(d=>d!==o.querySelector(":scope>summary")),l=o.querySelector(":scope>summary").textContent.toLocaleLowerCase(),h=d=>d.textContent.toLocaleLowerCase().includes(r),u=!r||l.includes(r)||o.textContent.toLocaleLowerCase().includes(r);o.hidden=!u,a||=u,r&&u?(o.open=!0,l.includes(r)||(c.forEach(d=>{d.matches("label, .ar, .acts, p")&&(d.hidden=!h(d))}),o.querySelectorAll("details:not(.sec)").forEach(d=>{d.hidden=!h(d),d.hidden||(d.open=!0)}))):r||(c.forEach(d=>{d.hidden=!1}),o.querySelectorAll("details:not(.sec)").forEach(d=>{d.hidden=!1}))}),n.hidden=!r||a}),window.__prod&&tg(),addEventListener("prod-ready",tg),i.addEventListener("change",async s=>{let r=s.target;if(r.dataset.fe){let[a,o]=r.dataset.fe.split("|");df(a,o,r.value);return}if(r.dataset.pdefault){let[a,o]=r.dataset.pdefault.split("|");rf(a,o,r.value);return}if(r.dataset.pf){vl(r.dataset.pf,[...i.querySelectorAll("[data-pf]")].filter(a=>a.dataset.pf===r.dataset.pf&&a.checked).map(a=>a.value));return}if(r.dataset.pfin){let[a,o]=r.dataset.pfin.split("|");nf(a,o,[...i.querySelectorAll(`[data-pfin^="${a}|${o}|"]`)].filter(c=>c.checked).map(c=>c.value));return}if(r.dataset.stfab!==void 0){cf([...i.querySelectorAll("[data-stfab]")].filter(a=>a.checked).map(a=>a.value));return}if(r.dataset.stfin){let[a]=r.dataset.stfin.split("|");lf(a,[...i.querySelectorAll(`[data-stfin^="${a}|"]`)].filter(o=>o.checked).map(o=>o.value));return}if(r.dataset.site){Qd(r.dataset.site,r.type==="checkbox"?r.checked:r.type==="number"?Number(r.value):r.value.trim());return}if(r.id==="np-file"&&r.files[0]){try{let[a,o,c]=await Tu(r.files[0]);["np-w","np-d","np-h"].forEach((l,h)=>document.getElementById(l).value=[a,o,c][h])}catch{alert("Could not read that model. You can still enter the size manually.")}return}if(r.dataset.cn){let a=Ks().find(o=>o.id===r.dataset.cn);a&&(a.name=r.value.trim()||a.name,st());return}if(r.dataset.cp){let[a,o,c]=r.dataset.cp.split("|"),l=Ks().find(h=>h.id===a)?.pieces.find(h=>h.id===o);l&&(l[c]=c==="name"?r.value.trim():Math.max(0,Number(r.value)||0),st());return}if(r.dataset.addpieces&&r.files.length){let a=Ks().find(o=>o.id===r.dataset.addpieces);if(!a){alert("Could not find that collection.");return}r.disabled=!0;for(let o of r.files){let[c,l,h]=await Tu(o).catch(()=>[100,100,80]),u="p"+Date.now().toString(36)+Math.random().toString(36).slice(2,5);await Ma("piece:"+a.id+":"+u,o),a.pieces.push({id:u,name:o.name.replace(/\.(glb|gltf)$/i,"").replace(/[-_]+/g," "),w:c,d:l,h,price:0})}st(),kt();return}if(r.dataset.sh){Jd(r.dataset.sh,r.type==="checkbox"?r.checked:Math.max(0,Number(r.value)||0));return}if(r.dataset.st){Zd(r.dataset.st,r.type==="checkbox"?r.checked:Math.max(0,Number(r.value)||0));return}if(r.dataset.pid){Yd(r.dataset.pid,r.dataset.k,r.value);return}r.dataset.slot&&r.files[0]&&(r.disabled=!0,await Ma(r.dataset.slot,r.files[0]),kt())}),i.addEventListener("click",async s=>{let r=s.target.closest("button");if(!r)return;if(r.dataset.matOrder){let c=i.querySelector("#adm-material-list"),l=[...c.querySelectorAll(":scope>details")],h=r.closest("details"),u=l.indexOf(h),d=u+(r.dataset.matOrder==="up"?-1:1);if(u>=0&&d>=0&&d<l.length){d<u?l[d].before(h):l[d].after(h);let f=[...c.querySelectorAll(":scope>details")];hf(f.map(m=>m.dataset.materialId)),f.forEach((m,b)=>m.querySelectorAll("[data-mat-order]").forEach(g=>{g.disabled=g.dataset.matOrder==="up"?b===0:b===f.length-1}))}return}if(r.dataset.del)return await cr(r.dataset.del),kt();let a=r.dataset;if(a.delprod){confirm("Delete this piece from the shop?")&&(mf(a.delprod),await cr("model:"+a.delprod),kt());return}if(a.delpiece){let[c,l]=a.delpiece.split("|"),h=Ks().find(u=>u.id===c);h&&confirm("Remove this piece?")&&(h.pieces=h.pieces.filter(u=>u.id!==l),st(),await cr("piece:"+c+":"+l),kt());return}if(a.delcoll){let c=Ks(),l=c.find(h=>h.id===a.delcoll);if(l&&confirm("Delete this whole collection?")){for(let h of l.pieces)await cr("piece:"+l.id+":"+h.id);ge.collections=c.filter(h=>h.id!==l.id),st(),kt()}return}if(a.delfintype){if(yn().length<=1){alert("Keep at least one finish type.");return}confirm("Delete this finish type?")&&(of(a.delfintype),kt());return}if(a.delfab){if(gi.some(c=>c.id===a.delfab)&&gi.length<=1){alert("Keep at least one fabric.");return}confirm("Delete this fabric?")&&(ff(a.delfab),await cr("fabric:"+a.delfab),kt());return}let o=r.dataset.act;if(o==="close"&&(i.classList.remove("open"),sessionStorage.admOpen="0"),o==="apply"&&(Xc(),kt()),o==="restoredef"&&(delete ge.deleted,st(),kt()),o==="restorefab"&&(delete ge.deletedFabrics,st(),kt()),o==="resetmat"){confirm("Reset all materials and finish settings to default?")&&(pf(),kt());return}if(o==="addfintype"){let c=d=>document.getElementById(d),l=c("nft-name").value.trim();if(!l){alert("Please enter a name for the finish type.");return}let h=(c("nft-target").value.trim()||l).toLowerCase().replace(/[^a-z0-9_-]+/g,"-"),u=h.slice(0,24)||"fin-"+Date.now().toString(36);af({id:u,name:l,target:h}),kt();return}if(o==="addfab"){let c=d=>document.getElementById(d),l=c("nf-name").value.trim();if(!l){alert("Please name the fabric.");return}let h="f-"+l.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,20)+"-"+Date.now().toString(36).slice(-4),u=c("nf-img").files[0];u&&await Ma("fabric:"+h,u),uf({id:h,name:l,type:c("nf-type").value,hex:c("nf-hex").value,desc:c("nf-desc").value.trim()}),kt()}if(o==="addprod"){let c=d=>document.getElementById(d),l=c("np-file").files[0],h=c("np-name").value.trim();if(!h||!l){alert("Please enter a name and choose a GLB model.");return}let u="x-"+h.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,24)+"-"+Date.now().toString(36).slice(-4);await Ma("model:"+u,l),ef({id:u,name:h,cat:c("np-cat").value,sub:c("np-sub").value.trim()||c("np-cat").value,tag:c("np-tag").value.trim(),price:Number(c("np-price").value)||0,mat:c("np-mat").value.trim(),desc:c("np-desc").value.trim(),dims:["np-w","np-d","np-h"].map(d=>Number(c(d).value)||100)}),vl(u,[...document.querySelectorAll("[data-npf]")].filter(d=>d.checked).map(d=>d.value)),kt()}if(o==="addcoll"){let c=document.getElementById("nc-name").value.trim();if(!c){alert("Please name the collection.");return}Ks().push({id:"c"+Date.now().toString(36),name:c,pieces:[]}),st(),kt()}if(o==="expprod"){s.preventDefault(),s.stopPropagation();let c=document.getElementById("repo-pub-status"),l=document.getElementById("repo-pub-progress");if(typeof window.showDirectoryPicker!="function"){await Zs("This browser cannot write to a selected folder. Use current Chrome or Edge, or export the changes another way.");return}let h;try{h=window.showDirectoryPicker({mode:"readwrite"})}catch(u){await Zs(`Could not open the folder picker: ${u.message}`),console.error(u);return}r.disabled=!0,l.hidden=!0,sessionStorage.setItem("repo-pub-running","1"),sessionStorage.removeItem("repo-pub-progress"),c.textContent="Folder picker opened. Select the Studio project folder containing package.json.",sessionStorage.setItem("repo-pub-status",c.textContent);try{let u=await h;Xc(),await vw(u)}catch(u){let d=u.name==="AbortError"?"Folder selection cancelled. No files were written.":`Could not prepare repository changes: ${u.message}`;await Zs(d),sessionStorage.removeItem("repo-pub-running"),console.error(u)}finally{r.disabled=!1}return}if(o==="orders"){let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([localStorage.getItem("dekara-orders")||"[]"],{type:"application/json"})),c.download="demo-orders.json",c.click()}if(o==="clearorders"&&confirm("Clear all demo orders?")&&(localStorage.removeItem("dekara-orders"),kt()),o==="lock"&&(sessionStorage.clear(),location.reload()),o==="export"){let c=document.createElement("a");c.href=URL.createObjectURL(new Blob([JSON.stringify(ge,null,2)],{type:"application/json"})),c.download="dekara-content.json",c.click()}if(o==="import"){let c=document.createElement("input");c.type="file",c.accept=".json",c.onchange=async()=>{try{Kd(JSON.parse(await c.files[0].text())),kt()}catch{alert("That file could not be read.")}},c.click()}o==="reset"&&confirm("Remove all custom text and uploaded files?")&&(await gf(),kt())})}var Ke,Zm,Js,kt,to,eo,dw,fw,pw,mw,gw,Cu,Ru,bw,Jm,no,Qm,gs,yw,xw,eg,Zs,Ks,_w,Xc,ig=ze(()=>{Nn();pn();jc();Ke=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zm=i=>crypto.subtle.digest("SHA-256",new TextEncoder().encode(i)).then(e=>[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")),Js=document.createElement("button");Js.id="adm-trigger";Js.textContent="\u269C";Js.setAttribute("aria-label","Steward access");document.body.append(Js);Js.onclick=async()=>{await uw()&&ng()};addEventListener("keydown",i=>{i.ctrlKey&&i.shiftKey&&i.key.toLowerCase()==="a"&&Js.click()});kt=()=>{sessionStorage.admOpen="1",location.reload()},to=(i,e,t)=>{let n=Sa(e);return`<div class="ar"><b>${Ke(i)}</b><small>${n?"Custom: "+Ke(n.name):"Default"}</small><input type="file" accept="${t}" data-slot="${Ke(e)}">${n?`<button data-del="${Ke(e)}">Remove custom file</button>`:""}</div>`},eo=(i,e,t,n,s="text")=>`<label>${t}${s==="area"?`<textarea rows="4" data-pid="${i}" data-k="${e}">${Ke(n)}</textarea>`:`<input type="${s}" data-pid="${i}" data-k="${e}" value="${Ke(n)}">`}</label>`,dw=()=>{let i=ii(),e=(t,n,s)=>`<label>${n}<input type="text" data-site="${t}" value="${Ke(i[t]||"")}" placeholder="${s}"></label>`;return`<h4>Business details</h4><p class="note">Shown in the footer and contact page. A WhatsApp number adds a floating chat button.</p>${e("phone","Phone","e.g. 010 000 0000")}${e("email","Email","e.g. info@yourdomain.co.za")}${e("whatsapp","WhatsApp number (with country code)","e.g. 27821234567")}<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-site="backlight" ${i.backlight===!1?"":"checked"} style="width:auto"> Backlight on main viewports</label>${e("apiBase","Backend API URL (when your backend is live)","https://your-api.workers.dev")}<label>Backlight strength (%)<input type="number" min="0" max="300" data-site="backlightStrength" value="${i.backlightStrength??100}"></label>`},fw=()=>{let i=Do(),e=[];try{e=JSON.parse(localStorage.getItem("dekara-orders"))||[]}catch{}return`<h4>Basket and checkout</h4><label>Delivery fee (ZAR)<input type="number" min="0" data-sh="delivery" value="${i.delivery}"></label><label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-sh="payNow" ${i.payNow?"checked":""} style="width:auto"> Offer "Pay now" (demo payments)</label>
 <details><summary>Demo orders (${e.length})</summary>${e.slice(0,20).map(t=>`<div class="ar"><b>${Ke(t.ref)}</b><small>${Ke(t.name)} \xB7 ${Ke(String(t.date).slice(0,10))} \xB7 R ${Math.round(t.total).toLocaleString("en-ZA")}</small></div>`).join("")||'<p class="note">No orders yet.</p>'}<div class="acts"><button data-act="orders">Export orders</button><button data-act="clearorders">Clear orders</button></div></details>`},pw=()=>`<h4>Add a piece to the shop</h4><p class="note">Upload a GLB (Draco and Meshopt compression are supported). Dimensions fill in from the model and can be edited. For a live site, export the additions and commit the files to the repo.</p>
 <label>Name<input id="np-name"></label><label>Category<select id="np-cat">${Ps.map(i=>`<option>${i}</option>`).join("")}</select></label><label>Subcategory<input id="np-sub"></label><label>Tagline<input id="np-tag"></label><label>Price (ZAR)<input id="np-price" type="number" min="0"></label><label>Materials<input id="np-mat"></label><label>Description<textarea id="np-desc" rows="3"></textarea></label>
 <label>3D model (.glb)<input type="file" id="np-file" accept=".glb,.gltf"></label><div class="ar"><b>Fabrics for this piece</b>${gi.map(i=>no("data-npf",i.id,i.name,!0)).join("")}</div><label>Width cm<input id="np-w" type="number" min="1"></label><label>Depth cm<input id="np-d" type="number" min="1"></label><label>Height cm<input id="np-h" type="number" min="1"></label>
 <div class="acts"><button data-act="addprod">Add to shop</button></div>`,mw=()=>{let i=No(),e=[["name","Name"],["price","Price (ZAR)"],["w","Width cm"],["d","Depth cm"],["h","Height cm"]];return`<h4>Studio collections</h4><p class="note">Collections of GLB pieces that customers arrange on the Custom Studio canvas, just like the built-in modules. Each piece is stretched to the width, depth and height you set.</p>${i.map(t=>`<details><summary>${Ke(t.name)} (${t.pieces.length})</summary><label>Collection name<input data-cn="${t.id}" value="${Ke(t.name)}"></label>${to("Collection preview image","collection:"+t.id,"image/*")}${t.pieces.map(n=>`<div class="ar"><b>${Ke(n.name)}</b>${e.map(([s,r])=>`<label>${r}<input ${s==="name"?"":'type="number" min="0"'} data-cp="${t.id}|${n.id}|${s}" value="${Ke(n[s])}"></label>`).join("")}<button data-delpiece="${t.id}|${n.id}">Remove piece</button></div>`).join("")}<label>Add pieces (GLB, several allowed)<input type="file" multiple accept=".glb,.gltf" data-addpieces="${t.id}"></label><div class="acts"><button data-delcoll="${t.id}">Delete collection</button></div></details>`).join("")}
 <label>New collection name<input id="nc-name"></label><div class="acts"><button data-act="addcoll">Create collection</button></div>`},gw=()=>{let i=Io(),e={seat:"Seat",corner:"Corner",chaise:"Chaise",ottoman:"Ottoman",arm:"Arm"},t=Oo(),n=yn(),s=(a,o,c)=>`<label>${o}<input type="number" min="0" data-st="${a}" value="${c}"></label>`,r=(a,o,c)=>`<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-st="${a}" ${c?"checked":""} style="width:auto"> ${o}</label>`;return`<h4>Custom Studio</h4><p class="note">Decide how far a customer can take a build, and which fabrics &amp; finishes are offered.</p>${s("maxPieces","Max pieces on canvas",i.maxPieces)}${s("maxWidth","Max overall length (cm)",i.maxWidth)}${s("maxDepth","Max overall depth (cm)",i.maxDepth)}${r("snap","Snap pieces together",i.snap)}
 <details><summary>Modules, prices and maximums</summary>${Object.keys(e).map(a=>`<div class="ar"><b>${e[a]}</b>${r("enabled."+a,"Available to customers",i.enabled[a])}${s("prices."+a,"Price (ZAR)",i.prices[a])}${s("max."+a,"Max of this type",i.max[a])}</div>`).join("")}</details>
 <details><summary>Starter sizes offered</summary>${[1,2,3,4].map(a=>r("presets."+a,a+"-seater",i.presets[a])).join("")}</details>
 <details><summary>Fabrics offered in Studio</summary><div class="ar"><b>Studio fabrics</b>${gi.map(a=>no("data-stfab",a.id,a.name,t.fabrics?t.fabrics.includes(a.id):a.type!=="Wood"&&a.type!=="Metal")).join("")}</div></details>
 <details><summary>Finishes offered in Studio</summary>${n.map(a=>`<div class="ar"><b>${Ke(a.name)} finishes</b>${zi.map(o=>no(`data-stfin="${a.id}|${o.id}"`,o.id,o.name,t.finishes?.[a.id]?t.finishes[a.id].includes(o.id):o.type==="Wood"||o.type==="Metal")).join("")}</div>`).join("")}</details>`},Cu=sessionStorage.getItem("repo-pub-status")||"Ready. Click the button and choose the project folder containing package.json.";sessionStorage.getItem("repo-pub-running")==="1"&&(Cu="Previous preparation was interrupted by a page reload. Check git status and data/site.json before retrying; some files may already have been copied.",sessionStorage.setItem("repo-pub-status",Cu),sessionStorage.removeItem("repo-pub-running"));Ru=JSON.parse(sessionStorage.getItem("repo-pub-progress")||"null"),bw=()=>`<h4>Publish to repo</h4><p class="note">Choose your local project folder to merge admin settings into data/site.json and copy uploaded files into place. Then review, commit and push the staged worktree from your terminal.</p><div class="acts"><button type="button" data-act="expprod">Prepare changes for GitHub</button></div><p class="note" id="repo-pub-status" role="status" aria-live="polite">${Ke(Cu)}</p><progress id="repo-pub-progress" max="${Ru?.max||1}" value="${Ru?.value||0}" ${Ru?.hidden===!1?"":"hidden"} style="width:100%"></progress>`,Jm=["Fabric","Leather","Velvet","Linen","Wood","Stone","Metal","Other"],no=(i,e,t,n)=>`<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem;margin:.3rem 0"><input type="checkbox" ${i} value="${Ke(e)}" ${n?"checked":""} style="width:auto">${Ke(t)}</label>`,Qm=(i,e,t,n)=>`<label>Default ${Ke(e==="fabric"?"fabric":`${yn().find(s=>s.id===e)?.name||"finish"} finish`)}<select data-pdefault="${Ke(i)}|${Ke(e)}">${t.map(s=>`<option value="${Ke(s[2])}"${(n?.[e]||t[0]?.[2])===s[2]?" selected":""}>${Ke(s[0])}</option>`).join("")}</select></label>`,gs=i=>{let e=String(i).replace(/[^a-z0-9_-]/gi,"-").replace(/^-+|-+$/g,"");if(!e)throw new Error("An uploaded file has an invalid ID for its repository path.");return e},yw=(i,e)=>{let t=/\.([a-z0-9]{2,8})$/i.exec(i||"");return t?t[1].toLowerCase():{"image/jpeg":"jpg","image/png":"png","image/webp":"webp","image/gif":"gif","video/mp4":"mp4","video/webm":"webm","model/gltf-binary":"glb","model/gltf+json":"gltf"}[e]||"bin"},xw=(i,e)=>{let t=yw(e.name,e.type),n=i.split(":");return n[0]==="model"&&n[1]?`models/${gs(n[1])}.${t}`:n[0]==="piece"&&n[1]&&n[2]?`models/collections/${gs(n[1])}/${gs(n[2])}.${t}`:n[0]==="collection"&&n[1]?`models/collections/${gs(n[1])}/preview.${t}`:n[0]==="fabric"&&n[1]?`swatches/fabrics/${gs(n[1])}.${t}`:n[0]==="gallery"&&n[1]&&n[2]?`media/products/${gs(n[1])}/gallery-${gs(n[2])}.${t}`:`media/slots/${gs(i)}.${t}`},eg=async(i,e,t)=>{let n=e.split("/");if(n.some(o=>!o||o==="."||o===".."))throw new Error(`Unsafe repository path: ${e}`);let s=i;for(let o of n.slice(0,-1))s=await s.getDirectoryHandle(o,{create:!0});let r=await s.getFileHandle(n[n.length-1],{create:!0}),a=await r.createWritable();try{await a.write(t),await a.close()}catch(o){throw await a.abort(),o}},Zs=async(i,e,t)=>{let n=document.getElementById("repo-pub-status"),s=document.getElementById("repo-pub-progress");n.textContent=i,sessionStorage.setItem("repo-pub-status",i),s.hidden=!(t>0),t>0?(s.max=t,s.value=e,sessionStorage.setItem("repo-pub-progress",JSON.stringify({max:t,value:e,hidden:!1}))):sessionStorage.removeItem("repo-pub-progress"),await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))},Ks=()=>(Array.isArray(ge.collections)||(ge.collections=(dt.collections||[]).map(i=>({...i,pieces:(i.pieces||[]).map(e=>({...e}))}))),ge.collections);_w=()=>{let i=yn();return`<h4>Materials library</h4><p class="note">Add or delete fabrics and finishes customers can choose from. Tick which ones each piece and Custom Studio offer. Assign custom finish types (matching the material name in GLB models).</p>
 <details><summary>Finish types (${i.length})</summary><p class="note">Each finish type matches a named material in GLB models (e.g. "frame", "legs", "base").</p>
 ${i.map(e=>`<div class="ar"><b>${Ke(e.name)}</b><small>Target in GLB: <code>${Ke(e.target||e.name)}</code></small>${e.id!=="fabric"&&i.length>1?`<button data-delfintype="${Ke(e.id)}">Delete this finish type</button>`:""}</div>`).join("")}
 <label>New finish type name<input id="nft-name" placeholder="e.g. Legs or Base"></label><label>GLB material name (target)<input id="nft-target" placeholder="e.g. legs (matches GLB material name)"></label>
 <div class="acts"><button data-act="addfintype">Add finish type</button></div></details>
 <div id="adm-material-list">${zi.map((e,t)=>`<details data-material-id="${Ke(e.id)}"><summary>${Ke(e.name)} (${Ke(e.type||"Fabric")})</summary><div class="acts material-order"><button data-mat-order="up"${t===0?" disabled":""}>Move earlier</button><button data-mat-order="down"${t===zi.length-1?" disabled":""}>Move later</button></div><label>Name<input data-fe="${e.id}|name" value="${Ke(e.name)}"></label><label>Type<select data-fe="${e.id}|type">${Jm.map(n=>`<option${n===e.type?" selected":""}>${n}</option>`).join("")}</select></label><label>Colour<input type="color" data-fe="${e.id}|hex" value="${Ke(e.hex)}"></label><label>Description<textarea rows="3" data-fe="${e.id}|desc">${Ke(e.desc)}</textarea></label>${to("Swatch / texture image","fabric:"+e.id,"image/*")}<div class="acts"><button data-delfab="${e.id}">Delete this material</button></div></details>`).join("")}</div>
 <label>New material name<input id="nf-name"></label><label>Type<select id="nf-type">${Jm.map(e=>`<option>${e}</option>`).join("")}</select></label><label>Colour<input type="color" id="nf-hex" value="#cccccc"></label><label>Description<textarea id="nf-desc" rows="2"></textarea></label><label>Texture image (optional)<input type="file" id="nf-img" accept="image/*"></label>
 <div class="acts"><button data-act="addfab">Add material</button><button data-act="resetmat">Reset materials to default</button></div>`},Xc=()=>{};sessionStorage.adm==="1"&&sessionStorage.admOpen==="1"&&ng();{let i=0,e=0;document.addEventListener("click",t=>{if(!t.target.closest(".ftr .logo"))return;let n=Date.now();i=n-e>2e3?1:i+1,e=n,i>=5&&(i=0,Js.click())})}});var Gi={};Vd(Gi,{add:()=>Hi,clear:()=>er,count:()=>io,list:()=>bi,money:()=>Et,onChange:()=>ro,remove:()=>Iu,setQty:()=>Du,shop:()=>so,summaryText:()=>Sw,toast:()=>Kc,total:()=>Qs,vatOf:()=>Lu});function Kc(i,e="basket.html",t="View basket"){let n=document.getElementById("toast");n||(n=document.createElement("div"),n.id="toast",document.body.append(n)),n.innerHTML="";let s=document.createElement("span");s.textContent=i;let r=document.createElement("a");r.href=e,r.textContent=t,n.append(s,r),n.classList.add("show"),clearTimeout(sg),sg=setTimeout(()=>n.classList.remove("show"),3800)}var Pu,rg,ag,og,Hn,Yc,bi,io,Qs,Et,Lu,so,ro,Iu,Du,er,Sw,sg,Hi,Qn=ze(()=>{Nn();Pu="dekara-basket",rg=new EventTarget,ag=()=>rg.dispatchEvent(new Event("change")),og=()=>{try{return JSON.parse(localStorage.getItem(Pu))||[]}catch{return[]}},Hn=og(),Yc=()=>{try{localStorage.setItem(Pu,JSON.stringify(Hn))}catch{}ag()},bi=()=>Hn,io=()=>Hn.reduce((i,e)=>i+e.qty,0),Qs=()=>Hn.reduce((i,e)=>i+e.price*e.qty,0),Et=i=>"R "+Math.round(i).toLocaleString("en-ZA"),Lu=i=>i*15/115,so=Do,ro=i=>rg.addEventListener("change",i),Iu=i=>{Hn=Hn.filter(e=>e.key!==i),Yc()},Du=(i,e)=>{let t=Hn.find(n=>n.key===i);t&&(t.qty=Math.max(1,Math.min(20,e|0)),Yc())},er=()=>{Hn=[],Yc()},Sw=()=>Hn.map(i=>`${i.qty}\xD7 ${i.name} (${i.desc}) \u2014 ${Et(i.price*i.qty)}`).join(`
`)+`
Total ${Et(Qs())} incl. VAT`;Hi=i=>{let e=Hn.find(t=>t.key===i.key);e?e.qty=Math.min(20,e.qty+1):Hn.push({qty:1,...i}),Yc(),Kc(`${i.name} added to your basket`)};addEventListener("storage",i=>{i.key===Pu&&(Hn=og(),ag())})});async function Ou(){try{ao=new Set(await Uu().wishlist())}catch{ao=new Set}Nu()}async function dg(i){try{ao=new Set(await Uu().toggleWish(i))}catch{}Nu()}var Xt,Gn,cg,lg,Nu,bs,Yt,Mw,ww,Uu,ao,hg,ug,Ew,xt,yi=ze(()=>{Nn();Xt=(i,e)=>{try{return JSON.parse(localStorage.getItem(i))??e}catch{return e}},Gn=(i,e)=>{try{localStorage.setItem(i,JSON.stringify(e))}catch{}},cg=i=>crypto.subtle.digest("SHA-256",new TextEncoder().encode(i)).then(e=>[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")),lg=new EventTarget,Nu=()=>lg.dispatchEvent(new Event("change")),bs=i=>lg.addEventListener("change",i),Yt=()=>Xt("dekara-session",null),Mw={async me(){return Yt()},async register({name:i,email:e,password:t}){e=e.trim().toLowerCase();let n=Xt("dekara-users",[]);if(n.some(r=>r.email===e))throw new Error("An account with that email already exists.");let s={id:"u"+Date.now().toString(36),name:i.trim(),email:e,hash:await cg(t)};return n.push(s),Gn("dekara-users",n),this._in(s)},async login({email:i,password:e}){i=i.trim().toLowerCase();let t=Xt("dekara-users",[]).find(n=>n.email===i);if(!t||t.hash!==await cg(e))throw new Error("Incorrect email or password.");return this._in(t)},_in(i){let e={id:i.id,name:i.name,email:i.email};Gn("dekara-session",e);let t=Xt("dekara-wish-guest",[]);return t.length&&(Gn("dekara-wish-"+e.id,[...new Set([...Xt("dekara-wish-"+e.id,[]),...t])]),localStorage.removeItem("dekara-wish-guest")),e},async logout(){localStorage.removeItem("dekara-session")},async wishlist(){return Xt("dekara-wish-"+(Yt()?.id||"guest"),[])},async toggleWish(i){let e="dekara-wish-"+(Yt()?.id||"guest"),t=Xt(e,[]),n=t.indexOf(i);return n<0?t.push(i):t.splice(n,1),Gn(e,t),t},async reviews(i){return Xt("dekara-reviews",[]).filter(e=>e.pid===i).sort((e,t)=>t.date.localeCompare(e.date))},async addReview(i){let e=Yt();if(!e)throw new Error("Please sign in to write a review.");let t=Xt("dekara-reviews",[]);t.push({id:"r"+Date.now().toString(36),pid:i.pid,rating:i.rating,title:i.title,body:i.body,name:e.name,uid:e.id,date:new Date().toISOString()}),Gn("dekara-reviews",t)},async createOrder(i){let e=Xt("dekara-orders",[]);return e.unshift({...i,uid:Yt()?.id||null}),Gn("dekara-orders",e.slice(0,50)),i},async orders(){let i=Yt();return i?Xt("dekara-orders",[]).filter(e=>e.uid===i.id||e.email===i.email):[]},async designs(){let i=Yt();return i?Xt("dekara-designs-"+i.id,[]):[]},async saveDesign(i){let e=Yt();if(!e)throw new Error("Please sign in (Account page) to save designs.");let t="dekara-designs-"+e.id,n=Xt(t,[]),s={id:"d"+Date.now().toString(36),date:new Date().toISOString(),...i};return n.unshift(s),Gn(t,n.slice(0,30)),s},async deleteDesign(i){let e=Yt();if(e){let t="dekara-designs-"+e.id;Gn(t,Xt(t,[]).filter(n=>n.id!==i))}},async tradeApply(i){let e=Xt("dekara-trade",[]);e.unshift({...i,date:new Date().toISOString()}),Gn("dekara-trade",e)},async contact(i){let e=Xt("dekara-contacts",[]);e.unshift({...i,date:new Date().toISOString()}),Gn("dekara-contacts",e)},async newsletter(i){let e=Xt("dekara-subs",[]);e.includes(i)||e.push(i),Gn("dekara-subs",e)},async orderStatus(){return{status:"paid"}}},ww=i=>{let e=async(n,s,r)=>{let a=localStorage.getItem("dekara-token"),o=await fetch(i+s,{method:n,headers:{"Content-Type":"application/json",...a?{Authorization:"Bearer "+a}:{}},body:r?JSON.stringify(r):void 0});if(!o.ok)throw new Error((await o.json().catch(()=>({}))).message||"Request failed");return o.status===204?null:o.json()},t=async(n,s)=>{let r=await e("POST",n,s);return localStorage.setItem("dekara-token",r.token),Gn("dekara-session",r.user),r.user};return{me:()=>e("GET","/me").catch(()=>null),register:n=>t("/auth/register",n),login:n=>t("/auth/login",n),logout:async()=>{await e("POST","/auth/logout").catch(()=>{}),localStorage.removeItem("dekara-token"),localStorage.removeItem("dekara-session")},wishlist:()=>e("GET","/wishlist"),toggleWish:n=>e("POST","/wishlist/toggle",{productId:n}),reviews:n=>e("GET","/products/"+n+"/reviews"),addReview:n=>e("POST","/products/"+n.pid+"/reviews",n),createOrder:n=>e("POST","/orders",n),orders:()=>e("GET","/orders"),designs:()=>e("GET","/designs"),saveDesign:n=>e("POST","/designs",n),deleteDesign:n=>e("DELETE","/designs/"+n),tradeApply:n=>e("POST","/trade-applications",n),contact:n=>e("POST","/contact",n),newsletter:n=>e("POST","/newsletter",{email:n}),orderStatus:n=>e("GET","/orders/"+encodeURIComponent(n)+"/status")}},Uu=()=>dt.apiBase?ww(dt.apiBase):Mw,ao=new Set,hg=i=>ao.has(i),ug=()=>ao.size;Ew=["register","login","logout","addReview","saveDesign","deleteDesign"],xt=Object.fromEntries(["me","register","login","logout","wishlist","reviews","addReview","createOrder","orders","designs","saveDesign","deleteDesign","tradeApply","contact","newsletter","orderStatus"].map(i=>[i,async(...e)=>{let t=await Uu()[i](...e);return["login","register","logout"].includes(i)&&await Ou(),Ew.includes(i)&&Nu(),t}]))});var Fu,fg,pg,mg,ei,ku,Bu,Zc,zu,Jr,gg,bg,Jc,Qc=ze(()=>{Fu="dekara-compare",fg=new EventTarget,pg=()=>fg.dispatchEvent(new Event("change")),mg=()=>{try{return JSON.parse(localStorage.getItem(Fu))||[]}catch{return[]}},ei=mg(),ku=()=>{try{localStorage.setItem(Fu,JSON.stringify(ei))}catch{}pg()},Bu=3,Zc=()=>ei,zu=i=>ei.includes(i),Jr=i=>fg.addEventListener("change",i),gg=i=>{if(zu(i))ei=ei.filter(e=>e!==i);else{if(ei.length>=Bu)return!1;ei.push(i)}return ku(),!0},bg=i=>{ei=ei.filter(e=>e!==i),ku()},Jc=()=>{ei=[],ku()};addEventListener("storage",i=>{i.key===Fu&&(ei=mg(),pg())})});var Rw={};var tr,_g,Aw,Tw,Sg,el,xg,vg,Hu,Mg,wg,oo,Eg,Ag,Tg=ze(()=>{Nn();ig();Qn();yi();Qc();tr=ii(),_g=[["shop.html","Shop"],["custom-studio.html","Custom Studio"],["fabrics.html","Fabric Library"],["services.html","Services"],["trade.html","For Designers"],["about.html","About"],["contact.html","Contact"]],Aw=[["help.html#faq","FAQ"],["compare.html","Compare pieces"],["help.html#delivery","Delivery fees"],["help.html#guarantee","Guarantee policy"],["help.html#terms","Terms & conditions"]],Tw='<span class="m-sep m-only"></span><a class="m-only" href="index.html">Home</a><a class="m-only" href="account.html" id="acct2">Sign in / Register</a><a class="m-only" href="account.html#saved">Saved items</a><a class="m-only" href="basket.html">Basket</a><a class="m-only" href="compare.html">Compare pieces</a><a class="m-only" href="help.html#faq">Help &amp; FAQ</a>',Sg=location.pathname.split("/").pop()||"index.html",el=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.body.insertAdjacentHTML("afterbegin",`<a class="skip" href="#main">Skip to content</a><div class="notice">Please note: delivery on all items is between 4\u20136 weeks</div><header class="hdr"><a class="logo" href="index.html" data-slot="logo" data-label="Site logo (replaces text)"><span class="lt">Dekara Designs</span></a><nav id="nav" aria-label="Main">${_g.map(([i,e])=>`<a href="${i}"${i===Sg?' class="on"':""}>${e}</a>`).join("")}${Tw}</nav><a class="bk" href="account.html#saved" aria-label="Saved items">\u2661 <b id="wl-n">0</b></a><a class="bk" href="account.html" id="acct">Sign in</a><a class="bk" href="basket.html" aria-label="Basket"><svg class="bki" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg><span class="bk-t">Basket</span> <b id="bk-n">0</b></a><button class="burger" aria-label="Menu"><i></i><i></i></button></header>`);xg=document.querySelector("main");xg&&(xg.id="main");document.body.insertAdjacentHTML("beforeend",`<footer class="ftr"><div class="cols"><div><div class="logo"><span class="lt">Dekara Designs</span></div><p>A premium interior design studio and furniture manufacturer, creating spaces with intimate connections to the people who live in them.</p>
<form id="nl" class="nl"><input type="email" required placeholder="Your email for news and specials" aria-label="Email address"><button class="btn sm" type="submit">Subscribe</button></form><p id="nl-ok" class="nl-ok" hidden>Thank you. (Demo: your email was not stored.)</p></div>
<div><h4>Pages</h4>${_g.map(([i,e])=>`<a href="${i}">${e}</a>`).join("")}</div>
<div><h4>Help</h4>${Aw.map(([i,e])=>`<a href="${i}">${e}</a>`).join("")}<a href="basket.html">Basket</a></div>
<div><h4>Trading hours</h4>Mon\u2013Fri 09h00 \u2013 16h00<br>Sat 09h00 \u2013 14h00<br>Holidays 09h00 \u2013 14h00<br>Sundays closed<h4 style="margin-top:1.2rem">Visit</h4>Our showroom \xB7 Design studio${tr.phone?`<br><a href="tel:${el(tr.phone.replace(/\s/g,""))}">${el(tr.phone)}</a>`:""}${tr.email?`<a href="mailto:${el(tr.email)}">${el(tr.email)}</a>`:""}</div></div><div class="fine">\xA9 ${new Date().getFullYear()} Dekara Designs. Concept demo.</div></footer>`);document.getElementById("nl").onsubmit=async i=>{i.preventDefault();let e=i.target.querySelector("input").value.trim(),t=document.getElementById("nl-ok");try{await xt.newsletter(e),i.target.hidden=!0,t.textContent=dt.apiBase?"Thank you for subscribing.":"Thank you. (Demo: your email was only stored in this browser.)",t.hidden=!1}catch(n){i.target.hidden=!0,t.textContent=n.message||"Could not subscribe. Please try again.",t.hidden=!1}};vg=(tr.whatsapp||"").replace(/\D/g,"");vg&&document.body.insertAdjacentHTML("beforeend",`<a class="wa" href="https://wa.me/${vg}?text=${encodeURIComponent("Hi Dekara Designs, I would like to find out more about your furniture.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">WhatsApp</a>`);!localStorage.getItem("dekara-cookie")&&location.hash!=="#tour"&&(document.body.insertAdjacentHTML("beforeend",'<div class="cookie" role="dialog" aria-label="Cookie notice"><p>We use cookies to remember your basket and improve the site. (Demo notice.)</p><button class="btn sm" data-c="1">Accept</button><button class="btn sm ghost" data-c="0">Decline</button></div>'),document.querySelector(".cookie").onclick=i=>{let e=i.target.closest("[data-c]");if(e){try{localStorage.setItem("dekara-cookie",e.dataset.c)}catch{}i.currentTarget.remove()}});Hu=document.querySelector(".burger");Hu.setAttribute("aria-expanded","false");Hu.onclick=()=>{let i=document.body.classList.toggle("menu");Hu.setAttribute("aria-expanded",String(i))};addEventListener("keydown",i=>{i.key==="Escape"&&document.body.classList.remove("menu")});addEventListener("resize",()=>{innerWidth>960&&document.body.classList.remove("menu")});document.querySelectorAll("#nav a").forEach(i=>i.onclick=()=>document.body.classList.remove("menu"));Mg=()=>{let i=io(),e=document.getElementById("bk-n");e.textContent=i,e.classList.toggle("has",i>0)};Mg();ro(Mg);wg=()=>{document.getElementById("wl-n").textContent=ug();let i=Yt(),e=i?i.name.split(" ")[0]:"Sign in";document.getElementById("acct").textContent=e,document.getElementById("acct2").textContent=i?"My account ("+e+")":"Sign in / Register"};wg();bs(wg);Ou();oo=document.createElement("div");oo.id="cmpbar";document.body.append(oo);Eg=()=>{let i=Zc().length;oo.hidden=!i||Sg==="compare.html",oo.innerHTML=`<span>Compare ${i}/${Bu}</span><a class="btn sm" href="compare.html">Open comparison</a><button class="lnk" id="cmp-x">Clear</button>`,oo.querySelector("#cmp-x").onclick=Jc};Eg();Jr(Eg);window.applySlots=()=>document.querySelectorAll("[data-slot]").forEach(i=>{let e=Sa(i.dataset.slot);if(!e||i.querySelector(":scope>.slot-media"))return;let t=e.type.startsWith("video"),n=document.createElement(t?"video":"img");n.className="slot-media",n.src=e.url,t?(Object.assign(n,{autoplay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata"}),i.hasAttribute("data-bg")||(n.controls=!0)):n.alt="",i.prepend(n)});applySlots();Ag=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),Ag.unobserve(e.target))}),{threshold:.12});window.watchReveals=()=>document.querySelectorAll(".reveal:not(.in)").forEach(i=>Ag.observe(i));watchReveals();if(location.hash==="#tour"){document.body.classList.add("tour");let i=0;(function e(){i+=1.1,scrollTo(0,i),i<document.documentElement.scrollHeight&&requestAnimationFrame(e)})()}});var Rg,Gu,Cg,tl,Pg,Cw,Qr,Vu=ze(()=>{on();Rg={type:"change"},Gu={type:"start"},Cg={type:"end"},tl=new Ui,Pg=new Rn,Cw=Math.cos(70*ds.DEG2RAD),Qr=class extends li{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ie),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rg),n.update(),r=s.NONE},this.update=function(){let C=new P,Q=new sn().setFromUnitVectors(e.up,new P(0,1,0)),ue=Q.clone().invert(),re=new P,Ee=new sn,qe=new P,tt=2*Math.PI;return function(he=null){let I=n.object.position;C.copy(I).sub(n.target),C.applyQuaternion(Q),o.setFromVector3(C),n.autoRotate&&r===s.NONE&&O(S(he)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let oe=n.minAzimuthAngle,ce=n.maxAzimuthAngle;isFinite(oe)&&isFinite(ce)&&(oe<-Math.PI?oe+=tt:oe>Math.PI&&(oe-=tt),ce<-Math.PI?ce+=tt:ce>Math.PI&&(ce-=tt),oe<=ce?o.theta=Math.max(oe,Math.min(ce,o.theta)):o.theta=o.theta>(oe+ce)/2?Math.max(oe,o.theta):Math.min(ce,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=q(o.radius):o.radius=q(o.radius*l),C.setFromSpherical(o),C.applyQuaternion(ue),I.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Ie=!1;if(n.zoomToCursor&&T){let Te=null;if(n.object.isPerspectiveCamera){let it=C.length();Te=q(it*l);let ot=it-Te;n.object.position.addScaledVector(v,ot),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let it=new P(R.x,R.y,0);it.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ie=!0;let ot=new P(R.x,R.y,0);ot.unproject(n.object),n.object.position.sub(ot).add(it),n.object.updateMatrixWorld(),Te=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Te!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Te).add(n.object.position):(tl.origin.copy(n.object.position),tl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(tl.direction))<Cw?e.lookAt(n.target):(Pg.setFromNormalAndCoplanarPoint(n.object.up,n.target),tl.intersectPlane(Pg,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ie=!0);return l=1,T=!1,Ie||re.distanceToSquared(n.object.position)>a||8*(1-Ee.dot(n.object.quaternion))>a||qe.distanceToSquared(n.target)>0?(n.dispatchEvent(Rg),re.copy(n.object.position),Ee.copy(n.object.quaternion),qe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pe),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",_),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",_),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ie),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new qa,c=new qa,l=1,h=new P,u=new Ce,d=new Ce,f=new Ce,m=new Ce,b=new Ce,g=new Ce,p=new Ce,x=new Ce,y=new Ce,v=new P,R=new Ce,T=!1,A=[],D={};function S(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function w(C){let Q=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Q)}function O(C){c.theta-=C}function z(C){c.phi-=C}let Y=function(){let C=new P;return function(ue,re){C.setFromMatrixColumn(re,0),C.multiplyScalar(-ue),h.add(C)}}(),L=function(){let C=new P;return function(ue,re){n.screenSpacePanning===!0?C.setFromMatrixColumn(re,1):(C.setFromMatrixColumn(re,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ue),h.add(C)}}(),N=function(){let C=new P;return function(ue,re){let Ee=n.domElement;if(n.object.isPerspectiveCamera){let qe=n.object.position;C.copy(qe).sub(n.target);let tt=C.length();tt*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*ue*tt/Ee.clientHeight,n.object.matrix),L(2*re*tt/Ee.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(ue*(n.object.right-n.object.left)/n.object.zoom/Ee.clientWidth,n.object.matrix),L(re*(n.object.top-n.object.bottom)/n.object.zoom/Ee.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C,Q){if(!n.zoomToCursor)return;T=!0;let ue=n.domElement.getBoundingClientRect(),re=C-ue.left,Ee=Q-ue.top,qe=ue.width,tt=ue.height;R.x=re/qe*2-1,R.y=-(Ee/tt)*2+1,v.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function K(C){u.set(C.clientX,C.clientY)}function Z(C){j(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function fe(C){m.set(C.clientX,C.clientY)}function V(C){d.set(C.clientX,C.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let Q=n.domElement;O(2*Math.PI*f.x/Q.clientHeight),z(2*Math.PI*f.y/Q.clientHeight),u.copy(d),n.update()}function X(C){x.set(C.clientX,C.clientY),y.subVectors(x,p),y.y>0?H(w(y.y)):y.y<0&&$(w(y.y)),p.copy(x),n.update()}function se(C){b.set(C.clientX,C.clientY),g.subVectors(b,m).multiplyScalar(n.panSpeed),N(g.x,g.y),m.copy(b),n.update()}function ve(C){j(C.clientX,C.clientY),C.deltaY<0?$(w(C.deltaY)):C.deltaY>0&&H(w(C.deltaY)),n.update()}function xe(C){let Q=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),Q=!0;break}Q&&(C.preventDefault(),n.update())}function Pe(C){if(A.length===1)u.set(C.pageX,C.pageY);else{let Q=et(C),ue=.5*(C.pageX+Q.x),re=.5*(C.pageY+Q.y);u.set(ue,re)}}function te(C){if(A.length===1)m.set(C.pageX,C.pageY);else{let Q=et(C),ue=.5*(C.pageX+Q.x),re=.5*(C.pageY+Q.y);m.set(ue,re)}}function ae(C){let Q=et(C),ue=C.pageX-Q.x,re=C.pageY-Q.y,Ee=Math.sqrt(ue*ue+re*re);p.set(0,Ee)}function Se(C){n.enableZoom&&ae(C),n.enablePan&&te(C)}function U(C){n.enableZoom&&ae(C),n.enableRotate&&Pe(C)}function Ct(C){if(A.length==1)d.set(C.pageX,C.pageY);else{let ue=et(C),re=.5*(C.pageX+ue.x),Ee=.5*(C.pageY+ue.y);d.set(re,Ee)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let Q=n.domElement;O(2*Math.PI*f.x/Q.clientHeight),z(2*Math.PI*f.y/Q.clientHeight),u.copy(d)}function me(C){if(A.length===1)b.set(C.pageX,C.pageY);else{let Q=et(C),ue=.5*(C.pageX+Q.x),re=.5*(C.pageY+Q.y);b.set(ue,re)}g.subVectors(b,m).multiplyScalar(n.panSpeed),N(g.x,g.y),m.copy(b)}function Ae(C){let Q=et(C),ue=C.pageX-Q.x,re=C.pageY-Q.y,Ee=Math.sqrt(ue*ue+re*re);x.set(0,Ee),y.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),H(y.y),p.copy(x);let qe=(C.pageX+Q.x)*.5,tt=(C.pageY+Q.y)*.5;j(qe,tt)}function ye(C){n.enableZoom&&Ae(C),n.enablePan&&me(C)}function ut(C){n.enableZoom&&Ae(C),n.enableRotate&&Ct(C)}function Ue(C){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",_)),Le(C),C.pointerType==="touch"?_e(C):k(C))}function E(C){n.enabled!==!1&&(C.pointerType==="touch"?le(C):ne(C))}function _(C){Fe(C),A.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",_)),n.dispatchEvent(Cg),r=s.NONE}function k(C){let Q;switch(C.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case $s.DOLLY:if(n.enableZoom===!1)return;Z(C),r=s.DOLLY;break;case $s.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;fe(C),r=s.PAN}else{if(n.enableRotate===!1)return;K(C),r=s.ROTATE}break;case $s.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;K(C),r=s.ROTATE}else{if(n.enablePan===!1)return;fe(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Gu)}function ne(C){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(C);break;case s.DOLLY:if(n.enableZoom===!1)return;X(C);break;case s.PAN:if(n.enablePan===!1)return;se(C);break}}function ee(C){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(C.preventDefault(),n.dispatchEvent(Gu),ve(C),n.dispatchEvent(Cg))}function ie(C){n.enabled===!1||n.enablePan===!1||xe(C)}function _e(C){switch(J(C),A.length){case 1:switch(n.touches.ONE){case qs.ROTATE:if(n.enableRotate===!1)return;Pe(C),r=s.TOUCH_ROTATE;break;case qs.PAN:if(n.enablePan===!1)return;te(C),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case qs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(C),r=s.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(C),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Gu)}function le(C){switch(J(C),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ct(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;me(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ut(C),n.update();break;default:r=s.NONE}}function pe(C){n.enabled!==!1&&C.preventDefault()}function Le(C){A.push(C.pointerId)}function Fe(C){delete D[C.pointerId];for(let Q=0;Q<A.length;Q++)if(A[Q]==C.pointerId){A.splice(Q,1);return}}function J(C){let Q=D[C.pointerId];Q===void 0&&(Q=new Ce,D[C.pointerId]=Q),Q.set(C.pageX,C.pageY)}function et(C){let Q=C.pointerId===A[0]?A[1]:A[0];return D[Q]}n.domElement.addEventListener("contextmenu",pe),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",_),n.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}});function ea(i){let e=new rn;return e.color.setScalar(i),e}var nr,Wu=ze(()=>{on();nr=class extends Sn{constructor(e=null){super();let t=new Oi;t.deleteAttribute("uv");let n=new jt({side:nn}),s=new jt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new hs(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new He(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new He(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new He(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new He(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new He(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new He(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new He(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let m=new He(t,ea(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let b=new He(t,ea(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);let g=new He(t,ea(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let p=new He(t,ea(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let x=new He(t,ea(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);let y=new He(t,ea(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});function ys(i,e,{orbit:t=!1,spin:n=.35,scroll:s=!1}={}){let r=new hi({canvas:i,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(devicePixelRatio,2)),r.toneMapping=Xa,r.toneMappingExposure=1.1,r.shadowMap.enabled=!0,r.shadowMap.type=ja;let a=new Sn;a.environment=new Fi(r).fromScene(new nr,.04).texture;let o=new vt(32,1,.1,100),c=new P(5,2.8,6.5),l=new P(0,.9,0);o.position.copy(c);let h=ii(),u=h.backlight===!1?0:(h.backlightStrength??100)/100,d=new fi(16777215,2.4);d.position.set(3,6,4),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),Object.assign(d.shadow.camera,{left:-4,right:4,top:4,bottom:-4}),a.add(d);let f=new hs(16773596,12*u,12);f.position.set(-3,1.5,-3),a.add(f);let m=new fi(16774374,3.2*u);m.position.set(-2,3.5,-5),a.add(m);let b=new He(new Wr(5,64),new qr({opacity:.22}));b.rotation.x=-Math.PI/2,b.receiveShadow=!0,a.add(b);let g=new He(new $r(2.3,2.33,128),new rn({color:10254925,transparent:!0,opacity:.35,side:2}));g.rotation.x=-Math.PI/2,g.position.y=.005,a.add(g);let p;t&&(p=new Qr(o,i),p.target.copy(l),p.enableDamping=!0,p.enablePan=!1,p.minDistance=4,p.maxDistance=12,p.maxPolarAngle=Math.PI*.49);let x,y=0,v,R=1,T=[1,1,1],A=!1,D=null,S=te=>{v=te,D=null,x.userData.tints.forEach(ae=>{ae.map=null,ae.color.set(te),ae.needsUpdate=!0})},w=[],O=()=>{w=x.userData.tints.map(te=>({m:te,c:te.color.clone(),map:te.map}))},z=()=>{w.forEach(({m:te,c:ae,map:Se})=>{te.userData.fabTok=-1,te.map&&te.map!==Se&&te.map.dispose(),te.map=Se,te.color.copy(ae),te.needsUpdate=!0})},Y=()=>{D&&fs(x.userData.tints,D.f,D.m)},L=(te,ae)=>{te&&(D={f:te,m:ae},Y())},N={},H=()=>{!x||!x.userData||Object.entries(N).forEach(([te,ae])=>{let Se=x.userData.finMap?.[te]||(te==="frame"?x.userData.frames:null);!Se||!Se.length||(typeof ae.mat=="string"?Se.forEach(U=>{U.map=null,U.color.set(ae.mat),U.needsUpdate=!0}):Array.isArray(ae.mat)&&fs(Se,ae.mat,ae.m))})},$=(te,ae,Se=pi)=>{let U=(te||"frame").toLowerCase().trim();N[U]={mat:ae,m:Se},H()},j=te=>{$("frame",te)},q=te=>{R=te,x.userData.glows.forEach(ae=>ae.emissiveIntensity=te*3),f.intensity=12*te*u};function K(te){D=null,w=[],x&&a.remove(x);let ae=pt.find(me=>me.id===te),Se=ae?.fabrics||[],U=Se.find(me=>me[2]===ae?.defaults?.fabric)||Se[0];v=U?.[1]||"#d4cabb";let Ct=Mi("model:"+te)||dt.models?.[te];Ct?(x=new gt,x.userData={tints:[],glows:[],frames:[],finMap:{}},Qa(Ct).then(me=>{let Ae=me.scene,ye=new wt().setFromObject(Ae),ut=ye.getSize(new P),Ue=ye.getCenter(new P),E=2.6/Math.max(ut.x,ut.y,ut.z);Ae.scale.setScalar(E),Ae.position.set(-Ue.x*E,-ye.min.y*E,-Ue.z*E);let _=[],k=[],ne=[],ee={},ie=yn?yn():[{id:"frame",name:"Frame",target:"frame"}],_e=new Set(ie.map(le=>(le.target||le.name||"").toLowerCase().trim()));_e.add("frame"),Ae.traverse(le=>{le.isMesh&&(le.castShadow=le.receiveShadow=!0,[].concat(le.material).forEach(pe=>{let Le=(pe.name||"").toLowerCase().trim(),Fe=!1;_e.forEach(J=>{J&&Le===J&&((ee[J]??=[]).push(pe),J==="frame"&&ne.push(pe),Fe=!0)}),!Fe&&(pe.transparent&&pe.opacity<1||(k.push(pe),Le==="tint"&&_.push(pe)))}))}),x.userData.tints.push(..._.length?_:k),x.userData.frames.push(...ne),x.userData.finMap=ee,x.add(Ae),O(),H(),Y(),U&&L(U,Bn(te,U[2],"fabric"))}).catch(()=>x.add(Kh(te,v)))):x=Kh(te,v),a.add(x),y=0,q(R),O(),H(),Y(),Object.keys(N).forEach(me=>delete N[me]),ae?.finishTypes?.forEach(me=>{let Ae=me.finishes.find(ye=>ye[2]===ae.defaults?.[me.id])||me.finishes[0];Ae&&$(me.target||me.name,Ae,Bn(te,Ae[2],me.id))}),U&&L(U,Bn(te,U[2],"fabric"))}K(e);let Z=()=>{let te=i.parentElement,ae=te.clientWidth||1,Se=te.clientHeight||1;r.setSize(ae,Se,!1),o.aspect=ae/Se,o.updateProjectionMatrix()},fe=new ResizeObserver(Z);fe.observe(i.parentElement);let V=!0,X=new IntersectionObserver(te=>V=te[0].isIntersecting);X.observe(i);let se={x:0,y:0},ve=te=>{se.x=te.clientX/innerWidth-.5,se.y=te.clientY/innerHeight-.5};addEventListener("pointermove",ve);let xe=0,Pe=performance.now();return function te(ae){if(A)return;requestAnimationFrame(te);let Se=Math.min((ae-Pe)/1e3,.05);if(Pe=ae,!!V){xe+=Se,y=Math.min(1,y+Se*1.5);{let U=.001+(1-Math.pow(1-y,3))*.999;x.scale.set(T[0]*U,T[1]*U,T[2]*U)}t?p.update():(x.rotation.y=.6+xe*n+(s?scrollY*.003:0)+se.x*.9,o.position.set(c.x,c.y-se.y*.8,c.z+(s?scrollY*.002:0)),o.lookAt(l)),r.render(a,o)}}(Pe),{destroy(){A=!0,fe.disconnect(),X.disconnect(),removeEventListener("pointermove",ve),r.dispose(),r.forceContextLoss&&r.forceContextLoss()},getModel:()=>({object:x,dim:T}),setId:K,setColour:S,setFabric:L,setFrame:j,setFinish:$,setGlow:q,setDims:(te,ae,Se)=>{T=[te,ae,Se]}}}var co=ze(()=>{on();Vu();Wu();jc();Xs();Nn();pn()});var Pw={};var Lg,Ig=ze(()=>{pn();co();Lg=document.getElementById("hero-canvas");if(!Jn.length)Lg.closest(".stage")?.remove();else{let i=ys(Lg,Jn[0].id,{scroll:!1,spin:.15}),e=document.getElementById("hero-switch"),t=document.getElementById("hero-info");e.innerHTML=Jn.map((o,c)=>`<button class="pill${c?"":" on"}" data-i="${c}"></button>`).join(""),e.querySelectorAll(".pill").forEach((o,c)=>o.textContent=Jn[c].name.split(" ").pop());let n=o=>{t.replaceChildren();let c=document.createElement("b");c.textContent=o.name;let l=document.createElement("a");l.href="product.html?id="+encodeURIComponent(o.id),l.textContent="Customise in 3D",t.append(c,` \u2014 ${o.tag}. R ${Number(o.price).toLocaleString("en-ZA")} \xB7 `,l)};n(Jn[0]);let s=0,r,a=o=>{s=o,i.setId(Jn[o].id),n(Jn[o]),e.querySelectorAll(".pill").forEach((c,l)=>c.classList.toggle("on",l===o))};e.onclick=o=>{let c=o.target.closest(".pill");c&&(a(+c.dataset.i),clearInterval(r))},r=setInterval(()=>a((s+1)%Jn.length),7e3)}});var Og={};Vd(Og,{cardHtml:()=>Vi,mount:()=>Wi,release:()=>lo});var xs,Dg,Vi,Ng,Ug,Wi,lo,ta=ze(()=>{co();pn();Qc();Qn();yi();xs=new Map,Dg=new IntersectionObserver(i=>i.forEach(e=>{let t=e.target,n=t.querySelector(".stage");e.isIntersecting&&!xs.has(t)?(n.innerHTML="<canvas></canvas>",xs.set(t,ys(n.firstChild,t.dataset.id,{spin:.5}))):!e.isIntersecting&&xs.has(t)&&(xs.get(t).destroy(),xs.delete(t),n.innerHTML="")}),{rootMargin:"250px"}),Vi=(i,e)=>`<a class="card${e?" reveal":""}" data-id="${i.id}" href="product.html?id=${i.id}"><button class="heart" data-wish="${i.id}" aria-label="Save to wishlist" aria-pressed="false">\u2661</button><div class="stage"></div><div class="meta"><div><h3>${i.name}</h3><p>${i.cat} \xB7 ${i.tag}</p></div><span>R ${Number(i.price).toLocaleString("en-ZA")}</span></div><div class="acts2"><button class="qadd" data-add="${i.id}">+ Add to basket</button><button class="cmpb" data-cmp="${i.id}">Compare</button></div></a>`;document.addEventListener("click",i=>{let e=i.target.closest(".qadd");if(!e)return;i.preventDefault(),i.stopPropagation();let t=pt.find(a=>a.id===e.dataset.add);if(!t)return;let n=t.fabrics?.find(a=>a[2]===t.defaults?.fabric)||t.fabrics?.[0]||Pn[0],r=t.finishTypes.map(a=>a.finishes.find(o=>o[2]===t.defaults?.[a.id])||a.finishes[0]).filter(Boolean).map(a=>a[0]).join(", ")||kn[0][0];Hi({key:`p:${t.id}:${n[0]}:${r}:${t.dims.join("x")}`,name:t.name,desc:`${n[0]} \xB7 ${r} \xB7 ${t.dims.join(" \xD7 ")} cm`,price:Math.round(t.price/10)*10,swatch:n[1]})});Ng=()=>document.querySelectorAll("[data-wish]").forEach(i=>{let e=hg(i.dataset.wish);i.classList.toggle("on",e),i.setAttribute("aria-pressed",e),i.textContent=i.dataset.label?e?"\u2665 Saved":"\u2661 Save to wishlist":e?"\u2665":"\u2661"});bs(Ng);Ug=()=>document.querySelectorAll("[data-cmp]").forEach(i=>{let e=zu(i.dataset.cmp);i.classList.toggle("on",e),i.textContent=e?"\u2713 Comparing":"Compare"});Jr(Ug);document.addEventListener("click",i=>{let e=i.target.closest("[data-cmp]");e&&(i.preventDefault(),i.stopPropagation(),gg(e.dataset.cmp)||Kc("You can compare up to 3 pieces at a time","compare.html","Open comparison"))});document.addEventListener("click",i=>{let e=i.target.closest("[data-wish]");e&&(i.preventDefault(),i.stopPropagation(),dg(e.dataset.wish))});Wi=i=>{Dg.observe(i),queueMicrotask(Ng),queueMicrotask(Ug)},lo=i=>i.querySelectorAll(".card").forEach(e=>{Dg.unobserve(e),xs.has(e)&&(xs.get(e).destroy(),xs.delete(e))})});var Lw={};var $u,Fg,kg=ze(()=>{pn();ta();$u=document.querySelector("[data-cards]"),Fg=$u.dataset.limit?Jn:pt;$u.innerHTML=Fg.length?Fg.map(i=>Vi(i,!0)).join(""):'<p class="st-note">No pieces to show yet.</p>';$u.querySelectorAll(".card").forEach(Wi);window.watchReveals&&watchReveals()});function ia(i,e=1/0,t=null){qu||(qu=new Vs(2,2,1,1)),na||(na=new Xn({uniforms:{blitTexture:new Fc(i)},vertexShader:`
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
			}`})),na.uniforms.blitTexture.value=i,na.defines.IS_SRGB=i.colorSpace==rt,na.needsUpdate=!0,nl||(nl=new He(qu,na),nl.frustrumCulled=!1);let n=new vt,s=new Sn;s.add(nl),t===null&&(t=ho=new hi({antialias:!1}));let r=Math.min(i.image.width,e),a=Math.min(i.image.height,e);t.setSize(r,a),t.clear(),t.render(s,n);let o=document.createElement("canvas"),c=o.getContext("2d");o.width=r,o.height=a,c.drawImage(t.domElement,0,0,r,a);let l=new Vr(o);return l.minFilter=i.minFilter,l.magFilter=i.magFilter,l.wrapS=i.wrapS,l.wrapT=i.wrapT,l.name=i.name,ho&&(ho.forceContextLoss(),ho.dispose(),ho=null),l}var ho,qu,na,nl,ju=ze(()=>{on()});function uo(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function Fw(i){return new TextEncoder().encode(i).buffer}function kw(i){return uo(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Bw(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let a;i.itemSize>4?a=i.array[s*i.itemSize+r]:(r===0?a=i.getX(s):r===1?a=i.getY(s):r===2?a=i.getZ(s):r===3&&(a=i.getW(s)),i.normalized===!0&&(a=ds.normalize(a,i.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function $g(i){return Math.ceil(i/4)*4}function Yu(i,e=0){let t=$g(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function Vg(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Wg(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}var Bg,sa,Ze,Xu,Ln,zg,Iw,Hg,Dw,Nw,Gg,Uw,Ow,Ku,Zu,Ju,Qu,ed,td,nd,id,sd,rd,ad,od,cd,ld,qg=ze(()=>{on();ju();Bg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},sa=class{constructor(){this.pluginCallbacks=[],this.register(function(e){return new Zu(e)}),this.register(function(e){return new Ju(e)}),this.register(function(e){return new td(e)}),this.register(function(e){return new nd(e)}),this.register(function(e){return new id(e)}),this.register(function(e){return new sd(e)}),this.register(function(e){return new Qu(e)}),this.register(function(e){return new ed(e)}),this.register(function(e){return new rd(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new cd(e)}),this.register(function(e){return new ld(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r=new Ku,a=[];for(let o=0,c=this.pluginCallbacks.length;o<c;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.write(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},Ze={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Xu="KHR_mesh_quantization",Ln={};Ln[Lt]=Ze.NEAREST;Ln[Nr]=Ze.NEAREST_MIPMAP_NEAREST;Ln[ks]=Ze.NEAREST_MIPMAP_LINEAR;Ln[Wt]=Ze.LINEAR;Ln[Ya]=Ze.LINEAR_MIPMAP_NEAREST;Ln[ci]=Ze.LINEAR_MIPMAP_LINEAR;Ln[fn]=Ze.CLAMP_TO_EDGE;Ln[jn]=Ze.REPEAT;Ln[Gs]=Ze.MIRRORED_REPEAT;zg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Iw=new Me,Hg=12,Dw=1179937895,Nw=2,Gg=8,Uw=1313821514,Ow=5130562;Ku=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);let s=this,r=s.buffers,a=s.json;n=s.options;let o=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(c);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=l.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let f=Yu(d.result),m=new DataView(new ArrayBuffer(Gg));m.setUint32(0,f.byteLength,!0),m.setUint32(4,Ow,!0);let b=Yu(Fw(JSON.stringify(a)),32),g=new DataView(new ArrayBuffer(Gg));g.setUint32(0,b.byteLength,!0),g.setUint32(4,Uw,!0);let p=new ArrayBuffer(Hg),x=new DataView(p);x.setUint32(0,Dw,!0),x.setUint32(4,Nw,!0);let y=Hg+g.byteLength+b.byteLength+m.byteLength+f.byteLength;x.setUint32(8,y,!0);let v=new Blob([p,g,b,m,f],{type:"application/octet-stream"}),R=new FileReader;R.readAsArrayBuffer(v),R.onloadend=function(){t(R.result)}}}else if(a.buffers&&a.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let f=d.result;a.buffers[0].uri=f,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],s[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new P;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new P;for(let r=0,a=n.count;r<a;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(f){return f.colorSpace===rt?function(b){return b<.04045?b*.0773993808:Math.pow(b*.9478672986+.0521327014,2.4)}:function(b){return b}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof Gr&&(e=ia(e)),t instanceof Gr&&(t=ia(t));let s=e?e.image:null,r=t?t.image:null,a=Math.max(s?s.width:0,r?r.width:0),o=Math.max(s?s.height:0,r?r.height:0),c=Vg();c.width=a,c.height=o;let l=c.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,a,o);let h=l.getImageData(0,0,a,o);if(s){l.drawImage(s,0,0,a,o);let f=n(e),m=l.getImageData(0,0,a,o).data;for(let b=2;b<m.length;b+=4)h.data[b]=f(m[b]/256)*256}if(r){l.drawImage(r,0,0,a,o);let f=n(t),m=l.getImageData(0,0,a,o).data;for(let b=1;b<m.length;b+=4)h.data[b]=f(m[b]/256)*256}l.putImageData(h,0,0);let d=(e||t).clone();return d.source=new Fr(c),d.colorSpace=tn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case Ze.BYTE:case Ze.UNSIGNED_BYTE:o=1;break;case Ze.SHORT:case Ze.UNSIGNED_SHORT:o=2;break;default:o=4}let c=$g(s*e.itemSize*o),l=new DataView(new ArrayBuffer(c)),h=0;for(let f=n;f<n+s;f++)for(let m=0;m<e.itemSize;m++){let b;e.itemSize>4?b=e.array[f*e.itemSize+m]:(m===0?b=e.getX(f):m===1?b=e.getY(f):m===2?b=e.getZ(f):m===3&&(b=e.getW(f)),e.normalized===!0&&(b=ds.normalize(b,e.array))),t===Ze.FLOAT?l.setFloat32(h,b,!0):t===Ze.INT?l.setInt32(h,b,!0):t===Ze.UNSIGNED_INT?l.setUint32(h,b,!0):t===Ze.SHORT?l.setInt16(h,b,!0):t===Ze.UNSIGNED_SHORT?l.setUint16(h,b,!0):t===Ze.BYTE?l.setInt8(h,b):t===Ze.UNSIGNED_BYTE&&l.setUint8(h,b),h+=o}let u={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===Ze.ARRAY_BUFFER&&(u.byteStride=e.itemSize*o),this.byteOffset+=c,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let a=Yu(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,s(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,s){let r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=Ze.FLOAT;else if(e.array.constructor===Int32Array)o=Ze.INT;else if(e.array.constructor===Uint32Array)o=Ze.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=Ze.SHORT;else if(e.array.constructor===Uint16Array)o=Ze.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=Ze.BYTE;else if(e.array.constructor===Uint8Array)o=Ze.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let c=Bw(e,n,s),l;t!==void 0&&(l=e===t.index?Ze.ELEMENT_ARRAY_BUFFER:Ze.ARRAY_BUFFER);let h=this.processBufferView(e,o,n,s,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:s,max:c.max,min:c.min,type:a[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,a=r.cache,o=r.json,c=r.options,l=r.pending;a.images.has(e)||a.images.set(e,{});let h=a.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);let d={mimeType:s},f=Vg();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);let m=f.getContext("2d");if(n===!0&&(m.translate(0,f.height),m.scale(1,-1)),e.data!==void 0){t!==vn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let g=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<g.length;p+=4)g[p+0]=e.data[p+0],g[p+1]=e.data[p+1],g[p+2]=e.data[p+2],g[p+3]=e.data[p+3];m.putImageData(new ImageData(g,e.width,e.height),0,0)}else m.drawImage(e,0,0,f.width,f.height);c.binary===!0?l.push(Wg(f,s).then(g=>r.processBufferViewImage(g)).then(g=>{d.bufferView=g})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):l.push(Wg(f,s).then(g=>new FileReader().readAsDataURL(g)).then(g=>{d.uri=g}));let b=o.images.push(d)-1;return h[u]=b,b}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Ln[e.magFilter],minFilter:Ln[e.minFilter],wrapS:Ln[e.wrapS],wrapT:Ln[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Gr&&(e=ia(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");let o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,o)});let c=r.textures.push(o)-1;return s.textures.set(e,c),c}processMaterial(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(uo(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=.5,s.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){let o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),c={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(c,o),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){let o={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),s.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){let o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),s.emissiveTexture=l}}if(e.normalMap){let o={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),s.normalTexture=o}if(e.aoMap){let o={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),s.occlusionTexture=o}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===qt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,s)});let a=n.materials.push(s)-1;return t.materials.set(e,a),a}processMesh(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let v=0,R=e.material.length;v<R;v++)s.push(e.material[v].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let a=e.geometry,o;e.isLineSegments?o=Ze.LINES:e.isLineLoop?o=Ze.LINE_LOOP:e.isLine?o=Ze.LINE_STRIP:e.isPoints?o=Ze.POINTS:o=e.material.wireframe?Ze.LINES:Ze.TRIANGLES;let c={},l={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let m=null;for(let v in a.attributes){if(v.slice(0,5)==="morph")continue;let R=a.attributes[v];if(v=d[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),t.attributes.has(this.getUID(R))){l[v]=t.attributes.get(this.getUID(R));continue}m=null;let A=R.array;v==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new at(new Uint16Array(A),R.itemSize,R.normalized));let D=this.processAccessor(m||R,a);D!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,R),l[v]=D,t.attributes.set(this.getUID(R),D))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let v=[],R=[],T={};if(e.morphTargetDictionary!==void 0)for(let A in e.morphTargetDictionary)T[e.morphTargetDictionary[A]]=A;for(let A=0;A<e.morphTargetInfluences.length;++A){let D={},S=!1;for(let w in a.morphAttributes){if(w!=="position"&&w!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}let O=a.morphAttributes[w][A],z=w.toUpperCase(),Y=a.attributes[w];if(t.attributes.has(this.getUID(O,!0))){D[z]=t.attributes.get(this.getUID(O,!0));continue}let L=O.clone();if(!a.morphTargetsRelative)for(let N=0,H=O.count;N<H;N++)for(let $=0;$<O.itemSize;$++)$===0&&L.setX(N,O.getX(N)-Y.getX(N)),$===1&&L.setY(N,O.getY(N)-Y.getY(N)),$===2&&L.setZ(N,O.getZ(N)-Y.getZ(N)),$===3&&L.setW(N,O.getW(N)-Y.getW(N));D[z]=this.processAccessor(L,a),t.attributes.set(this.getUID(Y,!0),D[z])}u.push(D),v.push(e.morphTargetInfluences[A]),e.morphTargetDictionary!==void 0&&R.push(T[A])}c.weights=v,R.length>0&&(c.extras={},c.extras.targetNames=R)}let b=Array.isArray(e.material);if(b&&a.groups.length===0)return null;let g=!1;if(b&&a.index===null){let v=[];for(let R=0,T=a.attributes.position.count;R<T;R++)v[R]=R;a.setIndex(v),g=!0}let p=b?e.material:[e.material],x=b?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,R=x.length;v<R;v++){let T={mode:o,attributes:l};if(this.serializeUserData(a,T),u.length>0&&(T.targets=u),a.index!==null){let D=this.getUID(a.index);(x[v].start!==void 0||x[v].count!==void 0)&&(D+=":"+x[v].start+":"+x[v].count),t.attributes.has(D)?T.indices=t.attributes.get(D):(T.indices=this.processAccessor(a.index,a,x[v].start,x[v].count),t.attributes.set(D,T.indices)),T.indices===null&&delete T.indices}let A=this.processMaterial(p[x[v].materialIndex]);A!==null&&(T.material=A),h.push(T)}g===!0&&a.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(v){v.writeMesh&&v.writeMesh(e,c)});let y=n.meshes.push(c)-1;return t.meshes.set(r,y),y}detectMeshQuantization(e,t){if(this.extensionsUsed[Xu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Bg[s]&&Bg[s].includes(n)&&(this.extensionsUsed[Xu]=!0,this.extensionsRequired[Xu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ds.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=sa.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){let l=r[c],h=ct.parseTrackName(l.name),u=ct.findNode(t,h.nodeName),d=zg[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name),null;let f=1,m=l.values.length/l.times.length;d===zg.morphTargetInfluences&&(m/=u.morphTargetInfluences.length);let b;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(b="CUBICSPLINE",m/=3):l.getInterpolation()===rs?b="STEP":b="LINEAR",o.push({input:this.processAccessor(new at(l.times,f)),output:this.processAccessor(new at(l.values,m)),interpolation:b}),a.push({sampler:o.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let a=e.skeleton.bones[0];if(a===void 0)return null;let o=[],c=new Float32Array(r.bones.length*16),l=new Ge;for(let u=0;u<r.bones.length;++u)o.push(n.get(r.bones[u])),l.copy(r.boneInverses[u]),l.multiply(e.bindMatrix).toArray(c,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new at(c,16)),joints:o,skeleton:n.get(a)}),s.skin=t.skins.length-1}processNode(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let o=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();uo(o,[0,0,0,1])||(r.rotation=o),uo(c,[0,0,0])||(r.translation=c),uo(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),kw(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let o=this.processMesh(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){let o=[];for(let c=0,l=e.children.length;c<l;c++){let h=e.children[c];if(h.visible||n.onlyVisible===!1){let u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,r)});let a=t.nodes.push(r)-1;return s.set(e,a),a}processScene(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let a=0,o=e.children.length;a<o;a++){let c=e.children[a];if(c.visible||n.onlyVisible===!1){let l=this.processNode(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}processObjects(e){let t=new Sn;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){let t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof Sn?this.processScene(e[s]):n.push(e[s]);n.length>0&&this.processObjects(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);this._invokeAll(function(s){s.afterParse&&s.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}},Zu=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let o=s.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}},Ju=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Qu=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let a={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let a={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){let a={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ed=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let a={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let a={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},td=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let a={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},nd=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let a={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},id=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},sd=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Iw)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let a={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){let a={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},rd=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let a={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){let a={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ad=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let a={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},od=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},cd=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let a={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ld=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),a=new Float32Array(s.count*4),o=new Float32Array(s.count*3),c=new Ge,l=new P,h=new sn,u=new P;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,h,u),l.toArray(r,f*3),h.toArray(a,f*4),u.toArray(o,f*3);let d={TRANSLATION:n.processAccessor(new at(r,3)),ROTATION:n.processAccessor(new at(a,4)),SCALE:n.processAccessor(new at(o,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};sa.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n)),o;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;o=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(a.evaluate(e),0),r.set(i.values,n),o=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(a.evaluate(e),i.values.length),o=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(a.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),o=c+1;break}}return i.times=s,i.values=r,o},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let a=s[r],o=ct.parseTrackName(a.name),c=ct.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Di)}let l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[c.uuid]===void 0){u=a.clone();let f=new u.ValueBufferType(l*u.times.length);for(let m=0;m<u.times.length;m++)f[m*l+h]=u.values[m];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=f,n[c.uuid]=u,t.push(u);continue}let d=a.createInterpolant(new a.ValueBufferType(1));u=n[c.uuid];for(let f=0;f<u.times.length;f++)u.values[f*l+h]=d.evaluate(u.times[f]);for(let f=0;f<a.times.length;f++){let m=this.insertKeyframe(u,a.times[f]);u.values[m*l+h]=a.values[f]}}return i.tracks=t,i}}});function Yw(i,e){return Xw(i,e||{},0,0)}function go(i,e){if(e){for(var t=new gn(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Jg)return Jg.encode(i);for(var s=i.length,r=new gn(i.length+(i.length>>1)),a=0,o=function(h){r[a++]=h},n=0;n<s;++n){if(a+5>r.length){var c=new gn(a+8+(s-n<<1));c.set(r),r=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return sb(r,0,a)}function ob(i,e){e||(e={});var t={},n=[];ab(i,"",t,e);var s=0,r=0;for(var a in t){var o=t[a],c=o[0],l=o[1],h=l.level==0?0:8,u=go(a),d=u.length,f=l.comment,m=f&&go(f),b=m&&m.length,g=pd(l.extra);if(d>65535)throw"filename too long";var p=h?Yw(c,l):c,x=p.length,y=jw();y.p(c),n.push(rb(l,{size:c.length,crc:y.d(),c:p,f:u,m,u:d!=a.length||m&&f.length!=b,o:s,compression:h})),s+=30+d+g+x,r+=76+2*(d+g)+(b||0)+x}for(var v=new gn(r+22),R=s,T=r-s,A=0;A<n.length;++A){var u=n[A];Qg(v,u.o,u,u.f,u.u,u.c.length);var D=30+u.f.length+pd(u.extra);v.set(u.c,u.o+D),Qg(v,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+D+(u.m?u.m.length:0)}return Jw(v,s,n.length,T,R),v}var jg,zw,gn,mn,ra,md,gd,Xg,eb,tb,Hw,ud,nb,JA,Yg,dd,$i,ht,mo,ir,ht,ht,ht,ht,sl,ht,Gw,Vw,ib,sb,qi,fo,hd,fd,Kg,po,il,Zg,Ww,bd,$w,qw,jw,Xw,rb,Kt,ab,Jg,Kw,Zw,pd,Qg,Jw,cb=ze(()=>{jg=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},zw=function(i){return new Worker(i)};try{URL.revokeObjectURL(jg(""))}catch{jg=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},zw=function(e){return new Worker(e,{type:"module"})}}gn=Uint8Array,mn=Uint16Array,ra=Uint32Array,md=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gd=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Xg=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),eb=function(i,e){for(var t=new mn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new ra(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},tb=eb(md,2),Hw=tb[0],ud=tb[1];Hw[28]=258,ud[258]=28;nb=eb(gd,0),JA=nb[0],Yg=nb[1],dd=new mn(32768);for(ht=0;ht<32768;++ht)$i=(ht&43690)>>>1|(ht&21845)<<1,$i=($i&52428)>>>2|($i&13107)<<2,$i=($i&61680)>>>4|($i&3855)<<4,dd[ht]=(($i&65280)>>>8|($i&255)<<8)>>>1;mo=function(i,e,t){for(var n=i.length,s=0,r=new mn(e);s<n;++s)++r[i[s]-1];var a=new mn(e);for(s=0;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new mn(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=a[i[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[dd[u]>>>c]=l}else for(o=new mn(n),s=0;s<n;++s)i[s]&&(o[s]=dd[a[i[s]-1]++]>>>15-i[s]);return o},ir=new gn(288);for(ht=0;ht<144;++ht)ir[ht]=8;for(ht=144;ht<256;++ht)ir[ht]=9;for(ht=256;ht<280;++ht)ir[ht]=7;for(ht=280;ht<288;++ht)ir[ht]=8;sl=new gn(32);for(ht=0;ht<32;++ht)sl[ht]=5;Gw=mo(ir,9,0),Vw=mo(sl,5,0),ib=function(i){return(i/8|0)+(i&7&&1)},sb=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof mn?mn:i instanceof ra?ra:gn)(t-e);return n.set(i.subarray(e,t)),n},qi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},fo=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},hd=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return[bd,0];if(s==1){var a=new gn(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(R,T){return R.f-T.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};h!=s-1;)o=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=r[0].s,n=1;n<s;++n)r[n].s>d&&(d=r[n].s);var f=new mn(d+1),m=fd(t[h-1],f,0);if(m>e){var n=0,b=0,g=m-e,p=1<<g;for(r.sort(function(T,A){return f[A.s]-f[T.s]||T.f-A.f});n<s;++n){var x=r[n].s;if(f[x]>e)b+=p-(1<<m-f[x]),f[x]=e;else break}for(b>>>=g;b>0;){var y=r[n].s;f[y]<e?b-=1<<e-f[y]++-1:++n}for(;n>=0&&b;--n){var v=r[n].s;f[v]==e&&(--f[v],++b)}m=e}return[new gn(f),m]},fd=function(i,e,t){return i.s==-1?Math.max(fd(i.l,e,t+1),fd(i.r,e,t+1)):e[i.s]=t},Kg=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new mn(++e),n=0,s=i[0],r=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==s&&o!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(s),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(s);r=1,s=i[o]}return[t.subarray(0,n),e]},po=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},il=function(i,e,t){var n=t.length,s=ib(e+2);i[s]=n&255,i[s+1]=n>>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},Zg=function(i,e,t,n,s,r,a,o,c,l,h){qi(e,h++,t),++s[256];for(var u=hd(s,15),d=u[0],f=u[1],m=hd(r,15),b=m[0],g=m[1],p=Kg(d),x=p[0],y=p[1],v=Kg(b),R=v[0],T=v[1],A=new mn(19),D=0;D<x.length;++D)A[x[D]&31]++;for(var D=0;D<R.length;++D)A[R[D]&31]++;for(var S=hd(A,7),w=S[0],O=S[1],z=19;z>4&&!w[Xg[z-1]];--z);var Y=l+5<<3,L=po(s,ir)+po(r,sl)+a,N=po(s,d)+po(r,b)+a+14+3*z+po(A,w)+(2*A[16]+3*A[17]+7*A[18]);if(Y<=L&&Y<=N)return il(e,h,i.subarray(c,c+l));var H,$,j,q;if(qi(e,h,1+(N<L)),h+=2,N<L){H=mo(d,f,0),$=d,j=mo(b,g,0),q=b;var K=mo(w,O,0);qi(e,h,y-257),qi(e,h+5,T-1),qi(e,h+10,z-4),h+=14;for(var D=0;D<z;++D)qi(e,h+3*D,w[Xg[D]]);h+=3*z;for(var Z=[x,R],fe=0;fe<2;++fe)for(var V=Z[fe],D=0;D<V.length;++D){var X=V[D]&31;qi(e,h,K[X]),h+=w[X],X>15&&(qi(e,h,V[D]>>>5&127),h+=V[D]>>>12)}}else H=Gw,$=ir,j=Vw,q=sl;for(var D=0;D<o;++D)if(n[D]>255){var X=n[D]>>>18&31;fo(e,h,H[X+257]),h+=$[X+257],X>7&&(qi(e,h,n[D]>>>23&31),h+=md[X]);var se=n[D]&31;fo(e,h,j[se]),h+=q[se],se>3&&(fo(e,h,n[D]>>>5&8191),h+=gd[se])}else fo(e,h,H[n[D]]),h+=$[n[D]];return fo(e,h,H[256]),h+$[256]},Ww=new ra([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),bd=new gn(0),$w=function(i,e,t,n,s,r){var a=i.length,o=new gn(n+a+5*(1+Math.ceil(a/7e3))+s),c=o.subarray(n,o.length-s),l=0;if(!e||a<8)for(var h=0;h<=a;h+=65535){var u=h+65535;u<a?l=il(c,l,i.subarray(h,u)):(c[h]=r,l=il(c,l,i.subarray(h,a)))}else{for(var d=Ww[e-1],f=d>>>13,m=d&8191,b=(1<<t)-1,g=new mn(32768),p=new mn(b+1),x=Math.ceil(t/3),y=2*x,v=function(me){return(i[me]^i[me+1]<<x^i[me+2]<<y)&b},R=new ra(25e3),T=new mn(288),A=new mn(32),D=0,S=0,h=0,w=0,O=0,z=0;h<a;++h){var Y=v(h),L=h&32767,N=p[Y];if(g[L]=N,p[Y]=L,O<=h){var H=a-h;if((D>7e3||w>24576)&&H>423){l=Zg(i,c,0,R,T,A,S,w,z,h-z,l),w=D=S=0,z=h;for(var $=0;$<286;++$)T[$]=0;for(var $=0;$<30;++$)A[$]=0}var j=2,q=0,K=m,Z=L-N&32767;if(H>2&&Y==v(h-Z))for(var fe=Math.min(f,H)-1,V=Math.min(32767,h),X=Math.min(258,H);Z<=V&&--K&&L!=N;){if(i[h+j]==i[h+j-Z]){for(var se=0;se<X&&i[h+se]==i[h+se-Z];++se);if(se>j){if(j=se,q=Z,se>fe)break;for(var ve=Math.min(Z,se-2),xe=0,$=0;$<ve;++$){var Pe=h-Z+$+32768&32767,te=g[Pe],ae=Pe-te+32768&32767;ae>xe&&(xe=ae,N=Pe)}}}L=N,N=g[L],Z+=L-N+32768&32767}if(q){R[w++]=268435456|ud[j]<<18|Yg[q];var Se=ud[j]&31,U=Yg[q]&31;S+=md[Se]+gd[U],++T[257+Se],++A[U],O=h+j,++D}else R[w++]=i[h],++T[i[h]]}}l=Zg(i,c,r,R,T,A,S,w,z,h-z,l),!r&&l&7&&(l=il(c,l+1,bd))}return sb(o,0,n+ib(l)+s)},qw=function(){for(var i=new ra(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;i[e]=t}return i}(),jw=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=qw[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},Xw=function(i,e,t,n,s){return $w(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!s)},rb=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Kt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};ab=function(i,e,t,n){for(var s in i){var r=i[s],a=e+s;r instanceof gn?t[a]=[r,n]:Array.isArray(r)?t[a]=[r[0],rb(n,r[1])]:ab(r,a+"/",t,n)}},Jg=typeof TextEncoder<"u"&&new TextEncoder,Kw=typeof TextDecoder<"u"&&new TextDecoder,Zw=0;try{Kw.decode(bd,{stream:!0}),Zw=1}catch{}pd=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Qg=function(i,e,t,n,s,r,a,o){var c=n.length,l=t.extra,h=o&&o.length,u=pd(l);Kt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r==null&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if(f<0||f>119)throw"date not in range 1980-2099";if(Kt(i,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,r!=null&&(Kt(i,e,t.crc),Kt(i,e+4,r),Kt(i,e+8,t.size)),Kt(i,e+12,c),Kt(i,e+14,u),e+=16,a!=null&&(Kt(i,e,h),Kt(i,e+6,t.attrs),Kt(i,e+10,a),e+=14),i.set(n,e),e+=c,u)for(var m in l){var b=l[m],g=b.length;Kt(i,e,+m),Kt(i,e+2,g),i.set(b,e+4),e+=4+g}return h&&(i.set(o,e),e+=h),e},Jw=function(i,e,t,n,s){Kt(i,e,101010256),Kt(i,e+8,t),Kt(i,e+10,t),Kt(i,e+12,n),Kt(i,e+16,s)}});function Qw(i,e){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let t=1024/Math.max(i.width,i.height),n=document.createElement("canvas");n.width=i.width*Math.min(1,t),n.height=i.height*Math.min(1,t);let s=n.getContext("2d");return e===!0&&(s.translate(0,n.height),s.scale(1,-1)),s.drawImage(i,0,0,n.width,n.height),n}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}function db(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function eE(i){return`def Xform "Root"
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

`}function tE(){return`
		}
	}
}

`}function nE(i){let e=db();return e+=i,go(e)}function iE(i,e,t){let n="Object_"+i.id,s=fb(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function fb(i){let e=i.elements;return`( ${rl(e,0)}, ${rl(e,4)}, ${rl(e,8)}, ${rl(e,12)} )`}function rl(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function sE(i){return`
def "Geometry"
{
${rE(i)}
}
`}function rE(i){let e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${aE(i)}]
		int[] faceVertexIndices = [${oE(i)}]
		normal3f[] normals = [${lb(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${lb(t.position,n)}]
${lE(t)}
		uniform token subdivisionScheme = "none"
	}
`}function aE(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function oE(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function lb(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),a=i.getZ(n);t.push(`(${s.toPrecision(cn)}, ${r.toPrecision(cn)}, ${a.toPrecision(cn)})`)}return t.join(", ")}function cE(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(cn)}, ${1-s.toPrecision(cn)})`)}return e.join(", ")}function lE(i){let e="";for(let t=0;t<4;t++){let n=t>0?t:"",s=i["uv"+n];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${n} = [${cE(s)}] (
			interpolation = "vertex"
		)`)}return e}function hE(i,e,t=!1){let n=[];for(let s in i){let r=i[s];n.push(uE(r,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function uE(i,e,t=!1){let n="			",s=[],r=[];function a(o,c,l){let h=o.source.id+"_"+o.flipY;e[h]=o;let u=o.channel>0?"st"+o.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),m=o.offset.clone(),b=o.rotation,g=Math.sin(b),p=Math.cos(b);return m.y=1-m.y-f.y,t?(m.x=m.x/f.x,m.y=m.y/f.y,m.x+=g/f.x,m.y+=p-1):(m.x+=g*f.x,m.y+=(1-p)*f.y),`
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
			float inputs:rotation = ${(b*(180/Math.PI)).toFixed(cn)}
			float2 inputs:scale = ${ub(f)}
			float2 inputs:translation = ${ub(m)}
			float2 outputs:result
		}

		def Shader "Texture_${o.id}_${c}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${c}.outputs:result>
			${l!==void 0?"float4 inputs:scale = "+dE(l):""}
			token inputs:sourceColorSpace = "${o.colorSpace===tn?"raw":"sRGB"}"
			token inputs:wrapS = "${d[o.wrapS]}"
			token inputs:wrapT = "${d[o.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===qt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(s.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),s.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),r.push(a(i.map,"diffuse",i.color))):s.push(`${n}color3f inputs:diffuseColor = ${hb(i.color)}`),i.emissiveMap!==null?(s.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),r.push(a(i.emissiveMap,"emissive"))):i.emissive.getHex()>0&&s.push(`${n}color3f inputs:emissiveColor = ${hb(i.emissive)}`),i.normalMap!==null&&(s.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),r.push(a(i.normalMap,"normal"))),i.aoMap!==null&&(s.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),r.push(a(i.aoMap,"occlusion"))),i.roughnessMap!==null&&i.roughness===1?(s.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),r.push(a(i.roughnessMap,"roughness"))):s.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null&&i.metalness===1?(s.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),r.push(a(i.metalnessMap,"metallic"))):s.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),s.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(a(i.alphaMap,"opacity"))):s.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(s.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),s.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),s.push(`${n}float inputs:ior = ${i.ior}`)),`
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
`}function hb(i){return`(${i.r}, ${i.g}, ${i.b})`}function dE(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function ub(i){return`(${i.x}, ${i.y})`}function fE(i){let e=i.name?i.name:"Camera_"+i.id,t=fb(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(cn)}, ${i.far.toPrecision(cn)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(cn)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(cn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(cn)}, ${i.far.toPrecision(cn)})
			float focalLength = ${i.getFocalLength().toPrecision(cn)}
			float focusDistance = ${i.focus.toPrecision(cn)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(cn)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(cn)}
		}
	
	`}var al,cn,pb=ze(()=>{on();cb();ju();al=class{async parse(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1},t);let n={},s="model.usda";n[s]=null;let r=db();r+=eE(t);let a={},o={};e.traverseVisible(l=>{if(l.isMesh){let h=l.geometry,u=l.material;if(u.isMeshStandardMaterial){let d="geometries/Geometry_"+h.id+".usda";if(!(d in n)){let f=sE(h);n[d]=nE(f)}u.uuid in a||(a[u.uuid]=u),r+=iE(l,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}else l.isCamera&&(r+=fE(l))}),r+=tE(),r+=hE(a,o,t.quickLookCompatible),n[s]=go(r),r=null;for(let l in o){let h=o[l];h.isCompressedTexture===!0&&(h=ia(h));let u=Qw(h.image,h.flipY),d=await new Promise(f=>u.toBlob(f,"image/png",1));n[`textures/Texture_${l}.png`]=new Uint8Array(await d.arrayBuffer())}let c=0;for(let l in n){let h=n[l],u=34+l.length;c+=u;let d=c&63;if(d!==4){let f=64-d,m=new Uint8Array(f);n[l]=[h,{extra:{12345:m}}]}c=h.length}return ob(n,{level:0})}};cn=7});function gb(i,e){let t=i.userData;i.userData={};let n=i.clone(!0);i.userData=t,n.scale.set(1,1,1),n.position.set(0,0,0),n.rotation.set(0,0,0);let s=new gt,r=new gt;s.add(n),r.add(s),r.updateMatrixWorld(!0);let a=new wt().setFromObject(r);if(a.isEmpty())return null;let o=a.getSize(new P);e&&s.scale.set(e[0]/100/o.x,e[2]/100/o.y,e[1]/100/o.z),r.updateMatrixWorld(!0),a=new wt().setFromObject(r);let c=a.getCenter(new P);return s.position.set(-c.x,-a.min.y,-c.z),r.traverse(l=>{l.userData={}}),r}function mb(i,e){let t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)}async function ol(i,e,t){if(!i){alert("The model is still loading. Please try again in a moment.");return}let n=document.createElement("div");n.className="armodal",n.innerHTML='<div class="arbox" role="dialog" aria-modal="true"><button class="arx" aria-label="Close">\u2715</button><h3></h3><div class="arv"><p class="st-note">Preparing your 3D model\u2026</p></div><p class="st-note" id="arnote"></p><div class="hero-ctl" style="margin-top:1rem"><button class="btn ghost" data-f="glb">Download GLB</button><button class="btn ghost" data-f="usdz">Download USDZ</button></div></div>',n.querySelector("h3").textContent=e,document.body.append(n);let s="",r=()=>{s&&URL.revokeObjectURL(s),n.remove()};n.querySelector(".arx").onclick=r,n.onclick=a=>{a.target===n&&r()};try{let[a,o]=await Promise.all([pE(i),mE(i).catch(()=>null)]);await bE(),s=URL.createObjectURL(a);let c=document.createElement("model-viewer");Object.entries({src:s,alt:e,ar:"","ar-modes":"webxr scene-viewer quick-look","ar-scale":"fixed","camera-controls":"","auto-rotate":"","shadow-intensity":"1"}).forEach(([u,d])=>c.setAttribute(u,d)),c.style.cssText="width:100%;height:100%";let l=document.createElement("button");l.slot="ar-button",l.className="btn",l.textContent="View in your room",l.style.cssText="position:absolute;bottom:1rem;left:50%;transform:translateX(-50%)",c.append(l),n.querySelector(".arv").replaceChildren(c),n.querySelector("#arnote").textContent='On a phone or tablet, tap "View in your room" to place it at real size in your space (needs HTTPS). On a computer you can rotate it here or download the files.',n.querySelector("[data-f=glb]").onclick=()=>mb(a,t+".glb");let h=n.querySelector("[data-f=usdz]");o?h.onclick=()=>mb(o,t+".usdz"):h.hidden=!0}catch(a){n.querySelector(".arv").innerHTML="",n.querySelector("#arnote").textContent=a.message||"Could not prepare the 3D model."}}var pE,mE,gE,bE,yd=ze(()=>{on();qg();pb();pE=async i=>new Blob([await new sa().parseAsync(i,{binary:!0})],{type:"model/gltf-binary"}),mE=async i=>new Blob([await new al().parse(i)],{type:"model/vnd.usdz+zip"});bE=()=>gE??=new Promise((i,e)=>{let t=document.createElement("script");t.type="module",t.src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.4.0/dist/model-viewer.min.js",t.onload=i,t.onerror=()=>e(new Error("Could not load the AR viewer. Check your internet connection.")),document.head.append(t)})});function bb(i){let e=n=>document.getElementById(n),t=async()=>{let n=await xt.reviews(i).catch(()=>[]),s=n.length?n.reduce((a,o)=>a+o.rating,0)/n.length:0;e("rev-sum").textContent=n.length?`${s.toFixed(1)} / 5 \xB7 ${n.length} review${n.length>1?"s":""}`:"No reviews yet",e("rev-list").replaceChildren(...n.length?n.map(a=>{let o=document.createElement("div");o.className="rv";let c=document.createElement("b"),l=document.createElement("p"),h=document.createElement("small");return c.textContent="\u2605".repeat(a.rating)+"\u2606".repeat(5-a.rating)+"  "+a.title,l.textContent=a.body,h.textContent=`${a.name} \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")}`,o.append(c,l,h),o}):[Object.assign(document.createElement("p"),{textContent:"Be the first to share your experience with this piece.",className:"st-note"})]);let r=Yt();e("rev-form").hidden=!r,e("rev-signin").hidden=!!r};e("rev-form").onsubmit=async n=>{n.preventDefault();try{let s=await xt.addReview({pid:i,rating:+e("rv-r").value,title:e("rv-t").value.trim(),body:e("rv-b").value.trim()});n.target.reset(),e("rv-msg").textContent=s&&s.pending?"Thank you. Your review will appear once it has been approved.":"Thank you for your review."}catch(s){e("rv-msg").textContent=s.message}},bs(t),t()}var yb=ze(()=>{yi()});var yE={};var Mn,bo,Je,xb=ze(()=>{pn();co();Qn();yd();yb();Mn=i=>document.getElementById(i),bo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Je=pt.find(i=>i.id===new URLSearchParams(location.search).get("id"))||pt[0];if(!Je)location.replace("shop.html");else{let h=function(){let d=Je.dims,f=Je.price;Mn("p-price").textContent="R "+f.toLocaleString("en-ZA");let m=Object.values(a).map(b=>b[0]).join(", ");n={d,price:f,ftxt:m}};document.title=`${Je.name} | Dekara Designs`,Mn("p-tag").textContent=Je.cat+" \xB7 "+Je.tag,Mn("p-name").textContent=Je.name,Mn("p-desc").textContent=Je.desc,Mn("p-spec").innerHTML=`<div><span>Construction</span>${bo(Je.mat)}</div><div><span>Delivery</span>4\u20136 weeks</div>`;let i=ys(Mn("p-canvas"),Je.id,{orbit:!0}),e=Je.fabrics&&Je.fabrics.length?Je.fabrics:[["Oyster","#d4cabb","oyster",null,""]],t=e.find(d=>d[2]===Je.defaults?.fabric)||e[0],n,s=null,r=Je.finishTypes&&Je.finishTypes.length?Je.finishTypes:[{id:"frame",name:"Frame",target:"frame",finishes:kn},{id:"fabric",name:"Fabric",target:"fabric",materialType:"Fabric",finishes:e}],a={};r.forEach(d=>{a[d.id]=d.finishes.find(f=>f[2]===Je.defaults?.[d.id])||d.finishes[0]||kn[0]});let o=()=>i.setFabric(t,s||Bn(Je.id,t[2],"fabric")),c=d=>{let f=e.find(m=>m[2]===d);f&&(t=f,s=null,o(),h())},l=Mn("p-finishes");r.forEach(d=>{let f=document.createElement("label"),m=document.createElement("span");f.append(`${d.name} finish \xB7 `,m),m.textContent=a[d.id]?.[0]||"";let b=document.createElement("div");b.className="sw",b.innerHTML=(d.finishes||[]).map(([p,x,y,v],R)=>`<button class="${R?"":"on"}" style="background:${v?`url(${bo(v)}) center/cover`:bo(x)}" title="${bo(p)}" aria-label="${bo(p)}" data-i="${R}"></button>`).join("");let g=p=>{p&&(d.id==="fabric"&&c(p[2]),a[d.id]=p,b.querySelectorAll("button").forEach(x=>x.classList.toggle("on",d.finishes[x.dataset.i]===p)),m.textContent=p[0],i.setFinish(d.target||d.name,p,Bn(Je.id,p[2],d.id)),h())};b.onclick=p=>{let x=p.target.closest("button");x&&g(d.finishes[x.dataset.i])},l.append(f,b),a[d.id]&&g(a[d.id]),d.select=g}),h(),o(),Mn("p-add").onclick=()=>Hi({key:`p:${Je.id}:${t[0]}:${n.ftxt}:${n.d.join("x")}`,name:Je.name,desc:`${t[0]} \xB7 ${n.ftxt} \xB7 ${n.d.join(" \xD7 ")} cm`,price:n.price,swatch:t[1]}),Promise.resolve().then(()=>(ta(),Og)).then(({cardHtml:d,mount:f})=>{let m=[...pt.filter(b=>b.cat===Je.cat&&b.id!==Je.id),...pt.filter(b=>b.cat!==Je.cat)].slice(0,4);Mn("related").innerHTML=m.map(b=>d(b)).join(""),Mn("related").querySelectorAll(".card").forEach(f)}),Mn("p-gallery").innerHTML=[1,2,3].map(d=>`<div data-slot="gallery:${Je.id}:${d}" data-label="Photo ${d}"></div>`).join(""),applySlots(),Mn("p-wish").dataset.wish=Je.id,Mn("p-cmp").dataset.cmp=Je.id,Mn("p-ar").onclick=()=>{let d=gb(i.getModel().object,n.d);ol(d,Je.name,"dekara-"+Je.id)},bb(Je.id);let u=[...r.flatMap(d=>(d.finishes||[]).map(f=>({key:Yh(f[2],d.id),label:`${d.name}: ${f[0]}`,kind:"finish",material:f,ft:d})))];window.__prod={piece:Je,fabrics:Je.fabrics,current:()=>t||Je.fabrics[0],mappingOptions:u,mapping:d=>{let f=u.find(m=>m.key===d);return f?Bn(Je.id,f.material[2],f.ft?.id):Bn(Je.id,d)},selectMapping:d=>{let f=u.find(m=>m.key===d);f&&f.ft.select(f.material)},previewMapping:(d,f)=>{let m=u.find(b=>b.key===d);m&&(m.ft.select(m.material),m.ft.id==="fabric"&&(s=f,i.setFabric(m.material,f)),i.setFinish(m.ft.target||m.ft.name,m.material,f),h())}},dispatchEvent(new Event("prod-ready"))}});var xE={};var Sb,Mb,vb,_b,wb=ze(()=>{pn();Nn();yi();Sb=new URLSearchParams(location.search),Mb=document.getElementById("piece");Mb.innerHTML='<option value="">General enquiry</option>'+pt.map(i=>`<option value="${i.id}">${i.name}</option>`).join("");Mb.value=Sb.get("piece")||"";Promise.resolve().then(()=>(Qn(),Gi)).then(i=>{document.getElementById("msg").value=Sb.get("msg")||(i.list().length?`I'd like a quote for the following items:

${i.summaryText()}`:"")});vb=ii(),_b=document.querySelector(".spec");[["Phone",vb.phone],["Email",vb.email]].forEach(([i,e])=>{if(!e||!_b)return;let t=document.createElement("div"),n=document.createElement("span");n.textContent=i,t.append(n,document.createTextNode(e)),_b.append(t)});document.getElementById("f").addEventListener("submit",async i=>{i.preventDefault();let e=i.target,t=e.querySelector("button[type=submit]"),n=Object.fromEntries(new FormData(e));t.disabled=!0;try{await xt.contact({name:n.name,email:n.email,piece:n.piece||"",message:n.msg||""}),e.style.display="none",document.getElementById("ok").style.display="block"}catch(s){let r=document.getElementById("cerr");r||(r=document.createElement("p"),r.id="cerr",r.className="err",e.after(r)),r.textContent=s.message||"Could not send your message. Please try again.",t.disabled=!1}})});var vE={};function Eb(){let i=bi(),e=so();if(!i.length){vs("basket-list").innerHTML='<div class="none"><h3>Your basket is empty</h3><p>Add pieces from the shop, or build one in the Custom Studio.</p><a class="btn" href="shop.html">Browse the shop</a> <a class="btn ghost" href="custom-studio.html">Custom Studio</a></div>',vs("basket-sum").style.display="none";return}vs("basket-sum").style.display="",vs("print-head").innerHTML=`<h2>Dekara Designs \xB7 Quotation</h2><p>Quote Q-${new Date().toISOString().slice(2,10).replace(/-/g,"")} \xB7 ${new Date().toLocaleDateString("en-ZA")} \xB7 valid for 14 days. Prices include 15% VAT. Delivery 4\u20136 weeks; delivery fee confirmed at checkout.</p>`,vs("basket-list").innerHTML=i.map(t=>`<div class="bk-row"><span class="dot" style="background:${aa(t.swatch||"#ddd")}"></span><div class="bk-info"><h3>${aa(t.name)}</h3><p>${aa(t.desc)}</p><button class="lnk" data-rm="${aa(t.key)}">Remove</button></div><div class="qty"><button data-q="${aa(t.key)}" data-d="-1" aria-label="Decrease quantity">\u2212</button><span>${t.qty}</span><button data-q="${aa(t.key)}" data-d="1" aria-label="Increase quantity">+</button></div><b>${Et(t.price*t.qty)}</b></div>`).join(""),vs("basket-sum").innerHTML=`<h3>Summary</h3><div class="st-sum"><div><span>Items (${io()})</span>${Et(Qs())}</div><div><span>Delivery</span>${Et(e.delivery)} at checkout</div></div><div class="st-total"><span style="color:var(--mut)">Total incl. VAT</span><b>${Et(Qs()+e.delivery)}</b></div>
 <div style="display:grid;gap:.7rem;margin-top:1.4rem"><a class="btn" href="contact.html?from=basket" style="justify-content:center">Request a quote</a>${e.payNow?'<a class="btn ghost" href="checkout.html" style="justify-content:center">Pay now (demo)</a>':""}<button class="btn ghost" id="bk-print" style="justify-content:center">Print quote / save as PDF</button><a class="lnk" href="shop.html">Continue shopping</a><button class="lnk" id="bk-clear">Clear basket</button></div>
 <p class="st-note">Delivery takes 4\u20136 weeks. Prices include 15% VAT. Delivery fee applies within Johannesburg and surrounding areas.</p>`}var vs,aa,Ab=ze(()=>{Qn();vs=i=>document.getElementById(i),aa=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);vs("basket-list").onclick=i=>{let e=i.target.closest("[data-rm]"),t=i.target.closest("[data-q]");if(e&&Iu(e.dataset.rm),t){let n=bi().find(s=>s.key===t.dataset.q);n&&Du(n.key,n.qty+Number(t.dataset.d))}};vs("basket-sum").onclick=i=>{i.target.id==="bk-print"&&print(),i.target.id==="bk-clear"&&confirm("Remove everything from your basket?")&&er()};ro(Eb);Eb()});var ME={};var Rt,yo,oa,xd,xo,_s,_E,SE,Tb=ze(()=>{Qn();yi();Nn();Rt=i=>document.getElementById(i),yo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),oa=so(),xd=Qs(),xo=bi().length?oa.delivery:0,_s=xd+xo,_E=()=>bi().map(i=>`<div><span>${i.qty}\xD7 ${yo(i.name)}<br><small>${yo(i.desc)}</small></span>${Et(i.price*i.qty)}</div>`).join(""),SE=`<h3>Order summary</h3><div class="st-sum">${_E()}<div><span>Delivery</span>${Et(xo)}</div></div><div class="st-total"><span style="color:var(--mut)">Total</span><b>${Et(_s)}</b></div><div class="st-meta"><span>Includes 15% VAT</span><b>${Et(Lu(_s))}</b></div>`;if(!oa.payNow||!bi().length)Rt("co-wrap").innerHTML=`<div class="none" style="grid-column:1/-1"><h3>${oa.payNow?"Your basket is empty":"Online payment is not available"}</h3><p>${oa.payNow?"Add pieces before checking out.":"Please request a quote and our team will arrange payment with you."}</p><a class="btn" href="${oa.payNow?"shop.html":"basket.html"}">${oa.payNow?"Browse the shop":"Back to basket"}</a></div>`;else{Rt("co-sum").innerHTML=SE;let i=Yt();i&&(Rt("name").value=i.name,Rt("email").value=i.email),Rt("co-pay").textContent="Pay "+Et(_s);let e=r=>{let a=0,o=!1;for(let c=r.length-1;c>=0;c--){let l=+r[c];o&&(l*=2,l>9&&(l-=9)),a+=l,o=!o}return a%10===0};Rt("cc").oninput=r=>r.target.value=r.target.value.replace(/\D/g,"").slice(0,19).replace(/(.{4})/g,"$1 ").trim(),Rt("exp").oninput=r=>{let a=r.target.value.replace(/\D/g,"").slice(0,4);a.length>2&&(a=a.slice(0,2)+"/"+a.slice(2)),r.target.value=a};let t=r=>{Rt("co-err").textContent=r,Rt("co-err").hidden=!1,Rt("co-pay").disabled=!1,Rt("co-pay").textContent="Pay "+Et(_s)},n=!!dt.apiBase;if(n){Rt("cc").closest("fieldset").hidden=!0,Rt("co-pay").textContent="Continue to secure payment ("+Et(_s)+")";let r=document.querySelector(".demo-banner");r&&(r.innerHTML="<b>Secure payment.</b> You will be taken to PayFast to pay. We never see or store your card details.")}async function s(r){r.preventDefault(),Rt("co-err").hidden=!0;let a=Object.fromEntries(new FormData(r.target));for(let o of["name","email","phone","address","suburb","city","postal"])if(!String(a[o]||"").trim())return t("Please complete all fields.");if(!/^\S+@\S+\.\S+$/.test(a.email))return t("Please enter a valid email address.");Rt("co-pay").disabled=!0,Rt("co-pay").textContent="Preparing payment\u2026";try{let o=await xt.createOrder({name:a.name,email:a.email,phone:a.phone,address:`${a.address}, ${a.suburb}, ${a.city}, ${a.postal}`,items:bi(),subtotal:xd,delivery:xo,total:_s});if(!o||!o.payfast)throw new Error("Payment could not be started. Please try again.");try{sessionStorage.setItem("dekara-last-order",o.ref||"")}catch{}let c=document.createElement("form");c.method="POST",c.action=o.payfast.url,Object.entries(o.payfast.fields).forEach(([l,h])=>{let u=document.createElement("input");u.type="hidden",u.name=l,u.value=h,c.append(u)}),document.body.append(c),c.submit()}catch(o){t(o.message||"Something went wrong.")}}Rt("co-form").onsubmit=r=>{if(n)return s(r);r.preventDefault(),Rt("co-err").hidden=!0;let a=Object.fromEntries(new FormData(r.target)),o=a.cc.replace(/\s/g,"");for(let l of["name","email","phone","address","suburb","city","postal","cardname"])if(!String(a[l]||"").trim())return t("Please complete all fields.");if(!/^\S+@\S+\.\S+$/.test(a.email))return t("Please enter a valid email address.");if(o.length<13||!e(o))return t("That card number does not look valid.");let c=/^(\d\d)\/(\d\d)$/.exec(a.exp||"");if(!c||+c[1]<1||+c[1]>12||new Date(2e3+ +c[2],+c[1],1)<=new Date)return t("Please enter a valid expiry date (MM/YY).");if(!/^\d{3,4}$/.test(a.cvc))return t("Please enter a valid security code.");Rt("co-pay").disabled=!0,Rt("co-pay").textContent="Processing\u2026",setTimeout(async()=>{if(o==="4000000000000002")return t("Your card was declined (demo decline). Try 4242 4242 4242 4242.");let l="CD-"+Date.now().toString(36).toUpperCase().slice(-6),h={ref:l,date:new Date().toISOString(),name:a.name,email:a.email,phone:a.phone,address:`${a.address}, ${a.suburb}, ${a.city}, ${a.postal}`,items:bi(),subtotal:xd,delivery:xo,total:_s,last4:o.slice(-4)};try{await xt.createOrder(h)}catch{}er(),Rt("co-wrap").hidden=!0;let u=Rt("co-done");u.hidden=!1,u.innerHTML=`<div class="studio" style="max-width:680px;margin:2rem auto;text-align:center"><span class="eyebrow">Demo order confirmed</span><h2>Thank you, ${yo(a.name.split(" ")[0])}.</h2><p class="lead" style="margin-inline:auto">Reference <b style="color:var(--ink)">${l}</b>. In a live shop a confirmation would be emailed to ${yo(a.email)}. No payment was taken.</p><div class="st-sum" style="text-align:left;margin-top:1.5rem">${h.items.map(d=>`<div><span>${d.qty}\xD7 ${yo(d.name)}</span>${Et(d.price*d.qty)}</div>`).join("")}<div><span>Delivery</span>${Et(xo)}</div></div><div class="st-total"><span>Total paid (demo)</span><b>${Et(_s)}</b></div><p class="st-note">Estimated delivery: 4\u20136 weeks. Card ending ${h.last4}.</p><p style="margin-top:1.5rem"><a class="btn" href="shop.html">Continue shopping</a></p></div>`,scrollTo(0,0)},1400)}}});var EE={};function Lb(){vi.forEach(t=>t.v.destroy()),vi=[];let i=Zc().map(t=>pt.find(n=>n.id===t)).filter(Boolean),e=Ss("cmp-grid");if(Ss("cmp-tools").hidden=!i.length,!i.length){e.innerHTML='<div class="none" style="grid-column:1/-1"><h3>Nothing to compare yet</h3><p>Tap "Compare" on any shop card or product page to choose up to 3 pieces.</p><a class="btn" href="shop.html">Browse the shop</a></div>',Ss("cmp-table").innerHTML="";return}e.style.setProperty("--n",i.length),e.innerHTML=i.map(t=>`<div class="cc"><div class="stage"><canvas></canvas></div><h3>${xi(t.name)}</h3><p class="st-note" style="margin:0 0 .6rem">${xi(t.cat)} \xB7 ${xi(t.tag)}</p><div class="price cp" style="font-size:1.6rem"></div>
  <label>Fabric \xB7 <span class="fn">${t.fabrics[0]?.[0]||"Oyster"}</span></label>${Pb(t.fabrics,"fs",Cb(t.fabrics,t.defaults?.fabric))}<label>Frame finish \xB7 <span class="fi">${kn[0][0]}</span></label>${Pb(kn,"ff",Cb(kn,t.defaults?.frame))}
  ${vd(0,"Width",80,140)}${vd(1,"Depth",80,140)}${vd(2,"Height",80,130)}
  <div class="hero-ctl" style="margin-top:1rem"><button class="btn sm add">Add to basket</button><a class="btn sm ghost" href="product.html?id=${encodeURIComponent(t.id)}">Details</a><button class="lnk rm">Remove</button></div></div>`).join(""),e.querySelectorAll(".cc").forEach((t,n)=>{let s=i[n],r={p:s,el:t,fabric:s.fabrics.find(a=>a[2]===s.defaults?.fabric)||s.fabrics[0]||["Oyster","#d4cabb","oyster"],finish:kn.find(a=>a[2]===s.defaults?.frame)||kn[0],s:[1,1,1],v:ys(t.querySelector("canvas"),s.id,{orbit:!0})};r.v.setFabric(r.fabric,Bn(s.id,r.fabric[2])),vi.push(r)}),Md()}function _d(i){let e=i.s[0]*i.s[1]*i.s[2];return Math.round(i.p.price*(1+(e-1)*.7)/10)*10}function Md(){vi.forEach(e=>{let t=Sd(e);e.el.querySelector(".cp").textContent=Rb(_d(e)),e.el.querySelector(".fn").textContent=e.fabric[0],e.el.querySelector(".fi").textContent=e.finish[0],[0,1,2].forEach(n=>e.el.querySelector(".o-"+n).textContent=t[n]+" cm")});let i=[["Price",e=>Rb(_d(e))],["Category",e=>e.p.cat+" \xB7 "+e.p.sub],["Dimensions (W \xD7 D \xD7 H)",e=>Sd(e).join(" \xD7 ")+" cm"],["Materials",e=>e.p.mat||"\u2014"],["Fabric",e=>e.fabric[0]],["Frame finish",e=>e.finish[0]],["Delivery",()=>"4\u20136 weeks"]];Ss("cmp-table").innerHTML="<table><tr><th></th>"+vi.map(e=>`<th>${xi(e.p.name)}</th>`).join("")+"</tr>"+i.map(([e,t])=>`<tr><td>${e}</td>${vi.map(n=>`<td>${xi(t(n))}</td>`).join("")}</tr>`).join("")+"</table>"}var Ss,xi,Rb,vi,Cb,Pb,vd,Sd,wE,Ib=ze(()=>{pn();co();Qc();Qn();Ss=i=>document.getElementById(i),xi=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Rb=i=>"R "+Math.round(i).toLocaleString("en-ZA"),vi=[],Cb=(i,e)=>i.some(t=>t[2]===e)?e:i[0]?.[2],Pb=(i,e,t)=>`<div class="sw ${e}">${i.map((n,s)=>`<button class="${(t?t===n[2]:s===0)?"on":""}${n[2]==="original"?" orig":""}" style="background:${n[3]?`url(${xi(n[3])}) center/cover`:xi(n[1])}" title="${xi(n[0])}" aria-label="${xi(n[0])}" data-k="${xi(n[2]??s)}"></button>`).join("")}</div>`,vd=(i,e,t,n)=>`<div class="rg"><div><span>${e}</span><b class="o-${i}"></b></div><input type="range" data-ax="${i}" min="${t}" max="${n}" value="100"></div>`;Sd=i=>i.p.dims.map((e,t)=>Math.round(e*i.s[t]));wE=(i,e)=>{i.fabric=e,i.v.setFabric(e,Bn(i.p.id,e[2])),i.el.querySelectorAll(".fs button").forEach(t=>t.classList.toggle("on",t.dataset.k===e[2]))};Ss("cmp-grid").addEventListener("click",i=>{let e=i.target.closest(".cc");if(!e)return;let t=vi.find(r=>r.el===e),n=i.target.closest("button");if(!n)return;let s=Ss("cmp-sync").checked;if(n.closest(".fs")){let r=n.dataset.k;(s?vi:[t]).forEach(a=>{let o=a.p.fabrics.find(c=>c[2]===r);o&&wE(a,o)})}else if(n.closest(".ff")){let r=kn.find(a=>a[2]===n.dataset.k);if(!r)return;(s?vi:[t]).forEach(a=>{a.finish=r,a.v.setFrame(r[1]),a.el.querySelectorAll(".ff button").forEach(o=>o.classList.toggle("on",o.dataset.k===n.dataset.k))})}else if(n.classList.contains("rm"))bg(t.p.id);else if(n.classList.contains("add")){let r=Sd(t);Hi({key:`p:${t.p.id}:${t.fabric[0]}:${t.finish[0]}:${r.join("x")}`,name:t.p.name,desc:`${t.fabric[0]} \xB7 ${t.finish[0]} frame \xB7 ${r.join(" \xD7 ")} cm`,price:_d(t),swatch:t.fabric[1]})}Md()});Ss("cmp-grid").addEventListener("input",i=>{let e=i.target.closest("[data-ax]");if(!e)return;let t=vi.find(n=>n.el===e.closest(".cc"));t.s[+e.dataset.ax]=e.value/100,t.v.setDims(...t.s),Md()});Ss("cmp-clear").onclick=()=>Jc();Jr(Lb);Lb()});var TE={};var ca,la,AE,Db,Nb=ze(()=>{yi();Qn();ca=i=>document.getElementById(i),la=new URLSearchParams(location.search).get("ref")||sessionStorage.getItem("dekara-last-order")||"";ca("oc-p").textContent=la?`Your order reference is ${la}. We are confirming your payment now.`:"We could not find an order reference.";AE=0,Db=async()=>{if(la){try{let i=await xt.orderStatus(la);if(i.status==="paid"){er(),ca("oc-h").textContent="Payment received",ca("oc-p").textContent=`Thank you. Order ${la} is confirmed and a confirmation email is on its way. Delivery is 4\u20136 weeks.`;return}if(i.status==="cancelled"){ca("oc-h").textContent="Payment cancelled",ca("oc-p").textContent="Your payment was cancelled. Your basket is still saved.";return}}catch{}++AE<20?setTimeout(Db,3e3):ca("oc-p").textContent=`We have not received confirmation yet for order ${la}. If you paid, it can take a few minutes; we will email you.`}};Db()});var RE={};var Ub,sr,bn,Ob=ze(()=>{pn();Xs();ta();Ub=document.getElementById("fab-detail"),sr=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),bn=gi.find(i=>i.id===new URLSearchParams(location.search).get("id"));if(!bn)Ub.innerHTML='<div class="none"><h3>Fabric not found</h3><p>It may have been removed from the library.</p><a class="btn" href="fabrics.html">Back to the Fabric Library</a></div>';else{document.title=`${bn.name} | Dekara Designs`;let i=pt.filter(n=>n.fabrics.some(s=>s[2]===bn.id));Ub.innerHTML=`<div class="two" style="align-items:start"><div class="fab-big" id="fb"></div><div><span class="eyebrow">${sr(bn.type||"Fabric")}</span><h1 style="font-size:clamp(2.2rem,4vw,3.6rem)">${sr(bn.name)}</h1><p class="lead">${sr(bn.desc)}</p>
 <div class="spec" style="margin-top:2rem"><div><span>Type</span>${sr(bn.type||"Fabric")}</div><div><span>Colour</span>${sr(bn.hex)}</div><div><span>Available on</span>${i.length} piece${i.length===1?"":"s"}</div></div>
 <div class="hero-ctl"><a class="btn" href="shop.html?fabric=${encodeURIComponent(bn.id)}">Shop in ${sr(bn.name)}</a><a class="btn ghost" href="fabrics.html">All fabrics</a></div></div></div>
 <h2 style="margin-top:4rem">Pieces available in ${sr(bn.name)}</h2><div class="cards" id="fp"></div>`;let e=document.getElementById("fb");if(bn.image){let n=new Image;n.src=bn.image,n.alt=`${bn.name} swatch`,e.append(n)}else e.append(js(bn.hex,900));let t=document.getElementById("fp");t.innerHTML=i.length?i.map(n=>Vi(n)).join(""):'<p class="st-note">Not yet available on any piece.</p>',t.querySelectorAll(".card").forEach(Wi)}});var CE={};async function Ed(){let i=Yt();if(lo(_o),!i){document.getElementById("acc-h").textContent="Sign in or register",_o.innerHTML='<div class="two" style="align-items:start"><form id="lf"><h3>Sign in</h3><label>Email<input name="email" type="email" required></label><label>Password<input name="password" type="password" required></label><button class="btn" type="submit">Sign in</button><p class="err" hidden id="le"></p></form><form id="rf"><h3>Create an account</h3><label>Name<input name="name" required></label><label>Email<input name="email" type="email" required></label><label>Password (8+ characters)<input name="password" type="password" minlength="8" required></label><button class="btn ghost" type="submit">Create account</button><p class="err" hidden id="re"></p></form></div><p class="st-note">Demo accounts are stored only in this browser. The account layer is built to be swapped for a real backend.</p>';let a=(o,c)=>async l=>{l.preventDefault();try{await o(Object.fromEntries(new FormData(l.target))),wd&&/^[\w-]+\.html/.test(wd)&&(location.href=wd)}catch(h){let u=document.getElementById(c);u.textContent=h.message,u.hidden=!1}};document.getElementById("lf").onsubmit=a(xt.login,"le"),document.getElementById("rf").onsubmit=a(xt.register,"re");return}document.getElementById("acc-h").textContent="Hello, "+i.name.split(" ")[0];let[e,t,n]=await Promise.all([xt.wishlist(),xt.orders(),xt.designs()]),r=`<div class="chips">${[["saved","Saved ("+e.length+")"],["orders","Orders ("+t.length+")"],["designs","Saved designs ("+n.length+")"]].map(([a,o])=>`<button class="pill${So===a?" on":""}" data-t="${a}">${o}</button>`).join("")}<button class="pill" data-t="out">Sign out</button></div><div id="pane" style="margin-top:1.5rem">`;if(So==="saved"){let a=pt.filter(o=>e.includes(o.id));r+=a.length?`<div class="cards">${a.map(o=>Vi(o)).join("")}</div>`:'<p class="st-note">Nothing saved yet. Tap the heart on any piece to save it.</p>'}So==="orders"&&(r+=t.length?t.map(a=>`<div class="studio"><b>${vo(a.ref)}</b> \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")} \xB7 ${Et(a.total)}<div class="st-sum">${(a.items||[]).map(o=>`<div><span>${o.qty}\xD7 ${vo(o.name)}</span>${Et(o.price*o.qty)}</div>`).join("")}</div></div>`).join(""):'<p class="st-note">No orders yet.</p>'),So==="designs"&&(r+=n.length?n.map(a=>`<div class="studio"><b>${vo(a.name)}</b> \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")} \xB7 ${Et(a.price||0)}<div class="hero-ctl" style="margin-top:1rem"><a class="btn sm" href="custom-studio.html?design=${vo(a.id)}">Open in studio</a><button class="btn sm ghost" data-del="${vo(a.id)}">Delete</button></div></div>`).join(""):'<p class="st-note">No saved designs yet. Build one in the Custom Studio and choose "Save to my account".</p>'),_o.innerHTML=r+"</div>",_o.querySelectorAll(".card").forEach(Wi)}var _o,vo,wd,So,Fb=ze(()=>{yi();pn();ta();Qn();_o=document.getElementById("acc"),vo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),wd=new URLSearchParams(location.search).get("next"),So=(location.hash||"#saved").slice(1);_o.onclick=async i=>{let e=i.target.closest("[data-t]"),t=i.target.closest("[data-del]");if(e){if(e.dataset.t==="out"){await xt.logout();return}So=e.dataset.t,Ed()}t&&confirm("Delete this design?")&&await xt.deleteDesign(t.dataset.del)};bs(Ed);Ed()});var IE={};var rr,Ms,PE,LE,kb=ze(()=>{pn();Xs();Nn();yi();rr=i=>document.getElementById(i),Ms=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),PE=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-");rr("dl-models").innerHTML=pt.map(i=>`<div class="dl"><div><b>${Ms(i.name)}</b><small>${Ms(i.cat)} \xB7 ${i.dims.join(" \xD7 ")} cm</small></div><div><a href="models/${i.id}.glb" download>GLB</a><a href="models/${i.id}.usdz" download>USDZ</a></div></div>`).join("");rr("dl-fabrics").innerHTML=Pn.map(([i,e,t,n])=>`<a class="fab" style="--c:${Ms(e)}" href="${Ms(n||js(e,800).toDataURL("image/png"))}" download="${PE(i)}.${n?"jpg":"png"}"><span>${Ms(i)}</span></a>`).join("");LE=dt.documents||[{name:"Product catalogue (CSV)",file:"downloads/dekara-catalogue.csv",desc:"Names, categories, sizes, materials and prices"},{name:"All 3D models (ZIP)",file:"downloads/dekara-3d-models.zip",desc:"GLB and USDZ for every piece"},{name:"Fabric swatch sheet",file:"swatches/dekara-swatch-sheet.svg",desc:"All fabrics on one sheet"}];rr("dl-docs").innerHTML=LE.map(i=>`<div class="dl"><div><b>${Ms(i.name)}</b><small>${Ms(i.desc||"")}</small></div><div><a href="${Ms(i.file)}" download>Download</a></div></div>`).join("");rr("tf").onsubmit=async i=>{i.preventDefault();try{await xt.tradeApply(Object.fromEntries(new FormData(i.target))),i.target.hidden=!0,rr("tf-ok").hidden=!1}catch(e){rr("tf-err").textContent=e.message,rr("tf-err").hidden=!1}}});var UE={};function ws(){let i=pt.filter(NE);Vt("cats").innerHTML=cl("cat","","All",!Ne.cat,i.length)+Ps.map(r=>cl("cat",r,r,Ne.cat===r,i.filter(a=>a.cat===r).length)).join("");let e=[...new Set(pt.filter(r=>r.cat===Ne.cat).map(r=>r.sub))];Vt("subs").innerHTML=Ne.cat&&e.length>1?cl("sub","","All "+Ne.cat,!Ne.sub)+e.map(r=>cl("sub",r,r,Ne.sub===r,i.filter(a=>a.cat===Ne.cat&&a.sub===r).length)).join(""):"";let t=i.filter(r=>(!Ne.cat||r.cat===Ne.cat)&&(!Ne.sub||r.sub===Ne.sub));Bb[Ne.sort]&&(t=[...t].sort(Bb[Ne.sort])),lo(Ad),Ad.innerHTML=t.map(r=>Vi(r)).join(""),Ad.querySelectorAll(".card").forEach(Wi);let n=Vt("count");n.textContent=`${t.length} ${t.length===1?"piece":"pieces"}${Ne.cat?" in "+(Ne.sub||Ne.cat):""}`+(Ne.q?` matching \u201C${Ne.q}\u201D`:""),Vt("none").hidden=t.length>0;let s=new URLSearchParams;Ne.cat&&s.set("cat",Ne.cat),Ne.sub&&s.set("sub",Ne.sub),Ne.q&&s.set("q",Ne.q),Ne.sort!=="featured"&&s.set("sort",Ne.sort),Ne.fabric&&s.set("fabric",Ne.fabric);try{history.replaceState(null,"",location.pathname+(s.toString()?"?"+s:""))}catch{}}var Vt,Ad,ha,Ne,DE,NE,cl,Bb,zb,Hb=ze(()=>{pn();ta();Vt=i=>document.getElementById(i),Ad=Vt("shop-grid"),ha=new URLSearchParams(location.search),Ne={cat:Ps.includes(ha.get("cat"))?ha.get("cat"):"",sub:ha.get("sub")||"",q:ha.get("q")||"",sort:ha.get("sort")||"featured",fabric:ha.get("fabric")||""};Vt("q").value=Ne.q;Vt("sort").value=Ne.sort;Vt("ffilter").innerHTML='<option value="">All fabrics</option>'+Pn.map(i=>`<option value="${i[2]}">${i[0].replace(/[<&]/g,"")}</option>`).join("");Pn.some(i=>i[2]===Ne.fabric)||(Ne.fabric="");Vt("ffilter").value=Ne.fabric;DE=i=>[i.name,i.tag,i.cat,i.sub,i.desc,i.mat,i.fabrics.map(e=>e[0]).join(" ")].join(" ").toLowerCase(),NE=i=>{if(Ne.fabric&&!i.fabrics.some(t=>t[2]===Ne.fabric))return!1;let e=DE(i);return Ne.q.toLowerCase().split(/\s+/).filter(Boolean).every(t=>e.includes(t))},cl=(i,e,t,n,s)=>`<button class="pill${n?" on":""}" data-${i}="${e}"${s===0?" data-zero":""}>${t}${s!==void 0?` <small>${s}</small>`:""}</button>`,Bb={price:(i,e)=>i.price-e.price,"price-desc":(i,e)=>e.price-i.price,name:(i,e)=>i.name.localeCompare(e.name)};Vt("cats").onclick=i=>{let e=i.target.closest("[data-cat]");e&&(Ne.cat=e.dataset.cat,Ne.sub="",ws())};Vt("subs").onclick=i=>{let e=i.target.closest("[data-sub]");e&&(Ne.sub=e.dataset.sub,ws())};Vt("q").oninput=i=>{clearTimeout(zb),zb=setTimeout(()=>{Ne.q=i.target.value.trim(),ws()},160)};Vt("q").onkeydown=i=>{i.key==="Escape"&&(i.target.value="",Ne.q="",ws())};Vt("sort").onchange=i=>{Ne.sort=i.target.value,ws()};Vt("ffilter").onchange=i=>{Ne.fabric=i.target.value,ws()};Vt("clear").onclick=()=>{Ne.cat=Ne.sub=Ne.q=Ne.fabric="",Vt("q").value="",Vt("ffilter").value="",ws()};ws()});var YE={};function To(i){!i||!i.userData||ya.forEach(e=>{let t=ma[e.id];if(!t)return;let n=(e.target||e.name||"").toLowerCase().trim(),s=i.userData.finMap?.[n]||i.userData.finMap?.[e.id]||(n==="frame"?i.userData.frames:null);!s||!s.length||(typeof t=="string"?s.forEach(r=>{r.map=null,r.color.set(t),r.needsUpdate=!0}):Array.isArray(t)&&fs(s,t,pi))})}function Ro(i,e){let t=Zt[i].custom?FE(i,e):kE(i,e);return Zt[i].custom||(t.userData.ready=fs(t.userData.T,or,pi)),t}function FE(i,e){let t=Zt[i],n=new gt;return n.userData={type:i,T:[],frames:[],finMap:{}},n.userData.ready=OE(t.url).then(s=>{if(!s)return;let r=s.clone(!0);r.traverse(m=>{m.isMesh&&(m.castShadow=m.receiveShadow=!0,m.material=Array.isArray(m.material)?m.material.map(b=>b.clone()):m.material.clone())});let a=new gt;a.add(r);let o=new wt().setFromObject(a),c=o.getSize(new P);a.scale.set(t.w/Math.max(c.x,.001),t.h/Math.max(c.y,.001),t.d/Math.max(c.z,.001)),a.updateMatrixWorld(!0),o=new wt().setFromObject(a);let l=o.getCenter(new P);a.position.set(-l.x,-o.min.y,-l.z),n.add(a);let h=[],u=[],d={},f=new Set(ya.map(m=>(m.target||m.name||"").toLowerCase().trim()));f.add("frame"),a.traverse(m=>{m.isMesh&&[].concat(m.material).forEach(b=>{let g=(b.name||"").toLowerCase().trim(),p=!1;f.forEach(x=>{x&&g===x&&((d[x]??=[]).push(b),p=!0)}),!p&&(b.transparent&&b.opacity<1||(u.push(b),g==="tint"&&h.push(b)))})}),n.userData.T.push(...h.length?h:u),n.userData.finMap=d,d.frame&&(n.userData.frames=d.frame),Dd&&fs(n.userData.T,or,pi),To(n)}),n}function kE(i,e){let{w:t,d:n}=Zt[i],s=new gt,r=new an({color:e,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new Me("#fff")}),a=new jt({color:5979942,roughness:.5}),o=(c,l,h,u,d,f=0)=>{let m=new He(c,l);m.position.set(h,u,d),m.rotation.x=f,m.castShadow=m.receiveShadow=!0,s.add(m)};return[-1,1].forEach(c=>[-1,1].forEach(l=>o(new ui(.03,.022,.12,12),a,c*(t/2-.07),.06,l*(n/2-.07)))),i==="ottoman"?o(ua(t,.4,n,.12),r,0,.32,0):i==="arm"?o(ua(t,.55,n,.08),r,0,.4,0):(o(ua(t,.28,n),r,0,.26,0),o(ua(t-.03,.18,n-.18),r,0,.49,.07),o(ua(t-.03,.5,.2,.09),r,0,.78,-n/2+.12,-.1),i==="corner"&&o(ua(.2,.5,n-.25,.09),r,-t/2+.12,.78,.1)),s.userData={type:i,T:[r],frames:[a],finMap:{frame:[a]}},ya.forEach(c=>{let l=(c.target||c.name||"").toLowerCase().trim();(l==="frame"||l==="legs"||l==="base")&&(s.userData.finMap[l]=[a])}),To(s),s}function Yb(i){i.setPixelRatio(Math.min(devicePixelRatio,2)),i.toneMapping=Xa,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=ja}function dl(){let i=1e9,e=-1e9,t=1e9,n=-1e9;return Qe.forEach(s=>{let[r,a]=As(s),o=s.g.position;i=Math.min(i,o.x-r),e=Math.max(e,o.x+r),t=Math.min(t,o.z-a),n=Math.max(n,o.z+a)}),{sx:e-i,sz:n-t,cx:(i+e)/2,cz:(t+n)/2}}function VE(i,e,t){if(!At.snap)return[e,t];let[n,s]=As(i),r=.18,a=!1,o=!1;for(let c of Qe){if(c===i)continue;let[l,h]=As(c),u=c.g.position.x,d=c.g.position.z;if(Math.abs(t-d)<h+s+r)for(let f of[u+l+n-Es(i,c),u-l-n+Es(i,c)])Math.abs(e-f)<r&&(e=f,a=!0);if(Math.abs(e-u)<l+n+r)for(let f of[d+h+s-Es(i,c),d-h-s+Es(i,c)])Math.abs(t-f)<r&&(t=f,o=!0)}for(let c of Qe){if(c===i)continue;let[l,h]=As(c),u=c.g.position.x,d=c.g.position.z;if(!o){for(let f of[d,d-h+s,d+h-s])if(Math.abs(t-f)<r){t=f,o=!0;break}}if(!a){for(let f of[u,u-l+n,u+l-n])if(Math.abs(e-f)<r){e=f,a=!0;break}}}return[a?e:Math.round(e*20)/20,o?t:Math.round(t*20)/20]}function WE(i){let e=i.g.position,[t,n]=As(i),s=[];Qe.filter(r=>r!==i).reverse().forEach(r=>{let[a,o]=As(r),c=r.g.position.x,l=r.g.position.z;s.push([c+a+t-Es(i,r),l],[c-a-t+Es(i,r),l],[c,l+o+n-Es(i,r)],[c,l-o-n+Es(i,r)])});for(let r=0;r<30;r++)for(let a=0;a<12;a++)s.push([Math.cos(a/12*6.283)*r*.15,Math.sin(a/12*6.283)*r*.15]);for(let[r,a]of s)if(e.set(r,0,a),Od(i))return!0;return!1}function $E(i,e){if(!Jb(i))return ba(Qe.length>=At.maxPieces?`Limit reached: ${At.maxPieces} pieces maximum.`:`No more ${Zt[i].n} pieces allowed.`),null;let t={type:i,rot:0,g:Ro(i,Xi)};return Qe.push(t),WE(t)?(In.add(t.g),e||(Ao(t),ti()),t):(Qe.pop(),ba("No room left within the size limits."),null)}function Qb(i){i&&(In.remove(i.g),Qe.splice(Qe.indexOf(i),1),wn===i&&Ao(null),ti())}function Ao(i){wn=i,Qe.forEach(e=>e.g.userData.T.forEach(t=>t.emissive&&t.emissive.setHex(e===i?2760724:0))),ul.visible=!!i,we("st-rot").disabled=we("st-del").disabled=!i}function e0(){if(wn){if(wn.rot=(wn.rot+1)%4,!Od(wn)){wn.rot=(wn.rot+3)%4,ba("Not enough room to rotate here.");return}wn.g.rotation.y=wn.rot*Math.PI/2,ti()}}function fl(){[...Qe].forEach(i=>In.remove(i.g)),Qe.length=0,Ao(null)}function qE(i){if(!t0(i)){ba("That size is outside the current limits.");return}fl();let e=i*.9+.44,t=-e/2,n=(s,r)=>{let a={type:s,rot:0,g:Ro(s,Xi)};a.g.position.set(r,0,0),Qe.push(a),In.add(a.g)};n("arm",t+.11);for(let s=0;s<i;s++)n("seat",t+.22+.45+s*.9);n("arm",t+.22+i*.9+.11),we("st-start").style.display="none",Ud(),ti()}function a0(i){let e=we("st-cols");e&&e.querySelectorAll(".pill").forEach(s=>s.classList.toggle("on",s.dataset.c===i));let t=wo.find(s=>s.id===i);if(o0(t?t.pieces.map(s=>t.id+":"+s.id):Xb),ti(),we("st-step-col").style.display="none",we("st-step-seats").style.display="block",i==="")we("st-seats-heading").textContent="How many seats?",we("st-preset-group").style.display="flex",we("st-seats-note").innerHTML='You can grow or shrink it afterwards, or <a href="#" id="st-empty">start with an empty floor</a>.';else{we("st-seats-heading").textContent=`Build with ${t?t.name:"collection"}`,we("st-preset-group").style.display="none",we("st-seats-note").innerHTML='<button class="btn sm" id="st-start-custom" style="justify-content:center;margin-top:.4rem">Start with an empty floor</button>';let s=we("st-start-custom");s&&(s.onclick=()=>{fl(),we("st-start").style.display="none",ti()})}let n=we("st-empty");n&&(n.onclick=s=>{s.preventDefault(),we("st-start").style.display="none"})}async function XE(){let i=new gt,e=new gt,t=[];Qe.forEach(r=>{let a=Ro(r.type,Xi);a.position.copy(r.g.position),a.rotation.y=r.rot*Math.PI/2,To(a),e.add(a),t.push(a)}),await Promise.all(t.map(r=>r.userData.ready)),t.forEach(r=>{r.userData={}});let{cx:n,cz:s}=dl();return e.position.set(-n,0,-s),i.add(e),i}function ti(){let i={};Qe.forEach(a=>i[a.type]=(i[a.type]||0)+1);let e=Qe.reduce((a,o)=>a+ll(o.type),0);we("st-sum").innerHTML=Object.keys(i).map(a=>`<div><span>${i[a]} \xD7 ${Zt[a].n}</span>${Td(i[a]*ll(a))}</div>`).join("")||'<p style="color:var(--mut);font-size:.9rem;padding:.5rem 0">Nothing placed yet.</p>',we("st-total").textContent=Td(e);let{sx:t,sz:n}=Qe.length?dl():{sx:0,sz:0},s=Qe.length?`${Math.round(Math.max(t,n)*100)} \xD7 ${Math.round(Math.min(t,n)*100)} cm`:"\u2014";we("st-size").textContent=s,we("st-count").textContent=`${Qe.length} / ${At.maxPieces}`,document.querySelectorAll("[data-add]").forEach(a=>{let o=a.dataset.add;a.textContent=`+ ${Zt[o].n} \xB7 ${Td(ll(o))}`,a.disabled=!Jb(o)});let r=Object.keys(i).map(a=>`${i[a]}\xD7 ${Zt[a].n}`).join(", ");Mo=Qe.length?{txt:r,dims:s,total:e}:null,we("st-add").disabled=we("st-ar").disabled=we("st-save").disabled=!Qe.length,c0.update()}var At,we,Td,Zt,Xb,Nt,wo,ll,Dd,Rd,OE,fa,ji,ya,Ld,ma,Xi,or,Mo,ua,Kb,Zb,Eo,Nd,xa,Ts,In,ga,Ud,_i,ul,BE,Qe,wn,ar,Es,As,zE,HE,Od,GE,Jb,Gb,ba,t0,hl,Vb,n0,pa,Id,i0,s0,r0,Wb,da,$b,jE,o0,qb,Cd,c0,Pd,jb,l0=ze(()=>{on();Vu();Wu();Wh();Nn();pn();Xs();Qn();jc();yd();yi();At=Io(),we=i=>document.getElementById(i),Td=i=>"R "+Math.round(i).toLocaleString("en-ZA"),Zt={seat:{n:"Seat",w:.9,d:.95},corner:{n:"Corner",w:.95,d:.95},chaise:{n:"Chaise",w:.9,d:1.75},ottoman:{n:"Ottoman",w:.9,d:.9},arm:{n:"Arm",w:.22,d:.95}},Xb=Object.keys(Zt).filter(i=>At.enabled[i]),Nt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),wo=[...dt.collections||[],...No()].filter(i=>i.pieces&&i.pieces.length);wo.forEach(i=>i.pieces.forEach(e=>{Zt[i.id+":"+e.id]={n:e.name,w:(e.w||90)/100,d:(e.d||90)/100,h:(e.h||80)/100,price:Number(e.price)||0,url:Mi("piece:"+i.id+":"+e.id)||e.model,custom:!0}}));ll=i=>Zt[i].custom?Zt[i].price:At.prices[i],Dd=!1,Rd=new Map,OE=i=>(Rd.has(i)||Rd.set(i,Qa(i).then(e=>e.scene).catch(()=>null)),Rd.get(i)),fa=Oo(),ji=(()=>{if(fa.fabrics&&fa.fabrics.length){let i=Pn.filter(e=>fa.fabrics.includes(e[2]));if(i.length)return i}return Pn})(),ya=yn(),Ld=i=>{if(i==="fabric")return ji;if(fa.finishes?.[i]&&fa.finishes[i].length){let t=Zn.filter(n=>fa.finishes[i].includes(n[2]));if(t.length)return t}let e=Zn.filter(t=>t[5]==="Wood"||t[5]==="Metal");return e.length?e:Zn},ma={};ya.forEach(i=>{let e=Ld(i.id);ma[i.id]=e[0]||Zn[0]});Xi=ji[0][1],or=ji[0],Mo=null,ua=(i,e,t,n=.07)=>new Kr(i,e,t,4,n);Kb=()=>{let i=new fi(16777215,2.6);return i.position.set(3,7,4),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.radius=4,Object.assign(i.shadow.camera,{left:-7,right:7,top:7,bottom:-7,far:30}),i},Zb=()=>{let i=ii(),e=i.backlight===!1?0:(i.backlightStrength??100)/100,t=new fi(16774374,3.2*e);return t.position.set(-2,3.5,-5),t},Eo=we("st-canvas"),Nd=15328216,xa=new hi({antialias:!0});Yb(xa);Eo.prepend(xa.domElement);Ts=xa.domElement;Ts.style.cssText="display:block;width:100%;height:100%;touch-action:none";In=new Sn;In.background=new Me(Nd);In.fog=new Ac(Nd,16,44);In.environment=new Fi(xa).fromScene(new nr,.04).texture;In.add(Kb());In.add(Zb());(function(){let s=14+Math.PI*5/2+24,r=new Vs(140,s,1,100),a=r.attributes.position;for(let c=0;c<a.count;c++){let l=s/2-a.getY(c),h,u;if(l<14)h=0,u=8-l;else if(l<14+Math.PI*5/2){let d=(l-14)/5;h=5*(1-Math.cos(d)),u=-6-5*Math.sin(d)}else h=5+(l-14-Math.PI*5/2),u=-11;a.setXYZ(c,a.getX(c),h,u)}r.computeVertexNormals();let o=new He(r,new jt({color:Nd,roughness:1,side:qt}));o.receiveShadow=!0,In.add(o)})();ga=new vt(36,1,.1,120),Ud=()=>{ga.position.set(0,4.2,6.4),_i.target.set(0,.4,0),_i.update()},_i=new Qr(ga,Ts);_i.enableDamping=!0;_i.maxPolarAngle=Math.PI*.47;_i.minDistance=2;_i.maxDistance=14;_i.screenSpacePanning=!1;Ud();ul=new Bc(new St,10254925);ul.visible=!1;In.add(ul);BE=()=>{let i=Eo.clientWidth||1,e=Eo.clientHeight||1;xa.setSize(i,e,!1),ga.aspect=i/e,ga.updateProjectionMatrix()};new ResizeObserver(BE).observe(Eo);Qe=[],wn=null,ar=null,Es=(i,e)=>Zt[i.type].custom||Zt[e.type].custom?.012:0,As=i=>{let e=Zt[i.type];return i.rot%2?[e.d/2,e.w/2]:[e.w/2,e.d/2]},zE=(i,e)=>{let[t,n]=As(i),[s,r]=As(e),a=i.g.position,o=e.g.position;return Math.abs(a.x-o.x)<t+s-.02&&Math.abs(a.z-o.z)<n+r-.02};HE=()=>{if(!Qe.length)return!0;let{sx:i,sz:e}=dl();return Math.max(i,e)*100<=At.maxWidth+.5&&Math.min(i,e)*100<=At.maxDepth+.5},Od=i=>Qe.every(e=>e===i||!zE(i,e))&&HE(),GE=i=>Qe.filter(e=>e.type===i).length,Jb=i=>(Zt[i].custom||At.enabled[i])&&Qe.length<At.maxPieces&&!(At.max[i]>0&&GE(i)>=At.max[i]),ba=i=>{let e=we("st-msg");e.textContent=i,e.style.opacity=1,clearTimeout(Gb),Gb=setTimeout(()=>e.style.opacity=0,3200)};t0=i=>At.presets[i]&&At.enabled.seat&&At.enabled.arm&&i+2<=At.maxPieces&&(i*.9+.44)*100<=Math.max(At.maxWidth,At.maxDepth)&&!(At.max.seat>0&&i>At.max.seat)&&!(At.max.arm>0&&At.max.arm<2);hl=new kc,Vb=new Ce,n0=new Rn(new P(0,1,0),0),pa=new P,Id=new P,i0=i=>{let e=Ts.getBoundingClientRect();Vb.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),hl.setFromCamera(Vb,ga)};Ts.addEventListener("pointerdown",i=>{i0(i);let e=hl.intersectObjects(Qe.map(s=>s.g),!0)[0];if(!e){Ao(null);return}let t=e.object;for(;t&&!t.userData.type;)t=t.parent;let n=Qe.find(s=>s.g===t);n&&(Ao(n),ar=n,_i.enabled=!1,Ts.setPointerCapture(i.pointerId),hl.ray.intersectPlane(n0,pa),Id.set(n.g.position.x-pa.x,0,n.g.position.z-pa.z))},!0);Ts.addEventListener("pointermove",i=>{if(!ar||(i0(i),!hl.ray.intersectPlane(n0,pa)))return;let[e,t]=VE(ar,pa.x+Id.x,pa.z+Id.z),n=ar.g.position,s=n.x,r=n.z,a=(o,c)=>(n.set(o,0,c),Od(ar)?!0:(n.set(s,0,r),!1));!a(e,t)&&!a(e,r)&&a(s,t)});s0=()=>{ar&&(ar=null,_i.enabled=!0,ti())};Ts.addEventListener("pointerup",s0);Ts.addEventListener("pointercancel",s0);addEventListener("keydown",i=>{/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)||!we("st-canvas")||(i.key==="Delete"&&Qb(wn),(i.key==="r"||i.key==="R")&&e0())});r0=[{id:"",name:"Classic modules",image:Mi("collection:classic")||null,isClassic:!0},...wo.map(i=>({id:i.id,name:i.name,image:i.image||Mi("collection:"+i.id)||null,count:i.pieces?.length||0}))];we("st-col-cards")&&(we("st-col-cards").innerHTML=r0.map(i=>`
  <div class="st-col-card" data-col-select="${Nt(i.id)}">
   <div class="col-img-wrap">${i.image?`<img src="${Nt(i.image)}" alt="${Nt(i.name)}">`:`<div style="font:italic 1.1rem var(--disp);color:var(--bronze)">${Nt(i.name)}</div>`}</div>
   <div class="col-name"><span>${Nt(i.name)}</span><span class="col-badge">${i.isClassic?"Standard":i.count+" pieces"}</span></div>
  </div>`).join(""),we("st-col-cards").onclick=i=>{let e=i.target.closest("[data-col-select]");e&&a0(e.dataset.colSelect)});Wb=we("st-back-cols");Wb&&(Wb.onclick=()=>{we("st-step-seats").style.display="none",we("st-step-col").style.display="block"});da=we("st-col-popover"),$b=we("st-col-popover-img"),jE=we("st-col-popover-title");{let i=we("st-cols");wo.length?(i.innerHTML='<button class="pill on" data-c="">Classic modules</button>'+wo.map(e=>`<button class="pill" data-c="${Nt(e.id)}">${Nt(e.name)}</button>`).join(""),i.onclick=e=>{let t=e.target.closest("[data-c]");t&&(a0(t.dataset.c),we("st-start").style.display="none")},i.addEventListener("pointerover",e=>{let t=e.target.closest("[data-c]");if(!t||!da)return;let n=r0.find(r=>r.id===t.dataset.c);if(!n)return;jE.textContent=n.name,n.image?$b.innerHTML=`<img src="${Nt(n.image)}" alt="${Nt(n.name)}">`:$b.innerHTML=`<div style="font:italic 1rem var(--disp);color:var(--bronze);padding:1.4rem;text-align:center">${Nt(n.name)}</div>`;let s=t.getBoundingClientRect();da.style.left=`${Math.max(10,Math.min(window.innerWidth-230,s.left+s.width/2-110))}px`,da.style.top=`${s.bottom+8}px`,da.classList.add("show")}),i.addEventListener("pointerout",e=>{let t=e.target.closest("[data-c]");!t||!da||(!e.relatedTarget||!t.contains(e.relatedTarget))&&da.classList.remove("show")})):i.hidden=!0}we("st-tools").innerHTML='<span id="st-pal" style="display:contents"></span><span class="sep"></span><button class="pill" id="st-rot" disabled>Rotate 90\xB0</button><button class="pill" id="st-del" disabled>Remove</button><button class="pill" id="st-clear">Clear</button><button class="pill" id="st-view">Reset view</button><button class="pill" id="st-again">Change size</button>';o0=i=>{we("st-pal").innerHTML=i.map(e=>`<button class="pill" data-add="${Nt(e)}"></button>`).join("")};o0(Xb);we("st-tools").onclick=i=>{let e=i.target.closest("button");!e||e.disabled||(e.dataset.add?$E(e.dataset.add):e.id==="st-rot"?e0():e.id==="st-del"?Qb(wn):e.id==="st-clear"?(fl(),ti()):e.id==="st-view"?Ud():e.id==="st-again"&&(we("st-start").style.display="flex",we("st-step-seats").style.display="none",we("st-step-col").style.display="block"))};document.querySelectorAll(".st-preset").forEach(i=>{i.hidden=!At.presets[i.dataset.n],i.disabled=!t0(+i.dataset.n),i.onclick=()=>qE(+i.dataset.n)});qb=we("st-empty");qb&&(qb.onclick=i=>{i.preventDefault(),we("st-start").style.display="none"});Cd=we("st-fin-sections");Cd&&(Cd.innerHTML=ya.map(i=>{let e=Ld(i.id),t=ma[i.id]||e[0],n=i.id==="fabric"?"st-fab":`st-fin-${Nt(i.id)}`;return`<div class="studio"><h3>${Nt(i.name)} \xB7 <span id="${n}" style="font-size:1.1rem">${Nt(t[0])}</span></h3><div class="sw" id="st-fsw-${Nt(i.id)}" style="margin-bottom:0">${e.map(([s,r,a,o],c)=>`<button class="${t&&t[2]===a?"on":""}" style="background:${o?`url(${Nt(o)}) center/cover`:Nt(r)}" title="${Nt(s)}" aria-label="${Nt(s)}" data-ft="${Nt(i.id)}" data-i="${c}"></button>`).join("")}</div></div>`}).join(""),Cd.onclick=i=>{let e=i.target.closest("button[data-ft]");if(!e)return;let t=e.dataset.ft,n=Ld(t),s=n[e.dataset.i];if(!s)return;ma[t]=s,t==="fabric"&&(or=s,Xi=s[1],Dd=!0,Qe.forEach(a=>fs(a.g.userData.T,or,pi))),we(`st-fsw-${t}`).querySelectorAll("button").forEach(a=>a.classList.toggle("on",a===e));let r=we(t==="fabric"?"st-fab":`st-fin-${t}`);r&&(r.textContent=s[0]),Qe.forEach(a=>To(a.g)),ti()});we("st-add").onclick=()=>{if(!Mo)return;let i=ya.map(e=>`${e.name}: ${ma[e.id]?.[0]||""}`).join(", ");Hi({key:"b:"+Date.now(),name:"Custom modular build",desc:`${Mo.txt} \xB7 ${Mo.dims} \xB7 Fabric: ${we("st-fab").textContent}${i?" \xB7 "+i:""}`,price:Mo.total,swatch:Xi})};we("st-ar").onclick=async()=>ol(await XE(),"Your custom build","dekara-custom-build");we("st-save").onclick=async()=>{try{await xt.saveDesign({name:`Custom build (${Qe.length} pieces)`,fabric:Math.max(0,ji.findIndex(i=>i[1]===Xi)),fabricId:or[2],price:Qe.reduce((i,e)=>i+ll(e.type),0),items:Qe.map(i=>({type:i.type,x:i.g.position.x,z:i.g.position.z,rot:i.rot}))}),ba("Saved to your account.")}catch(i){ba(i.message)}};c0=(()=>{let i=we("st-preview"),e=new hi({canvas:i,antialias:!0,alpha:!0});Yb(e);let t=new Sn;t.environment=new Fi(e).fromScene(new nr,.04).texture,t.add(Kb()),t.add(Zb());let n=new He(new Wr(5,64),new qr({opacity:.22}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new He(new $r(2.3,2.33,128),new rn({color:10254925,transparent:!0,opacity:.35,side:2}));s.rotation.x=-Math.PI/2,s.position.y=.005,t.add(s);let r=new gt;t.add(r);let a=new vt(32,1,.1,100);a.position.set(5,3,6.5),a.lookAt(0,.7,0);let o=()=>{let l=i.parentElement,h=l.clientWidth||1,u=l.clientHeight||1;e.setSize(h,u,!1),a.aspect=h/u,a.updateProjectionMatrix()};new ResizeObserver(o).observe(i.parentElement);let c=!0;return new IntersectionObserver(l=>c=l[0].isIntersecting).observe(i),{update(){if(r.clear(),we("st-pv-empty").style.display=Qe.length?"none":"grid",!Qe.length)return;let l=new gt;Qe.forEach(m=>{let b=Ro(m.type,Xi);b.position.copy(m.g.position),b.rotation.y=m.rot*Math.PI/2,To(b),l.add(b)});let{sx:h,sz:u,cx:d,cz:f}=dl();l.position.set(-d,0,-f),r.add(l),r.scale.setScalar(Math.min(1.8,3.4/Math.max(h,u,.5)))},tick(l){c&&(r.rotation.y+=l*.45,e.render(t,a))}}})();Pd=performance.now();(function i(e){requestAnimationFrame(i);let t=Math.min((e-Pd)/1e3,.05);Pd=e,Eo.clientWidth&&(_i.update(),wn&&ul.setFromObject(wn.g),xa.render(In,ga)),c0.tick(t)})(Pd);ti();jb=new URLSearchParams(location.search).get("design");jb&&xt.designs().then(i=>{let e=i.find(n=>n.id===jb);if(!e)return;let t=ji.findIndex(n=>n[2]===e.fabricId);t<0&&(t=Math.min(Math.max(0,e.fabric|0),ji.length-1)),Xi=ji[t][1],or=ji[t],ma.fabric=or,Dd=!0,we("st-fab").textContent=ji[t][0],we("st-fsw-fabric").querySelectorAll("button").forEach((n,s)=>n.classList.toggle("on",s===t)),fl(),e.items.forEach(n=>{if(!Zt[n.type])return;let s={type:n.type,rot:n.rot||0,g:Ro(n.type,Xi)};s.g.position.set(n.x,0,n.z),s.g.rotation.y=s.rot*Math.PI/2,Qe.push(s),In.add(s.g)}),we("st-start").style.display="none",ti()})});var KE={};var pl,h0=ze(()=>{pn();Xs();pl=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.getElementById("fabs").innerHTML=gi.map(i=>`<a class="fab" href="fabric.html?id=${encodeURIComponent(i.id)}" style="--c:${pl(i.hex)}" aria-label="${pl(i.name)}"><img alt="" src="${pl(i.image||js(i.hex,320).toDataURL("image/jpeg",.85))}"><span>${pl(i.name)}</span></a>`).join("")});Nn();qd.then(async()=>{let i=e=>document.getElementById(e);await Promise.resolve().then(()=>(Tg(),Rw)),i("hero-canvas")&&await Promise.resolve().then(()=>(Ig(),Pw)),document.querySelector("[data-cards]")&&await Promise.resolve().then(()=>(kg(),Lw)),i("p-canvas")&&await Promise.resolve().then(()=>(xb(),yE)),i("f")&&await Promise.resolve().then(()=>(wb(),xE)),i("basket-list")&&await Promise.resolve().then(()=>(Ab(),vE)),i("co-form")&&await Promise.resolve().then(()=>(Tb(),ME)),i("cmp-grid")&&await Promise.resolve().then(()=>(Ib(),EE)),i("oc")&&await Promise.resolve().then(()=>(Nb(),TE)),i("fab-detail")&&await Promise.resolve().then(()=>(Ob(),RE)),i("acc")&&await Promise.resolve().then(()=>(Fb(),CE)),i("dl-models")&&await Promise.resolve().then(()=>(kb(),IE)),i("shop-grid")&&await Promise.resolve().then(()=>(Hb(),UE)),i("st-canvas")&&await Promise.resolve().then(()=>(l0(),YE)),i("fabs")&&await Promise.resolve().then(()=>(h0(),KE))});})();
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
