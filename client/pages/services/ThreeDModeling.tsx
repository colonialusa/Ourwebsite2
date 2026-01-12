import { Link } from "react-router-dom";

export default function ThreeDModeling() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 xl:px-[50px] pt-4 md:pt-6 lg:pt-[30px]">
        <div className="mx-auto max-w-[1820px] h-[60px] md:h-[70px] lg:h-[80px] rounded-[30px] md:rounded-[35px] lg:rounded-[40px] border border-colonial-border bg-white flex items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9178f14664a332d98928a8d74f4bfbf96ad1fa80?width=270" 
              alt="Colonial Consultants Logo" 
              className="h-[40px] md:h-[45px] lg:h-[50px] w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link to="/" className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors">Home</Link>
          </nav>
        </div>
      </header>

      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#F4B942] leading-tight mb-6">
              3D MODELING
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">
              Precision Visualization & Design
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Transform your concepts into detailed 3D models with our advanced modeling services, enabling better visualization, coordination, and decision-making throughout the project lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Architectural 3D Modeling</h3>
              <p className="text-gray-600 mb-4">Detailed building models including exterior facades, interior spaces, and architectural elements with accurate geometry and material representation.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Building exteriors and facades</li>
                <li>• Interior layouts and finishes</li>
                <li>• Landscape elements</li>
                <li>• Custom families and components</li>
              </ul>
            </div>

            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Structural 3D Modeling</h3>
              <p className="text-gray-600 mb-4">Comprehensive structural models including foundations, columns, beams, slabs, and connections with accurate reinforcement details.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Steel and concrete structures</li>
                <li>• Foundation systems</li>
                <li>• Structural connections</li>
                <li>• Rebar detailing</li>
              </ul>
            </div>

            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">MEP 3D Modeling</h3>
              <p className="text-gray-600 mb-4">Complete mechanical, electrical, and plumbing systems modeling with accurate routing, sizing, and equipment placement.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• HVAC ductwork and equipment</li>
                <li>• Electrical conduits and fixtures</li>
                <li>• Plumbing systems</li>
                <li>• Fire protection systems</li>
              </ul>
            </div>

            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">As-Built Modeling</h3>
              <p className="text-gray-600 mb-4">Convert existing buildings and infrastructure into accurate 3D models using point cloud data and site surveys.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Point cloud to BIM conversion</li>
                <li>• Laser scan processing</li>
                <li>• Existing condition documentation</li>
                <li>• Renovation and retrofit support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Improved Accuracy</h3>
              <p className="text-gray-600">Precise measurements and clash-free coordination</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Better Visualization</h3>
              <p className="text-gray-600">Clear understanding of design intent for all stakeholders</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Faster Delivery</h3>
              <p className="text-gray-600">Streamlined workflows and reduced rework</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Project?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let our expert team create detailed 3D models that bring your vision to life.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-[28px] bg-[#F4B942] text-[#2C3E50] font-semibold text-lg hover:bg-[#F4B942]/90 transition-colors">
            Get Started →
          </Link>
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
