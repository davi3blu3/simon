var SimonGame = function(game) {

    game.playerInput = function(el) {
        var elColor = window.getComputedStyle(el).getPropertyValue("background-color");
        console.log(elColor);
    };

    return game;

}(SimonGame || {});