"use strict";

import {
    getAllGalleries,
    getGallerySlides,
    getGalleryPrev,
    getGalleryNext,
    getGalleryDots,
} from "./dom.js";

/** ==================== GALLERY ==================== **/

class Gallery {
    /**
     * @param {HTMLElement} root — .projects-gallery
     */
    constructor(root) {
        this.root = root;
        this.slides = getGallerySlides(root);
        this.btnPrev = getGalleryPrev(root);
        this.btnNext = getGalleryNext(root);
        this.dots = getGalleryDots(root);

        if (this.slides.length === 0) return;

        this.current = 0;
        this.total = this.slides.length;

        this._bindEvents();
        this._update();
    }

    // ─── Навигация ────────────────────────────────────────────

    goTo(index) {
        if (index < 0 || index >= this.total || index === this.current) return;

        this.slides[this.current].hidden = true;
        this.slides[this.current].classList.remove("is-active");

        this.current = index;

        this.slides[this.current].hidden = false;
        this.slides[this.current].classList.add("is-active");

        this._update();
    }

    prev() { this.goTo(this.current - 1); }
    next() { this.goTo(this.current + 1); }

    // ─── Синхронизация UI ─────────────────────────────────────

    _update() {
        const isFirst = this.current === 0;
        const isLast = this.current === this.total - 1;

        if (this.btnPrev) this.btnPrev.disabled = isFirst;
        if (this.btnNext) this.btnNext.disabled = isLast;

        this.dots.forEach((dot, i) => {
            const active = i === this.current;
            dot.classList.toggle("is-active", active);
            dot.setAttribute("aria-current", String(active));
        });
    }

    // ─── События ──────────────────────────────────────────────

    _bindEvents() {
        this.btnPrev?.addEventListener("click", () => this.prev());
        this.btnNext?.addEventListener("click", () => this.next());

        this.dots.forEach((dot, i) => {
            dot.addEventListener("click", () => this.goTo(i));
        });

        // Клавиши ← → когда фокус внутри галереи
        this.root.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); this.prev(); }
            if (e.key === "ArrowRight") { e.preventDefault(); this.next(); }
        });
    }
}

/** ==================== INIT ==================== **/

getAllGalleries().forEach((el) => new Gallery(el));
