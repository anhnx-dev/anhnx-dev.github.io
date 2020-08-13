$('.carousel-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000
});

$('.back-top').click(function () {
  $('body, html').animate({
      scrollTop: 0
  }, 1000);
});

const fullpage = $('#fullpage');

if (fullpage) {
  if ($(window).width() >= 1200) {
    fullpage.fullpage({
      scrollBar: true,
    });
  }
}