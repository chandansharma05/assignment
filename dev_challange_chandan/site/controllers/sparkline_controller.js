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
  constructor(model, sparkline){
    this.model = model;
    this.sparklineView = sparkline;
    this.model.addObserver(this);
  }
  // When notifies by the modal send the request of update
  notify(jData) {
    // if((this.sElement.indexOf(jData.name)) == -1) {
    //   this.sElement.push(jData.name);
    //   const sG = new SparklineGenerator(document.getElementById('spark_'+jData.name), this.model);
    //   this.sLineArray.push(sG)
    //   // console.log(sG);
    // }
    //
    // this.sparklineView.drawSparkline(this.sLineArray)
    // const element = document.getElementById('spark_'+this.model.dataObj.name);
    // // element
    // if(element) {
    //   console.log("Exits ",element);
    //   Sparkline.draw(element,[1,2])
    // } else {
    //   console.log("Else");
    // }
    // if((this.sElement.indexOf(jData.name)) == -1) {
    //   const domId = document.getElementById(jData.name);
    //   this.sElement.push(jData.name);
    //   const sG = new SparklineGenerator(document.getElementById(jData.name), this.model, this.sparklineView);
    //   // this.sGenerator.push(sG);
    // } else {
    //   // this.sGenerator[0].drawSparkline();
    // }
  };
}

exports.SparklineController = SparklineController;
