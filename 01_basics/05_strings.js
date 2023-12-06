const name = " hitesh "
const repoCount = 50

console.log(name + repoCount + " value")

const gameName = new String('Subhan-SS')
const gameNamee = new String('Subhan-SS-syed-subhan')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,6)
console.log(newString);

const anString = gameName.slice(-6, 6)
console.log(anString);

const newStringOne = "      subhan      "
console.log(newStringOne);
console.log(newString.trimEnd());

const url = "hhtps://githhub.com/syedsubhan017"

console.log(url.replace('syedsubhan', '-'))


console.log(url.includes('SSubhan'))

console.log(gameNamee.split('-'));