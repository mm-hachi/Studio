import { PRODUCTS, FEAT } from './products.js';
import { cardHtml, mount } from './cardviews.js';
const box=document.querySelector('[data-cards]'),list=box.dataset.limit?FEAT:PRODUCTS;
box.innerHTML=list.length?list.map(p=>cardHtml(p,true)).join(''):'<p class="st-note">No pieces to show yet.</p>';
box.querySelectorAll('.card').forEach(mount);window.watchReveals&&watchReveals();
