new Vue({
  el: '#app',
  data: {
    // hot news
    hotNews: true,
    // user manege
    userManege: false,
    userLogIn: true,
    userRegistration: false,
  },
  methods: { // closeUserManege openUserManege openUserRegistration
    // hot news
    openHotNews: function () {
      this.hotNews = true;
    },
    closeHotnew: function () {
      this.hotNews = false;
    },
    // user manege
    openUserManege: function () {
      this.userManege = true;
    },
    closeUserManege: function () {
      this.userManege = false;
      this.userRegistration = false;
      this.userLogIn = true;
    },
    openUserRegistration: function () {
      this.userManege = true;
      this.userRegistration = true;
      this.userLogIn = false;
    },
  }
});

// carousel
const carouselHotNews = document.querySelector('.hot-news .list');
const carouselHotNewsLeft = document.querySelector('.hot-news-left .list');
if (carouselHotNews) {
  const flkty = new Flickity(carouselHotNews, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    autoPlay: 2000,
  });
}
if (carouselHotNewsLeft) {
  const flkty = new Flickity(carouselHotNewsLeft, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    autoPlay: 2000,
  });
}

// Video Youtube
const $allVideos = $("iframe[src*='youtube']");
const  $fluidEl = $("iframe[src*='youtube']").parent().addClass("youtube-iframe-wrap");
$allVideos.each(function () {
  $(this)
    .data('aspectRatio', this.height / this.width)
    .removeAttr('height')
    .removeAttr('width');
});
$(window).resize(function () {
  const newWidth = $fluidEl.width();
  $allVideos.each(function () {
    const $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));
  });
}).resize();

// navbar
const navbar = $('.js-nav');
const SUB_MENU_CLASS = 'sub-menu';
const DROPDOWN_CLASS = 'dropdown';
const ACTIVE_DROPDOWN_CLASS = 'dropdown-active';
if (navbar) {

  const subMenu = $('.js-nav>li ul');
  subMenu.addClass(SUB_MENU_CLASS);
  subMenu.parent().addClass(DROPDOWN_CLASS);

  const dropdown = $('.js-nav .dropdown');
  const dropdownButton = $('.js-nav .dropdown>a');

  dropdownButton.on('click', function () {
    $(this).parent().toggleClass(ACTIVE_DROPDOWN_CLASS).siblings().removeClass(ACTIVE_DROPDOWN_CLASS);
    return false;
  });
}

// Back to top
const backToTop = $('.js-back-to-top');
if (backToTop) {
  const ACTIVE_CLASS = 'active';
  const backToTopEnd = $('.js-back-to-top-end');
  
  $(window).scroll(function () {
    const scrollY = window.pageYOffset;
    if (scrollY > 0) {
      backToTop.addClass(ACTIVE_CLASS);
    } else {
      backToTop.removeClass(ACTIVE_CLASS);
    }
  });
  backToTop.click(function () {
    $('body, html').animate({
      scrollTop: backToTopEnd.offset().top
    }, 1000);
  });
}
