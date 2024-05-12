// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('image-overlay');
    const fullSizeImage = document.getElementById('full-size-image');
    const closeOverlay = document.getElementById('close-overlay');

    const galleryImages = document.querySelectorAll('.gallery-image');

    // Show the overlay with the full-size image when an image is clicked
    galleryImages.forEach((image) => {
        image.addEventListener('click', () => {
            const src = image.src; // Get the source of the clicked image
            fullSizeImage.src = src; // Set the full-size image source
            overlay.style.display = 'flex'; // Show the overlay/modal
        });
    });

    // Close the overlay/modal when the close button is clicked
    closeOverlay.addEventListener('click', () => {
        overlay.style.display = 'none'; // Hide the overlay
    });

    // Close the overlay when clicking outside the image
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) { // Check if clicked outside the image
            overlay.style.display = 'none'; // Hide the overlay
        }
    });
});


// UnderConstrction-Page
// Set the launch date (20 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 20); // Set 20 days from now
function updateCountdown() {
    const now = new Date();
    const timeDifference = launchDate - now;

    // Calculate the time remaining
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the timer display
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Continue updating the countdown every second
    if (timeDifference > 0) {
        setTimeout(updateCountdown, 1000); // Update every second
    }
}

// Start the countdown when the document is fully loaded
document.addEventListener("DOMContentLoaded", updateCountdown);

