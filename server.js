const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DEBUG = process.env.DEBUG === 'true' || process.env.DEBUG === 'camden*';

// Debug log helper
const log = (...args) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}]`, ...args);
};
const errLog = (...args) => {
  const ts = new Date().toISOString();
  console.error(`[${ts}] ERROR`, ...args);
};

// Security + performance
app.use(helmet({
  contentSecurityPolicy: false, // permite CDN de fonts/images de camdenperu.com
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: false
}));
app.use(cors({
  origin: [
    'https://camdenperu.com',
    'https://www.camdenperu.com',
    'https://camdenperu.up.railway.app',
    'http://localhost:3000',
    'http://localhost:4000'
  ],
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));
app.use(compression());
app.use(express.json());

// Debug: request logger - Railway muestra esto en Deploy Logs
app.use(morgan(DEBUG ? 'combined' : 'tiny', {
  stream: { write: msg => log(msg.trim()) }
}));

// Debug: log cada request con tiempo
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    if (DEBUG || res.statusCode >= 400) {
      log(`${req.method} ${req.originalUrl} -> ${res.statusCode} ${ms}ms | IP:${req.ip} | UA:${req.get('user-agent')?.slice(0,80)}`);
    }
  });
  next();
});

// Favicon con fondo blanco ya servido como archivo estático /favicon.ico

// Healthcheck para Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Debug endpoint para ver estado del deploy
app.get('/debug', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    env: process.env.NODE_ENV || 'production',
    port: PORT,
    debug: DEBUG,
    time: new Date().toISOString(),
    headers: req.headers
  });
});

// Servir assets estáticos con cache
// /cdn/shop/files/* ahora es local (migración fuera de Shopify) - cache largo
app.use('/cdn', express.static(path.join(__dirname, 'cdn'), {
  maxAge: '30d',
  etag: true
}));
app.use(express.static(path.join(__dirname), {
  maxAge: '1d',
  etag: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Si falta una imagen local, devolver 404 (no index.html) para verlo en logs
app.get('/cdn/*', (req, res) => {
  errLog(`Missing local image ${req.originalUrl}`);
  res.status(404).send('Image not found - sube el archivo a /cdn/shop/files/');
});

// SPA fallback: cualquier ruta no-archivo sirve index.html (hash routes #admin, #producto/slug)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejo de errores para debug
app.use((err, req, res, next) => {
  errLog(`Unhandled error ${req.method} ${req.originalUrl}`, err.message, err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: DEBUG ? err.message : undefined });
});

process.on('uncaughtException', (err) => {
  errLog('uncaughtException', err.message, err.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  errLog('unhandledRejection', reason);
});

app.listen(PORT, '0.0.0.0', () => {
  log(`CAMDEN PERU running on port ${PORT} | DEBUG=${DEBUG} | CORS allow https://camdenperu.com`);
  log(`Health: /health | Debug: /debug`);
});
