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
      className={`relative bg-gradient-to-r ${gradient} py-12 sm:py-16 md:py-24 px-4 w-full`} 
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="relative max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}