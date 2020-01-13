const _ = require('./index');

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


module.exports = eqArrays;