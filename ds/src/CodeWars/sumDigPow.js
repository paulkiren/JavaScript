function sumDigPow(a, b) {
    // Your code here
    let ResultArray = [];
    const getPowers = (num) => num.toString().split('').map(a => parseInt(a, 10)).map((b, index) => Math.pow(b, index + 1)).reduce((acc, item) => acc + item, 0);
    for (let i = a; i <= b; i++) {
        if (getPowers(i) === i) {
            ResultArray.push(i);
        }
    }
    return ResultArray;
}
console.log( sumDigPow(1,100));

// https://www.codewars.com/kata/5626b561280a42ecc50000d1