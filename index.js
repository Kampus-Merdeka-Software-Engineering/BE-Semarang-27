const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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
                    'path': '/assets/img/doctorg1.jpg',
                    'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    'sessions': ['9-10', '11-12', '13-14', '15-16']
                    },
                    {
                    'name': 'Doctor G2',
                    'path': '/assets/img/doctorg2.jpg',
                    'days': ['Tuesday', 'Wednesday', 'Friday'],
                    'sessions': ['10-11', '12-13']
                    },
                    ]    
                },
                {
                    'dentist': [
                    {
                    'name': 'Doctor D1',
                    'path': '/assets/img/doctord1.jpg',
                    'days': ['Monday', 'Thursday'],
                    'sessions': ['9-10', '11-12', '13-14', '15-16']
                    },
                    {
                    'name': 'Doctor D2',
                    'path': '/assets/img/doctord2.jpg',
                    'days': ['Monday', 'Wednesday','Thursday'],
                    'sessions': ['8-9', '11-12', '13-14', '15-16']
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

app.post('/patient-form', (req, res) => {
    res.json(req.body);
})

app.get('/receipt', (req, res) => {
    res.sendFile(path.join(__dirname, './public/receipt.html'));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});