# Design System & Tokens Semânticos — VM Gráfica

Este documento define a camada central de **Tokens Semânticos (CSS Custom Properties)** do projeto.
Toda a interface consome exclusivamente estas variáveis no arquivo `style.css`. Ao alterar qualquer valor nesta lista ou injetar uma nova paleta (ex: via Skew / gerador de temas), **a página inteira se adapta instantaneamente**.

---

## 1. Tokens de Superfície e Fundo (Backgrounds)

| Token CSS | Valor Padrão (Dark Mode) | Função Semântica |
| :--- | :--- | :--- |
| `--bg-canvas` | `#070A0F` | Fundo principal da página (Deep Obsidian). |
| `--bg-canvas-subtle` | `#0B111A` | Fundo secundário para alternância sutil de seções. |
| `--bg-surface-1` | `rgba(17, 24, 39, 0.7)` | Fundo de cards estruturais e containers. |
| `--bg-surface-2` | `rgba(30, 41, 59, 0.6)` | Fundo de inputs, seletores e cards secundários. |
| `--bg-surface-glass` | `rgba(255, 255, 255, 0.03)` | Fundo com efeito de vidro (*Glassmorphism*). |
| `--bg-surface-glass-hover` | `rgba(255, 255, 255, 0.07)` | Estado de hover em cartões e botões neutros. |
| `--bg-topbar` | `rgba(11, 17, 26, 0.95)` | Barra de avisos no topo da página. |
| `--bg-navbar` | `rgba(7, 10, 15, 0.85)` | Menu de navegação fixo com desfoque. |

---

## 2. Tokens de Bordas e Divisores (Borders)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Linhas divisórias e contornos discretos. |
| `--border-card` | `rgba(255, 255, 255, 0.12)` | Contorno padrão de cards e caixas de conteúdo. |
| `--border-card-hover` | `rgba(0, 240, 255, 0.4)` | Contorno de destaque ao passar o mouse. |
| `--border-accent-cyan` | `#00F0FF` | Destaque ativo para seletores e badges tecnológicos. |
| `--border-accent-magenta`| `#EC4899` | Destaque ativo para acabamentos nobres e promoções. |
| `--border-focus` | `#00F0FF` | Indicador de foco acessível em inputs e botões. |

---

## 3. Tokens de Tipografia e Texto (Text Colors)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--text-primary` | `#F8FAFC` | Títulos, headlines e textos de maior destaque. |
| `--text-secondary` | `#94A3B8` | Textos descritivos, subtítulos e parágrafos. |
| `--text-muted` | `#64748B` | Legendas, notas de rodapé e textos desativados. |
| `--text-accent-cyan` | `#00F0FF` | Palavras-chave destacadas em azul elétrico. |
| `--text-accent-magenta` | `#F472B6` | Palavras-chave destacadas em magenta/rosa. |
| `--text-inverse` | `#070A0F` | Texto escuro sobre botões de alto contraste. |

---

## 4. Tokens de Acentos, Marcas & Cores Gráficas (Accents)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--accent-cyan` | `#00F0FF` | Cor primária tecnológica (agilidade e precisão). |
| `--accent-cyan-rgb` | `0, 240, 255` | Canal RGB para uso em opacidades dinâmicas. |
| `--accent-magenta` | `#EC4899` | Cor secundária (acabamentos nobres, brindes e festas). |
| `--accent-magenta-rgb` | `236, 72, 153` | Canal RGB para uso em opacidades dinâmicas. |
| `--accent-yellow` | `#FBBF24` | Detalhes de avisos e estrelas de avaliação. |
| `--accent-whatsapp` | `#22C55E` | Cor oficial para conversão no WhatsApp. |
| `--accent-whatsapp-hover`| `#16A34A` | Estado hover do botão de WhatsApp. |

---

## 5. Tokens de Ícones (Icon Colors & Fills)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--icon-stroke` | `#00F0FF` | Cor do traço/linha dos ícones vetoriais. |
| `--icon-stroke-secondary`| `#EC4899` | Cor alternativa de traço para ícones de festas/brindes. |
| `--icon-stroke-muted` | `#94A3B8` | Traço de ícones neutros e utilitários. |
| `--icon-fill` | `rgba(0, 240, 255, 0.12)` | Preenchimento interno de fundo do ícone. |
| `--icon-bg` | `rgba(255, 255, 255, 0.04)` | Container circular ou quadrado que envolve o ícone. |
| `--icon-bg-border` | `rgba(0, 240, 255, 0.25)` | Borda da caixa do ícone. |
| `--icon-bg-hover` | `rgba(0, 240, 255, 0.18)` | Efeito visual no container do ícone ao passar o mouse. |

---

## 6. Tokens de Efeitos Visuais & Iluminação (Glows, Shadows & Blurs)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--shadow-card` | `0 10px 30px -10px rgba(0, 0, 0, 0.5)` | Sombra de profundidade dos cards. |
| `--shadow-glow-cyan` | `0 0 35px -5px rgba(0, 240, 255, 0.25)` | Brilho difuso em elementos de destaque primários. |
| `--shadow-glow-magenta`| `0 0 35px -5px rgba(236, 72, 153, 0.25)` | Brilho difuso em elementos secundários. |
| `--blur-glass` | `blur(16px)` | Nível de desfoque das superfícies translúcidas. |
| `--radius-sm` | `8px` | Arredondamento de tags e badges. |
| `--radius-md` | `14px` | Arredondamento de botões e inputs. |
| `--radius-lg` | `24px` | Arredondamento de cards e containers. |
| `--radius-full` | `9999px` | Pílulas e botões circulares. |
