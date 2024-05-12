document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let autoSlideInterval;

    // Show initial slide
    showSlide(currentSlide);

    // Function to show a slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Function to show next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Function to show previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Start auto sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000); // Change slide every 3 seconds (adjust as needed)
    }

    // Stop auto sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for previous and next buttons
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    prevButton.addEventListener('click', function() {
        prevSlide();
        stopAutoSlide();
    });
    nextButton.addEventListener('click', function() {
        nextSlide();
        stopAutoSlide();
    });

    // Start auto slide when DOM is loaded
    startAutoSlide();
});

// faqScript
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// pkgSlideScript
// Set up initial variables
let currentIndex = 0; // Start from the first image
const slider = document.getElementById('imageSlider'); // Slider container
const images = document.querySelectorAll('.pkgDetailsSlideImage img'); // All images in the slider
const totalImages = images.length; // Total number of images

// Function to show the image based on index
function showImage(index) {
    const offset = -index * 100; // Calculate offset for the slider
    slider.style.transform = `translateX(${offset}%)`; // Move the slider to the correct position
}

// Event listener for the left arrow
document.querySelector('.pkgDetailsArrow img:first-child').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Go to previous image (wrap-around)
    showImage(currentIndex); // Update the slider position
});

// Event listener for the right arrow
document.querySelector('.pkgDetailsArrow img:last-child').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Go to next image (wrap-around)
    showImage(currentIndex); // Update the slider position
});

// Optional: Set auto-slide interval
const autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages; // Go to next image automatically
    showImage(currentIndex); // Update the slider position
}, 3000); // Change every 3 seconds (adjust as needed)

// Stop auto-slide if manual control is used
function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the interval to stop auto-slide
}

// Add event listeners to stop auto-slide on manual click
document.querySelector('.pkgDetailsArrow img:first-child').addEventListener('click', stopAutoSlide);
document.querySelector('.pkgDetailsArrow img:last-child').addEventListener('click', stopAutoSlide);


// relatedPageScript
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".pakagesCardContainer"); // The main scrollable container
    const scrollStep = 300; // Adjust the step size for each scroll
    const scrollDelay = 3000; // Time in milliseconds between scrolls
    const scrollSpeed = 300; // Speed of the scroll animation in milliseconds
    
    let scrollPosition = 0; // Initial scroll position
    const containerWidth = container.scrollWidth; // Total width of the scrollable container
    const visibleWidth = container.clientWidth; // Width of the visible area
  
    const autoScroll = () => {
      // Increment the scroll position
      scrollPosition += scrollStep;
  
      // If we've reached or exceeded the container's scrollable area, reset to start
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0;
      }
  
      // Scroll the container to the new position with a smooth animation
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    };
  
    // Set the interval to auto-scroll
    setInterval(autoScroll, scrollDelay);
  });
  
//   stickyNavbar
document.querySelectorAll(".pkgnav-btn a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Default anchor behavior ko roken
    
    const targetId = link.getAttribute("href").substring(1); // # ke baad ka ID
    const target = document.getElementById(targetId);
    
    if (target) {
      const navbarHeight = 50; // Navbar ya header ka height adjust karen
      const offsetTop = target.offsetTop - navbarHeight; // Offset ko adjust karen
      
      window.scrollTo({
        top: offsetTop, // Corrected scroll position
        behavior: "smooth" // Smooth scrolling ke liye
      });
    }
  });
});







