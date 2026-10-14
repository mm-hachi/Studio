// Single entry point: builds to js/app.js (a classic script, so it works when index.html is opened by double-click).
import { ready } from './store.js';
ready.then(async()=>{
 const has=id=>document.getElementById(id);
 await import('./main.js');
 if(has('hero-canvas'))await import('./hero.js');
 if(document.querySelector('[data-cards]'))await import('./cards.js');
 if(has('p-canvas'))await import('./product.js');
 if(has('f'))await import('./contact.js');
 if(has('basket-list'))await import('./basketpage.js');
 if(has('co-form'))await import('./checkout.js');
 if(has('cmp-grid'))await import('./comparepage.js');
 if(has('fab-detail'))await import('./fabricpage.js');
 if(has('acc'))await import('./account.js');
 if(has('dl-models'))await import('./trade.js');
 if(has('shop-grid'))await import('./shop.js');
 if(has('st-canvas'))await import('./studio.js');
 if(has('fabs'))await import('./fabrics.js');
});
