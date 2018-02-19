function ConcatElementsOfArray(arrayInput) {
    // sort to find the largest number
    const data = arrayInput.sort((a, b) => a < b);
    const largeData = data[0].toString().length;
    const reducer = (previousValue, currentValue) => {
      return previousValue.toString() + '' + currentValue.toString();
    };
    const cData = data
      .map(a =>
        // to make the positional Value correct
        ({ data: a * Math.pow(10, largeData - a.toString().length), original: a })
      )
      .sort((a, b) => a.data < b.data)
      .map(a => a.original)
      .reduce(reducer);
    return parseInt(cData);
  }
  
 ConcatElementsOfArray([7, 9, 990, 908, 72, 2, 3, 24, 26]);
 // expected Output : 9909089727326242
  