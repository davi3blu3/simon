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
            
            if (flashCounter <= 9) {
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
        current.userMove(0);
	})

	$(".red").on("click", function() {
        colorChange(this, "red");
        current.userMove(1);
	})

	$(".yellow").on("click", function() {
        colorChange(this, "yellow");
        current.userMove(2);
	})

	$(".blue").on("click", function() {
        colorChange(this, "blue");
        current.userMove(3);
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
        this.userMove = function(num) {
            this.userPattern.push(num);
            if (this.userPattern.length === this.simonPattern.length) {
                for (i = 0; i < this.userPattern.length; i++) {
                    if (this.userPattern[i] !== this.simonPattern[i]) {
                        console.log("wrong!");
                        return wrongMove();
                    }
                }
                console.log("correct!");
                this.userPattern = [];
                this.compMove();
            }
        }
        
        this.compMove = function() {
            // 2. Generate one random number, add to simonPattern
            this.simonPattern.push(this.randomInt());
            console.log(this.simonPattern);


            // 3. Trigger timed color changes according to simonPattern    
            this.simonPattern.forEach(function(number, index) {
                setTimeout(playPattern.bind(null, number), index*1000);
            });
            // Wait for user input
        }
    }

    
    
    // PSEUDO CODE GAME FLOW
    // Create new game object
    var current = new Simon(),
        i;
    // 1. Start Simon sequence
    current.compMove();
    
    

    // see current.userMove();
    // User clicks checked against simonPattern, pushed to userPatter
    
    // wrongMove();

})