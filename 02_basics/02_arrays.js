const marvel_heros = ["thor", "ironman", "captain america"]
const dc_heros = ["flash", "superman", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], [6, 7,[4, 5]]]
const realAnoterArray = anotherArray.flat(Infinity);
// console.log(realAnoterArray);

// console.log(Array.isArray("subhan"))
// console.log(Array.from("subhan"))
// console.log(Array.from({name: "subhan"}))   //intresting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

// console.log(Array.of(score1, score2, score3, score4));