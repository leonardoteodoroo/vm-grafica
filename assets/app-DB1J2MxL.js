(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function p(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=p(a);fetch(a.href,r)}})();class I extends HTMLElement{connectedCallback(){const i=new Date().getFullYear();this.innerHTML=`
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
          <div class="footer-col footer-col-catalogo">
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
          <div class="footer-col footer-col-acabamentos">
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
          <div class="footer-col footer-col-ajuda">
            <h4 class="footer-col-title">Ajuda</h4>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="/#faq">Dúvidas Frequentes</a></li>
              <li class="footer-link-item"><a href="/#avaliacoes">Avaliações Google</a></li>
              <li class="footer-link-item"><a href="/#simulador">Como Pedir Online</a></li>
              <li class="footer-link-item"><a href="https://wa.me/5562993725371" target="_blank" rel="noopener noreferrer">Suporte WhatsApp</a></li>
              <li class="footer-link-item"><a href="/#acabamentos">Guia de Impressão</a></li>
            </ul>
          </div>

          <!-- Bloco 5: Atendimento & Localização (LADO A LADO COM INSTITUCIONAL NO MOBILE) -->
          <div class="footer-col footer-contact-col footer-col-atendimento">
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

          <!-- Bloco 6: Institucional (LADO A LADO COM ATENDIMENTO NO MOBILE) -->
          <div class="footer-col footer-col-institucional">
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
            &copy; ${i} VM Gráfica Rápida & Papelaria Personalizada. Goiânia - GO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    `}}customElements.get("site-footer")||customElements.define("site-footer",I);document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("navMenuToggle"),i=document.querySelector(".nav-links");e&&i&&(e.addEventListener("click",p=>{p.stopPropagation();const o=i.classList.toggle("is-open");e.setAttribute("aria-expanded",o?"true":"false")}),document.addEventListener("click",p=>{!e.contains(p.target)&&!i.contains(p.target)&&(i.classList.remove("is-open"),e.setAttribute("aria-expanded","false"))})),T(),S()});function T(){var k;const e=document.getElementById("heroCtaBtn"),i=document.getElementById("heroCtaSlot");if(!e||!i)return;const p=window.matchMedia("(prefers-reduced-motion: reduce)");let o=null,a=null,r=!1;const u=(s,n=0,m=1)=>Math.min(Math.max(s,n),m),g=(s,n,m)=>s+(n-s)*m;function L(){r||(document.body.appendChild(e),r=!0)}function y(){r&&(e.classList.remove("is-docked","is-morphing"),i.classList.remove("is-reserved"),i.style.removeProperty("--hero-cta-slot-width"),i.style.removeProperty("--hero-cta-slot-height"),e.style.removeProperty("--morph-width"),e.style.removeProperty("--morph-height"),e.style.removeProperty("--morph-x"),e.style.removeProperty("--morph-y"),e.style.removeProperty("--morph-text-opacity"),e.style.removeProperty("--morph-icon-opacity"),e.style.removeProperty("--morph-icon-scale"),i.appendChild(e),r=!1)}function b(){r&&y();const s=e.getBoundingClientRect(),n=window.scrollY||window.pageYOffset,m=s.top+n,l=Math.max(0,m-window.innerHeight*.62),t=u(window.innerHeight*.48,300,440),c=window.innerWidth<=768?58:56;i.style.setProperty("--hero-cta-slot-width",`${s.width}px`),i.style.setProperty("--hero-cta-slot-height",`${s.height}px`),i.classList.add("is-reserved"),L(),e.classList.add("is-morphing"),e.style.setProperty("--morph-width",`${c}px`),e.style.setProperty("--morph-height",`${c}px`),e.style.setProperty("--morph-x","0px"),e.style.setProperty("--morph-y","0px");const d=e.getBoundingClientRect();return{sourceLeft:s.left,sourceTop:m-l,sourceWidth:s.width,sourceHeight:s.height,targetLeft:d.left,targetTop:d.top,targetRight:d.right,targetBottom:d.bottom,targetSize:c,startScroll:l,travel:t}}function w(s){const n=s*s*(3-2*s),m=g(o.sourceWidth,o.targetSize,n),l=g(o.sourceHeight,o.targetSize,n),t=g(o.sourceLeft,o.targetLeft,n),c=g(o.sourceTop,o.targetTop,n),d=o.targetRight-m,x=o.targetBottom-l,B=1-u((s-.12)/.52),v=u((s-.38)/.4);L(),e.classList.add("is-morphing"),e.classList.toggle("is-docked",s>=.995),e.style.setProperty("--morph-width",`${m.toFixed(2)}px`),e.style.setProperty("--morph-height",`${l.toFixed(2)}px`),e.style.setProperty("--morph-x",`${(t-d).toFixed(2)}px`),e.style.setProperty("--morph-y",`${(c-x).toFixed(2)}px`),e.style.setProperty("--morph-text-opacity",B.toFixed(3)),e.style.setProperty("--morph-icon-opacity",v.toFixed(3)),e.style.setProperty("--morph-icon-scale",g(.72,1,v).toFixed(3))}function P(){if(a=null,o||(o=b()),p.matches){i.getBoundingClientRect().bottom<=0?w(1):y();return}const s=window.scrollY||window.pageYOffset,n=u((s-o.startScroll)/o.travel);n<=0?y():w(n)}function E(){a===null&&(a=window.requestAnimationFrame(P))}function f(){o=null,E()}window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",f,{passive:!0}),window.addEventListener("orientationchange",f,{passive:!0}),window.addEventListener("pageshow",f),(k=window.visualViewport)==null||k.addEventListener("resize",f,{passive:!0})}function S(){const e=document.getElementById("main-product-img"),i=document.querySelectorAll(".thumb-card"),p=document.querySelectorAll(".model-option"),o=document.getElementById("qty-input"),a=document.getElementById("qty-minus"),r=document.getElementById("qty-plus"),u=document.querySelectorAll(".quick-qty-btn"),g=document.querySelectorAll(".tier-card"),L=document.getElementById("summary-unit-price"),y=document.getElementById("summary-total-price"),b=document.getElementById("summary-items-count"),w=document.getElementById("sticky-total-price"),P=document.getElementById("btn-buy-whatsapp"),E=document.getElementById("btn-sticky-whatsapp");if(!e||!o)return;i.forEach(t=>{t.addEventListener("click",()=>{i.forEach(x=>x.classList.remove("is-active")),t.classList.add("is-active");const c=t.getAttribute("data-img"),d=t.getAttribute("data-alt");e.style.opacity="0.3",setTimeout(()=>{e.src=c,e.alt=d,e.style.opacity="1"},120)})});let f="classica",k="Branca Clássica",s=0;p.forEach(t=>{t.addEventListener("click",()=>{var c;p.forEach(d=>d.classList.remove("is-selected")),t.classList.add("is-selected"),f=t.getAttribute("data-model"),k=((c=t.querySelector(".opt-name"))==null?void 0:c.textContent)||"Branca Clássica",s=parseFloat(t.getAttribute("data-extra")||"0"),f==="classica"?n(0):f==="magica"?n(1):f==="colorida"?n(2):f==="presente"&&n(4),l()})});function n(t){i[t]&&i[t].click()}function m(t){return t>=50?19.9:t>=15?24.9:t>=5?29.9:35}function l(){let t=parseInt(o.value,10);(isNaN(t)||t<1)&&(t=1);const d=m(t)+s,x=d*t,B=d.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),v=x.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});L&&(L.textContent=`${B} / un`),y&&(y.textContent=v),b&&(b.textContent=`(${t} ${t===1?"unidade selecionada":"unidades selecionadas"})`),w&&(w.textContent=v),g.forEach(h=>{const A=parseInt(h.getAttribute("data-min"),10),O=parseInt(h.getAttribute("data-max"),10);t>=A&&t<=O?h.classList.add("is-current"):h.classList.remove("is-current")}),u.forEach(h=>{parseInt(h.getAttribute("data-qty"),10)===t?h.classList.add("is-active"):h.classList.remove("is-active")});const M=`Olá VM Gráfica! Gostaria de fazer o pedido de:

📦 *Produto:* Caneca de Porcelana 325ml
✨ *Modelo:* ${k}
🔢 *Quantidade:* ${t} un
💵 *Valor Unitário:* ${B}
💰 *Total Estimado:* ${v}

Podem me orientar sobre o envio da arte e prazo de produção?`,C=`https://wa.me/5562993725371?text=${encodeURIComponent(M)}`;P&&(P.href=C),E&&(E.href=C)}a&&a.addEventListener("click",()=>{let t=parseInt(o.value,10)||1;t>1&&(o.value=t-1,l())}),r&&r.addEventListener("click",()=>{let t=parseInt(o.value,10)||1;o.value=t+1,l()}),o&&(o.addEventListener("input",l),o.addEventListener("change",l)),u.forEach(t=>{t.addEventListener("click",()=>{const c=parseInt(t.getAttribute("data-qty"),10);o.value=c,l()})}),l()}
