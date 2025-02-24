const scrollButton = document.getElementById('scrollButton');

// Show/hide button based on scroll position and update progress
window.addEventListener('scroll', () => {
    const scrollPercentage = calculateScrollPercentage();
    updateScrollProgress(scrollPercentage);
    toggleButtonVisibility();
});

// Scroll to top when button is clicked
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Calculate scroll percentage
function calculateScrollPercentage() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / scrollHeight) * 100;
}

// Update progress indicator
function updateScrollProgress(percentage) {
    scrollButton.style.background = `conic-gradient(var(--txt-hover-color) ${percentage}%,var(--border-color-01) ${percentage}%)`;
}

// Toggle button visibility
function toggleButtonVisibility() {
    if (window.scrollY > 100) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
}