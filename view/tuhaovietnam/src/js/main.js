// navbar
var navbar = $('.js-navbar');

if (navbar) {

  const trigger = $('.nav-trigger');

  trigger.on('click', function () {
    navbar.toggleClass('active');
    trigger.toggleClass('active');
  });
  // sub menu
  var SUB_MENU_CLASS = 'sub-menu';
  var DROPDOWN_CLASS = 'dropdown';
  var ACTIVE_DROPDOWN_CLASS = 'dropdown-active';
  var subMenu = $('.js-navbar .nav>li ul');
  subMenu.addClass(SUB_MENU_CLASS);
  subMenu.parent().addClass(DROPDOWN_CLASS);
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

var logoGroup1 = $('.js-carousel-01');

if (logoGroup1) {
  logoGroup1.slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }]
  });
}

var logoGroup2 = $('.js-carousel-02');

if (logoGroup2) {
  logoGroup2.slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        autoplay: true,
        autoplaySpeed: 3000
      }
    }]
  });
}

var logoGroup3 = $('.js-carousel-03');

if (logoGroup3) {
  logoGroup3.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
}

var logoGroup4 = $('.js-carousel-04');

if (logoGroup4) {
  logoGroup4.slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
      }
    }]
  });
}

var logoGroup5 = $('.js-carousel-05');

if (logoGroup5) {
  logoGroup5.slick({
    autoplay: true,
    autoplaySpeed: 5000
  });
}

const headerUser = $('.header .navbar .user');

if (headerUser) {
	$(window).scroll(function () {
		let scrollY = window.pageYOffset;
		if (scrollY > 84) {
			headerUser.addClass('fixed-top');
		} else {
			headerUser.removeClass('fixed-top');
		}
	});
}
