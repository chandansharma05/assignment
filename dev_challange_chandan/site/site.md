### Sort Table and Sparkline Dev Challenge

This module contains a development challenge for Sort Table and Sparkline.

### Node modules
Chai and Mocha node modules installed for testing

test directory have all test files - fliter_model_object.js
### Command to run test
    npm test


##### Modularize each function should reside in separate folder below are :

- ##### main.js
  In main.js the this.client.subscribe method have callback which return updated object after every 1 secound and Instantiate views and controllers

  ## Model
  - ##### model.js
  In Model set the data updated object and filter them accordingly with observer methos.

  ## Views
  - ##### table_view.js
  In this view it display the sorted table.

  - ##### sparkline_view.js
  In this view it display sparklines for each row in table.

  ## Controllers
  - ##### table_controller.js
  In table controller will update table view whenever object change and notify method call respective method.

  - ##### sparkline_controller.js
    - In sparline controller will update sparline view whenever object change and notify method call respective method.
    - The sparkline object of array will reset after 30 sec.

  ## public/js
  - ##### filter_model_object.js
  In this filterObject method accept three param updated object from Stomp, dataObject, sparkLineObject which will return filtered and sorted dataObject and sparkLineObject.

  - ##### sorted_object.js
  It will sort object based on cell value lastChangeBid.
