// TwoSum
function twoSum(numArray, sum) {


    // BIG O O(n2);

    sumArrau = []
    // for (let i = 0; i < numArray.length; i++) {
    //     for (let j = 0; j < numArray.length; j++) {
    //         if (i == j) continue;
    //         if (numArray[i] + numArray[j] === sum)
    //             sumArrau.push([numArray[i], numArray[j]])
    //     }

    // }

    // Big O  O(n)
    let hashTable = [];
    numArray.forEach((currEle, index) => {
        const counterPart = sum - currEle;
        if (hashTable.indexOf(counterPart) !== -1) {
            sumArrau.push([currEle, counterPart]);

        }

        hashTable.push(currEle);
        console.log(sumArrau, hashTable);

    });
    return sumArrau;
}

console.log(twoSum([5,2, 1, 2, 2, 3, 4, 5, 5,], 7));

// output [ [ 4, 3 ], [ 5, 2 ] ]