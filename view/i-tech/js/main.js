$(function () {

    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active-dd");
    });

    $('.group-consultant .card').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass("active");
    });

    if ($(window).width() < 992) {
        $('.menu-main>.inner').append('<div class="at-menu"><span></span></div>');
        $('.footer .block-f:nth-child(1)').prepend($('.footer .block-f:nth-child(3)>.social'));
        $('.footer .block-f:nth-child(1)').prepend($('.footer .block-f:nth-child(3)>.facebook-f'));
        $('.footer .block-f:nth-child(1)').prepend($('.footer .block-f:nth-child(3)>strong'));
        $('.menu-main>.inner>.nav').prepend($('.form-search'));
    }

    $('.at-menu').click(function(event) {
        $(this).toggleClass('active');
        $('.menu-main>.inner>.nav').toggleClass('active');
    });

})