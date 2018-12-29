$(document).ready(function () {
  //Ẩn hiện dropdown trên menu
  $('.f_click').click(function () {
    $(this).toggleClass('active');
    $('.security').toggleClass('active');
  });

  $(document).on('click', '.hideMenu', function (e) {
    if ($('.security').hasClass('active')) {
      if (!$(e.target).parents().hasClass('secuSetting')) {
        $('.f_click').removeClass('active');
        $('.security').removeClass('active');
      }
    }
  });

  $('.down_click').on('click', function () {
    $(this).toggleClass('active');
    $('.otherSetting .dropdown-menu').toggleClass('active');
  });

  $(document).on('click', '.hideMenu', function (e) {
    if ($('.otherSetting .dropdown-menu').hasClass('active')) {
      if (!$(e.target).parents().hasClass('otherSetting')) {
        $('.down_click').toggleClass('active');
        $('.otherSetting .dropdown-menu').removeClass('active');
      }
    }
  });


  $('.list-notifi > li > span').on('click', function () {
    $(this).parent().toggleClass('active');
    $(this).next().toggleClass('active');
  });

  $(document).on('click', '.hideMenu', function (e) {
    if ($('.new-notifi .drop-down').hasClass('active')) {
      if (!$(e.target).parents().hasClass('new-notifi')) {
        $('.new-notifi').removeClass('active');
        $('.new-notifi .drop-down').removeClass('active');
      }
    }
  });

  $(document).on('click', '.hideMenu', function (e) {
    if ($('.mes-notifi .drop-down').hasClass('active')) {
      if (!$(e.target).parents().hasClass('mes-notifi')) {
        $('.mes-notifi').removeClass('active');
        $('.mes-notifi .drop-down').removeClass('active');
      }
    }
  });

  $(document).on('click', '.hideMenu', function (e) {
    if ($('.friend-notifi .drop-down').hasClass('active')) {
      if (!$(e.target).parents().hasClass('friend-notifi')) {
        $('.friend-notifi').removeClass('active');
        $('.friend-notifi .drop-down').removeClass('active');
      }
    }
  });
});
