var lastScroll;
var navbar = document.getElementById("header");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScroll) {
        navbar.style.opacity = "0";
    } else {
        navbar.style.opacity = "1";
    }
    lastScroll = scrollTop;
});
navbar.addEventListener("mouseenter", function () {
    navbar.style.opacity = "1";
});
