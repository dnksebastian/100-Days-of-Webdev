// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

const firstBtn = document.querySelector("button");

//    - Select the second button by using an "id"

const secBtn = document.getElementById("secondBtn");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.

//    - Output the first button by using the variable in which it's stored

function outputFirstBtn() {
  console.dir(firstBtn);
}

firstBtn.addEventListener("click", outputFirstBtn);

//    - Output the second button WITHOUT using the variable in which it's stored

function outputSecondBtn(event) {
  const secBtn = event.target;
  console.dir(secBtn);
}

secBtn.addEventListener("click", outputSecondBtn);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements

const firstPar = document.body.children[2].children[1];
const thirdPar = document.body.children[2].children[3];
console.log(firstPar, thirdPar);

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

// const firstPar = document.getElementById('first-paragraph');
// const firstPar = document.getElementById('third-paragraph');

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function outputFirstBtn() {
  thirdPar.remove();
}

//    - The second button changes the background color of the first paragraph to blue

// function outputSecondBtn() {
//     firstPar.classList.add('blue-background');
// };

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function outputSecondBtn() {
  firstPar.style.backgroundColor = "rgba(11, 67, 151, 0.658)";
}

//-----------------------below is the solution from course:------------------------------

// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

// const firstButtonElement = document.querySelector('button');

//    - Select the second button by using an "id"

// const secondButtonElement = document.getElementById('change-bg-btn');

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.

//    - Output the first button by using the variable in which it's stored

// function removeParagraph(){
// console.dir(firstButtonElement);
// };

// function changeBackgroundColor(event){
//     console.dir(event.target);
// };

// firstButtonElement.addEventListener('click', removeParagraph);
// firstButtonElement.addEventListener('click', changeBackgroundColor);

//    - Output the second button WITHOUT using the variable in which it's stored

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements

// const firstParagraphElement = document.body.children[2].children[1];
// const thirdParagraphElement = document.body.children[2].children[3];
//or
// thirdParagraphElement = firstParagraphElement.nextElementSibling.nextElementSibling;

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

// function removeParagraph() {
//   thirdParagraphElement.remove();
// }

// function changeBackgroundColor(event) {
//   firstParagraphElement.style.backgroundColor = "blue";
//   firstParagraphElement.className = "blue-bg";
//   firstParagraphElement.classList.add('blue-bg');
// }

//    - The second button changes the background color of the first paragraph to blue

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
