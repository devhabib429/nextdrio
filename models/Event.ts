import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: String,
  speakers: [String],
  link: String,
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model('Event', eventSchema); 