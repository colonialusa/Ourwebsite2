import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function SurveyFeasibility() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-colonial-navy to-colonial-navy/90">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center text-white space-y-6">
            <div className="text-colonial-gold text-4xl mb-4">📏</div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Survey and Feasibility Study
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professional land surveying and comprehensive feasibility studies that provide the critical foundation for successful project development
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-colonial-navy mb-6">
                Building on Solid Ground
              </h2>
              <p className="text-lg text-colonial-gray mb-6">
                Start your project on solid ground with our comprehensive survey and feasibility services. We combine cutting-edge surveying technology with thorough analytical methodologies to provide the data and insights you need to make confident decisions.
              </p>
              <p className="text-lg text-colonial-gray">
                Our expert surveyors and analysts deliver precise data and actionable insights that guide informed decision-making from project conception through completion.
              </p>
            </div>
            <div className="bg-gradient-to-br from-colonial-blue/10 to-colonial-purple/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Key Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Boundary & Topographic Surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Construction Layout & As-Built Surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Feasibility Analysis & Site Assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Market Research & Demand Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Environmental & Geotechnical Studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Cost-Benefit Analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-colonial-navy text-center mb-12">
            Professional Survey Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">GPS/GNSS Surveys</h3>
              <p className="text-colonial-gray">
                High-precision GPS control surveys and GNSS positioning for accurate georeferencing and boundary determination.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📷</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">3D Laser Scanning</h3>
              <p className="text-colonial-gray">
                Advanced 3D laser scanning and point cloud processing for detailed as-built documentation and modeling.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🚁</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">Aerial Surveys</h3>
              <p className="text-colonial-gray">
                Drone-based aerial photography and photogrammetry for large-scale topographic mapping and volumetric analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feasibility Analysis Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-colonial-navy text-center mb-12">
            Comprehensive Feasibility Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-colonial-navy to-colonial-navy/90 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Site Suitability</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Zoning & land use evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Infrastructure capacity assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Environmental constraints analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Alternative site comparison</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-colonial-blue to-colonial-purple text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Financial Viability</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Cost-benefit analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>ROI projections and scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Risk assessment & mitigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Market demand analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-colonial-gold">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-colonial-navy mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-colonial-navy/80 mb-8">
            Contact us today to discuss your survey and feasibility study needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-colonial-navy text-white rounded-lg font-semibold hover:bg-colonial-navy/90 transition-colors"
            >
              Get a Quote
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
