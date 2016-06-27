$(document).ready(function() {

    // CLICK EVENTS and COLOR CHANGES
    
	function revertColor(el, color) {
		$(el).css("background-color", color);
	}

	$(".top-left").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "lime");
		setTimeout(function(el, color) {
			revertColor(el, color);
		}, 500, this, original);
	})

	$(".top-right").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "red");
		setTimeout(function(el, color) {
			revertColor(el, color);
		}, 500, this, original);
	})

	$(".btm-left").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "yellow");
		setTimeout(function(el, color) {
			revertColor(el, color);
		}, 500, this, original);
	})

	$(".btm-right").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "blue");
		setTimeout(function(el, color) {
			revertColor(el, color);
		}, 500, this, original);
	})			



})