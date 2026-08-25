(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function m(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=m(r);fetch(r.href,i)}})();class T extends HTMLElement{connectedCallback(){const a=new Date().getFullYear();this.innerHTML=`
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

          <!-- Bloco 4: Ajuda & Info (Lado a Lado no Mobile) -->
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
        </div>

        <!-- Barra Inferior de Direitos & Links -->
        <div class="footer-bottom">
          <p class="footer-copyright">
            &copy; ${a} VM Gráfica Rápida & Papelaria Personalizada. Goiânia - GO. Todos os direitos reservados.
          </p>
          <nav class="footer-legal-nav" aria-label="Links Complementares">
            <a href="/" class="footer-legal-link">Página Inicial</a>
            <span class="footer-legal-sep" aria-hidden="true">&bull;</span>
            <a href="/produto-caneca.html" class="footer-legal-link">Caneca 325ml</a>
            <span class="footer-legal-sep" aria-hidden="true">&bull;</span>
            <a href="/#acabamentos" class="footer-legal-link">Acabamentos Nobres</a>
            <span class="footer-legal-sep" aria-hidden="true">&bull;</span>
            <a href="/#faq" class="footer-legal-link">Dúvidas Frequentes</a>
          </nav>
        </div>
      </footer>
    `}}customElements.get("site-footer")||customElements.define("site-footer",T);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("navMenuToggle"),a=document.querySelector(".nav-links");e&&a&&(e.addEventListener("click",m=>{m.stopPropagation();const o=a.classList.toggle("is-open");e.setAttribute("aria-expanded",o?"true":"false")}),document.addEventListener("click",m=>{!e.contains(m.target)&&!a.contains(m.target)&&(a.classList.remove("is-open"),e.setAttribute("aria-expanded","false"))})),F(),O()});function F(){var x;const e=document.getElementById("heroCtaBtn"),a=document.getElementById("heroCtaSlot");if(!e||!a)return;const m=window.matchMedia("(prefers-reduced-motion: reduce)");let o=null,r=null,i=!1;const u=(s,n=0,p=1)=>Math.min(Math.max(s,n),p),g=(s,n,p)=>s+(n-s)*p;function L(){i||(document.body.appendChild(e),i=!0)}function y(){i&&(e.classList.remove("is-docked","is-morphing"),a.classList.remove("is-reserved"),a.style.removeProperty("--hero-cta-slot-width"),a.style.removeProperty("--hero-cta-slot-height"),e.style.removeProperty("--morph-width"),e.style.removeProperty("--morph-height"),e.style.removeProperty("--morph-x"),e.style.removeProperty("--morph-y"),e.style.removeProperty("--morph-text-opacity"),e.style.removeProperty("--morph-icon-opacity"),e.style.removeProperty("--morph-icon-scale"),a.appendChild(e),i=!1)}function E(){i&&y();const s=e.getBoundingClientRect(),n=window.scrollY||window.pageYOffset,p=s.top+n,l=Math.max(0,p-window.innerHeight*.62),t=u(window.innerHeight*.48,300,440),c=window.innerWidth<=768?58:56;a.style.setProperty("--hero-cta-slot-width",`${s.width}px`),a.style.setProperty("--hero-cta-slot-height",`${s.height}px`),a.classList.add("is-reserved"),L(),e.classList.add("is-morphing"),e.style.setProperty("--morph-width",`${c}px`),e.style.setProperty("--morph-height",`${c}px`),e.style.setProperty("--morph-x","0px"),e.style.setProperty("--morph-y","0px");const d=e.getBoundingClientRect();return{sourceLeft:s.left,sourceTop:p-l,sourceWidth:s.width,sourceHeight:s.height,targetLeft:d.left,targetTop:d.top,targetRight:d.right,targetBottom:d.bottom,targetSize:c,startScroll:l,travel:t}}function w(s){const n=s*s*(3-2*s),p=g(o.sourceWidth,o.targetSize,n),l=g(o.sourceHeight,o.targetSize,n),t=g(o.sourceLeft,o.targetLeft,n),c=g(o.sourceTop,o.targetTop,n),d=o.targetRight-p,k=o.targetBottom-l,B=1-u((s-.12)/.52),v=u((s-.38)/.4);L(),e.classList.add("is-morphing"),e.classList.toggle("is-docked",s>=.995),e.style.setProperty("--morph-width",`${p.toFixed(2)}px`),e.style.setProperty("--morph-height",`${l.toFixed(2)}px`),e.style.setProperty("--morph-x",`${(t-d).toFixed(2)}px`),e.style.setProperty("--morph-y",`${(c-k).toFixed(2)}px`),e.style.setProperty("--morph-text-opacity",B.toFixed(3)),e.style.setProperty("--morph-icon-opacity",v.toFixed(3)),e.style.setProperty("--morph-icon-scale",g(.72,1,v).toFixed(3))}function P(){if(r=null,o||(o=E()),m.matches){a.getBoundingClientRect().bottom<=0?w(1):y();return}const s=window.scrollY||window.pageYOffset,n=u((s-o.startScroll)/o.travel);n<=0?y():w(n)}function b(){r===null&&(r=window.requestAnimationFrame(P))}function f(){o=null,b()}window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",f,{passive:!0}),window.addEventListener("orientationchange",f,{passive:!0}),window.addEventListener("pageshow",f),(x=window.visualViewport)==null||x.addEventListener("resize",f,{passive:!0})}function O(){const e=document.getElementById("main-product-img"),a=document.querySelectorAll(".thumb-card"),m=document.querySelectorAll(".model-option"),o=document.getElementById("qty-input"),r=document.getElementById("qty-minus"),i=document.getElementById("qty-plus"),u=document.querySelectorAll(".quick-qty-btn"),g=document.querySelectorAll(".tier-card"),L=document.getElementById("summary-unit-price"),y=document.getElementById("summary-total-price"),E=document.getElementById("summary-items-count"),w=document.getElementById("sticky-total-price"),P=document.getElementById("btn-buy-whatsapp"),b=document.getElementById("btn-sticky-whatsapp");if(!e||!o)return;a.forEach(t=>{t.addEventListener("click",()=>{a.forEach(k=>k.classList.remove("is-active")),t.classList.add("is-active");const c=t.getAttribute("data-img"),d=t.getAttribute("data-alt");e.style.opacity="0.3",setTimeout(()=>{e.src=c,e.alt=d,e.style.opacity="1"},120)})});let f="classica",x="Branca Clássica",s=0;m.forEach(t=>{t.addEventListener("click",()=>{var c;m.forEach(d=>d.classList.remove("is-selected")),t.classList.add("is-selected"),f=t.getAttribute("data-model"),x=((c=t.querySelector(".opt-name"))==null?void 0:c.textContent)||"Branca Clássica",s=parseFloat(t.getAttribute("data-extra")||"0"),f==="classica"?n(0):f==="magica"?n(1):f==="colorida"?n(2):f==="presente"&&n(4),l()})});function n(t){a[t]&&a[t].click()}function p(t){return t>=50?19.9:t>=15?24.9:t>=5?29.9:35}function l(){let t=parseInt(o.value,10);(isNaN(t)||t<1)&&(t=1);const d=p(t)+s,k=d*t,B=d.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),v=k.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});L&&(L.textContent=`${B} / un`),y&&(y.textContent=v),E&&(E.textContent=`(${t} ${t===1?"unidade selecionada":"unidades selecionadas"})`),w&&(w.textContent=v),g.forEach(h=>{const A=parseInt(h.getAttribute("data-min"),10),I=parseInt(h.getAttribute("data-max"),10);t>=A&&t<=I?h.classList.add("is-current"):h.classList.remove("is-current")}),u.forEach(h=>{parseInt(h.getAttribute("data-qty"),10)===t?h.classList.add("is-active"):h.classList.remove("is-active")});const M=`Olá VM Gráfica! Gostaria de fazer o pedido de:

📦 *Produto:* Caneca de Porcelana 325ml
✨ *Modelo:* ${x}
🔢 *Quantidade:* ${t} un
💵 *Valor Unitário:* ${B}
💰 *Total Estimado:* ${v}

Podem me orientar sobre o envio da arte e prazo de produção?`,C=`https://wa.me/5562993725371?text=${encodeURIComponent(M)}`;P&&(P.href=C),b&&(b.href=C)}r&&r.addEventListener("click",()=>{let t=parseInt(o.value,10)||1;t>1&&(o.value=t-1,l())}),i&&i.addEventListener("click",()=>{let t=parseInt(o.value,10)||1;o.value=t+1,l()}),o&&(o.addEventListener("input",l),o.addEventListener("change",l)),u.forEach(t=>{t.addEventListener("click",()=>{const c=parseInt(t.getAttribute("data-qty"),10);o.value=c,l()})}),l()}
