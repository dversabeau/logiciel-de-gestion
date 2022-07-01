const app = require("express");
const Router = app.Router();
const CategoriesController = require("../controllers/categories.controller");
const { isLogged } = require("../middlewares/auth");

Router.get("/", CategoriesController.getAll)
  .post("/",isLogged, CategoriesController.createOne)
  .get("/:id", CategoriesController.getOne)
  .put("/:id",isLogged, CategoriesController.updateOne)
  .delete("/:id",isLogged, CategoriesController.deleteOne);

module.exports = Router;
