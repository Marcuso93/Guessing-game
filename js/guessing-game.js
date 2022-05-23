/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

let game =[];
let guesses = 0;
let wrongGuesses = 0;
let gameWinningNumber = generateGameWinningNumber();
let submitBtn = document.querySelector("#submit-btn");
let restBtn = document.querySelector(".reset-btn");

    function  generateGameWinningNumber () {
        let correctNumber = Math.floor(Math.random() *100) + 1;

        return correctNumber;
        
    }
    function shuffle (array) {
        let n = array.length;
        let remainingNum;
        let newIndex;
        while (n) {
            newIndex = Math.floor(Math.random() * n);
            remainingNum = array [n];
            array[n] = array[newIndex];
            array[newIndex] = remainingNum;
        }
        return array;
    }

    submitBtn.addEventListener('click', function() {
        let input = document.querySelector("#guess-input");
        let playerGuess = input.value;
        game.push(playerGuess);

        //console.log(playerGuess); why undefined?

        if (playerGuess < gameWinningNumber) {
            document.getElementsByClassName(".guessMessage").innerText = "You're guessing too low, give another try.";
        }

        if  (playerGuess > gameWinningNumber) {
            document.getElementsByClassName(".guessMessage").innerText = "You're guessing too high, give another try.";
            }
        if  (playerGuess == gameWinningNumber) {
            document.getElementsByClassName(".guessMessage").innerText = "YOU WON!!! You chose the correct number!!!";
        }
        
        else if (playerGuess !==gameWinningNumber) {
            wrongGuesses++;

            if (wrongGuesses ===1) {
                document.querySelector("#guess1").innerText = playerGuess;
            }

            if (wrongGuesses ===2) {
                document.querySelector("#guess2").innerText = playerGuess;
            }

            if (wrongGuesses ===3) {
                document.querySelector("#guess3").innerText = playerGuess;
            }
            if (wrongGuesses ===4) {
                document.querySelector("#guess4").innerText = playerGuess;
            }

            if (wrongGuesses ===5) {
                document.querySelector("guess5").innerText = playerGuess;
                document.getElementsByClassName(".guessMessage").innerText= "Out of Tries. Want to Try Again?"
            }
            
        }
    }
        );   


    // restBtn,addEventListener(click, function() {
    //     this.document. querySelector("#guess1").innerText = "";
    //     this.document. querySelector("#guess2").innerText = "";
    //     this.document. querySelector("#guess3").innerText = "";
    //     this.document. querySelector("#guess4").innerText = "";
    //     this.document. querySelector("#guess5").innerText = "";
    //     this.document. querySelector(".guessMessage").innerText = "";

    // }
    // );

