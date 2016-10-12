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
            // disable user clicks
            // pick random number 0 - 3
            // add to computer sequence
            // play computer sequence
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