"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "@/components/page-hero";
import { 
  Cloud, 
  Code2, 
  Database, 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Server, 
  Brain,
  CheckCircle2,
  Zap,
  Users,
  BarChart,
  Palette,
  Trophy,
  Target,
  Clock,
  Braces,
  HeartHandshake,
  Network,
  Building2,
  ShieldCheck,
  Timer,
  Rocket,
  CheckCircle,
  LineChart,
  Bot,
  Search,
  TestTube2,
  HeartPulse,
  Banknote,
  Truck,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactDialog from "@/components/contact-dialog";
import { useState } from "react";

const services = [
  {
    title: "DevOps",
    description: "Transform your development and operations with modern DevOps practices.",
    icon: Cloud,
    features: [
      "Continuous Integration & Deployment",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Migration",
      "Monitoring & Logging",
      "Security Implementation",
    ],
    benefits: [
      "Faster Time to Market",
      "Improved Reliability",
      "Cost Optimization",
      "Enhanced Security"
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    href: "/services/devops",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web and mobile solutions built with cutting-edge technologies.",
    icon: Code2,
    features: [
      "Web Applications",
      "Mobile Development",
      "API Integration",
      "Database Design",
      "UI/UX Design",
      "Performance Optimization",
    ],
    benefits: [
      "Scalable Solutions",
      "Modern Architecture",
      "Cross-platform Support",
      "Optimized Performance"
    ],
    technologies: ["React", "Node.js", "Python", "MongoDB", "PostgreSQL", "Redis"],
    href: "/services/full-stack",
  },
  {
    title: "ERPNext",
    description: "Comprehensive business management solutions powered by ERPNext.",
    icon: Database,
    features: [
      "Implementation",
      "Customization",
      "Integration",
      "Training",
      "Support",
      "Maintenance",
    ],
    benefits: [
      "Streamlined Operations",
      "Real-time Analytics",
      "Cost Reduction",
      "Enhanced Productivity"
    ],
    technologies: ["ERPNext", "Python", "MariaDB", "Redis", "Node.js", "Docker"],
    href: "/services/erpnext",
  },
  {
    title: "UI/UX Design",
    description: "Create exceptional user experiences with modern design principles.",
    icon: Palette,
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems",
    ],
    benefits: [
      "Enhanced User Satisfaction",
      "Increased Conversion Rates",
      "Reduced Development Time",
      "Brand Consistency"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Zeplin"],
    href: "/services/uiux",
  },
  {
    title: "GenAI Solutions",
    description: "Cutting-edge generative AI solutions for business automation and innovation.",
    icon: Bot,
    features: [
      "Custom AI Models",
      "Language Processing",
      "Content Generation",
      "Process Automation",
      "Predictive Analytics",
      "AI Integration"
    ],
    benefits: [
      "Enhanced Productivity",
      "Automated Workflows",
      "Intelligent Insights",
      "Cost Reduction"
    ],
    technologies: ["GPT-4", "LangChain", "PyTorch", "TensorFlow", "Stable Diffusion"],
    href: "/services/genai",
  },
  {
    title: "IT Consultancy",
    description: "Strategic technology consulting to drive digital transformation.",
    icon: HeartHandshake,
    features: [
      "Digital Strategy",
      "Tech Architecture",
      "Process Optimization",
      "Security Audit",
      "Cloud Migration",
      "Tech Assessment"
    ],
    benefits: [
      "Optimized Operations",
      "Risk Mitigation",
      "Cost Efficiency",
      "Future Readiness"
    ],
    technologies: ["Enterprise Architecture", "TOGAF", "ITIL", "Agile", "DevOps"],
    href: "/services/consultancy",
  },
  {
    title: "Cloud Solutions",
    description: "Comprehensive cloud services for modern business needs.",
    icon: Network,
    features: [
      "Cloud Migration",
      "Multi-Cloud Strategy",
      "Cloud Security",
      "Serverless Apps",
      "Cost Optimization",
      "24/7 Support"
    ],
    benefits: [
      "Scalable Infrastructure",
      "Reduced TCO",
      "Enhanced Security",
      "Global Reach"
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
    href: "/services/cloud",
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "500+", label: "Projects Delivered", icon: Trophy },
  { value: "10+", label: "Years Experience", icon: Clock },
  { value: "24/7", label: "Support Available", icon: Target }
];

const methodologies = [
  {
    title: "Agile Development",
    description: "Iterative approach with continuous feedback and adaptation",
    features: ["Sprint Planning", "Daily Stand-ups", "Regular Reviews", "Continuous Improvement"]
  },
  {
    title: "DevOps Culture",
    description: "Seamless integration of development and operations",
    features: ["Automated Testing", "Continuous Integration", "Rapid Deployment", "Monitoring"]
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive testing and quality control processes",
    features: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Testing"]
  }
];

const industries = [
  {
    name: "Healthcare",
    icon: HeartPulse,
    color: "from-red-500/20 to-red-500/40",
    description: "Digital solutions for modern healthcare",
    solutions: ["EMR Systems", "Telemedicine", "Health Analytics"]
  },
  {
    name: "Finance",
    icon: Banknote,
    color: "from-green-500/20 to-green-500/40",
    description: "FinTech and banking solutions",
    solutions: ["Payment Gateways", "Banking Apps", "Risk Analytics"]
  },
  {
    name: "E-commerce",
    icon: Globe,
    color: "from-purple-500/20 to-purple-500/40",
    description: "Online shopping and marketplace solutions",
    solutions: ["E-commerce Platforms", "Marketplace Integration", "Payment Solutions"]
  },
  {
    name: "Education",
    icon: Brain,
    color: "from-blue-500/20 to-blue-500/40",
    description: "Digital learning and educational solutions",
    solutions: ["E-learning Platforms", "Educational Content", "Learning Management Systems"]
  },
  {
    name: "Manufacturing",
    icon: Building2,
    color: "from-yellow-500/20 to-yellow-500/40",
    description: "Industrial automation and manufacturing solutions",
    solutions: ["Industrial Robots", "Automation Systems", "Supply Chain Management"]
  },
  {
    name: "Technology",
    icon: Server,
    color: "from-pink-500/20 to-pink-500/40",
    description: "Technology and software solutions",
    solutions: ["Software Development", "IT Infrastructure", "Cloud Services"]
  },
  {
    name: "Logistics",
    icon: Truck,
    color: "from-teal-500/20 to-teal-500/40",
    description: "Supply chain and transportation solutions",
    solutions: ["Warehouse Management", "Transportation Logistics", "Supply Chain Optimization"]
  },
  {
    name: "Real Estate",
    icon: Home,
    color: "from-orange-500/20 to-orange-500/40",
    description: "Real estate and property solutions",
    solutions: ["Property Management", "Real Estate Platforms", "Property Investment"]
  }
];

const deliveryTimeline = [
  {
    phase: "Discovery",
    duration: "1-2 weeks",
    icon: Search,
    color: "from-blue-500/20 to-blue-500/40",
    activities: [
      "Requirements Analysis",
      "Technical Assessment",
      "Solution Design"
    ],
    description: "Deep dive into your needs and objectives"
  },
  {
    phase: "Development",
    duration: "4-12 weeks",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    activities: [
      "Agile Sprints",
      "Regular Updates",
      "Quality Checks"
    ]
  },
  {
    phase: "Testing",
    duration: "1-2 weeks",
    icon: TestTube2,
    color: "from-orange-500 to-red-500",
    activities: [
      "QA Testing",
      "User Testing",
      "Performance Testing"
    ]
  },
  {
    phase: "Deployment",
    duration: "1 week",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    activities: [
      "Production Deploy",
      "Monitoring Setup",
      "Knowledge Transfer"
    ]
  }
];

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <div className="min-h-screen" ref={ref}>
      <PageHero
        title="Our Services"
        description="Comprehensive technology solutions to transform your business and drive innovation"
        gradient="from-blue-500 to-purple-500"
      />

      {/* Stats Section */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild className="w-full">
                <Link href={service.href}>Learn More</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Methodologies Section */}
      <div className="container py-24 bg-secondary/5 rounded-3xl my-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Methodologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow industry-best practices and proven methodologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {method.title}
              </h3>
              <p className="text-muted-foreground mb-6">{method.description}</p>
              <ul className="space-y-3">
                {method.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Industries Section */}
      <div className="container py-24 bg-gradient-to-b from-background to-secondary/10 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across various industries, delivering tailored solutions for specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-background to-secondary/20 border border-border/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              <div className="relative h-full p-6 flex flex-col items-center justify-center text-center gap-4">
                <industry.icon className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                <h3 className="font-semibold text-lg">{industry.name}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {industry.description}
                </p>
                <ul className="hidden group-hover:block animate-in fade-in slide-in-from-bottom duration-500">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="text-sm text-foreground/80">{solution}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Delivery Process */}
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Delivery Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Efficient and transparent project delivery methodology
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryTimeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative pt-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <phase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="relative mt-8 p-6 rounded-xl bg-gradient-to-br from-background to-secondary/20 border border-border/50">
                  <div className="text-center">
                    <h3 className="font-semibold mb-1">{phase.phase}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{phase.duration}</p>
                    <p className="text-sm mb-4">{phase.description}</p>
                    <ul className="text-sm space-y-2">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Update CTA Section to open dialog */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container py-24 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl mb-24"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setShowContactDialog(true)}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <ContactDialog 
        open={showContactDialog} 
        onOpenChange={setShowContactDialog}
      />
    </div>
  );
}