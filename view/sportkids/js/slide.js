$(function () {

    $('.slider-home').slick({
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4500,
        cssEase: 'linear'
    });

    $('#sd02').slick({
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '#sd01'
    });
    $('#sd01').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#sd02',
        vertical: true,
        focusOnSelect: true
    });
    
    $('#sd04').slick({
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '#sd03'
    });
    $('#sd03').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#sd04',
        vertical: true,
        focusOnSelect: true
    });

    $('.news-home .warpper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.slider-other').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2,
                }
            }
        ]
    });

})