export interface Service {
  id: string;
  title: string;
  description: string;
  gradient: string;
  metrics: Array<{
    label: string;
    value: string;
    icon: React.ElementType;
  }>;
  features: string[];
  benefits: string[];
  process: Array<{
    title: string;
    description: string;
    icon: React.ElementType;
  }>;
  expertise: Array<{
    title: string;
    description: string;
    icon: React.ElementType;
  }>;
  technologies: string[];
  slug: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  tags?: string[];
  metrics?: {
    stars: number;
    forks: number;
    contributors: number;
  };
  impact?: string[];
  technologies?: string[];
  link?: string;
  github?: string;
  timeline?: string;
  status?: string;
  testimonials?: string[];
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  topics?: string[];
  link: string;
  category: string;
  type?: string;
  speakers?: string[];
  name?: string;
}

export interface Stats {
  id: string;
  label: string;
  value: string;
}