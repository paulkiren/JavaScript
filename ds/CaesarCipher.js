
// sample str =kiren, num = 2
// output // mktgp
function CaesarCipher(str, num) {
    num = num % 26;
    let strLower = str.toLowerCase();
    let alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newString = '';
    strLower.split('').forEach((letter, index) => {
        if (alphabetArray.indexOf(letter) === -1) {
            newString += letter;
        } else {
            let currentLetterIndex = alphabetArray.indexOf(letter);
            let newIndex = currentLetterIndex + num;
            if (newIndex > 25) newIndex -= 26;
            if (newIndex < 0) newIndex += 26;
            if (str[index] === str[index].toUpperCase()) {
                newString += str[newIndex].toUpperCase();
            } else newString += alphabetArray[newIndex];
        }

    });
    return newString;


}


console.log(CaesarCipher('kiren', 2));