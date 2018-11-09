'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  var subCollection = collectionB.value;
  for(var i=0; i<collectionA.length; i++){
      var targetValue = collectionA[i].key
      var searchResult = findElementInCollection(targetValue,subCollection);
      if (searchResult != null){
        result.push(searchResult)
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