let currentIndex = 0;

const images = document.querySelectorAll('.gallery-image');
const totalImages = images.length;

function updateGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first image
  }
  updateGallery();
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Loop back to the last image
  }
  updateGallery();
}
