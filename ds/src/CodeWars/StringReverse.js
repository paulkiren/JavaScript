/*Task 2
Consider examples below
Example 1:
Input: "ekoapp"
Shift steps:
  “pekoap” - shift number one
  “ppekoa” - shift number two
  “appeko” - shift number three
  “oappek” - shift number four
  “koappe” - shift number five
  “ekoapp” - shift number six, final
Output: 1 // Number of times shifted string is equal to original string

Example 2:
Input: "ekoeko"
Output: 2
Write a function
Write a function equalShiftsAmount that:
Takes a string as an argument,
Shifts the string by 1 letter on each loop
Returns the amount of times the shifted string is equal to the original string.
*/
function equalShiftsAmount(input) {
    // Write your code here

    let arr = input.split('');
    for (var i = 0; i <= arr.length; i++) {
        let k = arr.pop();
        arr.unshift(k);
        console.log(arr.join(''), " " + i);
        if (arr.join('') === input)
            return (i==input.length-1)?1:i;
       
    }
}
console.log(equalShiftsAmount("ekoeko"))
