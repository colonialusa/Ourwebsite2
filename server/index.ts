import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleGetTestimonials,
  handleCreateTestimonial,
  handleUpdateTestimonial,
  handleDeleteTestimonial
} from "./routes/testimonials";

// Use Vercel-compatible admin routes (in-memory data store)
import {
  handleLogin,
  handleStats,
  handleGetProjects,
  handleCreateProject,
  handleUpdateProject,
  handleDeleteProject,
  handleGetServices,
  handleCreateService,
  handleUpdateService,
  handleDeleteService,
  handleContactSubmission,
  handleGetContacts,
  handleGetTeam,
  handleCreateTeamMember,
  handleUpdateTeamMember,
  handleDeleteTeamMember,
  verifyToken
} from "./routes/admin-vercel";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Public endpoints (no auth required)
  app.get("/api/services", handleGetServices);
  app.get("/api/projects", handleGetProjects);
  app.get("/api/testimonials", handleGetTestimonials);

  // Admin authentication
  app.post("/api/admin/login", handleLogin);

  // Admin routes (protected)
  app.get("/api/admin/stats", verifyToken, handleStats);
  
  // Projects
  app.get("/api/admin/projects", verifyToken, handleGetProjects);
  app.post("/api/admin/projects", verifyToken, handleCreateProject);
  app.put("/api/admin/projects/:id", verifyToken, handleUpdateProject);
  app.delete("/api/admin/projects/:id", verifyToken, handleDeleteProject);
  
  // Services
  app.get("/api/admin/services", verifyToken, handleGetServices);
  app.post("/api/admin/services", verifyToken, handleCreateService);
  app.put("/api/admin/services/:id", verifyToken, handleUpdateService);
  app.delete("/api/admin/services/:id", verifyToken, handleDeleteService);
  
  // Contact form submission (public)
  app.post("/api/contact", handleContactSubmission);
  
  // Get contact submissions (protected)
  app.get("/api/admin/contacts", verifyToken, handleGetContacts);

  // Testimonials
  app.get("/api/admin/testimonials", verifyToken, handleGetTestimonials);
  app.post("/api/admin/testimonials", verifyToken, handleCreateTestimonial);
  app.put("/api/admin/testimonials/:id", verifyToken, handleUpdateTestimonial);
  app.delete("/api/admin/testimonials/:id", verifyToken, handleDeleteTestimonial);

  // Team
  app.get("/api/admin/team", handleGetTeam);
  app.post("/api/admin/team", verifyToken, handleCreateTeamMember);
  app.put("/api/admin/team/:id", verifyToken, handleUpdateTeamMember);
  app.delete("/api/admin/team/:id", verifyToken, handleDeleteTeamMember);

  return app;
}
