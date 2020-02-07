$(function () {

    // gui cam nhan thanh cong ve guoi lien he thanh cong
    // mo
    $('#exampleModal-feel').modal('show');
    $('#exampleModal-contact').modal('show');
    // dong
    //$('#exampleModal-feel').modal('hide');
    //$('#exampleModal-contact').modal('hide');

    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });

    if ($(window).width() < 992) {
        $('.dropdown').prepend('<span class="btn-dropdown"></span>');
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.dropdown').prepend('<span class="btn-dropdown"></span>');
        }
    });

    $('.breadcrumb-item:last-of-type').addClass('active');

    // adv 3 - 4
    $(window).scroll(function(){
        gps = $(this).scrollTop();

        if (gps > 700){
            $('.adv-gender3, .adv-gender4').addClass('active');
        }
        else {
            $('.adv-gender3, .adv-gender4').removeClass('active');
        }
    });

    // accordion 1
    $('.accordion-1 .a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

})