// eye
function changeInput(e) {
  var x = document.getElementById(e);
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}

function changeIcon(e) {
  $(e).toggleClass('active');
}

$('#eye-password').on('click', function () {
  changeInput('password');
  changeIcon(this);
});

$('#eye-confirm-password').on('click', function () {
  changeInput('confirm-password');
  changeIcon(this);
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
