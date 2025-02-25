document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const closePanelBtn = document.getElementById('close-panel-btn'); // New close panel button
    const sidePanel = document.getElementById('side-panel');
    const contentWrapper = document.querySelector('.content-wrapper');

    menuBtn.addEventListener('click', () => {
        sidePanel.classList.add('open');
        contentWrapper.classList.add('blur');
    });

    closeBtn.addEventListener('click', () => {
        sidePanel.classList.remove('open');
        contentWrapper.classList.remove('blur');
    });

    closePanelBtn.addEventListener('click', () => { // Event listener for new close panel button
        sidePanel.classList.remove('open');
        contentWrapper.classList.remove('blur');
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidePanel.contains(e.target) && 
            !menuBtn.contains(e.target) && 
            sidePanel.classList.contains('open')) {
            sidePanel.classList.remove('open');
            contentWrapper.classList.remove('blur');
        }
    });

    // Adjust side panel for small screens
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 480) {
            sidePanel.style.width = '100%';
        } else {
            sidePanel.style.width = '400px';
        }
    });

    // Swipe left to close side panel
    let touchStartX = 0;
    let touchEndX = 0;

    sidePanel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sidePanel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX) {
            sidePanel.classList.remove('open');
            contentWrapper.classList.remove('blur');
        }
    });

    // Swipe left to close side panel for smartphones
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX && sidePanel.classList.contains('open')) {
            sidePanel.classList.remove('open');
            contentWrapper.classList.remove('blur');
        }
    });

    // Fade-in animation 1 second after opening the website
    const fadeInElements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        fadeInElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 1000);

    // Fade-in animation on scroll down
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) { // Only apply fade-in when scrolling down
            fadeInElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0 && !element.classList.contains('visible')) {
                    element.classList.add('visible');
                }
            });
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});