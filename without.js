
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


const without = function(arr1,arr2) {
    let returnArray = [];
    for(let i = 0; i < arr1.length;i++) {
        if(!(arr2.includes(arr1[i]))) {
            returnArray.push(arr1[i]);
        }
    }
    return returnArray;
}

assertArraysEqual(without(["1","2","3"],["1"] ),["2","3"] )