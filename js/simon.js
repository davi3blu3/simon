const gameButtons = document.querySelectorAll('.game-button');
const startButton = document.querySelector('#start');
const strictButton = document.querySelector('#strict');
const turnCounter = document.querySelector('#counter');
var simonSequence = [];
var playerSequence = [];
var iteration = 0;

// add click event listeners
gameButtons.forEach(button => button.addEventListener('click', function() {
    playerClick(this);
}))

// this will later be replaced with a turn function, and start will trigger a new game
startButton.addEventListener('click', function() {
    iteration = 0;
    counterUpdate();
    randomNewTone();
    runSequence();
})

// later be changed to enable strict mode
strictButton.addEventListener('click', function() {
    wrongPress();
})

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

// on wrong key press event, error tone & visual
const wrongPress = function() {
    const bkgd = document.querySelector('body');

    // setTimeout(function() {
    //     bkgd.classList.add('wrong');
    // }, 0)

    // setTimeout(function() {
    //     bkgd.classList.remove('wrong');
    // }, 80)

    // setTimeout(function() {
    //     bkgd.classList.add('wrong');
    // }, 160)

    // setTimeout(function() {
    //     bkgd.classList.remove('wrong');
    // }, 240)

    function doSetTimeout(i) {
        setTimeout(function() {
            i % 2 == 0 ? bkgd.classList.add('wrong') : bkgd.classList.remove('wrong');
        }, (i * 80))
    }

    for (i = 0; i < 4; i++) {
        doSetTimeout(i);
    }      

}

// handle player click input
const playerClick = function (/*this*/) {
    // push move to player sequence
    // compare player sequence so far to simon sequence
    // if correct
        // color and sound response to click
        play(this);
    // else
        // play error tone? visual?
        wrongPress();
    // if player sequence length == simon sequence length and was correct, trigger new round
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

