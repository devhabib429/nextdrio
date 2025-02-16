"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "@/components/page-hero";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Tag, 
  ArrowRight,
  Mic2,
  Globe,
  BookOpen,
  Network,
  Video,
  MessageSquare,
  Award,
  Lightbulb,
  Gift,
  CheckCircle2,
  Star,
  Zap,
  MessageCircle,
  Trophy,
  Target,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sampleEvents } from "@/lib/data";
import TabCapsule from "@/components/tab-capsule";
import { Event } from '@/types'  // Add this import

const eventCategories = [
  "All Events",
  "Conferences",
  "Workshops",
  "Webinars",
  "Meetups",
  "Training"
];

const eventHighlights = [
  {
    title: "Expert Speakers",
    description: "Learn from industry leaders and innovators",
    icon: Mic2,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Global Reach",
    description: "Connect with participants worldwide",
    icon: Globe,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Interactive Learning",
    description: "Hands-on workshops and practical sessions",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Networking",
    description: "Build valuable professional connections",
    icon: Network,
    color: "from-orange-500 to-red-500"
  }
];

const eventBenefits = [
  {
    title: "Professional Growth",
    description: "Enhance your skills and stay ahead in your career",
    icon: Award,
    color: "from-indigo-500 to-blue-500",
    features: [
      "Industry certifications",
      "Skill development workshops",
      "Leadership training",
      "Career guidance sessions"
    ]
  },
  {
    title: "Industry Insights",
    description: "Get latest trends and innovations in technology",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
    features: [
      "Market analysis reports",
      "Technology forecasts",
      "Case studies",
      "Success stories"
    ]
  },
  {
    title: "Exclusive Resources",
    description: "Access to premium content and tools",
    icon: Gift,
    color: "from-green-500 to-emerald-500",
    features: [
      "Workshop materials",
      "Code repositories",
      "Reference architectures",
      "Best practices guides"
    ]
  }
];

const successStories = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer",
    testimonial: "The workshops helped me master new technologies and advance my career.",
    tags: ["Workshop", "Career Growth"]
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    testimonial: "Networking at these events led to valuable partnerships and opportunities.",
    tags: ["Networking", "Leadership"]
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    testimonial: "The insights gained have been instrumental in our product strategy.",
    tags: ["Strategy", "Innovation"]
  }
];

export default function EventsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const categories = ["All", "Conference", "Workshop", "Meetup", "Hackathon"];

  const filteredEvents = selectedCategory === "All Events"
    ? sampleEvents
    : sampleEvents.filter(event => event.category === selectedCategory);

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
            className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 10 }}
            className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-tl from-purple-500/10 via-violet-500/10 to-transparent blur-3xl"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-xl" />
                  <div className="relative bg-background/80 backdrop-blur-sm border rounded-2xl px-6 py-2">
                    <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">
                      Connect & Learn
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
                Join Our
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-violet-400 to-purple-400">
                  Tech Events
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
              >
                Discover workshops, webinars, and conferences that help you stay ahead
                in the tech world
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="relative">Upcoming Events</span>
                  <ArrowRight className="relative ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:border-violet-500/50 transition-colors"
                >
                  <Video className="mr-2 h-4 w-4" />
                  Watch Past Events
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              >
                {[
                  { icon: Calendar, label: 'Annual Events', value: '20+' },
                  { icon: Users, label: 'Attendees', value: '5000+' },
                  { icon: Globe, label: 'Countries', value: '25+' },
                  { icon: Mic2, label: 'Speakers', value: '100+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 blur-xl group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-6 text-center">
                      <stat.icon className="w-8 h-8 text-violet-500 mx-auto mb-3" />
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
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-sm" />
      </section>

      {/* Event Categories */}
      <section className="container py-12">
        <TabCapsule
          items={categories}
          activeItem={selectedCategory}
          onSelect={setSelectedCategory}
          gradient="from-blue-500 to-purple-500"
        />
      </section>

      {/* Featured Event */}
      <section className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <Star className="w-5 h-5" />
                <span className="text-sm font-medium">Featured Event</span>
              </div>
              <h2 className="text-3xl font-bold">Tech Conference 2024</h2>
              <p className="text-muted-foreground">
                Join industry leaders and innovators for our biggest tech conference yet.
                Discover the latest trends, network with peers, and gain valuable insights.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>June 15-17, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>1000+ Attendees</span>
                </div>
              </div>
              <Button size="lg" className="group">
                Register Now
                <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60"
                alt="Tech Conference"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Event Grid */}
      <section className="container py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event: Event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: event.id * 0.1 }}
              className="group rounded-xl border bg-card p-6 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                </div>
                  <div className="flex flex-wrap gap-2">
                    {event.topics?.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs rounded-full bg-secondary"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                <Button variant="outline" className="w-full group" asChild>
                  <Link href={event.link || '#'}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-24 bg-gradient-to-b from-background to-secondary/10 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of tech enthusiasts and professionals in our growing community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "10,000+", label: "Community Members" },
            { icon: Calendar, value: "150+", label: "Events Hosted" },
            { icon: Globe, value: "40+", label: "Countries" },
            { icon: MessageCircle, value: "5,000+", label: "Discussions" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 p-4 rounded-xl bg-background/50 border group-hover:shadow-lg transition-all mx-auto w-fit">
                <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Ready to Join Our Community?</h2>
          <p className="text-xl text-muted-foreground">
            Connect with like-minded professionals and stay updated with the latest events
          </p>
          <Button size="lg" asChild>
            <Link href="/community">
              Join Community <Users className="ml-2 h-4 w-4" />
            </Link>
          </Button>
      </div>
      </section>
    </div>
  );
}