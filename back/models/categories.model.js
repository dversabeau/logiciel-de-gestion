const query = require("../config/ConnectionDB");
const AppError = require("../helpers/appError");

class Category {
  constructor(category) {
    (this.id = category.id), (this.name_category = category.name_category);
  }

  static async getAll() {
    const result = await query(`SELECT * FROM CATEGORIES`);
    if (result === undefined || null) {
      throw new AppError("Categories was not found", 404);
    }
    return result;
  }

  static async getOne(id) {
    const result = await query(
      `SELECT * FROM CATEGORIES WHERE id_category = ${id}`
    );
    if (result === undefined || null) {
      throw new AppError("Category was not found", 404);
    }
    return result;
  }

  static async createOne(category) {
    const result = await query(
      `INSERT INTO CATEGORIES (name_category) VALUES ("${category.name_category}")`
    );
    if (result === undefined || null) {
      throw new AppError("Category was not created", 404);
    }
    return result;
  }

  static async updateOne(id, category) {
    const result = await query(
      `UPDATE CATEGORIES
      SET name_category = "${category.name_category}"
      WHERE id_category = ${id}`
    );
    if (result === undefined || null) {
      throw new AppError("Category was not found and cannot be updated", 404);
    }
    return result;
  }

  static async deleteOne(id) {
    const result = await query(
      `DELETE FROM CATEGORIES WHERE id_category = ${id}`
    );
    if (result === undefined || null) {
      throw new AppError("Category was not found", 404);
    }
    return result;
  }
}

module.exports = Category;
