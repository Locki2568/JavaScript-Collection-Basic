'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  for(var i=0; i<collectionA.length; i++){
      var subCollection = collectionB.value;
      var searchResult = findElementInCollection(collectionA[i],subCollection);
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
