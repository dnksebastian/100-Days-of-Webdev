function greetUser (greetingPrefix, userName = 'user') {
    console.log(greetingPrefix + ' ' + userName + '!');
};

greetUser('Hi', 'Max');

//default values
// greetUser (userName = 'user')


// function sumUp(num1, num2, num3) {
//     return num1 + num2 + num3:
// }; //takes list of exactly 3 numbers and adds them. has to take 3 values!

// function sumUp(numbers){
// let result = 0;
// for (const number of numbers) {
//     result += number; // result = result + number
// }
// return result;
// };

// console.log(sumUp([1, 5, 10, 11]));

// rest parameters:

function sumUp(...numbers){
    let result = 0;
    for (const number of numbers) {
        result += number; // result = result + number
    }
    return result;
    };


const inputNumbers = [1, 5, 10, 11, 20, 31];


// ... turns list of values into array
console.log(sumUp(...inputNumbers));


// template literals
console.log(greetingPrefix + ' ' + userName + "!");
// =
console.log(`${greetingPrefix} ${userName}!`);