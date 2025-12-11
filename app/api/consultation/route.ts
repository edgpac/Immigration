import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, preferredDate, message } = await req.json();

    // DEBUG: Check if environment variables are loaded
    console.log('Environment variables check:', {
      emailExists: !!process.env.IMMIGRATION_EMAIL,
      passwordExists: !!process.env.IMMIGRATION_APP_PASSWORD,
      email: process.env.IMMIGRATION_EMAIL,
      passwordLength: process.env.IMMIGRATION_APP_PASSWORD?.length
    });

    // Validate environment variables
    if (!process.env.IMMIGRATION_EMAIL || !process.env.IMMIGRATION_APP_PASSWORD) {
      console.error('Missing environment variables!');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error. Please contact support.' 
        },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.IMMIGRATION_EMAIL,
        pass: process.env.IMMIGRATION_APP_PASSWORD,
      },
      debug: true, // Enable debug output
      logger: true // Log to console
    });

    // Verify transporter configuration
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Format the preferred date
    const formattedDate = preferredDate 
      ? new Date(preferredDate).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      : 'Not specified';

    // Email content
    const mailOptions = {
      from: process.env.IMMIGRATION_EMAIL,
      to: process.env.IMMIGRATION_EMAIL,
      subject: `New Consultation Request - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #501027; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #501027; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎯 New Consultation Request</h2>
              <p>Los Cabos Immigration Services</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📞 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📅 Preferred Date:</div>
                <div class="value">${formattedDate}</div>
              </div>
              
              ${message ? `
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
                <p style="color: #666; font-size: 14px;">
                  <strong>Action Required:</strong> Please contact this client within 24 hours to schedule their consultation.
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Consultation Request - Los Cabos Immigration Services

Name: ${name}
Email: ${email}
Phone: ${phone}
Preferred Date: ${formattedDate}

Message:
${message || 'No message provided'}

---
Please contact this client within 24 hours to schedule their consultation.
      `,
    };

    // Send email
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Consultation request sent successfully' 
    });

  } catch (error: any) {
    // Detailed error logging
    console.error('Full error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack
    });

    // Return user-friendly error
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send consultation request. Please call us at 624 125 9640 or email chatscalendar@gmail.com directly.' 
      },
      { status: 500 }
    );
  }
}