/**
 * Main
 * @constructor
 * @this {Main}
 */

// Importing the modules
const { model } = require('./model/model.js');
const { TableView } = require('./views/table_view.js');
const { TableController } = require('./controllers/table_controller.js');

const { SparkLineView } = require('./views/sparkLine_view.js');
const { SparkLineController } = require('./controllers/sparkline_controller.js');

class Main {
  /**
 * initialize of Main.
 * @param client - which have Stomp refrence
 * @method initialize - This method have subcribe method call from Stomp
 */
  initialize(client) {
    const subscription = client.subscribe("/fx/prices", function(message){
    const jData = JSON.parse(message.body);
      model.setData(jData);
    });

    const tableView = new TableView(model); // Instantiate TableView
    const tableController = new TableController(model, tableView); // Instantiate TableController

    const sparkLineView = new SparkLineView(model); // Instantiate SparkLineView
    const sparkController = new SparkLineController(model, sparkLineView); // Instantiate SparkLineController
  }
}

exports.main = new Main();
