"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import {
  Database,
  Settings,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Building2,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  Factory,
  Users,
  Wrench,
  BookOpen,
  BarChart,
  Workflow,
  Cloud,
  Sparkles,
  CircleDollarSign,
  LineChart,
  Clock,
  Unlock,
  AppWindow,
  Code2,
  Globe,
  Award
} from "lucide-react";
import ContactDialog from "@/components/contact-dialog";
import Link from "next/link";

const features = [
  {
    title: "Implementation & Setup",
    description: "Complete ERPNext setup and configuration tailored to your business needs",
    icon: Settings,
    benefits: [
      "Business Process Analysis",
      "System Configuration",
      "Data Migration",
      "User Training"
    ]
  },
  {
    title: "Custom Development",
    description: "Extend ERPNext functionality with custom modules and features",
    icon: Wrench,
    benefits: [
      "Custom Modules",
      "Workflow Automation",
      "Report Customization",
      "API Integration"
    ]
  },
  {
    title: "Integration Services",
    description: "Seamless integration with your existing business systems",
    icon: Workflow,
    benefits: [
      "Payment Gateway Integration",
      "E-commerce Integration",
      "CRM Integration",
      "Custom API Development"
    ]
  },
  {
    title: "Cloud Hosting",
    description: "Secure and scalable cloud hosting solutions for ERPNext",
    icon: Cloud,
    benefits: [
      "AWS/Azure Hosting",
      "Performance Optimization",
      "Backup Management",
      "Security Updates"
    ]
  },
  {
    title: "Training & Support",
    description: "Comprehensive training and ongoing support for your team",
    icon: BookOpen,
    benefits: [
      "User Training Programs",
      "Admin Training",
      "24/7 Support",
      "Documentation"
    ]
  },
  {
    title: "Performance Optimization",
    description: "Optimize your ERPNext system for peak performance",
    icon: BarChart,
    benefits: [
      "System Audit",
      "Performance Tuning",
      "Database Optimization",
      "Workflow Enhancement"
    ]
  }
];

const benefits = [
  {
    title: "Cost Reduction",
    description: "Reduce operational costs with streamlined processes",
    icon: CircleDollarSign,
    stats: "40% savings"
  },
  {
    title: "Productivity Boost",
    description: "Improve team efficiency and productivity",
    icon: LineChart,
    stats: "75% faster"
  },
  {
    title: "Real-time Insights",
    description: "Access critical business data instantly",
    icon: BarChart,
    stats: "Real-time"
  },
  {
    title: "Quick Implementation",
    description: "Get your system up and running quickly",
    icon: Clock,
    stats: "4-6 weeks"
  }
];

const industries = [
  {
    name: "Manufacturing",
    icon: Factory,
    features: ["Production Planning", "Inventory Management", "Quality Control", "BOM Management"]
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    features: ["Patient Management", "Appointment Scheduling", "Billing", "Medical Records"]
  },
  {
    name: "Education",
    icon: GraduationCap,
    features: ["Student Management", "Course Planning", "Fee Management", "Academic Calendar"]
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    features: ["POS Integration", "Inventory Control", "Customer Management", "E-commerce"]
  }
];

const whyERPNext = [
  {
    title: "Open Source Freedom",
    description: "Full control over your business software with zero license fees",
    icon: Unlock,
    points: [
      "100% Open Source & Transparent",
      "No Vendor Lock-in",
      "Community-Driven Development",
      "Flexible Customization"
    ]
  },
  {
    title: "Cost Effectiveness",
    description: "Significant cost savings compared to traditional ERP solutions",
    icon: CircleDollarSign,
    points: [
      "No Per-User Licensing",
      "Lower Implementation Costs",
      "Reduced IT Infrastructure",
      "Quick ROI"
    ]
  },
  {
    title: "All-in-One Solution",
    description: "Comprehensive business management in a single platform",
    icon: AppWindow,
    points: [
      "Accounting & Finance",
      "HR & Payroll",
      "Inventory & Manufacturing",
      "CRM & Sales"
    ]
  },
  {
    title: "Modern Architecture",
    description: "Built with cutting-edge technology for the digital age",
    icon: Code2,
    points: [
      "Mobile-First Design",
      "REST API Integration",
      "Real-time Analytics",
      "Cloud-Native"
    ]
  }
];

export default function ERPNextPage() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen" ref={ref}>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background/90 to-background/50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -45, 0],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [-45, 0, -45],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 10 }}
            className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl"
          />
        </div>

        <div className="container relative z-10 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-xl" />
                  <div className="relative bg-background/80 backdrop-blur-sm border rounded-2xl px-6 py-2">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
                      Enterprise Resource Planning
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold tracking-tight"
              >
                Transform Your
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-400">
                  Business Operations
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Streamline your business processes with our comprehensive ERPNext solutions
                designed for modern enterprises
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
                  <span className="relative">Schedule Demo</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-purple-500/50 transition-colors"
                >
                  View Features
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: Building2, label: 'Enterprise Ready', value: '500+' },
                  { icon: Users, label: 'Active Users', value: '10K+' },
                  { icon: Globe, label: 'Countries', value: '40+' },
                  { icon: Award, label: 'Success Rate', value: '99%' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-xl group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 text-center">
                      <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                      <div className="font-bold text-2xl mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent blur-sm" />
      </section>

      {/* Features Grid */}
      <section className="container py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our ERPNext Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ERPNext solutions to streamline your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card hover:bg-muted/50 border rounded-xl p-6 transition-colors"
            >
              <div className="mb-6 p-4 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Business Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your operations and achieve measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 mx-auto w-fit group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{benefit.stats}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ERPNext Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div className="text-center mb-16">
            <span className="text-primary font-semibold">Why Choose ERPNext?</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              The Future of Business Management
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              ERPNext is revolutionizing how businesses operate with its modern, 
              comprehensive, and cost-effective approach to enterprise resource planning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyERPNext.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground mb-6">{reason.description}</p>
                <ul className="space-y-3">
                  {reason.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">
              The Smart Choice for Modern Businesses
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of companies worldwide who have transformed their operations 
              with ERPNext. From startups to enterprises, ERPNext provides the tools 
              you need to streamline processes, reduce costs, and drive growth.
            </p>
            <Button size="lg" onClick={() => setShowContactDialog(true)}>
              Explore ERPNext Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="container py-24">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored ERPNext solutions for various industry verticals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
              <ul className="space-y-2">
                {industry.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how ERPNext can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowContactDialog(true)}>
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
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