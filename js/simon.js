const gameButtons = document.querySelectorAll('.game-button');
const startButton = document.querySelector('#start');
const strictButton = document.querySelector('#strict');
const turnCounter = document.querySelector('#counter');
const errTone = document.querySelector('audio[data-key="error"]');
var simonSequence = [];
var playerSequence = [];
var iteration = 0;

// add click event listeners
gameButtons.forEach(button => button.addEventListener('click', function() {
    playerClick(this);
}))

// this will later be replaced with a turn function, and start will trigger a new game
startButton.addEventListener('click', function() {
    simonSequence = [];
    turnCounter.innerHTML = '00';
    newTurn();
})

// later be changed to enable strict mode
strictButton.addEventListener('click', function() {
    wrongPress();
})

// new turn
const newTurn = function() {
    iteration = 0;
    counterUpdate();
    randomNewTone();
    runSequence();
    playerSequence = [];
}

// play simon sequence
const runSequence = function() {
    playBtn(document.querySelector('#' + simonSequence[iteration]));
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

    function doSetTimeout(i) {
        setTimeout(function() {
            i % 2 == 0 ? bkgd.classList.add('wrong') : bkgd.classList.remove('wrong');
        }, (i * 80))
    }

    for (i = 0; i < 4; i++) {
        doSetTimeout(i);
    }

    setTimeout(function() {
        iteration = 0;
        playerSequence = [];
        runSequence();
    }, 1200)
}

// handle player click input
const playerClick = function(button) {
    // push move to player sequence
    playerSequence.push(button.id);

    // compare player sequence so far to simon sequence
    console.log('player', playerSequence);
    console.log('computer', simonSequence);
    // if correct and turn finished
    if (compareInput() && playerSequence.length === simonSequence.length) {
        playBtn(button);
        setTimeout(function() {
            newTurn();
        }, 1000)
    // if correct and more to go
    } else if (compareInput()){
        playBtn(button);
    } else {
        wrongPress();
        errTone.play();
        // after error, start round over, or start game over, depending on strict setting
    }
    // if player sequence length == simon sequence length and was correct, trigger new round
}

const compareInput = function() {
    // return boolean if matching so far, up to length of player input
    for (i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] !== simonSequence[i]) {
            return false;
        }
    }
    return true;
}

// add random new tone to sequence
const randomNewTone = function() {
    const tones = ['green', 'red', 'yellow', 'blue'];
    var rand = Math.floor(Math.random() * 4);
    simonSequence.push(tones[rand]);
}

// change sound and color of button
var playBtn = function(btn) {
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

