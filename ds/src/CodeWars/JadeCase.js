/*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org */
// My solution

String.prototype.toJadenCase = function () {
    const capitlizeWord = (str) => {
        let ab = str.split('');
        ab[0] = ab[0].toUpperCase();
        console.loh("My Love", ab);
        return ab.join('');
    
    }
    return this.split(' ').map((s) => { return capitlizeWord(s) }).join(' ');
};
// Better Solution
// String.prototype.toJadenCase = function () {
//     return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
//   };

// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   }

// String.prototype.toJadenCase = function() {
//     return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
//   };

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");


// Slight modification 

String.prototype.toReverseJadenCase = function () {
    const capitlizeWord = (str) => {
        let ab = str.toUpperCase().split('');
        ab[0] = ab[0].toLowerCase();
        return ab.join('');
    }
    return this.split(' ').map((s) => { return capitlizeWord(s) }).join(' ');
};

String.prototype.toCamelCase = function () {
    const capitlizeWord = (str, index) => {
        if (index === 0) return str.toLowerCase()
        let ab = str.toLowerCase().split('');
        ab[0] = ab[0].toUpperCase();
        return ab.join('');
    }
    return this.split(' ').map((s, index) => { return capitlizeWord(s, index) }).join('');
};

// console.log(str.toReverseJadenCase());
// console.log(str.toCamelCase());