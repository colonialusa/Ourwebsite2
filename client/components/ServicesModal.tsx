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
        className="fixed inset-0 bg-black/50 z-[100] transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-start justify-center pt-20 overflow-y-auto pointer-events-none">
        <div className="relative bg-white rounded-[24px] shadow-2xl max-w-6xl w-full mx-4 my-8 p-8 md:p-12 pointer-events-auto">
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
            {/* Left Column - Design & Survey */}
            <div>
              {/* Design Services */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#0EA5E9] mb-3">
                  Design Services
                </h4>
                <ul className="space-y-1.5 ml-4 text-gray-600 text-sm">
                  <li>• Land Development Design</li>
                  <li>• Site Planning</li>
                  <li>• Subdivision</li>
                  <li>• Construction Documentation</li>
                  <li>• As-built Drawing Sets</li>
                  <li>• Sewerage & Drainage Plans</li>
                  <li>• Grading Plan</li>
                  <li>• Stormwater / Wastewater</li>
                  <li>• Permit Drawings</li>
                  <li>• Utility Design</li>
                </ul>
              </div>

              {/* Survey Drafting */}
              <div>
                <h4 className="text-lg font-bold text-[#0EA5E9] mb-3">
                  Survey Drafting
                </h4>
                <ul className="space-y-1.5 ml-4 text-gray-600 text-sm">
                  <li>• Boundary Survey</li>
                  <li>• As-Built Survey</li>
                  <li>• Topographic Survey</li>
                  <li>• ALTA Survey</li>
                  <li>• Land Title Survey</li>
                  <li>• Plat Survey</li>
                  <li>• Route Survey</li>
                  <li>• Mortgage Survey</li>
                  <li>• Utility Surveys</li>
                  <li>• GIS Mapping</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Transportation & Additional */}
            <div>
              {/* Transportation Design */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#0EA5E9] mb-3">
                  Transportation Design
                </h4>
                <ul className="space-y-1.5 ml-4 text-gray-600 text-sm">
                  <li>• Roadway geometry and alignment</li>
                  <li>• Pavement design</li>
                  <li>• Intersection improvements</li>
                  <li>• Traffic control plans</li>
                  <li>• Driveway design and access permitting</li>
                  <li>• Traffic Impact Analysis (TIA)</li>
                  <li>• Traffic Reports</li>
                </ul>
              </div>

              {/* Additional Services */}
              <div>
                <h4 className="text-lg font-bold text-[#0EA5E9] mb-3">
                  Additional Services
                </h4>
                <ul className="space-y-1.5 ml-4 text-gray-600 text-sm">
                  <li>• PDF to CAD conversion</li>
                  <li>• Point Cloud to CAD/BIM</li>
                  <li>• Steel Shop Drawings</li>
                  <li>• Steel Detailing Services</li>
                  <li>• Parking Layouts</li>
                  <li>• 3D model</li>
                  <li>• Rebar Detailing Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
