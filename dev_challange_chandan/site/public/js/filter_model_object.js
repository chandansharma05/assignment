/**
* filterObject.
* @param jObject - get updated object from Stomp , dataObj = initial dataObj, sLObject = initial sparkline object
* @return {object} return the filter dataObj and sparkline object array .
*/

const { sortedObject } = require('./sorted_object.js');

function filterObject(jObject, dataObj) {
  const name =  jObject.name;
  const inArray = dataObj.items.indexOf(name);

  if (inArray !== -1) {
    dataObj.byId[name] = jObject;
    // sLObject[name].push((jObject.bestBid + jObject.bestAsk) / 2)
  } else {
    dataObj.items.push(name);
    dataObj.byId = Object.assign({}, dataObj.byId, {
      [name]: jObject
    });

    // sLObject = Object.assign({}, sLObject, {
    //   [name]: [(jObject.bestBid + jObject.bestAsk) / 2]
    // });
  }

  const sortObj = sortedObject(dataObj.byId);

  dataObj.byId = sortObj;
  dataObj.items = Object.keys(sortObj);

  return dataObj;
}

exports.filterObject = filterObject;
