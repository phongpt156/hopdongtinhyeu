$(document).ready(function () {
  $('.main').pagepiling({
    sectionsColor: ['#000', '#000'],
    navigation: {
      'bulletsColor': '#777777',
      'position': 'left',
    }
  });

  checkPagePilling();

  $(window).resize(function () {
    checkPagePilling();
  });

  function checkPagePilling() {
    if (window.matchMedia('(min-width: 992px)').matches) {
      $(window).scrollTop(0);
      $.fn.pagepiling.setMouseWheelScrolling(true);
      $('header.header .navbar-fixed-top').css({
        position: 'fixed',
        'background-color': 'transparent',
      });
      $('header.header .navbar-fixed-top').removeClass('mb-0');
      $('#pp-nav').removeClass('d-none');
      $('body, html').css('overflow', 'hidden');
      $('.pp-section').css('position', 'absolute');
    } else {
      $.fn.pagepiling.setMouseWheelScrolling(false);
      $('header.header .navbar-fixed-top').css({
        position: 'static',
        'background-color': '#000',
      });
      $('header.header .navbar-fixed-top').addClass('mb-0');
      $('#pp-nav').addClass('d-none');
      $('body, html').css('overflow', 'auto');
      $('.pp-section').css('position', 'static');
    }
  }
});
