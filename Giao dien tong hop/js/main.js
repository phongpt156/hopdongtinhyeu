$(document).ready(function() {

	//Hiện bình luận bài viết
	$('.comment').click(function(){
		$(this).css('text-decoration','none');
		$(this).attr('href','javascript:void(0)');
		$(this).parent().next().css('display','block');
		$(this).parent().next().children('inputCmt input').trigger('click');
	});

	$('.hoverShow').hover(function() {
		$('.leftContentRegis .top500').show();
	}, function() {
		$('.leftContentRegis .top500').hide();
	});


	// Ẩn hiện "Tìm bạn bè" khi xổ xuống ở trang tìm bạn bè.
	$('.panel').on('show.bs.collapse', function () {
  			$(this).children().find('.findFriend').hide();
	});
	$('.panel').on('hide.bs.collapse', function () {
  			$(this).children().find('.findFriend').show();
	});

	//Ẩn hiện dropdown trên menu

    $('.f_click').on('click',function(){
        $(this).toggleClass('active');
        $('.security').toggleClass('active');
    });

    $('body').on('click.hideMenu', function(e) {
		if ($('.security').hasClass('active')) {
			if (!$(e.target).parents().hasClass('secuSetting')) {
				$('.f_click').removeClass('active');
				$('.security').removeClass('active');
			}
		}
	});

	$('.down_click').on('click',function(){
        $(this).toggleClass('active');
        $('.otherSetting .dropdown-menu').toggleClass('active');
    });

    $('body').on('click.hideMenu', function(e) {
		if ($('.otherSetting .dropdown-menu').hasClass('active')) {
			if (!$(e.target).parents().hasClass('otherSetting')) {
				$('.down_click').toggleClass('active');
				$('.otherSetting .dropdown-menu').removeClass('active');
			}
		}
	});


	$('.list-notifi>li>span').on('click',function(){
		$(this).parent().toggleClass('active');
        $(this).next().toggleClass('active');
 
    });

    $('body').on('click.hideMenu', function(e) {
		if ($('.new-notifi .drop-down').hasClass('active')) {
			if (!$(e.target).parents().hasClass('new-notifi')) {
				$('.new-notifi').removeClass('active');
				$('.new-notifi .drop-down').removeClass('active');
			}
		}
	});
	$('body').on('click.hideMenu', function(e) {
		if ($('.mes-notifi .drop-down').hasClass('active')) {
			if (!$(e.target).parents().hasClass('mes-notifi')) {
				$('.mes-notifi').removeClass('active');
				$('.mes-notifi .drop-down').removeClass('active');
			}
		}
	});
	$('body').on('click.hideMenu', function(e) {
		if ($('.friend-notifi .drop-down').hasClass('active')) {
			if (!$(e.target).parents().hasClass('friend-notifi')) {
				$('.friend-notifi').removeClass('active');
				$('.friend-notifi .drop-down').removeClass('active');
			}
		}
	});


	// Nút upload ảnh tại trang đăng ky hoàn thành
    $(".uploadFile").click(function() {
    	$('#avt-img').trigger('click');
    });

    // Scroll cho thông báo tin nhắn, kết bạn...
    $(".hidden-box").mCustomScrollbar({
    	theme: "minimal-dark"
    });
    // $(".imgShow").mCustomScrollbar({
    // 	theme: "minimal-dark",
    // 	axis:"x",
    // 	advanced:{autoExpandHorizontalScroll:true},
    // });

    // Slide
    $('.owl-carousel').owlCarousel({
	    items: 5,
	    margin: 10,
	})
    // Hiển thị tooltop khi hover
	$('[data-toggle="tooltip"]').tooltip();

	// // // Custom style select
	// $(".drop_sl").change(function() {
	//     var str = "";
	//     $(this).find( "option:selected" ).each(function() {
	//       str += $( this ).text() + " ";
	//     });
	//     $(this).parent().find('span').text( str );
	//   }).trigger( "change" );


	/*---Canh giữa popup --*/
	 //Vertically Centering Bootstrap Modals
     function reposition() {
        var modal = $(this),
        dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }

    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);

    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });

    // Ẩn hiện lựa chọn cài đặt tại trang cài đặt
    $('.listSetting .showInfouser').click(function() {
    	$(this).parent().addClass('active');
    	var parent = $(this).parent();
    	$('.listSetting').children().not(parent).removeClass('active');
    });
    $('.listSetting li .cancel').click(function() {
    	$('.listSetting').children().removeClass('active');
    });

    // Lấy giá trị input tại trang cài đặt (Tên người dùng)
    $('#changeNameUser').on("input", function() {
	  var valueIp = $(this).val();
	  if(valueIp == ''){
	  	$('.timelineUsername').text('your.username');
	  }else{
      	$('.timelineUsername').text(valueIp);
  	  }
	});


	//Select with search box
	hideValue = function(el){
		$(el).parent().hide();
		$(el).parent().next().val(0);
		$(el).parent().next().select2();
		if($(el).parent().next().hasClass('trend')){
			$('#searchMain').val('').tagsinput('destroy');
			$('#searchMain').removeAttr('disabled');
			$('.selectCat li:nth-child(n+6)').css('display','none');
		}
	}

	$(".drop_sl,.sl_brief,#career,#chooseDate").select2();

	$(".drop_sl").on('change', function(){
		$(this).select2('destroy');
		$(this).hide();
		$(this).prev('span').css('display', 'block');
		$(this).prev('span').html($(this).val() + "<i onclick='hideValue(this)' class='removeValue'>x</i>");
		if($(this).hasClass('trend')){
			$('#searchMain').val($(this).val()).tagsinput('refresh');
			$('#searchMain').attr('disabled','disabled');
			$('.selectCat li:nth-child(n+6)').css('display','inline-block');
		}
	});

	$(".drop_sl").each(function() {	
		if($(this).val() != 0 && $(this).val() != null){
			$(this).select2('destroy');
			$(this).hide();
			$(this).prev('span').css('display', 'block');
			$(this).prev('span').html($(this).val() + "<i onclick='hideValue(this)' class='removeValue'>x</i>");
			if($(this).hasClass('trend')){
				$('#searchMain').val($(this).val()).tagsinput('refresh');
				$('#searchMain').attr('disabled','disabled');
				$('.selectCat li:nth-child(n+6)').css('display','inline-block');
			}
		}
	});


	// Show search result
	searchResult = function(input){
		if($(input).val().length)
			$('.searchResult').addClass('active');
		else
			$('.searchResult').removeClass('active');
	}
	$("#searchMain").keyup(function() {
		searchResult(this);
	});

	$('body').on('click.hideMenu', function(e) {
		if ($('.searchResult').hasClass('active')) {
			if (!$(e.target).parents().hasClass('searchFormUser')) {
				$('.searchResult').removeClass('active');
			}
		}
	});

	//Create page
	$('.tall_box .inner').each(function() {
		$(this).find('.facade').removeClass('active');
		$(this).click(function() {
			$(this).find('.facade').addClass('active');
			$('.tall_box .inner').not(this).find('.facade').removeClass('active');
		});
	});

	//Introduction Page
	$('.edit').each(function() {
		$(this).click(function() {
			$('.edit').not(this).removeClass('show');
	        var selector = $(this).data('operation');

	       if(selector == 'field'){
	       		$('#field').addClass('show');
	       		$('#field').nextAll().removeClass('show');
	       		$('#field').prevAll().removeClass('show');
	       		$('#myModalLabel').html('Chỉnh sửa chi tiết');
	       }
	       else if(selector == 'namePage'){
	       		$('#namePage').nextAll().removeClass('show');
	       		$('#namePage').prevAll().removeClass('show');
	       		$('#namePage').addClass('show');
	       		$('#myModalLabel').html('Yêu cầu tên Trang mới');
	       }
	       else if(selector == 'nameUser'){
	       		$('#myModalLabel').html('Tạo tên người dùng của Trang');
	       		$('#nameUser').nextAll().removeClass('show');
	       		$('#nameUser').prevAll().removeClass('show');
	       		$('#nameUser').addClass('show');
	       }
	       else if(selector == 'startDay'){
	       		$('#myModalLabel').html('Chỉnh sửa chi tiết');
	       		$('#startDay').nextAll().removeClass('show');
	       		$('#startDay').prevAll().removeClass('show');
	       		$('#startDay').addClass('show');
	       }
	       else if(selector == 'phoneNumber'){
	       		$('#myModalLabel').html('Chỉnh sửa chi tiết');
	       		$('#phoneNumber').nextAll().removeClass('show');
	       		$('#phoneNumber').prevAll().removeClass('show');
	       		$('#phoneNumber').addClass('show');
	       }
	       else if(selector == 'emailOver'){
	       		$('#myModalLabel').html('Chỉnh sửa chi tiết');
	       		$('#emailOver').nextAll().removeClass('show');
	       		$('#emailOver').prevAll().removeClass('show');
	       		$('#emailOver').addClass('show');
	       }
	       else if(selector == 'website'){
	       		$('#myModalLabel').html('Chỉnh sửa chi tiết');
	       		$('#website').nextAll().removeClass('show');
	       		$('#website').prevAll().removeClass('show');
	       		$('#website').addClass('show');
	       }
	       else if(selector == 'introduction'){
	       		$('#myModalLabel').html('Chỉnh sửa chi tiết');
	       		$('#introduction').nextAll().removeClass('show');
	       		$('#introduction').prevAll().removeClass('show');
	       		$('#introduction').addClass('show');
	       }

	    });
	});

	$('.selectSetting').each(function() {
		$(this).click(function() {
			$(this).addClass('active');
			$('.selectSetting').not(this).removeClass('active');
		});
	});
	$('#gerenal').click(function() {
		$('.gerenalForm').show();
		$('.gerenalForm').next().hide();
	});
	$('#contact').click(function() {
		$('.contactForm').show();
		$('.contactForm').prev().hide();
	});

	$('#settingAll').on('hidden.bs.modal', function () {
		$('.showSave').find('.detailChange').slideUp();
	})

	$('.showSave').each(function() {
		$(this).click(function() {
			$(this).find('.detailChange').slideDown();
		});
	});

	function handler( event ) {
	  var target = $( event.target );
	  if ( target.is( '.btn-link' ) ) {
	    target.parents('.detailChange').slideUp();
	  }
	}
	$('.showSave').click( handler );


	// Auto resize textarea
	autosize($('.areaInput'));

	$('.navFormPost a[href="#media"]').on('shown.bs.tab', function () {
		$('.areaIpPhoto').css('height', $('.areaInput').innerHeight());
		if($('.boxPre').length > 0){
			$('.tabSubmit').css('display', 'block');
		}else{
			$('.tabSubmit').css('display', 'none');
		}
	});
	$('.navFormPost a[href="#status"]').on('shown.bs.tab', function () {
		$('.areaInput').css('height', $('.areaIpPhoto').innerHeight());
		$('.tabSubmit').css('display', 'block');
	});
	$('.navFormPost a[href="#eventInlife"],.navFormPost a[href="#upArticle"]').on('shown.bs.tab', function () {
		$('.tabSubmit').css('display', 'none');
	});

	$('.areaInput').keyup(function() {
		$('.areaInput').val($(this).val());
	});

	//Fixed element
	$('.fixedTop').scrollToFixed();
	$('.fixedTopSidebar').scrollToFixed({ marginTop: 50});
    $('.fixedTopindexSb').scrollToFixed({ marginTop: 60});


    // Description User    

});