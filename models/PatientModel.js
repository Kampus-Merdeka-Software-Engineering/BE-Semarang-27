import { DataTypes } from 'sequelize'
import db from '../src/config/Database.js'

const Patient = db.define(
  'patients',
  {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    patient_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.INTEGER
    },
    date_of_birth: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: false
  }
)

export default Patient
