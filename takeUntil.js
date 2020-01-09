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




var list = ['My', 'name', ' ', 'is', 'Ben'];
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//
const takeUntil = function(list, callback) {
    let results = [];
    for(const words of list) {
        if(callback(words)){
            break;
        }
        else {
            results.push(words);
        }
    
  }
    return results

}


console.log(takeUntil(list,x => x === " "));
console.log(takeUntil(data1, x => x < 0));
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2])