(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();class P extends HTMLElement{connectedCallback(){const e=new Date().getFullYear();this.innerHTML=`
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
              &copy; ${e} VM Gráfica Rápida & Papelaria Personalizada. Goiânia - GO. Todos os direitos reservados.
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
    `}}customElements.get("site-footer")||customElements.define("site-footer",P);document.addEventListener("DOMContentLoaded",()=>{A(),$(),M()});function A(){const n=document.getElementById("hero-whatsapp-btn"),e=document.getElementById("hero-cta-slot");if(!n||!e)return;let r=!1;function s(){e.getBoundingClientRect(),(window.scrollY||window.pageYOffset)>250?(n.classList.add("is-morphing"),n.classList.add("is-docked"),e.classList.add("is-reserved")):(n.classList.remove("is-morphing"),n.classList.remove("is-docked"),e.classList.remove("is-reserved")),r=!1}window.addEventListener("scroll",()=>{r||(window.requestAnimationFrame(s),r=!0)},{passive:!0}),s()}function $(){if(!document.getElementById("price-simulator-form"))return;const e=document.getElementById("sim-product"),r=document.getElementById("sim-finish"),s=document.getElementById("sim-qty"),t=document.getElementById("sim-total-display"),o=document.getElementById("sim-unit-display"),d=document.getElementById("sim-whatsapp-cta"),L={cartao:{basePrices:{100:45,250:75,500:110,1e3:160},finishMultipliers:{simples:1,bopp:1.25,verniz:1.45,dtf:1.8}},panfleto:{basePrices:{100:55,250:95,500:140,1e3:210},finishMultipliers:{simples:1,bopp:1.2,verniz:1.35,dtf:1.5}},copo:{basePrices:{10:80,25:160,50:280,100:490},finishMultipliers:{simples:1,bopp:1.1,verniz:1.2,dtf:1.35}},adesivo:{basePrices:{50:35,100:55,250:95,500:150},finishMultipliers:{simples:1,bopp:1.2,verniz:1.3,dtf:1.6}}};function y(){var i,B;if(!e||!r||!s||!t)return;const f=e.value||"cartao",b=r.value||"simples",p=parseInt(s.value,10)||100,E=L[f]||L.cartao,x=E.basePrices[p]||p*.5,h=E.finishMultipliers[b]||1,g=x*h,w=g/p;if(t.textContent=`R$ ${g.toFixed(2).replace(".",",")}`,o&&(o.textContent=`(R$ ${w.toFixed(2).replace(".",",")} / un)`),d){const u=((i=e.options[e.selectedIndex])==null?void 0:i.text)||f,a=((B=r.options[r.selectedIndex])==null?void 0:B.text)||b,c=encodeURIComponent(`Olá VM Gráfica! Gostaria de encomendar pelo simulador:
- Produto: ${u}
- Acabamento: ${a}
- Quantidade: ${p} un
- Valor Estimado: R$ ${g.toFixed(2).replace(".",",")}`);d.href=`https://wa.me/5562993725371?text=${c}`}}[e,r,s].forEach(f=>{f&&f.addEventListener("change",y)}),y()}function M(){const n=document.getElementById("main-product-img"),e=document.querySelectorAll(".thumb-btn"),r=document.querySelectorAll(".model-chip"),s=document.getElementById("qty-input"),t=document.getElementById("qty-minus"),o=document.getElementById("qty-plus"),d=document.querySelectorAll(".tier-btn"),L=document.querySelectorAll(".tier-col"),y=document.getElementById("summary-unit-price"),f=document.getElementById("summary-total-price"),b=document.getElementById("summary-items-count"),p=document.getElementById("sticky-total-price"),E=document.getElementById("btn-buy-whatsapp"),x=document.getElementById("btn-sticky-whatsapp");if(!n||!s)return;let h="classica",g="Branca Clássica",w=0,i=parseInt(s.value,10)||1;e.forEach(a=>{a.addEventListener("click",()=>{const c=a.getAttribute("data-img"),m=a.getAttribute("data-alt");n.style.opacity="0.3",setTimeout(()=>{n.src=c,m&&(n.alt=m),n.style.opacity="1"},120),e.forEach(v=>{v.classList.remove("is-active"),v.setAttribute("aria-selected","false")}),a.classList.add("is-active"),a.setAttribute("aria-selected","true")})}),r.forEach(a=>{a.addEventListener("click",()=>{var c,m,v,I,l,k;r.forEach(C=>{C.classList.remove("is-selected"),C.setAttribute("aria-checked","false")}),a.classList.add("is-selected"),a.setAttribute("aria-checked","true"),h=a.getAttribute("data-model"),g=((m=(c=a.querySelector(".chip-title"))==null?void 0:c.textContent)==null?void 0:m.trim())||"Branca Clássica",w=parseFloat(a.getAttribute("data-extra"))||0,h==="classica"&&((v=e[0])==null||v.click()),h==="magica"&&((I=e[1])==null||I.click()),h==="colorida"&&((l=e[2])==null||l.click()),h==="presente"&&((k=e[4])==null||k.click()),u()})});function B(a){return a>=50?19.9:a>=15?24.9:a>=5?29.9:35}function u(){i=Math.max(1,Math.min(1e3,parseInt(s.value,10)||1)),s.value=i;const c=B(i)+w,m=c*i;y&&(y.textContent=`R$ ${c.toFixed(2).replace(".",",")} / un`),f&&(f.textContent=`R$ ${m.toFixed(2).replace(".",",")}`),p&&(p.textContent=`R$ ${m.toFixed(2).replace(".",",")}`),b&&(b.textContent=`(${i} ${i===1?"unidade selecionada":"unidades selecionadas"})`),L.forEach(l=>{const k=parseInt(l.getAttribute("data-min"),10),C=parseInt(l.getAttribute("data-max"),10);i>=k&&i<=C?l.classList.add("is-current"):l.classList.remove("is-current")}),d.forEach(l=>{parseInt(l.getAttribute("data-qty"),10)===i?l.classList.add("is-active"):l.classList.remove("is-active")});const I=`https://wa.me/5562993725371?text=${encodeURIComponent(`Olá VM Gráfica! Gostaria de encomendar Canecas Personalizadas:
• Modelo: ${g}
• Quantidade: ${i} un
• Preço Unitário: R$ ${c.toFixed(2).replace(".",",")}
• Total Estimado: R$ ${m.toFixed(2).replace(".",",")}

Gostaria de enviar minha arte/foto para aprovação!`)}`;E&&(E.href=I),x&&(x.href=I)}t&&t.addEventListener("click",()=>{i>1&&(s.value=i-1,u())}),o&&o.addEventListener("click",()=>{s.value=i+1,u()}),s.addEventListener("input",u),s.addEventListener("change",u),d.forEach(a=>{a.addEventListener("click",()=>{const c=parseInt(a.getAttribute("data-qty"),10);c&&(s.value=c,u())})}),u()}
