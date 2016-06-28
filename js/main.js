$(document).ready(function() {
    
    // COLOR CHANGE FUNCTIONS
    function colorChange(element, newColor) {
        var original = $(element).css("background-color");
		$(element).css("background-color", newColor);
		setTimeout(function(el, original) {
			$(el).css("background-color", original);
		}, 500, element, original);
    }
    
    
    // CLICK EVENTS
    
	$(".green").on("click", function() {
        colorChange(this, "lime");
	})

	$(".red").on("click", function() {
        colorChange(this, "red");
	})

	$(".yellow").on("click", function() {
        colorChange(this, "yellow");
	})

	$(".blue").on("click", function() {
        colorChange(this, "blue");
	})
    
    // GAME OBJECT
    
    function Simon() {
        
        this.simonPattern = []; // empty array for random computer pattern
        this.userPattern = []; // empty array for user input
        
        // generate random integer from 0 - 3
        this.randomInt = function() {
            var random = Math.floor(Math.random() * 4);
            return random;
        }
        
        // simon's turn triggering animation
        this.turn = function() {
            this.simonPattern.push(this.randomInt());
            var testPattern = [1, 3, 0, 2, 1, 1, 2, 3, 0];
            
            // return this.simonPattern;
        }
    }

    var current = new Simon();
    // console.log(current.turn());


})