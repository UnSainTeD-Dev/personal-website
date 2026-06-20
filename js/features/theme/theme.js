"use strict";

import { themeToggle } from "../../ui/dom.js";

/* ==================== CONSTANTS ==================== */

const THEME_KEY = "theme";
const THEME_LIGHT = "light";

/* ==================== INTERNALS ==================== */

function getStoredTheme() {
    return localStorage.getItem(THEME_KEY); // "light" | null
}

function applyTheme(theme) {
    if (theme === THEME_LIGHT) {
        document.documentElement.setAttribute("data-theme", THEME_LIGHT);
        themeToggle?.setAttribute("aria-pressed", "true");
    } else {
        document.documentElement.removeAttribute("data-theme");
        themeToggle?.setAttribute("aria-pressed", "false");
    }
}

function toggleTheme() {
    const isLight = document.documentElement.getAttribute("data-theme") === THEME_LIGHT;
    const next = isLight ? null : THEME_LIGHT;

    if (next) {
        localStorage.setItem(THEME_KEY, next);
    } else {
        localStorage.removeItem(THEME_KEY);
    }

    applyTheme(next);
}

/* ==================== INIT ==================== */

export function initTheme() {
    applyTheme(getStoredTheme());
    themeToggle?.addEventListener("click", toggleTheme);
}
