const assertEqual = function(actual, expected,) {
  
    if (actual === expected) {
      console.log(`😍😍😍Assertion Passed : ${actual} = ${expected}`);
    } else if (actual !== expected) {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
  };
const eqArrays = function (firstActual, secondActual){
    if(firstActual.toString() === secondActual.toString()){
        return true;
    }
        return false;
    }
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
