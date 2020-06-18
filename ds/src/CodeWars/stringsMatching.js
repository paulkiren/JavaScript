function worries(str) {
  //....

  const setOfStrings = ["Making last-minute changes",
    "Sitting in a dark room and shaking",
    "Crying",
    "Laughing hysterically",
    "Not eating"];

  console.log("test");
  let isTrue = false;
  setOfStrings.forEach(a => { console.log(a); if (str === a) isTrue = true; })
  return isTrue ? "Stop worrying, everything will be all right!" : "Do you really care?"
}
function worries(str) {
  const input = [
    "Making last-minute changes",
    "Sitting in a dark room and shaking",
    "Crying",
    "Laughing hysterically",
    "Not eating"
  ];

  return input.includes(str)
    ? "Stop worrying, everything will be all right!"
    : "Do you really care?";
}
function worries(str) {
  switch (str) {
    case 'Making last-minute changes':
    case 'Sitting in a dark room and shaking':
    case 'Crying':
    case 'Laughing hysterically':
    case 'Not eating':
      return 'Stop worrying, everything will be all right!'
      break
    default:
      return 'Do you really care?'
  }

}

console.log(worries('sss'));