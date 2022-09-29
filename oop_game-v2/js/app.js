/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = '';
const startButton = document.getElementById('btn__reset');

/**
* Listens for clicks on the start button
* initiates Game class
* calls method to start game
*/
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    })

const keyboard = document.getElementById('qwerty');
const button = document.getElementsByClassName('key');

/**
* Listens for clicks on the on screen keyboard buttons
* calls method that matches keyboard clicks to letters in the phrase
*/
keyboard.addEventListener('click', (e) => {
    if (e.target.classList == 'key') {
        game.handleInteraction(e.target);
        }
        console.log(e.target);
    });



/**
* Listens for clicks on the user's keyboard
* calls method that matches user's keyboard clicks to letters in the phrase
* stops key up at the game over screen
*/
document.addEventListener('keyup', (e) => {
    
    if (overlay.style.display == 'none') {
        for (let i=0; i<button.length; i++) {
            if (button[i].textContent === e.key) {
                game.handleInteraction(button[i]);
                console.log(button[i]);
            }
        }
    } else if (overlay.style.display == 'flex') {
        onkeyup = null;
    }
    
});

    