const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error! Please type rock, paper, or scissors!');
    };
}
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You lost to the Computer!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') { //where is the closing brace for this block?
        if (computerChoice === 'scissors') {
            return 'You lost to the Computer!';
        } else {
            return 'You won!';
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'You lost to the Computer!';
            } else {
                return 'You won!';
            }
        }
        if (userChoice === 'bomb') {
            return 'You Win, Cheater!';
        }
    } //found it! 
}

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('I choose you: ' + userChoice);
    console.log('The Computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice))
};


playGame();