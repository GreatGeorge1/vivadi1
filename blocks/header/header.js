jQuery(document).ready(function($){
	var secondaryNav = $('.header'),
	fix = $('.header-fix'),
	secondaryNavTopPosition = secondaryNav.offset().top;
 
	$(window).on('scroll', function(){
		
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			secondaryNav.addClass('is-fixed');
			fix.addClass('fix');	
			// setTimeout(function() {
			// 	secondaryNav.addClass('animate-children');
			// 	$('#cd-logo').addClass('slide-in');
			// 	$('.cd-btn').addClass('slide-in');
			// }, 50);
		} else {
			secondaryNav.removeClass('is-fixed');
			fix.removeClass('fix');
			// setTimeout(function() {
			// 	secondaryNav.removeClass('animate-children');
			// 	$('#cd-logo').removeClass('slide-in');
			// 	$('.cd-btn').removeClass('slide-in');
			// }, 50);
		}
	});
});