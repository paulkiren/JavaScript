function sumDigPow(a, b) {
  // Your code here
  let ResultArray = [];
  const getPowers = (num) => num.toString().split('').map(a => parseInt(a, 10)).map((b, index) => Math.pow(b, index + 1)).reduce((acc, item) => acc + item, 0);
  for (let i = a; i <= b; i++) {
    if (getPowers(i) === i) {
      ResultArray.push(i);
    }
  }
  return ResultArray;
}
// console.log( sumDigPow(1,100));

// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function towerBuilder(nFloors) {
  // build here
  const getStar = (item, num) => {
    let n = (((num + 1) * 2) - 1);
    let Space = Math.floor(((((nFloors) * 2) - 1) -n)/ 2);
    let spaceString = new Array(Space).fill(' ').join('');
    let starString = new Array(n).fill('*').join('');
    return "" + spaceString + starString + spaceString;

  }
  return new Array(nFloors).fill('').map((a, index) => getStar(a, index));
 
}


function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

console.log(towerBuilder(4));