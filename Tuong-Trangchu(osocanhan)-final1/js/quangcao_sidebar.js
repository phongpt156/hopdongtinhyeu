$(document).ready(function () {
  function initUserInfoTooltip() {
    let userInfo = {};

    function getListChatHtml(userInfo) {
      return `
        <div class="listChat">
          <div class="item">
            <div class="infoUserLf d-block">
              <div class="row">
                <div class="col-md-4">
                  <img src="../../images/avt11.jpg" alt="" class="img-responsive">
                </div>
                <div class="col-md-8 infoRow">
                  <div class="nameUserIf">
                    <a href="${userInfo.facebookUrl}">${userInfo.name}</a>
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
    }

    $('.boxSidebar .list-imgTag li').on('mouseenter', function () {
      const self = $(this);
      userInfo = {};

      userInfo.name = self.data('name');
      userInfo.facebookUrl = self.data('facebook-url');

      self.popover({
        trigger: 'manual',
        html : true,
        container: 'body',
        placement: 'left',
        template: `
          <div class="popover chat-sidebar-info-popover" role="tooltip">
            <div class="popover-content"></div>
          </div>
        `,
        content: getListChatHtml(userInfo)
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

      self.popover('show');
    });

    $('.friend-request-list .item-boxSb .img-item').on('mouseenter', function () {
      const self = $(this);
      userInfo = {};

      userInfo.name = self.data('name');
      userInfo.facebookUrl = self.data('facebook-url');

      self.popover({
        trigger: 'manual',
        html : true,
        container: 'body',
        placement: 'left',
        template: `
          <div class="popover chat-sidebar-info-popover" role="tooltip">
            <div class="popover-content"></div>
          </div>
        `,
        content: getListChatHtml(userInfo)
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

      self.popover('show');
    });
  }

  initUserInfoTooltip();

  $(document).on('click', '.document-report-button', function () {
    $('.item-boxSb .wpPopupInfoPage').removeClass('d-block');
    $('#document-report-modal').modal('show');
  });
  $('.send-report-button').click(function () {
    $('#document-report-modal').modal('hide');
  });

  function initPostInfoTooltip() {
    let postInfo = {};

    $('.list-item-boxSb .item-boxSb .info-item .title-item').on('mouseenter', function () {
      const self = $(this);
      postInfo = {};
      postInfo.title = self.data('title');

      self.popover({
        trigger: 'manual',
        html : true,
        placement: 'left',
        template: `
          <div class="popover" role="tooltip">
            <div class="popover-content"></div>
          </div>
        `,
        content: `
          <div class="wpPopupInfoPage">
            <div class="mainPopupInfoPage">
              <div class="head">
                <div class="overlay"></div>
                <div class="cover_op"></div>
                <div class="cover"><img src="../../images/cover.jpg" /></div>
                <div class="row head-content">
                  <div class="col-xs-3">
                    <img src="../../images/avt_sb.jpg" class="avt_page">
                  </div>
                  <div class="col-xs-7">
                    <div class="title">${postInfo.title}</div>
                    <div class="abbreviations">20 tháng 7, 2018</div>
                    <div class="detail">Trang web giải trí · 582 lượt thích</div>
                  </div>
                  <div class="col-xs-2 pr-0">
                    <div class="pull-right dropdown">
                      <button class="save_page" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="img sp_ZW3uj1Ck-wQ sx_3e220b"></i></button>
                      <ul class="dropdown-menu">
                        <li><a>Ẩn tin này</a></li>
                        <li><a class="document-report-button">Báo cáo tin này</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main">
                <ul class="list-rate">
                  <li class="item">
                    <div class="col-xs-2" style="padding-right: 0;">
                      <img src="../../images/avt_sb.jpg" />
                    </div>
                    <div class="col-xs-9" style="padding-left: 15px;">
                      <div class="name"><a>Mạnh Hải</a></div>
                      <div class="rate"><span class="nda-color">NDA 12.339.000</span> - Tuyệt vời (321 bình luận)</div>
                      <div class="time">20 tháng 7, 2018</div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="clearfix"></div>
                    <div class="col-xs-2" style="padding-right: 0;">
                      <img src="../../images/avt_sb.jpg" alt="">
                    </div>
                    <div class="col-xs-9" style="padding-left: 15px;">
                      <div class="name"><a>Mạnh Hải</a></div>
                      <div class="rate"><span class="nda-color">NDA 12.339.000</span> - Tuyệt vời (321 bình luận)</div>
                      <div class="time">20 tháng 7, 2018</div>
                    </div>
                  </li>
                </ul>
                <hr class="hoz"> 
                <div class="clearfix"></div>
                <div class="col-xs-6 title_photo-recent">Ảnh gần đây</div>
                <div class="col-xs-6"><div class="pull-right"><a>Xem tất cả</a></div></div>
                <ul class="list_photo-recent">
                  <li class="item"><a><img src="../../images/avt_sb.jpg" alt=""></a></li>
                  <li class="item"><a><img src="../../images/avt_sb.jpg" alt=""></a></li>
                  <li class="item"><a><img src="../../images/avt_sb.jpg" alt=""></a></li>
                </ul>
              </div>
              <div class="footer">
                <ul class="list-Interactive">
                  <li class="item col-md-4" style="padding: 0; padding-right: 0px;"><button class="like"><i class="sp_CzQQKqd_AHg sx_11fbdc"></i> Thích</button></li>
                  <li class="item col-md-4" style="padding: 0; padding-right: 0px;"><button class="like dislike"><i class="sp_CzQQKqd_AHg sx_11fbdc"></i> Không thích</button></li>
                  <li class="item col-md-4" style="padding: 0;padding-right: 0px;"><button class="like follow"><i class="sp_oWsDjTX0MQ1 sx_5f1e0c"></i> Theo dõi</button></li>
                </ul>
              </div>
            </div>
          </div>
        `
      }).on('click', function(e) {
        e.preventDefault();
      }).on('mouseleave', function() {
        setTimeout(function() {
          if (!$('.popover:hover').length) {
            self.popover('hide');
          }
        }, 100);
      });
  
      self.popover('show');
  
      $('.mainPopupInfoPage').on('mouseleave', function() {
        $(this).popover('hide');
      }.bind(this));
    });
  }
  initPostInfoTooltip();
});
