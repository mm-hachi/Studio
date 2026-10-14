import { API, session, onChange } from './api.js';
export function initReviews(pid){
 const $=id=>document.getElementById(id);
 const render=async()=>{const rs=await API.reviews(pid).catch(()=>[]),avg=rs.length?rs.reduce((a,r)=>a+r.rating,0)/rs.length:0;
  $('rev-sum').textContent=rs.length?`${avg.toFixed(1)} / 5 · ${rs.length} review${rs.length>1?'s':''}`:'No reviews yet';
  $('rev-list').replaceChildren(...(rs.length?rs.map(r=>{const d=document.createElement('div');d.className='rv';const h=document.createElement('b'),p=document.createElement('p'),s=document.createElement('small');
   h.textContent='★'.repeat(r.rating)+'☆'.repeat(5-r.rating)+'  '+r.title;p.textContent=r.body;s.textContent=`${r.name} · ${new Date(r.date).toLocaleDateString('en-ZA')}`;d.append(h,p,s);return d}):[Object.assign(document.createElement('p'),{textContent:'Be the first to share your experience with this piece.',className:'st-note'})]));
  const s=session();$('rev-form').hidden=!s;$('rev-signin').hidden=!!s};
 $('rev-form').onsubmit=async e=>{e.preventDefault();try{const r=await API.addReview({pid,rating:+$('rv-r').value,title:$('rv-t').value.trim(),body:$('rv-b').value.trim()});e.target.reset();$('rv-msg').textContent=r&&r.pending?'Thank you. Your review will appear once it has been approved.':'Thank you for your review.'}catch(x){$('rv-msg').textContent=x.message}};
 onChange(render);render();
}
