import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SitePlanning from "./pages/SitePlanning";
import BimServices from "./pages/BimServices";
import RoadDesign from "./pages/RoadDesign";
import SurveyFeasibility from "./pages/SurveyFeasibility";
import SurveyPostProcessing from "./pages/SurveyPostProcessing";
import OnsiteServices from "./pages/OnsiteServices";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminServices from "./pages/AdminServices";
import AdminContacts from "./pages/AdminContacts";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminTeam from "./pages/AdminTeam";
import AdminProjectCaseStudy from "./pages/AdminProjectCaseStudy";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectCaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/survey-feasibility" element={<SurveyFeasibility />} />
          <Route path="/site-planning" element={<SitePlanning />} />
          <Route path="/road-design" element={<RoadDesign />} />
          <Route path="/survey-post-processing" element={<SurveyPostProcessing />} />
          <Route path="/bim-services" element={<BimServices />} />
          <Route path="/onsite-services" element={<OnsiteServices />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/admin/team" element={<AdminTeam />} />
          <Route path="/admin/case-studies" element={<AdminProjectCaseStudy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
