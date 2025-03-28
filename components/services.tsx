"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cloud, Code2, Database, ArrowRight, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "DevOps",
    description: "Automate your infrastructure and streamline deployments with our expert DevOps services.",
    icon: Cloud,
    href: "/services/devops",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration"],
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web and mobile solutions built with modern technologies.",
    icon: Code2,
    href: "/services/full-stack",
    features: ["Web Applications", "Mobile Development", "API Integration"],
  },
  {
    title: "ERPNext",
    description: "Comprehensive business management solutions powered by ERPNext.",
    icon: Database,
    href: "/services/erpnext",
    features: ["Implementation", "Customization", "Training"],
  },
  {
    title: "UI/UX Design",
    description: "Create exceptional user experiences with modern design principles.",
    icon: Palette,
    href: "/services/uiux",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    initialInView: true,
    delay: 0
  });

  return (
    <section ref={ref} className="relative w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="bg-background p-6 rounded-lg border"
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href={service.href}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}