

// lien he thanh cong
function myFunction() {
    $('.overlay-lh, .block-hide_lh, .remove-lh').addClass('active');
};

$(function () {

    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });

    // lien he thanh cong
    $('.overlay-lh, .block-hide_lh, .remove-lh').addClass('active');
    $('.overlay-lh, .remove-lh').click(function (event) {
        $('.overlay-lh, .block-hide_lh, .remove-lh').removeClass('active');
    });


    // ve top
    $(window).scroll(function () {
        gps = $(this).scrollTop();

        if (gps > 1280) {
            $('.ve-top').addClass('active');
        }
        if (gps < 1280) {
            $('.ve-top').removeClass('active');
        }
    });
    $('.ve-top').click(function () {
        $(this).animate({
            scrollTop: $('.header').offset().top
        }, 1500);
    })

    //fix menu
    $(window).scroll(function () {
        gps = $(this).scrollTop();

        if (gps > 40) {
            $('.header').addClass('active');
        }
        if (gps < 40) {
            $('.header').removeClass('active');
        }
    });

    // menu 
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active');
    });
    $('.dropdown .item').click(function (event) {
        $(this).toggleClass('active');
    });

    // color product
    $('.inner-product-detail .block-content .color span').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // map hide
    $('.btn-map').click(function (event) {
        $('.overlay-map, .block-map, .remove-map').addClass('active');
    });
    $('.overlay-map, .remove-map').click(function (event) {
        $('.overlay-map, .block-map, .remove-map').removeClass('active');
    });

    // accordion
    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $(".tang_sl").on("click", function () {
        var a = $(this).prev(),
            b = parseInt(a.val());
        isNaN(b) ? a.val(1) : a.val(b + 1);
    });
    $(".giam_sl").on("click", function () {
        var a = $(this).prev().prev(),
            b = parseInt(a.val());
        b > 1 ? a.val(b - 1) : a.val(1);
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
            arrow: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,
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


// bai viet chi tiet
var size = parseInt($(".TextSize").css("font-size"));
var lineheight = parseInt($(".TextSize").css("line-height"));
if (!size)
    size = 15;
if (!lineheight)
    lineheight = 24;

function IncreaseTextSize() {
    size++;
    lineheight += 2;

    $(".TextSize").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
    $(".TextSize").find("*").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
}

function DecreaseTextSize() {
    size--;
    lineheight -= 2;

    $(".TextSize").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
    $(".TextSize").find("*").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
}

function ResetTextSize() {
    size = 15;
    lineheight = 24;

    $(".TextSize").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
    $(".TextSize").find("*").css('cssText', 'font-size:' + size + 'px !important; line-height:' + lineheight + 'px !important');
}

$(document).ready(function () {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, "script", "facebook-jssdk"));
    (function () {
        var po = document.createElement("script");
        po.type = "text/javascript";
        po.async = true;
        po.src = "https://apis.google.com/js/platform.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(po, s);
    })();

});
