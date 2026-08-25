/**
 * VM Gráfica Rápida & Papelaria Personalizada
 * Scripts Principais & Interatividade (Home + Página de Produto)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroMorph();
  initSimulator();
  initProductCanecaPage();
});

/* ==========================================================================
   1. HERO WHATSAPP MORPHING & DOCKING (HOME PAGE)
   ========================================================================== */
function initHeroMorph() {
  const heroBtn = document.getElementById('hero-whatsapp-btn');
  const heroSlot = document.getElementById('hero-cta-slot');
  if (!heroBtn || !heroSlot) return;

  let ticking = false;

  function updateMorph() {
    const slotRect = heroSlot.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const triggerDistance = 250;

    if (scrollY > triggerDistance) {
      heroBtn.classList.add('is-morphing');
      heroBtn.classList.add('is-docked');
      heroSlot.classList.add('is-reserved');
    } else {
      heroBtn.classList.remove('is-morphing');
      heroBtn.classList.remove('is-docked');
      heroSlot.classList.remove('is-reserved');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateMorph);
      ticking = true;
    }
  }, { passive: true });

  updateMorph();
}

/* ==========================================================================
   2. SIMULADOR DE PREÇOS (HOME PAGE)
   ========================================================================== */
function initSimulator() {
  const simulatorForm = document.getElementById('price-simulator-form');
  if (!simulatorForm) return;

  const productSelect = document.getElementById('sim-product');
  const finishSelect = document.getElementById('sim-finish');
  const qtySelect = document.getElementById('sim-qty');
  const totalDisplay = document.getElementById('sim-total-display');
  const unitDisplay = document.getElementById('sim-unit-display');
  const whatsappCta = document.getElementById('sim-whatsapp-cta');

  const pricingTable = {
    cartao: {
      basePrices: { 100: 45, 250: 75, 500: 110, 1000: 160 },
      finishMultipliers: { simples: 1, bopp: 1.25, verniz: 1.45, dtf: 1.8 }
    },
    panfleto: {
      basePrices: { 100: 55, 250: 95, 500: 140, 1000: 210 },
      finishMultipliers: { simples: 1, bopp: 1.2, verniz: 1.35, dtf: 1.5 }
    },
    copo: {
      basePrices: { 10: 80, 25: 160, 50: 280, 100: 490 },
      finishMultipliers: { simples: 1, bopp: 1.1, verniz: 1.2, dtf: 1.35 }
    },
    adesivo: {
      basePrices: { 50: 35, 100: 55, 250: 95, 500: 150 },
      finishMultipliers: { simples: 1, bopp: 1.2, verniz: 1.3, dtf: 1.6 }
    }
  };

  function calculate() {
    if (!productSelect || !finishSelect || !qtySelect || !totalDisplay) return;

    const prod = productSelect.value || 'cartao';
    const finish = finishSelect.value || 'simples';
    const qty = parseInt(qtySelect.value, 10) || 100;

    const productData = pricingTable[prod] || pricingTable.cartao;
    const base = productData.basePrices[qty] || (qty * 0.5);
    const mult = productData.finishMultipliers[finish] || 1;

    const total = base * mult;
    const unit = total / qty;

    totalDisplay.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    if (unitDisplay) {
      unitDisplay.textContent = `(R$ ${unit.toFixed(2).replace('.', ',')} / un)`;
    }

    if (whatsappCta) {
      const prodText = productSelect.options[productSelect.selectedIndex]?.text || prod;
      const finishText = finishSelect.options[finishSelect.selectedIndex]?.text || finish;
      const msg = encodeURIComponent(
        `Olá VM Gráfica! Gostaria de encomendar pelo simulador:\n- Produto: ${prodText}\n- Acabamento: ${finishText}\n- Quantidade: ${qty} un\n- Valor Estimado: R$ ${total.toFixed(2).replace('.', ',')}`
      );
      whatsappCta.href = `https://wa.me/5562993725371?text=${msg}`;
    }
  }

  [productSelect, finishSelect, qtySelect].forEach(el => {
    if (el) el.addEventListener('change', calculate);
  });

  calculate();
}

/* ==========================================================================
   3. PÁGINA DE PRODUTO DEDICADA: CANECA PERSONALIZADA (produto-caneca.html)
   ========================================================================== */
function initProductCanecaPage() {
  const mainImg = document.getElementById('main-product-img');
  const thumbButtons = document.querySelectorAll('.thumb-btn');
  const modelChips = document.querySelectorAll('.model-chip');
  const qtyInput = document.getElementById('qty-input');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const tierQuickBtns = document.querySelectorAll('.tier-btn');
  const tierCols = document.querySelectorAll('.tier-col');
  const summaryUnitPrice = document.getElementById('summary-unit-price');
  const summaryTotalPrice = document.getElementById('summary-total-price');
  const summaryItemsCount = document.getElementById('summary-items-count');
  const stickyTotalPrice = document.getElementById('sticky-total-price');
  const btnBuyWhatsapp = document.getElementById('btn-buy-whatsapp');
  const btnStickyWhatsapp = document.getElementById('btn-sticky-whatsapp');

  if (!mainImg || !qtyInput) return;

  // Estado do Produto
  let currentModel = 'classica';
  let currentModelName = 'Branca Clássica';
  let currentExtraPrice = 0;
  let currentQty = parseInt(qtyInput.value, 10) || 1;

  // 1. Galeria de Fotos Interativa (5 Imagens)
  thumbButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const newSrc = btn.getAttribute('data-img');
      const newAlt = btn.getAttribute('data-alt');

      // Feedback de transição suave
      mainImg.style.opacity = '0.3';
      setTimeout(() => {
        mainImg.src = newSrc;
        if (newAlt) mainImg.alt = newAlt;
        mainImg.style.opacity = '1';
      }, 120);

      // Atualizar abas ativas
      thumbButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
    });
  });

  // 2. Seletor de Modelo / Acabamento
  modelChips.forEach(chip => {
    chip.addEventListener('click', () => {
      modelChips.forEach(c => {
        c.classList.remove('is-selected');
        c.setAttribute('aria-checked', 'false');
      });
      chip.classList.add('is-selected');
      chip.setAttribute('aria-checked', 'true');

      currentModel = chip.getAttribute('data-model');
      currentModelName = chip.querySelector('.chip-title')?.textContent?.trim() || 'Branca Clássica';
      currentExtraPrice = parseFloat(chip.getAttribute('data-extra')) || 0;

      // Trocar thumbnail automaticamente para a foto correspondente
      if (currentModel === 'classica') thumbButtons[0]?.click();
      if (currentModel === 'magica') thumbButtons[1]?.click();
      if (currentModel === 'colorida') thumbButtons[2]?.click();
      if (currentModel === 'presente') thumbButtons[4]?.click();

      updateProductCalculations();
    });
  });

  // 3. Tabela de Preços Base por Quantidade
  function getBaseUnitPrice(qty) {
    if (qty >= 50) return 19.90;
    if (qty >= 15) return 24.90;
    if (qty >= 5) return 29.90;
    return 35.00;
  }

  // 4. Atualização de Cálculos e Mensagens
  function updateProductCalculations() {
    currentQty = Math.max(1, Math.min(1000, parseInt(qtyInput.value, 10) || 1));
    qtyInput.value = currentQty;

    const baseUnit = getBaseUnitPrice(currentQty);
    const finalUnit = baseUnit + currentExtraPrice;
    const totalPrice = finalUnit * currentQty;

    // Atualizar UI de Preço
    if (summaryUnitPrice) {
      summaryUnitPrice.textContent = `R$ ${finalUnit.toFixed(2).replace('.', ',')} / un`;
    }
    if (summaryTotalPrice) {
      summaryTotalPrice.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
    }
    if (stickyTotalPrice) {
      stickyTotalPrice.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
    }
    if (summaryItemsCount) {
      summaryItemsCount.textContent = `(${currentQty} ${currentQty === 1 ? 'unidade selecionada' : 'unidades selecionadas'})`;
    }

    // Atualizar Faixa Ativa na Tabela
    tierCols.forEach(col => {
      const min = parseInt(col.getAttribute('data-min'), 10);
      const max = parseInt(col.getAttribute('data-max'), 10);
      if (currentQty >= min && currentQty <= max) {
        col.classList.add('is-current');
      } else {
        col.classList.remove('is-current');
      }
    });

    // Atualizar Botões Rápidos
    tierQuickBtns.forEach(btn => {
      const btnQty = parseInt(btn.getAttribute('data-qty'), 10);
      if (btnQty === currentQty) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    // Montar link do WhatsApp
    const msg = encodeURIComponent(
      `Olá VM Gráfica! Gostaria de encomendar Canecas Personalizadas:\n` +
      `• Modelo: ${currentModelName}\n` +
      `• Quantidade: ${currentQty} un\n` +
      `• Preço Unitário: R$ ${finalUnit.toFixed(2).replace('.', ',')}\n` +
      `• Total Estimado: R$ ${totalPrice.toFixed(2).replace('.', ',')}\n\n` +
      `Gostaria de enviar minha arte/foto para aprovação!`
    );
    const waUrl = `https://wa.me/5562993725371?text=${msg}`;

    if (btnBuyWhatsapp) btnBuyWhatsapp.href = waUrl;
    if (btnStickyWhatsapp) btnStickyWhatsapp.href = waUrl;
  }

  // Event Listeners de Quantidade
  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
        updateProductCalculations();
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      qtyInput.value = currentQty + 1;
      updateProductCalculations();
    });
  }

  qtyInput.addEventListener('input', updateProductCalculations);
  qtyInput.addEventListener('change', updateProductCalculations);

  tierQuickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = parseInt(btn.getAttribute('data-qty'), 10);
      if (q) {
        qtyInput.value = q;
        updateProductCalculations();
      }
    });
  });

  // Inicializar cálculo na carga
  updateProductCalculations();
}
