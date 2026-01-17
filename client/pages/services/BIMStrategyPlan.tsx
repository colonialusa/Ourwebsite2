import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const BIMStrategyPlan = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F4B942' }}>
            BIM Strategy Plan
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Develop comprehensive BIM strategies aligned with your organization's goals, ensuring successful adoption and maximum ROI
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Strategic Planning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                BIM Maturity Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Evaluate your current BIM capabilities and identify areas for improvement and growth
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Current state analysis</li>
                <li>• Maturity level evaluation</li>
                <li>• Gap identification</li>
                <li>• Benchmark comparisons</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Strategic Roadmap Development
              </h3>
              <p className="text-gray-600 mb-4">
                Create detailed implementation plans with clear milestones and measurable objectives
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Phased implementation plan</li>
                <li>• Resource allocation strategy</li>
                <li>• Timeline and milestones</li>
                <li>• Risk mitigation plans</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                Change Management
              </h3>
              <p className="text-gray-600 mb-4">
                Guide organizational transformation with structured change management processes
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Stakeholder engagement strategy</li>
                <li>• Training and upskilling programs</li>
                <li>• Communication plans</li>
                <li>• Adoption monitoring</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#2C3E50' }}>
                ROI & Business Case
              </h3>
              <p className="text-gray-600 mb-4">
                Develop compelling business cases demonstrating BIM value and expected returns
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Cost-benefit analysis</li>
                <li>• Value proposition development</li>
                <li>• Performance metrics definition</li>
                <li>• Success measurement framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#2C3E50' }}>
            Strategic Planning Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Clear Direction
              </h3>
              <p className="text-gray-600">
                Well-defined roadmap ensures focused implementation and resource optimization
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Measurable Success
              </h3>
              <p className="text-gray-600">
                Track progress with defined KPIs and demonstrate tangible business value
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2C3E50' }}>
                Reduced Risk
              </h3>
              <p className="text-gray-600">
                Proactive planning minimizes implementation challenges and costly mistakes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2C3E50' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Develop Your BIM Strategy Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to create a winning BIM strategy for your organization
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4B942', color: '#2C3E50' }}
          >
            Start Strategic Planning
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: '#1a252f' }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BIMStrategyPlan;
