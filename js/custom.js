jQuery(document).ready(function($){	
	/*** not empty + preloader ****/
	$('.form-area__submit').click(function(){

		var $formitem = $('.form-area input');
	   	if( ($formitem.val()) == ''){
	    	$formitem.addClass('input-invalid');
	      	console.log( $(this) );
	   	} else {
	   		$formitem.val('');
	   		$formitem.removeClass('input-invalid');
			$('#preloaderwrapp').addClass('preloadwrapp__preload');
			setTimeout( function() {
			   $('#preloaderwrapp').removeClass('preloadwrapp__preload');
			}, 3000);  
	   	}

	});

});	