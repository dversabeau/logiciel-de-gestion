const Operation = require("../models/operations.model");
const asynchandler = require("express-async-handler");

class OperationsController {

  getAll = asynchandler(async (req, res) => {
    const data = await Operation.getAll();
    return res.status(200).json(data);
  });
}

module.exports = OperationsController;
