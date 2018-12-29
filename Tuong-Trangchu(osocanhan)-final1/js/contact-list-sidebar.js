$(document).ready(function () {
  new PerfectScrollbar('.contact-list-sidebar__main', {
    suppressScrollX: true,
    wheelPropagation: false
  });

  $('.search-input').on('input', function () {
    const clearElement = $('.clear-search-input');

    if ($(this).val().length) {
      clearElement.removeClass('d-none');
    } else {
      clearElement.addClass('d-none');
    }
  });
  $('.clear-search-input').click(function () {
    $(this).addClass('d-none');
    $('.search-input').val('');
    $('.search-input').focus();
  });

  $('.contact-list-container--collapse').click(function () {
    $('.contact-list-container--open').toggleClass('d-none');
    $(this).toggleClass('d-none');
  });

  function initUserInfoTooltip() {
    let userInfo = {};

    $('.contact-list .contact-item').on('mouseenter', async function () {
      userInfo.name = 'Quân Đạt';

      $('.contact-list .contact-item').popover({
        trigger: 'manual',
        html : true,
        container: 'body',
        placement: 'left',
        template: `
          <div class="popover chat-sidebar-info-popover" role="tooltip">
            <div class="popover-content"></div>
          </div>
        `,
        content: `
          <div class="listChat">
            <div class="item">
              <div class="infoUserLf d-block">
                <div class="row">
                  <div class="col-md-4">
                    <img src="../../images/avt11.jpg" alt="" class="img-responsive">
                  </div>
                  <div class="col-md-8 infoRow">
                    <div class="nameUserIf">
                      <a href="#">${userInfo.name}</a>
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
      }).on('click', function(e) {
        e.preventDefault();
      }).on('mouseleave', function() {
        setTimeout(function() {
          if (!$('.popover:hover').length) {
            $(this).popover('hide');
          }
        }.bind(this), 100);
      });

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
    });
  }

  initUserInfoTooltip();
});
