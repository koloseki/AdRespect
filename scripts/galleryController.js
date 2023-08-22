import Masonry from "masonry-layout";

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
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateSelectedPhoto();
    });

    prevButton.addEventListener('click', function (e) {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateSelectedPhoto();
    });



    // Przechowaj wszystkie obrazy w jednym miejscu
    const expandButton = document.querySelector('.expand-button');
    const galleryContainer = document.querySelector('.grid');
    const initialVisibleCount = 4; // Początkowa liczba widocznych obrazków
    let visibleImageCount = initialVisibleCount; // Liczba aktualnie widocznych obrazków
    const allImages = Array.from(galleryContainer.querySelectorAll('img'));



    expandButton.addEventListener('click', function () {
        visibleImageCount += initialVisibleCount;
        allImages.forEach((image, index) => {
            if (index < visibleImageCount) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        });
        if (visibleImageCount >= allImages.length) {
            expandButton.classList.add('hidden');
        }
        const msnry = new Masonry(galleryContainer);
    });
    expandButton.click();

});


function updateSelectedPhoto() {
    const newImageSrc = galleryImages[currentImageIndex].getAttribute('src');
    selectedPhotoContainer.innerHTML = `<img src="${newImageSrc}" alt="image">`;
}

// Zamknij okno dialogowe po kliknięciu przycisku zamknięcia
galleryCloseButton.addEventListener('click', function () {
    galleryPhotoBrowser.close();
});

// Zamknij okno dialogowe po kliknięciu poza nim
galleryPhotoBrowser.addEventListener("click", e => {
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
