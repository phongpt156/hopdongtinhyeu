$(document).ready(function () {
  $('.homepage').css('padding-top', $('.header').outerHeight());
  $('.aside aside').simpleScrollFollow({
    upper_side: '.header',
  });
});
