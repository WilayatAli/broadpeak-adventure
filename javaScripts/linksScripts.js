// Add click event listeners to your anchor links
document.querySelectorAll('.sideLinksbp').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = anchor.getAttribute('href').substring(1); // Get the target ID (without '#')
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element with offset
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust as needed to match the height of the header
            behavior: 'smooth' // Smooth scroll
        });
    });
});
