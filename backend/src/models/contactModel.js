import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Number, required: true },
});

const contactModel =
  mongoose.model.message || mongoose.model('contact', contactSchema);

export default contactModel;

// mongodb+srv://elbehary01:oSman415@cluster0.z8moc.mongodb.net/contact?retryWrites=true&w=majority&appName=Cluster0
