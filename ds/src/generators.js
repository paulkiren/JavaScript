function* customGenerator() {
  yield 1;
  yield 2;
  yield 3; 
}

let getIterator = customGenerator();

let firstValue = getIterator.next();

console.log(firstValue);  
