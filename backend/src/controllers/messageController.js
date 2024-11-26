import messageModel from '../models/messageModel.js';

const visitorMessage = async (req, res) => {
  try {
    const { email, name, message } = req.body;
    const messageData = {
      email,
      name,
      message,
      date: Date.now(),
    };
    const visitorData = new messageModel(messageData);
    await visitorData.save();
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
