import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function BIMTraining() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative bg-[#2C3E50] pt-[140px] md:pt-[160px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#F4B942] leading-tight mb-6">BIM TRAINING</h1>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white mb-6">Empower Your Team</h2>
            <p className="text-lg text-white/90 leading-relaxed">Comprehensive BIM training programs designed to upskill your team and maximize the value of your BIM investment with hands-on practical learning.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 md:mb-16"><h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50]">Training Programs</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Software Training</h3>
              <p className="text-gray-600 mb-4">Master Autodesk Revit, Navisworks, and other BIM tools.</p>
              <ul className="space-y-2 text-gray-600"><li>• Revit Architecture</li><li>• Revit Structure</li><li>• Revit MEP</li><li>• Navisworks</li></ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">BIM Workflow Training</h3>
              <p className="text-gray-600 mb-4">Learn best practices for BIM project execution and collaboration.</p>
              <ul className="space-y-2 text-gray-600"><li>• BIM execution planning</li><li>• Collaboration workflows</li><li>• Model coordination</li><li>• Quality control</li></ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Customized Courses</h3>
              <p className="text-gray-600 mb-4">Tailored training programs based on your specific needs.</p>
              <ul className="space-y-2 text-gray-600"><li>• Company-specific workflows</li><li>• Custom content development</li><li>• On-site training</li><li>• Remote learning options</li></ul>
            </div>
            <div className="p-8 rounded-[12px] bg-[#F5F7FA]">
              <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">Certification Prep</h3>
              <p className="text-gray-600 mb-4">Prepare for Autodesk professional certification exams.</p>
              <ul className="space-y-2 text-gray-600"><li>• Exam preparation courses</li><li>• Practice tests</li><li>• Study materials</li><li>• Expert guidance</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] text-center mb-12">Training Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6"><div className="text-5xl mb-4">🎓</div><h3 className="text-xl font-bold text-[#2C3E50] mb-2">Expert Instructors</h3><p className="text-gray-600">Learn from certified professionals</p></div>
            <div className="text-center p-6"><div className="text-5xl mb-4">💼</div><h3 className="text-xl font-bold text-[#2C3E50] mb-2">Practical Learning</h3><p className="text-gray-600">Hands-on project-based training</p></div>
            <div className="text-center p-6"><div className="text-5xl mb-4">📜</div><h3 className="text-xl font-bold text-[#2C3E50] mb-2">Certification</h3><p className="text-gray-600">Official course completion certificates</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#2C3E50]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Invest in Your Team's Skills</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Transform your workforce with professional BIM training.</p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-[28px] bg-[#F4B942] text-[#2C3E50] font-semibold text-lg hover:bg-[#F4B942]/90 transition-colors">Enroll Now →</Link>
        </div>
      </section>

      <footer className="bg-[#2C3E50] text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl text-center"><p className="text-white/70">© 2024 Colonial Consultants. All rights reserved.</p></div>
      </footer>
    </div>
  );
}
