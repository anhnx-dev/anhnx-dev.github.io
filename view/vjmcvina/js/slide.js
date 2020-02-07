$(function () {

  $('.slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.slider-small'
  });
  $('.slider-small').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-big',
    dots: false,
    arrows: false,
  });

  $('.thuong-hieu .group').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.slider-big2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.slider-small2'
  });
  $('.slider-small2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-big2',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    vertical: true,
  });

  $('.other-product .group-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

})