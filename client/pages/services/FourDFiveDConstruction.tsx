import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function FourDFiveDConstruction() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#F4B942] leading-tight mb-6">4D/5D CONSTRUCTION SIMULATION</h1>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">Time & Cost Integration</h2>
            <p className="text-lg text-white/90 leading-relaxed">Advanced construction sequencing and cost estimation through time-based simulation, enabling better planning, scheduling, and budget management.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">Our 4D/5D Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">4D Construction Sequencing</h3>
              <p className="text-gray-600 mb-4">Link your 3D BIM model with project schedule to visualize construction sequences over time.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Construction phase visualization</li>
                <li>• Schedule optimization</li>
                <li>• Clash detection in time domain</li>
                <li>• Logistics planning</li>
              </ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">5D Cost Estimation</h3>
              <p className="text-gray-600 mb-4">Integrate cost data with 3D models and schedules for real-time budget tracking and forecasting.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Quantity takeoff automation</li>
                <li>• Cost tracking and forecasting</li>
                <li>• Budget scenario analysis</li>
                <li>• Cash flow management</li>
              </ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Site Logistics Simulation</h3>
              <p className="text-gray-600 mb-4">Plan and optimize site layout, material flow, and equipment placement throughout construction phases.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Crane positioning analysis</li>
                <li>• Material staging planning</li>
                <li>• Access route optimization</li>
                <li>• Safety zone management</li>
              </ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Progress Monitoring</h3>
              <p className="text-gray-600 mb-4">Track actual construction progress against planned schedule using visual comparison tools.</p>
              <ul className="space-y-2 text-gray-600">
                <li>• As-built vs. planned comparison</li>
                <li>• Delay impact analysis</li>
                <li>• Progress reporting automation</li>
                <li>• Performance metrics tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Improved Scheduling</h3>
              <p className="text-gray-600">Identify conflicts and optimize construction sequences</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Cost Control</h3>
              <p className="text-gray-600">Real-time budget tracking and accurate forecasting</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Better Communication</h3>
              <p className="text-gray-600">Visual presentation for all stakeholders</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Optimize Your Construction Schedule</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Leverage 4D/5D simulation for better planning and cost management.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-[28px] bg-[#F4B942] text-[#2C3E50] font-semibold text-lg hover:bg-[#F4B942]/90 transition-colors">Get Started →</Link>
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
