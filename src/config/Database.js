// const Sequelize = require('sequelize');
// const dotenv = require('dotenv');
import "dotenv/config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

// module.exports = db;
export default db;
