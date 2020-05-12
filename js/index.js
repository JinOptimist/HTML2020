$(document).ready(function(){
	
	$(".close").click(function(){
		$('.popup').hide();
	});
	
	$(".girl").click(function(){
		$(this).toggleClass('big-image');
	});
	
	slideShow('.slider', {
		isAutoplay: true,
		delayAutoplay: 10 * 1000
	});
});