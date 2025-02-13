import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  location: String,
  type: String,
  experience: String,
  description: String,
  requirements: [String],
  benefits: [String],
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  }
}, { timestamps: true });

export default mongoose.models.Career || mongoose.model('Career', careerSchema); 