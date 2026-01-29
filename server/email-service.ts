import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

// Determine recipient based on service
const getRecipientEmail = (service: string): string => {
  // All services go to Aditi
  return 'aditi@colonialconsultantsusa.com';
};

// Send email notification
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Skip email sending if SMTP credentials are not configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn('SMTP credentials not configured. Email not sent.');
      return true; // Return true to not block form submission
    }

    const transporter = createTransporter();
    const recipient = getRecipientEmail(formData.service);

    // Email to the company
    const companyMailOptions = {
      from: `"Colonial Consultants Website" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: `New Contact Form Submission - ${formData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a252f; border-bottom: 3px solid #d4a259; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a252f; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
            <p><strong>Service Interested In:</strong> ${formData.service}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #d4a259; margin: 20px 0;">
            <h3 style="color: #1a252f; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p>This email was sent from the Colonial Consultants contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-US', { 
              timeZone: 'America/New_York',
              dateStyle: 'full',
              timeStyle: 'long'
            })}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to the customer
    const customerMailOptions = {
      from: `"Colonial Consultants" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: 'Thank you for contacting Colonial Consultants',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a252f; border-bottom: 3px solid #d4a259; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p style="line-height: 1.6; color: #333;">Dear ${formData.name},</p>
          
          <p style="line-height: 1.6; color: #333;">
            Thank you for contacting Colonial Consultants. We have received your inquiry regarding 
            <strong>${formData.service}</strong> and one of our team members will get back to you shortly.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1a252f; margin-top: 0;">Your Submission Details</h3>
            <p><strong>Service:</strong> ${formData.service}</p>
            <p><strong>Message:</strong></p>
            <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <p style="line-height: 1.6; color: #333;">
            In the meantime, feel free to explore our <a href="https://colonialconsultantsusa.com" style="color: #d4a259;">website</a> 
            to learn more about our services and past projects.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #1a252f; color: white; border-radius: 8px;">
            <h3 style="margin-top: 0;">Contact Information</h3>
            <p>Colonial Consultants<br>
            Email: info@colonialconsultantsusa.com<br>
            Website: www.colonialconsultantsusa.com</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(customerMailOptions);

    console.log(`Contact form email sent to: ${recipient}`);
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};
