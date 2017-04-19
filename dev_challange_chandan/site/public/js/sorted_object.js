/**
* sortedObject.
* @param fObject - get filter object
* @return {object} return the sortObj.
*/

function sortedObject(fObject){
  const tempObj = Object.keys(fObject).map(function (key) { return fObject[key]; });

  const sortArray = tempObj.sort(function(a,b) {
    return a.lastChangeBid - b.lastChangeBid;
  });

  const sortObj = sortArray.reduce(function(result, item) {
    result[item.name] = item;
    return result;
  }, {});

  return sortObj;
}

exports.sortedObject = sortedObject;
