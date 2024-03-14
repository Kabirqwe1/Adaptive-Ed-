let currentImageIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
}

function previousImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    images[currentImageIndex].classList.add('active');
}

setInterval(nextImage, 3000); // Auto-slide every 3 seconds
