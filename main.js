document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelector(".menu-button"),
        t = document.querySelector(".menu-list"),
        s = document.querySelector(".overlay"),
        o = document.querySelector(".instagram-container"),
        c = document.querySelector(".tutors-section");
    e.addEventListener("click", () => {
        t.classList.toggle("active"), s.classList.toggle("active");
    }),
        s.addEventListener("click", () => {
            t.classList.remove("active"), s.classList.remove("active");
        });
    let i = new IntersectionObserver((e) => {
        e.forEach((e) => {
            e.isIntersecting ? (o.classList.add("visible"), c.classList.add("visible")) : (o.classList.remove("visible"), c.classList.remove("visible"));
        });
    });
    i.observe(o), i.observe(c);
}),
    document.addEventListener("touchstart", handleTouchStart, !1),
    document.addEventListener("touchmove", handleTouchMove, !1);
let xDown = null;
function handleTouchStart(e) {
    let t = e.touches[0];
    xDown = t.clientX;
}
function handleTouchMove(e) {
    if (xDown) xDown - e.touches[0].clientX > 0 && (document.querySelector(".menu-list").classList.remove("active"), document.querySelector(".overlay").classList.remove("active")), (xDown = null);
}
