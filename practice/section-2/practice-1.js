'use strict';

var distinctElement = [];
var output = [];

function countSameElements(collection) {
  for(var i=0; i<collection.length; i++){
    var element = collection[i];
    if (elementIsAppreaed(element)){
          updateCount(element)
    }else{
      distinctElement.push(element)
      createNewKey(element)
    }
  }
  return output
}

function elementFoundInOutput(element){
  if(output.indexOf(element) == -1){
    return false;
  }else{
    return true;
  }
}

function elementIsAppreaed(element){
  if(distinctElement.indexOf(element) == -1){
    return false;
  }else{
    return true;
  }
}

function createNewKey(element){
  var newKey = {key: element, count: 1}
  output.push(newKey)
}

function updateCount(element){
  var originCount = output.find(x => x.key === element).count
  output.find(x => x.key === element).count = originCount + 1
}