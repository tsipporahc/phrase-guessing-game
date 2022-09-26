/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Purpose: To create a Phrase class to handle the creation of phrases */

const phraseSection = document.getElementById('phrase') // div
//const lettersPlaceholder = phraseSection.children; // ul
let lettersList = document.createElement('li'); // li

let letterSection = phraseSection.appendChild(lettersList); // adds li to ul

letterSection.innerHTML = '';
console.log(letterSection);

class Phrase {
    constructor (phrase) { // intializes phrase and addPhraseToDisplay(), checkLetter(), showMatchedLetter()
        this.phrase = phrase.toLowerCase();
       // const addPhraseToDisplay() => { // adds letter placeholders to the display when the game starts.

       // }

    }

    /**
    * Display phrase on game board
    */
     addPhraseToDisplay = () => {
   
        // how to break the string into letters? phrase.split(index) phrases.split(i) loop through the random phrase?

        
            let phraseLetterArray = phrase.phrase.split(''); // returns array or letters
            console.log(phraseLetterArray);

        for (let i = 0; i < phraseLetterArray.length; i++) {
            letterSection.innerHTML += `<li>${phraseLetterArray[i]}</li>`;

        }

        /* console.log(phrase); // returns random object
        console.log(this.phrase); // returns random string */
    }


}



