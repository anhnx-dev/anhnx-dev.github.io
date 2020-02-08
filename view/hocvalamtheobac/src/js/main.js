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

  var subMenu = $('.js-navbar>li ul');
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

// Slideout navbar
var slideoutNavbar = $('.js-slideout .slideout-navbar .nav');
if (slideoutNavbar) {

  var slideoutSubMenu = $('.js-slideout .slideout-navbar .nav>li ul');
  slideoutSubMenu.addClass(SUB_MENU_CLASS);
  slideoutSubMenu.parent().addClass(DROPDOWN_CLASS);

  var slideoutDropdown = $('.js-slideout .slideout-navbar .nav .dropdown');
  var slideoutDropdownButton = $('.js-slideout .slideout-navbar .nav .dropdown>a');

  slideoutDropdownButton.on('click', function () {
    $(this).parent().toggleClass(ACTIVE_DROPDOWN_CLASS).siblings().removeClass(ACTIVE_DROPDOWN_CLASS);
    return false;
  });
}

// popup
var login = $('.js-login');
var registration = $('.js-registration')
var ACTIVE_LOGIN_CLASS = 'active-login';
var ACTIVE_REGISTRAtion_CLASS = 'active-registration';
var toggleLoginButton = $('.js-toggle-login')
var toggleRegistrationButton = $('.js-toggle-registration')
var openRegistrationButton = $('.js-open-registration')

if (login) {
  toggleLoginButton.on('click', function () {
    body.toggleClass(ACTIVE_LOGIN_CLASS);
    body.removeClass(ACTIVE_SLIDEOUT_CLASS);
  });
  toggleRegistrationButton.on('click', function () {
    body.toggleClass(ACTIVE_REGISTRAtion_CLASS);
    body.removeClass(ACTIVE_SLIDEOUT_CLASS);
  });
  bodyOvarlay.on('click', function () {
    body.removeClass(ACTIVE_LOGIN_CLASS);
    body.removeClass(ACTIVE_REGISTRAtion_CLASS);
  });
  openRegistrationButton.on('click', function () {
    body.removeClass(ACTIVE_LOGIN_CLASS);
    body.addClass(ACTIVE_REGISTRAtion_CLASS);
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

// carousel
var heroCarousel = $('.js-carousel');
var logoGroup01 = $('.js-carousel-01');
var logoGroup02 = $('.js-carousel-02');
var logoGroup03 = $('.js-carousel-03');

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
if (logoGroup01) {
  logoGroup01.slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }]
  });
}

if (logoGroup02) {
  logoGroup02.slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {

      }
    }]
  });
}
if (logoGroup03) {
  logoGroup03.slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }]
  });
}

// modal
const modal = document.querySelectorAll('[data-modal]');
if (modal) {
  for (let i = 0; i < modal.length; i++) {
    const button = modal[i];
    const body = $('body');
    const exit = $('.modal-exit');
    const CLASS_ACTIVE_MODAL = 'modal-active';
    const CLASS_ACTIVE_OVER = 'modal-over-body-active';
    $(button).on('click', function () {
      body.prepend('<div class="modal-over-body"></div>');
      const over = $('.modal-over-body');
      const e = button.getAttribute('data-modal');
      $(e).addClass(CLASS_ACTIVE_MODAL);
      $(over).addClass(CLASS_ACTIVE_OVER);
      over.on('click', function () {
        $(e).removeClass(CLASS_ACTIVE_MODAL);
        $(over).removeClass(CLASS_ACTIVE_OVER);
        over.remove();
      });
      exit.on('click', function () {
        $(e).removeClass(CLASS_ACTIVE_MODAL);
        $(over).removeClass(CLASS_ACTIVE_OVER);
        over.remove();
      });
    });
  }
}

// Timeline
const timeline = $('.js-timeline');

if (timeline) {
  const items = $('.js-timeline .timeline-list .item');
  let numberItem = items.length;
  let widthItem = (100 / numberItem) + '%';
  items.css('width', widthItem);
}

// datetimepicker
const datetimepicker = $('.datetimepicker');
const datepicker = $('.datepicker');
const timepicker = $('.timepicker');
if (datetimepicker) {
  datetimepicker.datetimepicker();
}
if (datepicker) {
  datepicker.datetimepicker({
    format: 'DD/MM/YYYY'
  });
}
if (timepicker) {
  timepicker.datetimepicker({
    format: 'LT'
  });
}