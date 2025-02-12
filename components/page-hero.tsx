"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface PageHeroProps {
  title: string;
  description: string;
  gradient?: string;
}

export default function PageHero({ 
  title, 
  description, 
  gradient = "from-primary to-primary" 
}: PageHeroProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 blur-3xl`} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative pt-32 pb-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          {/* Decorative Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />

          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="inline-block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
              >
                {title}
              </motion.span>
            </span>
          </h1>

          {/* Description with Fade In */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Decorative Dots */}
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V115.5H0V51.4091Z"
            className="fill-background"
          />
        </svg>
      </div>
    </div>
  );
}