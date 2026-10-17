DEKARA DESIGNS: 3D FURNITURE SHOWCASE & CUSTOM STUDIO

QUICK START
- Double-click index.html to preview (internet needed for fonts). AR needs HTTPS, so test it on your GitHub Pages URL.
- Admin panel: click the faint fleur-de-lis in the bottom-left of any page, or press Ctrl+Shift+A (on mobile, tap footer logo 5 times).

RESOURCE PLACEMENT & FILE PATHS GUIDE

1. 3D MODELS (models/)
- Shop pieces:
  models/<product-id>.glb
  Example: models/sofa.glb, models/armchair.glb, models/blackgranitedining.glb
- iOS AR QuickLook (optional):
  models/<product-id>.usdz
- Custom Studio collection pieces:
  models/collections/<collection-id>/<piece-id>.glb
  Example: models/collections/cmvbge0o1/pmvbgejt49v4.glb
- Model sizes: keep models 10 MB or less so they commit directly to GitHub without LFS.
- Material names in GLBs:
  - Fabric / upholstery: name material "tint"
  - Frame / legs / base: name material to match your finish types (e.g. "frame", "legs", "base")

2. COLLECTION PREVIEW IMAGES
- Accompany collections with a preview photo:
  models/collections/<collection-id>/preview.jpg
  Example: models/collections/cmvbge0o1/preview.jpg
- Also uploadable directly in Admin > Studio collections.

3. FABRICS, FINISHES & MATERIALS (swatches/)
- Texture images for fabrics and wood/metal finishes:
  swatches/fabrics/<material-id>.jpg
  Example: swatches/fabrics/f-lemo-grey-38z3.jpg, swatches/fabrics/oyster.jpg, swatches/fabrics/walnut.jpg
- Base vector swatches:
  swatches/<fabric-id>.svg

4. GALLERY PHOTOS & MEDIA (media/)
- Product gallery photos/videos:
  media/gallery-<product-id>-1.jpg
  media/gallery-<product-id>-2.jpg
  media/gallery-<product-id>-3.jpg
- Background and page video slots:
  media/<slot-name>.mp4 or .webm

5. DOWNLOADS & DOCUMENTS (downloads/)
- Spec sheets, price lists, brochures and CAD files:
  downloads/<file-name>
  Add references under "documents" in data/site.json.

6. SITE DATA & CONFIGURATION (data/)
- data/site.json: core JSON data for all products, collections, materials, and finish configurations.
- Admin "Publish changes" commits only data/site.json to GitHub.

ADMIN PANEL FEATURES
- Materials library: add, edit, or delete fabrics and finishes.
- Finish types: create or remove finish types with custom GLB target names.
- Reset materials to default button to restore original settings.
- Custom Studio: select available fabrics and finishes for Studio builds.
- Studio collections: manage modular pieces and preview images.
- Pieces: customize fabric and finish options per piece.

DEVELOPMENT
- Source is in src/
- npm install
- npm run build (rebuilds js/app.js via esbuild)
- npm run assets (rebuilds placeholder assets if needed)
