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
    
    // GAME OBJECT
    
    function Simon() {
        
        this.simonPattern = []; // empty array for random computer pattern
        this.userPattern = []; // empty array for user input
        
        // generate random integer from 0 - 3
        this.randomColor = function() {
            var random = Math.floor(Math.random() * 4);
            return random;
        }
        
        //
        this.turn = function() {
            this.simonPattern.push(this.randomColor());
            return this.simonPattern;
        }
    }

    var current = new Simon();
    console.log(current.turn());
    console.log(current.turn());
    console.log(current.turn());
    console.log(current.turn());



})