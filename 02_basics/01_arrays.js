// Arrays

const myArr = [0 ,1 ,2 ,3 , 4, 5]
const myHeros = ["Iron Man", "Captain America", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//Arrays methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr)


// slice, slpice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1,3) //slpice remove the length you gave
console.log("C", myArr);
console.log(myn2);