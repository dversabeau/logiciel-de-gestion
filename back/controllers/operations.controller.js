const Operation = require("../models/operations.model");

class OperationsController {
  async getAll(req, res) {
    try {
      const Operations = new Operation({});
      Operations.getAll()
        .then((data) => {
          return res.send({
            method: req.method,
            status: "success",
            flash: "Création de l'opération avec succès !",
            Aricles: data,
          });
        })
        .catch((err) => {
          throw err;
        });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OperationsController
