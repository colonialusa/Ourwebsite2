import { RequestHandler } from "express";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");
const SERVICES_FILE = path.join(DATA_DIR, "services.json");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");

// Simple auth middleware
export const verifyToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const token = authHeader.substring(7);
  
  // Simple token validation (in production, use JWT)
  if (token !== 'admin-token-123') {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }

  next();
};

// Initialize data directory and files
async function initializeData() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    
    // Initialize projects file if it doesn't exist
    try {
      await fs.access(PROJECTS_FILE);
    } catch {
      await fs.writeFile(PROJECTS_FILE, JSON.stringify([], null, 2));
    }
    
    // Initialize services file if it doesn't exist
    try {
      await fs.access(SERVICES_FILE);
    } catch {
      await fs.writeFile(SERVICES_FILE, JSON.stringify([], null, 2));
    }
    
    // Initialize contacts file if it doesn't exist
    try {
      await fs.access(CONTACTS_FILE);
    } catch {
      await fs.writeFile(CONTACTS_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('Failed to initialize data:', error);
  }
}

initializeData();

// Login handler
export const handleLogin: RequestHandler = (req, res) => {
  const { username, password } = req.body;
  
  // Valid admin credentials
  const validCredentials = [
    { username: 'Colonial', password: 'Colonial@2026' },
    { username: 'Pyrunai', password: 'Pyrunai@1234' }
  ];

  // Check if credentials match any valid user
  const isValidUser = validCredentials.some(
    cred => cred.username === username && cred.password === password
  );

  if (isValidUser) {
    res.json({ 
      success: true, 
      token: 'admin-token-123',
      message: 'Login successful' 
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

// Get dashboard stats
export const handleStats: RequestHandler = async (req, res) => {
  try {
    const projectsData = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const servicesData = await fs.readFile(SERVICES_FILE, 'utf-8');
    const contactsData = await fs.readFile(CONTACTS_FILE, 'utf-8');
    
    const projects = JSON.parse(projectsData);
    const services = JSON.parse(servicesData);
    const contacts = JSON.parse(contactsData);
    
    res.json({
      projects: projects.length,
      services: services.length,
      contactSubmissions: contacts.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

// Projects CRUD
export const handleGetProjects: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const handleCreateProject: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projects = JSON.parse(data);
    
    // Remove id from body if it exists and is empty
    const { id, ...projectData } = req.body;
    
    const newProject = {
      id: Date.now().toString(),
      ...projectData
    };
    
    projects.push(newProject);
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
    
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

export const handleUpdateProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projects = JSON.parse(data);
    
    const index = projects.findIndex((p: any) => p.id === id);
    if (index === -1) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }
    
    projects[index] = { ...projects[index], ...req.body, id };
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
    
    res.json(projects[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};

export const handleDeleteProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    const projects = JSON.parse(data);
    
    const filtered = projects.filter((p: any) => p.id !== id);
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(filtered, null, 2));
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};

// Services CRUD
export const handleGetServices: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(SERVICES_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
};

export const handleCreateService: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(SERVICES_FILE, 'utf-8');
    const services = JSON.parse(data);
    
    // Remove id from body if it exists and is empty
    const { id, ...serviceData } = req.body;
    
    const newService = {
      id: Date.now().toString(),
      ...serviceData
    };
    
    services.push(newService);
    await fs.writeFile(SERVICES_FILE, JSON.stringify(services, null, 2));
    
    res.json(newService);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service' });
  }
};

export const handleUpdateService: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(SERVICES_FILE, 'utf-8');
    const services = JSON.parse(data);
    
    const index = services.findIndex((s: any) => s.id === id);
    if (index === -1) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }
    
    services[index] = { ...services[index], ...req.body, id };
    await fs.writeFile(SERVICES_FILE, JSON.stringify(services, null, 2));
    
    res.json(services[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service' });
  }
};

export const handleDeleteService: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(SERVICES_FILE, 'utf-8');
    const services = JSON.parse(data);
    
    const filtered = services.filter((s: any) => s.id !== id);
    await fs.writeFile(SERVICES_FILE, JSON.stringify(filtered, null, 2));
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service' });
  }
};

// Contact form submission
export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
    const contacts = JSON.parse(data);
    
    const newContact = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    contacts.push(newContact);
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
    
    res.json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

// Get all contact submissions
export const handleGetContacts: RequestHandler = async (req, res) => {
  try {
    const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
    const contacts = JSON.parse(data);
    // Sort by newest first
    contacts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};
