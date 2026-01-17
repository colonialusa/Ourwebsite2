import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const BIMTemplateContent = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F4B942' }}>
            BIM Template & Content Creation
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Standardize your BIM workflows with custom templates, families, and content libraries tailored to your organization's specific requirements
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Our Template Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Custom BIM Templates
              </h3>
              <p className="text-gray-600 mb-4">
                Develop project-specific templates with pre-configured settings, views, sheets, and title blocks
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Project browser organization</li>
                <li>• View templates and filters</li>
                <li>• Sheet templates and layouts</li>
                <li>• Annotation standards</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Custom Family Creation
              </h3>
              <p className="text-gray-600 mb-4">
                Create parametric families for architectural, structural, and MEP components specific to your needs
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Parametric component modeling</li>
                <li>• LOD-based detail levels</li>
                <li>• Manufacturer-specific content</li>
                <li>• Type catalogs and parameters</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Content Library Development
              </h3>
              <p className="text-gray-600 mb-4">
                Build comprehensive libraries of standardized BIM content for consistent project execution
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Centralized content repository</li>
                <li>• Version control systems</li>
                <li>• Content classification and naming</li>
                <li>• Quality assurance protocols</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Standards & Guidelines
              </h3>
              <p className="text-gray-600 mb-4">
                Establish comprehensive BIM standards documentation for consistent implementation across projects
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Modeling standards documentation</li>
                <li>• Naming conventions</li>
                <li>• Layer and color standards</li>
                <li>• Quality control checklists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Benefits of Custom BIM Templates
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Increased Efficiency
              </h3>
              <p className="text-gray-600">
                Reduce setup time and streamline workflows with standardized templates and content
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Quality Consistency
              </h3>
              <p className="text-gray-600">
                Maintain uniform standards across all projects and team members
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Cost Savings
              </h3>
              <p className="text-gray-600">
                Minimize rework and errors through standardized, high-quality content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Standardize Your BIM Workflows?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to develop custom BIM templates and content libraries
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: '#1a252f' }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BIMTemplateContent;
