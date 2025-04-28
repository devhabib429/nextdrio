import { 
  Building2, 
  ShoppingBag, 
  Factory, 
  HeartPulse,
  ArrowRight 
} from "lucide-react";

export interface TeamMember {
  name: string;
  avatar: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SuccessStory {
  title: string;
  industry: string;
  description: string;
  icon: any;
  metrics: Metric[];
  team: TeamMember[];
}

export const successStories: SuccessStory[] = [
  {
    title: "Digital Transformation Excellence",
    industry: "Manufacturing",
    description: "Revolutionized operations with AI-powered automation, reducing production time by 40% and improving quality control accuracy.",
    icon: Factory,
    metrics: [
      { value: "40%", label: "Faster Production" },
      { value: "99.9%", label: "Quality Rate" },
      { value: "60%", label: "Cost Reduction" }
    ],
    team: [
      { name: "John Smith", avatar: "/images/team/leadership/john-smith.jpg" },
      { name: "Sarah Chen", avatar: "/images/team/leadership/sarah-chen.jpg" },
      { name: "Mike Johnson", avatar: "/images/team/leadership/mike-johnson.jpg" }
    ]
  },
  {
    title: "Healthcare Innovation Hub",
    industry: "Healthcare",
    description: "Developed a cutting-edge patient care platform that improved treatment outcomes and streamlined hospital operations.",
    icon: HeartPulse,
    metrics: [
      { value: "35%", label: "Faster Recovery" },
      { value: "50%", label: "Cost Savings" },
      { value: "90%", label: "Patient Satisfaction" }
    ],
    team: [
      { name: "Dr. Emily Brown", avatar: "/images/team/leadership/emily-brown.jpg" },
      { name: "Alex Kumar", avatar: "/images/team/leadership/alex-kumar.jpg" },
      { name: "Lisa Wang", avatar: "/images/team/leadership/lisa-wang.jpg" }
    ]
  },
  {
    title: "Retail Revolution",
    industry: "E-commerce",
    description: "Transformed a traditional retail business into a digital-first enterprise with seamless omnichannel experience.",
    icon: ShoppingBag,
    metrics: [
      { value: "200%", label: "Online Growth" },
      { value: "45%", label: "Customer Retention" },
      { value: "75%", label: "Faster Delivery" }
    ],
    team: [
      { name: "David Lee", avatar: "/images/team/leadership/david-lee.jpg" },
      { name: "Maria Garcia", avatar: "/images/team/leadership/maria-garcia.jpg" },
      { name: "Tom Wilson", avatar: "/images/team/leadership/tom-wilson.jpg" }
    ]
  },
  {
    title: "Smart Building Solutions",
    industry: "Real Estate",
    description: "Implemented IoT and AI solutions for smart building management, reducing energy consumption and improving tenant comfort.",
    icon: Building2,
    metrics: [
      { value: "30%", label: "Energy Savings" },
      { value: "85%", label: "Tenant Satisfaction" },
      { value: "25%", label: "Maintenance Cost" }
    ],
    team: [
      { name: "Rachel Kim", avatar: "/images/team/leadership/rachel-kim.jpg" },
      { name: "James Wilson", avatar: "/images/team/leadership/james-wilson.jpg" },
      { name: "Sophie Martin", avatar: "/images/team/leadership/sophie-martin.jpg" }
    ]
  }
]; 