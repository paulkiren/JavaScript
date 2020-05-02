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

    }
    return FibArray;
}

console.log(getFibonacciNumberUpto(100));


// BigO O(n2)

function fibonacci(position) {
    let a = 0, b = 1;
    if (position < 3)
        return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2)

}
console.log(fibonacci(10));


// Big O O(n)

function fibonacciMem(index, cache) {
    cache = cache || [];
    if (cache[index]) return cache[index];
    else {
        if (index < 3) return 1;
        else {
            cache[index] = fibonacciMem(index - 1, cache) + fibonacciMem(index - 2, cache);
        }
    }
    return cache[index];

}
console.log(fibonacciMem(100));
