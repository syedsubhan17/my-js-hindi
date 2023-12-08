

function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     let result = number1 + number2
//     console.log("subhan")
//     return result
//     console.log("subhan")//after return nothing will get print
// }

// addTwoNumber(3, 6) //9
// addTwoNumber(3, "6") //36
// addTwoNumber(3, "a")  //3a
// addTwoNumber(3, null)   // only 3

// const result = addTwoNumber(3,5)
// console.log("Result: ", result);

function loginUserMessage(username = "syed"){
    if(!username){
        console.log("Please enter a user name")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("subhan"))
console.log(loginUserMessage()) // ans will be undefined