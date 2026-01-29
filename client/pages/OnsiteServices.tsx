import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

export default function OnsiteServices() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-colonial-navy to-colonial-navy/90">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center text-white space-y-6">
            <div className="text-colonial-gold text-4xl mb-4">⚒️</div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Onsite Services & Grading Jobs
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professional onsite engineering services and expert grading solutions that ensure your project is built to specification
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-4xl font-bold text-colonial-navy mb-8">
              Expert Construction Staking & Field Engineering Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Construction staking and onsite engineering services provide the critical link between design documents and physical construction, ensuring projects are built accurately according to plans and specifications. At Colonial Consultants, our experienced field crews deliver precise layout services, grade verification, and quality control inspection throughout the construction process. From initial site preparation through final as-built documentation, we provide the field engineering support contractors need to construct projects efficiently while maintaining quality and compliance with design intent.
                </p>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Construction layout begins with establishing primary control networks that provide reference coordinates for all subsequent staking activities. Our survey crews set control points at strategic locations around construction sites using GPS/GNSS positioning and conventional surveying techniques. These control networks undergo rigorous accuracy verification through redundant measurements and network adjustments to ensure they meet project specifications. Contractors rely on these control points to verify equipment calibration and validate independent layout work throughout construction.
                </p>
              </div>
              <div>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Building layout services encompass the complete range of horizontal and vertical staking required for structure construction. Our field engineers establish building corners, offset lines, and reference benchmarks that guide foundation excavation and construction. Column grids, wall lines, and floor elevation references ensure structural elements are positioned accurately in three-dimensional space. This precision staking minimizes costly rework and ensures building components fit together properly during construction. We employ robotic total stations and GPS equipment to achieve the centimeter-level accuracy required for modern construction projects.
                </p>
                <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                  Grading and earthwork services require continuous elevation monitoring and quality control to ensure site grades conform to design elevations and drainage patterns function as intended. Our field crews perform regular grade checks during mass grading operations, providing real-time feedback to equipment operators to maintain proper elevations and slopes. We verify subgrade elevations before pavement construction, check utility trench depths and slopes, and certify final grades meet design requirements. This proactive quality control approach prevents costly grade corrections and drainage failures.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-colonial-navy mb-6">Utility Construction Layout Services</h3>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Underground utility construction demands precise horizontal and vertical control to ensure proper depths, slopes, and clearances. Our utility staking services include centerline layout for water mains, sanitary sewers, storm drains, and electrical conduits. We set offset stakes with cut/fill information to guide excavation equipment operators and verify trench depths meet design specifications. Manhole and structure locations receive precise horizontal positioning to ensure proper alignment with pipe networks. Our field crews coordinate closely with utility contractors to provide timely layout support that keeps construction on schedule.
              </p>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Slope staking for pipe installations requires careful calculation of invert elevations accounting for pipe slopes, structure depths, and ground surface elevations. Our crews provide detailed stake information including horizontal offsets, cut/fill depths, and slope indicators that enable contractors to establish proper pipe grades. We perform intermediate grade checks during pipe laying to verify slopes meet design requirements and adjust as necessary to maintain proper flow characteristics. Final as-built surveys document actual installed positions and elevations for record purposes and future utility maintenance planning.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-colonial-navy mb-6">Roadway and Site Development Staking</h3>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Transportation project staking encompasses roadway centerlines, offset references, vertical control for grading operations, and final pavement control. Our field crews establish centerline stations and offset points that guide earthwork contractors during mass grading operations. We provide cut/fill stakes indicating depths to design grade at regular intervals along roadway alignments. Slope stakes mark the limits of cut and fill slopes, enabling grading contractors to shape roadway embankments and excavations according to design cross-sections.
              </p>
              <p className="text-base text-colonial-gray mb-4 leading-relaxed">
                Curb and gutter layout requires precise horizontal and vertical control to ensure proper positioning, alignment, and drainage characteristics. We set alignment points and grade references that enable concrete contractors to construct curbs with smooth geometry and proper drainage slopes. Pavement edge stakes establish horizontal limits for asphalt or concrete placement. Final pavement surface control references guide paving operations to achieve design elevations and cross-slopes. Our comprehensive staking approach ensures roadway elements integrate properly to provide safe, functional transportation facilities.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-colonial-navy mb-6">
                Precision in the Field
              </h2>
              <p className="text-lg text-colonial-gray mb-6">
                Bring precision to your construction site with our comprehensive onsite services and grading expertise. From initial layout to final certification, our experienced field crews ensure accurate construction and compliance with design specifications.
              </p>
              <p className="text-lg text-colonial-gray">
                Our field teams provide construction staking, inspection, and quality control to keep your project on track and on budget.
              </p>
            </div>
            <div className="bg-gradient-to-br from-colonial-blue/10 to-colonial-purple/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Key Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Construction Staking & Layout Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Grade Checking & Elevation Verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">As-Built Surveys & Documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Grading Plan Development & Review</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Earthwork Quantity Calculations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold text-xl">✓</span>
                  <span className="text-colonial-gray">Final Site Certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Staking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-colonial-navy text-center mb-12">
            Construction Staking Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">Building Layout</h3>
              <p className="text-colonial-gray mb-4">
                Precise building corner and offset staking, foundation and footing layout to ensure accurate construction.
              </p>
              <ul className="text-sm text-colonial-gray space-y-2">
                <li>• Building corners & offsets</li>
                <li>• Foundation layout</li>
                <li>• Column grid staking</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🚧</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">Utility Staking</h3>
              <p className="text-colonial-gray mb-4">
                Underground utility line staking for water, sewer, storm drains, and electrical systems.
              </p>
              <ul className="text-sm text-colonial-gray space-y-2">
                <li>• Water & sewer lines</li>
                <li>• Storm drainage</li>
                <li>• Electrical conduits</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🛣️</div>
              <h3 className="text-xl font-bold text-colonial-navy mb-3">Roadway Staking</h3>
              <p className="text-colonial-gray mb-4">
                Roadway centerline, offset stakes, and curb layout for transportation projects.
              </p>
              <ul className="text-sm text-colonial-gray space-y-2">
                <li>• Centerline staking</li>
                <li>• Offset reference points</li>
                <li>• Curb & gutter layout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grading Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-colonial-navy text-center mb-12">
            Professional Grading Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-colonial-navy to-colonial-navy/90 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Grading Operations</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Mass grading and rough grading</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Fine grading for pavements & structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Slope stability monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Cut/fill volume calculations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Final grade certification</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-colonial-blue to-colonial-purple text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quality Control</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Daily grade checking & reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Elevation conformance verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Drainage flow testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Compaction testing coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-colonial-gold">▸</span>
                  <span>Photo documentation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-colonial-gold/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-colonial-navy mb-6 text-center">
              Why Choose Our Onsite Services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold text-colonial-navy mb-2">Fast Response</h4>
                <p className="text-colonial-gray text-sm">Experienced field crews ready when you need them</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✓</div>
                <h4 className="font-bold text-colonial-navy mb-2">Accurate Results</h4>
                <p className="text-colonial-gray text-sm">Precision layout and grade control</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📋</div>
                <h4 className="font-bold text-colonial-navy mb-2">Detailed Reports</h4>
                <p className="text-colonial-gray text-sm">Comprehensive documentation and certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-colonial-navy">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Onsite Support?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our field teams are ready to support your construction project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-colonial-gold text-colonial-navy rounded-lg font-semibold hover:bg-colonial-gold/90 transition-colors"
            >
              Get Started →
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-white text-colonial-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
