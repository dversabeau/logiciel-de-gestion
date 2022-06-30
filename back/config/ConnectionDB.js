const mysql = require("mysql");
const dbOptions = require("./dbOption")
const {promisify} = require('util')


const pool = mysql.createConnection({...dbOptions})
const query = promisify(pool.query).bind(pool)

module.exports = query