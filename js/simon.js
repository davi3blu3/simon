var order = ['red', 'red', 'green', 'yellow', 'red', 'blue', 'blue', 'green', 'red', 'yellow', 'yellow'];
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
    runSequence();
})