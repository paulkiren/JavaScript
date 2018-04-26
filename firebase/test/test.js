var assert = require('assert');
var  as = require('../../stringCombinations');
describe('as', function() {
  describe('#stringCombinations()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(stringCombinations("aaa"), ["aaa"]);
    });
  });
});
