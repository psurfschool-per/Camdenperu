const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security + performance
app.use(helmet({
  contentSecurityPolicy: false, // permite CDN de fonts/images de camdenperu.com
  crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(express.json());

// Healthcheck para Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Servir assets estáticos con cache
app.use(express.static(path.join(__dirname), {
  maxAge: '1d',
  etag: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// SPA fallback: cualquier ruta no-archivo sirve index.html (hash routes #admin, #producto/slug)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CAMDEN PERU running on port ${PORT}`);
});
