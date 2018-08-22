// Banner
var banner = document.querySelector('.hero__banner');
var ACTIVE_ANIMATION_CLASS = 'active-animetion';

if (banner) {
  window.addEventListener('load', function () {
    banner.classList.add(ACTIVE_ANIMATION_CLASS);
  });
}

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

// navbar
var navbar = $('.js-navbar');
var SUB_MENU_CLASS = 'sub-menu';
var DROPDOWN_CLASS = 'dropdown';
var ACTIVE_DROPDOWN_CLASS = 'dropdown-active';
if (navbar) {

  var subMenu = $('.js-navbar>ul>li ul');
  subMenu.addClass(SUB_MENU_CLASS);
  subMenu.parent().addClass(DROPDOWN_CLASS);

  var dropdown = $('.js-navbar .dropdown');
  var dropdownButton = $('.js-navbar .dropdown>a');

  dropdownButton.on('click', function () {
    $(this).parent().toggleClass(ACTIVE_DROPDOWN_CLASS).siblings().removeClass(ACTIVE_DROPDOWN_CLASS);
    return false;
  });
}

// Menu Mobile
var navTrigger = $('.js-trigger');
var slideoutOvarlay = $('.js-slideout-overlay');
var FIXED_CLASS = 'fixed-top';
var body = $('body');

if (navTrigger) {
  navTrigger.on('click', function () {
    body.toggleClass(FIXED_CLASS);
  });
  slideoutOvarlay.on('click', function () {
    body.removeClass(FIXED_CLASS);
  });
}

// accordion
var accordion = 'js-accordion';

if (accordion) {
  var accordionButton = $('.js-accordion h3');
  accordionButton.on('click', function () {
    $(this).parent().parent().toggleClass('active').siblings().removeClass('active');
  });
}


// countdown
var COUNTDOWN_CLASS = $('.js-counter');

if (COUNTDOWN_CLASS) {
  COUNTDOWN_CLASS.appear();

  $(document.body).on('appear', '.achievements', function (e, $affected) {
    COUNTDOWN_CLASS.parent().addClass('active');
    COUNTDOWN_CLASS.each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 2000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  });
}

$('.js-carousel-01').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.js-carousel-02'
});
$('.js-carousel-02').slick({
  slidesToScroll: 1,
  slidesToShow: 3,
  asNavFor: '.js-carousel-01',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  vertical: true,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        vertical: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        vertical: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        vertical: false
      }
    }
  ]
});