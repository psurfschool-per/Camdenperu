const BASE_PRODUCTS=[
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
{id:101,name:"Poncho Niños Negro - Capucha Azul",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_6847.jpg?v=1760035832&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6847.jpg?v=1760035832&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-negro-con-capucha-azul",desc:"Poncho para niños. Negro con capucha azul."},
{id:102,name:"Poncho Niños Anaranjado - Celeste",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3445.jpg?v=1768322693&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3445.jpg?v=1768322693&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-anaranjado-celeste",desc:"Anaranjado con celeste. Colores vibrantes."},
{id:103,name:"Poncho Niños Azul Marino - Anaranjado",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3507.jpg?v=1768324624&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3507.jpg?v=1768324624&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-azul-marino-anaranjado",desc:"Azul marino con anaranjado. Estilo y comodidad."},
{id:104,name:"Poncho Niños Azul Marino - Rosado Coral",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3500.jpg?v=1768324944&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3500.jpg?v=1768324944&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-azul-marino-rosado-coral",desc:"Azul marino con rosado coral. Dualidad y color."},
{id:105,name:"Poncho Niños Morado - Turquesa",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_3550.jpg?v=1768321189&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_3550.jpg?v=1768321189&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-morado-con-capucha-turquesa",desc:"Morado con turquesa. Magia y aventura."},
{id:106,name:"Poncho Niños Negro - Verde",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_6851.jpg?v=1760036339&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_6851.jpg?v=1760036339&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-negro-con-capucha-verde-copia",desc:"Negro con verde. Naturaleza y misterio."},
{id:107,name:"Poncho Niños Rojo Vino - Turquesa",price:200,image:"https://camdenperu.com/cdn/shop/files/IMG_8142.jpg?v=1760037269&width=533",images:["https://camdenperu.com/cdn/shop/files/IMG_8142.jpg?v=1760037269&width=1000"],category:"ninos",inStock:true,slug:"poncho-camden-ninos-rojo-vino-con-turquesa",desc:"Rojo vino con turquesa. Pasion y aventura."},
{id:108,name:"Poncho Niños Rosado - Anaranjado",price:200,image:"https://camdenperu.com/cdn/shop/files/pninos.fucsianaranjado1_45344b92-b168-4f4a-9653-58b284569055.jpg?v=1768320366&width=533",images:["https://camdenperu.com/cdn/shop/files/pninos.fucsianaranjado1_45344b92-b168-4f4a-9653-58b284569055.jpg?v=1768320366&width=1000"],category:"ninos",inStock:true,slug:"poncho-cambiador-ninos-rosa-chicle",desc:"Rosado con anaranjado. Alegria y color."}
];
const PRODUCTS_KEY='camden_products_custom';
const DELETED_KEY='camden_deleted_ids';
function loadProducts(){
  let custom=[];
  let deleted=[];
  try{ custom=JSON.parse(localStorage.getItem(PRODUCTS_KEY)||'[]'); }catch(e){}
  try{ deleted=JSON.parse(localStorage.getItem(DELETED_KEY)||'[]'); }catch(e){}
  const baseFiltered = BASE_PRODUCTS.filter(b=>!deleted.includes(b.id));
  return [...baseFiltered, ...custom];
}
let PRODUCTS = loadProducts();
function saveProducts(){
  const custom = PRODUCTS.filter(pr => !BASE_PRODUCTS.some(b=>b.id===pr.id));
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(custom));
}
function generateSlug(name){
  return name.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') + '-' + Date.now().toString(36).slice(-4);
}
function getNextProductId(){
  return Math.max(...PRODUCTS.map(pr=>pr.id), 0) + 1;
}
function deleteProduct(id){
  if(!confirm('¿Eliminar este producto? Esta acción no se puede deshacer.')) return;
  const isBase = BASE_PRODUCTS.some(b=>b.id===id);
  if(isBase){
    if(!confirm('Es un producto base. ¿Seguro que quieres eliminarlo? Se ocultará localmente.')) return;
    try{
      const del=JSON.parse(localStorage.getItem(DELETED_KEY)||'[]');
      if(!del.includes(id)) del.push(id);
      localStorage.setItem(DELETED_KEY, JSON.stringify(del));
    }catch(e){}
  }
  PRODUCTS = PRODUCTS.filter(pr=>pr.id!==id);
  if(STOCK[id]){ delete STOCK[id]; saveStock(); }
  saveProducts();
  renderAdmin(document.getElementById('mainContent'));
  showCartNotification('Producto eliminado', true);
}


const STORE_WHATSAPP='51979359261';
let cart=JSON.parse(localStorage.getItem('camden_cart'))||[];
let detailQty=1;
let detailSize='grande';

// ========= SISTEMA DE STOCK =========
const STOCK_KEY='camden_stock_v2';
const ADMIN_PASS='camden2026';
const LOW_STOCK_THRESHOLD=5;

function getDefaultStockForProduct(p){
  if(p.category==='natural') return {unico: 40};
  return {small: 12, grande: 12};
}
function loadStock(){
  try{
    const saved=JSON.parse(localStorage.getItem(STOCK_KEY));
    if(saved && Object.keys(saved).length) return saved;
  }catch(e){}
  const initial={};
  PRODUCTS.forEach(p=>{
    initial[p.id]=getDefaultStockForProduct(p);
  });
  // Ejemplo demo: algunos con stock bajo/agotado para visualizar
  initial[2]={small:2, grande:0};
  initial[5]={small:0, grande:3};
  initial[14]={small:1, grande:1};
  localStorage.setItem(STOCK_KEY, JSON.stringify(initial));
  return initial;
}
let STOCK=loadStock();
PRODUCTS.forEach(p=>p.inStock=getTotalStock(p.id)>0);

function saveStock(){ localStorage.setItem(STOCK_KEY, JSON.stringify(STOCK)); }
function getStock(id, size=null){
  const s=STOCK[id];
  if(!s) return 0;
  if(size && s[size]!==undefined) return s[size];
  return Object.values(s).reduce((a,b)=>a+b,0);
}
function getTotalStock(id){ return getStock(id); }
function isOutOfStock(id){ return getTotalStock(id)===0; }
function isLowStock(id){ const t=getTotalStock(id); return t>0 && t<=LOW_STOCK_THRESHOLD; }
function getStockBySize(id){ return STOCK[id]||{}; }
function setStock(id, size, qty){
  if(!STOCK[id]) STOCK[id]=getDefaultStockForProduct(PRODUCTS.find(p=>p.id===id));
  const v=Math.max(0, parseInt(qty)||0);
  if(size) STOCK[id][size]=v;
  else {
    // para categoria natural
    const k=Object.keys(STOCK[id])[0];
    STOCK[id][k]=v;
  }
  saveStock();
  // sincronizar badge inStock para compatibilidad
  const prod=PRODUCTS.find(p=>p.id===id);
  if(prod) prod.inStock=getTotalStock(id)>0;
}
function adjustStock(id, size, delta){
  const cur=getStock(id,size);
  setStock(id,size,cur+delta);
}
function decrementStockForOrder(items){
  items.forEach(it=>{
    const size=it.size || (STOCK[it.id]?.unico!==undefined ? 'unico' : 'grande');
    const s=STOCK[it.id];
    if(!s) return;
    if(s[size]!==undefined){
      s[size]=Math.max(0, s[size]-it.qty);
    } else {
      // si no hay talla exacta, descontar de donde haya
      let remaining=it.qty;
      for(const k of Object.keys(s)){
        const take=Math.min(s[k], remaining);
        s[k]-=take;
        remaining-=take;
        if(remaining<=0) break;
      }
    }
  });
  saveStock();
  PRODUCTS.forEach(p=>p.inStock=getTotalStock(p.id)>0);
}
function getGlobalStats(){
  let totalUnits=0, outOfStock=0, lowStock=0, totalProducts=PRODUCTS.length;
  PRODUCTS.forEach(p=>{
    const t=getTotalStock(p.id);
    totalUnits+=t;
    if(t===0) outOfStock++;
    else if(t<=LOW_STOCK_THRESHOLD) lowStock++;
  });
  return {totalUnits, outOfStock, lowStock, totalProducts};
}

function sendWhatsAppOrder(o){
let t=o.items.map(i=>`  - ${i.name} x${i.qty} = S/. ${(i.price*i.qty).toFixed(2)}`).join('\n');
const p={yape:'Yape',plin:'Plin',transferencia:'Transferencia bancaria',efectivo:'Efectivo contra entrega'};
const m=`*Nuevo Pedido Camden Peru* \u{1F6D2}\n\n*Pedido:* ${o.id}\n*Cliente:* ${o.customer.nombre}\n*Telefono:* ${o.customer.telefono}\n*Email:* ${o.customer.email}\n\n*Productos:*\n${t}\n\n*Total:* S/. ${o.total.toFixed(2)}\n*Metodo de pago:* ${p[o.payment]}\n*Direccion:* ${o.customer.direccion}, ${o.customer.departamento}\n*Referencia:* ${o.customer.referencia||'N/A'}`;
window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(m)}`,'_blank');
}

function saveCart(){localStorage.setItem('camden_cart',JSON.stringify(cart));updateCartCount();renderCartSidebar()}

function addToCart(id,qty=1,size=null){
const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
if(isOutOfStock(id)){showCartNotification('Producto agotado',true);return;}
const stockSize=size || detailSize || (STOCK[id]?.unico!==undefined?'unico':'grande');
const available=getStock(id, stockSize);
if(available!==undefined && STOCK[id][stockSize]!==undefined){
  // validar por talla
  const key=id+'_'+stockSize;
  const e=cart.find(x=>x.cartKey===key);
  const currentQty=e?e.qty:0;
  if(currentQty+qty > available){
    showCartNotification(`Stock insuficiente. Solo quedan ${available} unidades (talla ${stockSize})`,true);
    return;
  }
  if(e)e.qty+=qty;else cart.push({id,cartKey:key,name:p.name + (stockSize!=='unico'?' - Talla '+(stockSize==='small'?'S':'G') : ''),price:p.price,image:p.image,qty,size:stockSize,baseName:p.name});
} else {
  // fallback por stock total
  const totalAvail=getTotalStock(id);
  const e=cart.find(x=>x.id===id && !x.size);
  const cur=e?e.qty:0;
  if(cur+qty>totalAvail){showCartNotification(`Solo quedan ${totalAvail} unidades`,true);return;}
  if(e)e.qty+=qty;else cart.push({id,cartKey:String(id),name:p.name,price:p.price,image:p.image,qty,size:null,baseName:p.name});
}
saveCart();showCartNotification(p.name+(stockSize && stockSize!=='unico' ? ` (Talla ${stockSize==='small'?'S':'G'})`:'' ));
}

function removeFromCart(cartKey){cart=cart.filter(x=>(x.cartKey||String(x.id))!==String(cartKey));saveCart()}
function updateCartQty(cartKey,q){
  const key=String(cartKey);
  const i=cart.find(x=>(x.cartKey||String(x.id))===key);
  if(!i) return;
  const maxStock=i.size?getStock(i.id,i.size):getTotalStock(i.id);
  let newQty=Math.max(1,q);
  if(newQty>maxStock){showCartNotification(`Stock maximo: ${maxStock}`,true);newQty=maxStock;}
  i.qty=newQty;saveCart()
}
function getCartTotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}
function getCartCount(){return cart.reduce((s,i)=>s+i.qty,0)}
function updateCartCount(){const e=document.querySelector('.cart-count');if(e)e.textContent=getCartCount()}

function showCartNotification(n,isError=false){
const d=document.createElement('div');d.className='cart-notification'+(isError?' cart-notification--error':'');
d.innerHTML=`<span>${isError? '⚠️ '+n : `"${n}" agregado al carrito`}</span>`;
document.body.appendChild(d);setTimeout(()=>d.classList.add('show'),10);
setTimeout(()=>{d.classList.remove('show');setTimeout(()=>d.remove(),300)}, isError?3500:2500);
}

function renderCartSidebar(){
const s=document.getElementById('cartSidebar'),c=document.getElementById('cartItems'),
t=document.getElementById('cartTotal'),em=document.getElementById('cartEmpty'),f=document.getElementById('cartFooter');
if(!s)return;
if(!cart.length){em.style.display='block';f.style.display='none';c.innerHTML='';return}
em.style.display='none';f.style.display='block';
c.innerHTML=cart.map(i=>{
 const key=i.cartKey || String(i.id);
 return `<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div class="cart-item__info"><h4>${i.name}</h4><span class="cart-item__price">S/. ${i.price.toFixed(2)}</span><div class="cart-item__qty"><button onclick="updateCartQty('${key}',${i.qty-1})">-</button><span>${i.qty}</span><button onclick="updateCartQty('${key}',${i.qty+1})">+</button></div></div><button class="cart-item__remove" onclick="removeFromCart('${key}')">&times;</button></div>`;
}).join('');
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
case'ninos':renderProducts(m,'ninos');break;
case'producto':renderProductDetail(m,param);break;case'checkout':renderCheckout(m);break;
case'confirmacion':renderConfirmation(m);break;
case'admin':renderAdmin(m);break;
default:renderHome(m);
}
window.scrollTo({top:0,behavior:'smooth'});initScrollAnimations();initAutoScroll();
}

function renderProductCard(p){
const total=getTotalStock(p.id);
const low=isLowStock(p.id);
const out=isOutOfStock(p.id);
let badgeHtml='';
if(out) badgeHtml='<span class="product-card__badge product-card__badge--sold">Agotado</span>';
else if(low) badgeHtml='<span class="product-card__badge product-card__badge--low">Quedan '+total+'</span>';
else if(p.badge) badgeHtml=`<span class="product-card__badge">${p.badge}</span>`;
return`<a href="#producto/${p.slug}" class="product-card ${out?'product-card--out':''}"><div class="product-card__image"><img src="${p.image}" alt="${p.name}" loading="lazy">${badgeHtml}<span class="product-card__stock-hint">${out?'Sin stock': total+' en stock'}</span></div><div class="product-card__info"><h3>${p.name}</h3><span class="product-card__price">S/. ${p.price.toFixed(2)}</span></div></a>`;
}

function renderHome(c){
const f=PRODUCTS.filter(p=>p.inStock&&p.category==='adulto');
const k=PRODUCTS.filter(p=>p.category==='ninos'&&p.inStock);
c.innerHTML=`
<section class="hero"><div class="hero__slides"><div class="hero__slide hero__slide--active" style="background-image:url('https://camdenperu.com/cdn/shop/files/IMG_6975.jpg?v=1751930214&width=1920')"></div><div class="hero__slide" style="background-image:url('https://camdenperu.com/cdn/shop/files/E65DB4A8-5CC4-4B3E-8182-68AA41186921_fdab80e0-254a-4c60-97be-bfffb7a3205c.jpg?v=1747929338&width=1920')"></div></div><div class="hero__overlay"></div><div class="hero__content"><span class="hero__badge">100% Peruano</span><h1 class="hero__title"><span class="hero__title-line">Elegancia</span><span class="hero__title-line hero__title-line--accent">que abriga</span></h1><p class="hero__subtitle">Ponchos diseñados para quienes viven entre el agua y la ciudad. Comodidad, estilo y funcionalidad peruana.</p><div class="hero__cta"><a href="#adultos" class="btn btn--primary">Ver Coleccion</a><a href="#nosotros" class="btn btn--outline">Nuestra Historia</a></div></div></section>
<section class="features-strip"><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg><span>Hecho con amor</span></div><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>100% Peruano</span></div><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg><span>Envio rapido</span></div><div class="features-strip__item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20,12 20,22 4,22 4,12"/><rect x="2" y="7" width="20" height="5" rx="1"/></svg><span>Pago seguro</span></div></section>
<section class="about" id="nosotros"><div class="about__container"><div class="about__image-wrapper"><img src="https://camdenperu.com/cdn/shop/files/DSC08946.jpg?v=1750972557&width=800" alt="CAMDEN Peru" class="about__image" loading="lazy"><div class="about__image-accent"></div></div><div class="about__content"><span class="section-tag">Nuestra Historia</span><h2 class="section-title">Tu comodidad es esencial</h2><p class="about__text">CAMDEN nacio en Peru: crear ponchos que combinen elegancia, comodidad y funcionalidad. Cada prena te acompana desde el agua hasta tu hogar.</p><p class="about__text">Mangas amplias que te dan libertad al moverte, mientras te protegen del viento y mantienen tu cuerpo seco.</p><div class="about__stats"><div class="about__stat"><span class="about__stat-number">100%</span><span class="about__stat-label">Producto Peruano</span></div><div class="about__stat"><span class="about__stat-number">Premium</span><span class="about__stat-label">Calidad Superior</span></div></div></div></div></section>
<section class="products" id="adultos"><div class="products__container"><div class="products__header"><div class="products__header-text"><span class="section-tag">Lo mas vendido</span><h2 class="section-title">Ponchos para Adultos</h2><p class="products__description">Elegancia que abriga, comodidad y color!</p></div><a href="#productos" class="btn btn--primary">Ver todos</a></div><div class="products__grid products__grid--scroll products__grid--auto" id="scrollAdultos">${f.map(p=>renderProductCard(p)).join('')}${f.map(p=>renderProductCard(p)).join('')}</div></div></section>
<section class="highlights"><div class="highlights__container"><div class="highlight-card highlight-card--large"><img src="https://camdenperu.com/cdn/shop/files/IMG_5148_2.jpg?v=1751654678&width=1200" alt="El cambiador premium" loading="lazy"><div class="highlight-card__overlay"><span class="highlight-card__tag">Premium</span><h3>El cambiador premium</h3><p>Comodidad, caracter y funcionalidad.</p><a href="#productos" class="btn btn--white">Ver coleccion</a></div></div><div class="highlight-card"><img src="https://camdenperu.com/cdn/shop/files/IMG_5308.jpg?v=1768271922&width=800" alt="El color que te define" loading="lazy"><div class="highlight-card__overlay"><span class="highlight-card__tag">Estilo</span><h3>El color que te define</h3><p>Muchos colores para ti.</p><a href="#productos" class="btn btn--white">Ver coleccion</a></div></div><div class="highlight-card"><img src="https://camdenperu.com/cdn/shop/files/DSC08637.jpg?v=1750786807&width=800" alt="Refleja lo que eres" loading="lazy"><div class="highlight-card__overlay"><span class="highlight-card__tag">Elegancia</span><h3>Refleja lo que eres</h3><p>Diseño que acompaña tu ritmo.</p><a href="#productos" class="btn btn--white">Ver coleccion</a></div></div></div></section>
<section class="products" id="kids" style="background:var(--white)"><div class="products__container"><div class="products__header"><div class="products__header-text"><span class="section-tag">Para los más pequeños</span><h2 class="section-title">Ponchos para Niños</h2><p class="products__description">Diseños divertidos y funcionales.</p></div><a href="#ninos" class="btn btn--primary">Ver todos</a></div><div class="products__grid products__grid--scroll products__grid--auto" id="scrollNinos">${k.map(p=>renderProductCard(p)).join('')}${k.map(p=>renderProductCard(p)).join('')}</div></div></section>
<section class="benefits"><div class="benefits__container"><span class="section-tag">Por qué elegirnos</span><h2 class="section-title">Calidad que se siente</h2><div class="benefits__grid"><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><h4>Mangas amplias</h4><p>Libertad al moverte.</p></div><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><h4>Secado rápido</h4><p>Del agua hasta casa.</p></div><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg></div><h4>Diseño peruano</h4><p>Cultura peruana.</p></div><div class="benefit-card"><div class="benefit-card__icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h4>Durabilidad</h4><p>Para perdurar.</p></div></div></div></section>
<section class="cta-banner"><div class="cta-banner__container"><h2>Tu energia. Tu elegancia.</h2><p>Seguridad y estilo.</p><a href="#productos" class="btn btn--white">Explorar tienda</a></div></section>
<section class="newsletter"><div class="newsletter__container"><div class="newsletter__content"><h3>Subscribete y recibe novedades</h3><p>Ofertas exclusivas directas a tu correo.</p></div><form class="newsletter__form" id="newsletterForm"><input type="email" placeholder="Tu correo electronico" required><button type="submit" class="btn btn--primary">Suscribirme</button></form></div></section>`;
}

function renderProducts(c,cat){
const ps=PRODUCTS.filter(p=>p.category===cat);
const t={adulto:'Ponchos para Adultos',ninos:'Ponchos para Niños'};
c.innerHTML=`<section class="page-header"><h1>${t[cat]}</h1><p>100% Producto Peruano - Envios a todo el pais</p></section><section class="products"><div class="products__container"><div class="products__grid">${ps.map(p=>renderProductCard(p)).join('')}</div></div></section>`;
}

function renderProductDetail(c,slug){
const p=PRODUCTS.find(x=>x.slug===slug);
if(!p){c.innerHTML='<section class="page-header"><h1>Producto no encontrado</h1><a href="#home" class="btn btn--primary">Volver al inicio</a></section>';return}
const r=PRODUCTS.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4);
const stockInfo=getStockBySize(p.id);
const totalStock=getTotalStock(p.id);
const isNatural=p.category==='natural';
let sizeSelector='';
if(isNatural){
  const unicoQty=stockInfo.unico||0;
  sizeSelector=`<div class="product-detail__sizes"><h4>Stock disponible</h4><div class="size-options"><div class="size-option" style="border:1px solid ${unicoQty===0?'#feb2b2':unicoQty<=5?'#fbd38d':'#c6f6d5'};background:${unicoQty===0?'#fff5f5':unicoQty<=5?'#fffaf0':'#f0fff4'}"><strong>Stock:</strong> ${unicoQty} unidades ${unicoQty===0?'- Agotado':unicoQty<=5?'- Ultimas unidades':''}</div></div></div>`;
  detailSize='unico';
} else {
  const sQty=stockInfo.small||0, gQty=stockInfo.grande||0;
  if(!detailSize || detailSize==='unico') detailSize=gQty>0?'grande':(sQty>0?'small':'grande');
  sizeSelector=`<div class="product-detail__sizes"><h4>Selecciona talla</h4><div class="size-selector"><button class="size-btn ${detailSize==='small'?'active':''}" data-size="small" onclick="selectDetailSize('small')" ${sQty===0?'disabled':''}><strong>Small</strong><span>100x61cm</span><span class="size-stock ${sQty===0?'out':sQty<=5?'low':''}">${sQty===0?'Agotado':sQty+' disp.'}</span></button><button class="size-btn ${detailSize==='grande'?'active':''}" data-size="grande" onclick="selectDetailSize('grande')" ${gQty===0?'disabled':''}><strong>Grande</strong><span>110x85cm</span><span class="size-stock ${gQty===0?'out':gQty<=5?'low':''}">${gQty===0?'Agotado':gQty+' disp.'}</span></button></div><div id="detailStockMsg" class="detail-stock-msg"></div></div>`;
}
const outOfStock=totalStock===0;
const canBuy=!outOfStock && (isNatural ? (stockInfo.unico||0)>0 : getStock(p.id, detailSize)>0);
c.innerHTML=`<section class="product-detail"><div class="product-detail__container"><div class="product-detail__gallery"><div class="product-detail__main-image"><img src="${p.images[0]}" alt="${p.name}" id="mainProductImage"></div>${p.images.length>1?`<div class="product-detail__thumbs">${p.images.map((img,i)=>`<button class="product-detail__thumb ${i===0?'active':''}" onclick="changeMainImage('${img}',this)"><img src="${img}" alt="${p.name}"></button>`).join('')}</div>`:''}</div><div class="product-detail__info"><span class="section-tag">CAMDEN PERU</span><h1 class="product-detail__title">${p.name}</h1><div class="product-detail__price">S/. ${p.price.toFixed(2)}</div><p class="product-detail__desc">${p.desc}</p>${sizeSelector}${!outOfStock?`<div class="product-detail__qty"><label>Cantidad</label><div class="qty-control"><button onclick="changeDetailQty(-1)">-</button><span id="detailQty" data-pid="${p.id}">1</span><button onclick="changeDetailQty(1)">+</button></div></div><button class="btn btn--primary btn--full" id="detailAddBtn" onclick="addToCartFromDetail(${p.id})" ${!canBuy?'disabled style="opacity:0.5;cursor:not-allowed;"':''}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> ${canBuy?'Agregar al carrito':'Agotado en esta talla'}</button>`:'<button class="btn btn--primary btn--full" disabled style="opacity:0.5;cursor:not-allowed;">Agotado - Sin stock</button>'}<div class="product-detail__features"><div class="feature"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg><span>Hecho con amor en Peru</span></div><div class="feature"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>100% Producto Peruano</span></div><div class="feature"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,12 20,22 4,22 4,12"/><rect x="2" y="7" width="20" height="5" rx="1"/></svg><span>Envio a todo el pais</span></div></div></div></div></section>${r.length?`<section class="products" style="background:var(--light)"><div class="products__container"><div class="products__header"><span class="section-tag">Te puede interesar</span><h2 class="section-title">Productos relacionados</h2></div><div class="products__grid">${r.map(p=>renderProductCard(p)).join('')}</div></div></section>`:''}`;
  setTimeout(updateDetailStockMsg,50);
}

function changeDetailQty(d){
  const pId=parseInt(document.getElementById('detailQty')?.dataset.pid||0);
  let max=99;
  if(pId){
    const sz=detailSize||(STOCK[pId]?.unico!==undefined?'unico':'grande');
    max=getStock(pId, sz) || 99;
    const availMsg=document.getElementById('detailStockMsg');
  }
  detailQty=Math.max(1, Math.min(detailQty+d, max));
  const el=document.getElementById('detailQty');
  if(el){ el.textContent=detailQty; el.dataset.pid=pId; }
  updateDetailStockMsg();
}
function selectDetailSize(size){
  detailSize=size;
  document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
  const btn=document.querySelector(`.size-btn[data-size="${size}"]`);
  if(btn) btn.classList.add('active');
  detailQty=1;
  const el=document.getElementById('detailQty');
  if(el) el.textContent='1';
  updateDetailStockMsg();
}
function updateDetailStockMsg(){
  const pid=parseInt(document.getElementById('detailQty')?.dataset.pid||0);
  if(!pid) return;
  const size=detailSize||(STOCK[pid]?.unico!==undefined?'unico':'grande');
  const avail=getStock(pid,size);
  const msg=document.getElementById('detailStockMsg');
  if(!msg) return;
  if(avail===0) msg.innerHTML='<span style="color:#e53e3e">Agotado en talla '+(size==='small'?'S':size==='grande'?'G':size)+'</span>';
  else if(avail<=5) msg.innerHTML='<span style="color:#d69e2e">Quedan '+avail+' unidades</span>';
  else msg.innerHTML='<span style="color:#38a169">'+avail+' en stock</span>';
}
function addToCartFromDetail(id){addToCart(id,detailQty,detailSize);detailQty=1}
function changeMainImage(s,b){document.getElementById('mainProductImage').src=s;document.querySelectorAll('.product-detail__thumb').forEach(t=>t.classList.remove('active'));b.classList.add('active')}

function renderCheckout(c){
if(!cart.length){c.innerHTML='<section class="page-header"><h1>Tu carrito esta vacio</h1><a href="#productos" class="btn btn--primary">Ver productos</a></section>';return}
c.innerHTML=`<section class="page-header"><h1>Finalizar compra</h1><p>Completa tus datos</p></section><section class="checkout"><div class="checkout__container"><form class="checkout__form" id="checkoutForm" onsubmit="processPayment(event)"><div class="checkout__section"><h3>Informacion personal</h3><div class="form-row"><div class="form-group"><label>Nombre completo *</label><input type="text" name="nombre" required placeholder="Juan Perez"></div><div class="form-group"><label>Correo electronico *</label><input type="email" name="email" required placeholder="juan@email.com"></div></div><div class="form-row"><div class="form-group"><label>Telefono *</label><input type="tel" name="telefono" required placeholder="999 888 777"></div><div class="form-group"><label>DNI</label><input type="text" name="dni" placeholder="12345678"></div></div></div><div class="checkout__section"><h3>Direccion de envio</h3><div class="form-row"><div class="form-group"><label>Departamento *</label><select name="departamento" required><option value="">Seleccionar</option><option>Lima</option><option>Arequipa</option><option>Trujillo</option><option>Cusco</option><option>Chiclayo</option><option>Ica</option><option>Huancayo</option><option>Piura</option><option>Tacna</option><option>Otro</option></select></div><div class="form-group"><label>Provincia *</label><input type="text" name="provincia" required placeholder="Tu provincia"></div></div><div class="form-row"><div class="form-group"><label>Direccion completa *</label><input type="text" name="direccion" required placeholder="Av. Principal 123"></div><div class="form-group"><label>Referencia</label><input type="text" name="referencia" placeholder="Frente al parque"></div></div></div><div class="checkout__section"><h3>Metodo de pago</h3><div class="payment-methods"><label class="payment-method active"><input type="radio" name="pago" value="yape" checked onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Yape</strong><span>Pago inmediato</span></div></label><label class="payment-method"><input type="radio" name="pago" value="plin" onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Plin</strong><span>Pago inmediato</span></div></label><label class="payment-method"><input type="radio" name="pago" value="transferencia" onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Transferencia</strong><span>BCP, Interbank, BBVA</span></div></label><label class="payment-method"><input type="radio" name="pago" value="efectivo" onchange="togglePaymentMethod(this)"><div class="payment-method__info"><strong>Efectivo</strong><span>Contra entrega</span></div></label></div></div><button type="submit" class="btn btn--primary btn--full btn--large"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Confirmar pedido - S/. ${getCartTotal().toFixed(2)}</button></form><div class="checkout__summary"><h3>Resumen del pedido</h3><div class="checkout__items">${cart.map(i=>`<div class="checkout__item"><img src="${i.image}" alt="${i.name}"><div class="checkout__item-info"><span>${i.name}</span><span class="checkout__item-qty">x${i.qty}</span></div><span class="checkout__item-price">S/. ${(i.price*i.qty).toFixed(2)}</span></div>`).join('')}</div><div class="checkout__totals"><div class="checkout__total-row"><span>Subtotal</span><span>S/. ${getCartTotal().toFixed(2)}</span></div><div class="checkout__total-row"><span>Envio</span><span>Calcular</span></div><div class="checkout__total-row checkout__total-row--final"><span>Total</span><span>S/. ${getCartTotal().toFixed(2)}</span></div></div></div></div></section>`;
}

function togglePaymentMethod(r){document.querySelectorAll('.payment-method').forEach(m=>m.classList.remove('active'));r.closest('.payment-method').classList.add('active')}

function processPayment(e){
e.preventDefault();
for(const it of cart){
  const avail = it.size ? getStock(it.id, it.size) : getTotalStock(it.id);
  if(it.qty > avail){
    alert('Stock insuficiente para '+(it.baseName||it.name)+'. Disponible: '+avail);
    return;
  }
}
const f=new FormData(e.target),id='CMP-'+Date.now().toString(36).toUpperCase();
const o={id,items:[...cart],total:getCartTotal(),customer:{nombre:f.get('nombre'),email:f.get('email'),telefono:f.get('telefono'),direccion:f.get('direccion'),departamento:f.get('departamento'),referencia:f.get('referencia')},payment:f.get('pago'),date:new Date().toISOString()};
decrementStockForOrder(cart);
localStorage.setItem('camden_last_order',JSON.stringify(o));
try{
  const hist=JSON.parse(localStorage.getItem('camden_stock_history')||'[]');
  hist.unshift({date:new Date().toISOString(), orderId:id, items:o.items.map(i=>({id:i.id,name:i.baseName||i.name,size:i.size,qty:i.qty})), total:o.total});
  localStorage.setItem('camden_stock_history', JSON.stringify(hist.slice(0,100)));
}catch(e){}
cart=[];saveCart();navigate('confirmacion');
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

function pauseAutoScroll(id){const el=document.getElementById(id);if(el){el.classList.add('paused');el._paused=true}}
function resumeAutoScroll(id){const el=document.getElementById(id);if(el){el.classList.remove('paused');el._paused=false}}

function initAutoScroll(){
document.querySelectorAll('.products__grid--auto').forEach(grid=>{
grid._paused=false;
grid._speed=0.5;
grid._direction=1;

function step(){
if(!grid._paused&&grid.isConnected){
const maxScroll=grid.scrollWidth-grid.clientWidth;
if(maxScroll>0){
grid.scrollLeft+=grid._speed*grid._direction;
if(grid.scrollLeft>=maxScroll){grid._direction=-1}
if(grid.scrollLeft<=0){grid._direction=1}
}
}
grid._raf=requestAnimationFrame(step);
}
step();

grid.addEventListener('mouseenter',()=>{grid._paused=true;grid.classList.add('paused')});
grid.addEventListener('mouseleave',()=>{grid._paused=false;grid.classList.remove('paused')});
grid.addEventListener('touchstart',()=>{grid._paused=true;grid.classList.add('paused')},{passive:true});
grid.addEventListener('touchend',()=>{setTimeout(()=>{grid._paused=false;grid.classList.remove('paused')},3000)},{passive:true});
grid.addEventListener('wheel',e=>{
// Permitir scroll vertical de la página; solo convertir a horizontal si es gesto horizontal o Shift
if(Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey){
  // scroll horizontal nativo, pausar auto-scroll sin bloquear página
  grid._paused=true;grid.classList.add('paused');
  clearTimeout(grid._wheelTimer);
  grid._wheelTimer=setTimeout(()=>{grid._paused=false;grid.classList.remove('paused')},2500);
  return;
}
// scroll vertical -> no prevenir, la página hace scroll normal; solo pausar auto-scroll brevemente
grid._paused=true;grid.classList.add('paused');
clearTimeout(grid._wheelTimer);
grid._wheelTimer=setTimeout(()=>{grid._paused=false;grid.classList.remove('paused')},1200);
},{passive:true});
});
}



function openAddProductModal(){
  document.getElementById('addProductModal').classList.add('active');
  document.getElementById('addProductOverlay').classList.add('active');
}
function closeAddProductModal(){
  document.getElementById('addProductModal').classList.remove('active');
  document.getElementById('addProductOverlay').classList.remove('active');
}
function handleAddProduct(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = fd.get('name').trim();
  const category = fd.get('category');
  const price = parseFloat(fd.get('price'));
  const image = fd.get('image').trim();
  const desc = fd.get('desc').trim() || 'Nuevo producto Camden Peru';
  const stockSmall = parseInt(fd.get('stockSmall')||'0');
  const stockGrande = parseInt(fd.get('stockGrande')||'0');
  const stockUnico = parseInt(fd.get('stockUnico')||'0');
  if(!name || !price || !image){ alert('Completa nombre, precio e imagen'); return; }
  const id = getNextProductId();
  const slug = generateSlug(name);
  const newProd = {
    id, name, price, image, images:[image], category, inStock:true, slug, desc,
    badge:'Nuevo'
  };
  PRODUCTS.push(newProd);
  // init stock
  if(category==='natural'){
    STOCK[id] = { unico: stockUnico || 20 };
  } else {
    STOCK[id] = { small: stockSmall||0, grande: stockGrande||0 };
  }
  saveStock();
  saveProducts();
  closeAddProductModal();
  e.target.reset();
  // reset stock fields visibility
  toggleAddStockFields();
  renderAdmin(document.getElementById('mainContent'));
  showCartNotification(name + ' agregado al inventario');
}
function toggleAddStockFields(){
  const cat = document.querySelector('#addProductForm select[name="category"]')?.value;
  const isNatural = cat==='natural';
  const rowSmall = document.getElementById('rowSmall');
  const rowGrande = document.getElementById('rowGrande');
  const rowUnico = document.getElementById('rowUnico');
  if(rowSmall) rowSmall.style.display = isNatural ? 'none' : 'flex';
  if(rowGrande) rowGrande.style.display = isNatural ? 'none' : 'flex';
  if(rowUnico) rowUnico.style.display = isNatural ? 'flex' : 'none';
}

// ========= ADMIN PANEL STOCK =========
let adminFilter='all';
let adminSearch='';
function renderAdmin(c){
  const logged=sessionStorage.getItem('camden_admin')==='1';
  if(!logged){
    c.innerHTML=`<section class="admin-login"><div class="admin-login__box"><h1>Panel de Stock</h1><p>Ingresa la clave de administrador</p><form onsubmit="adminLogin(event)"><input type="password" id="adminPass" placeholder="Clave" required><button type="submit" class="btn btn--primary btn--full">Ingresar</button><p class="admin-hint">Clave por defecto: <code>camden2026</code></p></form><a href="#home" class="btn btn--outline" style="margin-top:12px;color:var(--primary);border-color:var(--primary)">Volver a la tienda</a></div></section>`;
    return;
  }
  const stats=getGlobalStats();
  const hist=JSON.parse(localStorage.getItem('camden_stock_history')||'[]');
  c.innerHTML=`<section class="admin"><div class="admin__container">
    <div class="admin__header"><div><h1>Gestión de Stock</h1><p>${stats.totalProducts} productos · ${stats.totalUnits} unidades totales</p></div><div class="admin__actions"><button class="btn btn--primary" onclick="openAddProductModal()" style="background:var(--accent);border:none">+ Agregar producto</button><button class="btn btn--primary" onclick="exportStockCSV()">Exportar CSV</button><button class="btn btn--outline" style="color:var(--primary);border-color:var(--primary)" onclick="resetStock()">Restaurar stock</button><button class="btn" style="background:#fee2e2;color:#991b1b" onclick="adminLogout()">Salir</button></div></div>
    <div class="admin__stats">
      <div class="admin-stat"><span class="admin-stat__num">${stats.totalUnits}</span><span class="admin-stat__label">Unidades totales</span></div>
      <div class="admin-stat admin-stat--ok"><span class="admin-stat__num">${stats.totalProducts - stats.outOfStock - stats.lowStock}</span><span class="admin-stat__label">Con stock</span></div>
      <div class="admin-stat admin-stat--warn"><span class="admin-stat__num">${stats.lowStock}</span><span class="admin-stat__label">Stock bajo (≤${LOW_STOCK_THRESHOLD})</span></div>
      <div class="admin-stat admin-stat--danger"><span class="admin-stat__num">${stats.outOfStock}</span><span class="admin-stat__label">Agotados</span></div>
    </div>
    <div class="admin__toolbar">
      <input type="text" placeholder="Buscar poncho..." value="${adminSearch}" oninput="adminSearch=this.value;renderAdmin(document.getElementById('mainContent'))" class="admin-search">
      <div class="admin-filters">
        <button class="${adminFilter==='all'?'active':''}" onclick="adminFilter='all';renderAdmin(document.getElementById('mainContent'))">Todos</button>
        <button class="${adminFilter==='low'?'active':''}" onclick="adminFilter='low';renderAdmin(document.getElementById('mainContent'))">Bajo stock</button>
        <button class="${adminFilter==='out'?'active':''}" onclick="adminFilter='out';renderAdmin(document.getElementById('mainContent'))">Agotados</button>
        <button class="${adminFilter==='adulto'?'active':''}" onclick="adminFilter='adulto';renderAdmin(document.getElementById('mainContent'))">Adultos</button>
        <button class="${adminFilter==='ninos'?'active':''}" onclick="adminFilter='ninos';renderAdmin(document.getElementById('mainContent'))">Niños</button>
      </div>
    </div>
    <div class="admin__table-wrap"><table class="admin-table"><thead><tr><th>Producto</th><th>Categoría</th><th>Small</th><th>Grande / Único</th><th>Total</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>
      ${PRODUCTS.filter(p=>{
        if(adminFilter==='low' && !isLowStock(p.id)) return false;
        if(adminFilter==='out' && !isOutOfStock(p.id)) return false;
        if(adminFilter==='adulto' && p.category!=='adulto') return false;
        if(adminFilter==='ninos' && p.category!=='ninos') return false;
        if(adminSearch && !p.name.toLowerCase().includes(adminSearch.toLowerCase())) return false;
        return true;
      }).map(p=>{
        const s=getStockBySize(p.id);
        const total=getTotalStock(p.id);
        let estado='<span class="badge badge--ok">OK</span>';
        if(total===0) estado='<span class="badge badge--danger">Agotado</span>';
        else if(total<=LOW_STOCK_THRESHOLD) estado='<span class="badge badge--warn">Bajo</span>';
        const isNatural=p.category==='natural';
        return `<tr class="${total===0?'row-out':total<=LOW_STOCK_THRESHOLD?'row-low':''}">
          <td class="admin-product"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>S/. ${p.price.toFixed(2)} · ID ${p.id}</small></div></td>
          <td><span class="cat-badge">${p.category}</span></td>
          <td>${isNatural?'<em style="color:var(--gray)">—</em>':`<div class="stock-control"><button onclick="adjustStock(${p.id},'small',-1);renderAdmin(document.getElementById('mainContent'))">−</button><input type="number" min="0" value="${s.small||0}" onchange="setStock(${p.id},'small',this.value);renderAdmin(document.getElementById('mainContent'))"><button onclick="adjustStock(${p.id},'small',1);renderAdmin(document.getElementById('mainContent'))">+</button></div>`}</td>
          <td><div class="stock-control"><button onclick="adjustStock(${p.id},'${isNatural?'unico':'grande'}',-1);renderAdmin(document.getElementById('mainContent'))">−</button><input type="number" min="0" value="${isNatural?(s.unico||0):(s.grande||0)}" onchange="setStock(${p.id},'${isNatural?'unico':'grande'}',this.value);renderAdmin(document.getElementById('mainContent'))"><button onclick="adjustStock(${p.id},'${isNatural?'unico':'grande'}',1);renderAdmin(document.getElementById('mainContent'))">+</button></div></td>
          <td><strong>${total}</strong></td>
          <td>${estado}</td>
          <td><button class="btn-icon btn-icon--delete" onclick="deleteProduct(${p.id})" title="Eliminar">🗑️</button></td>
        </tr>`;
      }).join('')}
    </tbody></table></div>
    ${hist.length?`<div class="admin-history"><h3>Últimos movimientos (${hist.length})</h3><div class="history-list">${hist.slice(0,10).map(h=>`<div class="history-item"><span>${new Date(h.date).toLocaleString('es-PE')}</span><span>${h.orderId}</span><span>${h.items.map(i=>i.name+(i.size?' ('+i.size+')':'')+' x'+i.qty).join(', ')}</span><strong>S/. ${h.total.toFixed(2)}</strong></div>`).join('')}</div></div>`:''}
    <p class="admin-footer-tip">Tip: El stock se descuenta automáticamente al confirmar un pedido. Los cambios aquí se guardan en tu navegador (localStorage).</p>
  </div></section>
  <div class="modal-overlay" id="addProductOverlay" onclick="closeAddProductModal()"></div>
  <div class="modal" id="addProductModal">
    <div class="modal__header"><h3>Agregar nuevo producto</h3><button class="modal__close" onclick="closeAddProductModal()">&times;</button></div>
    <form id="addProductForm" onsubmit="handleAddProduct(event)">
      <div class="form-group"><label>Nombre *</label><input type="text" name="name" required placeholder="Ej: Poncho Camden Verde Jade"></div>
      <div class="form-row"><div class="form-group"><label>Categoría *</label><select name="category" required onchange="toggleAddStockFields()"><option value="adulto">Adultos</option><option value="ninos">Niños</option></select></div><div class="form-group"><label>Precio (S/.) *</label><input type="number" name="price" required min="1" step="0.01" value="200"></div></div>
      <div class="form-group"><label>URL de imagen *</label><input type="url" name="image" required placeholder="https://..."></div>
      <div class="form-group"><label>Descripción</label><textarea name="desc" rows="2" placeholder="Descripción breve del poncho"></textarea></div>
      <div class="form-row" id="rowSmall"><div class="form-group"><label>Stock Small</label><input type="number" name="stockSmall" min="0" value="12"></div><div class="form-group"><label>Stock Grande</label><input type="number" name="stockGrande" min="0" value="12" id="inputGrande"></div></div>
      <div class="form-row" id="rowUnico" style="display:none"><div class="form-group"><label>Stock Único</label><input type="number" name="stockUnico" min="0" value="20"></div></div>
      <button type="submit" class="btn btn--primary btn--full">Guardar producto</button>
    </form>
  </div>`;
}
function adminLogin(e){
  e.preventDefault();
  const v=document.getElementById('adminPass').value;
  if(v===ADMIN_PASS){ sessionStorage.setItem('camden_admin','1'); renderAdmin(document.getElementById('mainContent'));}
  else alert('Clave incorrecta');
}
function adminLogout(){ sessionStorage.removeItem('camden_admin'); navigate('home');}
// Seguridad: cerrar sesión al refrescar/actualizar la web
window.addEventListener('beforeunload', ()=> sessionStorage.removeItem('camden_admin'));
window.addEventListener('pagehide', ()=> sessionStorage.removeItem('camden_admin'));
document.addEventListener('visibilitychange', ()=>{
  // opcional: si se oculta mucho tiempo, no cerrar, solo al recargar
});
 // Si la navegación es reload, limpiar sesión inmediatamente
try{
  const nav = performance.getEntriesByType('navigation')[0];
  if(nav && nav.type === 'reload') sessionStorage.removeItem('camden_admin');
}catch(e){}
// Fallback: al cargar la página, si venimos de reload, asegurar logout
window.addEventListener('pageshow', (e)=>{
  if(e.persisted) sessionStorage.removeItem('camden_admin');
});
function exportStockCSV(){
  let csv='ID,Nombre,Categoria,Small,Grande/Unico,Total,Precio,Estado\n';
  PRODUCTS.forEach(p=>{
    const s=getStockBySize(p.id);
    const total=getTotalStock(p.id);
    const estado=total===0?'Agotado':total<=LOW_STOCK_THRESHOLD?'Bajo':'OK';
    csv+=`${p.id},"${p.name}",${p.category},${s.small||0},${s.unico!==undefined?s.unico:s.grande||0},${total},${p.price},${estado}\n`;
  });
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='stock-camden-'+new Date().toISOString().slice(0,10)+'.csv';a.click();URL.revokeObjectURL(url);
}
function resetStock(){
  if(!confirm('¿Restaurar stock a valores por defecto (12 por talla)? Se eliminarán productos agregados y se restaurarán los borrados.')) return;
  localStorage.removeItem(STOCK_KEY);
  localStorage.removeItem(PRODUCTS_KEY);
  localStorage.removeItem(DELETED_KEY);
  STOCK=loadStock();
  PRODUCTS=loadProducts();
  PRODUCTS.forEach(p=>p.inStock=getTotalStock(p.id)>0);
  renderAdmin(document.getElementById('mainContent'));
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
