import { Event } from './types';

export const sampleEvents: Event[] = [
  {
    id: 'nextdrio-tech-summit-2024',
    title: 'NextDrio Tech Summit 2024',
    description: 'Join us for our annual technology summit where industry leaders share insights on AI, Cloud Computing, and Digital Transformation.',
    date: '2024-06-15',
    startTime: '09:00',
    endTime: '18:00',
    location: {
      name: 'Tech Convention Center',
      address: '123 Innovation Street',
      city: 'San Francisco',
      country: 'USA',
      coordinates: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    type: 'conference',
    category: 'tech',
    image: '/images/events/tech-summit-2024.jpg',
    sessions: [
      {
        title: 'Future of AI in Enterprise',
        description: 'Exploring how AI is transforming business operations and decision-making.',
        startTime: '09:30',
        endTime: '10:30',
        speakers: [
          {
            name: 'Dr. Sarah Chen',
            role: 'AI Research Director',
            company: 'NextDrio',
            bio: 'Leading AI researcher with 15+ years of experience in enterprise AI solutions.',
            image: '/images/team/leadership/sarah-chen.jpg',
            social: {
              twitter: 'https://twitter.com/sarahchen',
              linkedin: 'https://linkedin.com/in/sarahchen'
            }
          }
        ],
        track: 'AI & Machine Learning',
        location: 'Main Hall'
      }
    ],
    speakers: [
      {
        name: 'Dr. Sarah Chen',
        role: 'AI Research Director',
        company: 'NextDrio',
        bio: 'Leading AI researcher with 15+ years of experience in enterprise AI solutions.',
        image: '/images/team/leadership/sarah-chen.jpg',
        social: {
          twitter: 'https://twitter.com/sarahchen',
          linkedin: 'https://linkedin.com/in/sarahchen'
        }
      }
    ],
    price: {
      amount: 599,
      currency: 'USD'
    },
    capacity: 500,
    registrationUrl: 'https://nextdrio.com/events/tech-summit-2024/register',
    tags: ['AI', 'Cloud Computing', 'Digital Transformation', 'Enterprise Technology'],
    status: 'upcoming',
    featured: true,
    sponsors: [
      {
        name: 'TechCorp',
        logo: '/images/sponsors/techcorp.png',
        website: 'https://techcorp.com',
        tier: 'platinum'
      }
    ]
  },
  {
    id: 'ai-workshop-2024',
    title: 'AI Implementation Workshop',
    description: 'A hands-on workshop focused on implementing AI solutions in business contexts.',
    date: '2024-07-20',
    startTime: '10:00',
    endTime: '16:00',
    location: {
      name: 'NextDrio Innovation Lab',
      address: '456 Tech Avenue',
      city: 'Boston',
      country: 'USA',
      coordinates: {
        lat: 42.3601,
        lng: -71.0589
      }
    },
    type: 'workshop',
    category: 'tech',
    image: '/images/events/ai-workshop-2024.jpg',
    sessions: [
      {
        title: 'Practical AI Implementation',
        description: 'Step-by-step guide to implementing AI solutions in your organization.',
        startTime: '10:00',
        endTime: '12:00',
        speakers: [
          {
            name: 'Alex Kumar',
            role: 'AI Solutions Architect',
            company: 'NextDrio',
            bio: 'Expert in implementing AI solutions for enterprise clients.',
            image: '/images/team/leadership/alex-kumar.jpg',
            social: {
              linkedin: 'https://linkedin.com/in/alexkumar'
            }
          }
        ],
        location: 'Workshop Room A'
      }
    ],
    speakers: [
      {
        name: 'Alex Kumar',
        role: 'AI Solutions Architect',
        company: 'NextDrio',
        bio: 'Expert in implementing AI solutions for enterprise clients.',
        image: '/images/team/leadership/alex-kumar.jpg',
        social: {
          linkedin: 'https://linkedin.com/in/alexkumar'
        }
      }
    ],
    price: {
      amount: 299,
      currency: 'USD'
    },
    capacity: 50,
    registrationUrl: 'https://nextdrio.com/events/ai-workshop-2024/register',
    tags: ['AI', 'Workshop', 'Hands-on', 'Implementation'],
    status: 'upcoming',
    featured: false
  },
  {
    id: 'cloud-native-conference-2024',
    title: 'Cloud Native Conference 2024',
    description: 'A comprehensive conference focused on cloud-native technologies, microservices, and containerization.',
    date: '2024-08-10',
    startTime: '08:30',
    endTime: '17:30',
    location: {
      name: 'Cloud Innovation Center',
      address: '789 Tech Boulevard',
      city: 'Seattle',
      country: 'USA',
      coordinates: {
        lat: 47.6062,
        lng: -122.3321
      }
    },
    type: 'conference',
    category: 'tech',
    image: '/images/events/cloud-native-2024.jpg',
    sessions: [
      {
        title: 'Kubernetes Deep Dive',
        description: 'Advanced techniques for managing containerized applications with Kubernetes.',
        startTime: '09:00',
        endTime: '10:30',
        speakers: [
          {
            name: 'Michael Rodriguez',
            role: 'Cloud Architect',
            company: 'CloudTech Solutions',
            bio: 'Certified Kubernetes Administrator with expertise in cloud-native architectures.',
            image: '/images/team/leadership/michael-rodriguez.jpg',
            social: {
              twitter: 'https://twitter.com/michaelrodriguez',
              linkedin: 'https://linkedin.com/in/michaelrodriguez'
            }
          }
        ],
        track: 'Cloud Infrastructure',
        location: 'Main Conference Hall'
      },
      {
        title: 'Serverless Architecture Patterns',
        description: 'Best practices for building scalable serverless applications.',
        startTime: '11:00',
        endTime: '12:30',
        speakers: [
          {
            name: 'Emily Johnson',
            role: 'Senior Developer Advocate',
            company: 'NextDrio',
            bio: 'Serverless architecture expert and frequent conference speaker.',
            image: '/images/team/leadership/emily-johnson.jpg',
            social: {
              twitter: 'https://twitter.com/emilyjohnson',
              linkedin: 'https://linkedin.com/in/emilyjohnson'
            }
          }
        ],
        track: 'Serverless',
        location: 'Room 301'
      }
    ],
    speakers: [
      {
        name: 'Michael Rodriguez',
        role: 'Cloud Architect',
        company: 'CloudTech Solutions',
        bio: 'Certified Kubernetes Administrator with expertise in cloud-native architectures.',
        image: '/images/team/leadership/michael-rodriguez.jpg',
        social: {
          twitter: 'https://twitter.com/michaelrodriguez',
          linkedin: 'https://linkedin.com/in/michaelrodriguez'
        }
      },
      {
        name: 'Emily Johnson',
        role: 'Senior Developer Advocate',
        company: 'NextDrio',
        bio: 'Serverless architecture expert and frequent conference speaker.',
        image: '/images/team/leadership/emily-johnson.jpg',
        social: {
          twitter: 'https://twitter.com/emilyjohnson',
          linkedin: 'https://linkedin.com/in/emilyjohnson'
        }
      }
    ],
    price: {
      amount: 499,
      currency: 'USD'
    },
    capacity: 300,
    registrationUrl: 'https://nextdrio.com/events/cloud-native-2024/register',
    tags: ['Cloud', 'Kubernetes', 'Serverless', 'Microservices', 'DevOps'],
    status: 'upcoming',
    featured: true,
    sponsors: [
      {
        name: 'CloudTech Solutions',
        logo: '/images/sponsors/cloudtech.png',
        website: 'https://cloudtechsolutions.com',
        tier: 'platinum'
      },
      {
        name: 'DevOps Inc',
        logo: '/images/sponsors/devopsinc.png',
        website: 'https://devopsinc.com',
        tier: 'gold'
      }
    ]
  }
]; 