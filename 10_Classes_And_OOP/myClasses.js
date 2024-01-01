// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encyptPassword(){
//         return `${this.password} abc`
//     }

//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "1234")

// console.log(chai.encyptPassword());
// console.log(chai.changeUsername());

//behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encyptPassword = function(){
    return `${this.password} abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("TEA", "chai@gmail.com", "1234")

console.log(tea.encyptPassword());
console.log(tea.changeUsername());