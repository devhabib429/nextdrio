"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Users,
  Target,
  Heart,
  Award,
  Coffee,
  ArrowRight,
  Globe
} from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Habibur Rahman",
    role: "CEO & Founder",
    image: "/team/john-smith.jpg",
    bio: "5+ years of experience in software development and business leadership",
    expertise: ["Business Strategy", "Technology Vision", "Team Leadership", "Tech Lead"],
    social: {
      linkedin: "https://linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      github: "https://github.com/johnsmith"
    }
  },
  // {
  //   name: "Akaash Panwar",
  //   role: "Co-Founder & CTO",
  //   image: "/team/sarah-johnson.jpg",
  //   bio: "Deep expertise in Aplication and Tech Leadership",
  //   expertise: ["Mobile Development", "Data Administration", "System Design"],
  //   social: {
  //     linkedin: "https://linkedin.com/in/sarahjohnson",
  //     twitter: "https://twitter.com/sarahjohnson",
  //     github: "https://github.com/sarahjohnson"
  //   }
  // },
  // {
  //   name: "Vaishnavee Lilhare",
  //   role: "UIUX and Product Designer",
  //   image: "/team/michael-chen.jpg",
  //   bio: "Product Designer expert with a track record of implementing efficient in UIUX and Product Design",
  //   expertise: ["Product Designer", "UIUX", "Product  Management"],
  //   social: {
  //     linkedin: "https://linkedin.com/in/michaelchen",
  //     github: "https://github.com/michaelchen"
  //   }
  // },
  // {
  //   name: "Emily Rodriguez",
  //   role: "Marketing Director",
  //   image: "/team/emily-rodriguez.jpg",
  //   bio: "Digital marketing strategist with expertise in B2B tech marketing",
  //   expertise: ["Digital Strategy", "Content Marketing", "Brand Development"],
  //   social: {
  //     linkedin: "https://linkedin.com/in/emilyrodriguez",
  //     twitter: "https://twitter.com/emilyrodriguez"
  //   }
  // },
  // {
  //   name: "David Kim",
  //   role: "Lead ERPNext Developer",
  //   image: "/team/david-kim.jpg",
  //   bio: "ERPNext specialist with extensive experience in custom implementations",
  //   expertise: ["ERPNext", "Business Analysis", "Process Automation"],
  //   social: {
  //     linkedin: "https://linkedin.com/in/davidkim",
  //     github: "https://github.com/davidkim"
  //   }
  // },
  // {
  //   name: "Lisa Wang",
  //   role: "UI/UX Design Lead",
  //   image: "/team/lisa-wang.jpg",
  //   bio: "Award-winning designer focused on creating exceptional user experiences",
  //   expertise: ["UI Design", "User Research", "Design Systems"],
  //   social: {
  //     linkedin: "https://linkedin.com/in/lisawang",
  //     twitter: "https://twitter.com/lisawang"
  //   }
  // }
];

const values = [
  {
    title: "Innovation First",
    description: "Constantly pushing boundaries with cutting-edge solutions",
    icon: Target
  },
  {
    title: "Client Success",
    description: "Dedicated to delivering exceptional results for our clients",
    icon: Heart
  },
  {
    title: "Excellence",
    description: "Committed to the highest standards in everything we do",
    icon: Award
  },
  {
    title: "Team Spirit",
    description: "Fostering collaboration and mutual growth",
    icon: Coffee
  }
];

const achievements = [
  { number: "500+", label: "Projects Delivered" },
  { number: "50+", label: "Team Members" },
  { number: "15+", label: "Countries Served" },
  { number: "98%", label: "Client Satisfaction" }
];

export default function TeamPage() {
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
              rotate: [0, 30, 0],
              opacity: [0.3, 0.2, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [30, 0, 30],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 10 }}
            className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-emerald-500/10 via-green-500/10 to-transparent blur-3xl"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl" />
                  <div className="relative bg-background/80 backdrop-blur-sm border rounded-2xl px-6 py-2">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
                      Meet Our Team
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
                The Minds Behind
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-400 to-emerald-400">
                  Our Innovation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                A diverse team of experts passionate about creating cutting-edge solutions
                and delivering exceptional results
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                  <span className="relative">Join Our Team</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-green-500/50 transition-colors"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: Users, label: 'Team Members', value: '15+' },
                  { icon: Award, label: 'Years Experience', value: '3+' },
                  { icon: Globe, label: 'Countries', value: '10+' },
                  { icon: Heart, label: 'Client Satisfaction', value: '98%' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 blur-xl group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 text-center">
                      <stat.icon className="w-8 h-8 text-green-500 mx-auto mb-3" />
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent blur-sm" />
      </section>

      {/* Team Overview */}
      <section className="container py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse team of experts passionate about delivering innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card hover:bg-muted/50 border rounded-xl p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.expertise.map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 mx-auto w-fit group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center space-y-8 px-4"
          >
            <Users className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-4xl font-bold">Join Our Team</h2>
            <p className="text-lg text-muted-foreground">
              We're always looking for talented individuals to join our growing team. 
              Check out our open positions and become part of our success story.
            </p>
            <Button size="lg" asChild>
              <Link href="/careers">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 