import { Link } from "react-router-dom";

const Landscaping = () => {
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
            Landscaping CAD Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Professional landscape design and planning services with detailed CAD drawings for residential and commercial projects
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Landscape Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Site Planning & Layout
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive landscape plans with detailed layouts for plantings, hardscapes, and site features
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Master site plans</li>
                <li>• Grading and drainage plans</li>
                <li>• Hardscape layouts</li>
                <li>• Planting plans</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Irrigation Design
              </h3>
              <p className="text-gray-600 mb-4">
                Efficient irrigation system design with coverage analysis and water management
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Sprinkler system layouts</li>
                <li>• Drip irrigation design</li>
                <li>• Water line routing</li>
                <li>• Controller specifications</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🪨</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Hardscape Details
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed construction drawings for patios, walkways, retaining walls, and outdoor features
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Paving patterns and materials</li>
                <li>• Wall construction details</li>
                <li>• Deck and pergola plans</li>
                <li>• Site furniture placement</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Planting & Vegetation
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed planting schedules with species selection, quantities, and placement
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Plant schedules and specifications</li>
                <li>• Tree and shrub placement</li>
                <li>• Ground cover layouts</li>
                <li>• Seasonal color planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Professional Landscape Design Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Visual Excellence
              </h3>
              <p className="text-gray-600">
                Create beautiful, functional outdoor spaces with professional design
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Accurate Planning
              </h3>
              <p className="text-gray-600">
                Precise CAD drawings ensure proper implementation and material estimation
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Sustainable Solutions
              </h3>
              <p className="text-gray-600">
                Environmentally responsible designs with water conservation and native plants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transform Your Outdoor Space
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get professional landscape design and CAD drafting services
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Start Your Project
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

export default Landscaping;
