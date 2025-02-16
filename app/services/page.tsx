"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  FolderOpen,
  Heart,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  Database,
  Cloud,
  Palette,
  Settings,
  Sparkles,
  Braces,
  Brain,
  Lightbulb
} from "lucide-react";
import ContactDialog from "@/components/contact-dialog";
import Link from "next/link";

// Define services data
const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web and mobile application development with modern technologies",
    icon: Code2,
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "API Development & Integration",
      "Progressive Web Apps (PWA)"
    ]
  },
  {
    title: "DevOps Solutions",
    description: "Streamline your development and deployment processes with modern DevOps practices",
    icon: Cloud,
    features: [
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Cloud Migration"
    ]
  },
  {
    title: "GenAI Development",
    description: "Leverage the power of Generative AI for your business needs",
    icon: Brain,
    features: [
      "Custom LLM Integration",
      "AI-Powered Automation",
      "Intelligent Chatbots",
      "Data Analysis & Insights"
    ]
  },
  {
    title: "ERPNext Solutions",
    description: "Comprehensive business management and automation solutions",
    icon: Database,
    features: [
      "ERP Implementation",
      "Custom Module Development",
      "Business Process Automation",
      "Integration Services"
    ]
  },
  {
    title: "IT Consultancy",
    description: "Strategic technology consulting to drive business growth",
    icon: Lightbulb,
    features: [
      "Digital Transformation",
      "Technology Strategy",
      "System Architecture",
      "Security Assessment"
    ]
  },
  {
    title: "Infrastructure Automation",
    description: "Automate and optimize your IT infrastructure for better performance",
    icon: Settings,
    features: [
      "Server Automation",
      "Network Configuration",
      "Monitoring Setup",
      "Disaster Recovery"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces for better experiences",
    icon: Palette,
    features: [
      "User Interface Design",
      "User Experience Design",
      "Responsive Design",
      "Design Systems"
    ]
  },
  {
    title: "Startup Solutions",
    description: "Comprehensive tech solutions tailored for startups and growing businesses",
    icon: Rocket,
    features: [
      "MVP Development",
      "Scalable Architecture",
      "Technology Selection",
      "Growth Strategy"
    ]
  }
];

const achievements = [
  { value: "500+", label: "Projects Delivered", icon: FolderOpen },
  { value: "99.9%", label: "Client Satisfaction", icon: Heart },
  { value: "24/7", label: "Support Coverage", icon: Clock },
  { value: "50+", label: "Expert Team Members", icon: Users }
];

export default function Services() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen" ref={ref}>
      <PageHero
        title="Our Services"
        description="Comprehensive technology solutions tailored to your business needs"
        gradient="from-violet-600 to-indigo-600"
      />

      {/* Services Section with Enhanced Header */}
      <section className="container py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Transformative Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of services designed to elevate your business 
            in the digital landscape. Each service is crafted to deliver exceptional value and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card-modern group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10" />
              
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                onClick={() => setShowContactDialog(true)}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Process Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to turning your vision into reality
            </p>
          </motion.div>

          <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-violet-600/20 transform -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Discovery", description: "Understanding your needs", icon: Search, color: "from-violet-600 to-indigo-600" },
                { step: "02", title: "Planning", description: "Creating the roadmap", icon: Braces, color: "from-indigo-600 to-violet-600" },
                { step: "03", title: "Development", description: "Building your solution", icon: Code2, color: "from-violet-600 to-indigo-600" },
                { step: "04", title: "Launch", description: "Delivering excellence", icon: Rocket, color: "from-indigo-600 to-violet-600" }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${phase.color} p-0.5 transform group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                          <phase.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background flex items-center justify-center border-2 border-primary">
                        <span className="text-sm font-bold">{phase.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mt-6 mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container py-24">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
          <p className="text-muted-foreground">
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

      {/* Get Started Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center space-y-8 px-4"
          >
            <Sparkles className="w-12 h-12 mx-auto text-primary" />
            <h2 className="text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground">
              Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => setShowContactDialog(true)}>
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactDialog
        open={showContactDialog}
        onOpenChange={setShowContactDialog}
      />
    </div>
  );
}