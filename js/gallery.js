const track = document.getElementById('gallery-track');
const btnPrev = document.querySelector('.gallery__btn--prev');
const btnNext = document.querySelector('.gallery__btn--next');

const visibleCount = 3;
let currentIndex = 0;

const updateGallery = () => {
    const images = track.querySelectorAll('img');
    const imageWidth = images[0].offsetWidth + 10;
    const totalItems = images.length;

    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

    track.style.width = `${(imageWidth * totalItems) - 10}px`;

    btnPrev.style.display = currentIndex === 0 ? 'none' : 'block';
    btnNext.style.display = currentIndex >= totalItems - visibleCount ? 'none' : 'block';
};

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

btnNext.addEventListener('click', () => {
    const images = track.querySelectorAll('img');
    if (currentIndex < images.length - visibleCount) {
        currentIndex++;
        updateGallery();
    }
});

window.addEventListener('load', updateGallery);
window.addEventListener('resize', updateGallery);

// === Gallery Pop-up Logic ===

const popup = document.getElementById('gallery-popup');
const popupImage = document.getElementById('popup-image');
const popupOverlay = document.getElementById('popup-overlay');
const popupClose = document.getElementById('popup-close');

// Открытие модалки с плавным появлением
track.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        popupImage.src = img.src;
        popup.style.display = 'block';

        // Небольшая задержка, чтобы transition сработал
        requestAnimationFrame(() => {
            popup.classList.add('show');
        });
    });
});

// Закрытие модалки (резко)
function closePopup() {
    popup.classList.remove('show'); // сразу убираем прозрачность
    popup.style.display = 'none';   // мгновенное исчезновение
}

popupOverlay.addEventListener('click', closePopup);
popupClose.addEventListener('click', closePopup);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});
