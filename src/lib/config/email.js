/**
 * Email Configuration
 * Handles email sending using Nodemailer
 */

import nodemailer from "nodemailer";
import { logError } from "@/lib/middleware/errorHandler.js";

/**
 * Create and configure Nodemailer transporter
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    family: 4,
  });
};

/**
 * Send email notification
 * @param {Object} options - Email options
 * @param {string|Array<string>} options.to - Recipient email address(es)
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML email body
 * @param {string} options.text - Plain text email body (optional)
 * @returns {Promise<Object>}
 */
export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const transporter = createTransporter();

    const recipients = Array.isArray(to) ? to : [to];

    const mailOptions = {
      from: `"DN Designs" <${process.env.EMAIL_USER}>`,
      to: recipients.join(", "),
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ""),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      recipients: recipients.length,
    };
  } catch (error) {
    logError(error, { function: "sendEmail", to, subject });
    throw error;
  }
};

/**
 * Send contact form notification email
 * @param {Object} contactData - Contact form data
 * @param {Array<string>} additionalEmails - Additional email addresses
 * @returns {Promise<Object>}
 */
export const sendContactNotification = async (
  contactData,
  additionalEmails = []
) => {
  const { name, email, mobile, message, pageName } = contactData;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; color: #1f2937; }
          .wrapper { width: 100%; table-layout: fixed; background-color: #f4f4f5; padding-bottom: 40px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          .header { background: linear-gradient(135deg, #111827 0%, #374151 100%); padding: 40px 30px; text-align: center; }
          .logo { font-size: 24px; font-weight: 800; color: #ffffff; margin-bottom: 8px; letter-spacing: -0.5px; }
          .subtitle { color: #9ca3af; font-size: 14px; margin: 0; font-weight: 500; }
          .content { padding: 40px 30px; }
          .field-group { margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb; }
          .field-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; font-weight: 700; margin-bottom: 6px; }
          .value { font-size: 16px; color: #111827; font-weight: 500; line-height: 1.5; }
          .value a { color: #2563eb; text-decoration: none; font-weight: 600; }
          .value a:hover { text-decoration: underline; }
          .message-box { background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 5px; }
          .source-badge { display: inline-block; background-color: #e5e7eb; color: #374151; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-top: 5px; }
          .footer { background-color: #f9fafb; padding: 24px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; }
          .btn { display: inline-block; background-color: #111827; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 10px; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <br>
          <div class="container">
            <div class="header">
              <div class="logo">DN Designs</div>
              <p class="subtitle">New detailed inquiry received</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Contact Source</div>
                <div class="value">
                  <span class="source-badge">${
                    pageName || "General Contact Form"
                  }</span>
                </div>
              </div>
              
              <div class="field-group">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field-group">
                <div class="label">Contact Details</div>
                <div class="value" style="margin-bottom: 8px;">
                  <span style="color: #6b7280;">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                <div class="value">
                  <span style="color: #6b7280;">Mobile:</span> <a href="tel:${mobile}">${mobile}</a>
                </div>
              </div>

              <div class="field-group">
                <div class="label">Message Content</div>
                <div class="value message-box">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" class="btn">Reply to ${
    name.split(" ")[0]
  }</a>
              </div>
            </div>
            <div class="footer">
              <p>Received via DN Designs Website • ${new Date().toLocaleDateString()}</p>
              <p>This is an automated notification.</p>
            </div>
          </div>
          <br>
        </div>
      </body>
    </html>
  `;

  const recipients = [process.env.ADMIN_EMAIL];

  additionalEmails.forEach((emailAddr) => {
    if (emailAddr && !recipients.includes(emailAddr)) {
      recipients.push(emailAddr);
    }
  });

  return await sendEmail({
    to: recipients,
    subject: `New Contact Form Submission from ${name}`,
    html: html,
  });
};

/**
 * Send promotional/advertisement email
 * @param {Array<string>} recipients - Array of recipient email addresses
 * @param {string} subject - Email subject
 * @param {string} content - Email content (HTML or plain text)
 * @param {boolean} isHtml - Whether content is HTML
 * @returns {Promise<Object>}
 */
export const sendPromotionalEmail = async (
  recipients,
  subject,
  content,
  isHtml = null
) => {
  if (isHtml === null) {
    isHtml = /<[a-z][\s\S]*>/i.test(content);
  }

  let html, text;

  if (isHtml) {
    html = content;
    text = content
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  } else {
    html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
            .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="content">${content.replace(/\n/g, "<br>")}</div>
          <div class="footer"><p>This email was sent by DN Designs</p></div>
        </body>
      </html>
    `;
    text = content;
  }

  return await sendEmail({
    to: recipients,
    subject: subject,
    html: html,
    text: text,
  });
};

export default { sendEmail, sendContactNotification, sendPromotionalEmail };
