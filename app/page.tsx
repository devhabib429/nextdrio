"use client";

import { useState } from 'react'
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Server,
  Palette,
  Zap,
  Globe,
  Shield,
  Trophy,
  Users,
  Sparkles,
  Braces,
  HeartHandshake,
  Cpu,
  Network,
  Building2,
  Bot,
  LineChart,
  ShieldCheck,
  Award,
  TrendingUp,
  Lightbulb,
  Puzzle,
  Users2,
  Clock,
  Brain,
  Cloud,
  Heart,
  Headphones,
  ChevronDown,
  Quote,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function HomePage() {
  const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-16 sm:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background z-0" />

          {/* Animated Circles */}
          <div className="hidden sm:block">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [180, 270, 360],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{ duration: 15, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-3xl"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your Ideas Into
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Innovative solutions for modern businesses. We help you stay ahead in the digital era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => setShowContactDialog(true)}>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/projects">
                  View Projects <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block">
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-12 sm:py-24 px-4">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {successMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border"
              >
                <metric.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-24 px-4 relative">
        <div className="container relative z-10">
          <SectionHeader
            title="Why Choose Us"
            subtitle="Delivering excellence through innovation and expertise"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((reason) => (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-sm p-6 sm:p-8 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="mb-6 p-4 rounded-xl bg-primary/5 w-fit">
                    <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-24 px-4 bg-muted/50">
        <div className="container">
          <SectionHeader
            title="Technologies We Use"
            subtitle="Cutting-edge solutions for modern challenges"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-lg border bg-background/50 backdrop-blur-sm text-center"
              >
                <tech.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-24 px-4">
        <div className="container">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Real feedback from real clients"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-lg border bg-background"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "DevOps Excellence",
    description: "Streamline your development and operations with modern practices",
    icon: Server
  },
  {
    title: "Full Stack Development",
    description: "End-to-end solutions for web and mobile applications",
    icon: Code2
  },
  {
    title: "UI/UX Design",
    description: "Create engaging and intuitive user experiences",
    icon: Palette
  },
  {
    title: "ERPNext Solutions",
    description: "Optimize business processes with custom ERP solutions",
    icon: Database
  }
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" },
  { value: "24/7", label: "Support Available" }
];

const advancedSolutions = [
  {
    title: "GenAI Solutions",
    description: "Custom AI solutions leveraging latest generative AI technologies for business automation and innovation",
    icon: Braces,
    technologies: ["GPT-4", "LangChain", "Stable Diffusion", "Custom Models"]
  },
  {
    title: "IT Consultancy",
    description: "Strategic technology consulting to help businesses navigate digital transformation",
    icon: HeartHandshake,
    technologies: ["Digital Strategy", "Tech Architecture", "Process Optimization"]
  },
  {
    title: "AI & Machine Learning",
    description: "Advanced AI solutions for predictive analytics and process automation",
    icon: Cpu,
    technologies: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"]
  },
  {
    title: "Blockchain Development",
    description: "Secure and scalable blockchain solutions for various business needs",
    icon: Network,
    technologies: ["Ethereum", "Solidity", "Smart Contracts", "Web3"]
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise-grade solutions for large-scale operations",
    icon: Building2,
    technologies: ["SAP", "Oracle", "Microsoft", "Custom ERP"]
  },
  {
    title: "Security & Compliance",
    description: "Advanced security solutions and compliance management systems",
    icon: ShieldCheck,
    technologies: ["ISO 27001", "GDPR", "HIPAA", "SOC 2"]
  }
];

const industrySolutions = [
  {
    id: 'education',
    title: "Education",
    description: "Smart learning solutions with AI-powered personalization",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
    tags: ['E-Learning', 'EdTech', 'LMS'],
    features: [
      'Adaptive Learning Paths',
      'Virtual Classrooms',
      'Student Analytics'
    ],
    technologies: ['AI/ML', 'WebRTC', 'React']
  },
  {
    id: 'agriculture',
    title: "Agriculture",
    description: "Smart farming solutions with IoT and data analytics",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60",
    tags: ['AgriTech', 'IoT', 'Analytics'],
    features: [
      'Crop Monitoring',
      'Weather Integration',
      'Yield Prediction'
    ],
    technologies: ['IoT', 'AI/ML', 'Mobile']
  },
  {
    id: 'retail-pos',
    title: "Retail & POS",
    description: "Modern point-of-sale and inventory management systems",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
    tags: ['POS', 'Retail', 'Payments'],
    features: [
      'Inventory Management',
      'Payment Processing',
      'Analytics Dashboard'
    ],
    technologies: ['Cloud', 'Mobile', 'ERPNext']
  },
  {
    id: 'healthcare',
    title: "Healthcare",
    description: "Digital healthcare solutions for modern medical facilities",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
    tags: ['HealthTech', 'EMR', 'Telemedicine'],
    features: [
      'Patient Management',
      'Telemedicine',
      'Health Analytics'
    ],
    technologies: ['HIPAA', 'AI/ML', 'Cloud']
  },
  {
    id: 'manufacturing',
    title: "Manufacturing",
    description: "Industry 4.0 solutions for smart manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    tags: ['Industry 4.0', 'IoT', 'Automation'],
    features: [
      'Production Monitoring',
      'Quality Control',
      'Supply Chain'
    ],
    technologies: ['IoT', 'AI/ML', 'ERPNext']
  },
  {
    id: 'logistics',
    title: "Logistics",
    description: "Smart logistics and supply chain management solutions",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    tags: ['Supply Chain', 'Fleet', 'Tracking'],
    features: [
      'Route Optimization',
      'Fleet Management',
      'Real-time Tracking'
    ],
    technologies: ['IoT', 'Mobile', 'Cloud']
  },
  {
    id: 'hospitality',
    title: "Hospitality",
    description: "Digital solutions for hotels and restaurants",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=60",
    tags: ['Hotels', 'Restaurants', 'Booking'],
    features: [
      'Reservation System',
      'POS Integration',
      'Customer Management'
    ],
    technologies: ['Cloud', 'Mobile', 'ERPNext']
  },
  {
    id: 'real-estate',
    title: "Real Estate",
    description: "Property management and real estate solutions",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
    tags: ['PropTech', 'Management', 'Analytics'],
    features: [
      'Property Management',
      'Virtual Tours',
      'Tenant Portal'
    ],
    technologies: ['VR/AR', 'Cloud', 'Mobile']
  },
  {
    id: 'energy',
    title: "Energy & Utilities",
    description: "Smart energy management and utility solutions",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
    tags: ['Smart Grid', 'Renewable', 'IoT'],
    features: [
      'Energy Monitoring',
      'Grid Management',
      'Usage Analytics'
    ],
    technologies: ['IoT', 'AI/ML', 'Cloud']
  }
];

const successMetrics = [
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Sparkles
  },
  {
    value: "500+",
    label: "Projects Delivered",
    icon: TrendingUp
  },
  {
    value: "50+",
    label: "Expert Team Members",
    icon: Users2
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Clock
  }
];

const whyChooseUs = [
  {
    title: "Innovation First",
    description: "Cutting-edge solutions using the latest technologies and methodologies",
    icon: Lightbulb
  },
  {
    title: "Expert Team",
    description: "Highly skilled professionals with deep industry expertise",
    icon: Award
  },
  {
    title: "Custom Solutions",
    description: "Tailored approaches to meet your specific business needs",
    icon: Puzzle
  }
];

const technologies = [
  {
    name: "AI/ML",
    description: "Advanced artificial intelligence solutions",
    icon: Bot
  },
  {
    name: "Cloud Native",
    description: "Scalable cloud architecture",
    icon: Cloud
  },
  {
    name: "Blockchain",
    description: "Secure distributed systems",
    icon: Shield
  },
  {
    name: "IoT",
    description: "Connected device solutions",
    icon: Cpu
  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    avatar: "/john-doe.jpg",
    content: "We've been using their services for over a year now, and the results have been outstanding. Their team is highly professional and responsive. We've seen a significant improvement in our operations."
  },
  {
    name: "Jane Smith",
    role: "CTO at AI Solutions",
    avatar: "/jane-smith.jpg",
    content: "Their AI solutions have been a game-changer for our business. The team's expertise and dedication are unmatched. We're excited about the future with them."
  },
  {
    name: "Mike Johnson",
    role: "COO at RetailTech",
    avatar: "/mike-johnson.jpg",
    content: "The retail solutions they provided have revolutionized our business. Their team's attention to detail and customer service are top-notch."
  }
];

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}