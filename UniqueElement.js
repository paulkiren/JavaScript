// Write a function to return an element that appears only once in a given array.
// Input: [10, 1, 10, 3, 10, 1, 1, 2, 3, 3,69]
// Output: 2,69

// Please note that the function should be a javascript code
function getUniqueElementsFromArray(myArray) {
  let uniqueArray = [];
  myArray.forEach(function(item, index) {
    let intermediateArray = myArray.slice();
    if (intermediateArray.splice(index, 1).indexOf(item) === -1)
      uniqueArray.push(item);
  });
  console.log("Output", uniqueArray);
  return uniqueArray;
}
getUniqueElementsFromArray([10, 1, 10, 3, 10, 1, 1, 2, 3, 3, 69]);