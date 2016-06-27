$(document).ready(function() {
    
    // COLOR CHANGE FUNCTIONS
    function revertColor(el, color) {
		$(el).css("background-color", color);
	}
    
    // CLICK EVENTS
    


	$(".green").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "lime");
		setTimeout(function(el, color) {
			revertColor(el, color);
		}, 500, this, original);
	})

	$(".red").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "red");
		setTimeout(function(el, color) {
			revertColor(el, color);
		}, 500, this, original);
	})

	$(".yellow").on("click", function() {
		var original = $(this).css("background-color");
		$(this).css("background-color", "yellow");
		setTimeout(function(el, color) {
			revertColor(el, color);
		}, 500, this, original);
	})

	$(".blue").on("click", function() {
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
        
        // simon's turn triggering animation
        this.turn = function() {
            this.simonPattern.push(this.randomColor());
            var testPatter = [1, 3, 0, 2, 1, 1, 2, 3, 0];
            
            // return this.simonPattern;
        }
    }

    var current = new Simon();
    // console.log(current.turn());


})