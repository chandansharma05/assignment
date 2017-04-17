/**
 * Modal .
 *
 * @constructor this.dataObj store the fileter object
 * @this {Model}
 * @param
 */
const config = require('./config.js');

class Model {
  constructor(){
    this.dataObj = {
      byId:{},
      items:[]
    };
  }

  /**
 * Creates a setData to Model.
 *
 * @param {obj} obj
 */

  setData(obj) {
    this.filterData(obj);
    config.iSubject.notify(this.dataObj);
  }

  /**
 * Creates a Filter data.
 * Update the dataObj in constructor
 * @param {obj} obj
 */

  filterData(obj) {
    const name =  obj.name
    const inArray = this.dataObj.items.indexOf(name);

    if(inArray !== -1) {
      this.dataObj.byId[name] = obj;
    } else {
      this.dataObj.items.push(name);
      this.dataObj.byId = Object.assign({}, this.dataObj.byId, {
        [name]: obj
      });
    }
  }

}

exports.Model = Model;
