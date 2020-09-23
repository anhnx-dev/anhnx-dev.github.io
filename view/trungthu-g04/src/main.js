$('.slider-wrapper').slick({
  dots: true,
  centerMode: true,
  centerPadding: '11.667vw',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: false,
      centerPadding: '18.75vw',
    }
  }]
});

// modal
const modal = document.querySelectorAll('[data-modal]');
if (modal) {

  function openModal(e) {
    const body = $('body');
    const btnExit = $('.btn-exit');
    const CLASS_ACTIVE_MODAL = 'modal-active';
    const CLASS_ACTIVE_OVER = 'modal-over-body-active';


    body.prepend('<div class="modal-over-body"></div>');
    const over = $('.modal-over-body');

    function open() {
      $(e).addClass(CLASS_ACTIVE_MODAL);
      $(over).addClass(CLASS_ACTIVE_OVER);
    }

    function exit() {
      $(e).removeClass(CLASS_ACTIVE_MODAL);
      $(over).removeClass(CLASS_ACTIVE_OVER);
      over.remove();
    }

    open()

    over.on('click', function () {
      exit()
    });

    btnExit.on('click', function () {
      exit()
    });
  }

  function exitModal(e) {
    const CLASS_ACTIVE_MODAL = 'modal-active';
    const CLASS_ACTIVE_OVER = 'modal-over-body-active';
    const over = $('.modal-over-body');

    function exit() {
      $(e).removeClass(CLASS_ACTIVE_MODAL);
      $(over).removeClass(CLASS_ACTIVE_OVER);
      over.remove();
    }

    exit()
  }

  for (let i = 0; i < modal.length; i++) {
    const button = modal[i];
    const body = $('body');
    const btnExit = $('.btn-exit');
    const CLASS_ACTIVE_MODAL = 'modal-active';
    const CLASS_ACTIVE_OVER = 'modal-over-body-active';

    $(button).on('click', function () {
      body.prepend('<div class="modal-over-body"></div>');
      const over = $('.modal-over-body');
      const e = button.getAttribute('data-modal');

      function open() {
        $(e).addClass(CLASS_ACTIVE_MODAL);
        $(over).addClass(CLASS_ACTIVE_OVER);
      }

      function exit() {
        $(e).removeClass(CLASS_ACTIVE_MODAL);
        $(over).removeClass(CLASS_ACTIVE_OVER);
        over.remove();
      }

      open()

      over.on('click', function () {

        exit()
      });

      btnExit.on('click', function () {
        exit()
      });

    });

  }
}


// Loading page


$('body').prepend(`
  <div class="loading-page">
    <div class="over"></div>
    <div class="loading"><span><img src="./logo-gzone.png"></span></div>
  </div>
`);
$(document).ready(function () {
  const loadingPage = $('.loading-page');

  if (loadingPage) {
    const animationEnd = 'animation-end';

    loadingPage.addClass(animationEnd);

    setTimeout(function(){
      loadingPage.remove();
    }, 3000);
  }
});