import { RequestHandler } from "express";
import { dataStore } from "../data-store";
import { sendContactEmail } from "../email-service";

// Simple auth middleware
export const verifyToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const token = authHeader.substring(7);
  
  // Simple token validation (in production, use JWT)
  const expectedToken = process.env.ADMIN_TOKEN || 'admin-token-123';
  if (token !== expectedToken) {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }

  next();
};

// Login handler
export const handleLogin: RequestHandler = (req, res) => {
  const { username, password } = req.body;
  
  // Valid admin credentials from environment variables
  const validCredentials = [
    { 
      username: process.env.ADMIN_USERNAME_1 || 'Colonial', 
      password: process.env.ADMIN_PASSWORD_1 || 'Colonial@2026' 
    },
    { 
      username: process.env.ADMIN_USERNAME_2 || 'Pyrunai', 
      password: process.env.ADMIN_PASSWORD_2 || 'Pyrunai@1234' 
    }
  ];

  // Check if credentials match any valid user
  const isValidUser = validCredentials.some(
    cred => cred.username === username && cred.password === password
  );

  if (isValidUser) {
    res.json({ 
      success: true, 
      token: process.env.ADMIN_TOKEN || 'admin-token-123',
      message: 'Login successful' 
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

// Get dashboard stats
export const handleStats: RequestHandler = async (req, res) => {
  try {
    const stats = dataStore.getStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

// Projects CRUD
export const handleGetProjects: RequestHandler = async (req, res) => {
  try {
    const projects = dataStore.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const handleCreateProject: RequestHandler = async (req, res) => {
  try {
    const { id, ...projectData } = req.body;
    const newProject = dataStore.createProject(projectData);
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

export const handleUpdateProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = dataStore.updateProject(id, req.body);
    
    if (!updated) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }
    
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};

export const handleDeleteProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = dataStore.deleteProject(id);
    
    if (!deleted) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};

// Services CRUD
export const handleGetServices: RequestHandler = async (req, res) => {
  try {
    const services = dataStore.getServices();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
};

export const handleCreateService: RequestHandler = async (req, res) => {
  try {
    const { id, ...serviceData } = req.body;
    const newService = dataStore.createService(serviceData);
    res.json(newService);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create service' });
  }
};

export const handleUpdateService: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = dataStore.updateService(id, req.body);
    
    if (!updated) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }
    
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service' });
  }
};

export const handleDeleteService: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = dataStore.deleteService(id);
    
    if (!deleted) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service' });
  }
};

// Contact form submission
export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    const newContact = dataStore.createContact(req.body);
    
    // Send email notification (non-blocking)
    sendContactEmail(req.body).catch(err => {
      console.error('Email sending failed:', err);
      // Don't fail the request if email fails
    });
    
    res.json({ success: true, contact: newContact });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

// Get contact submissions
export const handleGetContacts: RequestHandler = async (req, res) => {
  try {
    const contacts = dataStore.getContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// Team CRUD
export const handleGetTeam: RequestHandler = async (req, res) => {
  try {
    const team = dataStore.getTeam();
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team' });
  }
};

export const handleCreateTeamMember: RequestHandler = async (req, res) => {
  try {
    const { id, ...memberData } = req.body;
    const newMember = dataStore.createTeamMember(memberData);
    res.json(newMember);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create team member' });
  }
};

export const handleUpdateTeamMember: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = dataStore.updateTeamMember(id, req.body);
    
    if (!updated) {
      res.status(404).json({ error: 'Team member not found' });
      return;
    }
    
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update team member' });
  }
};

export const handleDeleteTeamMember: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = dataStore.deleteTeamMember(id);
    
    if (!deleted) {
      res.status(404).json({ error: 'Team member not found' });
      return;
    }
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team member' });
  }
};
