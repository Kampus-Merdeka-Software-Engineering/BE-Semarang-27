import express from "express";
import {
    getAllSpecialities,
    getAllDoctorsWithSpeciality,
    getAllDoctors,
    getDoctorById,
    getAllDoctorsBySpeciality,

    getScheduleByDoctorId,
    getAppointmentsByDoctorId,
    getReceiptById
} from "../controllers/DoctorController.js";

import {
    bookAppointment
} from "../controllers/ScheduleController.js";

const router = express.Router();

router.get('/specialities', getAllSpecialities);
router.get('/doctors-s', getAllDoctorsWithSpeciality);
router.get('/doctors', getAllDoctors);
router.get('/doctor/detail/:id', getDoctorById);
router.get('/doctors/:speciality_name', getAllDoctorsBySpeciality);
router.get('/doctors/schedule/:id', getScheduleByDoctorId);

router.get('/doctor/appointments/:id', getAppointmentsByDoctorId);

router.post('/book', bookAppointment);
router.get('/receipt_detail/:appointment_id', getReceiptById);
export default router;