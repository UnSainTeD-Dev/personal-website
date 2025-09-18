(() => {
    const btn = document.querySelector('.sidebar__to-top');
    if (!btn) return;

    const SHOW_AFTER = 400;

    let ticking = false;
    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const show = window.scrollY > SHOW_AFTER;
                btn.classList.toggle('is-visible', show);
                ticking = false;
            });
            ticking = true;
        }
    };

    const prefersReduced =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: prefersReduced ? 'auto' : 'smooth'
        });
        const main = document.getElementById('main-content');
        if (main) {
            setTimeout(() => main.focus({ preventScroll: true }), 250);
        }
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
