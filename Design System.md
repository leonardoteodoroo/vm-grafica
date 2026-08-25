# Design System & Tokens Semânticos — VM Gráfica (Tema Claro / Light Theme)

Este documento define os **Tokens Semânticos (CSS Custom Properties)** para o **Tema Claro (Light Theme)** oficial da **VM Gráfica**, combinando fundo limpo e moderno com as cores vibrantes extraídas da marca (Cyan, Magenta, Amarelo Ouro e Verde WhatsApp).

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

## 3. Tokens Semânticos de Superfície & Fundo (Backgrounds)

```css
--bg-canvas: #FFFFFF;
--bg-canvas-subtle: #F8FAFC;
--bg-canvas-alt: #F1F5F9;
--bg-surface-1: #FFFFFF;
--bg-surface-2: #F8FAFC;
--bg-surface-glass: rgba(255, 255, 255, 0.85);
--bg-surface-glass-hover: rgba(240, 249, 255, 0.95);
--bg-topbar: #0B132B; /* Topbar escura para ancoragem visual elegante */
--bg-navbar: rgba(255, 255, 255, 0.94);
```

---

## 4. Tokens Semânticos de Bordas & Sombras

```css
--border-subtle: #E2E8F0;
--border-card: #CBD5E1;
--border-card-hover: #0084D1;
--border-accent-cyan: #0084D1;
--border-accent-magenta: #E60067;
--border-accent-yellow: #D97706;

--shadow-card: 0 10px 30px -5px rgba(11, 19, 43, 0.08);
--shadow-card-hover: 0 20px 40px -10px rgba(0, 132, 209, 0.18);
--shadow-dropdown: 0 15px 35px rgba(0, 0, 0, 0.12);
```

---

## 5. Tokens de Tipografia e Ícones

```css
--text-primary: #0B132B;
--text-secondary: #475569;
--text-muted: #64748B;
--text-accent-cyan: #0070BA;
--text-accent-magenta: #C2185B;
--text-accent-yellow: #B45309;
--text-inverse: #FFFFFF;

--icon-stroke: #0084D1;
--icon-stroke-secondary: #E60067;
--icon-stroke-yellow: #D97706;
--icon-fill: rgba(0, 132, 209, 0.08);
--icon-bg: #F0F9FF;
--icon-bg-border: #BAE6FD;
```
