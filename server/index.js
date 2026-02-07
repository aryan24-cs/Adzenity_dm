
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const generateEmailTemplate = require('./emailTemplates');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());

// Email Route
app.post('/send-email', async (req, res) => {
    const { name, email, phone, website, service, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const { subject, text, html } = generateEmailTemplate({ name, email, phone, website, service, message });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: text,
            html: html,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
