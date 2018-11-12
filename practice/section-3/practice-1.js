'use strict';

var output = [];

function createUpdatedCollection(collectionA, objectB) {
  for (var i=0; i<collectionA.length; i++){
    var elementA = collectionA[i].key
    if (sreachForObjectValue(elementA, objectB)){
      output.push({key:elementA, count:1})
    }else{
      output.push(collectionA[i])
    }
  }
  return output;
}
function sreachForObjectValue(elementA, objectB){
    if (objectB.value.find(v => v === elementA)){
      return true
    }else{
      return false
    }
  }
