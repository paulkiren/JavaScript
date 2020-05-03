// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

const myJsonObj = {
    myString: "test ing the json",
    myNumber: 9999,
    myNull: null,
    myBoolean: false,
    // myUndefined: undefined,
    myArray: [1, 2, 3, '88'],
    myObject: { "t": "myval" }
};



// const myJsonObj = {
//   myString: [some string],
//   myNumber: [some number],
//   myNull: [null],
//   myBoolean: [false],
//   myUndefined: [undefined],
//   myArray: [some array],
//   myFunction: [some function],
//   myObject: [some object]
// };

function logNumbers() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
  }
   
  logNumbers();