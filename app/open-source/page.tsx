"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Github, 
  GitBranch, 
  Users, 
  Star, 
  GitPullRequest,
  BookOpen,
  Code2,
  MessageSquare,
  Bug,
  Lightbulb,
  Heart,
  Award
} from "lucide-react";

const featuredProjects = [
  {
    name: "NextDrio UI",
    description: "Modern UI component library for React applications",
    stars: "2.5k",
    forks: "450",
    contributors: "85",
    language: "TypeScript",
    tags: ["UI", "React", "Components"],
    link: "https://github.com/nextdrio/ui"
  },
  {
    name: "DevOps Toolkit",
    description: "Collection of DevOps automation tools and scripts",
    stars: "1.8k",
    forks: "320",
    contributors: "62",
    language: "Python",
    tags: ["DevOps", "Automation", "Cloud"],
    link: "https://github.com/nextdrio/devops-toolkit"
  },
  {
    name: "Cloud Templates",
    description: "Infrastructure as Code templates for multiple cloud providers",
    stars: "1.2k",
    forks: "280",
    contributors: "45",
    language: "HCL",
    tags: ["IaC", "Cloud", "Templates"],
    link: "https://github.com/nextdrio/cloud-templates"
  }
];

const contributionSteps = [
  {
    title: "Find an Issue",
    description: "Browse our repositories and find an issue that interests you",
    icon: Bug
  },
  {
    title: "Fork & Clone",
    description: "Fork the repository and clone it locally",
    icon: GitBranch
  },
  {
    title: "Make Changes",
    description: "Implement your changes following our guidelines",
    icon: Code2
  },
  {
    title: "Submit PR",
    description: "Create a pull request with your changes",
    icon: GitPullRequest
  }
];

const guidelines = [
  {
    title: "Code Style",
    description: "Follow our coding standards and style guides",
    icon: BookOpen
  },
  {
    title: "Documentation",
    description: "Update relevant documentation for your changes",
    icon: MessageSquare
  },
  {
    title: "Testing",
    description: "Add tests for new features and ensure all tests pass",
    icon: Bug
  },
  {
    title: "Innovation",
    description: "Bring creative solutions to complex problems",
    icon: Lightbulb
  }
];

export default function OpenSource() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen" ref={ref}>
      <PageHero
        title="Open Source Projects"
        description="Join our open source community and help build the future of technology. Explore our projects and start contributing today."
        gradient="from-purple-500 to-pink-500"
      />

      {/* Featured Projects */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular open source projects and start contributing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <Badge variant="secondary">{project.language}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {project.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitBranch className="w-4 h-4" />
                  {project.forks}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {project.contributors}
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href={project.link}>
                  View Project <Github className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contribution Process */}
      <section className="container py-16 bg-muted/30 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How to Contribute</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to start contributing to our open source projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {contributionSteps.map((step, index) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Stats */}
      <section className="container py-24">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "5,000+", label: "Contributors" },
            { icon: Star, value: "15K+", label: "GitHub Stars" },
            { icon: GitPullRequest, value: "2,500+", label: "Pull Requests" },
            { icon: Heart, value: "100+", label: "Active Projects" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 p-4 rounded-xl bg-card border group-hover:shadow-lg transition-all mx-auto w-fit">
                <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 p-8 md:p-12">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Contribute?</h2>
            <p className="text-muted-foreground mb-8">
              Join our community and help shape the future of open source technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://github.com/nextdrio">
                  <Github className="mr-2 h-4 w-4" />
                  View Projects
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs/contributing">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Guidelines
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}