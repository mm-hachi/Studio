// Regenerates the placeholder 3D models (GLB/USDZ), swatches, catalogue CSV and data/site.json from src/catalog.js.
// Run: npm run assets   (overwrites files in models/, swatches/, downloads/dekara-catalogue.csv and data/site.json)
import fs from 'fs';
globalThis.FileReader=class{readAsArrayBuffer(b){b.arrayBuffer().then(r=>{this.result=r;this.onloadend&&this.onloadend()})}readAsDataURL(b){b.arrayBuffer().then(r=>{this.result='data:'+(b.type||'application/octet-stream')+';base64,'+Buffer.from(r).toString('base64');this.onloadend&&this.onloadend()})}};
const { BASE, FABRICS } = await import('../src/catalog.js');
const { buildKind } = await import('../src/builders.js');
const { fit, toGLB, toUSDZ } = await import('../src/ar.js');
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-');
const models={};let usdzOk=0;
for(const p of BASE){
 const o=fit(buildKind(p.kind,'#d4cabb'),p.dims);
 fs.writeFileSync(`../models/${p.id}.glb`,Buffer.from(await (await toGLB(o)).arrayBuffer()));models[p.id]=`models/${p.id}.glb`;
 try{fs.writeFileSync(`../models/${p.id}.usdz`,Buffer.from(await (await toUSDZ(o)).arrayBuffer()));usdzOk++}catch(e){console.log('usdz fail',p.id,e.message)}
}
console.log('glb',BASE.length,'usdz',usdzOk);
const csv=['id,name,category,subcategory,price_zar,width_cm,depth_cm,height_cm,materials,model_glb,model_usdz',...BASE.map(p=>[p.id,p.name,p.cat,p.sub,p.price,...p.dims,p.mat,`models/${p.id}.glb`,`models/${p.id}.usdz`].map(v=>`"${String(v).replace(/"/g,'""')}"`).join(','))].join('\n');
fs.writeFileSync('../downloads/dekara-catalogue.csv',csv);
const sw=(n,h,x=0,y=0,s=600)=>`<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${h}"/><text x="${x+24}" y="${y+s-28}" font-family="Georgia,serif" font-size="${s/12}" fill="${/^#[0-4]/.test(h)?'#fff':'#222'}">${n}</text>`;
FABRICS.forEach(([n,h])=>fs.writeFileSync(`../swatches/${slug(n)}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">${sw(n,h)}</svg>`));
fs.writeFileSync('../swatches/dekara-swatch-sheet.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 640"><rect width="1200" height="640" fill="#f7f3ed"/>${FABRICS.map(([n,h],i)=>sw(n,h,20+(i%4)*295,20+Math.floor(i/4)*300,275)).join('')}</svg>`);
fs.writeFileSync('../data/site.json',JSON.stringify({models,documents:[{name:'Product catalogue (CSV)',file:'downloads/dekara-catalogue.csv',desc:'Names, categories, sizes, materials and prices'},{name:'All 3D models (ZIP)',file:'downloads/dekara-3d-models.zip',desc:'GLB and USDZ for every piece'},{name:'Fabric swatch sheet',file:'swatches/dekara-swatch-sheet.svg',desc:'All fabrics on one sheet'}]},null,1));
