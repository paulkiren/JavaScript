function isPalindrome(input) {
    input = input.replace(/\W/g, '').toLowerCase();
    console.log(input)
    return (input === input.split('').reverse().join(''));
}

function isPalindrome_one(input) {
    input = input.toLowerCase();
    let charArray = input.split('');
    let permittedCharsArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let lettersArray = [];
    charArray.forEach(e => {
        if(permittedCharsArray.indexOf(e)>-1) {
            lettersArray.push(e);
        }
    });
 return lettersArray.join('') === lettersArray.reverse().join('') ;
}

console.log(isPalindrome_one("t malayalam t"))