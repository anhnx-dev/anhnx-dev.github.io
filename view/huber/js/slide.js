$(function () {

    $('#section-slider .slider-big').slick({
        arrows: false,
        fade: true,
        asNavFor: '#section-slider .slider-small .inner'
    });
    $('#section-slider .slider-small .inner').slick({
        asNavFor: '#section-slider .slider-big',
        dots: true,
        arrows: false,
    });

})