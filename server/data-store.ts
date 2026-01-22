// Embedded data for Vercel deployment (serverless functions don't have persistent file storage)
// For write operations, you'll need to integrate a database (Vercel KV, MongoDB, etc.)

import * as fs from 'fs';
import * as path from 'path';

// Read JSON files at module load time
const readJsonFile = (filename: string) => {
  try {
    const filePath = path.join(process.cwd(), 'data', filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Failed to read ${filename}:`, error);
    return [];
  }
};

// In-memory storage (resets on each serverless function cold start)
let projects = readJsonFile('projects.json');
let services = readJsonFile('services.json');
let contacts = readJsonFile('contacts.json');
let testimonials = readJsonFile('testimonials.json');

export const readTestimonials = () => testimonials;
export const writeTestimonials = (data: any) => {
  testimonials = data;
  try {
    const filePath = path.join(process.cwd(), 'data', 'testimonials.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Failed to write testimonials:', error);
  }
};

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
