function binarySearch(numArray, key) {
    console.log(numArray, key);
    let midindex = Math.floor(numArray.length / 2);
    let midvar = numArray[midindex];
    console.log(midvar, midindex, "    >>> ");
    if (midvar === key) return true;
    else if (midvar < key && numArray.length > 1) {
        binarySearch(numArray.splice(midindex, numArray.length),key);

    } else if (midvar > key && numArray.length > 1) {
        binarySearch(numArray.splice(0, midindex),key)
    }
    else return false;

}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);