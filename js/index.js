$(document).ready(function(){
	
	
	init();
	
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
		var errors = isValid();
		if (errors.length > 0){
			$('.error-place').text(errors);
			//Если валидация не прошла
			return;
		}else{
			$('.error-place').text("");
		}
		//Если валидация прошла
		calcUserName();
		calcBorder();
		calcAge();
		calcSexUser();
		calcImagePreivew();
	});
	
	function randElement(items){
		return items[Math.floor(Math.random() * items.length)];
	}
	
	function init(){
		
	}
	
	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}
	
	function isValid(){
		var errors = [];
		
		if ($("#login").val().length < 2){
			errors.push("Login to short");
		}
		
		var pass = $("#password").val();
		if (!pass 
			|| pass.length < 3
			|| pass == '123456'){
			errors.push("Pass to easy");
		}
		
		var sex = $("input[name=sex]:checked").val();
		if (!sex){
			errors.push("Sex not define");
		}
		
		var age = getAge();
		if (age > 20){
			errors.push("To old");
		}
		
		var color = getColor();
		//"#5fec53"
		
		//if (color[1] != "0" || color[2] != "0"){
		var isGood = color[1] == "0" && color[2] == "0";
		if (!isGood){
			errors.push("To red");
		}
		
		return errors;
	}
	
	function calcUserName(){
		var userName = $("#login").val();
		$('.placeForUserName').text(userName);
	}
	
	function calcBorder(){
		var color = getColor();
		$('.preview').css("border-color", color);
	}
	
	function getColor(){
		return $("input[type=color]").val();
	}
	
	function calcAge(){
		var age = getAge();
		$('.placeForAge').text(age);
	}
	
	function calcSexUser(){
		var sex = $("input[name=sex]:checked").val();
		if (sex == 'm'){
			$('.placeForSex').text('man');
		}else if (sex == 'f'){
			$('.placeForSex').text('woman');
		}
	}
	
	function calcImagePreivew(){
		var size = $("#sizeInput").val();
		if (size < 1){
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
	}
	
	function getAge(){
		var birthdayString = $("input[type=date]").val();//"2000-12-05"
		var birthday = new Date(birthdayString);//Sun May 21 2000 03:00:00
		var now = new Date();//date now
		var age = now.getFullYear() - birthday.getFullYear();
		return age;
	}
});


// var condition0 = true;
// var condition1 = condition0 && false;

// var condition2 = condition0 || condition1;

// var condition3 = condition2 || (condition1 && condition0);

// var condition3 = !(condition1 && condition0);


// var num1 = 2;
// var num2 = 15;

// //7
// var answer = sum(num1, num2);

// //75
// var answer2 = sum(60, num2);

// var answer3 = sum(50, 100);

// //167 - 1050
// var answer4 = sum(answer, answer3) - sum(5, 7);

// var answer4 = sum(sum(60, 80), sum(1, 1)) - sum(5, 7);

// function sum(anyNumber1, anyNumber2){
	// return anyNumber1 + anyNumber2;
// }


















