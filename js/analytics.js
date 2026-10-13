/* CAMDEN PERU - Medición de conversiones Google Ads + Analytics (gtag.js)
 * ID: AW-18473044642
 * - Carga del script gtag.js está en <head> de index.html (async + preconnect).
 * - Este helper evita errores si gtag aún no cargó, evita duplicados y
 *   adapta los eventos a esta SPA con hash-routing (#home, #checkout, #confirmacion).
 */
(function () {
  'use strict';

  var ADS_ID = 'AW-18473044642';
  var CURRENCY = 'PEN';

  // Cola temprana: si gtag.js aún no llegó, guardamos eventos y los reenviamos.
  window.dataLayer = window.dataLayer || [];
  var pendingQueue = [];

  function gtagSafe() {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag.apply(null, arguments);
        return true;
      }
    } catch (e) { /* noop */ }
    return false;
  }

  function flushQueue() {
    if (typeof window.gtag !== 'function' || !pendingQueue.length) return;
    var q = pendingQueue.slice();
    pendingQueue = [];
    q.forEach(function (args) { gtagSafe.apply(null, args); });
  }

  // Reintentar cuando cargue gtag.js (máx ~5s)
  var flushTries = 0;
  var flushTimer = setInterval(function () {
    flushQueue();
    flushTries++;
    if (flushTries > 25 || (typeof window.gtag === 'function' && !pendingQueue.length)) {
      clearInterval(flushTimer);
    }
  }, 200);

  function track() {
    var args = Array.prototype.slice.call(arguments);
    if (!gtagSafe.apply(null, args)) {
      // Solo encolar eventos (no 'js' ni 'config' ni 'consent')
      if (args[0] === 'event') pendingQueue.push(args);
    }
  }

  function toItems(cartItems) {
    if (!Array.isArray(cartItems)) return [];
    return cartItems.map(function (i) {
      return {
        item_id: String(i.id || ''),
        item_name: i.baseName || i.name || 'Poncho Camden',
        price: Number(i.price || 0),
        quantity: Number(i.qty || 1)
      };
    });
  }

  function pagePath() {
    var h = window.location.hash || '#home';
    return '/' + h.replace(/^#\/?/, '');
  }

  // --- API pública ---
  window.CamdenAnalytics = {
    ADS_ID: ADS_ID,

    pageView: function (pageTitle) {
      track('event', 'page_view', {
        page_location: location.href,
        page_path: pagePath(),
        page_title: pageTitle || document.title,
        send_to: ADS_ID
      });
    },

    viewItem: function (product) {
      if (!product) return;
      track('event', 'view_item', {
        currency: CURRENCY,
        value: Number(product.price || 0),
        items: [{
          item_id: String(product.id || product.slug || ''),
          item_name: product.name || '',
          price: Number(product.price || 0),
          quantity: 1
        }]
      });
    },

    addToCart: function (product, qty, value) {
      track('event', 'add_to_cart', {
        currency: CURRENCY,
        value: Number(value || (product && product.price * (qty || 1)) || 0),
        items: [{
          item_id: String((product && (product.id || product.slug)) || ''),
          item_name: (product && product.name) || '',
          price: Number((product && product.price) || 0),
          quantity: Number(qty || 1)
        }]
      });
    },

    beginCheckout: function (cart, total) {
      track('event', 'begin_checkout', {
        currency: CURRENCY,
        value: Number(total || 0),
        items: toItems(cart)
      });
    },

    // Conversión principal: se dispara 1 sola vez por pedido (dedupe por orderId).
    purchase: function (order) {
      if (!order || !order.id) return false;
      var key = 'camden_conv_' + order.id;
      try {
        if (localStorage.getItem(key)) return false; // ya medido
        localStorage.setItem(key, new Date().toISOString());
      } catch (e) { /* noop */ }
      var total = Number(order.total || 0);
      var params = {
        currency: CURRENCY,
        value: total,
        transaction_id: String(order.id),
        items: toItems(order.items)
      };
      // Enhanced conversions: Google hashea email/teléfono automáticamente.
      try {
        var cust = order.customer || {};
        var userData = {};
        if (cust.email) userData.email = String(cust.email).trim();
        if (cust.telefono) userData.phone_number = '+51' + String(cust.telefono).replace(/\D/g, '');
        if (cust.direccion) userData.address = { street: String(cust.direccion), region: String(cust.departamento || ''), country: 'PE' };
        if (userData.email || userData.phone_number) params.user_data = userData;
      } catch (e) {}
      // Evento estándar ecommerce (sirve para GA4 + informes de Ads)
      track('event', 'purchase', params);
      // Evento de conversión de Google Ads con el ID base.
      // NOTA: cuando Google te dé la etiqueta de conversión completa
      // (formato AW-18473044642/AbC-D3FgHiJkLm), reemplaza la línea de abajo por:
      // track('event', 'conversion', { send_to: 'AW-18473044642/TU_ETIQUETA', value: total, currency: 'PEN', transaction_id: String(order.id) });
      track('event', 'conversion', {
        send_to: ADS_ID,
        value: total,
        currency: CURRENCY,
        transaction_id: String(order.id)
      });
      return true;
    },

    // Conversión secundaria: clic/envío por WhatsApp (lead).
    whatsappLead: function (source) {
      track('event', 'generate_lead', {
        currency: CURRENCY,
        method: 'WhatsApp',
        source: source || pagePath()
      });
    },

    contactClick: function (method) {
      track('event', 'contact', { method: method || 'whatsapp' });
    }
  };

  window.addEventListener('load', flushQueue);
})();
