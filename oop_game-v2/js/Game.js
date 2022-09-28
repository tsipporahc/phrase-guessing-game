/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * Purpose: to create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard.*/

/* 
 * Game Class
 * 
 * missed - Used to track the number of missed guesses by the player.
 * phrases - An array of Phrase objects to use with the game.
 * activePhrase - Phrase object that’s currently in play.
 * */

let missed;
let phrases = [];
let activePhrase;
let random;
const overlay = document.getElementById('overlay');
const activePhraseLetters = document.getElementsByClassName('letter');
let hiddenLetters = document.getElementsByClassName('hide');
const heart = document.getElementsByTagName('img');
const gameOverMessage = document.getElementById('game-over-message');

class Game {
    constructor () { 
        this.missed = 0;
        this.phrases = [ new Phrase('We make a great pear'), new Phrase('Orange you glad we are friends'), new Phrase('You are one in a melon'), new Phrase('Pineapples on pizza are my jam'), new Phrase('Thank you berry much'), new Phrase('test')
        ];
        this.activePhrase = 'null'; 
    };


        /**
         * Selects random phrase from phrases property
         *  return {object} Phrase object chosen to be used
         **/

         getRandomPhrase = () => {
            let random = Math.floor(Math.random() * (this.phrases.length)); 
            return this.phrases[random];
        };

        

        /**
        * Begins game by selecting a random phrase and displaying it to user
        */
        startGame = () => {
            overlay.style.display = 'none';
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();


        };


        /**
        * Handles onscreen keyboard button clicks
        * @param (HTMLButtonElement) button - The clicked button element
        */
        handleInteraction(button) {
            button.disabled = true;
            console.log(button.textContent);
            
            this.activePhrase.checkLetter(button.textContent);
            if (matchedLetter) {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.textContent);
                this.checkForWin();
                    if (this.checkForWin()) {
                        this.gameOver(true);
                    }
                    
                console.log(button);
            } else {
                button.classList.add('wrong');
                this.removeLife();
                console.log(button);
            }
  
            
        };


        /**
        * Checks for winning move
        * @return {boolean} True if game has been won, false if game wasn't won
        */
        checkForWin = () => {
            console.log(hiddenLetters);
            console.log(hiddenLetters.length);

            if (hiddenLetters.length > 0) {
                return false;
            } else {
                //this.gameOver(true); // ???
                return true;
            }

        };

        /**
        * Increases the value of the missed property
        * Removes a life from the scoreboard
        * Checks if player has remaining lives and ends game if player is out
        */
        removeLife = () => {
                this.missed += 1; // tracks number of missed
                console.log(this.missed);

                console.log(heart);


                if (this.missed >= 0 && this.missed < 5 ) {
                if (heart[this.missed - 1].src = 'images/liveHeart.png') {
                    return heart[this.missed - 1].src = 'images/lostHeart.png';
                }
            } else if (this.missed == 5 ) {
                    this.gameOver(false);
                }


        };

     
        /**
        * Displays game over message
        * @param {boolean} gameWon - Whether or not the user won the game
        */
        gameOver(gameWon) {
            overlay.style.display = 'flex'; // display overlay
            console.log(gameOverMessage);
            if (gameWon) {
                gameOverMessage.innerHTML = `You WON! Nice work! <br><i>Number of loses: ${this.missed}/5</i>`;
                overlay.className = 'win';
            } else {
                gameOverMessage.innerHTML = `You LOSE! Try again. <br><i>Number of loses: ${this.missed}/5</i>`;
                overlay.className = 'lose';
            }


            startButton.addEventListener('click', () => {
                this.reset();
                game = new Game();
                game.startGame();
            })

        };


        /**
        * reset the gameboard between games
        * 
        */
        reset = () => {
            letterList.innerHTML = ''; // remove li elements
            console.log(letterList);

            const key = document.getElementsByClassName('key');
            for (let i = 0; i<key.length; i++ ) {
                key[i].disabled = false;
                key[i].className = 'key';
                console.log(key);
            }

            for (let i = 0; i<heart.length; i++) {
                heart[i].src = 'images/liveHeart.png';
            }

        };

}



