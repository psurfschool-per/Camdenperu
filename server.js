const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const crypto = require('crypto');
const fs = require('fs');
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
    'https://camdenperu-production.up.railway.app',
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

// ========= ADMIN AUTH (la clave NUNCA viaja al cliente en el JS) =========
const ADMIN_DIR = path.join(__dirname, 'data');
const ADMIN_FILE = path.join(ADMIN_DIR, 'admin.json');
function hashPass(pass, salt){
  return crypto.scryptSync(pass, salt, 64).toString('hex');
}
function loadAdminCred(){
  try{
    const raw = fs.readFileSync(ADMIN_FILE, 'utf8');
    const j = JSON.parse(raw);
    if(j.salt && j.hash) return j;
  }catch(e){}
  // primera vez: inicializar con env o default (cambiar inmediatamente en el panel)
  const salt = crypto.randomBytes(16).toString('hex');
  const initPass = process.env.ADMIN_PASS || 'camden2026';
  const cred = { salt, hash: hashPass(initPass, salt) };
  try{
    fs.mkdirSync(ADMIN_DIR, { recursive: true });
    fs.writeFileSync(ADMIN_FILE, JSON.stringify(cred));
    log('Admin credential file initialized (change the password in the panel)');
  }catch(e){ errLog('Could not write admin credential file', e.message); }
  return cred;
}
function verifyPass(pass){
  if(typeof pass !== 'string' || !pass) return false;
  const cred = loadAdminCred();
  const h = hashPass(pass, cred.salt);
  const a = Buffer.from(h, 'hex'), b = Buffer.from(cred.hash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
// Rate-limit simple anti fuerza bruta: 5 fallos por IP = bloqueo 15 min
const loginAttempts = new Map();
function loginBlocked(ip){
  const rec = loginAttempts.get(ip);
  if(!rec) return false;
  if(rec.failures < 5) return false;
  if(Date.now() - rec.last < 15*60*1000) return true;
  loginAttempts.delete(ip);
  return false;
}
function loginFail(ip){
  const rec = loginAttempts.get(ip) || { failures: 0 };
  rec.failures += 1; rec.last = Date.now();
  loginAttempts.set(ip, rec);
}
app.post('/api/admin/login', (req, res) => {
  const ip = req.ip;
  if(loginBlocked(ip)){ log(`Blocked login attempt from ${ip}`); return res.status(429).json({ error: 'Demasiados intentos. Espera 15 minutos.' }); }
  if(verifyPass(req.body && req.body.password)){
    loginAttempts.delete(ip);
    log(`Admin login OK from ${ip}`);
    return res.json({ ok: true });
  }
  loginFail(ip);
  log(`Admin login FAIL from ${ip}`);
  res.status(401).json({ error: 'Clave incorrecta' });
});
app.post('/api/admin/change', (req, res) => {
  const ip = req.ip;
  if(loginBlocked(ip)) return res.status(429).json({ error: 'Demasiados intentos. Espera 15 minutos.' });
  const { current, next } = req.body || {};
  if(!verifyPass(current)){ loginFail(ip); return res.status(401).json({ error: 'La clave actual no es correcta' }); }
  if(typeof next !== 'string' || next.length < 8) return res.status(400).json({ error: 'La nueva clave debe tener al menos 8 caracteres' });
  if(next.length > 72) return res.status(400).json({ error: 'La nueva clave es demasiado larga (máx 72)' });
  const salt = crypto.randomBytes(16).toString('hex');
  try{
    fs.mkdirSync(ADMIN_DIR, { recursive: true });
    fs.writeFileSync(ADMIN_FILE, JSON.stringify({ salt, hash: hashPass(next, salt) }));
  }catch(e){ errLog('Could not update admin credential', e.message); return res.status(500).json({ error: 'No se pudo guardar' }); }
  loginAttempts.delete(ip);
  log(`Admin password changed from ${ip}`);
  res.json({ ok: true });
});

// API: lista de imágenes locales para el CMS (selector de galería)
app.get('/api/images', (req, res) => {
  const dir = path.join(__dirname, 'cdn', 'shop', 'files');
  fs.readdir(dir, (err, files) => {
    if (err) return res.status(500).json({ error: 'No se pudo leer el banco de imágenes' });
    const imgs = files
      .filter(f => /\.(webp|jpg|jpeg|png|gif)$/i.test(f))
      .sort()
      .map(f => `/cdn/shop/files/${f}`);
    res.json({ count: imgs.length, images: imgs });
  });
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
    if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
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
