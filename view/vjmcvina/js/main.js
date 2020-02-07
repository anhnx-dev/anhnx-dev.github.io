$(function () {

    $('.a-tab .center a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });

    $('.a-tab>a').click(function (event) {
        $(this).addClass('active').siblings().removeClass("active");
    });
    

})