// GLOBAL VARIABLES
// ==================================================================================================

// Creating an array of languages
var languageArray = ["Javascript", "PHP", "Python", "Pascal", "Cobol", "Ruby", "C", "SQL"];

// Empty string for the computer selected word
var chosenWord = "";

// Breaking the word up by letters in an array
var lettersArray = [];

// Holds the letters the user guessed
var letterGuessed = "";

// The number of blanks we show based on the solution.
var numBlanks = 0;

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];

// Counter
var winCounter = 0;
var lossCounter = 0;
var Guesses = 9;

// FUNCTIONS
// ==================================================================================================

var startGame = function () {

    // set Guesses to 9 (for start & restart)
    Guesses = 9;

    // Going through the array to choose a random word
    chosenWord = languageArray[Math.floor(Math.random() * languageArray.length)];

    // Splitting the word and putting it in the lettersArray
    lettersArray = chosenWord.split("");

    // Counting the number of blanks depending on the word chosen
    numBlanks = lettersArray.length;

    // Reset the guess and success array after each round
    blanksAndSuccesses = [];

    // Reset the wrong guesses after each round.
    wrongGuesses = [];

    // Fill up the blanksAndSuccesses list with number of blanks according to the word.
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);

    // Reprints the guessesLeft to 9.
    document.getElementById("guessesLeft").innerHTML = Guesses;

    // Prints the blanks at the beginning of each round in the HTML.
    document.getElementById("wordBlanks").innerHTML = blanksAndSuccesses.join(" ");

    // Clears the wrong guesses from the previous round.
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


}

startGame()