import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
const rb=(w,h,d,r=.06)=>new RoundedBoxGeometry(w,h,d,4,r);
const K={sofa:1,chaise:.9,armchair:1.7,bar:2.3,dchair:2.4,dtable:1.1,coffee:1.5,console:1.3,dset:1.2,ottoman:2.1,headboard:1.2,bedside:2.5,dresser:1.3,tv:1.3};
export function buildKind(kind,hex){
 const T=[],g=new THREE.Group(),s=new THREE.Group();
 const fab=()=>{const m=new THREE.MeshPhysicalMaterial({color:hex,roughness:.92,sheen:1,sheenRoughness:.6,sheenColor:new THREE.Color('#fff')});m.name='tint';T.push(m);return m};
 const woodT=()=>{const m=new THREE.MeshStandardMaterial({color:hex,roughness:.5});m.name='tint';T.push(m);return m};
 const wood=new THREE.MeshStandardMaterial({color:0x5b3f26,roughness:.5,name:'frame'}),dark=new THREE.MeshStandardMaterial({color:0x26221f,roughness:.45}),brass=new THREE.MeshStandardMaterial({color:0xb08d57,metalness:1,roughness:.3});
 const add=(geo,mat,x=0,y=0,z=0,rot,par=s)=>{const o=new THREE.Mesh(geo,mat);o.position.set(x,y,z);if(rot)o.rotation.set(...rot);o.castShadow=o.receiveShadow=true;par.add(o);return o};
 const cyl=(r,h)=>new THREE.CylinderGeometry(r,r*.75,h,14);
 const feet=(x,z,h=.2)=>[-1,1].forEach(a=>[-1,1].forEach(b=>add(cyl(.04,h),wood,a*x,h/2,b*z)));
 const legs=(x,z,h,m=wood)=>[-1,1].forEach(a=>[-1,1].forEach(b=>add(cyl(.035,h),m,a*x,h/2,b*z)));
 const chair=(x,z,ry,t)=>{const c=new THREE.Group();c.position.set(x,0,z);c.rotation.y=ry;s.add(c);
  [-1,1].forEach(a=>[-1,1].forEach(b=>add(cyl(.024,.44),wood,a*.21,.22,b*.2,0,c)));add(rb(.5,.08,.48,.03),t,0,.47,0,0,c);add(rb(.5,.52,.06,.03),t,0,.78,-.22,[-.08,0,0],c)};
 if(kind==='sofa'){const t=fab();feet(1.15,.4);add(rb(2.6,.3,1.05,.08),t,0,.38,0);
  for(let i=-1;i<=1;i++){add(rb(.82,.26,.84,.12),t,i*.84,.66,.1);add(rb(.82,.6,.28,.14),t,i*.84,1.05,-.4,[-.14,0,0])}
  [-1,1].forEach(a=>add(rb(.28,.62,1.05,.1),t,a*1.32,.7,0));
 }else if(kind==='chaise'){const t=fab();feet(1.15,.4);add(rb(1.8,.3,1.05,.08),t,-.45,.38,0);add(rb(.9,.3,1.75,.08),t,.9,.38,.35);
  [-.9,0].forEach(x=>add(rb(.84,.26,.84,.12),t,x,.66,.1));add(rb(.86,.26,1.55,.12),t,.9,.66,.42);
  add(rb(2.68,.6,.28,.14),t,0,1.05,-.4,[-.14,0,0]);add(rb(.28,.62,1.05,.1),t,-1.49,.7,0);
 }else if(kind==='armchair'){const t=fab();feet(.45,.4,.22);add(rb(1.1,.3,1,.08),t,0,.4,0);add(rb(.88,.22,.82,.1),t,0,.64,.08);
  add(rb(1,.8,.26,.14),t,0,.98,-.4,[-.16,0,0]);[-1,1].forEach(a=>add(rb(.2,.5,.9,.08),t,a*.55,.66,0));
 }else if(kind==='bar'){const t=fab();legs(.2,.2,.72,dark);add(new THREE.TorusGeometry(.2,.015,8,32),brass,0,.3,0,[Math.PI/2,0,0]);
  add(rb(.5,.1,.5,.04),t,0,.77,0);add(rb(.46,.26,.07,.03),t,0,1.0,-.22,[-.1,0,0]);
 }else if(kind==='dchair'){chair(0,0,0,fab());
 }else if(kind==='dtable'){const t=woodT();add(rb(2,.07,1,.02),t,0,.75,0);legs(.9,.42,.72,t);
 }else if(kind==='coffee'){const t=woodT();add(new THREE.CylinderGeometry(.9,.9,.07,64),t,0,.62,0);add(new THREE.CylinderGeometry(.62,.62,.04,64),t,0,.22,0);
  for(let i=0;i<4;i++){const a=i*Math.PI/2+Math.PI/4;add(cyl(.05,.6),t,Math.cos(a)*.62,.3,Math.sin(a)*.62)}
 }else if(kind==='console'){const t=woodT();add(rb(1.6,.05,.4,.02),t,0,.8,0);add(rb(1.5,.03,.34,.01),t,0,.25,0);legs(.74,.16,.78,t);
 }else if(kind==='dset'){const t=woodT(),f=fab();add(rb(1.6,.07,.9,.02),t,0,.75,0);legs(.7,.38,.72,t);
  [-.4,.4].forEach(x=>{chair(x,-.75,0,f);chair(x,.75,Math.PI,f)});
 }else if(kind==='ottoman'){const t=fab();feet(.45,.45,.14);add(rb(1.2,.5,1.2,.2),t,0,.4,0);
 }else if(kind==='headboard'){const t=fab();add(rb(2,.9,.12,.06),t,0,.85,0);[-1,1].forEach(a=>add(rb(.08,1.3,.08,.02),wood,a*.96,.65,-.06));
  for(let i=-2;i<=2;i++)add(rb(.3,.7,.02,.01),t,i*.36,.85,.07);
 }else if(kind==='bedside'){const t=woodT();legs(.22,.15,.2);add(rb(.55,.45,.4,.03),t,0,.43,0);add(rb(.5,.16,.01,.005),dark,0,.5,.205);add(new THREE.CylinderGeometry(.015,.015,.07,12),brass,0,.5,.24,[Math.PI/2,0,0]);
 }else if(kind==='dresser'){const t=woodT();legs(.7,.2,.15);add(rb(1.6,.8,.5,.03),t,0,.55,0);
  [.3,.55,.8].forEach(y=>{add(rb(1.5,.2,.01,.005),dark,0,y-.05,.255);add(new THREE.CylinderGeometry(.015,.015,.06,12),brass,0,y-.05,.29,[Math.PI/2,0,0])});
 }else if(kind==='tv'){const t=woodT();legs(.82,.15,.14);add(rb(1.8,.45,.42,.03),t,0,.37,0);[-.45,.45].forEach(x=>add(rb(.8,.3,.02,.005),dark,x,.37,.21));add(rb(1.3,.75,.04,.01),dark,0,1.0,0);add(rb(.3,.04,.2,.01),dark,0,.62,0);}else{const t=fab();add(rb(1.2,.7,.8,.1),t,0,.35,0);}
 s.scale.setScalar(K[kind]||1.2);g.add(s);g.userData={tints:T,glows:[],frames:[wood]};return g;
}
