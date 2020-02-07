$(function () {

  $('.slider-hp').slick({
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  });

  $('.sg1 .inner').slick({
    arrows: false,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  });

  $('.sg2 .item-group').slick({
    arrows: false,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  $('.sg3 .inner').slick({
    arrows: true,
    dots: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  });

  $('.sg4 .inner').slick({
    arrows: true,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }]
  });

  $('.slider-to').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    asNavFor: '.slider-nho'
  });
  $('.slider-nho').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider-to',
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.other-feel .inner').slick({
    arrows: false,
    dots: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.other-iv .inner').slick({
    arrows: false,
    dots: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
    

})