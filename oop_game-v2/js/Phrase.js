/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Purpose: To create a Phrase class to handle the creation of phrases */

/* 
 * About Phrase Class
 * 
 * initializes Phrase Object 
 * initializes addPhraseToDisplay(), checkLetter(), showMatchedLetter()
 * matchedLetter - returns boolean, tells whether letter from keyboard matches letter in active phrase
 * */

const phraseSection = document.getElementById('phrase') // div
const lettersPlaceholder = phraseSection.children; // ul
let letterList = lettersPlaceholder[0]; // li
let phraseLetterArray = [];
letterList.innerHTML = '';
let matchedLetter = '';


class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay = () => {
        let phraseLetterArray = this.phrase.split(''); // return array of letters

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
            return matchedLetter = true;
            } else {
            return matchedLetter = false;
            }
    };

        
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        if (letter) {
            const letterDisplay = document.getElementsByClassName(`${letter}`);
            
            for(let i=0; i < letterDisplay.length; i++) {
            letterDisplay[i].classList.remove('hide');
            letterDisplay[i].classList.add('show');
            letterDisplay[i].style.display == 'none';
            }
        }

    };

}