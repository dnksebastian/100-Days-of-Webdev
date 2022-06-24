// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);

// Integers & floats

console.log(10 % 4); // expected remainder is 2
console.log(10 % 3); // expected remainder is 1

console.log(10 + 3 - 5 * 10); // regular math rules apply
console.log((10 + 3 - 5) * 10);

//You can store results in variables
let result = (10 + 3 - 5) * 10;
result = 10 * 4;

result = result + 1;
result++; // same as result = result + 1;
result--; // same as result = result - 1;

result += 5;  // same as result = result + 5;
result -= 5;  // same as result = result - 5;
result /= 5;  // same as result = result / 5;
result *= 5;  // same as result = result * 5;

// String operations

console.log('Max' + ' ' + 'Schwarzmuller'); //concatenations

let userName = 'Max';
console.log(userName.length);
console.log(userName.toLocaleUpperCase());
// various

let a = 'hi' + ' there'; // 'hi there' => a string
let b = 'the number' + ' 2'; // 'the number 2' => a string
let c = 'the number' + 2; // 'the number2' => a string
let d = 2 + 2; // 4 => a number
let e = 2 + '2'; // '22' => a string! (i.e. the number 2 is treated like a string '2' here)
let f = '2' + '2'; // '22' => a string! ('2' and '2' concatenated)
let g = '2' * 3; // 6 => a number

let hobbies = ['Sports', 'Cooking'];
console.log(object);(hobbies.length);