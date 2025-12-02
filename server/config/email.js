/**
 * Email Configuration
 * Handles email sending using Nodemailer
 */

import nodemailer from "nodemailer";
import { logError } from "../middleware/errorHandler.js";

/**
 * Create and configure Nodemailer transporter
 * Uses SMTP settings from environment variables
 */
const createTransporter = () => {
  return nodemailer.createTransport({
    // host: process.env.EMAIL_HOST,
    // port: parseInt(process.env.EMAIL_PORT) || 587,
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

/**
 * Send email notification
 * @param {Object} options - Email options
 * @param {string|Array<string>} options.to - Recipient email address(es) - can be single email or array
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML email body
 * @param {string} options.text - Plain text email body (optional)
 * @returns {Promise<Object>}
 */
export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const transporter = createTransporter();

    // Convert to array if single email
    const recipients = Array.isArray(to) ? to : [to];

    const mailOptions = {
      from: `"DN Designs" <${process.env.EMAIL_USER}>`,
      to: recipients.join(", "), // Nodemailer accepts comma-separated string
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ""), // Strip HTML tags for text version
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
 * Send contact form notification email to admin and all email groups
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.name - Contact name
 * @param {string} contactData.email - Contact email
 * @param {string} contactData.mobile - Contact mobile number
 * @param {string} contactData.message - Contact message
 * @param {Array<string>} additionalEmails - Additional email addresses from database
 * @returns {Promise<Object>}
 */
export const sendContactNotification = async (
  contactData,
  additionalEmails = []
) => {
  const { name, email, mobile, message } = contactData;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; color: #333; }
          .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="label">Mobile:</div>
              <div class="value"><a href="tel:${mobile}">${mobile}</a></div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated notification from DN Designs website.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Combine admin email with all emails from database
  const recipients = [process.env.ADMIN_EMAIL];

  // Add all emails from database (remove duplicates)
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
 * Send promotional/advertisement email to email group
 * @param {Array<string>} recipients - Array of recipient email addresses
 * @param {string} subject - Email subject
 * @param {string} content - Email content (HTML or plain text)
 * @param {boolean} isHtml - Whether content is HTML (auto-detected if not provided)
 * @returns {Promise<Object>}
 */
export const sendPromotionalEmail = async (
  recipients,
  subject,
  content,
  isHtml = null
) => {
  // Auto-detect HTML if not specified
  if (isHtml === null) {
    isHtml = /<[a-z][\s\S]*>/i.test(content);
  }

  let html, text;

  if (isHtml) {
    // Content is HTML
    html = content;
    text = content
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  } else {
    // Content is plain text - convert to HTML
    html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
            }
            .content { 
              background-color: #f9f9f9; 
              padding: 20px; 
              border-radius: 5px; 
            }
            .footer { 
              text-align: center; 
              padding: 20px; 
              color: #777; 
              font-size: 12px; 
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="content">
            ${content.replace(/\n/g, "<br>")}
          </div>
          <div class="footer">
            <p>This email was sent by DN Designs</p>
          </div>
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
