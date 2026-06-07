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
      subject: `🛠️ New Service Request from ${data.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="color: #245DC1; margin: 0; font-size: 24px; letter-spacing: -0.025em;">TECHREVIVE</h1>
            <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Expert Computer Support Request</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; font-size: 16px; color: #245DC1; text-transform: uppercase; letter-spacing: 0.05em;">Customer Details</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #245DC1; text-decoration: none;">${data.phone}</a></p>
            <p style="margin: 8px 0;"><strong>Service:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 4px; font-size: 13px; font-weight: bold;">${data.service}</span></p>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 16px; color: #245DC1; text-transform: uppercase; letter-spacing: 0.05em;">Problem Description</h3>
            <div style="background-color: #ffffff; border-left: 4px solid #245DC1; padding: 12px 16px; font-style: italic; color: #475569;">
              "${data.message}"
            </div>
          </div>

          <div style="text-align: center; border-top: 1px solid #e2e8f0; pt: 20px;">
            <p style="font-size: 12px; color: #94a3b8; margin-top: 20px;">
              Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error: 'Failed to send email notification' };
  }
}
