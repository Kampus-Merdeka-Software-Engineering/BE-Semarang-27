/* == GET ALL SESSION == */
// SELECT d.doctor_name, p.day, p.begin_hour, p.finish_hour FROM practic_schedules p JOIN doctors d ON p.doctor_id = d.doctor_id;
/*
    Result:
    dr. Endang Sukasari Monday  9   10
    dr. Endang Sukasari Monday  10   11
    dr. Endang Sukasari Monday  13   14
    ...
*/

/* == GET ONLY PRACTIC DAY == */
// SELECT DISTINCT d.doctor_name, p.day FROM practic_schedules p JOIN doctors D ON d.doctor_id = p.doctor_id;
/*
    Result:
    dr. Endang Sukasari Monday
    dr. Endang Sukasari Tuesday
    dr. Endang Sukasari Wednesday
    ...
*/

/* == GET ONLY SESSION TIME == */
// SELECT DISTINCT d.doctor_name, p.begin_hour, P.finish_hour FROM practic_schedules p JOIN doctors D ON d.doctor_id = p.doctor_id;
/*
    Result:
    dr. Endang Sukasari 9   10
    dr. Endang Sukasari 10  11
    dr. Endang Sukasari 13  14
    ...
*/

/* == GET RECEIPT DATA == */
// SELECT a.appointment_id, p.patient_name, p.gender, p.date_of_birth, d.doctor_name, a.booking_date, s.begin_hour, s.finish_hour, a.reason FROM appointments a JOIN patients p ON a.patient_id = p.patient_id JOIN practic_schedules s ON a.schedule_id = s.schedule_id JOIN doctors d ON s.doctor_id = d.doctor_id WHERE a.appointment_id = 1;
/*
    Result:
    Booking_ID  Patient_Name  Gender  DOB      Specialist/Doctor_Name   Booking_Date  Begin_Hour  Finish_Hour  Reason
        1          Rayhan       1  2003-05-15   dr. Adiartha Tannika     2023-10-02     14          15      batuk dan pilek

*/

import Appointment from "../models/AppointmentModel.js";
import db from "../src/config/Database.js";
import {
    getPatientIdByName
} from "./PatientController.js";

export const bookAppointment = async (req, res) => {
  try {
      /*
      Dapet data: nama pasien, nama doktor, tanggal booking, begin_hour, finish_hour, day, reason
      Kebutuhan data tabel appointments: patient_id, schedule_id, booking_date, reason
      - nama pasien untuk dapat patient_id
      - nama doktor bisa untuk dapat id doktor, id doktor untuk dapat schedule_id dengan begin_hour dan finish_hour
      - booking date dan reason sudah ada
      */

    //   const patient = await getPatientIdByName(req.body.patient_name);
    const patient = await db.query(
        `SELECT patient_id FROM patients WHERE patient_name = '${req.body.patient_name}'`
      );  
    const doctor = await db.query(
        `SELECT doctor_id FROM doctors WHERE doctor_name = '${req.body.doctor_name}'`
      );

    const schedule = await db.query(
        `SELECT schedule_id FROM practic_schedules WHERE doctor_id = ${doctor[0][0].doctor_id} AND day = '${req.body.day}' AND begin_hour = ${req.body.begin_hour} AND finish_hour = ${req.body.finish_hour}`
      );
      
      var data = {
        schedule_id: schedule[0],
        patient_id: patient[0],
        doctor_id: doctor[0],
        booking_date: req.body.booking_date,
        reason: req.body.reason
    };

     data = {
       schedule_id: schedule[0][0].schedule_id,
        patient_id: patient[0][0].patient_id,
        booking_date: req.body.booking_date,
        reason: req.body.reason
     };
     await Appointment.create(data);
      res.status(200).json(data);
//    res.status(200).json(req.body);
  } catch (error) {
    console.log(error.message);
  }
};