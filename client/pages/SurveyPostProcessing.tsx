import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Hammer, Map, Database, Layers, Grid3x3 } from "lucide-react";

export default function SurveyPostProcessing() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-colonial-navy to-colonial-navy/90">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center text-white space-y-6">
            <div className="text-colonial-gold text-4xl mb-4">🗺️</div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Survey Post Processing & Drafting Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Precise post-processing of survey data and professional CAD drafting services that transform raw field data into accurate, detailed deliverables
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-4xl font-bold text-colonial-navy mb-8">
              Professional Survey Data Processing & CAD Drafting Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Survey post-processing and professional CAD drafting transform raw field measurements into accurate, legally defensible deliverables that support engineering design, construction, property transactions, and regulatory compliance. At Colonial Consultants, our experienced survey technicians and CAD specialists utilize industry-leading software platforms and rigorous quality control procedures to produce precise survey plats, topographic maps, and construction documents that meet or exceed client specifications and professional standards.
                </p>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Modern survey data processing involves sophisticated mathematical computations including coordinate transformations, network adjustments, and geoid modeling to achieve centimeter-level accuracy. GPS/GNSS data requires careful processing to resolve satellite ambiguities, apply atmospheric corrections, and establish precise coordinates relative to geodetic control networks. Total station data undergoes rigorous error checking, closure analysis, and adjustment to ensure angular and distance measurements meet specification requirements. Our processing workflows incorporate redundant measurements and statistical validation to detect and eliminate errors before data enters the drafting phase.
                </p>
              </div>
              <div>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Point cloud processing represents a specialized discipline within survey data management, requiring advanced software tools and significant computational resources. LiDAR point clouds may contain billions of measurements that require classification, filtering, and feature extraction to create usable deliverables. Our technicians employ automated classification algorithms combined with manual editing to separate ground points from vegetation, buildings, and other above-ground features. This cleaned terrain data forms the foundation for digital terrain models, contour maps, and volumetric calculations supporting engineering design and earthwork quantity estimation.
                </p>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  CAD drafting transforms processed survey data into clear, professional drawings that communicate spatial relationships, boundary evidence, and topographic features to project stakeholders. Our CAD specialists adhere to rigorous drafting standards including state-specific requirements, client CAD standards, and industry best practices. Every drawing undergoes multiple quality control reviews to verify accuracy, completeness, clarity, and compliance with applicable standards. This attention to detail ensures deliverables support their intended uses including permitting, construction, litigation, and property transactions without ambiguity or error.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-colonial-navy mb-6">GPS Network Processing & Coordinate Systems</h3>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                GPS network adjustments require specialized knowledge of geodetic principles, coordinate systems, and statistical analysis. Our survey processors utilize professional-grade adjustment software including Trimble Business Center, Leica Infinity, and Topcon Magnet Office to process multi-station GPS networks. These least-squares adjustment procedures compute optimal coordinates that honor observed measurements while distributing residual errors according to measurement precision. Network adjustments provide statistical quality metrics including standard deviations, confidence ellipses, and network reliability indicators that validate positioning accuracy.
              </p>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Coordinate transformation between different reference systems presents technical challenges requiring careful attention to datum definitions, projection parameters, and geoid models. State plane coordinate systems, UTM zones, and local coordinate systems each serve specific purposes and require appropriate transformation procedures. Our processors maintain current geoid models and transformation parameters to ensure coordinates integrate properly with existing control networks and GIS databases. This technical expertise ensures survey deliverables align with project requirements and integrate seamlessly with other spatial data sources.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-colonial-navy mb-6">
                From Data to Deliverables
              </h2>
              <p className="text-lg text-colonial-gray mb-6">
                Turn your survey data into professional deliverables with our comprehensive post-processing and drafting services. We utilize the latest software and techniques to ensure accuracy, clarity, and compliance with client specifications and industry standards.
              </p>
              <p className="text-lg text-colonial-gray">
                Our experienced technicians ensure quality control and compliance with industry standards, delivering precise results you can trust.
              </p>
            </div>
            <div className="bg-gradient-to-br from-colonial-blue/10 to-colonial-purple/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Key Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">GPS/GNSS Data Processing & Adjustment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Point Cloud Processing & 3D Modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Topographic Map Creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">ALTA/NSPS Land Title Survey Drafting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">As-Built Drawing Preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">CAD Standards Development & QC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Processing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-colonial-navy text-center mb-12">
            Advanced Data Processing Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📡</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">GPS Network Adjustments</h3>
              <p className="text-colonial-gray">
                Multi-station GPS network adjustments and coordinate transformations for high-accuracy control networks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">Point Cloud Processing</h3>
              <p className="text-colonial-gray">
                LiDAR data classification, feature extraction, and digital terrain model creation from point cloud data.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">Terrain Modeling</h3>
              <p className="text-colonial-gray">
                Contour generation, terrain modeling, cross-sections, and profile development for engineering design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAD Drafting Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-colonial-navy text-center mb-12">
            Professional CAD Drafting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-colonial-navy to-colonial-navy/90 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Survey Plats & Maps</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Boundary survey plats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>ALTA/NSPS land title surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Topographic mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Subdivision plats</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-colonial-blue to-colonial-purple text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Construction Documents</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Construction staking plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>As-built drawings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Utility mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Right-of-way exhibits</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Software Tools */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-colonial-navy mb-6 text-center">
              Professional Software & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-3">
                <Hammer className="w-6 h-6 text-colonial-gold" />
                <p className="font-semibold text-colonial-navy">AutoCAD Civil 3D</p>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-3">
                <Map className="w-6 h-6 text-colonial-gold" />
                <p className="font-semibold text-colonial-navy">Trimble Business Center</p>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-3">
                <Database className="w-6 h-6 text-colonial-gold" />
                <p className="font-semibold text-colonial-navy">Leica Infinity</p>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-3">
                <Layers className="w-6 h-6 text-colonial-gold" />
                <p className="font-semibold text-colonial-navy">Carlson Survey</p>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col items-center gap-3">
                <Grid3x3 className="w-6 h-6 text-colonial-gold" />
                <p className="font-semibold text-colonial-navy">MicroStation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-colonial-navy">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Professional Survey Processing?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let our experienced team handle your data processing and drafting needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-colonial-gold text-colonial-navy rounded-lg font-semibold hover:bg-colonial-gold/90 transition-colors"
            >
              Get Started →
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white text-colonial-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
