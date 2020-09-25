function star_loading() {
  $(document).ready(function () {
    $('body').prepend(`
      <div class="c-loading">
        <div class="over-black"></div>
        <div class="loading">
          <span class="wrapper">
            <img src="./logo-gzone.png">
            <div class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
          </div>
          </span>
        </div>
      </div>
    `);
  });
}

function star_loadingIPA() {
  $(document).ready(function () {
    $('body').prepend(`
      <div class="c-loading">
        <div class="over-dark"></div>
        <div class="loading">
          <span class="wrapper">
            <img src="./logo-gzone.png">
            <div class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
          </div>
          </span>
        </div>
      </div>
    `);
  });
}

function end_loading() {
  $('.c-loading').remove();
}