import { Link } from "react-router-dom";

const BulkDrawingConversions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold" style={{ color: '#2C3E50' }}>
              Company Name
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="hover:opacity-70">Services</Link>
              <Link to="/projects" className="hover:opacity-70">Projects</Link>
              <Link to="/about" className="hover:opacity-70">About</Link>
              <Link to="/contact" className="px-6 py-2 rounded-md text-white hover:opacity-90" style={{ backgroundColor: '#F4B942' }}>
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F4B942' }}>
            Bulk Drawing Conversions
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Process large volumes of CAD drawings efficiently with automated conversion services and consistent quality across all files
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Bulk Conversion Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Format Conversion
              </h3>
              <p className="text-gray-600 mb-4">
                Convert large batches of CAD files between different formats quickly and accurately
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• DWG to PDF conversion</li>
                <li>• AutoCAD version updates</li>
                <li>• Cross-platform conversions</li>
                <li>• Multi-format exports</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Automated Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Utilize scripting and automation tools for high-volume drawing conversions
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Batch processing scripts</li>
                <li>• Template application</li>
                <li>• Standardized output formats</li>
                <li>• Error handling protocols</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Quality Control
              </h3>
              <p className="text-gray-600 mb-4">
                Ensure consistency and accuracy across all converted drawings
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated validation checks</li>
                <li>• Standard compliance verification</li>
                <li>• Error reporting</li>
                <li>• Batch quality assurance</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Archive Migration
              </h3>
              <p className="text-gray-600 mb-4">
                Modernize and standardize legacy CAD archives for current software compatibility
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Legacy file recovery</li>
                <li>• Version upgrades</li>
                <li>• Archive standardization</li>
                <li>• Digital preservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Bulk Conversion Advantages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Time Efficiency
              </h3>
              <p className="text-gray-600">
                Process hundreds of drawings in a fraction of the time of manual conversion
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Cost Effective
              </h3>
              <p className="text-gray-600">
                Reduce labor costs with automated bulk processing solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Consistency
              </h3>
              <p className="text-gray-600">
                Maintain uniform standards across all converted files
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need Large-Scale Drawing Conversion?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us handle your bulk CAD conversion projects efficiently
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Request Bulk Quote
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

export default BulkDrawingConversions;
