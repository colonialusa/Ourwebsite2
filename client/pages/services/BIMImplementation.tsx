import { Link } from "react-router-dom";

const BIMImplementation = () => {
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
            BIM Implementation
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Expert guidance and hands-on support for successful BIM adoption across your organization, from pilot projects to full-scale rollout
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Implementation Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Pilot Project Execution
              </h3>
              <p className="text-gray-600 mb-4">
                Launch controlled pilot projects to validate workflows and build team confidence
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Project selection and scoping</li>
                <li>• Team setup and training</li>
                <li>• Process documentation</li>
                <li>• Lessons learned capture</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Process Development
              </h3>
              <p className="text-gray-600 mb-4">
                Design and document standardized BIM workflows tailored to your operations
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Workflow mapping and optimization</li>
                <li>• Standard operating procedures</li>
                <li>• Quality control protocols</li>
                <li>• Collaboration frameworks</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Organizational Support
              </h3>
              <p className="text-gray-600 mb-4">
                Provide ongoing guidance and mentorship throughout the implementation journey
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Dedicated BIM consultant support</li>
                <li>• Technical troubleshooting</li>
                <li>• Best practice guidance</li>
                <li>• Knowledge transfer sessions</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Performance Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Track implementation progress and measure outcomes against defined objectives
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• KPI dashboard development</li>
                <li>• Progress reporting</li>
                <li>• Issue tracking and resolution</li>
                <li>• Continuous improvement programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Implementation Success Factors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Proven Methodology
              </h3>
              <p className="text-gray-600">
                Structured approach ensures smooth transition and minimizes disruption
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Experienced consultants provide hands-on support throughout implementation
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Sustainable Adoption
              </h3>
              <p className="text-gray-600">
                Build internal capabilities for long-term BIM success and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Implement BIM Successfully?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts guide your BIM implementation from planning to full adoption
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Begin Implementation
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

export default BIMImplementation;
