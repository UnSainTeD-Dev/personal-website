document.addEventListener('DOMContentLoaded', async () => {
    const mount = document.getElementById('site-header');
    if (!mount) return;

    const partialUrl = mount.dataset.src || '/partials/header.html';
    const active = document.body?.dataset?.active;

    try {
        const res = await fetch(partialUrl, { credentials: 'same-origin' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const html = await res.text();
        mount.innerHTML = html;

        if (active) {
            const link = mount.querySelector(`.header__link[data-nav="${active}"]`);
            if (link) link.classList.add('header__link--active');
        }

        const current = mount.querySelector('.header__link--active');
        if (current) current.setAttribute('aria-current', 'page');

        const header = mount.querySelector('.header');
        if (header) {
            header.classList.add('header--enter');
            header.getBoundingClientRect();
            header.classList.add('header--ready')
        }
    } catch (err) {
        console.error('Header include error:', err);
    }
});
