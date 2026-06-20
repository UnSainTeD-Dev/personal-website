"use strict";

import { welcomeText } from "../../ui/dom.js";

/* ==================== CONSTANTS ==================== */

const CHAR_DELAY = 45; // ms between characters.

/* ==================== INTERNALS ==================== */

function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function typeText(element, text) {
    const typed = document.createElement("span"); // Visual char-by-char layer.
    typed.className = "welcome__text-typed";
    typed.setAttribute("aria-hidden", "true");

    const full = document.createElement("span"); // Full text for screen readers.
    full.className = "u-visually-hidden";
    full.textContent = text;

    element.replaceChildren(typed, full);
    element.classList.add("is-typing");

    let i = 0;
    (function tick() {
        typed.textContent = text.slice(0, i);

        if (i < text.length) {
            i += 1;
            setTimeout(tick, CHAR_DELAY);
        } else {
            element.classList.remove("is-typing"); // Hide caret when done.
        }
    })();
}

/* ==================== INIT ==================== */

export function initTyping() {
    if (!welcomeText || prefersReducedMotion()) return; // Keep static text as-is.

    const text = welcomeText.textContent.trim();
    if (text) typeText(welcomeText, text);
}
