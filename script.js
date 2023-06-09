const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

let currentImageIndex = 0;

prevArrow.addEventListener('click', showPreviousImage);
nextArrow.addEventListener('click', showNextImage);

function showPreviousImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  images[currentImageIndex].classList.add('active');
}

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

