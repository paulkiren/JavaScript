
// May 26 2020 Kyklo interview question Print prime numbers between 1-100
function getPrimeNumbersBetween(limit) {
    let primeNumbers = [];
    let counter = 0
    const isPrime = (val) => {
        if (val === 2) {
            counter++;
            return true;
        }
        let ll = Math.floor(val / 2);
        for (let i = 2; i <= ll; i++) {
            counter++;
            if (val % i === 0) return false;
        }
        return true;
    }
    for (let i = 2; i <= limit; i++) {
        counter++;
        if (isPrime(i)) {
            console.log(i)
            primeNumbers.push(i);
        }
    }
    return   primeNumbers;
}

console.log(getPrimeNumbersBetween(1000));