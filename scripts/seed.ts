const { connectDB } = require("../lib/db");
const mongoose = require('mongoose');
const EventModel = require("../models/Event").default;
const CareerModel = require("../models/Career").default;
const InquiryModel = require("../models/Inquiry").default;

// Disable strict query for seeding
mongoose.set('strictQuery', false);

const seedEvents = [
  {
    title: "NextJS Workshop 2024",
    date: new Date("2024-04-15"),
    category: "Workshop",
    description: "Learn the latest features in Next.js 14 with hands-on exercises",
    location: "Virtual",
    speakers: ["John Doe", "Jane Smith"],
    link: "https://meet.google.com/workshop"
  },
  {
    title: "DevOps Summit",
    date: new Date("2024-05-20"),
    category: "Conference",
    description: "Exploring modern DevOps practices and tools",
    location: "New York",
    speakers: ["Mike Johnson", "Sarah Wilson"],
    link: "https://devops-summit.com"
  },
  {
    title: "AI in Enterprise",
    date: new Date("2024-06-10"),
    category: "Seminar",
    description: "Implementation of AI solutions in enterprise applications",
    location: "San Francisco",
    speakers: ["David Brown", "Emily Chen"],
    link: "https://ai-enterprise.com"
  }
];

const seedCareers = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Looking for an experienced Full Stack Developer to join our team",
    requirements: [
      "Strong experience with React and Node.js",
      "Experience with cloud platforms (AWS/GCP)",
      "Understanding of DevOps practices"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Learning budget"
    ],
    status: "open"
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "New York",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our DevOps team to build and maintain our cloud infrastructure",
    requirements: [
      "Experience with AWS/GCP",
      "Knowledge of Docker and Kubernetes",
      "CI/CD pipeline experience"
    ],
    benefits: [
      "Competitive package",
      "401(k) matching",
      "Remote work options"
    ],
    status: "open"
  }
];

const seedInquiries = [
  {
    type: "contact",
    name: "John Smith",
    email: "john@example.com",
    company: "Tech Corp",
    message: "Interested in your DevOps services",
    status: "new"
  },
  {
    type: "project",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    company: "Innovation Labs",
    message: "Need help with cloud migration project",
    service: "Cloud Migration",
    status: "inProgress"
  },
  {
    type: "contact",
    name: "Mike Wilson",
    email: "mike@example.com",
    company: "StartUp Inc",
    message: "Would like to discuss potential collaboration",
    status: "completed"
  }
];

async function seedDatabase() {
  try {
    const db = await connectDB();
    console.log("Connected to MongoDB...");

    // Clear existing data
    console.log("Clearing existing data...");
    await EventModel.deleteMany({});
    await CareerModel.deleteMany({});
    await InquiryModel.deleteMany({});

    // Insert new data
    console.log("Inserting new data...");
    await EventModel.insertMany(seedEvents);
    await CareerModel.insertMany(seedCareers);
    await InquiryModel.insertMany(seedInquiries);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase(); 