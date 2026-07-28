# 📋 Changelog Component

> Um componente de changelog moderno, responsivo e acessível construído com **HTML5 semântico** e **CSS3 modular**.

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Yes-28a745?style=for-the-badge" alt="Responsive">
  <img src="https://img.shields.io/badge/Dark%20Mode-Yes-663399?style=for-the-badge" alt="Dark Mode">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen.svg" alt="Status">
</p>

---

## ✨ Funcionalidades

- 📱 **100% Responsivo** — Mobile-first, adapta-se a qualquer tela
- 🌙 **Dark Mode** — Alternância entre tema claro e escuro com persistência
- ♿ **Acessível** — Tags semânticas HTML5 + atributos ARIA
- 🎨 **Design System** — Variáveis CSS (Design Tokens) centralizadas
- ✨ **Animações suaves** — Fade-in, hover effects, pulsação
- 🏗️ **Arquitetura modular** — CSS separado por responsabilidade
- 📐 **Timeline vertical** — Cards alternando esquerda/direita no desktop

---

## 🚀 Demonstração

### Desktop
<p align="center">
  <em>Timeline com cards alternando esquerda/direita</em>
</p>

### Mobile
<p align="center">
  <em>Cards empilhados verticalmente com timeline à esquerda</em>
</p>

### Dark Mode
<p align="center">
  <em>Tema escuro com todas as cores invertidas</em>
</p>

---

## 📁 Estrutura do Projeto

```
changelog-component/
├── index.html                 # Estrutura semântica principal
├── css/
│   ├── main.css              # Importa todos os módulos
│   ├── base/
│   │   ├── reset.css         # Reset CSS moderno
│   │   ├── variables.css     # Design Tokens (cores, espaços, fontes)
│   │   └── typography.css    # Escala tipográfica e estilos de texto
│   ├── layout/
│   │   ├── layout.css        # Header, main, footer, container
│   │   └── responsive.css    # Media queries (mobile, tablet, desktop)
│   └── components/
│       ├── animations.css    # Keyframes e utilitários de animação
│       ├── dark-mode.css     # Tema escuro + botão toggle
│       ├── timeline.css      # Linha vertical + markers
│       ├── release-card.css  # Cards de versão + posicionamento
│       └── badges.css        # Badges de versão + tags de categoria
├── js/
│   └── main.js               # Dark mode toggle + Intersection Observer
└── README.md                 # Este arquivo
```

---

## 🛠️ Tecnologias

- **HTML5** — Tags semânticas (`<article>`, `<section>`, `<time>`, etc.)
- **CSS3** — Custom Properties, Flexbox, Grid, Transitions, Animations
- **JavaScript (Vanilla)** — Sem frameworks, código limpo e moderno
- **Metodologia BEM** — Bloco__Elemento--Modificador
- **Mobile-First** — Desenvolvimento responsivo progressivo

---

## 📖 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/gustavodeoliveiradev/changelog-component.git
cd changelog-component
```

### 2. Abra no navegador

```bash
# Simplesmente abra o index.html no seu navegador
open index.html

# Ou use um servidor local (Live Server no VS Code)
```

### 3. Personalize

Edite o arquivo `index.html` para adicionar seus próprios releases:

```html
<article class="release-card" data-version="1.0.0">
    <div class="release-card__marker">
        <span class="marker__dot"></span>
    </div>
    <div class="release-card__content">
        <header class="release-card__header">
            <div class="release-card__meta">
                <span class="badge badge--version">v1.0.0</span>
                <time class="release-card__date" datetime="2026-01-01">
                    1 de Janeiro, 2026
                </time>
            </div>
            <h2 class="release-card__title">Seu Título Aqui</h2>
        </header>
        <div class="release-card__changes">
            <!-- Suas mudanças aqui -->
        </div>
    </div>
</article>
```

### 4. Customize as cores

Edite `css/base/variables.css` para mudar o tema:

```css
:root {
    --color-primary-500: #6366f1;  /* Troque para sua cor */
    --color-bg-body: #f8fafc;      /* Fundo da página */
    /* ... */
}
```

---

## 🎨 Design Tokens

O projeto usa **CSS Custom Properties** como Design Tokens:

| Token | Descrição | Exemplo |
|-------|-----------|---------|
| `--color-primary-500` | Cor principal | `#6366f1` |
| `--color-bg-body` | Fundo da página | `#f8fafc` |
| `--font-size-base` | Tamanho base da fonte | `1rem` (16px) |
| `--space-4` | Espaçamento base | `1rem` (16px) |
| `--shadow-card` | Sombra dos cards | `0 1px 3px rgba(0,0,0,0.1)` |
| `--radius-2xl` | Raio de borda grande | `1rem` (16px) |

---

## ♿ Acessibilidade

- ✅ Tags HTML5 semânticas (`<header>`, `<main>`, `<article>`, `<time>`)
- ✅ Atributos ARIA (`role="feed"`, `aria-label`, `aria-live`)
- ✅ `prefers-reduced-motion` respeitado em todas as animações
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Navegação por teclado suportada (`focus-visible`)

---

## 🗓️ Roadmap do Desenvolvimento

| Dia | Foco | Status |
|-----|------|--------|
| **Dia 1** | Estrutura HTML semântica + Setup modular | ✅ Concluído |
| **Dia 2** | Reset CSS + Variáveis CSS + Tipografia | ✅ Concluído |
| **Dia 3** | Layout principal + Timeline vertical | ✅ Concluído |
| **Dia 4** | Componentes: Cards, badges, tags, animações | ✅ Concluído |
| **Dia 5** | Responsividade + Dark Mode + README | ✅ Concluído |

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. 🍴 Fork este repositório
2. 🌿 Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. 💾 Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. 📤 Push para a branch (`git push origin feature/nova-funcionalidade`)
5. 🔃 Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT** — veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Autor

**Gustavo de Oliveira**

- GitHub: [@gustavodeoliveiradev](https://github.com/gustavodeoliveiradev)
- LinkedIn: *(adicione seu LinkedIn)*

---

<p align="center">
  Feito com 💜 e muito ☕
</p>

<p align="center">
  <a href="https://github.com/gustavodeoliveiradev/changelog-component">⭐ Star este projeto</a> se te ajudou!
</p>
