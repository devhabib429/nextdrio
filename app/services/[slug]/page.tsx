"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Trophy, 
  Users, 
  Clock, 
  Target,
  Zap,
  Shield,
  BarChart,
  Tool
} from "lucide-react";

const services = {
  devops: {
    title: "DevOps Services",
    description: "Transform your development and operations with modern DevOps practices",
    gradient: "from-blue-500 to-cyan-500",
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
    process: [
      {
        title: "Assessment",
        description: "Evaluate current infrastructure and processes",
        icon: Target
      },
      {
        title: "Planning",
        description: "Design scalable DevOps architecture",
        icon: Tool
      },
      {
        title: "Implementation",
        description: "Set up automation and CI/CD pipelines",
        icon: Zap
      },
      {
        title: "Optimization",
        description: "Monitor and improve performance",
        icon: BarChart
      }
    ],
    metrics: [
      { label: "Deployment Speed", value: "10x", icon: Clock },
      { label: "Cost Reduction", value: "40%", icon: Trophy },
      { label: "Success Rate", value: "99.9%", icon: Target },
      { label: "Client Satisfaction", value: "100%", icon: Users }
    ],
    expertise: [
      {
        title: "Cloud Expertise",
        description: "Deep experience with major cloud platforms and services",
        icon: Shield
      },
      {
        title: "Automation",
        description: "End-to-end automation of development and deployment processes",
        icon: Zap
      },
      {
        title: "Security",
        description: "Implementation of security best practices and compliance",
        icon: Shield
      },
      {
        title: "Scalability",
        description: "Design and implementation of scalable infrastructure",
        icon: BarChart
      }
    ],
    // Add similar structures for other services...
  },
  "full-stack": {
    title: "Full Stack Development",
    description: "End-to-end web and mobile solutions built with cutting-edge technologies",
    gradient: "from-purple-500 to-pink-500",
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
    process: [
      {
        title: "Discovery",
        description: "Understand requirements and objectives"
      },
      {
        title: "Design",
        description: "Create architecture and UI/UX designs"
      },
      {
        title: "Development",
        description: "Build and test the application"
      },
      {
        title: "Deployment",
        description: "Launch and maintain the solution"
      }
    ]
  },
  erpnext: {
    title: "ERPNext Services",
    description: "Comprehensive business management solutions powered by ERPNext",
    gradient: "from-green-500 to-emerald-500",
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
    process: [
      {
        title: "Analysis",
        description: "Evaluate business requirements"
      },
      {
        title: "Configuration",
        description: "Set up and customize ERPNext"
      },
      {
        title: "Integration",
        description: "Connect with existing systems"
      },
      {
        title: "Training",
        description: "Train staff and provide documentation"
      }
    ]
  },
  uiux: {
    title: "UI/UX Design Services",
    description: "Create exceptional user experiences with modern design principles",
    gradient: "from-orange-500 to-yellow-500",
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
    process: [
      {
        title: "Research",
        description: "Understand users and competitors"
      },
      {
        title: "Design",
        description: "Create wireframes and visual designs"
      },
      {
        title: "Prototype",
        description: "Build interactive prototypes"
      },
      {
        title: "Test",
        description: "Conduct usability testing"
      }
    ]
  }
};

// Add this function to generate static paths
export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default function ServicePage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { slug } = useParams();
  const service = services[slug as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen" ref={ref}>
      <PageHero
        title={service.title}
        description={service.description}
        gradient={service.gradient}
      />

      {/* Metrics Section */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {service.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/5 p-6 rounded-xl text-center group hover:bg-primary/10 transition-colors"
            >
              <metric.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features and Benefits Section */}
      <div className="container py-12 bg-secondary/5 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a systematic approach to ensure successful implementation
            and delivery of our services.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-4">
          {service.process.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-card border group hover:shadow-lg transition-all"
            >
              {index < service.process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
              <step.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="container py-12 bg-secondary/5 rounded-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leverage our deep expertise and experience in delivering high-quality solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-background group hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="container py-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container py-24 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help transform your business with our {service.title}.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}