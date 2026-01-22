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

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
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
      <section className="py-20 bg-colonial-gold">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-colonial-navy mb-6">
            Need Onsite Support?
          </h2>
          <p className="text-xl text-colonial-navy/80 mb-8">
            Our field teams are ready to support your construction project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-colonial-navy text-white rounded-lg font-semibold hover:bg-colonial-navy/90 transition-colors"
            >
              Request Field Services
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
