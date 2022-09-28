/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// 1. can add temporary code to the app.js file to make sure that you can create instances of each class.//
//const phrase = new Phrase('Life is like a box of chocolates');
//const game = new Game();
//console.log(`Phrase - phrase: ${phrase.phrase}`);


// 2. test the phrases array of objects
/* const game = new Game();

game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index + 1} - phrase: ${phrase.phrase}`);
}); */


// 3. test the getRandomPhrases array of objects
/* const game = new Game();

const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };

    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase()); */


 // 4. test the addPhrasesToDisplay()  
/*     const game = new Game();
    const randomPhrase = game.getRandomPhrase();
    const phrase = new Phrase(randomPhrase.phrase);
    phrase.addPhraseToDisplay();
    game.getRandomPhrase().addPhraseToDisplay(); */

    // 5. test the startGame()
/*     const game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); */

    let game = '';
    const startButton = document.getElementById('btn__reset');
   
    startButton.addEventListener('click', () => {
        game = new Game();
        game.startGame();
    })

    const keyboard = document.getElementById('qwerty');
    console.log(keyboard);

/*     for (let i=0; i<keyboardButton.length; i++) {
        console.log(keyboardButton[i]);
        keyboardButton[i].addEventListener('click', game.handleInteraction);
        } */

        keyboard.addEventListener('click', (e) => {
            if (e.target.classList == 'key') {
                game.handleInteraction(e.target.textContent);
            }

        });



    