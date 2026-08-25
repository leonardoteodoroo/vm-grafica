/**
 * Componente Global Reutilizável de FAQ estilo Chat Accordion
 * Inspirado no FaqChatAccordion (Radix / Chat Bubble UI) adaptado para Vanilla JS & Web Components
 * Compatível com o ecossistema do projeto VM Gráfica.
 */

export class FaqChatAccordion extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupInteractions();
  }

  render() {
    const timestamp = this.getAttribute('timestamp') || 'Atendimento VM Gráfica • Respondemos em minutos';
    const items = Array.from(this.querySelectorAll('.faq-chat-item, .faq-item, details.faq-accordion-item'));

    if (items.length === 0) return;

    // Se os filhos já estiverem estruturados com os novos elementos, apenas anexa listeners
    if (this.querySelector('.faq-chat-list')) {
      return;
    }

    const data = items.map((item, idx) => {
      const questionEl = item.querySelector('.faq-question, summary, [slot="question"]') || item.firstElementChild;
      const answerEl = item.querySelector('.faq-answer, .faq-accordion-body, [slot="answer"]') || item.lastElementChild;
      
      const questionText = questionEl ? questionEl.textContent.trim() : `Dúvida #${idx + 1}`;
      const answerHtml = answerEl ? answerEl.innerHTML.trim() : '';
      const icon = item.getAttribute('data-icon') || this.getDefaultIcon(idx);
      const iconPos = item.getAttribute('data-icon-pos') || (idx % 2 === 0 ? 'left' : 'right');
      const isOpen = item.classList.contains('open') || item.hasAttribute('open') || idx === 0;

      return { id: idx + 1, questionText, answerHtml, icon, iconPos, isOpen };
    });

    this.innerHTML = `
      <div class="faq-chat-container" role="region" aria-label="Perguntas Frequentes">
        ${timestamp ? `
          <div class="faq-chat-timestamp">
            <span class="faq-chat-status-dot" aria-hidden="true"></span>
            <span>${timestamp}</span>
          </div>
        ` : ''}

        <div class="faq-chat-list" role="presentation">
          ${data.map(item => `
            <div class="faq-chat-card ${item.isOpen ? 'is-open' : ''}" data-id="${item.id}">
              <button 
                type="button" 
                class="faq-chat-trigger" 
                aria-expanded="${item.isOpen ? 'true' : 'false'}"
                aria-controls="faq-answer-${item.id}"
                id="faq-trigger-${item.id}"
              >
                <div class="faq-chat-user-bubble ${item.isOpen ? 'active' : ''}">
                  ${item.icon ? `
                    <span 
                      class="faq-chat-sticker sticker-${item.iconPos}" 
                      aria-hidden="true"
                    >
                      ${item.icon}
                    </span>
                  ` : ''}
                  <span class="faq-chat-question-text">${item.questionText}</span>
                </div>

                <div class="faq-chat-toggle-btn" aria-hidden="true">
                  <svg class="icon-plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </button>

              <div 
                class="faq-chat-collapse" 
                id="faq-answer-${item.id}" 
                role="region" 
                aria-labelledby="faq-trigger-${item.id}"
              >
                <div class="faq-chat-answer-thread">
                  <div class="faq-chat-assistant-bubble">
                    <div class="faq-chat-bubble-arrow" aria-hidden="true"></div>
                    <div class="faq-chat-answer-content">
                      ${item.answerHtml}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  getDefaultIcon(idx) {
    const icons = ['🎨', '📍', '💳', '⚡', '✨', '📦', '☕', '🔥'];
    return icons[idx % icons.length];
  }

  setupInteractions() {
    const triggers = this.querySelectorAll('.faq-chat-trigger');

    triggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('.faq-chat-card');
        if (!card) return;

        const isCurrentlyOpen = card.classList.contains('is-open');

        // Fecha todos os outros itens do acordeão para manter o fluxo limpo
        const allCards = this.querySelectorAll('.faq-chat-card');
        allCards.forEach(c => {
          if (c !== card) {
            c.classList.remove('is-open');
            const otherBtn = c.querySelector('.faq-chat-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            const otherBubble = c.querySelector('.faq-chat-user-bubble');
            if (otherBubble) otherBubble.classList.remove('active');
          }
        });

        // Alterna o item clicado
        if (isCurrentlyOpen) {
          card.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          card.querySelector('.faq-chat-user-bubble')?.classList.remove('active');
        } else {
          card.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          card.querySelector('.faq-chat-user-bubble')?.classList.add('active');
        }
      });
    });
  }
}

if (!customElements.get('faq-chat-accordion')) {
  customElements.define('faq-chat-accordion', FaqChatAccordion);
}

/**
 * Função utilitária para inicializar acordeões chat clássicos se não usarem Web Component diretamente
 */
export function setupFaqChatInteractions(container = document) {
  const cards = container.querySelectorAll('.faq-chat-card');
  if (!cards.length) return;

  cards.forEach(card => {
    const trigger = card.querySelector('.faq-chat-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyOpen = card.classList.contains('is-open');
      
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('is-open');
          const btn = c.querySelector('.faq-chat-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
          c.querySelector('.faq-chat-user-bubble')?.classList.remove('active');
        }
      });

      if (isCurrentlyOpen) {
        card.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        card.querySelector('.faq-chat-user-bubble')?.classList.remove('active');
      } else {
        card.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        card.querySelector('.faq-chat-user-bubble')?.classList.add('active');
      }
    });
  });
}
