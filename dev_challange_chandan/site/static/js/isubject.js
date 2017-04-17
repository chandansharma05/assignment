/**
 * ISubject .
 *
 * @constructor Subject Interface Have all the subject;
 * @this {ISubject}
 * @param
 */


const { ObserverList } = require('./observer_list');

class ISubject {
  constructor(){
    this.Observers = new ObserverList();
  }

  addObserver(observer){
    this.Observers.add(observer);
  }

  removeObserver(observer){
    this.Observers.remove(this.Observers.indexOf(observer));
  };

  notify(ctx){
    for(var i = 0;i<this.Observers.count();i++){
      this.Observers.getObj(i).update(ctx);
    }
  }

}

exports.ISubject = ISubject;
