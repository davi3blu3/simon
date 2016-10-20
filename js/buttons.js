var SimonGame = function(game) {


    return game;

}(SimonGame || {});

// boolean to disable click
var clickEnabled = true;

// references to game buttons
var greenBtn = document.getElementById("green");
var redBtn = document.getElementById("red");
var yellowBtn = document.getElementById("yellow");
var blueBtn = document.getElementById("blue");

// references to game controls
var roundCounter = document.getElementById("counter");
var startBtn = document.getElementById("start");
var strictBtn = document.getElementById("strict");

var updateTurn = function(round) {
    roundCounter.innerHTML(round);
}

// set event listeners - game buttons
greenBtn.addEventListener("click", function() {
    if (clickEnabled) {
        SimonGame.playerInput(greenBtn, 0);
        //SimonGame.lightSound(greenBtn);
        clickEnabled = false;
    }
});
redBtn.addEventListener("click", function() {
    if (clickEnabled) {
        SimonGame.playerInput(redBtn, 1);
        //SimonGame.lightSound(redBtn);
        clickEnabled = false;
    }
});
yellowBtn.addEventListener("click", function() {
    if (clickEnabled) {
        SimonGame.playerInput(yellowBtn, 2);
        //SimonGame.lightSound(yellowBtn);
        clickEnabled = false;
    }
    
});
blueBtn.addEventListener("click", function() {
    if (clickEnabled) {
        SimonGame.playerInput(blueBtn, 3);
        //SimonGame.lightSound(blueBtn);
        clickEnabled = false;
    }
    
});

// set event listeners - game controls
startBtn.addEventListener("click", function() {
    // handle start
    SimonGame.resetGame();
    SimonGame.computersTurn();
});
strictBtn.addEventListener("click", function() {
    // handle strict mode
});