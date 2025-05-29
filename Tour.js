document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const imageSrc = urlParams.get('image');
    const detailsText = urlParams.get('details');

    const titleElement = document.getElementById('destination-title');
    const imageElement = document.getElementById('destination-image');
    const detailsElement = document.getElementById('destination-details');

    if (titleElement) titleElement.textContent = title;
    if (imageElement) {
        imageElement.src = imageSrc;
        imageElement.alt = title;
    }
    if (detailsElement) detailsElement.textContent = detailsText;
});
