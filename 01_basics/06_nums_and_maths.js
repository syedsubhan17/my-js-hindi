const score  = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.6645
// console.log(otherNumber.toPrecision(3));

const hundreads = 1000000
// console.log(hundreads.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,6,8,5,3,7,0));
// console.log(Math.max(2,546,2,6,6654,76));

console.log(Math.random());
console.log(Math.random()*10 + 1)
console.log(Math.random()*100 + 1)
console.log(Math.floor(Math.random()*100) + 1)

const min = 10
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + min)