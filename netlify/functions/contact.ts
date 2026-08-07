import type { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  // CORS Headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Successful preflight' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { 
      fullName, 
      emailAddress, 
      phoneNumber, 
      serviceInterestedIn, 
      projectMessage 
    } = body;

    if (!fullName || !emailAddress || !phoneNumber || !projectMessage) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Missing required fields: fullName, emailAddress, phoneNumber, and projectMessage are required.' 
        })
      };
    }

    const inquiryId = `INQ-${Date.now()}`;

    // Retrieve environment credentials
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'juixcodeweb@gmail.com';
    const smtpPass = process.env.SMTP_PASS || '';
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'juixcodeweb@gmail.com';

    let emailsSent = false;
    let emailStatusMsg = 'Inquiry processed.';

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      // Email 1: Notification to Juixcodeweb
      const adminMailOptions = {
        from: `"Juixcodeweb Contact Form" <${smtpUser}>`,
        to: notificationEmail,
        subject: `New Project Inquiry – ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111827; background-color: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
              <h2 style="color: #111827; margin-top: 0;">📩 New Project Inquiry Received</h2>
              <p style="font-size: 14px; color: #4b5563;">You have received a new project inquiry through your website contact form:</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 150px;">Client Name:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${fullName}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Email Address:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${emailAddress}">${emailAddress}</a></td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Phone Number:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${phoneNumber}">${phoneNumber}</a></td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Service Interested In:</td><td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${serviceInterestedIn || 'General Web Inquiry'}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold;">Project Message:</td><td style="padding: 8px 0; white-space: pre-wrap;">${projectMessage}</td></tr>
              </table>

              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                Inquiry Reference: ${inquiryId}
              </div>
            </div>
          </div>
        `
      };

      // Email 2: Confirmation to Client
      const clientMailOptions = {
        from: `"Yinyegha Joshua | Juixcodeweb" <${smtpUser}>`,
        to: emailAddress,
        subject: `Thank you for contacting Juixcodeweb – We've received your message!`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111827; background-color: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
              <h2 style="color: #111827; margin-top: 0;">Project Message Received! ✨</h2>
              <p style="font-size: 14px; color: #374151;">Hi ${fullName},</p>
              <p style="font-size: 14px; color: #374151; line-height: 1.6;">
                Thank you for reaching out to Juixcodeweb regarding your <strong style="color: #111827;">${serviceInterestedIn || 'website project'}</strong>. I have received your message and will carefully review your details.
              </p>
              
              <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0; font-size: 14px;">
                <p style="margin: 4px 0;"><strong>Guaranteed Response Time:</strong> Within 12 Hours</p>
                <p style="margin: 4px 0;"><strong>Working Hours:</strong> Mon – Sat, 9:00 AM – 11:30 PM (WAT / GMT+1)</p>
              </div>

              <p style="font-size: 14px; color: #374151; line-height: 1.6;">
                Prefer a faster response or need to send additional files? Feel free to connect directly via WhatsApp:
              </p>

              <div style="text-align: center; margin: 24px 0;">
                <a href="https://wa.link/7zoej3" target="_blank" style="background-color: #10b981; color: #ffffff; font-weight: bold; padding: 12px 24px; border-radius: 9999px; text-decoration: none; display: inline-block; font-size: 14px;">
                  Connect on WhatsApp
                </a>
              </div>

              <p style="font-size: 14px; color: #374151;">Best regards,</p>
              <p style="font-size: 14px; color: #111827; font-weight: bold; margin-bottom: 0;">Yinyegha Joshua<br/><span style="color: #6b7280; font-weight: normal; font-size: 12px;">Founder & Lead Designer, Juixcodeweb</span></p>
            </div>
          </div>
        `
      };

      try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(clientMailOptions);
        emailsSent = true;
        emailStatusMsg = 'Emails dispatched successfully.';
      } catch (emailErr: any) {
        console.error('SMTP Email Error:', emailErr?.message || emailErr);
        emailStatusMsg = `Email dispatch failed: ${emailErr?.message || 'SMTP authentication failure'}`;
      }
    } else {
      emailStatusMsg = 'SMTP_PASS not provided; inquiry registered without email dispatch.';
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Project inquiry submitted successfully!',
        inquiryId,
        emailsSent,
        emailStatusMsg
      })
    };

  } catch (error: any) {
    console.error('Contact Function Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Internal server error while processing project message.',
        error: error?.message || 'Unknown error'
      })
    };
  }
};
