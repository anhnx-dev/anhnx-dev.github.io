'use strict';

// Hero
var banner = document.querySelector('.hero__banner');
var ACTIVE_ANIMATION_CLASS = 'active-animetion';
window.addEventListener('load', function () {
  banner.classList.add(ACTIVE_ANIMATION_CLASS);
});

// Navbar
var navbar = document.querySelector('.js-navbar');
var DROPDOWN_CLASS = 'dropdown';
var ACTIVE_DROPDOWN_CLASS = 'dropdown-active';
var SUB_MENU_CLASS = 'sub-menu';
var submenus = document.querySelectorAll('.js-navbar>ul li ul');

if (navbar) {
  for (var i = 0; i < submenus.length; i++) {
    var submenu = submenus[i];
    submenu.parentNode.classList.add(DROPDOWN_CLASS);
    submenu.classList.add(SUB_MENU_CLASS);
  }
  var dropdownButtons = document.querySelectorAll('.dropdown>a');

  var _loop = function _loop(_i) {
    var dropdownButton = dropdownButtons[_i];
    dropdownButton.addEventListener('click', function () {
      dropdownButton.parentNode.classList.toggle(ACTIVE_DROPDOWN_CLASS);
    });
  };

  for (var _i = 0; _i < dropdownButtons.length; _i++) {
    _loop(_i);
  }
}

// Menu Mobile
var navTrigger = document.querySelector('.js-trigger');
var slideoutOvarlay = document.querySelector('.js-slideout-overlay');
var FIXED_CLASS = 'fixed-top';
var body = document.body;

if (navTrigger) {
  navTrigger.addEventListener('click', function () {
    body.classList.toggle(FIXED_CLASS);
  });
  slideoutOvarlay.addEventListener('click', function () {
    body.classList.remove(FIXED_CLASS);
  });
}

// accordion
var ITEM_CLASS = 'js-accordion';
var ACTIVE_CLASS = 'accordion-active';
var HEADER_ITEM_CLASS = 'js-accordion-header';
var BODY_ITEM_CLASS = 'js-accordion-body';
var BODY_WRAPPER_CLASS = 'js-accordion-body-inner';

var addClass = function addClass(item) {
  return item.classList.add(ACTIVE_CLASS);
};
var removeClass = function removeClass(item) {
  return item.classList.remove(ACTIVE_CLASS);
};
var hideContent = function hideContent(content) {
  return content.style.height = 0;
};
var isActivated = function isActivated(content, contentWarpper) {
  return content.style.height = contentWarpper.offsetHeight + 'px';
};

var accordion = function accordion() {
  var items = document.getElementsByClassName(ITEM_CLASS);
  var buttons = document.getElementsByClassName(HEADER_ITEM_CLASS);
  var contents = document.getElementsByClassName(BODY_ITEM_CLASS);
  var contentsWarpper = document.getElementsByClassName(BODY_WRAPPER_CLASS);
  if (items) {
    var _loop2 = function _loop2(_i2) {
      buttons[_i2].addEventListener('click', function () {
        if (items[_i2].classList[2] == ACTIVE_CLASS) {
          removeClass(items[_i2]);
          hideContent(contents[_i2]);
        } else {
          for (var _i3 = 0; _i3 < buttons.length; _i3++) {
            removeClass(items[_i3]);
            hideContent(contents[_i3]);
          }
          addClass(items[_i2]);
          isActivated(contents[_i2], contentsWarpper[_i2]);
        }
      });
    };

    for (var _i2 = 0; _i2 < items.length; _i2++) {
      _loop2(_i2);
    }
  }
};
accordion();