
 // Publish only site settings, fabrics, prices and fabric mapping to GitHub.
 // Models, images, videos and other uploaded assets are never uploaded or deleted.
 import * as Store from './store.js';

 const GH_KEY = 'dekara-gh';

 export function ghConfig() {
   let c = {};
   try {
     c = JSON.parse(localStorage.getItem(GH_KEY)) || {};
   } catch {}
   if (!c.owner && /\.github\.io$/.test(location.hostname)) {
     c.owner = location.hostname.split('.')[0];
     c.repo = c.repo || (location.pathname.split('/')[1] || location.hostname);
   }
   return { branch: 'main', ...c };
 }

 export function ghSave(k, v) {
   let c = {};
   try {
     c = JSON.parse(localStorage.getItem(GH_KEY)) || {};
   } catch {}
   c[k] = v;
   localStorage.setItem(GH_KEY, JSON.stringify(c));
 }

 const call = async (c, method, path, body) => {
   const r = await fetch(
     `https://api.github.com/repos/${c.owner}/${c.repo}${path}`,
     {
       method,
       headers: {
         Authorization: 'Bearer ' + c.token,
         Accept: 'application/vnd.github+json',
         'Content-Type': 'application/json',
         'X-GitHub-Api-Version': '2022-11-28'
       },
       body: body ? JSON.stringify(body) : undefined
     }
   );

   if (!r.ok) {
     let m = '';
     try {
       m = (await r.json()).message;
     } catch {}
     throw new Error(`GitHub ${r.status}: ${m || r.statusText}`);
   }
   return r.json();
 };

 const need = () => {
   const c = ghConfig();
   if (!c.owner || !c.repo || !c.token) {
     throw new Error('Enter the owner, repository and token first.');
   }
   return c;
 };

 const decodeBase64Utf8 = value => {
   const binary = atob(String(value).replace(/\s/g, ''));
   const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
   return new TextDecoder().decode(bytes);
 };

 const encodeBase64Utf8 = value => {
   const bytes = new TextEncoder().encode(value);
   let binary = '';
   for (let i = 0; i < bytes.length; i += 0x8000) {
     binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
   }
   return btoa(binary);
 };

 const isObject = value =>
   value !== null && typeof value === 'object' && !Array.isArray(value);

 const idOf = item =>
   item?.id ?? item?.pid ?? item?.slug ?? item?.key ?? item?.name;

 const assetKey =
   /^(fileData|imageData|videoData|modelData|mediaData|uploadData|blob|binary|base64|rawBytes)$/i;

 function safeData(value) {
   if (Array.isArray(value)) {
     return value.map(safeData);
   }

   if (!isObject(value)) {
     if (
       typeof value === 'string' &&
       /^data:(image|video|model|application\/octet-stream)\//i.test(value)
     ) {
       return undefined;
     }
     return value;
   }

   const out = {};
   for (const [key, val] of Object.entries(value)) {
     if (assetKey.test(key)) continue;
     const cleaned = safeData(val);
     if (cleaned !== undefined) out[key] = cleaned;
   }
   return out;
 }

 const PRICE_KEYS = new Set([
   'price', 'pricefrom', 'priceFrom', 'salePrice', 'sale_price',
   'compareAtPrice', 'compare_at_price', 'currency'
 ]);

 const MAPPING_KEYS = new Set([
   'fabrics', 'fabricIds', 'availableFabrics', 'availableFabricIds',
   'fabricMapping', 'fabricMappings', 'mapping', 'mappings',
   'lockedMapping', 'lockedMappings', 'fabricScale', 'fabricScales',
   'scaleX', 'scaleY', 'rotation', 'location', 'mappingLocked', 'locked'
 ]);

 function mergeAllowedFields(existing, incoming) {
   if (!isObject(existing) || !isObject(incoming)) return existing;

   const out = { ...existing };

   for (const [key, value] of Object.entries(incoming)) {
     if (PRICE_KEYS.has(key) || MAPPING_KEYS.has(key)) {
       const cleaned = safeData(value);
       if (cleaned !== undefined) out[key] = cleaned;
     }
   }

   return out;
 }

 function mergeExistingRecords(existing, incoming) {
   if (!Array.isArray(incoming)) return existing;

   const old = Array.isArray(existing) ? existing : [];
   const index = new Map(
     old.map((item, i) => [String(idOf(item) ?? i), i])
   );
   const result = old.map(item => ({ ...item }));

   for (let i = 0; i < incoming.length; i++) {
     const item = incoming[i];
     const key = String(idOf(item) ?? i);
     const at = index.get(key);

     // Do not create new product or collection records here.
     if (at === undefined) continue;

     result[at] = mergeAllowedFields(result[at], item);
   }

   return result;
 }

 async function readRepoSite(c, branch) {
   const file = await call(
     c, 'GET',
     `/contents/data/site.json?ref=${encodeURIComponent(branch)}`
   );

   if (!file.content) {
     throw new Error('GitHub returned data/site.json without file content.');
   }

   return {
     site: JSON.parse(decodeBase64Utf8(file.content)),
     sha: file.sha
   };
 }

 export async function ghTest() {
   const c = need();
   const r = await call(c, 'GET', '');

   return r.permissions?.push
     ? `Connected to ${r.full_name}. Data-only publishing is available.`
     : `Connected to ${r.full_name}, but this token cannot write. Give it Contents: Read and write.`;
 }

 export async function publish(log) {
   const c = need();
   const branch = c.branch || 'main';

   log('Reading current GitHub site data…');

   const ref = await call(
     c, 'GET',
     `/git/ref/heads/${encodeURIComponent(branch)}`
   );
   const head = ref.object.sha;

   const commit = await call(c, 'GET', `/git/commits/${head}`);
   const { site: remoteSite } = await readRepoSite(c, branch);
   const localRaw = Store.RAW || {};
   const next = { ...remoteSite };

   // Publish site settings only; preserve repository-managed file paths.
   const config = { ...(Store.cfg || {}) };
   delete config._removed;
   delete config._publishedAt;
   next.config = safeData(config);

   // Publish fabric metadata, excluding embedded binary data.
   if (Array.isArray(localRaw.fabrics)) {
     next.fabrics = safeData(localRaw.fabrics);
   }

   // Update prices and fabric mapping on existing products and collections.
   // Preserve all other product fields, including model and media paths.
   for (const field of ['products', 'collections']) {
     if (Array.isArray(localRaw[field])) {
       next[field] = mergeExistingRecords(
         remoteSite[field],
         localRaw[field]
       );
     }
   }

   // Publish root-level mapping information when present.
   for (const key of [
     'mapping', 'mappings', 'fabricMapping',
     'fabricMappings', 'priceMapping'
   ]) {
     if (localRaw[key] !== undefined) {
       const cleaned = safeData(localRaw[key]);
       if (cleaned !== undefined) next[key] = cleaned;
     }
   }

   // Preserve the repository's file manifest.
   if (remoteSite.files !== undefined) {
     next.files = remoteSite.files;
   }

   next.version = Date.now();

   log('Preparing data/site.json…');

   const blob = await call(c, 'POST', '/git/blobs', {
     content: encodeBase64Utf8(JSON.stringify(next, null, 2)),
     encoding: 'base64'
   });

   // The Git tree changes exactly one path: data/site.json.
   const tree = await call(c, 'POST', '/git/trees', {
     base_tree: commit.tree.sha,
     tree: [{
       path: 'data/site.json',
       mode: '100644',
       type: 'blob',
       sha: blob.sha
     }]
   });

   log('Creating data-only commit…');

   const newCommit = await call(c, 'POST', '/git/commits', {
     message: 'Update site settings, fabrics, prices and mapping',
     tree: tree.sha,
     parents: [head]
   });

   await call(
     c, 'PATCH',
     `/git/refs/heads/${encodeURIComponent(branch)}`,
     { sha: newCommit.sha }
   );

   Store.cfg._publishedAt = next.version;
   Store.save();

   return 'Published site settings, fabrics, prices and mapping. No model, image, video or other asset files were uploaded or deleted. Add corresponding assets to the repository manually.';
 }
