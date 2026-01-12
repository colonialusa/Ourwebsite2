import { Link } from "react-router-dom";

const ScannedDrawingConversion = () => {
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
            Scanned Drawing Conversion
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transform paper drawings and scanned images into accurate, editable CAD files for enhanced accessibility and collaboration
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Our Conversion Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Paper to CAD Conversion
              </h3>
              <p className="text-gray-600 mb-4">
                Convert physical drawings into precise digital CAD format with high accuracy
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Architectural floor plans</li>
                <li>• Structural drawings</li>
                <li>• MEP system drawings</li>
                <li>• Site plans and surveys</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Image to Vector Conversion
              </h3>
              <p className="text-gray-600 mb-4">
                Transform raster images and PDFs into editable vector CAD drawings
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• PDF to DWG conversion</li>
                <li>• TIFF/JPEG to CAD</li>
                <li>• Line art vectorization</li>
                <li>• Text recognition and extraction</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Drawing Enhancement
              </h3>
              <p className="text-gray-600 mb-4">
                Improve converted drawings with proper layering, dimensioning, and annotation
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Layer organization</li>
                <li>• Dimension verification</li>
                <li>• Text standardization</li>
                <li>• Symbol library creation</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Quality Assurance
              </h3>
              <p className="text-gray-600 mb-4">
                Rigorous verification processes ensure accuracy and consistency of converted drawings
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Dimensional accuracy checks</li>
                <li>• Cross-reference validation</li>
                <li>• Format compliance verification</li>
                <li>• Multi-level review process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Conversion Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Digital Accessibility
              </h3>
              <p className="text-gray-600">
                Access and share drawings easily from anywhere with digital formats
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Full Editability
              </h3>
              <p className="text-gray-600">
                Modify and update drawings as needed without starting from scratch
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Preservation
              </h3>
              <p className="text-gray-600">
                Protect valuable drawings from deterioration with digital archiving
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Digitize Your Drawings Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Convert your paper and scanned drawings into editable CAD files
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Get Conversion Quote
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

export default ScannedDrawingConversion;
