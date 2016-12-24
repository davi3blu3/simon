var simonSequence = [];
var iteration = 0;
var runSequence = function() {
    play(document.querySelector('#' + simonSequence[iteration]));
    setTimeout(function() {
        iteration++;
        if (iteration < simonSequence.length) {
            runSequence();
        }
    }, 800)
}

// add new random tone to sequence
var randomNewTone = function() {
    // generate random number 1 - 4
    var rand = Math.ceil(Math.random() * 4);
    
    // push new color to sequence
    switch(rand) {
        case 1:
            simonSequence.push('green');
            break;
        case 2:
            simonSequence.push('red');
            break;
        case 3:
            simonSequence.push('yellow');
            break;
        case 4:
            simonSequence.push('blue');
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
const turnCounter = document.querySelector('#counter');

// this will later be replaces with a turn function, and start will trigger a new game
startButton.addEventListener('click', function() {
    iteration = 0;
    turnCounter.innerHTML = parseInt(turnCounter.innerHTML) + 1;
    randomNewTone();
    runSequence();
})