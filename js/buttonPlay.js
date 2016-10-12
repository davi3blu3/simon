var SimonGame = function(game) {

    game.playerInput = function(el) {
        var elColor = el.style.getComputedStyle('background-color');
        console.log(elColor);
    };

    return game;

}(SimonGame || {});