const user = {
    username: "subhan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //this is used for current context
    }

}

// user.welcomeMessage()
// user.username = "syed"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "subhan"
//     console.log(this.username); // this will give you undefined
// }

// chai()

const chai = () => {
    let username = "subhan"
    console.log(this);
}

// chai()

// const addTwo = (num1, numb2) => {
//     return num1 + numb2
// }

// const addTwo = (num1, numb2) => num1 + numb2

// const addTwo = (num1, numb2) => (num1 + numb2)

const addTwo = (num1, numb2) => ({username: "subhan"})

console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()