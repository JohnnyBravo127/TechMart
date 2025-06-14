 // JavaScript for Hero Banner Carousel

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideCount = slides.children.length;
  const dots = document.querySelectorAll('.hero-pagination .dot');
  const leftArrow = document.querySelector('.hero-arrow.left');
  const rightArrow = document.querySelector('.hero-arrow.right');
  let currentIndex = 0;

  function updateSlidePosition() {
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + slideCount) % slideCount;
    updateSlidePosition();
  }

  leftArrow.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });

  rightArrow.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 5000);
});
