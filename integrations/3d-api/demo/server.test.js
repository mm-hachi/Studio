import assert from 'assert';
import { request as httpRequest } from 'http';
import { createDemoServer } from './server.js';

function request(url) {
  return new Promise((resolve, reject) => {
    const req = httpRequest(url, response => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => body += chunk);
      response.on('end', () => resolve({
        status: response.statusCode,
        contentType: response.headers['content-type'],
        body
      }));
    });
    req.on('error', reject);
    req.end();
  });
}

async function run() {
  const server = await createDemoServer({
    catalog: {
      models: [{
        id: 'demo-chair',
        name: 'Demo Chair',
        modelUrl: 'https://assets.example.com/chair.glb',
        customizations: [{
          id: 'fabric',
          label: 'Choose fabric',
          target: 'tint',
          options: [{ id: 'linen', label: 'Natural linen', color: '#c8b9a3' }]
        }]
      }]
    }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  try {
    const home = await request(baseUrl);
    assert.equal(home.status, 200);
    assert(home.body.includes('stillroom'));
    console.log('PASS serves the storefront from the demo server');

    const catalogue = await request(`${baseUrl}/api/v1/models`);
    assert.equal(catalogue.status, 200);
    assert.deepEqual(JSON.parse(catalogue.body).models.map(model => model.id), ['demo-chair']);
    console.log('PASS serves the catalogue API from the same origin as the storefront');

    const product = await request(`${baseUrl}/api/v1/models/demo-chair`);
    assert.equal(product.status, 200);
    const model = JSON.parse(product.body);
    assert.equal(model.name, 'Demo Chair');
    assert.equal(model.customizations[0].options[0].color, '#c8b9a3');
    console.log('PASS serves an individual product API request');

    const image = await request(`${baseUrl}/assets/catalog/arc-chair-room.svg`);
    assert.equal(image.status, 200);
    assert.equal(image.contentType, 'image/svg+xml');
    console.log('PASS serves original product photography on the existing product page');
  } finally {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
