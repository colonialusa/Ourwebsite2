import { Link } from "react-router-dom";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 overflow-y-auto">
        <div className="relative bg-white rounded-[24px] shadow-2xl max-w-6xl w-full mx-4 my-8 p-8 md:p-12">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl text-gray-400">×</span>
          </button>

          {/* Header */}
          <div className="mb-8 md:mb-10 border-l-4 border-[#F4B942] pl-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-2">
              Our Services & Expertise
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Services */}
            <div>
              <h3 className="text-2xl font-bold text-[#F4B942] mb-6">
                Services
              </h3>

              {/* BIM Services */}
              <div className="mb-8">
                <Link 
                  to="/bim-services"
                  onClick={onClose}
                  className="text-xl font-bold text-[#0EA5E9] hover:text-[#0EA5E9]/80 transition-colors mb-3 inline-block"
                >
                  BIM Services
                </Link>
                <ul className="space-y-2 ml-4">
                  <li><Link to="/services/3d-modeling" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• 3D Modeling</Link></li>
                  <li><Link to="/services/4d-5d-construction" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• 4D/5D Construction Simulation</Link></li>
                  <li><Link to="/services/vr-ar-construction" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• VR/AR Based Construction</Link></li>
                  <li><Link to="/architectural-design" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• Architectural Design</Link></li>
                  <li><Link to="/services/structural-engineering" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• Structural Engineering Design</Link></li>
                </ul>
              </div>

              {/* BIM Consulting */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#0EA5E9] mb-3">
                  BIM Consulting
                </h4>
                <ul className="space-y-2 ml-4">
                  <li><Link to="/services/bim-training" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• BIM Training</Link></li>
                  <li><Link to="/services/bim-template-content" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• BIM Template & Content Creation</Link></li>
                  <li><Link to="/services/bim-it-infrastructure" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• BIM IT Infrastructure</Link></li>
                  <li><Link to="/services/bim-strategy-plan" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• BIM Strategy Plan</Link></li>
                  <li><Link to="/services/bim-implementation" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• BIM Implementation</Link></li>
                </ul>
              </div>

              {/* CAD Drafting */}
              <div>
                <h4 className="text-xl font-bold text-[#0EA5E9] mb-3">
                  CAD Drafting
                </h4>
                <ul className="space-y-2 ml-4">
                  <li><Link to="/services/scanned-drawing-conversion" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• Scanned Drawing Conversion</Link></li>
                  <li><Link to="/services/redline-markups" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• Redline Markups</Link></li>
                  <li><Link to="/services/indexing-renaming" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• Indexing and Renaming</Link></li>
                  <li><Link to="/services/bulk-drawing-conversions" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• Bulk Drawing Conversions</Link></li>
                  <li><Link to="/services/landscaping" onClick={onClose} className="text-gray-600 text-sm hover:text-[#0EA5E9] transition-colors">• Landscaping</Link></li>
                </ul>
              </div>
            </div>

            {/* Right Column - Industry Verticals */}
            <div>
              <h3 className="text-2xl font-bold text-[#F4B942] mb-6">
                Industry Verticals
              </h3>

              <div className="space-y-4 mb-8">
                {/* Architects */}
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <span className="font-semibold text-[#2C3E50]">Architects</span>
                  </div>
                  <span className="text-[#F4B942]">→</span>
                </div>

                {/* Owners */}
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    <span className="font-semibold text-[#2C3E50]">Owners</span>
                  </div>
                  <span className="text-[#F4B942]">→</span>
                </div>

                {/* Plant Engineering */}
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏭</span>
                    <span className="font-semibold text-[#2C3E50]">Plant Engineering</span>
                  </div>
                  <span className="text-[#10B981]">→</span>
                </div>

                {/* Engineers */}
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚙️</span>
                    <span className="font-semibold text-[#2C3E50]">Engineers</span>
                  </div>
                  <span className="text-[#0EA5E9]">→</span>
                </div>

                {/* Contractors */}
                <div className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔨</span>
                    <span className="font-semibold text-[#2C3E50]">Contractors</span>
                  </div>
                  <span className="text-[#EF4444]">→</span>
                </div>
              </div>

              {/* Autodesk Services */}
              <div className="p-6 rounded-[12px] bg-[#2C3E50] text-white">
                <h4 className="text-xl font-bold text-[#F4B942] mb-2">
                  Autodesk Services
                </h4>
                <p className="text-sm text-white/80">
                  Authorized Training Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
