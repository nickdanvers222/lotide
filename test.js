var list = ['My', 'name', 'is', 'Ben'];

list.every(function(elem) {
  console.log(elem); //result: "My","name"
  if (elem === 'name') {return false;}
  return true;
});