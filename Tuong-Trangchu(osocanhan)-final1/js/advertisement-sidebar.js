$(document).ready(function () {
  const listChatHtml = `
    <div class="listChat">
      <div class="item">
        <div class="infoUserLf d-block">
          <div class="row">
            <div class="col-md-4">
              <img src="../../images/avt11.jpg" alt="" class="img-responsive">
            </div>
            <div class="col-md-8 infoRow">
              <div class="nameUserIf">
                <a href="#">Quân Đạt</a>
              </div>
              <span class="flwUsIf">
                1.000 người theo dõi
              </span>
              <div class="wpExInfoUserIf">
                <div class="infoUser">
                  <i class="_8o _8s lfloat _ohe img sp_pJJoIrtsdoR_1_5x sx_e8a57e"></i>
                  <span>51 bạn chung bao gồm</span> <a href="#" class="linkUr">Hoàng Phúc</a> và <a href="#" class="linkUr">Trí Dụng</a>
                </div>
                <div class="infoUser">
                  <i class="_8o _8s lfloat _ohe img sp_pJJoIrtsdoR_1_52x sx_e8a57e"></i>
                  <span>Sống tại</span> <a href="#" class="linkUr">Hà Nội</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  $('.boxSidebar .list-imgTag li').popover({
    trigger: 'manual',
    html : true,
    container: 'body',
    placement: 'left',
    template: `
      <div class="popover chat-sidebar-info-popover" role="tooltip">
        <div class="popover-content"></div>
      </div>
    `,
    content: listChatHtml
  }).on('click', function(e) {
    e.preventDefault();
  }).on('mouseenter', function() {
    $(this).popover('show');
    const scrollTop = $(window).scrollTop();
    const elementOffset = $(this).offset().top;
    const currentElementOffset = (elementOffset - scrollTop);

    if ($(window).height() - currentElementOffset < 200) {
      $('.listChat .item .infoUserLf').addClass('bottom');
    }
    $('.infoUserLf').on('mouseleave', function() {
      $(this).popover('hide');
    }.bind(this));
  }).on('mouseleave', function() {
    setTimeout(function() {
      if (!$('.popover:hover').length) {
        $(this).popover('hide');
      }
    }.bind(this), 100);
  });

  $('.friend-request-list .item-boxSb .img-item').popover({
    trigger: 'manual',
    html : true,
    container: 'body',
    placement: 'left',
    template: `
      <div class="popover chat-sidebar-info-popover" role="tooltip">
        <div class="popover-content"></div>
      </div>
    `,
    content: listChatHtml
  }).on('click', function(e) {
    e.preventDefault();
  }).on('mouseenter', function() {
    $(this).popover('show');
    const scrollTop = $(window).scrollTop();
    const elementOffset = $(this).offset().top;
    const currentElementOffset = (elementOffset - scrollTop);

    if ($(window).height() - currentElementOffset < 200) {
      $('.listChat .item .infoUserLf').addClass('bottom');
    }
    $('.infoUserLf').on('mouseleave', function() {
      $(this).popover('hide');
    }.bind(this));
  }).on('mouseleave', function() {
    setTimeout(function() {
      if (!$('.popover:hover').length) {
        $(this).popover('hide');
      }
    }.bind(this), 100);
  });

  $('.list-item-boxSb .item-boxSb .title-item, .list-item-boxSb .item-boxSb .wpPopupInfoPage').hover(function () {
    $(this).closest('.item-boxSb').find('.wpPopupInfoPage').addClass('d-block');
  }).on('mouseleave', function () {
    $(this).closest('.item-boxSb').find('.wpPopupInfoPage').removeClass('d-block');
  });

  $(document).on('click', '.document-report-button', function () {
    $('.item-boxSb .wpPopupInfoPage').removeClass('d-block');
    $('#document-report-modal').modal('show');
  });
  $('.send-report-button').click(function () {
    $('#document-report-modal').modal('hide');
  });
});
