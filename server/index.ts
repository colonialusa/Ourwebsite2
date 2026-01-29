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

// Check if we should use DynamoDB (for AWS deployment)
const USE_DYNAMODB = process.env.USE_DYNAMODB === "true";

// Conditionally import routes based on storage backend
let adminRoutes: any;
if (USE_DYNAMODB) {
  // Use DynamoDB routes for AWS deployment
  adminRoutes = require("./routes/admin-dynamodb");
  console.log("📦 Using DynamoDB for data storage");
} else {
  // Use in-memory/Vercel routes for local development
  adminRoutes = require("./routes/admin-vercel");
  console.log("💾 Using in-memory storage");
}

const {
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
  handleGetContacts,
  handleGetTeam,
  handleCreateTeamMember,
  handleUpdateTeamMember,
  handleDeleteTeamMember,
  verifyToken
} = adminRoutes;

// Contact submission handler (only in Vercel routes)
const handleContactSubmission = adminRoutes.handleContactSubmission || adminRoutes.handleCreateContact;

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
