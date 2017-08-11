// GLOBAL VARIABLES
// ==================================================================================================

// Creating an array of languages
var languageArray = ["Javascript", "PHP", "Python", "Pascal", "Cobol", "Ruby", "C", "SQL"];

// Empty string for the computer selected word
var computerChoice = "";

// Breaking the word up by letters in an array
var lettersArray = [];

// Holds the letters the user guessed
var letterGuessed = "";

// The number of blanks we show based on the solution.
var numBlanks = 0;

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
}