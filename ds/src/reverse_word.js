function reverseWords(str) {
    let reverseString = [];
    str.split(' ').forEach(word => {
        let Tword = '';
        let lettersArray = word.split('');
        while (lettersArray.length > 0) {
            Tword += lettersArray.pop();

        }
        reverseString.push(Tword);

    });
    return reverseString.join(' ');

}

console.log(reverseWords("Kiren is a hero"));
//neriK si a oreh ''