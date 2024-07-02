const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
};

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};

//funtion to deposite some money
const deposite = () => {
    while (true) {
        const depositeAmount = prompt("Enter a deposite Amount: ");
        const numberDepositeAmmount = parseFloat(depositeAmount);

        if (isNaN(numberDepositeAmmount) || numberDepositeAmmount <= 0) {
            console.log("Invalid deposite amount, pls try again");
        } else {
            return numberDepositeAmmount;
        }
    }
};

//function to get number of lines
const getNumberOfLines = () => {

    while (true) {
        const lines = prompt("Entet the Number of Lines (1-3): ")
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, pls try again ");
        } else {
            return numberOfLines;
        }
    }
}

//function to validate the bet
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet Amount: ");
        const betAmount = parseFloat(bet);
        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / lines) {
            console.log("Invalid bet, try again ");
        } else {
            return betAmount;
        }
    }

}

const spin = () => {
    const symblols = [];

    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symblols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symblols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
return reels;
};

let balance = deposite();
const numberOfLines = getNumberOfLines();
const betAmount = getBet(balance, numberOfLines);
const reels = spin();
