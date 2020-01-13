const _ = require('../index');
const assert = require('chai').assert;

describe("#countOnly : 2", () => {
    let firstNames = _.countOnly([
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ], { "Jason": true, "Karima": true, "Fang": true });


    it("Fang should be two if given twice", () => {
        assert.equal(firstNames["Jason"], 1)
    })
})



