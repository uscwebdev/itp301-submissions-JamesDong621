document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const message = document.getElementById('message');
    const diceImages = document.querySelectorAll('.dice');

    submitBtn.addEventListener('click', () => {
        const userGuess = parseInt(userInput.value);
        const randomNumbers = rollDice();

        displayDiceValues(randomNumbers, diceImages);
        displayMessage(randomNumbers, userGuess, message);
    });
});

function rollDice() {
    let numbers = [];
    for(let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 6 + 1));
    }
    return numbers;
}

function displayDiceValues(randomNumbers, diceImages) {
    for(let i = 0; i < randomNumbers.length; i++) {
        diceImages[i].src = `dice_images/${randomNumbers[i]}.png`;
    }
}

function displayMessage(randomNumbers, userGuess, message) {
    if(randomNumbers.includes(userGuess)) {
        message.textContent = 'Success! You guessed correctly.';
        message.classList.add('success');
        message.classList.remove('error');
    } else {
        message.textContent = 'Error! No match found.';
        message.classList.add('error');
        message.classList.remove('success');
    }
}
