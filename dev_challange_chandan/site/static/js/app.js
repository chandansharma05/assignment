/**
 * App .
 *
 * @constructor
 * @this {App}
 * @param client - which have Stomp refrence
 * @method init - This method have subcribe method call when object update
 */


const config = require('./config.js');

class App {
  constructor(client){
    this.client = client;
  }

  init() {
    const subscription = this.client.subscribe("/fx/prices", function(message){
    const jData = JSON.parse(message.body);
    config.model.setData(jData);
    });
  }
}

exports.App = App;
