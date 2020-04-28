function isPalindrome(input) {
    input = input.replace(/\W/g, '').toLowerCase();
    console.log(input)
    return (input === input.split('').reverse().join(''));
}

console.log(isPalindrome("t malayalam t"))