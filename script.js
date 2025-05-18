function getComputersChoice(){
    const random = Math.floor(Math.random() *3) +1;

    if (random === 1){
        return "rock"
    } else if (random === 2){
        return "paper"
    } else {
        return "scissors"
    }

}


function getHumanChoice(){
    let input = prompt("Type your answer here");

    return input.toLowerCase();
}


function playGame(){
    let scoreHuman = 0;
    let scorePc = 0;

    function playRound(){
    const human = getHumanChoice();
    const pc = getComputersChoice();

    if (human === pc) {
        console.log(`Human and pc both chose ${human} - its a DRAW`);
    } else if (
        human === "rock" && pc === "scissors" ||
        human === "scissors" && pc === "paper" ||
        human === "paper" && pc === "rock"
    ) {
        console.log(`Human wins! - ${human} beats ${pc}`);
        scoreHuman++;
    } else {
        console.log(`Pc wins! - ${pc} beats ${human}`)
        scorePc++;
    }

    const scoreTable = `The score is now --> Human:${scoreHuman} - PC: ${scorePc}`;

    console.log(scoreTable);
}

playRound();
playRound();
playRound();
playRound();
playRound();
}

playGame();

