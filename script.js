
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

