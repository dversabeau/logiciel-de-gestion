const query = require("../config/ConnectionDB");
const AppError = require("../helpers/appError");

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

  static async getAllByUser(id) {
    const result = await query(
      `SELECT 
      OPERATIONS.*
      FROM OPERATIONS
      INNER JOIN USERS
      ON OPERATIONS.id_user = USERS.id_user
      WHERE USERS.id_user = ${id}`
    );
    if (result === undefined || null) {
      throw new AppError("Operation was not found", 404);
    }
    return result;
  }

  static async getAllByCategory(id) {
    const result = await query(
      `SELECT OPERATIONS.* 
      FROM OPERATIONS
      INNER JOIN CATEGORIES
      ON OPERATIONS.id_category = CATEGORIES.id_category
      WHERE CATEGORIES.id_category = ${id}`
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
        credit,
        id_user,
        id_category
        ) 
        VALUES (
          "${operation.date_operation}",
          "${operation.nature_operation}",
          ${operation.debit},
          ${operation.credit},
          ${operation.id_user},
          ${operation.id_category}
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
