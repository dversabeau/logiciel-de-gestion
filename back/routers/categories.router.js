const app = require("express");
const Router = app.Router();
const CategoriesController = require("../controllers/categories.controller");

Router.get("/", CategoriesController.getAll)
  .post("/", CategoriesController.createOne)
  .get("/:id", CategoriesController.getOne)
  .put("/:id", CategoriesController.updateOne)
  .delete("/:id", CategoriesController.deleteOne);

module.exports = Router;
