import Doctor from "../models/DoctorModel.js";
import Speciality from "../models/SpecialityModel.js";
import db from "../src/config/Database.js";

export const getAllSpecialities = async (req, res) => {
  try {
    const specialities = await Speciality.findAll();
    res.status(200).json(specialities);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllDoctorsWithSpeciality = async (req, res) => {
  try {
    const doctor = await db.query(
      `SELECT * FROM doctors INNER JOIN specialities ON doctors.speciality_id = specialities.speciality_id`
    );
    res.status(200).json(doctor[0]);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    res.status(200).json(doctor);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllDoctorsBySpeciality = async (req, res) => {
  try {
    const doctors = await db.query(
    `SELECT doctor_id, doctor_name, speciality_name, image_path FROM doctors LEFT JOIN specialities ON doctors.speciality_id = specialities.speciality_id WHERE specialities.speciality_name LIKE '%${req.params.speciality_name}%'`
      );
    const speciality_name = doctors[0][0].speciality_name;
    console.log(speciality_name);
      const data = 
        {
          [speciality_name]: doctors[0]
  };
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getScheduleByDoctorId = async (req, res) => {
  try {
    const scheduleDay = await db.query(
      `SELECT DISTINCT d.doctor_name, p.day FROM practic_schedules p JOIN doctors D ON d.doctor_id = p.doctor_id WHERE d.doctor_id = ${req.params.id}`
    );


    const scheduleTime = await db.query(
      `SELECT DISTINCT d.doctor_name, p.begin_hour, p.begin_minute, p.finish_hour, p.finish_minute FROM practic_schedules p JOIN doctors D ON d.doctor_id = p.doctor_id WHERE d.doctor_id = ${req.params.id}`
    )

    const data = {
      doctor_id: parseInt(req.params.id),
      doctor_name: scheduleDay[0][0].doctor_name,
      day: [
        scheduleDay[0][0].day,
        scheduleDay[0][1].day,
        scheduleDay[0][2].day,
      ],
      session: [
           {
            begin_hour: scheduleTime[0][0].begin_hour,
            finish_hour: scheduleTime[0][0].finish_hour
          },
                     {
            begin_hour: scheduleTime[0][1].begin_hour,
            finish_hour: scheduleTime[0][1].finish_hour
          },
                     {
            begin_hour: scheduleTime[0][2].begin_hour,
            finish_hour: scheduleTime[0][2].finish_hour
          },
      ],
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAppointmentsByDoctorId = async (req, res) => {
  try {

    const doctor = await db.query(
      `SELECT doctor_id, doctor_name FROM doctors WHERE doctor_id = ${req.params.id}`
    );

    const appointments = await db.query(
      `SELECT
      appointments.schedule_id, 
      booking_date, 
      begin_hour, 
      finish_hour 
      FROM appointments 
      JOIN practic_schedules ON appointments.schedule_id = practic_schedules.schedule_id
      WHERE practic_schedules.doctor_id = ${req.params.id}`);
    const data = {
      doctor_id: doctor[0][0].doctor_id,
      doctor_name: doctor[0][0].doctor_name,
      appointments: appointments[0]
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getReceiptById = async (req, res) => {
  try {
    const receipt = await db.query(
      `
      SELECT 
      a.appointment_id, 
      p.patient_name,
      p.email, 
      p.gender, 
      p.date_of_birth,
      sp.speciality_name, 
      d.doctor_name, 
      a.booking_date, 
      s.begin_hour, 
      s.finish_hour, 
      a.reason 
      FROM appointments a 
      JOIN patients p ON a.patient_id = p.patient_id 
      JOIN practic_schedules s ON a.schedule_id = s.schedule_id 
      JOIN doctors d ON s.doctor_id = d.doctor_id 
      JOIN specialities sp ON d.speciality_id = sp.speciality_id
      WHERE a.appointment_id = ${req.params.appointment_id};
      `);
      const data = receipt[0];
    res.status(200).json(data);
  } catch (error) {
    
  }
};