const assertEqual = require('./assertEqual');


  const head = function(array) {
        return array[0];
  }

 // assertEqual(head([5]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log(head([5,3,2]))


module.exports = head;