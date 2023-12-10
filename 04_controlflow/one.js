// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40){
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50")
// }
// console.log("Executed")

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); this is error because of scope

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test 2"); // not industrial standard

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log ("lesss than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("alloe to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in")
}