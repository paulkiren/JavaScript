//Problem :
//Input :  [7, 9, 990, 908, 72, 2, 3, 24, 26]
// Output: // expected Output : 9909089727326242

function ConcatElementsOfArray(aI) {
  const cData = aI
    .map(a => a.toString())
    .sort((a, b) => a < b)
    .join('');
  return parseInt(cData);
}
ConcatElementsOfArray([7, 9, 990, 908, 72, 2, 3, 24, 26]);
