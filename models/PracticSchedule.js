import { DataTypes } from 'sequelize';
import db from '../src/config/Database.js';

const Schedule = db.define("schedules", {
  schedule_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    doctor_id: {
        type: DataTypes.INTEGER,
    },
    day: {
        type: DataTypes.STRING,
    },
    begin_hour: {
        type: DataTypes.INTEGER,
    },
    begin_minute: {
        type: DataTypes.INTEGER,
    },
    finish_hour: {
        type: DataTypes.INTEGER,
    },
    finish_minute: {
        type: DataTypes.INTEGER,
    }
},
{
    timestamps: false
} );

export default Schedule;

// If table "schedules" doesn't exist, this function creates it
// (async () => {
//     await db.sync();
// })();