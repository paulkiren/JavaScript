function sieveOfEratosthenes(num) {
    let itrLimit = Math.sqrt(num);
    let primeArray = new Array(num + 1).fill(true);
    primeArray[0] = false;
    primeArray[1] = false;
    for (let index = 2; index <= itrLimit; index++) {
        let testVal = 2;
        while (testVal * index <= num) {
            primeArray[testVal * index] = false;
            testVal++;

        }

    }
    return primeArray;
}

const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);


console.log(indexOfAll(sieveOfEratosthenes(20), true));