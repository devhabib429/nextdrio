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
  Award,
  ArrowRight,
  GitFork,
  Download
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
            className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 10 }}
            className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-rose-500/10 via-pink-500/10 to-transparent blur-3xl"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 blur-xl" />
                  <div className="relative bg-background/80 backdrop-blur-sm border rounded-2xl px-6 py-2">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
                      Community & Collaboration
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
                Contributing to
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-rose-400">
                  Open Source
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Discover our open source projects and contributions to the global developer community
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                  <span className="relative">Explore Projects</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-pink-500/50 transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: GitFork, label: 'Repositories', value: '3+' },
                  { icon: Star, label: 'GitHub Stars', value: '100+' },
                  { icon: Users, label: 'Contributors', value: '10+' },
                  { icon: Download, label: 'Downloads', value: '1K+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 blur-xl group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 text-center">
                      <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent blur-sm" />
      </section>

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
            { icon: Users, value: "100+", label: "Contributors" },
            { icon: Star, value: "1K+", label: "GitHub Stars" },
            { icon: GitPullRequest, value: "250+", label: "Pull Requests" },
            { icon: Heart, value: "3+", label: "Active Projects" }
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