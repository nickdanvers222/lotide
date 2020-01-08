
const eqArrays = function (actual, expected){
    if(actual.toString() === expected.toString()){
        return true;
    }
        return false;
    }

const assertArraysEqual = function (actual, expected) {
    if(eqArrays(actual,expected)) { 
        console.log(`😍😍😍Assertion Passed : ${actual} = ${expected}`);
    } else {
        console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
}

//

const letterPositions = function(sentence) {
    const results = {};
    let newSentence = sentence.toLowerCase();
    let position = 0;
//
    for(const places of newSentence) {
        if(places === " ") {
            position += 1;
        continue;
        } else if(results[places]) {
            results[places].push(newSentence.indexOf(places, position));
        } else {
            results[places] = [newSentence.indexOf(places)];
        }
        position += 1;
    }
    return results;
  };
//
testCase = letterPositions("lighthouse in the house");
assertArraysEqual(testCase["g"], [2]);