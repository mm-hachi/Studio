# Sample furniture shop: API integration walkthrough

This is a small, original furniture shop built to demonstrate the 3D API in context. It has a home page, a browsable shop, category filters, product detail pages with existing-style product photography, and sample 3D models. Product photographs remain the main focus of a product page; a separate **Shop in 3D** button opens a modal only when a visitor chooses it.

You do not need to modify the existing Dekara storefront to run or change this sample shop.

## Start the complete demo

You need Node.js installed. The demo runs the shop website and model API together, so one terminal is enough.

1. Open a terminal in the `integrations/3d-api` folder and install the packages:

   ```text
   npm install
   ```

2. Build the browser viewer file:

   ```text
   npm run build
   ```

3. Generate the shop's three small example `.glb` models:

   ```text
   npm run demo:models
   ```

   This creates `demo/assets/sample-sofa.glb`, `sample-chair.glb`, and `sample-table.glb`.

4. Start the complete demo:

   ```text
   npm run demo
   ```

   Leave the terminal open. The API and shop are both served at `http://localhost:4173`.

5. Open `http://localhost:4173` in your browser. Open **All furniture** or a category, select a product, change its product photos, and click **Shop in 3D**. The viewer requests that one product from the API when you click the button. Try rotating the model, choosing its available finishes, and clicking **View in AR**.

The example's model addresses point to its local website at `http://localhost:4173/assets/`. This lets the browser load the sample files without downloading models from an unrelated site. The demo website allows only the pages, viewer bundle, and generated `.glb` model files it needs.

## Put the demo online

Pushing the project to GitHub saves the code, but does not start the API or make files addressed as `localhost` public. You can close the local terminal after you finish testing, but visitors will only be able to use the demo after you deploy it.

The easiest setup is one hosting service that runs Node.js and serves both the shop and API:

1. Choose a hosting service that supports a Node.js application (GitHub Pages alone is not enough because it cannot run this API server).
2. Set the app's working directory to `integrations/3d-api`.
3. Set the build commands to:

   ```text
   npm install
   npm run build
   npm run demo:models
   ```

4. Set the start command to `npm run demo`. The server reads the hosting provider's `PORT` setting automatically (or `DEMO_PORT` if you set it explicitly).
5. Update `../catalog.json`: replace each `http://localhost:4173/assets/...` `modelUrl` with the public HTTPS address where that model is served. Make sure the three sample `.glb` files are generated as part of deployment or otherwise uploaded to that public address.
6. Deploy and visit the public HTTPS site. Check that its product page, `/api/v1/models/sample-chair`, `/dekara-3d.js`, and `/assets/sample-chair.glb` each load. The product page, model API and sample models will then work without your computer or local server.

If you host the shop and API separately, change `API_BASE` near the top of `app.js` to the API's public HTTPS address, set each catalogue `modelUrl` to a public HTTPS model address, and configure the API's `ALLOWED_ORIGINS` to the shop's exact public origin. The model host must also allow the shop to download the GLB files (CORS).

## What connects to what

```text
Shop page in your browser
  ├─ keeps the existing product photographs and shop details visible
  └─ only after the visitor clicks "Shop in 3D":
       ├─ requests this product's model and finish options
       │    └─ GET http://localhost:4173/api/v1/models/sample-chair
       ├─ starts the reusable 3D viewer
       │    └─ Dekara3D.mount({ modelUrl })
       └─ offers its available finishes and View in AR
```

The existing 2D product page and its local photos remain in place. Clicking **Shop in 3D** requests only that product's model URL, available customizations and optional AR model from the API. The modal then uses the reusable browser viewer. Closing the modal disposes of the 3D viewer and returns to the unchanged-looking 2D product page.

## Pages and files

| File | Purpose |
| --- | --- |
| `index.html` | Store home page and featured products |
| `shop.html` | Product list, category links, and sorting |
| `product.html` | Product photographs, normal product information, and the **Shop in 3D** modal |
| `app.js` | Keeps the sample product page and photos in place; fetches a product's 3D settings when the modal opens |
| `styles.css` | Responsive styles for the store, image gallery, and 3D modal |
| `server.js` | Serves the sample pages, generated models, and read-only API on port `4173` |
| `create-models.js` | Generates small example GLB furniture models locally |
| `../catalog.json` | Sample API catalogue. It connects each product ID to a public model URL. |

## Connect your own API and products

The sample connects to the API on the same website address at the beginning of `app.js`:

```js
const API_BASE = location.origin;
```

To connect a deployed API, replace that address with your API's public HTTPS address (without `/api/v1`), for example:

```js
const API_BASE = 'https://api.your-company.example';
```

The API returns `id`, `name`, `category`, `price`, `description`, `modelUrl`, and optional product-specific `customizations`, `arUrl`, and `arScale`. The sample's existing page photography comes from `DEMO_PRODUCTS` in `app.js`; it is independent of the 3D API. In a real client's store, their existing product page and product photos continue to come from their existing store or CMS.

For example:

```json
{
  "models": [
    {
      "id": "my-lounge-chair",
      "name": "My Lounge Chair",
      "category": "Chairs",
      "price": 8900,
      "description": "Add a short product description here.",
      "modelUrl": "https://cdn.your-company.example/models/lounge-chair.glb",
      "customizations": [
        {
          "id": "upholstery",
          "label": "Choose upholstery",
          "target": "fabric",
          "options": [
            { "id": "natural-linen", "label": "Natural linen", "color": "#c8b9a3" },
            { "id": "olive", "label": "Moss olive", "color": "#858a70" }
          ]
        }
      ],
      "arUrl": "https://cdn.your-company.example/models/lounge-chair.usdz",
      "arScale": 0.01
    }
  ]
}
```

The ID is used in the product page address (`/product.html?id=my-lounge-chair`) and to request that model from the API. Keep IDs unique and use letters, numbers, hyphens, or underscores. The model URL must be an absolute `https://` or `http://` address. The model host must allow the shop website to download the file (CORS).

The sample shop does not contain a real cart, payment service, stock system, or account. Its **Add to bag** button only displays a demonstration message. For a real shop, connect that button to the existing cart and checkout system rather than replacing those systems with this viewer.

`customizations` is optional API data that describes each finish the 3D modal should offer. Each `target` must exactly match a named material in your GLB file (the viewer matches names without regard to case). Each option can provide a hex `color`, a public `textureUrl`, or both. Keep a model's existing product images outside the 3D API, in the client site's current image gallery.

`arUrl` is optional. Supply a compatible USDZ model to offer iPhone and iPad Quick Look. On supported Android browsers and devices, **View in AR** uses WebXR hit testing to place the GLB on a floor or other detected surface. WebXR requires a secure HTTPS site (or localhost during local testing), a compatible device and browser, and camera permission. `arScale` is an optional multiplier for GLB models that are not authored in metres; for a centimetre-authored model, use `0.01`. The GLB should be authored at real-world size for the most accurate placement.

## Add **Shop in 3D** to an existing product page

To put the same viewer on another existing shop's product page:

1. Build `dekara-3d.js` by running `npm run build` in the parent `integrations/3d-api` folder.
2. Upload `dist/dekara-3d.js` to a place your website can load. This sample server exposes it at `/dekara-3d.js`.
3. Leave the client's current product description, price, photographs, gallery and purchase controls in place. Add a single **Shop in 3D** button and an initially hidden dialog/modal to the existing product template:

   ```html
   <button type="button" id="open-3d" data-product-id="my-lounge-chair">Shop in 3D</button>
   <dialog id="three-d-dialog" aria-labelledby="three-d-title">
     <button type="button" id="close-3d" aria-label="Close">Close</button>
     <h2 id="three-d-title">Shop in 3D</h2>
     <div id="product-viewer" style="width: 100%; height: 420px;"></div>
     <div id="customization-options"></div>
     <button type="button" id="view-in-ar">View in AR</button>
     <p id="ar-status" aria-live="polite"></p>
   </dialog>
   ```

4. On product pages, the existing site knows the product ID from its own product data. Only when the visitor clicks the button, request that ID from your API and mount the viewer inside the dialog:

   ```html
   <script src="/assets/dekara-3d.js"></script>
   <script>
     var viewer;
     var dialog = document.querySelector('#three-d-dialog');
     var apiBase = 'https://api.your-company.example';
     var productId = document.querySelector('#open-3d').dataset.productId;
     document.querySelector('#open-3d').addEventListener('click', async function () {
       dialog.showModal();
       try {
         var response = await fetch(
           apiBase + '/api/v1/models/' + encodeURIComponent(productId)
         );
         if (!response.ok) throw new Error('Could not load this product from the 3D API.');
         var product = await response.json();

         viewer = await Dekara3D.mount({
           container: '#product-viewer',
           modelUrl: product.modelUrl,
           arScale: product.arScale,
           label: 'Interactive 3D view of My Lounge Chair'
         });

         product.customizations.forEach(function (customization) {
           var group = document.createElement('section');
           var heading = document.createElement('h3');
           heading.textContent = customization.label;
           group.append(heading);

           customization.options.forEach(function (option) {
             var choice = document.createElement('button');
             choice.type = 'button';
             choice.textContent = option.label;
             choice.addEventListener('click', function () {
               viewer.setMaterial(customization.target, {
                 color: option.color,
                 textureUrl: option.textureUrl
               }).catch(function (error) {
                 document.querySelector('#ar-status').textContent = error.message;
               });
             });
             group.append(choice);
           });

           document.querySelector('#customization-options').append(group);
         });

         document.querySelector('#view-in-ar').onclick = function () {
           viewer.viewInAR({ arUrl: product.arUrl }).catch(function (error) {
             document.querySelector('#ar-status').textContent = error.message;
           });
         };
       } catch (error) {
         document.querySelector('#customization-options').textContent = error.message;
       }
     });
     document.querySelector('#close-3d').addEventListener('click', function () {
       dialog.close();
     });
     dialog.addEventListener('close', function () {
       if (viewer) viewer.destroy();
       viewer = null;
     });
   </script>
   ```

   Add proper loading and error handling to the client's implementation. Render the API's `customizations` as controls in the dialog, calling `viewer.setMaterial(target, option)` when a customer makes a selection. The full working demo in `app.js` shows how to build these controls. The client's own product page and images stay visible and unchanged until the **Shop in 3D** button is clicked. Use the product's real ID in place of `my-lounge-chair`.

5. Configure the API's `ALLOWED_ORIGINS` to include the exact shop website address, for example `https://shop.your-company.example`. The 3D model host must also permit the shop page to download its models.
6. Open the shop's product page. Confirm the existing images and purchase page appear normally; click **Shop in 3D** and confirm only then that the product is requested from the API. Check that it loads, rotates, customizes, closes cleanly, and—on a compatible secure-context device—launches AR.

If the viewer does not load, inspect the browser's Console and Network tabs for an API, model URL, material-name, HTTPS, or CORS error.

## Before showing it to the company

- Make sure the demo website and its API are running with `npm run demo`.
- Open a sample **product page** and confirm its photographs appear before opening the 3D modal.
- Click **Shop in 3D** and test each upholstery and frame choice.
- Test **View in AR** on a supported AR-capable phone; the desktop browser explains when immersive AR is unavailable.
- If showing it from a different computer, local `localhost` addresses will not work from that computer. Deploy the shop, the API, and your models to reachable HTTPS addresses first; then update `API_BASE`, `ALLOWED_ORIGINS`, and `modelUrl` accordingly.
- Replace sample names, prices, descriptions, and sample assets with material you are allowed to use.
- Describe this as an integration prototype. It is not affiliated with the company whose website or team you are presenting it to.
