// Portfolio Interactions and Runtime Enhancements
document.addEventListener('DOMContentLoaded', () => {
    console.log("Suparshva Bendsure's Portfolio Loaded Successfully. - script.js:3");

    // Smooth scroll enhancement for navigation links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});