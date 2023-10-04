import { DataTypes } from 'sequelize';
import db from '../src/config/Database.js';

const Speciality = db.define("specialities", {
  speciality_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  speciality_name: {
    type: DataTypes.STRING,
  }
},
{
    timestamps: false
} );

export default Speciality;

// If table "Specialities" doesn't exist, this function creates it
// (async () => {
//     await db.sync();
// })();