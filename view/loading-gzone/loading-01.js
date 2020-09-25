function star_loading() {
  $(document).ready(function () {
    $('body').prepend(`
      <div class="c-loading">
        <div class="over"></div>
        <div class="loading"><span class="wrapper"><img src="./logo-gzone.png"></span></div>
      </div>
    `);
  });
}


function no_over_loading() {
  $('.c-loading .over').remove();
}

function end_loading() {
  $('.c-loading').remove();
}

// star_loading();

// setTimeout(function () {

//   end_loading();

// }, 5000);