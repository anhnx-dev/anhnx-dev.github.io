$(function () {

    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });

    // gui lien he thanh cong
    $('.overlay-lh, .block-hide_lh, .remove-lh').addClass('active');
    $('.overlay-lh, .remove-lh').click(function (event) {
        $('.overlay-lh, .block-hide_lh, .remove-lh').removeClass('active');
    });

    // tim kiem
    $('.fa-search').click(function (event) {
        $('.form-search').toggleClass('active');
    });

    // dich chuyen khoi
    if ($(window).width() < 992) {
        $('.menu-main .navbar-nav').prepend($('.form-search'));
    }

    // menu mobile
    $('.menu-main>button').click(function (event) {
        $(this).toggleClass('active');
    });;

    $('.dropdown').click(function (event) {
        $(this).toggleClass('active');
    });;


    // menu right
    $('.menu-right > ul > li').click(function (event) {
        $(this).toggleClass('active');
    });;

    //thanh quan
    $(document).ready(function () {
        $('.hoidap-right .inner').perfectScrollbar();
        $('.news-right .inner').perfectScrollbar();
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
