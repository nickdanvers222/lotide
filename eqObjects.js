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
    for(const key of keys1) {
      if(!(key in object2)) {
        return false;  
                
        }
        if (typeof(object1[key]) === "object" && !(Array.isArray(object1[key])) && !null) {
          if (!eqObjects(object1[key],object2[key])) {
            return false
          }
        
        }else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
                if(!(eqArrays(object1[key], object2[key]))){
                    return false;
                };
                
        } else if (!(eqArrays(object1[key], object2[key]))){
            return false;
        }else if (object1[key]!== object2[key]) {
            return false;
        }

          
    }
    return true;
}
 
//  //////
//  const cd = { c: "1", d: ["2", 3] };
//  const dc = { d: ["2", 3], c: "1" };

//const cd = { c: "1", d:["2",3] };
//const dc = { d: ["2",3] , c: "1" };
//
 //eqObjects(cd, dc); // => true
 //
 //const cd2 = { c: "1", d: ["2", 3, 4] };
 //eqObjects(cd, cd2); // => false
//
 // assertEqual(eqObjects(cd, dc), true);
 // assertEqual(eqObjects(cd, cd2), false);

console.log('hey', eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))

assertEqual(true, eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

assertEqual(false, eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
assertEqual(false, eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

