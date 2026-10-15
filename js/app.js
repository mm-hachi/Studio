(()=>{var kb=Object.defineProperty;var Fe=(i,e)=>()=>(i&&(e=i(i=0)),e);var Ad=(i,e)=>{for(var t in e)kb(i,t,{get:e[t],enumerable:!0})};var yo,Rd,we,rl,vo,xt,Bb,er,Cd,zb,Ss,tr,Pd,Ld,ma,nr,Hb,mt,Id,Dd,Td,_o,Nd,Gb,So,Ud,ei,Od,En,Fd,kd,Bd,al,zd,Hd,Gd,Vd,ol,An=Fe(()=>{yo="dekara-cfg",Rd={};try{Rd=JSON.parse(localStorage.getItem(yo)||"{}")}catch{}we={products:{}},rl={},vo={},xt={models:{},documents:null},Bb=()=>new Promise((i,e)=>{let t=indexedDB.open("dekara-media",1);t.onupgradeneeded=()=>t.result.createObjectStore("f"),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)}),er=(i,e)=>Bb().then(t=>new Promise((n,s)=>{let r=t.transaction("f",i),a=e(r.objectStore("f"));r.oncomplete=()=>n(a.result),r.onerror=()=>s(r.error)})),Cd=(async()=>{try{let e=await fetch("data/site.json",{cache:"no-store"});if(e.ok){let t=await e.json();Object.assign(xt,t),Object.assign(rl,JSON.parse(JSON.stringify(t)))}}catch{}let i=Rd;if(i._publishedAt&&(xt.version||0)>=i._publishedAt){i={};try{localStorage.removeItem(yo)}catch{}await er("readwrite",e=>e.clear()).catch(()=>{})}Object.assign(we,JSON.parse(JSON.stringify(xt.config||{})),i),we.products??={},!xt.apiBase&&we.site?.apiBase&&(xt.apiBase=we.site.apiBase);try{let e=await er("readonly",n=>n.getAllKeys()),t=await er("readonly",n=>n.getAll());e.forEach((n,s)=>vo[n]={url:URL.createObjectURL(t[s].blob),type:t[s].type||"",name:t[s].name})}catch(e){console.warn("Media store unavailable",e)}})(),zb=i=>{if((we._removed||[]).includes(i))return null;let e=xt.files?.[i];return e?{url:e.path,type:e.type||"",name:e.name||e.path.split("/").pop(),repo:!0}:null},Ss=i=>vo[i]||zb(i),tr=i=>Ss(i)?.url||null,Pd=i=>vo[i]||null,Ld=()=>Object.keys(vo),ma=(i,e)=>(we._removed?.includes(i)&&(we._removed=we._removed.filter(t=>t!==i),mt()),er("readwrite",t=>t.put({blob:e,type:e.type||(/\.(mp4|m4v|mov|webm|ogv)$/i.test(e.name)?"video/mp4":""),name:e.name},i))),nr=async i=>{try{await er("readwrite",e=>e.delete(i))}catch{}if(xt.files?.[i]){let e=we._removed??=[];e.includes(i)||e.push(i),mt()}},Hb=()=>er("readwrite",i=>i.clear()),mt=()=>localStorage.setItem(yo,JSON.stringify(we)),Id=(i,e,t)=>{(we.products[i]??={})[e]=e==="price"?Number(t)||0:t,mt()},Dd=i=>{Object.keys(we).forEach(e=>delete we[e]),Object.assign(we,i),we.products??={},mt()},Td={maxPieces:12,maxWidth:500,maxDepth:400,snap:!0,enabled:{seat:!0,corner:!0,chaise:!0,ottoman:!0,arm:!0},prices:{seat:6500,corner:7200,chaise:8800,ottoman:3900,arm:1800},max:{seat:0,corner:0,chaise:0,ottoman:0,arm:0},presets:{1:!0,2:!0,3:!0,4:!0}},_o=()=>{let i=we.studio||{},e=t=>({...Td[t],...i[t]||{}});return{...Td,...i,enabled:e("enabled"),prices:e("prices"),max:e("max"),presets:e("presets")}},Nd=(i,e)=>{let t=i.split("."),n=we.studio??={};t.slice(0,-1).forEach(s=>n=n[s]??={}),n[t[t.length-1]]=e,mt()},Gb={delivery:950,payNow:!0},So=()=>({...Gb,...we.shop||{}}),Ud=(i,e)=>{(we.shop??={})[i]=e,mt()},ei=()=>we.site||{},Od=(i,e)=>{(we.site??={})[i]=e,mt()},En=()=>we.collections??=[],Fd=i=>{(we.added??=[]).push(i),mt()},kd=(i,e,t)=>{((we.mapping??={})[i]??={})[e]=t,mt()},Bd=(i,e)=>{we.mapping?.[i]&&delete we.mapping[i][e],mt()},al=(i,e)=>{(we.pieceFabrics??={})[i]=e,mt()},zd=i=>{(we.addedFabrics??=[]).push(i),mt()},Hd=(i,e,t)=>{((we.fabricEdits??={})[i]??={})[e]=t,mt()},Gd=i=>{let e=we.addedFabrics||[];e.some(t=>t.id===i)?we.addedFabrics=e.filter(t=>t.id!==i):(we.deletedFabrics??=[]).push(i),mt()},Vd=i=>{(we.added||[]).some(e=>e.id===i)?we.added=we.added.filter(e=>e.id!==i):(we.deleted??=[]).push(i),mt()},ol=async()=>{await Hb();try{localStorage.removeItem(yo)}catch{}}});var Ms,yn,cl,Wd,qd,Tn,Xd,$d=Fe(()=>{Ms=["Sofas","Dining Sets","Bedroom","Tables","Chairs","Plasma Stands"],yn=(i,e,t,n,s,r,a,o,c)=>({id:i,name:e,cat:t,sub:n,tag:s,price:r,dims:a,mat:o,desc:c,kind:i}),cl=[yn("sofa","Sandton Sofa","Sofas","Sofas","Three-seater \xB7 Made to order",18900,[220,95,85],"Hardwood frame, high-density foam","Deep seats, soft shoulders and a frame built to last. Choose your fabric and size and we build it to fit your space."),yn("chaise","Bryanston Chaise Sofa","Sofas","Chaise Lounge","Two-seater with chaise",24500,[270,175,85],"Hardwood frame, high-density foam","A generous chaise end for long afternoons. Made to order in your choice of fabric."),yn("armchair","Fourways Armchair","Chairs","Arm Chairs","Accent armchair",8900,[85,88,90],"Hardwood frame, turned oak feet","A generous accent chair with a supportive back and wide arms. Comfortable enough to live in."),yn("bar","Parktown Bar Chair","Chairs","Bar Chairs","Upholstered bar chair",2900,[45,45,105],"Steel frame, upholstered seat","A supportive bar chair with a footrest ring and padded back, suited to kitchen islands and home bars."),yn("dchair","Melville Dining Chair","Chairs","Dining Chairs","Upholstered dining chair",2400,[48,52,92],"Hardwood legs, upholstered seat","A comfortable, hard-wearing dining chair that pairs with any table in the range."),yn("dtable","Rivonia Dining Table","Tables","Dining Room Tables","Six-seater dining table",14500,[200,100,76],"Solid hardwood","A solid table for long dinners, sized for six and finished to suit your room."),yn("coffee","Rosebank Coffee Table","Tables","Coffee Tables","Round coffee table",6400,[110,110,42],"Solid oak top, lower shelf","A solid round table with a lower shelf for books and bowls."),yn("console","Illovo Console","Tables","Consoles","Slim hallway console",7800,[160,40,82],"Hardwood with lower shelf","A slim console for entrances and living areas, with a shelf for baskets and books."),yn("dset","Morningside Dining Set","Dining Sets","Dining Sets","Table and four chairs",24900,[160,90,76],"Hardwood table, upholstered chairs","A complete dining set: a solid table with four upholstered chairs, ready for the table."),yn("ottoman","Melrose Ottoman","Bedroom","Ottomans","Upholstered ottoman",3900,[60,60,45],"Hardwood frame, upholstered","Footstool, bench or bed-end. A quietly versatile piece in any fabric."),yn("headboard","Houghton Headboard","Bedroom","Headboards","Upholstered headboard",6200,[200,12,120],"Hardwood frame, upholstered panel","A tall upholstered headboard that anchors the bed. Sized to your mattress."),yn("bedside","Craighall Night Stand","Bedroom","Night Stands","Single-drawer night stand",3200,[55,40,50],"Solid hardwood","A compact night stand with a deep drawer and brass handle."),yn("dresser","Hyde Park Dresser","Bedroom","Dressers","Three-drawer dresser",12900,[160,50,85],"Solid hardwood","Generous storage with soft-closing drawers and brass hardware."),yn("tv","Sunninghill Plasma Stand","Plasma Stands","Plasma Stands","Low media unit",7900,[180,42,60],"Solid hardwood","A low media unit with open shelves, sized for modern screens.")],Wd=["sofa","armchair","coffee","ottoman"],qd=[["Oyster","#d4cabb"],["Sage","#8a967c"],["Charcoal","#3a3a3c"],["Terracotta","#b0654a"],["Navy","#26344d"],["Mustard","#b8923a"],["Blush","#d7b5ab"],["Forest","#33473a"]],Tn=[["Walnut","#5b3f26"],["Natural oak","#a8825a"],["Ebony","#1f1a17"],["Ash","#c2b59b"]],Xd={Oyster:"A soft, warm neutral with a hint of grey. Easy to live with, and pairs well with natural wood and brass.",Sage:"A muted green with a calm, earthy feel. Brings colour without overwhelming a room.",Charcoal:"A deep, versatile grey that anchors lighter interiors.",Terracotta:"A warm, clay-inspired red-orange that adds instant character.",Navy:"A rich, dark blue with a classic, tailored look.",Mustard:"A warm golden yellow for confident accent pieces.",Blush:"A gentle, dusty pink that softens a space.",Forest:"A deep green with a refined, traditional feel."}});function Xn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Th(i,e){return(i%e+e)%e}function H0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function G0(i,e,t){return i!==e?(t-i)/(e-i):0}function wa(i,e,t){return(1-t)*i+t*e}function V0(i,e,t,n){return wa(i,e,1-Math.exp(-t*n))}function W0(i,e=1){return e-Math.abs(Th(i,e*2)-e)}function q0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function X0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function j0(i,e){return i+Math.random()*(e-i)}function Y0(i){return i*(.5-Math.random())}function K0(i){i!==void 0&&(If=i);let e=If+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Z0(i){return i*Ma}function J0(i){return i*Pr}function jl(i){return(i&i-1)===0&&i!==0}function Q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ic(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ex(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Kp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tx(){let i=Ra("canvas");return i.style.display="block",i}function Ea(i){i in Df||(Df[i]=!0,console.warn(i))}function wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function yl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Es.fromArray(i,r);let o=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=e.dot(Es),l=t.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function mx(i,e,t,n,s,r,a,o){let c;if(e.side===sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ii,o),c===null)return null;zo.copy(o),zo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(zo);return l<t.near||l>t.far?null:{distance:l,point:zo.clone(),object:i}}function Ho(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fr),i.getVertexPosition(c,pr),i.getVertexPosition(l,mr);let h=mx(i,e,t,n,fr,pr,mr,Bo);if(h){s&&(Oo.fromBufferAttribute(s,o),Fo.fromBufferAttribute(s,c),ko.fromBufferAttribute(s,l),h.uv=vr.getInterpolation(Bo,fr,pr,mr,Oo,Fo,ko,new Te)),r&&(Oo.fromBufferAttribute(r,o),Fo.fromBufferAttribute(r,c),ko.fromBufferAttribute(r,l),h.uv1=vr.getInterpolation(Bo,fr,pr,mr,Oo,Fo,ko,new Te),h.uv2=h.uv1),a&&(Xf.fromBufferAttribute(a,o),$f.fromBufferAttribute(a,c),jf.fromBufferAttribute(a,l),h.normal=vr.getInterpolation(Bo,fr,pr,mr,Xf,$f,jf,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};vr.getNormal(fr,pr,mr,u.normal),h.face=u}return h}function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let s in n)e[s]=n[s]}return e}function gx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jp(i){return i.getRenderTarget()===null?i.outputColorSpace:at.workingColorSpace}function Qp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sx(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let b;if(u instanceof Float32Array)b=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=i.SHORT;else if(u instanceof Uint32Array)b=i.UNSIGNED_INT;else if(u instanceof Int32Array)b=i.INT;else if(u instanceof Int8Array)b=i.BYTE;else if(u instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}function n_(i,e,t,n,s,r,a){let o=new Se(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),y=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ac)?(h===void 0&&(h=new ze(new Ci(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Ir(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=at.getTransfer(x.colorSpace)!==gt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ze(new Os(2,2),new jn({name:"BackgroundMaterial",uniforms:Ir(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=at.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function b(m,p){m.getRGB(Vo,Jp(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function i_(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null),l=c,h=!1;function u(L,N,H,q,$){let X=!1;if(a){let Z=b(q,H,N);l!==Z&&(l=Z,f(l.object)),X=p(L,q,H,$),X&&y(L,q,H,$)}else{let Z=N.wireframe===!0;(l.geometry!==q.id||l.program!==H.id||l.wireframe!==Z)&&(l.geometry=q.id,l.program=H.id,l.wireframe=Z,X=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,D(L,N,H,q),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function b(L,N,H){let q=H.wireframe===!0,$=o[L.id];$===void 0&&($={},o[L.id]=$);let X=$[N.id];X===void 0&&(X={},$[N.id]=X);let Z=X[q];return Z===void 0&&(Z=m(d()),X[q]=Z),Z}function m(L){let N=[],H=[],q=[];for(let $=0;$<s;$++)N[$]=0,H[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:q,object:L,attributes:{},index:null}}function p(L,N,H,q){let $=l.attributes,X=N.attributes,Z=0,K=H.getAttributes();for(let ue in K)if(K[ue].location>=0){let j=$[ue],re=X[ue];if(re===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;Z++}return l.attributesNum!==Z||l.index!==q}function y(L,N,H,q){let $={},X=N.attributes,Z=0,K=H.getAttributes();for(let ue in K)if(K[ue].location>=0){let j=X[ue];j===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let re={};re.attribute=j,j&&j.data&&(re.data=j.data),$[ue]=re,Z++}l.attributes=$,l.attributesNum=Z,l.index=q}function x(){let L=l.newAttributes;for(let N=0,H=L.length;N<H;N++)L[N]=0}function v(L){R(L,0)}function R(L,N){let H=l.newAttributes,q=l.enabledAttributes,$=l.attributeDivisors;H[L]=1,q[L]===0&&(i.enableVertexAttribArray(L),q[L]=1),$[L]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),$[L]=N)}function T(){let L=l.newAttributes,N=l.enabledAttributes;for(let H=0,q=N.length;H<q;H++)N[H]!==L[H]&&(i.disableVertexAttribArray(H),N[H]=0)}function A(L,N,H,q,$,X,Z){Z===!0?i.vertexAttribIPointer(L,N,H,$,X):i.vertexAttribPointer(L,N,H,q,$,X)}function D(L,N,H,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let $=q.attributes,X=H.getAttributes(),Z=N.defaultAttributeValues;for(let K in X){let ue=X[K];if(ue.location>=0){let V=$[K];if(V===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){let j=V.normalized,re=V.itemSize,ye=t.get(V);if(ye===void 0)continue;let be=ye.buffer,te=ye.type,me=ye.bytesPerElement,fe=n.isWebGL2===!0&&(te===i.INT||te===i.UNSIGNED_INT||V.gpuType===Bp);if(V.isInterleavedBufferAttribute){let Le=V.data,F=Le.stride,Rt=V.offset;if(Le.isInstancedInterleavedBuffer){for(let ve=0;ve<ue.locationSize;ve++)R(ue.location+ve,Le.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ve=0;ve<ue.locationSize;ve++)v(ue.location+ve);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ve=0;ve<ue.locationSize;ve++)A(ue.location+ve,re/ue.locationSize,te,j,F*me,(Rt+re/ue.locationSize*ve)*me,fe)}else{if(V.isInstancedBufferAttribute){for(let Le=0;Le<ue.locationSize;Le++)R(ue.location+Le,V.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Le=0;Le<ue.locationSize;Le++)v(ue.location+Le);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Le=0;Le<ue.locationSize;Le++)A(ue.location+Le,re/ue.locationSize,te,j,re*me,re/ue.locationSize*Le*me,fe)}}else if(Z!==void 0){let j=Z[K];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ue.location,j);break;case 3:i.vertexAttrib3fv(ue.location,j);break;case 4:i.vertexAttrib4fv(ue.location,j);break;default:i.vertexAttrib1fv(ue.location,j)}}}}T()}function S(){z();for(let L in o){let N=o[L];for(let H in N){let q=N[H];for(let $ in q)g(q[$].object),delete q[$];delete N[H]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;let N=o[L.id];for(let H in N){let q=N[H];for(let $ in q)g(q[$].object),delete q[$];delete N[H]}delete o[L.id]}function U(L){for(let N in o){let H=o[N];if(H[L.id]===void 0)continue;let q=H[L.id];for(let $ in q)g(q[$].object),delete q[$];delete H[L.id]}}function z(){Y(),h=!0,l!==c&&(l=c,f(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:z,resetDefaultState:Y,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:v,disableUnusedAttributes:T}}function s_(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function r_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,v=a||e.has("OES_texture_float"),R=x&&v,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:R,maxSamples:T}}function a_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pn,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,x=y*4,v=p.clippingState||null;c.value=v,v=h(g,d,x,f);for(let R=0;R!==x;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==b;++x,v+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function o_(i){let e=new WeakMap;function t(a,o){return o===Wl?a.mapping=Ar:o===ql&&(a.mapping=Tr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wl||o===ql)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Jl(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function c_(i){let e=[],t=[],n=[],s=i,r=i-_r+1+Yf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-_r?c=Yf[a-i+_r-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,y=new Float32Array(b*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,D=T>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(S,b*g*T),x.set(d,m*g*T);let w=[T,T,T,T,T,T];v.set(w,p*g*T)}let R=new Ot;R.setAttribute("position",new it(y,b)),R.setAttribute("uv",new it(x,m)),R.setAttribute("faceIndex",new it(v,p)),e.push(R),s>_r&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jf(i,e,t){let n=new Ti(i,e,t);return n.texture.mapping=Ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function l_(i,e,t){let n=new Float32Array(Ps),s=new P(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Qf(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ep(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function h_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Wl||c===ql,h=c===Ar||c===Tr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Pi(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Pi(i));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function u_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let y=f.array;b=f.version;for(let x=0,v=y.length;x<v;x+=3){let R=y[x+0],T=y[x+1],A=y[x+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){let y=g.array;b=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let R=x+0,T=x+1,A=x+2;d.push(R,T,T,A,A,R)}}else return;let m=new(Kp(d)?cc:oc)(d,1);m.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function f_(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*c),t.update(g,r,1)}function u(f,g,b){if(b===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,b),t.update(g,r,b)}function d(f,g,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,b);let p=0;for(let y=0;y<b;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function p_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,e){return i[0]-e[0]}function g_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function b_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new ut,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,b=r.get(h);if(b===void 0||b.count!==g){let L=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",L)};b!==void 0&&b.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],D=0;y===!0&&(D=1),x===!0&&(D=2),v===!0&&(D=3);let S=h.attributes.position.count*D,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let U=new Float32Array(S*w*4*g),z=new rc(U,S,w,g);z.type=wi,z.needsUpdate=!0;let Y=D*4;for(let N=0;N<g;N++){let H=R[N],q=T[N],$=A[N],X=S*w*4*N;for(let Z=0;Z<H.count;Z++){let K=Z*Y;y===!0&&(a.fromBufferAttribute(H,Z),U[X+K+0]=a.x,U[X+K+1]=a.y,U[X+K+2]=a.z,U[X+K+3]=0),x===!0&&(a.fromBufferAttribute(q,Z),U[X+K+4]=a.x,U[X+K+5]=a.y,U[X+K+6]=a.z,U[X+K+7]=0),v===!0&&(a.fromBufferAttribute($,Z),U[X+K+8]=a.x,U[X+K+9]=a.y,U[X+K+10]=a.z,U[X+K+11]=$.itemSize===4?a.w:1)}}b={count:g,texture:z,size:new Te(S,w)},r.set(h,b),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let v=g[x];v[0]=x,v[1]=d[x]}g.sort(g_);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(m_);let b=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let v=o[x],R=v[0],T=v[1];R!==Number.MAX_SAFE_INTEGER&&T?(b&&h.getAttribute("morphTarget"+x)!==b[R]&&h.setAttribute("morphTarget"+x,b[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),s[x]=T,p+=T):(b&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function x_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function Gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=tp[s];if(r===void 0&&(r=new Float32Array(s),tp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cc(i,e){let t=np[e];t===void 0&&(t=new Int32Array(e),np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function M_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;rp.set(n),i.uniformMatrix2fv(this.addr,!1,rp),kt(t,n)}}function w_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;sp.set(n),i.uniformMatrix3fv(this.addr,!1,sp),kt(t,n)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;ip.set(n),i.uniformMatrix4fv(this.addr,!1,ip),kt(t,n)}}function A_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function P_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?tm:em;t.setTexture2D(e||r,s)}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||im,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sm,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nm,s)}function k_(i){switch(i){case 5126:return y_;case 35664:return v_;case 35665:return __;case 35666:return S_;case 35674:return M_;case 35675:return w_;case 35676:return E_;case 5124:case 35670:return A_;case 35667:case 35671:return T_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return L_;case 36295:return I_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return F_}}function B_(i,e){i.uniform1fv(this.addr,e)}function z_(i,e){let t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function H_(i,e){let t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function G_(i,e){let t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function V_(i,e){let t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W_(i,e){let t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q_(i,e){let t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function X_(i,e){i.uniform1iv(this.addr,e)}function $_(i,e){i.uniform2iv(this.addr,e)}function j_(i,e){i.uniform3iv(this.addr,e)}function Y_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function Z_(i,e){i.uniform2uiv(this.addr,e)}function J_(i,e){i.uniform3uiv(this.addr,e)}function Q_(i,e){i.uniform4uiv(this.addr,e)}function eS(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||em,r[a])}function tS(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||im,r[a])}function nS(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sm,r[a])}function iS(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nm,r[a])}function sS(i){switch(i){case 5126:return B_;case 35664:return z_;case 35665:return H_;case 35666:return G_;case 35674:return V_;case 35675:return W_;case 35676:return q_;case 5124:case 35670:return X_;case 35667:case 35671:return $_;case 35668:case 35672:return j_;case 35669:case 35673:return Y_;case 5125:return K_;case 36294:return Z_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return eS;case 35679:case 36299:case 36307:return tS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}function ap(i,e){i.seq.push(e),i.map[e.id]=e}function rS(i,e,t){let n=i.name,s=n.length;for(Ol.lastIndex=0;;){let r=Ol.exec(n),a=Ol.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ap(t,l===void 0?new Ql(o,i,e):new eh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new th(o),ap(t,u)),t=u}}}function op(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function cS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function lS(i){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i),n;switch(e===t?n="":e===tc&&t===ec?n="LinearDisplayP3ToLinearSRGB":e===ec&&t===tc&&(n="LinearSRGBToLinearDisplayP3"),i){case Nt:case Rc:return[n,"LinearTransferOETF"];case nt:case Ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+cS(i.getShaderSource(e),a)}else return s}function hS(i,e){let t=lS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uS(i,e){let t;switch(e){case g0:t="Linear";break;case b0:t="Reinhard";break;case x0:t="OptimizedCineon";break;case za:t="ACESFilmic";break;case v0:t="AgX";break;case y0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function fS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Sr).join(`
`)}function pS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Sr(i){return i!==""}function lp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function nh(i){return i.replace(gS,xS)}function xS(i,e){let t=Ge[e];if(t===void 0){let n=bS.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}function up(i){return i.replace(yS,vS)}function vS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dp(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _S(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ba?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function SS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Tr:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function wS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fp:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function ES(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=_S(t),l=SS(t),h=MS(t),u=wS(t),d=ES(t),f=t.isWebGL2?"":dS(t),g=fS(t),b=pS(r),m=s.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Sr).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Sr).join(`
`),y.length>0&&(y+=`
`)):(p=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),y=[f,dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Yi?uS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,hS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=nh(a),a=lp(a,t),a=hp(a,t),o=nh(o),o=lp(o,t),o=hp(o,t),a=up(a),o=up(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=x+p+a,R=x+y+o,T=op(s,s.VERTEX_SHADER,v),A=op(s,s.FRAGMENT_SHADER,R);s.attachShader(m,T),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(z){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(A).trim(),H=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,A);else{let $=cp(s,T,"vertex"),X=cp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+$+`
`+X)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(L===""||N==="")&&(q=!1);q&&(z.diagnostics={runnable:H,programLog:Y,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:y}})}s.deleteShader(T),s.deleteShader(A),S=new Er(s,m),w=mS(s,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,aS)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}function RS(i,e,t,n,s,r,a){let o=new Ca,c=new ih,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return S===0?"uv":`uv${S}`}function m(S,w,U,z,Y){let L=z.fog,N=Y.geometry,H=S.isMeshStandardMaterial?z.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),$=q&&q.mapping===Ac?q.image.height:null,X=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,K=Z!==void 0?Z.length:0,ue=0;N.morphAttributes.position!==void 0&&(ue=1),N.morphAttributes.normal!==void 0&&(ue=2),N.morphAttributes.color!==void 0&&(ue=3);let V,j,re,ye;if(X){let hn=ti[X];V=hn.vertexShader,j=hn.fragmentShader}else V=S.vertexShader,j=S.fragmentShader,c.update(S),re=c.getVertexShaderID(S),ye=c.getFragmentShaderID(S);let be=i.getRenderTarget(),te=Y.isInstancedMesh===!0,me=Y.isBatchedMesh===!0,fe=!!S.map,Le=!!S.matcap,F=!!q,Rt=!!S.aoMap,ve=!!S.lightMap,Re=!!S.bumpMap,xe=!!S.normalMap,ct=!!S.displacementMap,Ne=!!S.emissiveMap,E=!!S.metalnessMap,_=!!S.roughnessMap,k=S.anisotropy>0,ie=S.clearcoat>0,ee=S.iridescence>0,ne=S.sheen>0,_e=S.transmission>0,de=k&&!!S.anisotropyMap,ge=ie&&!!S.clearcoatMap,Pe=ie&&!!S.clearcoatNormalMap,ke=ie&&!!S.clearcoatRoughnessMap,Q=ee&&!!S.iridescenceMap,Ke=ee&&!!S.iridescenceThicknessMap,C=ne&&!!S.sheenColorMap,J=ne&&!!S.sheenRoughnessMap,le=!!S.specularMap,se=!!S.specularColorMap,Me=!!S.specularIntensityMap,qe=_e&&!!S.transmissionMap,Ze=_e&&!!S.thicknessMap,Ve=!!S.gradientMap,ce=!!S.alphaMap,I=S.alphaTest>0,ae=!!S.alphaHash,oe=!!S.extensions,Ce=!!N.attributes.uv1,Ee=!!N.attributes.uv2,tt=!!N.attributes.uv3,st=Yi;return S.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(st=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:j,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:me,instancing:te,instancingColor:te&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Nt,map:fe,matcap:Le,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:$,aoMap:Rt,lightMap:ve,bumpMap:Re,normalMap:xe,displacementMap:d&&ct,emissiveMap:Ne,normalMapObjectSpace:xe&&S.normalMapType===D0,normalMapTangentSpace:xe&&S.normalMapType===jp,metalnessMap:E,roughnessMap:_,anisotropy:k,anisotropyMap:de,clearcoat:ie,clearcoatMap:ge,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Ke,sheen:ne,sheenColorMap:C,sheenRoughnessMap:J,specularMap:le,specularColorMap:se,specularIntensityMap:Me,transmission:_e,transmissionMap:qe,thicknessMap:Ze,gradientMap:Ve,opaque:S.transparent===!1&&S.blending===Mr,alphaMap:ce,alphaTest:I,alphaHash:ae,combine:S.combine,mapUv:fe&&b(S.map.channel),aoMapUv:Rt&&b(S.aoMap.channel),lightMapUv:ve&&b(S.lightMap.channel),bumpMapUv:Re&&b(S.bumpMap.channel),normalMapUv:xe&&b(S.normalMap.channel),displacementMapUv:ct&&b(S.displacementMap.channel),emissiveMapUv:Ne&&b(S.emissiveMap.channel),metalnessMapUv:E&&b(S.metalnessMap.channel),roughnessMapUv:_&&b(S.roughnessMap.channel),anisotropyMapUv:de&&b(S.anisotropyMap.channel),clearcoatMapUv:ge&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:C&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:J&&b(S.sheenRoughnessMap.channel),specularMapUv:le&&b(S.specularMap.channel),specularColorMapUv:se&&b(S.specularColorMap.channel),specularIntensityMapUv:Me&&b(S.specularIntensityMap.channel),transmissionMapUv:qe&&b(S.transmissionMap.channel),thicknessMapUv:Ze&&b(S.thicknessMap.channel),alphaMapUv:ce&&b(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xe||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ee,vertexUv3s:tt,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(fe||ce),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,useLegacyLights:i._useLegacyLights,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xt,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)w.push(U),w.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(y(w,S),x(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function v(S){let w=g[S.type],U;if(w){let z=ti[w];U=bx.clone(z.uniforms)}else U=S.uniforms;return U}function R(S,w){let U;for(let z=0,Y=l.length;z<Y;z++){let L=l[z];if(L.cacheKey===w){U=L,++U.usedTimes;break}}return U===void 0&&(U=new AS(i,w,S,r),l.push(U)),U}function T(S){if(--S.usedTimes===0){let w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function A(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:D}}function CS(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function PS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,b,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||PS),n.length>1&&n.sort(d||fp),s.length>1&&s.sort(d||fp)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function LS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pp,i.set(n,[a])):s>=r.length?(a=new pp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function IS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Se};break;case"SpotLight":t={position:new P,direction:new P,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function DS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function US(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function OS(i,e){let t=new IS,n=DS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,a=new He,o=new He;function c(h,u){let d=0,f=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let b=0,m=0,p=0,y=0,x=0,v=0,R=0,T=0,A=0,D=0,S=0;h.sort(US);let w=u===!0?Math.PI:1;for(let z=0,Y=h.length;z<Y;z++){let L=h[z],N=L.color,H=L.intensity,q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=N.r*H*w,f+=N.g*H*w,g+=N.b*H*w;else if(L.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(L.sh.coefficients[X],H);S++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let Z=L.shadow,K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.directionalShadow[b]=K,s.directionalShadowMap[b]=$,s.directionalShadowMatrix[b]=L.shadow.matrix,v++}s.directional[b]=X,b++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(H*w),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,s.spot[p]=X;let Z=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,Z.updateMatrices(L),L.castShadow&&D++),s.spotLightMatrix[p]=Z.matrix,L.castShadow){let K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.spotShadow[p]=K,s.spotShadowMap[p]=$,T++}p++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(N).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=X,y++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity*w),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Z=L.shadow,K=n.get(L);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,s.pointShadow[m]=K,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=L.shadow.matrix,R++}s.point[m]=X,m++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(H*w),X.groundColor.copy(L.groundColor).multiplyScalar(H*w),s.hemi[x]=X,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=he.LTC_FLOAT_1,s.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=he.LTC_HALF_1,s.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==b||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==x||U.numDirectionalShadows!==v||U.numPointShadows!==R||U.numSpotShadows!==T||U.numSpotMaps!==A||U.numLightProbes!==S)&&(s.directional.length=b,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+A-D,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=S,U.directionalLength=b,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=x,U.numDirectionalShadows=v,U.numPointShadows=R,U.numSpotShadows=T,U.numSpotMaps=A,U.numLightProbes=S,s.version=NS++)}function l(h,u){let d=0,f=0,g=0,b=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let v=h[y];if(v.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(v.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let R=s.rectArea[b];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function mp(i,e){let t=new OS(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function FS(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new mp(i,e),t.set(r,[c])):a>=o.length?(c=new mp(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}function zS(i,e,t){let n=new Pa,s=new Te,r=new Te,a=new ut,o=new rh({depthPacking:I0}),c=new ah,l={},h=t.maxTextureSize,u={[ii]:sn,[sn]:ii,[Xt]:Xt},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:kS,fragmentShader:BS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op;let p=this.type;this.render=function(T,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ji),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Y=p!==Mi&&this.type===Mi,L=p===Mi&&this.type!==Mi;for(let N=0,H=T.length;N<H;N++){let q=T[N],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let X=$.getFrameExtents();if(s.multiply(X),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,$.mapSize.y=r.y)),$.map===null||Y===!0||L===!0){let K=this.type!==Mi?{minFilter:Dt,magFilter:Dt}:{};$.map!==null&&$.map.dispose(),$.map=new Ti(s.x,s.y,K),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let Z=$.getViewportCount();for(let K=0;K<Z;K++){let ue=$.getViewport(K);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),z.viewport(a),$.updateMatrices(q,K),n=$.getFrustum(),v(A,D,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===Mi&&y($,D),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,U)};function y(T,A){let D=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,f,b,null)}function x(T,A,D,S){let w=null,U=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)w=U;else if(w=D.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=w.uuid,Y=A.uuid,L=l[z];L===void 0&&(L={},l[z]=L);let N=L[Y];N===void 0&&(N=w.clone(),L[Y]=N,A.addEventListener("dispose",R)),w=N}if(w.visible=A.visible,w.wireframe=A.wireframe,S===Mi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let z=i.properties.get(w);z.light=D}return w}function v(T,A,D,S,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Mi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let Y=e.update(T),L=T.material;if(Array.isArray(L)){let N=Y.groups;for(let H=0,q=N.length;H<q;H++){let $=N[H],X=L[$.materialIndex];if(X&&X.visible){let Z=x(T,X,S,w);T.onBeforeShadow(i,T,A,D,Y,Z,$),i.renderBufferDirect(D,null,Y,Z,T,$),T.onAfterShadow(i,T,A,D,Y,Z,$)}}}else if(L.visible){let N=x(T,L,S,w);T.onBeforeShadow(i,T,A,D,Y,N,null),i.renderBufferDirect(D,null,Y,N,T,null),T.onAfterShadow(i,T,A,D,Y,N,null)}}let z=T.children;for(let Y=0,L=z.length;Y<L;Y++)v(z[Y],A,D,S,w)}function R(T){T.target.removeEventListener("dispose",R);for(let D in l){let S=l[D],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function HS(i,e,t){let n=t.isWebGL2;function s(){let I=!1,ae=new ut,oe=null,Ce=new ut(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!I&&(i.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){I=Ee},setClear:function(Ee,tt,st,Bt,hn){hn===!0&&(Ee*=Bt,tt*=Bt,st*=Bt),ae.set(Ee,tt,st,Bt),Ce.equals(ae)===!1&&(i.clearColor(Ee,tt,st,Bt),Ce.copy(ae))},reset:function(){I=!1,oe=null,Ce.set(-1,0,0,0)}}}function r(){let I=!1,ae=null,oe=null,Ce=null;return{setTest:function(Ee){Ee?me(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Ee){ae!==Ee&&!I&&(i.depthMask(Ee),ae=Ee)},setFunc:function(Ee){if(oe!==Ee){switch(Ee){case o0:i.depthFunc(i.NEVER);break;case c0:i.depthFunc(i.ALWAYS);break;case l0:i.depthFunc(i.LESS);break;case Jo:i.depthFunc(i.LEQUAL);break;case h0:i.depthFunc(i.EQUAL);break;case u0:i.depthFunc(i.GEQUAL);break;case d0:i.depthFunc(i.GREATER);break;case f0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){Ce!==Ee&&(i.clearDepth(Ee),Ce=Ee)},reset:function(){I=!1,ae=null,oe=null,Ce=null}}}function a(){let I=!1,ae=null,oe=null,Ce=null,Ee=null,tt=null,st=null,Bt=null,hn=null;return{setTest:function(pt){I||(pt?me(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(pt){ae!==pt&&!I&&(i.stencilMask(pt),ae=pt)},setFunc:function(pt,un,Qn){(oe!==pt||Ce!==un||Ee!==Qn)&&(i.stencilFunc(pt,un,Qn),oe=pt,Ce=un,Ee=Qn)},setOp:function(pt,un,Qn){(tt!==pt||st!==un||Bt!==Qn)&&(i.stencilOp(pt,un,Qn),tt=pt,st=un,Bt=Qn)},setLocked:function(pt){I=pt},setClear:function(pt){hn!==pt&&(i.clearStencil(pt),hn=pt)},reset:function(){I=!1,ae=null,oe=null,Ce=null,Ee=null,tt=null,st=null,Bt=null,hn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,b=[],m=null,p=!1,y=null,x=null,v=null,R=null,T=null,A=null,D=null,S=new Se(0,0,0),w=0,U=!1,z=null,Y=null,L=null,N=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,X=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=X>=2);let K=null,ue={},V=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),re=new ut().fromArray(V),ye=new ut().fromArray(j);function be(I,ae,oe,Ce){let Ee=new Uint8Array(4),tt=i.createTexture();i.bindTexture(I,tt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<oe;st++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ae+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return tt}let te={};te[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(te[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),me(i.DEPTH_TEST),c.setFunc(Jo),Ne(!1),E(jd),me(i.CULL_FACE),xe(ji);function me(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function fe(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Le(I,ae){return f[I]!==ae?(i.bindFramebuffer(I,ae),f[I]=ae,n&&(I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ae),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function F(I,ae){let oe=b,Ce=!1;if(I)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),I.isWebGLMultipleRenderTargets){let Ee=I.texture;if(oe.length!==Ee.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,st=Ee.length;tt<st;tt++)oe[tt]=i.COLOR_ATTACHMENT0+tt;oe.length=Ee.length,Ce=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Ce=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Rt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let ve={[Cs]:i.FUNC_ADD,[Xb]:i.FUNC_SUBTRACT,[$b]:i.FUNC_REVERSE_SUBTRACT};if(n)ve[Jd]=i.MIN,ve[Qd]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(ve[Jd]=I.MIN_EXT,ve[Qd]=I.MAX_EXT)}let Re={[jb]:i.ZERO,[Yb]:i.ONE,[Kb]:i.SRC_COLOR,[Gl]:i.SRC_ALPHA,[n0]:i.SRC_ALPHA_SATURATE,[e0]:i.DST_COLOR,[Jb]:i.DST_ALPHA,[Zb]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[t0]:i.ONE_MINUS_DST_COLOR,[Qb]:i.ONE_MINUS_DST_ALPHA,[i0]:i.CONSTANT_COLOR,[s0]:i.ONE_MINUS_CONSTANT_COLOR,[r0]:i.CONSTANT_ALPHA,[a0]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(I,ae,oe,Ce,Ee,tt,st,Bt,hn,pt){if(I===ji){p===!0&&(fe(i.BLEND),p=!1);return}if(p===!1&&(me(i.BLEND),p=!0),I!==qb){if(I!==y||pt!==U){if((x!==Cs||T!==Cs)&&(i.blendEquation(i.FUNC_ADD),x=Cs,T=Cs),pt)switch(I){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yd:i.blendFunc(i.ONE,i.ONE);break;case Kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,R=null,A=null,D=null,S.set(0,0,0),w=0,y=I,U=pt}return}Ee=Ee||ae,tt=tt||oe,st=st||Ce,(ae!==x||Ee!==T)&&(i.blendEquationSeparate(ve[ae],ve[Ee]),x=ae,T=Ee),(oe!==v||Ce!==R||tt!==A||st!==D)&&(i.blendFuncSeparate(Re[oe],Re[Ce],Re[tt],Re[st]),v=oe,R=Ce,A=tt,D=st),(Bt.equals(S)===!1||hn!==w)&&(i.blendColor(Bt.r,Bt.g,Bt.b,hn),S.copy(Bt),w=hn),y=I,U=!1}function ct(I,ae){I.side===Xt?fe(i.CULL_FACE):me(i.CULL_FACE);let oe=I.side===sn;ae&&(oe=!oe),Ne(oe),I.blending===Mr&&I.transparent===!1?xe(ji):xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);let Ce=I.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),k(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(I){z!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),z=I)}function E(I){I!==Vb?(me(i.CULL_FACE),I!==Y&&(I===jd?i.cullFace(i.BACK):I===Wb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),Y=I}function _(I){I!==L&&($&&i.lineWidth(I),L=I)}function k(I,ae,oe){I?(me(i.POLYGON_OFFSET_FILL),(N!==ae||H!==oe)&&(i.polygonOffset(ae,oe),N=ae,H=oe)):fe(i.POLYGON_OFFSET_FILL)}function ie(I){I?me(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function ee(I){I===void 0&&(I=i.TEXTURE0+q-1),K!==I&&(i.activeTexture(I),K=I)}function ne(I,ae,oe){oe===void 0&&(K===null?oe=i.TEXTURE0+q-1:oe=K);let Ce=ue[oe];Ce===void 0&&(Ce={type:void 0,texture:void 0},ue[oe]=Ce),(Ce.type!==I||Ce.texture!==ae)&&(K!==oe&&(i.activeTexture(oe),K=oe),i.bindTexture(I,ae||te[I]),Ce.type=I,Ce.texture=ae)}function _e(){let I=ue[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){re.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function qe(I){ye.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ye.copy(I))}function Ze(I,ae){let oe=u.get(ae);oe===void 0&&(oe=new WeakMap,u.set(ae,oe));let Ce=oe.get(I);Ce===void 0&&(Ce=i.getUniformBlockIndex(ae,I.name),oe.set(I,Ce))}function Ve(I,ae){let Ce=u.get(ae).get(I);h.get(ae)!==Ce&&(i.uniformBlockBinding(ae,Ce,I.__bindingPointIndex),h.set(ae,Ce))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},K=null,ue={},f={},g=new WeakMap,b=[],m=null,p=!1,y=null,x=null,v=null,R=null,T=null,A=null,D=null,S=new Se(0,0,0),w=0,U=!1,z=null,Y=null,L=null,N=null,H=null,re.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:me,disable:fe,bindFramebuffer:Le,drawBuffers:F,useProgram:Rt,setBlending:xe,setMaterial:ct,setFlipSided:Ne,setCullFace:E,setLineWidth:_,setPolygonOffset:k,setScissorTest:ie,activeTexture:ee,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:de,compressedTexImage3D:ge,texImage2D:le,texImage3D:se,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:C,texStorage3D:J,texSubImage2D:Pe,texSubImage3D:ke,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:Me,viewport:qe,reset:ce}}function GS(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return f?new OffscreenCanvas(E,_):Ra("canvas")}function b(E,_,k,ie){let ee=1;if((E.width>ie||E.height>ie)&&(ee=ie/Math.max(E.width,E.height)),ee<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ne=_?ic:Math.floor,_e=ne(ee*E.width),de=ne(ee*E.height);u===void 0&&(u=g(_e,de));let ge=k?g(_e,de):u;return ge.width=_e,ge.height=de,ge.getContext("2d").drawImage(E,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_e+"x"+de+")."),ge}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return jl(E.width)&&jl(E.height)}function p(E){return o?!1:E.wrapS!==pn||E.wrapT!==pn||E.minFilter!==Dt&&E.minFilter!==Wt}function y(E,_){return E.generateMipmaps&&_&&E.minFilter!==Dt&&E.minFilter!==Wt}function x(E){i.generateMipmap(E)}function v(E,_,k,ie,ee=!1){if(o===!1)return _;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=_;if(_===i.RED&&(k===i.FLOAT&&(ne=i.R32F),k===i.HALF_FLOAT&&(ne=i.R16F),k===i.UNSIGNED_BYTE&&(ne=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.R8UI),k===i.UNSIGNED_SHORT&&(ne=i.R16UI),k===i.UNSIGNED_INT&&(ne=i.R32UI),k===i.BYTE&&(ne=i.R8I),k===i.SHORT&&(ne=i.R16I),k===i.INT&&(ne=i.R32I)),_===i.RG&&(k===i.FLOAT&&(ne=i.RG32F),k===i.HALF_FLOAT&&(ne=i.RG16F),k===i.UNSIGNED_BYTE&&(ne=i.RG8)),_===i.RGBA){let _e=ee?Qo:at.getTransfer(ie);k===i.FLOAT&&(ne=i.RGBA32F),k===i.HALF_FLOAT&&(ne=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ne=_e===gt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function R(E,_,k){return y(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==Dt&&E.minFilter!==Wt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){return E===Dt||E===Rr||E===Ls?i.NEAREST:i.LINEAR}function A(E){let _=E.target;_.removeEventListener("dispose",A),S(_),_.isVideoTexture&&h.delete(_)}function D(E){let _=E.target;_.removeEventListener("dispose",D),U(_)}function S(E){let _=n.get(E);if(_.__webglInit===void 0)return;let k=E.source,ie=d.get(k);if(ie){let ee=ie[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(E),Object.keys(ie).length===0&&d.delete(k)}n.remove(E)}function w(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let k=E.source,ie=d.get(k);delete ie[_.__cacheKey],a.memory.textures--}function U(E){let _=E.texture,k=n.get(E),ie=n.get(_);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let ne=0;ne<k.__webglFramebuffer[ee].length;ne++)i.deleteFramebuffer(k.__webglFramebuffer[ee][ne]);else i.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)i.deleteFramebuffer(k.__webglFramebuffer[ee]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,ne=_.length;ee<ne;ee++){let _e=n.get(_[ee]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(_[ee])}n.remove(_),n.remove(E)}let z=0;function Y(){z=0}function L(){let E=z;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function N(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function H(E,_){let k=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(k,E,_);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function q(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){re(k,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function $(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){re(k,E,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function X(E,_){let k=n.get(E);if(E.version>0&&k.__version!==E.version){ye(k,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let Z={[$n]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},K={[Dt]:i.NEAREST,[Rr]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},ue={[N0]:i.NEVER,[z0]:i.ALWAYS,[U0]:i.LESS,[Yp]:i.LEQUAL,[O0]:i.EQUAL,[B0]:i.GEQUAL,[F0]:i.GREATER,[k0]:i.NOTEQUAL};function V(E,_,k){if(k?(i.texParameteri(E,i.TEXTURE_WRAP_S,Z[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Z[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Z[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,K[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,K[_.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==pn||_.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(_.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==Dt&&_.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Dt||_.minFilter!==Ls&&_.minFilter!==si||_.type===wi&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function j(E,_){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));let ie=_.source,ee=d.get(ie);ee===void 0&&(ee={},d.set(ie,ee));let ne=N(_);if(ne!==E.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ne].usedTimes++;let _e=ee[E.__cacheKey];_e!==void 0&&(ee[E.__cacheKey].usedTimes--,_e.usedTimes===0&&w(_)),E.__cacheKey=ne,E.__webglTexture=ee[ne].texture}return k}function re(E,_,k){let ie=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=i.TEXTURE_3D);let ee=j(E,_),ne=_.source;t.bindTexture(ie,E.__webglTexture,i.TEXTURE0+k);let _e=n.get(ne);if(ne.version!==_e.__version||ee===!0){t.activeTexture(i.TEXTURE0+k);let de=at.getPrimaries(at.workingColorSpace),ge=_.colorSpace===nn?null:at.getPrimaries(_.colorSpace),Pe=_.colorSpace===nn||de===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ke=p(_)&&m(_.image)===!1,Q=b(_.image,ke,!1,s.maxTextureSize);Q=Ne(_,Q);let Ke=m(Q)||o,C=r.convert(_.format,_.colorSpace),J=r.convert(_.type),le=v(_.internalFormat,C,J,_.colorSpace,_.isVideoTexture);V(ie,_,Ke);let se,Me=_.mipmaps,qe=o&&_.isVideoTexture!==!0&&le!==qp,Ze=_e.__version===void 0||ee===!0,Ve=R(_,Q,Ke);if(_.isDepthTexture)le=i.DEPTH_COMPONENT,o?_.type===wi?le=i.DEPTH_COMPONENT32F:_.type===Xi?le=i.DEPTH_COMPONENT24:_.type===Is?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:_.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ds&&le===i.DEPTH_COMPONENT&&_.type!==Eh&&_.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Xi,J=r.convert(_.type)),_.format===Cr&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,_.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Is,J=r.convert(_.type))),Ze&&(qe?t.texStorage2D(i.TEXTURE_2D,1,le,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,C,J,null));else if(_.isDataTexture)if(Me.length>0&&Ke){qe&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,le,Me[0].width,Me[0].height);for(let ce=0,I=Me.length;ce<I;ce++)se=Me[ce],qe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,C,J,se.data):t.texImage2D(i.TEXTURE_2D,ce,le,se.width,se.height,0,C,J,se.data);_.generateMipmaps=!1}else qe?(Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,le,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,C,J,Q.data)):t.texImage2D(i.TEXTURE_2D,0,le,Q.width,Q.height,0,C,J,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qe&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,le,Me[0].width,Me[0].height,Q.depth);for(let ce=0,I=Me.length;ce<I;ce++)se=Me[ce],_.format!==vn?C!==null?qe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,Q.depth,C,se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,le,se.width,se.height,Q.depth,0,se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,Q.depth,C,J,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,le,se.width,se.height,Q.depth,0,C,J,se.data)}else{qe&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,le,Me[0].width,Me[0].height);for(let ce=0,I=Me.length;ce<I;ce++)se=Me[ce],_.format!==vn?C!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,C,se.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,C,J,se.data):t.texImage2D(i.TEXTURE_2D,ce,le,se.width,se.height,0,C,J,se.data)}else if(_.isDataArrayTexture)qe?(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,le,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,C,J,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,Q.width,Q.height,Q.depth,0,C,J,Q.data);else if(_.isData3DTexture)qe?(Ze&&t.texStorage3D(i.TEXTURE_3D,Ve,le,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,C,J,Q.data)):t.texImage3D(i.TEXTURE_3D,0,le,Q.width,Q.height,Q.depth,0,C,J,Q.data);else if(_.isFramebufferTexture){if(Ze)if(qe)t.texStorage2D(i.TEXTURE_2D,Ve,le,Q.width,Q.height);else{let ce=Q.width,I=Q.height;for(let ae=0;ae<Ve;ae++)t.texImage2D(i.TEXTURE_2D,ae,le,ce,I,0,C,J,null),ce>>=1,I>>=1}}else if(Me.length>0&&Ke){qe&&Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,le,Me[0].width,Me[0].height);for(let ce=0,I=Me.length;ce<I;ce++)se=Me[ce],qe?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,C,J,se):t.texImage2D(i.TEXTURE_2D,ce,le,C,J,se);_.generateMipmaps=!1}else qe?(Ze&&t.texStorage2D(i.TEXTURE_2D,Ve,le,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,C,J,Q)):t.texImage2D(i.TEXTURE_2D,0,le,C,J,Q);y(_,Ke)&&x(ie),_e.__version=ne.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ye(E,_,k){if(_.image.length!==6)return;let ie=j(E,_),ee=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let ne=n.get(ee);if(ee.version!==ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+k);let _e=at.getPrimaries(at.workingColorSpace),de=_.colorSpace===nn?null:at.getPrimaries(_.colorSpace),ge=_.colorSpace===nn||_e===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Pe=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let ce=0;ce<6;ce++)!Pe&&!ke?Q[ce]=b(_.image[ce],!1,!0,s.maxCubemapSize):Q[ce]=ke?_.image[ce].image:_.image[ce],Q[ce]=Ne(_,Q[ce]);let Ke=Q[0],C=m(Ke)||o,J=r.convert(_.format,_.colorSpace),le=r.convert(_.type),se=v(_.internalFormat,J,le,_.colorSpace),Me=o&&_.isVideoTexture!==!0,qe=ne.__version===void 0||ie===!0,Ze=R(_,Ke,C);V(i.TEXTURE_CUBE_MAP,_,C);let Ve;if(Pe){Me&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,se,Ke.width,Ke.height);for(let ce=0;ce<6;ce++){Ve=Q[ce].mipmaps;for(let I=0;I<Ve.length;I++){let ae=Ve[I];_.format!==vn?J!==null?Me?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,0,0,ae.width,ae.height,J,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,0,0,ae.width,ae.height,J,le,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I,se,ae.width,ae.height,0,J,le,ae.data)}}}else{Ve=_.mipmaps,Me&&qe&&(Ve.length>0&&Ze++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,se,Q[0].width,Q[0].height));for(let ce=0;ce<6;ce++)if(ke){Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Q[ce].width,Q[ce].height,J,le,Q[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,se,Q[ce].width,Q[ce].height,0,J,le,Q[ce].data);for(let I=0;I<Ve.length;I++){let oe=Ve[I].image[ce].image;Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,0,0,oe.width,oe.height,J,le,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,se,oe.width,oe.height,0,J,le,oe.data)}}else{Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,J,le,Q[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,se,J,le,Q[ce]);for(let I=0;I<Ve.length;I++){let ae=Ve[I];Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,0,0,J,le,ae.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,I+1,se,J,le,ae.image[ce])}}}y(_,C)&&x(i.TEXTURE_CUBE_MAP),ne.__version=ee.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function be(E,_,k,ie,ee,ne){let _e=r.convert(k.format,k.colorSpace),de=r.convert(k.type),ge=v(k.internalFormat,_e,de,k.colorSpace);if(!n.get(_).__hasExternalTextures){let ke=Math.max(1,_.width>>ne),Q=Math.max(1,_.height>>ne);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,ge,ke,Q,_.depth,0,_e,de,null):t.texImage2D(ee,ne,ge,ke,Q,0,_e,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),xe(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,n.get(k).__webglTexture,0,Re(_)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,n.get(k).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(E,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let ie=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||xe(_)){let ee=_.depthTexture;ee&&ee.isDepthTexture&&(ee.type===wi?ie=i.DEPTH_COMPONENT32F:ee.type===Xi&&(ie=i.DEPTH_COMPONENT24));let ne=Re(_);xe(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,ie,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,ie,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let ie=Re(_);k&&xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,_.width,_.height):xe(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ie=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ee=0;ee<ie.length;ee++){let ne=ie[ee],_e=r.convert(ne.format,ne.colorSpace),de=r.convert(ne.type),ge=v(ne.internalFormat,_e,de,ne.colorSpace),Pe=Re(_);k&&xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ge,_.width,_.height):xe(_)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ge,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ge,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);let ie=n.get(_.depthTexture).__webglTexture,ee=Re(_);if(_.depthTexture.format===Ds)xe(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(_.depthTexture.format===Cr)xe(_)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function fe(E){let _=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");me(_.__webglFramebuffer,E)}else if(k){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]=i.createRenderbuffer(),te(_.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),te(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(E,_,k){let ie=n.get(E);_!==void 0&&be(ie.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&fe(E)}function F(E){let _=E.texture,k=n.get(E),ie=n.get(_);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=_.version,a.memory.textures++);let ee=E.isWebGLCubeRenderTarget===!0,ne=E.isWebGLMultipleRenderTargets===!0,_e=m(E)||o;if(ee){k.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[de]=[];for(let ge=0;ge<_.mipmaps.length;ge++)k.__webglFramebuffer[de][ge]=i.createFramebuffer()}else k.__webglFramebuffer[de]=i.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)k.__webglFramebuffer[de]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ne)if(s.drawBuffers){let de=E.texture;for(let ge=0,Pe=de.length;ge<Pe;ge++){let ke=n.get(de[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&xe(E)===!1){let de=ne?_:[_];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ge=0;ge<de.length;ge++){let Pe=de[ge];k.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ge]);let ke=r.convert(Pe.format,Pe.colorSpace),Q=r.convert(Pe.type),Ke=v(Pe.internalFormat,ke,Q,Pe.colorSpace,E.isXRRenderTarget===!0),C=Re(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,C,Ke,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,k.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),te(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),V(i.TEXTURE_CUBE_MAP,_,_e);for(let de=0;de<6;de++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)be(k.__webglFramebuffer[de][ge],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else be(k.__webglFramebuffer[de],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);y(_,_e)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let de=E.texture;for(let ge=0,Pe=de.length;ge<Pe;ge++){let ke=de[ge],Q=n.get(ke);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),V(i.TEXTURE_2D,ke,_e),be(k.__webglFramebuffer,E,ke,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),y(ke,_e)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),V(de,_,_e),o&&_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)be(k.__webglFramebuffer[ge],E,_,i.COLOR_ATTACHMENT0,de,ge);else be(k.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,de,0);y(_,_e)&&x(de),t.unbindTexture()}E.depthBuffer&&fe(E)}function Rt(E){let _=m(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,ee=k.length;ie<ee;ie++){let ne=k[ie];if(y(ne,_)){let _e=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(ne).__webglTexture;t.bindTexture(_e,de),x(_e),t.unbindTexture()}}}function ve(E){if(o&&E.samples>0&&xe(E)===!1){let _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,ie=E.height,ee=i.COLOR_BUFFER_BIT,ne=[],_e=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),ge=E.isWebGLMultipleRenderTargets===!0;if(ge)for(let Pe=0;Pe<_.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){ne.push(i.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&ne.push(_e);let ke=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ke===!1&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ge&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Pe]),ke===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),ge){let Q=n.get(_[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Pe=0;Pe<_.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,de.__webglColorRenderbuffer[Pe]);let ke=n.get(_[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Re(E){return Math.min(s.maxSamples,E.samples)}function xe(E){let _=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ct(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ne(E,_){let k=E.colorSpace,ie=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===$l||k!==Nt&&k!==nn&&(at.getTransfer(k)===gt?o===!1?e.has("EXT_sRGB")===!0&&ie===vn?(E.format=$l,E.minFilter=Wt,E.generateMipmaps=!1):_=sc.sRGBToLinear(_):(ie!==vn||ee!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Le,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=xe}function VS(i,e,t){let n=t.isWebGL2;function s(r,a=nn){let o,c=at.getTransfer(a);if(r===Ki)return i.UNSIGNED_BYTE;if(r===zp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Hp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===S0)return i.BYTE;if(r===M0)return i.SHORT;if(r===Eh)return i.UNSIGNED_SHORT;if(r===Bp)return i.INT;if(r===Xi)return i.UNSIGNED_INT;if(r===wi)return i.FLOAT;if(r===Ta)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===w0)return i.ALPHA;if(r===vn)return i.RGBA;if(r===E0)return i.LUMINANCE;if(r===A0)return i.LUMINANCE_ALPHA;if(r===Ds)return i.DEPTH_COMPONENT;if(r===Cr)return i.DEPTH_STENCIL;if(r===$l)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===T0)return i.RED;if(r===Gp)return i.RED_INTEGER;if(r===R0)return i.RG;if(r===Vp)return i.RG_INTEGER;if(r===Wp)return i.RGBA_INTEGER;if(r===ll||r===hl||r===ul||r===dl)if(c===gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ll)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ll)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tf||r===nf||r===sf||r===rf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===af||r===of)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===af)return c===gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===of)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cf||r===lf||r===hf||r===uf||r===df||r===ff||r===pf||r===mf||r===gf||r===bf||r===xf||r===yf||r===vf||r===_f)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===cf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===df)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ff)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vf)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_f)return c===gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fl||r===Sf||r===Mf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===fl)return c===gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===C0||r===wf||r===Ef||r===Af)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===wf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ef)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Af)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function qS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function XS(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(y,R);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let v=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=v.length;T<A;T++){let D=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,w=D.length;S<w;S++){let U=D[S];if(f(U,T,S,R)===!0){let z=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value],L=0;for(let N=0;N<Y.length;N++){let H=Y[N],q=b(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+L,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,v,R){let T=y.value,A=x+"_"+v;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let D=R[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return R[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(y){let x=y.uniforms,v=0,R=16;for(let A=0,D=x.length;A<D;A++){let S=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,U=S.length;w<U;w++){let z=S[w],Y=Array.isArray(z.value)?z.value:[z.value];for(let L=0,N=Y.length;L<N;L++){let H=Y[L],q=b(H),$=v%R;$!==0&&R-$<q.boundary&&(v+=R-$),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=q.storage}}}let T=v%R;return T>0&&(v+=R-T),y.__size=v,y.__cache={},this}function b(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}function Pp(i,e,t,n,s,r,a){let o=uh.distanceSqToPoint(i);if(o<t){let c=new P;uh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}function Ko(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function KS(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ZS(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Lp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function rm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function JS(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return yc;case"quaternion":return ci;case"bool":case"boolean":return Qi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function QS(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=JS(i.type);if(i.times===void 0){let t=[],n=[];rm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function Up(i,e){return i.distance-e.distance}function Mh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Mh(s[r],e,t,!0)}}var wh,ks,Bs,Vb,jd,Wb,Op,Ba,Mi,ii,sn,Xt,ji,Mr,Yd,Kd,Zd,qb,Cs,Xb,$b,Jd,Qd,jb,Yb,Kb,Zb,Gl,Vl,Jb,Qb,e0,t0,n0,i0,s0,r0,a0,o0,c0,l0,Jo,h0,u0,d0,f0,Fp,p0,m0,Yi,g0,b0,x0,za,y0,v0,ef,_0,kp,Ar,Tr,Wl,ql,Ac,$n,pn,Us,Dt,Rr,Ls,Wt,Ha,si,Ki,S0,M0,Eh,Bp,Xi,wi,Ta,zp,Hp,Is,w0,vn,E0,A0,Ds,Cr,T0,Gp,R0,Vp,Wp,ll,hl,ul,dl,tf,nf,sf,rf,qp,af,of,cf,lf,hf,uf,df,ff,pf,mf,gf,bf,xf,yf,vf,_f,fl,Sf,Mf,C0,wf,Ef,Af,Zi,Ai,pl,Tf,Rf,Cf,P0,Xp,Tc,Ga,$p,Ns,L0,I0,jp,D0,nn,nt,Nt,Ah,Rc,Qo,gt,ec,tc,ir,Pf,N0,U0,O0,Yp,F0,k0,B0,z0,Xl,Lf,$l,Ei,nc,ri,en,If,Ma,Pr,ss,Te,$e,ml,Df,Nf,Uf,Mo,nx,at,sr,sc,ix,Lr,sx,Gt,ut,Yl,Ti,rc,Kl,rn,P,xl,Of,wt,bi,Vn,wo,rr,ar,or,Hi,Gi,ws,ga,Eo,Ao,Es,rx,ba,vl,Ln,xi,_l,To,Vi,Sl,Ro,Ml,Ri,He,cr,Wn,ax,ox,Wi,Co,Rn,Ff,kf,ac,Ca,cx,Bf,lr,yi,Po,xa,lx,hx,zf,Hf,Gf,ux,dx,_t,qn,vi,wl,_i,hr,ur,Vf,El,Al,Tl,Lo,vr,Zp,qi,Io,Se,tn,fx,_n,an,Ut,Do,it,oc,cc,vt,px,Un,Cl,dr,Cn,ya,Ht,Ot,Wf,As,No,qf,fr,pr,mr,Pl,Uo,Oo,Fo,ko,Xf,$f,jf,Bo,zo,ze,Ci,bx,xx,yx,jn,lc,yt,gr,br,Zl,hc,Jl,Ll,vx,_x,Pn,Ts,Go,Pa,Os,Mx,wx,Ex,Ax,Tx,Rx,Cx,Px,Lx,Ix,Dx,Nx,Ux,Ox,Fx,kx,Bx,zx,Hx,Gx,Vx,Wx,qx,Xx,$x,jx,Yx,Kx,Zx,Jx,Qx,ey,ty,ny,iy,sy,ry,ay,oy,cy,ly,hy,uy,dy,fy,py,my,gy,by,xy,yy,vy,_y,Sy,My,wy,Ey,Ay,Ty,Ry,Cy,Py,Ly,Iy,Dy,Ny,Uy,Oy,Fy,ky,By,zy,Hy,Gy,Vy,Wy,qy,Xy,$y,jy,Yy,Ky,Zy,Jy,Qy,ev,tv,nv,iv,sv,rv,av,ov,cv,lv,hv,uv,dv,fv,pv,mv,gv,bv,xv,yv,vv,_v,Sv,Mv,wv,Ev,Av,Tv,Rv,Cv,Pv,Lv,Iv,Dv,Nv,Uv,Ov,Fv,kv,Bv,zv,Hv,Gv,Vv,Wv,qv,Xv,$v,jv,Yv,Kv,Zv,Jv,Qv,e_,t_,Ge,he,ti,Vo,Dr,_r,Yf,Ps,Il,Kf,Dl,Nl,Ul,Rs,xr,Zf,Pi,uc,em,tm,nm,im,sm,tp,np,ip,sp,rp,Ql,eh,th,Ol,Er,aS,oS,gS,bS,yS,TS,ih,sh,NS,rh,ah,kS,BS,oh,dt,WS,Aa,ch,ai,lh,dc,Sn,La,dn,Ia,gp,bp,xp,$S,yp,qo,Fl,vp,kl,fc,Da,hh,_p,jS,pc,Fs,yr,Sp,Xo,Mp,YS,va,_a,mc,Nr,wp,Ep,Ap,Bl,$o,Ur,Tp,Rp,Na,gc,Ua,Cp,uh,jo,Yo,bc,Or,Fr,kr,oi,Br,xc,zr,$t,on,Ji,dh,fh,ph,On,Qi,yc,Li,mh,ci,es,Ii,vc,$i,gh,eM,Yn,Si,bh,ts,xh,Hr,Oa,zl,Ip,Dp,Fa,yh,_c,Np,Sa,Hl,vh,ns,_h,li,is,Sc,Ch,tM,Ph,nM,iM,sM,rM,aM,oM,cM,Sh,rt,gE,Mc,wc,ka,Zo,Ec,cn=Fe(()=>{wh="160",ks={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vb=0,jd=1,Wb=2,Op=1,Ba=2,Mi=3,ii=0,sn=1,Xt=2,ji=0,Mr=1,Yd=2,Kd=3,Zd=4,qb=5,Cs=100,Xb=101,$b=102,Jd=103,Qd=104,jb=200,Yb=201,Kb=202,Zb=203,Gl=204,Vl=205,Jb=206,Qb=207,e0=208,t0=209,n0=210,i0=211,s0=212,r0=213,a0=214,o0=0,c0=1,l0=2,Jo=3,h0=4,u0=5,d0=6,f0=7,Fp=0,p0=1,m0=2,Yi=0,g0=1,b0=2,x0=3,za=4,y0=5,v0=6,ef="attached",_0="detached",kp=300,Ar=301,Tr=302,Wl=303,ql=304,Ac=306,$n=1e3,pn=1001,Us=1002,Dt=1003,Rr=1004,Ls=1005,Wt=1006,Ha=1007,si=1008,Ki=1009,S0=1010,M0=1011,Eh=1012,Bp=1013,Xi=1014,wi=1015,Ta=1016,zp=1017,Hp=1018,Is=1020,w0=1021,vn=1023,E0=1024,A0=1025,Ds=1026,Cr=1027,T0=1028,Gp=1029,R0=1030,Vp=1031,Wp=1033,ll=33776,hl=33777,ul=33778,dl=33779,tf=35840,nf=35841,sf=35842,rf=35843,qp=36196,af=37492,of=37496,cf=37808,lf=37809,hf=37810,uf=37811,df=37812,ff=37813,pf=37814,mf=37815,gf=37816,bf=37817,xf=37818,yf=37819,vf=37820,_f=37821,fl=36492,Sf=36494,Mf=36495,C0=36283,wf=36284,Ef=36285,Af=36286,Zi=2300,Ai=2301,pl=2302,Tf=2400,Rf=2401,Cf=2402,P0=2500,Xp=0,Tc=1,Ga=2,$p=3e3,Ns=3001,L0=3200,I0=3201,jp=0,D0=1,nn="",nt="srgb",Nt="srgb-linear",Ah="display-p3",Rc="display-p3-linear",Qo="linear",gt="srgb",ec="rec709",tc="p3",ir=7680,Pf=519,N0=512,U0=513,O0=514,Yp=515,F0=516,k0=517,B0=518,z0=519,Xl=35044,Lf="300 es",$l=1035,Ei=2e3,nc=2001,ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=1234567,Ma=Math.PI/180,Pr=180/Math.PI;ss={DEG2RAD:Ma,RAD2DEG:Pr,generateUUID:Xn,clamp:qt,euclideanModulo:Th,mapLinear:H0,inverseLerp:G0,lerp:wa,damp:V0,pingpong:W0,smoothstep:q0,smootherstep:X0,randInt:$0,randFloat:j0,randFloatSpread:Y0,seededRandom:K0,degToRad:Z0,radToDeg:J0,isPowerOfTwo:jl,ceilPowerOfTwo:Q0,floorPowerOfTwo:ic,setQuaternionFromProperEuler:ex,normalize:lt,denormalize:ni},Te=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],y=s[1],x=s[4],v=s[7],R=s[2],T=s[5],A=s[8];return r[0]=a*b+o*y+c*R,r[3]=a*m+o*x+c*T,r[6]=a*p+o*v+c*A,r[1]=l*b+h*y+u*R,r[4]=l*m+h*x+u*T,r[7]=l*p+h*v+u*A,r[2]=d*b+f*y+g*R,r[5]=d*m+f*x+g*T,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ml=new $e;Df={};Nf=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uf=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mo={[Nt]:{transfer:Qo,primaries:ec,toReference:i=>i,fromReference:i=>i},[nt]:{transfer:gt,primaries:ec,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rc]:{transfer:Qo,primaries:tc,toReference:i=>i.applyMatrix3(Uf),fromReference:i=>i.applyMatrix3(Nf)},[Ah]:{transfer:gt,primaries:tc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uf),fromReference:i=>i.applyMatrix3(Nf).convertLinearToSRGB()}},nx=new Set([Nt,Rc]),at={enabled:!0,_workingColorSpace:Nt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nx.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Mo[e].toReference,s=Mo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Mo[i].primaries},getTransfer:function(i){return i===nn?Qo:Mo[i].transfer}};sc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=Ra("canvas")),sr.width=e.width,sr.height=e.height;let n=sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ra("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ix=0,Lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bl(s[a].image)):r.push(bl(s[a]))}else r=bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};sx=0,Gt=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pn,s=pn,r=Wt,a=si,o=vn,c=Ki,l=i.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Xn(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ns?nt:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?Ns:$p}set encoding(e){Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ns?nt:nn}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=kp;Gt.DEFAULT_ANISOTROPY=1;ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+b)/4,D=(g+m)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=D/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=D/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-b)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ns?nt:nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Gt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends Yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rc=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kl=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*b,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let v=o*y;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+b*v,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Of.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xl=new P,Of=new rn,wt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Eo.subVectors(this.max,ga),rr.subVectors(e.a,ga),ar.subVectors(e.b,ga),or.subVectors(e.c,ga),Hi.subVectors(ar,rr),Gi.subVectors(or,ar),ws.subVectors(rr,or);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-ws.z,ws.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,ws.z,0,-ws.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-ws.y,ws.x,0];return!yl(t,rr,ar,or,Eo)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,rr,ar,or,Eo))?!1:(Ao.crossVectors(Hi,Gi),t=[Ao.x,Ao.y,Ao.z],yl(t,rr,ar,or,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bi=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,wo=new wt,rr=new P,ar=new P,or=new P,Hi=new P,Gi=new P,ws=new P,ga=new P,Eo=new P,Ao=new P,Es=new P;rx=new wt,ba=new P,vl=new P,Ln=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):rx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);let t=ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ba,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(vl)),this.expandByPoint(ba.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new P,_l=new P,To=new P,Vi=new P,Sl=new P,Ro=new P,Ml=new P,Ri=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_l.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,a=-this.direction.dot(To),o=Vi.dot(this.direction),c=-Vi.dot(To),l=Vi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_l).addScaledVector(To,d),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){Sl.subVectors(t,e),Ro.subVectors(n,e),Ml.crossVectors(Sl,Ro);let a=this.direction.dot(Ml),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vi.subVectors(this.origin,e);let c=o*this.direction.dot(Ro.crossVectors(Vi,Ro));if(c<0)return null;let l=o*this.direction.dot(Sl.cross(Vi));if(l<0||c+l>a)return null;let h=-o*Vi.dot(Ml);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,ox)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Wi.crossVectors(n,Rn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Wi.crossVectors(n,Rn)),Wi.normalize(),Co.crossVectors(Rn,Wi),s[0]=Wi.x,s[4]=Co.x,s[8]=Rn.x,s[1]=Wi.y,s[5]=Co.y,s[9]=Rn.y,s[2]=Wi.z,s[6]=Co.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],R=n[15],T=s[0],A=s[4],D=s[8],S=s[12],w=s[1],U=s[5],z=s[9],Y=s[13],L=s[2],N=s[6],H=s[10],q=s[14],$=s[3],X=s[7],Z=s[11],K=s[15];return r[0]=a*T+o*w+c*L+l*$,r[4]=a*A+o*U+c*N+l*X,r[8]=a*D+o*z+c*H+l*Z,r[12]=a*S+o*Y+c*q+l*K,r[1]=h*T+u*w+d*L+f*$,r[5]=h*A+u*U+d*N+f*X,r[9]=h*D+u*z+d*H+f*Z,r[13]=h*S+u*Y+d*q+f*K,r[2]=g*T+b*w+m*L+p*$,r[6]=g*A+b*U+m*N+p*X,r[10]=g*D+b*z+m*H+p*Z,r[14]=g*S+b*Y+m*q+p*K,r[3]=y*T+x*w+v*L+R*$,r[7]=y*A+x*U+v*N+R*X,r[11]=y*D+x*z+v*H+R*Z,r[15]=y*S+x*Y+v*q+R*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],y=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,R=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,T=t*y+n*x+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=y*A,e[1]=(b*d*r-u*m*r-b*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(o*m*r-b*c*r+b*s*l-n*m*l-o*s*p+n*c*p)*A,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*A,e[4]=x*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*A,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*A,e[8]=v*A,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*p-t*u*p)*A,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*A,e[12]=R*A,e[13]=(h*b*s-g*u*s+g*n*d-t*b*d-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*b*s-g*n*c+t*b*c+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,b=a*h,m=a*u,p=o*u,y=c*l,x=c*h,v=c*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(b+p))*R,s[1]=(f+v)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(d+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),o=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let l=1/r,h=1/a,u=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ei){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Ei)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===nc)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ei){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,g,b;if(o===Ei)g=(a+r)*u,b=-2*u;else if(o===nc)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new P,Wn=new He,ax=new P(0,0,0),ox=new P(1,1,1),Wi=new P,Co=new P,Rn=new P,Ff=new He,kf=new rn,ac=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ac.DEFAULT_ORDER="XYZ";Ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cx=0,Bf=new P,lr=new rn,yi=new He,Po=new P,xa=new P,lx=new P,hx=new rn,zf=new P(1,0,0),Hf=new P(0,1,0),Gf=new P(0,0,1),ux={type:"added"},dx={type:"removed"},_t=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new ac,n=new rn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new $e}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Po.copy(e):Po.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(xa,Po,this.up):yi.lookAt(Po,xa,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(yi),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ux)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};_t.DEFAULT_UP=new P(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;qn=new P,vi=new P,wl=new P,_i=new P,hr=new P,ur=new P,Vf=new P,El=new P,Al=new P,Tl=new P,Lo=!1,vr=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),vi.subVectors(n,t),wl.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(vi),c=qn.dot(wl),l=vi.dot(vi),h=vi.dot(wl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,n,s,r,a,o,c){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),vi.subVectors(e,t),qn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),qn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;hr.subVectors(s,n),ur.subVectors(r,n),El.subVectors(e,n);let c=hr.dot(El),l=ur.dot(El);if(c<=0&&l<=0)return t.copy(n);Al.subVectors(e,s);let h=hr.dot(Al),u=ur.dot(Al);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(hr,a);Tl.subVectors(e,r);let f=hr.dot(Tl),g=ur.dot(Tl);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ur,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Vf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Vf,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Io={h:0,s:0,l:0};Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Th(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rl(a,r,e+1/3),this.g=Rl(a,r,e),this.b=Rl(a,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Zp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return at.fromWorkingColorSpace(tn.copy(this),e),Math.round(qt(tn.r*255,0,255))*65536+Math.round(qt(tn.g*255,0,255))*256+Math.round(qt(tn.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=nt){at.fromWorkingColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Io);let n=wa(qi.h,Io.h,t),s=wa(qi.s,Io.s,t),r=wa(qi.l,Io.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Se;Se.NAMES=Zp;fx=0,_n=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Mr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Vl,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Vl&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},an=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ut=new P,Do=new Te,it=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),e}},oc=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}},cc=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}},vt=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},px=0,Un=new He,Cl=new _t,dr=new P,Cn=new wt,ya=new wt,Ht=new P,Ot=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?cc:oc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Cn.min,ya.min),Cn.expandByPoint(Ht),Ht.addVectors(Cn.max,ya.max),Cn.expandByPoint(Ht)):(Cn.expandByPoint(ya.min),Cn.expandByPoint(ya.max))}Cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(dr.fromBufferAttribute(e,l),Ht.add(dr)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new P,h[w]=new P;let u=new P,d=new P,f=new P,g=new Te,b=new Te,m=new Te,p=new P,y=new P;function x(w,U,z){u.fromArray(s,w*3),d.fromArray(s,U*3),f.fromArray(s,z*3),g.fromArray(a,w*2),b.fromArray(a,U*2),m.fromArray(a,z*2),d.sub(u),f.sub(u),b.sub(g),m.sub(g);let Y=1/(b.x*m.y-m.x*b.y);isFinite(Y)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-b.y).multiplyScalar(Y),y.copy(f).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(Y),l[w].add(p),l[U].add(p),l[z].add(p),h[w].add(y),h[U].add(y),h[z].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,U=v.length;w<U;++w){let z=v[w],Y=z.start,L=z.count;for(let N=Y,H=Y+L;N<H;N+=3)x(n[N+0],n[N+1],n[N+2])}let R=new P,T=new P,A=new P,D=new P;function S(w){A.fromArray(r,w*3),D.copy(A);let U=l[w];R.copy(U),R.sub(A.multiplyScalar(A.dot(U))).normalize(),T.crossVectors(D,U);let Y=T.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=Y}for(let w=0,U=v.length;w<U;++w){let z=v[w],Y=z.start,L=z.count;for(let N=Y,H=Y+L;N<H;N+=3)S(n[N+0]),S(n[N+1]),S(n[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new it(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wf=new He,As=new Ri,No=new Ln,qf=new P,fr=new P,pr=new P,mr=new P,Pl=new P,Uo=new P,Oo=new Te,Fo=new Te,ko=new Te,Xf=new P,$f=new P,jf=new P,Bo=new P,zo=new P,ze=class extends _t{constructor(e=new Ot,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Pl.fromBufferAttribute(u,e),a?Uo.addScaledVector(Pl,h):Uo.addScaledVector(Pl.sub(t),h))}t.add(Uo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(No.containsPoint(As.origin)===!1&&(As.intersectSphere(No,qf)===null||As.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&(Wf.copy(r).invert(),As.copy(e.ray).applyMatrix4(Wf),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=x;v<R;v+=3){let T=o.getX(v),A=o.getX(v+1),D=o.getX(v+2);s=Ho(this,p,e,n,l,h,u,T,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=Ho(this,a,e,n,l,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=x;v<R;v+=3){let T=v,A=v+1,D=v+2;s=Ho(this,p,e,n,l,h,u,T,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=m,x=m+1,v=m+2;s=Ho(this,a,e,n,l,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ci=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2));function g(b,m,p,y,x,v,R,T,A,D,S){let w=v/A,U=R/D,z=v/2,Y=R/2,L=T/2,N=A+1,H=D+1,q=0,$=0,X=new P;for(let Z=0;Z<H;Z++){let K=Z*U-Y;for(let ue=0;ue<N;ue++){let V=ue*w-z;X[b]=V*y,X[m]=K*x,X[p]=L,l.push(X.x,X.y,X.z),X[b]=0,X[m]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(ue/A),u.push(1-Z/D),q+=1}}for(let Z=0;Z<D;Z++)for(let K=0;K<A;K++){let ue=d+K+N*Z,V=d+K+N*(Z+1),j=d+(K+1)+N*(Z+1),re=d+(K+1)+N*Z;c.push(ue,V,re),c.push(V,j,re),$+=6}o.addGroup(f,$,S),f+=$,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};bx={clone:Ir,merge:fn},xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xx,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},lc=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yt=class extends lc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gr=-90,br=1,Zl=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yt(gr,br,e,t);s.layers=this.layers,this.add(s);let r=new yt(gr,br,e,t);r.layers=this.layers,this.add(r);let a=new yt(gr,br,e,t);a.layers=this.layers,this.add(a);let o=new yt(gr,br,e,t);o.layers=this.layers,this.add(o);let c=new yt(gr,br,e,t);c.layers=this.layers,this.add(c);let l=new yt(gr,br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hc=class extends Gt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jl=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ns?nt:nn),this.texture=new hc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ji});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=Wt),new Zl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ll=new P,vx=new P,_x=new $e,Pn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ll.subVectors(n,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_x.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Ln,Go=new P,Pa=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],b=s[10],m=s[11],p=s[12],y=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+y).normalize(),n[3].setComponents(c-a,d-h,m-g,v-y).normalize(),n[4].setComponents(c-o,d-u,m-b,v-x).normalize(),t===Ei)n[5].setComponents(c+o,d+u,m+b,v+x).normalize();else if(t===nc)n[5].setComponents(o,u,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Go.x=s.normal.x>0?e.max.x:e.min.x,Go.y=s.normal.y>0?e.max.y:e.min.y,Go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Os=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let x=0;x<l;x++){let v=x*u-r;g.push(v,-y,0),b.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let x=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),T=y+1+l*p;f.push(x,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(b,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
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
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
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
#endif`,Fx=`#ifdef USE_BUMPMAP
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xx=`#define PI 3.141592653589793
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
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`
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
}`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
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
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
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
#endif`,Sy=`struct PhysicalMaterial {
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
}`,My=`
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dy=`#if defined( USE_POINTS_UV )
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
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fy=`#ifdef USE_MORPHNORMALS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
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
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ov=`float getShadowMask() {
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
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
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
}`,Cv=`#if DEPTH_PACKING == 3200
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
}`,Pv=`#define DISTANCE
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
}`,Lv=`#define DISTANCE
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Fv=`uniform vec3 diffuse;
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
}`,kv=`#define LAMBERT
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
}`,Bv=`#define LAMBERT
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
}`,zv=`#define MATCAP
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
}`,Hv=`#define MATCAP
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
}`,Gv=`#define NORMAL
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
}`,Vv=`#define NORMAL
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
}`,Wv=`#define PHONG
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
}`,qv=`#define PHONG
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
}`,Xv=`#define STANDARD
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
}`,$v=`#define STANDARD
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
}`,jv=`#define TOON
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
}`,Yv=`#define TOON
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
}`,Kv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,Qv=`uniform vec3 color;
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
}`,e_=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Mx,alphahash_pars_fragment:wx,alphamap_fragment:Ex,alphamap_pars_fragment:Ax,alphatest_fragment:Tx,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:Px,batching_pars_vertex:Lx,batching_vertex:Ix,begin_vertex:Dx,beginnormal_vertex:Nx,bsdfs:Ux,iridescence_fragment:Ox,bumpmap_pars_fragment:Fx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:Bx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:Hx,color_fragment:Gx,color_pars_fragment:Vx,color_pars_vertex:Wx,color_vertex:qx,common:Xx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:jx,displacementmap_pars_vertex:Yx,displacementmap_vertex:Kx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Jx,colorspace_fragment:Qx,colorspace_pars_fragment:ey,envmap_fragment:ty,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:sy,envmap_physical_pars_fragment:gy,envmap_vertex:ry,fog_vertex:ay,fog_pars_vertex:oy,fog_fragment:cy,fog_pars_fragment:ly,gradientmap_pars_fragment:hy,lightmap_fragment:uy,lightmap_pars_fragment:dy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:by,lights_toon_pars_fragment:xy,lights_phong_fragment:yy,lights_phong_pars_fragment:vy,lights_physical_fragment:_y,lights_physical_pars_fragment:Sy,lights_fragment_begin:My,lights_fragment_maps:wy,lights_fragment_end:Ey,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:Cy,map_fragment:Py,map_pars_fragment:Ly,map_particle_fragment:Iy,map_particle_pars_fragment:Dy,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Uy,morphcolor_vertex:Oy,morphnormal_vertex:Fy,morphtarget_pars_vertex:ky,morphtarget_vertex:By,normal_fragment_begin:zy,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Vy,normal_vertex:Wy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:$y,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Yy,opaque_fragment:Ky,packing:Zy,premultiplied_alpha_fragment:Jy,project_vertex:Qy,dithering_fragment:ev,dithering_pars_fragment:tv,roughnessmap_fragment:nv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:sv,shadowmap_pars_vertex:rv,shadowmap_vertex:av,shadowmask_pars_fragment:ov,skinbase_vertex:cv,skinning_pars_vertex:lv,skinning_vertex:hv,skinnormal_vertex:uv,specularmap_fragment:dv,specularmap_pars_fragment:fv,tonemapping_fragment:pv,tonemapping_pars_fragment:mv,transmission_fragment:gv,transmission_pars_fragment:bv,uv_pars_fragment:xv,uv_pars_vertex:yv,uv_vertex:vv,worldpos_vertex:_v,background_vert:Sv,background_frag:Mv,backgroundCube_vert:wv,backgroundCube_frag:Ev,cube_vert:Av,cube_frag:Tv,depth_vert:Rv,depth_frag:Cv,distanceRGBA_vert:Pv,distanceRGBA_frag:Lv,equirect_vert:Iv,equirect_frag:Dv,linedashed_vert:Nv,linedashed_frag:Uv,meshbasic_vert:Ov,meshbasic_frag:Fv,meshlambert_vert:kv,meshlambert_frag:Bv,meshmatcap_vert:zv,meshmatcap_frag:Hv,meshnormal_vert:Gv,meshnormal_frag:Vv,meshphong_vert:Wv,meshphong_frag:qv,meshphysical_vert:Xv,meshphysical_frag:$v,meshtoon_vert:jv,meshtoon_frag:Yv,points_vert:Kv,points_frag:Zv,shadow_vert:Jv,shadow_frag:Qv,sprite_vert:e_,sprite_frag:t_},he={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ti={basic:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:fn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:fn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:fn([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:fn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:fn([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:fn([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:fn([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:fn([he.lights,he.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ti.physical={uniforms:fn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};Vo={r:0,b:0,g:0};Dr=class extends lc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_r=4,Yf=[.125,.215,.35,.446,.526,.582],Ps=20,Il=new Dr,Kf=new Se,Dl=null,Nl=0,Ul=0,Rs=(1+Math.sqrt(5))/2,xr=1/Rs,Zf=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Rs,xr),new P(0,Rs,-xr),new P(xr,0,Rs),new P(-xr,0,Rs),new P(Rs,xr,0),new P(-Rs,xr,0)],Pi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Dl=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Nl,Ul),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Ta,format:vn,colorSpace:Nt,depthBuffer:!1},s=Jf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c_(r)),this._blurMaterial=l_(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,n,s){let o=new yt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Kf),h.toneMapping=Yi,h.autoClear=!1;let f=new an({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new ze(new Ci,f),b=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(Kf),b=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let x=this._cubeSize;Wo(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ar||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Wo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Il)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zf[(s-1)%Zf.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ze(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Ps;m>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);let p=[],y=0;for(let A=0;A<Ps;++A){let D=A/b,S=Math.exp(-D*D/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let v=this._sizeLods[s],R=3*v*(s>x-_r?s-x+_r:0),T=4*(this._cubeSize-v);Wo(t,R,T,3*v,2*v),c.setRenderTarget(t),c.render(u,Il)}};uc=class extends Gt{constructor(e,t,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Ds,h!==Ds&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ds&&(n=Xi),n===void 0&&h===Cr&&(n=Is),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},em=new Gt,tm=new uc(1,1);tm.compareFunction=Yp;nm=new rc,im=new Kl,sm=new hc,tp=[],np=[],ip=new Float32Array(16),sp=new Float32Array(9),rp=new Float32Array(4);Ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k_(t.type)}},eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ol=/(\w+)(\])?(\[|\.)?/g;Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);rS(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};aS=37297,oS=0;gS=/^[ \t]*#include +<([\w\d./]+)>/gm;bS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;TS=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sh(e),t.set(e,n)),n}},sh=class{constructor(e){this.id=TS++,this.code=e,this.usedTimes=0}};NS=0;rh=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ah=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
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
}`;oh=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},dt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},WS={type:"move"},Aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WS)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ch=class extends ri{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=t.getContextAttributes(),m=null,p=null,y=[],x=[],v=new Te,R=null,T=new yt;T.layers.enable(1),T.viewport=new ut;let A=new yt;A.layers.enable(2),A.viewport=new ut;let D=[T,A],S=new oh;S.layers.enable(1),S.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=y[V];return j===void 0&&(j=new Aa,y[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=y[V];return j===void 0&&(j=new Aa,y[V]=j),j.getGripSpace()},this.getHand=function(V){let j=y[V];return j===void 0&&(j=new Aa,y[V]=j),j.getHandSpace()};function z(V){let j=x.indexOf(V.inputSource);if(j===-1)return;let re=y[j];re!==void 0&&(re.update(V.inputSource,V.frame,l||a),re.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",L);for(let V=0;V<y.length;V++){let j=x[V];j!==null&&(x[V]=null,y[V].disconnect(j))}w=null,U=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",L),b.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ti(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let j=null,re=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=b.stencil?Cr:Ds,re=b.stencil?Is:Xi);let be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ti(d.textureWidth,d.textureHeight,{format:vn,type:Ki,depthTexture:new uc(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let te=e.properties.get(p);te.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(V){for(let j=0;j<V.removed.length;j++){let re=V.removed[j],ye=x.indexOf(re);ye>=0&&(x[ye]=null,y[ye].disconnect(re))}for(let j=0;j<V.added.length;j++){let re=V.added[j],ye=x.indexOf(re);if(ye===-1){for(let te=0;te<y.length;te++)if(te>=x.length){x.push(re),ye=te;break}else if(x[te]===null){x[te]=re,ye=te;break}if(ye===-1)break}let be=y[ye];be&&be.connect(re)}}let N=new P,H=new P;function q(V,j,re){N.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(re.matrixWorld);let ye=N.distanceTo(H),be=j.projectionMatrix.elements,te=re.projectionMatrix.elements,me=be[14]/(be[10]-1),fe=be[14]/(be[10]+1),Le=(be[9]+1)/be[5],F=(be[9]-1)/be[5],Rt=(be[8]-1)/be[0],ve=(te[8]+1)/te[0],Re=me*Rt,xe=me*ve,ct=ye/(-Rt+ve),Ne=ct*-Rt;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ne),V.translateZ(ct),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let E=me+ct,_=fe+ct,k=Re-Ne,ie=xe+(ye-Ne),ee=Le*fe/_*E,ne=F*fe/_*E;V.projectionMatrix.makePerspective(k,ie,ee,ne,E,_),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function $(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=A.near=T.near=V.near,S.far=A.far=T.far=V.far,(w!==S.near||U!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,U=S.far);let j=V.parent,re=S.cameras;$(S,j);for(let ye=0;ye<re.length;ye++)$(re[ye],j);re.length===2?q(S,T,A):S.projectionMatrix.copy(T.projectionMatrix),X(V,S,j)};function X(V,j,re){re===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let Z=null;function K(V,j){if(h=j.getViewerPose(l||a),g=j,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ye=!1;re.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let be=0;be<re.length;be++){let te=re[be],me=null;if(f!==null)me=f.getViewport(te);else{let Le=u.getViewSubImage(d,te);me=Le.viewport,be===0&&(e.setRenderTargetTextures(p,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(p))}let fe=D[be];fe===void 0&&(fe=new yt,fe.layers.enable(be),fe.viewport=new ut,D[be]=fe),fe.matrix.fromArray(te.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(te.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(me.x,me.y,me.width,me.height),be===0&&(S.matrix.copy(fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(fe)}}for(let re=0;re<y.length;re++){let ye=x[re],be=y[re];ye!==null&&be!==void 0&&be.update(ye,j,l||a)}Z&&Z(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let ue=new Qp;ue.setAnimationLoop(K),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}};ai=class{constructor(e={}){let{canvas:t=tx(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let x=this,v=!1,R=0,T=0,A=null,D=-1,S=null,w=new ut,U=new ut,z=null,Y=new Se(0),L=0,N=t.width,H=t.height,q=1,$=null,X=null,Z=new ut(0,0,N,H),K=new ut(0,0,N,H),ue=!1,V=new Pa,j=!1,re=!1,ye=null,be=new He,te=new Te,me=new P,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return A===null?q:1}let F=n;function Rt(M,O){for(let G=0;G<M.length;G++){let W=M[G],B=t.getContext(W,O);if(B!==null)return B}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wh}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),F=Rt(O,M),F===null)throw Rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ve,Re,xe,ct,Ne,E,_,k,ie,ee,ne,_e,de,ge,Pe,ke,Q,Ke,C,J,le,se,Me,qe;function Ze(){ve=new u_(F),Re=new r_(F,ve,e),ve.init(Re),se=new VS(F,ve,Re),xe=new HS(F,ve,Re),ct=new p_(F),Ne=new CS,E=new GS(F,ve,xe,Ne,Re,se,ct),_=new o_(x),k=new h_(x),ie=new Sx(F,Re),Me=new i_(F,ve,ie,Re),ee=new d_(F,ie,ct,Me),ne=new x_(F,ee,ie,ct),C=new b_(F,Re,E),ke=new a_(Ne),_e=new RS(x,_,k,ve,Re,Me,ke),de=new qS(x,Ne),ge=new LS,Pe=new FS(ve,Re),Ke=new n_(x,_,k,xe,ne,d,c),Q=new zS(x,ne,Re),qe=new XS(F,ct,Re,xe),J=new s_(F,ve,ct,Re),le=new f_(F,ve,ct,Re),ct.programs=_e.programs,x.capabilities=Re,x.extensions=ve,x.properties=Ne,x.renderLists=ge,x.shadowMap=Q,x.state=xe,x.info=ct}Ze();let Ve=new ch(x,F);this.xr=Ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(N,H,!1))},this.getSize=function(M){return M.set(N,H)},this.setSize=function(M,O,G=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,H=O,t.width=Math.floor(M*q),t.height=Math.floor(O*q),G===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(N*q,H*q).floor()},this.setDrawingBufferSize=function(M,O,G){N=M,H=O,q=G,t.width=Math.floor(M*G),t.height=Math.floor(O*G),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,O,G,W){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,O,G,W),xe.viewport(w.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(K)},this.setScissor=function(M,O,G,W){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,O,G,W),xe.scissor(U.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){xe.setScissorTest(ue=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){X=M},this.getClearColor=function(M){return M.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(M=!0,O=!0,G=!0){let W=0;if(M){let B=!1;if(A!==null){let pe=A.texture.format;B=pe===Wp||pe===Vp||pe===Gp}if(B){let pe=A.texture.type,Ae=pe===Ki||pe===Xi||pe===Eh||pe===Is||pe===zp||pe===Hp,Ie=Ke.getClearColor(),Ue=Ke.getClearAlpha(),We=Ie.r,Oe=Ie.g,Be=Ie.b;Ae?(f[0]=We,f[1]=Oe,f[2]=Be,f[3]=Ue,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=We,g[1]=Oe,g[2]=Be,g[3]=Ue,F.clearBufferiv(F.COLOR,0,g))}else W|=F.COLOR_BUFFER_BIT}O&&(W|=F.DEPTH_BUFFER_BIT),G&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ge.dispose(),Pe.dispose(),Ne.dispose(),_.dispose(),k.dispose(),ne.dispose(),Me.dispose(),qe.dispose(),_e.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",hn),Ve.removeEventListener("sessionend",pt),ye&&(ye.dispose(),ye=null),un.stop()};function ce(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let M=ct.autoReset,O=Q.enabled,G=Q.autoUpdate,W=Q.needsUpdate,B=Q.type;Ze(),ct.autoReset=M,Q.enabled=O,Q.autoUpdate=G,Q.needsUpdate=W,Q.type=B}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){let O=M.target;O.removeEventListener("dispose",oe),Ce(O)}function Ce(M){Ee(M),Ne.remove(M)}function Ee(M){let O=Ne.get(M).programs;O!==void 0&&(O.forEach(function(G){_e.releaseProgram(G)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,G,W,B,pe){O===null&&(O=fe);let Ae=B.isMesh&&B.matrixWorld.determinant()<0,Ie=Nb(M,O,G,W,B);xe.setMaterial(W,Ae);let Ue=G.index,We=1;if(W.wireframe===!0){if(Ue=ee.getWireframeAttribute(G),Ue===void 0)return;We=2}let Oe=G.drawRange,Be=G.attributes.position,It=Oe.start*We,wn=(Oe.start+Oe.count)*We;pe!==null&&(It=Math.max(It,pe.start*We),wn=Math.min(wn,(pe.start+pe.count)*We)),Ue!==null?(It=Math.max(It,0),wn=Math.min(wn,Ue.count)):Be!=null&&(It=Math.max(It,0),wn=Math.min(wn,Be.count));let zt=wn-It;if(zt<0||zt===1/0)return;Me.setup(B,W,Ie,G,Ue);let gi,Mt=J;if(Ue!==null&&(gi=ie.get(Ue),Mt=le,Mt.setIndex(gi)),B.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Le()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(B.isLine){let Xe=W.linewidth;Xe===void 0&&(Xe=1),xe.setLineWidth(Xe*Le()),B.isLineSegments?Mt.setMode(F.LINES):B.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else B.isPoints?Mt.setMode(F.POINTS):B.isSprite&&Mt.setMode(F.TRIANGLES);if(B.isBatchedMesh)Mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Mt.renderInstances(It,zt,B.count);else if(G.isInstancedBufferGeometry){let Xe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,tl=Math.min(G.instanceCount,Xe);Mt.renderInstances(It,zt,tl)}else Mt.render(It,zt)};function tt(M,O,G){M.transparent===!0&&M.side===Xt&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,xo(M,O,G),M.side=ii,M.needsUpdate=!0,xo(M,O,G),M.side=Xt):xo(M,O,G)}this.compile=function(M,O,G=null){G===null&&(G=M),m=Pe.get(G),m.init(),y.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),M!==G&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);let W=new Set;return M.traverse(function(B){let pe=B.material;if(pe)if(Array.isArray(pe))for(let Ae=0;Ae<pe.length;Ae++){let Ie=pe[Ae];tt(Ie,G,B),W.add(Ie)}else tt(pe,G,B),W.add(pe)}),y.pop(),m=null,W},this.compileAsync=function(M,O,G=null){let W=this.compile(M,O,G);return new Promise(B=>{function pe(){if(W.forEach(function(Ae){Ne.get(Ae).currentProgram.isReady()&&W.delete(Ae)}),W.size===0){B(M);return}setTimeout(pe,10)}ve.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let st=null;function Bt(M){st&&st(M)}function hn(){un.stop()}function pt(){un.start()}let un=new Qp;un.setAnimationLoop(Bt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(M){st=M,Ve.setAnimationLoop(M),M===null?un.stop():un.start()},Ve.addEventListener("sessionstart",hn),Ve.addEventListener("sessionend",pt),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(O),O=Ve.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,O,A),m=Pe.get(M,y.length),m.init(),y.push(m),be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(be),re=this.localClippingEnabled,j=ke.init(this.clippingPlanes,re),b=ge.get(M,p.length),b.init(),p.push(b),Qn(M,O,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort($,X),this.info.render.frame++,j===!0&&ke.beginShadows();let G=m.state.shadowsArray;if(Q.render(G,M,O),j===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(b,M),m.setupLights(x._useLegacyLights),O.isArrayCamera){let W=O.cameras;for(let B=0,pe=W.length;B<pe;B++){let Ae=W[B];vd(b,M,Ae,Ae.viewport)}}else vd(b,M,O);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,O),Me.resetDefaultState(),D=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Qn(M,O,G,W){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||V.intersectsSprite(M)){W&&me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);let Ae=ne.update(M),Ie=M.material;Ie.visible&&b.push(M,Ae,Ie,G,me.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||V.intersectsObject(M))){let Ae=ne.update(M),Ie=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),me.copy(M.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),me.copy(Ae.boundingSphere.center)),me.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(Ie)){let Ue=Ae.groups;for(let We=0,Oe=Ue.length;We<Oe;We++){let Be=Ue[We],It=Ie[Be.materialIndex];It&&It.visible&&b.push(M,Ae,It,G,me.z,Be)}}else Ie.visible&&b.push(M,Ae,Ie,G,me.z,null)}}let pe=M.children;for(let Ae=0,Ie=pe.length;Ae<Ie;Ae++)Qn(pe[Ae],O,G,W)}function vd(M,O,G,W){let B=M.opaque,pe=M.transmissive,Ae=M.transparent;m.setupLightsView(G),j===!0&&ke.setGlobalState(x.clippingPlanes,G),pe.length>0&&Db(B,pe,O,G),W&&xe.viewport(w.copy(W)),B.length>0&&bo(B,O,G),pe.length>0&&bo(pe,O,G),Ae.length>0&&bo(Ae,O,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Db(M,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let pe=Re.isWebGL2;ye===null&&(ye=new Ti(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ta:Ki,minFilter:si,samples:pe?4:0})),x.getDrawingBufferSize(te),pe?ye.setSize(te.x,te.y):ye.setSize(ic(te.x),ic(te.y));let Ae=x.getRenderTarget();x.setRenderTarget(ye),x.getClearColor(Y),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Ie=x.toneMapping;x.toneMapping=Yi,bo(M,G,W),E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye);let Ue=!1;for(let We=0,Oe=O.length;We<Oe;We++){let Be=O[We],It=Be.object,wn=Be.geometry,zt=Be.material,gi=Be.group;if(zt.side===Xt&&It.layers.test(W.layers)){let Mt=zt.side;zt.side=sn,zt.needsUpdate=!0,_d(It,G,W,wn,zt,gi),zt.side=Mt,zt.needsUpdate=!0,Ue=!0}}Ue===!0&&(E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye)),x.setRenderTarget(Ae),x.setClearColor(Y,L),x.toneMapping=Ie}function bo(M,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pe=M.length;B<pe;B++){let Ae=M[B],Ie=Ae.object,Ue=Ae.geometry,We=W===null?Ae.material:W,Oe=Ae.group;Ie.layers.test(G.layers)&&_d(Ie,O,G,Ue,We,Oe)}}function _d(M,O,G,W,B,pe){M.onBeforeRender(x,O,G,W,B,pe),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(x,O,G,W,M,pe),B.transparent===!0&&B.side===Xt&&B.forceSinglePass===!1?(B.side=sn,B.needsUpdate=!0,x.renderBufferDirect(G,O,W,B,M,pe),B.side=ii,B.needsUpdate=!0,x.renderBufferDirect(G,O,W,B,M,pe),B.side=Xt):x.renderBufferDirect(G,O,W,B,M,pe),M.onAfterRender(x,O,G,W,B,pe)}function xo(M,O,G){O.isScene!==!0&&(O=fe);let W=Ne.get(M),B=m.state.lights,pe=m.state.shadowsArray,Ae=B.state.version,Ie=_e.getParameters(M,B.state,pe,O,G),Ue=_e.getProgramCacheKey(Ie),We=W.programs;W.environment=M.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(M.isMeshStandardMaterial?k:_).get(M.envMap||W.environment),We===void 0&&(M.addEventListener("dispose",oe),We=new Map,W.programs=We);let Oe=We.get(Ue);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===Ae)return Md(M,Ie),Oe}else Ie.uniforms=_e.getUniforms(M),M.onBuild(G,Ie,x),M.onBeforeCompile(Ie,x),Oe=_e.acquireProgram(Ie,Ue),We.set(Ue,Oe),W.uniforms=Ie.uniforms;let Be=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=ke.uniform),Md(M,Ie),W.needsLights=Ob(M),W.lightsStateVersion=Ae,W.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function Sd(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Er.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Md(M,O){let G=Ne.get(M);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Nb(M,O,G,W,B){O.isScene!==!0&&(O=fe),E.resetTextureUnits();let pe=O.fog,Ae=W.isMeshStandardMaterial?O.environment:null,Ie=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nt,Ue=(W.isMeshStandardMaterial?k:_).get(W.envMap||Ae),We=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!G.morphAttributes.position,It=!!G.morphAttributes.normal,wn=!!G.morphAttributes.color,zt=Yi;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(zt=x.toneMapping);let gi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=gi!==void 0?gi.length:0,Xe=Ne.get(W),tl=m.state.lights;if(j===!0&&(re===!0||M!==S)){let Nn=M===S&&W.id===D;ke.setState(W,M,Nn)}let Ct=!1;W.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==tl.state.version||Xe.outputColorSpace!==Ie||B.isBatchedMesh&&Xe.batching===!1||!B.isBatchedMesh&&Xe.batching===!0||B.isInstancedMesh&&Xe.instancing===!1||!B.isInstancedMesh&&Xe.instancing===!0||B.isSkinnedMesh&&Xe.skinning===!1||!B.isSkinnedMesh&&Xe.skinning===!0||B.isInstancedMesh&&Xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Xe.instancingColor===!1&&B.instanceColor!==null||Xe.envMap!==Ue||W.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ke.numPlanes||Xe.numIntersection!==ke.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==Oe||Xe.morphTargets!==Be||Xe.morphNormals!==It||Xe.morphColors!==wn||Xe.toneMapping!==zt||Re.isWebGL2===!0&&Xe.morphTargetsCount!==Mt)&&(Ct=!0):(Ct=!0,Xe.__version=W.version);let vs=Xe.currentProgram;Ct===!0&&(vs=xo(W,O,B));let wd=!1,pa=!1,nl=!1,Qt=vs.getUniforms(),_s=Xe.uniforms;if(xe.useProgram(vs.program)&&(wd=!0,pa=!0,nl=!0),W.id!==D&&(D=W.id,pa=!0),wd||S!==M){Qt.setValue(F,"projectionMatrix",M.projectionMatrix),Qt.setValue(F,"viewMatrix",M.matrixWorldInverse);let Nn=Qt.map.cameraPosition;Nn!==void 0&&Nn.setValue(F,me.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&Qt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Qt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,pa=!0,nl=!0)}if(B.isSkinnedMesh){Qt.setOptional(F,B,"bindMatrix"),Qt.setOptional(F,B,"bindMatrixInverse");let Nn=B.skeleton;Nn&&(Re.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),Qt.setValue(F,"boneTexture",Nn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Qt.setOptional(F,B,"batchingTexture"),Qt.setValue(F,"batchingTexture",B._matricesTexture,E));let il=G.morphAttributes;if((il.position!==void 0||il.normal!==void 0||il.color!==void 0&&Re.isWebGL2===!0)&&C.update(B,G,vs),(pa||Xe.receiveShadow!==B.receiveShadow)&&(Xe.receiveShadow=B.receiveShadow,Qt.setValue(F,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_s.envMap.value=Ue,_s.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),pa&&(Qt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Ub(_s,nl),pe&&W.fog===!0&&de.refreshFogUniforms(_s,pe),de.refreshMaterialUniforms(_s,W,q,H,ye),Er.upload(F,Sd(Xe),_s,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Er.upload(F,Sd(Xe),_s,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Qt.setValue(F,"center",B.center),Qt.setValue(F,"modelViewMatrix",B.modelViewMatrix),Qt.setValue(F,"normalMatrix",B.normalMatrix),Qt.setValue(F,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Nn=W.uniformsGroups;for(let sl=0,Fb=Nn.length;sl<Fb;sl++)if(Re.isWebGL2){let Ed=Nn[sl];qe.update(Ed,vs),qe.bind(Ed,vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vs}function Ub(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Ob(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,O,G){Ne.get(M.texture).__webglTexture=O,Ne.get(M.depthTexture).__webglTexture=G;let W=Ne.get(M);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,O){let G=Ne.get(M);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,G=0){A=M,R=O,T=G;let W=!0,B=null,pe=!1,Ae=!1;if(M){let Ue=Ne.get(M);Ue.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):Ue.__webglFramebuffer===void 0?E.setupRenderTarget(M):Ue.__hasExternalTextures&&E.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);let We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);let Oe=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?B=Oe[O][G]:B=Oe[O],pe=!0):Re.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?B=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[G]:B=Oe,w.copy(M.viewport),U.copy(M.scissor),z=M.scissorTest}else w.copy(Z).multiplyScalar(q).floor(),U.copy(K).multiplyScalar(q).floor(),z=ue;if(xe.bindFramebuffer(F.FRAMEBUFFER,B)&&Re.drawBuffers&&W&&xe.drawBuffers(M,B),xe.viewport(w),xe.scissor(U),xe.setScissorTest(z),pe){let Ue=Ne.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,G)}else if(Ae){let Ue=Ne.get(M.texture),We=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.__webglTexture,G||0,We)}D=-1},this.readRenderTargetPixels=function(M,O,G,W,B,pe,Ae){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){xe.bindFramebuffer(F.FRAMEBUFFER,Ie);try{let Ue=M.texture,We=Ue.format,Oe=Ue.type;if(We!==vn&&se.convert(We)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Be=Oe===Ta&&(ve.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Oe!==Ki&&se.convert(Oe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===wi&&(Re.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-W&&G>=0&&G<=M.height-B&&F.readPixels(O,G,W,B,se.convert(We),se.convert(Oe),pe)}finally{let Ue=A!==null?Ne.get(A).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(M,O,G=0){let W=Math.pow(2,-G),B=Math.floor(O.image.width*W),pe=Math.floor(O.image.height*W);E.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,M.x,M.y,B,pe),xe.unbindTexture()},this.copyTextureToTexture=function(M,O,G,W=0){let B=O.image.width,pe=O.image.height,Ae=se.convert(G.format),Ie=se.convert(G.type);E.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,M.x,M.y,B,pe,Ae,Ie,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,M.x,M.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,M.x,M.y,Ae,Ie,O.image),W===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,O,G,W,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=M.max.x-M.min.x+1,Ae=M.max.y-M.min.y+1,Ie=M.max.z-M.min.z+1,Ue=se.convert(W.format),We=se.convert(W.type),Oe;if(W.isData3DTexture)E.setTexture3D(W,0),Oe=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)E.setTexture2DArray(W,0),Oe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);let Be=F.getParameter(F.UNPACK_ROW_LENGTH),It=F.getParameter(F.UNPACK_IMAGE_HEIGHT),wn=F.getParameter(F.UNPACK_SKIP_PIXELS),zt=F.getParameter(F.UNPACK_SKIP_ROWS),gi=F.getParameter(F.UNPACK_SKIP_IMAGES),Mt=G.isCompressedTexture?G.mipmaps[B]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,M.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,M.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,M.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Oe,B,O.x,O.y,O.z,pe,Ae,Ie,Ue,We,Mt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Oe,B,O.x,O.y,O.z,pe,Ae,Ie,Ue,Mt.data)):F.texSubImage3D(Oe,B,O.x,O.y,O.z,pe,Ae,Ie,Ue,We,Mt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,It),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wn),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,gi),B===0&&W.generateMipmaps&&F.generateMipmap(Oe),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,xe.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ah?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Rc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?Ns:$p}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ns?nt:Nt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},lh=class extends ai{};lh.prototype.isWebGL1Renderer=!0;dc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sn=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},La=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new P,Ia=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gp=new P,bp=new ut,xp=new ut,$S=new P,yp=new He,qo=new P,Fl=new Ln,vp=new He,kl=new Ri,fc=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ef,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(s),e.ray.intersectsSphere(Fl)!==!1&&(vp.copy(s).invert(),kl.copy(e.ray).applyMatrix4(vp),!(this.boundingBox!==null&&kl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ef?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;bp.fromBufferAttribute(s.attributes.skinIndex,e),xp.fromBufferAttribute(s.attributes.skinWeight,e),gp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=xp.getComponent(r);if(a!==0){let o=bp.getComponent(r);yp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($S.copy(gp).applyMatrix4(yp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Da=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},hh=class extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Dt,h=Dt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_p=new He,jS=new He,pc=class i{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:jS;_p.multiplyMatrices(o,t[r]),_p.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new hh(t,e,e,vn,wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Da),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Fs=class extends it{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yr=new He,Sp=new He,Xo=[],Mp=new wt,YS=new He,va=new ze,_a=new Ln,mc=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,YS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),Mp.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(Mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),_a.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(_a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(n),e.ray.intersectsSphere(_a)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),Sp.multiplyMatrices(n,yr),va.matrixWorld=Sp,va.raycast(e,Xo);for(let a=0,o=Xo.length;a<o;a++){let c=Xo[a];c.instanceId=r,c.object=this,t.push(c)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Nr=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wp=new P,Ep=new P,Ap=new He,Bl=new Ri,$o=new Ln,Ur=class extends _t{constructor(e=new Ot,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wp.fromBufferAttribute(t,s-1),Ep.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wp.distanceTo(Ep);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;Ap.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(Ap);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,v=y-1;x<v;x+=f){let R=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,T),Bl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,v=y-1;x<v;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Bl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Tp=new P,Rp=new P,Na=class extends Ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tp.fromBufferAttribute(t,s),Rp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tp.distanceTo(Rp);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},gc=class extends Ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ua=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cp=new He,uh=new Ri,jo=new Ln,Yo=new P,bc=class extends _t{constructor(e=new Ot,t=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Cp.copy(s).invert(),uh.copy(e.ray).applyMatrix4(Cp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);Yo.fromBufferAttribute(u,m),Pp(Yo,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Yo.fromBufferAttribute(u,g),Pp(Yo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Or=class extends Gt{constructor(e,t,n,s,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Fr=class extends Gt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kr=class i extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new Te;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},oi=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function y(){let v=new P,R=new P,T=0,A=(t-e)/n;for(let D=0;D<=r;D++){let S=[],w=D/r,U=w*(t-e)+e;for(let z=0;z<=s;z++){let Y=z/s,L=Y*c+o,N=Math.sin(L),H=Math.cos(L);R.x=U*N,R.y=-w*n+m,R.z=U*H,u.push(R.x,R.y,R.z),v.set(N,A,H).normalize(),d.push(v.x,v.y,v.z),f.push(Y,1-w),S.push(g++)}b.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let w=b[S][D],U=b[S+1][D],z=b[S+1][D+1],Y=b[S][D+1];h.push(w,U,Y),h.push(U,z,Y),T+=6}l.addGroup(p,T,0),p+=T}function x(v){let R=g,T=new Te,A=new P,D=0,S=v===!0?e:t,w=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let L=z/s*c+o,N=Math.cos(L),H=Math.sin(L);A.x=S*H,A.y=m*w,A.z=S*N,u.push(A.x,A.y,A.z),d.push(0,w,0),T.x=N*.5+.5,T.y=H*.5*w+.5,f.push(T.x,T.y),g++}for(let z=0;z<s;z++){let Y=R+z,L=U+z;v===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Br=class i extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new P,g=new Te;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<s;b++){let m=b*(n+1);for(let p=0;p<n;p++){let y=p+m,x=y,v=y+n+1,R=y+n+2,T=y+1;o.push(x,v,T),o.push(v,R,T)}}this.setIndex(o),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xc=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let b=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let b=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(b,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},zr=class extends _n{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Se(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},$t=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends $t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tf,endingEnd:Tf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rf:r=e,o=2*t-n;break;case Cf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rf:a=e,c=2*n-t;break;case Cf:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*b+.5*g,v=f*m-f*b;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[l+R]+x*a[c+R]+v*a[u+R];return r}},fh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ph=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zi:t=this.InterpolantFactoryMethodDiscrete;break;case Ai:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return Ai;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&KS(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Ai;Qi=class extends On{};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Zi;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;yc=class extends On{};yc.prototype.ValueTypeName="color";Li=class extends On{};Li.prototype.ValueTypeName="number";mh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ci=class extends On{InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}};ci.prototype.ValueTypeName="quaternion";ci.prototype.DefaultInterpolation=Ai;ci.prototype.InterpolantFactoryMethodSmooth=void 0;es=class extends On{};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Zi;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;Ii=class extends On{};Ii.prototype.ValueTypeName="vector";vc=class{constructor(e,t=-1,n,s=P0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(QS(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=ZS(c);c=Lp(c,1,h),l=Lp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];rm(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let x=d[g];m.push(x.time),p.push(x.morphTarget===b?1:0)}s.push(new Li(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Ii,f+".position",d,"pos",s),n(ci,f+".quaternion",d,"rot",s),n(Ii,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};$i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},gh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},eM=new gh,Yn=class{constructor(e){this.manager=e!==void 0?e:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";Si={},bh=class extends Error{constructor(e,t){super(e),this.response=t}},ts=class extends Yn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Si[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{b+=v.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,A=h.length;T<A;T++){let D=h[T];D.onProgress&&D.onProgress(R)}p.enqueue(v),y()}})}}});return new Response(m)}else throw new bh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{$i.add(e,l);let h=Si[e];delete Si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Si[e];if(h===void 0)throw this.manager.itemError(e),l;delete Si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},xh=class extends Yn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ra("img");function c(){h(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},Hr=class extends Yn{constructor(e){super(e)}load(e,t,n,s){let r=new Gt,a=new xh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Oa=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},zl=new He,Ip=new P,Dp=new P,Fa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dp),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yh=class extends Fa{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Pr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_c=class extends Oa{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Np=new He,Sa=new P,Hl=new P,vh=class extends Fa{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sa),Hl.copy(n.position),Hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hl),n.updateMatrixWorld(),s.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Np.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Np)}},ns=class extends Oa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_h=class extends Fa{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},li=class extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new _h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},is=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Sc=class extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,c),r.manager.itemStart(e)}},Ch="\\[\\]\\.:\\/",tM=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",nM="[^"+Ch.replace("\\.","")+"]",iM=/((?:WC+[\/:])*)/.source.replace("WC",Ph),sM=/(WCOD+)?/.source.replace("WCOD",nM),rM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),aM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),oM=new RegExp("^"+iM+sM+rM+aM+"$"),cM=["material","materials","bones","map"],Sh=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tM,"")}static parseTrackName(e){let t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=Sh;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];gE=new Float32Array(1),Mc=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},wc=class{constructor(e,t,n=0,s=1/0){this.ray=new Ri(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mh(e,this,n,t),n.sort(Up),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mh(e[s],this,n,t);return n.sort(Up),n}};ka=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Zo=new wt,Ec=class extends Na{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Ot;r.setIndex(new it(n,1)),r.setAttribute("position",new it(s,3)),super(r,new Nr({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Zo.setFromObject(this.object),Zo.isEmpty())return;let t=Zo.min,n=Zo.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh)});function Fn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Va.copy(e),Va[n]=0,Va.normalize();let l=.5*a/(a+o),h=1-Va.angleTo(i)/c;return Math.sign(Va[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Va,Wr,Lh=Fe(()=>{cn();Va=new P;Wr=class extends Ci{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new P,c=new P,l=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new P,b=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Fn(g,c,"z","y",r,n),d[p+1]=1-Fn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-Fn(g,c,"z","y",r,n),d[p+1]=1-Fn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-Fn(g,c,"x","z",r,e),d[p+1]=Fn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Fn(g,c,"x","z",r,e),d[p+1]=1-Fn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Fn(g,c,"x","y",r,e),d[p+1]=1-Fn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=Fn(g,c,"x","y",r,e),d[p+1]=1-Fn(g,c,"y","x",r,t);break}}}});function am(i,e){let t=[],n=new dt,s=new dt,r=()=>{let b=new on({color:e,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new Se("#fff")});return b.name="tint",t.push(b),b},a=()=>{let b=new $t({color:e,roughness:.5});return b.name="tint",t.push(b),b},o=new $t({color:5979942,roughness:.5,name:"frame"}),c=new $t({color:2499103,roughness:.45}),l=new $t({color:11570519,metalness:1,roughness:.3}),h=(b,m,p=0,y=0,x=0,v,R=s)=>{let T=new ze(b,m);return T.position.set(p,y,x),v&&T.rotation.set(...v),T.castShadow=T.receiveShadow=!0,R.add(T),T},u=(b,m)=>new oi(b,b*.75,m,14),d=(b,m,p=.2)=>[-1,1].forEach(y=>[-1,1].forEach(x=>h(u(.04,p),o,y*b,p/2,x*m))),f=(b,m,p,y=o)=>[-1,1].forEach(x=>[-1,1].forEach(v=>h(u(.035,p),y,x*b,p/2,v*m))),g=(b,m,p,y)=>{let x=new dt;x.position.set(b,0,m),x.rotation.y=p,s.add(x),[-1,1].forEach(v=>[-1,1].forEach(R=>h(u(.024,.44),o,v*.21,.22,R*.2,0,x))),h(Je(.5,.08,.48,.03),y,0,.47,0,0,x),h(Je(.5,.52,.06,.03),y,0,.78,-.22,[-.08,0,0],x)};if(i==="sofa"){let b=r();d(1.15,.4),h(Je(2.6,.3,1.05,.08),b,0,.38,0);for(let m=-1;m<=1;m++)h(Je(.82,.26,.84,.12),b,m*.84,.66,.1),h(Je(.82,.6,.28,.14),b,m*.84,1.05,-.4,[-.14,0,0]);[-1,1].forEach(m=>h(Je(.28,.62,1.05,.1),b,m*1.32,.7,0))}else if(i==="chaise"){let b=r();d(1.15,.4),h(Je(1.8,.3,1.05,.08),b,-.45,.38,0),h(Je(.9,.3,1.75,.08),b,.9,.38,.35),[-.9,0].forEach(m=>h(Je(.84,.26,.84,.12),b,m,.66,.1)),h(Je(.86,.26,1.55,.12),b,.9,.66,.42),h(Je(2.68,.6,.28,.14),b,0,1.05,-.4,[-.14,0,0]),h(Je(.28,.62,1.05,.1),b,-1.49,.7,0)}else if(i==="armchair"){let b=r();d(.45,.4,.22),h(Je(1.1,.3,1,.08),b,0,.4,0),h(Je(.88,.22,.82,.1),b,0,.64,.08),h(Je(1,.8,.26,.14),b,0,.98,-.4,[-.16,0,0]),[-1,1].forEach(m=>h(Je(.2,.5,.9,.08),b,m*.55,.66,0))}else if(i==="bar"){let b=r();f(.2,.2,.72,c),h(new xc(.2,.015,8,32),l,0,.3,0,[Math.PI/2,0,0]),h(Je(.5,.1,.5,.04),b,0,.77,0),h(Je(.46,.26,.07,.03),b,0,1,-.22,[-.1,0,0])}else if(i==="dchair")g(0,0,0,r());else if(i==="dtable"){let b=a();h(Je(2,.07,1,.02),b,0,.75,0),f(.9,.42,.72,b)}else if(i==="coffee"){let b=a();h(new oi(.9,.9,.07,64),b,0,.62,0),h(new oi(.62,.62,.04,64),b,0,.22,0);for(let m=0;m<4;m++){let p=m*Math.PI/2+Math.PI/4;h(u(.05,.6),b,Math.cos(p)*.62,.3,Math.sin(p)*.62)}}else if(i==="console"){let b=a();h(Je(1.6,.05,.4,.02),b,0,.8,0),h(Je(1.5,.03,.34,.01),b,0,.25,0),f(.74,.16,.78,b)}else if(i==="dset"){let b=a(),m=r();h(Je(1.6,.07,.9,.02),b,0,.75,0),f(.7,.38,.72,b),[-.4,.4].forEach(p=>{g(p,-.75,0,m),g(p,.75,Math.PI,m)})}else if(i==="ottoman"){let b=r();d(.45,.45,.14),h(Je(1.2,.5,1.2,.2),b,0,.4,0)}else if(i==="headboard"){let b=r();h(Je(2,.9,.12,.06),b,0,.85,0),[-1,1].forEach(m=>h(Je(.08,1.3,.08,.02),o,m*.96,.65,-.06));for(let m=-2;m<=2;m++)h(Je(.3,.7,.02,.01),b,m*.36,.85,.07)}else if(i==="bedside"){let b=a();f(.22,.15,.2),h(Je(.55,.45,.4,.03),b,0,.43,0),h(Je(.5,.16,.01,.005),c,0,.5,.205),h(new oi(.015,.015,.07,12),l,0,.5,.24,[Math.PI/2,0,0])}else if(i==="dresser"){let b=a();f(.7,.2,.15),h(Je(1.6,.8,.5,.03),b,0,.55,0),[.3,.55,.8].forEach(m=>{h(Je(1.5,.2,.01,.005),c,0,m-.05,.255),h(new oi(.015,.015,.06,12),l,0,m-.05,.29,[Math.PI/2,0,0])})}else if(i==="tv"){let b=a();f(.82,.15,.14),h(Je(1.8,.45,.42,.03),b,0,.37,0),[-.45,.45].forEach(m=>h(Je(.8,.3,.02,.005),c,m,.37,.21)),h(Je(1.3,.75,.04,.01),c,0,1,0),h(Je(.3,.04,.2,.01),c,0,.62,0)}else{let b=r();h(Je(1.2,.7,.8,.1),b,0,.35,0)}return s.scale.setScalar(lM[i]||1.2),n.add(s),n.userData={tints:t,glows:[],frames:[o]},n}var Je,lM,om=Fe(()=>{cn();Lh();Je=(i,e,t,n=.06)=>new Wr(i,e,t,4,n),lM={sofa:1,chaise:.9,armchair:1.7,bar:2.3,dchair:2.4,dtable:1.1,coffee:1.5,console:1.3,dset:1.2,ottoman:2.1,headboard:1.2,bedside:2.5,dresser:1.3,tv:1.3}});function Hs(i,e=512){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");n.fillStyle=i,n.fillRect(0,0,e,e);let s=64,r=e/s;for(let c=0;c<s;c++)for(let l=0;l<s;l++)(c+l)%2===0?(n.fillStyle="rgba(255,255,255,.10)",n.fillRect(c*r,l*r+r*.12,r,r*.76)):(n.fillStyle="rgba(0,0,0,.12)",n.fillRect(c*r+r*.12,l*r,r*.76,r));let a=n.getImageData(0,0,e,e),o=a.data;for(let c=0;c<o.length;c+=4){let l=(Math.random()-.5)*12;o[c]+=l,o[c+1]+=l,o[c+2]+=l}return n.putImageData(a,0,0),t}async function qr(i,e,t){t={...zs,...t||{}};let n=++uM;i.forEach(r=>{r&&(r.userData.fabTok=n)});let s;try{s=await hM(e)}catch{i.forEach(r=>{r&&r.color&&r.userData.fabTok===n&&(r.map=null,r.color.set(e[1]),r.needsUpdate=!0)});return}i.forEach(r=>{if(!r||!("map"in r)||r.userData.fabTok!==n)return;let a=s.clone();a.colorSpace=nt,a.wrapS=a.wrapT=$n,a.repeat.set(t.sx,t.sy),a.rotation=t.rot*Math.PI/180,a.offset.set(t.ox,t.oy),a.anisotropy=8,a.needsUpdate=!0,r.map&&r.map!==s&&r.map.dispose(),r.map=a,r.color.set("#ffffff"),r.needsUpdate=!0})}var zs,Ih,hM,uM,Gs=Fe(()=>{cn();zs={sx:1,sy:1,rot:0,ox:0,oy:0};Ih=new Map,hM=i=>{let e=i[2]+"|"+i[1]+"|"+(i[3]||"");return Ih.has(e)||Ih.set(e,i[3]?new Hr().loadAsync(i[3]):Promise.resolve(new Fr(Hs(i[1],512)))),Ih.get(e)},uM=0});var rs,as,dM,fM,pM,Dh,kn,Pt,mM,gM,Di,Xr,cm,ht,Kn,Nh,mn=Fe(()=>{An();$d();om();Gs();rs=xt,as=we,dM=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-"),fM=new Set([...rs.deleted||[],...as.deleted||[]]),pM=new Set([...rs.deletedFabrics||[],...as.deletedFabrics||[]]),Dh=[...qd.map(([i,e])=>({id:dM(i),name:i,hex:e,type:"Fabric",desc:Xd[i]||""})),...rs.fabrics||[],...as.addedFabrics||[]].filter(i=>!pM.has(i.id)).map(i=>({type:"Fabric",desc:"",...i,...rs.fabricEdits?.[i.id]||{},...as.fabricEdits?.[i.id]||{}}));Dh.length||Dh.push({id:"oyster",name:"Oyster",hex:"#d4cabb",type:"Fabric",desc:""});kn=Dh.map(i=>({...i,image:tr("fabric:"+i.id)||i.image||null})),Pt=kn.map(i=>[i.name,i.hex,i.id,i.image,i.desc,i.type]),mM={...rs.pieceFabrics||{},...as.pieceFabrics||{}},gM=i=>{let e=mM[i],t=e?Pt.filter(n=>e.includes(n[2])):Pt;return t.length?t:Pt},Di=["Original","#e4ddd0","original",null,"The material and texture this piece was made with, shown unchanged.","Original"],Xr=(i,e)=>({...zs,...rs.mapping?.[i]?.[e]||{},...as.mapping?.[i]?.[e]||{}}),cm=[...(rs.products||[]).map(i=>({...i})),...(as.added||[]).map(i=>({...i,added:!0}))].map(i=>({kind:i.id,tag:"",mat:"",desc:"",dims:[100,100,100],...i,sub:i.sub||i.cat}));cm.forEach(i=>{i.model&&(rs.models[i.id]=i.model)});ht=[...cl,...cm].filter(i=>!fM.has(i.id)).map(i=>({...i,...as.products[i.id]||{},fabrics:gM(i.id)})),Kn=(()=>{let i=Wd.map(e=>ht.find(t=>t.id===e)).filter(Boolean);return i.length?i:ht.slice(0,4)})(),Nh=(i,e)=>am(cl.find(t=>t.id===i)?.kind||i,e)});function Uh(i,e){if(e===Xp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ga||e===Tc){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ga)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var lm=Fe(()=>{cn()});function bM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function vM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),i.DefaultMaterial}function Vs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function cs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _M(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function SM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MM(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kh(t.attributes):e=i.indices+":"+kh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+kh(i.targets[n]);return e}function kh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function cu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function AM(i,e,t){let n=e.attributes,s=new wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=cu($r[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=cu($r[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Ln;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function fm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=ou[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return at.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),cs(i,e),AM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_M(i,e.targets,t):i})}var Pc,je,Bh,zh,Hh,Gh,Vh,Wh,qh,Xh,$h,jh,Yh,Kh,Zh,Jh,Qh,eu,tu,pm,Wa,hm,nu,iu,su,ru,Lc,xM,au,Bn,$r,um,dm,Oh,ou,os,yM,Fh,EM,lu,mm=Fe(()=>{cn();lm();Pc=class extends Yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=is.extractUrlBase(e);a=is.resolveURL(l,this.path)}else a=is.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ts(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pm){try{a[je.KHR_BINARY_GLTF]=new nu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new lu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new zh;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new iu(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new su;break;case je.KHR_MESH_QUANTIZATION:a[u]=new ru;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Bh=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new li(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ns(h),l.distance=u;break;case"spot":l=new _c(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,cs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},zh=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,nt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],Nt),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},jh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,nt)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Jh=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Qh=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},eu=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},tu=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Bn.TRIANGLES&&l.mode!==Bn.TRIANGLE_STRIP&&l.mode!==Bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new He,m=new P,p=new rn,y=new P(1,1,1),x=new mc(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,b.compose(m,p,y));for(let v in c)if(v==="_COLOR_0"){let R=c[v];x.instanceColor=new Fs(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);_t.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},pm="glTF",Wa=12,hm={JSON:1313821514,BIN:5130562},nu=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wa,r=new DataView(e,Wa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===hm.JSON){let l=new Uint8Array(e,Wa+a,o);this.content=n.decode(l)}else if(c===hm.BIN){let l=Wa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},iu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=ou[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ou[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=$r[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Nt,d)})})}},su=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ru=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},Lc=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+u;for(let v=0;v!==o;v++){let R=a[b+v+o],T=a[b+v+c]*h,A=a[g+v+o],D=a[g+v]*h;r[v]=y*R+x*T+m*A+p*D}return r}},xM=new rn,au=class extends Lc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return xM.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},um={9728:Dt,9729:Wt,9984:Rr,9985:Ha,9986:Ls,9987:si},dm={33071:pn,33648:Us,10497:$n},Oh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ou={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yM={CUBICSPLINE:void 0,LINEAR:Ai,STEP:Zi},Fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};EM=new He,lu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Hr(this.options.manager):this.textureLoader=new Sc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ts(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Vs(r,o,s),cs(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(is.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Oh[s.type],o=$r[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new it(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Oh[s.type],l=$r[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,x=t.cache.get(y);x||(b=new l(o,p*f,s.count*f/h),x=new La(b,f/h),t.cache.add(y,x)),m=new Ia(x,c,d%f/h,g)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),m=new it(b,c,g);if(s.sparse!==void 0){let p=Oh.SCALAR,y=$r[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,R=new y(a[1],x,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new it(m.array.slice(),m.itemSize,m.normalized));for(let A=0,D=R.length;A<D;A++){let S=R[A];if(m.setX(S,T[A*c]),c>=2&&m.setY(S,T[A*c+1]),c>=3&&m.setZ(S,T[A*c+2]),c>=4&&m.setW(S,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=um[d.magFilter]||Wt,h.minFilter=um[d.minFilter]||si,h.wrapS=dm[d.wrapS]||$n,h.wrapT=dm[d.wrapT]||$n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Gt(b);m.needsUpdate=!0,d(m)}),t.load(is.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||wM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ua,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Nr,_n.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $t}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let u=s[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,nt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Xt);let h=r.alphaMode||Fh.OPAQUE;if(h===Fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Fh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==an&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==an){let u=r.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],Nt)}return r.emissiveTexture!==void 0&&a!==an&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,nt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),cs(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vs(s,u,r),u})}createUniqueName(e){let t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return fm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=MM(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=fm(new Ot,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?vM(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,y=l[f];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new fc(b,y):new ze(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?p.geometry=Uh(p.geometry,Tc):m.mode===Bn.TRIANGLE_FAN&&(p.geometry=Uh(p.geometry,Ga));else if(m.mode===Bn.LINES)p=new Na(b,y);else if(m.mode===Bn.LINE_STRIP)p=new Ur(b,y);else if(m.mode===Bn.LINE_LOOP)p=new gc(b,y);else if(m.mode===Bn.POINTS)p=new bc(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&SM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),cs(p,r),m.extensions&&Vs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Vs(s,u[0],r),u[0];let d=new dt;r.extensions&&Vs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(ss.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Dr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),cs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new He;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new pc(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],b=f.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let y=0,x=d.length;y<x;y++){let v=d[y],R=f[y],T=g[y],A=b[y],D=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let S=n._createAnimationTracks(v,R,T,A,D);if(S)for(let w=0;w<S.length;w++)p.push(S[w])}return new vc(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,EM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Da:l.length>1?h=new dt:l.length===1?h=l[0]:h=new _t,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),cs(h,r),r.extensions&&Vs(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new dt;n.name&&(r.name=s.createUniqueName(n.name)),cs(r,n),n.extensions&&Vs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof _n||d instanceof Gt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];os[r.path]===os.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(os[r.path]){case os.weights:l=Li;break;case os.rotation:l=ci;break;case os.position:case os.scale:l=Ii;break;default:switch(n.itemSize){case 1:l=Li;break;case 2:case 3:default:l=Ii;break}break}let h=s.interpolation!==void 0?yM[s.interpolation]:Ai,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+os[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=cu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ci?au:Lc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function TM(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=o.buffer,l=o.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),g=f.attributes.map(b=>b.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,g=o.GetEncodedGeometryType(c);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let b={index:null,attributes:[]};for(let m in h){let p=self[u[m]],y,x;if(l.useUniqueIDs)x=h[m],y=o.GetAttributeByUniqueId(d,x);else{if(x=o.GetAttributeId(d,a[h[m]]),x===-1)continue;y=o.GetAttribute(d,x)}let v=s(a,o,d,m,p,y);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),b.attributes.push(v)}return g===a.TRIANGULAR_MESH&&(b.index=n(a,o,d)),a.destroy(d),b}function n(a,o,c){let h=c.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function s(a,o,c,l,h,u){let d=u.num_components(),g=c.num_points()*d,b=g*h.BYTES_PER_ELEMENT,m=r(a,h),p=a._malloc(b);o.GetAttributeDataArrayForAllPoints(c,u,m,b,p);let y=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:l,array:y,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var hu,Ic,gm=Fe(()=>{cn();hu=new WeakMap,Ic=class extends Yn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new ts(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,nt).catch(n)}decodeDracoFile(e,t,n,s,r=Nt,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(hu.has(e)){let c=hu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),hu.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new Ot;e.index&&t.setIndex(new it(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,a=s.array,o=s.itemSize,c=new it(a,o);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==nt)return;let n=new Se;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s).convertSRGBToLinear(),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new ts(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=TM.toString(),a=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});var bm,xm=Fe(()=>{bm=function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),x=0;x<p.length;++x){var v=p.charCodeAt(x);y[x]=v>96?v-97:v>64?v-39:v+4}for(var R=0,x=0;x<p.length;++x)y[R++]=y[x]<60?n[y[x]]:(y[x]-60)*64+y[++x];return y.buffer.slice(0,R)}function c(p,y,x,v,R,T){var A=r.exports.sbrk,D=x+3&-4,S=A(D*v),w=A(R.length),U=new Uint8Array(r.exports.memory.buffer);U.set(R,w);var z=p(S,x,v,w,R.length);if(z==0&&T&&T(S,D,v),y.set(U.subarray(S,S+x*v)),A(S-A(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(x){var v=x.data;y.pending-=v.count,y.requests[v.id][v.action](v.value),delete y.requests[v.id]},y}function g(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),x=new Blob([y],{type:"text/javascript"}),v=URL.createObjectURL(x),R=0;R<p;++R)u[R]=f(v);URL.revokeObjectURL(v)}function b(p,y,x,v,R){for(var T=u[0],A=1;A<u.length;++A)u[A].pending<T.pending&&(T=u[A]);return new Promise(function(D,S){var w=new Uint8Array(x),U=d++;T.pending+=p,T.requests[U]={resolve:D,reject:S},T.object.postMessage({id:U,count:p,size:y,source:w,mode:v,filter:R},[w.buffer])})}function m(p){a.then(function(){var y=p.data;try{var x=new Uint8Array(y.count*y.size);c(r.exports[y.mode],x,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:x},[x.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,x,v,R){c(r.exports.meshopt_decodeVertexBuffer,p,y,x,v,r.exports[l[R]])},decodeIndexBuffer:function(p,y,x,v){c(r.exports.meshopt_decodeIndexBuffer,p,y,x,v)},decodeIndexSequence:function(p,y,x,v){c(r.exports.meshopt_decodeIndexSequence,p,y,x,v)},decodeGltfBuffer:function(p,y,x,v,R,T){c(r.exports[h[R]],p,y,x,v,r.exports[l[T]])},decodeGltfBufferAsync:function(p,y,x,v,R){return u.length>0?b(p,y,x,h[v],l[R]):a.then(function(){var T=new Uint8Array(p*y);return c(r.exports[h[v]],T,p,y,x,r.exports[l[R]]),T})}}}()});function RM(){ym??=new Ic().setDecoderPath("libs/draco/");let i=new Pc;return i.setDRACOLoader(ym),i.setMeshoptDecoder(bm),i}async function uu(i){let e=URL.createObjectURL(i);try{let t=await qa(e),n=new wt().setFromObject(t.scene).getSize(new P),s=Math.max(n.x,n.y,n.z)>20?.001:1;return[n.x,n.z,n.y].map(r=>Math.max(1,Math.round(r*s*100)))}finally{URL.revokeObjectURL(e)}}var ym,qa,Dc=Fe(()=>{cn();mm();gm();xm();qa=(i,e)=>new Promise((t,n)=>RM().load(i,t,e,n))});function fu(){let i={};try{i=JSON.parse(localStorage.getItem(du))||{}}catch{}return!i.owner&&/\.github\.io$/.test(location.hostname)&&(i.owner=location.hostname.split(".")[0],i.repo=i.repo||location.pathname.split("/")[1]||location.hostname),{branch:"main",...i}}function vm(i,e){let t={};try{t=JSON.parse(localStorage.getItem(du))||{}}catch{}t[i]=e,localStorage.setItem(du,JSON.stringify(t))}async function Sm(){let i=_m(),e=await Ws(i,"GET","");return e.permissions?.push?`Connected to ${e.full_name}. This token can publish.`:`Connected to ${e.full_name}, but this token cannot write. Give it "Contents: Read and write".`}async function Mm(i){let e=_m(),t=e.branch||"main";i("Reading the repository\u2026");let n=await Ws(e,"GET",`/git/ref/heads/${t}`),s=n.object.sha,r=await Ws(e,"GET",`/git/commits/${s}`),a={...xt.files||{}};for(let g of we._removed||[])delete a[g];for(let g of Ld()){let b=Pd(g),m=await(await fetch(b.url)).blob(),p=LM(g,b.name,b.type||m.type);i(`Noting path for ${p} (add this file to the repo manually)\u2026`),a[g]={path:p,type:b.type||m.type,name:b.name}}let o={...we};delete o._removed,delete o._publishedAt;let c=Date.now(),l={...rl,config:o,files:a,version:c};i("Saving settings (data/site.json)\u2026");let u=[{path:"data/site.json",mode:"100644",type:"blob",sha:(await Ws(e,"POST","/git/blobs",{content:JSON.stringify(l,null,1),encoding:"utf-8"})).sha}];i("Creating commit\u2026");let d=await Ws(e,"POST","/git/trees",{base_tree:r.tree.sha,tree:u}),f=await Ws(e,"POST","/git/commits",{message:"Update site content via admin panel",tree:d.sha,parents:[s]});return await Ws(e,"PATCH",`/git/refs/heads/${t}`,{sha:f.sha}),we._publishedAt=c,mt(),"Published (settings only). Models, images and videos were NOT uploaded \u2014 add those files to the repo manually. GitHub Pages usually updates within 1\u20132 minutes."}var du,Xa,Ws,_m,CM,PM,LM,wm=Fe(()=>{An();du="dekara-gh",Xa=i=>String(i).replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase();Ws=async(i,e,t,n)=>{let s=await fetch(`https://api.github.com/repos/${i.owner}/${i.repo}${t}`,{method:e,headers:{Authorization:"Bearer "+i.token,Accept:"application/vnd.github+json","Content-Type":"application/json","X-GitHub-Api-Version":"2022-11-28"},body:n?JSON.stringify(n):void 0});if(!s.ok){let r="";try{r=(await s.json()).message}catch{}throw new Error(`GitHub ${s.status}: ${r||s.statusText}`)}return s.json()},_m=()=>{let i=fu();if(!i.owner||!i.repo||!i.token)throw new Error("Enter the owner, repository and token first.");return i},CM={"video/mp4":"mp4","video/webm":"webm","image/png":"png","image/jpeg":"jpg","image/webp":"webp","image/gif":"gif","model/gltf-binary":"glb"},PM=(i,e)=>(/\.([a-z0-9]{2,5})$/i.exec(i||"")||[])[1]?.toLowerCase()||CM[e]||"bin",LM=(i,e,t)=>{let n=PM(e,t);if(i.startsWith("model:"))return`models/${Xa(e.replace(/\.[^.]+$/i,""))}.${n}`;if(i.startsWith("piece:")){let[,s,r]=i.split(":");return`models/collections/${Xa(s)}/${Xa(r)}.${n}`}return i.startsWith("fabric:")?`swatches/fabrics/${Xa(i.slice(7))}.${n}`:`media/${Xa(i)}.${n}`}});async function IM(){if(sessionStorage.adm==="1")return!0;let i=localStorage.getItem("dekara-pw");if(!i){let t=prompt("First time here: choose a steward passcode (4+ characters).");return!t||t.length<4?!1:(localStorage.setItem("dekara-pw",await Em(t)),sessionStorage.adm="1",!0)}let e=prompt("Steward passcode:");return e&&await Em(e)===i?(sessionStorage.adm="1",!0):(alert("Passcode incorrect."),!1)}function Tm(){let i=window.__prod,e=document.getElementById("map-body");if(!i||!e)return;let t=i.current(),n=h=>document.getElementById(h),s=["sx","sy","rot","ox","oy"],r=(h,u,d,f,g)=>`<label>${u} <b id="v-${h}"></b><input type="range" id="mp-${h}" min="${d}" max="${f}" step="${g}"></label>`;e.innerHTML=`<p class="note">Like Blender's Mapping node. Choose a fabric, set how it is scaled, rotated and offset on this piece, then lock the values so customers see exactly this.</p><label>Fabric<select id="mp-f">${i.fabrics.map(h=>`<option value="${St(h[2])}"${h[2]===t[2]?" selected":""}>${St(h[0])}</option>`).join("")}</select></label>
 ${r("sx","Scale X",.05,40,.05)}${r("sy","Scale Y",.05,40,.05)}<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0"><input type="checkbox" id="mp-link" checked style="width:auto"> Link X and Y scale</label>${r("rot","Rotation (degrees)",-180,180,1)}${r("ox","Location X",-2,2,.01)}${r("oy","Location Y",-2,2,.01)}
 <p class="note" id="mp-st"></p><div class="acts"><button data-mp="lock">Lock values</button><button data-mp="reset">Reset</button></div>`;let a=()=>n("mp-f").value,o=()=>i.fabrics.find(h=>h[2]===a()),c=()=>Object.fromEntries(s.map(h=>[h,Number(n("mp-"+h).value)])),l=()=>{let h=i.mapping(a());s.forEach(u=>{n("mp-"+u).value=h[u],n("v-"+u).textContent=h[u]}),n("mp-st").textContent=h.locked?"Locked. Customers see these values.":"Not locked yet. Lock to save these values for customers."};e.addEventListener("input",h=>{let u=h.target;if(u.id==="mp-f"){i.select(u.value),l();return}/^mp-(sx|sy|rot|ox|oy)$/.test(u.id)&&(n("mp-link").checked&&(u.id==="mp-sx"||u.id==="mp-sy")&&(n("mp-sx").value=n("mp-sy").value=u.value),s.forEach(d=>n("v-"+d).textContent=n("mp-"+d).value),i.preview(o(),c()),n("mp-st").textContent="Previewing. Lock to save these values for customers.")}),e.addEventListener("click",h=>{let u=h.target.dataset.mp;u==="lock"&&(kd(i.piece.id,a(),{...c(),locked:!0}),n("mp-st").textContent="Locked. Customers see these values."),u==="reset"&&(Bd(i.piece.id,a()),i.select(a()),l())}),l()}function Cm(){sessionStorage.admOpen="1";let i=document.getElementById("adm");if(i){i.classList.add("open");return}i=document.createElement("aside"),i.id="adm";let e=[...document.querySelectorAll("[data-slot]")].filter(t=>!t.dataset.slot.startsWith("gallery"));i.innerHTML=`<header><h3>Steward's Chamber</h3><button data-act="close">\u2715</button></header>
 <p class="note">Everything here is saved in this browser only. For a live site that all visitors see, these edits need a server or CMS behind them.</p>
 ${document.getElementById("p-canvas")?'<h4>Fabric mapping (this piece)</h4><div id="map-body"></div>':""}<h4>Media on this page</h4><p class="note">Every slot accepts an image or a video (MP4 or WebM; keep videos under about 50 MB). Background slots play silently on a loop; other videos show play controls.</p>${e.map(t=>Nc(t.dataset.label||t.dataset.slot,t.dataset.slot,"image/*,video/*")).join("")||'<p class="note">No media slots on this page.</p>'}
 ${kM()}${DM()}${NM()}${FM()}${BM()}${UM()}${OM()}<h4>Pieces</h4><div class="acts"><button data-act="restoredef">Restore deleted default pieces</button></div>${ht.map(t=>`<details><summary>${St(t.name)}</summary>${$a(t.id,"name","Name",t.name)}<label>Category<select data-pid="${t.id}" data-k="cat">${Ms.map(n=>`<option${n===t.cat?" selected":""}>${n}</option>`).join("")}</select></label>${$a(t.id,"sub","Subcategory",t.sub)}${$a(t.id,"tag","Tagline",t.tag)}${$a(t.id,"price","Price (ZAR)",t.price,"number")}${$a(t.id,"desc","Description",t.desc,"area")}<div class="ar"><b>Fabrics for this piece</b>${kn.map(n=>Rm(`data-pf="${t.id}"`,n.id,n.name,t.fabrics.some(s=>s[2]===n.id))).join("")}<small>To set how each fabric is scaled on this piece, open its page with this panel open.</small><a href="product.html?id=${encodeURIComponent(t.id)}" style="border-bottom:1px solid var(--line);justify-self:start">Open piece page</a></div>
 ${Nc("3D model (.glb / .gltf)","model:"+t.id,".glb,.gltf,model/gltf-binary")}${[1,2,3].map(n=>Nc("Gallery photo or video "+n,`gallery:${t.id}:${n}`,"image/*,video/*")).join("")}<div class="acts"><button data-delprod="${t.id}">Delete this piece</button></div></details>`).join("")}
 <div class="acts" id="adm-final"><button data-act="apply">Apply changes</button><button data-act="export">Export text</button><button data-act="import">Import text</button><button data-act="reset">Reset everything</button><button data-act="lock">Lock</button></div>`,document.body.append(i),requestAnimationFrame(()=>i.classList.add("open")),[...i.querySelectorAll(":scope>h4")].forEach(t=>{let n=document.createElement("details");n.className="sec";let s=document.createElement("summary");s.textContent="\u2630 "+t.textContent,n.append(s);let r=t.nextSibling;for(;r&&r.id!=="adm-final"&&!(r.nodeType===1&&r.tagName==="H4");){let a=r.nextSibling;n.append(r),r=a}t.textContent.startsWith("Fabric mapping")&&(n.open=!0),t.replaceWith(n)}),window.__prod&&Tm(),addEventListener("prod-ready",Tm),i.addEventListener("change",async t=>{let n=t.target;if(n.dataset.gh){vm(n.dataset.gh,n.value.trim());return}if(n.dataset.fe){let[s,r]=n.dataset.fe.split("|");Hd(s,r,n.value);return}if(n.dataset.pf){al(n.dataset.pf,[...i.querySelectorAll("[data-pf]")].filter(s=>s.dataset.pf===n.dataset.pf&&s.checked).map(s=>s.value));return}if(n.dataset.site){Od(n.dataset.site,n.type==="checkbox"?n.checked:n.type==="number"?Number(n.value):n.value.trim());return}if(n.id==="np-file"&&n.files[0]){try{let[s,r,a]=await uu(n.files[0]);["np-w","np-d","np-h"].forEach((o,c)=>document.getElementById(o).value=[s,r,a][c])}catch{alert("Could not read that model. You can still enter the size manually.")}return}if(n.dataset.cn){let s=En().find(r=>r.id===n.dataset.cn);s&&(s.name=n.value.trim()||s.name,mt());return}if(n.dataset.cp){let[s,r,a]=n.dataset.cp.split("|"),o=En().find(c=>c.id===s)?.pieces.find(c=>c.id===r);o&&(o[a]=a==="name"?n.value.trim():Math.max(0,Number(n.value)||0),mt());return}if(n.dataset.addpieces&&n.files.length){let s=En().find(r=>r.id===n.dataset.addpieces);n.disabled=!0;for(let r of n.files){let[a,o,c]=await uu(r).catch(()=>[100,100,80]),l="p"+Date.now().toString(36)+Math.random().toString(36).slice(2,5);await ma("piece:"+s.id+":"+l,r),s.pieces.push({id:l,name:r.name.replace(/\.(glb|gltf)$/i,"").replace(/[-_]+/g," "),w:a,d:o,h:c,price:0})}mt(),jt();return}if(n.dataset.sh){Ud(n.dataset.sh,n.type==="checkbox"?n.checked:Math.max(0,Number(n.value)||0));return}if(n.dataset.st){Nd(n.dataset.st,n.type==="checkbox"?n.checked:Math.max(0,Number(n.value)||0));return}if(n.dataset.pid){Id(n.dataset.pid,n.dataset.k,n.value);return}n.dataset.slot&&n.files[0]&&(n.disabled=!0,await ma(n.dataset.slot,n.files[0]),jt())}),i.addEventListener("click",async t=>{let n=t.target.closest("button");if(!n)return;if(n.dataset.del)return await nr(n.dataset.del),jt();let s=n.dataset;if(s.delprod){confirm("Delete this piece from the shop?")&&(Vd(s.delprod),await nr("model:"+s.delprod),jt());return}if(s.delpiece){let[a,o]=s.delpiece.split("|"),c=En().find(l=>l.id===a);c&&confirm("Remove this piece?")&&(c.pieces=c.pieces.filter(l=>l.id!==o),mt(),await nr("piece:"+a+":"+o),jt());return}if(s.delcoll){let a=En().find(o=>o.id===s.delcoll);if(a&&confirm("Delete this whole collection?")){for(let o of a.pieces)await nr("piece:"+a.id+":"+o.id);we.collections=En().filter(o=>o.id!==a.id),mt(),jt()}return}if(s.delfab){if(kn.length<=1){alert("Keep at least one fabric.");return}confirm("Delete this fabric?")&&(Gd(s.delfab),await nr("fabric:"+s.delfab),jt());return}let r=n.dataset.act;if(r==="close"&&(i.classList.remove("open"),sessionStorage.admOpen="0"),r==="apply"&&jt(),r==="ghtest"||r==="ghpub"||r==="ghdiscard"){let a=document.getElementById("gh-st"),o=c=>{a.textContent=c};if(r==="ghdiscard"){confirm("Discard all local changes and show what is published in the repository?")&&(await ol(),jt());return}n.disabled=!0;try{o(r==="ghtest"?await Sm():await Mm(o))}catch(c){o("Error: "+c.message)}n.disabled=!1;return}if(r==="restoredef"&&(delete we.deleted,mt(),jt()),r==="restorefab"&&(delete we.deletedFabrics,mt(),jt()),r==="addfab"){let a=h=>document.getElementById(h),o=a("nf-name").value.trim();if(!o){alert("Please name the fabric.");return}let c="f-"+o.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,20)+"-"+Date.now().toString(36).slice(-4),l=a("nf-img").files[0];l&&await ma("fabric:"+c,l),zd({id:c,name:o,type:a("nf-type").value,hex:a("nf-hex").value,desc:a("nf-desc").value.trim()}),jt()}if(r==="addprod"){let a=h=>document.getElementById(h),o=a("np-file").files[0],c=a("np-name").value.trim();if(!c||!o){alert("Please enter a name and choose a GLB model.");return}let l="x-"+c.toLowerCase().replace(/[^a-z0-9]+/g,"-").slice(0,24)+"-"+Date.now().toString(36).slice(-4);await ma("model:"+l,o),Fd({id:l,name:c,cat:a("np-cat").value,sub:a("np-sub").value.trim()||a("np-cat").value,tag:a("np-tag").value.trim(),price:Number(a("np-price").value)||0,mat:a("np-mat").value.trim(),desc:a("np-desc").value.trim(),dims:["np-w","np-d","np-h"].map(h=>Number(a(h).value)||100)}),al(l,[...document.querySelectorAll("[data-npf]")].filter(h=>h.checked).map(h=>h.value)),jt()}if(r==="addcoll"){let a=document.getElementById("nc-name").value.trim();if(!a){alert("Please name the collection.");return}En().push({id:"c"+Date.now().toString(36),name:a,pieces:[]}),mt(),jt()}if(r==="expprod"){let a={};kn.forEach(h=>{Ss("fabric:"+h.id)&&(a[h.id]={image:`swatches/fabrics/${h.id}.jpg`})});let o={fabrics:(we.addedFabrics||[]).map(h=>({...h,...a[h.id]||{}})),fabricEdits:Object.fromEntries(Object.keys({...we.fabricEdits,...a}).map(h=>[h,{...we.fabricEdits?.[h]||{},...a[h]||{}}])),mapping:we.mapping||{},pieceFabrics:we.pieceFabrics||{},deleted:we.deleted||[],deletedFabrics:we.deletedFabrics||[],products:(we.added||[]).map(h=>({...h,model:`models/${h.id}.glb`})),collections:En().map(h=>({...h,pieces:h.pieces.map(u=>({...u,model:`models/collections/${h.id}/${u.id}.glb`}))}))},c=(h,u)=>{let d=document.createElement("a");d.href=URL.createObjectURL(h),d.download=u,d.click()};c(new Blob([JSON.stringify(o,null,1)],{type:"application/json"}),"dekara-additions.json");let l=[...kn.map(h=>["fabric:"+h.id,"fabric_"+h.id+".jpg"]),...(we.added||[]).map(h=>["model:"+h.id,h.id+".glb"]),...En().flatMap(h=>h.pieces.map(u=>["piece:"+h.id+":"+u.id,"collection_"+h.id+"_"+u.id+".glb"]))];for(let[h,u]of l){let d=Ss(h);d&&(c(await(await fetch(d.url)).blob(),u),await new Promise(f=>setTimeout(f,400)))}}if(r==="orders"){let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([localStorage.getItem("dekara-orders")||"[]"],{type:"application/json"})),a.download="demo-orders.json",a.click()}if(r==="clearorders"&&confirm("Clear all demo orders?")&&(localStorage.removeItem("dekara-orders"),jt()),r==="lock"&&(sessionStorage.clear(),location.reload()),r==="export"){let a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(we,null,2)],{type:"application/json"})),a.download="dekara-content.json",a.click()}if(r==="import"){let a=document.createElement("input");a.type="file",a.accept=".json",a.onchange=async()=>{try{Dd(JSON.parse(await a.files[0].text())),jt()}catch{alert("That file could not be read.")}},a.click()}r==="reset"&&confirm("Remove all custom text and uploaded files?")&&(await ol(),jt())})}var St,Em,qs,jt,Nc,$a,DM,NM,UM,OM,FM,kM,Am,Rm,BM,Pm=Fe(()=>{An();mn();Dc();wm();St=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Em=i=>crypto.subtle.digest("SHA-256",new TextEncoder().encode(i)).then(e=>[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")),qs=document.createElement("button");qs.id="adm-trigger";qs.textContent="\u269C";qs.setAttribute("aria-label","Steward access");document.body.append(qs);qs.onclick=async()=>{await IM()&&Cm()};addEventListener("keydown",i=>{i.ctrlKey&&i.shiftKey&&i.key.toLowerCase()==="a"&&qs.click()});jt=()=>{sessionStorage.admOpen="1",location.reload()},Nc=(i,e,t)=>{let n=Ss(e);return`<div class="ar"><b>${St(i)}</b><small>${n?"Custom: "+St(n.name):"Default"}</small><input type="file" accept="${t}" data-slot="${St(e)}">${n?`<button data-del="${St(e)}">Remove custom file</button>`:""}</div>`},$a=(i,e,t,n,s="text")=>`<label>${t}${s==="area"?`<textarea rows="4" data-pid="${i}" data-k="${e}">${St(n)}</textarea>`:`<input type="${s}" data-pid="${i}" data-k="${e}" value="${St(n)}">`}</label>`,DM=()=>{let i=ei(),e=(t,n,s)=>`<label>${n}<input type="text" data-site="${t}" value="${St(i[t]||"")}" placeholder="${s}"></label>`;return`<h4>Business details</h4><p class="note">Shown in the footer and contact page. A WhatsApp number adds a floating chat button.</p>${e("phone","Phone","e.g. 010 000 0000")}${e("email","Email","e.g. info@yourdomain.co.za")}${e("whatsapp","WhatsApp number (with country code)","e.g. 27821234567")}<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-site="backlight" ${i.backlight===!1?"":"checked"} style="width:auto"> Backlight on main viewports</label>${e("apiBase","Backend API URL (when your backend is live)","https://your-api.workers.dev")}<label>Backlight strength (%)<input type="number" min="0" max="300" data-site="backlightStrength" value="${i.backlightStrength??100}"></label>`},NM=()=>{let i=So(),e=[];try{e=JSON.parse(localStorage.getItem("dekara-orders"))||[]}catch{}return`<h4>Basket and checkout</h4><label>Delivery fee (ZAR)<input type="number" min="0" data-sh="delivery" value="${i.delivery}"></label><label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-sh="payNow" ${i.payNow?"checked":""} style="width:auto"> Offer "Pay now" (demo payments)</label>
 <details><summary>Demo orders (${e.length})</summary>${e.slice(0,20).map(t=>`<div class="ar"><b>${St(t.ref)}</b><small>${St(t.name)} \xB7 ${St(String(t.date).slice(0,10))} \xB7 R ${Math.round(t.total).toLocaleString("en-ZA")}</small></div>`).join("")||'<p class="note">No orders yet.</p>'}<div class="acts"><button data-act="orders">Export orders</button><button data-act="clearorders">Clear orders</button></div></details>`},UM=()=>`<h4>Add a piece to the shop</h4><p class="note">Upload a GLB (Draco and Meshopt compression are supported). Dimensions fill in from the model and can be edited. For a live site, export the additions and commit the files to the repo.</p>
 <label>Name<input id="np-name"></label><label>Category<select id="np-cat">${Ms.map(i=>`<option>${i}</option>`).join("")}</select></label><label>Subcategory<input id="np-sub"></label><label>Tagline<input id="np-tag"></label><label>Price (ZAR)<input id="np-price" type="number" min="0"></label><label>Materials<input id="np-mat"></label><label>Description<textarea id="np-desc" rows="3"></textarea></label>
 <label>3D model (.glb)<input type="file" id="np-file" accept=".glb,.gltf"></label><div class="ar"><b>Fabrics for this piece</b>${kn.map(i=>Rm("data-npf",i.id,i.name,!0)).join("")}</div><label>Width cm<input id="np-w" type="number" min="1"></label><label>Depth cm<input id="np-d" type="number" min="1"></label><label>Height cm<input id="np-h" type="number" min="1"></label>
 <div class="acts"><button data-act="addprod">Add to shop</button></div>`,OM=()=>{let i=En(),e=[["name","Name"],["price","Price (ZAR)"],["w","Width cm"],["d","Depth cm"],["h","Height cm"]];return`<h4>Studio collections</h4><p class="note">Collections of GLB pieces that customers arrange on the Custom Studio canvas, just like the built-in modules. Each piece is stretched to the width, depth and height you set.</p>${i.map(t=>`<details><summary>${St(t.name)} (${t.pieces.length})</summary><label>Collection name<input data-cn="${t.id}" value="${St(t.name)}"></label>${t.pieces.map(n=>`<div class="ar"><b>${St(n.name)}</b>${e.map(([s,r])=>`<label>${r}<input ${s==="name"?"":'type="number" min="0"'} data-cp="${t.id}|${n.id}|${s}" value="${St(n[s])}"></label>`).join("")}<button data-delpiece="${t.id}|${n.id}">Remove piece</button></div>`).join("")}<label>Add pieces (GLB, several allowed)<input type="file" multiple accept=".glb,.gltf" data-addpieces="${t.id}"></label><div class="acts"><button data-delcoll="${t.id}">Delete collection</button></div></details>`).join("")}
 <label>New collection name<input id="nc-name"></label><div class="acts"><button data-act="addcoll">Create collection</button><button data-act="expprod">Export additions for repo</button></div>`},FM=()=>{let i=_o(),e={seat:"Seat",corner:"Corner",chaise:"Chaise",ottoman:"Ottoman",arm:"Arm"},t=(s,r,a)=>`<label>${r}<input type="number" min="0" data-st="${s}" value="${a}"></label>`,n=(s,r,a)=>`<label style="display:flex;gap:.5rem;align-items:center;margin-top:.7rem"><input type="checkbox" data-st="${s}" ${a?"checked":""} style="width:auto"> ${r}</label>`;return`<h4>Custom Studio limits</h4><p class="note">Decide how far a customer can take a build. For per-type maximums, 0 means unlimited.</p>${t("maxPieces","Max pieces on canvas",i.maxPieces)}${t("maxWidth","Max overall length (cm)",i.maxWidth)}${t("maxDepth","Max overall depth (cm)",i.maxDepth)}${n("snap","Snap pieces together",i.snap)}
 <details><summary>Modules, prices and maximums</summary>${Object.keys(e).map(s=>`<div class="ar"><b>${e[s]}</b>${n("enabled."+s,"Available to customers",i.enabled[s])}${t("prices."+s,"Price (ZAR)",i.prices[s])}${t("max."+s,"Max of this type",i.max[s])}</div>`).join("")}</details>
 <details><summary>Starter sizes offered</summary>${[1,2,3,4].map(s=>n("presets."+s,s+"-seater",i.presets[s])).join("")}</details>`},kM=()=>{let i=fu(),e=(t,n,s="text",r="")=>`<label>${n}<input type="${s}" data-gh="${t}" value="${St(i[t]||"")}" placeholder="${r}" autocomplete="off"></label>`;return`<h4>Publish to GitHub</h4><p class="note">Publishes your settings, prices, fabrics and product data to <code>data/site.json</code>. <strong>Models, images and videos are NOT uploaded</strong> \u2014 add those files to the repo yourself (GitHub blocks large binary files). Create a fine-grained GitHub token limited to this one repository with "Contents: Read and write". The token is stored only in this browser.</p>${e("owner","GitHub owner (username or organisation)")}${e("repo","Repository")}${e("branch","Branch","text","main")}${e("token","Token","password")}

 <div class="acts"><button data-act="ghpub">Publish changes</button><button data-act="ghtest">Test connection</button><button data-act="ghdiscard">Discard local changes</button></div><p class="note" id="gh-st"></p>`},Am=["Fabric","Leather","Velvet","Linen","Wood","Stone","Metal","Other"],Rm=(i,e,t,n)=>`<label style="display:flex;gap:.5rem;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem;margin:.3rem 0"><input type="checkbox" ${i} value="${St(e)}" ${n?"checked":""} style="width:auto">${St(t)}</label>`,BM=()=>`<h4>Fabrics &amp; materials</h4><p class="note">Add or delete the fabrics and materials customers can choose from. Tick which ones each piece offers (under Pieces), then set their scale per piece on the piece's page (see "Fabric mapping").</p>
 ${kn.map(i=>`<details><summary>${St(i.name)}</summary><label>Name<input data-fe="${i.id}|name" value="${St(i.name)}"></label><label>Type<select data-fe="${i.id}|type">${Am.map(e=>`<option${e===i.type?" selected":""}>${e}</option>`).join("")}</select></label><label>Colour<input type="color" data-fe="${i.id}|hex" value="${St(i.hex)}"></label><label>Description<textarea rows="3" data-fe="${i.id}|desc">${St(i.desc)}</textarea></label>${Nc("Swatch / texture image","fabric:"+i.id,"image/*")}<div class="acts"><button data-delfab="${i.id}">Delete this fabric</button></div></details>`).join("")}
 <label>New fabric name<input id="nf-name"></label><label>Type<select id="nf-type">${Am.map(i=>`<option>${i}</option>`).join("")}</select></label><label>Colour<input type="color" id="nf-hex" value="#cccccc"></label><label>Description<textarea id="nf-desc" rows="2"></textarea></label><label>Texture image (optional)<input type="file" id="nf-img" accept="image/*"></label>
 <div class="acts"><button data-act="addfab">Add fabric</button><button data-act="restorefab">Restore default fabrics</button></div>`;sessionStorage.adm==="1"&&sessionStorage.admOpen==="1"&&Cm();{let i=0,e=0;document.addEventListener("click",t=>{if(!t.target.closest(".ftr .logo"))return;let n=Date.now();i=n-e>2e3?1:i+1,e=n,i>=5&&(i=0,qs.click())})}});var Ui={};Ad(Ui,{add:()=>Ni,clear:()=>$s,count:()=>ja,list:()=>hi,money:()=>Et,onChange:()=>Ka,remove:()=>gu,setQty:()=>bu,shop:()=>Ya,summaryText:()=>zM,toast:()=>Oc,total:()=>Xs,vatOf:()=>mu});function Oc(i,e="basket.html",t="View basket"){let n=document.getElementById("toast");n||(n=document.createElement("div"),n.id="toast",document.body.append(n)),n.innerHTML="";let s=document.createElement("span");s.textContent=i;let r=document.createElement("a");r.href=e,r.textContent=t,n.append(s,r),n.classList.add("show"),clearTimeout(Lm),Lm=setTimeout(()=>n.classList.remove("show"),3800)}var pu,Im,Dm,Nm,zn,Uc,hi,ja,Xs,Et,mu,Ya,Ka,gu,bu,$s,zM,Lm,Ni,Zn=Fe(()=>{An();pu="dekara-basket",Im=new EventTarget,Dm=()=>Im.dispatchEvent(new Event("change")),Nm=()=>{try{return JSON.parse(localStorage.getItem(pu))||[]}catch{return[]}},zn=Nm(),Uc=()=>{try{localStorage.setItem(pu,JSON.stringify(zn))}catch{}Dm()},hi=()=>zn,ja=()=>zn.reduce((i,e)=>i+e.qty,0),Xs=()=>zn.reduce((i,e)=>i+e.price*e.qty,0),Et=i=>"R "+Math.round(i).toLocaleString("en-ZA"),mu=i=>i*15/115,Ya=So,Ka=i=>Im.addEventListener("change",i),gu=i=>{zn=zn.filter(e=>e.key!==i),Uc()},bu=(i,e)=>{let t=zn.find(n=>n.key===i);t&&(t.qty=Math.max(1,Math.min(20,e|0)),Uc())},$s=()=>{zn=[],Uc()},zM=()=>zn.map(i=>`${i.qty}\xD7 ${i.name} (${i.desc}) \u2014 ${Et(i.price*i.qty)}`).join(`
`)+`
Total ${Et(Xs())} incl. VAT`;Ni=i=>{let e=zn.find(t=>t.key===i.key);e?e.qty=Math.min(20,e.qty+1):zn.push({qty:1,...i}),Uc(),Oc(`${i.name} added to your basket`)};addEventListener("storage",i=>{i.key===pu&&(zn=Nm(),Dm())})});async function vu(){try{Za=new Set(await yu().wishlist())}catch{Za=new Set}xu()}async function Bm(i){try{Za=new Set(await yu().toggleWish(i))}catch{}xu()}var Yt,Hn,Um,Om,xu,ls,Kt,HM,GM,yu,Za,Fm,km,VM,bt,ui=Fe(()=>{An();Yt=(i,e)=>{try{return JSON.parse(localStorage.getItem(i))??e}catch{return e}},Hn=(i,e)=>{try{localStorage.setItem(i,JSON.stringify(e))}catch{}},Um=i=>crypto.subtle.digest("SHA-256",new TextEncoder().encode(i)).then(e=>[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")),Om=new EventTarget,xu=()=>Om.dispatchEvent(new Event("change")),ls=i=>Om.addEventListener("change",i),Kt=()=>Yt("dekara-session",null),HM={async me(){return Kt()},async register({name:i,email:e,password:t}){e=e.trim().toLowerCase();let n=Yt("dekara-users",[]);if(n.some(r=>r.email===e))throw new Error("An account with that email already exists.");let s={id:"u"+Date.now().toString(36),name:i.trim(),email:e,hash:await Um(t)};return n.push(s),Hn("dekara-users",n),this._in(s)},async login({email:i,password:e}){i=i.trim().toLowerCase();let t=Yt("dekara-users",[]).find(n=>n.email===i);if(!t||t.hash!==await Um(e))throw new Error("Incorrect email or password.");return this._in(t)},_in(i){let e={id:i.id,name:i.name,email:i.email};Hn("dekara-session",e);let t=Yt("dekara-wish-guest",[]);return t.length&&(Hn("dekara-wish-"+e.id,[...new Set([...Yt("dekara-wish-"+e.id,[]),...t])]),localStorage.removeItem("dekara-wish-guest")),e},async logout(){localStorage.removeItem("dekara-session")},async wishlist(){return Yt("dekara-wish-"+(Kt()?.id||"guest"),[])},async toggleWish(i){let e="dekara-wish-"+(Kt()?.id||"guest"),t=Yt(e,[]),n=t.indexOf(i);return n<0?t.push(i):t.splice(n,1),Hn(e,t),t},async reviews(i){return Yt("dekara-reviews",[]).filter(e=>e.pid===i).sort((e,t)=>t.date.localeCompare(e.date))},async addReview(i){let e=Kt();if(!e)throw new Error("Please sign in to write a review.");let t=Yt("dekara-reviews",[]);t.push({id:"r"+Date.now().toString(36),pid:i.pid,rating:i.rating,title:i.title,body:i.body,name:e.name,uid:e.id,date:new Date().toISOString()}),Hn("dekara-reviews",t)},async createOrder(i){let e=Yt("dekara-orders",[]);return e.unshift({...i,uid:Kt()?.id||null}),Hn("dekara-orders",e.slice(0,50)),i},async orders(){let i=Kt();return i?Yt("dekara-orders",[]).filter(e=>e.uid===i.id||e.email===i.email):[]},async designs(){let i=Kt();return i?Yt("dekara-designs-"+i.id,[]):[]},async saveDesign(i){let e=Kt();if(!e)throw new Error("Please sign in (Account page) to save designs.");let t="dekara-designs-"+e.id,n=Yt(t,[]),s={id:"d"+Date.now().toString(36),date:new Date().toISOString(),...i};return n.unshift(s),Hn(t,n.slice(0,30)),s},async deleteDesign(i){let e=Kt();if(e){let t="dekara-designs-"+e.id;Hn(t,Yt(t,[]).filter(n=>n.id!==i))}},async tradeApply(i){let e=Yt("dekara-trade",[]);e.unshift({...i,date:new Date().toISOString()}),Hn("dekara-trade",e)},async contact(i){let e=Yt("dekara-contacts",[]);e.unshift({...i,date:new Date().toISOString()}),Hn("dekara-contacts",e)},async newsletter(i){let e=Yt("dekara-subs",[]);e.includes(i)||e.push(i),Hn("dekara-subs",e)},async orderStatus(){return{status:"paid"}}},GM=i=>{let e=async(n,s,r)=>{let a=localStorage.getItem("dekara-token"),o=await fetch(i+s,{method:n,headers:{"Content-Type":"application/json",...a?{Authorization:"Bearer "+a}:{}},body:r?JSON.stringify(r):void 0});if(!o.ok)throw new Error((await o.json().catch(()=>({}))).message||"Request failed");return o.status===204?null:o.json()},t=async(n,s)=>{let r=await e("POST",n,s);return localStorage.setItem("dekara-token",r.token),Hn("dekara-session",r.user),r.user};return{me:()=>e("GET","/me").catch(()=>null),register:n=>t("/auth/register",n),login:n=>t("/auth/login",n),logout:async()=>{await e("POST","/auth/logout").catch(()=>{}),localStorage.removeItem("dekara-token"),localStorage.removeItem("dekara-session")},wishlist:()=>e("GET","/wishlist"),toggleWish:n=>e("POST","/wishlist/toggle",{productId:n}),reviews:n=>e("GET","/products/"+n+"/reviews"),addReview:n=>e("POST","/products/"+n.pid+"/reviews",n),createOrder:n=>e("POST","/orders",n),orders:()=>e("GET","/orders"),designs:()=>e("GET","/designs"),saveDesign:n=>e("POST","/designs",n),deleteDesign:n=>e("DELETE","/designs/"+n),tradeApply:n=>e("POST","/trade-applications",n),contact:n=>e("POST","/contact",n),newsletter:n=>e("POST","/newsletter",{email:n}),orderStatus:n=>e("GET","/orders/"+encodeURIComponent(n)+"/status")}},yu=()=>xt.apiBase?GM(xt.apiBase):HM,Za=new Set,Fm=i=>Za.has(i),km=()=>Za.size;VM=["register","login","logout","addReview","saveDesign","deleteDesign"],bt=Object.fromEntries(["me","register","login","logout","wishlist","reviews","addReview","createOrder","orders","designs","saveDesign","deleteDesign","tradeApply","contact","newsletter","orderStatus"].map(i=>[i,async(...e)=>{let t=await yu()[i](...e);return["login","register","logout"].includes(i)&&await vu(),VM.includes(i)&&xu(),t}]))});var _u,zm,Hm,Gm,Jn,Su,Mu,Fc,wu,jr,Vm,Wm,kc,Bc=Fe(()=>{_u="dekara-compare",zm=new EventTarget,Hm=()=>zm.dispatchEvent(new Event("change")),Gm=()=>{try{return JSON.parse(localStorage.getItem(_u))||[]}catch{return[]}},Jn=Gm(),Su=()=>{try{localStorage.setItem(_u,JSON.stringify(Jn))}catch{}Hm()},Mu=3,Fc=()=>Jn,wu=i=>Jn.includes(i),jr=i=>zm.addEventListener("change",i),Vm=i=>{if(wu(i))Jn=Jn.filter(e=>e!==i);else{if(Jn.length>=Mu)return!1;Jn.push(i)}return Su(),!0},Wm=i=>{Jn=Jn.filter(e=>e!==i),Su()},kc=()=>{Jn=[],Su()};addEventListener("storage",i=>{i.key===_u&&(Jn=Gm(),Hm())})});var XM={};var js,jm,WM,qM,Ym,zc,Xm,$m,Eu,Km,Zm,Ja,Jm,Qm,eg=Fe(()=>{An();Pm();Zn();ui();Bc();js=ei(),jm=[["shop.html","Shop"],["custom-studio.html","Custom Studio"],["fabrics.html","Fabric Library"],["services.html","Services"],["trade.html","For Designers"],["about.html","About"],["contact.html","Contact"]],WM=[["help.html#faq","FAQ"],["compare.html","Compare pieces"],["help.html#delivery","Delivery fees"],["help.html#guarantee","Guarantee policy"],["help.html#terms","Terms & conditions"]],qM='<span class="m-sep m-only"></span><a class="m-only" href="index.html">Home</a><a class="m-only" href="account.html" id="acct2">Sign in / Register</a><a class="m-only" href="account.html#saved">Saved items</a><a class="m-only" href="basket.html">Basket</a><a class="m-only" href="compare.html">Compare pieces</a><a class="m-only" href="help.html#faq">Help &amp; FAQ</a>',Ym=location.pathname.split("/").pop()||"index.html",zc=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.body.insertAdjacentHTML("afterbegin",`<a class="skip" href="#main">Skip to content</a><div class="notice">Please note: delivery on all items is between 4\u20136 weeks</div><header class="hdr"><a class="logo" href="index.html" data-slot="logo" data-label="Site logo (replaces text)"><span class="lt">Dekara Designs</span></a><nav id="nav" aria-label="Main">${jm.map(([i,e])=>`<a href="${i}"${i===Ym?' class="on"':""}>${e}</a>`).join("")}${qM}</nav><a class="bk" href="account.html#saved" aria-label="Saved items">\u2661 <b id="wl-n">0</b></a><a class="bk" href="account.html" id="acct">Sign in</a><a class="bk" href="basket.html" aria-label="Basket"><svg class="bki" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg><span class="bk-t">Basket</span> <b id="bk-n">0</b></a><button class="burger" aria-label="Menu"><i></i><i></i></button></header>`);Xm=document.querySelector("main");Xm&&(Xm.id="main");document.body.insertAdjacentHTML("beforeend",`<footer class="ftr"><div class="cols"><div><div class="logo"><span class="lt">Dekara Designs</span></div><p>A premium interior design studio and furniture manufacturer, creating spaces with intimate connections to the people who live in them.</p>
<form id="nl" class="nl"><input type="email" required placeholder="Your email for news and specials" aria-label="Email address"><button class="btn sm" type="submit">Subscribe</button></form><p id="nl-ok" class="nl-ok" hidden>Thank you. (Demo: your email was not stored.)</p></div>
<div><h4>Pages</h4>${jm.map(([i,e])=>`<a href="${i}">${e}</a>`).join("")}</div>
<div><h4>Help</h4>${WM.map(([i,e])=>`<a href="${i}">${e}</a>`).join("")}<a href="basket.html">Basket</a></div>
<div><h4>Trading hours</h4>Mon\u2013Fri 09h00 \u2013 16h00<br>Sat 09h00 \u2013 14h00<br>Holidays 09h00 \u2013 14h00<br>Sundays closed<h4 style="margin-top:1.2rem">Visit</h4>Our showroom \xB7 Design studio${js.phone?`<br><a href="tel:${zc(js.phone.replace(/\s/g,""))}">${zc(js.phone)}</a>`:""}${js.email?`<a href="mailto:${zc(js.email)}">${zc(js.email)}</a>`:""}</div></div><div class="fine">\xA9 ${new Date().getFullYear()} Dekara Designs. Concept demo.</div></footer>`);document.getElementById("nl").onsubmit=async i=>{i.preventDefault();let e=i.target.querySelector("input").value.trim(),t=document.getElementById("nl-ok");try{await bt.newsletter(e),i.target.hidden=!0,t.textContent=xt.apiBase?"Thank you for subscribing.":"Thank you. (Demo: your email was only stored in this browser.)",t.hidden=!1}catch(n){i.target.hidden=!0,t.textContent=n.message||"Could not subscribe. Please try again.",t.hidden=!1}};$m=(js.whatsapp||"").replace(/\D/g,"");$m&&document.body.insertAdjacentHTML("beforeend",`<a class="wa" href="https://wa.me/${$m}?text=${encodeURIComponent("Hi Dekara Designs, I would like to find out more about your furniture.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">WhatsApp</a>`);!localStorage.getItem("dekara-cookie")&&location.hash!=="#tour"&&(document.body.insertAdjacentHTML("beforeend",'<div class="cookie" role="dialog" aria-label="Cookie notice"><p>We use cookies to remember your basket and improve the site. (Demo notice.)</p><button class="btn sm" data-c="1">Accept</button><button class="btn sm ghost" data-c="0">Decline</button></div>'),document.querySelector(".cookie").onclick=i=>{let e=i.target.closest("[data-c]");if(e){try{localStorage.setItem("dekara-cookie",e.dataset.c)}catch{}i.currentTarget.remove()}});Eu=document.querySelector(".burger");Eu.setAttribute("aria-expanded","false");Eu.onclick=()=>{let i=document.body.classList.toggle("menu");Eu.setAttribute("aria-expanded",String(i))};addEventListener("keydown",i=>{i.key==="Escape"&&document.body.classList.remove("menu")});addEventListener("resize",()=>{innerWidth>960&&document.body.classList.remove("menu")});document.querySelectorAll("#nav a").forEach(i=>i.onclick=()=>document.body.classList.remove("menu"));Km=()=>{let i=ja(),e=document.getElementById("bk-n");e.textContent=i,e.classList.toggle("has",i>0)};Km();Ka(Km);Zm=()=>{document.getElementById("wl-n").textContent=km();let i=Kt(),e=i?i.name.split(" ")[0]:"Sign in";document.getElementById("acct").textContent=e,document.getElementById("acct2").textContent=i?"My account ("+e+")":"Sign in / Register"};Zm();ls(Zm);vu();Ja=document.createElement("div");Ja.id="cmpbar";document.body.append(Ja);Jm=()=>{let i=Fc().length;Ja.hidden=!i||Ym==="compare.html",Ja.innerHTML=`<span>Compare ${i}/${Mu}</span><a class="btn sm" href="compare.html">Open comparison</a><button class="lnk" id="cmp-x">Clear</button>`,Ja.querySelector("#cmp-x").onclick=kc};Jm();jr(Jm);window.applySlots=()=>document.querySelectorAll("[data-slot]").forEach(i=>{let e=Ss(i.dataset.slot);if(!e||i.querySelector(":scope>.slot-media"))return;let t=e.type.startsWith("video"),n=document.createElement(t?"video":"img");n.className="slot-media",n.src=e.url,t?(Object.assign(n,{autoplay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata"}),i.hasAttribute("data-bg")||(n.controls=!0)):n.alt="",i.prepend(n)});applySlots();Qm=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),Qm.unobserve(e.target))}),{threshold:.12});window.watchReveals=()=>document.querySelectorAll(".reveal:not(.in)").forEach(i=>Qm.observe(i));watchReveals();if(location.hash==="#tour"){document.body.classList.add("tour");let i=0;(function e(){i+=1.1,scrollTo(0,i),i<document.documentElement.scrollHeight&&requestAnimationFrame(e)})()}});var tg,Au,ng,Hc,ig,$M,Yr,Tu=Fe(()=>{cn();tg={type:"change"},Au={type:"start"},ng={type:"end"},Hc=new Ri,ig=new Pn,$M=Math.cos(70*ss.DEG2RAD),Yr=class extends ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",ne),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tg),n.update(),r=s.NONE},this.update=function(){let C=new P,J=new rn().setFromUnitVectors(e.up,new P(0,1,0)),le=J.clone().invert(),se=new P,Me=new rn,qe=new P,Ze=2*Math.PI;return function(ce=null){let I=n.object.position;C.copy(I).sub(n.target),C.applyQuaternion(J),o.setFromVector3(C),n.autoRotate&&r===s.NONE&&U(S(ce)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ae=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(ae)&&isFinite(oe)&&(ae<-Math.PI?ae+=Ze:ae>Math.PI&&(ae-=Ze),oe<-Math.PI?oe+=Ze:oe>Math.PI&&(oe-=Ze),ae<=oe?o.theta=Math.max(ae,Math.min(oe,o.theta)):o.theta=o.theta>(ae+oe)/2?Math.max(ae,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=X(o.radius):o.radius=X(o.radius*l),C.setFromSpherical(o),C.applyQuaternion(le),I.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Ce=!1;if(n.zoomToCursor&&T){let Ee=null;if(n.object.isPerspectiveCamera){let tt=C.length();Ee=X(tt*l);let st=tt-Ee;n.object.position.addScaledVector(v,st),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let tt=new P(R.x,R.y,0);tt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ce=!0;let st=new P(R.x,R.y,0);st.unproject(n.object),n.object.position.sub(st).add(tt),n.object.updateMatrixWorld(),Ee=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ee!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ee).add(n.object.position):(Hc.origin.copy(n.object.position),Hc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Hc.direction))<$M?e.lookAt(n.target):(ig.setFromNormalAndCoplanarPoint(n.object.up,n.target),Hc.intersectPlane(ig,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ce=!0);return l=1,T=!1,Ce||se.distanceToSquared(n.object.position)>a||8*(1-Me.dot(n.object.quaternion))>a||qe.distanceToSquared(n.target)>0?(n.dispatchEvent(tg),se.copy(n.object.position),Me.copy(n.object.quaternion),qe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ge),n.domElement.removeEventListener("pointerdown",Ne),n.domElement.removeEventListener("pointercancel",_),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",_),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ne),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new ka,c=new ka,l=1,h=new P,u=new Te,d=new Te,f=new Te,g=new Te,b=new Te,m=new Te,p=new Te,y=new Te,x=new Te,v=new P,R=new Te,T=!1,A=[],D={};function S(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function w(C){let J=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*J)}function U(C){c.theta-=C}function z(C){c.phi-=C}let Y=function(){let C=new P;return function(le,se){C.setFromMatrixColumn(se,0),C.multiplyScalar(-le),h.add(C)}}(),L=function(){let C=new P;return function(le,se){n.screenSpacePanning===!0?C.setFromMatrixColumn(se,1):(C.setFromMatrixColumn(se,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(le),h.add(C)}}(),N=function(){let C=new P;return function(le,se){let Me=n.domElement;if(n.object.isPerspectiveCamera){let qe=n.object.position;C.copy(qe).sub(n.target);let Ze=C.length();Ze*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*le*Ze/Me.clientHeight,n.object.matrix),L(2*se*Ze/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(le*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),L(se*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(C,J){if(!n.zoomToCursor)return;T=!0;let le=n.domElement.getBoundingClientRect(),se=C-le.left,Me=J-le.top,qe=le.width,Ze=le.height;R.x=se/qe*2-1,R.y=-(Me/Ze)*2+1,v.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function Z(C){u.set(C.clientX,C.clientY)}function K(C){$(C.clientX,C.clientX),p.set(C.clientX,C.clientY)}function ue(C){g.set(C.clientX,C.clientY)}function V(C){d.set(C.clientX,C.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let J=n.domElement;U(2*Math.PI*f.x/J.clientHeight),z(2*Math.PI*f.y/J.clientHeight),u.copy(d),n.update()}function j(C){y.set(C.clientX,C.clientY),x.subVectors(y,p),x.y>0?H(w(x.y)):x.y<0&&q(w(x.y)),p.copy(y),n.update()}function re(C){b.set(C.clientX,C.clientY),m.subVectors(b,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(b),n.update()}function ye(C){$(C.clientX,C.clientY),C.deltaY<0?q(w(C.deltaY)):C.deltaY>0&&H(w(C.deltaY)),n.update()}function be(C){let J=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),J=!0;break}J&&(C.preventDefault(),n.update())}function te(C){if(A.length===1)u.set(C.pageX,C.pageY);else{let J=Ke(C),le=.5*(C.pageX+J.x),se=.5*(C.pageY+J.y);u.set(le,se)}}function me(C){if(A.length===1)g.set(C.pageX,C.pageY);else{let J=Ke(C),le=.5*(C.pageX+J.x),se=.5*(C.pageY+J.y);g.set(le,se)}}function fe(C){let J=Ke(C),le=C.pageX-J.x,se=C.pageY-J.y,Me=Math.sqrt(le*le+se*se);p.set(0,Me)}function Le(C){n.enableZoom&&fe(C),n.enablePan&&me(C)}function F(C){n.enableZoom&&fe(C),n.enableRotate&&te(C)}function Rt(C){if(A.length==1)d.set(C.pageX,C.pageY);else{let le=Ke(C),se=.5*(C.pageX+le.x),Me=.5*(C.pageY+le.y);d.set(se,Me)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let J=n.domElement;U(2*Math.PI*f.x/J.clientHeight),z(2*Math.PI*f.y/J.clientHeight),u.copy(d)}function ve(C){if(A.length===1)b.set(C.pageX,C.pageY);else{let J=Ke(C),le=.5*(C.pageX+J.x),se=.5*(C.pageY+J.y);b.set(le,se)}m.subVectors(b,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(b)}function Re(C){let J=Ke(C),le=C.pageX-J.x,se=C.pageY-J.y,Me=Math.sqrt(le*le+se*se);y.set(0,Me),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),H(x.y),p.copy(y);let qe=(C.pageX+J.x)*.5,Ze=(C.pageY+J.y)*.5;$(qe,Ze)}function xe(C){n.enableZoom&&Re(C),n.enablePan&&ve(C)}function ct(C){n.enableZoom&&Re(C),n.enableRotate&&Rt(C)}function Ne(C){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",_)),Pe(C),C.pointerType==="touch"?_e(C):k(C))}function E(C){n.enabled!==!1&&(C.pointerType==="touch"?de(C):ie(C))}function _(C){ke(C),A.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",_)),n.dispatchEvent(ng),r=s.NONE}function k(C){let J;switch(C.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case ks.DOLLY:if(n.enableZoom===!1)return;K(C),r=s.DOLLY;break;case ks.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;ue(C),r=s.PAN}else{if(n.enableRotate===!1)return;Z(C),r=s.ROTATE}break;case ks.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Z(C),r=s.ROTATE}else{if(n.enablePan===!1)return;ue(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Au)}function ie(C){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(C);break;case s.DOLLY:if(n.enableZoom===!1)return;j(C);break;case s.PAN:if(n.enablePan===!1)return;re(C);break}}function ee(C){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(C.preventDefault(),n.dispatchEvent(Au),ye(C),n.dispatchEvent(ng))}function ne(C){n.enabled===!1||n.enablePan===!1||be(C)}function _e(C){switch(Q(C),A.length){case 1:switch(n.touches.ONE){case Bs.ROTATE:if(n.enableRotate===!1)return;te(C),r=s.TOUCH_ROTATE;break;case Bs.PAN:if(n.enablePan===!1)return;me(C),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Bs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(C),r=s.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(C),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Au)}function de(C){switch(Q(C),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Rt(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ve(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ct(C),n.update();break;default:r=s.NONE}}function ge(C){n.enabled!==!1&&C.preventDefault()}function Pe(C){A.push(C.pointerId)}function ke(C){delete D[C.pointerId];for(let J=0;J<A.length;J++)if(A[J]==C.pointerId){A.splice(J,1);return}}function Q(C){let J=D[C.pointerId];J===void 0&&(J=new Te,D[C.pointerId]=J),J.set(C.pageX,C.pageY)}function Ke(C){let J=C.pointerId===A[0]?A[1]:A[0];return D[J]}n.domElement.addEventListener("contextmenu",ge),n.domElement.addEventListener("pointerdown",Ne),n.domElement.addEventListener("pointercancel",_),n.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}});function Kr(i){let e=new an;return e.color.setScalar(i),e}var Ys,Ru=Fe(()=>{cn();Ys=class extends Sn{constructor(e=null){super();let t=new Ci;t.deleteAttribute("uv");let n=new $t({side:sn}),s=new $t,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new ns(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new ze(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new ze(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new ze(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new ze(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new ze(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new ze(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new ze(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new ze(t,Kr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let b=new ze(t,Kr(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);let m=new ze(t,Kr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new ze(t,Kr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new ze(t,Kr(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new ze(t,Kr(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});function hs(i,e,{orbit:t=!1,spin:n=.35,scroll:s=!1}={}){let r=new ai({canvas:i,antialias:!0,alpha:!0});r.setPixelRatio(Math.min(devicePixelRatio,2)),r.toneMapping=za,r.toneMappingExposure=1.1,r.shadowMap.enabled=!0,r.shadowMap.type=Ba;let a=new Sn;a.environment=new Pi(r).fromScene(new Ys,.04).texture;let o=new yt(32,1,.1,100),c=new P(5,2.8,6.5),l=new P(0,.9,0);o.position.copy(c);let h=ei(),u=h.backlight===!1?0:(h.backlightStrength??100)/100,d=new li(16777215,2.4);d.position.set(3,6,4),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),Object.assign(d.shadow.camera,{left:-4,right:4,top:4,bottom:-4}),a.add(d);let f=new ns(16773596,12*u,12);f.position.set(-3,1.5,-3),a.add(f);let g=new li(16774374,3.2*u);g.position.set(-2,3.5,-5),a.add(g);let b=new ze(new kr(5,64),new zr({opacity:.22}));b.rotation.x=-Math.PI/2,b.receiveShadow=!0,a.add(b);let m=new ze(new Br(2.3,2.33,128),new an({color:10254925,transparent:!0,opacity:.35,side:2}));m.rotation.x=-Math.PI/2,m.position.y=.005,a.add(m);let p;t&&(p=new Yr(o,i),p.target.copy(l),p.enableDamping=!0,p.enablePan=!1,p.minDistance=4,p.maxDistance=12,p.maxPolarAngle=Math.PI*.49);let y,x=0,v,R=1,T=[1,1,1],A=!1,D=null,S=te=>{v=te,D=null,y.userData.tints.forEach(me=>{me.map=null,me.color.set(te),me.needsUpdate=!0})},w=[],U=()=>{w=y.userData.tints.map(te=>({m:te,c:te.color.clone(),map:te.map}))},z=()=>{w.forEach(({m:te,c:me,map:fe})=>{te.userData.fabTok=-1,te.map&&te.map!==fe&&te.map.dispose(),te.map=fe,te.color.copy(me),te.needsUpdate=!0})},Y=()=>{D&&qr(y.userData.tints,D.f,D.m)},L=(te,me)=>{if(!te||te[2]==="original"){D=null,z();return}D={f:te,m:me},Y()},N=null,H=()=>{N&&(y.userData.frames||[]).forEach(te=>te.color.set(N))},q=te=>{N=te,H()},$=te=>{R=te,y.userData.glows.forEach(me=>me.emissiveIntensity=te*3),f.intensity=12*te*u};function X(te){D=null,w=[],y&&a.remove(y),v=ht.find(fe=>fe.id===te).fabrics[0][1];let me=tr("model:"+te)||xt.models?.[te];me?(y=new dt,y.userData={tints:[],glows:[],frames:[]},qa(me).then(fe=>{let Le=fe.scene,F=new wt().setFromObject(Le),Rt=F.getSize(new P),ve=F.getCenter(new P),Re=2.6/Math.max(Rt.x,Rt.y,Rt.z);Le.scale.setScalar(Re),Le.position.set(-ve.x*Re,-F.min.y*Re,-ve.z*Re);let xe=[],ct=[],Ne=[];Le.traverse(E=>{E.isMesh&&(E.castShadow=E.receiveShadow=!0,[].concat(E.material).forEach(_=>{if(_.name==="frame"){Ne.push(_);return}_.transparent&&_.opacity<1||(ct.push(_),_.name==="tint"&&xe.push(_))}))}),y.userData.tints.push(...xe.length?xe:ct),y.userData.frames.push(...Ne),y.add(Le),U(),H(),Y()}).catch(()=>y.add(Nh(te,v)))):y=Nh(te,v),a.add(y),x=0,$(R),U(),H(),Y()}X(e);let Z=()=>{let te=i.parentElement,me=te.clientWidth||1,fe=te.clientHeight||1;r.setSize(me,fe,!1),o.aspect=me/fe,o.updateProjectionMatrix()},K=new ResizeObserver(Z);K.observe(i.parentElement);let ue=!0,V=new IntersectionObserver(te=>ue=te[0].isIntersecting);V.observe(i);let j={x:0,y:0},re=te=>{j.x=te.clientX/innerWidth-.5,j.y=te.clientY/innerHeight-.5};addEventListener("pointermove",re);let ye=0,be=performance.now();return function te(me){if(A)return;requestAnimationFrame(te);let fe=Math.min((me-be)/1e3,.05);if(be=me,!!ue){ye+=fe,x=Math.min(1,x+fe*1.5);{let Le=.001+(1-Math.pow(1-x,3))*.999;y.scale.set(T[0]*Le,T[1]*Le,T[2]*Le)}t?p.update():(y.rotation.y=.6+ye*n+(s?scrollY*.003:0)+j.x*.9,o.position.set(c.x,c.y-j.y*.8,c.z+(s?scrollY*.002:0)),o.lookAt(l)),r.render(a,o)}}(be),{destroy(){A=!0,K.disconnect(),V.disconnect(),removeEventListener("pointermove",re),r.dispose(),r.forceContextLoss&&r.forceContextLoss()},getModel:()=>({object:y,dim:T}),setId:X,setColour:S,setFabric:L,setFrame:q,setGlow:$,setDims:(te,me,fe)=>{T=[te,me,fe]}}}var Qa=Fe(()=>{cn();Tu();Ru();Dc();Gs();An();mn()});var jM={};var sg,rg=Fe(()=>{mn();Qa();sg=document.getElementById("hero-canvas");if(!Kn.length)sg.closest(".stage")?.remove();else{let i=hs(sg,Kn[0].id,{scroll:!1,spin:.15}),e=document.getElementById("hero-switch"),t=document.getElementById("hero-info");e.innerHTML=Kn.map((o,c)=>`<button class="pill${c?"":" on"}" data-i="${c}"></button>`).join(""),e.querySelectorAll(".pill").forEach((o,c)=>o.textContent=Kn[c].name.split(" ").pop());let n=o=>{t.replaceChildren();let c=document.createElement("b");c.textContent=o.name;let l=document.createElement("a");l.href="product.html?id="+encodeURIComponent(o.id),l.textContent="Customise in 3D",t.append(c,` \u2014 ${o.tag}. R ${Number(o.price).toLocaleString("en-ZA")} \xB7 `,l)};n(Kn[0]);let s=0,r,a=o=>{s=o,i.setId(Kn[o].id),n(Kn[o]),e.querySelectorAll(".pill").forEach((c,l)=>c.classList.toggle("on",l===o))};e.onclick=o=>{let c=o.target.closest(".pill");c&&(a(+c.dataset.i),clearInterval(r))},r=setInterval(()=>a((s+1)%Kn.length),7e3)}});var lg={};Ad(lg,{cardHtml:()=>Oi,mount:()=>Fi,release:()=>eo});var us,ag,Oi,og,cg,Fi,eo,Zr=Fe(()=>{Qa();mn();Bc();Zn();ui();us=new Map,ag=new IntersectionObserver(i=>i.forEach(e=>{let t=e.target,n=t.querySelector(".stage");e.isIntersecting&&!us.has(t)?(n.innerHTML="<canvas></canvas>",us.set(t,hs(n.firstChild,t.dataset.id,{spin:.5}))):!e.isIntersecting&&us.has(t)&&(us.get(t).destroy(),us.delete(t),n.innerHTML="")}),{rootMargin:"250px"}),Oi=(i,e)=>`<a class="card${e?" reveal":""}" data-id="${i.id}" href="product.html?id=${i.id}"><button class="heart" data-wish="${i.id}" aria-label="Save to wishlist" aria-pressed="false">\u2661</button><div class="stage"></div><div class="meta"><div><h3>${i.name}</h3><p>${i.cat} \xB7 ${i.tag}</p></div><span>R ${Number(i.price).toLocaleString("en-ZA")}</span></div><div class="acts2"><button class="qadd" data-add="${i.id}">+ Add to basket</button><button class="cmpb" data-cmp="${i.id}">Compare</button></div></a>`;document.addEventListener("click",i=>{let e=i.target.closest(".qadd");if(!e)return;i.preventDefault(),i.stopPropagation();let t=ht.find(s=>s.id===e.dataset.add),n=Di;t&&Ni({key:`p:${t.id}:${n[0]}:${Tn[0][0]}:${t.dims.join("x")}`,name:t.name,desc:`${n[0]} \xB7 ${Tn[0][0]} frame \xB7 ${t.dims.join(" \xD7 ")} cm`,price:Math.round(t.price/10)*10,swatch:n[1]})});og=()=>document.querySelectorAll("[data-wish]").forEach(i=>{let e=Fm(i.dataset.wish);i.classList.toggle("on",e),i.setAttribute("aria-pressed",e),i.textContent=i.dataset.label?e?"\u2665 Saved":"\u2661 Save to wishlist":e?"\u2665":"\u2661"});ls(og);cg=()=>document.querySelectorAll("[data-cmp]").forEach(i=>{let e=wu(i.dataset.cmp);i.classList.toggle("on",e),i.textContent=e?"\u2713 Comparing":"Compare"});jr(cg);document.addEventListener("click",i=>{let e=i.target.closest("[data-cmp]");e&&(i.preventDefault(),i.stopPropagation(),Vm(e.dataset.cmp)||Oc("You can compare up to 3 pieces at a time","compare.html","Open comparison"))});document.addEventListener("click",i=>{let e=i.target.closest("[data-wish]");e&&(i.preventDefault(),i.stopPropagation(),Bm(e.dataset.wish))});Fi=i=>{ag.observe(i),queueMicrotask(og),queueMicrotask(cg)},eo=i=>i.querySelectorAll(".card").forEach(e=>{ag.unobserve(e),us.has(e)&&(us.get(e).destroy(),us.delete(e))})});var YM={};var Cu,hg,ug=Fe(()=>{mn();Zr();Cu=document.querySelector("[data-cards]"),hg=Cu.dataset.limit?Kn:ht;Cu.innerHTML=hg.length?hg.map(i=>Oi(i,!0)).join(""):'<p class="st-note">No pieces to show yet.</p>';Cu.querySelectorAll(".card").forEach(Fi);window.watchReveals&&watchReveals()});function Qr(i,e=1/0,t=null){Pu||(Pu=new Os(2,2,1,1)),Jr||(Jr=new jn({uniforms:{blitTexture:new Mc(i)},vertexShader:`
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
			}`})),Jr.uniforms.blitTexture.value=i,Jr.defines.IS_SRGB=i.colorSpace==nt,Jr.needsUpdate=!0,Gc||(Gc=new ze(Pu,Jr),Gc.frustrumCulled=!1);let n=new yt,s=new Sn;s.add(Gc),t===null&&(t=to=new ai({antialias:!1}));let r=Math.min(i.image.width,e),a=Math.min(i.image.height,e);t.setSize(r,a),t.clear(),t.render(s,n);let o=document.createElement("canvas"),c=o.getContext("2d");o.width=r,o.height=a,c.drawImage(t.domElement,0,0,r,a);let l=new Fr(o);return l.minFilter=i.minFilter,l.magFilter=i.magFilter,l.wrapS=i.wrapS,l.wrapT=i.wrapT,l.name=i.name,to&&(to.forceContextLoss(),to.dispose(),to=null),l}var to,Pu,Jr,Gc,Lu=Fe(()=>{cn()});function no(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function tw(i){return new TextEncoder().encode(i).buffer}function nw(i){return no(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function iw(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let a;i.itemSize>4?a=i.array[s*i.itemSize+r]:(r===0?a=i.getX(s):r===1?a=i.getY(s):r===2?a=i.getZ(s):r===3&&(a=i.getW(s)),i.normalized===!0&&(a=ss.normalize(a,i.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function xg(i){return Math.ceil(i/4)*4}function Du(i,e=0){let t=xg(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function gg(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function bg(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}var dg,ea,Ye,Iu,In,fg,KM,pg,ZM,JM,mg,QM,ew,Nu,Uu,Ou,Fu,ku,Bu,zu,Hu,Gu,Vu,Wu,qu,Xu,$u,yg=Fe(()=>{cn();Lu();dg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},ea=class{constructor(){this.pluginCallbacks=[],this.register(function(e){return new Uu(e)}),this.register(function(e){return new Ou(e)}),this.register(function(e){return new Bu(e)}),this.register(function(e){return new zu(e)}),this.register(function(e){return new Hu(e)}),this.register(function(e){return new Gu(e)}),this.register(function(e){return new Fu(e)}),this.register(function(e){return new ku(e)}),this.register(function(e){return new Vu(e)}),this.register(function(e){return new Wu(e)}),this.register(function(e){return new qu(e)}),this.register(function(e){return new Xu(e)}),this.register(function(e){return new $u(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r=new Nu,a=[];for(let o=0,c=this.pluginCallbacks.length;o<c;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.write(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},Ye={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Iu="KHR_mesh_quantization",In={};In[Dt]=Ye.NEAREST;In[Rr]=Ye.NEAREST_MIPMAP_NEAREST;In[Ls]=Ye.NEAREST_MIPMAP_LINEAR;In[Wt]=Ye.LINEAR;In[Ha]=Ye.LINEAR_MIPMAP_NEAREST;In[si]=Ye.LINEAR_MIPMAP_LINEAR;In[pn]=Ye.CLAMP_TO_EDGE;In[$n]=Ye.REPEAT;In[Us]=Ye.MIRRORED_REPEAT;fg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},KM=new Se,pg=12,ZM=1179937895,JM=2,mg=8,QM=1313821514,ew=5130562;Nu=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);let s=this,r=s.buffers,a=s.json;n=s.options;let o=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),u=Object.keys(c);if(h.length>0&&(a.extensionsUsed=h),u.length>0&&(a.extensionsRequired=u),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=l.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let f=Du(d.result),g=new DataView(new ArrayBuffer(mg));g.setUint32(0,f.byteLength,!0),g.setUint32(4,ew,!0);let b=Du(tw(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(mg));m.setUint32(0,b.byteLength,!0),m.setUint32(4,QM,!0);let p=new ArrayBuffer(pg),y=new DataView(p);y.setUint32(0,ZM,!0),y.setUint32(4,JM,!0);let x=pg+m.byteLength+b.byteLength+g.byteLength+f.byteLength;y.setUint32(8,x,!0);let v=new Blob([p,m,b,g,f],{type:"application/octet-stream"}),R=new FileReader;R.readAsArrayBuffer(v),R.onloadend=function(){t(R.result)}}}else if(a.buffers&&a.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let f=d.result;a.buffers[0].uri=f,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],s[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new P;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new P;for(let r=0,a=n.count;r<a;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(f){return f.colorSpace===nt?function(b){return b<.04045?b*.0773993808:Math.pow(b*.9478672986+.0521327014,2.4)}:function(b){return b}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof Or&&(e=Qr(e)),t instanceof Or&&(t=Qr(t));let s=e?e.image:null,r=t?t.image:null,a=Math.max(s?s.width:0,r?r.width:0),o=Math.max(s?s.height:0,r?r.height:0),c=gg();c.width=a,c.height=o;let l=c.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,a,o);let h=l.getImageData(0,0,a,o);if(s){l.drawImage(s,0,0,a,o);let f=n(e),g=l.getImageData(0,0,a,o).data;for(let b=2;b<g.length;b+=4)h.data[b]=f(g[b]/256)*256}if(r){l.drawImage(r,0,0,a,o);let f=n(t),g=l.getImageData(0,0,a,o).data;for(let b=1;b<g.length;b+=4)h.data[b]=f(g[b]/256)*256}l.putImageData(h,0,0);let d=(e||t).clone();return d.source=new Lr(c),d.colorSpace=nn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case Ye.BYTE:case Ye.UNSIGNED_BYTE:o=1;break;case Ye.SHORT:case Ye.UNSIGNED_SHORT:o=2;break;default:o=4}let c=xg(s*e.itemSize*o),l=new DataView(new ArrayBuffer(c)),h=0;for(let f=n;f<n+s;f++)for(let g=0;g<e.itemSize;g++){let b;e.itemSize>4?b=e.array[f*e.itemSize+g]:(g===0?b=e.getX(f):g===1?b=e.getY(f):g===2?b=e.getZ(f):g===3&&(b=e.getW(f)),e.normalized===!0&&(b=ss.normalize(b,e.array))),t===Ye.FLOAT?l.setFloat32(h,b,!0):t===Ye.INT?l.setInt32(h,b,!0):t===Ye.UNSIGNED_INT?l.setUint32(h,b,!0):t===Ye.SHORT?l.setInt16(h,b,!0):t===Ye.UNSIGNED_SHORT?l.setUint16(h,b,!0):t===Ye.BYTE?l.setInt8(h,b):t===Ye.UNSIGNED_BYTE&&l.setUint8(h,b),h+=o}let u={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===Ye.ARRAY_BUFFER&&(u.byteStride=e.itemSize*o),this.byteOffset+=c,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let a=Du(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,s(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,s){let r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=Ye.FLOAT;else if(e.array.constructor===Int32Array)o=Ye.INT;else if(e.array.constructor===Uint32Array)o=Ye.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=Ye.SHORT;else if(e.array.constructor===Uint16Array)o=Ye.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=Ye.BYTE;else if(e.array.constructor===Uint8Array)o=Ye.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let c=iw(e,n,s),l;t!==void 0&&(l=e===t.index?Ye.ELEMENT_ARRAY_BUFFER:Ye.ARRAY_BUFFER);let h=this.processBufferView(e,o,n,s,l),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:s,max:c.max,min:c.min,type:a[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,a=r.cache,o=r.json,c=r.options,l=r.pending;a.images.has(e)||a.images.set(e,{});let h=a.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];o.images||(o.images=[]);let d={mimeType:s},f=gg();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);let g=f.getContext("2d");if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==vn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];g.putImageData(new ImageData(m,e.width,e.height),0,0)}else g.drawImage(e,0,0,f.width,f.height);c.binary===!0?l.push(bg(f,s).then(m=>r.processBufferViewImage(m)).then(m=>{d.bufferView=m})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):l.push(bg(f,s).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));let b=o.images.push(d)-1;return h[u]=b,b}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:In[e.magFilter],minFilter:In[e.minFilter],wrapS:In[e.wrapS],wrapT:In[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Or&&(e=Qr(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");let o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,o)});let c=r.textures.push(o)-1;return s.textures.set(e,c),c}processMaterial(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(no(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=.5,s.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){let o=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),c={index:this.processTexture(o),channel:o.channel};this.applyTextureTransform(c,o),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){let o={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),s.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){let o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),s.emissiveTexture=l}}if(e.normalMap){let o={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),s.normalTexture=o}if(e.aoMap){let o={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),s.occlusionTexture=o}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===Xt&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),this._invokeAll(function(o){o.writeMaterial&&o.writeMaterial(e,s)});let a=n.materials.push(s)-1;return t.materials.set(e,a),a}processMesh(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let v=0,R=e.material.length;v<R;v++)s.push(e.material[v].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let a=e.geometry,o;e.isLineSegments?o=Ye.LINES:e.isLineLoop?o=Ye.LINE_LOOP:e.isLine?o=Ye.LINE_STRIP:e.isPoints?o=Ye.POINTS:o=e.material.wireframe?Ye.LINES:Ye.TRIANGLES;let c={},l={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let v in a.attributes){if(v.slice(0,5)==="morph")continue;let R=a.attributes[v];if(v=d[v]||v.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(v)||(v="_"+v),t.attributes.has(this.getUID(R))){l[v]=t.attributes.get(this.getUID(R));continue}g=null;let A=R.array;v==="JOINTS_0"&&!(A instanceof Uint16Array)&&!(A instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new it(new Uint16Array(A),R.itemSize,R.normalized));let D=this.processAccessor(g||R,a);D!==null&&(v.startsWith("_")||this.detectMeshQuantization(v,R),l[v]=D,t.attributes.set(this.getUID(R),D))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let v=[],R=[],T={};if(e.morphTargetDictionary!==void 0)for(let A in e.morphTargetDictionary)T[e.morphTargetDictionary[A]]=A;for(let A=0;A<e.morphTargetInfluences.length;++A){let D={},S=!1;for(let w in a.morphAttributes){if(w!=="position"&&w!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}let U=a.morphAttributes[w][A],z=w.toUpperCase(),Y=a.attributes[w];if(t.attributes.has(this.getUID(U,!0))){D[z]=t.attributes.get(this.getUID(U,!0));continue}let L=U.clone();if(!a.morphTargetsRelative)for(let N=0,H=U.count;N<H;N++)for(let q=0;q<U.itemSize;q++)q===0&&L.setX(N,U.getX(N)-Y.getX(N)),q===1&&L.setY(N,U.getY(N)-Y.getY(N)),q===2&&L.setZ(N,U.getZ(N)-Y.getZ(N)),q===3&&L.setW(N,U.getW(N)-Y.getW(N));D[z]=this.processAccessor(L,a),t.attributes.set(this.getUID(Y,!0),D[z])}u.push(D),v.push(e.morphTargetInfluences[A]),e.morphTargetDictionary!==void 0&&R.push(T[A])}c.weights=v,R.length>0&&(c.extras={},c.extras.targetNames=R)}let b=Array.isArray(e.material);if(b&&a.groups.length===0)return null;let m=!1;if(b&&a.index===null){let v=[];for(let R=0,T=a.attributes.position.count;R<T;R++)v[R]=R;a.setIndex(v),m=!0}let p=b?e.material:[e.material],y=b?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let v=0,R=y.length;v<R;v++){let T={mode:o,attributes:l};if(this.serializeUserData(a,T),u.length>0&&(T.targets=u),a.index!==null){let D=this.getUID(a.index);(y[v].start!==void 0||y[v].count!==void 0)&&(D+=":"+y[v].start+":"+y[v].count),t.attributes.has(D)?T.indices=t.attributes.get(D):(T.indices=this.processAccessor(a.index,a,y[v].start,y[v].count),t.attributes.set(D,T.indices)),T.indices===null&&delete T.indices}let A=this.processMaterial(p[y[v].materialIndex]);A!==null&&(T.material=A),h.push(T)}m===!0&&a.setIndex(null),c.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(v){v.writeMesh&&v.writeMesh(e,c)});let x=n.meshes.push(c)-1;return t.meshes.set(r,x),x}detectMeshQuantization(e,t){if(this.extensionsUsed[Iu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];dg[s]&&dg[s].includes(n)&&(this.extensionsUsed[Iu]=!0,this.extensionsRequired[Iu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ss.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=ea.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){let l=r[c],h=rt.parseTrackName(l.name),u=rt.findNode(t,h.nodeName),d=fg[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name),null;let f=1,g=l.values.length/l.times.length;d===fg.morphTargetInfluences&&(g/=u.morphTargetInfluences.length);let b;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(b="CUBICSPLINE",g/=3):l.getInterpolation()===Zi?b="STEP":b="LINEAR",o.push({input:this.processAccessor(new it(l.times,f)),output:this.processAccessor(new it(l.values,g)),interpolation:b}),a.push({sampler:o.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let a=e.skeleton.bones[0];if(a===void 0)return null;let o=[],c=new Float32Array(r.bones.length*16),l=new He;for(let u=0;u<r.bones.length;++u)o.push(n.get(r.bones[u])),l.copy(r.boneInverses[u]),l.multiply(e.bindMatrix).toArray(c,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new it(c,16)),joints:o,skeleton:n.get(a)}),s.skin=t.skins.length-1}processNode(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let o=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();no(o,[0,0,0,1])||(r.rotation=o),no(c,[0,0,0])||(r.translation=c),no(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),nw(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let o=this.processMesh(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){let o=[];for(let c=0,l=e.children.length;c<l;c++){let h=e.children[c];if(h.visible||n.onlyVisible===!1){let u=this.processNode(h);u!==null&&o.push(u)}}o.length>0&&(r.children=o)}this._invokeAll(function(o){o.writeNode&&o.writeNode(e,r)});let a=t.nodes.push(r)-1;return s.set(e,a),a}processScene(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let a=0,o=e.children.length;a<o;a++){let c=e.children[a];if(c.visible||n.onlyVisible===!1){let l=this.processNode(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}processObjects(e){let t=new Sn;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){let t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof Sn?this.processScene(e[s]):n.push(e[s]);n.length>0&&this.processObjects(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);this._invokeAll(function(s){s.afterParse&&s.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}},Uu=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let o=s.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}},Ou=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Fu=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let a={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let a={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){let a={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ku=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let a={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let a={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Bu=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let a={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},zu=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let a={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Hu=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Gu=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(KM)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let a={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){let a={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Vu=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let a={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){let a={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Wu=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let a={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},qu=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Xu=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let a={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},$u=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),a=new Float32Array(s.count*4),o=new Float32Array(s.count*3),c=new He,l=new P,h=new rn,u=new P;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,h,u),l.toArray(r,f*3),h.toArray(a,f*4),u.toArray(o,f*3);let d={TRANSLATION:n.processAccessor(new it(r,3)),ROTATION:n.processAccessor(new it(a,4)),SCALE:n.processAccessor(new it(o,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};ea.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n)),o;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;o=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(a.evaluate(e),0),r.set(i.values,n),o=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(a.evaluate(e),i.values.length),o=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(a.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),o=c+1;break}}return i.times=s,i.values=r,o},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let a=s[r],o=rt.parseTrackName(a.name),c=rt.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Ai)}let l=c.morphTargetInfluences.length,h=c.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let u;if(n[c.uuid]===void 0){u=a.clone();let f=new u.ValueBufferType(l*u.times.length);for(let g=0;g<u.times.length;g++)f[g*l+h]=u.values[g];u.name=(o.nodeName||"")+".morphTargetInfluences",u.values=f,n[c.uuid]=u,t.push(u);continue}let d=a.createInterpolant(new a.ValueBufferType(1));u=n[c.uuid];for(let f=0;f<u.times.length;f++)u.values[f*l+h]=d.evaluate(u.times[f]);for(let f=0;f<a.times.length;f++){let g=this.insertKeyframe(u,a.times[f]);u.values[g*l+h]=a.values[f]}}return i.tracks=t,i}}});function fw(i,e){return dw(i,e||{},0,0)}function ao(i,e){if(e){for(var t=new bn(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Eg)return Eg.encode(i);for(var s=i.length,r=new bn(i.length+(i.length>>1)),a=0,o=function(h){r[a++]=h},n=0;n<s;++n){if(a+5>r.length){var c=new bn(a+8+(s-n<<1));c.set(r),r=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Lg(r,0,a)}function Ng(i,e){e||(e={});var t={},n=[];Dg(i,"",t,e);var s=0,r=0;for(var a in t){var o=t[a],c=o[0],l=o[1],h=l.level==0?0:8,u=ao(a),d=u.length,f=l.comment,g=f&&ao(f),b=g&&g.length,m=Ju(l.extra);if(d>65535)throw"filename too long";var p=h?fw(c,l):c,y=p.length,x=uw();x.p(c),n.push(Ig(l,{size:c.length,crc:x.d(),c:p,f:u,m:g,u:d!=a.length||g&&f.length!=b,o:s,compression:h})),s+=30+d+m+y,r+=76+2*(d+m)+(b||0)+y}for(var v=new bn(r+22),R=s,T=r-s,A=0;A<n.length;++A){var u=n[A];Ag(v,u.o,u,u.f,u.u,u.c.length);var D=30+u.f.length+Ju(u.extra);v.set(u.c,u.o+D),Ag(v,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+D+(u.m?u.m.length:0)}return gw(v,s,n.length,T,R),v}var vg,sw,bn,gn,ta,Qu,ed,_g,Tg,Rg,rw,Yu,Cg,gA,Sg,Ku,ki,ot,ro,Ks,ot,ot,ot,ot,Wc,ot,aw,ow,Pg,Lg,Bi,io,ju,Zu,Mg,so,Vc,wg,cw,td,lw,hw,uw,dw,Ig,Zt,Dg,Eg,pw,mw,Ju,Ag,gw,Ug=Fe(()=>{vg=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},sw=function(i){return new Worker(i)};try{URL.revokeObjectURL(vg(""))}catch{vg=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},sw=function(e){return new Worker(e,{type:"module"})}}bn=Uint8Array,gn=Uint16Array,ta=Uint32Array,Qu=new bn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ed=new bn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_g=new bn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tg=function(i,e){for(var t=new gn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new ta(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},Rg=Tg(Qu,2),rw=Rg[0],Yu=Rg[1];rw[28]=258,Yu[258]=28;Cg=Tg(ed,0),gA=Cg[0],Sg=Cg[1],Ku=new gn(32768);for(ot=0;ot<32768;++ot)ki=(ot&43690)>>>1|(ot&21845)<<1,ki=(ki&52428)>>>2|(ki&13107)<<2,ki=(ki&61680)>>>4|(ki&3855)<<4,Ku[ot]=((ki&65280)>>>8|(ki&255)<<8)>>>1;ro=function(i,e,t){for(var n=i.length,s=0,r=new gn(e);s<n;++s)++r[i[s]-1];var a=new gn(e);for(s=0;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new gn(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],h=e-i[s],u=a[i[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[Ku[u]>>>c]=l}else for(o=new gn(n),s=0;s<n;++s)i[s]&&(o[s]=Ku[a[i[s]-1]++]>>>15-i[s]);return o},Ks=new bn(288);for(ot=0;ot<144;++ot)Ks[ot]=8;for(ot=144;ot<256;++ot)Ks[ot]=9;for(ot=256;ot<280;++ot)Ks[ot]=7;for(ot=280;ot<288;++ot)Ks[ot]=8;Wc=new bn(32);for(ot=0;ot<32;++ot)Wc[ot]=5;aw=ro(Ks,9,0),ow=ro(Wc,5,0),Pg=function(i){return(i/8|0)+(i&7&&1)},Lg=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof gn?gn:i instanceof ta?ta:bn)(t-e);return n.set(i.subarray(e,t)),n},Bi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},io=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},ju=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return[td,0];if(s==1){var a=new bn(t[0].s+1);return a[t[0].s]=1,[a,1]}t.sort(function(R,T){return R.f-T.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};h!=s-1;)o=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=r[0].s,n=1;n<s;++n)r[n].s>d&&(d=r[n].s);var f=new gn(d+1),g=Zu(t[h-1],f,0);if(g>e){var n=0,b=0,m=g-e,p=1<<m;for(r.sort(function(T,A){return f[A.s]-f[T.s]||T.f-A.f});n<s;++n){var y=r[n].s;if(f[y]>e)b+=p-(1<<g-f[y]),f[y]=e;else break}for(b>>>=m;b>0;){var x=r[n].s;f[x]<e?b-=1<<e-f[x]++-1:++n}for(;n>=0&&b;--n){var v=r[n].s;f[v]==e&&(--f[v],++b)}g=e}return[new bn(f),g]},Zu=function(i,e,t){return i.s==-1?Math.max(Zu(i.l,e,t+1),Zu(i.r,e,t+1)):e[i.s]=t},Mg=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new gn(++e),n=0,s=i[0],r=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==s&&o!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(s),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(s);r=1,s=i[o]}return[t.subarray(0,n),e]},so=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Vc=function(i,e,t){var n=t.length,s=Pg(e+2);i[s]=n&255,i[s+1]=n>>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},wg=function(i,e,t,n,s,r,a,o,c,l,h){Bi(e,h++,t),++s[256];for(var u=ju(s,15),d=u[0],f=u[1],g=ju(r,15),b=g[0],m=g[1],p=Mg(d),y=p[0],x=p[1],v=Mg(b),R=v[0],T=v[1],A=new gn(19),D=0;D<y.length;++D)A[y[D]&31]++;for(var D=0;D<R.length;++D)A[R[D]&31]++;for(var S=ju(A,7),w=S[0],U=S[1],z=19;z>4&&!w[_g[z-1]];--z);var Y=l+5<<3,L=so(s,Ks)+so(r,Wc)+a,N=so(s,d)+so(r,b)+a+14+3*z+so(A,w)+(2*A[16]+3*A[17]+7*A[18]);if(Y<=L&&Y<=N)return Vc(e,h,i.subarray(c,c+l));var H,q,$,X;if(Bi(e,h,1+(N<L)),h+=2,N<L){H=ro(d,f,0),q=d,$=ro(b,m,0),X=b;var Z=ro(w,U,0);Bi(e,h,x-257),Bi(e,h+5,T-1),Bi(e,h+10,z-4),h+=14;for(var D=0;D<z;++D)Bi(e,h+3*D,w[_g[D]]);h+=3*z;for(var K=[y,R],ue=0;ue<2;++ue)for(var V=K[ue],D=0;D<V.length;++D){var j=V[D]&31;Bi(e,h,Z[j]),h+=w[j],j>15&&(Bi(e,h,V[D]>>>5&127),h+=V[D]>>>12)}}else H=aw,q=Ks,$=ow,X=Wc;for(var D=0;D<o;++D)if(n[D]>255){var j=n[D]>>>18&31;io(e,h,H[j+257]),h+=q[j+257],j>7&&(Bi(e,h,n[D]>>>23&31),h+=Qu[j]);var re=n[D]&31;io(e,h,$[re]),h+=X[re],re>3&&(io(e,h,n[D]>>>5&8191),h+=ed[re])}else io(e,h,H[n[D]]),h+=q[n[D]];return io(e,h,H[256]),h+q[256]},cw=new ta([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),td=new bn(0),lw=function(i,e,t,n,s,r){var a=i.length,o=new bn(n+a+5*(1+Math.ceil(a/7e3))+s),c=o.subarray(n,o.length-s),l=0;if(!e||a<8)for(var h=0;h<=a;h+=65535){var u=h+65535;u<a?l=Vc(c,l,i.subarray(h,u)):(c[h]=r,l=Vc(c,l,i.subarray(h,a)))}else{for(var d=cw[e-1],f=d>>>13,g=d&8191,b=(1<<t)-1,m=new gn(32768),p=new gn(b+1),y=Math.ceil(t/3),x=2*y,v=function(ve){return(i[ve]^i[ve+1]<<y^i[ve+2]<<x)&b},R=new ta(25e3),T=new gn(288),A=new gn(32),D=0,S=0,h=0,w=0,U=0,z=0;h<a;++h){var Y=v(h),L=h&32767,N=p[Y];if(m[L]=N,p[Y]=L,U<=h){var H=a-h;if((D>7e3||w>24576)&&H>423){l=wg(i,c,0,R,T,A,S,w,z,h-z,l),w=D=S=0,z=h;for(var q=0;q<286;++q)T[q]=0;for(var q=0;q<30;++q)A[q]=0}var $=2,X=0,Z=g,K=L-N&32767;if(H>2&&Y==v(h-K))for(var ue=Math.min(f,H)-1,V=Math.min(32767,h),j=Math.min(258,H);K<=V&&--Z&&L!=N;){if(i[h+$]==i[h+$-K]){for(var re=0;re<j&&i[h+re]==i[h+re-K];++re);if(re>$){if($=re,X=K,re>ue)break;for(var ye=Math.min(K,re-2),be=0,q=0;q<ye;++q){var te=h-K+q+32768&32767,me=m[te],fe=te-me+32768&32767;fe>be&&(be=fe,N=te)}}}L=N,N=m[L],K+=L-N+32768&32767}if(X){R[w++]=268435456|Yu[$]<<18|Sg[X];var Le=Yu[$]&31,F=Sg[X]&31;S+=Qu[Le]+ed[F],++T[257+Le],++A[F],U=h+$,++D}else R[w++]=i[h],++T[i[h]]}}l=wg(i,c,r,R,T,A,S,w,z,h-z,l),!r&&l&7&&(l=Vc(c,l+1,td))}return Lg(o,0,n+Pg(l)+s)},hw=function(){for(var i=new ta(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;i[e]=t}return i}(),uw=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=hw[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},dw=function(i,e,t,n,s){return lw(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!s)},Ig=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Zt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};Dg=function(i,e,t,n){for(var s in i){var r=i[s],a=e+s;r instanceof bn?t[a]=[r,n]:Array.isArray(r)?t[a]=[r[0],Ig(n,r[1])]:Dg(r,a+"/",t,n)}},Eg=typeof TextEncoder<"u"&&new TextEncoder,pw=typeof TextDecoder<"u"&&new TextDecoder,mw=0;try{pw.decode(td,{stream:!0}),mw=1}catch{}Ju=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Ag=function(i,e,t,n,s,r,a,o){var c=n.length,l=t.extra,h=o&&o.length,u=Ju(l);Zt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r==null&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if(f<0||f>119)throw"date not in range 1980-2099";if(Zt(i,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,r!=null&&(Zt(i,e,t.crc),Zt(i,e+4,r),Zt(i,e+8,t.size)),Zt(i,e+12,c),Zt(i,e+14,u),e+=16,a!=null&&(Zt(i,e,h),Zt(i,e+6,t.attrs),Zt(i,e+10,a),e+=14),i.set(n,e),e+=c,u)for(var g in l){var b=l[g],m=b.length;Zt(i,e,+g),Zt(i,e+2,m),i.set(b,e+4),e+=4+m}return h&&(i.set(o,e),e+=h),e},gw=function(i,e,t,n,s){Zt(i,e,101010256),Zt(i,e+8,t),Zt(i,e+10,t),Zt(i,e+12,n),Zt(i,e+16,s)}});function bw(i,e){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let t=1024/Math.max(i.width,i.height),n=document.createElement("canvas");n.width=i.width*Math.min(1,t),n.height=i.height*Math.min(1,t);let s=n.getContext("2d");return e===!0&&(s.translate(0,n.height),s.scale(1,-1)),s.drawImage(i,0,0,n.width,n.height),n}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}function Bg(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function xw(i){return`def Xform "Root"
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

`}function yw(){return`
		}
	}
}

`}function vw(i){let e=Bg();return e+=i,ao(e)}function _w(i,e,t){let n="Object_"+i.id,s=zg(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function zg(i){let e=i.elements;return`( ${qc(e,0)}, ${qc(e,4)}, ${qc(e,8)}, ${qc(e,12)} )`}function qc(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function Sw(i){return`
def "Geometry"
{
${Mw(i)}
}
`}function Mw(i){let e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${ww(i)}]
		int[] faceVertexIndices = [${Ew(i)}]
		normal3f[] normals = [${Og(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Og(t.position,n)}]
${Tw(t)}
		uniform token subdivisionScheme = "none"
	}
`}function ww(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function Ew(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function Og(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),a=i.getZ(n);t.push(`(${s.toPrecision(ln)}, ${r.toPrecision(ln)}, ${a.toPrecision(ln)})`)}return t.join(", ")}function Aw(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(ln)}, ${1-s.toPrecision(ln)})`)}return e.join(", ")}function Tw(i){let e="";for(let t=0;t<4;t++){let n=t>0?t:"",s=i["uv"+n];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${n} = [${Aw(s)}] (
			interpolation = "vertex"
		)`)}return e}function Rw(i,e,t=!1){let n=[];for(let s in i){let r=i[s];n.push(Cw(r,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function Cw(i,e,t=!1){let n="			",s=[],r=[];function a(o,c,l){let h=o.source.id+"_"+o.flipY;e[h]=o;let u=o.channel>0?"st"+o.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),g=o.offset.clone(),b=o.rotation,m=Math.sin(b),p=Math.cos(b);return g.y=1-g.y-f.y,t?(g.x=g.x/f.x,g.y=g.y/f.y,g.x+=m/f.x,g.y+=p-1):(g.x+=m*f.x,g.y+=(1-p)*f.y),`
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
			float inputs:rotation = ${(b*(180/Math.PI)).toFixed(ln)}
			float2 inputs:scale = ${kg(f)}
			float2 inputs:translation = ${kg(g)}
			float2 outputs:result
		}

		def Shader "Texture_${o.id}_${c}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${c}.outputs:result>
			${l!==void 0?"float4 inputs:scale = "+Pw(l):""}
			token inputs:sourceColorSpace = "${o.colorSpace===nn?"raw":"sRGB"}"
			token inputs:wrapS = "${d[o.wrapS]}"
			token inputs:wrapT = "${d[o.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===Xt&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(s.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),s.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),r.push(a(i.map,"diffuse",i.color))):s.push(`${n}color3f inputs:diffuseColor = ${Fg(i.color)}`),i.emissiveMap!==null?(s.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),r.push(a(i.emissiveMap,"emissive"))):i.emissive.getHex()>0&&s.push(`${n}color3f inputs:emissiveColor = ${Fg(i.emissive)}`),i.normalMap!==null&&(s.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),r.push(a(i.normalMap,"normal"))),i.aoMap!==null&&(s.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),r.push(a(i.aoMap,"occlusion"))),i.roughnessMap!==null&&i.roughness===1?(s.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),r.push(a(i.roughnessMap,"roughness"))):s.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null&&i.metalness===1?(s.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),r.push(a(i.metalnessMap,"metallic"))):s.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),s.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(a(i.alphaMap,"opacity"))):s.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(s.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),s.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),s.push(`${n}float inputs:ior = ${i.ior}`)),`
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
`}function Fg(i){return`(${i.r}, ${i.g}, ${i.b})`}function Pw(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function kg(i){return`(${i.x}, ${i.y})`}function Lw(i){let e=i.name?i.name:"Camera_"+i.id,t=zg(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(ln)}, ${i.far.toPrecision(ln)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(ln)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(ln)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(ln)}, ${i.far.toPrecision(ln)})
			float focalLength = ${i.getFocalLength().toPrecision(ln)}
			float focusDistance = ${i.focus.toPrecision(ln)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(ln)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(ln)}
		}
	
	`}var Xc,ln,Hg=Fe(()=>{cn();Ug();Lu();Xc=class{async parse(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1},t);let n={},s="model.usda";n[s]=null;let r=Bg();r+=xw(t);let a={},o={};e.traverseVisible(l=>{if(l.isMesh){let h=l.geometry,u=l.material;if(u.isMeshStandardMaterial){let d="geometries/Geometry_"+h.id+".usda";if(!(d in n)){let f=Sw(h);n[d]=vw(f)}u.uuid in a||(a[u.uuid]=u),r+=_w(l,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}else l.isCamera&&(r+=Lw(l))}),r+=yw(),r+=Rw(a,o,t.quickLookCompatible),n[s]=ao(r),r=null;for(let l in o){let h=o[l];h.isCompressedTexture===!0&&(h=Qr(h));let u=bw(h.image,h.flipY),d=await new Promise(f=>u.toBlob(f,"image/png",1));n[`textures/Texture_${l}.png`]=new Uint8Array(await d.arrayBuffer())}let c=0;for(let l in n){let h=n[l],u=34+l.length;c+=u;let d=c&63;if(d!==4){let f=64-d,g=new Uint8Array(f);n[l]=[h,{extra:{12345:g}}]}c=h.length}return Ng(n,{level:0})}};ln=7});function Vg(i,e){let t=i.userData;i.userData={};let n=i.clone(!0);i.userData=t,n.scale.set(1,1,1),n.position.set(0,0,0),n.rotation.set(0,0,0);let s=new dt,r=new dt;s.add(n),r.add(s),r.updateMatrixWorld(!0);let a=new wt().setFromObject(r);if(a.isEmpty())return null;let o=a.getSize(new P);e&&s.scale.set(e[0]/100/o.x,e[2]/100/o.y,e[1]/100/o.z),r.updateMatrixWorld(!0),a=new wt().setFromObject(r);let c=a.getCenter(new P);return s.position.set(-c.x,-a.min.y,-c.z),r.traverse(l=>{l.userData={}}),r}function Gg(i,e){let t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=e,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)}async function $c(i,e,t){if(!i){alert("The model is still loading. Please try again in a moment.");return}let n=document.createElement("div");n.className="armodal",n.innerHTML='<div class="arbox" role="dialog" aria-modal="true"><button class="arx" aria-label="Close">\u2715</button><h3></h3><div class="arv"><p class="st-note">Preparing your 3D model\u2026</p></div><p class="st-note" id="arnote"></p><div class="hero-ctl" style="margin-top:1rem"><button class="btn ghost" data-f="glb">Download GLB</button><button class="btn ghost" data-f="usdz">Download USDZ</button></div></div>',n.querySelector("h3").textContent=e,document.body.append(n);let s="",r=()=>{s&&URL.revokeObjectURL(s),n.remove()};n.querySelector(".arx").onclick=r,n.onclick=a=>{a.target===n&&r()};try{let[a,o]=await Promise.all([Iw(i),Dw(i).catch(()=>null)]);await Uw(),s=URL.createObjectURL(a);let c=document.createElement("model-viewer");Object.entries({src:s,alt:e,ar:"","ar-modes":"webxr scene-viewer quick-look","ar-scale":"fixed","camera-controls":"","auto-rotate":"","shadow-intensity":"1"}).forEach(([u,d])=>c.setAttribute(u,d)),c.style.cssText="width:100%;height:100%";let l=document.createElement("button");l.slot="ar-button",l.className="btn",l.textContent="View in your room",l.style.cssText="position:absolute;bottom:1rem;left:50%;transform:translateX(-50%)",c.append(l),n.querySelector(".arv").replaceChildren(c),n.querySelector("#arnote").textContent='On a phone or tablet, tap "View in your room" to place it at real size in your space (needs HTTPS). On a computer you can rotate it here or download the files.',n.querySelector("[data-f=glb]").onclick=()=>Gg(a,t+".glb");let h=n.querySelector("[data-f=usdz]");o?h.onclick=()=>Gg(o,t+".usdz"):h.hidden=!0}catch(a){n.querySelector(".arv").innerHTML="",n.querySelector("#arnote").textContent=a.message||"Could not prepare the 3D model."}}var Iw,Dw,Nw,Uw,nd=Fe(()=>{cn();yg();Hg();Iw=async i=>new Blob([await new ea().parseAsync(i,{binary:!0})],{type:"model/gltf-binary"}),Dw=async i=>new Blob([await new Xc().parse(i)],{type:"model/vnd.usdz+zip"});Uw=()=>Nw??=new Promise((i,e)=>{let t=document.createElement("script");t.type="module",t.src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.4.0/dist/model-viewer.min.js",t.onload=i,t.onerror=()=>e(new Error("Could not load the AR viewer. Check your internet connection.")),document.head.append(t)})});function Wg(i){let e=n=>document.getElementById(n),t=async()=>{let n=await bt.reviews(i).catch(()=>[]),s=n.length?n.reduce((a,o)=>a+o.rating,0)/n.length:0;e("rev-sum").textContent=n.length?`${s.toFixed(1)} / 5 \xB7 ${n.length} review${n.length>1?"s":""}`:"No reviews yet",e("rev-list").replaceChildren(...n.length?n.map(a=>{let o=document.createElement("div");o.className="rv";let c=document.createElement("b"),l=document.createElement("p"),h=document.createElement("small");return c.textContent="\u2605".repeat(a.rating)+"\u2606".repeat(5-a.rating)+"  "+a.title,l.textContent=a.body,h.textContent=`${a.name} \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")}`,o.append(c,l,h),o}):[Object.assign(document.createElement("p"),{textContent:"Be the first to share your experience with this piece.",className:"st-note"})]);let r=Kt();e("rev-form").hidden=!r,e("rev-signin").hidden=!!r};e("rev-form").onsubmit=async n=>{n.preventDefault();try{let s=await bt.addReview({pid:i,rating:+e("rv-r").value,title:e("rv-t").value.trim(),body:e("rv-b").value.trim()});n.target.reset(),e("rv-msg").textContent=s&&s.pending?"Thank you. Your review will appear once it has been approved.":"Thank you for your review."}catch(s){e("rv-msg").textContent=s.message}},ls(t),t()}var qg=Fe(()=>{ui()});var Ow={};var At,na,ft,Xg=Fe(()=>{mn();Qa();Zn();nd();qg();At=i=>document.getElementById(i),na=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ft=ht.find(i=>i.id===new URLSearchParams(location.search).get("id"))||ht[0];if(!ft)location.replace("shop.html");else{let l=function(){let h=ft.dims.map((f,g)=>Math.round(f*s[g]));["w","d","h"].forEach((f,g)=>At("o-"+f).textContent=h[g]+" cm");let u=s[0]*s[1]*s[2],d=Math.round(ft.price*(1+(u-1)*.7)/10)*10;At("p-price").textContent="R "+d.toLocaleString("en-ZA"),At("p-col").textContent=t[0],At("p-fin").textContent=n[0],r={d:h,price:d}};document.title=`${ft.name} | Dekara Designs`,At("p-tag").textContent=ft.cat+" \xB7 "+ft.tag,At("p-name").textContent=ft.name,At("p-desc").textContent=ft.desc,At("p-spec").innerHTML=`<div><span>Construction</span>${na(ft.mat)}</div><div><span>Delivery</span>4\u20136 weeks</div>`;let i=hs(At("p-canvas"),ft.id,{orbit:!0}),e=[Di,...ft.fabrics],t=Di,n=Tn[0],s=[1,1,1],r,a=null,o=()=>i.setFabric(t,a||Xr(ft.id,t[2]));At("p-sw").innerHTML=e.map(([h,u,d,f],g)=>`<button class="${g?"":"on"}${d==="original"?" orig":""}" style="background:${f?`url(${na(f)}) center/cover`:na(u)}" title="${na(h)}" aria-label="${na(h)}" data-k="${na(d)}"></button>`).join("");let c=h=>{let u=e.find(d=>d[2]===h);u&&(t=u,a=null,At("p-sw").querySelectorAll("button").forEach(d=>d.classList.toggle("on",d.dataset.k===h)),o(),l())};At("p-sw").onclick=h=>{let u=h.target.closest("button");u&&c(u.dataset.k)},At("p-fsw").innerHTML=Tn.map(([h,u],d)=>`<button class="${d?"":"on"}" style="background:${u}" title="${h}" aria-label="${h}" data-i="${d}"></button>`).join(""),At("p-fsw").onclick=h=>{let u=h.target.closest("button");u&&(n=Tn[u.dataset.i],At("p-fsw").querySelectorAll("button").forEach(d=>d.classList.toggle("on",d===u)),i.setFrame(n[1]),l())},["w","d","h"].forEach((h,u)=>At("r-"+h).oninput=d=>{s[u]=d.target.value/100,i.setDims(...s),l()}),l(),o(),At("p-add").onclick=()=>Ni({key:`p:${ft.id}:${t[0]}:${n[0]}:${r.d.join("x")}`,name:ft.name,desc:`${t[0]} \xB7 ${n[0]} frame \xB7 ${r.d.join(" \xD7 ")} cm`,price:r.price,swatch:t[1]}),Promise.resolve().then(()=>(Zr(),lg)).then(({cardHtml:h,mount:u})=>{let d=[...ht.filter(f=>f.cat===ft.cat&&f.id!==ft.id),...ht.filter(f=>f.cat!==ft.cat)].slice(0,4);At("related").innerHTML=d.map(f=>h(f)).join(""),At("related").querySelectorAll(".card").forEach(u)}),At("p-gallery").innerHTML=[1,2,3].map(h=>`<div data-slot="gallery:${ft.id}:${h}" data-label="Photo ${h}"></div>`).join(""),applySlots(),At("p-wish").dataset.wish=ft.id,At("p-cmp").dataset.cmp=ft.id,At("p-ar").onclick=()=>{let h=Vg(i.getModel().object,r.d);$c(h,ft.name,"dekara-"+ft.id)},Wg(ft.id),window.__prod={piece:ft,fabrics:ft.fabrics,current:()=>t[2]==="original"?ft.fabrics[0]:t,select:c,mapping:h=>Xr(ft.id,h),preview:(h,u)=>{t=h,a=u,i.setFabric(h,u)}},dispatchEvent(new Event("prod-ready"))}});var Fw={};var Yg,Kg,$g,jg,Zg=Fe(()=>{mn();An();ui();Yg=new URLSearchParams(location.search),Kg=document.getElementById("piece");Kg.innerHTML='<option value="">General enquiry</option>'+ht.map(i=>`<option value="${i.id}">${i.name}</option>`).join("");Kg.value=Yg.get("piece")||"";Promise.resolve().then(()=>(Zn(),Ui)).then(i=>{document.getElementById("msg").value=Yg.get("msg")||(i.list().length?`I'd like a quote for the following items:

${i.summaryText()}`:"")});$g=ei(),jg=document.querySelector(".spec");[["Phone",$g.phone],["Email",$g.email]].forEach(([i,e])=>{if(!e||!jg)return;let t=document.createElement("div"),n=document.createElement("span");n.textContent=i,t.append(n,document.createTextNode(e)),jg.append(t)});document.getElementById("f").addEventListener("submit",async i=>{i.preventDefault();let e=i.target,t=e.querySelector("button[type=submit]"),n=Object.fromEntries(new FormData(e));t.disabled=!0;try{await bt.contact({name:n.name,email:n.email,piece:n.piece||"",message:n.msg||""}),e.style.display="none",document.getElementById("ok").style.display="block"}catch(s){let r=document.getElementById("cerr");r||(r=document.createElement("p"),r.id="cerr",r.className="err",e.after(r)),r.textContent=s.message||"Could not send your message. Please try again.",t.disabled=!1}})});var kw={};function Jg(){let i=hi(),e=Ya();if(!i.length){ds("basket-list").innerHTML='<div class="none"><h3>Your basket is empty</h3><p>Add pieces from the shop, or build one in the Custom Studio.</p><a class="btn" href="shop.html">Browse the shop</a> <a class="btn ghost" href="custom-studio.html">Custom Studio</a></div>',ds("basket-sum").style.display="none";return}ds("basket-sum").style.display="",ds("print-head").innerHTML=`<h2>Dekara Designs \xB7 Quotation</h2><p>Quote Q-${new Date().toISOString().slice(2,10).replace(/-/g,"")} \xB7 ${new Date().toLocaleDateString("en-ZA")} \xB7 valid for 14 days. Prices include 15% VAT. Delivery 4\u20136 weeks; delivery fee confirmed at checkout.</p>`,ds("basket-list").innerHTML=i.map(t=>`<div class="bk-row"><span class="dot" style="background:${ia(t.swatch||"#ddd")}"></span><div class="bk-info"><h3>${ia(t.name)}</h3><p>${ia(t.desc)}</p><button class="lnk" data-rm="${ia(t.key)}">Remove</button></div><div class="qty"><button data-q="${ia(t.key)}" data-d="-1" aria-label="Decrease quantity">\u2212</button><span>${t.qty}</span><button data-q="${ia(t.key)}" data-d="1" aria-label="Increase quantity">+</button></div><b>${Et(t.price*t.qty)}</b></div>`).join(""),ds("basket-sum").innerHTML=`<h3>Summary</h3><div class="st-sum"><div><span>Items (${ja()})</span>${Et(Xs())}</div><div><span>Delivery</span>${Et(e.delivery)} at checkout</div></div><div class="st-total"><span style="color:var(--mut)">Total incl. VAT</span><b>${Et(Xs()+e.delivery)}</b></div>
 <div style="display:grid;gap:.7rem;margin-top:1.4rem"><a class="btn" href="contact.html?from=basket" style="justify-content:center">Request a quote</a>${e.payNow?'<a class="btn ghost" href="checkout.html" style="justify-content:center">Pay now (demo)</a>':""}<button class="btn ghost" id="bk-print" style="justify-content:center">Print quote / save as PDF</button><a class="lnk" href="shop.html">Continue shopping</a><button class="lnk" id="bk-clear">Clear basket</button></div>
 <p class="st-note">Delivery takes 4\u20136 weeks. Prices include 15% VAT. Delivery fee applies within Johannesburg and surrounding areas.</p>`}var ds,ia,Qg=Fe(()=>{Zn();ds=i=>document.getElementById(i),ia=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);ds("basket-list").onclick=i=>{let e=i.target.closest("[data-rm]"),t=i.target.closest("[data-q]");if(e&&gu(e.dataset.rm),t){let n=hi().find(s=>s.key===t.dataset.q);n&&bu(n.key,n.qty+Number(t.dataset.d))}};ds("basket-sum").onclick=i=>{i.target.id==="bk-print"&&print(),i.target.id==="bk-clear"&&confirm("Remove everything from your basket?")&&$s()};Ka(Jg);Jg()});var Hw={};var Lt,oo,sa,id,co,fs,Bw,zw,eb=Fe(()=>{Zn();ui();An();Lt=i=>document.getElementById(i),oo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),sa=Ya(),id=Xs(),co=hi().length?sa.delivery:0,fs=id+co,Bw=()=>hi().map(i=>`<div><span>${i.qty}\xD7 ${oo(i.name)}<br><small>${oo(i.desc)}</small></span>${Et(i.price*i.qty)}</div>`).join(""),zw=`<h3>Order summary</h3><div class="st-sum">${Bw()}<div><span>Delivery</span>${Et(co)}</div></div><div class="st-total"><span style="color:var(--mut)">Total</span><b>${Et(fs)}</b></div><div class="st-meta"><span>Includes 15% VAT</span><b>${Et(mu(fs))}</b></div>`;if(!sa.payNow||!hi().length)Lt("co-wrap").innerHTML=`<div class="none" style="grid-column:1/-1"><h3>${sa.payNow?"Your basket is empty":"Online payment is not available"}</h3><p>${sa.payNow?"Add pieces before checking out.":"Please request a quote and our team will arrange payment with you."}</p><a class="btn" href="${sa.payNow?"shop.html":"basket.html"}">${sa.payNow?"Browse the shop":"Back to basket"}</a></div>`;else{Lt("co-sum").innerHTML=zw;let i=Kt();i&&(Lt("name").value=i.name,Lt("email").value=i.email),Lt("co-pay").textContent="Pay "+Et(fs);let e=r=>{let a=0,o=!1;for(let c=r.length-1;c>=0;c--){let l=+r[c];o&&(l*=2,l>9&&(l-=9)),a+=l,o=!o}return a%10===0};Lt("cc").oninput=r=>r.target.value=r.target.value.replace(/\D/g,"").slice(0,19).replace(/(.{4})/g,"$1 ").trim(),Lt("exp").oninput=r=>{let a=r.target.value.replace(/\D/g,"").slice(0,4);a.length>2&&(a=a.slice(0,2)+"/"+a.slice(2)),r.target.value=a};let t=r=>{Lt("co-err").textContent=r,Lt("co-err").hidden=!1,Lt("co-pay").disabled=!1,Lt("co-pay").textContent="Pay "+Et(fs)},n=!!xt.apiBase;if(n){Lt("cc").closest("fieldset").hidden=!0,Lt("co-pay").textContent="Continue to secure payment ("+Et(fs)+")";let r=document.querySelector(".demo-banner");r&&(r.innerHTML="<b>Secure payment.</b> You will be taken to PayFast to pay. We never see or store your card details.")}async function s(r){r.preventDefault(),Lt("co-err").hidden=!0;let a=Object.fromEntries(new FormData(r.target));for(let o of["name","email","phone","address","suburb","city","postal"])if(!String(a[o]||"").trim())return t("Please complete all fields.");if(!/^\S+@\S+\.\S+$/.test(a.email))return t("Please enter a valid email address.");Lt("co-pay").disabled=!0,Lt("co-pay").textContent="Preparing payment\u2026";try{let o=await bt.createOrder({name:a.name,email:a.email,phone:a.phone,address:`${a.address}, ${a.suburb}, ${a.city}, ${a.postal}`,items:hi(),subtotal:id,delivery:co,total:fs});if(!o||!o.payfast)throw new Error("Payment could not be started. Please try again.");try{sessionStorage.setItem("dekara-last-order",o.ref||"")}catch{}let c=document.createElement("form");c.method="POST",c.action=o.payfast.url,Object.entries(o.payfast.fields).forEach(([l,h])=>{let u=document.createElement("input");u.type="hidden",u.name=l,u.value=h,c.append(u)}),document.body.append(c),c.submit()}catch(o){t(o.message||"Something went wrong.")}}Lt("co-form").onsubmit=r=>{if(n)return s(r);r.preventDefault(),Lt("co-err").hidden=!0;let a=Object.fromEntries(new FormData(r.target)),o=a.cc.replace(/\s/g,"");for(let l of["name","email","phone","address","suburb","city","postal","cardname"])if(!String(a[l]||"").trim())return t("Please complete all fields.");if(!/^\S+@\S+\.\S+$/.test(a.email))return t("Please enter a valid email address.");if(o.length<13||!e(o))return t("That card number does not look valid.");let c=/^(\d\d)\/(\d\d)$/.exec(a.exp||"");if(!c||+c[1]<1||+c[1]>12||new Date(2e3+ +c[2],+c[1],1)<=new Date)return t("Please enter a valid expiry date (MM/YY).");if(!/^\d{3,4}$/.test(a.cvc))return t("Please enter a valid security code.");Lt("co-pay").disabled=!0,Lt("co-pay").textContent="Processing\u2026",setTimeout(async()=>{if(o==="4000000000000002")return t("Your card was declined (demo decline). Try 4242 4242 4242 4242.");let l="CD-"+Date.now().toString(36).toUpperCase().slice(-6),h={ref:l,date:new Date().toISOString(),name:a.name,email:a.email,phone:a.phone,address:`${a.address}, ${a.suburb}, ${a.city}, ${a.postal}`,items:hi(),subtotal:id,delivery:co,total:fs,last4:o.slice(-4)};try{await bt.createOrder(h)}catch{}$s(),Lt("co-wrap").hidden=!0;let u=Lt("co-done");u.hidden=!1,u.innerHTML=`<div class="studio" style="max-width:680px;margin:2rem auto;text-align:center"><span class="eyebrow">Demo order confirmed</span><h2>Thank you, ${oo(a.name.split(" ")[0])}.</h2><p class="lead" style="margin-inline:auto">Reference <b style="color:var(--ink)">${l}</b>. In a live shop a confirmation would be emailed to ${oo(a.email)}. No payment was taken.</p><div class="st-sum" style="text-align:left;margin-top:1.5rem">${h.items.map(d=>`<div><span>${d.qty}\xD7 ${oo(d.name)}</span>${Et(d.price*d.qty)}</div>`).join("")}<div><span>Delivery</span>${Et(co)}</div></div><div class="st-total"><span>Total paid (demo)</span><b>${Et(fs)}</b></div><p class="st-note">Estimated delivery: 4\u20136 weeks. Card ending ${h.last4}.</p><p style="margin-top:1.5rem"><a class="btn" href="shop.html">Continue shopping</a></p></div>`,scrollTo(0,0)},1400)}}});var Vw={};function ib(){fi.forEach(t=>t.v.destroy()),fi=[];let i=Fc().map(t=>ht.find(n=>n.id===t)).filter(Boolean),e=ps("cmp-grid");if(ps("cmp-tools").hidden=!i.length,!i.length){e.innerHTML='<div class="none" style="grid-column:1/-1"><h3>Nothing to compare yet</h3><p>Tap "Compare" on any shop card or product page to choose up to 3 pieces.</p><a class="btn" href="shop.html">Browse the shop</a></div>',ps("cmp-table").innerHTML="";return}e.style.setProperty("--n",i.length),e.innerHTML=i.map(t=>`<div class="cc"><div class="stage"><canvas></canvas></div><h3>${di(t.name)}</h3><p class="st-note" style="margin:0 0 .6rem">${di(t.cat)} \xB7 ${di(t.tag)}</p><div class="price cp" style="font-size:1.6rem"></div>
  <label>Fabric \xB7 <span class="fn">Original</span></label>${nb([Di,...t.fabrics],"fs")}<label>Frame finish \xB7 <span class="fi">${Tn[0][0]}</span></label>${nb(Tn,"ff")}
  ${sd(0,"Width",80,140)}${sd(1,"Depth",80,140)}${sd(2,"Height",80,130)}
  <div class="hero-ctl" style="margin-top:1rem"><button class="btn sm add">Add to basket</button><a class="btn sm ghost" href="product.html?id=${encodeURIComponent(t.id)}">Details</a><button class="lnk rm">Remove</button></div></div>`).join(""),e.querySelectorAll(".cc").forEach((t,n)=>{let s=i[n],r={p:s,el:t,fabric:Di,finish:Tn[0],s:[1,1,1],v:hs(t.querySelector("canvas"),s.id,{orbit:!0})};r.v.setFabric(r.fabric,Xr(s.id,r.fabric[2])),fi.push(r)}),od()}function rd(i){let e=i.s[0]*i.s[1]*i.s[2];return Math.round(i.p.price*(1+(e-1)*.7)/10)*10}function od(){fi.forEach(e=>{let t=ad(e);e.el.querySelector(".cp").textContent=tb(rd(e)),e.el.querySelector(".fn").textContent=e.fabric[0],e.el.querySelector(".fi").textContent=e.finish[0],[0,1,2].forEach(n=>e.el.querySelector(".o-"+n).textContent=t[n]+" cm")});let i=[["Price",e=>tb(rd(e))],["Category",e=>e.p.cat+" \xB7 "+e.p.sub],["Dimensions (W \xD7 D \xD7 H)",e=>ad(e).join(" \xD7 ")+" cm"],["Materials",e=>e.p.mat||"\u2014"],["Fabric",e=>e.fabric[0]],["Frame finish",e=>e.finish[0]],["Delivery",()=>"4\u20136 weeks"]];ps("cmp-table").innerHTML="<table><tr><th></th>"+fi.map(e=>`<th>${di(e.p.name)}</th>`).join("")+"</tr>"+i.map(([e,t])=>`<tr><td>${e}</td>${fi.map(n=>`<td>${di(t(n))}</td>`).join("")}</tr>`).join("")+"</table>"}var ps,di,tb,fi,nb,sd,ad,Gw,sb=Fe(()=>{mn();Qa();Bc();Zn();ps=i=>document.getElementById(i),di=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),tb=i=>"R "+Math.round(i).toLocaleString("en-ZA"),fi=[],nb=(i,e)=>`<div class="sw ${e}">${i.map((t,n)=>`<button class="${n?"":"on"}${t[2]==="original"?" orig":""}" style="background:${t[3]?`url(${di(t[3])}) center/cover`:di(t[1])}" title="${di(t[0])}" aria-label="${di(t[0])}" data-k="${di(t[2]??n)}"></button>`).join("")}</div>`,sd=(i,e,t,n)=>`<div class="rg"><div><span>${e}</span><b class="o-${i}"></b></div><input type="range" data-ax="${i}" min="${t}" max="${n}" value="100"></div>`;ad=i=>i.p.dims.map((e,t)=>Math.round(e*i.s[t]));Gw=(i,e)=>{i.fabric=e,i.v.setFabric(e,Xr(i.p.id,e[2])),i.el.querySelectorAll(".fs button").forEach(t=>t.classList.toggle("on",t.dataset.k===e[2]))};ps("cmp-grid").addEventListener("click",i=>{let e=i.target.closest(".cc");if(!e)return;let t=fi.find(r=>r.el===e),n=i.target.closest("button");if(!n)return;let s=ps("cmp-sync").checked;if(n.closest(".fs")){let r=n.dataset.k;(s?fi:[t]).forEach(a=>{let o=[Di,...a.p.fabrics].find(c=>c[2]===r);o&&Gw(a,o)})}else if(n.closest(".ff")){let r=Tn[n.dataset.k];(s?fi:[t]).forEach(a=>{a.finish=r,a.v.setFrame(r[1]),a.el.querySelectorAll(".ff button").forEach(o=>o.classList.toggle("on",o.dataset.k===n.dataset.k))})}else if(n.classList.contains("rm"))Wm(t.p.id);else if(n.classList.contains("add")){let r=ad(t);Ni({key:`p:${t.p.id}:${t.fabric[0]}:${t.finish[0]}:${r.join("x")}`,name:t.p.name,desc:`${t.fabric[0]} \xB7 ${t.finish[0]} frame \xB7 ${r.join(" \xD7 ")} cm`,price:rd(t),swatch:t.fabric[1]})}od()});ps("cmp-grid").addEventListener("input",i=>{let e=i.target.closest("[data-ax]");if(!e)return;let t=fi.find(n=>n.el===e.closest(".cc"));t.s[+e.dataset.ax]=e.value/100,t.v.setDims(...t.s),od()});ps("cmp-clear").onclick=()=>kc();jr(ib);ib()});var qw={};var ra,aa,Ww,rb,ab=Fe(()=>{ui();Zn();ra=i=>document.getElementById(i),aa=new URLSearchParams(location.search).get("ref")||sessionStorage.getItem("dekara-last-order")||"";ra("oc-p").textContent=aa?`Your order reference is ${aa}. We are confirming your payment now.`:"We could not find an order reference.";Ww=0,rb=async()=>{if(aa){try{let i=await bt.orderStatus(aa);if(i.status==="paid"){$s(),ra("oc-h").textContent="Payment received",ra("oc-p").textContent=`Thank you. Order ${aa} is confirmed and a confirmation email is on its way. Delivery is 4\u20136 weeks.`;return}if(i.status==="cancelled"){ra("oc-h").textContent="Payment cancelled",ra("oc-p").textContent="Your payment was cancelled. Your basket is still saved.";return}}catch{}++Ww<20?setTimeout(rb,3e3):ra("oc-p").textContent=`We have not received confirmation yet for order ${aa}. If you paid, it can take a few minutes; we will email you.`}};rb()});var Xw={};var ob,Zs,xn,cb=Fe(()=>{mn();Gs();Zr();ob=document.getElementById("fab-detail"),Zs=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),xn=kn.find(i=>i.id===new URLSearchParams(location.search).get("id"));if(!xn)ob.innerHTML='<div class="none"><h3>Fabric not found</h3><p>It may have been removed from the library.</p><a class="btn" href="fabrics.html">Back to the Fabric Library</a></div>';else{document.title=`${xn.name} | Dekara Designs`;let i=ht.filter(n=>n.fabrics.some(s=>s[2]===xn.id));ob.innerHTML=`<div class="two" style="align-items:start"><div class="fab-big" id="fb"></div><div><span class="eyebrow">${Zs(xn.type||"Fabric")}</span><h1 style="font-size:clamp(2.2rem,4vw,3.6rem)">${Zs(xn.name)}</h1><p class="lead">${Zs(xn.desc)}</p>
 <div class="spec" style="margin-top:2rem"><div><span>Type</span>${Zs(xn.type||"Fabric")}</div><div><span>Colour</span>${Zs(xn.hex)}</div><div><span>Available on</span>${i.length} piece${i.length===1?"":"s"}</div></div>
 <div class="hero-ctl"><a class="btn" href="shop.html?fabric=${encodeURIComponent(xn.id)}">Shop in ${Zs(xn.name)}</a><a class="btn ghost" href="fabrics.html">All fabrics</a></div></div></div>
 <h2 style="margin-top:4rem">Pieces available in ${Zs(xn.name)}</h2><div class="cards" id="fp"></div>`;let e=document.getElementById("fb");if(xn.image){let n=new Image;n.src=xn.image,n.alt=`${xn.name} swatch`,e.append(n)}else e.append(Hs(xn.hex,900));let t=document.getElementById("fp");t.innerHTML=i.length?i.map(n=>Oi(n)).join(""):'<p class="st-note">Not yet available on any piece.</p>',t.querySelectorAll(".card").forEach(Fi)}});var $w={};async function ld(){let i=Kt();if(eo(ho),!i){document.getElementById("acc-h").textContent="Sign in or register",ho.innerHTML='<div class="two" style="align-items:start"><form id="lf"><h3>Sign in</h3><label>Email<input name="email" type="email" required></label><label>Password<input name="password" type="password" required></label><button class="btn" type="submit">Sign in</button><p class="err" hidden id="le"></p></form><form id="rf"><h3>Create an account</h3><label>Name<input name="name" required></label><label>Email<input name="email" type="email" required></label><label>Password (8+ characters)<input name="password" type="password" minlength="8" required></label><button class="btn ghost" type="submit">Create account</button><p class="err" hidden id="re"></p></form></div><p class="st-note">Demo accounts are stored only in this browser. The account layer is built to be swapped for a real backend.</p>';let a=(o,c)=>async l=>{l.preventDefault();try{await o(Object.fromEntries(new FormData(l.target))),cd&&/^[\w-]+\.html/.test(cd)&&(location.href=cd)}catch(h){let u=document.getElementById(c);u.textContent=h.message,u.hidden=!1}};document.getElementById("lf").onsubmit=a(bt.login,"le"),document.getElementById("rf").onsubmit=a(bt.register,"re");return}document.getElementById("acc-h").textContent="Hello, "+i.name.split(" ")[0];let[e,t,n]=await Promise.all([bt.wishlist(),bt.orders(),bt.designs()]),r=`<div class="chips">${[["saved","Saved ("+e.length+")"],["orders","Orders ("+t.length+")"],["designs","Saved designs ("+n.length+")"]].map(([a,o])=>`<button class="pill${uo===a?" on":""}" data-t="${a}">${o}</button>`).join("")}<button class="pill" data-t="out">Sign out</button></div><div id="pane" style="margin-top:1.5rem">`;if(uo==="saved"){let a=ht.filter(o=>e.includes(o.id));r+=a.length?`<div class="cards">${a.map(o=>Oi(o)).join("")}</div>`:'<p class="st-note">Nothing saved yet. Tap the heart on any piece to save it.</p>'}uo==="orders"&&(r+=t.length?t.map(a=>`<div class="studio"><b>${lo(a.ref)}</b> \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")} \xB7 ${Et(a.total)}<div class="st-sum">${(a.items||[]).map(o=>`<div><span>${o.qty}\xD7 ${lo(o.name)}</span>${Et(o.price*o.qty)}</div>`).join("")}</div></div>`).join(""):'<p class="st-note">No orders yet.</p>'),uo==="designs"&&(r+=n.length?n.map(a=>`<div class="studio"><b>${lo(a.name)}</b> \xB7 ${new Date(a.date).toLocaleDateString("en-ZA")} \xB7 ${Et(a.price||0)}<div class="hero-ctl" style="margin-top:1rem"><a class="btn sm" href="custom-studio.html?design=${lo(a.id)}">Open in studio</a><button class="btn sm ghost" data-del="${lo(a.id)}">Delete</button></div></div>`).join(""):'<p class="st-note">No saved designs yet. Build one in the Custom Studio and choose "Save to my account".</p>'),ho.innerHTML=r+"</div>",ho.querySelectorAll(".card").forEach(Fi)}var ho,lo,cd,uo,lb=Fe(()=>{ui();mn();Zr();Zn();ho=document.getElementById("acc"),lo=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),cd=new URLSearchParams(location.search).get("next"),uo=(location.hash||"#saved").slice(1);ho.onclick=async i=>{let e=i.target.closest("[data-t]"),t=i.target.closest("[data-del]");if(e){if(e.dataset.t==="out"){await bt.logout();return}uo=e.dataset.t,ld()}t&&confirm("Delete this design?")&&await bt.deleteDesign(t.dataset.del)};ls(ld);ld()});var Kw={};var Js,ms,jw,Yw,hb=Fe(()=>{mn();Gs();An();ui();Js=i=>document.getElementById(i),ms=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),jw=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-");Js("dl-models").innerHTML=ht.map(i=>`<div class="dl"><div><b>${ms(i.name)}</b><small>${ms(i.cat)} \xB7 ${i.dims.join(" \xD7 ")} cm</small></div><div><a href="models/${i.id}.glb" download>GLB</a><a href="models/${i.id}.usdz" download>USDZ</a></div></div>`).join("");Js("dl-fabrics").innerHTML=Pt.map(([i,e,t,n])=>`<a class="fab" style="--c:${ms(e)}" href="${ms(n||Hs(e,800).toDataURL("image/png"))}" download="${jw(i)}.${n?"jpg":"png"}"><span>${ms(i)}</span></a>`).join("");Yw=xt.documents||[{name:"Product catalogue (CSV)",file:"downloads/dekara-catalogue.csv",desc:"Names, categories, sizes, materials and prices"},{name:"All 3D models (ZIP)",file:"downloads/dekara-3d-models.zip",desc:"GLB and USDZ for every piece"},{name:"Fabric swatch sheet",file:"swatches/dekara-swatch-sheet.svg",desc:"All fabrics on one sheet"}];Js("dl-docs").innerHTML=Yw.map(i=>`<div class="dl"><div><b>${ms(i.name)}</b><small>${ms(i.desc||"")}</small></div><div><a href="${ms(i.file)}" download>Download</a></div></div>`).join("");Js("tf").onsubmit=async i=>{i.preventDefault();try{await bt.tradeApply(Object.fromEntries(new FormData(i.target))),i.target.hidden=!0,Js("tf-ok").hidden=!1}catch(e){Js("tf-err").textContent=e.message,Js("tf-err").hidden=!1}}});var Qw={};function gs(){let i=ht.filter(Jw);Vt("cats").innerHTML=jc("cat","","All",!De.cat,i.length)+Ms.map(r=>jc("cat",r,r,De.cat===r,i.filter(a=>a.cat===r).length)).join("");let e=[...new Set(ht.filter(r=>r.cat===De.cat).map(r=>r.sub))];Vt("subs").innerHTML=De.cat&&e.length>1?jc("sub","","All "+De.cat,!De.sub)+e.map(r=>jc("sub",r,r,De.sub===r,i.filter(a=>a.cat===De.cat&&a.sub===r).length)).join(""):"";let t=i.filter(r=>(!De.cat||r.cat===De.cat)&&(!De.sub||r.sub===De.sub));ub[De.sort]&&(t=[...t].sort(ub[De.sort])),eo(hd),hd.innerHTML=t.map(r=>Oi(r)).join(""),hd.querySelectorAll(".card").forEach(Fi);let n=Vt("count");n.textContent=`${t.length} ${t.length===1?"piece":"pieces"}${De.cat?" in "+(De.sub||De.cat):""}`+(De.q?` matching \u201C${De.q}\u201D`:""),Vt("none").hidden=t.length>0;let s=new URLSearchParams;De.cat&&s.set("cat",De.cat),De.sub&&s.set("sub",De.sub),De.q&&s.set("q",De.q),De.sort!=="featured"&&s.set("sort",De.sort),De.fabric&&s.set("fabric",De.fabric);try{history.replaceState(null,"",location.pathname+(s.toString()?"?"+s:""))}catch{}}var Vt,hd,oa,De,Zw,Jw,jc,ub,db,fb=Fe(()=>{mn();Zr();Vt=i=>document.getElementById(i),hd=Vt("shop-grid"),oa=new URLSearchParams(location.search),De={cat:Ms.includes(oa.get("cat"))?oa.get("cat"):"",sub:oa.get("sub")||"",q:oa.get("q")||"",sort:oa.get("sort")||"featured",fabric:oa.get("fabric")||""};Vt("q").value=De.q;Vt("sort").value=De.sort;Vt("ffilter").innerHTML='<option value="">All fabrics</option>'+Pt.map(i=>`<option value="${i[2]}">${i[0].replace(/[<&]/g,"")}</option>`).join("");Pt.some(i=>i[2]===De.fabric)||(De.fabric="");Vt("ffilter").value=De.fabric;Zw=i=>[i.name,i.tag,i.cat,i.sub,i.desc,i.mat,i.fabrics.map(e=>e[0]).join(" ")].join(" ").toLowerCase(),Jw=i=>{if(De.fabric&&!i.fabrics.some(t=>t[2]===De.fabric))return!1;let e=Zw(i);return De.q.toLowerCase().split(/\s+/).filter(Boolean).every(t=>e.includes(t))},jc=(i,e,t,n,s)=>`<button class="pill${n?" on":""}" data-${i}="${e}"${s===0?" data-zero":""}>${t}${s!==void 0?` <small>${s}</small>`:""}</button>`,ub={price:(i,e)=>i.price-e.price,"price-desc":(i,e)=>e.price-i.price,name:(i,e)=>i.name.localeCompare(e.name)};Vt("cats").onclick=i=>{let e=i.target.closest("[data-cat]");e&&(De.cat=e.dataset.cat,De.sub="",gs())};Vt("subs").onclick=i=>{let e=i.target.closest("[data-sub]");e&&(De.sub=e.dataset.sub,gs())};Vt("q").oninput=i=>{clearTimeout(db),db=setTimeout(()=>{De.q=i.target.value.trim(),gs()},160)};Vt("q").onkeydown=i=>{i.key==="Escape"&&(i.target.value="",De.q="",gs())};Vt("sort").onchange=i=>{De.sort=i.target.value,gs()};Vt("ffilter").onchange=i=>{De.fabric=i.target.value,gs()};Vt("clear").onclick=()=>{De.cat=De.sub=De.q=De.fabric="",Vt("q").value="",Vt("ffilter").value="",gs()};gs()});var dE={};function go(i,e){let t=Jt[i].custom?tE(i,e):nE(i,e);return Jt[i].custom||(t.userData.ready=qr(t.userData.T,ha,zs)),t}function tE(i,e){let t=Jt[i],n=new dt;return n.userData={type:i,T:[]},n.userData.ready=eE(t.url).then(s=>{if(!s)return;let r=s.clone(!0);r.traverse(d=>{d.isMesh&&(d.castShadow=d.receiveShadow=!0,d.material=Array.isArray(d.material)?d.material.map(f=>f.clone()):d.material.clone())});let a=new dt;a.add(r);let o=new wt().setFromObject(a),c=o.getSize(new P);a.scale.set(t.w/Math.max(c.x,.001),t.h/Math.max(c.y,.001),t.d/Math.max(c.z,.001)),a.updateMatrixWorld(!0),o=new wt().setFromObject(a);let l=o.getCenter(new P);a.position.set(-l.x,-o.min.y,-l.z),n.add(a);let h=[],u=[];a.traverse(d=>{d.isMesh&&[].concat(d.material).forEach(f=>{f.name!=="frame"&&(f.transparent&&f.opacity<1||(u.push(f),f.name==="tint"&&h.push(f)))})}),n.userData.T.push(...h.length?h:u),xb&&qr(n.userData.T,ha,zs)}),n}function nE(i,e){let{w:t,d:n}=Jt[i],s=new dt,r=new on({color:e,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new Se("#fff")}),a=new $t({color:5979942,roughness:.5}),o=(c,l,h,u,d,f=0)=>{let g=new ze(c,l);g.position.set(h,u,d),g.rotation.x=f,g.castShadow=g.receiveShadow=!0,s.add(g)};return[-1,1].forEach(c=>[-1,1].forEach(l=>o(new oi(.03,.022,.12,12),a,c*(t/2-.07),.06,l*(n/2-.07)))),i==="ottoman"?o(ca(t,.4,n,.12),r,0,.32,0):i==="arm"?o(ca(t,.55,n,.08),r,0,.4,0):(o(ca(t,.28,n),r,0,.26,0),o(ca(t-.03,.18,n-.18),r,0,.49,.07),o(ca(t-.03,.5,.2,.09),r,0,.78,-n/2+.12,-.1),i==="corner"&&o(ca(.2,.5,n-.25,.09),r,-t/2+.12,.78,.1)),s.userData={type:i,T:[r]},s}function yb(i){i.setPixelRatio(Math.min(devicePixelRatio,2)),i.toneMapping=za,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=Ba}function Qc(){let i=1e9,e=-1e9,t=1e9,n=-1e9;return et.forEach(s=>{let[r,a]=xs(s),o=s.g.position;i=Math.min(i,o.x-r),e=Math.max(e,o.x+r),t=Math.min(t,o.z-a),n=Math.max(n,o.z+a)}),{sx:e-i,sz:n-t,cx:(i+e)/2,cz:(t+n)/2}}function oE(i,e,t){if(!Tt.snap)return[e,t];let[n,s]=xs(i),r=.18,a=!1,o=!1;for(let c of et){if(c===i)continue;let[l,h]=xs(c),u=c.g.position.x,d=c.g.position.z;if(Math.abs(t-d)<h+s+r)for(let f of[u+l+n-bs(i,c),u-l-n+bs(i,c)])Math.abs(e-f)<r&&(e=f,a=!0);if(Math.abs(e-u)<l+n+r)for(let f of[d+h+s-bs(i,c),d-h-s+bs(i,c)])Math.abs(t-f)<r&&(t=f,o=!0)}for(let c of et){if(c===i)continue;let[l,h]=xs(c),u=c.g.position.x,d=c.g.position.z;if(!o){for(let f of[d,d-h+s,d+h-s])if(Math.abs(t-f)<r){t=f,o=!0;break}}if(!a){for(let f of[u,u-l+n,u+l-n])if(Math.abs(e-f)<r){e=f,a=!0;break}}}return[a?e:Math.round(e*20)/20,o?t:Math.round(t*20)/20]}function cE(i){let e=i.g.position,[t,n]=xs(i),s=[];et.filter(r=>r!==i).reverse().forEach(r=>{let[a,o]=xs(r),c=r.g.position.x,l=r.g.position.z;s.push([c+a+t-bs(i,r),l],[c-a-t+bs(i,r),l],[c,l+o+n-bs(i,r)],[c,l-o-n+bs(i,r)])});for(let r=0;r<30;r++)for(let a=0;a<12;a++)s.push([Math.cos(a/12*6.283)*r*.15,Math.sin(a/12*6.283)*r*.15]);for(let[r,a]of s)if(e.set(r,0,a),xd(i))return!0;return!1}function lE(i,e){if(!Sb(i))return da(et.length>=Tt.maxPieces?`Limit reached: ${Tt.maxPieces} pieces maximum.`:`No more ${Jt[i].n} pieces allowed.`),null;let t={type:i,rot:0,g:go(i,zi)};return et.push(t),cE(t)?(Dn.add(t.g),e||(mo(t),mi()),t):(et.pop(),da("No room left within the size limits."),null)}function Mb(i){i&&(Dn.remove(i.g),et.splice(et.indexOf(i),1),Mn===i&&mo(null),mi())}function mo(i){Mn=i,et.forEach(e=>e.g.userData.T.forEach(t=>t.emissive&&t.emissive.setHex(e===i?2760724:0))),Jc.visible=!!i,Qe("st-rot").disabled=Qe("st-del").disabled=!i}function wb(){if(Mn){if(Mn.rot=(Mn.rot+1)%4,!xd(Mn)){Mn.rot=(Mn.rot+3)%4,da("Not enough room to rotate here.");return}Mn.g.rotation.y=Mn.rot*Math.PI/2,mi()}}function yd(){[...et].forEach(i=>Dn.remove(i.g)),et.length=0,mo(null)}function hE(i){if(!Eb(i)){da("That size is outside the current limits.");return}yd();let e=i*.9+.44,t=-e/2,n=(s,r)=>{let a={type:s,rot:0,g:go(s,zi)};a.g.position.set(r,0,0),et.push(a),Dn.add(a.g)};n("arm",t+.11);for(let s=0;s<i;s++)n("seat",t+.22+.45+s*.9);n("arm",t+.22+i*.9+.11),Qe("st-start").style.display="none",bd(),mi()}async function uE(){let i=new dt,e=new dt,t=[];et.forEach(r=>{let a=go(r.type,zi);a.position.copy(r.g.position),a.rotation.y=r.rot*Math.PI/2,e.add(a),t.push(a)}),await Promise.all(t.map(r=>r.userData.ready)),t.forEach(r=>{r.userData={}});let{cx:n,cz:s}=Qc();return e.position.set(-n,0,-s),i.add(e),i}function mi(){let i={};et.forEach(a=>i[a.type]=(i[a.type]||0)+1);let e=et.reduce((a,o)=>a+Kc(o.type),0);Qe("st-sum").innerHTML=Object.keys(i).map(a=>`<div><span>${i[a]} \xD7 ${Jt[a].n}</span>${ud(i[a]*Kc(a))}</div>`).join("")||'<p style="color:var(--mut);font-size:.9rem;padding:.5rem 0">Nothing placed yet.</p>',Qe("st-total").textContent=ud(e);let{sx:t,sz:n}=et.length?Qc():{sx:0,sz:0},s=et.length?`${Math.round(Math.max(t,n)*100)} \xD7 ${Math.round(Math.min(t,n)*100)} cm`:"\u2014";Qe("st-size").textContent=s,Qe("st-count").textContent=`${et.length} / ${Tt.maxPieces}`,document.querySelectorAll("[data-add]").forEach(a=>{let o=a.dataset.add;a.textContent=`+ ${Jt[o].n} \xB7 ${ud(Kc(o))}`,a.disabled=!Sb(o)});let r=Object.keys(i).map(a=>`${i[a]}\xD7 ${Jt[a].n}`).join(", ");fo=et.length?{txt:r,dims:s,total:e}:null,Qe("st-add").disabled=Qe("st-ar").disabled=Qe("st-save").disabled=!et.length,Pb.update()}var Tt,Qe,ud,Jt,bb,pd,Yc,Kc,xb,dd,eE,zi,ha,fo,ca,vb,_b,po,gd,fa,ys,Dn,ua,bd,pi,Jc,iE,et,Mn,Qs,bs,xs,sE,rE,xd,aE,Sb,pb,da,Eb,Zc,mb,Ab,la,md,Tb,Rb,Cb,Pb,fd,gb,Lb=Fe(()=>{cn();Tu();Ru();Lh();An();mn();Gs();Zn();Dc();nd();ui();Tt=_o(),Qe=i=>document.getElementById(i),ud=i=>"R "+Math.round(i).toLocaleString("en-ZA"),Jt={seat:{n:"Seat",w:.9,d:.95},corner:{n:"Corner",w:.95,d:.95},chaise:{n:"Chaise",w:.9,d:1.75},ottoman:{n:"Ottoman",w:.9,d:.9},arm:{n:"Arm",w:.22,d:.95}},bb=Object.keys(Jt).filter(i=>Tt.enabled[i]),pd=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Yc=[...xt.collections||[],...En()].filter(i=>i.pieces&&i.pieces.length);Yc.forEach(i=>i.pieces.forEach(e=>{Jt[i.id+":"+e.id]={n:e.name,w:(e.w||90)/100,d:(e.d||90)/100,h:(e.h||80)/100,price:Number(e.price)||0,url:tr("piece:"+i.id+":"+e.id)||e.model,custom:!0}}));Kc=i=>Jt[i].custom?Jt[i].price:Tt.prices[i],xb=!1,dd=new Map,eE=i=>(dd.has(i)||dd.set(i,qa(i).then(e=>e.scene).catch(()=>null)),dd.get(i)),zi=Pt[0][1],ha=Pt[0],fo=null,ca=(i,e,t,n=.07)=>new Wr(i,e,t,4,n);vb=()=>{let i=new li(16777215,2.6);return i.position.set(3,7,4),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.radius=4,Object.assign(i.shadow.camera,{left:-7,right:7,top:7,bottom:-7,far:30}),i},_b=()=>{let i=ei(),e=i.backlight===!1?0:(i.backlightStrength??100)/100,t=new li(16774374,3.2*e);return t.position.set(-2,3.5,-5),t},po=Qe("st-canvas"),gd=15328216,fa=new ai({antialias:!0});yb(fa);po.prepend(fa.domElement);ys=fa.domElement;ys.style.cssText="display:block;width:100%;height:100%;touch-action:none";Dn=new Sn;Dn.background=new Se(gd);Dn.fog=new dc(gd,16,44);Dn.environment=new Pi(fa).fromScene(new Ys,.04).texture;Dn.add(vb());Dn.add(_b());(function(){let s=14+Math.PI*5/2+24,r=new Os(140,s,1,100),a=r.attributes.position;for(let c=0;c<a.count;c++){let l=s/2-a.getY(c),h,u;if(l<14)h=0,u=8-l;else if(l<14+Math.PI*5/2){let d=(l-14)/5;h=5*(1-Math.cos(d)),u=-6-5*Math.sin(d)}else h=5+(l-14-Math.PI*5/2),u=-11;a.setXYZ(c,a.getX(c),h,u)}r.computeVertexNormals();let o=new ze(r,new $t({color:gd,roughness:1,side:Xt}));o.receiveShadow=!0,Dn.add(o)})();ua=new yt(36,1,.1,120),bd=()=>{ua.position.set(0,4.2,6.4),pi.target.set(0,.4,0),pi.update()},pi=new Yr(ua,ys);pi.enableDamping=!0;pi.maxPolarAngle=Math.PI*.47;pi.minDistance=2;pi.maxDistance=14;pi.screenSpacePanning=!1;bd();Jc=new Ec(new _t,10254925);Jc.visible=!1;Dn.add(Jc);iE=()=>{let i=po.clientWidth||1,e=po.clientHeight||1;fa.setSize(i,e,!1),ua.aspect=i/e,ua.updateProjectionMatrix()};new ResizeObserver(iE).observe(po);et=[],Mn=null,Qs=null,bs=(i,e)=>Jt[i.type].custom||Jt[e.type].custom?.012:0,xs=i=>{let e=Jt[i.type];return i.rot%2?[e.d/2,e.w/2]:[e.w/2,e.d/2]},sE=(i,e)=>{let[t,n]=xs(i),[s,r]=xs(e),a=i.g.position,o=e.g.position;return Math.abs(a.x-o.x)<t+s-.02&&Math.abs(a.z-o.z)<n+r-.02};rE=()=>{if(!et.length)return!0;let{sx:i,sz:e}=Qc();return Math.max(i,e)*100<=Tt.maxWidth+.5&&Math.min(i,e)*100<=Tt.maxDepth+.5},xd=i=>et.every(e=>e===i||!sE(i,e))&&rE(),aE=i=>et.filter(e=>e.type===i).length,Sb=i=>(Jt[i].custom||Tt.enabled[i])&&et.length<Tt.maxPieces&&!(Tt.max[i]>0&&aE(i)>=Tt.max[i]),da=i=>{let e=Qe("st-msg");e.textContent=i,e.style.opacity=1,clearTimeout(pb),pb=setTimeout(()=>e.style.opacity=0,3200)};Eb=i=>Tt.presets[i]&&Tt.enabled.seat&&Tt.enabled.arm&&i+2<=Tt.maxPieces&&(i*.9+.44)*100<=Math.max(Tt.maxWidth,Tt.maxDepth)&&!(Tt.max.seat>0&&i>Tt.max.seat)&&!(Tt.max.arm>0&&Tt.max.arm<2);Zc=new wc,mb=new Te,Ab=new Pn(new P(0,1,0),0),la=new P,md=new P,Tb=i=>{let e=ys.getBoundingClientRect();mb.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Zc.setFromCamera(mb,ua)};ys.addEventListener("pointerdown",i=>{Tb(i);let e=Zc.intersectObjects(et.map(s=>s.g),!0)[0];if(!e){mo(null);return}let t=e.object;for(;t&&!t.userData.type;)t=t.parent;let n=et.find(s=>s.g===t);n&&(mo(n),Qs=n,pi.enabled=!1,ys.setPointerCapture(i.pointerId),Zc.ray.intersectPlane(Ab,la),md.set(n.g.position.x-la.x,0,n.g.position.z-la.z))},!0);ys.addEventListener("pointermove",i=>{if(!Qs||(Tb(i),!Zc.ray.intersectPlane(Ab,la)))return;let[e,t]=oE(Qs,la.x+md.x,la.z+md.z),n=Qs.g.position,s=n.x,r=n.z,a=(o,c)=>(n.set(o,0,c),xd(Qs)?!0:(n.set(s,0,r),!1));!a(e,t)&&!a(e,r)&&a(s,t)});Rb=()=>{Qs&&(Qs=null,pi.enabled=!0,mi())};ys.addEventListener("pointerup",Rb);ys.addEventListener("pointercancel",Rb);addEventListener("keydown",i=>{/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)||!Qe("st-canvas")||(i.key==="Delete"&&Mb(Mn),(i.key==="r"||i.key==="R")&&wb())});Qe("st-tools").innerHTML='<span id="st-pal" style="display:contents"></span><span class="sep"></span><button class="pill" id="st-rot" disabled>Rotate 90\xB0</button><button class="pill" id="st-del" disabled>Remove</button><button class="pill" id="st-clear">Clear</button><button class="pill" id="st-view">Reset view</button><button class="pill" id="st-again">Change size</button>';Cb=i=>{Qe("st-pal").innerHTML=i.map(e=>`<button class="pill" data-add="${pd(e)}"></button>`).join("")};Cb(bb);{let i=Qe("st-cols");Yc.length?(i.innerHTML='<button class="pill on" data-c="">Classic modules</button>'+Yc.map(e=>`<button class="pill" data-c="${pd(e.id)}">${pd(e.name)}</button>`).join(""),i.onclick=e=>{let t=e.target.closest("[data-c]");if(!t)return;i.querySelectorAll(".pill").forEach(s=>s.classList.toggle("on",s===t));let n=Yc.find(s=>s.id===t.dataset.c);Cb(n?n.pieces.map(s=>n.id+":"+s.id):bb),n&&(Qe("st-start").style.display="none"),mi()}):i.hidden=!0}Qe("st-tools").onclick=i=>{let e=i.target.closest("button");!e||e.disabled||(e.dataset.add?lE(e.dataset.add):e.id==="st-rot"?wb():e.id==="st-del"?Mb(Mn):e.id==="st-clear"?(yd(),mi()):e.id==="st-view"?bd():e.id==="st-again"&&(Qe("st-start").style.display="flex"))};document.querySelectorAll(".st-preset").forEach(i=>{i.hidden=!Tt.presets[i.dataset.n],i.disabled=!Eb(+i.dataset.n),i.onclick=()=>hE(+i.dataset.n)});Qe("st-empty").onclick=i=>{i.preventDefault(),Qe("st-start").style.display="none"};Qe("st-fab").textContent=Pt[0][0];Qe("st-sw").innerHTML=Pt.map(([i,e],t)=>`<button class="${t?"":"on"}" style="background:${e}" title="${i}" aria-label="${i}" data-i="${t}"></button>`).join("");Qe("st-sw").onclick=i=>{let e=i.target.closest("button");e&&(zi=Pt[e.dataset.i][1],Qe("st-sw").querySelectorAll("button").forEach(t=>t.classList.toggle("on",t===e)),Qe("st-fab").textContent=Pt[e.dataset.i][0],xb=!0,ha=Pt[e.dataset.i],et.forEach(t=>qr(t.g.userData.T,ha,zs)),mi())};Qe("st-add").onclick=()=>{fo&&Ni({key:"b:"+Date.now(),name:"Custom modular build",desc:`${fo.txt} \xB7 ${fo.dims} \xB7 ${Qe("st-fab").textContent}`,price:fo.total,swatch:zi})};Qe("st-ar").onclick=async()=>$c(await uE(),"Your custom build","dekara-custom-build");Qe("st-save").onclick=async()=>{try{await bt.saveDesign({name:`Custom build (${et.length} pieces)`,fabric:Math.max(0,Pt.findIndex(i=>i[1]===zi)),fabricId:ha[2],price:et.reduce((i,e)=>i+Kc(e.type),0),items:et.map(i=>({type:i.type,x:i.g.position.x,z:i.g.position.z,rot:i.rot}))}),da("Saved to your account.")}catch(i){da(i.message)}};Pb=(()=>{let i=Qe("st-preview"),e=new ai({canvas:i,antialias:!0,alpha:!0});yb(e);let t=new Sn;t.environment=new Pi(e).fromScene(new Ys,.04).texture,t.add(vb()),t.add(_b());let n=new ze(new kr(5,64),new zr({opacity:.22}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new ze(new Br(2.3,2.33,128),new an({color:10254925,transparent:!0,opacity:.35,side:2}));s.rotation.x=-Math.PI/2,s.position.y=.005,t.add(s);let r=new dt;t.add(r);let a=new yt(32,1,.1,100);a.position.set(5,3,6.5),a.lookAt(0,.7,0);let o=()=>{let l=i.parentElement,h=l.clientWidth||1,u=l.clientHeight||1;e.setSize(h,u,!1),a.aspect=h/u,a.updateProjectionMatrix()};new ResizeObserver(o).observe(i.parentElement);let c=!0;return new IntersectionObserver(l=>c=l[0].isIntersecting).observe(i),{update(){if(r.clear(),Qe("st-pv-empty").style.display=et.length?"none":"grid",!et.length)return;let l=new dt;et.forEach(g=>{let b=go(g.type,zi);b.position.copy(g.g.position),b.rotation.y=g.rot*Math.PI/2,l.add(b)});let{sx:h,sz:u,cx:d,cz:f}=Qc();l.position.set(-d,0,-f),r.add(l),r.scale.setScalar(Math.min(1.8,3.4/Math.max(h,u,.5)))},tick(l){c&&(r.rotation.y+=l*.45,e.render(t,a))}}})();fd=performance.now();(function i(e){requestAnimationFrame(i);let t=Math.min((e-fd)/1e3,.05);fd=e,po.clientWidth&&(pi.update(),Mn&&Jc.setFromObject(Mn.g),fa.render(Dn,ua)),Pb.tick(t)})(fd);mi();gb=new URLSearchParams(location.search).get("design");gb&&bt.designs().then(i=>{let e=i.find(n=>n.id===gb);if(!e)return;let t=Pt.findIndex(n=>n[2]===e.fabricId);t<0&&(t=Math.min(Math.max(0,e.fabric|0),Pt.length-1)),zi=Pt[t][1],ha=Pt[t],Qe("st-fab").textContent=Pt[t][0],Qe("st-sw").querySelectorAll("button").forEach((n,s)=>n.classList.toggle("on",s===t)),yd(),e.items.forEach(n=>{if(!Jt[n.type])return;let s={type:n.type,rot:n.rot||0,g:go(n.type,zi)};s.g.position.set(n.x,0,n.z),s.g.rotation.y=s.rot*Math.PI/2,et.push(s),Dn.add(s.g)}),Qe("st-start").style.display="none",mi()})});var fE={};var el,Ib=Fe(()=>{mn();Gs();el=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);document.getElementById("fabs").innerHTML=kn.map(i=>`<a class="fab" href="fabric.html?id=${encodeURIComponent(i.id)}" style="--c:${el(i.hex)}" aria-label="${el(i.name)}"><img alt="" src="${el(i.image||Hs(i.hex,320).toDataURL("image/jpeg",.85))}"><span>${el(i.name)}</span></a>`).join("")});An();Cd.then(async()=>{let i=e=>document.getElementById(e);await Promise.resolve().then(()=>(eg(),XM)),i("hero-canvas")&&await Promise.resolve().then(()=>(rg(),jM)),document.querySelector("[data-cards]")&&await Promise.resolve().then(()=>(ug(),YM)),i("p-canvas")&&await Promise.resolve().then(()=>(Xg(),Ow)),i("f")&&await Promise.resolve().then(()=>(Zg(),Fw)),i("basket-list")&&await Promise.resolve().then(()=>(Qg(),kw)),i("co-form")&&await Promise.resolve().then(()=>(eb(),Hw)),i("cmp-grid")&&await Promise.resolve().then(()=>(sb(),Vw)),i("oc")&&await Promise.resolve().then(()=>(ab(),qw)),i("fab-detail")&&await Promise.resolve().then(()=>(cb(),Xw)),i("acc")&&await Promise.resolve().then(()=>(lb(),$w)),i("dl-models")&&await Promise.resolve().then(()=>(hb(),Kw)),i("shop-grid")&&await Promise.resolve().then(()=>(fb(),Qw)),i("st-canvas")&&await Promise.resolve().then(()=>(Lb(),dE)),i("fabs")&&await Promise.resolve().then(()=>(Ib(),fE))});})();
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
