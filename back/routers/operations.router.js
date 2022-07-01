const app = require("express");
const Router = app.Router();
const OperationsController = require("../controllers/operations.controller");
const { isLogged } = require("../middlewares/auth");

Router.get("/", OperationsController.getAll)
  .post("/",isLogged, OperationsController.createOne)
  .get("/:id", OperationsController.getOne)
  .get("/by_user/:id", OperationsController.getAllByUser)
  .get("/by_category/:id", OperationsController.getAllByCategory)
  .put("/:id",isLogged, OperationsController.updateOne)
  .delete("/:id",isLogged, OperationsController.deleteOne)
  

module.exports = Router;
