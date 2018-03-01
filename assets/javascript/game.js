// Array of words 
var words = ["bracket",
"tarheels",
"ncaa",
"kentucky",
"duke",
"upset",
"tournament",
"basketball",
"college",
"villanova",
"louisville",
"connecticut",
"kansas"];

// answer
var answer = '';
var answerDisplay = [];

// wins /losses/ remaining guesses
var wins = 0;
var winCounter= 0;
var losses = 0;
var remainingGuesses = 15;

// letters
var letterList = 'abcdefghijklmnopqrstuvwxyz'.split('');

// other variables
var missedGuesses = [];
var userGuess;
var remianingLetters;


// Functions

function getWord() {

    // pick random word
    answer = words[Math.floor(Math.random() * words.length)];
    console.log(answer);

    // Set up answer after word is picked
    for (var i = 0; i < answer.length; i++) {
        answerDisplay.push('_');
    }

}

// Restart when game is over
function restartGame () {
    getWord();
    remainingGuesses = 15;
    missedGuesses = [];
    // answerDisplay = [];
}

// wins/losses
function gameResults(){
    if (winCounter === answer.length) {
        alert("Nice win! Keep going for a National Championship!")
        wins++;
        getWord();
    }
    else if (remainingGuesses === 0) {
            alert("You have been eliminated! Better luck next time!");
            losses++;
            getWord();
        }
}

// Show progress
function update(){
    for (var j = 0; j < answer.length; j++) {
        if (answer[j] === userGuess){
            answerDisplay[j] = userGuess;
            console.log(answerDisplay);
            winCounter++;
            gameResults();
        }   
    }
}


// Display to HTML
getWord();
document.querySelector("#wins").innerHTML = ""  + wins;
document.querySelector("#losses").innerHTML = ""  + losses;
document.querySelector("#remainingGuesses").innerHTML = ""  + remainingGuesses;
document.querySelector("#gameBoard").innerHTML = answerDisplay.join(" ");

//Main function

// This function is run whenever the user presses a key

//Take player guess
document.onkeyup = function(event) {

    // Determines which key was pressed
    userGuess = event.key;
    console.log(userGuess);

    // Determines if guess is in the answer
    if (answer.indexOf(userGuess) > -1) {
        update();
        console.log("correct letter");
    }
    else {
        missedGuesses.push(userGuess);
        console.log(missedGuesses);
        remainingGuesses--;
        gameResults();
    }

    // Ensure player guess is a valid letter 
    if (letterList.indexOf(userGuess) === -1){
        alert ("Foul! LETTERS ONLY! The other team is shooting free throws!");
    }

    // if (remainingGuesses === 10) {
    //     alert("There's still plenty of time on the clock!");
    // }

    // if (remainingGuesses === 5) {
    //     alert("Halftime is over! You need to make shots!");
    // }

    // if (remainingGuesses === 2) {
    //     alert("It's a close game! You can do it!");
    // }

    document.querySelector("#wins").innerHTML = ""  + wins;
    document.querySelector("#losses").innerHTML = ""  + losses;
    document.querySelector("#remainingGuesses").innerHTML = ""  + remainingGuesses;
    document.querySelector('#incorrectLetters').innerHTML = missedGuesses.join(" , ");
    document.querySelector("#gameBoard").innerHTML = answerDisplay.join(" ");

}



    

  










