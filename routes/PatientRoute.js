import express from "express";
import {
    signUpPatient,
    getAllPatients,
    getPatientById,
} from "../controllers/PatientController.js";

const router = express.Router();
router.post('/patient-form', signUpPatient);
router.get('/patients', getAllPatients);
router.get('/patient/:id', getPatientById);

export default router;