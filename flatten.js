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




const flatten = function (longArray) {
    let newArray = [];
    for(let i = 0; i < longArray.length; i++) {
            if(Array.isArray(longArray[i])) {
                for(let j = 0; j < longArray[i].length; j++) {
                
                newArray.push(longArray[i][j]);
                }
            } else {
                newArray.push(longArray[i]);
            }
        
    } return newArray;
}

console.log(flatten([1,2,[3,4],5,[6]]));