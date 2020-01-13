const _ = require('../index');
const assert = require('chai').assert;

describe("#countLetters " , () => {
    it("Should return h : 2 given the word 'lighthouse'", () => {
        assert.deepEqual(_.countLetters("lighthouse")["h"], 2);
    })
    it("Should return h : 2 given the word 'light house'", () => {
        assert.deepEqual(_.countLetters("light house")["h"], 2);
    })

})