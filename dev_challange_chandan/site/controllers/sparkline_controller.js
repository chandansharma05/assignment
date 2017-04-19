/**
 * SparkLineController
 * @constructor
 * @this {SparkLineController}
 * @param model - instanceof model, view - instanceof sparkline view
 */

class SparkLineController {
  constructor(model, view){
    this.model = model;
    this.view = view;
    this.model.addObserver(this);
    this.sparkInterval = 0;
  }
  // Updates the view
  updateSparkLineView(){
      this.sparkInterval = this.sparkInterval + 1;
      if(this.sparkInterval == 30) {
        this.view.renderSparkLine();
        this.sparkInterval = 0;

        // reset this.model.sparkLineObj
        for(var i = 0;i<Object.keys(this.model.sparkLineObj).length;i++) {
          this.model.sparkLineObj[Object.keys(this.model.sparkLineObj)[i]] = []
        }
      }
  };
  // When notifies by the modal send the request of update
  notify() {
      this.updateSparkLineView();
  };
}

exports.SparkLineController = SparkLineController;
