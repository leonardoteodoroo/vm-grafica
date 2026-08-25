/**
 * Componente Global Reutilizável de Rodapé (Custom Web Component)
 * Utilizado de forma centralizada em todas as páginas: <site-footer></site-footer>
 */

export class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
      <!-- =========================================================================
         FOOTER MASTER GLOBAL (MULTI-COLUNA LADO A LADO NO DESKTOP E NO MOBILE)
         ========================================================================= -->
      <footer class="footer">
        <div class="footer-grid">
          <!-- Bloco 1: Marca & Resumo -->
          <div class="footer-col footer-brand-col">
            <div class="nav-brand" style="margin-bottom: 12px;">
              <img src="/assets/images/logo-vm-grafica.jpg" alt="Logo VM Gráfica" class="brand-logo-img">
              <div class="brand-text-block">
                <span class="brand-title" style="color: #FFFFFF;">VM GRÁFICA</span>
                <span class="brand-subtitle" style="color: #38BDF8;">Rápida & Personalizados</span>
              </div>
            </div>
            <p class="footer-brand-desc">
              Sua gráfica rápida no Conjunto Primavera, Goiânia – GO. Qualidade expressa em canecas fotográficas, cartões 300g, copos DTF UV em alto relevo, agendas e papelaria personalizada.
            </p>
            <div class="footer-tags">
              <span class="footer-tag">⚡ Entrega Expressa</span>
              <span class="footer-tag">🎨 Criação de Arte</span>
            </div>
          </div>

          <!-- Bloco 2: Catálogo (Lado a Lado no Mobile) -->
          <div class="footer-col">
            <h4 class="footer-col-title">Catálogo</h4>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="/produto-caneca.html">Canecas 325ml</a></li>
              <li class="footer-link-item"><a href="/#produtos">Cartões 300g</a></li>
              <li class="footer-link-item"><a href="/#produtos">Copos DTF UV</a></li>
              <li class="footer-link-item"><a href="/#produtos">Agendas & Blocos</a></li>
              <li class="footer-link-item"><a href="/#produtos">Topos de Bolo</a></li>
              <li class="footer-link-item"><a href="/#produtos">Comandas</a></li>
            </ul>
          </div>

          <!-- Bloco 3: Acabamentos (Lado a Lado no Mobile) -->
          <div class="footer-col">
            <h4 class="footer-col-title">Acabamentos</h4>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="/#acabamentos">DTF UV Relevo</a></li>
              <li class="footer-link-item"><a href="/#acabamentos">Verniz Local</a></li>
              <li class="footer-link-item"><a href="/#acabamentos">Bopp Fosco</a></li>
              <li class="footer-link-item"><a href="/#acabamentos">Papel Kraft</a></li>
              <li class="footer-link-item"><a href="/#acabamentos">Corte Especial</a></li>
            </ul>
          </div>

          <!-- Bloco 4: Ajuda (Lado a Lado no Mobile) -->
          <div class="footer-col">
            <h4 class="footer-col-title">Ajuda</h4>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="/#faq">Dúvidas Frequentes</a></li>
              <li class="footer-link-item"><a href="/#avaliacoes">Avaliações Google</a></li>
              <li class="footer-link-item"><a href="/#simulador">Como Pedir Online</a></li>
              <li class="footer-link-item"><a href="https://wa.me/5562993725371" target="_blank" rel="noopener noreferrer">Suporte WhatsApp</a></li>
              <li class="footer-link-item"><a href="/#acabamentos">Guia de Impressão</a></li>
            </ul>
          </div>

          <!-- Bloco 5: Atendimento & Localização -->
          <div class="footer-col footer-contact-col">
            <h4 class="footer-col-title">Atendimento</h4>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong>Rua CP, 05 - Qd 09 LT 18</strong><br>
                Conjunto Primavera, Goiânia - GO
              </div>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-yellow)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div>
                Seg a Sex: 08h às 18h<br>
                Sáb: 08h às 12h
              </div>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-whatsapp)" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <div>
                <a href="https://wa.me/5562993725371" target="_blank" rel="noopener noreferrer" style="color: #4ADE80; font-weight: 700;">(62) 99372-5371</a>
              </div>
            </div>
          </div>

          <!-- Bloco 6: Institucional (Novo Menu Solicitado) -->
          <div class="footer-col">
            <h4 class="footer-col-title">Institucional</h4>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="/institucional.html#entregas">Prazos & Envios</a></li>
              <li class="footer-link-item"><a href="/institucional.html#trocas">Trocas & Garantia</a></li>
              <li class="footer-link-item"><a href="/institucional.html#privacidade">Privacidade & Cookies</a></li>
              <li class="footer-link-item"><a href="/institucional.html#termos">Termos de Serviço</a></li>
              <li class="footer-link-item"><a href="/institucional.html#confiabilidade">A VM é Confiável?</a></li>
              <li class="footer-link-item"><a href="/institucional.html#aviso-legal">Aviso Legal</a></li>
            </ul>
          </div>
        </div>

        <!-- Barra Inferior Limpa de Direitos (Sem links duplicados) -->
        <div class="footer-bottom">
          <p class="footer-copyright" style="text-align: center; width: 100%; margin: 0 auto;">
            &copy; ${year} VM Gráfica Rápida & Papelaria Personalizada. Goiânia - GO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    `;
  }
}

if (!customElements.get('site-footer')) {
  customElements.define('site-footer', SiteFooter);
}
