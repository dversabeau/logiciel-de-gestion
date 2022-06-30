const app = require("express");
const Router = app.Router();
const OperationsController = require("../controllers/operations.controller");

Router.route("/").get(new OperationsController().getAll);

module.exports = Router;
