// 'use strict'
function counterFunction() {
    let counter = 0;
    return () => ++counter;

}

let myCounter = counterFunction();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());


(function() {
    var x = y = 200;
  })();
   
  console.log('y: ', y);
  console.log('x: ', x);