const Operation = require("../models/operations.model");
const asynchandler = require("express-async-handler");

module.exports.getAll = asynchandler(async (req, res) => {
  const data = await Operation.getAll();
  return res.status(200).json(data);
});

module.exports.create = asynchandler(async (req, res) => {
  console.log(req.body)
  const data = await Operation.create(req.body);
  return res.status(200).json(data);
});

module.exports.update = asynchandler(async (req, res) => {
  const id = req.params.id
  const newOperation = req.body.operation
  const data = await Operation.update(id, newOperation);
  return res.status(200).json(data);
});