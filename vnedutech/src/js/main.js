// Banner
var banner = document.querySelector('.hero__banner');
var ACTIVE_ANIMATION_CLASS = 'active-animetion';
window.addEventListener('load', function () {
  banner.classList.add(ACTIVE_ANIMATION_CLASS)
});

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
        duration: 8000,
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