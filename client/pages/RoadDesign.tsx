import { Link } from "react-router-dom";

export default function RoadDesign() {
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
              ROAD DESIGN
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">
              Infrastructure Excellence
            </h2>
          </div>
        </div>
      </section>

      {/* Road Design Services Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">
              Road Design Services
            </h2>
          </div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Highway Design */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6">
                Highway Design
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Alignment Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Cross-Section Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Intersection Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Traffic Analysis</span>
                </li>
              </ul>
            </div>

            {/* Urban Roads */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#E0F2FE]">
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6">
                Urban Roads
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Street Networks</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Roundabouts</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Pedestrian Paths</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Bike Lanes</span>
                </li>
              </ul>
            </div>

            {/* Pavement Design */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#FEF9E7]">
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6">
                Pavement Design
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Flexible Pavement</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Rigid Pavement</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Materials Selection</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Drainage Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">
              Software & Tools
            </h2>
          </div>

          {/* Five Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                AutoCAD Civil 3D
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                Bentley OpenRoads
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                VISSIM
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                HCS
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                SYNCHRO
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Build Better Roads with Expert Design
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Transform your infrastructure projects with our comprehensive road design expertise and advanced engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact" className="px-10 py-5 rounded-[28px] bg-[#F4B942] text-[#2C3E50] font-semibold text-lg hover:bg-[#F4B942]/90 transition-colors">
                Get Started →
              </Link>
              <button className="px-10 py-5 rounded-[28px] border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                View Projects
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
