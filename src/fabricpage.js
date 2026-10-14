import { PRODUCTS, FABRIC_LIST } from './products.js';
import { weaveCanvas } from './texture.js';
import { cardHtml, mount } from './cardviews.js';
const root=document.getElementById('fab-detail'),esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const f=FABRIC_LIST.find(x=>x.id===new URLSearchParams(location.search).get('id'));
if(!f)root.innerHTML='<div class="none"><h3>Fabric not found</h3><p>It may have been removed from the library.</p><a class="btn" href="fabrics.html">Back to the Fabric Library</a></div>';
else{document.title=`${f.name} | Dekara Designs`;
 const pieces=PRODUCTS.filter(p=>p.fabrics.some(z=>z[2]===f.id));
 root.innerHTML=`<div class="two" style="align-items:start"><div class="fab-big" id="fb"></div><div><span class="eyebrow">${esc(f.type||'Fabric')}</span><h1 style="font-size:clamp(2.2rem,4vw,3.6rem)">${esc(f.name)}</h1><p class="lead">${esc(f.desc)}</p>
 <div class="spec" style="margin-top:2rem"><div><span>Type</span>${esc(f.type||'Fabric')}</div><div><span>Colour</span>${esc(f.hex)}</div><div><span>Available on</span>${pieces.length} piece${pieces.length===1?'':'s'}</div></div>
 <div class="hero-ctl"><a class="btn" href="shop.html?fabric=${encodeURIComponent(f.id)}">Shop in ${esc(f.name)}</a><a class="btn ghost" href="fabrics.html">All fabrics</a></div></div></div>
 <h2 style="margin-top:4rem">Pieces available in ${esc(f.name)}</h2><div class="cards" id="fp"></div>`;
 const big=document.getElementById('fb');if(f.image){const i=new Image();i.src=f.image;i.alt=`${f.name} swatch`;big.append(i)}else big.append(weaveCanvas(f.hex,900));
 const g=document.getElementById('fp');g.innerHTML=pieces.length?pieces.map(p=>cardHtml(p)).join(''):'<p class="st-note">Not yet available on any piece.</p>';g.querySelectorAll('.card').forEach(mount)}
