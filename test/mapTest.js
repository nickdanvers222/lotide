const _ = require("../index");
const assert = require("chai").assert;

describe("# Map", () => {
    let words = ["ground", "control", "to", "major", "tom"]

    it("Should return the first character of the arrays", () => {
        assert.equal(_.map(words, word => word[0]), "g,c,t,m,t" )
    })
})

