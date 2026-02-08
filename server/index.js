
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');
require('dotenv').config();
const generateEmailTemplate = require('./emailTemplates');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/adzenity';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Inquiry Schema
const inquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    website: String,
    service: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());

// Transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Email Route
app.post('/send-email', async (req, res) => {
    const { name, email, phone, website, service, message } = req.body;

    try {
        // 1. Save to Database
        const newInquiry = new Inquiry({ name, email, phone, website, service, message });
        await newInquiry.save();

        // 2. Send Immediate Email Notification
        const { subject, text, html } = generateEmailTemplate({ name, email, phone, website, service, message });

        const mailOptions = {
            from: process.env.EMAIL_USER, // SENDER MUST BE THE AUTHENTICATED USER
            replyTo: email, // User's email goes here so you can reply to them
            to: process.env.EMAIL_USER,
            subject: subject,
            text: text,
            html: html,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Inquiry received and email sent!' });
    } catch (error) {
        console.error('Error handling inquiry:', error);
        res.status(500).json({ success: false, message: 'Failed to process inquiry.' });
    }
});

// Daily Report Cron Job (Every day at 5:00 PM)
// Pattern: '0 17 * * *'
cron.schedule('0 18 * * *', async () => {
    console.log('Generating daily inquiry report...');

    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const inquiries = await Inquiry.find({
            createdAt: { $gte: today }
        });

        if (inquiries.length === 0) {
            console.log('No inquiries found for today.');
            return;
        }

        // Generate CSV content
        let csvContent = 'Name,Email,Phone,Website,Service,Message,Date\n';
        inquiries.forEach(inq => {
            const date = new Date(inq.createdAt).toLocaleString();
            // Basic CSV escape (wrapping in quotes)
            const row = [
                `"${inq.name}"`,
                `"${inq.email}"`,
                `"${inq.phone || ''}"`,
                `"${inq.website || ''}"`,
                `"${inq.service}"`,
                `"${inq.message.replace(/"/g, '""')}"`,
                `"${date}"`
            ].join(',');
            csvContent += row + '\n';
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Daily Inquiry Report - ${new Date().toLocaleDateString()}`,
            text: `Attached is the inquiry report for today, ${new Date().toLocaleDateString()}. Total inquiries: ${inquiries.length}`,
            attachments: [
                {
                    filename: `inquiries_${new Date().toISOString().split('T')[0]}.csv`,
                    content: csvContent
                }
            ]
        };

        await transporter.sendMail(mailOptions);
        console.log('Daily report sent successfully.');
    } catch (error) {
        console.error('Error generating daily report:', error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
