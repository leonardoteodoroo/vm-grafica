/**
 * Componente Global Reutilizável de Carrossel de Serviços & Produtos Multicategoria
 * Navegação Magnética Cíclica Infinita com Controles Inferiores (Setas + Indicadores de Ponto Monocromáticos)
 */

function setupSingleCarousel(track, btnLeft, btnRight, dotsContainer, pillarBtns, cards) {
  if (!track) return;

  const getVisibleCards = () => {
    return Array.from(cards).filter(card => card.style.display !== 'none');
  };

  const getScrollStep = () => {
    const visible = getVisibleCards();
    const card = visible[0];
    if (!card) return 290;
    
    const computedGap = parseInt(window.getComputedStyle(track).gap) || 20;
    const cardWidth = card.offsetWidth;
    
    // No mobile rola exatamente 1 card por clique com encaixe magnético (snap)
    if (window.innerWidth <= 640) {
      return cardWidth + computedGap;
    }
    
    // No desktop rola a quantidade visível na tela
    const visibleCount = Math.max(1, Math.floor(track.clientWidth / (cardWidth + computedGap)));
    return (cardWidth + computedGap) * visibleCount;
  };

  const updateControls = () => {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (maxScroll <= 5) {
      btnLeft?.classList.add('is-disabled');
      btnRight?.classList.add('is-disabled');
      btnLeft?.setAttribute('disabled', 'true');
      btnRight?.setAttribute('disabled', 'true');
    } else {
      btnLeft?.classList.remove('is-disabled');
      btnRight?.classList.remove('is-disabled');
      btnLeft?.removeAttribute('disabled');
      btnRight?.removeAttribute('disabled');
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      if (dots.length > 0) {
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        const activeIndex = Math.min(Math.round(progress * (dots.length - 1)), dots.length - 1);
        
        dots.forEach((dot, idx) => {
          if (idx === activeIndex) {
            dot.classList.add('is-active');
            dot.setAttribute('aria-selected', 'true');
          } else {
            dot.classList.remove('is-active');
            dot.setAttribute('aria-selected', 'false');
          }
        });
      }
    }
  };

  const renderDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';

    const visibleCards = getVisibleCards();
    if (visibleCards.length <= 1) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 5) return;

    const step = getScrollStep();
    // Limita entre 3 e 5 dots no máximo para não poluir telas pequenas
    const rawPages = Math.ceil(maxScroll / step) + 1;
    const pageCount = Math.min(Math.max(3, rawPages), 5);

    for (let i = 0; i < pageCount; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `carousel-dot ${i === 0 ? 'is-active' : ''}`;
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
      dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');

      dot.addEventListener('click', () => {
        const targetScroll = (maxScroll / (pageCount - 1)) * i;
        track.scrollTo({ left: targetScroll, behavior: 'smooth' });
      });

      dotsContainer.appendChild(dot);
    }
  };

  if (btnLeft) {
    btnLeft.addEventListener('click', (e) => {
      e.preventDefault();
      const scrollLeft = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const step = getScrollStep();

      // Cíclico: se estiver no início, vai para o final
      if (scrollLeft <= 10) {
        track.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        track.scrollTo({ left: Math.max(0, scrollLeft - step), behavior: 'smooth' });
      }
    });
  }

  if (btnRight) {
    btnRight.addEventListener('click', (e) => {
      e.preventDefault();
      const scrollLeft = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const step = getScrollStep();

      // Cíclico: se estiver no final, volta para o início
      if (scrollLeft >= maxScroll - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollTo({ left: Math.min(maxScroll, scrollLeft + step), behavior: 'smooth' });
      }
    });
  }

  // Filtragem por Abas dos Pilares de Serviços
  if (pillarBtns && pillarBtns.length && cards && cards.length) {
    pillarBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPillar = btn.getAttribute('data-target-pillar');

        pillarBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        cards.forEach(card => {
          const cardPillar = card.getAttribute('data-pillar');
          if (targetPillar === 'todos' || cardPillar === targetPillar) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            card.style.transform = 'translateY(6px)';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.display = 'none';
          }
        });

        track.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(() => {
          renderDots();
          updateControls();
        }, 120);
      });
    });
  }

  let scrollTimeout;
  track.addEventListener('scroll', () => {
    updateControls();
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateControls, 100);
  }, { passive: true });

  window.addEventListener('resize', () => {
    renderDots();
    updateControls();
  }, { passive: true });

  renderDots();
  setTimeout(updateControls, 100);
}

export class ProductCarouselElement extends HTMLElement {
  connectedCallback() {
    const track = this.querySelector('.product-carousel-track');
    const btnLeft = this.querySelector('.carousel-pagination-arrow.carousel-arrow-prev, .product-carousel-btn-prev');
    const btnRight = this.querySelector('.carousel-pagination-arrow.carousel-arrow-next, .product-carousel-btn-next');
    const dotsContainer = this.querySelector('.carousel-dots-list');
    const pillarBtns = this.querySelectorAll('.pillar-btn');
    const cards = this.querySelectorAll('.product-carousel-card, .service-carousel-card');

    setupSingleCarousel(track, btnLeft, btnRight, dotsContainer, pillarBtns, cards);
  }
}

if (!customElements.get('product-carousel')) {
  customElements.define('product-carousel', ProductCarouselElement);
}

/**
 * Inicialização dos carrosséis e do sistema de filtragem por pilares de serviços
 */
export function setupProductCarousels(container = document) {
  const sections = container.querySelectorAll('.services-catalog-section, .product-carousel-section, .product-carousel-wrapper');

  sections.forEach(section => {
    const track = section.querySelector('.product-carousel-track');
    const btnLeft = section.querySelector('.carousel-pagination-arrow.carousel-arrow-prev, .product-carousel-btn-prev');
    const btnRight = section.querySelector('.carousel-pagination-arrow.carousel-arrow-next, .product-carousel-btn-next');
    const dotsContainer = section.querySelector('.carousel-dots-list');
    const pillarBtns = section.querySelectorAll('.pillar-btn');
    const cards = section.querySelectorAll('.product-carousel-card, .service-carousel-card');

    setupSingleCarousel(track, btnLeft, btnRight, dotsContainer, pillarBtns, cards);
  });
}
