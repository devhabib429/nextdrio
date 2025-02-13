import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['contact', 'project'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  company: String,
  message: String,
  service: String,
  status: {
    type: String,
    enum: ['new', 'inProgress', 'completed'],
    default: 'new'
  }
}, { timestamps: true });

export default mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema); 