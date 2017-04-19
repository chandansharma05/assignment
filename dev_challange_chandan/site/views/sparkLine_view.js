/**
 * SparkLineView
 *
 * @constructor
 * @this {SparkLineView}
 * @param
 */

class SparkLineView {
  constructor(model){
    this.model = model;
    this.sparkLine = document.querySelector("#sparkline");
    this.sText = document.querySelector(".sText");
  }
  /**
 * Creates a renderSparkLine for View
 */
 renderSparkLine() {
   const sLObject = this.model.sparkLineObj;
   this.sparkLine.innerHTML = '';

   // dynamically added the sparkline element
   for (var key in sLObject) {
     const sElement = "<div class='sparklines'><span>"+key+"</span>: <span class='sLines' id="+key+"></span></div>";
     this.sparkLine.innerHTML += sElement;
   }

   // Draw the sparkline for all table cell
   for(var i = 0;i<Object.keys(sLObject).length;i++) {
     Sparkline.draw(document.querySelector("#"+Object.keys(sLObject)[i]), sLObject[Object.keys(sLObject)[i]]);
   }
 }
}

exports.SparkLineView = SparkLineView;
