# AGENTS.md — Regras Operacionais e Padrões de Engenharia (VM Gráfica)

Este documento estabelece as diretrizes canônicas, arquiteturais e de **alta performance** para o desenvolvimento e manutenção do projeto **VM Gráfica**. Toda IA, agente ou desenvolvedor que atuar neste repositório DEVE seguir rigorosamente estas regras.

---

## 1. Diretrizes Fundamentais do Projeto

* **Idioma Obrigatório:** Todo o código, comentários, documentação, commits e interface com o usuário devem estar exclusivamente em **Português do Brasil (pt-BR)**.
* **Layout & Experiência Visual:**
  * Layout **Full-Width / Edge-to-Edge** sem containers laterais restritivos (`w-full` com padding dinâmico em `vw`).
  * Estética **Dark Mode Premium** com suporte a *Glassmorphism* e gradientes CMYK vibrantes (*Cyan Elétrico* e *Magenta Neon*).
  * Menus e barras de navegação devem manter **fluxo natural de rolagem** (não fixos sobre o viewport).
* **Gestão de Estilos:**
  * Uso estrito de **Tokens Semânticos** via CSS Custom Properties (`var(--token)`) mapeados no arquivo `Design System.md` e declarados no `:root` do `style.css`.
  * É expressamente proibido hardcodar cores hexadecimais soltas no corpo do CSS.
* **Integridade Operacional:**
  * Para remoção de arquivos, utilize sempre a lixeira do sistema (`gio trash`).

---

## 2. Padrões de Alta Performance & Core Web Vitals (Base: PageSpeed Checklist)

Diretrizes extraídas e consolidadas do relatório de auditoria e otimização técnica:

### 2.1 Orçamento de Desempenho (Performance Budget)
* **First Contentful Paint (FCP):** < 1.8 segundos em redes 4G/3G.
* **Largest Contentful Paint (LCP):** < 2.5 segundos.
* **Time to Interactive (TTI):** < 3.8 segundos.
* **Cumulative Layout Shift (CLS):** < 0.1 (zero saltos visuais).
* **Interaction to Next Paint (INP):** < 200ms.
* **Score no Lighthouse:** Alvo contínuo **≥ 95/100** em Performance, Acessibilidade, Melhores Práticas e SEO.
* **Tamanho Máximo do Bundle JS:** < 150 KB gzipped.

### 2.2 Eliminação de Bloqueios de Renderização (Render-Blocking)
* **CSS Crítico:** Priorize a renderização do conteúdo acima da dobra (*above-the-fold*). O CSS principal deve ser leve e minificado.
* **JavaScript Não-Bloqueante:**
  * Todos os scripts externos devem ser carregados como módulos (`type="module"`) ou com atributos `defer` / `async`.
  * Nunca insira lógica pesada bloqueando a tag `<head>`.
* **Cadeias de Dependências Curtas:** Mantenha a árvore de requisições de rede o mais rasa possível para paralelizar o carregamento.

### 2.3 Otimização de Imagens e Mídias
* **Formatos Modernos:** Use exclusivamente **WebP** ou **AVIF** para imagens e texturas.
* **Aceleração do LCP:**
  * O recurso visual principal da Hero deve possuir `fetchpriority="high"` explícito no HTML.
  * **NUNCA** aplique `loading="lazy"` na imagem que compõe o LCP.
* **Imagens Abaixo da Dobra:** Todas as imagens da vitrine, catálogo e galeria devem conter `loading="lazy"` e `decoding="async"`.
* **Dimensões e Proporções:** Especifique sempre `width` e `height` (ou `aspect-ratio` no CSS) para evitar recalculo de layout e eliminar CLS.

### 2.4 Tipografia e Fontes Web
* **Descoberta Antecipada:** Utilize `<link rel="preconnect" href="https://fonts.googleapis.com">` e `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` no topo do `<head>`.
* **Formato e Subconjuntos:** Prefira formato **WOFF2** e carregue apenas os pesos estritamente utilizados no design (`wght@400;600;700;800;900`).
* **Renderização Sem Flash (FOIT):** Inclua `font-display: swap` para garantir exibição imediata do texto com fontes do sistema enquanto a tipografia web baixa.

### 2.5 Thread Principal, Reflows e Animações
* **Tarefas Longas:** Mantenha qualquer execução de JavaScript abaixo de **50ms** para não travar a resposta do navegador.
* **Prevenção de Layout Thrashing:**
  * Nunca leia propriedades geométricas (`offsetWidth`, `getBoundingClientRect`) logo após manipular classes ou estilos do DOM sem agrupar operações.
* **Animações Aceleradas por Hardware:**
  * Animações, transições e o efeito de *morphing* do botão do WhatsApp devem manipular exclusivamente **`transform`** (`translate3d`, `scale`) e **`opacity`**, garantindo execução direta na GPU (Compositor Thread).

### 2.6 Servidor, Cache e Compressão
* **Time to First Byte (TTFB):** < 0.8s.
* **Compressão:** Habilitar compressão **Brotli** ou **Gzip** para todos os arquivos HTML, CSS e JS transferidos.
* **Políticas de Cache:** Recursos estáticos versionados pelo Vite (hashes em `/assets/`) devem ter cabeçalho de cache longo (`Cache-Control: public, max-age=31536000, immutable`).

---

## 3. Acessibilidade (a11y) & Usabilidade

* **Semântica HTML5 Estrita:**
  * Uso correto de `<aside>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
  * **Apenas um único `<h1>`** por página, seguindo hierarquia estrita (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`).
* **Navegação por Teclado:**
  * Todos os botões, links e seletores da calculadora devem possuir estado de foco visível (`:focus-visible` com contorno de contraste).
* **Contraste de Cores:**
  * Contraste mínimo de **4.5:1** para textos normais e **3:1** para títulos e textos grandes sobre os fundos escuros do Dark Mode.
* **Textos Alternativos:**
  * Imagens informativas devem conter atributos `alt` objetivos (< 125 caracteres). Elementos puramente decorativos usam `alt=""` ou `aria-hidden="true"`.

---

## 4. SEO, Metadados & Rastreabilidade

* **Title Tag Otimizada (45–65 caracteres):** Deve carregar a palavra-chave principal na frente + proposta de valor clara (ex: *"VM Gráfica | Gráfica Rápida e Personalizados DTF UV"*).
* **Meta Description (120–155 caracteres):** Texto persuasivo que estimule o clique (CTR) resumindo os produtos, acabamentos e chamada para ação.
* **Open Graph & Redes Sociais:** `og:title`, `og:description`, `og:image` (1200x630px) e `og:type` configurados para renderização em cards do WhatsApp e redes sociais.
* **Dados Estruturados (Schema.org / JSON-LD):** Inclusão de schemas para `LocalBusiness`, `Product` e `FAQPage` para habilitar *Rich Snippets* nas buscas.

---

## 5. Checklist de Verificação Antes de Commits / Deploys

- [ ] `npm run build` executa sem erros ou avisos de importação.
- [ ] Não há seletores com cores hardcodadas fora do `:root` (`style.css`).
- [ ] O simulador de preços no WhatsApp gera a mensagem completa sem caracteres corrompidos.
- [ ] As 5 colunas do footer continuam responsivas e bem distribuídas em desktop, tablet e mobile.
- [ ] O botão do WhatsApp mantém transição fluida de scroll sem causar travamento na tela.
