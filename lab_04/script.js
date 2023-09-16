/*function updateMainImage(thumbnail) {
    const mainImage = document.querySelector('.main-image img');
    const description = document.querySelector('.image-description');
    
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
}*/

document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image img');
    const description = document.querySelector('.image-description');
    const thumbnails = document.querySelectorAll('.thumbnail-container img');

    function updateMainImage(thumbnail) {
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
        description.textContent = thumbnail.alt;
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => updateMainImage(thumbnail));
    });
});


