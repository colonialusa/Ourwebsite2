import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function BimServices() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#F4B942] leading-tight mb-6">
              BIM SERVICES
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">
              3D Modeling, Coordination & Implementation Consulting
            </h2>
            <p className="text-lg text-white/80">
              Complete Building Information Modeling solutions from detailed 3D modeling to strategic implementation consulting
            </p>
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

      {/* Detailed BIM Overview Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-8">
              Revolutionizing Construction with Building Information Modeling
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  Building Information Modeling (BIM) has transformed the architecture, engineering, and construction (AEC) industry by providing a comprehensive digital representation of physical and functional characteristics of buildings. At Colonial Consultants, we leverage state-of-the-art BIM technology to deliver superior project outcomes, enhanced collaboration, and significant cost savings throughout the project lifecycle.
                </p>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  Our BIM services encompass the entire spectrum from initial conceptual modeling through construction documentation, coordination, and facility management. We create intelligent 3D models that integrate architectural, structural, and MEP (Mechanical, Electrical, and Plumbing) systems, enabling stakeholders to visualize, simulate, and analyze building performance before construction begins.
                </p>
              </div>
              <div>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  The power of BIM lies in its ability to detect clashes and conflicts early in the design phase, reducing costly rework during construction. Our experienced BIM coordinators conduct rigorous clash detection analysis using industry-leading software platforms including Autodesk Revit, Navisworks, and BIM 360. This proactive approach has helped our clients avoid millions of dollars in change orders and schedule delays.
                </p>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  Beyond 3D modeling, we implement 4D scheduling and 5D cost estimation to provide comprehensive project insights. By linking model elements to construction schedules and cost databases, we enable project teams to optimize construction sequences, identify resource constraints, and make data-driven decisions that improve project delivery efficiency.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F7FA] rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Comprehensive BIM Modeling Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-[#2C3E50] mb-3">Architectural BIM</h4>
                  <p className="text-sm text-[#2C3E50]/70 leading-relaxed">
                    Detailed 3D architectural models including walls, floors, roofs, windows, doors, and all building components with accurate geometry, materials, and specifications. Our models support design visualization, code compliance checking, and automated documentation generation.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2C3E50] mb-3">Structural BIM</h4>
                  <p className="text-sm text-[#2C3E50]/70 leading-relaxed">
                    Comprehensive structural modeling of foundations, columns, beams, slabs, and connections with embedded engineering data. Models integrate with structural analysis software for load calculations and code compliance verification.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2C3E50] mb-3">MEP Coordination</h4>
                  <p className="text-sm text-[#2C3E50]/70 leading-relaxed">
                    Detailed mechanical, electrical, and plumbing system models with accurate routing, sizing, and equipment specifications. Full coordination ensures constructability and optimal system performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Advanced BIM Capabilities</h3>
              <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                Our BIM expertise extends beyond traditional 3D modeling to encompass advanced capabilities that deliver maximum value throughout the project lifecycle. We implement Level of Development (LOD) standards ranging from LOD 100 (conceptual) to LOD 500 (as-built), ensuring appropriate model detail for each project phase. This progressive refinement approach optimizes modeling efficiency while meeting stakeholder information requirements.
              </p>
              <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                Clash detection and resolution form a critical component of our BIM coordination process. Using Navisworks and BIM 360 Glue, we conduct comprehensive multi-discipline clash analysis, identifying thousands of potential conflicts before they impact construction. Our coordination meetings bring together architectural, structural, and MEP teams to resolve clashes collaboratively, producing fully coordinated construction documents that minimize field conflicts.
              </p>
              <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                Quantity takeoff and cost estimation leverage the rich data embedded in BIM models. We extract accurate material quantities directly from model elements, eliminating manual measurement errors and accelerating estimation processes. This automated approach produces detailed quantity reports for concrete, steel, mechanical systems, and all building components, supporting precise cost control and procurement planning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">4D Construction Simulation</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Linking BIM models to construction schedules creates powerful 4D simulations that visualize project construction sequences over time. This capability enables contractors to optimize logistics, identify schedule conflicts, and communicate construction phasing to stakeholders effectively.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Construction sequencing visualization</li>
                  <li>• Site logistics planning</li>
                  <li>• Schedule optimization</li>
                  <li>• Stakeholder communication</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#3498DB] to-[#2980B9] text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">5D Cost Management</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Integrating cost data with BIM models and schedules enables dynamic 5D cost management. Track project costs in real-time, analyze cost implications of design changes instantly, and maintain accurate budgets throughout the project lifecycle.
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Real-time cost tracking</li>
                  <li>• Change order impact analysis</li>
                  <li>• Budget forecasting</li>
                  <li>• Value engineering support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIM Consulting & Implementation Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-colonial-blue to-colonial-purple">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4">
              BIM Consulting & Implementation
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Strategic BIM consulting to help your organization maximize technology ROI and transform project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Strategy & Planning */}
            <div className="bg-white rounded-xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Strategy & Planning</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">BIM Readiness Assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">BIM Execution Plan (BEP) Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">Technology Stack Recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">Custom BIM Standards & Protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">ROI Analysis & Performance Metrics</span>
                </li>
              </ul>
            </div>

            {/* Training & Support */}
            <div className="bg-white rounded-xl p-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Training & Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">Staff Training & Capacity Building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">Software Training (Revit, Navisworks, BIM 360)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">Workflow Optimization & Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">Quality Assurance & Model Auditing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl flex-shrink-0">✓</span>
                  <span className="text-colonial-gray">Change Management & Ongoing Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Proven Implementation Methodology
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">1️⃣</div>
                <h4 className="font-bold text-white mb-2">Assessment</h4>
                <p className="text-white/80 text-sm">Evaluate current state and define goals</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">2️⃣</div>
                <h4 className="font-bold text-white mb-2">Planning</h4>
                <p className="text-white/80 text-sm">Develop roadmap and standards</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">3️⃣</div>
                <h4 className="font-bold text-white mb-2">Training</h4>
                <p className="text-white/80 text-sm">Build team capabilities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">4️⃣</div>
                <h4 className="font-bold text-white mb-2">Support</h4>
                <p className="text-white/80 text-sm">Ongoing assistance and optimization</p>
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
