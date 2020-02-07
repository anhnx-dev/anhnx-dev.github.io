$(function () {

    // item-02 news home page
    $('.news-home .item-02:nth-child(1)').removeClass('col-md-6');

    // page about us
    $(window).scroll(function () {
        gps = $('html,body').scrollTop();
        if (gps > 570) {
            $('.nav-section').addClass('fixed-top');
            $('.button-nav-section').addClass('active');
        }
        if (gps < 571) {
            $('.nav-section').removeClass('fixed-top');
            $('.button-nav-section').removeClass('active');
        }
    });
    $('.nav-link1').click(function () {
        $('html,body').animate({
            scrollTop: $('#general-introduction').offset().top
        }, 1000,);
        return false;
    });
    $('.nav-link2').click(function () {
        $('html,body').animate({
            scrollTop: $('#vision-mission').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link3').click(function () {
        $('html,body').animate({
            scrollTop: $('#value').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link4').click(function () {
        $('html,body').animate({
            scrollTop: $('#history').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link5').click(function () {
        $('html,body').animate({
            scrollTop: $('#leader').offset().top
        }, 1000, );
        return false;
    });
    $('.nav-link6').click(function () {
        $('html,body').animate({
            scrollTop: $('#adviser').offset().top
        }, 1000, );
        return false;
    });

    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').prepend('<span class="btn-dropdown"></span>');
    $('.btn-dropdown').click(function (event) {
        $(this).parent().toggleClass('active-dd');
    });

    // ground
    $('.header>a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $('#active-form-recruitment').click(function (event) {
        $('.form-recruitment').toggleClass('active');
        return false;
    });

    $('.btn-14').click(function (event) {
        $(this).parent().toggleClass('active');
    });

})