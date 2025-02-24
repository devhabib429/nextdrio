"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import {
  GitBranch,
  Cloud,
  Container,
  Shield,
  BarChart,
  Terminal,
  Server,
  Code2,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Lock,
  Activity,
  Settings,
  Rocket,
  Zap
} from "lucide-react";
import ContactDialog from "@/components/contact-dialog";
import Link from "next/link";

const features = [
  {
    title: "CI/CD Pipeline Automation",
    description: "Streamline your development workflow with automated build, test, and deployment pipelines",
    icon: Workflow,
    benefits: [
      "Automated Testing & Deployment",
      "Code Quality Checks",
      "Continuous Integration",
      "Release Management"
    ]
  },
  {
    title: "Infrastructure as Code",
    description: "Manage your infrastructure with version-controlled code using Terraform and Ansible",
    icon: Terminal,
    benefits: [
      "Infrastructure Automation",
      "Version Control",
      "Configuration Management",
      "Environment Consistency"
    ]
  },
  {
    title: "Container Orchestration",
    description: "Scale and manage containerized applications with Kubernetes expertise",
    icon: Container,
    benefits: [
      "Kubernetes Management",
      "Docker Optimization",
      "Service Orchestration",
      "Auto-scaling Solutions"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Leverage major cloud platforms for optimal performance and scalability",
    icon: Cloud,
    benefits: [
      "Multi-cloud Strategy",
      "Cloud Migration",
      "Cost Optimization",
      "Performance Tuning"
    ]
  },
  {
    title: "Monitoring & Analytics",
    description: "Comprehensive monitoring and logging solutions for system visibility",
    icon: Activity,
    benefits: [
      "Real-time Monitoring",
      "Log Management",
      "Performance Analytics",
      "Alert Management"
    ]
  },
  {
    title: "DevSecOps",
    description: "Integrate security practices throughout your development lifecycle",
    icon: Shield,
    benefits: [
      "Security Automation",
      "Compliance Monitoring",
      "Vulnerability Scanning",
      "Access Management"
    ]
  }
];

const technologies = [
  {
    category: "CI/CD Tools",
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI"]
  },
  {
    category: "Container & Orchestration",
    items: ["Docker", "Kubernetes", "OpenShift", "Helm"]
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform", "Ansible", "CloudFormation", "Pulumi"]
  },
  {
    category: "Monitoring & Logging",
    items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
  }
];

const benefits = [
  {
    title: "Faster Time to Market",
    description: "Accelerate your development and deployment cycles",
    icon: Rocket,
    stats: "60% faster"
  },
  {
    title: "Improved Reliability",
    description: "Enhance system stability and uptime",
    icon: Shield,
    stats: "99.9% uptime"
  },
  {
    title: "Cost Optimization",
    description: "Reduce infrastructure and operational costs",
    icon: BarChart,
    stats: "40% savings"
  },
  {
    title: "Enhanced Security",
    description: "Implement security best practices from day one",
    icon: Lock,
    stats: "24/7 protection"
  }
];

const processSteps = [
  {
    title: "Assessment",
    description: "We analyze your current infrastructure and development workflow",
    icon: BarChart,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Planning",
    description: "Develop a tailored DevOps strategy aligned with your goals",
    icon: GitBranch,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Implementation",
    description: "Execute the plan with careful attention to best practices",
    icon: Code2,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Optimization",
    description: "Continuous improvement and refinement of your DevOps processes",
    icon: Settings,
    color: "from-orange-500 to-red-500"
  }
];

export default function DevOpsPage() {
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
              rotate: [0, 45, 0],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 10 }}
            className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl" />
                  <div className="relative bg-background/80 backdrop-blur-sm border rounded-2xl px-6 py-2">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                      Modern DevOps Solutions
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
                Accelerate Your
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
                  Development Pipeline
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Streamline your development workflow with automated CI/CD, infrastructure as code, 
                and expert DevOps practices
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  <span className="relative">Get Started</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-blue-500/50 transition-colors"
                >
                  View Case Studies
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: GitBranch, label: 'CI/CD Automation', value: '100+' },
                  { icon: Cloud, label: 'Cloud Native', value: '500+' },
                  { icon: Shield, label: 'Security First', value: '99.9%' },
                  { icon: Zap, label: 'Fast Delivery', value: '24/7' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-xl group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 text-center">
                      <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent blur-sm" />
      </section>

      {/* Features Grid */}
      <section className="container py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our DevOps Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DevOps solutions to streamline your development workflow and enhance productivity
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

      {/* Technologies Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading tools and technologies for robust DevOps implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border"
              >
                <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-24">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Business Benefits</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your development process and achieve measurable results
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
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Implementation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to implementing DevOps practices in your organization
            </p>
          </motion.div>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="process-step group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} p-0.5 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-6 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
            <Zap className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-4xl font-bold">Ready to Transform Your DevOps?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help streamline your development processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowContactDialog(true)}>
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Learn More
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