// const Sequelize = require('sequelize');
import { DataTypes } from 'sequelize';
import db from '../src/config/Database.js';

const Appointment = db.define("appointments", {
  appointment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    schedule_id: {
        type: DataTypes.INTEGER,
    },
    patient_id: {
        type: DataTypes.INTEGER,
    },
    booking_date: {
        type: DataTypes.DATE,
    },
    reason: {
        type: DataTypes.STRING,
    }
},
{
    timestamps: false
} 
);

// module.exports = Appointment;
export default Appointment;

// If table "appointments" doesn't exist, this function creates it
// (async () => {
//     await db.sync();
// })();