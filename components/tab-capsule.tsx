"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check if scroll arrows should be shown
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      // Check on window resize
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  // Scroll functions
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full max-w-full px-4">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      )}

      {/* Tabs Container */}
      <motion.div 
        ref={ref}
        className="relative mx-auto max-w-full"
      >
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide mask-edges"
        >
          <div className="bg-background/50 backdrop-blur-sm border rounded-full p-1.5 inline-flex gap-2 whitespace-nowrap min-w-full sm:min-w-0">
            {items.map((item) => (
              <motion.button
                key={item}
                onClick={() => onSelect(item)}
                className={`
                  relative flex-shrink-0 px-3 sm:px-6 py-2 rounded-full text-sm font-medium
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
                <span className="relative z-10 whitespace-nowrap">{item}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 