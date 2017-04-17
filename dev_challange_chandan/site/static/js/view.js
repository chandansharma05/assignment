/**
 * View .
 *
 * @constructor
 * @this {View}
 * @method update method upate the table based on object update and drawSpark it will dar Sparkline every 30 secound
 */

const config = require('./config.js');

class View {
  constructor(){
    this.sparkInterval = 0;
    this.drawSpark([0,0,0,0,0,0,0,0,0,0,0,0]);
  }
  updateView(obj, element){
    let tableRow = '';
    const sortObj = config.sortable.sortObject(obj);


    for(var i = 0;i<obj.items.length;i++) {
      tableRow += "<tr>";
      for(var j = 0;j<Object.values(sortObj[Object.keys(sortObj)[i]]).length;j++) {
        tableRow += "<td>"+Object.values(sortObj[Object.keys(sortObj)[i]])[j]+"</td>";
      }
      tableRow += "</tr>";
    }

    element.innerHTML = tableRow;
    this.sparkInterval = this.sparkInterval + 1;

    if(this.sparkInterval == 30) {
      const sparkArray = config.sortable.sparkArray();
      this.drawSpark(sparkArray);
      this.sparkInterval = 0;
    }
  }

  drawSpark(sparkArray){
    const sparkline = document.getElementById('sparkline')
    Sparkline.draw(sparkline, sparkArray)
  }
}

exports.View = View;
