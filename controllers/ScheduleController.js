import Appointment from '../models/AppointmentModel.js'
import db from '../src/config/Database.js'

export const bookAppointment = async (req, res) => {
  try {
    const patient = await db.query(
      `SELECT patient_id FROM patients WHERE patient_name = '${req.body.patient_name}'`
    )
    const doctor = await db.query(
      `SELECT doctor_id FROM doctors WHERE doctor_name = '${req.body.doctor_name}'`
    )

    const schedule = await db.query(
      `SELECT schedule_id FROM schedules WHERE doctor_id = ${doctor[0][0].doctor_id} AND day = '${req.body.day}' AND begin_hour = ${req.body.begin_hour} AND finish_hour = ${req.body.finish_hour}`
    )

    var data = {
      schedule_id: schedule[0],
      patient_id: patient[0],
      doctor_id: doctor[0],
      booking_date: req.body.booking_date,
      reason: req.body.reason
    }

    data = {
      schedule_id: schedule[0][0].schedule_id,
      patient_id: patient[0][0].patient_id,
      booking_date: req.body.booking_date,
      reason: req.body.reason
    }
    await Appointment.create(data)
    const appointmentResult = await db.query(
      `SELECT appointment_id FROM appointments WHERE patient_id = ${data.patient_id} AND booking_date = '${data.booking_date}' AND reason = '${data.reason}' LIMIT 1`
    )
    const appointment_id = appointmentResult[0][0].appointment_id
    
    res.status(200).json({
      appointment_id,
      data
    })
  } catch (error) {
    console.log(error.message)
  }
}
