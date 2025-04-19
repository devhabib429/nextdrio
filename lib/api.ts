import { Event, Project, Service } from '@/types';
import { sampleServices, sampleProjects, sampleEvents } from './data';
import { randomUUID as nodeRandomUUID, randomBytes } from 'crypto';

// Utility function for generating IDs
const generateId = () => {
  // Use window.crypto.randomUUID if available in browser
  if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }
  // Use Node's native randomUUID if available
  if (typeof nodeRandomUUID === 'function') {
    return nodeRandomUUID();
  }
  // Fallback: generate a simple id using crypto.randomBytes
  return randomBytes(16).toString('hex');
};

// Error class
class ApiError extends Error {
  constructor(message: string, public status: number = 400) {
    super(message);
    this.name = 'ApiError';
  }
}

// Services
export async function getServices(): Promise<Service[]> {
  try {
    return sampleServices;
  } catch (error) {
    throw new ApiError('Failed to fetch services', 500);
  }
}

export async function createService(service: Omit<Service, 'id'>): Promise<Service> {
  try {
    if (!service.title || !service.description) {
      throw new ApiError('Title and description are required');
    }
    if (!service.gradient || !service.metrics || !service.features || !service.benefits) {
      throw new ApiError('Missing required service properties');
    }

    const newService: Service = {
      id: generateId(),
      ...service
    };
    sampleServices.push(newService);
    return newService;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError('Failed to create service', 500);
  }
}

// Projects
export async function getProjects(): Promise<Project[]> {
  try {
    return sampleProjects;
  } catch (error) {
    throw new ApiError('Failed to fetch projects', 500);
  }
}

export async function createProject(project: Omit<Project, 'id'>): Promise<Project> {
  try {
    if (!project.name || !project.description) {
      throw new ApiError('Name and description are required');
    }
    // Added check for required 'image' and 'url' properties
    if (!project.image || !project.url) {
      throw new ApiError('Image and URL are required', 400);
    }

    const newProject: Project = {
      id: generateId(),
      ...project
    };
    sampleProjects.push(newProject);
    return newProject;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError('Failed to create project', 500);
  }
}

// Events
export async function getEvents(): Promise<Event[]> {
  try {
    return sampleEvents.map(event => ({
      ...event,
      id: Number(event.id)
    }));
  } catch (error) {
    throw new ApiError('Failed to fetch events', 500);
  }
}

export async function createEvent(event: Omit<Event, 'id'>): Promise<Event> {
  try {
    if (!event.name || !event.date) {
      throw new ApiError('Name and date are required');
    }

    const newEvent: Event = {
      id: Date.now(), // Use timestamp as numeric ID
      ...event
    };
    sampleEvents.push(newEvent);
    return newEvent;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError('Failed to create event', 500);
  }
}

// Generic update and delete functions
function updateItem<T extends { id: string | number }>(
  items: T[],
  id: string,
  updates: Partial<T>,
  itemType: string
): T {
  const index = items.findIndex(item => String(item.id) === id);
  if (index === -1) throw new ApiError(`${itemType} not found`, 404);

  const updatedItem = { ...items[index], ...updates, id: items[index].id };
  items[index] = updatedItem;
  return updatedItem;
}

function deleteItem<T extends { id: string | number }>(
  items: T[],
  id: string,
  itemType: string
): void {
  const index = items.findIndex(item => String(item.id) === id);
  if (index === -1) throw new ApiError(`${itemType} not found`, 404);
  items.splice(index, 1);
}

export const updateService = (id: string, service: Partial<Service>) =>
  updateItem(sampleServices, id, service, 'Service');
export const updateProject = (id: string, project: Partial<Project>) =>
  updateItem(sampleProjects, id, project, 'Project');
export const updateEvent = (id: string, event: Partial<Event>) =>
  updateItem(sampleEvents, id, event, 'Event');

export const deleteService = (id: string) =>
  deleteItem(sampleServices, id, 'Service');
export const deleteProject = (id: string) =>
  deleteItem(sampleProjects, id, 'Project');
export const deleteEvent = (id: string) =>
  deleteItem(sampleEvents, id, 'Event');