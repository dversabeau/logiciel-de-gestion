const connection = require("../config/ConnectionDB");

class Operation {
  constructor(operation) {
    (this.id = operation.id), (this.name = operation.name);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      connection.getConnection((error, connection) => {
        if (error) throw error;
          connection.query(`SELECT * FROM operations`, (error, data) => {
            if (error) reject(error);
            console.log("model data", data);
            resolve(data);
            connection.release();
          });
      });
    });
  }
}

module.exports = Operation;
