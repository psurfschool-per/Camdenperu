const PRODUCTS=[
{id:1,name:"Poncho Camden Azul Marino - Lila",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_4158_c007b32b-9276-4b3c-9c87-8bfddd9bcc00.jpg?v=1768272546&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_4158_c007b32b-9276-4b3c-9c87-8bfddd9bcc00.jpg?v=1768272546&width=1000","https://camdenperu.com/cdn/shop/files/IMG_4156_0f87d496-4baa-4307-8a11-116cdcaed07c.jpg?v=1768272613&width=1000"],category:"adulto",inStock:true,badge:"Nuevo",slug:"poncho-camden-azul-marino-lila-1",desc:"Poncho Cambiador Premium. Corte amplio, mangas espaciosas, felpa suave, capucha de doble forro, costuras reforzadas y bolsillo frontal."},
{id:2,name:"Poncho Camden Rojo - Azul Marino",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_5315.jpg?v=1768271922&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_5315.jpg?v=1768271922&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-rojo-azul-marino",desc:"Poncho Premium. Combinacion rojo con azul marino."},
{id:3,name:"Poncho Camden Azul Marino - Turqueza",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_62362_a0e47542-7b24-45aa-b325-8298febc25ba.jpg?v=1768271634&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_62362_a0e47542-7b24-45aa-b325-8298febc25ba.jpg?v=1768271634&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-azul-marino-anaranjado-copia",desc:"Azul marino con detalles en turquesa. Felpa suave de secado rapido."},
{id:4,name:"Poncho Camden Amarillo",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_8163_2.jpg?v=1757354086&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_8163_2.jpg?v=1757354086&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-azulino-copia",desc:"Color amarillo vibrante. Perfecto para destacar en la playa."},
{id:5,name:"Poncho Camden Anaranjado",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_1382.jpg?v=1755605489&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_1382.jpg?v=1755605489&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-anaranjado",desc:"Color anaranjado. Corte amplio para libertad total."},
{id:6,name:"Poncho Camden Azul Marino - Celeste",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_51684.jpg?v=1768268296&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_51684.jpg?v=1768268296&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-azul-marino-celeste",desc:"Azul marino con toques celestes. Calidez y comodidad superior."},
{id:7,name:"Poncho Camden Negro - Amarillo",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_5192_4.jpg?v=1757350290&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_5192_4.jpg?v=1757350290&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-negro",desc:"Negro con detalles amarillos. Estilo con personalidad."},
{id:8,name:"Poncho Camden Negro - Rojo Vino",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_5076_2_90e59491-1e3f-439c-9b13-33bdd0083f0a.jpg?v=1768267591&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_5076_2_90e59491-1e3f-439c-9b13-33bdd0083f0a.jpg?v=1768267591&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-negro-rojo-vino",desc:"Negro con rojo vino. Elegancia y funcionalidad."},
{id:9,name:"Poncho Camden Negro - Rosa",price:200,image:"https://camdenperu.com/cdn/shop/files/7D422DC1-B6F3-4245-BD84-E291C2C1ABE5_e42df187-c9a4-4969-a9a7-85f48d354397.jpg?v=1768267951&width=533",images:["https://camdenperu.com/cdn/shop/files/7D422DC1-B6F3-4245-BD84-E291C2C1ABE5_e42df187-c9a4-4969-a9a7-85f48d354397.jpg?v=1768267951&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-negro-rosa",desc:"Negro con rosa. Suavidad y estilo."},
{id:10,name:"Poncho Camden Verde Olivo - Rosado Coral",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_19912.jpg?v=1768266641&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_19912.jpg?v=1768266641&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-verde-olivo-rosado-coral",desc:"Verde olivo con rosado coral. Naturaleza y estilo."},
{id:11,name:"Poncho Camden Azulino - Rojo",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_8290_2.jpg?v=1755606920&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_8290_2.jpg?v=1755606920&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-azulino-rojo",desc:"Azulino con rojo. Combinacion audaz y moderna."},
{id:12,name:"Poncho Camden Rosa - Negro Plomizo",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_0923_5a508192-8461-4f05-a785-c10aee1e1457.jpg?v=1768262891&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_0923_5a508192-8461-4f05-a785-c10aee1e1457.jpg?v=1768262891&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-rosa-negro-plomizo",desc:"Rosa con negro plomizo. Feminidad y elegancia."},
{id:13,name:"Poncho Camden Azulino - Verde",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_5330.jpg?v=1768261783&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_5330.jpg?v=1768261783&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-azulino-verde",desc:"Azulino con verde. Frescura y naturaleza."},
{id:14,name:"Poncho Camden Lila",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_0119.jpg?v=1768261607&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_0119.jpg?v=1768261607&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-lila",desc:"Color lila. Unico y que te define."},
{id:15,name:"Poncho Camden Verde",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_8192.jpg?v=1757359848&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_8192.jpg?v=1757359848&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-verde",desc:"Verde natural. Conecta con la naturaleza."},
{id:16,name:"Poncho Camden Celeste",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_8119.jpg?v=1757353630&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_8119.jpg?v=1757353630&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-celeste",desc:"Celeste. Cielo y mar en una sola prenda."},
{id:17,name:"Poncho Camden Azulino",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_5202_2.jpg?v=1754364394&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_5202_2.jpg?v=1754364394&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-azulino",desc:"Azulino clasico y versatil."},
{id:18,name:"Poncho Camden Bronce",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_5245_2.jpg?v=1754364744&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_5245_2.jpg?v=1754364744&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-bronce",desc:"Bronce. Calidez y elegancia."},
{id:19,name:"Poncho Camden Turquesa",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_6964.jpg?v=1768267770&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6964.jpg?v=1768267770&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-bronce-turquesa",desc:"Turquesa. Aguas cristalinas en tu estilo."},
{id:20,name:"Poncho Camden Camote",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_6975.jpg?v=1751930214&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6975.jpg?v=1751930214&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-camote",desc:"Camote. Tono terroso y natural."},
{id:21,name:"Poncho Camden Verde Olivo - Lila",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_6642.jpg?v=1755609160&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6642.jpg?v=1755609160&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-olivo",desc:"Verde olivo con lila. Unica combinacion."},
{id:22,name:"Poncho Camden Rojo Vino",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_5094_2.jpg?v=1754365335&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_5094_2.jpg?v=1754365335&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-rojo-vino",desc:"Rojo vino. Pasion y elegancia."},
{id:23,name:"Poncho Camden Rojo - Morado Camote",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_9688_2.jpg?v=1768270839&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_9688_2.jpg?v=1768270839&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-rojo-morado-camote",desc:"Rojo con morado camote. Creatividad y estilo."},
{id:24,name:"Poncho Camden Rojo - Turquesa",price:200,image:"https://camdenperu.com/cdn/shop/files/E65DB4A8-5CC4-4B3E-8182-68AA41186921_fdab80e0-254a-4c60-97be-bfffb7a3205c.jpg?v=1747929338&width=533",images:["https://camdenperu.com/cdn/shop/files/E65DB4A8-5CC4-4B3E-8182-68AA41186921_fdab80e0-254a-4c60-97be-bfffb7a3205c.jpg?v=1747929338&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-rojo",desc:"Rojo con turquesa. Fuego y agua."},
{id:25,name:"Poncho Camden Azul Marino - Anaranjado",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_0963_2.jpg?v=1757360779&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_0963_2.jpg?v=1757360779&width=1000"],category:"adulto",inStock:true,slug:"poncho-camden-azul-marino",desc:"Azul marino con anaranjado. Contraste vibrante."},
{id:26,name:"Agua Natural de Coco",price:10,image:"https://camdenperu.com/cdn/shop/files/IMG_6504_2.jpg?v=1757631032&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6504_2.jpg?v=1757631032&width=1000"],category:"natural",inStock:true,badge:"Natural",slug:"agua-natural-de-coco-directo-del-coco",desc:"Agua de coco 100% natural. Hidratacion pura del peru."},
{id:101,name:"Poncho Ninos Negro - Capucha Azul",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_6847.jpg?v=1760035832&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6847.jpg?v=1760035832&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-negro-con-capucha-azul",desc:"Poncho para ninos. Negro con capucha azul."},
{id:102,name:"Poncho Ninos Anaranjado - Celeste",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3445.jpg?v=1768322693&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3445.jpg?v=1768322693&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-anaranjado-celeste",desc:"Anaranjado con celeste. Colores vibrantes."},
{id:103,name:"Poncho Ninos Azul Marino - Anaranjado",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3507.jpg?v=1768324624&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3507.jpg?v=1768324624&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-azul-marino-anaranjado",desc:"Azul marino con anaranjado. Estilo y comodidad."},
{id:104,name:"Poncho Ninos Azul Marino - Rosado Coral",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3500.jpg?v=1768324944&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3500.jpg?v=1768324944&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-azul-marino-rosado-coral",desc:"Azul marino con rosado coral. Dualidad y color."},
{id:105,name:"Poncho Ninos Morado - Turquesa",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3550.jpg?v=1768321189&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3550.jpg?v=1768321189&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-morado-con-capucha-turquesa",desc:"Morado con turquesa. Magia y aventura."},
{id:106,name:"Poncho Ninos Negro - Verde",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_6851.jpg?v=1760036339&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6851.jpg?v=1760036339&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-negro-con-capucha-verde-copia",desc:"Negro con verde. Naturaleza y misterio."},
{id:107,name:"Poncho Ninos Rojo Vino - Turquesa",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_8142.jpg?v=1760037269&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_8142.jpg?v=1760037269&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-rojo-vino-con-turquesa",desc:"Rojo vino con turquesa. Pasion y aventura."},
{id:108,name:"Poncho Ninos Rosado - Anaranjado",price:200,image:"https://camdenperu.com/cdn/shop/files/pninos.fucsianaranjado1_45344b92-b168-4f4a-9653-58b284569055.jpg?v=1768320366&width=533",images:["https://camdenperu.com/cdn/shop/files/pninos.fucsianaranjado1_45344b92-b168-4f4a-9653-58b284569055.jpg?v=1768320366&width=1000"],category:"ninos",inStock:true,slug:"poncho-cambiador-ninos-rosa-chicle",desc:"Rosado con anaranjado. Alegria y color."}
];

const STORE_WHATSAPP='51979359261';
let cart=JSON.parse(localStorage.getItem('camden_cart'))||[];
let detailQty=1;

function sendWhatsAppOrder(o){
let t=o.items.map(i=>`  - ${i.name} x${i.qty} = S/. ${(i.price*i.qty).toFixed(2)}`).join('\n');
const p={yape:'Yape',plin:'Plin',transferencia:'Transferencia bancaria',efectivo:'Efectivo contra entrega'};
const m=`*Nuevo Pedido Camden Peru* \u{1F6D2}\n\n*Pedido:* ${o.id}\n*Cliente:* ${o.customer.nombre}\n*Telefono:* ${o.customer.telefono}\n*Email:* ${o.customer.email}\n\n*Productos:*\n${t}\n\n*Total:* S/. ${o.total.toFixed(2)}\n*Metodo de pago:* ${p[o.payment]}\n*Direccion:* ${o.customer.direccion}, ${o.customer.departamento}\n*Referencia:* ${o.customer.referencia||'N/A'}`;
window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(m)}`,'_blank');
}

function saveCart(){localStorage.setItem('camden_cart',JSON.stringify(cart));updateCartCount();renderCartSidebar()}

function addToCart(id,qty=1){
const p=PRODUCTS.find(x=>x.id===id);if(!p||!p.inStock)return;
const e=cart.find(x=>x.id===id);
if(e)e.qty+=qty;else cart.push({id,name:p.name,price:p.price,image:p.image,qty});
saveCart();showCartNotification(p.name);
}

function removeFromCart(id){cart=cart.filter(x=>x.id!==id);saveCart()}
function updateCartQty(id,q){const i=cart.find(x=>x.id===id);if(i){i.qty=Math.max(1,q);saveCart()}}
function getCartTotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}
function getCartCount(){return cart.reduce((s,i)=>s+i.qty,0)}
function updateCartCount(){const e=document.querySelector('.cart-count');if(e)e.textContent=getCartCount()}

function showCartNotification(n){
const d=document.createElement('div');d.className='cart-notification';
d.innerHTML=`<span>"${n}" agregado al carrito</span>`;
document.body.appendChild(d);setTimeout(()=>d.classList.add('show'),10);
setTimeout(()=>{d.classList.remove('show');setTimeout(()=>d.remove(),300)},2500);
}

function renderCartSidebar(){
const s=document.getElementById('cartSidebar'),c=document.getElementById('cartItems'),
t=document.getElementById('cartTotal'),em=document.getElementById('cartEmpty'),f=document.getElementById('cartFooter');
if(!s)return;
if(!cart.length){em.style.display='block';f.style.display='none';c.innerHTML='';return}
em.style.display='none';f.style.display='block';
c.innerHTML=cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div class="cart-item__info"><h4>${i.name}</h4><span class="cart-item__price">S/. ${i.price.toFixed(2)}</span><div class="cart-item__qty"><button onclick="updateCartQty(${i.id},${i.qty-1})">-</button><span>${i.qty}</span><button onclick="updateCartQty(${i.id},${i.qty+1})">+</button></div></div><button class="cart-item__remove" onclick="removeFromCart(${i.id})">&times;</button></div>`).join('');
t.textContent=`S/. ${getCartTotal().toFixed(2)}`;
}

function toggleCart(){
const s=document.getElementById('cartSidebar'),o=document.getElementById('cartOverlay');
s.classList.toggle('active');o.classList.toggle('active');
document.body.style.overflow=s.classList.contains('active')?'hidden':'';
}

function getRoute(){const h=window.location.hash.slice(1)||'home',p=h.split('/');return{page:p[0],param:p[1]||null}}
function navigate(page,param=null){window.location.hash=param?`${page}/${param}`:page}

function renderPage(){
const{page,param}=getRoute(),m=document.getElementById('mainContent');
document.querySelectorAll('.header__nav a,.mobile-menu nav a').forEach(l=>{
l.classList.remove('active');const h=l.getAttribute('href');
if(h===`#${page}`||(page==='home'&&h==='inicio'))l.classList.add('active');
});
switch(page){
case'home':renderHome(m);break;case'productos':renderProducts(m,'adulto');break;case'adultos':renderHome(m);setTimeout(()=>{const el=document.getElementById('adultos');if(el)el.scrollIntoView({behavior:'smooth'})},100);break;
case'ninos':renderProducts(m,'ninos');break;case'coco':renderProducts(m,'natural');break;
case'producto':renderProductDetail(m,param);break;case'checkout':renderCheckout(m);break;
case'confirmacion':renderConfirmation(m);break;default:renderHome(m);
}
window.scrollTo({top:0,behavior:'smooth'});initScrollAnimations();initAutoScroll();
}

function renderProductCard(p){
return`<a href="#producto/${p.slug}" class="product-card"><div class="product-card__image"><img src="${p.image}" alt="${p.name}" loading="lazy">${p.badge?`<span class="product-card__badge">${p.badge}</span>`:''}${!p.inStock?'<span class="product-card__badge product-card__badge--sold">Agotado</span>':''}</div><div class="product-card__info"><h3>${p.name}</h3><span class="product-card__price">S/. ${p.price.toFixed(2)}</span></div></a>`;
}

function renderHome(c){
const f=PRODUCTS.filter(p=>p.inStock&&p.category==='adulto');
const k=PRODUCTS.filter(p=>p.category==='ninos'&&p.inStock);
c.innerHTML=`
<section class="hero"><div class="hero__slides"><div class="hero__slide hero__slide--active" style="background-image:url('https://camdenperu.com/cdn/shop/files/IMG_6975.jpg?v=1751930214&width=1920')"></div><div class="hero__slide" style="background-image:url('https://camdenperu.com/cdn/shop/files/E65DB4A8-5CC4-4B3E-8182-68AA41186921_fdab80e0-254a-4c60-97be-bfffb7a3205c.jpg?v=1747929338&width=1920')"></div></div><div class="hero__overlay"></div><div class="hero__content"><span class="hero__badge">100% Peruano</span><h1 class="hero__title"><span class="hero__title-line">Elegancia</span><span class="hero__title-line hero__title-line--accent">que abriga</span></h1><p class="hero__subtitle">Ponchos disenados para quienes viven entre el agua y la ciudad. Comodidad, estilo y funcionalidad peruana.</p><div class="hero__cta"><a href="#adultos" class="btn btn--primary">Ver Coleccion</a><a href="#nosotros" class="btn btn--outline">Nuestra Historia</a></div></div></section>
<section class="features-strip"><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg><span>Hecho con amor</span></div><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>100% Peruano</span></div><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg><span>Envio rapido</span></div><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20,12 20,22 4,22 4,12"/><rect x="2" y="7" width="20" height="5" rx="1"/></svg><span>Pago seguro</span></div></section>
<section class="about" id="nosotros"><div class="about__container"><div class="about__image-wrapper"><img src="https://camdenperu.com/cdn/shop/files/DSC08946.jpg?v=1750972557&width=800" alt="CAMDEN Peru" class="about__image" loading="lazy"><div class="about__image-accent"></div></div><div class="about__content"><span class="section-tag">Nuestra Historia</span><h2 class="section-title">Tu comodidad es esencial</h2><p class="about__text">CAMDEN nacio en Peru: crear ponchos que combinen elegancia, comodidad y funcionalidad. Cada prena te acompana desde el agua hasta tu hogar.</p><p class="about__text">Mangas amplias que te dan libertad al moverte, mientras te protegen del viento y mantienen tu cuerpo seco.</p><div class="about__stats"><div class="about__stat"><span class="about__stat-number">100%</span><span class="about__stat-label">Producto Peruano</span></div><div class="about__stat"><span class="about__stat-number">Premium</span><span class="about__stat-label">Calidad Superior</span></div></div></div></div></section>
<section class="products" id="adultos"><div class="products__container"><div class="products__header"><div class="products__header-text"><span class="section-tag">Lo mas vendido</span><h2 class="section-title">Ponchos para Adultos</h2><p class="products__description">Elegancia que abriga, comodidad y color!</p></div><a href="#productos" class="btn btn--primary">Ver todos</a></div><div class="products__grid products__grid--scroll products__grid--auto" id="scrollAdultos">${f.map(p=>renderProductCard(p)).join('')}${f.map(p=>renderProductCard(p)).join('')}</div><div class="products__controls"><button onclick="pauseAutoScroll('scrollAdultos')" title="Pausar">&#9208;</button><button onclick="resumeAutoScroll('scrollAdultos')" title="Reanudar">&#9654;</button></div></div></section>
<section class="highlights"><div class="highlights__container"><div class="highlight-card highlight-card--large"><img src="https://camdenperu.com/cdn/shop/files/IMG_5148_2.jpg?v=1751654678&width=1200" alt="El cambiador premium" loading="lazy"><div class="highlight-card__overlay"><span class="highlight-card__tag">Premium</span><h3>El cambiador premium</h3><p>Comodidad, caracter y funcionalidad.</p><a href="#productos" class="btn btn--white">Ver coleccion</a></div></div><div class="highlight-card"><img src="https://camdenperu.com/cdn/shop/files/IMG_5308.jpg?v=1768271922&width=800" alt="El color que te define" loading="lazy"><div class="highlight-card__overlay"><span class="highlight-card__tag">Estilo</span><h3>El color que te define</h3><p>Muchos colores para ti.</p><a href="#productos" class="btn btn--white">Ver coleccion</a></div></div><div class="highlight-card"><img src="https://camdenperu.com/cdn/shop/files/DSC08637.jpg?v=1750786807&width=800" alt="Refleja lo que eres" loading="lazy"><div class="highlight-card__overlay"><span class="highlight-card__tag">Elegancia</span><h3>Refleja lo que eres</h3><p>Diseno que acompana tu ritmo.</p><a href="#productos" class="btn btn--white">Ver coleccion</a></div></div></div></section>
<section class="products" id="kids" style="background:var(--white)"><div class="products__container"><div class="products__header"><div class="products__header-text"><span class="section-tag">Para los mas pequenos</span><h2 class="section-title">Ponchos para Ninos</h2><p class="products__description">Disenos divertidos y funcionales.</p></div><a href="#ninos" class="btn btn--primary">Ver todos</a></div><div class="products__grid products__grid--scroll products__grid--auto" id="scrollNinos">${k.map(p=>renderProductCard(p)).join('')}${k.map(p=>renderProductCard(p)).join('')}</div><div class="products__controls"><button onclick="pauseAutoScroll('scrollNinos')" title="Pausar">&#9208;</button><button onclick="resumeAutoScroll('scrollNinos')" title="Reanudar">&#9654;</button></div></div></section>
<section class="benefits"><div class="benefits__container"><span class="section-tag">Por que elegirnos</span><h2 class="section-title">Calidad que se siente</h2><div class="benefits__grid"><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><h4>Mangas amplias</h4><p>Libertad al moverte.</p></div><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><h4>Secado rapido</h4><p>Del agua hasta casa.</p></div><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg></div><h4>Diseno peruano</h4><p>Cultura peruana.</p></div><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h4>Durabilidad</h4><p>Para perdurar.</p></div></div></div></section>
<section class="cta-banner"><div class="cta-banner__container"><h2>Tu energia. Tu elegancia.</h2><p>Seguridad y estilo.</p><a href="#productos" class="btn btn--white">Explorar tienda</a></div></section>
<section class="newsletter"><div class="newsletter__container"><div class="newsletter__content"><h3>Subscribete y recibe novedades</h3><p>Ofertas exclusivas directas a tu correo.</p></div><form class="newsletter__form" id="newsletterForm"><input type="email" placeholder="Tu correo electronico" required><button type="submit" class="btn btn--primary">Suscribirme</button></form></div></section>`;
}

function renderProducts(c,cat){
const ps=PRODUCTS.filter(p=>p.category===cat);
const t={adulto:'Ponchos para Adultos',ninos:'Ponchos para Ninos',natural:'Productos Naturales'};
c.innerHTML=`<section class="page-header"><h1>${t[cat]}</h1><p>100% Producto Peruano - Envios a todo el pais</p></section><section class="products"><div class="products__container"><div class="products__grid">${ps.map(p=>renderProductCard(p)).join('')}</div></div></section>`;
}

function renderProductDetail(c,slug){
const p=PRODUCTS.find(x=>x.slug===slug);
if(!p){c.innerHTML='<section class="page-header"><h1>Producto no encontrado</h1><a href="#home" class="btn btn--primary">Volver al inicio</a></section>';return}
const r=PRODUCTS.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4);
c.innerHTML=`<section class="product-detail"><div class="product-detail__container"><div class="product-detail__gallery"><div class="product-detail__main-image"><img src="${p.images[0]}" alt="${p.name}" id="mainProductImage"></div>${p.images.length>1?`<div class="product-detail__thumbs">${p.images.map((img,i)=>`<button class="product-detail__thumb ${i===0?'active':''}" onclick="changeMainImage('${img}',this)"><img src="${img}" alt="${p.name}"></button>`).join('')}</div>`:''}</div><div class="product-detail__info"><span class="section-tag">CAMDEN PERU</span><h1 class="product-detail__title">${p.name}</h1><div class="product-detail__price">S/. ${p.price.toFixed(2)}</div><p class="product-detail__desc">${p.desc}</p><div class="product-detail__sizes"><h4>Guia de tallas</h4><div class="size-options"><div class="size-option"><strong>Small:</strong> 100cm largo x 61cm ancho</div><div class="size-option"><strong>Grande:</strong> 110cm largo x 85cm ancho</div></div></div>${p.inStock?`<div class="product-detail__qty"><label>Cantidad</label><div class="qty-control"><button onclick="changeDetailQty(-1)">-</button><span id="detailQty">1</span><button onclick="changeDetailQty(1)">+</button></div></div><button class="btn btn--primary btn--full" onclick="addToCartFromDetail(${p.id})"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> Agregar al carrito</button>`:'<button class="btn btn--primary btn--full" disabled style="opacity:0.5;cursor:not-allowed;">Agotado</button>'}<div class="product-detail__features"><div class="feature"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg><span>Hecho con amor en Peru</span></div><div class="feature"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>100% Producto Peruano</span></div><div class="feature"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,12 20,22 4,22 4,12"/><rect x="2" y="7" width="20" height="5" rx="1"/></svg><span>Envio a todo el pais</span></div></div></div></div></section>${r.length?`<section class="products" style="background:var(--light)"><div class="products__container"><div class="products__header"><span class="section-tag">Te puede interesar</span><h2 class="section-title">Productos relacionados</h2></div><div class="products__grid">${r.map(p=>renderProductCard(p)).join('')}</div></div></section>`:''}`;
}

function changeDetailQty(d){detailQty=Math.max(1,detailQty+d);document.getElementById('detailQty').textContent=detailQty}
function addToCartFromDetail(id){addToCart(id,detailQty);detailQty=1}
function changeMainImage(s,b){document.getElementById('mainProductImage').src=s;document.querySelectorAll('.product-detail__thumb').forEach(t=>t.classList.remove('active'));b.classList.add('active')}

function renderCheckout(c){
if(!cart.length){c.innerHTML='<section class="page-header"><h1>Tu carrito esta vacio</h1><a href="#productos" class="btn btn--primary">Ver productos</a></section>';return}
c.innerHTML=`<section class="page-header"><h1>Finalizar compra</h1><p>Completa tus datos</p></section><section class="checkout"><div class="checkout__container"><form class="checkout__form" id="checkoutForm" onsubmit="processPayment(event)"><div class="checkout__section"><h3>Informacion personal</h3><div class="form-row"><div class="form-group"><label>Nombre completo *</label><input type="text" name="nombre" required placeholder="Juan Perez"></div><div class="form-group"><label>Correo electronico *</label><input type="email" name="email" required placeholder="juan@email.com"></div></div><div class="form-row"><div class="form-group"><label>Telefono *</label><input type="tel" name="telefono" required placeholder="999 888 777"></div><div class="form-group"><label>DNI</label><input type="text" name="dni" placeholder="12345678"></div></div></div><div class="checkout__section"><h3>Direccion de envio</h3><div class="form-row"><div class="form-group"><label>Departamento *</label><select name="departamento" required><option value="">Seleccionar</option><option>Lima</option><option>Arequipa</option><option>Trujillo</option><option>Cusco</option><option>Chiclayo</option><option>Ica</option><option>Huancayo</option><option>Piura</option><option>Tacna</option><option>Otro</option></select></div><div class="form-group"><label>Provincia *</label><input type="text" name="provincia" required placeholder="Tu provincia"></div></div><div class="form-row"><div class="form-group"><label>Direccion completa *</label><input type="text" name="direccion" required placeholder="Av. Principal 123"></div><div class="form-group"><label>Referencia</label><input type="text" name="referencia" placeholder="Frente al parque"></div></div></div><div class="checkout__section"><h3>Metodo de pago</h3><div class="payment-methods"><label class="payment-method active"><input type="radio" name="pago" value="yape" checked onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Yape</strong><span>Pago inmediato</span></div></label><label class="payment-method"><input type="radio" name="pago" value="plin" onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Plin</strong><span>Pago inmediato</span></div></label><label class="payment-method"><input type="radio" name="pago" value="transferencia" onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Transferencia</strong><span>BCP, Interbank, BBVA</span></div></label><label class="payment-method"><input type="radio" name="pago" value="efectivo" onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Efectivo</strong><span>Contra entrega</span></div></label></div></div><button type="submit" class="btn btn--primary btn--full btn--large"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Confirmar pedido - S/. ${getCartTotal().toFixed(2)}</button></form><div class="checkout__summary"><h3>Resumen del pedido</h3><div class="checkout__items">${cart.map(i=>`<div class="checkout__item"><img src="${i.image}" alt="${i.name}"><div class="checkout__item-info"><span>${i.name}</span><span class="checkout__item-qty">x${i.qty}</span></div><span class="checkout__item-price">S/. ${(i.price*i.qty).toFixed(2)}</span></div>`).join('')}</div><div class="checkout__totals"><div class="checkout__total-row"><span>Subtotal</span><span>S/. ${getCartTotal().toFixed(2)}</span></div><div class="checkout__total-row"><span>Envio</span><span>Calcular</span></div><div class="checkout__total-row checkout__total-row--final"><span>Total</span><span>S/. ${getCartTotal().toFixed(2)}</span></div></div></div></div></section>`;
}

function togglePaymentMethod(r){document.querySelectorAll('.payment-method').forEach(m=>m.classList.remove('active'));r.closest('.payment-method').classList.add('active')}

function processPayment(e){
e.preventDefault();const f=new FormData(e.target),id='CMP-'+Date.now().toString(36).toUpperCase();
const o={id,items:[...cart],total:getCartTotal(),customer:{nombre:f.get('nombre'),email:f.get('email'),telefono:f.get('telefono'),direccion:f.get('direccion'),departamento:f.get('departamento'),referencia:f.get('referencia')},payment:f.get('pago'),date:new Date().toISOString()};
localStorage.setItem('camden_last_order',JSON.stringify(o));cart=[];saveCart();navigate('confirmacion');
setTimeout(()=>sendWhatsAppOrder(o),500);
}

function renderConfirmation(c){
const o=JSON.parse(localStorage.getItem('camden_last_order'));
if(!o){c.innerHTML='<section class="page-header"><h1>No hay pedido reciente</h1><a href="#home" class="btn btn--primary">Volver al inicio</a></section>';return}
const p={yape:'Yape',plin:'Plin',transferencia:'Transferencia bancaria',efectivo:'Efectivo contra entrega'};
c.innerHTML=`<section class="confirmation"><div class="confirmation__container"><div class="confirmation__icon">&#10003;</div><h1>Pedido confirmado!</h1><p class="confirmation__id">Pedido: <strong>${o.id}</strong></p><p class="confirmation__msg">Gracias <strong>${o.customer.nombre}</strong>, tu pedido ha sido registrado.</p><div class="confirmation__details"><div class="confirmation__detail"><h4>Metodo de pago</h4><p>${p[o.payment]}</p></div><div class="confirmation__detail"><h4>Direccion</h4><p>${o.customer.direccion}, ${o.customer.departamento}</p></div><div class="confirmation__detail"><h4>Total</h4><p class="confirmation__total">S/. ${o.total.toFixed(2)}</p></div></div><p class="confirmation__contact">Nos comunicaremos al <strong>${o.customer.telefono}</strong> para coordinar la entrega.</p><div class="confirmation__actions"><a href="#home" class="btn btn--primary">Volver al inicio</a><button class="btn btn--whatsapp" onclick="sendWhatsAppOrder(JSON.parse(localStorage.getItem('camden_last_order')))"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Enviar por WhatsApp</button></div></div></section>`;
}

function initScrollAnimations(){
document.querySelectorAll('.product-card,.benefit-card,.highlight-card,.about__container').forEach(el=>el.classList.add('reveal'));
const o=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}})},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal').forEach(el=>o.observe(el));
}

function pauseAutoScroll(id){const el=document.getElementById(id);if(el)el.classList.add('paused')}
function resumeAutoScroll(id){const el=document.getElementById(id);if(el)el.classList.remove('paused')}

function initAutoScroll(){
document.querySelectorAll('.products__grid--auto').forEach(grid=>{
grid.addEventListener('mouseenter',()=>grid.classList.add('paused'));
grid.addEventListener('mouseleave',()=>grid.classList.remove('paused'));
grid.addEventListener('touchstart',()=>grid.classList.add('paused'),{passive:true});
grid.addEventListener('touchend',()=>setTimeout(()=>grid.classList.remove('paused'),3000),{passive:true});
grid.addEventListener('wheel',e=>{
if(Math.abs(e.deltaX)>Math.abs(e.deltaY))return;
e.preventDefault();
grid.scrollLeft+=e.deltaY;
grid.classList.add('paused');
clearTimeout(grid._wheelTimer);
grid._wheelTimer=setTimeout(()=>grid.classList.remove('paused'),4000);
},{passive:false});
});
}

document.addEventListener('DOMContentLoaded',()=>{
updateCartCount();renderCartSidebar();renderPage();
window.addEventListener('hashchange',renderPage);
setInterval(()=>{const ss=document.querySelectorAll('.hero__slide');if(ss.length<2)return;let a=document.querySelector('.hero__slide--active');if(a){a.classList.remove('hero__slide--active');const n=a.nextElementSibling?.classList.contains('hero__slide')?a.nextElementSibling:ss[0];n.classList.add('hero__slide--active')}},5000);
const f=document.getElementById('newsletterForm');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const b=f.querySelector('button');b.textContent='Suscrito!';f.querySelector('input').value='';setTimeout(()=>b.textContent='Suscribirme',3000)});
const b=document.getElementById('backToTop');
window.addEventListener('scroll',()=>b.classList.toggle('visible',window.scrollY>600));
b?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
initAutoScroll();
});
