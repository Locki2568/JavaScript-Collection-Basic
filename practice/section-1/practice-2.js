'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  for(var i=0; i<collectionA.length; i++){
    for(var j=0; j<collectionB.length; j++){
      var subCollection = collectionB[j];
      var searchResult = findElementInCollection(collectionA[i],subCollection);
      if (searchResult != null){
        result.push(searchResult)
      }
    }
  }
  return result;
}

function findElementInCollection(target, subCollection){
  for(var i=0; i<subCollection.length; i++){
      if(subCollection[i] === target){
        return target;
      }
  }
  return null;
}
