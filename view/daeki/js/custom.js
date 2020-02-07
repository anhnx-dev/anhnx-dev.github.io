$(function () {

    $('.btn-01').click(function () {
        $('html,body').animate({
            scrollTop: $('.form-product').offset().top
        }, 1000);
        return false;
    });

    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });

    // back top
    $(window).scroll(function () {
        var scrollY = window.pageYOffset;
        if (scrollY > 1080) {
            $('.back-top').addClass('active');
        } else {
            $('.back-top').removeClass('active');
        }
    });
    $('.back-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // slider
    $('.banner').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }]
    });
    $('.product-home .group-item').slick({
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        slidesPerRow: 4,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    });
    $('.news-home .group-item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.product-involve .warpper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.why .warpper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.partner .group-item').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.img-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-small'
    });
    $('.img-small').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.img-big',
        dots: true,
        focusOnSelect: true
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
    $('.search .fa').click(function (event) {
        $(this).parent().toggleClass('active');
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

})