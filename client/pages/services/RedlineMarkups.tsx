import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const RedlineMarkups = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F4B942' }}>
            Redline Markups
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Incorporate design changes and field markups into your CAD drawings with precision and efficiency
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Markup Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">✏️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Design Change Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Accurately incorporate marked-up revisions into CAD drawings with detailed tracking
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Hand-drawn markup interpretation</li>
                <li>• Annotation incorporation</li>
                <li>• Revision tracking</li>
                <li>• Change documentation</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                As-Built Updates
              </h3>
              <p className="text-gray-600 mb-4">
                Update construction drawings based on field markups and actual conditions
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Field markup processing</li>
                <li>• Dimension verification</li>
                <li>• Detail corrections</li>
                <li>• As-built documentation</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Comment Resolution
              </h3>
              <p className="text-gray-600 mb-4">
                Address and implement reviewer comments and requested modifications
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Comment tracking</li>
                <li>• Change implementation</li>
                <li>• Response documentation</li>
                <li>• Multi-reviewer coordination</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Version Control
              </h3>
              <p className="text-gray-600 mb-4">
                Maintain clear revision history and version tracking throughout the markup process
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Revision numbering</li>
                <li>• Change logs</li>
                <li>• Cloud delta tracking</li>
                <li>• Archive management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Why Choose Our Markup Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Fast Turnaround
              </h3>
              <p className="text-gray-600">
                Quick processing of markups keeps your project on schedule
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Accuracy
              </h3>
              <p className="text-gray-600">
                Precise implementation ensures all changes are captured correctly
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Clear Documentation
              </h3>
              <p className="text-gray-600">
                Comprehensive tracking provides complete revision history
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need Redline Markup Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us handle your design changes and field markups efficiently
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Start Processing Markups
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

export default RedlineMarkups;
