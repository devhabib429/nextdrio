"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactDialog from "@/components/contact-dialog";
import Link from "next/link";
import { portfolioProjects } from "./portfolio-data";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layout,
  Palette,
  Smartphone,
  Globe,
  Users,
  Zap,
  Target,
  BarChart,
  Building2,
  Award,
  Laptop,
  PenTool,
  Eye,
  MousePointer,
  Code,
  Layers,
  Monitor,
  Tablet,
  ShoppingBag,
  Heart,
  Banknote,
  GraduationCap,
  Calendar,
  Building
} from "lucide-react";
import ServiceCTA from "@/components/service-cta"

const features = [
  {
    title: "User Interface Design",
    description: "Create beautiful, intuitive interfaces that users love to interact with",
    icon: Layout,
    benefits: [
      "Modern and clean design aesthetics",
      "Consistent visual language",
      "Intuitive navigation patterns",
      "Responsive layouts",
      "Accessibility compliance"
    ]
  },
  {
    title: "User Experience Design",
    description: "Design seamless user journeys that delight and engage",
    icon: Users,
    benefits: [
      "User-centered design approach",
      "Information architecture",
      "Interaction design",
      "Usability testing",
      "User flow optimization"
    ]
  },
  {
    title: "Mobile App Design",
    description: "Create engaging mobile experiences that users can't put down",
    icon: Smartphone,
    benefits: [
      "Native app design",
      "Cross-platform consistency",
      "Touch-friendly interfaces",
      "Mobile-first approach",
      "App store optimization"
    ]
  },
  {
    title: "Web Design",
    description: "Design stunning websites that convert visitors into customers",
    icon: Globe,
    benefits: [
      "Responsive web design",
      "Landing page optimization",
      "E-commerce solutions",
      "Content strategy",
      "SEO-friendly design"
    ]
  },
  {
    title: "Design Systems",
    description: "Build scalable design systems that ensure consistency and efficiency",
    icon: Layers,
    benefits: [
      "Component libraries",
      "Style guides",
      "Design tokens",
      "Documentation",
      "Version control"
    ]
  },
  {
    title: "Prototyping & Testing",
    description: "Validate designs through interactive prototypes and user testing",
    icon: Code,
    benefits: [
      "Interactive prototypes",
      "User testing sessions",
      "A/B testing",
      "Usability analysis",
      "Iterative improvement"
    ]
  }
];

const benefits = [
  {
    title: "Increased User Engagement",
    stats: "85%",
    description: "Higher user engagement through intuitive and engaging interfaces",
    icon: Users
  },
  {
    title: "Improved Conversion Rates",
    stats: "200%",
    description: "Better conversion rates with optimized user journeys",
    icon: Target
  },
  {
    title: "Reduced Development Time",
    stats: "40%",
    description: "Faster development with comprehensive design systems",
    icon: Zap
  },
  {
    title: "Higher Customer Satisfaction",
    stats: "95%",
    description: "Increased customer satisfaction through user-centered design",
    icon: Award
  }
];

const whyChooseUs = [
  {
    title: "User-Centered Approach",
    description: "We put users first in every design decision",
    icon: Users,
    points: [
      "Deep user research",
      "Persona development",
      "User journey mapping",
      "Usability testing",
      "Continuous feedback"
    ]
  },
  {
    title: "Modern Design Practices",
    description: "Stay ahead with cutting-edge design trends and technologies",
    icon: Layout,
    points: [
      "Latest design trends",
      "Emerging technologies",
      "Innovative solutions",
      "Best practices",
      "Industry standards"
    ]
  }
];

const industries = [
  {
    name: "E-commerce",
    icon: ShoppingBag,
    features: [
      "Product page optimization",
      "Shopping cart design",
      "Checkout flow optimization",
      "Mobile shopping experience"
    ]
  },
  {
    name: "Healthcare",
    icon: Heart,
    features: [
      "Patient portal design",
      "Medical app interfaces",
      "Healthcare dashboards",
      "Accessibility compliance"
    ]
  },
  {
    name: "Finance",
    icon: Banknote,
    features: [
      "Banking app design",
      "Financial dashboards",
      "Payment interfaces",
      "Security-focused UX"
    ]
  },
  {
    name: "Education",
    icon: GraduationCap,
    features: [
      "Learning platforms",
      "Educational apps",
      "Student portals",
      "Interactive content"
    ]
  }
];

export default function UIUXDesignPage() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

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
                      UI/UX Design Services
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
                Create
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-400">
                  Beautiful Experiences
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Transform your digital presence with stunning UI/UX design that delights users
                and drives business growth
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">
                  <span className="relative">Start Your Project</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-purple-500/50 transition-colors"
                >
                  View Portfolio
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: Users, label: 'Happy Clients', value: '200+' },
                  { icon: Award, label: 'Design Awards', value: '25+' },
                  { icon: Globe, label: 'Countries', value: '30+' },
                  { icon: Zap, label: 'Success Rate', value: '98%' }
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Design Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive UI/UX design solutions to elevate your digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            <h2 className="text-3xl font-bold mb-4">Design Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your digital presence and achieve measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div className="text-center mb-16">
            <span className="text-primary font-semibold">Why Choose Us?</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Excellence in Design
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We combine creativity with user-centered design principles to create
              exceptional digital experiences that drive results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied clients who have transformed their digital presence
              with our UI/UX design services. From startups to enterprises, we help you
              create experiences that users love and businesses thrive on.
            </p>
            <Button size="lg" onClick={() => setShowContactDialog(true)}>
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div className="text-center mb-16">
            <span className="text-primary font-semibold">Our Work</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful UI/UX design projects that have helped businesses
              achieve their goals and delight their users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300"
              >
                <Link href={project.link || "#"} className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      {project.year && (
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.client && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="w-4 h-4 mr-1" />
                          {project.client}
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="group" asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="container py-24">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored UI/UX design solutions for various industry verticals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-4xl font-bold">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how our UI/UX design services can elevate your brand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowContactDialog(true)}>
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
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

      <ServiceCTA />

      <ContactDialog
        open={showContactDialog}
        onOpenChange={setShowContactDialog}
      />
    </div>
  );
} 