import { Link } from "react-router-dom";

const BIMITInfrastructure = () => {
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
            BIM IT Infrastructure
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Design and implement robust IT infrastructure to support seamless BIM collaboration, data management, and secure project delivery
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Infrastructure Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Cloud Infrastructure Setup
              </h3>
              <p className="text-gray-600 mb-4">
                Configure cloud-based platforms for BIM collaboration and data sharing across distributed teams
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Cloud storage configuration (Autodesk Construction Cloud, BIM 360)</li>
                <li>• Access control and permissions</li>
                <li>• Integration with existing systems</li>
                <li>• Scalable infrastructure design</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Workstation Configuration
              </h3>
              <p className="text-gray-600 mb-4">
                Optimize hardware and software setup for maximum BIM performance and productivity
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Hardware specifications and recommendations</li>
                <li>• Software installation and configuration</li>
                <li>• Performance optimization</li>
                <li>• Remote desktop solutions</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Data Security & Backup
              </h3>
              <p className="text-gray-600 mb-4">
                Implement comprehensive security measures and backup strategies to protect valuable BIM data
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Data encryption protocols</li>
                <li>• Automated backup systems</li>
                <li>• Disaster recovery planning</li>
                <li>• Version control implementation</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Network & Connectivity
              </h3>
              <p className="text-gray-600 mb-4">
                Design high-performance network infrastructure for efficient BIM data transfer and collaboration
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Network bandwidth optimization</li>
                <li>• VPN setup for remote access</li>
                <li>• File server configuration</li>
                <li>• Collaboration server setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Why Invest in BIM IT Infrastructure?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Enhanced Performance
              </h3>
              <p className="text-gray-600">
                Optimized systems ensure smooth operation of resource-intensive BIM applications
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Seamless Collaboration
              </h3>
              <p className="text-gray-600">
                Enable real-time collaboration and data sharing across global teams
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Data Protection
              </h3>
              <p className="text-gray-600">
                Safeguard critical project data with robust security and backup systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Build a Robust BIM IT Infrastructure
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us design and implement the IT backbone for your BIM operations
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Consult Our Experts
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

export default BIMITInfrastructure;
