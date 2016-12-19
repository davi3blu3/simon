// add playing and remove playing
var play = function(btn) {
    btn.classList.add('playing');
    
}


// add click event listeners
const gameButtons = document.querySelectorAll('.game-button');
gameButtons.forEach(button => button.addEventListener('click', function() {
    console.log(this);
    play(this);
}))