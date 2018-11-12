'use strict';

var distinctElement = [];
var output = [];

function countSameElements(collection) {
  for(var i=0; i<collection.length; i++){
    var element =collection[i]
    if (elementContainCount(element)){
      var splitedStr = element.split("-")
      element = splitedStr[0]
      var count = splitedStr[1]
      createNewKeyWithCount(element, count)
    }
    else{
      if (elementIsAppreaed(element)){
        updateCount(element)
      }else{
        distinctElement.push(element)
        createNewKey(element)
      }
    }
  }
  console.log(output)
  return output
}

function elementContainCount(element){
  if(element.includes("-")){
    return true
  }else{
    return false
  }
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

function createNewKeyWithCount(element, count){
  var newKey = {key: element, count: parseInt(count)}
  output.push(newKey)
}

function createNewKey(element){
  var newKey = {key: element, count: 1}
  output.push(newKey)
}

function updateCount(element){
  var originCount = output.find(x => x.key === element).count
  output.find(x => x.key === element).count = originCount + 1
}