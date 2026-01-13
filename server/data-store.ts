// Embedded data for Vercel deployment (serverless functions don't have persistent file storage)
// For write operations, you'll need to integrate a database (Vercel KV, MongoDB, etc.)

import projectsData from '../data/projects.json';
import servicesData from '../data/services.json';
import contactsData from '../data/contacts.json';

// In-memory storage (resets on each serverless function cold start)
let projects = [...projectsData];
let services = [...servicesData];
let contacts = [...contactsData];

export const dataStore = {
  // Projects
  getProjects: () => projects,
  createProject: (project: any) => {
    const newProject = { ...project, id: Date.now().toString() };
    projects.push(newProject);
    return newProject;
  },
  updateProject: (id: string, data: any) => {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return null;
    projects[index] = { ...projects[index], ...data, id };
    return projects[index];
  },
  deleteProject: (id: string) => {
    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return false;
    projects.splice(index, 1);
    return true;
  },

  // Services
  getServices: () => services,
  createService: (service: any) => {
    const newService = { ...service, id: Date.now().toString() };
    services.push(newService);
    return newService;
  },
  updateService: (id: string, data: any) => {
    const index = services.findIndex(s => s.id === id);
    if (index === -1) return null;
    services[index] = { ...services[index], ...data, id };
    return services[index];
  },
  deleteService: (id: string) => {
    const index = services.findIndex(s => s.id === id);
    if (index === -1) return false;
    services.splice(index, 1);
    return true;
  },

  // Contacts
  getContacts: () => contacts,
  createContact: (contact: any) => {
    const newContact = { ...contact, id: Date.now().toString() };
    contacts.push(newContact);
    return newContact;
  },

  // Stats
  getStats: () => ({
    projects: projects.length,
    services: services.length,
    contactSubmissions: contacts.length
  })
};
