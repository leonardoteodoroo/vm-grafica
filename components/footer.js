/**
 * Componente Global Reutilizável de Rodapé (Custom Web Component)
 * Uso: <site-footer></site-footer> em qualquer página HTML
 */

export class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer-master" role="contentinfo">
        <div class="footer-grid">
          <div class="footer-col footer-brand-col">
            <div class="footer-brand-header">
              <img src="/assets/images/logo-vm-grafica.jpg" alt="Logotipo VM Gráfica" class="footer-brand-logo" width="40" height="40">
              <div>
                <span class="footer-brand-name">VM GRÁFICA</span>
                <span class="footer-brand-sub">Papelaria & Personalizados</span>
              </div>
            </div>
            <p class="footer-brand-desc">
              Sua gráfica rápida no Conjunto Primavera, Goiânia – GO. Qualidade expressa em canecas fotográficas, copos DTF UV, cartões 300g e papelaria personalizada.
            </p>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Catálogo</h4>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="/produto-caneca.html">Canecas Personalizadas</a></li>
              <li class="footer-link-item"><a href="/#simulador">Copos DTF UV</a></li>
              <li class="footer-link-item"><a href="/#simulador">Cartões 300g</a></li>
              <li class="footer-link-item"><a href="/#simulador">Agendas & Blocos</a></li>
              <li class="footer-link-item"><a href="/#simulador">Topos de Bolo</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Ajuda & Info</h4>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="/#faq">Dúvidas Frequentes</a></li>
              <li class="footer-link-item"><a href="/#avaliacoes">Avaliações Google</a></li>
              <li class="footer-link-item"><a href="https://wa.me/5562993725371" target="_blank">Suporte WhatsApp</a></li>
              <li class="footer-link-item"><a href="/#acabamentos">Guia de Impressão</a></li>
            </ul>
          </div>

          <div class="footer-col footer-contact-col">
            <h4 class="footer-col-title">Atendimento</h4>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong>Rua CP, 05 - Qd 09 LT 18</strong><br>
                Conjunto Primavera, Goiânia - GO
              </div>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-whatsapp)" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <div>
                <a href="https://wa.me/5562993725371" target="_blank" style="color: #4ADE80; font-weight: 700;">(62) 99372-5371</a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-flex">
            <p class="footer-copyright">
              &copy; ${year} VM Gráfica Rápida & Papelaria Personalizada. Goiânia - GO. Todos os direitos reservados.
            </p>
            <nav class="footer-legal-nav" aria-label="Links Complementares">
              <a href="/" class="footer-legal-link">Página Inicial</a>
              <span class="footer-legal-sep" aria-hidden="true">&bull;</span>
              <a href="/produto-caneca.html" class="footer-legal-link">Caneca 325ml</a>
              <span class="footer-legal-sep" aria-hidden="true">&bull;</span>
              <a href="/#faq" class="footer-legal-link">Dúvidas</a>
            </nav>
          </div>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get('site-footer')) {
  customElements.define('site-footer', SiteFooter);
}
