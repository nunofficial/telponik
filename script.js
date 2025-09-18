const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(${-index * 500}px)`; // 250 = ширина контейнера
}

document.querySelector('.prev').onclick = () => showSlide(index - 1);
document.querySelector('.next').onclick = () => showSlide(index + 1);