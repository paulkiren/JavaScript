function caesarCipher(s, k) {
    k = k % 26;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let strSmall = s.split('');
    let resultString = '';
    strSmall.forEach((letter, index) => {
        let alphabetIndex = alphabets.indexOf(letter.toLowerCase());
        let alp = (letter != alphabets[alphabetIndex]);
        if (alphabetIndex === -1) {
            resultString += letter;
        }
        else {
            if (alphabetIndex + k > 25) {
                alphabetIndex = (alphabetIndex + k) % 26;
            }
            else if (alphabetIndex + k < 0) {
                alphabetIndex = 26 + (alphabetIndex + k) % 26;
            }
            else {
                alphabetIndex = alphabetIndex + k;
            }
            if(alp)
                resultString += alphabets[alphabetIndex].toUpperCase();
            else
                resultString += alphabets[alphabetIndex];
        }


    });

    return resultString


}


console.log(caesarCipher('kiren-OZa', -1));