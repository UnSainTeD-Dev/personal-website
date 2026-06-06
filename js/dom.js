"use strict";

/* ==================== HELPERS ==================== */

const getById = (id) => document.getElementById(id);
const getByQuery = (selector) => document.querySelector(selector);
const getAllByQuery = (selector) => [...document.querySelectorAll(selector)];

/* ==================== HEADER ==================== */

export const themeToggle = getById("theme-toggle"); // Theme toggle button.

/* ==================== PROJECTS GALLERY ==================== */

export function getAllGalleries() {
    return getAllByQuery(".projects-gallery"); // All gallery root elements.
}
export function getGalleryViewport(gallery) {
    return gallery.querySelector(".projects-gallery__viewport"); // Gallery viewport.
}
export function getGallerySlides(gallery) {
    return [...gallery.querySelectorAll(".projects-gallery__slide")]; // Gallery slides.
}
export function getGalleryPrev(gallery) {
    return gallery.querySelector("[data-gallery-prev]"); // Previous arrow button.
}
export function getGalleryNext(gallery) {
    return gallery.querySelector("[data-gallery-next]"); // Next arrow button.
}
export function getGalleryDots(gallery) {
    return [...gallery.querySelectorAll("[data-gallery-dot]")]; // Dot navigation buttons.
}
