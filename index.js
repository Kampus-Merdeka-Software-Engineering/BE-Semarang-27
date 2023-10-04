// Import Package
import express from 'express'
import path from 'path';
import dotenv from 'dotenv';
import cors from "cors";

// Import Router
import ScheduleRoute from "./routes/ScheduleRoute.js";
import PatientRoute from "./routes/PatientRoute.js";
import db from './src/config/Database.js';


dotenv.config();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Route with Router
app.use(ScheduleRoute);
app.use(PatientRoute);

// Raw Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './public/about.html'));
});

app.get('/schedule/:speciality', (req, res) => {
    res.sendFile(path.join(__dirname, './public/schedule.html'));
});

app.get('/schedule', (req, res) => {
    res.sendFile(path.join(__dirname, './public/schedule.html'));
});



// Expected JSON for Schedule Page.
app.get('/json-schedules', (req, res) => {
    res.status(200);
    res.json({
        message: 'This is The Schedules',
        data: [{
            'doctors': [
                {   
                'general': [
                    {
                    'name': 'Doctor G1',
                    'path': 'doctorg1.jpg',
                    'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    'sessions': ['9:00 - 10:00', '11:00 - 12:00', '13:00 - 14:00', '15:00 - 16:00']
                    },
                    {
                    'name': 'Doctor G2',
                    'path': 'doctorg2.jpg',
                    'days': ['Tuesday', 'Wednesday', 'Friday'],
                    'sessions': ['10:00 - 11:00', '12:45 - 13:30']
                    },
                    ]    
                },
                {
                    'dentist': [
                    {
                    'name': 'Doctor D1',
                    'path': 'doctord1.jpg',
                    'days': ['Monday', 'Thursday'],
                    'sessions': ['9:30 - 10:30', '11:00 - 12:00', '13:00 - 14:00', '15:00 - 16:00']
                    },
                    {
                    'name': 'Doctor D2',
                    'path': 'doctord2.jpg',
                    'days': ['Monday', 'Wednesday','Thursday'],
                    'sessions': ['8:00 - 9:00', '13:30 - 14:30', '15:45 - 16:45']
                    },
                    ] 
                }
        ]
        }
        ] 
    });
});

app.get('/patient-form', (req, res) => {
    res.sendFile(path.join(__dirname, './public/patient-form.html'));
});

// app.post('/patient-form', (req, res) => {
//     console.log(req.body);
//     res.status(200);
//     res.json({
//         message: 'Data has been received',
//         data: req.body
//     });
// })

app.get('/receipt/:id', (req, res) => {
    console.log(req.params.id);
    res.sendFile(path.join(__dirname, './public/receipt.html'));
});

const PORT = process.env.PORT;
db.sync({alter: true})
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
  })
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });
