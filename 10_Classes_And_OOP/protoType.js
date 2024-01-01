// let myName = "subhan     "
// let myChannel = "chai    "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    grtSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.subhan = function() {
    console.log(`subhan is present in all objects`);
}

Array.prototype.heySubhan = function(){
    console.log(`Subhan says hello`);
}

// heroPower.subhan()
myHeros.subhan()
myHeros.heySubhan()
// heroPower.heySubhan()


// INHERITANCE  

const User = {
    name: "subhan",
    email: "subhan@microsoft",
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignmnet: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//mordern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "SyedSubhan     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"subhan".trueLength()
"SyedTahairSubhan".trueLength()