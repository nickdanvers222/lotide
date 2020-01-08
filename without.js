
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

//if(!(arr2.includes{arr1[1]})) === IF THIS IS NOT TRUE
// logic -> if (arr2.includes(arr1[i])) will return false in this code.
//If (not included) then returnArray.push(arr1[i])
// --> this quite effectively adds everything that is not present in array 2
