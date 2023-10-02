// const Sequelize = require('sequelize');
// const dotenv = require('dotenv');
import "dotenv/config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  "db_cp27",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });

// module.exports = db;
export default db;
