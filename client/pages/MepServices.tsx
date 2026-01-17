import Navigation from "@/components/Navigation";

export default function MepServices() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#F4B942] leading-tight mb-6">
              MEP DESIGN WITH BIM
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">
              Mechanical, Electrical & Plumbing
            </h2>
          </div>
        </div>
      </section>

      {/* Our MEP Disciplines Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">
              Our MEP Disciplines
            </h2>
          </div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Mechanical */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#E0F2FE]">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl text-[#0EA5E9]">❄️</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6 text-center">
                Mechanical
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">HVAC Systems Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Duct Routing & Sizing</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Ventilation Systems</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Fire Protection</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Load Calculations</span>
                </li>
              </ul>
            </div>

            {/* Electrical */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#FEF9E7]">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl text-[#F59E0B]">⚡</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6 text-center">
                Electrical
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Power Distribution</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Lighting Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Cable Tray Layout</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Emergency Systems</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Low Voltage Systems</span>
                </li>
              </ul>
            </div>

            {/* Plumbing */}
            <div className="p-8 md:p-10 lg:p-12 rounded-[12px] bg-[#D1FAE5]">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-5xl text-[#10B981]">💧</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-[28px] font-bold text-[#2C3E50] mb-6 text-center">
                Plumbing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Water Supply Systems</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Drainage Design</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Sanitary Systems</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Pipe Routing</span>
                </li>
                <li className="flex items-start gap-3 text-[#2C3E50]">
                  <span className="text-sm mt-1">•</span>
                  <span className="text-base">Fixture Layout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BIM Integration Advantages Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">
              BIM Integration Advantages
            </h2>
          </div>

          {/* Two Row Grid */}
          <div className="max-w-5xl mx-auto space-y-6">
            {/* First Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Clash-Free MEP Coordination</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Real-Time Collaboration</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Accurate Quantity Takeoffs</span>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Optimized Space Utilization</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Energy Analysis & Simulation</span>
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-[#2C3E50] font-medium">Automated Documentation</span>
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
              Optimize Your MEP Systems with BIM
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Experience seamless coordination and efficiency in mechanical, electrical, and plumbing design.
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
