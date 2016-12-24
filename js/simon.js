const gameButtons = document.querySelectorAll('.game-button');
const startButton = document.querySelector('#start');
const turnCounter = document.querySelector('#counter');
var simonSequence = [];
var iteration = 0;

// add click event listeners
gameButtons.forEach(button => button.addEventListener('click', function() {
    play(this);
}))

// play simon sequence
const runSequence = function() {
    play(document.querySelector('#' + simonSequence[iteration]));
    setTimeout(function() {
        iteration++;
        if (iteration < simonSequence.length) {
            runSequence();
        }
    }, 800)
}

// add new random tone to sequence
const randomNewTone = function() {
    var rand = Math.ceil(Math.random() * 4);
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

// change sound and color of button
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

// update round counter
var counterUpdate = function() {
    var currentRound = turnCounter.innerHTML
    var newRound = (parseInt(currentRound) + 1).toString();
    turnCounter.innerHTML = newRound.length > 1 ? newRound : '0' + newRound;
}

// this will later be replaced with a turn function, and start will trigger a new game
startButton.addEventListener('click', function() {
    iteration = 0;
    counterUpdate();
    randomNewTone();
    runSequence();
})