//Primitive

// 7Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const oustsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 545489750980582n //this 'samll n' is used as bigInt

// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["tony", "steve", "clint", "bruse", "thor"];
let myObj = {
    name: "subhan",
    age:22,
}

const myFunction = function(){
    console.log("Hey Subhan");
}

console.log(typeof myFunction)