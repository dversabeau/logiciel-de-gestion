const app = require("express");
const Router = app.Router();
const OperationsController = require("../controllers/operations.controller");

Router.get("/", OperationsController.getAll)
  .post("/", OperationsController.createOne)
  .get("/:id", OperationsController.getOne)
  .get("/by_user/:id", OperationsController.getAllByUser)
  .get("/by_category/:id", OperationsController.getAllByCategory)
  .put("/:id", OperationsController.updateOne)
  .delete("/:id", OperationsController.deleteOne)
  

module.exports = Router;
