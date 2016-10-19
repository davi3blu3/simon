// references to game buttons
var greenBtn = document.getElementById("green");
var redBtn = document.getElementById("red");
var yellowBtn = document.getElementById("yellow");
var blueBtn = document.getElementById("blue");

var clickEnabled = true;

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
        clickEnabled = false;
    }
});
redBtn.addEventListener("click", function() {
    if (clickEnabled) {
        SimonGame.playerInput(redBtn, 1);
        clickEnabled = false;
    }
});
yellowBtn.addEventListener("click", function() {
    if (clickEnabled) {
        SimonGame.playerInput(yellowBtn, 2);
        clickEnabled = false;
    }
    
});
blueBtn.addEventListener("click", function() {
    if (clickEnabled) {
        SimonGame.playerInput(blueBtn, 3);
        clickEnabled = false;
    }
    
});

// set event listeners - game controls
startBtn.addEventListener("click", function() {
    // handle start
    SimonGame.resetGame();
    SimonGame.computersTurn(0);
});
strictBtn.addEventListener("click", function() {
    // handle strict mode
});