# Add a 3D product viewer to an existing website

This folder is a **standalone integration**. It is not part of the Dekara Designs storefront, does not change the existing 3D viewer, and can be copied or deployed separately.

It contains two parts:

1. A small browser JavaScript API that puts an interactive 3D viewer inside a normal page.
2. An optional, read-only web API that tells the viewer which model file belongs to a product.

Your existing website can stay a regular 2D website. The viewer appears only in the space where you add it.

## Before you begin

You will need:

- A computer with [Node.js](https://nodejs.org/) installed (the current Long Term Support, or LTS, version is recommended).
- A 3D model saved as a `.glb` file. A GLB is a common file type for 3D models on websites.
- A web address where that model can be downloaded. The address must start with `https://` or `http://`.
- Access to the files or hosting settings for the website where the viewer will appear.

The model file is not included in this package. Use a model that you own or have permission to display.

## Try the integration in a sample furniture shop

The `demo/` folder is a separate, original furniture-store example. Its product pages keep prominent product photography, details, and purchase controls. The **Shop in 3D** button opens a separate, styled modal and requests the selected product's model and customizations only when clicked. The example is not a copy of another company's branding or product imagery.

### Start the local demo

1. Open a terminal in `integrations/3d-api`.
2. Install packages and build the browser viewer:

   ```text
   npm install
   npm run build
   ```

3. Generate the small example 3D models:

   ```text
   npm run demo:models
   ```

4. Start the complete demo (shop website **and** local model API) in the same terminal:

   ```text
   npm run demo
   ```

   Leave the terminal open. The shop and its API are both available at `http://localhost:4173`.

5. Open `http://localhost:4173` in a browser. Browse to a product, view its photos, and click **Shop in 3D** to rotate the model, try product-specific customizations, or open AR on a supported device.

The example shop is intentionally a separate site. Its local demo server serves both the shop and read-only API, so this one-command setup does not require two terminals. Product-list pages read the product catalogue. Product detail pages keep their existing example imagery and send `GET /api/v1/models/{id}` only after a visitor clicks **Shop in 3D**. The selected model's finishes come from the API too. The demo's small sample models are generated locally; no third-party model downloads are required.

The example `catalog.json` points to `http://localhost:4173/assets/...` because the sample shop serves the generated model files there. When you deploy or present the shop from a different address, update the sample `modelUrl` values to the public addresses of your own `.glb` files. Set `ALLOWED_ORIGINS` to the exact address of the deployed shop so the API allows that shop to request its catalogue.

For a page-by-page walkthrough of the sample storefront, its files, and the steps to connect a real API and models, see [`demo/README.md`](./demo/README.md).

### Put the demo online

Pushing this folder to GitHub stores the project files; it does not, by itself, run the Node.js API or publish the generated 3D models. `localhost` is only your own computer, so a public demo must be deployed to a host that can run Node.js and serve the model files.

For the simplest deployment, host the demo and API together as one Node.js service:

1. Configure the host to install dependencies, build the viewer, and generate the sample models:

   ```text
   npm install
   npm run build
   npm run demo:models
   ```

2. Set the service's start command to `npm run demo`. The demo server uses the hosting provider's `PORT` setting automatically (or `DEMO_PORT` if you set it explicitly).
3. After deployment, open the public HTTPS address and check that the product page, `/api/v1/models/sample-chair`, `/dekara-3d.js`, and `/assets/sample-chair.glb` all load.
4. Change every `modelUrl` in `catalog.json` from `localhost` to the deployed public HTTPS address (or a public model-storage address). Redeploy after changing the catalogue.

GitHub Pages only serves static files; it cannot run this package's Node.js API. If you use GitHub Pages for the shop, deploy the API and model files separately to services that support them, then change `API_BASE` near the top of `demo/app.js` to the API's public HTTPS address and set each `modelUrl` to its public HTTPS model address. Configure the API's `ALLOWED_ORIGINS` for the exact GitHub Pages site address. For an existing client website, their developers can instead host your built viewer and model files on their infrastructure and connect it to the public API.

## The simplest setup: show one model

Use this option when you have one model and do not need a separate model catalogue. Your website can load the model directly; you do not need to run the REST API.

### 1. Build the viewer file

Open a terminal in this `integrations/3d-api` folder and run:

```text
npm install
npm run build
```

This creates `dist/dekara-3d.js`. Upload that file to your website host, or to a public file host that allows your website to load JavaScript files.

### 2. Add a place for the viewer

Add this where you want the 3D model to appear on your page:

```html
<div id="product-viewer" style="width: 100%; height: 420px;"></div>
```

The height is important: without a height, the viewer has no visible space to fill. You can change `420px` to fit your page design.

### 3. Add the viewer script

Add this near the end of the page, replacing the script address with the place where you uploaded `dekara-3d.js`:

```html
<script src="/assets/dekara-3d.js"></script>
<script>
  Dekara3D.mount({
    container: '#product-viewer',
    modelUrl: 'https://your-website.example/models/chair.glb'
  }).then(function (viewer) {
    window.productViewer = viewer;
  }).catch(function (error) {
    console.error('The 3D viewer could not be started:', error);
  });
</script>
```

Replace `https://your-website.example/models/chair.glb` with the real public address of your GLB file. The address must work in a browser, and the model host must allow your website to download the file (this is called enabling CORS).

## Use a model catalogue (optional REST API)

The REST API is a small directory of models. It lets a page ask for a model by its ID rather than putting a long file address in each page. This package's server is deliberately read-only: it lists the models you put in its catalogue and does not include accounts, payments, or an administration screen.

### 1. Add your model to the catalogue

Open `catalog.json`. Add one entry for each model. For example:

```json
{
  "models": [
    {
      "id": "sample-chair",
      "name": "Sample Chair",
      "modelUrl": "https://your-website.example/models/chair.glb"
    }
  ]
}
```

Use a short ID made of letters, numbers, underscores, or hyphens. Each ID must be unique. `name` is a human-readable label. `modelUrl` is the public web address of the `.glb` model.

### 2. Start the API on your computer

In the `integrations/3d-api` folder, install the packages and start the service:

```text
npm install
npm start
```

The API is now available at `http://localhost:8787`. Keep the terminal window open while you use it. `localhost` means your own computer; it is for trying things out, not for customers on the public internet.

Check that it is running by opening `http://localhost:8787/healthz`. You should see:

```json
{"status":"ok"}
```

To see the catalogue, open `http://localhost:8787/api/v1/models`. To see one model, open `http://localhost:8787/api/v1/models/sample-chair`, replacing `sample-chair` with your model's ID.

### 3. Put the API online

For customers to use the viewer, deploy this folder's Node.js service to a web hosting provider that supports Node.js. Configure the provider to run `npm start`, and set `PORT` if the provider requires a particular port.

For better access control, set `ALLOWED_ORIGINS` to the website address(es) that are allowed to use your API. Separate multiple addresses with commas and do not add spaces inside an address:

```text
ALLOWED_ORIGINS=https://your-website.example,https://www.your-website.example
```

If you do not set `ALLOWED_ORIGINS`, the read-only API accepts browser requests from any website. This setting controls which web pages can read the API; it does not make model files private. Anyone who has a model file's public address can still try to open that file.

Ask your hosting provider or website administrator for help with deployment if you do not normally publish Node.js applications. The server is an example service, not a hosted service supplied by this repository.

### 4. Connect your page to the API

Use the model ID and the public address of the deployed API:

```html
<div id="product-viewer" style="width: 100%; height: 420px;"></div>
<script src="/assets/dekara-3d.js"></script>
<script>
  Dekara3D.mount({
    container: '#product-viewer',
    apiBase: 'https://api.your-website.example',
    modelId: 'sample-chair'
  }).then(function (viewer) {
    window.productViewer = viewer;
  }).catch(function (error) {
    console.error('The 3D viewer could not be started:', error);
  });
</script>
```

`apiBase` is the address of the service, without `/api/v1`. The viewer adds the correct API path itself. The website hosting the model must also allow the API's website to download the `.glb` file.

## Change the viewer after it loads

Save the returned viewer object (the examples save it as `window.productViewer`) to control it later:

```js
productViewer.setColor('#c9a97a');
productViewer.setModel('https://your-website.example/models/another-chair.glb');
```

`setColor` applies a hexadecimal color to the model materials. `setModel` loads a different GLB address. To release the viewer when its page section is removed, call:

```js
productViewer.destroy();
```

To customize a named part (for example, upholstery or a frame), give the corresponding material a clear name in your 3D model, then use:

```js
productViewer.setMaterial('tint', { color: '#c9a97a' }).catch(console.error);
productViewer.setMaterial('frame', {
  textureUrl: 'https://your-website.example/textures/walnut.jpg',
  repeat: 2,
  rotation: 0
}).catch(console.error);
```

The first argument is matched to the material name in the GLB, ignoring upper/lower case. Use `'*'` to apply a change to every material. `color` is optional when a texture is supplied; `textureUrl` is optional when a color is supplied. Material updates return a promise; add `.catch(...)` to show a useful message if an update fails. A texture is loaded from its URL, so its host must allow your website to download it (CORS).

The viewer also offers events for pages that need to respond to loading:

```js
var stopListening = productViewer.on('ready', function (event) {
  console.log('3D model loaded:', event.url);
});

// When you no longer need the listener:
stopListening();
```

Available events are `ready`, `modelchange`, `error`, `arstart`, and `arend`. The first model's successful load is reported by the `mount()` promise; after it resolves, event listeners can respond to later model changes. A failure to load the first model rejects the `mount()` promise; handle it with `.catch(...)` as shown above.

## Show a product in augmented reality

The modal's **View in AR** action starts an immersive WebXR session on an AR-capable device and lets the customer tap a detected floor or surface to place the product. WebXR requires HTTPS (localhost is allowed for development), a compatible browser and device, and camera permission. iPhone and iPad use Quick Look instead: include a compatible public USDZ file as the model's optional `arUrl`. If neither option is available, the viewer explains what is required instead of silently doing nothing.

GLB models are treated as being authored in metres for AR. If a model uses different units, set the optional product `arScale` to convert its coordinates: for example, `0.01` for centimetres. Keep the client's existing product photographs in its current image gallery; the viewer only appears inside the explicitly opened 3D modal.

## Viewer options

Pass any of these in the same options object as `container` and `modelUrl`:

| Option | What it does | Default |
| --- | --- | --- |
| `container` | Page element or CSS selector where the viewer should appear | Required |
| `modelUrl` | Public address of a GLB model; use this or the API options below | — |
| `apiBase` | Base address of the REST API, without `/api/v1` | — |
| `modelId` | ID of the model in the REST API catalogue | — |
| `arScale` | Positive real-world scale multiplier for AR placement | `1` (metres) |
| `color` | Optional initial hexadecimal tint applied to all materials | Keep the model's original colors |
| `label` | Accessible description announced for the viewer | Instructional default |
| `orbit` | Allow visitors to drag the model to rotate it | `true` |
| `autoRotate` | Slowly rotate the model automatically | `false` |
| `pan` | Allow visitors to move the view sideways | `false` |
| `minZoom` | Nearest camera distance | `2` |
| `maxZoom` | Farthest camera distance | `12` |
| `dracoDecoderPath` | Address of the folder containing Draco decoder files, if your GLB uses Draco compression | Not enabled |

The viewer also adjusts to the size of its container automatically. On phones and tablets, make sure the container is tall enough to be easy to use.

## API reference

All API responses are JSON. The service is read-only.

| Request | Result |
| --- | --- |
| `GET /healthz` | Service health, such as `{"status":"ok"}` |
| `GET /api/v1/models` | Catalogue, shaped as `{"models":[...]}` |
| `GET /api/v1/models/{id}` | One model, or HTTP `404` if that ID is not in the catalogue |

A model object can include product details, customization choices, and an optional USDZ address for iPhone/iPad AR:

```json
{
  "id": "sample-chair",
  "name": "Sample Chair",
  "modelUrl": "https://your-website.example/models/chair.glb",
  "customizations": [
    {
      "id": "upholstery",
      "label": "Choose upholstery",
      "target": "tint",
      "options": [
        { "id": "linen", "label": "Natural linen", "color": "#c8b9a3" }
      ]
    }
  ],
  "arUrl": "https://your-website.example/models/chair.usdz",
  "arScale": 1
}
```

Browser access can be restricted with `ALLOWED_ORIGINS`. The API also accepts normal `OPTIONS` preflight requests for browser CORS checks. Requests from an origin not on the allow-list receive HTTP `403`.

## Troubleshooting

- **The viewer area is blank or collapsed:** give the container an explicit height, such as `height: 420px`.
- **The browser console says the model could not be fetched:** check that the GLB address opens publicly, uses HTTPS on an HTTPS site, and that its host allows cross-origin downloads (CORS).
- **The API reports that a model was not found:** confirm the ID in the page exactly matches the ID in `catalog.json`, then restart the API.
- **The API cannot start:** check that Node.js is installed and that another program is not already using port `8787`. You can set a different `PORT` environment variable.
- **A compressed GLB fails to load:** if the model uses Draco compression, host the Draco decoder files and set `dracoDecoderPath` to their public folder address. Meshopt decoding is included automatically.
- **The API returns HTTP `403`:** add the exact website origin (protocol and domain, such as `https://shop.example.com`) to `ALLOWED_ORIGINS`, then restart the service.

## For developers

Run these commands from this folder:

```text
npm install
npm run build
npm test
```

`npm run build` bundles the browser API and Three.js into `dist/dekara-3d.js`. `npm test` checks the REST endpoints and origin allow-list using Node's built-in test runner. The integration has its own package manifest and server; the storefront's package scripts and source files do not need to change.
