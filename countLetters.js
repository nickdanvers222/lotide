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

  console.log(countLetters("lighthouse"));

module.exports = countLetters;


  