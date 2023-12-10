// const userEmail = "s@subhan.com"
// const userEmail = ""

const userEmail = []

// if(userEmail) {
//     console.log("got user email");
// } 
// else {
//     console.log("Don't have user email")
// }

// faly values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN;

// truthy Values
// "0", //zero in string is truth value
//  'false', //false in single quote string 
//   " ", string have space is truthy value
//    [], //an empyt array
//    {}, // an empty object
// funtion() {}, an empty function

// if (userEmail.length === 0){
//     console.log("arrays is empty");
// }

const emptyObj = {}
 if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");    
 }

//  Nullish coalescing Operator(??) : null undefined

let val1;
// va1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// terninarry Operators
//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")