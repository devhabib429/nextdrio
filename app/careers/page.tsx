"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  GraduationCap,
  Users,
  Heart,
  Coffee,
  Laptop,
  CheckCircle2,
  Rocket,
  Globe,
  Target,
  HeartHandshake,
  Zap,
  Medal
} from "lucide-react";
import Link from "next/link";

const positions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for a Senior Full Stack Developer to join our engineering team and help build next-generation web applications.",
    requirements: [
      "Strong experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Understanding of CI/CD practices",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible work hours",
      "Remote work options"
    ]
  },
  // Add more positions as needed
];

const perks = [
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options"
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision coverage"
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Annual learning budget and mentorship programs"
  },
  {
    icon: Users,
    title: "Great Team Culture",
    description: "Collaborative and inclusive environment"
  }
];

const growthPrograms = [
  {
    title: "Leadership Development Program",
    description: "A comprehensive program designed to develop leadership skills",
    benefits: [
      "Enhanced leadership capabilities",
      "Access to senior leadership insights",
      "Opportunities for advancement"
    ],
    icon: GraduationCap
  },
  {
    title: "Technical Skills Training",
    description: "Continuous learning to stay ahead in technology",
    benefits: [
      "Advanced technical knowledge",
      "Hands-on experience with cutting-edge technologies",
      "Opportunities for innovation"
    ],
    icon: Laptop
  },
  {
    title: "Project Management Certification",
    description: "Gain professional certification in project management",
    benefits: [
      "Advanced project management skills",
      "Certification recognized globally",
      "Opportunities for project leadership"
    ],
    icon: Briefcase
  }
];

const cultureValues = [
  {
    title: "Innovation",
    description: "We encourage new ideas and creative solutions",
    icon: Laptop
  },
  {
    title: "Collaboration",
    description: "We value teamwork and shared success",
    icon: Users
  },
  {
    title: "Personal Growth",
    description: "We invest in your development and success",
    icon: GraduationCap
  }
];

const applicationSteps = [
  {
    title: "Apply Online",
    description: "Submit your application through our career portal",
    icon: Briefcase
  },
  {
    title: "Interview Process",
    description: "Participate in various stages of interviews",
    icon: Users
  },
  {
    title: "Background Check",
    description: "Complete necessary background checks",
    icon: CheckCircle2
  },
  {
    title: "Offer",
    description: "Receive a job offer and join our team",
    icon: Heart
  }
];

export default function CareersPage() {
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
            className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 10 }}
            className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-cyan-500/10 via-teal-500/10 to-transparent blur-3xl"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-xl" />
                  <div className="relative bg-background/80 backdrop-blur-sm border rounded-2xl px-6 py-2">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">
                      Join Our Team
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
                Build the Future
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400">
                  With Us
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Join a team of innovators and problem solvers shaping the future of technology
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span className="relative">View Open Positions</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-teal-500/50 transition-colors"
                >
                  <Building2 className="mr-2 h-4 w-4" />
                  Our Culture
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: Rocket, label: 'Open Positions', value: '2+' },
                  { icon: Globe, label: 'Office Locations', value: '1+' },
                  { icon: Users, label: 'Team Members', value: '15+' },
                  { icon: GraduationCap, label: 'Learning Budget', value: '$2K' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 blur-xl group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 text-center">
                      <stat.icon className="w-8 h-8 text-teal-500 mx-auto mb-3" />
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent blur-sm" />
      </section>

      {/* Why Join Us Section */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join a team of passionate individuals working on cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <perk.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{perk.title}</h3>
              <p className="text-muted-foreground">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container py-24 bg-secondary/10 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find your next opportunity and make an impact
          </p>
        </motion.div>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border bg-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6 justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-background/50">
                        <Building2 className="w-3 h-3 mr-1" />
                        {position.department}
                      </Badge>
                      <Badge variant="outline" className="bg-background/50">
                        <MapPin className="w-3 h-3 mr-1" />
                        {position.location}
                      </Badge>
                      <Badge variant="outline" className="bg-background/50">
                        <Clock className="w-3 h-3 mr-1" />
                        {position.type}
                      </Badge>
                      <Badge variant="outline" className="bg-background/50">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {position.experience}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    {position.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {position.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex lg:flex-col justify-start gap-4">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRlwlC_pSlb_kiR_h6i7S9U6WYrHg-krB3LXopolXJyelsNQ/viewform?usp=header">
                    <Button size="lg">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Growth & Development */}
      <section className="container py-16 bg-muted/30 rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Growth & Development</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We invest in our team's growth and provide opportunities for advancement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {growthPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border group hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-primary/5 rounded-lg w-fit group-hover:scale-110 transition-transform">
                <program.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-muted-foreground mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Culture & Values</h2>
            <p className="text-muted-foreground">
              Join a team that values innovation, collaboration, and personal growth
            </p>
            <div className="space-y-4">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-primary/5 rounded-lg">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team Culture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Application Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple and transparent hiring process designed to help you succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {applicationSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < applicationSteps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 w-8 h-8 text-muted-foreground/30 hidden md:block" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 