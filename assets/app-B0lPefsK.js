(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();class B extends HTMLElement{connectedCallback(){const s=new Date().getFullYear();this.innerHTML=`
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
            &copy; ${s} VM Gráfica Rápida & Papelaria Personalizada. Goiânia - GO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    `}}customElements.get("site-footer")||customElements.define("site-footer",B);class I extends HTMLElement{connectedCallback(){this.render(),this.setupInteractions()}render(){const s=this.getAttribute("timestamp")||"Atendimento VM Gráfica • Respondemos em minutos",o=Array.from(this.querySelectorAll(".faq-chat-item, .faq-item, details.faq-accordion-item"));if(o.length===0||this.querySelector(".faq-chat-list"))return;const a=o.map((t,i)=>{const d=t.querySelector('.faq-question, summary, [slot="question"]')||t.firstElementChild,h=t.querySelector('.faq-answer, .faq-accordion-body, [slot="answer"]')||t.lastElementChild,m=d?d.textContent.trim():`Dúvida #${i+1}`,v=h?h.innerHTML.trim():"",y=t.getAttribute("data-icon")||this.getDefaultIcon(i),u=t.getAttribute("data-icon-pos")||(i%2===0?"left":"right"),p=t.classList.contains("open")||t.hasAttribute("open")||i===0;return{id:i+1,questionText:m,answerHtml:v,icon:y,iconPos:u,isOpen:p}});this.innerHTML=`
      <div class="faq-chat-container" role="region" aria-label="Perguntas Frequentes">
        ${`
          <div class="faq-chat-timestamp">
            <span class="faq-chat-status-dot" aria-hidden="true"></span>
            <span>${s}</span>
          </div>
        `}

        <div class="faq-chat-list" role="presentation">
          ${a.map(t=>`
            <div class="faq-chat-card ${t.isOpen?"is-open":""}" data-id="${t.id}">
              <button 
                type="button" 
                class="faq-chat-trigger" 
                aria-expanded="${t.isOpen?"true":"false"}"
                aria-controls="faq-answer-${t.id}"
                id="faq-trigger-${t.id}"
              >
                <div class="faq-chat-user-bubble ${t.isOpen?"active":""}">
                  ${t.icon?`
                    <span 
                      class="faq-chat-sticker sticker-${t.iconPos}" 
                      aria-hidden="true"
                    >
                      ${t.icon}
                    </span>
                  `:""}
                  <span class="faq-chat-question-text">${t.questionText}</span>
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
                id="faq-answer-${t.id}" 
                role="region" 
                aria-labelledby="faq-trigger-${t.id}"
              >
                <div class="faq-chat-answer-thread">
                  <div class="faq-chat-assistant-bubble">
                    <div class="faq-chat-bubble-arrow" aria-hidden="true"></div>
                    <div class="faq-chat-answer-content">
                      ${t.answerHtml}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}getDefaultIcon(s){const o=["🎨","📍","💳","⚡","✨","📦","☕","🔥"];return o[s%o.length]}setupInteractions(){this.querySelectorAll(".faq-chat-trigger").forEach(o=>{o.addEventListener("click",a=>{var h,m;a.preventDefault();const t=o.closest(".faq-chat-card");if(!t)return;const i=t.classList.contains("is-open");this.querySelectorAll(".faq-chat-card").forEach(v=>{if(v!==t){v.classList.remove("is-open");const y=v.querySelector(".faq-chat-trigger");y&&y.setAttribute("aria-expanded","false");const u=v.querySelector(".faq-chat-user-bubble");u&&u.classList.remove("active")}}),i?(t.classList.remove("is-open"),o.setAttribute("aria-expanded","false"),(h=t.querySelector(".faq-chat-user-bubble"))==null||h.classList.remove("active")):(t.classList.add("is-open"),o.setAttribute("aria-expanded","true"),(m=t.querySelector(".faq-chat-user-bubble"))==null||m.classList.add("active"))})})}}customElements.get("faq-chat-accordion")||customElements.define("faq-chat-accordion",I);function O(e=document){const s=e.querySelectorAll(".faq-chat-card");s.length&&s.forEach(o=>{const a=o.querySelector(".faq-chat-trigger");a&&a.addEventListener("click",t=>{var d,h;t.preventDefault();const i=o.classList.contains("is-open");s.forEach(m=>{var v;if(m!==o){m.classList.remove("is-open");const y=m.querySelector(".faq-chat-trigger");y&&y.setAttribute("aria-expanded","false"),(v=m.querySelector(".faq-chat-user-bubble"))==null||v.classList.remove("active")}}),i?(o.classList.remove("is-open"),a.setAttribute("aria-expanded","false"),(d=o.querySelector(".faq-chat-user-bubble"))==null||d.classList.remove("active")):(o.classList.add("is-open"),a.setAttribute("aria-expanded","true"),(h=o.querySelector(".faq-chat-user-bubble"))==null||h.classList.add("active"))})})}function k(e,s,o,a,t,i){if(!e)return;const d=()=>Array.from(i).filter(u=>u.style.display!=="none"),h=()=>{const p=d()[0];if(!p)return 290;const f=parseInt(window.getComputedStyle(e).gap)||20,c=p.offsetWidth;if(window.innerWidth<=640)return c+f;const g=Math.max(1,Math.floor(e.clientWidth/(c+f)));return(c+f)*g},m=()=>{const u=e.scrollLeft,p=e.scrollWidth-e.clientWidth;if(p<=5?(s==null||s.classList.add("is-disabled"),o==null||o.classList.add("is-disabled"),s==null||s.setAttribute("disabled","true"),o==null||o.setAttribute("disabled","true")):(s==null||s.classList.remove("is-disabled"),o==null||o.classList.remove("is-disabled"),s==null||s.removeAttribute("disabled"),o==null||o.removeAttribute("disabled")),a){const f=a.querySelectorAll(".carousel-dot");if(f.length>0){const c=p>0?u/p:0,g=Math.min(Math.round(c*(f.length-1)),f.length-1);f.forEach((l,n)=>{n===g?(l.classList.add("is-active"),l.setAttribute("aria-selected","true")):(l.classList.remove("is-active"),l.setAttribute("aria-selected","false"))})}}},v=()=>{if(!a||(a.innerHTML="",d().length<=1))return;const p=e.scrollWidth-e.clientWidth;if(p<=5)return;const f=h(),c=Math.ceil(p/f)+1,g=Math.min(Math.max(3,c),5);for(let l=0;l<g;l++){const n=document.createElement("button");n.type="button",n.className=`carousel-dot ${l===0?"is-active":""}`,n.setAttribute("role","tab"),n.setAttribute("aria-label",`Ir para slide ${l+1}`),n.setAttribute("aria-selected",l===0?"true":"false"),n.addEventListener("click",()=>{const q=p/(g-1)*l;e.scrollTo({left:q,behavior:"smooth"})}),a.appendChild(n)}};s&&s.addEventListener("click",u=>{u.preventDefault();const p=e.scrollLeft,f=e.scrollWidth-e.clientWidth,c=h();p<=10?e.scrollTo({left:f,behavior:"smooth"}):e.scrollTo({left:Math.max(0,p-c),behavior:"smooth"})}),o&&o.addEventListener("click",u=>{u.preventDefault();const p=e.scrollLeft,f=e.scrollWidth-e.clientWidth,c=h();p>=f-10?e.scrollTo({left:0,behavior:"smooth"}):e.scrollTo({left:Math.min(f,p+c),behavior:"smooth"})}),t&&t.length&&i&&i.length&&t.forEach(u=>{u.addEventListener("click",p=>{p.preventDefault();const f=u.getAttribute("data-target-pillar");t.forEach(c=>{c.classList.remove("active"),c.setAttribute("aria-selected","false")}),u.classList.add("active"),u.setAttribute("aria-selected","true"),i.forEach(c=>{const g=c.getAttribute("data-pillar");f==="todos"||g===f?(c.style.display="flex",c.style.opacity="0",c.style.transform="translateY(6px)",setTimeout(()=>{c.style.opacity="1",c.style.transform="translateY(0)"},30)):c.style.display="none"}),e.scrollTo({left:0,behavior:"smooth"}),setTimeout(()=>{v(),m()},120)})});let y;e.addEventListener("scroll",()=>{m(),clearTimeout(y),y=setTimeout(m,100)},{passive:!0}),window.addEventListener("resize",()=>{v(),m()},{passive:!0}),v(),setTimeout(m,100)}class $ extends HTMLElement{connectedCallback(){const s=this.querySelector(".product-carousel-track"),o=this.querySelector(".carousel-pagination-arrow.carousel-arrow-prev, .product-carousel-btn-prev"),a=this.querySelector(".carousel-pagination-arrow.carousel-arrow-next, .product-carousel-btn-next"),t=this.querySelector(".carousel-dots-list"),i=this.querySelectorAll(".pillar-btn"),d=this.querySelectorAll(".product-carousel-card, .service-carousel-card");k(s,o,a,t,i,d)}}customElements.get("product-carousel")||customElements.define("product-carousel",$);function F(e=document){e.querySelectorAll(".services-catalog-section, .product-carousel-section, .product-carousel-wrapper").forEach(o=>{const a=o.querySelector(".product-carousel-track"),t=o.querySelector(".carousel-pagination-arrow.carousel-arrow-prev, .product-carousel-btn-prev"),i=o.querySelector(".carousel-pagination-arrow.carousel-arrow-next, .product-carousel-btn-next"),d=o.querySelector(".carousel-dots-list"),h=o.querySelectorAll(".pillar-btn"),m=o.querySelectorAll(".product-carousel-card, .service-carousel-card");k(a,t,i,d,h,m)})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("navMenuToggle"),s=document.querySelector(".nav-links");e&&s&&(e.addEventListener("click",o=>{o.stopPropagation();const a=s.classList.toggle("is-open");e.setAttribute("aria-expanded",a?"true":"false")}),document.addEventListener("click",o=>{!e.contains(o.target)&&!s.contains(o.target)&&(s.classList.remove("is-open"),e.setAttribute("aria-expanded","false"))})),O(),F(),D(),G()});function D(){var g;const e=document.getElementById("heroCtaBtn"),s=document.getElementById("heroCtaSlot");if(!e||!s)return;const o=window.matchMedia("(prefers-reduced-motion: reduce)");let a=null,t=null,i=!1;const d=(l,n=0,q=1)=>Math.min(Math.max(l,n),q),h=(l,n,q)=>l+(n-l)*q;function m(){i||(document.body.appendChild(e),i=!0)}function v(){i&&(e.classList.remove("is-docked","is-morphing"),s.classList.remove("is-reserved"),s.style.removeProperty("--hero-cta-slot-width"),s.style.removeProperty("--hero-cta-slot-height"),e.style.removeProperty("--morph-width"),e.style.removeProperty("--morph-height"),e.style.removeProperty("--morph-x"),e.style.removeProperty("--morph-y"),e.style.removeProperty("--morph-text-opacity"),e.style.removeProperty("--morph-icon-opacity"),e.style.removeProperty("--morph-icon-scale"),s.appendChild(e),i=!1)}function y(){i&&v();const l=e.getBoundingClientRect(),n=window.scrollY||window.pageYOffset,q=l.top+n,L=Math.max(0,q-window.innerHeight*.62),r=d(window.innerHeight*.48,300,440),b=window.innerWidth<=768?58:56;s.style.setProperty("--hero-cta-slot-width",`${l.width}px`),s.style.setProperty("--hero-cta-slot-height",`${l.height}px`),s.classList.add("is-reserved"),m(),e.classList.add("is-morphing"),e.style.setProperty("--morph-width",`${b}px`),e.style.setProperty("--morph-height",`${b}px`),e.style.setProperty("--morph-x","0px"),e.style.setProperty("--morph-y","0px");const w=e.getBoundingClientRect();return{sourceLeft:l.left,sourceTop:q-L,sourceWidth:l.width,sourceHeight:l.height,targetLeft:w.left,targetTop:w.top,targetRight:w.right,targetBottom:w.bottom,targetSize:b,startScroll:L,travel:r}}function u(l){const n=l*l*(3-2*l),q=h(a.sourceWidth,a.targetSize,n),L=h(a.sourceHeight,a.targetSize,n),r=h(a.sourceLeft,a.targetLeft,n),b=h(a.sourceTop,a.targetTop,n),w=a.targetRight-q,A=a.targetBottom-L,C=1-d((l-.12)/.52),E=d((l-.38)/.4);m(),e.classList.add("is-morphing"),e.classList.toggle("is-docked",l>=.995),e.style.setProperty("--morph-width",`${q.toFixed(2)}px`),e.style.setProperty("--morph-height",`${L.toFixed(2)}px`),e.style.setProperty("--morph-x",`${(r-w).toFixed(2)}px`),e.style.setProperty("--morph-y",`${(b-A).toFixed(2)}px`),e.style.setProperty("--morph-text-opacity",C.toFixed(3)),e.style.setProperty("--morph-icon-opacity",E.toFixed(3)),e.style.setProperty("--morph-icon-scale",h(.72,1,E).toFixed(3))}function p(){if(t=null,a||(a=y()),o.matches){s.getBoundingClientRect().bottom<=0?u(1):v();return}const l=window.scrollY||window.pageYOffset,n=d((l-a.startScroll)/a.travel);n<=0?v():u(n)}function f(){t===null&&(t=window.requestAnimationFrame(p))}function c(){a=null,f()}window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("resize",c,{passive:!0}),window.addEventListener("orientationchange",c,{passive:!0}),window.addEventListener("pageshow",c),(g=window.visualViewport)==null||g.addEventListener("resize",c,{passive:!0})}function G(){const e=document.getElementById("main-product-img"),s=document.querySelectorAll(".thumb-card"),o=document.querySelectorAll(".model-option"),a=document.getElementById("qty-input"),t=document.getElementById("qty-minus"),i=document.getElementById("qty-plus"),d=document.querySelectorAll(".quick-qty-btn"),h=document.querySelectorAll(".tier-card"),m=document.getElementById("summary-unit-price"),v=document.getElementById("summary-total-price"),y=document.getElementById("summary-items-count"),u=document.getElementById("sticky-total-price"),p=document.getElementById("btn-buy-whatsapp"),f=document.getElementById("btn-sticky-whatsapp");if(!e||!a)return;s.forEach(r=>{r.addEventListener("click",()=>{s.forEach(A=>A.classList.remove("is-active")),r.classList.add("is-active");const b=r.getAttribute("data-img"),w=r.getAttribute("data-alt");e.style.opacity="0.3",setTimeout(()=>{e.src=b,e.alt=w,e.style.opacity="1"},120)})});let c="classica",g="Branca Clássica",l=0;o.forEach(r=>{r.addEventListener("click",()=>{var b;o.forEach(w=>w.classList.remove("is-selected")),r.classList.add("is-selected"),c=r.getAttribute("data-model"),g=((b=r.querySelector(".opt-name"))==null?void 0:b.textContent)||"Branca Clássica",l=parseFloat(r.getAttribute("data-extra")||"0"),c==="classica"?n(0):c==="magica"?n(1):c==="colorida"?n(2):c==="presente"&&n(4),L()})});function n(r){s[r]&&s[r].click()}function q(r){return r>=50?19.9:r>=15?24.9:r>=5?29.9:35}function L(){let r=parseInt(a.value,10);(isNaN(r)||r<1)&&(r=1);const w=q(r)+l,A=w*r,C=w.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),E=A.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});m&&(m.textContent=`${C} / un`),v&&(v.textContent=E),y&&(y.textContent=`(${r} ${r===1?"unidade selecionada":"unidades selecionadas"})`),u&&(u.textContent=E),h.forEach(x=>{const P=parseInt(x.getAttribute("data-min"),10),T=parseInt(x.getAttribute("data-max"),10);r>=P&&r<=T?x.classList.add("is-current"):x.classList.remove("is-current")}),d.forEach(x=>{parseInt(x.getAttribute("data-qty"),10)===r?x.classList.add("is-active"):x.classList.remove("is-active")});const M=`Olá VM Gráfica! Gostaria de fazer o pedido de:

📦 *Produto:* Caneca de Porcelana 325ml
✨ *Modelo:* ${g}
🔢 *Quantidade:* ${r} un
💵 *Valor Unitário:* ${C}
💰 *Total Estimado:* ${E}

Podem me orientar sobre o envio da arte e prazo de produção?`,S=`https://wa.me/5562993725371?text=${encodeURIComponent(M)}`;p&&(p.href=S),f&&(f.href=S)}t&&t.addEventListener("click",()=>{let r=parseInt(a.value,10)||1;r>1&&(a.value=r-1,L())}),i&&i.addEventListener("click",()=>{let r=parseInt(a.value,10)||1;a.value=r+1,L()}),a&&(a.addEventListener("input",L),a.addEventListener("change",L)),d.forEach(r=>{r.addEventListener("click",()=>{const b=parseInt(r.getAttribute("data-qty"),10);a.value=b,L()})}),L()}
