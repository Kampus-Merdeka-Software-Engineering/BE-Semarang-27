import { DataTypes } from 'sequelize'
import db from '../src/config/Database.js'

const Doctor = db.define(
  'doctors',
  {
    doctor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    doctor_name: {
      type: DataTypes.STRING
    },
    speciality_id: {
      type: DataTypes.INTEGER
    },
    image_path: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)

export default Doctor
