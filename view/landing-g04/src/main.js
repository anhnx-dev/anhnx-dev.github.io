$('.slider-wrapper').slick({
  dots: true,
  centerMode: true,
  centerPadding: '11.667vw',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerPadding: '18.75vw',
      }
    }
  ]
});

$('.back-top').click(function () {
  $('body, html').animate({
      scrollTop: 0
  }, 1000);
});



