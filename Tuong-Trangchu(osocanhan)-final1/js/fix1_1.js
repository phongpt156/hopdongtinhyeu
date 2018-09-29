	
// search friends ms <---- edit in main.js
  	$('.searchFms').click(function(){
  		$('.fixUsSF').css({'width' : '100%', 'float': 'none'});
  		$('.fixUsSD').css('width', '0%');
  		$('.titleTop').css('height', 'auto');

  	});
  	$('.activeUsS').click(function(e){
  		$(this).addClass('deleteUsS');
  		$(this).focus();
  	});
  	
  	$(document).on('keydown', function(e){
	    if(e.keyCode === 8){
	      $('.deleteUsS').remove();
	    }
	});
  	if($('.boxSearchFms').find('.activeUsS')) {
  		$('.Maincontentms .wpInfo').hide();
  	}else {
  		$('.Maincontentms .wpInfo').show();
  	}
