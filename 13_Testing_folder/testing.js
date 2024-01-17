// mix of values
let arr = ['Javascript', { sitename: 'W3Docs'}, true, function () {
    console.log('welcome');
  }];
  // get the object at index 1 and then show its name
  console.log(arr[1].sitename); // W3Docs
  // get the function at index 3 and run it
  arr[3](); // welcome