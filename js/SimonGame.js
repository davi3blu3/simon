var SimonGame = function() {

    var computerSequence = [];
    var playerSequence = [];
    var strictMode = false;
    var turnNumber = 0;

    return {
        resetGame: function() {
            computerSequence = [];
            playerSequence = [];
            turnNumber = 0;
        },
        computersTurn: function() {
            // update round counter
            turnNumber += 1;
            SimonGame.roundCounter.innerHTML = (turnNumber < 10 ? '0' : '') + turnNumber;

            // disable user clicks
            SimonGame.clickEnabled = false;

            // pick random number 0 - 3
            var rand = Math.floor(Math.random() * 4);

            // add to computer sequence
            computerSequence.push(rand);

            // play computer sequence
            for (i = 0; i < computerSequence.length; i++) {
                console.log("i", i);
                setTimeout(function(){
                    switch (rand) {
                        case 0:
                            SimonGame.lightSound(SimonGame.greenBtn);
                            break;
                        case 1:
                            SimonGame.lightSound(SimonGame.redBtn);
                            break;
                        case 2:
                            SimonGame.lightSound(SimonGame.yellowBtn);
                            break;
                        case 3:
                            SimonGame.lightSound(SimonGame.blueBtn);
                            break;
                    }
                }, 600);  
            };
            // enable user clicks
            SimonGame.clickEnabled = true;
        },
        playerInput: function(buttonPressed, number) {
            // add to player sequence
            playerSequence.push(number);
            // get player sequence length, compare move to computer sequence at same index
            if (computerSequence.length >= playerSequence.length) {
                for (i = 0; i < playerSequence.length; i++) {
                    // if correct
                    if (playerSequence[i] === computerSequence[i]) {
                        SimonGame.lightSound(buttonPressed);
                        // check computer sequence length, determine if turn over
                        // if so, computers turn
                    } else {
                        // play wrong note / warning color
                        document.body.style.backgroundColor = "red";
                        setTimeout(function(){
                            document.body.style.backgroundColor = "#000";
                        }, 250); 
                        // check if strict mode
                        // reset game
                        break;
                    }
                }
                // start next turn
                // SimonGame.computersTurn();
            }
        }
    };

}();