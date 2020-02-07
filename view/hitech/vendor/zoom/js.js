$(function () {

    $("#zoom_img")
        .elevateZoom({
            gallery: 'gallery_img',
            zoomType: "inner",
            cursor: "crosshair"
        });


    $('#gallery_img')
        .slick({
            arrow: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1
        });

    $('#gallery_img')
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