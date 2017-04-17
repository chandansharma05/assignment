/**
 * ObserverList .
 *
 * @constructor It Have all the observer list;
 * @this {ObserverList}
 * @param
 */

class ObserverList {
  constructor(){
    this.observerList = [];
  }

  add(obj){
    this.observerList.push(obj);
  }

  count(){
    return this.observerList.length;
  }

  remove(index){
    this.observerList.splice(index, 1)
  }

  indexOf(obj){
    for(var i = 0;i<this.observerList.length;i++){
      if(this.observerList[i] === obj) {
        return i;
      }
    }
  }

  getObj(index){
    return this.observerList[index];
  }
}

exports.ObserverList = ObserverList;
