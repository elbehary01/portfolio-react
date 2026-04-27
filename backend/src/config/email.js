import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVisitorThankYouEmail = async (visitorName, visitorEmail) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: visitorEmail,
      subject: `Thank you ${visitorName}!`,
      html: `
        <h2>Thank you ${visitorName}! 🙏</h2>
        <p>I appreciate you taking the time to reach out to me.</p>
        <p>I will review your message and get back to you soon.</p>
        <p>Best regards,<br/>Ahmed El Behary</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Thank you email sent to ${visitorEmail}`);
  } catch (error) {
    console.error('Error sending thank you email:', error.message);
    throw error;
  }
};

export const sendNotificationEmail = async (visitorName, visitorEmail, visitorMessage) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Message from ${visitorName}`,
      html: `
        <h3>New Message Received</h3>
        <p><strong>From:</strong> ${visitorName}</p>
        <p><strong>Email:</strong> ${visitorEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${visitorMessage.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Notification email sent to ${process.env.ADMIN_EMAIL}`);
  } catch (error) {
    console.error('Error sending notification email:', error.message);
    throw error;
  }
};
