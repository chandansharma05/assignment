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

   const items = this.model.dataObj.items;
   const byId = this.model.dataObj.byId;

   // Dynamically added Table row and values
   for(var i = 0;i<items.length;i++) {
     tableRow += "<tr>";
     for(var j = 0;j<Object.values(byId[Object.keys(byId)[i]]).length;j++) {
       tableRow += "<td>"+Object.values(byId[Object.keys(byId)[i]])[j]+"</td>";
     }
     tableRow += "</tr>";
   }
   this.tBody.innerHTML = tableRow;
 }
}

exports.TableView = TableView;
