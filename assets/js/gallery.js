// === Carousel ===
const track = document.getElementById('gallery-track');
const btnPrev = document.querySelector('.gallery__btn--prev');
const btnNext = document.querySelector('.gallery__btn--next');

const VISIBLE_COUNT = 3;
let currentIndex = 0;

function getImageMetrics() {
    const images = track.querySelectorAll('img');
    if (!images.length) return { images, itemWidth: 0, totalItems: 0, gap: 0 };

    const first = images[0];
    const rect = first.getBoundingClientRect();
    const styles = window.getComputedStyle(first);
    const mr = parseFloat(styles.marginRight) || 0;
    const ml = parseFloat(styles.marginLeft) || 0;
    const gap = mr + ml;
    const itemWidth = rect.width + gap;

    return { images, itemWidth, totalItems: images.length, gap };
}

function updateGallery() {
    const { images, itemWidth, totalItems, gap } = getImageMetrics();
    if (!totalItems || !itemWidth) {
        btnPrev.style.display = 'none';
        btnNext.style.display = 'none';
        return;
    }
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    track.style.width = `${(itemWidth * totalItems) - gap}px`;

    btnPrev.style.display = currentIndex === 0 ? 'none' : 'block';
    btnNext.style.display =
        currentIndex >= Math.max(0, totalItems - VISIBLE_COUNT) ? 'none' : 'block';
}

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

btnNext.addEventListener('click', () => {
    const { totalItems } = getImageMetrics();
    if (currentIndex < Math.max(0, totalItems - VISIBLE_COUNT)) {
        currentIndex++;
        updateGallery();
    }
});

window.addEventListener('load', updateGallery);
window.addEventListener('resize', updateGallery);

// === Gallery Pop-up ===
const popup = document.getElementById('gallery-popup');
const popupImage = document.getElementById('popup-image');
const popupOverlay = document.getElementById('popup-overlay');
const popupClose = document.getElementById('popup-close');

function openPopup(fromImg) {
    popupImage.setAttribute('src', fromImg.currentSrc || fromImg.src);
    popupImage.setAttribute('alt', fromImg.alt || 'Image preview');

    popup.style.display = 'block';
    popup.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => popup.classList.add('show'));
}

function closePopup() {
    popup.classList.remove('show');
    const onTransitionEnd = () => {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        popup.removeEventListener('transitionend', onTransitionEnd);
    };
    if (getComputedStyle(popup).transitionDuration === '0s') {
        onTransitionEnd();
    } else {
        popup.addEventListener('transitionend', onTransitionEnd);
    }
}

track.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.tagName === 'IMG') {
        openPopup(target);
    }
});

popupOverlay.addEventListener('click', closePopup);
popupClose.addEventListener('click', closePopup);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
});
