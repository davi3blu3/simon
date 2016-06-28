$(document).ready(function() {
    
    // COLOR CHANGE FUNCTIONS
    function colorChange(element, newColor) {
        var original = $(element).css("background-color");
		$(element).css("background-color", newColor);
		setTimeout(function(el, original) {
			$(el).css("background-color", original);
		}, 500, element, original);
    }
    
    function playPattern(num) {
        switch (num) {
            case 0:
                colorChange($(".green"), "lime");
                break;
            case 1:
                colorChange($(".red"), "red");
                break;
            case 2:
                colorChange($(".yellow"), "yellow");
                break;
            case 3:
                colorChange($(".blue"), "blue");
                break;
        }
    }
    
    
    // CLICK EVENTS
    
	$(".green").on("click", function() {
        colorChange(this, "lime");
        current.userPattern.push(0);
	})

	$(".red").on("click", function() {
        colorChange(this, "red");
        current.userPattern.push(1);
	})

	$(".yellow").on("click", function() {
        colorChange(this, "yellow");
        current.userPattern.push(2);
	})

	$(".blue").on("click", function() {
        colorChange(this, "blue");
        current.userPattern.push(3);
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
        

    }

    
    // console.log(current.turn());
    
    // PSEUDO CODE GAME FLOW
    // Create new game object
    var current = new Simon(),
        i;
    
    // Generate one random number, add to simonPattern
    current.simonPattern.push(current.randomInt());
    current.simonPattern.push(current.randomInt());
    current.simonPattern.push(current.randomInt());
    current.simonPattern.push(current.randomInt());
    current.simonPattern.push(current.randomInt());
    current.simonPattern.push(current.randomInt());
    current.simonPattern.push(current.randomInt());
    
    // Trigger timed color changes according to simonPattern
//    current.simonPattern.forEach(function(number) {
//        setTimeout(function(number) {
//			playPattern(number);
//		}, 2000, number);
//    });
    
    current.simonPattern.forEach(function(number, index) {
        setTimeout(playPattern.bind(null, number), index*1000);
    });
    // Wait for user input
    // User clicks checked against simonPattern, pushed to userPatter
    


})