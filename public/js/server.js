const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Setup Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Route to send OTP
app.post('/send-otp', (req, res) => {
    const email = req.body.email;
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6 digit OTP

    // Send OTP email
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send('Error sending OTP');
        }
        res.send('OTP sent successfully');
    });
});

// Route for registration (mock)
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Here, you can add database logic to save user info
    res.send('User registered successfully');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
