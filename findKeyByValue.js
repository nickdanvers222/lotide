const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😍😍😍Assertion Passed : ${actual} = ${expected}`);
    } else if (actual !== expected) {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };
////////
 const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

const findKeyByValue = function(obj, value) {
    keys = Object.keys(obj);
    for(const genres of keys) {
        if(obj[genres] === value) {
            return genres;
        }
    }
  }

////////




  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);