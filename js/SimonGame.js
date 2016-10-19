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
            roundCounter.innerHTML = (turnNumber < 10 ? '0' : '') + turnNumber;

            // disable user clicks
            clickEnabled = false;

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
                }, 600);  
            };
            // enable user clicks
            clickEnabled = true;
        },
        playerInput: function(buttonPressed, number) {
            // add to player sequence
            playerSequence.push(number);
            // get player sequence length, compare move to computer sequence at same index
            if (computerSequence.length >= playerSequence) {
                for (i = 0; i < playerSequence.length; i++) {
                    // if correct
                    if (playerSequence[i] === computerSequence[i]) {
                        SimonGame.playerMove(buttonPressed);
                        // check computer sequence length, determine if turn over
                        // if so, computers turn
                    } else {
                        // play wrong note / warning color
                        var body = document.getElementById('body');
                        body.style.background("red");
                        // check if strict mode
                        // reset game
                    }
                }
                SimonGame.computersTurn();
            }
        }
    };

}(SimonGame || {});