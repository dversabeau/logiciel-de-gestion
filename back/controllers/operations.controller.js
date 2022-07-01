const Operation = require("../models/operations.model");
const asynchandler = require("express-async-handler");

module.exports.getAll = asynchandler(async (req, res) => {
  const data = await Operation.getAll();
  return res.status(200).json(data);
});

module.exports.getOne = asynchandler(async (req, res) => {
  const id = req.params.id;
  const data = await Operation.getOne(id);
  return res.status(200).json(data);
});

module.exports.createOne = asynchandler(async (req, res) => {
  const data = await Operation.createOne(req.body);
  return res.status(200).json(data);
});

module.exports.updateOne = asynchandler(async (req, res) => {
  const id = req.params.id;
  const newOperation = req.body;
  const data = await Operation.updateOne(id, newOperation);
  return res.status(200).json(data);
});

module.exports.deleteOne = asynchandler(async (req, res) => {
  const id = req.params.id;
  const data = await Operation.deleteOne(id);
  return res.status(200).json(data);
});
