const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)


// writing in arrow functions
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0) // ans will be 6
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 999
    },
    {
        itemName: "python Course",
        price: 2999
    },
    {
        itemName: "mobile Course",
        price: 5999
    },
    {
        itemName: "Data science Course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay)