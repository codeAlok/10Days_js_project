
// Install npm package  (npm i prompt-sync) to take user input

// *** Tasks to be done ***
// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

// ****************** Program Part ****************

// provide a function to take user input
const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: "); // take input as string

        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount deposited, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const depositeAmount = deposit();





// ********** Question to be solve/know more about *******
// 1. Why parseFloat() convert (34dfd) into 34 and throw no error, while show error on (dfd34).
