const reviewsList = document.querySelector('.reviews__card-list');
const btnLeft = document.querySelector('.button__left');
const btnRight = document.querySelector('.button__right');
const reviewItems = document.querySelectorAll('.reviews__card-list-item');

let currentSlide = 0;
const visibleCards = 2;
const slidesCount = reviewItems.length - 1;
const maxSlide = slidesCount - 1;

btnLeft.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateTransform();
  }
});

btnRight.addEventListener('click', () => {
  if (currentSlide < maxSlide) {
    currentSlide++;
    updateTransform();
  }
});

function updateTransform() {
  reviewsList.style.transform = `translateX(-${currentSlide * 50}%)`;
}