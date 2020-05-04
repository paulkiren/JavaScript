function arrayReverse(arr) {
    for (let index = 0; index < arr.length / 2; index++) {
        let element = arr[index];
        arr[index] = arr[arr.length - index - 1];
        console.log(element, arr);
        arr[arr.length - index - 1] = element;

    }


    return arr;

}

console.log(arrayReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));