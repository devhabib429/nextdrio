"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/page-hero";
import ProjectProcess from "@/components/project-process";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Globe, ArrowRight, Star, GitFork, Users, Trophy, Clock, Target, CheckCircle2, Heart, DollarSign, TrendingUp, Rocket, Palette, Server, Database, Wrench, TestTube2, Cloud, Code2 } from "lucide-react";
import Link from "next/link";
import { useAdminStore } from "@/lib/store";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import TabCapsule from "@/components/tab-capsule";
import ContactDialog from "@/components/contact-dialog";
import { useInView } from "react-intersection-observer";

const categories = [
  "All",
  "DevOps",
  "Full Stack",
  "ERPNext",
  "Mobile",
  "AI/ML",
  "Cloud",
  "IoT",
  "Blockchain"
];

export default function Projects() {
  const { projects, loading, error, fetchProjects } = useAdminStore();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showContactDialog, setShowContactDialog] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen">
      <PageHero
        title="Our Projects"
        description="Explore our portfolio of innovative solutions and successful implementations"
        gradient="from-blue-500 to-cyan-500"
      />

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 rounded-lg p-6 text-center"
          >
            <Trophy className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Success Rate</h3>
            <p className="text-2xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground">Project Completion Rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary/5 rounded-lg p-6 text-center"
          >
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Time Management</h3>
            <p className="text-2xl font-bold text-primary">95%</p>
            <p className="text-sm text-muted-foreground">On-Time Delivery</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/5 rounded-lg p-6 text-center"
          >
            <Target className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Client Satisfaction</h3>
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </motion.div>
        </div>

        <div className="flex justify-center mb-12">
          <TabCapsule
            items={categories}
            activeItem={selectedCategory}
            onSelect={setSelectedCategory}
            gradient="from-blue-500 to-cyan-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Impacts</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.impact.map((impact) => (
                        <li key={impact} className="flex items-center text-sm">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{project.metrics.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{project.metrics.forks}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm">{project.metrics.contributors}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.link && (
                      <Button size="sm" asChild>
                        <Link href={project.link}>
                          <Globe className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>

      <ProjectProcess />

      {/* Project Impact Metrics */}
      <section 
        ref={ref}
        className="container py-24 bg-gradient-to-b from-background to-secondary/10 rounded-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable results and transformative solutions across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { metric: "100+", label: "Projects Delivered", icon: CheckCircle2 },
            { metric: "95%", label: "Client Satisfaction", icon: Heart },
            { metric: "40%", label: "Average Cost Reduction", icon: DollarSign },
            { metric: "60%", label: "Efficiency Increase", icon: TrendingUp }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-background/50 border hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{item.metric}</h3>
              <p className="text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from our transformative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              client: "HealthTech Solutions",
              industry: "Healthcare",
              result: "60% reduction in diagnosis time",
              quote: "Revolutionary impact on our patient care workflow.",
              image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
            },
            {
              client: "FinServ Global",
              industry: "Finance",
              result: "40% increase in transaction speed",
              quote: "Transformed our digital banking experience.",
              image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
            },
            {
              client: "EduTech Innovators",
              industry: "Education",
              result: "85% student engagement increase",
              quote: "Revolutionized our online learning platform.",
              image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800"
            }
          ].map((story, index) => (
            <motion.div
              key={story.client}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden border bg-card hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.client}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.client}</h3>
                <p className="text-sm text-muted-foreground mb-4">Industry: {story.industry}</p>
                <div className="mb-4 p-3 rounded-lg bg-primary/5 border">
                  <p className="font-medium text-primary">{story.result}</p>
                </div>
                <blockquote className="text-sm italic text-muted-foreground">
                  "{story.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium inline-flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4" />
            Our Tech Arsenal
          </span>
          <h2 className="text-3xl font-bold mb-4">Cutting-Edge Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging the latest technologies to build powerful solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: "Frontend",
              icon: Palette,
              gradient: "from-pink-500/10 via-purple-500/10 to-indigo-500/10",
              techs: [
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "TypeScript", icon: "TS" },
                { name: "Tailwind CSS", icon: "🎨" },
                { name: "Framer Motion", icon: "🎭" }
              ]
            },
            {
              category: "Backend",
              icon: Server,
              gradient: "from-cyan-500/10 via-blue-500/10 to-purple-500/10",
              techs: [
                { name: "Node.js", icon: "🟢" },
                { name: "Python", icon: "🐍" },
                { name: "Django", icon: "🎯" },
                { name: "FastAPI", icon: "⚡" },
                { name: "GraphQL", icon: "◈" }
              ]
            },
            {
              category: "Database",
              icon: Database,
              gradient: "from-green-500/10 via-emerald-500/10 to-teal-500/10",
              techs: [
                { name: "PostgreSQL", icon: "🐘" },
                { name: "MongoDB", icon: "🍃" },
                { name: "Redis", icon: "🔴" },
                { name: "MySQL", icon: "🐬" },
                { name: "Elasticsearch", icon: "🔍" }
              ]
            },
            {
              category: "DevOps",
              icon: Cloud,
              gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
              techs: [
                { name: "Docker", icon: "🐳" },
                { name: "Kubernetes", icon: "☸️" },
                { name: "AWS", icon: "☁️" },
                { name: "CI/CD", icon: "🔄" },
                { name: "Terraform", icon: "🏗️" }
              ]
            },
            {
              category: "Tools",
              icon: Wrench,
              gradient: "from-red-500/10 via-rose-500/10 to-pink-500/10",
              techs: [
                { name: "Git", icon: "📚" },
                { name: "JIRA", icon: "📋" },
                { name: "Figma", icon: "🎨" },
                { name: "VS Code", icon: "💻" },
                { name: "Postman", icon: "📬" }
              ]
            },
            {
              category: "Testing",
              icon: TestTube2,
              gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
              techs: [
                { name: "Jest", icon: "🃏" },
                { name: "Cypress", icon: "🎯" },
                { name: "Selenium", icon: "🤖" },
                { name: "PyTest", icon: "🐍" },
                { name: "JUnit", icon: "☕" }
              ]
            }
          ].map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }
              } : {}}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`p-6 rounded-xl border bg-gradient-to-br ${stack.gradient} 
                backdrop-blur-sm hover:shadow-lg transition-all duration-300 
                relative overflow-hidden group`}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
                animate={{
                  x: ["0%", "100%"],
                  transition: {
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "mirror"
                  }
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-2 rounded-lg bg-background/80 backdrop-blur-sm"
                  >
                    <stack.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg">{stack.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {stack.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? {
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: index * 0.1 + techIndex * 0.1
                        }
                      } : {}}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 p-2 rounded-lg bg-background/50 
                        hover:bg-background/80 transition-colors duration-300"
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: Math.random() * 2
                        }}
                        className="text-lg"
                      >
                        {tech.icon}
                      </motion.span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="container py-24 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can help bring your project to life
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => setShowContactDialog(true)}>
              Start Your Project <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      <ContactDialog 
        open={showContactDialog} 
        onOpenChange={setShowContactDialog}
      />
    </div>
  );
}