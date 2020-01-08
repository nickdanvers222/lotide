const eqArrays = function (actual, expected){
    if(actual.toString() === expected.toString()){
        return true;
    }
        return false;
    }
//
const assertArraysEqual = function (actual, expected) {
    if(eqArrays(actual,expected)) { 
        console.log(`😍😍😍Assertion Passed : ${actual} = ${expected}`);
    } else {
        console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
}


const middle = function (array) {
let returnArray = [];

    if(array.length < 3) {
        return [];
    }
    if(array.length % 2 !== 0) {
        let value = Math.floor(array.length/2);
        returnArray.push(array[value]);
        return returnArray;

    } else if(array.length % 2 === 0){
        let value = (array.length/2);
        returnArray.push(array[value-1], array[value]);
        return returnArray;
    }
}

console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
assertArraysEqual(middle([1,2,3]), [1]);

//logic
//if array length is less than 3, were returning an empty array
// if its odd, then .length ="even", so we use Math.floor(array.length/2) to receive the actual middle
//-> push that value to a the new array
// else if its even, then .length ="odd", 
// ---> we want two values, since 
// -----> array.length = 6, (6/2) == 3, however INDEX 3 is equal to position 4
// =====> since we want two, we do value[-1] & value[1] since we're ahead of our index due to the way index' count
