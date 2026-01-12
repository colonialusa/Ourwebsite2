import { Link } from "react-router-dom";

export default function ArchitecturalDesign() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 xl:px-[50px] pt-4 md:pt-6 lg:pt-[30px]">
        <div className="mx-auto max-w-[1820px] h-[60px] md:h-[70px] lg:h-[80px] rounded-[30px] md:rounded-[35px] lg:rounded-[40px] border border-colonial-border bg-white flex items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9178f14664a332d98928a8d74f4bfbf96ad1fa80?width=270" 
              alt="Colonial Consultants Logo" 
              className="h-[40px] md:h-[45px] lg:h-[50px] w-auto"
            />
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link 
              to="/" 
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg bg-colonial-gold/10 text-colonial-navy font-semibold text-sm xl:text-[15px] hover:bg-colonial-gold/20 transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/about" 
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Get Quote Button */}
          <button className="px-6 md:px-8 lg:px-10 xl:px-[45px] py-3 md:py-3.5 lg:py-4 rounded-[20px] md:rounded-[22px] lg:rounded-[25px] bg-colonial-navy text-colonial-gold font-semibold text-sm md:text-[15px] hover:bg-colonial-navy/90 transition-colors">
            Get Quote
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#F4B942] leading-tight mb-6">
              ARCHITECTURAL &<br />
              STRUCTURAL DESIGN
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">
              Innovative Design Solutions
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
              Combining aesthetic excellence with structural integrity for buildings
              that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">
              Our Capabilities
            </h2>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Architectural Design Column */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6 md:mb-8">
                Architectural Design
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Conceptual Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Detailed Drawings</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Interior Planning</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">3D Visualization</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Rendering & Animation</span>
                </li>
              </ul>
            </div>

            {/* Structural Engineering Column */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6 md:mb-8">
                Structural Engineering
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Structural Analysis</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Foundation Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Seismic Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Load Calculations</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base md:text-lg">Steel & Concrete Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Let's discuss how our architectural and structural design services can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact" className="px-10 py-5 rounded-[28px] bg-[#F4B942] text-[#2C3E50] font-semibold text-lg hover:bg-[#F4B942]/90 transition-colors">
                Get Started →
              </Link>
              <button className="px-10 py-5 rounded-[28px] border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center">
            <p className="text-white/70">
              © 2024 Colonial Consultants. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
