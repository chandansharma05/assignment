/**
 * Controller .
 *
 * @constructor
 * @this {Controller}
 * @param model - instanceof model, view - instanceof table view
 */
// const { sortedObject } = require('../public/js/sorted_object.js');
const { SparklineGenerator } = require('../public/js/sparkline_generator.js');

class SparklineController {
  constructor(model){
    this.model = model;
    this.model.addObserver(this);
  }
  // When notifies by the modal send the request of update
  notify(jData) {
    
  };
}

exports.SparklineController = SparklineController;
