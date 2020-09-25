function star_loading() {
  $(document).ready(function () {
    $('body').prepend(`
      <div class="c-over_body"></div>
      <div class="c-loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="./logo-gzone.png">
      </div>
    `);
  });
}

function no_over_loading() {
  $('.c-over_body').remove();
}

function end_loading() {
  $('.c-loading').remove();
}

// star_loading();

// setTimeout(function () {

//   end_loading();

// }, 5000);