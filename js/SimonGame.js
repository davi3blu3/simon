var SimonGame = function() {

    var computerSequence = [];
    var playerSequence = [];
    var strictMode = false;

    return {
        resetGame: function() {
            computerSequence = [];
            playerSequence = [];
        },
        computersTurn: function(turnNumber) {
            // update round counter
            turnNumber += 1;
            roundCounter.innerHTML = (turnNumber < 10 ? '0' : '') + turnNumber;

            // disable user clicks
            clickEnabled = false;

            // pick random number 0 - 3
            var rand = Math.floor(Math.random() * 4);

            // add to computer sequence
            computerSequence.push(rand);

            // play computer sequence
            for (i = 0; i < computerSequence.length; i++) {
                setTimeout(function(){
                    switch (rand) {
                        case 0:
                            SimonGame.compInput(greenBtn);
                            break;
                        case 1:
                            SimonGame.compInput(redBtn);
                            break;
                        case 2:
                            SimonGame.compInput(yellowBtn);
                            break;
                        case 3:
                            SimonGame.compInput(blueBtn);
                            break;
                    }
                }, 500);  


            }

            // enable user clicks
        },
        playersInput: function(buttonPressed) {
            // add to player sequence
            // get player sequence length, compare move to computer sequence at same index
            // if correct
                // check computer sequence length, determine if turn over
                // if so, computers turn
            // else
                // play wrong note / warning color
                // check if strict mode
                // reset game
        }
    };

}(SimonGame || {});