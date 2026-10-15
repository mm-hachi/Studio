
/*
 * DEKARA DESIGNS — GitHub data-only publisher
 *
 * Publishes:
 * - Site settings
 * - Fabrics and materials
 * - New and existing products
 * - New and existing studio collections and their pieces
 * - Prices, fabric availability and fabric mapping
 *
 * Does NOT upload or delete model, image, video or other asset files.
 *
 * Requires a fine-grained GitHub token with Contents: Read and write
 * access to the target repository.
 */

import * as Store from './store.js';

const GH_KEY = 'dekara-gh';

export function ghConfig() {
  let c = {};

  try {
    c = JSON.parse(localStorage.getItem(GH_KEY)) || {};
  } catch {}

  if (!c.owner && /\.github\.io$/i.test(location.hostname)) {
    c.owner = location.hostname.split('.')[0];
    c.repo = c.repo || location.pathname.split('/')[1] || '';
  }

  return { branch: 'main', ...c };
}

export function ghSave(key, value) {
  let c = {};

  try {
    c = JSON.parse(localStorage.getItem(GH_KEY)) || {};
  } catch {}

  c[key] = value;
  localStorage.setItem(GH_KEY, JSON.stringify(c));
}

async function call(c, method, path, body) {
  const response = await fetch(
    `https://api.github.com/repos/${c.owner}/${c.repo}${path}`,
    {
      method,
      headers: {
        Authorization: `Bearer ${c.token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      body: body ? JSON.stringify(body) : undefined
    }
  );

  if (!response.ok) {
    let message = '';

    try {
      message = (await response.json()).message || '';
    } catch {}

    throw new Error(
      `GitHub ${response.status}: ${message || response.statusText}`
    );
  }

  return response.json();
}

function need() {
  const c = ghConfig();

  if (!c.owner || !c.repo || !c.token) {
    throw new Error(
      'Enter the GitHub owner, repository and token first.'
    );
  }

  return c;
}

function isObject(value) {
  return value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value);
}

function idOf(item) {
  return item?.id ??
    item?.pid ??
    item?.slug ??
    item?.key ??
    item?.name;
}

function decodeBase64Utf8(value) {
  const binary = atob(String(value).replace(/\s/g, ''));
  const bytes = Uint8Array.from(
    binary,
    character => character.charCodeAt(0)
  );

  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';

  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(
      ...bytes.subarray(i, i + 0x8000)
    );
  }

  return btoa(binary);
}

/*
 * Fields commonly used to hold the actual contents of uploaded files.
 * Ordinary asset paths such as models/chair.glb are NOT removed.
 */
const BINARY_FIELD =
  /^(fileData|imageData|videoData|modelData|mediaData|uploadData|blob|binary|base64|rawBytes|fileBytes|modelBytes|imageBytes|videoBytes)$/i;

function isEmbeddedBinary(value) {
  if (typeof value !== 'string') return false;

  // Data URLs containing image, video, model or other file contents.
  if (/^data:[^;,]+(?:;[^,]*)?,/i.test(value)) {
    return true;
  }

  // Large raw base64 strings are likely uploaded file contents.
  // This does not remove ordinary URL/path strings.
  if (
    value.length > 180000 &&
    /^[A-Za-z0-9+/=\s]+$/.test(value)
  ) {
    return true;
  }

  return false;
}

/*
 * Remove embedded file bytes recursively without removing product
 * metadata, dimensions, descriptions, prices or asset path strings.
 */
function safeData(value, parentKey = '') {
  if (Array.isArray(value)) {
    return value
      .map(item => safeData(item))
      .filter(item => item !== undefined);
  }

  if (!isObject(value)) {
    if (isEmbeddedBinary(value)) return undefined;
    return value;
  }

  const result = {};

  for (const [key, child] of Object.entries(value)) {
    if (BINARY_FIELD.test(key)) continue;

    const cleaned = safeData(child, key);

    if (cleaned !== undefined) {
      result[key] = cleaned;
    }
  }

  return result;
}

/*
 * Recursively merge metadata.
 *
 * Local values update the corresponding repository values.
 * Repository fields that are absent locally remain intact, including
 * existing model/image/video paths and other repository-managed data.
 */
function mergeObjects(existing, incoming) {
  if (!isObject(existing) || !isObject(incoming)) {
    return incoming;
  }

  const result = { ...existing };

  for (const [key, value] of Object.entries(incoming)) {
    if (value === undefined) continue;

    if (isObject(value) && isObject(result[key])) {
      result[key] = mergeObjects(result[key], value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

/*
 * Merge records by ID while including NEW records.
 *
 * This is the key difference from the earlier version, which skipped
 * any product or collection that did not already exist in the repo.
 */
function mergeRecords(existing, incoming) {
  if (!Array.isArray(incoming)) return existing;

  const result = Array.isArray(existing)
    ? existing.map(item => isObject(item) ? { ...item } : item)
    : [];

  const indexes = new Map();

  result.forEach((item, index) => {
    const id = idOf(item);

    if (id !== undefined && id !== null) {
      indexes.set(String(id), index);
    }
  });

  for (let i = 0; i < incoming.length; i++) {
    const original = incoming[i];

    if (!isObject(original)) continue;

    const cleaned = safeData(original);

    if (!isObject(cleaned)) continue;

    const id = idOf(cleaned);
    const key = id === undefined || id === null
      ? null
      : String(id);

    const existingIndex = key === null
      ? undefined
      : indexes.get(key);

    if (existingIndex === undefined) {
      // New product or collection: publish its metadata and structure.
      const newIndex = result.length;
      result.push(cleaned);

      if (key !== null) {
        indexes.set(key, newIndex);
      }
    } else {
      // Existing record: update all metadata, preserving fields omitted
      // from the local record.
      result[existingIndex] = mergeObjects(
        result[existingIndex],
        cleaned
      );
    }
  }

  return result;
}

async function readRepoSite(c, branch) {
  const file = await call(
    c,
    'GET',
    `/contents/data/site.json?ref=${encodeURIComponent(branch)}`
  );

  if (!file.content) {
    throw new Error(
      'GitHub returned data/site.json without file content.'
    );
  }

  return {
    site: JSON.parse(decodeBase64Utf8(file.content)),
    sha: file.sha
  };
}

export async function ghTest() {
  const c = need();
  const repository = await call(c, 'GET', '');

  return repository.permissions?.push
    ? `Connected to ${repository.full_name}. Publishing is available.`
    : `Connected to ${repository.full_name}, but the token cannot write. Grant Contents: Read and write.`;
}

export async function publish(log = () => {}) {
  const c = need();
  const branch = c.branch || 'main';

  log('Reading the current GitHub repository…');

  const reference = await call(
    c,
    'GET',
    `/git/ref/heads/${encodeURIComponent(branch)}`
  );

  const headSha = reference.object.sha;

  const headCommit = await call(
    c,
    'GET',
    `/git/commits/${headSha}`
  );

  const { site: remoteSite } = await readRepoSite(c, branch);
  const localRaw = Store.RAW || {};
  const next = { ...remoteSite };

  /*
   * 1. Site settings.
   */
  const config = safeData({ ...(Store.cfg || {}) }) || {};

  delete config._removed;
  delete config._publishedAt;

  next.config = config;

  /*
   * 2. Fabrics and materials.
   *
   * Fabric metadata is published, but embedded texture image data
   * is stripped. Existing asset paths remain ordinary strings.
   */
  if (Array.isArray(localRaw.fabrics)) {
    next.fabrics = mergeRecords(
      remoteSite.fabrics,
      localRaw.fabrics
    );
  }

  /*
   * 3. Products and collections.
   *
   * Includes new products, new collections and nested component data.
   * Existing repository records are merged rather than discarded.
   */
  for (const field of ['products', 'collections']) {
    if (Array.isArray(localRaw[field])) {
      next[field] = mergeRecords(
        remoteSite[field],
        localRaw[field]
      );
    }
  }

  /*
   * 4. Root-level prices and fabric mapping, for site versions
   * that store these separately from individual products.
   */
  const rootDataFields = [
    'mapping',
    'mappings',
    'fabricMapping',
    'fabricMappings',
    'priceMapping'
  ];

  for (const key of rootDataFields) {
    if (localRaw[key] !== undefined) {
      const cleaned = safeData(localRaw[key]);

      if (cleaned !== undefined) {
        next[key] = cleaned;
      }
    }
  }

  /*
   * Keep the repository's file manifest unchanged.
   * The publisher never uploads or deletes actual asset files.
   */
  if (remoteSite.files !== undefined) {
    next.files = remoteSite.files;
  }

  next.version = Date.now();

  log('Preparing data/site.json without embedded file uploads…');

  const json = JSON.stringify(next, null, 2);

  /*
   * Create a Git blob for the JSON data only.
   */
  const blob = await call(c, 'POST', '/git/blobs', {
    content: encodeBase64Utf8(json),
    encoding: 'base64'
  });

  /*
   * Build a tree containing exactly one changed path.
   * No models, images, videos or other binary files are committed.
   */
  const tree = await call(c, 'POST', '/git/trees', {
    base_tree: headCommit.tree.sha,
    tree: [
      {
        path: 'data/site.json',
        mode: '100644',
        type: 'blob',
        sha: blob.sha
      }
    ]
  });

  log('Creating the data-only GitHub commit…');

  const newCommit = await call(c, 'POST', '/git/commits', {
    message: 'Update site settings, products, collections and fabrics',
    tree: tree.sha,
    parents: [headSha]
  });

  /*
   * Update the branch only after the data commit has been created.
   */
  await call(
    c,
    'PATCH',
    `/git/refs/heads/${encodeURIComponent(branch)}`,
    { sha: newCommit.sha }
  );

  /*
   * Record the successful publish locally.
   */
  if (Store.cfg) {
    Store.cfg._publishedAt = next.version;

    if (typeof Store.save === 'function') {
      Store.save();
    }
  }

  log('GitHub data publishing completed.');

  return (
    'Published site settings, fabrics, prices, mapping, products and ' +
    'collections. Embedded file contents were excluded. Upload any ' +
    'new model, image or video files manually to their referenced ' +
    'repository paths. GitHub Pages usually updates within 1–2 minutes.'
  );
}
