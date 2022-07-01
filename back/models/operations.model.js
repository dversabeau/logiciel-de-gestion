const query = require("../config/ConnectionDB");

class Operation {
  constructor(operation) {
    (this.id = operation.id),
      (this.date_operation = operation.date_operation),
      (this.nature_operation = operation.nature_operation),
      (this.debit = operation.debit),
      (this.credit = operation.credit);
  }

  static async getAll() {
    const result = await query(`SELECT * FROM OPERATIONS`);
    if (result === undefined || null) {
      throw new AppError("Operations was not found", 404);
    }
    return result;
  }

  static async getOne(id) {
    const result = await query(
      `SELECT * FROM OPERATIONS WHERE id_operation = ${id}`
    );
    if (result === undefined || null) {
      throw new AppError("Operation was not found", 404);
    }
    return result;
  }

  static async createOne(operation) {
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
      throw new AppError("Operation was not created", 404);
    }
    return result;
  }

  static async updateOne(id, operation) {
    const result = await query(
      `UPDATE OPERATIONS
      SET date_operation = "${operation.date_operation}",
      nature_operation = "${operation.nature_operation}",
      debit = ${operation.debit},
      credit = ${operation.credit}
      WHERE id_operation = ${id}`
    );
    if (result === undefined || null) {
      throw new AppError("Operation was not found and cannot be updated", 404);
    }
    return result;
  }

  static async deleteOne(id) {
    const result = await query(
      `DELETE FROM OPERATIONS WHERE id_operation = ${id}`
    );
    if (result === undefined || null) {
      throw new AppError("Operation was not found", 404);
    }
    return result;
  }
}

module.exports = Operation;
