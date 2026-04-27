import contactModel from '../models/contactModel.js';
import { sendVisitorThankYouEmail, sendNotificationEmail } from '../config/email.js';

const visitorMessage = async (req, res) => {
  try {
    const { email, name, message } = req.body;
    const messageData = {
      email,
      name,
      message,
      date: Date.now(),
    };
    const visitorData = new contactModel(messageData);
    await visitorData.save();

    // Send thank you email to visitor
    await sendVisitorThankYouEmail(name, email);

    // Send notification email to admin
    await sendNotificationEmail(name, email, message);

    res.json({
      success: true,
      message: 'Thanks for your message, I will get back soon to you...',
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { visitorMessage };
