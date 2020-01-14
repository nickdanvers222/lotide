const _ = require('../index');
const assert = require('chai').assert;

describe("#countOnly : 2", () => {
    let firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Fang"
      ];
const results = _.countOnly(firstNames, {"Fang": true, "Salima": true});
    it("Fang should have the value of 2 if its in the object twice", () => {
        assert.equal(results["Fang"], 3);
    });
    it("Salima should have a value of two if key['salima']: 2", () => {
        assert.equal(results["Salima"], 2);
    })

    
  });




