

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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];

    for (let item of array) {
      results.push(callback(item))

    };

  
    return results;
}
console.log(map(words, word => word[0]));

assertArraysEqual(words[0][0], "g");
assertArraysEqual(words[1][0], "c");
