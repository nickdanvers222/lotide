const assert = require('chai').assert;
const _ = require("../index");


describe("#Flatten" , () => {
    it("Should return [1,2,3,4,5,6] if given [1,2,[3,4],5,[6]]" , () => {
        assert.deepEqual(_.flatten([1,2,[3,4],5,[6]]), [1, 2, 3, 4, 5, 6])
    })
})