import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Hammer, Map, Route, TrendingUp, Network } from "lucide-react";

export default function RoadDesign() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex justify-center">
            <div className="max-w-4xl text-center">
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
        </div>
      </section>

      {/* Detailed Overview Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-8">
              Engineering Excellence in Road & Infrastructure Design
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  Road and infrastructure design forms the backbone of modern civilization, connecting communities, enabling commerce, and supporting economic growth. At Colonial Consultants, we bring decades of expertise in transportation engineering to deliver safe, efficient, and sustainable roadway solutions that serve communities for generations. Our comprehensive approach integrates cutting-edge design technology with proven engineering principles to create infrastructure that meets current demands while anticipating future needs.
                </p>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  From local residential streets to major highway interchanges, our team of professional engineers applies rigorous design standards and innovative solutions to every project. We utilize advanced civil design software including AutoCAD Civil 3D, Bentley OpenRoads, and specialized traffic analysis tools to develop comprehensive designs that balance safety, capacity, environmental stewardship, and cost-effectiveness.
                </p>
              </div>
              <div>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  Our road design services encompass the complete project lifecycle from initial corridor studies and alignment selection through final construction documentation and construction support. We conduct detailed analyses of traffic patterns, geometric requirements, pavement structural needs, and drainage systems to develop fully coordinated designs that meet or exceed AASHTO (American Association of State Highway and Transportation Officials) standards and state DOT specifications.
                </p>
                <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                  Safety remains paramount in all our designs. We implement proven safety countermeasures, conduct road safety audits, and design appropriate traffic control features including signalization, signing, and pavement markings. Our designs incorporate context-sensitive solutions that enhance safety for all users including motorists, pedestrians, and cyclists.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F7FA] rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Comprehensive Road Design Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#2C3E50] mb-3">Geometric Design Excellence</h4>
                  <p className="text-sm text-[#2C3E50]/70 mb-3 leading-relaxed">
                    Our geometric design services ensure roadways meet appropriate design standards for their functional classification and traffic demands. We develop horizontal and vertical alignments that balance safety, efficiency, and environmental constraints while minimizing construction costs.
                  </p>
                  <ul className="text-sm text-[#2C3E50]/70 space-y-2">
                    <li>• Horizontal and vertical alignment design</li>
                    <li>• Superelevation and widening calculations</li>
                    <li>• Sight distance analysis and verification</li>
                    <li>• Cross-section development and grading</li>
                    <li>• Intersection and interchange geometry</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#2C3E50] mb-3">Traffic Engineering & Analysis</h4>
                  <p className="text-sm text-[#2C3E50]/70 mb-3 leading-relaxed">
                    Comprehensive traffic analysis ensures roadways provide adequate capacity and level of service. We conduct traffic impact studies, capacity analysis, and signal timing optimization using industry-standard tools including HCS, Synchro, and VISSIM microsimulation.
                  </p>
                  <ul className="text-sm text-[#2C3E50]/70 space-y-2">
                    <li>• Traffic impact studies and assessments</li>
                    <li>• Capacity analysis and level of service</li>
                    <li>• Signal timing and coordination design</li>
                    <li>• Roundabout capacity and safety analysis</li>
                    <li>• Pedestrian and bicycle facility design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Pavement Design & Materials Engineering</h3>
              <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                Durable pavement systems require careful consideration of traffic loadings, subgrade conditions, climate factors, and available materials. Our pavement engineers design both flexible (asphalt) and rigid (concrete) pavement systems using mechanistic-empirical design procedures that predict long-term performance under expected traffic and environmental conditions. We utilize AASHTO pavement design methods and state-specific procedures to develop cost-effective pavement structures that deliver expected service life with minimal maintenance requirements.
              </p>
              <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                Pavement rehabilitation and reconstruction projects demand specialized expertise to evaluate existing pavement conditions and develop appropriate repair strategies. We conduct comprehensive pavement condition surveys, deflection testing, and materials sampling to assess structural adequacy and remaining service life. This data-driven approach enables us to recommend optimal rehabilitation alternatives including overlay, mill and overlay, full-depth reclamation, or complete reconstruction based on life-cycle cost analysis.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-[#2C3E50] mb-3">Flexible Pavement Design</h4>
                  <p className="text-sm text-[#2C3E50]/70">
                    Hot-mix asphalt pavement systems with optimized layer thicknesses, material specifications, and construction requirements for durability and performance.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-[#2C3E50] mb-3">Rigid Pavement Design</h4>
                  <p className="text-sm text-[#2C3E50]/70">
                    Portland cement concrete pavement with appropriate joint spacing, reinforcement, and load transfer systems for heavy-duty applications and long service life.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-[#2C3E50] mb-3">Pavement Rehabilitation</h4>
                  <p className="text-sm text-[#2C3E50]/70">
                    Condition assessment, alternative evaluation, and optimal repair strategies to extend pavement service life cost-effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Drainage & Stormwater Management</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Effective drainage systems protect roadway infrastructure and adjacent properties while managing stormwater runoff to meet environmental regulations. We design comprehensive drainage systems including:
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Roadway surface drainage and cross-slope design</li>
                  <li>• Storm sewer system sizing and layout</li>
                  <li>• Inlet spacing and capacity calculations</li>
                  <li>• Detention/retention basin design</li>
                  <li>• Culvert and bridge hydraulic analysis</li>
                  <li>• Erosion and sediment control planning</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#3498DB] to-[#2980B9] text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Complete Streets & Multimodal Design</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Modern roadway design accommodates all users including pedestrians, cyclists, transit riders, and motorists. Our complete streets approach delivers:
                </p>
                <ul className="space-y-2 text-white/80">
                  <li>• Sidewalk and pedestrian facility design</li>
                  <li>• Bicycle lane and shared-use path design</li>
                  <li>• ADA-compliant accessibility features</li>
                  <li>• Transit stop and station integration</li>
                  <li>• Traffic calming and safety enhancements</li>
                  <li>• Context-sensitive design solutions</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FEF9E7] border-l-4 border-[#F4B942] rounded-r-xl p-8">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Sustainable Infrastructure Design</h3>
              <p className="text-base text-[#2C3E50]/80 mb-4 leading-relaxed">
                Sustainability principles guide our approach to infrastructure design, minimizing environmental impacts while delivering long-term value. We incorporate green infrastructure practices including permeable pavements, bioswales, and low-impact development techniques to manage stormwater naturally. Our designs optimize material selection, reduce earthwork quantities, and consider whole life-cycle costs to promote environmental stewardship and fiscal responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Road Design Services Section */}
      <section className="pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20 bg-white">
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
              <div className="flex justify-center mb-3">
                <Hammer className="w-8 h-8 text-colonial-gold" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                AutoCAD Civil 3D
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <div className="flex justify-center mb-3">
                <Route className="w-8 h-8 text-colonial-gold" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                Bentley OpenRoads
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <div className="flex justify-center mb-3">
                <Network className="w-8 h-8 text-colonial-gold" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                VISSIM
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-colonial-gold" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                HCS
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-[12px] bg-white border border-gray-200 text-center">
              <div className="flex justify-center mb-3">
                <Map className="w-8 h-8 text-colonial-gold" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#2C3E50]">
                SYNCHRO
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-colonial-gold">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy">
              Build Better Roads with Expert Design
            </h2>
            <p className="text-lg md:text-xl text-colonial-navy/80 max-w-2xl mx-auto">
              Transform your infrastructure projects with our comprehensive road design expertise and advanced engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact" className="px-10 py-5 rounded-[28px] bg-colonial-navy text-white font-semibold text-lg hover:bg-colonial-navy/90 transition-colors">
                Get Started →
              </Link>
              <Link to="/services" className="px-10 py-5 rounded-[28px] bg-white text-colonial-navy font-semibold text-lg hover:bg-gray-100 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
