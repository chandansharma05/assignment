/**
 * TableView
 *
 * @constructor
 * @this {TableView}
 * @param model - instanceof model
 */
// const { SparklineGenerator } = require('../public/js/sparkline_generator.js');

class TableView {
  constructor(model) {
    this.model = model;
    this.tBody = document.getElementById("table_body");
  }
  /**
 * Creates a renderTable for View
 */
 renderTable() {
   const jData = this.model.dataObj;
   const element = document.getElementById(jData.name);
   if(element) {
     const tElement = document.getElementById(jData.name);
     for(var j = 0;j<Object.keys(jData).length;j++) {
       if(j == 0) {
         tElement.children[j].innerHTML = Object.values(jData)[j];
       } else {
         tElement.children[j].innerHTML = Object.values(jData)[j].toFixed(8);
       }
     }
   } else {
      let tableRow = '';
      tableRow += "<tr id='"+jData.name+"'>";
      for(var j = 0;j<Object.keys(jData).length;j++) {
        if(j == 0) {
          tableRow += "<td id='"+Object.keys(jData)[j]+"'>"+Object.values(jData)[j]+"</td>";
        } else {
          tableRow += "<td id='"+Object.keys(jData)[j]+"'>"+Object.values(jData)[j].toFixed(8)+"</td>";
        }
      }
      tableRow += "<td><span id='spark_"+jData.name+"'></span></td>";
      tableRow += "</tr>";
      this.tBody.innerHTML += tableRow;
   }


  //  if(document.getElementById("spark_gbpusd") && document.getElementById("spark_gbpeur")) {
  //    const sparkline1 = new Sparkline(document.getElementById("spark_gbpusd"));
  //    const sparkline2 = new Sparkline(document.getElementById("spark_gbpeur"));
   //
  //    sparkline1.draw([1,2]);
  //    sparkline2.draw([1,2]);
  //  }
   this.sort(true);

  //  for(var i = 0;i<this.model.sGenerator.length;i++) {
  //    console.log(this.model.sGenerator[i].sparkline);
  //    Sparkline.draw(this.model.sGenerator[i].domElementId,[1]);
  //  }

  //  const sElement = document.getElementById('spark_'+jData.name);
   //
  //  if((this.sElement.indexOf(jData.name)) == -1) {
  //    this.sElement.push(jData.name);
  //    this.model.sGenerator.push(new SparklineGenerator(sElement, this.model));
  //  }
  //  console.log(this.model.sGenerator);
  //  for(var i = 0; i< this.model.sGenerator.length; i++) {
  //    console.log(this.model.sGenerator[i].persistArray.length);
  //    this.model.sGenerator[i].sparkline.draw(this.model.sGenerator[i].persistArray);
  //  }
 }

 sort(ascending) {
		var tbody = this.tBody;
		var rows = tbody.getElementsByTagName("tr");
		var unsorted = true;
		while(unsorted)
		{
			unsorted = false
			for (var r = 0; r < rows.length - 1; r++)
			{
				var row = rows[r];
				var nextRow = rows[r+1];
				var value = row.children[6].innerHTML;
				var nextValue = nextRow.children[6].innerHTML;

				value = value.replace(',', ''); // in case a comma is used in float number
				nextValue = nextValue.replace(',', '');

				if(!isNaN(value))
				{
					value = parseFloat(value);
					nextValue = parseFloat(nextValue);
				}

				if (ascending ? value > nextValue : value < nextValue)
				{
					tbody.insertBefore(nextRow, row);
					unsorted = true;
				}
			}
    }
  }
}

exports.TableView = TableView;
