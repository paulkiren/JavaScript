/*

2.	You have to remove the parentheses and reverse the word inside.  
// foo(bar) => foorab 
// (bar) => rab 
// foo(bar)blim => foorabblim 
// foo(foo(bar))blim => foobaroofblim
*/


function reverseInParentheses(str) {

    while (true) {

        let rightParenthesesIndex = str.indexOf(")");
        if (rightParenthesesIndex === -1) break;
        let leftParenthesesIndex = str.substring(0, rightParenthesesIndex).lastIndexOf("(");
        let start = str.substring(0, leftParenthesesIndex);
        let end = str.substring(rightParenthesesIndex + 1, str.length);
        let middle = str.substring(leftParenthesesIndex + 1, rightParenthesesIndex).split("").reverse().join("");
        str = start + middle + end;
    }
    return str;
}

console.log(reverseInParentheses('foo(foo(bar))blim'));

console.log('foobaroofblim');

console.log(reverseInParentheses('foo(bar)'));
console.log('foorab ');


console.log(reverseInParentheses('(bar)'));
console.log('rab ');