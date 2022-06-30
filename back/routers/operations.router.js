const app = require("express");
const Router = app.Router();
const OperationsController = require("../controllers/operations.controller");

Router.get("/", OperationsController.getAll)
  .post("/", OperationsController.create)
  .put("/:id", OperationsController.update);

module.exports = Router;
