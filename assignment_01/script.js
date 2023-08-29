function updateMainImage(thumbnail) {
    const mainImage = document.querySelector('.main-image img');
    const description = document.querySelector('.image-description');
    
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
}

