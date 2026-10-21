# Dekara Designs — 3D Luxury Furniture Showcase & Custom Studio

A high-end 3D furniture showcase and modular configurator for Dekara Designs, featuring interactive 3D WebGL viewing, Augmented Reality (AR), live fabric and finish texture mapping, and the interactive **Custom Studio** modular builder.

---

## 📁 Resource Placement & File Paths Guide

When adding 3D models, textures, images, or documents manually to the repository, place them in the corresponding paths below:

### 1. 3D Furniture Models (`models/`)
All models are loaded as GLB (`.glb`) files.
- **Shop Pieces**:
  ```text
  models/<product-id>.glb
  ```
  *Examples*: `models/sofa.glb`, `models/armchair.glb`, `models/blackgranitedining.glb`
- **Optional USDZ for iOS AR QuickLook**:
  ```text
  models/<product-id>.usdz
  ```
- **Custom Studio Collection Pieces**:
  ```text
  models/collections/<collection-id>/<piece-id>.glb
  ```
  *Example*: `models/collections/cmvbge0o1/pmvbgejt49v4.glb`
- **Model Size Recommendation**: Keep models optimized at **10 MB or less** each so they commit directly to GitHub without requiring Git LFS or external CDN proxies.
- **Naming Materials in Blender / 3D Software**:
  - **Fabric / Upholstery**: Name material `tint` (or leave as the primary mesh material) to be dynamically recoloured and textured by fabric swatches.
  - **Frame / Legs / Base**: Name material to match your finish types (e.g. `frame`, `legs`, `base`).

---

### 2. Collection Preview Images
Accompany each Custom Studio collection with a preview photo so customers see what they are selecting in **Step one: Select a collection** and when hovering over the collection buttons:
```text
models/collections/<collection-id>/preview.jpg
```
*Example*: `models/collections/cmvbge0o1/preview.jpg`  
*(You can also upload these directly in the Admin Panel under "Studio collections").*

---

### 3. Fabrics, Wood Finishes & Materials (`swatches/`)
- **Fabric & Finish Texture Images**:
  ```text
  swatches/fabrics/<material-id>.jpg
  ```
  *Examples*:
  - `swatches/fabrics/f-lemo-grey-38z3.jpg`
  - `swatches/fabrics/oyster.jpg`
  - `swatches/fabrics/walnut.jpg`
  - `swatches/fabrics/natural-oak.jpg`
- **Base Vector Swatches**:
  ```text
  swatches/<fabric-id>.svg
  ```

---

### 4. Media & Gallery (`media/`)
For product galleries, hero backgrounds, and page slots:
- **Product Gallery Images / Videos**:
  ```text
  media/gallery-<product-id>-1.jpg
  media/gallery-<product-id>-2.jpg
  media/gallery-<product-id>-3.jpg
  ```
- **Page Videos / Background Slots**:
  ```text
  media/<slot-name>.mp4
  media/<slot-name>.webm
  ```

---

### 5. Downloads & Documents (`downloads/`)
Place downloadable CAD files, tear sheets, price lists, or brochures here:
```text
downloads/catalogue.csv
downloads/dekara-models.zip
downloads/<document-name>.pdf
```
Add references to them under `"documents"` in `data/site.json`.

---

### 6. Site Data & Configuration (`data/`)
- `data/site.json`: The core JSON database of the site. It stores products, collections, prices, fabric library, finish types, piece assignments, and file path mappings.
- **Publishing from Admin**: When you click **Publish changes** in the admin panel, only `data/site.json` is committed to GitHub.

---

## 🛠️ Admin Panel (Steward's Chamber)

### Opening the Admin Panel
- **Desktop**: Click the subtle fleur-de-lis icon (⚜) in the bottom-left corner of any page, or press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>.
- **Mobile / Touch**: Tap the footer logo **5 times quickly**.

### Features in Admin
1. **Materials Library**:
   - Manage fabrics and frame/finish materials in one unified library.
   - **Finish Types**: Create or remove custom finish types (e.g. Frame, Legs, Base) with exact target names matching GLB materials.
   - **Reset materials to default**: Restore built-in fabrics and finish settings.
2. **Pieces**:
   - Set category, subcategory, price, description, dimensions, and model.
   - Select which fabrics and which finishes are offered for each piece.
3. **Studio Collections**:
   - Create modular collections with piece dimensions and pricing.
   - Upload collection preview images.
4. **Custom Studio Limits & Materials**:
   - Set piece limits, canvas bounds, snapping, and module prices.
   - Choose which fabrics and finishes are offered in the Custom Studio.
5. **Publish to GitHub**:
   - Enter your GitHub username, repo name, branch (`main`), and a fine-grained token with "Contents: Read and write".
   - Commits updated configurations directly to `data/site.json` without transferring large 3D models.

---

## 🛋️ Custom Studio Modular Builder

1. **Step One — Select a Collection**:
   - Choose between **Classic modules** or any custom collections created in the Admin panel.
   - Each collection displays its preview image and piece count.
2. **Step Two — Start Building**:
   - Pick a starting preset (1 to 4 seater) or start with an empty floor.
   - Drag, rotate (<kbd>R</kbd>), and snap modules on the floor.
   - The price, overall dimensions, and piece count update live.
3. **Hover Preview**:
   - Hovering over any collection button in the Custom Studio toolbar displays a floating preview card of that collection's image.
4. **Customizing Materials**:
   - Customize both the fabric upholstery and frame/legs finishes directly from the sidebar.

---

## 🏠 Build Your Room AR

- The **Build your room** links on Shop and Custom Studio are controlled by the **Room builder** checkbox in the admin panel.
- The room builder requests camera access only after the visitor starts it, and requires HTTPS plus a compatible mobile browser/device.
- It loads the 8th Wall Engine Binary on the room-builder page from jsDelivr. No API key or hosted 8th Wall account is required. The binary includes world tracking under its separate license; see the visible attribution and license link in the experience.
- Furniture placement is session-only; stopping the camera clears the current arrangement.

---

## 💻 Development & Building

The frontend is built with vanilla JavaScript modules and bundled with **esbuild**.

### Commands
```bash
# Install dependencies
npm install

# Bundle and minify JavaScript (src/app.js -> js/app.js)
npm run build

# Regenerate placeholder assets (if needed)
npm run assets
```

### Key Source Files
- `src/catalog.js`: Base catalog constants, dimensions, and default finish types.
- `src/store.js`: Local storage & IndexedDB persistence, site and studio config.
- `src/products.js`: Unified materials library, finish definitions, and product loader.
- `src/viewer.js`: Three.js WebGL viewer with dynamic multi-finish material mapping.
- `src/studio.js`: Custom Studio modular floor builder, cyclorama scene, and AR exporter.
- `src/room-builder.js`: Multi-piece camera-based AR room placement and controls.
- `src/admin.js`: Steward's Chamber admin panel interface and settings editor.
- `src/publish.js`: GitHub API publisher for `data/site.json`.
- `css/styles.css`: Styling for the store, Custom Studio, modals, and popovers.
