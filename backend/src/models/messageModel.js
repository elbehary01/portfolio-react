import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Number, required: true },
});

const messageModel =
  mongoose.model.message || mongoose.model('message', messageSchema);

export default messageModel;
