import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Get user email from the request (you'll need to pass this from the form)
    const body = await req.json();
    const userEmail = body.email || 'user@example.com'; // Replace with actual user email from form data

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.IMMIGRATION_EMAIL,
        pass: process.env.IMMIGRATION_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.IMMIGRATION_EMAIL,
      to: userEmail,
      subject: 'Your Immigration Forms Package - Cabo Immigration Services',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #501027; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .success-box { background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 4px; margin: 20px 0; }
            .info-box { background: #d1ecf1; border: 1px solid #bee5eb; padding: 15px; border-radius: 4px; margin: 20px 0; }
            .button { background: #501027; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 10px 0; }
            .checklist { list-style: none; padding: 0; }
            .checklist li { padding: 8px 0; border-bottom: 1px solid #ddd; }
            .checklist li:before { content: "✓ "; color: #28a745; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎯 Your Immigration Forms Are Ready!</h2>
              <p>Cabo Immigration Services</p>
            </div>
            <div class="content">
              <div class="success-box">
                <h3 style="margin-top: 0;">✓ Application Successfully Submitted</h3>
                <p>Thank you for choosing Cabo Immigration Services. Your immigration packet has been prepared and is attached to this email.</p>
              </div>

              <h3>📦 What's Included:</h3>
              <ul class="checklist">
                <li>Form FMM-1 (Migratory Form) - Pre-filled with your information</li>
                <li>Residency Application - Pre-filled and ready for review</li>
                <li>Document Checklist for your INM Appointment</li>
                <li>Step-by-Step Preparation Guide</li>
              </ul>

              <div class="info-box">
                <h3 style="margin-top: 0;">📋 What Happens Next?</h3>
                <ol>
                  <li><strong>Within 24 hours:</strong> Our immigration specialist will contact you to schedule a consultation</li>
                  <li><strong>Review forms:</strong> Carefully review all documents for accuracy</li>
                  <li><strong>Sign documents:</strong> Sign where indicated on the forms</li>
                  <li><strong>INM Appointment:</strong> We'll help you schedule and prepare for your appointment</li>
                </ol>
              </div>

              <p style="margin-top: 30px;">
                <a href="tel:+526241259640" class="button">📞 Call Us: 624 125 9640</a>
              </p>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
                <h4>🔒 Your Information is Secure</h4>
                <p style="font-size: 14px; color: #666;">
                  All information you've provided is encrypted and stored securely. We maintain strict confidentiality 
                  in accordance with Mexican privacy laws (LFPDPPP). Your data will only be used for processing your 
                  immigration application and will never be shared with third parties.
                </p>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px;">
                  <strong>⚠️ Important:</strong> Please check your spam/junk folder if you don't see the attachments. 
                  Add our email to your contacts to ensure future communications reach your inbox.
                </p>
              </div>

              <p style="margin-top: 30px; color: #666; font-size: 14px; text-align: center;">
                Questions? Reply to this email or call us at 624 125 9640<br>
                <strong>Cabo Immigration Services</strong><br>
                Your Trusted Immigration Partner in Cabo San Lucas
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Your Immigration Forms Are Ready!

Cabo Immigration Services

Thank you for choosing Cabo Immigration Services. Your immigration packet has been prepared.

What's Included:
✓ Form FMM-1 (Migratory Form) - Pre-filled
✓ Residency Application - Pre-filled
✓ Document Checklist for INM Appointment
✓ Step-by-Step Preparation Guide

What Happens Next?
1. Within 24 hours: Our specialist will contact you
2. Review all forms for accuracy
3. Sign where indicated
4. We'll help schedule your INM appointment

Your Information is Secure:
All information is encrypted and stored securely. We maintain strict confidentiality 
in accordance with Mexican privacy laws. Your data will only be used for your 
immigration application and will never be shared with third parties.

Questions? Call us at 624 125 9640

Cabo Immigration Services
Your Trusted Immigration Partner in Cabo San Lucas
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Forms emailed successfully' 
    });
  } catch (error) {
    console.error('Error sending forms email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
