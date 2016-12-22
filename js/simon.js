// add playing and remove playing
var play = function(btn) {
    console.log(btn);
    btn.classList.add('playing');
    console.log(btn);
}


// add click event listeners
const gameButtons = document.querySelectorAll('.game-button');
gameButtons.forEach(button => button.addEventListener('click', function() {
    play(this);
}))