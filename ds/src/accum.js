// function accum(s) {
//     // your code
//     s = s.toLowerCase();
//    return [...s].map((ch, index) => {
//         let initilCahr = ch.toUpperCase();
//         while (index > 0) {
//             initilCahr += ch;
//             index--;
//         }
//         return initilCahr;
//     }).join('-');
// }

function accum(s) {
    return [...s].map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}

function findShortWordLenghth(s) {
    return Math.min(...s.split(" ").map (s => s.length))
    
    // s.split(' ').sort((a, b) => {
    //     const aa = parseInt(a.length)
    //     const bb = parseInt(b.length);
    //     if (aa < bb)
    //         return -1;
    //     return 1
    // })[0].length;
}

console.log(findShortWordLenghth('MadeSafeCoin Dogecoin Lisk Steem ProofOfStake Classic ProofOfStake BTC Dash Dogecoin Dash MadeSafeCoin Waves'));