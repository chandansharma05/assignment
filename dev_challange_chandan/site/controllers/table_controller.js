/**
 * Controller .
 *
 * @constructor
 * @this {Controller}
 * @param model - instanceof model, view - instanceof table view
 */
const { SparklineGenerator } = require('../public/js/sparkline_generator.js');
const { Sparklines } = require('../views/sparklines.js');

class TableController {
  constructor(model, view){
    this.model = model;
    this.view = view;
    this.model.addObserver(this);
    this.sElement = [];
  }
  // When notifies by the modal send the request of update
  notify(jData) {
    this.model.dataObj = jData;
    this.view.renderTable();

   if((this.sElement.indexOf(jData.name)) == -1) {
     this.sElement.push(jData.name);
     this.model.sGenerator.push(new SparklineGenerator(document.querySelector("#spark_"+jData.name), this.model));
   }
  }
}

exports.TableController = TableController;
