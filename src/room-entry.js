import * as Store from './store.js';

const update=()=>document.querySelectorAll('[data-room-builder-entry]').forEach(link=>{
 link.hidden=Store.siteCfg().roomBuilderEnabled===false;
});
update();
window.addEventListener('siteconfigchange',update);
