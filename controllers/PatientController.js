import Patient from "../models/PatientModel.js";

export const signUpPatient = async (req, res) => {
  try {
    await Patient.create(req.body);
    res.status(201).json({ msg: "Patient created" });
  } catch (error) {
    res.send(error.message);
  }
};