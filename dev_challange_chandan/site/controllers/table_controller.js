/**
 * Controller .
 *
 * @constructor
 * @this {Controller}
 * @param model - instanceof model, view - instanceof table view
 */

class TableController {
  constructor(model, view){
    this.model = model;
    this.view = view;
    this.model.addObserver(this);
  }
  // Updates the view
  updateTableView(){
      this.view.renderTable();
  };
  // When notifies by the modal send the request of update
  notify() {
      this.updateTableView();
  };
}

exports.TableController = TableController;
