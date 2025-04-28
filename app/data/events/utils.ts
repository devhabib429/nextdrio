import { Event } from './types';

export function getUpcomingEvents(events: Event[]): Event[] {
  return events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getFeaturedEvents(events: Event[]): Event[] {
  return events.filter(event => event.featured);
}

export function getEventsByCategory(events: Event[], category: Event['category']): Event[] {
  return events.filter(event => event.category === category);
}

export function getEventsByType(events: Event[], type: Event['type']): Event[] {
  return events.filter(event => event.type === type);
}

export function searchEvents(events: Event[], query: string): Event[] {
  const searchTerm = query.toLowerCase();
  return events.filter(event => 
    event.title.toLowerCase().includes(searchTerm) ||
    event.description.toLowerCase().includes(searchTerm) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

export function formatEventDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatEventTime(time: string): string {
  return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function getEventDuration(startTime: string, endTime: string): string {
  const start = new Date(`1970-01-01T${startTime}`);
  const end = new Date(`1970-01-01T${endTime}`);
  const durationInMinutes = (end.getTime() - start.getTime()) / 1000 / 60;
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  
  if (hours === 0) {
    return `${minutes} minutes`;
  } else if (minutes === 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  } else {
    return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minutes`;
  }
} 