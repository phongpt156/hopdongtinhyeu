$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.cmtTxt .detailCmt .reaction').tooltip('destroy');
  $('.cmtTxt .detailCmt .reaction').tooltip({
    html: true,
    template: `
      <div class="tooltip" role="tooltip">
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner"></div>
      </div>
    `,
    trigger: 'hover',
    title: `
      <div class="detail-comment-reaction-tooltip">
        <div class="detail-comment-reaction-item">
          <div class="detail-comment-reaction-item__header">
            <i class="sn-icon sn-icon--2x sn-thumbsup-circle-blue"></i>
            <span class="count">8</span>
          </div>
          <ul class="user-list">
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
            <li class="user-item">
              <a>Nguyen Tan Dat</a>
            </li>
          </ul>
        </div>
        <div class="detail-comment-reaction-item">
          <div class="detail-comment-reaction-item__header">
            <i class="sn-icon sn-icon--2x sn-thumbsdown-circle-blue"></i>
            <span class="count">1</span>
          </div>
          <ul class="user-list">
            <li class="user-item">
              <a>Nguyen Mai</a>
            </li>
          </ul>
        </div>
      </div>
    `
  });

  $('.profile-wall-link').popover({
    trigger: 'manual',
    html : true,
    container: 'body',
    placement: 'bottom',
    template: `
      <div class="popover brief-profile-wall-popover" role="tooltip">
        <div class="popover-content"></div>
      </div>
    `,
    content: `
      <div class="brief-profile-wall-box">
        <div class="brief-profile-wall-box__inner">
          <div class="brief-profile-wall-box__body">
            <div class="content">
              <div class="profile-cover-container">
                <div class="profile-cover-container__inner">
                  <div class="profile-cover">
                    <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t31.0-0/q84/c0.82.853.316/p480x480/18527052_1898323690379740_6713179018005405852_o.jpg?_nc_cat=105&_nc_ht=scontent.fhan5-6.fna&oh=0f8012dcd816318f19ef866960c8cef2&oe=5CAE6EF8" />
                  </div>
                  <div class="overlay"></div>
                </div>
                <div class="content-arrow">
                  <div class="content-arrow__inner">
                    <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t31.0-0/q84/c0.82.853.316/p480x480/18527052_1898323690379740_6713179018005405852_o.jpg?_nc_cat=105&_nc_ht=scontent.fhan5-6.fna&oh=0f8012dcd816318f19ef866960c8cef2&oe=5CAE6EF8" />
                  </div>
                </div>
                <div class="profile-name">
                  <a>Đinh Hồng Khanh</a>
                </div>
              </div>
              <table class="data-table" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr class="profile-cover">
                    <td rowspan="2" valign="top">
                      <a href="https://www.facebook.com/Klaq.concumongmanh?fref=hovercard&amp;hc_location=profile_browser&amp;__tn__=%2Cd-a-R">
                        <div class="cover">
                          <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/17426131_1868906883321421_3439271055225595146_n.jpg?_nc_cat=111&_nc_ht=scontent.fhan5-3.fna&oh=f32bc2a0af79e6301d2ddb835eb26034&oe=5C6DC135" role="img" />
                        </div>
                      </a>
                    </td>
                  </tr>
                  <tr class="profile-info">
                    <td valign="top">
                      <div class="info-container">
                        <ul class="info-list">
                          <li class="info-item">
                            <div class="d-flex">
                              <i class="sn-icon sn-icon--2x sn-bag mr-1"></i>
                              <div>
                                <div class="title">
                                  Executive Producer at <a>Gezm</a>
                                </div>
                                <div class="description">
                                  July 15, 2018 to present
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="info-item">
                            <div class="d-flex">
                              <i class="sn-icon sn-icon--2x sn-graduation-cap mr-1"></i>
                              <div>
                                <div class="title">
                                  Goes to <a>THPT Lý Thường Kiệt</a>
                                </div>
                                <div class="description">
                                  Started in 2018
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="brief-profile-wall-box__footer">
            <button class="social-network-button">
              <i class="sn-icon sn-icon--1x sn-wifi"></i>
              Follow
            </button>
          </div>
        </div>
      </div>
    `
  }).on('click', function(e) {
    e.preventDefault();
  }).on('mouseenter', function() {
    $(this).popover('show');

    if (window.innerWidth > 455) {
      $('.popover').css('left', $(this).offset().left);
    } else {
      $('.popover .content-arrow').addClass('d-none');
    }
    $('.brief-profile-wall-popover').on('mouseleave', function() {
      $(this).popover('hide');
    }.bind(this));
  }).on('mouseleave', function() {
    setTimeout(function() {
      if (!$('.popover:hover').length) {
        $(this).popover('hide');
      }
    }.bind(this), 100);
  });

  $('.comment-action').popover({
    trigger: 'manual',
    html : true,
    placement: 'bottom',
    template: `
      <div class="popover comment-action-popover" role="tooltip">
        <div class="arrow"></div>
        <div class="popover-content"></div>
      </div>
    `,
    content: `
      <div class="comment-action-list">
        <a class="comment-action-item">
          <i class="fa fa-pencil"></i>
          <span>Chỉnh sửa...</span>
        </a>
        <a class="comment-action-item">
          <i class="fa fa-trash"></i>
          <span>Xóa...</span>
        </a>
      </div>
    `
  }).click(function (e) {
    e.stopPropagation();

    $('.comment-action').not($(this)).popover('hide').removeClass('d-flex');
    $(this).addClass('d-flex');
    $(this).popover('toggle');
  });

  $(document).on('click', '.comment-action-popover .comment-action-item', function () {
    $('.comment-action').popover('hide').removeClass('d-flex');
  });

  $('.send-cv-button').click(function () {
    $('.chooseCV').modal('hide');
    $('.success-send-cv-modal').modal('show');
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
  `
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

  new PerfectScrollbar('.reaction-detail-modal .modal-body', {
    suppressScrollX: true,
    wheelPropagation: false
  });
});
