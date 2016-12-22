// add playing and remove playing
var play = function(btn) {
    btn.classList.add('playing');
    setTimeout(function() {
        btn.classList.remove('playing');
    }, 500);
}


// add click event listeners
const gameButtons = document.querySelectorAll('.game-button');
gameButtons.forEach(button => button.addEventListener('click', function() {
    play(this);
}))