import { FABRIC_LIST } from './products.js';
import { weaveCanvas } from './texture.js';
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.getElementById('fabs').innerHTML=FABRIC_LIST.map(f=>`<a class="fab" href="fabric.html?id=${encodeURIComponent(f.id)}" style="--c:${esc(f.hex)}" aria-label="${esc(f.name)}"><img alt="" src="${esc(f.image||weaveCanvas(f.hex,320).toDataURL('image/jpeg',.85))}"><span>${esc(f.name)}</span></a>`).join('');
