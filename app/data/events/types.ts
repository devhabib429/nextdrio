export interface Speaker {
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Session {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  speakers: Speaker[];
  track?: string;
  location?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: {
    name: string;
    address: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  type: 'conference' | 'workshop' | 'webinar' | 'meetup';
  category: 'tech' | 'business' | 'design' | 'startup';
  image: string;
  sessions: Session[];
  speakers: Speaker[];
  price?: {
    amount: number;
    currency: string;
  };
  capacity?: number;
  registrationUrl?: string;
  tags: string[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  featured?: boolean;
  sponsors?: Array<{
    name: string;
    logo: string;
    website: string;
    tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  }>;
} 