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
      throw new AppError("Operations was not found", 404);
    }
    return result;
  }

  // Post an opération
  static async create(operation) {
    const result = await query(
      `INSERT INTO OPERATIONS (
        date_operation,
        nature_operation,
        debit,
        credit
        ) 
        VALUES (
          "${operation.date_operation}",
          "${operation.nature_operation}",
          ${operation.debit},
          ${operation.credit}
        )`
    );
    if (result === undefined || null) {
      throw new AppError("Operation was not found", 404);
    }
    return result;
  }

  // Update an opération
  static async update(id, operation) {
  }
}

module.exports = Operation;
