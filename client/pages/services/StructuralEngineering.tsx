import { Link } from "react-router-dom";

export default function StructuralEngineering() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 xl:px-[50px] pt-4 md:pt-6 lg:pt-[30px]">
        <div className="mx-auto max-w-[1820px] h-[60px] md:h-[70px] lg:h-[80px] rounded-[30px] md:rounded-[35px] lg:rounded-[40px] border border-colonial-border bg-white flex items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center">
            <img src="https://api.builder.io/api/v1/image/assets/TEMP/9178f14664a332d98928a8d74f4bfbf96ad1fa80?width=270" alt="Colonial Consultants Logo" className="h-[40px] md:h-[45px] lg:h-[50px] w-auto"/>
          </div>
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link to="/" className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors">Home</Link>
          </nav>
        </div>
      </header>

      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#F4B942] leading-tight mb-6">STRUCTURAL ENGINEERING DESIGN</h1>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">Strength, Safety & Stability</h2>
            <p className="text-lg text-white/90 leading-relaxed">Comprehensive structural engineering services using advanced analysis software to ensure safety, durability, and compliance with all building codes.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Structural Analysis</h3>
              <p className="text-gray-600 mb-4">Advanced finite element analysis and load calculations for all structure types.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Static and dynamic analysis</li>
                <li>• Seismic and wind load analysis</li>
                <li>• Non-linear analysis</li>
                <li>• Performance-based design</li>
              </ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Foundation Design</h3>
              <p className="text-gray-600 mb-4">Complete foundation systems designed for soil conditions and loads.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Shallow foundation design</li>
                <li>• Deep foundation (piles, piers)</li>
                <li>• Mat foundation systems</li>
                <li>• Soil-structure interaction</li>
              </ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Steel & Concrete Design</h3>
              <p className="text-gray-600 mb-4">Detailed design of structural steel and reinforced concrete members.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Steel frame design</li>
                <li>• Concrete beam and column design</li>
                <li>• Connection design</li>
                <li>• Reinforcement detailing</li>
              </ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Retrofit & Strengthening</h3>
              <p className="text-gray-600 mb-4">Structural assessment and strengthening of existing buildings.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Structural condition assessment</li>
                <li>• Seismic retrofit design</li>
                <li>• Load capacity upgrades</li>
                <li>• Repair and rehabilitation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Code Compliance</h3>
              <p className="text-gray-600">Full adherence to international standards</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Advanced Software</h3>
              <p className="text-gray-600">Latest structural analysis tools</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Licensed Engineers</h3>
              <p className="text-gray-600">Certified professional team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Build with Confidence</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Get expert structural engineering design for your project.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-[28px] bg-[#F4B942] text-[#2C3E50] font-semibold text-lg hover:bg-[#F4B942]/90 transition-colors">Get Started →</Link>
        </div>
      </section>

      <footer className="bg-[#2C3E50] text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl text-center">
          <p className="text-white/70">© 2024 Colonial Consultants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
