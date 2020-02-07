$(function(){

    // khung Anh
    $(window).load(function () {
        $(".khungAnhCrop img").each(function () {
            $(this).removeClass("wide tall").addClass((this.width / this.height > $(this).parent().width() / $(this).parent().height()) ? "wide" : "tall");
        });
    });

    // //menu
    // $(window).scroll(function(){
    //     gps = $('body').scrollTop();

    //     if (gps > 54){
    //         $('.').addClass('active');
    //     }
    //     if (gps < 54){
    //         $('.').removeClass('active');
    //     }
    //  });

    //  $('.').click(function(){ 
    //     $('body').animate({scrollTop:$('#welcome').offset().top},1000,"easeOutExpo");
    //     return false;
    //  })

    //  $('.').click(function(event) {
    //     $('.').addClass('active');
    // });

    // $('.').click(function(event) {
    //     $('.').removeClass('active');
    // });


    //  $('.').click(function(event) {
    //     $(this).toggleClass('active');
    // });;

    $(document).ready(function () {
        $('.welcome-gt .content').perfectScrollbar();
    });

    // maps hide
     $('#maps-google').click(function(event) {
        $('.overlay-map, .maps-hide, .remove').addClass('active');
        initialize(
            '21.00757415248039',
            '105.80296128988266',
            '',
            'maps-hide',
            'css/icon/icon-maps.png'
            );
    });
    $('.overlay-map, .remove').click(function(event) {
        $('.overlay-map, .maps-hide, .remove').removeClass('active');
    });

    // gui lien he thanh cong
     $('#g-lienhe').click(function(event) {
        $('.overlay-lh, .block-hide_lh, .remove-lh').addClass('active');
    });
    $('.overlay-lh, .remove-lh').click(function(event) {
        $('.overlay-lh, .block-hide_lh, .remove-lh').removeClass('active');
    });

    // search
     $('#button-search').click(function(event) {
        $('.search, #menu-top').toggleClass('active');
    });

    // slide top
    $('.slide-top .inner').slick({
        speed: 2000,
        autoplay: true,
        arrows: false,
        infinite: true,
        dots: true,
        cssEase: 'linear',
    });

    // slide doi tac
    $('.slide-doitac').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
        cssEase: 'linear',
    });

    // slide noi that
     $('.slide-noithat .anh-to').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-noithat .anh-nho'
    });
    $('.slide-noithat .anh-nho').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slide-noithat .anh-to',
        dots: true,
        focusOnSelect: true,
        speed: 2000,
        autoplay: true,
    });

    // slide team
    $('.noithat .slide-team').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
        cssEase: 'linear',
    });

    $('.kientruc .slide-team').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
        cssEase: 'linear',
    });

    // slide kien truc
     $('.slide-kientruc .anh-to').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-kientruc .anh-nho'
    });
    $('.slide-kientruc .anh-nho').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slide-kientruc .anh-to',
        dots: true,
        vertical: true,
        focusOnSelect: true,
        speed: 2000,
        autoplay: true,
    });

    // slide mau noi that
    $('.slide-mau').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
        cssEase: 'linear',
    });

    // slide quang cao
    $('.slide-qc').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1300,
        autoplay: true,
        arrows: false,
        infinite: true,
        dots: true,
        cssEase: 'linear',
    });

    // slide quang cao
    $('.slide-cdak').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1300,
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
        cssEase: 'linear',
    });

    // slide left
    $('.slide-left .inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        arrows: true,
        infinite: true,
        dots: false,
        cssEase: 'linear',
    });

    $('.slide-cb_vk').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
})