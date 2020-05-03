function trippleAdd(num) {
    return function add(n1) {
        return function addT(n2) {
            return n2 + n1 + num;
        }
    }
}


// function trippleAll(num) {
//    return trippleAll( a + num); }

// }
console.log(trippleAdd(1)(2)(3));
