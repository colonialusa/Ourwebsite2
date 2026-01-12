import { Link } from "react-router-dom";

export default function BimServices() {
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
              BUILDING INFORMATION<br />
              MODELING
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">
              Advanced 3D Technology
            </h2>
          </div>
        </div>
      </section>

      {/* BIM Advantages Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">
              BIM Advantages
            </h2>
          </div>

          {/* Four Column Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* 95% Clash Detection */}
            <div className="p-8 md:p-10 rounded-[12px] bg-[#F5F7FA] text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl">🎯</span>
                </div>
              </div>
              <div className="text-4xl md:text-[48px] font-bold text-[#2C3E50] mb-3">
                95%
              </div>
              <h3 className="text-xl md:text-[22px] font-bold text-[#2C3E50] mb-2">
                Clash Detection
              </h3>
              <p className="text-sm md:text-[15px] text-[#2C3E50]/70">
                Design conflicts resolved
              </p>
            </div>

            {/* 20-30% Cost Savings */}
            <div className="p-8 md:p-10 rounded-[12px] bg-[#F5F7FA] text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl">💰</span>
                </div>
              </div>
              <div className="text-4xl md:text-[48px] font-bold text-[#2C3E50] mb-3">
                20-30%
              </div>
              <h3 className="text-xl md:text-[22px] font-bold text-[#2C3E50] mb-2">
                Cost Savings
              </h3>
              <p className="text-sm md:text-[15px] text-[#2C3E50]/70">
                Reduced project costs
              </p>
            </div>

            {/* 40% Time Efficiency */}
            <div className="p-8 md:p-10 rounded-[12px] bg-[#F5F7FA] text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl">⏱️</span>
                </div>
              </div>
              <div className="text-4xl md:text-[48px] font-bold text-[#2C3E50] mb-3">
                40%
              </div>
              <h3 className="text-xl md:text-[22px] font-bold text-[#2C3E50] mb-2">
                Time Efficiency
              </h3>
              <p className="text-sm md:text-[15px] text-[#2C3E50]/70">
                Faster delivery
              </p>
            </div>

            {/* 99% Data Accuracy */}
            <div className="p-8 md:p-10 rounded-[12px] bg-[#F5F7FA] text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl">📊</span>
                </div>
              </div>
              <div className="text-4xl md:text-[48px] font-bold text-[#2C3E50] mb-3">
                99%
              </div>
              <h3 className="text-xl md:text-[22px] font-bold text-[#2C3E50] mb-2">
                Data Accuracy
              </h3>
              <p className="text-sm md:text-[15px] text-[#2C3E50]/70">
                Precise information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIM Deliverables Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">
              BIM Deliverables
            </h2>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">3D Architectural Models</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">MEP Coordination Models</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Quantity Takeoffs</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">3D Cost Estimation</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Structural BIM Models</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Clash Detection Reports</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">4D Construction Sequencing</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">As-Built Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Transform Your Projects with BIM
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Leverage cutting-edge Building Information Modeling technology to streamline your construction process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact" className="px-10 py-5 rounded-[28px] bg-[#F4B942] text-[#2C3E50] font-semibold text-lg hover:bg-[#F4B942]/90 transition-colors">
                Get Started →
              </Link>
              <button className="px-10 py-5 rounded-[28px] border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                Schedule Demo
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
