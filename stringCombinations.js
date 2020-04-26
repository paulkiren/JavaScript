 function stringCombinations(str) {
  const res = str.split('');
  const outp = [];
  res.forEach(function(item, index) {
    const sdata = res.slice();
    sdata.splice(index, 1);
    for (var i = 0; i <= sdata.length; i++) {
      if (i !== 0) {
        const d = sdata.shift();
        sdata.push(d);
      }
      const data = item + sdata.join('');
      if (outp.indexOf(data) === -1) outp.push(data);
    }
  });
  return outp.sort();
}
stringCombinations('abc');
// possible output is
// ["abc", "acb", "bac", "bca", "cab", "cba"]
