const myName = "Max";

if (myName === "Max") {
  console.log("Hello!");
}

//flag variables

let isLoggedIn = true;

if (isLoggedIn === true) {
  console.log("User is logged in!");
}

// can be used like this:

if (isLoggedIn) {
  console.log("User is logged in!");
}

//or (for false value)

if (!isLoggedIn) {
  console.log("User is NOT logged in!");
}

const enteredUserName = "Maximilian";

if (enteredUserName.length > 0) {
  console.log("Input is valid!");
};

// zadziała tak samo:
if (enteredUserName) {
  console.log("Input is valid!");
};

// tak się dzieje ze względu na koncept truthy/faly