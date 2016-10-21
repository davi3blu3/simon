var SimonGame = function(game) {

    // boolean to disable click
    game.clickEnabled = true;

    // references to game buttons
    game.greenBtn = document.getElementById("green");
    game.redBtn = document.getElementById("red");
    game.yellowBtn = document.getElementById("yellow");
    game.blueBtn = document.getElementById("blue");

    // references to game controls
    game.roundCounter = document.getElementById("counter");
    game.startBtn = document.getElementById("start");
    game.strictBtn = document.getElementById("strict");

    game.updateTurn = function(round) {
        game.roundCounter.innerHTML(round);
    }

    // set event listeners - game buttons
    game.greenBtn.addEventListener("click", function() {
        console.log("Green button clicked!");
        if (game.clickEnabled) {
            console.log("Green button enabled!");
            game.playerInput(game.greenBtn, 0);
            //SimonGame.lightSound(greenBtn);
            game.clickEnabled = false;
        }
    });
    game.redBtn.addEventListener("click", function() {
        console.log("Red button clicked!");
        if (game.clickEnabled) {
            console.log("Red button enabled!");
            game.playerInput(game.redBtn, 1);
            //SimonGame.lightSound(redBtn);
            game.clickEnabled = false;
        }
    });
    game.yellowBtn.addEventListener("click", function() {
        console.log("Yellow button clicked!");
        if (game.clickEnabled) {
            console.log("Yellow button enabled!");
            game.playerInput(game.yellowBtn, 2);
            //SimonGame.lightSound(yellowBtn);
            game.clickEnabled = false;
        }
    });
    game.blueBtn.addEventListener("click", function() {
        console.log("Blue button clicked!");
        if (game.clickEnabled) {
            console.log("Blue button enabled!");
            game.playerInput(game.blueBtn, 3);
            //SimonGame.lightSound(blueBtn);
            game.clickEnabled = false;
        }
    });

    // set event listeners - game controls
    game.startBtn.addEventListener("click", function() {
        // handle start
        game.resetGame();
        game.computersTurn();
    });
    game.strictBtn.addEventListener("click", function() {
        // handle strict mode
    });

    return game;

}(SimonGame || {});