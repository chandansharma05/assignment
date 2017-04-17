/**
 * Sortable .
 *
 * @constructor Sortable
 * @this {Sortable}
 * @method havr method sortObj - sortObj sort the object based on lastbidchanged and sparkArray - sparkArray used to sparkline
 */


class Sortable {
  constructor(){
    this.sortObj = {};
  }
  sortObject(obj){
    const tempObj = Object.keys(obj.byId).map(function (key) { return obj.byId[key]; });

    const sortArray = tempObj.sort(function(a,b) {
      return a.lastChangeBid - b.lastChangeBid;
    });

    const sortObj = sortArray.reduce(function(result, item) {
      result[item.name] = item;
      return result;
    }, {});

    this.sortObj = sortObj;
    return sortObj;
  }

  sparkArray (){
    const sortObj = this.sortObj;
    return Object.keys(this.sortObj).map(function(data){
      return (sortObj[data].bestBid + sortObj[data].bestAsk) / 2;
    });
  }
}

exports.Sortable = Sortable;
