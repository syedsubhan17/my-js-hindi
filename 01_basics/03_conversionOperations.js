let score = 33 // it is a number
let scores = "33" // it is a string

// console.log(typeof score);
// console.log(typeof(score)); // it will give you a number

// console.log(typeof scores);
// console.log(typeof(scores)); // it will give you a string

let scoress = "33abc" //number + string
let valueInNumber = Number(scoress)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //it will give you "NAN" = Not A Number
// JS cant convert string into number, Soo it will provide NAN

let sscore = null;

let sscores = undefined

//conversion of boolean
let isLoggedIn = 1
let boolenIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolenIsLoggedIn);

// 1 =>true; 0=> false
// "" => false
//"subhan" => true

let someNumber = 22
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//*******************OPERATIONS*************************/
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello "
let str2 = "subhan"
str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);