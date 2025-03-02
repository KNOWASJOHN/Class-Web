document.querySelector('.menu-button').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    const overlay = document.querySelector('.overlay');
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
        overlay.classList.remove('active');
    } else {
        menuList.style.display = 'block';
        overlay.classList.add('active');
    }
});

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.menu-list').style.display = 'none';
    document.querySelector('.overlay').classList.remove('active');
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
        document.querySelector('.menu-list').style.display = 'none';
        document.querySelector('.overlay').classList.remove('active');
    }

    xDown = null;
}
