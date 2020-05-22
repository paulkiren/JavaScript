/* 
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" */

var encryptThis = function (text) {
    // Implement me! :)
    // const swap = w => {
    //     let ab = w.split('');
    //     ab[0]= ab[0].charCodeAt(0);
    //     let z = ab[1];
    //     ab[1] = ab[ab.length - 1];
    //     console.log(ab);
    //     ab[ab.length - 1] = z;
    //     return ab.join('');
    // }
    // return text.split(' ').map(a => {
    //     let chars = a.charCodeAt(0);
    //     return  swap(a);
    // }).join(' ');

    return text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) => 
word.charCodeAt(0) + b + mid + a);
}
console.prototype.klog= function() {
    
}

console.log(encryptThis("Hello"));