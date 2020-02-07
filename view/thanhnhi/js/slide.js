$(function () {

    $('.slider-home').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.project-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
            }
        }]
    });

    $('.slider-accessories').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4500,
    });

    $('.item-04 .group-img').slick({
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }]
    });

    $('.product-slider').slick({
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 300,
        responsive: [{
            breakpoint: 768,
            settings: {
                centerMode: false,
                variableWidth: false,
                slidesToShow: 1,
            }
        }]
    });

    $('.other .slider-other').slick({
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesPerRow: 1,
                arrows: false,
            }
        }]
    });

    $('.slider-01').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-02',
    });
    $('.slider-02').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-01',
        arrows: false,
        focusOnSelect: true,
    });

    $('.slider-other-v2').slick({
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $("#zoom_03")
        .elevateZoom({
            gallery: 'gallery_03',
            zoomType: "inner",
            cursor: "crosshair"
        });


    $('.slick')
        .slick({
            arrow: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
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

})