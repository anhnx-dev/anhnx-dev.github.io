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
var registration = $('.js-registration');
var ACTIVE_LOGIN_CLASS = 'active-login';
var ACTIVE_REGISTRAtion_CLASS = 'active-registration';
var toggleLoginButton = $('.js-toggle-login');
var toggleRegistrationButton = $('.js-toggle-registration');
var openRegistrationButton = $('.js-open-registration');

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
var logoGroup = $('.js-carousel-01');
var questList = $('.js-carousel-02');
var footerLogoList = $('.js-carousel-03');

if (heroCarousel) {
  heroCarousel.slick({
    dots: true,
    fade: true,
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

if (logoGroup) {
  logoGroup.slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }]
  });
}

if (questList) {
  questList.slick({
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
}

if (footerLogoList) {
  footerLogoList.slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }]
  });
}

// Accordion
const accordion = $('.js-accordion');
if (accordion) {
  let accordionButtons = $('.js-accordion-buttons>li');
  let accordionBodys = $('.js-accordion-bodys .block');

  for (let i = 0; i < accordionButtons.length; i++) {
    const accordionButton = accordionButtons[i];
    const accordionBody = accordionBodys[i];
    $(accordionButton).on('click', function () {
      $(this).addClass('active').siblings().removeClass("active");
      $(accordionBody).addClass('active').siblings().removeClass("active");
    });
  }
}

// Search results
var searchResults = $('.search-results');
var searchResultsItems = $('.search-results .detail-list .item');
var titleUsers = $('.detail .title .detail-col-3');
var titleClasss = $('.detail .title .detail-col-4');
var titleSchools = $('.detail .title .detail-col-5');
var titleDistricts = $('.detail .title .detail-col-6');
var titleCitys = $('.detail .title .detail-col-7');
var infoUsers = $('.search-results .detail-list .item .detail-col-3');
var infoclasss = $('.search-results .detail-list .item .detail-col-4');
var infoSchoolss = $('.search-results .detail-list .item .detail-col-5');
var infoDistricts = $('.search-results .detail-list .item .detail-col-6');
var infoCitys = $('.search-results .detail-list .item .detail-col-7');

if (searchResults) {
  if ($(window).width() < 1024) {
    for (var i = 0; i < searchResultsItems.length; i++) {
      var searchResultsItem = searchResultsItems[i];
      $('<div class="dropdown"><ul class="dropdown-title"></ul><ul class="dropdown-info"></ul></div>').appendTo(searchResultsItem);
      var searchResultsItemDropdownInfos = $('.search-results .detail-list .item .dropdown .dropdown-info');
      var searchResultsItemDropdownInfo = searchResultsItemDropdownInfos[i];
      var infoUser = infoUsers[i];
      var infoclass = infoclasss[i];
      var infoSchools = infoSchoolss[i];
      var infoDistrict = infoDistricts[i];
      var infoCity = infoCitys[i];
      searchResultsItemDropdownInfos[i].append(infoUser);
      searchResultsItemDropdownInfos[i].append(infoclass);
      searchResultsItemDropdownInfos[i].append(infoSchools);
      searchResultsItemDropdownInfos[i].append(infoDistrict);
      searchResultsItemDropdownInfos[i].append(infoCity);
    }
    var searchResultsItemDropdownTitles = $('.search-results .detail-list .item .dropdown .dropdown-title');
    searchResultsItemDropdownTitles.append(titleUsers);
    searchResultsItemDropdownTitles.append(titleClasss);
    searchResultsItemDropdownTitles.append(titleSchools);
    searchResultsItemDropdownTitles.append(titleDistricts);
    searchResultsItemDropdownTitles.append(titleCitys);
  }
}

if ($(window).width() <= 1024) {
  // $('.menu-responsive .search-menu').prepend($('.form-search'));
  $('.menu-responsive .search-menu').prepend($('.search'));
  $('.menu-responsive>.group>.inner').append($('#nav1'));
  $('.menu-responsive>.group>.inner').prepend($('#nav2'));
  $('.menu-responsive .group .top').prepend($('#nav2 .nav-item:nth-child(1) .nav-link'));
}

// Countdown clock
const elements = document.querySelector('[data-minutes]');

if (elements) {
  const clock = $(elements);
  const targetValues = elements.getAttribute('data-minutes');

  FlipClock.Lang.English.days = 'Ngày';
  FlipClock.Lang.English.hours = 'Giờ';
  FlipClock.Lang.English.minutes = 'Phút';
  FlipClock.Lang.English.seconds = 'Giây';

  clock.FlipClock(targetValues, {
    clockFace: 'DailyCounter',
    countdown: true
  });
}