function showGallery(galleryId) {
    // Hide all galleries first
    const galleries = document.querySelectorAll('.gallery-content');
    galleries.forEach(gallery => {
        gallery.classList.remove('active');
    });

    // Show the selected gallery
    const selectedGallery = document.getElementById(galleryId);
    selectedGallery.classList.add('active');
}