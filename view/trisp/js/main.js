$(function () {

    $('#header .navbar-main .navbar-collapse ').prepend('<div class="search-mobile"></div>');

    if ($(window).width() < 992) {
        $('#header .search-mobile').prepend($('#header .search .form-search'));
        $('#header .search-mobile').prepend($('#header .language'));
        $('.facebook-mobine').append($('.fb-page'));
    } else {
    }

    $(window).resize(function () {
        if ($(window).width() < 992) {
        }
        else {
        }
    });

    // ve top
    $('.ve-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        gps = $('html,body').scrollTop();
        if (gps > 500) {
            $('.ve-top').addClass('active');
        } else {
            $('.ve-top').removeClass('active');
        }
    });
    // btn-07 end btn-08 dat tour
    $('.header .info .btn-07').click(function (event) {
        $('.info-detail .header a:last-of-type').addClass('active').siblings().removeClass("active");
        $('html,body').animate({
            scrollTop: $('.info-detail').offset().top
        }, 1000, );
    });
    $('.header .info .btn-07').click(function (event) {
        $('.info-detail .header a:last-of-type').addClass('active').siblings().removeClass("active");
        $('html,body').animate({
            scrollTop: $('.info-detail').offset().top
        }, 1000, );
    });
    $('#ac-01').click(function (event) {
        $('.info-detail .header a:nth-child(1)').addClass('active').siblings().removeClass("active");
        $('html,body').animate({
            scrollTop: $('.info-detail').offset().top
        }, 1000, );
    });
    $('#ac-02').click(function (event) {
        $('.info-detail .header a:nth-child(2)').addClass('active').siblings().removeClass("active");
        $('html,body').animate({
            scrollTop: $('.info-detail').offset().top
        }, 1000, );
    });
    $('#ac-03').click(function (event) {
        $('.info-detail .header a:last-of-type').addClass('active').siblings().removeClass("active");
        $('html,body').animate({
            scrollTop: $('.info-detail').offset().top
        }, 1000, );
    });
    
    //dotdotdot
    $('.item-02 .content summary').dotdotdot({});
})