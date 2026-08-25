# Design System & Tokens Semânticos — VM Gráfica

Este documento define a paleta de cores, contraste de acessibilidade (WCAG) e **Tokens Semânticos (CSS Custom Properties)** extraídos diretamente da identidade visual oficial da **VM Gráfica** (Logo CMYK Splash + Faixa Navy).

Toda a interface consome exclusivamente estas variáveis no arquivo `style.css`. Ao alterar qualquer valor nesta lista, a aplicação inteira se adapta de forma instantânea e consistente.

---

## 1. Paleta de Cores Extraída do Logotipo Oficial

```
 ┌───────────────────┬───────────────────┬───────────────────┬───────────────────┐
 │   CYAN "V"        │   MAGENTA "M"     │   AMARELO SPLASH  │   NAVY OBSIDIAN   │
 │   #00D2FF         │   #EF0975         │   #F9BB27         │   #060C24         │
 │   RGB(0, 210, 255)│   RGB(239, 9, 117)│   RGB(249,187, 39)│   RGB(6, 12, 36)  │
 └───────────────────┴───────────────────┴───────────────────┴───────────────────┘
```

* **Cyan "V" (Destaque Tecnológico & Agilidade):**
  * `Highlight`: `#00D2FF` / `#00F0FF`
  * `Base / Gradient`: `#027AD9` $\rightarrow$ `#054EA2`
* **Magenta "M" (Criatividade & Personalizados Premium):**
  * `Highlight`: `#FC4EB0` / `#FF2A85`
  * `Base / Gradient`: `#EF0975` $\rightarrow$ `#B80669`
* **Amarelo "Papelaria Personalizada" & Ouro:**
  * `Highlight`: `#F9BB27` / `#F8D612` (Destaque de valor, selos e avisos)
* **Verde Limão Splash (Aprovação & WhatsApp):**
  * `Highlight`: `#22C55E` / `#65B32B`
* **Navy Obsidian Profundo (Faixa "Gráfica Rápida" & Canvas):**
  * `Canvas Base`: `#060C24`
  * `Surface Cards`: `rgba(10, 20, 48, 0.75)`

---

## 2. Matriz de Contraste e Acessibilidade (WCAG 2.1)

Todos os pares de cores foram calibrados para atender ou superar os padrões de contraste para modo escuro:

| Elemento | Cor do Texto / Ícone | Cor de Fundo | Razão de Contraste | Nível WCAG |
| :--- | :--- | :--- | :--- | :--- |
| **Títulos Principais** | `#F8FAFC` (Branco Puro) | `#060C24` (Navy Canvas) | **17.8 : 1** | **AAA** (Excepcional) |
| **Destaque Cyan** | `#00D2FF` (Cyan Luz) | `#060C24` (Navy Canvas) | **10.4 : 1** | **AAA** (Altíssimo) |
| **Destaque Amarelo** | `#F9BB27` (Amarelo Ouro) | `#060C24` (Navy Canvas) | **11.2 : 1** | **AAA** (Altíssimo) |
| **Destaque Magenta** | `#FF2A85` (Magenta Neon) | `#060C24` (Navy Canvas) | **5.8 : 1** | **AA** (Conforme) |
| **Texto de Apoio** | `#94A3B8` (Cinza Claro) | `#060C24` (Navy Canvas) | **6.9 : 1** | **AA** (Conforme) |
| **Texto Desativado** | `#64748B` (Muted) | `#060C24` (Navy Canvas) | **3.8 : 1** | Acessível p/ UI |

---

## 3. Tokens Semânticos de Superfície & Fundo (Backgrounds)

| Token CSS | Valor Padrão (Navy Brand Theme) | Função Semântica |
| :--- | :--- | :--- |
| `--bg-canvas` | `#060C24` | Fundo principal da página (Navy Obsidian extraído da faixa da logo). |
| `--bg-canvas-subtle` | `#040817` | Fundo secundário para alternância sutil entre seções. |
| `--bg-surface-1` | `rgba(10, 20, 48, 0.75)` | Fundo de cards estruturais com glassmorphism. |
| `--bg-surface-2` | `rgba(15, 30, 70, 0.65)` | Fundo de inputs, botões inativos e seletores da calculadora. |
| `--bg-surface-glass` | `rgba(255, 255, 255, 0.035)` | Fundo translúcido refinado. |
| `--bg-surface-glass-hover` | `rgba(0, 210, 255, 0.08)` | Estado de hover nos cards. |
| `--bg-topbar` | `rgba(4, 8, 23, 0.95)` | Barra de avisos no topo. |
| `--bg-navbar` | `rgba(6, 12, 36, 0.92)` | Menu principal de navegação. |

---

## 4. Tokens Semânticos de Bordas e Contornos (Borders)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Divisores e linhas discretas. |
| `--border-card` | `rgba(0, 210, 255, 0.15)` | Borda padrão dos cards de produto. |
| `--border-card-hover` | `rgba(0, 210, 255, 0.55)` | Borda de destaque ao passar o mouse. |
| `--border-accent-cyan` | `#00D2FF` | Borda ativa de seletores e foco de formulários. |
| `--border-accent-magenta`| `#EF0975` | Borda de produtos com acabamento especial e brindes. |
| `--border-accent-yellow` | `#F9BB27` | Borda de badges de garantia e avisos. |

---

## 5. Tokens Semânticos de Tipografia e Texto (Text Colors)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--text-primary` | `#F8FAFC` | Headlines, títulos e preços de destaque. |
| `--text-secondary` | `#94A3B8` | Parágrafos descritivos e subtítulos. |
| `--text-muted` | `#64748B` | Legendas, rodapés e notas secundárias. |
| `--text-accent-cyan` | `#00D2FF` | Palavras-chave destacadas em azul elétrico. |
| `--text-accent-magenta` | `#FC4EB0` | Destaque para linhas de presentes e eventos. |
| `--text-accent-yellow` | `#F9BB27` | Selos de garantia e texto secundário da marca. |
| `--text-inverse` | `#060C24` | Texto escuro sobre botões de alto contraste. |

---

## 6. Tokens de Ícones e Elementos Gráficos (Icons)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--icon-stroke` | `#00D2FF` | Traço padrão dos ícones vetoriais. |
| `--icon-stroke-secondary`| `#EF0975` | Traço para ícones de personalização e arte. |
| `--icon-stroke-yellow` | `#F9BB27` | Traço para ícones de garantia e balcão. |
| `--icon-fill` | `rgba(0, 210, 255, 0.12)` | Preenchimento interno suave do ícone. |
| `--icon-bg` | `rgba(10, 20, 48, 0.9)` | Container circular ou quadrado que envolve o ícone. |
| `--icon-bg-border` | `rgba(0, 210, 255, 0.3)` | Borda do container de ícone. |

---

## 7. Tokens de Iluminação e Gradientes (Glows & Gradients)

| Token CSS | Valor Padrão | Função Semântica |
| :--- | :--- | :--- |
| `--gradient-brand-vm` | `linear-gradient(135deg, #00D2FF 0%, #EF0975 100%)` | Gradiente oficial da marca (V em Cyan + M em Magenta). |
| `--gradient-cyan` | `linear-gradient(135deg, #00D2FF 0%, #054EA2 100%)` | Gradiente dos botões primários. |
| `--gradient-magenta` | `linear-gradient(135deg, #FF2A85 0%, #B80669 100%)` | Gradiente de cartões especiais. |
| `--shadow-glow-cyan` | `0 0 35px -5px rgba(0, 210, 255, 0.35)` | Brilho difuso em elementos primários. |
| `--shadow-glow-magenta`| `0 0 35px -5px rgba(239, 9, 117, 0.35)` | Brilho difuso em elementos especiais. |
| `--shadow-glow-yellow` | `0 0 25px -5px rgba(249, 187, 39, 0.35)` | Brilho sutil em badges e selos. |
