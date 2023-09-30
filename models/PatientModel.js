const Sequelize = require('sequelize');
import db from '../src/config/Database.js';

const Patient = db.define("patients", {
  patient_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patient_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.INT,
  },
  date_of_birth: {
    type: DataTypes.DATE,
  },
});

module.exports = Patient;

// If table "Patients" doesn't exist, this function creates it
(async () => {
    await db.sync();
})();