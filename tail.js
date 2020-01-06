const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed : ${actual} = ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${actual}`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  let secondArray = [];
  for (let i = 0; i < newArray.length; i++) {
    secondArray[i] = newArray[i];
  }
  console.log(secondArray);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!