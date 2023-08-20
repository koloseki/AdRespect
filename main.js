import Masonry from 'masonry-layout'

window.onload = function() {
    // Tworzenie instancji Masonry
    const grid = document.querySelector('.grid');
    const msnry = new Masonry(grid);
};




let photoGallery = document.querySelector('.grid');


const offerButton = document.querySelector('#offerButton');
let dialog = document.querySelector('dialog');
const offerArrow = document.querySelector('.offerArrow');
offerButton.addEventListener('click', function () {
    dialog.toggleAttribute('open');
    offerArrow.classList.toggle('rotate');
});


const searchBarToggle = document.querySelector('.searchBarToggle');
let searchBar = document.querySelector('.searchBar');
searchBarToggle.addEventListener('click', function () {
    searchBar.classList.toggle('hidden');
});