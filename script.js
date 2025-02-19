// Open lightbox when an image is clicked
function openLightbox(imageSrc) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-image").src = imageSrc;
}

// Close the lightbox when the close button is clicked
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
