/*
    ================================================
    MAIN.JS — JavaScript do Changelog
    ================================================
    Funcionalidades:
    - Dark Mode Toggle (salva preferência no localStorage)
    - Animações ao scrollar (Intersection Observer)
    - Smooth scroll
*/

(function() {
    'use strict';

    /* ═══════════════════════════════════════════
       DARK MODE TOGGLE
       ═══════════════════════════════════════════ */

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;

    // Verifica preferência salva ou do sistema
    function getInitialTheme() {
        const savedTheme = localStorage.getItem('changelog-theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Verifica preferência do sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Aplica o tema
    function setTheme(isDark) {
        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('changelog-theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('changelog-theme', 'light');
        }
    }

    // Inicializa o tema
    setTheme(getInitialTheme());

    // Evento do botão
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDark = html.classList.contains('dark');
            setTheme(!isDark);
        });
    }

    /* ═══════════════════════════════════════════
       ANIMAÇÕES AO SCROLLAR
       ═══════════════════════════════════════════
       Usa Intersection Observer para detectar
       quando elementos entram na viewport.
    */

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa todos os cards
    document.querySelectorAll('.release-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });

    /* ═══════════════════════════════════════════
       SMOOTH SCROLL PARA LINKS INTERNOS
       ═══════════════════════════════════════════ */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('🚀 Changelog Component carregado!');
})();
