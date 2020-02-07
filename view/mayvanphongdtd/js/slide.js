$(function(){

    $('.slide-main').slick({
        speed: 1000,
        autoplay: true,
        arrows: false,
        infinite: false,
        dots: true,
    });

    $('.slide-right').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        arrows: false,
    });

    $('.section .nav-menu').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        rtl: true,
    });

    $('.tt-sk .block-item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.section-slide .block-item').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.main-tt-ct .block-tin').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.slide-anh_to').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-anh_nho',
    });
    $('.slide-anh_nho').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slide-anh_to',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
    });
})