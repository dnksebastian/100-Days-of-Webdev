const hobbies = ['Sports', 'Cooking']; // a pointer to the array is stored
const age = 32; //the value itself is stored

hobbies.push('Reading'); // the address of the array doesn't change

// hobbies = ['Coding', 'Sleeping']; //not allowed! new address is stored

console.log(hobbies);

//primitive values: numbers, strings, booleans & more (undefined)
// reference values: objects (stored in different kind of computer memory)

const person = {
    age: 32
};

function getAdultYears(p) {
    p.age -= 18;
    return p.age;
    // return p.age - 18;
};

// console.log(getAdultYears({ age: person.age}));
console.log(getAdultYears({ ...person })); //creates a copy of object with same key:value pairs

console.log(person);