const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

function showSlide(i) {
  const slideWidth = images[0].clientWidth;
  
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;

  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

document.querySelector('.prev').onclick = () => showSlide(index - 1);
document.querySelector('.next').onclick = () => showSlide(index + 1);


showSlide(0)