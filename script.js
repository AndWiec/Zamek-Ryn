var screenWidth = screen.width;
var x = 0;

if (screenWidth < 700) {
    x = 1;
} else {
    x = 3;
}

$(document).ready(function() {
    $('.nav__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: "linear",
        autoplay: true,
        speed: 800
    });
});

$(document).ready(function() {
    $('.content__slider').slick({
        slidesToShow: x,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1100,
        centerMode: true,
        centerPadding: '0px'
    });
});