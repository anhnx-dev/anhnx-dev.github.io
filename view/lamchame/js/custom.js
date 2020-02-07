$(function () {

    //slider 
    $('.news-lump .block-01 .group-item').slick({
        arrows: false,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesPerRow: 1,
                arrows: false
            }
        }]
    });
    $('.clip .right-main .warpper').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    vertical: false
                }
            }
        ]
    });
    $('.section-img .group-item .warpper').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            }
        ]
    });

    // Video Youtube
    // Find all YouTube videos
    var $allVideos = $("iframe[src*='youtube']"),
        // The element that is fluid width
        $fluidEl = $("iframe[src*='youtube']").parent().addClass("youtube-iframe-wrap");
    // Figure out and save aspect ratio for each video
    $allVideos.each(function () {
        $(this)
            .data('aspectRatio', this.height / this.width)
            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });
    // When the window is resized
    $(window).resize(function () {
        var newWidth = $fluidEl.width();
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function () {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));
        });
        // Kick off one resize to fix all videos on page load
    }).resize();

    // breadcrumb
    $('.breadcrumb-item:last-of-type').addClass('active');
    //table
    $('table').addClass('table');
    // icon menu
    $('.navbar-icon').click(function (event) {
        $(this).toggleClass('active');
    });
    // menu 
    $('.dropdown-menu').parent().addClass('dropdown');
    $('.dropdown').prepend('<span class="btn-dropdown"></span>');
    $('.btn-dropdown').click(function (event) {
        $(this).siblings().parent().toggleClass('active-dd');
    });
    $('.navbar-toggler').click(function (event) {
        $(this).toggleClass('active');
    });

    // search
    $('.form-search .fa').click(function (event) {
        $(this).parent().toggleClass('active');
    });

    $('#header .container').append('<span class="open-menu"><span></span></span>');
    $('.open-menu').click(function (event) {
        $(this).toggleClass('active');
        $('body').toggleClass('active');
    });


    if ($(window).width() < 992) {
        $('#nav .container').prepend($('#header .right .link'));
    } else {
        $('#header .right').prepend($('#nav .container .link'));
    }

    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('#nav .container').prepend($('#header .right .link'));
        } else {
            $('#header .right').prepend($('#nav .container .link'));
        }
    });
});