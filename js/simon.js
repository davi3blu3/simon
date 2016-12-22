var order = ['red', 'red'];
var iteration = 0;
var runSequence = function() {
    setTimeout(function() {
        play(document.querySelector('#' + order[iteration]));
        iteration++;
        if (iteration < order.length) {
            runSequence();
        }
    }, 800)
}

// add new random tone to sequence
var randNew = function() {
    // generate random number 1 - 4
    var rand = Math.ceil(Math.random() * 4);
    
    switch(rand) {
        case 1:
            order.push('green');
            break;
        case 2:
            order.push('red');
            break;
        case 3:
            order.push('yellow');
            break;
        case 4:
            order.push('blue');
            break;
        default:
            break;
    }
}

// button sound and color change
var play = function(btn) {
    // change color
    btn.classList.add('playing');
    // play tone
    var tone = document.querySelector(`audio[data-key="${btn.id}"]`);
    tone.play();
    // revert color after delay
    setTimeout(function() {
        btn.classList.remove('playing');
    }, 500);
}

// add click event listeners
const gameButtons = document.querySelectorAll('.game-button');
gameButtons.forEach(button => button.addEventListener('click', function() {
    play(this);
}))

const startButton = document.querySelector('#start');
startButton.addEventListener('click', function() {
    iteration = 0;
    runSequence();

    //just for testing
    randNew();
})