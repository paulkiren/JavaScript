function digital_root(n) {
    // ...
    const sum = (value) => parseInt(value.toString().split('').reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0), 10);

    let myResult = n

    while (myResult > 10) {
        myResult = sum(myResult)
    }
    return myResult;
}

console.log(digital_root(456));