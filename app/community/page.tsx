"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "@/components/page-hero";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Award, 
  Heart,
  Globe,
  Rocket,
  BookOpen,
  Share2,
  Target,
  Zap,
  Coffee,
  Sparkles,
  HandHeart,
  ArrowRight,
  Code,
  Laptop,
  GraduationCap,
  Trophy,
  Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import JoinCommunityDialog from "@/components/join-community-dialog";
import TabCapsule from "@/components/tab-capsule";

const communityHighlights = [
  {
    title: "Global Network",
    description: "Connect with tech enthusiasts worldwide",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    stats: "10K+ Members"
  },
  {
    title: "Knowledge Sharing",
    description: "Learn from industry experts and peers",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    stats: "500+ Resources"
  },
  {
    title: "Active Discussions",
    description: "Engage in meaningful tech conversations",
    icon: MessageCircle,
    color: "from-orange-500 to-red-500",
    stats: "1K+ Topics"
  },
  {
    title: "Regular Events",
    description: "Attend workshops, webinars, and meetups",
    icon: Calendar,
    color: "from-green-500 to-emerald-500",
    stats: "100+ Events/Year"
  }
];

const initiatives = [
  {
    title: "Mentorship Program",
    description: "Connect with experienced developers for guidance and growth",
    icon: GraduationCap,
    stats: "500+ Mentors",
    gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10"
  },
  {
    title: "Code Reviews",
    description: "Get feedback on your code from expert developers",
    icon: Code,
    stats: "1000+ Reviews",
    gradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10"
  },
  {
    title: "Hackathons",
    description: "Participate in exciting coding challenges and win prizes",
    icon: Trophy,
    stats: "12 Events/Year",
    gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10"
  },
  {
    title: "Learning Resources",
    description: "Access curated learning materials and tutorials",
    icon: BookOpen,
    stats: "200+ Resources",
    gradient: "from-green-500/10 via-emerald-500/10 to-teal-500/10"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    content: "The mentorship program has been invaluable for my career growth. The community is incredibly supportive.",
    gradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10"
  },
  {
    name: "Michael Park",
    role: "Tech Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    content: "The code review sessions have helped our team maintain high-quality standards. Highly recommended!",
    gradient: "from-purple-500/10 via-pink-500/10 to-rose-500/10"
  },
  {
    name: "Emma Wilson",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    content: "Participating in hackathons has been a game-changer. Great way to learn and network!",
    gradient: "from-amber-500/10 via-orange-500/10 to-red-500/10"
  }
];

export default function CommunityPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showJoinDialog, setShowJoinDialog] = useState(false);

  return (
    <div ref={ref}>
      <PageHero
        title="Join Our Tech Community"
        description="Connect, learn, and grow with a global network of developers and tech enthusiasts"
        gradient="from-purple-500 to-pink-500"
      />

      {/* Community Highlights */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium inline-flex items-center gap-2 mb-4">
            <Users className="w-4 h-4" />
            Our Community
          </span>
          <h2 className="text-3xl font-bold mb-4">Why Join Our Community?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be part of a thriving ecosystem of developers, designers, and tech enthusiasts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communityHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.color} p-2.5 mb-4`}>
                <highlight.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground mb-4">{highlight.description}</p>
              <p className="text-sm font-medium text-primary">{highlight.stats}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="container py-24 bg-gradient-to-b from-background to-secondary/10 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Community Initiatives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our various programs designed to help you grow and succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border bg-gradient-to-r p-[1px] group hover:shadow-lg transition-all"
            >
              <div className="rounded-xl p-6 bg-background">
                <div className="mb-4">
                  <initiative.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{initiative.description}</p>
                <p className="text-sm font-medium text-primary">{initiative.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Community Voices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what our members have to say about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="container py-24 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Ready to Join Our Community?</h2>
          <p className="text-xl text-muted-foreground">
            Connect with like-minded professionals and accelerate your growth
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => setShowJoinDialog(true)}>
              Join Now <Zap className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/events">
                View Events <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <JoinCommunityDialog 
        open={showJoinDialog} 
        onOpenChange={setShowJoinDialog}
      />
    </div>
  );
} 