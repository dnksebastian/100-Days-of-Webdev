// 1. Select the x span
let remainingChar = document.getElementById('counter');
let userInput = document.querySelector('input')

// 2. This retrieves the length of user input, calculates remaining characters and puts the result in a span
function calculateUserInput() {
    let enteredTextLength = userInput.value.length;
    let charactersLeft = 60 - enteredTextLength;
    remainingChar.textContent = charactersLeft;

    if (remainingChar.textContent <= 20) {
        userInput.classList.add("warning-background");
        }
        else {
        userInput.classList.remove("warning-background");
        };
};

userInput.addEventListener('input', calculateUserInput);


// 3. Bonus feature: changing the background color of input field when user is close to reaching character limit



