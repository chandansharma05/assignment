/**
 * Config .
 *
 * It have all the config files
 */


const { IObserver } = require('./iobserver.js');
const { ISubject } = require('./isubject.js');
const { View } = require('./view.js');
const { Model } = require('./model.js');
const { Sortable } = require('./sortable.js');

const extend = function (obj, extension){
  for(var k in extension){
    obj[k] = extension[k];
  }
}

const model = new Model();
const view = new View();
const iSubject = new ISubject();

extend(table_body, new IObserver());
iSubject.addObserver(table_body);

table_body.update = function(obj) {
  view.updateView(obj, this);
}

exports.model = model;
exports.iSubject = iSubject;
exports.sortable = new Sortable();
