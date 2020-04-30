$(document).ready(function(){
	$(".close").click(function(){
		$('.popup').hide();
	});
	
	$(".girl").click(function(){
		$(this).toggleClass('big-image');
	});
});