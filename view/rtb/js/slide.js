$(function () {

  $('.news-top .col-12').slick({
    dots: false,
    arrows: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.slider-news .inner').slick({
    dots: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // other 1
  $('.other1 .inner').slick({
    dots: false,
    arrows: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 2,
    slidesPerRow: 2,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 1,
      }
    }]
  });

  // other 2
  $('.other2 .inner').slick({
    dots: false,
    arrows: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.product-danhmuc .nav-danhmuc ul').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  });

  $('.product-danhsach .nav-danhmuc ul').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  });

  // product detail
  $('.slider-pd1').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.slider-pd2',
  });
  $('.slider-pd2').slick({
    slidesToShow: 4,
    asNavFor: '.slider-pd1',
    dots: false,
    arrows: true,
    focusOnSelect: true,
  });

  // xem gi block 2
  $('.xemgi-block2 .inner').slick({
    dots: true,
    arrows: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

})