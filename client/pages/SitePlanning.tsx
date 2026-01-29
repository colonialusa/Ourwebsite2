import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function SitePlanning() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-colonial-navy pt-[100px] md:pt-[120px] lg:pt-[140px] pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex justify-center">
            <div className="max-w-3xl space-y-6 md:space-y-8 text-center">
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-colonial-gold">
                SITE PLANNING
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white">
                Strategic Planning & Analysis
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-[18px] text-[#E8E8E8] leading-relaxed">
                Comprehensive site analysis, feasibility studies, and master planning
                for optimal land utilization and project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-4xl font-bold text-colonial-navy mb-8">
              Comprehensive Site Planning & Development Design Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Site planning and development design transform raw land into functional, sustainable, and economically viable projects that serve community needs while respecting environmental resources. At Colonial Consultants, our multidisciplinary site planning team integrates civil engineering, landscape architecture, environmental science, and urban planning expertise to create comprehensive site designs that optimize land use, minimize development costs, and achieve regulatory compliance. From initial feasibility analysis through final construction documents, we guide clients through the complete site development process with technical excellence and creative problem-solving.
                </p>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Successful site planning begins with thorough site analysis examining topography, soils, hydrology, vegetation, utilities, access, and regulatory constraints. Our planners conduct detailed investigations to understand site opportunities and limitations, identifying optimal development areas and features requiring protection or special consideration. This analytical foundation informs design decisions that work with natural site conditions rather than against them, reducing grading quantities, preserving valuable trees and natural features, and creating developments that integrate harmoniously with their surroundings.
                </p>
              </div>
              <div>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Grading and drainage design form critical components of site development, establishing proper surface and subsurface drainage while minimizing earthwork quantities and costs. Our engineers utilize advanced civil design software to develop grading plans that balance cut and fill volumes, minimize building pad elevations, and create positive drainage away from structures. We design comprehensive stormwater management systems including storm sewers, detention basins, bioretention areas, and low-impact development features that manage runoff while meeting regulatory requirements and protecting water quality.
                </p>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Utility infrastructure planning ensures adequate water supply, sanitary sewer capacity, stormwater management, and other essential services to support development. We coordinate with utility providers to verify service availability and design on-site distribution systems that deliver utilities efficiently to all development parcels. Our designs consider long-term maintenance access, system expandability, and integration with existing infrastructure networks. This comprehensive utility planning prevents costly redesigns and ensures developments receive essential services reliably and cost-effectively.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-colonial-navy mb-6">Sustainable Site Design Principles</h3>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Environmental sustainability guides our site planning approach, incorporating green infrastructure, natural resource protection, and energy-efficient site design principles. We implement low-impact development (LID) techniques including permeable pavements, rain gardens, bioswales, and green roofs that manage stormwater naturally while reducing infrastructure costs. Native plantings reduce irrigation demands and maintenance requirements while providing habitat value. Site orientation and tree preservation strategies reduce building energy consumption through natural shading and wind protection.
              </p>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Our sustainable design approach extends beyond environmental benefits to encompass economic and social sustainability. Compact development patterns reduce infrastructure extension costs and ongoing maintenance expenses. Mixed-use planning creates walkable communities that reduce vehicle dependence. Complete streets design accommodates pedestrians, bicyclists, and transit users alongside motorists. These sustainable design principles create developments that deliver long-term value while minimizing environmental impacts and operating costs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-6">Regulatory Compliance & Permitting Support</h3>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Navigating complex regulatory requirements demands comprehensive knowledge of zoning ordinances, subdivision regulations, environmental protection laws, and building codes. Our planning team maintains current expertise in local, state, and federal regulations affecting site development. We conduct detailed zoning analysis to verify permitted uses, density calculations, setback requirements, and parking standards. Our designs comply with Americans with Disabilities Act (ADA) requirements, stormwater management regulations, environmental protection standards, and all applicable codes.
              </p>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Permitting support services guide projects through complex approval processes efficiently. We prepare comprehensive permit applications including site plans, grading plans, stormwater management plans, and supporting technical documentation. Our team coordinates with regulatory agencies, responds to review comments, and obtains necessary approvals. This proactive permitting support accelerates project schedules and ensures designs meet all regulatory requirements without costly delays or redesigns. We maintain positive working relationships with review agencies that facilitate efficient permitting processes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Site Planning Services Section */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-colonial-navy text-center mb-10 md:mb-14 lg:mb-16">
            Our Site Planning Services
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Feasibility Studies */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[12px] md:rounded-[14px] lg:rounded-[15px] bg-[#F5F5F5] space-y-4 md:space-y-5 lg:space-y-6">
              <div className="text-4xl md:text-[48px]">📊</div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Feasibility Studies
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray leading-relaxed">
                In-depth analysis of site conditions, zoning regulations, and development potential.
              </p>
            </div>

            {/* Master Planning */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[12px] md:rounded-[14px] lg:rounded-[15px] bg-[#F5F5F5] space-y-4 md:space-y-5 lg:space-y-6">
              <div className="text-4xl md:text-[48px]">🗺️</div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Master Planning
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray leading-relaxed">
                Comprehensive planning strategies for large-scale developments.
              </p>
            </div>

            {/* Topographic Survey */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[12px] md:rounded-[14px] lg:rounded-[15px] bg-[#F5F5F5] space-y-4 md:space-y-5 lg:space-y-6">
              <div className="text-4xl md:text-[48px]">🌍</div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Topographic Survey
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray leading-relaxed">
                Detailed land surveys with contour mapping and elevation analysis.
              </p>
            </div>

            {/* Regulatory Compliance */}
            <div className="p-6 md:p-7 lg:p-[30px] rounded-[12px] md:rounded-[14px] lg:rounded-[15px] bg-[#F5F5F5] space-y-4 md:space-y-5 lg:space-y-6">
              <div className="text-4xl md:text-[48px]">⚖️</div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Regulatory Compliance
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray leading-relaxed">
                Ensuring all plans meet local building codes and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Planning Process Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-colonial-navy text-center mb-10 md:mb-14 lg:mb-16">
            Our Planning Process
          </h2>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
            {/* Step 01 - Site Assessment */}
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-5 lg:space-y-6">
              <div className="relative">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#F4C753"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl md:text-[32px] font-bold text-colonial-navy">01</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Site Assessment
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray">
                Initial site visit and condition analysis
              </p>
            </div>

            {/* Step 02 - Data Collection */}
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-5 lg:space-y-6">
              <div className="relative">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#F4C753"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl md:text-[32px] font-bold text-colonial-navy">02</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Data Collection
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray">
                Survey, geotechnical, environmental data
              </p>
            </div>

            {/* Step 03 - Concept Development */}
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-5 lg:space-y-6">
              <div className="relative">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#F4C753"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl md:text-[32px] font-bold text-colonial-navy">03</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Concept Development
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray">
                Multiple design alternatives
              </p>
            </div>

            {/* Step 04 - Final Deliverables */}
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-5 lg:space-y-6">
              <div className="relative">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#F4C753"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl md:text-[32px] font-bold text-colonial-navy">04</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-colonial-navy">
                Final Deliverables
              </h3>
              <p className="text-sm md:text-[14px] text-colonial-gray">
                Complete site plans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 xl:py-24 bg-colonial-navy overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-30px] md:top-[-40px] lg:top-[-50px] right-[50px] md:right-[100px] lg:right-[200px] w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-colonial-gold/12 rounded-full" />
          <div className="absolute top-[-100px] md:top-[-120px] lg:top-[-150px] left-[20px] md:left-[50px] lg:left-[150px] w-[250px] md:w-[300px] lg:w-[400px] h-[250px] md:h-[300px] lg:h-[400px] bg-colonial-blue/8 rounded-[40px] md:rounded-[50px] lg:rounded-[60px] rotate-[-30deg]" />
          <div className="absolute bottom-[50px] md:bottom-[100px] lg:bottom-[150px] right-[30px] md:right-[50px] lg:right-[100px] w-[150px] md:w-[200px] lg:w-[250px] h-[150px] md:h-[200px] lg:h-[250px] bg-colonial-purple/10 rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl relative z-10 text-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* Label */}
            <div className="text-colonial-gold font-bold text-xs md:text-sm tracking-[2px]">
              READY TO START?
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-tight">
              Transform Your Next Project
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-[19px] text-[#E8E8E8] leading-relaxed md:leading-[30px] lg:leading-[32px] max-w-3xl mx-auto">
              Let our expert team bring your vision to life with cutting-edge BIM
              technology and innovative engineering solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-[30px] justify-center pt-4 md:pt-6">
              <Link to="/contact" className="px-8 md:px-10 lg:px-[50px] py-4 md:py-5 lg:py-6 rounded-[28px] md:rounded-[32px] lg:rounded-[35px] bg-colonial-gold text-colonial-navy font-semibold text-base md:text-lg lg:text-[18px] hover:bg-colonial-gold/90 transition-colors text-center">
                Get Started →
              </Link>
              <Link to="/services" className="px-8 md:px-10 lg:px-[40px] py-4 md:py-5 lg:py-6 rounded-[28px] md:rounded-[32px] lg:rounded-[35px] border-2 border-white text-white font-semibold text-base md:text-lg lg:text-[18px] hover:bg-white/10 transition-colors text-center">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
