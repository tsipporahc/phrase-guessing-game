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

class Game {
    constructor () { 
        this.missed = 0;
        this.phrases = [ new Phrase('We make a great pear'), new Phrase('Orange you glad we are friends'), new Phrase('You are one in a melon'), new Phrase('Pineapples on pizza are my jam'), new Phrase('Thank you berry much')
        ];
        this.activePhrase = 'null'; 
    }
        /**
         * Selects random phrase from phrases property
         *  return {object} Phrase object chosen to be used
         **/

         getRandomPhrase = () => {
            let random = Math.floor(Math.random() * (this.phrases.length)); 
            return this.phrases[random];
        }

        

        /**
        * Begins game by selecting a random phrase and displaying it to user
        */
        startGame = () => {
            overlay.style.display = 'none';
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();


        }

        handleInteraction = () => {


            
        }

}



