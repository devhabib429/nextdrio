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
  CheckCircle2 
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
      <PageHero
        title="Announcements"
        description="Stay updated with the latest news, product launches, and company updates"
        gradient="from-blue-500 to-purple-500"
      />

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