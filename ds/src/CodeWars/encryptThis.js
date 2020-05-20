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
    const swap = w => {
        console.log(w);
        if (w.length > 1) {
            let z =  w[1];
            w[1]=w[w.length - 1];
            console.log(w);
            w[w.length - 1] = z;

            console.log(z);
            return w;
        }
    }
    return text.split(' ').map(a => {
        let chars =a.charCodeAt(0);
        return  chars+  swap(a);
    }).join(' ');
}

console.log(encryptThis("Hello"));