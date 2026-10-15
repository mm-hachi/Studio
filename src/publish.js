// Publish admin changes (config + uploaded files) to the GitHub repository in a single commit.
// Needs a fine-grained personal access token with "Contents: Read and write" on this one repository.
import * as Store from './store.js';
const GH_KEY='dekara-gh';
const slug=s=>String(s).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').toLowerCase();
export function ghConfig(){let c={};try{c=JSON.parse(localStorage.getItem(GH_KEY))||{}}catch{}
 if(!c.owner&&/\.github\.io$/.test(location.hostname)){c.owner=location.hostname.split('.')[0];c.repo=c.repo||(location.pathname.split('/')[1]||location.hostname)}
 return {branch:'main',...c}}
export function ghSave(k,v){let c={};try{c=JSON.parse(localStorage.getItem(GH_KEY))||{}}catch{}c[k]=v;localStorage.setItem(GH_KEY,JSON.stringify(c))}
const call=async(c,method,path,body)=>{const r=await fetch(`https://api.github.com/repos/${c.owner}/${c.repo}${path}`,{method,headers:{Authorization:'Bearer '+c.token,Accept:'application/vnd.github+json','Content-Type':'application/json','X-GitHub-Api-Version':'2022-11-28'},body:body?JSON.stringify(body):undefined});
 if(!r.ok){let m='';try{m=(await r.json()).message}catch{}throw new Error(`GitHub ${r.status}: ${m||r.statusText}`)}return r.json()};
const need=()=>{const c=ghConfig();if(!c.owner||!c.repo||!c.token)throw new Error('Enter the owner, repository and token first.');return c};
const b64=blob=>new Promise((res,rej)=>{const f=new FileReader();f.onload=()=>res(String(f.result).split(',')[1]);f.onerror=rej;f.readAsDataURL(blob)});
const EXT={'video/mp4':'mp4','video/webm':'webm','image/png':'png','image/jpeg':'jpg','image/webp':'webp','image/gif':'gif','model/gltf-binary':'glb'};
const ext=(name,type)=>(/\.([a-z0-9]{2,5})$/i.exec(name||'')||[])[1]?.toLowerCase()||EXT[type]||'bin';
const pathFor=(k,name,type)=>{const e=ext(name,type);
 if(k.startsWith('model:'))return `models/uploads/${slug(k.slice(6))}.${e}`;
 if(k.startsWith('piece:')){const [,c,p]=k.split(':');return `models/collections/${slug(c)}/${slug(p)}.${e}`}
 if(k.startsWith('fabric:'))return `swatches/fabrics/${slug(k.slice(7))}.${e}`;
 return `media/${slug(k)}.${e}`};
export async function ghTest(){const c=need(),r=await call(c,'GET','');return r.permissions?.push?`Connected to ${r.full_name}. This token can publish.`:`Connected to ${r.full_name}, but this token cannot write. Give it "Contents: Read and write".`}
export async function publish(log){
 const c=need(),br=c.branch||'main';
 log('Reading the repository…');
 const ref=await call(c,'GET',`/git/ref/heads/${br}`),head=ref.object.sha,commit=await call(c,'GET',`/git/commits/${head}`);
 // Carry forward the existing file registry from the repo, then apply local changes to it.
 // Binary files (models, images, videos) are NOT uploaded here — add them to the repo manually.
 const files={...(Store.DATA.files||{})};
 // Remove entries the admin marked as deleted
 for(const k of (Store.cfg._removed||[])) delete files[k];
 // For any locally-stored media, record the expected repo path in the registry so the
 // site knows where to find the file once you commit it manually — but do not upload it.
 for(const k of Store.localKeys()){
  const m=Store.localMedia(k),blob=await (await fetch(m.url)).blob(),path=pathFor(k,m.name,m.type||blob.type);
  log(`Noting path for ${path} (add this file to the repo manually)…`);
  files[k]={path,type:m.type||blob.type,name:m.name}}
 const clean={...Store.cfg};delete clean._removed;delete clean._publishedAt;
 const version=Date.now(),site={...Store.RAW,config:clean,files,version};
 log('Saving settings (data/site.json)…');
 const sj=await call(c,'POST','/git/blobs',{content:JSON.stringify(site,null,1),encoding:'utf-8'});
 const tree=[{path:'data/site.json',mode:'100644',type:'blob',sha:sj.sha}];
 log('Creating commit…');
 const t=await call(c,'POST','/git/trees',{base_tree:commit.tree.sha,tree}),
  nc=await call(c,'POST','/git/commits',{message:'Update site content via admin panel',tree:t.sha,parents:[head]});
 await call(c,'PATCH',`/git/refs/heads/${br}`,{sha:nc.sha});
 Store.cfg._publishedAt=version;Store.save();
 return 'Published (settings only). Models, images and videos were NOT uploaded — add those files to the repo manually. GitHub Pages usually updates within 1–2 minutes.';
}
