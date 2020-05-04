function getTotal(a, b) {
    if (b) return a + b;
    else return (c) => { return a + c; }
}

console.log(getTotal(2,3));
console.log(getTotal(4)(5));