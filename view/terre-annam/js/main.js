$(function () {

    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });

    // gui lien he thanh cong
    $(function myFunctionLH() {
        $('.block-lh, .overlay-lh, .remove-lh').addClass('active');
    });

    // dat tour thanh cong
    $(function myFunctionTour() {
        $('.block-tour-hide, .overlay-lh, .remove-lh').addClass('active');
    });

    // menu
    $(window).scroll(function () {
        fix = $('body').scrollTop();

        if (fix > 280) {
            $('.header-main').addClass('fix-top');
        }
        if (fix < 280) {
            $('.header-main').removeClass('fix-top');
        }
    });
    $('.menu-main .nav-item').click(function (event) {
        $(this).toggleClass('active');
    });;

    $('.menu-main .navbar-toggler span').click(function (event) {
        $('body, .menu-main .navbar-toggler span').toggleClass('active');
    });;

    // ve top
    $(window).scroll(function () {
        gps = $('body').scrollTop();

        if (gps > 1280) {
            $('.ve-top').addClass('active');
        }
        if (gps < 1280) {
            $('.ve-top').removeClass('active');
        }
    });
    $('.ve-top').click(function () {
        $('body').animate({
            scrollTop: $('.header').offset().top
        }, 1500);
    })

    // accordion
    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // maps
    $('.btn-maps').click(function (event) {
        $('.overlay-maps, .block-maps, .remove-maps').addClass('active');
    });
    $('.overlay-maps, .remove-maps').click(function (event) {
        $('.overlay-maps, .block-maps, .remove-maps').removeClass('active');
    });


    // maps
    initialize(
        '21.00757415248039',
        '105.80296128988266',
        '',
        'maps',
        '.css/img/icon-map.png',
    );
    initialize(
        '21.00757415248039',
        '105.80296128988266',
        '',
        'block-maps-hide',
        '.css/img/icon-map.png',
    );
    initialize(
        '21.00757415248039',
        '105.80296128988266',
        '',
        'map-contact',
        '.css/img/icon-map.png',
    );


    // dat tour, maps and lien he thanh cong 
    $('.overlay-lh, .remove-lh').click(function (event) {
        $('.overlay-lh, .block-tour-hide, .block-lh, .remove-lh').removeClass('active');
    });

    // bai viet chi tiet
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
    var size = parseInt(jQuery(".TextSize").css("font-size"));
    var lineheight = parseInt(jQuery(".TextSize").css("line-height"));
    if (!size)
        size = 14;
    if (!lineheight)
        lineheight = 22;

    function IncreaseTextSize() {
        size++;
        lineheight += 2;
        jQuery(".TextSize")
            .css('cssText',
                'font-size:' +
                size +
                'px !important; line-height:' +
                lineheight +
                'px !important');
        jQuery(".TextSize")
            .find("*")
            .css('cssText',
                'font-size:' +
                size +
                'px !important; line-height:' +
                lineheight +
                'px !important');
    }

    function DecreaseTextSize() {
        size--;
        lineheight -= 2;
        jQuery(".TextSize")
            .css('cssText',
                'font-size:' +
                size +
                'px !important; line-height:' +
                lineheight +
                'px !important');
        jQuery(".TextSize")
            .find("*")
            .css('cssText',
                'font-size:' +
                size +
                'px !important; line-height:' +
                lineheight +
                'px !important');
    }

    function ResetTextSize() {
        size = 14;
        lineheight = 22;
        jQuery(".TextSize")
            .css('cssText',
                'font-size:' +
                size +
                'px !important; line-height:' +
                lineheight +
                'px !important');
        jQuery(".TextSize")
            .find("*")
            .css('cssText',
                'font-size:' +
                size +
                'px !important; line-height:' +
                lineheight +
                'px !important');
    }

})