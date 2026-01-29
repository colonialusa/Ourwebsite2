import { Link } from "react-router-dom";
import { useEffect } from "react";

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  // Prevent body scroll when modal is open (iOS fix)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[100] transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[101] overflow-y-auto overscroll-contain -webkit-overflow-scrolling-touch">
        <div className="flex items-start justify-center min-h-full pt-28 md:pt-32 pb-8 px-4">
          <div className="relative bg-white rounded-[24px] shadow-2xl max-w-5xl w-full p-5 md:p-8">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <span className="text-xl text-gray-400">×</span>
            </button>

          {/* Header */}
          <div className="mb-6 md:mb-8 border-l-4 border-[#F4B942] pl-5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-1">
              Our Services & Expertise
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column - Design & Survey */}
            <div>
              {/* Design Services */}
              <div className="mb-5">
                <h4 className="text-base font-bold text-[#0EA5E9] mb-2">
                  Design Services
                </h4>
                <ul className="space-y-1 ml-3 text-gray-600 text-xs">
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
                <h4 className="text-base font-bold text-[#0EA5E9] mb-2">
                  Survey Drafting
                </h4>
                <ul className="space-y-1 ml-3 text-gray-600 text-xs">
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
              <div className="mb-5">
                <h4 className="text-base font-bold text-[#0EA5E9] mb-2">
                  Transportation Design
                </h4>
                <ul className="space-y-1 ml-3 text-gray-600 text-xs">
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
                <h4 className="text-base font-bold text-[#0EA5E9] mb-2">
                  Additional Services
                </h4>
                <ul className="space-y-1 ml-3 text-gray-600 text-xs">
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
      </div>
    </>
  );
}
