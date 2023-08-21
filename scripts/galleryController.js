const galleryPhoto = document.querySelectorAll('.galleryPhoto');
const galleryPhotoBrowser = document.querySelector('.galleryPhotoBrowser');
const selectedPhotoContainer = document.querySelector('.showingPhoto');
const galleryCloseButton = document.querySelector('.galleryCloseButton');
const nextButton = document.querySelector('.nextPhotoButton');
const prevButton = document.querySelector('.prevPhotoButton');
const galleryImages = document.querySelectorAll('.galleryPhoto img');
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
    galleryPhoto.forEach((button, index) => button.addEventListener('click', function () {
        currentImageIndex = index;
        updateSelectedPhoto();
        galleryPhotoBrowser.showModal();
    }));

    nextButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Zatrzymaj propagację kliknięcia
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateSelectedPhoto();
    });

    prevButton.addEventListener('click', function (e) {
        e.stopPropagation(); // Zatrzymaj propagację kliknięcia
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateSelectedPhoto();
    });
});


function updateSelectedPhoto() {
    const newImageSrc = galleryImages[currentImageIndex].getAttribute('src');
    selectedPhotoContainer.innerHTML = `<img src="${newImageSrc}" alt="image">`;
}

//close dialog when clicking on close button
galleryCloseButton.addEventListener('click', function () {
    galleryPhotoBrowser.close();
});

//close dialog when clicking outside of it
galleryPhotoBrowser.addEventListener('click', e => {
    const dialogDimensions = galleryPhotoBrowser.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        galleryPhotoBrowser.close();
    }
});
