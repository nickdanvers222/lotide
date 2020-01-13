  const findKey = function (object,callback) {
    for(const shows in object){
        if(callback(object[shows])) {
            return shows;
        }
    }
  }

module.exports = findKey;