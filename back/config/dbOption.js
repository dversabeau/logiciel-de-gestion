const dbOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE
};

module.exports = dbOptions;