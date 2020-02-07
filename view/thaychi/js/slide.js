$(function () {

    // slider home page
    $('#slider-hp .inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // slide other
    $('.other .inner-other').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
    });

    // slide other
    $('.slider-pr').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // slider other img
    $('.slider-oi').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // menu danh muc san pham
    $('.section-sp3 .menu-ssp').slick({
        infinite: true,
        rtl: true,
        dots: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: "unslick",
            }
        ]
    });

    //slider top detail img
    $('.top-detail-img .slider-to').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.top-detail-img .slider-be'
    });
    $('.top-detail-img .slider-be').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.top-detail-img .slider-to',
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    });


});

$(document).ready(function () {

    $("#zoom_03")
        .elevateZoom({
            gallery: 'gallery_03',
            zoomWindowWidth: $(".imageZoomWrapper").width(),
            zoomWindowHeight: $(".imageZoomWrapper").height(),
            zoomWindowPosition: "zome3-container",
            borderSize: 1,
            cursor: 'pointer',
            galleryActiveClass: 'active',
            imageCrossfade: true,

            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            easing: true,
            scrollZoom: true,

            zoomType: "lens",
            lensShape: "round",
            lensSize: 130


        });


    $('.slick')
        .slick({
            dots: false,
            arrow: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: false,
                    }
            }
        ]
        });

    $('.slick')
        .on('afterChange',
            function (event, slick, currentSlide) {
                if ($(".slick .slick-slide[data-slick-index=" + currentSlide + "]").attr(
                        "data-image") !==
                    $(".mainImage").attr("src"))
                    $(".slick .slick-slide[data-slick-index=" + currentSlide + "]").click();
            });

    setTimeout(function () {
            $(".slick .slick-current").click();
        },
        100);

});
