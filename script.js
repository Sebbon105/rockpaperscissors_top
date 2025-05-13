/* Making of the rock paper scissors game */ 
/* First step is to make a function that randomly returns either rock, paper or scissors, as the computers choice */

/* 
This step is step 4. - this just sets the initial score of the scorecounter
*/ 

let humanScore = 0;
let computerScore = 0;


function computersChoice() {
    const random = Math.floor(Math.random() * 3)
                                                            /* This generates a random number, either 0, 1 or 2 */
    
                                                            /* This takes the number generated above and converts its output to a specific string, either: rock paper or scissors */
    if (random === 0){
        return "rock"
    } else if (random === 1) {
        return "paper"
    } else if (random === 2) {
        return "scissors"
    } else {
        return "Answer invalid. Please choose either rock, paper or scissors" 
    }
}

console.log(computersChoice());

/*
1. On start give the user a pop up promt to enter answer
2. take the answer given
3. Console.log the answer 
*/

function humansChoice(a) {
    const answer = window.prompt("Pick your choice for rock paper scissors")
    const trimAnswer = answer.trim().toLowerCase()

    return trimAnswer
}

console.log(humansChoice());

/* 
Create two variables named humanScore and computerScore in the global scope
    This is done in the top of the scope.
*/

function playRound(humansChoice, computersChoice) {
    if (humansChoice === computersChoice) {
        console.log(`You both chose ${humansChoice}, its a DRAW`)
        return;
    }

    
}

console.log(playRound(humanScore, computerScore));

/* 
You will write a function that takes the human and computer player choices as arguments
plays a single round, 
increments the round winner’s score 
and logs a winner announcement.
*/