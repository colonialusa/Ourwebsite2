import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SitePlanning from "./pages/SitePlanning";
import ArchitecturalDesign from "./pages/ArchitecturalDesign";
import BimServices from "./pages/BimServices";
import MepServices from "./pages/MepServices";
import RoadDesign from "./pages/RoadDesign";
import ThreeDModeling from "./pages/services/ThreeDModeling";
import FourDFiveDConstruction from "./pages/services/FourDFiveDConstruction";
import VRARConstruction from "./pages/services/VRARConstruction";
import StructuralEngineering from "./pages/services/StructuralEngineering";
import BIMTraining from "./pages/services/BIMTraining";
import BIMTemplateContent from "./pages/services/BIMTemplateContent";
import BIMITInfrastructure from "./pages/services/BIMITInfrastructure";
import BIMStrategyPlan from "./pages/services/BIMStrategyPlan";
import BIMImplementation from "./pages/services/BIMImplementation";
import ScannedDrawingConversion from "./pages/services/ScannedDrawingConversion";
import RedlineMarkups from "./pages/services/RedlineMarkups";
import IndexingRenaming from "./pages/services/IndexingRenaming";
import BulkDrawingConversions from "./pages/services/BulkDrawingConversions";
import Landscaping from "./pages/services/Landscaping";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminServices from "./pages/AdminServices";
import AdminContacts from "./pages/AdminContacts";
import ServiceDetail from "./pages/ServiceDetail";

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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/site-planning" element={<SitePlanning />} />
          <Route path="/architectural-design" element={<ArchitecturalDesign />} />
          <Route path="/bim-services" element={<BimServices />} />
          <Route path="/mep-services" element={<MepServices />} />
          <Route path="/road-design" element={<RoadDesign />} />
          <Route path="/services/3d-modeling" element={<ThreeDModeling />} />
          <Route path="/services/4d-5d-construction" element={<FourDFiveDConstruction />} />
          <Route path="/services/vr-ar-construction" element={<VRARConstruction />} />
          <Route path="/services/structural-engineering" element={<StructuralEngineering />} />
          <Route path="/services/bim-training" element={<BIMTraining />} />
          <Route path="/services/bim-template-content" element={<BIMTemplateContent />} />
          <Route path="/services/bim-it-infrastructure" element={<BIMITInfrastructure />} />
          <Route path="/services/bim-strategy-plan" element={<BIMStrategyPlan />} />
          <Route path="/services/bim-implementation" element={<BIMImplementation />} />
          <Route path="/services/scanned-drawing-conversion" element={<ScannedDrawingConversion />} />
          <Route path="/services/redline-markups" element={<RedlineMarkups />} />
          <Route path="/services/indexing-renaming" element={<IndexingRenaming />} />
          <Route path="/services/bulk-drawing-conversions" element={<BulkDrawingConversions />} />
          <Route path="/services/landscaping" element={<Landscaping />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
