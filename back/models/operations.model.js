const connection = require("../config/ConnectionDB");

class Operation {
  constructor(operation) {
    (this.id = operation.id),
    (this.name = operation.name);
  }
}

module.exports = Operation;