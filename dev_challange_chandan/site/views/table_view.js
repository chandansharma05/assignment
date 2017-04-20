/**
 * TableView
 *
 * @constructor
 * @this {TableView}
 * @param model - instanceof model
 */

class TableView {
  constructor(model){
    this.model = model;
    this.tBody = document.querySelector("#table_body");
  }
  /**
 * Creates a renderTable for View
 */
 renderTable() {
   let tableRow = '';
   const sLObject = this.model.sparkLineObj;
   const items = this.model.dataObj.items;
   const byId = this.model.dataObj.byId;

   // Creates rows of table
   for(var i = 0;i<items.length;i++) {
     tableRow += "<tr>";
     for(var j = 0;j<Object.values(byId[Object.keys(byId)[i]]).length;j++) {
       if(j == 0) {
         tableRow += "<td>"+Object.values(byId[Object.keys(byId)[i]])[j]+"</td>";
       } else {
         tableRow += "<td>"+(Object.values(byId[Object.keys(byId)[i]])[j]).toFixed(8)+"</td>";
       }
     }
     tableRow += "<td><span class='sLines' id="+Object.values(byId[Object.keys(byId)[i]])[0]+"></span></td>";
     tableRow += "</tr>";
   }

   this.tBody.innerHTML = tableRow;

   // Draw the sparkline for each table row
   for(var i = 0;i<Object.keys(sLObject).length;i++) {
     Sparkline.draw(document.querySelector("#"+Object.keys(sLObject)[i]), sLObject[Object.keys(sLObject)[i]]);

     /**
    * Rest sparkline each table row after 30 secounds.
    */
     if(this.model.sIntervals[Object.keys(sLObject)[i]] === 30) {
       this.model.sIntervals[Object.keys(sLObject)[i]] = 0;
       this.model.sparkLineObj[Object.keys(this.model.sparkLineObj)[i]] = [];
     }
   }
 }
}

exports.TableView = TableView;
