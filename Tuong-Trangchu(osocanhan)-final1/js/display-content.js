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
                    <img src="https:preset-report-option-listscontent.fhan5-6.fna.fbcdn.net/v/t31.0-0/q84/c0.82.853.316/p480x480/18527052_1898323690379740_6713179018005405852_o.jpg?_nc_cat=105&_nc_ht=scontent.fhan5-6.fna&oh=0f8012dcd816318f19ef866960c8cef2&oe=5CAE6EF8" />
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

  $('.comment-action.mine').popover({
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
        <a class="comment-action-item edit-comment">
          <i class="fa fa-pencil"></i>
          <span>Chỉnh sửa...</span>
        </a>
        <a data-toggle="modal" data-target=".confirm-delete-comment-modal" class="comment-action-item">
          <i class="fa fa-trash"></i>
          <span>Xóa...</span>
        </a>
      </div>
    `
  }).click(function (e) {
    e.stopPropagation();

    $('.comment-action').not($(this)).popover('hide').removeClass('visible');
    $(this).toggleClass('visible');
    $(this).popover('toggle');
  });

  $('.comment-action.yours').popover({
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
          <i class="sn-icon sn-icon--2x sn-close-square"></i>
          <span>Ẩn bình luận</span>
        </a>
        <a class="comment-action-item">
          <span>Gửi phản hồi hoặc báo cáo bình luân này</span>
        </a>
      </div>
    `
  }).click(function (e) {
    e.stopPropagation();

    $('.comment-action').not($(this)).popover('hide').removeClass('visible');
    $(this).toggleClass('visible');
    $(this).popover('toggle');
  });

  $(document).on('click', '.comment-action-popover .comment-action-item', function () {
    $('.comment-action').popover('hide').removeClass('visible');
  });
  $(document).on('click', '.comment-action-popover .comment-action-item.edit-comment', function () {
    const parentEl = $(this).closest('.media');

    parentEl.addClass('is-edit');
    parentEl.find('.inputCmt input').focus();
  });
  $(document).on('keyup', '.cmtTxt .media.is-edit .inputCmt', function (e) {
    if (e.keyCode === 27) { // if press esc, escape edit mode
      $(this).closest('.media').removeClass('is-edit');
    }
  });

  $('.send-cv-button').click(function () {
    $('.chooseCV').modal('hide');
    $('.success-send-cv-modal').modal('show');
  });

  $(document).on('click', '.hide-reply-button', function () {
    $(this).addClass('d-none');
    $(this).closest('.media-body').find('.reply-list').removeClass('d-none');
  });

  new PerfectScrollbar('.reaction-detail-modal .modal-body', {
    suppressScrollX: true,
    wheelPropagation: false
  });

  $('.send-apply-cv-button').click(function () {
    $('.apply').removeClass('d-none');
  });

  $('.preset-report-option-list .preset-report-option-item button').click(function (e) {
    e.preventDefault();

    $(this).closest('.preset-report-option-list').find('.preset-report-option-item').removeClass('active');
    $(this).closest('.preset-report-option-item').addClass('active');
  })
});
