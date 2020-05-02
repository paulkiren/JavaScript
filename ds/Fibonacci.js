//1,1,2,3,4,5,8,


// print fibonacci numbers till 100

function getFibonacciNumberUpto(num) {

    let a = 0, b = 1;
    let FibArray = [];
    FibArray.push(a);
    FibArray.push(b);

    while (a + b < num) {
        let sum = a + b;
        FibArray.push(sum);
        a = b;
        b = sum;
        console.log(a);

    }
    return FibArray;
}

console.log(getFibonacciNumberUpto(100));