"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  gradient?: string;
}

export default function PageHero({ 
  title, 
  description, 
  gradient = "from-blue-500 to-cyan-500" 
}: PageHeroProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Animated Background with 3D perspective */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-white/5 z-0 animate-grid-flow" />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90 dark:opacity-80 z-0`} />
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/20 rounded-full"
          />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          />
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container with Glassmorphism */}
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-white/5 dark:bg-black/5 rounded-2xl p-8 border border-white/10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 inline-block"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-white/80 to-white/20 rounded-full mx-auto" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white hero-text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white/50 text-sm font-light">Scroll to explore</div>
        <ChevronDown className="w-6 h-6 text-white/70" />
      </motion.div>
    </div>
  );
}