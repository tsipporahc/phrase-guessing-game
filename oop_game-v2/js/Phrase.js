/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Purpose: To create a Phrase class to handle the creation of phrases */

const phraseSection = document.getElementById('phrase') // div
const lettersPlaceholder = phraseSection.children; // ul

let letterList = lettersPlaceholder[0];

let phraseLetterArray = [];
letterList.innerHTML = '';

let matchedLetter = '';


class Phrase {
    constructor (phrase) { // intializes phrase and addPhraseToDisplay(), checkLetter(), showMatchedLetter()
        this.phrase = phrase.toLowerCase();
       // const addPhraseToDisplay() => { // adds letter placeholders to the display when the game starts.

       // }

    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay = () => {

        
        let phraseLetterArray = this.phrase.split(''); // return array of letters
        console.log(phraseLetterArray);

        for (let i = 0; i < phraseLetterArray.length; i++) {
            let letter = phraseLetterArray[i];
        
            if (letter === ' ') {
                let li = document.createElement('li');
                li.className += 'space';
                li.textContent = `${letter}`;
                letterList.appendChild(li);
            } else {
                let li = document.createElement('li');
                li.className += `hide letter ${letter}`;
                li.textContent = `${letter}`;
                letterList.appendChild(li);
            }


        }


    };

        /**
        * Checks if passed letter is in phrase
        * @param (string) letter - Letter to check
        */
    checkLetter = (letter) => {
            let phraseLetterArray = this.phrase.split('');
            
            if (phraseLetterArray.includes(letter)) {
                matchedLetter == true;
                return true;
            } else {
                matchedLetter == false;
                return false;
            }
    };

        /**
        * Displays passed letter on screen after a match is found
        * @param (string) letter - Letter to display
        */
    showMatchedLetter(letter) {
// select letter DOM with CSS class name that matches the ' letter ${letter}'
// replace CSS class name from 'hide' to 'show'
        if (letter) {
            const letterDisplay = document.getElementsByClassName(`${letter}`);
            console.log(letterDisplay);
            
            for(let i=0; i < letterDisplay.length; i++) {
            letterDisplay[i].classList.remove('hide');
            letterDisplay[i].classList.add('show');
            letterDisplay[i].style.display == 'none';
            }
        }

        };









}
