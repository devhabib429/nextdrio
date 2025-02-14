"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Trophy,
  Users,
  Clock,
  Target,
  Zap,
  Shield,
  BarChart,
  Wrench
} from "lucide-react";
import { Service } from "@/types";

interface ServiceContentProps {
  serviceData: Service;
}

export default function ServiceContent({ serviceData }: ServiceContentProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ... rest of your existing JSX with animations
  return (
    <div className="min-h-screen" ref={ref}>
      <PageHero
        title={serviceData.title}
        description={serviceData.description}
        gradient={serviceData.gradient}
      />
      {/* ... rest of your existing JSX */}
    </div>
  );
} 