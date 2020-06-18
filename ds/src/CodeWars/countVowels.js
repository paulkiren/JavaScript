function countVowels(string) {
    //your code here;
    const isVowel = (word) => {
        word = word.toLowerCase();
        const vowels = 'aeiou';
        return word.split('').map(a => vowels.indexOf(a) !== -1 ? 1 : 0).reduce((a, b) => a + b, 0) > 1 ? 1 : 0;
        // return myNumber >
    }
    return string.split(' ').map(a => isVowel(a)).reduce((a, b) => a + b, 0);
}

function countVowels(string) {
    return string.split(' ').filter(w => /[aeiou].*[aeiou]/i.test(w)).length;
  }

  function countVowels(string){
    return string.split(" ").map(word => word.replace(/[^aeiou]/gi, "").length > 1 ? 1 : 0).reduce((a, b) => a += b);
  }

  function countVowels(string){
    vowel = ['a','e','i','u','o','O','A','U','I','E']
    return string.split(' ').filter(x => x.split('').filter(x=>vowel.includes(x)).length>=2).length
  }

console.log(countVowels('help me god'));