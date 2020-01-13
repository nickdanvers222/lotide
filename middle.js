const _ = require('./index');

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
module.exports = middle;
