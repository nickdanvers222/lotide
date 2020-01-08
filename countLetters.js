const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😍😍😍Assertion Passed : ${actual} = ${expected}`);
    } else if (actual !== expected) {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${actual}`);
    }
  
  };


  const countLetters = function (sentence) {
    let result = {};
    let newString = sentence.split(" ").join("").toLowerCase();
    for(const count of newString){
        if(result[count]) {
            result[count] += 1;
        } else {
            result[count] = 1;
        }
    }
return result;
  }

  const testCase = countLetters("lighthouse in the house");
  assertEqual(testCase["l"], 1)
  assertEqual(testCase["e"], 3)



  