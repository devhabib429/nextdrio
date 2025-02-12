"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Server, 
  Palette,
  Zap,
  Globe,
  Shield,
  Trophy,
  Users,
  Sparkles,
  Braces,
  HeartHandshake,
  Cpu,
  Network,
  Building2,
  Bot,
  LineChart,
  ShieldCheck,
  Award,
  TrendingUp,
  Lightbulb,
  Puzzle,
  Users2,
  Clock,
  Brain,
  Cloud,
  Heart,
  Headphones,
  ChevronDown,
  Quote,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function HomePage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen" ref={ref}>
      <section className="relative h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background z-0" />
          
          {/* Animated Circles */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [180, 270, 360],
              opacity: [0.5, 0.3, 0.5] 
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Transform Your Ideas Into
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Reality
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Innovative solutions for modern businesses. We help you stay ahead in the digital era.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" onClick={() => setShowContactDialog(true)}>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View Projects <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* New: Success Metrics Section */}
      <div className="container py-24 bg-gradient-to-b from-background to-secondary/10">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border"
            >
              <metric.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <p className="text-muted-foreground mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* New: Why Choose Us Section */}
      <div className="container py-24 relative">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background opacity-50" />
        
        <SectionHeader
          title="Why Choose Us"
          subtitle="Delivering excellence through innovation and expertise"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-sm p-8 hover:shadow-xl transition-all duration-500"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ padding: '1px' }}>
                <div className="h-full w-full bg-background/95" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-xl bg-primary/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  <reason.icon className="w-8 h-8 text-primary group-hover:animate-pulse" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="container py-24">
        <SectionHeader 
          title="Core Services" 
          subtitle="Comprehensive solutions for modern businesses"
        />
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-background to-background/50 p-6 hover:shadow-2xl transition-all duration-500"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="relative z-10">
                <div className="mb-4 p-3 rounded-xl bg-primary/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Corner */}
              <div className="absolute -right-2 -top-2 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* New: Advanced Solutions Section */}
      <div className="container py-24 bg-secondary/5 rounded-3xl">
        <SectionHeader 
          title="Advanced Technology Solutions" 
          subtitle="Cutting-edge solutions for the digital age"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="enhanced-card hover:bg-secondary/10"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/5 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="container py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
        >
          {[
            { value: "500+", label: "Projects Completed", icon: Trophy },
            { value: "98%", label: "Client Satisfaction", icon: Heart },
            { value: "24/7", label: "Support Available", icon: Headphones },
            { value: "50+", label: "Expert Team", icon: Users }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industry Solutions Section */}
      <div className="container py-24">
        <SectionHeader 
          title="Industry Solutions" 
          subtitle="Specialized solutions for diverse sectors"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySolutions.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-white/80 mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* New: Latest Technologies Section */}
      <div className="container py-24 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl">
        <SectionHeader
          title="Latest Technologies"
          subtitle="Stay ahead with cutting-edge tech stack"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border group-hover:shadow-lg transition-all duration-300 mx-auto w-fit">
                <tech.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-semibold">{tech.name}</h4>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container py-24 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              Get Started 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <section className="container py-24 relative overflow-hidden">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Trusted by businesses worldwide"
        />
        
        <div className="mt-16 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Content */}
                <div className="relative p-8 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-muted-foreground italic">{testimonial.content}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="w-2 h-2 text-primary" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "DevOps Excellence",
    description: "Streamline your development and operations with modern practices",
    icon: Server
  },
  {
    title: "Full Stack Development",
    description: "End-to-end solutions for web and mobile applications",
    icon: Code2
  },
  {
    title: "UI/UX Design",
    description: "Create engaging and intuitive user experiences",
    icon: Palette
  },
  {
    title: "ERPNext Solutions",
    description: "Optimize business processes with custom ERP solutions",
    icon: Database
  }
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Team Members" },
  { value: "24/7", label: "Support Available" }
];

const advancedSolutions = [
  {
    title: "GenAI Solutions",
    description: "Custom AI solutions leveraging latest generative AI technologies for business automation and innovation",
    icon: Braces,
    technologies: ["GPT-4", "LangChain", "Stable Diffusion", "Custom Models"]
  },
  {
    title: "IT Consultancy",
    description: "Strategic technology consulting to help businesses navigate digital transformation",
    icon: HeartHandshake,
    technologies: ["Digital Strategy", "Tech Architecture", "Process Optimization"]
  },
  {
    title: "AI & Machine Learning",
    description: "Advanced AI solutions for predictive analytics and process automation",
    icon: Cpu,
    technologies: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"]
  },
  {
    title: "Blockchain Development",
    description: "Secure and scalable blockchain solutions for various business needs",
    icon: Network,
    technologies: ["Ethereum", "Solidity", "Smart Contracts", "Web3"]
  },
  {
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise-grade solutions for large-scale operations",
    icon: Building2,
    technologies: ["SAP", "Oracle", "Microsoft", "Custom ERP"]
  },
  {
    title: "Security & Compliance",
    description: "Advanced security solutions and compliance management systems",
    icon: ShieldCheck,
    technologies: ["ISO 27001", "GDPR", "HIPAA", "SOC 2"]
  }
];

const industrySolutions = [
  {
    id: 'education',
    title: "Education",
    description: "Smart learning solutions with AI-powered personalization",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
    tags: ['E-Learning', 'EdTech', 'LMS'],
    features: [
      'Adaptive Learning Paths',
      'Virtual Classrooms',
      'Student Analytics'
    ],
    technologies: ['AI/ML', 'WebRTC', 'React']
  },
  {
    id: 'agriculture',
    title: "Agriculture",
    description: "Smart farming solutions with IoT and data analytics",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60",
    tags: ['AgriTech', 'IoT', 'Analytics'],
    features: [
      'Crop Monitoring',
      'Weather Integration',
      'Yield Prediction'
    ],
    technologies: ['IoT', 'AI/ML', 'Mobile']
  },
  {
    id: 'retail-pos',
    title: "Retail & POS",
    description: "Modern point-of-sale and inventory management systems",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
    tags: ['POS', 'Retail', 'Payments'],
    features: [
      'Inventory Management',
      'Payment Processing',
      'Analytics Dashboard'
    ],
    technologies: ['Cloud', 'Mobile', 'ERPNext']
  },
  {
    id: 'healthcare',
    title: "Healthcare",
    description: "Digital healthcare solutions for modern medical facilities",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
    tags: ['HealthTech', 'EMR', 'Telemedicine'],
    features: [
      'Patient Management',
      'Telemedicine',
      'Health Analytics'
    ],
    technologies: ['HIPAA', 'AI/ML', 'Cloud']
  },
  {
    id: 'manufacturing',
    title: "Manufacturing",
    description: "Industry 4.0 solutions for smart manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    tags: ['Industry 4.0', 'IoT', 'Automation'],
    features: [
      'Production Monitoring',
      'Quality Control',
      'Supply Chain'
    ],
    technologies: ['IoT', 'AI/ML', 'ERPNext']
  },
  {
    id: 'logistics',
    title: "Logistics",
    description: "Smart logistics and supply chain management solutions",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
    tags: ['Supply Chain', 'Fleet', 'Tracking'],
    features: [
      'Route Optimization',
      'Fleet Management',
      'Real-time Tracking'
    ],
    technologies: ['IoT', 'Mobile', 'Cloud']
  },
  {
    id: 'hospitality',
    title: "Hospitality",
    description: "Digital solutions for hotels and restaurants",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=60",
    tags: ['Hotels', 'Restaurants', 'Booking'],
    features: [
      'Reservation System',
      'POS Integration',
      'Customer Management'
    ],
    technologies: ['Cloud', 'Mobile', 'ERPNext']
  },
  {
    id: 'real-estate',
    title: "Real Estate",
    description: "Property management and real estate solutions",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
    tags: ['PropTech', 'Management', 'Analytics'],
    features: [
      'Property Management',
      'Virtual Tours',
      'Tenant Portal'
    ],
    technologies: ['VR/AR', 'Cloud', 'Mobile']
  },
  {
    id: 'energy',
    title: "Energy & Utilities",
    description: "Smart energy management and utility solutions",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
    tags: ['Smart Grid', 'Renewable', 'IoT'],
    features: [
      'Energy Monitoring',
      'Grid Management',
      'Usage Analytics'
    ],
    technologies: ['IoT', 'AI/ML', 'Cloud']
  }
];

const successMetrics = [
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Sparkles
  },
  {
    value: "500+",
    label: "Projects Delivered",
    icon: TrendingUp
  },
  {
    value: "50+",
    label: "Expert Team Members",
    icon: Users2
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Clock
  }
];

const whyChooseUs = [
  {
    title: "Innovation First",
    description: "Cutting-edge solutions using the latest technologies and methodologies",
    icon: Lightbulb
  },
  {
    title: "Expert Team",
    description: "Highly skilled professionals with deep industry expertise",
    icon: Award
  },
  {
    title: "Custom Solutions",
    description: "Tailored approaches to meet your specific business needs",
    icon: Puzzle
  }
];

const technologies = [
  {
    name: "AI/ML",
    description: "Advanced artificial intelligence solutions",
    icon: Bot
  },
  {
    name: "Cloud Native",
    description: "Scalable cloud architecture",
    icon: Cloud
  },
  {
    name: "Blockchain",
    description: "Secure distributed systems",
    icon: Shield
  },
  {
    name: "IoT",
    description: "Connected device solutions",
    icon: Cpu
  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    avatar: "/john-doe.jpg",
    content: "We've been using their services for over a year now, and the results have been outstanding. Their team is highly professional and responsive. We've seen a significant improvement in our operations."
  },
  {
    name: "Jane Smith",
    role: "CTO at AI Solutions",
    avatar: "/jane-smith.jpg",
    content: "Their AI solutions have been a game-changer for our business. The team's expertise and dedication are unmatched. We're excited about the future with them."
  },
  {
    name: "Mike Johnson",
    role: "COO at RetailTech",
    avatar: "/mike-johnson.jpg",
    content: "The retail solutions they provided have revolutionized our business. Their team's attention to detail and customer service are top-notch."
  }
];

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}