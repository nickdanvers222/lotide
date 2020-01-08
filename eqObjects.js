const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😍😍😍Assertion Passed : ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };
  //
  const eqArrays = function (firstActual, secondActual){
    if(firstActual.toString() === secondActual.toString()){
        return true;
    }
        return false;
    }
  //
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

  const eqObjects = function(object1, object2) {
    if(Object.keys(object1).length !== Object.keys(object2).length){
        return false;

    }
let keys1 = Object.keys(object1);
for(const values of keys1) {
    if(!(values in object2)) {
        return false;  
            
    }
    if (Array.isArray(object1[values]) && Array.isArray(object2[values])) {
            if(eqArrays(object1[values], object2[values])){
                return true;
            };
            
    } else if (!(eqArrays(object1[values], object2[values]))){
        return false;
    };

         
    if (object1[values]!== object2[values]) {
            return false;
    }
 }
    return true;
}
 
//  //////
//  const cd = { c: "1", d: ["2", 3] };
//  const dc = { d: ["2", 3], c: "1" };

const cd = { c: "1", d:["2",3] };
const dc = { d: ["2",3] , c: "1" };

 eqObjects(cd, dc); // => true
 
 const cd2 = { c: "1", d: ["2", 3, 4] };
 eqObjects(cd, cd2); // => false

  assertEqual(eqObjects(cd, dc), true);
  assertEqual(eqObjects(cd, cd2), false);

