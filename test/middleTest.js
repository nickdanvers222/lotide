const _ = require("../index");
const assert = require('chai').assert;


describe("middle", () => {
    it("should be 3,4 given [1,2,3,4,5,6]", () => {
        assert.deepEqual(_.middle([1,2,3,4,5,6]), [3,4]);
    })
    it("should be 3 given [1,2,3,4,5", () => {
        assert.equal(_.middle([1,2,3,4,5]), 3);
    })
})