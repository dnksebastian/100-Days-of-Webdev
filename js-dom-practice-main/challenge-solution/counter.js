const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//let maxAllowedChars = productNameInputElement.maxLength; - bonus. extract the maxlength attribute value from html

function updateRemainingCharacters(event) {
const enteredText = event.target.value;
const enteredTextLength = enteredText.length;

const remainingCharacters = 60 - enteredTextLength;
// const remainingCharacters = maxAllowedChars - enteredTextLength; -if we dont want it to be hardcoded

remainingCharsElement.textContent = remainingCharacters;

}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
