"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Code2,
  Cloud,
  Shield,
  Database,
  Smartphone,
  Settings,
  Mail,
  FolderOpen,
  Search,
  PenTool,
  Rocket,
  Clock,
  Trophy,
  Target,
  Zap,
  BarChart,
  Wrench,
  Brain,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  Heart
} from "lucide-react";
import ContactDialog from "@/components/contact-dialog";

const services = [
  {
    title: "DevOps Solutions",
    description: "Streamline your development and operations with modern DevOps practices",
    icon: Cloud,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Migration",
      "Monitoring & Logging"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    link: "/services/devops"
  },
  {
    title: "ERPNext Solutions",
    description: "Comprehensive business management with customized ERPNext implementation",
    icon: Database,
    features: [
      "Implementation & Setup",
      "Custom Module Development",
      "Integration Services",
      "Training & Support",
      "Migration Services"
    ],
    technologies: ["ERPNext", "Python", "MariaDB", "Redis", "Node.js"],
    link: "/services/erpnext"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web application development with modern technologies",
    icon: Code2,
    features: [
      "Web Applications",
      "API Development",
      "Database Design",
      "Cloud Deployment",
      "Performance Optimization"
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
    link: "/services/full-stack"
  },
  {
    title: "UI/UX Design",
    description: "Create exceptional user experiences with modern design principles",
    icon: Wrench,
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
    link: "/services/uiux"
  },
  {
    title: "IT Consultancy",
    description: "Strategic technology consulting for business growth",
    icon: Building2,
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "Security Audits",
      "Process Optimization",
      "Tech Stack Selection"
    ],
    technologies: ["Agile", "ITIL", "TOGAF", "Six Sigma", "COBIT"],
    link: "/services/consultancy"
  },
  {
    title: "GenAI Solutions",
    description: "Leverage the power of AI for your business needs",
    icon: Brain,
    features: [
      "Custom AI Models",
      "NLP Solutions",
      "Computer Vision",
      "ML Operations",
      "AI Integration"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain"],
    link: "/services/genai"
  }
];

const benefits = [
  {
    title: "Technical Excellence",
    description: "Industry-leading expertise in modern technologies",
    icon: Trophy
  },
  {
    title: "Rapid Delivery",
    description: "Fast turnaround with agile methodologies",
    icon: Rocket
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance",
    icon: Clock
  },
  {
    title: "Custom Solutions",
    description: "Tailored approaches for unique challenges",
    icon: Wrench
  }
];

const achievements = [
  { value: "500+", label: "Projects Delivered", icon: FolderOpen },
  { value: "99.9%", label: "Client Satisfaction", icon: Heart },
  { value: "24/7", label: "Support Coverage", icon: Clock },
  { value: "50+", label: "Expert Team Members", icon: Users }
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <div className="min-h-screen" ref={ref}>
      <PageHero
        title="Our Services"
        description="Comprehensive technology solutions tailored to your business needs"
        gradient="from-blue-500 to-purple-500"
      />

      {/* Services Grid */}
      <section className="container py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              <Button asChild className="w-full mt-4">
                <Link href={service.link}>
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="container py-24">
        <motion.div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industry Solutions</h2>
          <p className="text-muted-foreground">
            Tailored solutions for diverse industry verticals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-12"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Building2 className="w-6 h-6 mr-2 text-primary" />
                Enterprise Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive digital transformation solutions for large enterprises
              </p>
              <ul className="space-y-2">
                {["Digital Workplace", "Enterprise Mobility", "Cloud Migration"].map((item) => (
                  <li key={item} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                Healthcare & Life Sciences
              </h3>
              <p className="text-muted-foreground mb-4">
                Secure and compliant solutions for healthcare providers
              </p>
              <ul className="space-y-2">
                {["HIPAA Compliance", "Patient Portals", "Medical IoT"].map((item) => (
                  <li key={item} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-12"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-primary" />
                Financial Services
              </h3>
              <p className="text-muted-foreground mb-4">
                Secure and scalable solutions for financial institutions
              </p>
              <ul className="space-y-2">
                {["Banking Systems", "Payment Processing", "Risk Management"].map((item) => (
                  <li key={item} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Smartphone className="w-6 h-6 mr-2 text-primary" />
                Retail & E-commerce
              </h3>
              <p className="text-muted-foreground mb-4">
                End-to-end solutions for modern retail businesses
              </p>
              <ul className="space-y-2">
                {["E-commerce Platforms", "Inventory Management", "POS Systems"].map((item) => (
                  <li key={item} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Delivery Process */}
      <section className="container py-24 bg-muted/30">
        <motion.div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Delivery Process</h2>
          <p className="text-muted-foreground">
            A systematic approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 hidden md:block" />
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { title: "Discovery", description: "Understanding requirements", icon: Search },
              { title: "Planning", description: "Solution architecture", icon: PenTool },
              { title: "Development", description: "Agile implementation", icon: Code2 },
              { title: "Deployment", description: "Launch & support", icon: Rocket }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-background p-6 rounded-xl border relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="absolute -right-6 top-1/2 w-8 h-8 text-primary/30 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section (Instead of Why Choose Us) */}
      <section className="container py-24">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence through proven expertise and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 p-4 rounded-xl bg-primary/10 mx-auto w-fit group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 p-8 md:p-12">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowContactDialog(true)}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactDialog
        open={showContactDialog}
        onOpenChange={setShowContactDialog}
      />
    </div>
  );
}