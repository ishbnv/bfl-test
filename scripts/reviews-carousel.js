const reviewsList = document.querySelector('.reviews__card-list');
const btnLeft = document.querySelector('.button__left');
const btnRight = document.querySelector('.button__right');
const reviewItems = document.querySelectorAll('.reviews__card-list-item');
const totalCards = reviewItems.length; // 4
const visibleCards = 3;
const shiftPerClick = 1;

const maxShift = totalCards - visibleCards; 

let currentSlide = 0;

btnLeft.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateTransform();
  }
});

btnRight.addEventListener('click', () => {
  if (currentSlide < maxShift) {
    currentSlide++;
    updateTransform();
  }
});

function updateTransform() {
  const shiftPercent = 100; 
  reviewsList.style.transform = `translateX(-${currentSlide * shiftPercent}%)`;
}