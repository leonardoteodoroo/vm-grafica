// ==========================================================================
// APLICAÇÃO & SIMULADOR DE PREÇO EM TEMPO REAL - VM GRÁFICA
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  initCategoryFilter();
  initFAQ();
  initWhatsAppMorphing();
});

// ==========================================================================
// 1. ANIMAÇÃO DE MORPHING DO BOTÃO DO WHATSAPP (ESTILO MENDES FOTOGRAFIA)
// ==========================================================================

function initWhatsAppMorphing() {
  const heroCtaSlot = document.getElementById('heroCtaSlot');
  const heroCtaBtn = document.getElementById('heroCtaBtn');

  if (!heroCtaSlot || !heroCtaBtn) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const lerp = (start, end, progress) => start + (end - start) * progress;

  let morphMetrics = null;
  let morphFrame = null;

  function preserveFocusWhile(callback) {
    const hadFocus = document.activeElement === heroCtaBtn;
    callback();
    if (hadFocus) heroCtaBtn.focus({ preventScroll: true });
  }

  function returnCtaToHero() {
    if (heroCtaBtn.parentElement === heroCtaSlot && !heroCtaBtn.classList.contains('is-morphing')) return;

    preserveFocusWhile(() => {
      heroCtaBtn.classList.remove('is-docked', 'is-morphing');
      heroCtaSlot.appendChild(heroCtaBtn);
    });
  }

  function moveCtaToViewport() {
    if (heroCtaBtn.parentElement === document.body) return;
    preserveFocusWhile(() => document.body.appendChild(heroCtaBtn));
  }

  function measureMorph() {
    preserveFocusWhile(() => {
      heroCtaBtn.classList.remove('is-docked', 'is-morphing');
      heroCtaSlot.classList.remove('is-reserved');
      heroCtaSlot.style.removeProperty('--hero-cta-slot-width');
      heroCtaSlot.style.removeProperty('--hero-cta-slot-height');
      heroCtaSlot.appendChild(heroCtaBtn);
    });

    const sourceRect = heroCtaBtn.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const sourceDocumentTop = sourceRect.top + scrollY;
    const startScroll = Math.max(0, sourceDocumentTop - window.innerHeight * 0.62);
    const travel = clamp(window.innerHeight * 0.48, 300, 440);
    const targetSize = window.innerWidth <= 768 ? 64 : 60;

    heroCtaSlot.style.setProperty('--hero-cta-slot-width', `${sourceRect.width}px`);
    heroCtaSlot.style.setProperty('--hero-cta-slot-height', `${sourceRect.height}px`);
    heroCtaSlot.classList.add('is-reserved');

    moveCtaToViewport();
    heroCtaBtn.classList.add('is-morphing');
    heroCtaBtn.style.setProperty('--morph-width', `${targetSize}px`);
    heroCtaBtn.style.setProperty('--morph-height', `${targetSize}px`);
    heroCtaBtn.style.setProperty('--morph-x', '0px');
    heroCtaBtn.style.setProperty('--morph-y', '0px');
    const targetRect = heroCtaBtn.getBoundingClientRect();

    return {
      sourceLeft: sourceRect.left,
      sourceTop: sourceDocumentTop - startScroll,
      sourceWidth: sourceRect.width,
      sourceHeight: sourceRect.height,
      targetLeft: targetRect.left,
      targetTop: targetRect.top,
      targetRight: targetRect.right,
      targetBottom: targetRect.bottom,
      targetSize,
      startScroll,
      travel
    };
  }

  function applyMorph(progress) {
    const easedProgress = progress * progress * (3 - 2 * progress);
    const width = lerp(morphMetrics.sourceWidth, morphMetrics.targetSize, easedProgress);
    const height = lerp(morphMetrics.sourceHeight, morphMetrics.targetSize, easedProgress);
    const desiredLeft = lerp(morphMetrics.sourceLeft, morphMetrics.targetLeft, easedProgress);
    const desiredTop = lerp(morphMetrics.sourceTop, morphMetrics.targetTop, easedProgress);
    const anchoredLeft = morphMetrics.targetRight - width;
    const anchoredTop = morphMetrics.targetBottom - height;
    const textOpacity = 1 - clamp((progress - 0.12) / 0.52);
    const iconOpacity = clamp((progress - 0.38) / 0.4);

    moveCtaToViewport();
    heroCtaBtn.classList.add('is-morphing');
    heroCtaBtn.classList.toggle('is-docked', progress >= 0.995);
    heroCtaBtn.style.setProperty('--morph-width', `${width.toFixed(2)}px`);
    heroCtaBtn.style.setProperty('--morph-height', `${height.toFixed(2)}px`);
    heroCtaBtn.style.setProperty('--morph-x', `${(desiredLeft - anchoredLeft).toFixed(2)}px`);
    heroCtaBtn.style.setProperty('--morph-y', `${(desiredTop - anchoredTop).toFixed(2)}px`);
    heroCtaBtn.style.setProperty('--morph-text-opacity', textOpacity.toFixed(3));
    heroCtaBtn.style.setProperty('--morph-icon-opacity', iconOpacity.toFixed(3));
    heroCtaBtn.style.setProperty('--morph-icon-scale', lerp(0.72, 1, iconOpacity).toFixed(3));
  }

  function updateMorph() {
    morphFrame = null;
    if (!morphMetrics) morphMetrics = measureMorph();

    if (reducedMotion.matches) {
      const sourceHasLeftViewport = heroCtaSlot.getBoundingClientRect().bottom <= 0;
      if (sourceHasLeftViewport) applyMorph(1);
      else returnCtaToHero();
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const progress = clamp((scrollY - morphMetrics.startScroll) / morphMetrics.travel);

    if (progress <= 0) returnCtaToHero();
    else applyMorph(progress);
  }

  function requestMorphUpdate() {
    if (morphFrame !== null) return;
    morphFrame = window.requestAnimationFrame(updateMorph);
  }

  function resetMetrics() {
    morphMetrics = null;
    requestMorphUpdate();
  }

  window.addEventListener('scroll', requestMorphUpdate, { passive: true });
  window.addEventListener('resize', resetMetrics);
  window.addEventListener('orientationchange', resetMetrics);
  requestMorphUpdate();
}

// ==========================================================================
// 2. DADOS E LÓGICA DA CALCULADORA INTERATIVA
// ==========================================================================

const PRICING_DATA = {
  cartao: {
    name: "Cartão de Visita",
    materials: {
      couche250: { name: "Couchê 250g", basePrice: 0.09 },
      couche300: { name: "Couchê 300g (Premium)", basePrice: 0.11 },
      kraft: { name: "Papel Kraft 300g", basePrice: 0.13 }
    },
    finishes: {
      sem_verniz: { name: "Sem Verniz", multiplier: 1.0 },
      verniz_total: { name: "Verniz Total Frente", multiplier: 1.15 },
      verniz_local: { name: "Verniz Localizado + Fosco (VIP)", multiplier: 1.45 }
    },
    minQty: 100
  },
  copo: {
    name: "Copo Acrílico Personalizado",
    materials: {
      long_drink: { name: "Long Drink 350ml", basePrice: 3.50 },
      twister: { name: "Twister com Tampa 500ml", basePrice: 5.80 },
      taca_gin: { name: "Taça de Gin Degradê 580ml", basePrice: 7.90 }
    },
    finishes: {
      silk_1cor: { name: "Silk Screen (1 Cor)", multiplier: 1.0 },
      dtf_uv: { name: "DTF UV Relevo Colorido (Alta Fixação)", multiplier: 1.35 }
    },
    minQty: 20
  },
  adesivo: {
    name: "Adesivos & Rótulos",
    materials: {
      papel_adesivo: { name: "Papel Couchê Adesivo", basePrice: 0.35 },
      vinil_brilho: { name: "Vinil Brilho Impermeável", basePrice: 0.65 },
      vinil_transparente: { name: "Vinil Transparente / DTF", basePrice: 0.85 }
    },
    finishes: {
      corte_reto: { name: "Corte Reto / Quadrado", multiplier: 1.0 },
      meio_corte: { name: "Meio-Corte Especial (Formato Livre)", multiplier: 1.20 }
    },
    minQty: 50
  },
  bloco: {
    name: "Blocos de Pedido e Comandas",
    materials: {
      via1: { name: "Sulfite 75g (1 Via)", basePrice: 12.00 },
      via2_carbonado: { name: "Autocopiativo (2 Vias)", basePrice: 22.00 },
      via3_carbonado: { name: "Autocopiativo (3 Vias)", basePrice: 32.00 }
    },
    finishes: {
      padrao: { name: "Picote + Numeração Sequencial", multiplier: 1.0 }
    },
    minQty: 5
  }
};

let currentConfig = {
  product: 'cartao',
  material: 'couche300',
  finish: 'verniz_local',
  quantity: 1000
};

function initCalculator() {
  const productButtons = document.querySelectorAll('[data-product]');
  const quantityInput = document.getElementById('calc-quantity');
  const qtyPresets = document.querySelectorAll('[data-qty]');

  // Troca de produto
  productButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      productButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentConfig.product = btn.dataset.product;
      updateMaterialOptions();
      recalculatePrice();
    });
  });

  // Troca de quantidade por presets
  qtyPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      qtyPresets.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentConfig.quantity = parseInt(btn.dataset.qty);
      if (quantityInput) quantityInput.value = currentConfig.quantity;
      recalculatePrice();
    });
  });

  if (quantityInput) {
    quantityInput.addEventListener('input', (e) => {
      currentConfig.quantity = Math.max(1, parseInt(e.target.value) || 1);
      recalculatePrice();
    });
  }

  updateMaterialOptions();
  recalculatePrice();
}

function updateMaterialOptions() {
  const prodData = PRICING_DATA[currentConfig.product];
  const materialContainer = document.getElementById('material-options-container');
  const finishContainer = document.getElementById('finish-options-container');

  if (!prodData) return;

  // Renderiza Materiais
  const materialKeys = Object.keys(prodData.materials);
  if (!prodData.materials[currentConfig.material]) {
    currentConfig.material = materialKeys[0];
  }

  if (materialContainer) {
    materialContainer.innerHTML = materialKeys.map(key => {
      const mat = prodData.materials[key];
      const isActive = key === currentConfig.material ? 'active' : '';
      return `<button class="calc-option-btn ${isActive}" onclick="selectMaterial('${key}')">${mat.name}</button>`;
    }).join('');
  }

  // Renderiza Acabamentos
  const finishKeys = Object.keys(prodData.finishes);
  if (!prodData.finishes[currentConfig.finish]) {
    currentConfig.finish = finishKeys[0];
  }

  if (finishContainer) {
    finishContainer.innerHTML = finishKeys.map(key => {
      const fin = prodData.finishes[key];
      const isActive = key === currentConfig.finish ? 'active' : '';
      return `<button class="calc-option-btn ${isActive}" onclick="selectFinish('${key}')">${fin.name}</button>`;
    }).join('');
  }
}

window.selectMaterial = function(matKey) {
  currentConfig.material = matKey;
  updateMaterialOptions();
  recalculatePrice();
};

window.selectFinish = function(finKey) {
  currentConfig.finish = finKey;
  updateMaterialOptions();
  recalculatePrice();
};

function recalculatePrice() {
  const prodData = PRICING_DATA[currentConfig.product];
  if (!prodData) return;

  const mat = prodData.materials[currentConfig.material];
  const fin = prodData.finishes[currentConfig.finish];
  const qty = currentConfig.quantity;

  const unitBase = mat.basePrice * fin.multiplier;
  
  // Desconto progressivo por escala de volume
  let discount = 1.0;
  if (qty >= 1000) discount = 0.82;
  else if (qty >= 500) discount = 0.88;
  else if (qty >= 250) discount = 0.94;

  const totalPrice = (unitBase * qty * discount);
  const formattedTotal = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const unitPriceFormatted = (totalPrice / qty).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Atualiza a tela
  const priceDisplay = document.getElementById('calc-price-total');
  const unitDisplay = document.getElementById('calc-price-unit');
  const summaryProd = document.getElementById('calc-summary-product');
  const summarySpecs = document.getElementById('calc-summary-specs');
  const whatsappBtn = document.getElementById('calc-btn-whatsapp');

  if (priceDisplay) priceDisplay.innerText = formattedTotal;
  if (unitDisplay) unitDisplay.innerText = `${unitPriceFormatted} por unidade`;
  if (summaryProd) summaryProd.innerText = `${qty}x ${prodData.name}`;
  if (summarySpecs) summarySpecs.innerText = `${mat.name} • ${fin.name}`;

  // Monta link do WhatsApp com mensagem pronta
  const zapMessage = encodeURIComponent(
    `Olá, VM Gráfica! Simulei meu pedido no site e quero fechar:\n\n` +
    `📦 *Produto:* ${prodData.name}\n` +
    `📄 *Material:* ${mat.name}\n` +
    `✨ *Acabamento:* ${fin.name}\n` +
    `🔢 *Quantidade:* ${qty} unidades\n` +
    `💰 *Valor Estimado:* ${formattedTotal}\n\n` +
    `Gostaria de enviar minha arte / solicitar a criação!`
  );

  if (whatsappBtn) {
    whatsappBtn.href = `https://wa.me/5500000000000?text=${zapMessage}`;
  }
}

// ==========================================================================
// 3. FILTRO DA VITRINE (3 PILARES) & FAQ
// ==========================================================================

function initCategoryFilter() {
  const pillarButtons = document.querySelectorAll('.pillar-btn');
  const productCards = document.querySelectorAll('[data-pillar]');

  pillarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pillarButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedPillar = btn.dataset.targetPillar;

      productCards.forEach(card => {
        if (selectedPillar === 'todos' || card.dataset.pillar === selectedPillar) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}
