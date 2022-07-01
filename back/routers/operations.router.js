const app = require("express");
const Router = app.Router();
const OperationsController = require("../controllers/operations.controller");

Router.get("/", OperationsController.getAll)
  .post("/", OperationsController.createOne)
  .get("/:id", OperationsController.getOne)
  .put("/:id", OperationsController.updateOne)
  .delete("/:id", OperationsController.deleteOne)
  

module.exports = Router;
