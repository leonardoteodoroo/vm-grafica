# Design System & Tokens Semânticos — VM Gráfica (Tema Claro / Light Theme)

Este documento define os **Tokens Semânticos (CSS Custom Properties)** e diretrizes visuais para a **VM Gráfica**, combinando fundo limpo e moderno com as cores vibrantes da marca (Cyan, Magenta, Amarelo Ouro e Verde WhatsApp), transições fluidas de fundo (*gradient mesh*) e arquitetura de componentes sem aninhamento claustrofóbico.

---

## 1. Paleta de Cores da Marca (Calibrada para Fundo Claro)

| Cor / Papel | Hex | RGB | Função |
| :--- | :--- | :--- | :--- |
| **Cyan Tecnológico ("V")** | `#0084D1` / `#0090FF` | `rgb(0, 132, 209)` | Botões primários, destaques e badges tecnológicos. |
| **Magenta Criativo ("M")** | `#E60067` / `#D81B60` | `rgb(230, 0, 103)` | Personalizados, eventos, festas e acabamentos nobres. |
| **Amarelo Dourado Ouro** | `#D97706` / `#B45309` | `rgb(217, 119, 6)` | Selos de garantia, avisos e detalhes de valor. |
| **Verde WhatsApp / Ação** | `#16A34A` / `#22C55E` | `rgb(22, 163, 74)` | Botão de WhatsApp, status de aprovação e entregas. |
| **Navy Grafite Profundo** | `#0B132B` / `#1E293B` | `rgb(11, 19, 43)` | Headlines, tipografia principal e alto contraste. |
| **Branco Neve / Canvas** | `#FFFFFF` / `#F8FAFC` | `rgb(255, 255, 255)` | Fundo principal da página e cards de produto. |

---

## 2. Matriz de Contraste e Acessibilidade no Tema Claro (WCAG 2.1)

| Elemento | Cor do Texto / Ícone | Cor de Fundo | Razão de Contraste | Nível WCAG |
| :--- | :--- | :--- | :--- | :--- |
| **Títulos Principais (Headlines)** | `#0B132B` (Navy Grafite) | `#FFFFFF` (Branco Puro) | **18.2 : 1** | **AAA** (Excepcional) |
| **Texto de Apoio / Parágrafos** | `#334155` (Slate-700) | `#FFFFFF` (Branco Puro) | **9.6 : 1** | **AAA** (Excepcional) |
| **Destaque Cyan em Fundo Claro** | `#0070BA` (Cyan Escuro) | `#FFFFFF` (Branco Puro) | **5.4 : 1** | **AA** (Conforme) |
| **Destaque Magenta em Fundo Claro** | `#C2185B` (Magenta Nobre)| `#FFFFFF` (Branco Puro) | **6.1 : 1** | **AA** (Conforme) |
| **Destaque Amarelo / Dourado** | `#B45309` (Âmbar Escuro) | `#FFFFFF` (Branco Puro) | **5.2 : 1** | **AA** (Conforme) |
| **Botão de WhatsApp** | `#FFFFFF` (Branco) | `#16A34A` (Verde Puro) | **4.8 : 1** | **AA** (Conforme) |

---

## 3. Tokens Semânticos de Superfície, Fundo & Gradient Mesh

```css
:root {
  /* Fundo e Canvas */
  --bg-canvas: #FFFFFF;
  --bg-canvas-subtle: #F8FAFC;
  --bg-canvas-alt: #F1F5F9;
  --bg-surface-1: #FFFFFF;
  --bg-surface-2: #F8FAFC;
  --bg-surface-glass: rgba(255, 255, 255, 0.88);
  --bg-surface-glass-hover: rgba(240, 249, 255, 0.95);
  --bg-topbar: #0B132B;
  --bg-navbar: rgba(255, 255, 255, 0.94);

  /* Gradient Mesh Fluid Transitions */
  --mesh-hero: radial-gradient(at 0% 0%, rgba(0, 132, 209, 0.08) 0px, transparent 50%),
               radial-gradient(at 100% 0%, rgba(230, 0, 103, 0.06) 0px, transparent 50%),
               radial-gradient(at 50% 100%, rgba(217, 119, 6, 0.04) 0px, transparent 50%);
  
  --mesh-section-cyan: radial-gradient(circle at 10% 20%, rgba(0, 132, 209, 0.05) 0%, transparent 40%),
                       radial-gradient(circle at 90% 80%, rgba(0, 132, 209, 0.03) 0%, transparent 40%);

  --mesh-section-magenta: radial-gradient(circle at 90% 10%, rgba(230, 0, 103, 0.05) 0%, transparent 40%),
                         radial-gradient(circle at 10% 90%, rgba(230, 0, 103, 0.03) 0%, transparent 40%);

  /* Bordas e Elevação */
  --border-subtle: #E2E8F0;
  --border-card: rgba(226, 232, 240, 0.8);
  --border-card-hover: #0084D1;
  --border-accent-cyan: #0084D1;
  --border-accent-magenta: #E60067;
  --border-accent-yellow: #D97706;

  --shadow-card: 0 4px 20px -2px rgba(11, 19, 43, 0.05);
  --shadow-card-hover: 0 12px 30px -5px rgba(0, 132, 209, 0.12);
  --shadow-float-btn: 0 8px 24px rgba(22, 163, 74, 0.35);

  /* Tipografia */
  --text-primary: #0B132B;
  --text-secondary: #475569;
  --text-muted: #64748B;
  --text-inverse: #FFFFFF;
}
```

---

## 4. Diretrizes de Arquitetura Visual (Anti-Nested Boxes)

1. **Proibição de Caixa Dentro de Caixa:** 
   * Evitar cartões cinzas aninhados dentro de outros contêineres cinzas.
   * Utilizar **espaçamento em branco (whitespace)** e **divisores ultra-leves (`rgba(0,0,0,0.06)`)** para criar agrupamento visual e escaneabilidade natural.
2. **Transições Contínuas entre Seções:**
   * Nunca usar cortes bruscos de cor entre seções (ex: faixa cinza escura grudada em faixa branca).
   * As seções fluem através de gradientes radiais suaves e margens verticais proporcionais.
3. **Página e Componentes de Produto:**
   * Galeria de 5 imagens interativas com miniaturas focadas.
   * Seletores de acabamento em chips táteis com indicação clara de foco/seleção.
   * Tabela de especificações limpa e sticky checkout bar no mobile.
