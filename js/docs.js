


jQuery(document).ready(function($){

	$(window).scroll(function(){
		if($(this).scrollTop()>50){
			$('nav.navbar').removeClass('navbar-transparent');
		}else{
			$('nav.navbar').addClass('navbar-transparent');
		}
	})


	$('.navbar-toggle').on('click',function(){
		$('.main-welcome').toggleClass('main-transparent');
	});

	$(window).enllax();



})




