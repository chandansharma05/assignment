/**
 * Modal .
 *
 * @constructor
 * @this {Model}
 * @param
 */
const { filterObject } = require('../public/js/filter_model_object.js');

class Model {
  constructor(){
    this.dataObj = {
      byId:{},
      items:[]
    };
    this.sparkLineObj = {};
    this.listeners = [];
  }
  /**
 * Creates a setData for Model
 * @param {obj} set dataObj and sparkLineObj
 */
  setData(jData) {
    const fObject = filterObject(jData, this.dataObj, this.sparkLineObj);
    this.dataObj = fObject.dataObj;
    this.sparkLineObj = fObject.sLObject;
    this.notifyAllObservers();
  }

  // Notifies all observers
  notifyAllObservers(){
    let i;
    for(i = 0; i < this.listeners.length; i++){
        this.listeners[i].notify();
    }
  }

  // Requires to register all observers
  addObserver(listener){
      this.listeners.push(listener);
  };
}

exports.model = new Model();
