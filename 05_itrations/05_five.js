const coding = ["js", "ruby", "java", "cpp", "python"]

coding.forEach( function (item) {
    // console.log(item);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)


//******************************************************************************************************************************************************************************************************************************************************************** */
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "pyton",
        languageFileName: "py",
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
})