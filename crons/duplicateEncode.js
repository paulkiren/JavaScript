function duplicateEncode(word) {
    // ...
    word = word.toLowerCase();
    const charHash = {};
    word.split('').forEach((letter) => {
        if (!charHash[letter]) {
            charHash[letter] = 0;
        }
        charHash[letter] += 1;
    });
    return word.split('').map((letter) => {
        if (charHash[letter] == 1) return '(';
        else return ')';
    }).join('');
}

console.log(duplicateEncode('din'));