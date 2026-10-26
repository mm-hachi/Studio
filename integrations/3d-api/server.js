import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { createServer } from 'node:http';

const defaultCatalogPath = new URL('./catalog.json', import.meta.url);

function validateCatalog(catalog) {
  if (!catalog || !Array.isArray(catalog.models)) {
    throw new Error('catalog.json must contain a "models" array.');
  }
  const ids = new Set();
  for (const model of catalog.models) {
    if (!model || typeof model.id !== 'string' || !/^[a-z0-9][a-z0-9_-]*$/i.test(model.id)) {
      throw new Error('Every model needs an id containing only letters, numbers, underscores, or hyphens.');
    }
    if (ids.has(model.id)) throw new Error(`Duplicate model id "${model.id}" in catalog.json.`);
    ids.add(model.id);
    if (typeof model.name !== 'string' || !model.name.trim()) {
      throw new Error(`Model "${model.id}" needs a name.`);
    }
    let url;
    try {
      url = new URL(model.modelUrl);
    } catch {
      throw new Error(`Model "${model.id}" needs an absolute HTTP or HTTPS modelUrl.`);
    }
    if (!['http:', 'https:'].includes(url.protocol)) {
      throw new Error(`Model "${model.id}" modelUrl must use HTTP or HTTPS.`);
    }
    if (model.arScale !== undefined &&
        (typeof model.arScale !== 'number' || !Number.isFinite(model.arScale) || model.arScale <= 0)) {
      throw new Error(`Model "${model.id}" arScale must be a positive number.`);
    }
    if (model.arUrl) {
      let arUrl;
      try {
        arUrl = new URL(model.arUrl);
      } catch {
        throw new Error(`Model "${model.id}" arUrl must be an absolute HTTP or HTTPS URL.`);
      }
      if (!['http:', 'https:'].includes(arUrl.protocol)) {
        throw new Error(`Model "${model.id}" arUrl must use HTTP or HTTPS.`);
      }
    }
    if (model.customizations !== undefined && !Array.isArray(model.customizations)) {
      throw new Error(`Model "${model.id}" customizations must be a list.`);
    }
    for (const customization of model.customizations || []) {
      if (!customization || typeof customization.id !== 'string' ||
          typeof customization.label !== 'string' ||
          typeof customization.target !== 'string' ||
          !Array.isArray(customization.options) || customization.options.length === 0) {
        throw new Error(`Model "${model.id}" customizations need an id, label, material target, and at least one option.`);
      }
      for (const option of customization.options) {
        if (!option || typeof option.id !== 'string' || typeof option.label !== 'string' ||
            (typeof option.color !== 'string' && typeof option.textureUrl !== 'string')) {
          throw new Error(`Customization "${customization.id}" on model "${model.id}" has an invalid option.`);
        }
        if (option.color && !/^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(option.color)) {
          throw new Error(`Customization "${customization.id}" on model "${model.id}" has an invalid hex color.`);
        }
        if (option.textureUrl) {
          let textureUrl;
          try {
            textureUrl = new URL(option.textureUrl);
          } catch {
            throw new Error(`Customization "${customization.id}" on model "${model.id}" needs an absolute texture URL.`);
          }
          if (!['http:', 'https:'].includes(textureUrl.protocol)) {
            throw new Error(`Customization "${customization.id}" on model "${model.id}" texture URL must use HTTP or HTTPS.`);
          }
        }
      }
    }
  }
  return catalog.models;
}

export async function createApiHandler({ catalogPath = defaultCatalogPath, catalog, allowedOrigins = ['*'] } = {}) {
  const contents = catalog ?? JSON.parse(await readFile(catalogPath, 'utf8'));
  const models = validateCatalog(contents);
  const byId = new Map(models.map(model => [model.id, model]));
  const origins = new Set(allowedOrigins);

  return (request, response) => {
    const origin = request.headers.origin;
    const allowAnyOrigin = origins.has('*');
    if (origin && !allowAnyOrigin && !origins.has(origin)) {
      response.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ message: 'This website is not allowed to use the 3D API.' }));
      return;
    }

    response.setHeader('Access-Control-Allow-Origin', origin && !allowAnyOrigin ? origin : '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Vary', 'Origin');
    response.setHeader('X-Content-Type-Options', 'nosniff');

    if (request.method === 'OPTIONS') {
      response.writeHead(204);
      response.end();
      return;
    }

    const sendJson = (status, body) => {
      response.writeHead(status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=60'
      });
      response.end(JSON.stringify(body));
    };

    const pathname = new URL(request.url, 'http://localhost').pathname;
    if (request.method !== 'GET') {
      response.setHeader('Allow', 'GET, OPTIONS');
      sendJson(405, { message: 'Only GET requests are supported.' });
      return;
    }
    if (pathname === '/healthz') {
      sendJson(200, { status: 'ok' });
      return;
    }
    if (pathname === '/api/v1/models') {
      sendJson(200, { models });
      return;
    }
    const match = pathname.match(/^\/api\/v1\/models\/([^/]+)$/);
    if (match) {
      let id;
      try {
        id = decodeURIComponent(match[1]);
      } catch {
        sendJson(400, { message: 'Model id is not valid URL encoding.' });
        return;
      }
      const model = byId.get(id);
      sendJson(model ? 200 : 404, model || { message: `Model "${id}" was not found.` });
      return;
    }
    sendJson(404, { message: 'Endpoint not found.' });
  };
}

export async function createApiServer(options = {}) {
  return createServer(await createApiHandler(options));
}

async function start() {
  const port = Number(process.env.PORT || 8787);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535.');
  }
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim()).filter(Boolean)
    : ['*'];
  const server = await createApiServer({ allowedOrigins });
  server.listen(port, () => console.log(`3D API listening on http://localhost:${port}`));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  start().catch(error => {
    console.error('Could not start the 3D API:', error);
    process.exitCode = 1;
  });
}
