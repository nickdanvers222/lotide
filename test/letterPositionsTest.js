const assert = require('chai').assert;
const _ = require("../index");


describe("#letterPositions", () => {
    testCase = _.letterPositions("lighthouse");
    it("should return the index of the given characters. given lighthouse , l should be equal to 0", () => {
        assert.deepEqual(testCase["g"],[2] )
    })
})


