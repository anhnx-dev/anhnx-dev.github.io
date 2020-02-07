$(function () {

    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
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
        $('body').animate({
            scrollTop: $('.header').offset().top
        }, 1500);
    })
    $('.backtop').click(function () {
        $('body').animate({
            scrollTop: $('.header').offset().top
        }, 1500);
    })

    // menu main 
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active');
    });;

    // xem them cau hoi
    $('.btn-xt-cauhoi').click(function (event) {
        $(this).parent().parent().parent().parent().addClass('active'); //parent tin den thanh cha
    });
    $('.btn-thugon').click(function (event) {
        $('.section-main-cauhoi .item').removeClass('active');
    });

    // gui cau hoi thanh cong
    // lien he thanh cong
    $('.overlay-lh, .block-hide_lh, .block-lh, .remove-lh').addClass('active');
    $('.overlay-lh, .remove-lh').click(function (event) {
        $('.overlay-lh, .block-hide_lh, .block-lh, .remove-lh').removeClass('active');
    });

    // js dotdotdot
    $('.slider-top .summary').dotdotdot({
        after: 'a.btn-xts'
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
