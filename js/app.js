/* ═══════════════════════════════════════════
   STATE
════════════════════════════════════════════ */
let cart = [];
let selectedSize = 'M';
let paypalMounted = false;

/* ═══════════════════════════════════════════
   RENDER PRODUCTS
════════════════════════════════════════════ */
function renderProducts(filter = 'tutti') {
  const grid = document.getElementById('products-grid');
  const list = filter === 'tutti' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="quickCustomize(${p.id})">
      <div class="product-img-wrap">
        <img
          src="images/${p.img}"
          alt="${p.name} ${p.variant}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="product-img-fallback" style="display:none">
          ${jerseyIconSVG(p.c1, p.c2)}
          <span>${p.img}</span>
        </div>
        <div class="product-variant-badge">${p.variant}</div>
      </div>
      <div class="product-info">
        <div class="product-league">${p.league}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-variant-txt">${p.variant} Kit · ${p.season}</div>
        <div class="product-footer">
          <div>
            <span class="product-price">€ ${p.price.toFixed(2).replace('.',',')}</span>
            <span class="product-price-sub">nome+numero inclusi</span>
          </div>
          <button class="product-btn">Personalizza</button>
        </div>
      </div>
    </div>
  `).join('');
}

function jerseyIconSVG(c1, c2) {
  const id = 'pi' + Math.random().toString(36).slice(2,6);
  return `<svg width="80" height="90" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" opacity="0.6">
    <defs><linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c1}"/><stop offset="100%" style="stop-color:${c2}"/>
    </linearGradient></defs>
    <path d="M65,22 L18,55 L8,100 L42,106 L42,210 L158,210 L158,106 L192,100 L182,55 L135,22 L118,38 Q100,55 82,38 Z"
          fill="url(#${id})"/>
  </svg>`;
}

function filterCat(btn, cat) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

function quickCustomize(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  // Trova l'option con data-img corrispondente
  const sel = document.getElementById('ctrl-team');
  for (const opt of sel.options) {
    if (opt.dataset.img === p.img) {
      sel.value = opt.value;
      break;
    }
  }
  onTeamChange();
  document.getElementById('personalizza').scrollIntoView({ behavior: 'smooth' });
}

/* ═══════════════════════════════════════════
   CUSTOMIZER
════════════════════════════════════════════ */
function onTeamChange() {
  const sel = document.getElementById('ctrl-team');
  const opt = sel.options[sel.selectedIndex];
  if (!opt || !opt.dataset.c1) return;

  const c1 = opt.dataset.c1;
  const c2 = opt.dataset.c2;
  const s  = opt.dataset.s;
  const img = opt.dataset.img || '';
  const label = opt.text;

  // Aggiorna gradiente SVG fronte
  document.getElementById('jStop1').style.stopColor = c1;
  document.getElementById('jStop2').style.stopColor = c2;
  document.getElementById('j-collar').setAttribute('stroke', s);

  // Aggiorna gradiente SVG retro
  document.getElementById('jStop1B').style.stopColor = c1;
  document.getElementById('jStop2B').style.stopColor = c2;
  document.getElementById('j-collar-b').setAttribute('stroke', s);

  // Colore testo
  const tc = isLight(c1) ? '#111111' : 'white';
  document.getElementById('prev-num').setAttribute('fill', tc);
  document.getElementById('prev-name-b').setAttribute('fill', tc);
  document.getElementById('prev-num-b').setAttribute('fill', tc);

  // Prova immagine reale
  if (img) {
    const fi = document.getElementById('preview-front-img');
    fi.src = 'images/' + img;
    fi.style.display = 'block';
    fi.onerror = () => { fi.style.display = 'none'; };
    fi.onload  = () => { fi.style.display = 'block'; };
  }

  document.getElementById('preview-team-name').textContent = label;
  onCustomChange();
}

function onCustomChange() {
  const name = (document.getElementById('ctrl-name').value || 'IL TUO NOME').toUpperCase();
  const num  = document.getElementById('ctrl-number').value || '10';

  document.getElementById('prev-num').textContent   = num;
  document.getElementById('prev-num-b').textContent = num;
  document.getElementById('prev-name-b').textContent = name;
}

function changeNum(delta) {
  const inp = document.getElementById('ctrl-number');
  let v = parseInt(inp.value || 10) + delta;
  if (v < 1) v = 1;
  if (v > 99) v = 99;
  inp.value = v;
  onCustomChange();
}

function pickSize(btn, size) {
  document.querySelectorAll('.size-chip').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = size;
}

function switchPreview(btn, view) {
  document.querySelectorAll('.preview-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('preview-front').style.display = view === 'front' ? 'flex' : 'none';
  document.getElementById('preview-back').style.display  = view === 'back'  ? 'flex' : 'none';
}

function isLight(hex) {
  if (!hex || hex[0] !== '#') return false;
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return (r*299 + g*587 + b*114) / 1000 > 155;
}

/* ═══════════════════════════════════════════
   CART
════════════════════════════════════════════ */
function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('open');
}

function addToCart() {
  const sel  = document.getElementById('ctrl-team');
  const opt  = sel.options[sel.selectedIndex];
  if (!opt || !opt.dataset.c1) { showToast('⚠️ Seleziona prima una squadra', true); return; }

  const name = document.getElementById('ctrl-name').value.trim().toUpperCase() || '—';
  const num  = document.getElementById('ctrl-number').value || '10';
  const price = 39.99;

  cart.push({
    id:    Date.now(),
    team:  opt.text,
    name, num,
    size:  selectedSize,
    price,
    c1:    opt.dataset.c1,
    c2:    opt.dataset.c2,
    img:   opt.dataset.img || '',
  });

  renderCart();
  toggleCart();
  showToast('✅ Aggiunto al carrello!');
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  renderCart();
}

function renderCart() {
  const body     = document.getElementById('cart-body');
  const foot     = document.getElementById('cart-foot');
  const count    = document.getElementById('cart-count');
  const subtitle = document.getElementById('cart-subtitle');

  count.textContent = cart.length;
  subtitle.textContent = cart.length + (cart.length === 1 ? ' articolo' : ' articoli');

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      <p>Il carrello è vuoto</p></div>`;
    foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-thumb">
        <img src="images/${item.img}" alt="${item.team}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="cart-item-thumb-svg" style="display:none">
          ${jerseyIconSVG(item.c1, item.c2)}
        </div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-team">${item.team}</div>
        <div class="cart-item-custom">${item.name} · #${item.num}</div>
        <div class="cart-item-size">Taglia ${item.size}</div>
        <div class="cart-item-price">€ ${item.price.toFixed(2).replace('.',',')}</div>
      </div>
      <button class="cart-item-del" onclick="removeItem(${item.id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>
        </svg>
      </button>
    </div>
  `).join('');

  const sub   = cart.reduce((s, i) => s + i.price, 0);
  const ship  = sub >= 60 ? 0 : 4.99;
  const grand = sub + ship;

  document.getElementById('cart-sub').textContent      = '€ ' + sub.toFixed(2).replace('.',',');
  document.getElementById('cart-ship-fee').textContent  = ship === 0 ? 'Gratis 🎉' : '€ 4,99';
  document.getElementById('cart-grand').textContent     = '€ ' + grand.toFixed(2).replace('.',',');

  foot.style.display = 'block';
  initPayPal(grand);
}

/* ═══════════════════════════════════════════
   PAYPAL
════════════════════════════════════════════ */
function initPayPal(total) {
  const container = document.getElementById('paypal-button-container');
  container.innerHTML = '';

  if (typeof paypal === 'undefined') {
    container.innerHTML = '<p style="color:#f59e0b;font-size:.8rem;text-align:center">Caricamento PayPal...</p>';
    setTimeout(() => initPayPal(total), 1500);
    return;
  }

  paypal.Buttons({
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: { value: total.toFixed(2), currency_code: 'EUR' },
          description: 'Maglie calcio personalizzate — KitZone',
        }]
      });
    },
    onApprove(data, actions) {
      return actions.order.capture().then(() => {
        showToast('🎉 Pagamento completato! Grazie per il tuo ordine.');
        cart = []; renderCart(); toggleCart();
      });
    },
    onError(err) {
      console.error(err);
      showToast('⚠️ Errore pagamento. Riprova.', true);
    },
    style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay', tagline: false, height: 45 }
  }).render('#paypal-button-container');
}

/* ═══════════════════════════════════════════
   WHATSAPP
════════════════════════════════════════════ */
const WA = '39XXXXXXXXXX'; // ← inserisci il tuo numero con prefisso

function orderWhatsapp() {
  const sel = document.getElementById('ctrl-team');
  const opt = sel.options[sel.selectedIndex];
  const team = opt && opt.dataset.c1 ? opt.text : '—';
  const name = document.getElementById('ctrl-name').value.trim().toUpperCase() || '—';
  const num  = document.getElementById('ctrl-number').value || '—';
  const msg  = `Ciao! Vorrei ordinare una maglia:\n\n🏟 Squadra: ${team}\n👤 Nome: ${name}\n🔢 Numero: ${num}\n📐 Taglia: ${selectedSize}\n\nGrazie!`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
}

function checkoutWhatsapp() {
  if (!cart.length) return;
  const lines = cart.map((i, idx) => `${idx+1}. ${i.team} — ${i.name} #${i.num} (Taglia ${i.size})`).join('\n');
  const total = cart.reduce((s, i) => s + i.price, 0);
  const msg   = `Ciao! Vorrei ordinare:\n\n${lines}\n\nTotale: € ${total.toFixed(2)}\n\nGrazie!`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ═══════════════════════════════════════════
   TOAST
════════════════════════════════════════════ */
function showToast(msg, error = false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (error ? ' error' : '');
  setTimeout(() => { t.className = 'toast'; }, 3000);
}

/* ═══════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.background =
      window.scrollY > 60
        ? 'rgba(8,12,24,0.98)'
        : 'rgba(8,12,24,0.85)';
  });
});
