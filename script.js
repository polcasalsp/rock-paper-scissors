let playerScore = 0;
let computerScore = 0;
game()

function computerPlay() {
    let play = Math.floor(Math.random() * 3) + 1;
    if (play==1) {return 'rock'}
    else if (play==2) {return 'paper'}
    else {return 'scissors'}
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { return 'Tie!' }
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {computerScore++; return 'You lose! Paper beats Rock...' }
        else {playerScore++; return 'You Win! Rock beats Scissors!'; }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {computerScore++; return 'You lose! Scissors beats Paper...' }
        else {playerScore++; return 'You Win! Paper beats Rock!' }
    } else {
        if (computerSelection == 'rock') {computerScore++; return 'You lose! Rock beats Scissors...' }
        else {playerScore++; return 'You Win! Scissors beats Paper!' }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt('SCOREBOARD\n'+
                                              'Player: ' +playerScore+'\n'+
                                              'Computer: ' +computerScore+'\n'+
                                              'Select what do you want to play (Rock, paper or Scissors)');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    let winner;
    if (playerScore < computerScore) { winner = 'Computer' }
    else { winner = 'Player'}
    console.log(winner + ' WINS!')
}