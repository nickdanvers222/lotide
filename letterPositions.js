
const letterPositions = function(sentence) {
    const results = {};
    let newSentence = sentence.toLowerCase();
    let position = 0;
//
    for(const places of newSentence) {
        if(places === " ") {
            position += 1;
        continue;
        } else if(results[places]) {
            results[places].push(newSentence.indexOf(places, position));
        } else {
            results[places] = [newSentence.indexOf(places)];
        }
        position += 1;
    }
    return results;
  };

  module.exports = letterPositions;