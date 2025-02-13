export const mockEvents = [
  {
    _id: "1",
    title: "NextJS Workshop 2024",
    date: "2024-04-15",
    category: "Workshop",
    description: "Learn the latest features in Next.js 14 with hands-on exercises",
    location: "Virtual",
    speakers: ["John Doe", "Jane Smith"],
    link: "https://meet.google.com/workshop"
  },
  {
    _id: "2",
    title: "DevOps Summit",
    date: "2024-05-20",
    category: "Conference",
    description: "Exploring modern DevOps practices and tools",
    location: "New York",
    speakers: ["Mike Johnson", "Sarah Wilson"],
    link: "https://devops-summit.com"
  }
];

export const mockCareers = [
  {
    _id: "1",
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
      "Flexible working hours"
    ],
    status: "open"
  },
  {
    _id: "2",
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

export const mockInquiries = [
  {
    _id: "1",
    type: "contact",
    name: "John Smith",
    email: "john@example.com",
    company: "Tech Corp",
    message: "Interested in your DevOps services",
    status: "new",
    createdAt: "2024-03-15T10:00:00Z"
  },
  {
    _id: "2",
    type: "project",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    company: "Innovation Labs",
    message: "Need help with cloud migration project",
    service: "Cloud Migration",
    status: "inProgress",
    createdAt: "2024-03-14T15:30:00Z"
  }
]; 