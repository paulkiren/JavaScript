function halvingSums(n) {

    let result = n, value = n, dividedBy = 2;

    while (value > 1) {
        console.log(result, dividedBy);
        value = Math.floor(n / dividedBy);
        console.log(value);
        result += value;
     
        dividedBy *= 2;


    }

    return result;

}

function halvingSum(n) {
    var sum = 0;
    while(n > 0) {
      sum += n;
      n = Math.floor(n / 2);
    }
    return sum;
  }

console.log(halvingSum(25));