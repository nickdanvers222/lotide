
const countOnly = function(allItems, itemsToCount) {
    let results = {};
    for(const item of allItems) {
        if(itemsToCount[item]){
            if(results[item]) {
                results[item] += 1;
        }   else {
                results[item] = 1;
        }

    }
        
}
    return results;
}
//
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
    "Fang"
  ];
//

module.exports = countOnly;



                    //"How to use"//
console.log(countOnly(firstNames,({"Karl": true, "Fang": true, "Salima": true})));//
