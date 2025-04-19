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
  Wrench,
  icons
} from "lucide-react";
import { Service } from "@/types";

interface ServiceContentProps {
  serviceData: Omit<Service, 'metrics' | 'process' | 'expertise'> & {
    metrics: Array<{
      label: string;
      value: string;
      icon: string;
    }>;
    process: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    expertise: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
}

const Icon = ({ name }: { name: string }) => {
  const LucideIcon = icons[name as keyof typeof icons];
  return <LucideIcon className="w-8 h-8 mx-auto mb-4 text-primary" />;
};

export default function ServiceContent({ serviceData }: ServiceContentProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    initialInView: true,
    delay: 0
  });

  return (
    <div className="relative w-full min-h-screen" ref={ref}>
      <PageHero
        title={serviceData.title}
        description={serviceData.description}
        gradient={serviceData.gradient}
      />

      {/* Metrics Section */}
      <section className="relative py-8 md:py-12 px-4 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceData.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="relative bg-background p-4 rounded-lg border text-center"
              >
                <Icon name={metric.icon} />
                <h3 className="text-base font-semibold mb-2">{metric.label}</h3>
                <p className="text-xl font-bold text-primary">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-8 sm:py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Key Features</h2>
              <ul className="space-y-3 sm:space-y-4">
                {serviceData.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Benefits</h2>
              <ul className="space-y-4">
                {serviceData.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceData.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-4 sm:p-6 rounded-lg border"
              >
                <Icon name={step.icon} />
                <h3 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-8 sm:py-12 px-4 bg-muted/50 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {serviceData.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-background px-3 sm:px-4 py-1 sm:py-2 rounded-full border text-sm sm:text-base"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Let's discuss how we can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 