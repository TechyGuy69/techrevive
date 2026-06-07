
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendServiceEmail(data: {
  name: string;
  phone: string;
  service: string;
  message: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is missing');
    return { success: false, error: 'Email service configuration missing' };
  }

  try {
    await resend.emails.send({
      from: 'TECHREVIVE Notifications <onboarding@resend.dev>',
      to: 'banerjeeusnish2@gmail.com',
      replyTo: 'banerjeeusnish2@gmail.com',
      subject: `🛠️ New Service Request: ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 24px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #245DC1 0%, #0ea5e9 100%); padding: 40px 20px; text-align: center; color: white; }
            .header h1 { margin: 0; font-size: 28px; letter-spacing: -0.025em; font-weight: 800; }
            .header p { margin: 8px 0 0; opacity: 0.9; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; }
            .content { padding: 32px; }
            .section-title { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; }
            .info-grid { display: grid; gap: 16px; margin-bottom: 32px; }
            .info-item { background: #f8fafc; padding: 16px; border-radius: 12px; border: 1px solid #f1f5f9; }
            .info-label { font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; margin-bottom: 4px; }
            .info-value { font-size: 16px; font-weight: 600; color: #0f172a; }
            .message-box { background: #ffffff; border-left: 4px solid #245DC1; padding: 20px; font-style: italic; color: #334155; background-color: #f1f5f9; border-radius: 0 12px 12px 0; }
            .footer { padding: 24px; text-align: center; background: #f8fafc; border-top: 1px solid #e2e8f0; }
            .footer p { margin: 0; font-size: 12px; color: #94a3b8; }
            .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; background: #dbeafe; color: #1e40af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>TECHREVIVE</h1>
              <p>New Service Request Received</p>
            </div>
            
            <div class="content">
              <div class="section-title">Customer Information</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Customer Name</div>
                  <div class="info-value">${data.name}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Contact Number</div>
                  <div class="info-value"><a href="tel:${data.phone}" style="color: #245DC1; text-decoration: none;">${data.phone}</a></div>
                </div>
                <div class="info-item">
                  <div class="info-label">Service Type</div>
                  <div class="info-value"><span class="badge">${data.service}</span></div>
                </div>
              </div>

              <div class="section-title">Problem Description</div>
              <div class="message-box">
                "${data.message}"
              </div>
            </div>

            <div class="footer">
              <p>This request was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })}</p>
              <p style="margin-top: 8px;">Managed by Usnish Banerjee • TechRevive 2025</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error: 'Failed to send email notification' };
  }
}
