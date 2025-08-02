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
