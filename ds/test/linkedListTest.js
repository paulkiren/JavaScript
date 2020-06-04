var assert = require('assert');
var LL = require('../src/linkedlist.js');
let LL = new LinkedList();
describe('LinkedList', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            let LL = new LinkedList();
            LL.addToHead(1000);

            assert.equal(LL.indexOf(1000), 0);
        });
    });
});