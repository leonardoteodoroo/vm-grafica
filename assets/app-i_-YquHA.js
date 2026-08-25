(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();class w extends HTMLElement{connectedCallback(){const e=new Date().getFullYear();this.innerHTML=`
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
            <h4 class="footer-col-title">Ajuda & Info</h4>
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
            &copy; ${e} VM Gráfica Rápida & Papelaria Personalizada. Goiânia - GO. Todos os direitos reservados.
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
    `}}customElements.get("site-footer")||customElements.define("site-footer",w);document.addEventListener("DOMContentLoaded",()=>{P(),M(),F()});function P(){const n=document.getElementById("hero-whatsapp-btn"),e=document.getElementById("hero-cta-slot");if(!n||!e)return;let r=!1;function o(){e.getBoundingClientRect(),(window.scrollY||window.pageYOffset)>250?(n.classList.add("is-morphing"),n.classList.add("is-docked"),e.classList.add("is-reserved")):(n.classList.remove("is-morphing"),n.classList.remove("is-docked"),e.classList.remove("is-reserved")),r=!1}window.addEventListener("scroll",()=>{r||(window.requestAnimationFrame(o),r=!0)},{passive:!0}),o()}function M(){if(!document.getElementById("price-simulator-form"))return;const e=document.getElementById("sim-product"),r=document.getElementById("sim-finish"),o=document.getElementById("sim-qty"),t=document.getElementById("sim-total-display"),s=document.getElementById("sim-unit-display"),d=document.getElementById("sim-whatsapp-cta"),x={cartao:{basePrices:{100:45,250:75,500:110,1e3:160},finishMultipliers:{simples:1,bopp:1.25,verniz:1.45,dtf:1.8}},panfleto:{basePrices:{100:55,250:95,500:140,1e3:210},finishMultipliers:{simples:1,bopp:1.2,verniz:1.35,dtf:1.5}},copo:{basePrices:{10:80,25:160,50:280,100:490},finishMultipliers:{simples:1,bopp:1.1,verniz:1.2,dtf:1.35}},adesivo:{basePrices:{50:35,100:55,250:95,500:150},finishMultipliers:{simples:1,bopp:1.2,verniz:1.3,dtf:1.6}}};function y(){var i,A;if(!e||!r||!o||!t)return;const f=e.value||"cartao",b=r.value||"simples",p=parseInt(o.value,10)||100,E=x[f]||x.cartao,B=E.basePrices[p]||p*.5,h=E.finishMultipliers[b]||1,g=B*h,I=g/p;if(t.textContent=`R$ ${g.toFixed(2).replace(".",",")}`,s&&(s.textContent=`(R$ ${I.toFixed(2).replace(".",",")} / un)`),d){const m=((i=e.options[e.selectedIndex])==null?void 0:i.text)||f,a=((A=r.options[r.selectedIndex])==null?void 0:A.text)||b,l=encodeURIComponent(`Olá VM Gráfica! Gostaria de encomendar pelo simulador:
- Produto: ${m}
- Acabamento: ${a}
- Quantidade: ${p} un
- Valor Estimado: R$ ${g.toFixed(2).replace(".",",")}`);d.href=`https://wa.me/5562993725371?text=${l}`}}[e,r,o].forEach(f=>{f&&f.addEventListener("change",y)}),y()}function F(){const n=document.getElementById("main-product-img"),e=document.querySelectorAll(".thumb-btn"),r=document.querySelectorAll(".model-chip"),o=document.getElementById("qty-input"),t=document.getElementById("qty-minus"),s=document.getElementById("qty-plus"),d=document.querySelectorAll(".tier-btn"),x=document.querySelectorAll(".tier-col"),y=document.getElementById("summary-unit-price"),f=document.getElementById("summary-total-price"),b=document.getElementById("summary-items-count"),p=document.getElementById("sticky-total-price"),E=document.getElementById("btn-buy-whatsapp"),B=document.getElementById("btn-sticky-whatsapp");if(!n||!o)return;let h="classica",g="Branca Clássica",I=0,i=parseInt(o.value,10)||1;e.forEach(a=>{a.addEventListener("click",()=>{const l=a.getAttribute("data-img"),u=a.getAttribute("data-alt");n.style.opacity="0.3",setTimeout(()=>{n.src=l,u&&(n.alt=u),n.style.opacity="1"},120),e.forEach(v=>{v.classList.remove("is-active"),v.setAttribute("aria-selected","false")}),a.classList.add("is-active"),a.setAttribute("aria-selected","true")})}),r.forEach(a=>{a.addEventListener("click",()=>{var l,u,v,k,c,L;r.forEach(C=>{C.classList.remove("is-selected"),C.setAttribute("aria-checked","false")}),a.classList.add("is-selected"),a.setAttribute("aria-checked","true"),h=a.getAttribute("data-model"),g=((u=(l=a.querySelector(".chip-title"))==null?void 0:l.textContent)==null?void 0:u.trim())||"Branca Clássica",I=parseFloat(a.getAttribute("data-extra"))||0,h==="classica"&&((v=e[0])==null||v.click()),h==="magica"&&((k=e[1])==null||k.click()),h==="colorida"&&((c=e[2])==null||c.click()),h==="presente"&&((L=e[4])==null||L.click()),m()})});function A(a){return a>=50?19.9:a>=15?24.9:a>=5?29.9:35}function m(){i=Math.max(1,Math.min(1e3,parseInt(o.value,10)||1)),o.value=i;const l=A(i)+I,u=l*i;y&&(y.textContent=`R$ ${l.toFixed(2).replace(".",",")} / un`),f&&(f.textContent=`R$ ${u.toFixed(2).replace(".",",")}`),p&&(p.textContent=`R$ ${u.toFixed(2).replace(".",",")}`),b&&(b.textContent=`(${i} ${i===1?"unidade selecionada":"unidades selecionadas"})`),x.forEach(c=>{const L=parseInt(c.getAttribute("data-min"),10),C=parseInt(c.getAttribute("data-max"),10);i>=L&&i<=C?c.classList.add("is-current"):c.classList.remove("is-current")}),d.forEach(c=>{parseInt(c.getAttribute("data-qty"),10)===i?c.classList.add("is-active"):c.classList.remove("is-active")});const k=`https://wa.me/5562993725371?text=${encodeURIComponent(`Olá VM Gráfica! Gostaria de encomendar Canecas Personalizadas:
• Modelo: ${g}
• Quantidade: ${i} un
• Preço Unitário: R$ ${l.toFixed(2).replace(".",",")}
• Total Estimado: R$ ${u.toFixed(2).replace(".",",")}

Gostaria de enviar minha arte/foto para aprovação!`)}`;E&&(E.href=k),B&&(B.href=k)}t&&t.addEventListener("click",()=>{i>1&&(o.value=i-1,m())}),s&&s.addEventListener("click",()=>{o.value=i+1,m()}),o.addEventListener("input",m),o.addEventListener("change",m),d.forEach(a=>{a.addEventListener("click",()=>{const l=parseInt(a.getAttribute("data-qty"),10);l&&(o.value=l,m())})}),m()}
