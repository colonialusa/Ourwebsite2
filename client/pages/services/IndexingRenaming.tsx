import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const IndexingRenaming = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F4B942' }}>
            Indexing and Renaming
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Organize and standardize your CAD drawing files with systematic indexing and naming conventions for easy retrieval and management
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Organization Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                File Naming Standardization
              </h3>
              <p className="text-gray-600 mb-4">
                Implement consistent naming conventions across all CAD files for easy identification
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Industry-standard naming protocols</li>
                <li>• Project-specific conventions</li>
                <li>• Discipline-based organization</li>
                <li>• Automated batch renaming</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🗂️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Drawing Index Creation
              </h3>
              <p className="text-gray-600 mb-4">
                Develop comprehensive indexes and catalogs of all project drawings
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Master drawing lists</li>
                <li>• Sheet index tables</li>
                <li>• Cross-reference matrices</li>
                <li>• Metadata extraction</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Folder Structure Organization
              </h3>
              <p className="text-gray-600 mb-4">
                Create logical folder hierarchies for efficient file storage and retrieval
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Hierarchical folder structures</li>
                <li>• Discipline-based organization</li>
                <li>• Version control folders</li>
                <li>• Archive management</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Metadata Management
              </h3>
              <p className="text-gray-600 mb-4">
                Add and maintain file properties for enhanced searchability and tracking
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Title block information</li>
                <li>• Drawing properties</li>
                <li>• Custom attributes</li>
                <li>• Search optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Organization Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔎</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Easy Retrieval
              </h3>
              <p className="text-gray-600">
                Find drawings quickly with logical naming and organization systems
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Better Management
              </h3>
              <p className="text-gray-600">
                Track and manage drawing revisions and versions efficiently
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Compliance
              </h3>
              <p className="text-gray-600">
                Meet industry standards and project-specific naming requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Organize Your CAD Files Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create a systematic filing and indexing system for your drawings
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Get Organized
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

export default IndexingRenaming;
