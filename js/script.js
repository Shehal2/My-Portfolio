document.getElementById('githubButton').addEventListener('click', function() {
    window.open('https://github.com/your-github-repo', '_blank');
});

document.addEventListener("DOMContentLoaded", function() {
    const lightbox = GLightbox({
        selector: '.glightbox',
        closeButton: true // Enable the close button
    });
});
document.querySelector('a[href="#home"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
