$(document).ready(function() {
    
    //Global Variables
    var flashCounter = 0;
    
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
    
    function wrongMove() {
        flashCounter += 1;        
        var flash = setInterval(function(){ redFlash() }, 30);

        function redFlash() {
            ($('body').css("background-color") === 'rgb(51, 51, 51)') ? $('body').css("background-color", "red") : $('body').css("background-color", "#333");
            flashCounter += 1;
            
            if (flashCounter == 9) {
                stopFlash();
            }
        }
        function stopFlash() {
            clearInterval(flash);
        }
    }
    
    // CLICK EVENTS
    
	$(".green").on("click", function() {
        colorChange(this, "lime");
        current.userTurn(0);
	})

	$(".red").on("click", function() {
        colorChange(this, "red");
        current.userTurn(1);
	})

	$(".yellow").on("click", function() {
        colorChange(this, "yellow");
        current.userTurn(2);
	})

	$(".blue").on("click", function() {
        colorChange(this, "blue");
        current.userTurn(3);
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
        this.userTurn = function(num) {
            this.userPattern.push(num);
            console.log(this.userPattern);
        }
    }

    
    
    // PSEUDO CODE GAME FLOW
    // Create new game object
    var current = new Simon(),
        i;
    
    // Generate one random number, add to simonPattern
    current.simonPattern.push(current.randomInt());

    
    // Trigger timed color changes according to simonPattern    
    current.simonPattern.forEach(function(number, index) {
        setTimeout(playPattern.bind(null, number), index*1000);
    });
    // Wait for user input
    // User clicks checked against simonPattern, pushed to userPatter
    
    wrongMove();

})