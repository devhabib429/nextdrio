"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const partners = [
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg",
    description: "Cloud Infrastructure Partner"
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.svg",
    description: "Technology Solutions Provider"
  },
  {
    name: "Google",
    logo: "/logos/google.svg",
    description: "AI/ML Implementation Partner"
  },
  {
    name: "IBM",
    logo: "/logos/ibm.svg",
    description: "Enterprise Solutions Partner"
  },
  {
    name: "Oracle",
    logo: "/logos/oracle.svg",
    description: "Database Technology Partner"
  },
  {
    name: "Salesforce",
    logo: "/logos/salesforce.svg",
    description: "CRM Integration Partner"
  }
];

export default function TrustedBy() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading technology companies to deliver cutting-edge solutions
            that drive innovation and business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-3 group"
            >
              <div className="relative w-24 h-24 bg-background rounded-lg shadow-lg p-4 
                             transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-2 filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-sm font-medium">
              Trusted by 500+ companies worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 