"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Lightbulb, 
  Search, 
  Code2, 
  Rocket, 
  TestTube2, 
  Shield, 
  BarChart2,
  Users2
} from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "We begin with thorough requirements gathering and project planning to ensure clear objectives and timelines.",
    details: ["Requirement Analysis", "Technical Feasibility", "Resource Planning", "Timeline Estimation"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Search,
    title: "Research & Strategy",
    description: "Deep research into technologies and methodologies that best suit your project needs.",
    details: ["Technology Stack Selection", "Architecture Design", "Risk Assessment", "Best Practices Review"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Agile development process with regular updates and continuous integration.",
    details: ["Iterative Development", "Code Reviews", "Daily Stand-ups", "Sprint Planning"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TestTube2,
    title: "Testing & QA",
    description: "Rigorous testing procedures to ensure quality and reliability.",
    details: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Testing"],
    color: "from-purple-500 to-pink-500"
  }
];

const additionalSteps = [
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implementing robust security measures and ensuring regulatory compliance.",
    details: ["Security Audits", "Compliance Checks", "Vulnerability Testing", "Data Protection"],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Smooth deployment process with minimal downtime and maximum reliability.",
    details: ["CI/CD Pipeline", "Environment Setup", "Performance Monitoring", "Rollback Planning"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users2,
    title: "Training & Handover",
    description: "Comprehensive training and documentation for smooth project handover.",
    details: ["User Training", "Documentation", "Knowledge Transfer", "Support Setup"],
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: BarChart2,
    title: "Monitoring & Support",
    description: "Ongoing monitoring and support to ensure optimal performance.",
    details: ["Performance Monitoring", "Regular Updates", "24/7 Support", "Maintenance"],
    color: "from-teal-500 to-green-500"
  }
];

export default function ProjectProcess() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Our Project Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a comprehensive and proven process to ensure successful project delivery
            and exceed client expectations.
          </p>
        </motion.div>

        {/* Main Process Steps */}
        <div className="relative mb-24">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} group-hover:scale-125 transition-transform duration-300`} />
                </div>
                <div className="flex flex-col items-center text-center space-y-4 pt-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10`}>
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <ul className="text-sm space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="text-muted-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10`}>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <ul className="text-sm space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="text-muted-foreground">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 