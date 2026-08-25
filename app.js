import './components/footer.js';
import './components/faq-accordion.js';
import { setupFaqChatInteractions } from './components/faq-accordion.js';
import './components/product-carousel.js';
import { setupProductCarousels } from './components/product-carousel.js';

/**
 * VM GRÁFICA RÁPIDA - JAVASCRIPT MASTER
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Hambúrguer (3 Traços)
  const menuToggle = document.getElementById('navMenuToggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. FAQ Chat Accordion
  setupFaqChatInteractions();

  // 3. Product Carousel Express
  setupProductCarousels();

  // 4. Morphing WhatsApp Button (Padrão Mendes Fotografia)
  setupHeroCtaMorph();

  // 5. Galeria e Configurador da Caneca (se estiver na página de produto)
  setupProductCaneca();
});

/**
 * Morphing WhatsApp Button: Hero CTA transforma-se no Floating WhatsApp no scroll
 */
function setupHeroCtaMorph() {
  const heroCtaBtn = document.getElementById('heroCtaBtn');
  const heroCtaSlot = document.getElementById('heroCtaSlot');
  if (!heroCtaBtn || !heroCtaSlot) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let morphMetrics = null;
  let morphFrame = null;
  let isDetached = false;

  const clamp = (val, min = 0, max = 1) => Math.min(Math.max(val, min), max);
  const lerp = (start, end, progress) => start + (end - start) * progress;

  function moveCtaToViewport() {
    if (isDetached) return;
    document.body.appendChild(heroCtaBtn);
    isDetached = true;
  }

  function returnCtaToHero() {
    if (!isDetached) return;
    heroCtaBtn.classList.remove('is-docked', 'is-morphing');
    heroCtaSlot.classList.remove('is-reserved');
    heroCtaSlot.style.removeProperty('--hero-cta-slot-width');
    heroCtaSlot.style.removeProperty('--hero-cta-slot-height');
    heroCtaBtn.style.removeProperty('--morph-width');
    heroCtaBtn.style.removeProperty('--morph-height');
    heroCtaBtn.style.removeProperty('--morph-x');
    heroCtaBtn.style.removeProperty('--morph-y');
    heroCtaBtn.style.removeProperty('--morph-text-opacity');
    heroCtaBtn.style.removeProperty('--morph-icon-opacity');
    heroCtaBtn.style.removeProperty('--morph-icon-scale');
    heroCtaSlot.appendChild(heroCtaBtn);
    isDetached = false;
  }

  function measureMorph() {
    if (isDetached) {
      returnCtaToHero();
    }

    const sourceRect = heroCtaBtn.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const sourceDocumentTop = sourceRect.top + scrollY;
    const startScroll = Math.max(0, sourceDocumentTop - window.innerHeight * 0.62);
    const travel = clamp(window.innerHeight * 0.48, 300, 440);
    const targetSize = window.innerWidth <= 768 ? 58 : 56;

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

  function scheduleMorphUpdate() {
    if (morphFrame !== null) return;
    morphFrame = window.requestAnimationFrame(updateMorph);
  }

  function invalidateMorphMetrics() {
    morphMetrics = null;
    scheduleMorphUpdate();
  }

  window.addEventListener('scroll', scheduleMorphUpdate, { passive: true });
  window.addEventListener('resize', invalidateMorphMetrics, { passive: true });
  window.addEventListener('orientationchange', invalidateMorphMetrics, { passive: true });
  window.addEventListener('pageshow', invalidateMorphMetrics);
  window.visualViewport?.addEventListener('resize', invalidateMorphMetrics, { passive: true });
}

/**
 * Galeria Interativa & Configurador da Caneca 325ml
 */
function setupProductCaneca() {
  const mainImg = document.getElementById('main-product-img');
  const thumbCards = document.querySelectorAll('.thumb-card');
  const modelOptions = document.querySelectorAll('.model-option');
  const qtyInput = document.getElementById('qty-input');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const quickQtyBtns = document.querySelectorAll('.quick-qty-btn');
  const tierCards = document.querySelectorAll('.tier-card');
  const summaryUnitPrice = document.getElementById('summary-unit-price');
  const summaryTotalPrice = document.getElementById('summary-total-price');
  const summaryItemsCount = document.getElementById('summary-items-count');
  const stickyTotalPrice = document.getElementById('sticky-total-price');
  const btnBuyWhatsapp = document.getElementById('btn-buy-whatsapp');
  const btnStickyWhatsapp = document.getElementById('btn-sticky-whatsapp');

  if (!mainImg || !qtyInput) return;

  // 1. Miniaturas da Galeria
  thumbCards.forEach((btn) => {
    btn.addEventListener('click', () => {
      thumbCards.forEach(t => t.classList.remove('is-active'));
      btn.classList.add('is-active');
      const newSrc = btn.getAttribute('data-img');
      const newAlt = btn.getAttribute('data-alt');
      mainImg.style.opacity = '0.3';
      setTimeout(() => {
        mainImg.src = newSrc;
        mainImg.alt = newAlt;
        mainImg.style.opacity = '1';
      }, 120);
    });
  });

  // 2. Seleção de Modelos
  let selectedModel = 'classica';
  let selectedModelName = 'Branca Clássica';
  let modelExtraCost = 0;

  modelOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      modelOptions.forEach(o => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      selectedModel = opt.getAttribute('data-model');
      selectedModelName = opt.querySelector('.opt-name')?.textContent || 'Branca Clássica';
      modelExtraCost = parseFloat(opt.getAttribute('data-extra') || '0');

      // Trocar imagem principal de acordo com o modelo selecionado
      if (selectedModel === 'classica') switchGallery(0);
      else if (selectedModel === 'magica') switchGallery(1);
      else if (selectedModel === 'colorida') switchGallery(2);
      else if (selectedModel === 'presente') switchGallery(4);

      calculatePrice();
    });
  });

  function switchGallery(index) {
    if (thumbCards[index]) {
      thumbCards[index].click();
    }
  }

  // 3. Quantidade e Faixas de Preço
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

    // Destacar faixa ativa
    tierCards.forEach((card) => {
      const min = parseInt(card.getAttribute('data-min'), 10);
      const max = parseInt(card.getAttribute('data-max'), 10);
      if (qty >= min && qty <= max) {
        card.classList.add('is-current');
      } else {
        card.classList.remove('is-current');
      }
    });

    // Atualizar botões de atalho
    quickQtyBtns.forEach((btn) => {
      const btnQty = parseInt(btn.getAttribute('data-qty'), 10);
      if (btnQty === qty) btn.classList.add('is-active');
      else btn.classList.remove('is-active');
    });

    // Atualizar Links do WhatsApp
    const msg = `Olá VM Gráfica! Gostaria de fazer o pedido de:

` +
      `📦 *Produto:* Caneca de Porcelana 325ml
` +
      `✨ *Modelo:* ${selectedModelName}
` +
      `🔢 *Quantidade:* ${qty} un
` +
      `💵 *Valor Unitário:* ${formattedUnit}
` +
      `💰 *Total Estimado:* ${formattedTotal}

` +
      `Podem me orientar sobre o envio da arte e prazo de produção?`;

    const zapUrl = `https://wa.me/5562993725371?text=${encodeURIComponent(msg)}`;
    if (btnBuyWhatsapp) btnBuyWhatsapp.href = zapUrl;
    if (btnStickyWhatsapp) btnStickyWhatsapp.href = zapUrl;
  }

  // Eventos de Quantidade
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

  // Cálculo inicial
  calculatePrice();
}
