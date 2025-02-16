"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Calendar, 
  ArrowRight, 
  Tag, 
  Eye, 
  ExternalLink,
  Building2,
  Laptop,
  Heart,
  CheckCircle2,
  Users,
  Globe,
  Newspaper,
  Megaphone,
  Rss,
  BookOpen,
  Share2
} from "lucide-react";
import Link from "next/link";

const announcements = [
  {
    id: 1,
    title: "Next-Gen Cloud Platform Launch",
    date: "2024-03-15",
    category: "Product Launch",
    description: "We're excited to announce our next-generation cloud platform with enhanced security features and improved performance.",
    priority: "high",
    link: "/blog/cloud-platform-launch",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800"
  },
  {
    id: 2,
    title: "Strategic Partnership with TechGiant",
    date: "2024-03-10",
    category: "Partnership",
    description: "We've partnered with TechGiant to bring enterprise-grade solutions to small businesses.",
    priority: "medium",
    link: "/blog/techgiant-partnership",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800"
  },
  // Add more announcements as needed
];

const featuredUpdates = [
  {
    id: 1,
    title: "Company Growth",
    description: "Expanding our global presence with new office locations",
    category: "Company News",
    icon: Building2,
    link: "/blog/company-growth",
    points: [
      "New offices in Asia and Europe",
      "Growing team by 150%",
      "Expanding service offerings"
    ]
  },
  {
    id: 2,
    title: "Technology Innovation",
    description: "Launching new AI-powered solutions",
    category: "Product Update",
    icon: Laptop,
    link: "/blog/tech-innovation",
    points: [
      "Advanced AI capabilities",
      "Improved user experience",
      "Enhanced security features"
    ]
  },
  {
    id: 3,
    title: "Community Impact",
    description: "Making a difference through technology",
    category: "Community",
    icon: Heart,
    link: "/blog/community-impact",
    points: [
      "Supporting local tech education",
      "Environmental initiatives",
      "Tech for social good"
    ]
  }
];

export default function AnnouncementsPage() {
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
            className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 10 }}
            className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-sky-500/10 via-blue-500/10 to-transparent blur-3xl"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-sky-500/20 blur-xl" />
                  <div className="relative bg-background/80 backdrop-blur-sm border rounded-2xl px-6 py-2">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-500">
                      Latest Updates
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
                Stay Informed
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-sky-400">
                  With Our News
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Get the latest updates, product releases, and important announcements
                from our team
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600">
                  <Bell className="mr-2 h-4 w-4" />
                  <span className="relative">Subscribe Now</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-blue-500/50 transition-colors"
                >
                  <Newspaper className="mr-2 h-4 w-4" />
                  Browse Updates
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: Megaphone, label: 'Announcements', value: '100+' },
                  { icon: Rss, label: 'Monthly Updates', value: '12+' },
                  { icon: BookOpen, label: 'Release Notes', value: '50+' },
                  { icon: Share2, label: 'Social Shares', value: '5K+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-sky-500/5 blur-xl group-hover:opacity-75 transition-opacity" />
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent blur-sm" />
      </section>

      <div className="container py-12">
        <div className="grid gap-8">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-background/50">
                        {announcement.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {announcement.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {announcement.description}
                    </p>
                    
                    <div className="pt-4">
                      <Button asChild>
                        <Link href={announcement.link}>
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="w-full sm:w-72 h-48 rounded-xl overflow-hidden">
                    <img 
                      src={announcement.image} 
                      alt={announcement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="container py-16 bg-muted/30 rounded-3xl my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Updates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our major milestones and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredUpdates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card p-6 rounded-xl border">
                <div className="mb-4">
                  <update.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                <p className="text-muted-foreground mb-4">{update.description}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{update.category}</Badge>
                  <Link 
                    href={update.link} 
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Learn more <ExternalLink className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 md:p-12">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest updates directly in your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border bg-background px-4 py-2"
              />
              <Button>
                Subscribe <Bell className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 