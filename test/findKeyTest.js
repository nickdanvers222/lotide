const assert = require('chai').assert;
const _ = require("../index");


describe("#findKey", () => {
    let example = {
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }
    it("Given two stars, should return name 'noma'", () => {
        assert.equal(_.findKey(example, x => x.stars === 2), "noma")
    })

})