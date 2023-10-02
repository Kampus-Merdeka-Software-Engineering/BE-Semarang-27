import express from "express";
import {
    getAllDoctorsWithSpeciality,
    getAllDoctors,
    getDoctorById,
    getAllDoctorsBySpeciality,

    getScheduleByDoctorId
} from "../controllers/DoctorController.js";

const router = express.Router();

router.get('/doctors-s', getAllDoctorsWithSpeciality);
router.get('/doctors', getAllDoctors);
router.get('/doctor/:id', getDoctorById);
router.get('/doctors/:speciality_name', getAllDoctorsBySpeciality);
router.get('/doctors/schedule/:id', getScheduleByDoctorId);
export default router;