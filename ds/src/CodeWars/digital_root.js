// function digital_root(n) {
//     // ...
//     const sum = (value) => parseInt(value.toString().split('').reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0), 10);

//     let myResult = n

//     while (myResult > 10) {
//         myResult = sum(myResult)
//     }
//     return myResult;
// }


// recursive Mode

function digital_root(n) {
    if (n < 10) return n;
   return  digital_root(n.toString().split('').reduce((a, b) =>a+ +b, 0));
}

console.log(digital_root(654));