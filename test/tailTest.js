const assert = require('chai').assert;
const _ = require("../index");


describe("tail", () => {
    it("Should return [2,3,4,5] given [1,2,3,4,5]", () => {
        assert.deepEqual(_.tail([1,2,3,4,5]), [2,3,4,5])
    })
})