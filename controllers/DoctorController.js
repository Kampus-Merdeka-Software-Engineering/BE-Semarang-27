import Doctor from "../models/DoctorModel.js";
import db from "../src/config/Database.js";

export const getAllDoctorsWithSpeciality = async (req, res) => {
  try {
    const doctor = await db.query(
      `SELECT * FROM doctors INNER JOIN specialities ON doctors.speciality_id = specialities.speciality_id`
    );
    res.status(200).json(doctor);
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
        `${scheduleTime[0][0].begin_hour} - ${scheduleTime[0][0].finish_hour}`,
        `${scheduleTime[0][1].begin_hour} - ${scheduleTime[0][1].finish_hour}`,
        `${scheduleTime[0][2].begin_hour} - ${scheduleTime[0][2].finish_hour}`,
      ],
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
