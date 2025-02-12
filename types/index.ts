export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features?: string[];
  benefits?: string[];
  technologies?: string[];
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
  id: string;
  name: string;
  date: string;
  location: string;
  description?: string;
  time?: string;
  type?: string;
  topics?: string[];
  speakers?: string[];
  link?: string;
}

export interface Stats {
  id: string;
  label: string;
  value: string;
}