import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  image: string;
}

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, suffix: string = "") {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref, displayValue: `${count}${suffix}` };
}

export default function About() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  
  const projectsCounter = useCountUp(40, 2000, "+");
  const teamCounter = useCountUp(15, 2000, "+");
  const yearsCounter = useCountUp(15, 2000, "+");
  const satisfactionCounter = useCountUp(100, 2000, "%");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('/api/admin/team');
        if (response.ok) {
          const data = await response.json();
          setTeam(data);
        }
      } catch (error) {
        console.error('Failed to fetch team:', error);
      }
    };
    
    fetchTeam();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] lg:pt-[160px] pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-colonial-navy to-colonial-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-colonial-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-colonial-purple rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="text-center space-y-6">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Simply a Better Experience
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We don't just design solutions, we redefine possibilities. Our passionate, innovative teams have partnered with clients to turn challenges into bold, practical outcomes since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-colonial-blue font-bold text-xl md:text-2xl tracking-[2px] mb-6">ABOUT US</div>
              <div className="space-y-4 text-lg text-colonial-gray leading-relaxed">
                <p>
                  Colonial Consultants is built on an old-school idea. Do what you say you'll do, stand behind your work, and treat relationships like they matter.
                </p>
                <p>
                  We support land development projects with a simple goal: move work forward with fewer surprises. That means clear scope, clean deliverables, and communication that doesn't disappear when things get messy. We bring 10 years of civil engineering experience and 8 years of delivery-focused support, backed by licensed professional engineers, and we stay engaged through comment responses and closeout so projects don't stall at the finish line.
                </p>
              </div>

              {/* Additional Info Sections */}
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-colonial-navy mb-2">
                    Local field support. Williamsburg and surrounding area
                  </h3>
                  <p className="text-base text-colonial-gray leading-relaxed">
                    Site work support, coordination, punchlist completion, and fine grading across large areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-colonial-navy mb-2">
                    Nationwide engineering support. Remote friendly
                  </h3>
                  <p className="text-base text-colonial-gray leading-relaxed">
                    Land development documentation and analysis, including survey data post-processing, plan set support, traffic impact support, turn lane warrant evaluations, and parking demand studies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-colonial-navy mb-2">
                    Professional responsibility
                  </h3>
                  <p className="text-base text-colonial-gray leading-relaxed">
                    Our work is supported by licensed professional engineers. When sealing is required, plans and calculations are prepared and sealed by appropriately licensed professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div ref={projectsCounter.ref} className="bg-colonial-blue/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">{projectsCounter.displayValue}</div>
                <div className="text-colonial-gray">Projects Completed</div>
              </div>
              <div ref={teamCounter.ref} className="bg-colonial-gold/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">{teamCounter.displayValue}</div>
                <div className="text-colonial-gray">Expert Team Members</div>
              </div>
              <div ref={yearsCounter.ref} className="bg-colonial-purple/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">{yearsCounter.displayValue}</div>
                <div className="text-colonial-gray">Years Experience</div>
              </div>
              <div ref={satisfactionCounter.ref} className="bg-colonial-green/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">{satisfactionCounter.displayValue}</div>
                <div className="text-colonial-gray">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-colonial-blue font-bold text-xl md:text-2xl tracking-[2px] mb-4">OUR TEAM</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-6">
              Meet the Experts
            </h2>
            <p className="text-lg text-colonial-gray max-w-3xl mx-auto">
              Our dedicated team of professionals brings together decades of experience in engineering, architecture, and project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-colonial-navy mb-2">{member.name}</h3>
                  <p className="text-colonial-gold font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.tagline}</p>
                </div>
              </div>
            ))}
          </div>

          {team.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No team members to display yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-light-bg">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="text-colonial-blue font-bold text-sm tracking-[2px] mb-4">OUR VALUES</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-colonial-gray max-w-3xl mx-auto">
              Our core values shape every project we undertake and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-blue/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Excellence</h3>
              <p className="text-colonial-gray leading-relaxed">
                We pursue the highest standards in every aspect of our work, from initial concept through final delivery.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-purple/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Innovation</h3>
              <p className="text-colonial-gray leading-relaxed">
                We embrace cutting-edge technology and creative thinking to solve complex challenges.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-gold/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Collaboration</h3>
              <p className="text-colonial-gray leading-relaxed">
                We believe the best results come from true partnership with our clients and team members.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Integrity</h3>
              <p className="text-colonial-gray leading-relaxed">
                We operate with transparency, honesty, and unwavering ethical standards in all relationships.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-orange/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Sustainability</h3>
              <p className="text-colonial-gray leading-relaxed">
                We design with the future in mind, prioritizing environmental responsibility and long-term value.
              </p>
            </div>

            {/* Client Focus */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-red/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Client Focus</h3>
              <p className="text-colonial-gray leading-relaxed">
                Your success is our success. We tailor our approach to meet your unique needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="text-colonial-blue font-bold text-sm tracking-[2px] mb-4">OUR APPROACH</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-6">
              How We Deliver Excellence
            </h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Discovery & Planning</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  We begin by deeply understanding your vision, constraints, and objectives through collaborative workshops and site analysis.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Design & Engineering</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  Our multidisciplinary teams leverage advanced BIM technology to create innovative, coordinated solutions that optimize every aspect of your project.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-gold text-colonial-navy rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Collaboration & Coordination</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  We maintain open communication with all stakeholders, conducting clash detection and iterative reviews to ensure seamless execution.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-green text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Support & Delivery</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  From construction administration to post-occupancy evaluation, we're with you every step of the way to ensure successful project outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-navy">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Partner with Colonial Consultants for your next project and discover what sets us apart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-10 py-5 rounded-[35px] bg-colonial-gold text-colonial-navy font-semibold text-lg hover:bg-colonial-gold/90 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link 
              to="/projects" 
              className="px-10 py-5 rounded-[35px] border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a252f]">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Colonial Consultants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
