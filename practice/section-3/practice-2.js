'use strict';

var output = [];

function createUpdatedCollection(collectionA, objectB) {
  for (var i=0; i<collectionA.length; i++){
    var elementA = collectionA[i].key
    var countA = parseInt(collectionA[i].count)
    if (sreachForObjectValue(elementA, objectB)){
      countA = minus1ForEvery3(countA)
      output.push({key:elementA, count:countA})
    }else{
      output.push(collectionA[i])
    }
  }
  console.log(output)
  return output;
}

function minus1ForEvery3(countA){
  var count = countA
  var numOfminus1 = 0
  if(countA < 3){
    return countA
  }else{
    while(count >= 3){
      numOfminus1 += 1 
      count -=3
    }
    return countA + (numOfminus1 * -1)
  }
}

function sreachForObjectValue(elementA, objectB){
    if (objectB.value.find(v => v === elementA)){
      return true
    }else{
      return false
    }
  }
