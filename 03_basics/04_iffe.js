// IIFE = Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB CONNECTED`); // this is named iffe
})();

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); // this is simple iffe
} )(`subhan`)