// Write an algorithm that takes an array and moves all of the zeros to the end, 
//preserving the order of the other elements.

var moveZeros = function (arr) {
    // TODO: Program me
    // let zeroArray = [];
    // let nonZeroArray = []
    // arr.forEach((element, index) => {
    //     if (element === 0) { zeroArray.push(element) }
    //     else nonZeroArray.push(element);
    // });
    // return nonZeroArray.concat(zeroArray);
  return  arr.filter((item)=>item!==0).concat(arr.filter(item=>item===0));
}


// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9]));
console.log(moveZeros(["a", 0, "b", "c", "d", 1, 1, 3, 1, 9, 0, 0, 9]));
console.log(moveZeros(["a", 0, "b", null, "c", "d", 1, false, 1, 3, [], 1, 9, 0, {}, 0, 9]));
