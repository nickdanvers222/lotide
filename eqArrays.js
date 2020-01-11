const assertEqual = function(actual, expected,) {
  
    if (actual === expected) {
      console.log(`😍😍😍Assertion Passed : ${actual} = ${expected}`);
    } else if (actual !== expected) {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const eqArrays = function (firstActual, secondActual){
for (let i = 0; i < firstActual.length; i++) {
  if(Array.isArray(firstActual[i]) && Array.isArray(secondActual[i])) {
     if(!(eqArrays(firstActual[i],secondActual[i]))) {
       return false;
     }
    } 
    if(Array.isArray(firstActual[i]) && !Array.isArray(secondActual[i])) {
      return false;
    }
    else if (!Array.isArray(firstActual[i]) && Array.isArray(secondActual[i])) {
      return false;
    }

  }
  if (firstActual.toString() !== secondActual.toString()){
    return false; 
  }
      return true;

}


assertEqual(eqArrays([[2, 3], [4]],[[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]],[[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]],[[2, 3], 4]), false) // => false