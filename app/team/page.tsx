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
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/team/john-smith.jpg",
    bio: "15+ years of experience in software development and business leadership",
    expertise: ["Business Strategy", "Technology Vision", "Team Leadership"],
    social: {
      linkedin: "https://linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      github: "https://github.com/johnsmith"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Co-Founder & CTO",
    image: "/team/sarah-johnson.jpg",
    bio: "Former Google engineer with deep expertise in cloud architecture and AI",
    expertise: ["Cloud Architecture", "AI/ML", "System Design"],
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson"
    }
  },
  {
    name: "Michael Chen",
    role: "Head of DevOps",
    image: "/team/michael-chen.jpg",
    bio: "DevOps expert with a track record of implementing efficient CI/CD pipelines",
    expertise: ["Infrastructure", "Automation", "Cloud Security"],
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "/team/emily-rodriguez.jpg",
    bio: "Digital marketing strategist with expertise in B2B tech marketing",
    expertise: ["Digital Strategy", "Content Marketing", "Brand Development"],
    social: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez"
    }
  },
  {
    name: "David Kim",
    role: "Lead ERPNext Developer",
    image: "/team/david-kim.jpg",
    bio: "ERPNext specialist with extensive experience in custom implementations",
    expertise: ["ERPNext", "Business Analysis", "Process Automation"],
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    }
  },
  {
    name: "Lisa Wang",
    role: "UI/UX Design Lead",
    image: "/team/lisa-wang.jpg",
    bio: "Award-winning designer focused on creating exceptional user experiences",
    expertise: ["UI Design", "User Research", "Design Systems"],
    social: {
      linkedin: "https://linkedin.com/in/lisawang",
      twitter: "https://twitter.com/lisawang"
    }
  }
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
      <PageHero
        title="Our Team"
        description="Meet the experts behind our success"
        gradient="from-blue-600 to-violet-600"
      />

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

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
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