// // bad
// const inherits = require('inherits');
// function PeekableQueue(contents) {
//     Queue.apply(this, contents);
// }
// inherits(PeekableQueue, Queue);
// PeekableQueue.prototype.peek = function () {
//     return this.queue[0];
// };

// // good
// class PeekableQueue extends Queue {
//     peek() {
//         return this.queue[0];
//     }
// }


var a=2,b=5, c=11;
var ArrayVal=[a++,++a,++b,--b,c++];
console.log(a,b,c ,ArrayVal);

function ab(){
    return 9;
}
let x= ab();
console.log((x+1)==10)

