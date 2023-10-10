// Import Package
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import { fileURLToPath } from 'url'

// Import Router
import ScheduleRoute from './routes/ScheduleRoute.js'
import PatientRoute from './routes/PatientRoute.js'
import db from './src/config/Database.js'

dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

// Route with Router
app.use(ScheduleRoute)
app.use(PatientRoute)

const PORT = process.env.PORT
db.sync({ alter: true })
  .then(() => {
    console.log('Database connected')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`)
    })
  })
  .catch(error => {
    console.log(`Unable to connect to database: ${error}`)
  })
