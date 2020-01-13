//find key by value
const assert = require('chai').assert;
const _ = require("../index");


describe("#Find Key By Value", () => {
    const bestTVShowsByGenre = { 
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };

    it("Should return 'drama' if given show 'the wire'", () => {
        assert.equal(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    })
})
