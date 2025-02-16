"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface PageHeroProps {
  title: string;
  description: string;
  gradient?: string;
}

export default function PageHero({ title, description, gradient = "from-blue-500 to-cyan-500" }: PageHeroProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      className="relative min-h-[40vh] flex items-center py-16 sm:py-20" 
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-white/5 z-0" />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90 dark:opacity-80 z-0`} />

        {/* Animated Circles */}
        <div className="hidden sm:block">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 dark:bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [180, 270, 360],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 dark:bg-white/10 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}