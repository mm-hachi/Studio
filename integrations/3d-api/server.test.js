import assert from 'assert';
import { request as httpRequest } from 'http';
import { createApiServer } from './server.js';

const catalog = {
  models: [{
    id: 'sample-chair',
    name: 'Sample Chair',
    modelUrl: 'https://assets.example.com/chair.glb',
    arUrl: 'https://assets.example.com/chair.usdz',
    arScale: 0.01,
    customizations: [{
      id: 'upholstery',
      label: 'Choose upholstery',
      target: 'tint',
      options: [{ id: 'linen', label: 'Natural linen', color: '#c8b9a3' }]
    }]
  }]
};
function listen(server) {
  return new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
}

function close(server) {
  return new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
}

function get(url, method = 'GET', headers = {}) {
  return new Promise((resolve, reject) => {
    const request = httpRequest(url, { method, headers }, response => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => body += chunk);
      response.on('end', () => resolve({
        status: response.statusCode,
        headers: response.headers,
        json: JSON.parse(body)
      }));
    });
    request.on('error', reject);
    request.end();
  });
}

async function test(name, action) {
  try {
    await action();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    throw error;
  }
}

async function run() {
  const server = await createApiServer({ catalog });
  await listen(server);
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  try {
    await test('lists models without exposing a write endpoint', async () => {
      const response = await get(`${baseUrl}/api/v1/models`);
      assert.equal(response.status, 200);
      assert.deepEqual(response.json, catalog);
    });

    await test('returns an individual model by id', async () => {
      const response = await get(`${baseUrl}/api/v1/models/sample-chair`);
      assert.equal(response.status, 200);
      assert.deepEqual(response.json, catalog.models[0]);
      assert.equal(response.json.customizations[0].options[0].color, '#c8b9a3');
      assert.equal(response.json.arUrl, 'https://assets.example.com/chair.usdz');
    });

    await test('returns a clear not-found response for unknown models', async () => {
      const response = await get(`${baseUrl}/api/v1/models/not-here`);
      assert.equal(response.status, 404);
      assert(/not found/i.test(response.json.message));
    });

    await test('reports health and rejects unsupported methods', async () => {
      assert.equal((await get(`${baseUrl}/healthz`)).status, 200);
      const response = await get(`${baseUrl}/api/v1/models`, 'POST');
      assert.equal(response.status, 405);
      assert.equal(response.headers.allow, 'GET, OPTIONS');
    });

    await test('rejects invalid AR scales and customization options', async () => {
      await assert.rejects(
        createApiServer({ catalog: { models: [{ ...catalog.models[0], arScale: 0 }] } }),
        /arScale must be a positive number/
      );
      await assert.rejects(
        createApiServer({
          catalog: {
            models: [{
              ...catalog.models[0],
              customizations: [{ id: 'fabric', label: 'Fabric', target: 'tint', options: [] }]
            }]
          }
        }),
        /at least one option/
      );
    });

    await test('restricts browser access to approved website origins', async () => {
      const restricted = await createApiServer({
        catalog,
        allowedOrigins: ['https://shop.example.com']
      });
      await listen(restricted);
      try {
        const port = restricted.address().port;
        const denied = await get(`http://127.0.0.1:${port}/api/v1/models`, 'GET', {
          Origin: 'https://other.example.com'
        });
        assert.equal(denied.status, 403);
        const allowed = await get(`http://127.0.0.1:${port}/api/v1/models`, 'GET', {
          Origin: 'https://shop.example.com'
        });
        assert.equal(allowed.status, 200);
        assert.equal(allowed.headers['access-control-allow-origin'], 'https://shop.example.com');
      } finally {
        await close(restricted);
      }
    });
  } finally {
    await close(server);
  }
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
