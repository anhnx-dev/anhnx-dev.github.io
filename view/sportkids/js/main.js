$(function () {

    $('.navbar-toggler').click(function(event) {
        $('.top-bar').toggleClass('active');
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

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.section-product .tab li').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });
    $('.color .group-item .item').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });
});