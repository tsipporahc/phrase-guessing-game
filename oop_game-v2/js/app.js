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

/**
* Listens for clicks on the keyboard buttons
* calls method that matches keyboard clicks to letters in the phrase
*/
keyboard.addEventListener('click', (e) => {
    if (e.target.classList == 'key') {
        game.handleInteraction(e.target);
        }
        });

    