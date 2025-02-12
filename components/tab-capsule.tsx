"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TabCapsuleProps {
  items: string[];
  activeItem: string;
  onSelect: (item: string) => void;
  gradient?: string;
}

export default function TabCapsule({ 
  items, 
  activeItem, 
  onSelect,
  gradient = "from-primary/80 to-primary"
}: TabCapsuleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="bg-background/50 backdrop-blur-sm border rounded-full p-1.5 flex gap-2"
    >
      {items.map((item) => (
        <motion.button
          key={item}
          onClick={() => onSelect(item)}
          className={`
            relative px-6 py-2 rounded-full text-sm font-medium
            transition-all duration-300 
            ${activeItem === item 
              ? 'text-primary-foreground' 
              : 'text-muted-foreground hover:text-foreground'
            }
          `}
        >
          {activeItem === item && (
            <motion.div
              layoutId="active-tab"
              className={`
                absolute inset-0 rounded-full bg-gradient-to-r ${gradient}
                shadow-[0_2px_8px_rgba(0,0,0,0.1)]
              `}
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{item}</span>
        </motion.button>
      ))}
    </motion.div>
  );
} 