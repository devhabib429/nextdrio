"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    name: "Cloud Infrastructure Automation",
    description: "Automated deployment pipeline for a large-scale e-commerce platform using AWS and Terraform",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["DevOps", "AWS", "Terraform", "Docker"],
  },
  {
    name: "Enterprise Web Platform",
    description: "Modern web application with real-time analytics dashboard and AI-powered insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["React", "Node.js", "MongoDB", "AI/ML"],
  },
  {
    name: "ERPNext Implementation",
    description: "Custom ERPNext solution for manufacturing company with IoT integration",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["ERPNext", "Python", "Docker", "IoT"],
  },
  {
    name: "AI-Powered Healthcare Analytics",
    description: "Machine learning platform for predictive healthcare diagnostics and patient care optimization",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["Python", "TensorFlow", "AI/ML", "Healthcare"],
  },
  {
    name: "Mobile Banking Solution",
    description: "Secure and scalable mobile banking application with biometric authentication",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["React Native", "Node.js", "FinTech", "Security"],
  },
  {
    name: "Smart City Management System",
    description: "IoT-based platform for monitoring and managing urban infrastructure and services",
    image: "https://images.unsplash.com/photo-1494522358652-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["IoT", "Python", "Big Data", "Smart City"],
  },
  {
    name: "E-Learning Platform",
    description: "Interactive learning management system with real-time collaboration features",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["Vue.js", "Django", "WebRTC", "EdTech"],
  },
  {
    name: "Supply Chain Blockchain",
    description: "Blockchain-based supply chain tracking and verification system",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["Blockchain", "Solidity", "Node.js", "Supply Chain"],
  },
  {
    name: "Sustainable Energy Monitor",
    description: "Real-time monitoring and optimization platform for renewable energy systems",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
    url: "#",
    link: "#",
    github: "#",
    tags: ["IoT", "Python", "Data Analytics", "Green Tech"],
  }
];

export default function FeaturedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent success stories and innovative solutions
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background rounded-lg border overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}