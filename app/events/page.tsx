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
import { sampleEvents, getEventsByType, formatEventDate, formatEventTime } from "@/app/data/events";
import TabCapsule from "@/components/tab-capsule";
import { Event as EventType } from '@/app/data/events/types';  // Import the correct Event type

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

  // Map UI categories to event types
  const categoryToTypeMap: Record<string, string | null> = {
    "All Events": null,
    "Conferences": "conference",
    "Workshops": "workshop",
    "Webinars": "webinar",
    "Meetups": "meetup"
  };

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "All Events"
    ? sampleEvents
    : sampleEvents.filter(event => event.type === categoryToTypeMap[selectedCategory]);

  // Get featured event (first conference)
  const featuredEvent = sampleEvents.find(event => event.type === "conference");

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
                  { icon: Users, label: 'Attendees', value: '2000+' },
                  { icon: Globe, label: 'Countries', value: '10+' },
                  { icon: Mic2, label: 'Speakers', value: '10+' }
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
          items={eventCategories}
          activeItem={selectedCategory}
          onSelect={setSelectedCategory}
          gradient="from-blue-500 to-purple-500"
        />
      </section>

      {/* Featured Event */}
      {featuredEvent && (
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
                <h2 className="text-3xl font-bold">{featuredEvent.title}</h2>
                <p className="text-muted-foreground">
                  {featuredEvent.description}
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{formatEventDate(featuredEvent.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{featuredEvent.location.city}, {featuredEvent.location.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{featuredEvent.capacity} Attendees</span>
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
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Events Grid */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event: EventType) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatEventDate(event.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatEventTime(event.startTime)} - {formatEventTime(event.endTime)}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location.city}, {event.location.country}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.capacity} spots
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="flex-1 group" asChild>
                    <Link href={`/events/${event.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button className="flex-1 group">
                    Register
                    <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Benefits */}
      <section className="container py-24 bg-gradient-to-b from-background to-secondary/10 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Attend Our Events?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get access to exclusive content, networking opportunities, and hands-on learning experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {eventBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity" />
              <div className="relative p-6 rounded-2xl border bg-card">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} p-2.5 mb-4`}>
                  <benefit.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members about their experiences at our events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:opacity-75 transition-opacity" />
              <div className="relative p-6 rounded-2xl border bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-lg font-semibold">{story.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{story.testimonial}</p>
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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