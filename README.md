# CAMDEN PERU - Tienda Online

Ponchos 100% Producto Peruano. Tienda SPA (Single Page Application) con hash-routing,
servida por Express y desplegada en Railway.

## Desarrollado con

- HTML5
- CSS3 (Variables, Grid, Flexbox)
- JavaScript Vanilla (SPA con hash-routing)
- Node.js + Express (servidor, seguridad y CMS)

## Funcionalidades

- Catalogo de productos con filtro por categoria (Adultos / Niños)
- Vista detalle de productos con galeria y selector de talla
- Carrito de compras con control de stock por talla
- Checkout con confirmacion y envio del pedido por WhatsApp
- Panel admin (CMS) para editar productos, precios, stock e imagenes
- Medicion de conversiones Google Ads (AW-18473044642)
- Totalmente responsive (desktop, tablet, movil)

## Como ejecutar

Requisito: Node.js 18 o superior.

```bash
npm install        # instala dependencias
npm run dev        # servidor local en modo debug (logs detallados) -> http://localhost:3000
```

Otros comandos:

```bash
npm start          # servidor en modo normal (produccion)
npm run debug      # alias de npm run dev
```

En Windows, `npm run dev` funciona sin configuracion extra (usa `cross-env`).

### Rutas principales

| Ruta | Descripcion |
|------|-------------|
| `#home` | Portada |
| `#productos` | Ponchos para adultos |
| `#ninos` | Ponchos para niños |
| `#producto/<slug>` | Detalle de producto |
| `#checkout` | Carrito / compra |
| `#confirmation` | Confirmacion de pedido |
| `#admin` | Panel administrativo |

### Panel admin

Entrar a `http://localhost:3000/#admin` (o haciendo 5 clics rapidos en el logo, o con `Ctrl+Shift+A`).

- La clave nunca viaja al cliente: se valida en el servidor con `scrypt` + rate-limit.
- La clave inicial es `camden2026` (o la variable de entorno `ADMIN_PASS`); **cambiala desde el panel**
  en cuanto despliegues.
- Se guarda hasheada en `data/admin.json` (ignorado por git, nunca se commitea).

## Endpoints utiles

- `GET /health` - healthcheck de Railway
- `GET /debug` - estado del deploy (los headers solo se exponen desde localhost)
- `GET /api/images` - banco de imagenes locales para el CMS

## Despliegue (Railway)

- Configuracion en `railway.json`: build `npm install`, start `npm start`, healthcheck `/health`.
- Variables de entorno recomendadas: `ADMIN_PASS` (clave del panel), `DEBUG` (opcional).
- El dominio debe estar en las listas de CORS de `server.js`.

## Estructura

```
index.html        Shell de la SPA + metas SEO/OG + scripts
css/styles.css    Estilos completos
js/main.js        SPA: productos, carrito, checkout, panel admin
js/analytics.js   Eventos ecommerce para Google Ads
cdn/shop/files/   Banco de imagenes locales (167 archivos, ~33 MB)
data/             Credenciales admin (gitignored)
server.js         Express: seguridad, auth admin, estaticos, SPA fallback
```

## SEO y accesibilidad

- `robots.txt` y `sitemap.xml` en la raiz (no los elimines: sin ellos Google reporta
  robots.txt invalido porque el fallback SPA devuelve HTML).
- Metas `og:`/`twitter:` para vista previa al compartir.
- Contraste WCAG AA, jerarquia de encabezados y enlace "saltar al contenido".
