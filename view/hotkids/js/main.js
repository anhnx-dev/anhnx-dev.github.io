$(function () {

    // accordion 2
    $('#accordion .card').click(function (event) {
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    // modun question
    $('.item-question .title').click(function (event) {
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    });

    //menu main
    $('.btn-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.content-menu').toggleClass('active');
    });;

    // menu gioi thieu
    $('.left-gioithieu>ul>li').click(function (event) {
        $(this).toggleClass('active');
    });;

    // play auto
    $('.bottom-nd .auto-play a').click(function (event) {
        $(this).toggleClass('active-no');
    });;

    // accordion
    $('.dinhvi a').click(function (event) {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // accordion
    $('.a-tab a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    //dinh vi
    $('.dv1').click(function () {
        $('body').animate({
            scrollTop: $('#gioithieuchung').offset().top
        }, 1000, );
        return false;
    })
    $('.dv2').click(function () {
        $('body').animate({
            scrollTop: $('#noidung-kh').offset().top
        }, 1000, );
        return false;
    })
    $('.dv3').click(function () {
        $('body').animate({
            scrollTop: $('#giangvien').offset().top
        }, 1000, );
        return false;
    })
    $('.dv4').click(function () {
        $('body').animate({
            scrollTop: $('#dungcu-ht').offset().top
        }, 1000, );
        return false;
    })
    $('.dv5').click(function () {
        $('body').animate({
            scrollTop: $('#danhgia-t').offset().top
        }, 1000, );
        return false;
    })

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

    // di chuyen khoi co dien kien
    if ($(window).width() < 992) {
        $('.ck-thongtin-khr').append($('.inner-ttkhr'));
    } else {
        $('.thongtin-khr').append($('.inner-ttkhr'));
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.ck-thongtin-khr').append($('.inner-ttkhr'));
        } else {
            $('.thongtin-khr').append($('.inner-ttkhr'));
        }
    });
    if ($(window).width() < 768) {
        $('.content-menu').prepend($('.form-search'));
        $('.content-menu').prepend($('.inner-dkdn'));
        $('.inner-mcart .bottom').prepend($('.inner-mcart .bottom .tong'));
        $('.block-ttch').prepend($('.block-ttch .right'));
        $('.new-pass').prepend($('.inner-avatar'));
    } else {
        $('.search').prepend($('.form-search'));
        $('.dk-dn').prepend($('.inner-dkdn'));
        $('.inner-mcart .bottom').append($('.inner-mcart .bottom .tong'));
        $('.block-ttch').append($('.block-ttch .right'));
    }
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.content-menu').prepend($('.form-search'));
            $('.content-menu').prepend($('.inner-dkdn'));
            $('.inner-mcart .bottom').prepend($('.inner-mcart .bottom .tong'));
            $('.block-ttch').prepend($('.block-ttch .right'));
            $('.new-pass').prepend($('.inner-avatar'));
        } else {
            $('.search').prepend($('.form-search'));
            $('.dk-dn').prepend($('.inner-dkdn'));
            $('.inner-mcart .bottom').append($('.inner-mcart .bottom .tong'));
            $('.block-ttch').append($('.block-ttch .right'));
        }
    });


})
