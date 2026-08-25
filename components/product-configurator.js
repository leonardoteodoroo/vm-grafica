/**
 * Componente Reutilizável de Configurador e Galeria de Produtos (VM Gráfica)
 * Atende automaticamente produto-caneca.html, produto-modelo.html e novos produtos.
 */

export function setupProductConfigurators(root = document) {
  const productRoots = root.querySelectorAll('.product-stage, [data-product-configurator]');
  if (!productRoots.length) return;

  productRoots.forEach((container) => {
    initSingleProductConfigurator(container);
  });
}

function initSingleProductConfigurator(container) {
  const mainImg = container.querySelector('#main-product-img, .product-stage-img');
  const thumbCards = container.querySelectorAll('.thumb-card');
  const modelOptions = container.querySelectorAll('.model-option');
  const qtyInput = container.querySelector('#qty-input, .stepper-val');
  const qtyMinus = container.querySelector('#qty-minus');
  const qtyPlus = container.querySelector('#qty-plus');
  const quickQtyBtns = container.querySelectorAll('.quick-qty-btn');
  const tierCards = container.querySelectorAll('.tier-card');
  const summaryUnitPrice = container.querySelector('#summary-unit-price');
  const summaryTotalPrice = container.querySelector('#summary-total-price');
  const summaryItemsCount = container.querySelector('#summary-items-count');
  
  // Elementos globais ou fora do container
  const stickyTotalPrice = document.querySelector('#sticky-total-price');
  const btnBuyWhatsapp = container.querySelector('#btn-buy-whatsapp, .btn-whatsapp-cta');
  const btnStickyWhatsapp = document.querySelector('#btn-sticky-whatsapp');

  const productName = container.getAttribute('data-product-name') || 
                      container.querySelector('.product-main-heading, h1')?.textContent?.trim() || 
                      'Produto Personalizado';

  if (!qtyInput) return;

  // 1. Miniaturas da Galeria
  thumbCards.forEach((btn) => {
    btn.addEventListener('click', () => {
      thumbCards.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      const newSrc = btn.getAttribute('data-img');
      const newAlt = btn.getAttribute('data-alt');
      
      if (mainImg && newSrc) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = newSrc;
          if (newAlt) mainImg.alt = newAlt;
          mainImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  // 2. Seleção de Modelos / Acabamentos
  let selectedModelName = modelOptions[0]?.querySelector('.opt-name')?.textContent?.trim() || 'Modelo Padrão';
  let modelExtraCost = 0;

  modelOptions.forEach((opt, idx) => {
    opt.addEventListener('click', () => {
      modelOptions.forEach(o => {
        o.classList.remove('is-selected');
        o.setAttribute('aria-checked', 'false');
      });
      opt.classList.add('is-selected');
      opt.setAttribute('aria-checked', 'true');
      
      selectedModelName = opt.querySelector('.opt-name')?.textContent?.trim() || 'Modelo Padrão';
      modelExtraCost = parseFloat(opt.getAttribute('data-extra') || '0');

      // Trocar imagem da galeria se houver miniatura correspondente
      if (thumbCards[idx]) {
        thumbCards[idx].click();
      }

      calculatePrice();
    });
  });

  // 3. Cálculo de Faixas de Preço (Dinâmico a partir dos data-attributes ou fallback)
  function getBasePricePerUnit(qty) {
    if (qty >= 50) return 19.90;
    if (qty >= 15) return 24.90;
    if (qty >= 5) return 29.90;
    return 35.00;
  }

  function calculatePrice() {
    let qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;

    const baseUnit = getBasePricePerUnit(qty);
    const finalUnit = baseUnit + modelExtraCost;
    const finalTotal = finalUnit * qty;

    const formattedUnit = finalUnit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formattedTotal = finalTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (summaryUnitPrice) summaryUnitPrice.textContent = `${formattedUnit} / un`;
    if (summaryTotalPrice) summaryTotalPrice.textContent = formattedTotal;
    if (summaryItemsCount) summaryItemsCount.textContent = `(${qty} ${qty === 1 ? 'unidade selecionada' : 'unidades selecionadas'})`;
    if (stickyTotalPrice) stickyTotalPrice.textContent = formattedTotal;

    // Destacar faixa de desconto ativa
    tierCards.forEach((card) => {
      const min = parseInt(card.getAttribute('data-min'), 10) || 1;
      const max = parseInt(card.getAttribute('data-max'), 10) || 999999;
      if (qty >= min && qty <= max) {
        card.classList.add('is-current');
      } else {
        card.classList.remove('is-current');
      }
    });

    // Atualizar botões de atalho rápido
    quickQtyBtns.forEach((btn) => {
      const btnQty = parseInt(btn.getAttribute('data-qty'), 10);
      if (btnQty === qty) btn.classList.add('is-active');
      else btn.classList.remove('is-active');
    });

    // Mensagem Formatada para o WhatsApp
    const msg = `Olá VM Gráfica! Gostaria de fazer o pedido de:\n\n` +
      `📦 *Produto:* ${productName}\n` +
      `✨ *Modelo/Acabamento:* ${selectedModelName}\n` +
      `🔢 *Quantidade:* ${qty} un\n` +
      `💵 *Valor Unitário:* ${formattedUnit}\n` +
      `💰 *Total Estimado:* ${formattedTotal}\n\n` +
      `Podem me orientar sobre o envio da arte e prazo de produção?`;

    const zapUrl = `https://wa.me/5562993725371?text=${encodeURIComponent(msg)}`;
    if (btnBuyWhatsapp) btnBuyWhatsapp.href = zapUrl;
    if (btnStickyWhatsapp) btnStickyWhatsapp.href = zapUrl;
  }

  // 4. Eventos de Quantidade (Stepper & Atalhos)
  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      let q = parseInt(qtyInput.value, 10) || 1;
      if (q > 1) {
        qtyInput.value = q - 1;
        calculatePrice();
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      let q = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = q + 1;
      calculatePrice();
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener('input', calculatePrice);
    qtyInput.addEventListener('change', calculatePrice);
  }

  quickQtyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const q = parseInt(btn.getAttribute('data-qty'), 10);
      qtyInput.value = q;
      calculatePrice();
    });
  });

  // 5. Faixas de Desconto 100% Clicáveis
  tierCards.forEach((card) => {
    card.addEventListener('click', () => {
      const minQty = parseInt(card.getAttribute('data-min'), 10) || 1;
      qtyInput.value = minQty;
      calculatePrice();
    });
  });

  // Inicialização inicial do cálculo
  calculatePrice();
}
