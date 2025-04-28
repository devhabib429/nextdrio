export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  metrics: string[];
  tags: string[];
  client?: string;
  year?: string;
  link?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ecommerce-redesign",
    title: "E-commerce Platform Redesign",
    category: "Web Design",
    image: "/portfolio/ecommerce.jpg",
    description: "Complete redesign of an e-commerce platform resulting in 150% increase in conversion rate",
    metrics: [
      "150% Conversion Rate",
      "40% User Engagement",
      "25% Revenue Growth"
    ],
    tags: ["E-commerce", "Web Design", "UI/UX", "Redesign"],
    client: "Fashion Retailer",
    year: "2023",
    link: "/portfolio/ecommerce"
  },
  {
    id: "healthcare-app",
    title: "Healthcare App Interface",
    category: "Mobile Design",
    image: "/portfolio/healthcare.jpg",
    description: "Intuitive healthcare app design improving patient engagement and satisfaction",
    metrics: [
      "85% Patient Satisfaction",
      "60% App Usage",
      "30% Cost Reduction"
    ],
    tags: ["Healthcare", "Mobile App", "UI Design", "Patient Care"],
    client: "Healthcare Provider",
    year: "2023",
    link: "/portfolio/healthcare"
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    category: "Enterprise UI",
    image: "/portfolio/finance.jpg",
    description: "Modern financial dashboard design for better data visualization and decision making",
    metrics: [
      "200% Efficiency",
      "45% Time Saved",
      "90% User Adoption"
    ],
    tags: ["Finance", "Dashboard", "Data Visualization", "Enterprise"],
    client: "Financial Institution",
    year: "2023",
    link: "/portfolio/finance"
  }
]; 