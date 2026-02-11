
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');
require('dotenv').config();
const generateEmailTemplate = require('./emailTemplates');

const app = express();
const PORT = process.env.PORT || 5000;

// --- ENVIRONMENT VARIABLE VALIDATION ---
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS'];
const missingEnvVars = requiredEnvVars.filter(key => !process.env[key]);

if (!process.env.MONGODB_URI && !process.env.MONGO_URI) {
    missingEnvVars.push('MONGODB_URI (or MONGO_URI)');
}

if (missingEnvVars.length > 0) {
    console.error(`FATAL ERROR: Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

// MongoDB Connection Utility
let isConnected = false; // Track connection status

const connectDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
        if (!uri) {
            throw new Error('MONGODB_URI (or MONGO_URI) environment variable is not defined.');
        }

        const db = await mongoose.connect(uri);
        isConnected = db.connections[0].readyState;
        console.log('MongoDB Connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // Don't exit process in serverless, just throw
        throw error;
    }
};

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
    origin: process.env.CLIENT_URL || '*', // Allow all origins if CLIENT_URL is not set (debug mode)
    methods: ['POST', 'GET', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
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

// Verify Transporter Connection on Startup
transporter.verify(function (error, success) {
    if (error) {
        console.error('Nodemailer Connection Error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

// Email Route
app.post('/send-email', async (req, res) => {
    console.log('Received inquiry request:', req.body); // Log request body (be careful with PII in production, but needed for debugging)
    const { name, email, phone, website, service, message } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Server misconfiguration: EMAIL_USER or EMAIL_PASS is missing.');
        return res.status(500).json({ success: false, message: 'Server misconfiguration.' });
    }

    try {
        // 0. Connect to Database (ensure connection is ready)
        await connectDB();

        // 1. Save to Database
        console.log('Saving inquiry to database...');
        const newInquiry = new Inquiry({ name, email, phone, website, service, message });
        await newInquiry.save();
        console.log('Inquiry saved successfully.');

        // 2. Send Immediate Email Notification
        console.log('Generating email template...');
        const { subject, text, html } = generateEmailTemplate({ name, email, phone, website, service, message });

        const mailOptions = {
            from: process.env.EMAIL_USER, // SENDER MUST BE THE AUTHENTICATED USER
            replyTo: email, // User's email goes here so you can reply to them
            to: process.env.EMAIL_USER,
            subject: subject,
            text: text,
            html: html,
        };

        console.log('Sending email...');
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
        res.status(200).json({ success: true, message: 'Inquiry received and email sent!' });
    } catch (error) {
        console.error('CRITICAL ERROR in /send-email:', error);
        // Send actual error message for debugging (remove in strict production if needed)
        res.status(500).json({ success: false, message: 'Failed to process inquiry.', error: error.message });
    }
});

// Daily Report Cron Job (Every day at 6:00 PM)
// Pattern: '0 18 * * *'
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
    // Connect to database on startup
    connectDB().catch(err => {
        console.error('Failed to connect to MongoDB on startup:', err);
    });
});
