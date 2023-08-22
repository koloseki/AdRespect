const mainImage = document.getElementById("mainImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const imageList = [
    "/assets/photos/mainPhotos/mainPhoto.jpg",
    "/assets/photos/mainPhotos/droneShot.jpg",
    "/assets/photos/mainPhotos/redRose.jpg",
];
let currentImageIndex = 0;

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
    mainImage.src = imageList[currentImageIndex];
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    mainImage.src = imageList[currentImageIndex];
});
