document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
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
});