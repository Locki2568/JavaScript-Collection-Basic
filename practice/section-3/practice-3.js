'use strict';


var summary = [];
var output = [];
var distinctElement = [];

function createUpdatedCollection(collectionA, objectB) {
  countElement(collectionA)
  console.log(summary)
  for (var i=0; i<summary.length; i++){
    var elementA = summary[i].key
    var countA = parseInt(summary[i].count)
    if (sreachForObjectValue(elementA, objectB)){
      countA = minus1ForEvery3(countA)
      output.push({key:elementA, count:countA})
    }else{
      output.push(summary[i])
    }
  }
  return output
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

function countElement(collectionA){
  for(var i=0; i<collectionA.length; i++){
    var element = collectionA[i]
    if (isElementDistinct(element)){
      distinctElement.push(element)
      summary.push({key: element, count: 1})
    }else{
      updateCount(element)
    }
  }
}

function isElementDistinct(element){
  if(distinctElement.indexOf(element) != -1){
    return false
  }else{
    return true
  }
}

function updateCount(element){
  var originCount = summary.find(x => x.key === element).count
  summary.find(x => x.key === element).count = (originCount + 1)
}