/**
 * Controller .
 *
 * @constructor
 * @this {Controller}
 * @param model - instanceof model, view - instanceof table view
 */

class SparklineGenerator {
  constructor(domElementId, model) {
    this.model = model;
    this.domElementId = domElementId;
    this.persistArray = [1];
    this.sparkline = null;
    this.model.addObserver(this);
    this.generate();
  }

  generate() {
    if(this.sparkline == null) {
      this.sparkline = new Sparkline(this.domElementId);
    }
    this.drawSparkline();
  }

  drawSparkline(){
    this.sparkline.draw(this.persistArray);
  }

  setIntervals(){
    const self = this;
    let intervalCounts = 0;
    this.interval = setInterval(function () {
      if(intervalCounts == 30){
        self.restartOnEvery30Sec();
        intervalCounts = 0;
        self.clearIntervals()
      } else {
        intervalCounts++;
      }
    }, 1000);
  }

  clearIntervals(){
    clearInterval(this.interval);
  }

  restartOnEvery30Sec(){
    console.log("Before restartOnEvery30Sec", this.persistArray.length);
    this.persistArray = [];
    this.generate();
    console.log("After restartOnEvery30Sec", this.persistArray.length);
    // console.log("restartOnEvery30Sec");
    // this.persistArray = [];
    // if(this.persistArray.length > 0) {
    //   this.setIntervals();
    //   this.generate();
    // }
     //30 second interval logic
     // clearInterval
     //setInterval
    //generate
  };

  // When notifies by the modal send the request of update
  notify(data) {
    if("spark_"+data.name == this.domElementId.id) {
      this.persistArray.push((data.bestBid + data.bestAsk) / 2);
      if(this.persistArray.length == 1) {
        this.setIntervals();
      }
    }

    // console.log(this.model);

  };
}

exports.SparklineGenerator = SparklineGenerator;
