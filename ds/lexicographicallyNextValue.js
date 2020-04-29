// Please write the below program in a language of your choice.

// Implement next permutation, which rearranges numbers o the 
//lexicographically next greater permutation of numbers. 
//If such the arrangement is not possible, it must be rearranged as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1, 1, 5 → 1, 5, 1

function getLexicographicallyNextValue(arr) {

    if (arr.length === 1) return arr;
    // to find the index of number which is less than the previous one (right to left)
    let indexOfKeyNumber = -1;
    for (let index = arr.length - 1; index > 0; index--) {
        if (arr[index] > arr[index - 1]) {
            indexOfKeyNumber = index - 1;
            break;
        }
    }
    if (indexOfKeyNumber === -1) return arr.sort();

    // split the arr into two from the keyNumber
    let right = arr.splice(indexOfKeyNumber);
    let keyNumber = right.splice(0, 1)[0];
    right = right.sort();
    // find the numbers in the right array which is just greater than keyNumber
    for (let index = 0; index < right.length; index++) {
        let ele = right[index];
        if (ele > keyNumber) {
            right[index] = keyNumber;
            keyNumber = ele;
            break;
        }
    }
    const ret = arr.concat([keyNumber]).concat(right);
    return ret;

}

//  test

console.log(getLexicographicallyNextValue([1, 2, 3])); // 1,3,2
console.log(getLexicographicallyNextValue([3, 2, 1])); // 1,2,3
console.log(getLexicographicallyNextValue([1, 1, 5])); // 1,5,1



