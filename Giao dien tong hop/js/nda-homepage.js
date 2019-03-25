$(document).ready(function () {
  const headers = $('.header');
  let affixOffsetTop = headers.eq(0).height();

  $(document).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > affixOffsetTop) {
      headers.eq(1).addClass('d-block');
    } else {
      headers.eq(1).removeClass('d-block');
    }
  });

  $(window).on('resize', function () {
    affixOffsetTop = headers.eq(0).height()
  });
});
