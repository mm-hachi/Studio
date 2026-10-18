DEKARA DESIGNS
Site operation, administration and development guide

WHAT THIS SITE IS
-----------------
This is a static furniture showcase and configurator. It has product pages with
interactive 3D models, a quote basket, a modular Custom Studio, account and
wishlist screens, product comparisons, fabric pages, AR export, and a browser
admin panel.

Without a separately configured backend, account data, contact enquiries,
reviews, newsletter subscriptions, trade applications and demo orders are
stored only in the visitor's browser. The checkout is a simulation, not a
payment service. Do not use the local demo for real customer accounts, payments
or personal information.


OPENING AND PREVIEWING THE SITE
-------------------------------
For the most complete local preview, run a static web server from the project
root instead of opening an HTML file directly:

  python -m http.server 8000

Then visit:

  http://localhost:8000/

The generated js/app.js bundle is also designed to run when index.html is
double-clicked. However, browsers restrict local-file fetches, so model files
and data/site.json may not load correctly in that mode. AR placement requires
HTTPS and a supported phone or tablet. Web fonts need an internet connection;
the AR modal also loads Google's model-viewer library from a CDN.

All pages use js/app.js. Its source modules are in src/. The app loads only the
module needed by the current page after the shared browser data store is ready.


PAGES AND CUSTOMER WORKFLOWS
----------------------------
Home (index.html)
  Featured pieces, shared navigation, newsletter form and common footer.

Shop (shop.html)
  Search by product text, filter by category/subcategory or fabric, sort, open
  a product, quick-add the default configuration, save a piece to the wishlist,
  or add it to the comparison list.

Product (product.html?id=PRODUCT_ID)
  Rotate and zoom the 3D piece, choose fabrics and finish types, add the
  configured piece to the basket, compare it, save it, or open the AR/download
  view. Product dimensions and price are fixed to the configured product data;
  there are no size sliders on this page.

Fabric Library (fabrics.html, fabric.html?id=MATERIAL_ID)
  Browse materials and see products that offer a selected material.

Compare (compare.html)
  Compare up to three products at once. This page has its own fabric, frame
  finish and dimension controls; its size controls do not change the product
  page configuration.

Custom Studio (custom-studio.html)
  Choose Classic modules or an available collection, start from a one- to
  four-seater preset (Classic only) or an empty floor, then add and arrange
  pieces. Drag to move, press R or use Rotate 90 degrees, Delete to remove,
  and use the canvas to orbit/zoom. The summary shows estimated price, overall
  size and piece count. Add the build to the basket, export it for AR, or save
  it to an account. Saved designs are browser-local unless a real backend is
  connected.

Basket and checkout (basket.html, checkout.html, order-complete.html)
  The basket is a quote basket: change quantities, remove items, print/save a
  quotation, request a quote, or open the demo checkout if enabled. The demo
  checkout takes no payment and does not transmit or store card details. The
  displayed test card numbers simulate success or decline; never enter a real
  card number.

Account (account.html)
  The local demo can create an account and show saved products, orders and
  designs in the same browser profile. It is not secure authentication or
  cross-device storage.

Contact (contact.html)
  Submit an enquiry. In local demo mode it is saved in this browser; it is not
  emailed.

For Designers and Trade (trade.html)
  Download product models, material swatches and documents, and submit a trade
  application. Local demo submissions remain in the browser.

About, Services, Help, 404 (about.html, services.html, help.html, 404.html)
  Informational pages and policies.


OPENING THE ADMIN PANEL
-----------------------
On any page, use one of:
  - Click the faint fleur-de-lis in the bottom-left corner.
  - Press Ctrl+Shift+A.
  - On touch devices, tap the footer logo five times quickly.

The first time, choose a steward passcode of at least four characters. The
passcode hash and "unlocked this session" state are stored in this browser.
This is a convenience lock, not production-grade security. Use the same
browser profile to see the same unpublished admin data and uploaded files.
If you forget the passcode, remove the "dekara-pw" item from this site's
localStorage in browser developer tools, reload, and choose a new one. This
does not clear the admin content stored under "dekara-cfg".
Use the floating search field to filter admin sections and settings. The
close button stays at the top, and Apply, Export, Import, Reset and Lock stay
available in the floating action bar at the bottom. In Materials library,
expand a material and use Move earlier / Move later to reorder finish and
fabric swatches; the order is shared wherever those material choices appear.
Click Apply changes to refresh the choices on the current page after reordering.
Fabric selectors only include materials whose type is Fabric, Leather, Velvet
or Linen. Wood, Stone, Metal and Other remain in the materials library for
finish selectors and are not offered as upholstery fabrics.

Admin sections:

Fabric mapping (on a product page)
  Open the panel on the product page. Select a fabric/finish type and material,
  adjust scale X/Y, rotation and location, then choose Lock values to save.
  Each finish-type/material mapping is independent. Reset removes that
  material's custom mapping. The Fabric finish type is also the product page's
  fabric selector; there is no second fabric swatch selector there. The Apply
  to all control has a dedicated label target so opening the mapping editor
  does not trigger a null textContent error.

Media on this page
  Upload images/videos to the visible slots on the current page. These uploads
  are stored in this browser until manually copied to the repository. Gallery
  slots are edited from the Pieces section for the relevant product.

Business details
  Set footer/contact phone and email, WhatsApp number, backend API URL and
  viewer backlight options.

Basket and checkout
  Set the delivery fee and enable/disable the demo "Pay now" link. View, export
  or clear local demo orders.

Custom Studio
  Set maximum piece count, overall dimensions, snapping, module availability,
  prices, per-module limits, starter presets, available studio fabrics and
  available studio finish materials.

Materials library
  Add/edit/delete materials, upload a swatch texture, create finish types, and
  reset material settings. A finish type maps to a named material in a GLB.
  Fabric is a built-in finish type and should not be deleted.

Pieces
  Edit product text, categories, price and fabric/finish availability; upload a
  model or gallery media; restore deleted default products; or delete products.
  To change a product's actual 3D mapping, open that product page with the
  admin panel.

Add a piece to the shop
  Supply product information, dimensions and a GLB/GLTF model. The uploaded
  model and its product record are initially browser-local. Use Prepare changes
  for GitHub in Publish to repo to write the record and model into your project.

Studio collections
  Create a collection, add multiple GLB/GLTF modules, adjust each module's
  name, price and dimensions, and upload a preview image. Collection additions
  are browser-local until you use Prepare changes for GitHub to merge their
  records and copy the model and preview files into the repository.

Publish to repo
  Prepare changes for GitHub opens a folder picker. Select the project root
  (the folder containing package.json). The admin merges its current settings
  into data/site.json and copies browser-uploaded assets into the matching
  repository paths. The status message shows folder selection, each file copy,
  progress, completion, or a specific error. If you cancel the folder picker,
  it confirms that no files were written. It does not run Git commands. Review
  the changed files, then commit and push them from a terminal. Use a current
  Chrome or Edge browser with folder access support.

Export text / Import text
  Export or replace this browser's admin configuration as JSON. Keep a backup
  before importing: import replaces the current local configuration.

Reset everything
  Clears this browser's local admin configuration and uploaded media. It does
  not delete repository files. Reset materials to default is narrower: it
  resets the material/finish settings only.


SAVING, EXPORTING AND PUBLISHING CHANGES
---------------------------------------
There are three different places changes can live:

1. Browser-local edits
   Admin text/settings are saved in localStorage. Uploaded images, videos,
   models and collection pieces are stored in IndexedDB. They are not visible
   to other visitors or devices until staged in the project folder.

2. Prepare changes for GitHub
   Choose the root of your local project folder. The admin preserves existing
   top-level site data and merges its current browser settings into the
   "config" object in data/site.json. It updates the "files" and "models"
   references for uploaded assets and copies the files into the project.
   Cancel folder selection to leave the project unchanged.
   The workspace Live Server settings ignore data/site.json and the models,
   swatches and media folders so Live Server does not reload the page while
   this button is writing those files. If Live Server was already running
   when these settings were added, restart it before preparing changes.

3. Review and push
   Check the staged changes in VS Code or with git status. The button writes
   files to the chosen project folder but does not stage them in Git, commit,
   or push. When the changes look right, commit and push from the terminal.
   Uploaded file paths are chosen automatically for product models, collection
   pieces/previews, fabric swatches, gallery media and other page slots.
   Status is retained across a page reload. If the page reloads mid-run, the
   admin warns that the operation was interrupted; check the worktree because
   some files may already have been copied.
   Run git status, then stage data/site.json and each desired asset path with
   git add. For example:
     git add data/site.json
     git add models/your-model.glb
     git commit -m "Publish admin updates"
     git push origin main

GitHub Pages deployment is configured by .github/workflows/deploy.yml. A push
to main deploys the repository; the workflow can also be run manually from
GitHub Actions. Allow a minute or two for the published site to update.


ADDING AND NAMING 3D MODELS
---------------------------
Use optimized GLB files for product viewers and collections. Draco and Meshopt
compression are supported. Keep files reasonably small (about 10 MB or less
where possible).

Product model path:
  models/PRODUCT_ID.glb

Optional iOS Quick Look file:
  models/PRODUCT_ID.usdz

Custom Studio collection module:
  models/collections/COLLECTION_ID/PIECE_ID.glb

Collection preview:
  models/collections/COLLECTION_ID/preview.jpg

For custom product GLBs, give the upholstery material the name "tint" so the
product fabric selector applies to it. Other non-transparent materials may be
treated as upholstery if no "tint" material exists. Name frame/legs/base
materials to match the finish-type target configured in the admin. Targets are
matched case-insensitively after trimming whitespace; the admin normalizes
spaces in a target to hyphens, so use a matching hyphenated GLB material name
when the target contains multiple words.

The built-in product models are generated placeholder geometry from
src/builders.js. The current site has product GLBs and USDZ files under models/,
plus a Lemo Modular collection under models/collections/.


ADDING MATERIALS AND TEXTURE IMAGES
-----------------------------------
The admin Materials library creates materials with a stable material ID,
display name, type, hex colour, description and optional image. Fabric
selectors include Fabric, Leather, Velvet and Linen types. Other types, such as
Wood, Stone and Metal, remain available for finishes, but are excluded from
fabric checklists for products and the Custom Studio. Product fabric
availability is configured under each product. Studio fabrics and studio
finishes are configured separately in the Custom Studio section.

Repository texture path:
  swatches/fabrics/MATERIAL_ID.jpg

The file reference in data/site.json uses the slot key "fabric:MATERIAL_ID".
If no texture image is provided, the viewer generates a procedural woven
texture from the material colour.

Vector swatches generated for the built-in sample fabrics are under swatches/.
The fabric library uses the materials in data/site.json and the browser's
effective configuration.


MEDIA AND DOCUMENTS
-------------------
Page media uploads are associated with a slot, not just a filename. The admin
shows the available slot names on the page being edited. Typical slots include
the logo and contact image. Product gallery slots are:
  gallery:PRODUCT_ID:1
  gallery:PRODUCT_ID:2
  gallery:PRODUCT_ID:3

The publisher records uploaded files in the data/site.json "files" object and
uses repository paths such as media/, swatches/fabrics/, models/, and
models/collections/. Create missing folders as needed when placing files.
Video uploads should be MP4 or WebM and under about 50 MB. Background videos
loop silently; other video slots show controls.

Trade downloads use the "documents" array in data/site.json. Each entry has:
  name     Display name
  file     Repository-relative file path
  desc     Short description

Current downloadable files include downloads/dekara-catalogue.csv and
downloads/dekara-3d-models.zip. The trade page provides model downloads and
uses built-in document defaults if the "documents" property is absent. An
explicit empty array means there are no document downloads to show.


DATA AND CONFIGURATION
----------------------
data/site.json is the published static data file. The current file contains
"config", "files" and "version". The loader also supports these optional
top-level fields when present:
  config    Product edits, collections, materials, finish types, mappings,
            studio/shop/site settings, additions and deletions
  files     Map from media slot keys to repository-relative paths and metadata
  models    Product ID to GLB path
  products  Published extra-product records
  collections, fabrics, materials, finishTypes, pieceFinishes,
  studioFabrics, studioFinishes, documents, apiBase, version

Only include fields that the site uses; preserve existing values when merging
exports. JSON must remain valid. Most configuration can be edited in the admin
and then published without directly editing this file.


OPTIONAL REAL BACKEND
---------------------
Without apiBase, the site uses browser-local demo behavior. To connect a
backend, set apiBase to the HTTPS base URL in Admin > Business details or in
data/site.json. The frontend expects JSON REST routes:

  GET    /me
  POST   /auth/register
  POST   /auth/login
  POST   /auth/logout
  GET    /wishlist
  POST   /wishlist/toggle                 { "productId": "..." }
  GET    /products/{productId}/reviews
  POST   /products/{productId}/reviews
  POST   /orders
  GET    /orders
  GET    /designs
  POST   /designs
  DELETE /designs/{designId}
  POST   /trade-applications
  POST   /contact
  POST   /newsletter                    { "email": "..." }
  GET    /orders/{reference}/status

Send/return JSON. Non-2xx responses should include a JSON "message" when
possible. Login/register responses are expected to contain "token" and "user";
the frontend sends the token as a Bearer token. For live checkout, POST /orders
must create an order and return a PayFast redirect descriptor:
  { "ref": "...", "payfast": { "url": "https://...", "fields": { "...": "..." } } }
The browser posts those fields to PayFast. The backend must verify payment
server-side and provide the order status route. Do not handle payment secrets
or trust payment confirmation in the browser.


DEVELOPMENT
-----------
Prerequisites: Node.js and npm. From the project root:

  npm install
  npm run build

npm run build bundles src/app.js and all application modules into the
classic-script bundle js/app.js. Rebuild after editing any src/ module so the
static pages receive the change. The source is plain JavaScript ES modules;
Three.js is the main runtime dependency and esbuild creates the bundle.

Optional generated-asset command:
  npm run assets

WARNING: tools/generate-assets.mjs overwrites data/site.json, the built-in
product GLB/USDZ files, generated swatch SVGs and downloads/dekara-catalogue.csv.
It can erase current published site data and overwrite models. Do not run it on
a working site unless you have backed up those files and specifically intend
to regenerate the placeholder assets.

Useful implementation map:
  src/app.js          Startup and page-specific module selection
  src/main.js         Shared navigation, footer and common page behavior
  src/catalog.js      Built-in product catalogue and defaults
  src/products.js     Effective products, materials, finishes and mappings
  src/store.js        Browser persistence and published data loading
  src/admin.js        Steward admin UI and local configuration workflows
  src/publish.js      Legacy GitHub API publishing helper; not exposed in the
                      current admin panel
  src/product.js      Product page selectors and product interactions
  src/viewer.js       Three.js model viewing and finish application
  src/texture.js      Fabric textures and texture mapping values
  src/studio.js       Modular Custom Studio builder
  src/checkout.js     Demo checkout and live payment redirect
  src/api.js          Local demo API and optional backend contract
  src/ar.js           GLB/USDZ export and AR viewer
  css/styles.css      Shared responsive site styling
  tools/generate-assets.mjs
                      Regenerates the built-in placeholder assets (see warning)

There is no automated test script in package.json. At minimum, run
"npm run build" after source changes and manually check affected pages in a
browser, including the browser console.
