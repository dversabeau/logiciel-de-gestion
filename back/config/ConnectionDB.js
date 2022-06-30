const mysql = require("mysql");
const dbOptions = require("./dbOption")

const connectionPool = mysql.createPool({...dbOptions})

var getConnection = function (done) {
  console.log("connection pool");
  connectionPool.getConnection(done);
};

module.exports = { getConnection: getConnection };