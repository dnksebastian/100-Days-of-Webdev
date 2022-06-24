// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for of loop (meant for arrays)

const users = ["Max", "Anna", "Joel"];

for (const user of users) {
  console.log(user);
}

//older version of for-of:
// for (let i = 0; i < someArray.length; i++) {
//     console.log(someArray[i]);
// }

// for in loop (meant for objects)

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
};

// while loop 

let isFinished = false;

while (!isFinished) {
isFinished = confirm('Do you want to quit?');
};
console.log('Done!');