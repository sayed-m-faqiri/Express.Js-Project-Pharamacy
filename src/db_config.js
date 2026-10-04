const { Pool } = require("pg");

const db = new Pool({
  database: "pharmacyDB",
  host: "localhost",
  port: "5432",
  user: "postgres",
  password: "postgres",
});

module.exports = db;
