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

if (navbar) {

  const trigger = $('.nav-trigger');

  trigger.on('click', function () {
    navbar.toggleClass('active');
  });




  // sub menu
  var SUB_MENU_CLASS = 'sub-menu';
  var DROPDOWN_CLASS = 'dropdown';
  var ACTIVE_DROPDOWN_CLASS = 'dropdown-active';
  var subMenu = $('.js-navbar .nav>li ul');
  subMenu.addClass(SUB_MENU_CLASS);
  subMenu.parent().addClass(DROPDOWN_CLASS);
}

// Menu Mobile
var navTrigger = $('.js-trigger');
var bodyOvarlay = $('.js-body-overlay');
var ACTIVE_SLIDEOUT_CLASS = 'active-slideout';
var body = $('body');

if (navTrigger) {
  navTrigger.on('click', function () {
    body.toggleClass(ACTIVE_SLIDEOUT_CLASS);
  });
  bodyOvarlay.on('click', function () {
    body.removeClass(ACTIVE_SLIDEOUT_CLASS);
  });
}

// Disabled
var disabled = $('.disabled');

if (disabled) {
  disabled.on('click', function () {
    return false;
  });
}

// tab
var tab = $('.js-tab');

if (tab) {
  var tabButton = $('.js-tab .tab-item .title');
  tabButton.click(function (event) {
    $(this).parent().addClass('active').siblings().removeClass("active");
  });
}

// Accordion rating
const accordionRating = $('.accordion-rating');
if (accordionRating) {
  let accordionButtons = $('.js-accordion-buttons .item');
  let accordionBodys = $('.js-accordion-body .rating-item');

  for (let i = 0; i < accordionButtons.length; i++) {
    const accordionButton = accordionButtons[i];
    const accordionBody = accordionBodys[i];
    $(accordionButton).on('click', function () {
      $(this).addClass('active').siblings().removeClass("active");
      $(accordionBody).addClass('active').siblings().removeClass("active");
    });
  }
}

// carousel
var heroCarousel = $('.js-carousel');

if (heroCarousel) {
  heroCarousel.slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });
}

if ($(window).width() <= 1024) {
  $('.menu-responsive .search-menu').prepend($('.search'));
  $('.menu-responsive>.group>.inner').append($('#nav1'));
  $('.menu-responsive>.group>.inner').prepend($('#nav2'));
  $('.menu-responsive .group .top').prepend($('#nav2 .nav-item:nth-child(1) .nav-link'));
}

// upload avatar
const avatar = $('.js-avatar');
if (avatar) {
  const img = $('.profile-pic');
  const btnUpload = $(".file-upload");
  const readURL = function (input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        img.attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  btnUpload.on('change', function () {
    readURL(this);
  });
}

// tab my user
const tabUser = $('.js-tab-user');

if (tabUser) {
  const tabs = document.querySelectorAll('[data-tab]');
  for (let i = 0; i < tabs.length; i++) {
    const button = tabs[i];
    const CLASS_TAB_ACTIVE = 'active';
    const CLASS_ACTIVE = 'show';

    $(button).on('click', function () {
      $(this).addClass(CLASS_TAB_ACTIVE).siblings().removeClass(CLASS_TAB_ACTIVE);
      const item = button.getAttribute('data-tab');
      $(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
    });
  }
}


// search
const search = $('.js-search');
if (search) {
  const btn = $('.js-search .icon');
  const CLASS_ACTIVE = 'active';
  const overly = $('.overly-body');
  btn.on('click', function () {
    search.toggleClass(CLASS_ACTIVE);
    overly.addClass(CLASS_ACTIVE);
  });
  overly.on('click', function () {
    search.removeClass(CLASS_ACTIVE);
    $(this).removeClass(CLASS_ACTIVE);
  });
}

const searchResultsTable = $('.search-results .table-responsive');

if (searchResultsTable) {

  searchResultsTable.parent().parent().addClass('js-search-results');
}

// carousel
const mediaCarousel = $('.js-media-slider');

if (mediaCarousel) {
  mediaCarousel.slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}

const newsHeaderCarousel = $('.js-slider-news-header');

if (newsHeaderCarousel) {
  newsHeaderCarousel.slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true
  });
}



// tabs
const tabs = document.querySelectorAll('[data-tab]');
if (tabs) {
  for (let i = 0; i < tabs.length; i++) {
    const button = tabs[i];
    const CLASS_ACTIVE = 'active';

    $(button).on('click', function () {
      $(this).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
      const item = button.getAttribute('data-tab');
      $(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
      return false;
    });
  }
}