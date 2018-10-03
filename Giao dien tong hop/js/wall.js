$(document).ready(function () {
  $('.updateAvt').css({
    transition: 'inherit',
    opacity: '1',
    height: '52px',
    background: 'rgba(6, 6, 6, 0.7)'
  });
  const intro = introJs();

  intro.setOptions({
    tooltipClass: 'custom-toolip',
    hidePrev: true,
    hideNext: true,
    nextLabel: 'Tôi hiểu',
    steps: [
      {
        element: '.updateAvt',
        intro: `
          <div>
            <p>Click vào đây để cập nhật ảnh đại diện của bạn</p>
            <p>Việc có ảnh đại diện sẽ tăng khả năng tương tác của bạn lên gấp 02 lần so với việc không có ảnh đại diện</p>
            <div class="text-right">
              <button class="btn btn-primary next-step">Tôi hiểu</button>
            </div>
          </div>
        `
      },
      {
        element: '.upload-post',
        intro: `
          <div>
            <p>Click vào đây để đăng các thông tin theo một chủ đề chuyên mục</p>
            <p>VD: Bạn muốn đăng hồ sơ kết bạn, bạn muốn đăng tin tuyển dụng, bạn muốn đăng hồ sơ ứng viên...</p>
            <div class="text-right">
              <button class="btn btn-primary next-step">Tôi hiểu</button>
            </div>
          </div>
        `
      },
      {
        element: '.upload-recruitment-post',
        intro: `
          <div>
            <p>Click vào đây để đăng tin tuyển dụng nếu bạn có nhu cầu tuyển nhân viên cho một công việc nào đó</p>
            <div class="text-right">
              <button class="btn btn-primary next-step recruitment-next-step">Tôi hiểu</button>
            </div>
          </div>
        `
      },
      {
        element: '.update-cover',
        intro: `
          <div>
            <p>Click vào đây để cập nhật ảnh bìa của bạn</p>
            <p>Việc có bìa sẽ tăng khả năng tương tác của bạn lên gấp 02 lần so với việc không có ảnh bìa</p>
            <div class="text-right">
              <button class="btn btn-primary last-step">Tôi hiểu</button>
            </div>
          </div>
        `
      }
    ]
  });
  intro.onbeforechange(function (targetElement) {
    if ($(targetElement).hasClass('upload-recruitment-post')) {
      $('.upload-post').tab('show');
    }
  });

  $(document).on('click', '.next-step', function () {
    intro.nextStep();
  });
  $(document).on('click', '.recruitment-next-step', function () {
    $('.cover_changeBox .update-cover span').css('opacity', 1);
    $('.upload-status').tab('show');
  });
  $(document).on('click', '.last-step', function () {
    $('.cover_changeBox .update-cover span').css('opacity', 0);
    $('.updateAvt').attr('style', '');
    intro.exit();
  });

  intro.start();
});
