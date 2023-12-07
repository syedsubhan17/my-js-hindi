// Singleton

// object literals

const mySum = Symbol("key1")

const jsUser = {
    name:"subhan",
    "full Name": "syed subhan",
    [mySum]: "mykey1",
    age: 22,
    location: "parbhani",
    email: "ssubhan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser.fullName)
// console.log(jsUser[mySum])

jsUser.email = "syedsubhan@google.com"
// console.log(jsUser.email)

// Object.freeze(jsUser) // help to freeza the values
jsUser.email = "subhan@microsft.com"
// console.log(jsUser.email)
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello JS user");
}

jsUser.greeting2 = function(){
    console.log(`hello JS user. ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());