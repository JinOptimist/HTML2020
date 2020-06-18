$(document).ready(function(){
	var timesText = [
		'Вечерело.', 
		'Шёл третий час в школе.', 
		'Было прекрасное утро.', 
		'Полдень в самом разгаре.'];
	var rain = [
		'Ливень всё не прекращался', 
		'Начал моросить слабый дождик'];
	var sunny = [
		'Чистое безветренное небо радовало своим видом', 
		'Лицо обдувал приятный ветерок', 
		'Тень игриво преслодавала меня'];
		
	var rainImages = ['img/rain1.jpg', 'img/rain2.jpg', 'img/rain3.jpg','img/rain4.jpg'];
	var sunnyImages = ['img/sunny1.jpg', 'img/sunny2.jpg', 'img/sunny3.jpg', 'img/sunny4.jpg'];
	
	init();
	
	function init(){
		generateBook();
	}
	
	function generateBook(){
		var chapters = [];
		for (var i = 0; i < 10; i++){
			var ch = generateChapter();
			ch.index = i;
			chapters.push(ch);
		}
		
		for (var i = 0; i < chapters.length; i++){
			var chapter = chapters[i];
			var cost = randomInteger(i*10, (i+1) * 10);
			
			var chBlock = $('.template .chapter').clone();
			chBlock.find('.chapter-index').text(chapter.index + 1);
			chBlock.find('.cost').text(cost);
			
			chBlock.find('.body').text(chapter.timeText + ' ' + chapter.weatherText);
			chBlock.find('.cover img').attr('src', chapter.url);
			$('.chapters').append(chBlock);
		}
	}
	
	function generateChapter(){
		var isRain = randomInteger(0, 1) % 2 == 0;
		return {
			timeText: randElement(timesText),
			weatherText: isRain 
				? randElement(rain)
				: randElement(sunny),
			url: isRain 
				? randElement(rainImages) 
				: randElement(sunnyImages)
		};
	}
	
	function drawChapter(chapter){
		
	}
		
	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}
	
	function randElement(items){
		return items[randomInteger(0, items.length - 1)];
	}
});
