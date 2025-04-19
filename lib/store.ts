import { create } from 'zustand';
import { Service, Project, Event, Stats } from '@/types';
import * as api from './api';
import { sampleProjects } from './data';

interface AdminStore {
  services: Service[];
  projects: Project[];
  events: Event[];
  stats: Stats[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
  fetchProjects: () => Promise<void>;
  fetchEvents: () => Promise<void>;
  addService: (service: Omit<Service, 'id'>) => Promise<void>;
  updateService: (id: string, service: Partial<Service>) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
  addProject: (project: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (id: string, project: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  addEvent: (event: Omit<Event, 'id'>) => Promise<void>;
  updateEvent: (id: string, event: Partial<Event>) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
}

export const useAdminStore = create<AdminStore>((set) => ({
  services: [],
  projects: [],
  events: [],
  stats: [
    { id: '1', label: 'Years Experience', value: '10+' },
    { id: '2', label: 'Projects Completed', value: '500+' },
    { id: '3', label: 'Team Members', value: '50+' },
    { id: '4', label: 'Client Satisfaction', value: '98%' },
  ],
  loading: false,
  error: null,

  fetchServices: async () => {
    try {
      set({ loading: true, error: null });
      const services = await api.getServices();
      set({ services, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  fetchProjects: async () => {
    try {
      set({ loading: true, error: null });
      set({ projects: sampleProjects, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  fetchEvents: async () => {
    try {
      set({ loading: true, error: null });
      const events = await api.getEvents();
      set({ events, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  addService: async (service) => {
    try {
      set({ loading: true, error: null });
      const newService = await api.createService(service);
      set((state) => ({
        services: [...state.services, newService],
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  updateService: async (id, service) => {
    try {
      set({ loading: true, error: null });
      const updatedService = await api.updateService(id, service);
      set((state) => ({
        services: state.services.map((s) => (s.id === id ? updatedService : s)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  deleteService: async (id) => {
    try {
      set({ loading: true, error: null });
      await api.deleteService(id);
      set((state) => ({
        services: state.services.filter((s) => s.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  addProject: async (project) => {
    try {
      set({ loading: true, error: null });
      const newProject = await api.createProject(project);
      set((state) => ({
        projects: [...state.projects, newProject],
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  updateProject: async (id, project) => {
    try {
      set({ loading: true, error: null });
      const updatedProject = await api.updateProject(id, project);
      set((state) => ({
        projects: state.projects.map((p) => (p.id === id ? updatedProject : p)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  deleteProject: async (id) => {
    try {
      set({ loading: true, error: null });
      await api.deleteProject(id);
      set((state) => ({
        projects: state.projects.filter((p) => p.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  addEvent: async (event) => {
    try {
      set({ loading: true, error: null });
      const newEvent = await api.createEvent(event);
      set((state) => ({
        events: [...state.events, newEvent],
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  updateEvent: async (id, event) => {
    try {
      set({ loading: true, error: null });
      const updatedEvent = await api.updateEvent(id, event);
      set((state) => ({
        events: state.events.map((e) => (e.id === Number(id) ? updatedEvent : e)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },

  deleteEvent: async (id) => {
    try {
      set({ loading: true, error: null });
      await api.deleteEvent(id);
      set((state) => ({
        events: state.events.filter((e) => e.id !== Number(id)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'An unknown error occurred', loading: false });
    }
  },
}));