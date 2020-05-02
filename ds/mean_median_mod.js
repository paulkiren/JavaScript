// mean_median_mod_range

function getMeanMedianModeRange(numArray) {
    return {
        Mean: getMean(numArray),
        Median: getMedian(numArray),
        Mode: getMode(numArray),
        Range: getRange(numArray)

    }
}


function getMean(numArray) {
    if (numArray.length > 0)
        return (numArray.reduce((a, b) => a + b)) / numArray.length;
    else return false;
}
function getMedian(numArray) {
    numArray = numArray.sort();
    if (numArray.length % 2 !== 0) {
        return numArray[(numArray.length - 1) / 2];
    }
    else {
        let midIndex = numArray.length / 2;

        return (numArray[midIndex] + numArray[midIndex - 1]) / 2;
    }

}
//[13,13,14,15,21 ]The mode is the number that is repeated more often than any other, so 13 is the mode.


function getMode(numArray) {
    let repeatObj = {}
    let maxfrequency = 0;
    let modes = [];
    numArray.forEach(e => {
        if (!repeatObj[e]) repeatObj[e] = 0;
        repeatObj[e] += 1;
    });


    for (const key in repeatObj) {
        if (repeatObj[key] > maxfrequency) {
            modes = [key];
            maxfrequency = repeatObj[key];
        }
        else if (repeatObj[key] === maxfrequency) modes.push(key);
    }
    if (modes.length === Object.keys(repeatObj).length) modes = [];

    return modes
}

//[13,13,14,15,21 ] The largest value in the list is 21, and the smallest is 13, so the range is 21 – 13 = 8.
function getRange(numArray) {
    numArray = numArray.sort();
    return numArray[numArray.length - 1] - numArray[0];

}
console.log(getMeanMedianModeRange([0, 0, 0,1,2,3,4,5,6,7,8,9,9,9,9]));