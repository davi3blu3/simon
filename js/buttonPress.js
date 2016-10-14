var SimonGame = function(game) {
    game.darkRgb;
    game.brightRgb;

    game.greenTone = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    game.redTone = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    game.yellowTone = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    game.blueTone = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");


    game.setColors = function(el) {
        // set dark color
        darkRgb = window.getComputedStyle(el).getPropertyValue("background-color");

        // parse rgb style into array
        var rgbBreakdown = darkRgb.substring(4, darkRgb.length-1)
                .replace(/ /g, '')
                .split(',');
        var newRgbArr = [];

        // get non-zero values, numerify, add 100 and set bright value
        for (i = 0; i < rgbBreakdown.length; i ++) {
            var newInt = parseInt(rgbBreakdown[i]);
            if (newInt > 0) {
                newRgbArr.push(newInt + 100);
            } else {
                newRgbArr.push(newInt);
            }
        }
        // set light color
        brightRgb = "rgb(" + newRgbArr.join(", ") + ")";
        return [brightRgb, darkRgb];
    };

    game.colorChange = function(el, color) {
        el.style.backgroundColor = color;
    };

    game.playerInput = function(el) {

        // set light and dark colors
        var colors = game.setColors(el);

        // change color to bright
        game.colorChange(el, colors[0]);

        // trigger audio
        game[el.id + "Tone"].play();

        // change color to dark after pause
        setTimeout(function(){
            game.colorChange(el, colors[1])
            clickEnabled = true;
        }, 500);        
    };

    return game;

}(SimonGame || {});