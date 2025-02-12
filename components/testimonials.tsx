"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "NextDrio transformed our development process. Their DevOps expertise helped us achieve 3x faster deployments with 99.9% uptime.",
    avatar: "SJ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateCo",
    content: "The full-stack development team delivered a beautiful, scalable solution that exceeded our expectations. Our user engagement increased by 150%.",
    avatar: "MC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, ManufactureX",
    content: "Their ERPNext implementation streamlined our operations and improved efficiency by 40%. The team's expertise was invaluable.",
    avatar: "ER",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container relative">
        {/* Background Elements */}
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
              about their experience working with NextDrio
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                className="flex flex-col h-full"
              >
                <Card className="h-full transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-primary opacity-50" />
                    </div>
                    
                    <p className="flex-grow text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center pt-4 border-t">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}