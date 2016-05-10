$(document).ready(function() {

	function changeColor(el, color) {
		$(el).css("background-color", color);
	}

	$(".top-left").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "black");
		setTimeout(function(el, color) {
			changeColor(el, color);
		}, 400, this, original);
	})

	$(".top-right").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "black");
		setTimeout(function(el, color) {
			changeColor(el, color);
		}, 400, this, original);
	})

	$(".btm-left").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "black");
		setTimeout(function(el, color) {
			changeColor(el, color);
		}, 400, this, original);
	})

	$(".btm-right").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "black");
		setTimeout(function(el, color) {
			changeColor(el, color);
		}, 400, this, original);
	})			



})