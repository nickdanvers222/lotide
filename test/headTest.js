const assert = require('chai').assert;
const head = require('../head');

describe("head", function() {
    it("Should return the 5 for [5]", function() {
        assert.strictEqual(head([5,4,2]), 5);
    });
    it("should return 1 for [1,3,5]", () => {
        assert.strictEqual(head([1,3,5]), 1);
    })
}) 