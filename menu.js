document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menuList = document.querySelector('.menu-list');
    const overlay = document.querySelector('.overlay');
    const instagramContainer = document.querySelector('.instagram-container');
    const tutorsSection = document.querySelector('.tutors-section');

    menuButton.addEventListener('click', () => {
        menuList.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menuList.classList.remove('active');
        overlay.classList.remove('active');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                instagramContainer.classList.add('visible');
                tutorsSection.classList.add('visible');
            } else {
                instagramContainer.classList.remove('visible');
                tutorsSection.classList.remove('visible');
            }
        });
    });

    observer.observe(instagramContainer);
    observer.observe(tutorsSection);
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (xDiff > 0) {
        // Swiped left
        document.querySelector('.menu-list').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    }

    xDown = null;
}