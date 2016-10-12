// references to game buttons
var greenBtn = document.getElementById("green");
var redBtn = document.getElementById("red");
var yellowBtn = document.getElementById("yellow");
var blueBtn = document.getElementById("blue");

// references to game controls
var roundCounter = document.getElementById("counter");
var resetBtn = document.getElementById("reset");
var strictBtn = document.getElementById("strict");

var updateTurn = function(round) {
    roundCounter.innerHTML(round);
}

// set event listeners - game buttons
greenBtn.addEventListener("click", function() {
    playerInput("green");
});
redBtn.addEventListener("click", function() {
    playerInput("red");
});
yellowBtn.addEventListener("click", function() {
    playerInput("yellow");
});
blueBtn.addEventListener("click", function() {
    playerInput("blue");
});

// set event listeners - game controls
resetBtn.addEventListener("click", function() {
    // handle reset
});
strictBtn.addEventListener("click", function() {
    // handle reset
});