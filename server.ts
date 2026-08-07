import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Ensure local bookings storage file exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const bookingsFilePath = path.join(dataDir, 'bookings.json');
if (!fs.existsSync(bookingsFilePath)) {
  fs.writeFileSync(bookingsFilePath, JSON.stringify([]), 'utf-8');
}

// Helper: Get bookings
function getStoredBookings() {
  try {
    const data = fs.readFileSync(bookingsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

// Helper: Save booking
function saveBooking(booking: any) {
  const bookings = getStoredBookings();
  bookings.push(booking);
  fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2), 'utf-8');
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// GET all bookings
app.get('/api/bookings', (req, res) => {
  const bookings = getStoredBookings();
  res.json({ success: true, count: bookings.length, bookings });
});

// POST Discovery Call Booking
app.post('/api/book-discovery', async (req, res) => {
  try {
    const { 
      fullName, 
      emailAddress, 
      phoneNumber, 
      primaryService, 
      selectedDay, 
      selectedTimeSlot, 
      additionalInfo 
    } = req.body;

    if (!fullName || !emailAddress || !phoneNumber || !primaryService || !selectedDay || !selectedTimeSlot) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required booking fields. Please provide name, email, phone, service, date, and time.' 
      });
    }

    const bookingId = `BOOK-${Date.now()}`;
    const dateFormatted = typeof selectedDay === 'object' ? selectedDay.fullDateStr || JSON.stringify(selectedDay) : selectedDay;

    const newBooking = {
      id: bookingId,
      fullName,
      emailAddress,
      phoneNumber,
      primaryService,
      selectedDay: dateFormatted,
      selectedTimeSlot,
      additionalInfo: additionalInfo || '',
      createdAt: new Date().toISOString()
    };

    // 1. Save to local storage database
    saveBooking(newBooking);

    // 2. Email dispatch via Nodemailer / Gmail SMTP if credentials provided
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'juixcodeweb@gmail.com';
    const smtpPass = process.env.SMTP_PASS || '';
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'juixcodeweb@gmail.com';

    let emailsSent = false;
    let emailStatusMsg = 'Booking stored locally.';

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      // Email 1: Notification to Juixcodeweb
      const adminMailOptions = {
        from: `"Juixcodeweb Booking System" <${smtpUser}>`,
        to: notificationEmail,
        subject: `New Discovery Call Booking – ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111827; background-color: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
              <h2 style="color: #111827; margin-top: 0;">📅 New Discovery Call Booking Received</h2>
              <p style="font-size: 14px; color: #4b5563;">You have received a new consultation request through your website:</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 140px;">Client Name:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${fullName}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Email Address:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${emailAddress}">${emailAddress}</a></td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Phone Number:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${phoneNumber}">${phoneNumber}</a></td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Selected Service:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${primaryService}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Selected Day:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>${dateFormatted}</strong></td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Selected Time:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>${selectedTimeSlot}</strong></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Additional Notes:</td><td style="padding: 8px 0;">${additionalInfo || 'None provided.'}</td></tr>
              </table>

              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                Booking Reference: ${bookingId}
              </div>
            </div>
          </div>
        `
      };

      // Email 2: Confirmation to Client
      const clientMailOptions = {
        from: `"Yinyegha Joshua | Juixcodeweb" <${smtpUser}>`,
        to: emailAddress,
        subject: `Your Discovery Call has been confirmed – Juixcodeweb`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111827; background-color: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
              <h2 style="color: #111827; margin-top: 0;">Discovery Call Confirmed! 🎉</h2>
              <p style="font-size: 14px; color: #374151;">Hi ${fullName},</p>
              <p style="font-size: 14px; color: #374151; line-height: 1.6;">
                Thank you for scheduling a discovery call with Juixcodeweb. Your consultation request has been successfully registered. Here are your booking details:
              </p>
              
              <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0; font-size: 14px;">
                <p style="margin: 4px 0;"><strong>Service:</strong> ${primaryService}</p>
                <p style="margin: 4px 0;"><strong>Date:</strong> ${dateFormatted}</p>
                <p style="margin: 4px 0;"><strong>Time Slot:</strong> ${selectedTimeSlot} (WAT / GMT+1)</p>
              </div>

              <p style="font-size: 14px; color: #374151; line-height: 1.6;">
                Need to chat immediately or share additional links before our call? Feel free to send a direct message on WhatsApp:
              </p>

              <div style="text-align: center; margin: 24px 0;">
                <a href="https://wa.link/7zoej3" target="_blank" style="background-color: #10b981; color: #ffffff; font-weight: bold; padding: 12px 24px; border-radius: 9999px; text-decoration: none; display: inline-block; font-size: 14px;">
                  Chat on WhatsApp
                </a>
              </div>

              <p style="font-size: 14px; color: #374151;">Looking forward to connecting with you!</p>
              <p style="font-size: 14px; color: #111827; font-weight: bold; margin-bottom: 0;">Yinyegha Joshua<br/><span style="font-[#6b7280]; font-weight: normal; font-size: 12px;">Founder & Lead Designer, Juixcodeweb</span></p>
            </div>
          </div>
        `
      };

      try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(clientMailOptions);
        emailsSent = true;
        emailStatusMsg = 'Emails sent successfully.';
      } catch (err: any) {
        console.error('SMTP Email Error:', err?.message || err);
        emailStatusMsg = `Booking saved, but email dispatch error: ${err?.message || 'Check SMTP configuration'}`;
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Discovery call booked successfully!',
      bookingId,
      emailsSent,
      emailStatusMsg,
      booking: newBooking
    });

  } catch (error: any) {
    console.error('Booking API Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process discovery booking.',
      error: error?.message || 'Server error'
    });
  }
});

// Setup Vite Development Middleware or Production Static Server
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
