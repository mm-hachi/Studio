import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApiHandler } from '../server.js';

const root = fileURLToPath(new URL('.', import.meta.url));
const packageRoot = resolve(root, '..');
const apiPrefix = '/api/v1/';
const publicFiles = new Map([
  ['/', resolve(root, 'index.html')],
  ['/index.html', resolve(root, 'index.html')],
  ['/shop.html', resolve(root, 'shop.html')],
  ['/product.html', resolve(root, 'product.html')],
  ['/styles.css', resolve(root, 'styles.css')],
  ['/app.js', resolve(root, 'app.js')],
  ['/dekara-3d.js', resolve(packageRoot, 'dist', 'dekara-3d.js')]
]);
const mime = {
  '.css': 'text/css; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml'
};

function serveFile(response, file) {
  if (!existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('File not found. Run npm run demo:models if a demo model is missing.');
    return;
  }
  response.writeHead(200, {
    'Content-Type': mime[extname(file)] || 'application/octet-stream',
    ...(extname(file) === '.glb' ? { 'Access-Control-Allow-Origin': '*' } : {}),
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-cache'
  });
  createReadStream(file).pipe(response);
}

export async function createDemoServer(apiOptions = {}) {
  const apiHandler = await createApiHandler(apiOptions);
  return createServer((request, response) => {
    if (request.url.startsWith(apiPrefix)) {
      apiHandler(request, response);
      return;
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      response.end('Only GET and HEAD requests are supported.');
      return;
    }
    const pathname = new URL(request.url, 'http://localhost').pathname;
    let file = publicFiles.get(pathname);
    if (!file && pathname.startsWith('/assets/')) {
      const name = pathname.slice('/assets/'.length);
      if (/^[a-z0-9_-]+\.glb$/i.test(name) || /^catalog\/[a-z0-9_-]+\.svg$/i.test(name)) {
        file = resolve(root, 'assets', name);
      }
    }
    if (!file) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Page not found.');
      return;
    }
    if (request.method === 'HEAD') {
      if (!existsSync(file) || !statSync(file).isFile()) {
        response.writeHead(404);
        response.end();
        return;
      }
      response.writeHead(200, {
        'Content-Type': mime[extname(file)] || 'application/octet-stream',
        ...(extname(file) === '.glb' ? { 'Access-Control-Allow-Origin': '*' } : {})
      });
      response.end();
      return;
    }
    serveFile(response, file);
  });
}

async function start() {
  const port = Number(process.env.DEMO_PORT || process.env.PORT || 4173);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('DEMO_PORT must be an integer between 1 and 65535.');
  }
  const server = await createDemoServer();
  server.listen(port, () => console.log(`Stillroom demo listening on http://localhost:${port}`));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  start().catch(error => {
    console.error('Could not start the shop demo:', error);
    process.exitCode = 1;
  });
}
