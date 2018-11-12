'use strict';

var distinctElement = [];
var output = [];

function countSameElements(collection) {
  for(var i=0; i<collection.length; i++){
    var element = collection[i]
    var count;
    if (elementContainCount(element)){
      element = getElmentFromEntry(collection[i])
      count = getCountFromEntry(collection[i])
      if(elementIsAppreaed(element)){
        updateCountWithCount(element,count)
      }else{
        distinctElement.push(element)
        createNewKeyWithCount(element,count)
      }
    }else{
      if(elementIsAppreaed(element)){
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

function getElmentFromEntry(element){
  var element;
  if (element.includes("-")){
    var splitedStr = element.split("-")
    element = splitedStr[0]
  }else if (element.includes(":")){
    var splitedStr = element.split(":")
    element = splitedStr[0]
  }else if (element.includes("[")){
    var splitedStr = element.split("[")
    element = splitedStr[0]
  }
  return element
}

function getCountFromEntry(element){
  var count;
  if (element.includes("-")){
    var splitedStr = element.split("-")
    count = splitedStr[1]
  }else if (element.includes(":")){
    var splitedStr = element.split(":")
    count = splitedStr[1]
  }else if (element.includes("[")){
    var splitedStr = element.split("[")
    var endOfNumber = splitedStr[1].indexOf("]")
    count = splitedStr[1].substring(0,endOfNumber)
  }
  return parseInt(count)
}

function findAndGenerateEntry(element){
  var element;
  var count;
  if (element.includes("-")){
    var splitedStr = element.split("-")
    element = splitedStr[0]
    count = splitedStr[1]
  }else if (element.includes(":")){
    var splitedStr = element.split(":")
    element = splitedStr[0]
    count = splitedStr[1]
  }else if (element.includes("[")){
    var splitedStr = element.split("[")
    element = splitedStr[0]
    count = splitedStr[1].charAt[0]
  }
  createNewKeyWithCount(element, count)
}

function elementContainCount(element){
  if(element.includes("-") || element.includes(":") || element.includes("[")){
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
  var newKey = {name: element, summary: parseInt(count)}
  output.push(newKey)
}

function createNewKey(element){
  var newKey = {name: element, summary: 1}
  output.push(newKey)
}

function updateCount(element){
  var originCount = output.find(x => x.name === element).summary
  output.find(x => x.name === element).summary = parseInt(originCount + 1)
}

function updateCountWithCount(element, count){
  var originCount = output.find(x => x.name === element).summary
  output.find(x => x.name === element).summary = parseInt(originCount + count)
}