$(function () {

    // sinh them
    $('.header-main .col-12').prepend('<div class="navtb-m"><span></span></div>');
    $('.menu-ssp').parent().append('<div class="menu-spb"><img src="./css/icons/t11.png" alt=""></div>');

    //menu navtb danh muc
    $('.navtb .con1').parent().addClass('hs');
    $('.menu-main .danh-muc .con').parent().addClass('hs');
    $('.top-bar .navtb>li').click(function (event) {
        $(this).toggleClass('active-con');
    });;
    $('.menu-main .danh-muc .hs').click(function (event) {
        $(this).toggleClass('active');
    });;
    $('.navtb-m').click(function (event) {
        $(this).toggleClass('active');
        $('body').toggleClass('animetion');
    });;

    $('.menu-spb').click(function (event) {
        $(this).parent().toggleClass('active');
    });;

    // accordion
    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    // di chuyen khoi co dien kien
    if ($(window).width() < 992) {
        $('.search-2').append($('.form-search'));
        $('#huongdan .i2').append($('#huongdan .i3 .a3'));
        $('#huongdan .i3').append($('#huongdan .i2 .a2'));
    } else {
        $('.header-main .search').append($('.form-search'));
        $('#huongdan .i3').append($('#huongdan .i3 .a3'));
        $('#huongdan .i2').append($('#huongdan .i2 .a2'));
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.search-2').append($('.form-search'));
            $('#huongdan .i2').append($('#huongdan .i3 .a3'));
            $('#huongdan .i3').append($('#huongdan .i2 .a2'));
        } else {
            $('.header-main .search').append($('.form-search'));
            $('#huongdan .i3').append($('#huongdan .i3 .a3'));
            $('#huongdan .i2').append($('#huongdan .i2 .a2'));
        }
    });
    if ($(window).width() < 768) {
        $('.acc-2').append($('.inner-acc'));
        $('.left-f .link').append($('.nbt'));
        $('.block-ttch').prepend($('.inner-avatar'));
    } else {
        $('.acc').append($('.inner-acc'));
        $('.left-f .lienhe').append($('.nbt'));
        $('.block-ttch .right').append($('.inner-avatar'));
    }
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.acc-2').append($('.inner-acc'));
            $('.left-f .link').append($('.nbt'));
            $('.block-ttch').prepend($('.inner-avatar'));
        } else {
            $('.acc').append($('.inner-acc'));
            $('.left-f .lienhe').append($('.nbt'));
            $('.block-ttch .right').append($('.inner-avatar'));
        }
    });

    // star
    $('#star .star1').click(function (event) {
        $('#star .star1').addClass('star-color');
        $('#star .star2, #star .star3, #star .star4, #star .star5').removeClass('star-color');
    });
    $('#star .star2').click(function (event) {
        $('#star .star2, #star .star1').addClass('star-color');
        $('#star .star3, #star .star4, #star .star5').removeClass('star-color');
    });
    $('#star .star3').click(function (event) {
        $('#star .star3, #star .star1, #star .star2').addClass('star-color');
        $('#star .star4, #star .star5').removeClass('star-color');
    });
    $('#star .star4').click(function (event) {
        $('#star .star4, #star .star1, #star .star2, #star .star3').addClass('star-color');
        $('#star .star5').removeClass('star-color');
    });
    $('#star .star5').click(function (event) {
        $('#star .star5, #star .star1, #star .star2, #star .star3, #star .star4').addClass('star-color');
    });

})
