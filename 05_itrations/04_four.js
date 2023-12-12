const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift fo rapple"
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
} 

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('In', "India")
map.set('USA', "Uniteed States of America")
map.set('Fr', "France")
map.set('In', "India")

for (const key in map) {
    // console.log(key); // not itratable
}