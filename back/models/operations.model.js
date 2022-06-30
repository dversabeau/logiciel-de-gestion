const query = require("../config/ConnectionDB");

class Operation {
  constructor(operation) {
    (this.id = operation.id),
      (this.date_operation = operation.date_operation),
      (this.nature_operation = operation.nature_operation),
      (this.debit = operation.debit),
      (this.credit = operation.credit);
  }

  // Get all operations
  static async getAll() {
    const result = await query(`SELECT * from OPERATIONS`);
    if (result === undefined || null) {
      throw new AppError("any User was not found", 404);
    }
    return result;
  }
}

module.exports = Operation;
