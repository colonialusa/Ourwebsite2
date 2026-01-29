// Admin routes with DynamoDB integration for AWS deployment
import { RequestHandler } from "express";
import { dynamoDataStore } from "../dynamodb-store";

// Simple auth middleware
export const verifyToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const token = authHeader.substring(7);

  // Simple token validation (in production, use JWT)
  if (token !== "admin-token-123") {
    res.status(401).json({ error: "Invalid token" });
    return;
  }

  next();
};

// Login handler
export const handleLogin: RequestHandler = (req, res) => {
  const { username, password } = req.body;

  // Valid admin credentials
  const validCredentials = [
    { username: "Colonial", password: "Colonial@2026" },
    { username: "Pyrunai", password: "Pyrunai@1234" },
  ];

  // Check if credentials match any valid user
  const isValidUser = validCredentials.some(
    (cred) => cred.username === username && cred.password === password
  );

  if (isValidUser) {
    res.json({
      success: true,
      token: "admin-token-123",
      message: "Login successful",
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

// Get dashboard stats
export const handleStats: RequestHandler = async (req, res) => {
  try {
    const stats = await dynamoDataStore.getStats();
    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};

// ============ Projects CRUD ============
export const handleGetProjects: RequestHandler = async (req, res) => {
  try {
    const projects = await dynamoDataStore.getProjects();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

export const handleCreateProject: RequestHandler = async (req, res) => {
  try {
    const { id, ...projectData } = req.body;
    const newProject = await dynamoDataStore.createProject(projectData);
    res.json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Failed to create project" });
  }
};

export const handleUpdateProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await dynamoDataStore.updateProject(id, req.body);
    if (!updatedProject) {
      res.status(404).json({ error: "Project not found" });
      return;
    }
    res.json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ error: "Failed to update project" });
  }
};

export const handleDeleteProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dynamoDataStore.deleteProject(id);
    if (!deleted) {
      res.status(404).json({ error: "Project not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: "Failed to delete project" });
  }
};

// ============ Services CRUD ============
export const handleGetServices: RequestHandler = async (req, res) => {
  try {
    const services = await dynamoDataStore.getServices();
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

export const handleCreateService: RequestHandler = async (req, res) => {
  try {
    const { id, ...serviceData } = req.body;
    const newService = await dynamoDataStore.createService(serviceData);
    res.json(newService);
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ error: "Failed to create service" });
  }
};

export const handleUpdateService: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = await dynamoDataStore.updateService(id, req.body);
    if (!updatedService) {
      res.status(404).json({ error: "Service not found" });
      return;
    }
    res.json(updatedService);
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ error: "Failed to update service" });
  }
};

export const handleDeleteService: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dynamoDataStore.deleteService(id);
    if (!deleted) {
      res.status(404).json({ error: "Service not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Failed to delete service" });
  }
};

// ============ Contacts CRUD ============
export const handleGetContacts: RequestHandler = async (req, res) => {
  try {
    const contacts = await dynamoDataStore.getContacts();
    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

export const handleCreateContact: RequestHandler = async (req, res) => {
  try {
    const { id, ...contactData } = req.body;
    const newContact = await dynamoDataStore.createContact({
      ...contactData,
      submittedAt: new Date().toISOString(),
    });
    res.json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
};

export const handleDeleteContact: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dynamoDataStore.deleteContact(id);
    if (!deleted) {
      res.status(404).json({ error: "Contact not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ error: "Failed to delete contact" });
  }
};

// Public contact form submission
export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    const newContact = await dynamoDataStore.createContact({
      name,
      email,
      phone,
      service,
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    });
    
    res.json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
};

// ============ Testimonials CRUD ============
export const handleGetTestimonials: RequestHandler = async (req, res) => {
  try {
    const testimonials = await dynamoDataStore.getTestimonials();
    res.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
};

export const handleCreateTestimonial: RequestHandler = async (req, res) => {
  try {
    const { id, ...testimonialData } = req.body;
    const newTestimonial =
      await dynamoDataStore.createTestimonial(testimonialData);
    res.json(newTestimonial);
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res.status(500).json({ error: "Failed to create testimonial" });
  }
};

export const handleUpdateTestimonial: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTestimonial = await dynamoDataStore.updateTestimonial(
      id,
      req.body
    );
    if (!updatedTestimonial) {
      res.status(404).json({ error: "Testimonial not found" });
      return;
    }
    res.json(updatedTestimonial);
  } catch (error) {
    console.error("Error updating testimonial:", error);
    res.status(500).json({ error: "Failed to update testimonial" });
  }
};

export const handleDeleteTestimonial: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dynamoDataStore.deleteTestimonial(id);
    if (!deleted) {
      res.status(404).json({ error: "Testimonial not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({ error: "Failed to delete testimonial" });
  }
};

// ============ Team CRUD ============
export const handleGetTeam: RequestHandler = async (req, res) => {
  try {
    const team = await dynamoDataStore.getTeam();
    res.json(team);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ error: "Failed to fetch team" });
  }
};

export const handleCreateTeamMember: RequestHandler = async (req, res) => {
  try {
    const { id, ...memberData } = req.body;
    const newMember = await dynamoDataStore.createTeamMember(memberData);
    res.json(newMember);
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({ error: "Failed to create team member" });
  }
};

export const handleUpdateTeamMember: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMember = await dynamoDataStore.updateTeamMember(id, req.body);
    if (!updatedMember) {
      res.status(404).json({ error: "Team member not found" });
      return;
    }
    res.json(updatedMember);
  } catch (error) {
    console.error("Error updating team member:", error);
    res.status(500).json({ error: "Failed to update team member" });
  }
};

export const handleDeleteTeamMember: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await dynamoDataStore.deleteTeamMember(id);
    if (!deleted) {
      res.status(404).json({ error: "Team member not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({ error: "Failed to delete team member" });
  }
};
