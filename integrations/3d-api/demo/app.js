(function () {
  'use strict';

  const API_BASE = location.origin;
  const money = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    maximumFractionDigits: 0
  });
  const DEMO_PRODUCTS = {
    'sample-sofa': {
      id: 'sample-sofa',
      name: 'Haven Three-seat Sofa',
      category: 'Sofas',
      price: 18400,
      description: 'A deep, relaxed sofa with clean lines and comfortable, generous cushions.',
      longDescription: 'An easy, generous shape designed for long afternoons, slow mornings and all the people who gather in between.',
      details: 'Three-seat sofa · Solid timber frame · 228 cm W × 94 cm D × 82 cm H.',
      care: 'Removable cushion covers. Vacuum upholstery gently and blot spills with a clean, dry cloth.',
      images: ['/assets/catalog/haven-sofa-room.svg', '/assets/catalog/haven-sofa-detail.svg', '/assets/catalog/haven-sofa-room.svg']
    },
    'sample-chair': {
      id: 'sample-chair',
      name: 'Arc Lounge Chair',
      category: 'Chairs',
      price: 7200,
      description: 'A sculptural occasional chair with a softly upholstered seat and warm timber frame.',
      longDescription: 'A welcoming place to pause. A graceful timber silhouette meets a soft, rounded seat with comfort in mind.',
      details: 'Lounge chair · Solid timber frame · 76 cm W × 82 cm D × 79 cm H.',
      care: 'Dust timber with a soft, dry cloth. Blot upholstery spills promptly and avoid direct sunlight.',
      images: ['/assets/catalog/arc-chair-room.svg', '/assets/catalog/arc-chair-detail.svg', '/assets/catalog/arc-chair-room.svg']
    },
    'sample-table': {
      id: 'sample-table',
      name: 'Form Coffee Table',
      category: 'Tables',
      price: 4900,
      description: 'A simple, considered coffee table with a solid-looking top and tapered legs.',
      longDescription: 'A grounded centrepiece for everyday rituals, quiet evenings and the things you like to keep close.',
      details: 'Coffee table · Crafted timber finish · 112 cm W × 66 cm D × 42 cm H.',
      care: 'Wipe gently with a soft, slightly damp cloth. Use coasters to protect the surface.',
      images: ['/assets/catalog/form-table-room.svg', '/assets/catalog/form-table-detail.svg', '/assets/catalog/form-table-room.svg']
    }
  };

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  function categoryStyle(category) {
    return ({ Sofas: 'cat-sofa', Chairs: 'cat-chair', Tables: 'cat-table' })[category] || 'cat-sofa';
  }

  function cardMarkup(product) {
    const href = `/product.html?id=${encodeURIComponent(product.id)}`;
    return `<article class="product-card">
      <a class="product-card-art ${categoryStyle(product.category)}" href="${href}" aria-label="See ${escapeHtml(product.name)}">
        <span class="art-label">${escapeHtml(product.category || 'Furniture')} · 3D VIEW</span>
        <span class="mini-object ${product.id === 'sample-chair' ? 'mini-chair' : product.id === 'sample-table' ? 'mini-table' : 'mini-sofa'}"><i></i><b></b><em></em></span>
        <span class="quick-view">Explore the piece ↗</span>
      </a>
      <div class="product-card-info"><div><a href="${href}" class="product-card-name">${escapeHtml(product.name)}</a><p>${escapeHtml(product.category || 'Furniture')}</p></div><strong>${money.format(product.price || 0)}</strong></div>
    </article>`;
  }

  async function fetchProducts() {
    const response = await fetch(`${API_BASE}/api/v1/models`);
    if (!response.ok) throw new Error(`The product catalogue returned HTTP ${response.status}.`);
    const result = await response.json();
    if (!Array.isArray(result.models)) throw new Error('The product API response is missing its models list.');
    return result.models;
  }

  function showError(target, message) {
    const disconnected = message === 'Failed to fetch' || message.includes('NetworkError');
    const detail = disconnected
      ? `Could not reach the product API at ${API_BASE}. Start the complete demo with "npm run demo" in integrations/3d-api, then refresh this page.`
      : message;
    if (target) target.innerHTML = `<div class="inline-error"><strong>The demo catalogue could not load.</strong><p>${escapeHtml(detail)}</p><a class="text-link" href="/shop.html">Open the collection ↗</a></div>`;
  }

  async function populateHome() {
    const target = document.querySelector('#featured-products');
    if (!target) return;
    try {
      const products = await fetchProducts();
      target.innerHTML = products.slice(0, 3).map(cardMarkup).join('');
    } catch (error) {
      showError(target, error.message);
    }
  }

  async function populateShop() {
    const target = document.querySelector('#shop-products');
    if (!target) return;
    const category = new URLSearchParams(location.search).get('category');
    const title = document.querySelector('#shop-title');
    const description = document.querySelector('#shop-description');
    const count = document.querySelector('#result-count');
    const selected = ({ Sofas: 'Sofas & sectionals', Chairs: 'Chairs & stools', Tables: 'Tables & more' })[category];
    if (selected) {
      title.textContent = selected + '.';
      description.textContent = `A considered edit of ${category.toLowerCase()} for slower living, and rooms that feel like yours.`;
    }
    document.querySelectorAll('.filter-link').forEach(link => {
      if (new URL(link.href).searchParams.get('category') === category || (!category && !new URL(link.href).search)) {
        link.classList.add('is-active');
      }
    });
    try {
      const allProducts = await fetchProducts();
      const displayed = allProducts.filter(product => !category || product.category === category);
      for (const name of ['Sofas', 'Chairs', 'Tables']) {
        const badge = document.querySelector(`[data-count="${name}"]`);
        if (badge) badge.textContent = allProducts.filter(product => product.category === name).length;
      }
      const allBadge = document.querySelector('[data-count="all"]');
      if (allBadge) allBadge.textContent = allProducts.length;
      const sort = document.querySelector('#sort-products');
      const render = () => {
        const sorted = displayed.slice();
        if (sort.value === 'price-low') sorted.sort((a, b) => a.price - b.price);
        if (sort.value === 'price-high') sorted.sort((a, b) => b.price - a.price);
        if (sort.value === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
        target.innerHTML = sorted.length ? sorted.map(cardMarkup).join('') : '<p class="empty-note">No pieces in this edit just yet. <a href="/shop.html">Explore all furniture.</a></p>';
        count.textContent = `${sorted.length} ${sorted.length === 1 ? 'considered piece' : 'considered pieces'}`;
      };
      sort.addEventListener('change', render);
      render();
    } catch (error) {
      count.textContent = 'Catalogue unavailable';
      showError(target, error.message);
    }
  }

  function populateProduct() {
    const page = document.querySelector('.product-detail');
    if (!page) return;
    const id = new URLSearchParams(location.search).get('id');
    const product = DEMO_PRODUCTS[id];
    const openButton = document.querySelector('#open-3d');
    const dialog = document.querySelector('#three-d-dialog');
    const viewport = document.querySelector('#modal-viewport');
    const loading = document.querySelector('#modal-loading');
    const errorBox = document.querySelector('#modal-view-error');
    const arButton = document.querySelector('#view-in-ar');
    const arStatus = document.querySelector('#ar-status');
    const customizationOptions = document.querySelector('#customization-options');
    let activeViewer;
    let activeProduct;
    let requestId = 0;

    if (!product) {
      document.querySelector('#product-name').textContent = 'A piece worth discovering.';
      document.querySelector('#product-description').textContent = 'This sample product is not available. Browse the collection to choose a piece.';
      openButton.disabled = true;
      return;
    }

    document.title = `${product.name} — Stillroom`;
    document.querySelector('#product-breadcrumb').textContent = product.name;
    document.querySelector('#product-category').textContent = `${product.category} · THOUGHTFULLY MADE`;
    document.querySelector('#product-name').textContent = product.name;
    document.querySelector('#product-price').textContent = money.format(product.price);
    document.querySelector('#product-description').textContent = product.description;
    document.querySelector('#product-long-description').textContent = product.longDescription;
    document.querySelector('#product-details').textContent = product.details;
    document.querySelector('#product-care').textContent = product.care;
    document.querySelector('#product-image').src = product.images[0];
    document.querySelector('#product-image').alt = `${product.name} in a considered living space`;
    document.querySelectorAll('#product-thumbnails [data-image]').forEach((image, index) => {
      image.src = product.images[index];
      image.alt = `${product.name}, view ${index + 1}`;
    });
    document.querySelectorAll('#product-thumbnails .thumbnail').forEach((button, index) => {
      button.addEventListener('click', () => {
        document.querySelector('#product-image').src = product.images[index];
        document.querySelectorAll('#product-thumbnails .thumbnail')
          .forEach(item => item.classList.toggle('is-selected', item === button));
      });
    });
    document.querySelector('#add-to-bag').addEventListener('click', () => {
      document.querySelector('#bag-feedback').textContent = 'Added to your sample bag. (Checkout is not enabled in this demo.)';
    });
    document.querySelector('#related-products').innerHTML = Object.values(DEMO_PRODUCTS)
      .filter(item => item.id !== product.id)
      .slice(0, 2)
      .map(cardMarkup)
      .join('');

    function showModalError(message) {
      const disconnected = message === 'Failed to fetch' || message.includes('NetworkError');
      const detail = disconnected
        ? `Could not reach the product API at ${API_BASE}. Make sure the demo is running with "npm run demo".`
        : message;
      loading.hidden = true;
      errorBox.hidden = false;
      errorBox.innerHTML = `<strong>We couldn't load the 3D experience.</strong><p>${escapeHtml(detail)}</p><button class="modal-retry" id="retry-3d" type="button">Try again</button>`;
      errorBox.querySelector('#retry-3d').addEventListener('click', open3D);
    }

    function applyCustomization(target, option) {
      if (!activeViewer) return;
      customizationOptions.querySelectorAll('.custom-option').forEach(button => {
        if (button.dataset.customizationTarget !== target) return;
        button.setAttribute('aria-pressed', String(button.dataset.optionId === option.id));
      });
      document.querySelector('#customization-status').textContent = `Showing ${option.label}.`;
      activeViewer.setMaterial(target, { color: option.color, textureUrl: option.textureUrl })
        .catch(error => {
          document.querySelector('#customization-status').textContent = `Could not apply ${option.label}: ${error.message}`;
        });
    }

    function drawCustomizations(customizations) {
      customizationOptions.innerHTML = '';
      for (const customization of customizations || []) {
        const group = document.createElement('section');
        group.className = 'customization-group';
        const heading = document.createElement('h4');
        heading.textContent = customization.label;
        const choices = document.createElement('div');
        choices.className = 'customization-choices';
        choices.setAttribute('role', 'group');
        choices.setAttribute('aria-label', customization.label);
        for (const option of customization.options) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'custom-option';
          button.dataset.customizationTarget = customization.target;
          button.dataset.optionId = option.id;
          button.setAttribute('aria-label', option.label);
          button.setAttribute('aria-pressed', 'false');
          button.title = option.label;
          button.style.setProperty('--option-color', option.color || '#c4b49e');
          const swatch = document.createElement('span');
          swatch.className = 'custom-option-swatch';
          swatch.setAttribute('aria-hidden', 'true');
          const label = document.createElement('span');
          label.className = 'custom-option-label';
          label.textContent = option.label;
          button.append(swatch, label);
          button.addEventListener('click', () => applyCustomization(customization.target, option));
          choices.append(button);
        }
        group.append(heading, choices);
        customizationOptions.append(group);
        if (customization.options[0]) applyCustomization(customization.target, customization.options[0]);
      }
    }

    async function open3D() {
      const thisRequest = ++requestId;
      activeViewer?.destroy();
      activeViewer = null;
      activeProduct = null;
      viewport.querySelector('canvas')?.remove();
      loading.hidden = false;
      errorBox.hidden = true;
      errorBox.textContent = '';
      arButton.disabled = true;
      arStatus.textContent = 'View in AR works on supported AR-capable phones and tablets.';
      customizationOptions.innerHTML = '';
      document.querySelector('#customization-status').textContent = '';
      document.querySelector('#modal-bag-feedback').textContent = '';
      document.querySelector('#modal-product-name').textContent = product.name;
      document.querySelector('#modal-product-price').textContent = money.format(product.price);
      document.querySelector('#modal-product-description').textContent = product.description;
      document.querySelector('#modal-category').textContent = `${product.category} · PERSONALISE YOUR PIECE`;
      if (!dialog.open) dialog.showModal();

      try {
        const response = await fetch(`${API_BASE}/api/v1/models/${encodeURIComponent(product.id)}`);
        if (!response.ok) throw new Error(response.status === 404
          ? 'This product does not have a 3D model in the catalogue yet.'
          : `The product API returned HTTP ${response.status}.`);
        const apiProduct = await response.json();
        if (!dialog.open || thisRequest !== requestId) return;
        activeProduct = apiProduct;

        activeViewer = await Dekara3D.mount({
          container: viewport,
          modelUrl: apiProduct.modelUrl,
          arScale: apiProduct.arScale,
          label: `Interactive 3D view of ${product.name}`,
          orbit: true,
          autoRotate: false
        });
        if (!dialog.open || thisRequest !== requestId) {
          activeViewer.destroy();
          activeViewer = null;
          return;
        }

        loading.hidden = true;
        arButton.disabled = false;
        activeViewer.on('arstart', () => {
          arButton.disabled = true;
          arStatus.textContent = 'Move your phone to find a surface, then tap to place your furniture.';
        });
        activeViewer.on('arend', () => {
          arButton.disabled = false;
          arStatus.textContent = 'AR view closed. Your 3D product preview is ready.';
        });
        drawCustomizations(apiProduct.customizations);
        arStatus.textContent = apiProduct.arUrl
          ? 'View this piece in AR on a supported phone or tablet.'
          : 'For an immersive AR view, open this product on an AR-capable phone or tablet. iPhone and iPad require a USDZ model.';
      } catch (error) {
        if (thisRequest === requestId && dialog.open) showModalError(error.message);
      }
    }

    openButton.addEventListener('click', open3D);
    document.querySelector('#close-3d').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      requestId++;
      activeViewer?.destroy();
      activeViewer = null;
      activeProduct = null;
      customizationOptions.innerHTML = '';
      errorBox.hidden = true;
      loading.hidden = false;
      arButton.disabled = true;
    });
    arButton.addEventListener('click', async () => {
      if (!activeViewer) return;
      arButton.disabled = true;
      arStatus.textContent = 'Looking for a surface in your space…';
      try {
        const result = await activeViewer.viewInAR({ arUrl: activeProduct?.arUrl });
        arStatus.textContent = result.mode === 'quick-look'
          ? 'Opening the model in Quick Look…'
          : 'Move your phone to find a surface, then tap to place your furniture.';
      } catch (error) {
        arStatus.textContent = error.message;
        arButton.disabled = false;
      }
    });
    document.querySelector('#modal-add-to-bag').addEventListener('click', () => {
      document.querySelector('#modal-bag-feedback').textContent = 'Added to your sample bag. (Checkout is not enabled in this demo.)';
    });
  }

  populateHome();
  populateShop();
  populateProduct();
}());
