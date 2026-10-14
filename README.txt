DEKARA DESIGNS: 3D FURNITURE SHOWCASE

QUICK START
- Double-click index.html to preview (internet needed for fonts). AR needs HTTPS, so test it on your GitHub Pages URL.
- Admin panel: click the faint fleur-de-lis in the bottom-left of any page, or press Ctrl+Shift+A.

PUBLISH ON GITHUB PAGES
1. Create a repo and upload this whole folder (keep js/app.js, models/, swatches/, downloads/, data/).
2. Settings > Pages > Deploy from a branch > main / root.
3. Replace yourdomain.co.za in robots.txt and sitemap.xml. Replace the sample text on help.html with your real policies.

MODELS AND FILES LIVE IN THE REPO
- models/<id>.glb and models/<id>.usdz: the 3D file for each product (id is listed in src/catalog.js). The site loads these automatically (data/site.json lists them). The shipped files are placeholders; overwrite them with your real models using the same names. Export GLB with materials named "tint" on the fabric/finish parts and the colour swatches will recolour only those parts.
- swatches/: one SVG per fabric plus a swatch sheet. downloads/: catalogue CSV and a ZIP of all models. To add documents (CAD, price lists, spec sheets), drop them in downloads/ and add them to "documents" in data/site.json.
- Models uploaded through the admin panel are stored in that browser only; for a live site, commit files to the repo instead.

DRACO / COMPRESSED MODELS
All 3D loading goes through src/loader.js, which supports Draco and Meshopt compressed GLB files. The Draco decoder is in libs/draco/ (keep that folder in the repo). Compressed models need the site served over http(s), such as GitHub Pages; they will not decode from a double-clicked file.

ADDING PIECES AND STUDIO COLLECTIONS
- Admin panel > "Add a piece to the shop": upload a GLB, fill in the details (size fills in from the model). Admin-added items live in that browser only.
- Admin panel > "Studio collections": create a collection and upload several GLBs. Each becomes a piece customers can drag, snap, rotate and price on the Custom Studio canvas. Each piece is stretched to the width, depth and height you set.
- To make additions permanent: click "Export additions for repo". Put the downloaded JSON's "products" and "collections" arrays into data/site.json, and place the model files at the paths named in "model" (models/<id>.glb and models/collections/<collection>/<piece>.glb).
- Materials named "tint" in a GLB are recoloured by the fabric swatches; materials named "frame" by the frame finish swatches. Without names, all opaque materials take the fabric colour.
- Backlight: Admin > Business details > "Backlight on main viewports" and strength.
- Compare: customers tap Compare on shop cards or product pages (up to 3), then change fabrics, finishes and sizes side by side on compare.html.

FABRICS, MATERIALS AND SCALE MAPPING
- Admin > "Fabrics & materials": add, edit and delete fabrics (name, type, colour, description, optional texture image). Fabrics without an image get a generated weave texture.
- Admin > Pieces > each piece: tick which fabrics that piece offers.
- Scale per piece: open the piece's page with the admin panel open. The "Fabric mapping (this piece)" section lets you set Scale X/Y, Rotation and Location for each fabric, like Blender's Mapping node, then "Lock values". Customers always see the locked values.
- Every fabric has its own detail page (fabric.html) with a large swatch, description and the pieces it is available on. The shop has a "by fabric" filter.
- Deleting: any piece (including the preloaded ones) and any fabric can be deleted in the admin panel; "Restore" buttons bring defaults back.
- For the repo: "Export additions for repo" now also exports fabrics, mapping, per-piece fabrics and deletions. Merge that JSON into data/site.json and commit any exported image/model files.

CHANGING CODE
Source is in src/. Install Node, then: npm install, npm run build (rebuilds js/app.js), npm run assets (regenerates placeholder models, swatches and the catalogue CSV from src/catalog.js).
Add a product: add a line in src/catalog.js, drop models/<id>.glb in place, rebuild.

PLUGGING IN A BACKEND LATER
Accounts, wishlist, reviews, orders, saved designs and trade applications all go through src/api.js. By default they use a browser-only demo store. To use your own API, add "apiBase": "https://your-api.example" to data/site.json. The site then calls (JSON, Bearer token after login):
 POST /auth/register {name,email,password} -> {token,user}      POST /auth/login {email,password} -> {token,user}
 POST /auth/logout      GET /me -> user
 GET /wishlist -> [productId]      POST /wishlist/toggle {productId} -> [productId]
 GET /products/:id/reviews -> [{rating,title,body,name,date}]      POST /products/:id/reviews {pid,rating,title,body}
 POST /orders {order}      GET /orders -> [order]
 GET /designs -> [design]      POST /designs {name,fabric,price,items}      DELETE /designs/:id
 POST /trade-applications {name,email,company,profession,notes}
Moderate reviews and validate everything on the server. The demo password hashing and checkout are NOT secure and take no real payments: use a real auth provider and a payment provider (PayFast, Yoco, Peach Payments or Stripe) before going live.
