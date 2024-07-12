// Highlight the active navigation link based on the current page URL
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.href === currentLocation || (link.id === 'nav-home')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
