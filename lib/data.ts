import type { Event, Project, Service } from '../types';
import {
    Trophy, Users, Target, Code2, Cloud, GitBranch,
    Rocket, Shield, Database
} from 'lucide-react';

export const sampleServices: Service[] = [
    {
        id: '1',
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies',
        gradient: 'from-blue-500 to-cyan-500',
        metrics: [
            { label: 'Projects', value: '100+', icon: Trophy },
            { label: 'Clients', value: '50+', icon: Users }
        ],
        features: ['Responsive Design', 'SEO Optimization'],
        benefits: ['Increased User Engagement', 'Better Performance'],
        process: [
            { title: 'Planning', description: 'Project scoping and planning', icon: Target },
            { title: 'Development', description: 'Agile development process', icon: Code2 }
        ],
        expertise: [
            { title: 'Frontend', description: 'Modern UI development', icon: Code2 },
            { title: 'Backend', description: 'Scalable server solutions', icon: Database }
        ],
        technologies: ['React', 'Node.js', 'TypeScript'],
        slug: 'web-development'
    },
    {
        id: '2',
        title: 'DevOps',
        description: 'Streamline your development and deployment processes',
        gradient: 'from-purple-500 to-pink-500',
        metrics: [
            { label: 'Deployments', value: '1000+', icon: Rocket },
            { label: 'Uptime', value: '99.9%', icon: Shield }
        ],
        features: ['CI/CD Pipeline', 'Cloud Deployment'],
        benefits: ['Faster Deployment', 'Reduced Errors'],
        process: [
            { title: 'Automation', description: 'Setup CI/CD pipelines', icon: GitBranch },
            { title: 'Deployment', description: 'Cloud infrastructure setup', icon: Cloud }
        ],
        expertise: [
            { title: 'Cloud', description: 'Cloud infrastructure management', icon: Cloud },
            { title: 'Security', description: 'DevSecOps practices', icon: Shield }
        ],
        technologies: ['Docker', 'Kubernetes', 'Jenkins'],
        slug: 'devops'
    }
];

export const sampleProjects: Project[] = [
    {
        id: '1',
        name: 'AI-Powered Healthcare Analytics',
        description: 'Advanced machine learning platform for predictive healthcare diagnostics and patient care optimization. Features real-time analysis of medical data and personalized treatment recommendations.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
        url: 'https://healthcare-analytics.demo',
        category: 'AI/ML',
        tags: ['Healthcare', 'AI/ML', 'Big Data'],
        metrics: { stars: 850, forks: 245, contributors: 32 },
        impact: ['Reduced diagnosis time by 60%', 'Improved treatment accuracy by 45%'],
        timeline: '6 months',
        status: 'Active',
        testimonials: ['Revolutionary impact on patient care', 'Exceptional accuracy in predictions'],
        technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
        link: 'https://demo.healthcare-analytics.com',
        github: 'https://github.com/org/healthcare-analytics'
    },
    {
        id: '2',
        name: 'Cloud Infrastructure Automation',
        description: 'Enterprise-grade cloud infrastructure automation platform with multi-cloud support and advanced security features. Enables seamless deployment and management of cloud resources.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
        url: 'https://cloud-automation.demo',
        category: 'DevOps',
        tags: ['Cloud', 'DevOps', 'Automation'],
        metrics: { stars: 1200, forks: 380, contributors: 45 },
        impact: ['Reduced deployment time by 75%', 'Cut infrastructure costs by 40%'],
        timeline: '8 months',
        status: 'Active',
        testimonials: ['Transformed our deployment process', 'Significant cost savings'],
        technologies: ['Terraform', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
        link: 'https://demo.cloud-automation.com',
        github: 'https://github.com/org/cloud-automation'
    },
    {
        id: '3',
        name: 'Smart City Management Platform',
        description: 'Comprehensive IoT-based smart city management system for monitoring and optimizing urban infrastructure, traffic, and public services in real-time.',
        image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=800&auto=format&fit=crop&q=60',
        url: 'https://smartcity.demo',
        category: 'IoT',
        tags: ['Smart City', 'IoT', 'Infrastructure'],
        metrics: { stars: 920, forks: 275, contributors: 38 },
        impact: ['30% reduction in traffic congestion', '25% energy savings'],
        timeline: '6 months',
        status: 'Active',
        testimonials: ['Revolutionized city management', 'Impressive results'],
        technologies: ['IoT', 'Python', 'Node.js', 'MongoDB', 'React'],
        link: 'https://demo.smartcity.com',
        github: 'https://github.com/org/smartcity'
    },
    {
        id: '4',
        name: 'Blockchain Supply Chain',
        description: 'Decentralized supply chain tracking and verification system using blockchain technology. Ensures transparency and traceability across the entire supply chain.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60',
        url: 'https://supply-chain.demo',
        category: 'Blockchain',
        tags: ['Blockchain', 'Supply Chain', 'DApp'],
        metrics: { stars: 780, forks: 190, contributors: 28 },
        impact: ['100% traceability achieved', 'Fraud reduction by 90%'],
        timeline: '6 months',
        status: 'Active',
        testimonials: ['Game-changer for supply chain', 'Exceptional transparency'],
        technologies: ['Solidity', 'Ethereum', 'Node.js', 'React'],
        link: 'https://demo.supply-chain.com',
        github: 'https://github.com/org/supply-chain'
    },
    {
        id: '5',
        name: 'ERPNext Implementation',
        description: 'Custom ERPNext solution for manufacturing companies with IoT integration and real-time production monitoring capabilities.',
        image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&auto=format&fit=crop&q=60',
        url: 'https://erp.demo',
        category: 'ERPNext',
        tags: ['ERP', 'Manufacturing', 'IoT'],
        metrics: { stars: 650, forks: 150, contributors: 22 },
        impact: ['Productivity increase by 35%', 'Inventory costs reduced by 25%'],
        timeline: '6 months',
        status: 'Active',
        testimonials: ['Streamlined our operations', 'Excellent ROI'],
        technologies: ['ERPNext', 'Python', 'IoT', 'React'],
        link: 'https://demo.erp.com',
        github: 'https://github.com/org/erp-implementation'
    },
    {
        id: '6',
        name: 'Mobile Banking Platform',
        description: 'Secure and scalable mobile banking solution with advanced biometric authentication and real-time transaction processing.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60',
        url: 'https://mobile-banking.demo',
        category: 'Mobile',
        tags: ['FinTech', 'Mobile', 'Security'],
        metrics: { stars: 890, forks: 210, contributors: 34 },
        impact: ['User base grown by 200%', 'Transaction time reduced by 50%'],
        timeline: '6 months',
        status: 'Active',
        testimonials: ['Best-in-class security', 'Intuitive user experience'],
        technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
        link: 'https://demo.mobile-banking.com',
        github: 'https://github.com/org/mobile-banking'
    },
    {
        id: '7',
        name: 'E-Learning Management System',
        description: 'Comprehensive e-learning platform with interactive content delivery, real-time collaboration, and AI-powered personalized learning paths.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60',
        url: 'https://elearning.demo',
        category: 'Full Stack',
        tags: ['Education', 'E-Learning', 'Collaboration'],
        metrics: { stars: 720, forks: 180, contributors: 26 },
        impact: ['Student engagement up by 45%', 'Course completion rate increased by 60%'],
        timeline: '6 months',
        status: 'Active',
        testimonials: ['Transformed online learning', 'Excellent student feedback'],
        technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
        link: 'https://demo.elearning.com',
        github: 'https://github.com/org/elearning'
    },
    {
        id: '8',
        name: 'Green Energy Monitor',
        description: 'Real-time monitoring and optimization platform for renewable energy systems with predictive maintenance and efficiency analytics.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60',
        url: 'https://green-energy.demo',
        category: 'IoT',
        tags: ['Renewable Energy', 'IoT', 'Analytics'],
        metrics: { stars: 680, forks: 160, contributors: 24 },
        impact: ['Energy efficiency improved by 40%', 'Maintenance costs reduced by 35%'],
        timeline: '6 months',
        status: 'Active',
        testimonials: ['Significant energy savings', 'Excellent monitoring capabilities'],
        technologies: ['Python', 'IoT', 'TensorFlow', 'React'],
        link: 'https://demo.green-energy.com',
        github: 'https://github.com/org/green-energy'
    }
];

export const sampleEvents: Event[] = [
    {
        id: 1,
        title: "Cloud Computing Summit 2024",
        description: "Join us for the latest in cloud technologies and practices",
        date: "2024-04-15",
        time: "9:00 AM",
        location: "Virtual",
        topics: ["Cloud", "DevOps", "Security"],
        link: "/events/cloud-summit-2024",
        category: "Conferences"
    },
    {
        id: 2,
        title: "DevOps Workshop Series",
        description: "Hands-on workshop covering modern DevOps practices",
        date: "2024-05-01",
        time: "2:00 PM",
        location: "New York",
        topics: ["CI/CD", "Automation", "Containers"],
        link: "/events/devops-workshop",
        category: "Workshops"
    }
];

export const industrySolutions = [
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

export interface Career {
    _id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
    benefits: string[];
    status: 'open' | 'closed';
}

export interface Inquiry {
    _id: string;
    type: 'contact' | 'project';
    name: string;
    email: string;
    company: string;
    message: string;
    service?: string;
    status: 'new' | 'inProgress' | 'completed';
    createdAt: string;
}

export const mockCareers: Career[] = [
    // ... your existing mock careers data
];

export const mockInquiries: Inquiry[] = [
    // ... your existing mock inquiries data
];