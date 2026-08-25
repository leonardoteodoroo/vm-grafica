import './components/footer.js';
import './components/faq-accordion.js';
import { setupFaqChatInteractions } from './components/faq-accordion.js';
import './components/product-carousel.js';
import { setupProductCarousels } from './components/product-carousel.js';
import './components/product-configurator.js';
import { setupProductConfigurators } from './components/product-configurator.js';

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

  // 5. Configurador Universal de Produtos (Caneca, Template e Novos Produtos)
  setupProductConfigurators();
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
