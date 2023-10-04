import Patient from "../models/PatientModel.js";
import db from "../src/config/Database.js";

export const signUpPatient = async (req, res) => {
  try {
    await Patient.create(req.body);
    res.status(201).json({ 
      msg: "Patient created",
      data: req.body
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    // const patients = await db.query(
    //   `SELECT * FROM patients`
    // );
    res.status(200).json(patients);
  } catch (error) {
    res.send(error.message);
  }
};

export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    res.status(200).json(patient);
  } catch (error) {
    res.send(error.message);
  }
};

export async function getPatientIdByName(name) {
  try {
    const user = await Patient.findOne({
      where: { patient_name: name },
    });
    return user;
  } catch (error) {
    throw error;
  }
}
