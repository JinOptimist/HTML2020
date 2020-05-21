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
	
	
	$(".showPreview").click(function(){
		var userName = $("#login").val();
		$('.placeForUserName').text(userName);
		
		var color = $("input[type=color]").val();
		$('.preview').css("border-color", color);
		
		var birthdayString = $("input[type=date]").val();//"2000-12-05"
		var birthday = new Date(birthdayString);//Sun May 21 2000 03:00:00
		var now = new Date();//date now
		var age = now.getFullYear() - birthday.getFullYear();
		$('.placeForAge').text(age);
		
		
		var sex = $("input[name=sex]:checked").val();
		if (sex == 'm'){
			$('.placeForSex').text('man');
		}else{
			$('.placeForSex').text('woman');
		}
		
		
		var size = $("#sizeInput").val();
		if (size == 0){
			$('#previewImg').attr('src', 'img/girl2.jpg' );
		}else if (size == 1){
			$('#previewImg').attr('src', 'img/girl3.jpg' );
		}else if (size == 2){
			$('#previewImg').attr('src', 'img/girl4.jpg' );
		}else if (size == 3){
			$('#previewImg').attr('src', 'img/girl5.jpg' );
		}else if (size == 4){
			$('#previewImg').attr('src', 'img/girl7.jpg' );
		}else if (size == 5){
			$('#previewImg').attr('src', 'img/girl6.jpg' );
		}
	});
	
	
});






















