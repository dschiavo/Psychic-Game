//creating variables for wins and losses, they start at 0
var win = 0;
var loss = 0;

//creating variable for guesses left, this starts at 9
var guessesLeft = 9;

//variable for guesses so far
var guessesSoFar = "";

//variable for choices
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//computer generating random letter
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);

//user guessing letter and comparing to computer selected letter

document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        win++;
    }else{
        guessesLeft--;
    }

    if(guessesLeft === 0){
        loss++
    }

    //creating variables to hold references
    var winText = document.getElementById(wins);
    var lossText = document.getElementById(losses);
    var guessesLeftText = document.getElementById(guessesLeft);
    var guessesSoFar = document.getElementById(guessesSoFar);

    //display results
    winText.innerHTML = "Wins: " + wins;
    lossText.innerHTML = "Losses: " +loss;
    guessesLeftText.innerHTML = "Guesses Left: " + guessesLeft;
