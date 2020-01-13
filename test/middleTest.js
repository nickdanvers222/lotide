const middle = require("../middle");
const assert = require('chai').assert;


describe("middle", () => {
    it("should be 3,4 given [1,2,3,4,5,6]", () => {
        assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
    })
    it("should be 3 given [1,2,3,4,5", () => {
        assert.equal(middle([1,2,3,4,5]), 3);
    })
})