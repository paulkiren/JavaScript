/*
1.	You have to group the below words by having the same letter but different position
Given these 15 words
['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']
 
Print something like
ALEXIS - XISELA
AMOR - ROMA - OMAR - MORA - RAMO - ARMO - MARO - ORAM
MONJA - JAMON - MOJAN
ESPONJA - JAPONES

*/

function printgroupedWords(wordArray) {
    const sortAlphabets = function (text) {
        return text.split('').sort().join('');
    };


    let groupedWordArray = {};
    wordArray.forEach((item) => {
        let sortedWord = sortAlphabets(item);
        let groupedItems = []
        if (groupedWordArray[sortedWord]) {
            groupedItems = groupedWordArray[sortedWord];
        }
        groupedItems.push(item);
        groupedWordArray[sortedWord] = groupedItems;
    });
    Object.values(groupedWordArray).forEach((item) => {
        console.log(item.join(' - '));
    });
}

const wordArray = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR',
    'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN',
    'MARO', 'ORAM', 'MONJA', 'ALEXIS'];


printgroupedWords(wordArray);