$(function () {

    // khung Anh
    $(function () {
        $(window).load(function () {
            $(".khungAnhCrop img").each(function () {
                $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
            });
        });
    });

    // ve top
    $('.ve-top').click(function () {
        $('body').animate({
            scrollTop: $('.header').offset().top
        }, 1000);
        return false;
    });

    var i = 1;
    $('.product-home .slider-product').each(function () {
        $(this).addClass('sliderxx' + i);
        i = i + 1;
    });
    for (j = 1; j <= i; j++) {
        $('.sliderxx' + j + '').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 5000,
        });
    };

    // select sys
    $('.a-tab a').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });

})